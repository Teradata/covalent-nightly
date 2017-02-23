import { EventEmitter, ChangeDetectorRef, TemplateRef, AfterContentInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ITdDataTableSortChangeEvent } from './data-table-column/data-table-column.component';
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
}
export interface ITdDataTableSelectEvent {
    row: any;
    selected: boolean;
}
export interface ITdDataTableSelectAllEvent {
    rows: any[];
    selected: boolean;
}
export declare class TdDataTableComponent implements ControlValueAccessor, AfterContentInit {
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
    private _multiple;
    /** sorting */
    private _sortable;
    private _sortBy;
    private _sortOrder;
    /** template fetching support */
    private _templateMap;
    private _templates;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    value: any;
    /**
     * uniqueId?: string
     * Allows selection by [uniqueId] property.
     */
    uniqueId: string;
    /**
     * data?: {[key: string]: any}[]
     * Sets the data to be rendered as rows.
     */
    data: Object[];
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
    selectable: string | boolean;
    /**
     * multiple?: boolean
     * Enables multiple row selection. [selectable] needs to be enabled.
     * Defaults to 'false'
     */
    multiple: string | boolean;
    /**
     * sortable?: boolean
     * Enables sorting events, sort icons and active column states.
     * Defaults to 'false'
     */
    sortable: string | boolean;
    /**
     * sortBy?: string
     * Sets the active sort column. [sortable] needs to be enabled.
     */
    sortBy: string;
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     */
    sortOrder: 'ASC' | 'DESC';
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
     * selectAll?: function
     * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectAllEvent] implemented object.
     */
    onSelectAll: EventEmitter<ITdDataTableSelectAllEvent>;
    constructor(_changeDetectorRef: ChangeDetectorRef);
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
     * Checks if all visible rows are selected.
     */
    areAllSelected(): boolean;
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    selectAll(checked: boolean): void;
    /**
     * Checks if row is selected
     */
    isRowSelected(row: any): boolean;
    /**
     * Selects or clears a row depending on 'checked' value
     */
    select(row: any, checked: boolean, event: Event): void;
    /**
     * Method handle for sort click event in column headers.
     */
    handleSort(column: ITdDataTableColumn): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (_: any) => any;
    onTouched: () => any;
    private _getNestedValue(name, value);
}
