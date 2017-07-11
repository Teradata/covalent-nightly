import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ICanDisable } from '../../common/common.module';
import { TdFileInputLabelDirective } from '../file-input/file-input.component';
export declare class TdFileUploadBase {
}
export declare const _TdFileUploadMixinBase: (new (...args: any[]) => ICanDisable) & typeof TdFileUploadBase;
export declare class TdFileUploadComponent extends _TdFileUploadMixinBase implements ICanDisable {
    private _changeDetectorRef;
    private _multiple;
    files: FileList | File;
    inputLabel: TdFileInputLabelDirective;
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
    multiple: boolean;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     */
    accept: string;
    /**
     * select?: function
     * Event emitted when a file is selecte.
     * Emits a [File | FileList] object.
     */
    onSelect: EventEmitter<File | FileList>;
    /**
     * upload?: function
     * Event emitted when upload button is clicked.
     * Emits a [File | FileList] object.
     */
    onUpload: EventEmitter<File | FileList>;
    /**
     * cancel?: function
     * Event emitted when cancel button is clicked.
     */
    onCancel: EventEmitter<void>;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    /**
     * Method executed when upload button is clicked.
     */
    uploadPressed(): void;
    /**
     * Method executed when a file is selected.
     */
    handleSelect(files: File | FileList): void;
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    cancel(): void;
    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void;
}
