import { FaSolidFolder } from 'solid-icons/fa'
import NoteFile from '../NoteFile';
import { createSignal } from 'solid-js';
import type { IFolder } from '../../store';

interface FolderProps {
    data: IFolder
}

function Folder(props: FolderProps) {
    const [isCollapsed, setCollapsed] = createSignal(false)

    return (
        <div class="folder">
            <div class="folder-header" onClick={() => setCollapsed(!isCollapsed())}>
                <span><FaSolidFolder fill={props.data.color} /></span>
                <span class="">{props.data.title}</span>
            </div>
            { 
                !isCollapsed() && <>
                <div class="folder-pole"></div>
                <div class="files">
                    { props.data.notes &&
                        Object.entries(props.data.notes).map(note => {
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
