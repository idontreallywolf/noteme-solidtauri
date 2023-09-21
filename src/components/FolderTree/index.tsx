import { IFolder, useStore } from "../../store"
import Folder from "../Folder"

function FolderTree(props: any) {
    const store: any = useStore()

    return (
        <div class="folders">
            { (Object.keys(store.folders).length > 0 &&
                Object.entries(store.folders).map((folder) => {
                    console.log('folder...')
                    return <Folder id={(folder[1] as IFolder).folderId} />
                }))
                ||
                <span class="text-white">No folders found</span>
            }
        </div>
    )
}

export default FolderTree
