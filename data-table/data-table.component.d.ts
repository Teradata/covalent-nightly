import { EventEmitter, ChangeDetectorRef, TemplateRef, AfterContentInit, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { ITdDataTableSortChangeEvent } from './data-table-column/data-table-column.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
export declare const TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR: any;
export declare enum TdDataTableSortingOrder {
    Ascending,
    Descending,
}
export interface ITdDataTableColumn {
    name: string;
    label: string;
    tooltip?: string;
    numeric?: boolean;
    format?: (value: any) => any;
    nested?: boolean;
    sortable?: boolean;
    hidden?: boolean;
    filter?: boolean;
}
export interface ITdDataTableSelectEvent {
    row: any;
    selected: boolean;
}
export interface ITdDataTableSelectAllEvent {
    rows: any[];
    selected: boolean;
}
export interface ITdDataTableRowClickEvent {
    row: any;
}
export declare enum TdDataTableArrowKeyDirection {
    Ascending,
    Descending,
}
export declare class TdDataTableComponent implements ControlValueAccessor, AfterContentInit {
    private _document;
    private _changeDetectorRef;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    private _value;
    /** Callback registered via registerOnChange (ControlValueAccessor) */
    private _onChangeCallback;
    /** internal attributes */
    private _data;
    private _columns;
    private _selectable;
    private _clickable;
    private _multiple;
    private _allSelected;
    private _indeterminate;
    /** sorting */
    private _sortable;
    private _sortBy;
    private _sortOrder;
    /** shift select */
    private _lastSelectedIndex;
    private _selectedBeforeLastIndex;
    private _lastArrowKeyDirection;
    /** template fetching support */
    private _templateMap;
    _templates: QueryList<TdDataTableTemplateDirective>;
    _rows: QueryList<TdDataTableRowComponent>;
    /**
     * Returns true if all values are selected.
     */
    readonly allSelected: boolean;
    /**
     * Returns true if all values are not deselected
     * and atleast one is.
     */
    readonly indeterminate: boolean;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    value: any;
    /**
     * data?: {[key: string]: any}[]
     * Sets the data to be rendered as rows.
     */
    data: any[];
    /**
     * columns?: ITdDataTableColumn[]
     * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
     * Defaults to [data] keys.
     */
    columns: ITdDataTableColumn[];
    /**
     * selectable?: boolean
     * Enables row selection events, hover and selected row states.
     * Defaults to 'false'
     */
    selectable: boolean;
    /**
     * clickable?: boolean
     * Enables row click events, hover.
     * Defaults to 'false'
     */
    clickable: boolean;
    /**
     * multiple?: boolean
     * Enables multiple row selection. [selectable] needs to be enabled.
     * Defaults to 'false'
     */
    multiple: boolean;
    /**
     * sortable?: boolean
     * Enables sorting events, sort icons and active column states.
     * Defaults to 'false'
     */
    sortable: boolean;
    /**
     * sortBy?: string
     * Sets the active sort column. [sortable] needs to be enabled.
     */
    sortBy: string;
    readonly sortByColumn: ITdDataTableColumn;
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     */
    sortOrder: 'ASC' | 'DESC';
    readonly sortOrderEnum: TdDataTableSortingOrder;
    readonly hasData: boolean;
    /**
     * sortChange?: function
     * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
     * Emits an [ITdDataTableSortChangeEvent] implemented object.
     */
    onSortChange: EventEmitter<ITdDataTableSortChangeEvent>;
    /**
     * rowSelect?: function
     * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectEvent] implemented object.
     */
    onRowSelect: EventEmitter<ITdDataTableSelectEvent>;
    /**
     * rowClick?: function
     * Event emitted when a row is clicked.
     * Emits an [ITdDataTableRowClickEvent] implemented object.
     */
    onRowClick: EventEmitter<ITdDataTableRowClickEvent>;
    /**
     * selectAll?: function
     * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectAllEvent] implemented object.
     */
    onSelectAll: EventEmitter<ITdDataTableSelectAllEvent>;
    constructor(_document: any, _changeDetectorRef: ChangeDetectorRef);
    /**
     * compareWith?: function(row, model): boolean
     * Allows custom comparison between row and model to see if row is selected or not
     * Default comparation is by object reference
     */
    compareWith: (row: any, model: any) => boolean;
    /**
     * Loads templates and sets them in a map for faster access.
     */
    ngAfterContentInit(): void;
    getCellValue(column: ITdDataTableColumn, value: any): string;
    /**
     * Getter method for template references
     */
    getTemplateRef(name: string): TemplateRef<any>;
    /**
     * Clears model (ngModel) of component by removing all values in array.
     */
    clearModel(): void;
    /**
     * Refreshes data table and rerenders [data] and [columns]
     */
    refresh(): void;
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    selectAll(checked: boolean): void;
    /**
     * Checks if row is selected
     */
    isRowSelected(row: any): boolean;
    /**
     * Selects or clears a row depending on 'checked' value if the row is 'selected'
     * handles cntrl clicks and shift clicks for multi-select
     */
    select(row: any, event: Event, currentSelected: number): void;
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     */
    disableTextSelection(): void;
    /**
     * Resets the original onselectstart method.
     */
    enableTextSelection(): void;
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     */
    handleRowClick(row: any, event: Event): void;
    /**
     * Method handle for sort click event in column headers.
     */
    handleSort(column: ITdDataTableColumn): void;
    /**
     * Handle all keyup events when focusing a data table row
     */
    _rowKeyup(event: KeyboardEvent, row: any, index: number): void;
    /**
     * Method to prevent the default events
     */
    blockEvent(event: Event): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (_: any) => any;
    onTouched: () => any;
    private _getNestedValue(name, value);
    /**
     * Does the actual Row Selection
     */
    private _doSelection(row);
    /**
     * Calculate all the state of all checkboxes
     */
    private _calculateCheckboxState();
}
