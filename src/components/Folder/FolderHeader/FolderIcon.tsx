import { JSX } from 'solid-js'
import { FaSolidFolder } from 'solid-icons/fa'

interface FolderIconProps {
    color: string
}

function FolderIcon(props: FolderIconProps): JSX.Element {
    return <div><FaSolidFolder fill={props.color} /></div>
}

export default FolderIcon
