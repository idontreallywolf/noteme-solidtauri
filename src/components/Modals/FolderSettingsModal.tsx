import { JSX, createEffect, createSignal, Show } from 'solid-js'
import { FaSolidFolderOpen } from 'solid-icons/fa'
import { useStore } from '../../store'

function FolderSettingsModal(props): JSX.Element {
    const store: any = useStore()
    const [currentFolderName, setCurrentFolderName] = createSignal('')

    let folderNameInputRef: HTMLInputElement | undefined = undefined

    createEffect(() => {
        //setCurrentFolderName(store.folders[store.settingsFolderId].title)
        if (folderNameInputRef && store.settingsFolderId) {
            folderNameInputRef.value = store.folders[store.settingsFolderId].title || 'no name'
        }
    })

    const onCloseButtonClick = () => {
        hideThisWindow()
    }

    const onSaveButtonClick = () => {
        if (folderNameInputRef === undefined) {
            hideThisWindow()
            return
        }

        const folderNameHasBeenModified = currentFolderName() !== folderNameInputRef.value
        if (folderNameHasBeenModified) {
            store.dispatcher.updateFolderTitle(
                store.settingsFolderId,
                folderNameInputRef.value
            )
            folderNameInputRef.value = ''
        }

        hideThisWindow()
    }

    const hideThisWindow = () => store.modals.dispatch.toggleFolderSettingsModal()

    return (
        <Show when={store.modals.viewFolderSettingsModal}>
            <div class="relative flex flex-col gap-5 mx-auto mt-24 h-fit bg-[#223044] p-5 shadow-xl sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 md:w-[600px]">
                <div class="m-auto max-w-md flex flex-col gap-5">
                    <div class="flex flex-col gap-8 items-center">
                        <h1 class="text-2xl text-white font-semibold">Folder Settings</h1>
                        <FaSolidFolderOpen size="128px" fill="#fff"/>
                    </div>
                    <div class="flex flex-col gap-4 items-center">
                        <div class="flex flex-row gap-3 justify-center">
                            <button class="button button-default"><FaSolidFolderOpen fill="yellow"/></button>
                            <input
                                ref={folderNameInputRef}
                                type="text"
                                placeholder="Folder name"
                                class="bg-[#394D69] rounded-md font-semibold px-2 py-1 text-white"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-between gap-2">
                    <button class="button button-default w-full" onClick={onSaveButtonClick}>Save</button>
                    <button class="button button-default w-full" onClick={onCloseButtonClick}>Cancel</button>
                </div>
            </div>
        </Show>
    )
}

export default FolderSettingsModal
