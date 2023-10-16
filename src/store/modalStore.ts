import { batch } from 'solid-js'

interface ModalStoreState {
    viewModalContainer: boolean
    viewFolderSettingsModal: boolean
    viewNewFileModal: boolean
    viewEditFileModal: boolean

    dispatch: Dispatch | {}
}

interface Dispatch {
    (): void
}

function createModalStore(state: any, setState: any): ModalStoreState {
    const initialModalStoreState: ModalStoreState = {
        viewModalContainer: false,
        viewFolderSettingsModal: false,
        viewNewFileModal: false,
        viewEditFileModal: false,

        dispatch: {
            toggleModalContainer(): void {
                setState("modals", "viewModalContainer", (visibility: boolean) => !visibility)
            },

            toggleFolderSettingsModal(): void {
                toggleModal("viewFolderSettingsModal", setState)
            },

            toggleNewFileModal(): void {
                toggleModal("viewNewFileModal", setState)
            },

            toggleEditFileModal(): void {
                toggleModal("viewEditFileModal", setState)
            }
        }
    }

    return initialModalStoreState
}

function toggleModal(modal: string, setState: any): void {
    batch(() => {
        setState("modals", "viewModalContainer", (visibility: boolean) => !visibility)
        setState("modals", modal, (visibility: boolean) => !visibility)
    })
}

export default createModalStore
export type { ModalStoreState }
