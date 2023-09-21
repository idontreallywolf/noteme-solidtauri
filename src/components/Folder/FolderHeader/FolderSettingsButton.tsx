import { JSX } from "solid-js"
import { FaSolidGear } from 'solid-icons/fa'

interface FolderSettingsButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    shouldShow: boolean
}

function FolderSettingsButton(props: FolderSettingsButtonProps): JSX.Element {
    return <button {...props} class={props.shouldShow ? 'visible' : 'hidden'}>
        <FaSolidGear fill="#fff"/>
    </button>
}

export default FolderSettingsButton
