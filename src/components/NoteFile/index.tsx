import { FaSolidFile } from 'solid-icons/fa'
import { INote, useStore } from '../../store'

import { createSignal, createEffect, batch } from 'solid-js'
import FileEditButton from './FileEditButton'
import FileDeleteButton from './FileDeleteButton'

interface NoteFileProps {
    data: INote
}

function NoteFile(props: NoteFileProps) {
    const store: any = useStore()
    const [isHovered, setHovered] = createSignal(false)
    const [file, setFile] = createSignal<INote | null>(null)

    createEffect(() => {
        setFile(props.data)
    })

    const handleNoteNavigation = () => {
        store.dispatcher.setActiveNote(props.data)
    }

    const onEditButtonClick = (clickEvent) => {
        batch(() => {
            store.dispatcher.setSelectedFile(file()!)
            store.modals.dispatch.toggleEditFileModal()
        })
        clickEvent.stopPropagation()
    }

    const onDeleteButtonClick = (clickEvent) => {
        store.dispatcher.deleteNote(file()!.folderId, file()!.noteId)
        clickEvent.stopPropagation()
    }

    return (
        <div class="file justify-between"
            onClick={handleNoteNavigation}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span><FaSolidFile fill={props.data.color}/></span>
            <div class="truncate select-none w-full">{file()?.title}</div>
            <div class="flex flex-row gap-1">
                <FileEditButton
                    onClick={onEditButtonClick}
                    shouldShow={isHovered()}
                />
                <FileDeleteButton
                    onClick={onDeleteButtonClick}
                    shouldShow={isHovered()}
                />
            </div>
        </div>
    )
}

export default NoteFile
