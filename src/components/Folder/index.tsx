import NoteFile from '../NoteFile';
import { createSignal, createEffect } from 'solid-js';
import { IFolder, useStore } from '../../store';
import FolderHeader from './FolderHeader';

interface FolderProps {
    id: string
}

function Folder(props: FolderProps) {
    const store: any = useStore()

    const [isCollapsed, setCollapsed] = createSignal(false)
    const [folderData, setFolderData] = createSignal<IFolder>(
        store.folders[props.id]
    )

    createEffect(() => {
        if (store.folders[props.id].notes === undefined) {
            setCollapsed(true)
            return
        }

        const folderIsEmpty = Object.keys(store.folders[props.id].notes).length > 0
        if(folderIsEmpty) {
            setCollapsed(true)
        }
    })

    return (
        <div class="folder">
            <FolderHeader
                folderData={folderData()}
                collapseHandle={() => setCollapsed(!isCollapsed())}
            />
            {
                !isCollapsed() && <>
                <div class="folder-pole"></div>
                <div class="files">
                    { folderData().notes &&
                        Object.entries(folderData().notes).map(note => {
                            const noteData = note[1]
                            return <NoteFile data={noteData!} />
                        })
                    }
                </div>
                </>
            }
        </div>
    )
}

export default Folder;
