import { DoCheck } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const TD_CHIPS_CONTROL_VALUE_ACCESSOR: any;
export declare class TdChipsComponent implements ControlValueAccessor, DoCheck {
    /**
     * Implemented as part of ControlValueAccessor.
     */
    private _value;
    private _length;
    private _requireMatch;
    /**
     * Boolean value that specifies if the input is valid against the provieded list.
     */
    matches: boolean;
    /**
     * Flag that is true when autocomplete is focused.
     */
    focused: boolean;
    /**
     * items?: string[]
     * Enables Autocompletion with the provided list of strings.
     */
    items: string[];
    /**
     * requireMatch?: boolean
     * Validates input against the provided list before adding it to the model.
     * If it doesnt exist, it cancels the event.
     */
    requireMatch: any;
    /**
     * readOnly?: boolean
     * Disables the chip input and removal.
     */
    readOnly: boolean;
    /**
     * placeholder?: string
     * Placeholder for the autocomplete input.
     */
    placeholder: string;
    /**
     * add?: function
     * Method to be executed when string is added as chip through the autocomplete.
     * Sends chip value as event.
     */
    add: EventEmitter<string>;
    /**
     * remove?: function
     * Method to be executed when string is removed as chip with the "remove" button.
     * Sends chip value as event.
     */
    remove: EventEmitter<string>;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    value: any;
    ngDoCheck(): void;
    /**
     * Returns a list of filtered items.
     * Removes the ones that have been added as value.
     */
    readonly filteredItems: string[];
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * returns 'true' if successful, 'false' if it fails.
     */
    addItem(value: string): boolean;
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    removeItem(value: string): boolean;
    handleFocus(): boolean;
    handleBlur(): boolean;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (_: any) => any;
    onTouched: () => any;
}
