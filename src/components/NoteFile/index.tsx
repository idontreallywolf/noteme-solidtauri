import { FaSolidFile } from 'solid-icons/fa'
import { Note } from '../../store'

import { createSignal, createEffect } from 'solid-js'
import FileEditButton from './FileEditButton'
import FileDeleteButton from './FileDeleteButton'

interface NoteFileProps {
    data: Note
}

function NoteFile(props: NoteFileProps) {
    const [noteId, setNoteId] = createSignal(props.data.noteId)
    const [isHovered, setHovered] = createSignal(false)

    createEffect(() => {
        setNoteId(props.data.noteId)
    })

    const handleNoteNavigation = () => {
        console.log('navigating to note: ' + props.data.noteId)
    }

    const onEditButtonClick = (clickEvent) => {
        console.log('edit button clicked')
        clickEvent.stopPropagation()
    }

    const onDeleteButtonClick = (clickEvent) => {
        console.log('delete button clicked')
        clickEvent.stopPropagation()
    }

    return (
        <div class="file justify-between"
            onClick={handleNoteNavigation}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            <span><FaSolidFile fill={props.data.color}/></span>
            <div class="truncate select-none w-full">{props.data.title}</div>
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
