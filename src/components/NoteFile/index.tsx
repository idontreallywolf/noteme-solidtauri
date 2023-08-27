import { FaSolidFile } from 'solid-icons/fa'
import { Note } from '../../store'

import { createSignal, createEffect } from 'solid-js'

interface NoteFileProps {
    data: Note
}

function NoteFile(props: NoteFileProps) {
    const [noteId, setNoteId] = createSignal(props.data.noteId)

    createEffect(() => {
        setNoteId(props.data.noteId)
    })

    const handleNoteNavigation = () => {
        console.log('navigating to note: ' + props.data.noteId)
    }

    return (
        <button class="file" onClick={handleNoteNavigation}>
            <span><FaSolidFile fill={props.data.color}/></span>
            <span>{props.data.title}</span>
        </button>
    )
}

export default NoteFile
