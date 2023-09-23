import NoteFile from '../NoteFile';
import { createSignal, createEffect, Show } from 'solid-js';
import { IFolder, Notes, useStore } from '../../store';
import FolderHeader from './FolderHeader';

interface FolderProps {
    id: string
}

function Folder(props: FolderProps) {
    const store: any = useStore()

    const [isCollapsed, setCollapsed] = createSignal(false)
    const [folderData, setFolderData] = createSignal<IFolder>(store.folders[props.id])
    const [folderNotes, setFolderNotes] = createSignal<Notes>(store.folders[props.id].notes ?? undefined)

    createEffect(() => {
        const folder = store.folders[props.id]
        setFolderData(folder)

        const folderHasNotes = folder.notes !== undefined && folder.notes.length > 0
        if (!folderHasNotes) {
            //setCollapsed(true)
        }

        setFolderNotes(store.folders[props.id].notes)
    })

    console.log('before render:', folderData(), folderNotes())

    return (
        <div class="folder">
            <FolderHeader
                folderData={folderData()!}
                collapseHandle={() => setCollapsed(!isCollapsed())}
            />
            <Show when={!isCollapsed()}>
                <div class="folder-pole"></div>
                <Show when={folderNotes()}>
                    <div class="files">
                        {
                            Object.entries(folderNotes()).map(note => {
                                const noteData = note[1]
                                return <NoteFile data={noteData!} />
                            })
                        }
                    </div>
                </Show>
            </Show>
        </div>
    )
}

export default Folder;
