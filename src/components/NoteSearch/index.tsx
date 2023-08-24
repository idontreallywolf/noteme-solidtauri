function NoteSearch(props: any) {
    const onChange = (event: InputEvent) => {
        event.currentTarget. 
    }

    return (
        <input
            placeholder="search notes ..."
            class="px-2 py-1 rounded-md bg-slate-900 text-slate-200"
            onChange={onChange}
        />
    )
}

export default NoteSearch
