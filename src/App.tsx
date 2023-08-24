import Folder from "./components/Folder";
import { FaSolidFolderPlus } from 'solid-icons/fa'
import NoteSearch from "./components/NoteSearch";


function App() {
    return (
        <div class="navbar-left">
            <div class="p-5 flex flex-col gap-2">
                <NoteSearch />
                <button class="button button-default w-full"><FaSolidFolderPlus fill="#fff" />Create Folder</button>
            </div>
            <div class="folders">
                <Folder title="Mathematics" />
            </div>
        </div>
    );
}

export default App;
