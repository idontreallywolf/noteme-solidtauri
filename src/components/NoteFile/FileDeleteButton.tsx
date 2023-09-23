import { JSX } from 'solid-js'
import { FaSolidTrash } from 'solid-icons/fa'

interface FileDeleteButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    shouldShow: boolean
}

function FileDeleteButton(props: FileDeleteButtonProps): JSX.Element {
    return <button {...props} class={props.shouldShow ? 'visible' : 'hidden'}>
        <FaSolidTrash fill="#fff"/>
    </button>
}

export default FileDeleteButton
