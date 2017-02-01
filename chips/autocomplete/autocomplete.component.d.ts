import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const TD_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR: any;
export declare class TdAutoCompleteComponent implements ControlValueAccessor {
    private _value;
    /** Callback registered via registerOnTouched (ControlValueAccessor) */
    private _onTouchedCallback;
    /** Callback registered via registerOnChange (ControlValueAccessor) */
    private _onChangeCallback;
    listName: string;
    name: string;
    dividerColor: 'primary' | 'accent' | 'warn';
    placeholder: string;
    searchItems: string[];
    readOnly: boolean;
    required: boolean;
    disabled: boolean;
    autoFocus: boolean;
    max: string | number;
    maxLength: number;
    min: string | number;
    minLength: number;
    value: any;
    itemSelect: EventEmitter<string>;
    focus: EventEmitter<boolean>;
    blur: EventEmitter<boolean>;
    clear(): boolean;
    randomName(): string;
    handleItemSelect(): void;
    handleFocus(): void;
    handleBlur(): void;
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    writeValue(value: any): void;
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    registerOnChange(fn: any): void;
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    registerOnTouched(fn: any): void;
}
