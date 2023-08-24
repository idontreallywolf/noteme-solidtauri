import { FaSolidFile } from 'solid-icons/fa'

interface NoteFileProps {
    title: string
}

function NoteFile(props: NoteFileProps) {
    return (
        <button class="file">
            <span><FaSolidFile fill='#fff'/>
            </span><span>{ props.title }</span>
        </button>
    )
}

export default NoteFile
