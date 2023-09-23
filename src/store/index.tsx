import {
    createContext,
    useContext
} from 'solid-js';

import {
    createStore
} from 'solid-js/store';
import createModalStore, { ModalStoreState } from './modalStore';

interface storeState {
    activeNote: ActiveNote | null

    folders: Folders | {}
    dispatcher: Dispatchers | {}
    settingsFolderId: string | null
    selectedFolderId: string | null
    modals: ModalStoreState
}

interface ActiveNote {
    folderId: string
    noteId: string
}

interface Dispatchers {
    (): void
}

interface FileTreeItem {
    title: string
    color: string
}

interface Folders {
    [folderId: string]: IFolder | undefined
}

interface IFolder extends FileTreeItem {
    folderId: string
    fileCount: number
    notes: Notes | undefined
}

interface Notes {
    [noteId: string]: INote | undefined
}

interface INote extends FileTreeItem {
    noteId: string
    folderId: string
    data: string | null
}

const storeContext = createContext();

export default function StoreProvider(props: any) {
    const [state, setState]: any = createStore({})

    const initialState: storeState = {
        modals: createModalStore(state, setState),

        activeNote: null,
        selectedFolderId: null,
        settingsFolderId: null,

        folders: {},

        dispatcher: {
            setSettingsFolderId(folderId: string | null): void {
                setState("settingsFolderId", folderId)
            },

            setSelectedFolderId(folderId: string | null): void {
                setState("selectedFolderId", folderId)
            },

            addFolder(
                folderId: string,
                title: string,
                color: string
            ): void {
                setState("folders", (folders: Folders) => {
                    const tempFolders = { ...folders }
                    tempFolders[folderId] = {
                        folderId, title, color,
                        fileCount: 0 ,
                        notes: undefined
                    }

                    return tempFolders
                })
            },

            deleteFolder(folderId: string): void {
                setState("folders", (folders: Folders) => {
                    const tempFolders = { ...folders }
                    tempFolders[folderId] = undefined

                    return tempFolders
                })
            },

            setActiveNote(folderId: string, noteId: string): void {
                setState("activeNote", { folderId, noteId })
            },

            addNote(
                folderId: string,
                noteId: string,
                data: string,
                title: string,
                color: string
            ): void {
                setState("folders", (folders: Folders) => {
                    const tempFolders = { ...folders }

                    const folder = { ...tempFolders[folderId] } as IFolder
                    if (!folder) {
                        return tempFolders
                    }

                    let notes = { ...folder.notes } ?? {}
                    notes[noteId] = {
                        folderId,
                        noteId,
                        title,
                        color,
                        data
                    }

                    folder.notes = notes
                    tempFolders[folder.folderId] = folder

                    return tempFolders
                })
            },

            deleteNote(folderId: string, noteId: string) {
                setState("folders", (folders: Folders) => {
                    const tempFolders = { ...folders }

                    let notes = tempFolders[folderId]?.notes
                    if (notes === undefined) {
                        return
                    }

                    notes[noteId] = undefined
                })
            },

            updateFolderTitle(folderId: string, title: string): void {
                setState("folders", (folders: Folders) => {
                    const tempFolders: Folders = { ...folders }
                    if (tempFolders[folderId] === undefined) {
                        return tempFolders
                    }

                    let tempFolder = { ...tempFolders[folderId] } as IFolder
                    tempFolder.title = title

                    tempFolders[folderId] = tempFolder
                    return tempFolders
                })
            }
        }
    }

    setState(initialState)

    return (
        <storeContext.Provider value={state}>
            { props.children }
        </storeContext.Provider>
    )
}

export const useStore = () => useContext(storeContext);

export type { IFolder, INote }

/*
{
    [folderId: string]: {
        folderId: string
        title: string
        color: null
        icon: null
        notes: {
            [noteId: string]: {
                noteId: string
                folderId: string
                title: string
                data: json
            }
        }
    }
}
*/