import { FaSolidFolder } from 'solid-icons/fa'
import NoteFile from '../NoteFile';
import { createSignal } from 'solid-js';

interface FolderProps {
    title: string
}

function Folder(props: FolderProps) {
    const [isCollapsed, setCollapsed] = createSignal(false)

    return (
        <div class="folder">
            <div class="folder-header" onClick={() => setCollapsed(!isCollapsed())}>
                <span><FaSolidFolder fill='#fff'/></span>
                <span class="">{ props.title }</span>
            </div>
            { 
                !isCollapsed() && <>
                <div class="folder-pole"></div>
                <div class="files">
                    <NoteFile title="math" />
                    <NoteFile title="math" />
                    <NoteFile title="math" />
                    <NoteFile title="math" />
                    <NoteFile title="math" />
                </div>
                </>
            }
        </div>
    )
}

export default Folder;
