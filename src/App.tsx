import Navigation from "./components/Navigation";
import NoteView from "./components/NoteView";
import FolderSettingsWindow from "./components/FolderSettingsWindow";
import CreateFileModal from "./components/CreateFileModal";

function App() {
    return (
        <div class="main-container">
            <CreateFileModal />
            <FolderSettingsWindow />
            <Navigation />
            <NoteView />
        </div>
    );
}

export default App;
