import { JSX, batch, Show } from 'solid-js'
import { useStore } from '../../store'
import Input from '../Input'
import { v4 as uuidv4 } from 'uuid'

function NewFileModal(props): JSX.Element {
    const store: any = useStore()

    let newFileNameInput: HTMLInputElement | undefined = undefined;

    const onCancel = () => {
        store.models.dispatch.toggleNewFileModal()
        newFileNameInput!.value = ''
    }

    const onCreateNewFile = () => {
        const folderId = store.selectedFolderId
        const fileId = uuidv4()
        const fileName = newFileNameInput!.value
        const fileIconColor = 'yellow'

        batch(() => {
            store.dispatcher.addNote(
                folderId,
                fileId,
                'sample data',
                fileName,
                fileIconColor
            )
            store.modals.dispatch.toggleNewFileModal()
        })

        newFileNameInput!.value = ''
    }

    return (
        <Show when={store.modals.viewNewFileModal}>
            <div class="flex flex-col gap-4 p-5 bg-slate-800 rounded-md text-white max-w-md">
                <div class="flex flex-col">
                    <div class="text-lg">Create new file:</div>
                    <Input ref={newFileNameInput} placeholder="new file name" />
                </div>
                <div class="flex flex-row justify-center gap-2">
                    <button class="button button-default" onClick={onCreateNewFile}>Create</button>
                    <button class="button button-default" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </Show>
    )
}

export default NewFileModal
