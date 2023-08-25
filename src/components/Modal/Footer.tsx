import { JSX } from 'solid-js'
import { BooleanState } from "../../types"

interface FooterProps {
    submit?: () => void
    booleanState: BooleanState
}

function Footer(props: FooterProps): JSX.Element {
    return (
        <>
            <div class="flex flex-row px-4 py-2 border-t border-slate-100 justify-between">
                {props.submit &&
                    <button
                        class="button button-white"
                        onClick={props.submit}
                        type="button"
                    >
                        submit
                    </button>
                }
                <button
                    class="button button-white"
                    onClick={() => props.booleanState.set(false)}
                    type="button"
                >
                    close
                </button>
            </div>
        </>
    );
}

export default Footer;
