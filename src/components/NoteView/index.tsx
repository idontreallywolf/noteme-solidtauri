import Editor from "../Editor";

interface NoteViewProps {}

function NoteView(props: NoteViewProps) {
    const activeNote = null // store.notes.activeNote

    return (
        <>
            <div class="p-5 flex flex-col w-full">
                <div class="p-5">
                    <h1 class="text-white">Mathematics | Math 1</h1>
                </div>
                <Editor  />
            </div>
        </>
    );
}

export default NoteView;