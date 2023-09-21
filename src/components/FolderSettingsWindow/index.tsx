import { JSX, createEffect, createSignal } from 'solid-js'
import { useStore } from '../../store'
import { FaSolidFolderOpen } from 'solid-icons/fa'

function FolderSettingsWindow(props: any): JSX.Element {
    const store: any = useStore()
    const [isVisible, setVisiblity] = createSignal(false)
    const [currentFolderName, setCurrentFolderName] = createSignal('')

    let folderNameInputRef: HTMLInputElement | undefined = undefined

    createEffect(() => {
        setVisiblity(store.viewFolderSettings)
        if (!store.viewFolderSettings) {
            return
        }

        setCurrentFolderName(store.folders[store.settingsFolderId].title)
        if (folderNameInputRef && store.settingsFolderId) {
            folderNameInputRef.value = store.folders[store.settingsFolderId].title || 'no name'
        }
    })

    const onCloseButtonClick = () => {
        hideThisWindow()
    }

    const onSaveButtonClick = () => {
        if (folderNameInputRef === undefined) {
            console.log('ref undefined')
            hideThisWindow()
            return
        }

        const folderNameHasBeenModified = currentFolderName() !== folderNameInputRef.value

        if (folderNameHasBeenModified) {
            console.log('ref modified')
            store.dispatcher.updateFolderTitle(
                store.settingsFolderId,
                folderNameInputRef.value
            )
            folderNameInputRef.value = ''
        }

        console.log('ref not modified')
        hideThisWindow()
    }

    const hideThisWindow = () => store.dispatcher.setViewFolderSettings(false)

    return (
        <div class={`${isVisible() ? 'visible':'hidden'} absolute z-50 top-0 bottom-0 left-0 right-0 flex justify-center bg-[#27374d9a]`}>
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
        </div>
    )
}

export default FolderSettingsWindow
