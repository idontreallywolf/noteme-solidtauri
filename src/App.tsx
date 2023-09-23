import Navigation from "./components/Navigation";
import NoteView from "./components/NoteView";
import CreateFileModal from "./components/CreateFileModal";
import ModalContainer from "./components/Modals/ModalContainer";

function App() {
    return (
        <div class="main-container">
            <CreateFileModal />
            <ModalContainer />
            <Navigation />
            <NoteView />
        </div>
    );
}

export default App;
