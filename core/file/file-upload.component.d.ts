import { EventEmitter } from '@angular/core';
export declare class TdFileUploadComponent {
    private _multiple;
    private _disabled;
    files: FileList | File;
    /**
     * defaultColor?: string
     * Sets browse button color. Uses same color palette accepted as [mdButton] and defaults to 'primary'.
     */
    defaultColor: string;
    /**
     * activeColor?: string
     * Sets upload button color. Uses same color palette accepted as [mdButton] and defaults to 'accent'.
     */
    activeColor: string;
    /**
     * cancelColor?: string
     * Sets cancel button color. Uses same color palette accepted as [mdButton] and defaults to 'warn'.
     */
    cancelColor: string;
    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
     */
    multiple: string | boolean;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     */
    accept: string;
    /**
     * disabled?: boolean
     * Disables [TdFileUploadComponent] and clears selected/dropped files.
     */
    disabled: boolean;
    /**
     * upload?: function
     * Event emitted when upload button is clicked.
     * Emits a [File | FileList] object.
     */
    onUpload: EventEmitter<File | FileList>;
    /**
     * Method executed when upload button is clicked.
     */
    uploadPressed(): void;
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    cancel(): void;
}
