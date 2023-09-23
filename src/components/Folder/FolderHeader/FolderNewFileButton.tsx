import { JSX } from 'solid-js'
import { FaSolidPlus } from 'solid-icons/fa'

interface FolderNewFileButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>{
    shouldShow: boolean
}

function FolderNewFileButton(props: FolderNewFileButtonProps): JSX.Element {
    return <button {...props} class={props.shouldShow ? 'visible' : 'hidden'}>
        <FaSolidPlus fill="#fff"/>
    </button>
}

export default FolderNewFileButton
