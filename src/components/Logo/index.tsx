import logo from '../../assets/logo.svg'

function Logo(props: any) {
    return (
        <div class="flex flex-row my-4 p-3 gap-2">
            <img src={logo} width="54px" height="54px" />
            <div class="flex flex-col gap-2">
                <h1 class="text-slate-300">NoteMe</h1>
                <span class="text-slate-500">Your new notetaking app.</span>
            </div>
        </div>
    )
}

export default Logo
