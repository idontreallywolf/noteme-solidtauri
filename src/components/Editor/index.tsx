import {
    createSignal,
    onMount,
    Show
} from 'solid-js';

import {
    FaSolidFloppyDisk,
    FaSolidTrash
} from 'solid-icons/fa';

import { v4 as uuidv4 } from 'uuid';

import SolidEditorJS from "./SolidEditorJS";

function Editor(props: any) {
    const [editor, setEditor] = createSignal<SolidEditorJS | null>(null);
    const [isReady, setIsReady] = createSignal<Boolean>(false);
    const [isEditMode, setIsEditMode] = createSignal<Boolean>();

    const holderId = props.holderId ?? uuidv4();

    onMount(async () => {
        setEditor(new SolidEditorJS({
            data: props.data,
            holderId: holderId,
            readOnly: false
        }));

        await editor()?.instance.isReady;
        setIsEditMode(false);
        setIsReady(true);

        console.log('isReady', isReady());
        console.log('isEditMode', isEditMode());
    });

    const onSave = async () => {
        if (!isReady()) {
            console.log('not ready');
            return;
        }

        const data = await editor()?.save();
        
        if (props.onSave) {
            await props.onSave(data);
        }

        await toggleEditMode();
    }

    const toggleEditMode = async () => {
        await editor()?.toggleReadOnly();
        setIsEditMode(!isEditMode());
    }

    const onDelete = async () => {
        if (props.onDelete) {
            await props.onDelete();
        }
    }

    return (
        <div class="bg-white rounded-2xl py-10 px-14 flex flex-col grow gap-y-2 group border-b border-slate-100">
            <div class="flex w-full p-2 border border-slate-500 rounded-full">
                <button class="rounded-full border border-transparent hover:border-slate-500 p-2"><FaSolidFloppyDisk /></button>
                <button class="rounded-full border border-transparent hover:border-slate-500 p-2"><FaSolidTrash  /></button>
            </div>
            <div id={holderId} class="px-2 flex flex-1">
                <span></span>
                <Show when={!isReady()}>
                    loading...
                </Show>
            </div>
        </div>
    )
}

export default Editor;