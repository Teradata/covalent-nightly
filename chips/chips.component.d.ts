import { DoCheck, QueryList, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { MdChip, MdInputDirective } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';
export declare const TD_CHIPS_CONTROL_VALUE_ACCESSOR: any;
export declare class TdChipsComponent implements ControlValueAccessor, DoCheck, OnInit {
    /**
     * Implemented as part of ControlValueAccessor.
     */
    private _value;
    private _length;
    private _requireMatch;
    private _readOnly;
    _inputChild: MdInputDirective;
    _chipsChildren: QueryList<MdChip>;
    /**
     * Boolean value that specifies if the input is valid against the provieded list.
     */
    matches: boolean;
    /**
     * Flag that is true when autocomplete is focused.
     */
    focused: boolean;
    /**
     * FormControl for the mdInput element.
     */
    inputControl: FormControl;
    /**
     * Subject to control what items to render in the autocomplete
     */
    subject: Subject<string[]>;
    /**
     * Observable of items to render in the autocomplete
     */
    filteredItems: Observable<string[]>;
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
     * Disables the chips input and chip removal icon.
     */
    readOnly: boolean;
    /**
     * chipAddition?: boolean
     * Disables the ability to add chips. If it doesn't exist chip addition defaults to true.
     */
    chipAddition: boolean;
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
    ngOnInit(): void;
    ngDoCheck(): void;
    /**
     * Returns a list of filtered items.
     */
    filter(val: string): string[];
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * returns 'true' if successful, 'false' if it fails.
     */
    addChip(value: string): boolean;
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    removeChip(value: string): boolean;
    handleFocus(): boolean;
    handleBlur(): boolean;
    /**
     * Programmatically focus the input. Since its the component entry point
     */
    focus(): void;
    /**
     * Passes relevant input key presses.
     */
    _inputKeydown(event: KeyboardEvent): void;
    /**
     * Passes relevant chip key presses.
     */
    _chipKeydown(event: KeyboardEvent, index: number): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (_: any) => any;
    onTouched: () => any;
    /**
     *
     * Method to filter the options for the autocomplete
     */
    private _filter(value);
    /**
     * Get total of chips
     */
    private readonly _totalChips;
    /**
     * Method to focus a desired chip by index
     */
    private _focusChip(index);
    /** Method to focus first chip */
    private _focusFirstChip();
    /** MEthod to focus last chip */
    private _focusLastChip();
}
