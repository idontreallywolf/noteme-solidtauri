import { JSX } from 'solid-js'
import { FaSolidPen } from 'solid-icons/fa'

interface FileEditButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    shouldShow: boolean
}

function FileEditButton(props: FileEditButtonProps): JSX.Element {
    return <button {...props} class={props.shouldShow ? 'visible' : 'hidden'}>
        <FaSolidPen fill="#fff"/>
    </button>
}

export default FileEditButton