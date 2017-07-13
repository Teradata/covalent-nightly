import { OnInit, EventEmitter } from '@angular/core';
import { Dir } from '@angular/cdk';
import { MdInputDirective } from '@angular/material';
export declare class TdSearchInputComponent implements OnInit {
    private _dir;
    _input: MdInputDirective;
    value: string;
    /**
     * showUnderline?: boolean
     * Sets if the input underline should be visible. Defaults to 'false'.
     */
    showUnderline: boolean;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 400.
     */
    debounce: number;
    /**
     * placeholder?: string
     * Placeholder for the underlying input component.
     */
    placeholder: string;
    /**
     * searchDebounce: function($event)
     * Event emitted after the [debounce] timeout.
     */
    onSearchDebounce: EventEmitter<string>;
    /**
     * search: function($event)
     * Event emitted after the key enter has been pressed.
     */
    onSearch: EventEmitter<string>;
    /**
     * clear: function()
     * Event emitted after the clear icon has been clicked.
     */
    onClear: EventEmitter<void>;
    /**
     * blur: function()
     * Event emitted after the blur event has been called in underlying input.
     */
    onBlur: EventEmitter<void>;
    readonly isRTL: boolean;
    constructor(_dir: Dir);
    ngOnInit(): void;
    /**
     * Method to focus to underlying input.
     */
    focus(): void;
    handleBlur(): void;
    stopPropagation(event: Event): void;
    handleSearch(event: Event): void;
    clearSearch(): void;
    private _searchTermChanged(value);
}
