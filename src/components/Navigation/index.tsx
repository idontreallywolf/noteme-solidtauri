import NoteSearch from "../NoteSearch";
import Logo from "../Logo";
import Folder from "../Folder";
import { FaSolidFolderPlus } from 'solid-icons/fa'

interface NavigationProps {}

function Navigation(props: NavigationProps) {
    return (
        <div class="navbar-left">
            <Logo />
            <div class="p-5 flex flex-col gap-2">
                <NoteSearch />
                <button class="button button-default w-full">
                    <FaSolidFolderPlus fill="#fff" />Create Folder
                </button>
            </div>
            <div class="folders">
                <Folder title="Mathematics" />
            </div>
        </div>
    );
}

export default Navigation;