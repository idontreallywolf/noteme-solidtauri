import { JSX } from 'solid-js'
import { BooleanState } from '../../types';
import { VsClose } from 'solid-icons/vs'

interface HeaderProps {
    closeModal?: () => void
    booleanState: BooleanState
    children?: JSX.Element
}

function Header(props: HeaderProps) {
    return (
        <>
            <div class="flex flex-row items-center justify-between px-4 py-2">
                <div class="font-bold">{props.children}</div>
                {props.closeModal && (
                    <div>
                        <button
                            onClick={() => props.booleanState.set(false)}
                            class="button"
                            type="button"
                        >
                            <VsClose fill="#000" />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Header;
