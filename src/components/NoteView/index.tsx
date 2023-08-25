import Editor from "../Editor";

interface NoteViewProps {}

function NoteView(props: NoteViewProps) {
    const activeNote = null // store.notes.activeNote

    return (
        <>
            <div class="p-5 flex flex-col w-full">
                <Editor  />
            </div>
        </>
    );
}

export default NoteView;