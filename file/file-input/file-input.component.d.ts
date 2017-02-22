import { EventEmitter, Renderer, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';
import { ControlValueAccessor } from '@angular/forms';
export declare const FILE_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TdFileInputLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdFileInputComponent implements ControlValueAccessor {
    private _renderer;
    private _changeDetectorRef;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    private _value;
    value: FileList | File;
    private _multiple;
    private _disabled;
    /** The native `<input type="file"> element */
    private _inputElement;
    readonly inputElement: HTMLInputElement;
    /**
     * color?: string
     * Sets button color. Uses same color palette accepted as [mdButton].
     */
    color: string;
    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
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
     * Disables [TdFileInputComponent] and clears selected/dropped files.
     */
    disabled: boolean;
    /**
     * select?: function
     * Event emitted a file is selected
     * Emits a [File | FileList] object.
     */
    onSelect: EventEmitter<File | FileList>;
    constructor(_renderer: Renderer, _changeDetectorRef: ChangeDetectorRef);
    /**
     * Method executed when a file is selected.
     */
    handleSelect(files: File | FileList): void;
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     */
    clear(): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (_: any) => any;
    onTouched: () => any;
}
