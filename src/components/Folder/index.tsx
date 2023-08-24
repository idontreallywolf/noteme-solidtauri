import { FaSolidFolder } from 'solid-icons/fa'
import NoteFile from '../NoteFile';

interface FolderProps {
    title: string
}

function Folder(props: FolderProps) {
    return (
        <div class="folder">
            <div class="folder-pole"></div>
            <div class="folder-header">
                <span><FaSolidFolder fill='#fff'/></span>
                <span class="">{ props.title }</span>
            </div>
            <div class="flex flex-col gap-1 pl-4 pt-1">
                <NoteFile title="math" />
            </div>
        </div>
    )
}

export default Folder;