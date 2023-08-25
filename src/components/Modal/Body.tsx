import { JSX } from 'solid-js'

interface BodyProps {
    children: JSX.Element
}

function Body(props: BodyProps): JSX.Element {
    return (
        <div class="flex flex-col justify-between px-4 py-2">
            {props.children}
        </div>
    );
}

export default Body;
