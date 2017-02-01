import { EventEmitter } from '@angular/core';
export declare class TdSearchBoxComponent {
    private _searchVisible;
    private _searchInput;
    value: any;
    readonly searchVisible: boolean;
    /**
     * backIcon?: string
     * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
     * Defaults to 'search' icon.
     */
    backIcon: string;
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
     * alwaysVisible?: boolean
     * Sets if the input should always be visible. Defaults to 'false'.
     */
    alwaysVisible: boolean;
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
     * Method executed when the search icon is clicked.
     */
    searchClicked(): void;
    toggleVisibility(): void;
    handleSearchDebounce(value: string): void;
    handleSearch(value: string): void;
    handleClear(): void;
}
