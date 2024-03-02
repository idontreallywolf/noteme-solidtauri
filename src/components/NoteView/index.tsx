import { createSignal, createEffect, Show } from "solid-js";
import { IFolder, INote, useStore } from "../../store";
import Editor from "../Editor";

interface NoteViewProps {}

function NoteView(props: NoteViewProps) {
    const store: any = useStore()
    const [noteTitle, setNoteTitle] = createSignal<string>('')

    createEffect(() => {
        if (store.activeNote === null) {
            return
        }

        setNoteTitle(store.activeNote.title)
    })

    return (
        <Show when={store.activeNote} fallback={<span class="text-slate-50 p-8 text-2xl">Select a note.</span>}>
            <div class="p-5 flex flex-col w-full">
                <div class="p-5">
                    <h1 class="text-white">File: { noteTitle() }</h1>
                </div>
                <Editor data={store.activeNote.data} />
            </div>
        </Show>
    );
}

export default NoteView;