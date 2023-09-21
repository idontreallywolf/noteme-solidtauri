import {
    createContext,
    useContext
} from 'solid-js';

import {
    createStore
} from 'solid-js/store';

interface storeState {
    activeNote: ActiveNote | null
    viewFolderSettings: boolean
    folders: Folders | {}
    dispatcher: Dispatchers | {}
    settingsFolderId: string | null
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
        activeNote: null,
        settingsFolderId: null,
        viewFolderSettings: false,
        folders: {},
        dispatcher: {
            setSettingsFolderId(folderId: string | null): void {
                setState("settingsFolderId", folderId)
            },

            setViewFolderSettings(shouldView: boolean): void {
                setState("viewFolderSettings", shouldView)
            },

            addFolder(
                folderId: string,
                title: string,
                color: string
            ): void {
                setState("folders", (folders: Folders) => {
                    console.log("folders", JSON.stringify(folders))
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
                    let notes = tempFolders[folderId]?.notes ?? {}

                    notes[noteId] = {
                        folderId,
                        noteId,
                        title,
                        color,
                        data
                    }

                    tempFolders[folderId]!['notes'] = notes
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

                    // Error occurs here.
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