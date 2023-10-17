import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Underline from '@editorjs/underline';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Quote from '@editorjs/quote';

import {
    defaultData
} from './defaultData';

interface EditorOptions {
    holderId?: string,
    readOnly?: boolean,
    basicTools?: boolean,
    data?: string,

    onSave?: (data: object) => void,
    onDelete?: () => void,
    onCancel?: () => void,
}

interface SolidEditorJS {
    basicToolSet: object;
    advancedToolSet: object;

    instance: EditorJS;

    onSave: (data: object) => void;
    onDelete: () => void;
    onCancel: () => void;
}

class SolidEditorJS {
    constructor(options: EditorOptions) {
        console.log(options.readOnly);
        this.basicToolSet = {
            underline: Underline
        }

        this.advancedToolSet = {
            header: Header,
            underline: Underline,
            table: Table,
            list: List,
            quote: Quote
        }

        let editorData = defaultData;

        if (!!options.data) {
            editorData = JSON.parse(options.data);
        }

        this.instance = new EditorJS({
            autofocus: true,
            holder: options.holderId,
            data: editorData,
            readOnly: options.readOnly,
            tools: options.basicTools ?
                this.basicToolSet :
                this.advancedToolSet
        });
    }

    isReadOnly() {
        return this.instance.readOnly.isEnabled;
    }

    async toggleReadOnly() {
        await this.instance.readOnly.toggle();
    }

    async save() {
        if (this.isReadOnly()) {
            return;
        }

        return await this.instance.save();
    }

    async clear() {
        this.instance.clear();
    }

    async render(data: string) {
        this.instance.render(JSON.parse(data));
    }
}

export default SolidEditorJS;