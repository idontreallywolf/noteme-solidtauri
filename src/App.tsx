import Navigation from "./components/Navigation";
import NoteView from "./components/NoteView";
import ModalContainer from "./components/Modals/ModalContainer";

function App() {
    return (
        <div class="main-container">
            <ModalContainer />
            <Navigation />
            <NoteView />
        </div>
    );
}

export default App;
