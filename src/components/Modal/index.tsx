import { JSX } from "solid-js";

import { BooleanState } from '../../types';

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

interface ModalProps {
    booleanState: BooleanState
    header?: JSX.Element
    handleSubmit?: () => void
    handleClose?: () => void
    children?: JSX.Element
}

function Modal(props: ModalProps): JSX.Element {
    if (props.booleanState.get() === false) {
        return null;
    }

    return (
        <div class="absolute z-50 top-0 left-0 right-0 bottom-0 bg-slate-800 bg-opacity-50 flex h-screen">
            <div class="rounded-md shadow-lg bg-white m-auto sm:w-10/12 md:w-[500px]">
                <Header booleanState={props.booleanState} closeModal={props.handleClose}>
                    {props.header}
                </Header>
                <Body>
                    {props.children}
                </Body>
                <Footer booleanState={props.booleanState} submit={props.handleSubmit} />
            </div>
        </div>
    );
}

export default Modal;
