import { useStore } from '../../store'
import Input from '../Input'
import Modal from '../Modal'
import { createSignal, createEffect, batch } from 'solid-js'
import { v4 as uuidv4 } from 'uuid'

function CreateFileModal(props) {
    const [isVisible, setVisibility] = createSignal(false)
    const store: any = useStore()

    let newFileNameInput: HTMLInputElement | undefined = undefined;

    createEffect(() => {
        if (store.viewNewFileModalWindow) {
            setVisibility(true)
            return
        }

        setVisibility(false)
    })

    const onClose = () => {
        store.dispatcher.setViewNewFileModalWindow(false)
        setVisibility(false)
    }

    const onCreateNewFile = () => {
        const folderId = store.selectedFolderId
        batch(() => {
            store.dispatcher.addNote(
                folderId,
                uuidv4(),
                'sample data',
                newFileNameInput!.value,
                'yellow'
            )
            store.dispatcher.setViewNewFileModalWindow(false)
        })
    }

    return (
        <Modal
            booleanState={{ get: isVisible, set: setVisibility }}
            handleClose={onClose}
            handleSubmit={onCreateNewFile}
        >
            <Input ref={newFileNameInput} placeholder="new file name" />
        </Modal>
    )
}

export default CreateFileModal
