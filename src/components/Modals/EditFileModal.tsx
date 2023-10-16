import { JSX, batch, Show, createSignal, createEffect } from 'solid-js'
import { INote, useStore } from '../../store'
import Input from '../Input'
import { v4 as uuidv4 } from 'uuid'

function EditFileModal(props): JSX.Element {
    const store: any = useStore()
    const [error, setError] = createSignal<null | string>(null)
    const [file, setFile] = createSignal<INote | null>(null)

    createEffect(() => {
        if (store.selectedFile === null) {
            return
        }

        setFile(store.selectedFile)
    })

    let fileNameInput: HTMLInputElement | undefined = undefined;

    const onCancel = () => {
        batch(() => {
            store.modals.dispatch.toggleEditFileModal()
            store.dispatcher.setSelectedFile(null)
        })

        fileNameInput!.value = ''
    }

    const onEditFile = () => {
        const fileName = fileNameInput!.value

        if (fileName.length == 0) {
            setError('Invalid file name')
            return
        }

        setError(null)

        batch(() => {
            store.dispatcher.setNoteName(
                file()!.folderId,
                file()!.noteId,
                fileName
            )
            store.modals.dispatch.toggleEditFileModal()
            store.dispatcher.setSelectedFile(null)
        })

        fileNameInput!.value = ''
    }

    return (
        <Show when={store.modals.viewEditFileModal}>
            <div class="flex flex-col gap-4 p-5 bg-slate-800 rounded-md text-white max-w-md">
                <div class="flex flex-col">
                    <div class="text-lg">Edit file:</div>
                    <Input ref={fileNameInput} value={file()?.title} placeholder="file name" />
                </div>
                <Show when={error() !== null} fallback={null}>
                    <span class="text-red-800 bg-red-200 font-semibold pl-2 py-1 rounded-md text-center">{error()}</span>
                </Show>
                <div class="flex flex-row justify-center gap-2">
                    <button class="button button-default" onClick={onEditFile}>Save</button>
                    <button class="button button-default" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </Show>
    )
}

export default EditFileModal
