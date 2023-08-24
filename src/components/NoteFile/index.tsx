import { FaSolidFile } from 'solid-icons/fa'

interface NoteFileProps {
    title: string
}

function NoteFile(props: NoteFileProps) {
    return (
        <button class="px-4 py-1 flex flex-row gap-2 items-center text-white hover:bg-[#394D69] rounded-md">
            <span><FaSolidFile fill='#fff'/>
            </span><span>{ props.title }</span>
        </button>
    )
}

export default NoteFile
