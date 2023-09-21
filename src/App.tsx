import Navigation from "./components/Navigation";
import NoteView from "./components/NoteView";
import FolderSettingsWindow from "./components/FolderSettingsWindow";

function App() {
    return (
        <div class="main-container">
            <FolderSettingsWindow />
            <Navigation />
            <NoteView />
        </div>
    );
}

export default App;
