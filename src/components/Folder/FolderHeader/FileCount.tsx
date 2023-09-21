import { JSX } from 'solid-js'

interface FileCountProps {
    fileCount: number
    isHovered: boolean
}

function FileCount(props: FileCountProps): JSX.Element {
    return <div class={`px-1 ${props.isHovered ? 'hidden' : ''}`}>{props.fileCount}</div>
}

export default FileCount
