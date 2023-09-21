import { createSignal, JSX } from 'solid-js'
import { FaSolidFolderPlus } from 'solid-icons/fa'
import CreateFolderWindow from './CreateFolderWindow'

function CreaterFolderButton(props: any): JSX.Element {
    const [showModal, setShowModal] = createSignal(false)

    return <>
        { showModal() && <CreateFolderWindow closeHandle={() => setShowModal(false)} /> }
        <button class="button button-default w-full" onClick={() => setShowModal(true)}>
            <FaSolidFolderPlus fill="#fff" />Create Folder
        </button>
    </>
}

export default CreaterFolderButton
