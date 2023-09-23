import { JSX, Setter, batch, createSignal } from 'solid-js'
import { IFolder, useStore } from '../../../store'

import FolderIcon from './FolderIcon'
import FolderTitle from './FolderTitle'
import FileCount from './FileCount'
import FolderSettingsButton from './FolderSettingsButton'
import FolderNewFileButton from './FolderNewFileButton'

interface FolderHeaderProps {
    folderData: IFolder
    collapseHandle: Setter<boolean>
}

function FolderHeader(props: FolderHeaderProps): JSX.Element {
    const store: any = useStore()
    const [isHovered, setHovered] = createSignal(false)

    const onSettingsButtonClick = (event) => {
        batch(() => {
            store.dispatcher.setViewFolderSettings(true)
            store.dispatcher.setSettingsFolderId(props.folderData.folderId)
        })
        event.stopPropagation()
    }

    const onNewFileButtonClick = (event) => {
        batch(() => {
            console.log('selecting folder ', props.folderData.folderId)
            store.dispatcher.setSelectedFolderId(props.folderData.folderId)
            store.dispatcher.setViewNewFileModalWindow(true)
        })
        event.stopPropagation()
    }

    return (
        <div class="flex flex-col gap-1">
            <div class="folder-header group justify-between"
                onClick={props.collapseHandle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
 
                <FolderIcon color={props.folderData.color} />
                <FolderTitle folderId={props.folderData.folderId} />
                <div class="flex flex-row gap-1">
                    <FileCount
                        fileCount={props.folderData.fileCount}
                        isHovered={isHovered()}
                    />
                    <FolderNewFileButton
                        onClick={onNewFileButtonClick}
                        shouldShow={isHovered()}
                    />
                    <FolderSettingsButton
                        onClick={onSettingsButtonClick}
                        shouldShow={isHovered()}
                    />
                </div>
            </div>
        </div>
    )
}

export default FolderHeader
