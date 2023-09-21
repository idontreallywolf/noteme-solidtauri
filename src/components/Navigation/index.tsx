import { JSX } from 'solid-js'
import NoteSearch from "../NoteSearch";
import Logo from "../Logo";

import CreaterFolderButton from './partials/CreateFolderButton';
import FolderTree from '../FolderTree';

interface NavigationProps {}

function Navigation(props: NavigationProps): JSX.Element {
    return (
        <div class="navbar-left">
            <Logo />
            <div class="p-5 flex flex-col gap-2">
                <NoteSearch />
                <CreaterFolderButton />
            </div>
            <FolderTree />
        </div>
    );
}

export default Navigation;