import { FaSolidFolderOpen } from 'solid-icons/fa'
import { useStore } from '../../store'
import { v4 as uuidv4 } from 'uuid'

function CreateFolderWindow(props: any) {
    const store: any = useStore();

    let newFolderNameInputRef;

    const handleCreateFolder = () => {
        const newFolderId = uuidv4()
        const newFolderName = newFolderNameInputRef!.value
        const newFolderColor = 'yellow'

        store.dispatcher.addFolder(newFolderId, newFolderName, newFolderColor)
    }

    return (
        <div class="absolute z-50 top-0 bottom-0 left-0 right-0 flex justify-center bg-[#27374d9a]">
            <div class="relative flex flex-col gap-5 mx-auto mt-24 h-fit bg-[#223044] p-5 shadow-xl sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 md:w-[600px]">
                <div class="m-auto max-w-md flex flex-col gap-5">
                    <div class="flex flex-col gap-8 items-center">
                        <h1 class="text-2xl text-white font-semibold">Create new Folder</h1>
                        <FaSolidFolderOpen size="128px" fill="#fff"/>
                    </div>
                    <div class="flex flex-col gap-4 items-center">
                        <span class="text-white">Choose a color and folder name</span>
                        <div class="flex flex-row gap-3 justify-center">
                            <button class="button button-default"><FaSolidFolderOpen fill="yellow"/></button>
                            <input ref={newFolderNameInputRef} class="bg-[#394D69] rounded-md font-semibold px-2 py-1 text-white" type="text" placeholder="Folder name" />
                        </div>
                        <span class="text-white">New folder preview:</span>
                        <div class="folder-header">
                            <span><FaSolidFolderOpen fill="yellow" /></span>
                            <span class="">Folder name</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-between gap-2">
                    <button class="button button-default w-full" onClick={handleCreateFolder}>Create Folder</button>
                    <button class="button button-default w-full">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default CreateFolderWindow