import { JSX, Show } from 'solid-js'
import { useStore } from '../../store'
import FolderSettingsModal from './FolderSettingsModal'
import NewFileModal from './NewFileModal'
import EditFileModal from './EditFileModal'

function ModalContainer(props): JSX.Element {
    const store: any = useStore()

    return (
        <Show when={store.modals.viewModalContainer}>
            <div class="flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 right-0 bg-slate-700 bg-opacity-40 z-50">
                <FolderSettingsModal />
                <NewFileModal />
                <EditFileModal />
            </div>
        </Show>
    )
}

export default ModalContainer
