import { JSX, createEffect, createSignal } from 'solid-js'
import { useStore } from '../../../store'

interface FolderTitleProps {
    folderId: string
}

function FolderTitle(props: FolderTitleProps): JSX.Element {
    const [title, setTitle] = createSignal('')
    const store: any = useStore()

    createEffect(() => {
        setTitle(store.folders[props.folderId].title)
    })

    return <div class="truncate w-full select-none">{title()}</div>
}

export default FolderTitle
