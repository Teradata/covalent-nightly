import { EventEmitter, ElementRef, Renderer2, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk';
import { ControlValueAccessor } from '@angular/forms';
import { ICanDisable } from '../../common/common.module';
export declare const FILE_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TdFileInputLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdFileInputBase {
}
export declare const _TdFileInputMixinBase: (new (...args: any[]) => ICanDisable) & typeof TdFileInputBase;
export declare class TdFileInputComponent extends _TdFileInputMixinBase implements ControlValueAccessor, ICanDisable {
    private _renderer;
    private _changeDetectorRef;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    private _value;
    value: FileList | File;
    private _multiple;
    /** The native `<input type="file"> element */
    _inputElement: ElementRef;
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
    multiple: boolean;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     */
    accept: string;
    /**
     * select?: function
     * Event emitted a file is selected
     * Emits a [File | FileList] object.
     */
    onSelect: EventEmitter<File | FileList>;
    constructor(_renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    /**
     * Method executed when a file is selected.
     */
    handleSelect(files: File | FileList): void;
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     */
    clear(): void;
    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (_: any) => any;
    onTouched: () => any;
}
