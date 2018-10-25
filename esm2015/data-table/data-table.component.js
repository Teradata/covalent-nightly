/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ContentChildren, QueryList, Inject, Optional, ViewChildren, ElementRef } from '@angular/core';
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ENTER, SPACE, UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
import { mixinControlValueAccessor } from '@covalent/core/common';
/** @enum {string} */
const TdDataTableSortingOrder = {
    Ascending: 'ASC',
    Descending: 'DESC',
};
export { TdDataTableSortingOrder };
/**
 * @record
 */
export function ITdDataTableColumnWidth() { }
if (false) {
    /** @type {?|undefined} */
    ITdDataTableColumnWidth.prototype.min;
    /** @type {?|undefined} */
    ITdDataTableColumnWidth.prototype.max;
}
/**
 * @record
 */
export function ITdDataTableColumn() { }
if (false) {
    /** @type {?} */
    ITdDataTableColumn.prototype.name;
    /** @type {?} */
    ITdDataTableColumn.prototype.label;
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.tooltip;
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.numeric;
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.format;
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.nested;
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.sortable;
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.hidden;
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.filter;
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.width;
}
/**
 * @record
 */
export function ITdDataTableSelectEvent() { }
if (false) {
    /** @type {?} */
    ITdDataTableSelectEvent.prototype.row;
    /** @type {?} */
    ITdDataTableSelectEvent.prototype.selected;
    /** @type {?} */
    ITdDataTableSelectEvent.prototype.index;
}
/**
 * @record
 */
export function ITdDataTableSelectAllEvent() { }
if (false) {
    /** @type {?} */
    ITdDataTableSelectAllEvent.prototype.rows;
    /** @type {?} */
    ITdDataTableSelectAllEvent.prototype.selected;
}
/**
 * @record
 */
export function ITdDataTableRowClickEvent() { }
if (false) {
    /** @type {?} */
    ITdDataTableRowClickEvent.prototype.row;
    /** @type {?} */
    ITdDataTableRowClickEvent.prototype.index;
}
/**
 * @record
 */
export function IInternalColumnWidth() { }
if (false) {
    /** @type {?} */
    IInternalColumnWidth.prototype.value;
    /** @type {?} */
    IInternalColumnWidth.prototype.limit;
    /** @type {?} */
    IInternalColumnWidth.prototype.index;
    /** @type {?|undefined} */
    IInternalColumnWidth.prototype.min;
    /** @type {?|undefined} */
    IInternalColumnWidth.prototype.max;
}
/**
 * Constant to set the rows offset before and after the viewport
 * @type {?}
 */
const TD_VIRTUAL_OFFSET = 2;
/**
 * Constant to set default row height if none is provided
 * @type {?}
 */
const TD_VIRTUAL_DEFAULT_ROW_HEIGHT = 48;
export class TdDataTableBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdDataTableBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdDataTableMixinBase = mixinControlValueAccessor(TdDataTableBase, []);
export class TdDataTableComponent extends _TdDataTableMixinBase {
    /**
     * @param {?} _document
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     * @param {?} _changeDetectorRef
     */
    constructor(_document, _elementRef, _domSanitizer, _changeDetectorRef) {
        super(_changeDetectorRef);
        this._document = _document;
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._hostWidth = 0;
        /**
         * manually resizable columns
         */
        this._resizableColumns = false;
        this._columnClientX = 0;
        this._onColumnResize = new Subject();
        this._widths = [];
        this._onResize = new Subject();
        this._scrollHorizontalOffset = 0;
        this._onHorizontalScroll = new Subject();
        this._onVerticalScroll = new Subject();
        // Array of cached row heights to allow dynamic row heights
        this._rowHeightCache = [];
        // Total pseudo height of all the elements
        this._totalHeight = 0;
        // Total host height for the viewport
        this._hostHeight = 0;
        // Scrolled vertical pixels
        this._scrollVerticalOffset = 0;
        // Variables that set from and to which rows will be rendered
        this._fromRow = 0;
        this._toRow = 0;
        this._selectable = false;
        this._clickable = false;
        this._multiple = true;
        this._allSelected = false;
        this._indeterminate = false;
        /**
         * sorting
         */
        this._sortable = false;
        this._sortOrder = TdDataTableSortingOrder.Ascending;
        /**
         * shift select
         */
        this._shiftPreviouslyPressed = false;
        this._lastSelectedIndex = -1;
        this._firstSelectedIndex = -1;
        this._firstCheckboxValue = false;
        /**
         * template fetching support
         */
        this._templateMap = new Map();
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        this.onSortChange = new EventEmitter();
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         */
        this.onRowSelect = new EventEmitter();
        /**
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         */
        this.onRowClick = new EventEmitter();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        this.onSelectAll = new EventEmitter();
        /**
         * compareWith?: function(row, model): boolean
         * Allows custom comparison between row and model to see if row is selected or not
         * Default comparation is by reference
         */
        this.compareWith = (row, model) => {
            return row === model;
        };
    }
    /**
     * @return {?}
     */
    get resizingColumn() {
        return this._resizingColumn;
    }
    /**
     * @return {?}
     */
    get hostWidth() {
        // if the checkboxes are rendered, we need to remove their width
        // from the total width to calculate properly
        if (this.selectable) {
            return this._hostWidth - 42;
        }
        return this._hostWidth;
    }
    /**
     * Returns the offset style with a proper calculation on how much it should move
     * over the y axis of the total height
     * @return {?}
     */
    get offsetTransform() {
        return this._offsetTransform;
    }
    /**
     * Returns the assumed total height of the rows
     * @return {?}
     */
    get totalHeight() {
        return this._totalHeight;
    }
    /**
     * Returns the initial row to render in the viewport
     * @return {?}
     */
    get fromRow() {
        return this._fromRow;
    }
    /**
     * Returns the last row to render in the viewport
     * @return {?}
     */
    get toRow() {
        return this._toRow;
    }
    /**
     * Returns scroll position to reposition column headers
     * @return {?}
     */
    get columnsLeftScroll() {
        return this._scrollHorizontalOffset * -1;
    }
    /**
     * Returns true if all values are selected.
     * @return {?}
     */
    get allSelected() {
        return this._allSelected;
    }
    /**
     * Returns true if all values are not deselected
     * and at least one is.
     * @return {?}
     */
    get indeterminate() {
        return this._indeterminate;
    }
    /**
     * data?: {[key: string]: any}[]
     * Sets the data to be rendered as rows.
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this._rowHeightCache = [];
        Promise.resolve().then(() => {
            this.refresh();
            // scroll back to the top if the data has changed
            this._scrollableDiv.nativeElement.scrollTop = 0;
        });
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get virtualData() {
        return this._virtualData;
    }
    /**
     * columns?: ITdDataTableColumn[]
     * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
     * Defaults to [data] keys.
     * @param {?} cols
     * @return {?}
     */
    set columns(cols) {
        this._columns = cols;
    }
    /**
     * @return {?}
     */
    get columns() {
        if (this._columns) {
            return this._columns;
        }
        if (this.hasData) {
            this._columns = [];
            // if columns is undefined, use key in [data] rows as name and label for column headers.
            /** @type {?} */
            let row = this._data[0];
            Object.keys(row).forEach((k) => {
                if (!this._columns.find((c) => c.name === k)) {
                    this._columns.push({ name: k, label: k });
                }
            });
            return this._columns;
        }
        else {
            return [];
        }
    }
    /**
     * resizableColumns?: boolean
     * Enables manual column resize.
     * Defaults to 'false'
     * @param {?} resizableColumns
     * @return {?}
     */
    set resizableColumns(resizableColumns) {
        this._resizableColumns = coerceBooleanProperty(resizableColumns);
    }
    /**
     * @return {?}
     */
    get resizableColumns() {
        return this._resizableColumns;
    }
    /**
     * selectable?: boolean
     * Enables row selection events, hover and selected row states.
     * Defaults to 'false'
     * @param {?} selectable
     * @return {?}
     */
    set selectable(selectable) {
        this._selectable = coerceBooleanProperty(selectable);
    }
    /**
     * @return {?}
     */
    get selectable() {
        return this._selectable;
    }
    /**
     * clickable?: boolean
     * Enables row click events, hover.
     * Defaults to 'false'
     * @param {?} clickable
     * @return {?}
     */
    set clickable(clickable) {
        this._clickable = coerceBooleanProperty(clickable);
    }
    /**
     * @return {?}
     */
    get clickable() {
        return this._clickable;
    }
    /**
     * multiple?: boolean
     * Enables multiple row selection. [selectable] needs to be enabled.
     * Defaults to 'false'
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * sortable?: boolean
     * Enables sorting events, sort icons and active column states.
     * Defaults to 'false'
     * @param {?} sortable
     * @return {?}
     */
    set sortable(sortable) {
        this._sortable = coerceBooleanProperty(sortable);
    }
    /**
     * @return {?}
     */
    get sortable() {
        return this._sortable;
    }
    /**
     * sortBy?: string
     * Sets the active sort column. [sortable] needs to be enabled.
     * @param {?} columnName
     * @return {?}
     */
    set sortBy(columnName) {
        if (!columnName) {
            return;
        }
        /** @type {?} */
        const column = this.columns.find((c) => c.name === columnName);
        if (!column) {
            throw new Error('[sortBy] must be a valid column name');
        }
        this._sortBy = column;
    }
    /**
     * @return {?}
     */
    get sortByColumn() {
        return this._sortBy;
    }
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     * @param {?} order
     * @return {?}
     */
    set sortOrder(order) {
        /** @type {?} */
        let sortOrder = order ? order.toUpperCase() : 'ASC';
        if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
            throw new Error('[sortOrder] must be empty, ASC or DESC');
        }
        this._sortOrder = sortOrder === 'ASC' ?
            TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
    }
    /**
     * @return {?}
     */
    get sortOrderEnum() {
        return this._sortOrder;
    }
    /**
     * @return {?}
     */
    get hasData() {
        return this._data && this._data.length > 0;
    }
    /**
     * Initialize observable for resize and scroll events
     * @return {?}
     */
    ngOnInit() {
        // initialize observable for resize calculations
        this._resizeSubs = this._onResize.asObservable().subscribe(() => {
            if (this._rows) {
                this._rows.toArray().forEach((row, index) => {
                    this._rowHeightCache[this.fromRow + index] = row.height + 1;
                });
            }
            this._calculateWidths();
            this._calculateVirtualRows();
        });
        // initialize observable for column resize calculations
        this._columnResizeSubs = this._onColumnResize.asObservable().pipe(debounceTime(0)).subscribe((clientX) => {
            this._columnClientX = clientX;
            this._calculateWidths();
            this._changeDetectorRef.markForCheck();
        });
        // initialize observable for scroll column header reposition
        this._horizontalScrollSubs = this._onHorizontalScroll.asObservable()
            .subscribe((horizontalScroll) => {
            this._scrollHorizontalOffset = horizontalScroll;
            this._changeDetectorRef.markForCheck();
        });
        // initialize observable for virtual scroll rendering
        this._verticalScrollSubs = this._onVerticalScroll.asObservable()
            .subscribe((verticalScroll) => {
            this._scrollVerticalOffset = verticalScroll;
            this._calculateVirtualRows();
            this._changeDetectorRef.markForCheck();
        });
        this._valueChangesSubs = this.valueChanges.subscribe((value) => {
            this.refresh();
        });
    }
    /**
     * Loads templates and sets them in a map for faster access.
     * @return {?}
     */
    ngAfterContentInit() {
        for (let i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    }
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this._elementRef.nativeElement) {
            /** @type {?} */
            let newHostWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth) {
                this._hostWidth = newHostWidth;
                this._onResize.next();
            }
        }
        if (this._scrollableDiv.nativeElement) {
            /** @type {?} */
            let newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
            // if the height of the viewport has changed, then we mark for check
            if (this._hostHeight !== newHostHeight) {
                this._hostHeight = newHostHeight;
                this._calculateVirtualRows();
                this._changeDetectorRef.markForCheck();
            }
        }
    }
    /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     * @return {?}
     */
    ngAfterViewInit() {
        this._rowsChangedSubs = this._rows.changes.pipe(debounceTime(0)).subscribe(() => {
            this._onResize.next();
        });
        this._calculateVirtualRows();
    }
    /**
     * Unsubscribes observables when data table is destroyed
     * @return {?}
     */
    ngOnDestroy() {
        if (this._resizeSubs) {
            this._resizeSubs.unsubscribe();
        }
        if (this._columnResizeSubs) {
            this._columnResizeSubs.unsubscribe();
        }
        if (this._horizontalScrollSubs) {
            this._horizontalScrollSubs.unsubscribe();
        }
        if (this._verticalScrollSubs) {
            this._verticalScrollSubs.unsubscribe();
        }
        if (this._rowsChangedSubs) {
            this._rowsChangedSubs.unsubscribe();
        }
        if (this._valueChangesSubs) {
            this._valueChangesSubs.unsubscribe();
        }
    }
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        let element = ((/** @type {?} */ (event.target)));
        if (element) {
            /** @type {?} */
            let horizontalScroll = element.scrollLeft;
            if (this._scrollHorizontalOffset !== horizontalScroll) {
                this._onHorizontalScroll.next(horizontalScroll);
            }
            /** @type {?} */
            let verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._onVerticalScroll.next(verticalScroll);
            }
        }
    }
    /**
     * Returns the width needed for the columns via index
     * @param {?} index
     * @return {?}
     */
    getColumnWidth(index) {
        if (this._widths[index]) {
            return this._widths[index].value;
        }
        return undefined;
    }
    /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    getCellValue(column, value) {
        if (column.nested === undefined || column.nested) {
            return this._getNestedValue(column.name, value);
        }
        return value[column.name];
    }
    /**
     * Getter method for template references
     * @param {?} name
     * @return {?}
     */
    getTemplateRef(name) {
        return this._templateMap.get(name);
    }
    /**
     * Clears model (ngModel) of component by removing all values in array.
     * @return {?}
     */
    clearModel() {
        this.value.splice(0, this.value.length);
    }
    /**
     * Refreshes data table and rerenders [data] and [columns]
     * @return {?}
     */
    refresh() {
        this._calculateVirtualRows();
        this._calculateWidths();
        this._calculateCheckboxState();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Selects or clears all rows depending on 'checked' value.
     * @param {?} checked
     * @return {?}
     */
    selectAll(checked) {
        /** @type {?} */
        let toggledRows = [];
        if (checked) {
            this._data.forEach((row) => {
                // skiping already selected rows
                if (!this.isRowSelected(row)) {
                    this.value.push(row);
                    // checking which ones are being toggled
                    toggledRows.push(row);
                }
            });
            this._allSelected = true;
            this._indeterminate = true;
        }
        else {
            this._data.forEach((row) => {
                // checking which ones are being toggled
                if (this.isRowSelected(row)) {
                    toggledRows.push(row);
                    /** @type {?} */
                    let modelRow = this.value.filter((val) => {
                        return this.compareWith(row, val);
                    })[0];
                    /** @type {?} */
                    let index = this.value.indexOf(modelRow);
                    if (index > -1) {
                        this.value.splice(index, 1);
                    }
                }
            });
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.onSelectAll.emit({ rows: toggledRows, selected: checked });
        this.onChange(this.value);
    }
    /**
     * Checks if row is selected
     * @param {?} row
     * @return {?}
     */
    isRowSelected(row) {
        // compare items by [compareWith] function
        return this.value ? this.value.filter((val) => {
            return this.compareWith(row, val);
        }).length > 0 : false;
    }
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     * @param {?} row
     * @param {?} event
     * @param {?} currentSelected
     * @return {?}
     */
    select(row, event, currentSelected) {
        if (this.selectable) {
            this.blockEvent(event);
            // Check to see if Shift key is selected and need to select everything in between
            /** @type {?} */
            let mouseEvent = (/** @type {?} */ (event));
            if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                /** @type {?} */
                let firstIndex = currentSelected;
                /** @type {?} */
                let lastIndex = this._lastSelectedIndex;
                if (currentSelected > this._lastSelectedIndex) {
                    firstIndex = this._lastSelectedIndex;
                    lastIndex = currentSelected;
                }
                // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                // else the checkboxes clicked are all after the initial one
                if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                    (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                    for (let i = firstIndex; i <= lastIndex; i++) {
                        if (this._firstSelectedIndex !== i) {
                            this._doSelection(this._data[i], i);
                        }
                    }
                }
                else if ((this._firstSelectedIndex > currentSelected) || (this._firstSelectedIndex < currentSelected)) {
                    // change indexes depending on where the next checkbox is selected (before or after)
                    if (this._firstSelectedIndex > currentSelected) {
                        lastIndex--;
                    }
                    else if (this._firstSelectedIndex < currentSelected) {
                        firstIndex++;
                    }
                    for (let i = firstIndex; i <= lastIndex; i++) {
                        /** @type {?} */
                        let rowSelected = this.isRowSelected(this._data[i]);
                        // if row is selected and first checkbox was selected
                        // or if row was unselected and first checkbox was unselected
                        // we ignore the toggle
                        if ((this._firstCheckboxValue && !rowSelected) ||
                            (!this._firstCheckboxValue && rowSelected)) {
                            this._doSelection(this._data[i], i);
                        }
                        else if (this._shiftPreviouslyPressed) {
                            // else if the checkbox selected was in the middle of the last selection and the first selection
                            // then we undo the selections
                            if ((currentSelected >= this._firstSelectedIndex && currentSelected <= this._lastSelectedIndex) ||
                                (currentSelected <= this._firstSelectedIndex && currentSelected >= this._lastSelectedIndex)) {
                                this._doSelection(this._data[i], i);
                            }
                        }
                    }
                }
                this._shiftPreviouslyPressed = true;
                // if shift wasnt pressed, then we take the element checked as the first row
                // incase the next click uses shift
            }
            else if (mouseEvent && !mouseEvent.shiftKey) {
                this._firstCheckboxValue = this._doSelection(row, currentSelected);
                this._shiftPreviouslyPressed = false;
                this._firstSelectedIndex = currentSelected;
            }
            this._lastSelectedIndex = currentSelected;
        }
    }
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     * @return {?}
     */
    disableTextSelection() {
        if (this._document) {
            this._document.onselectstart = function () {
                return false;
            };
        }
    }
    /**
     * Resets the original onselectstart method.
     * @return {?}
     */
    enableTextSelection() {
        if (this._document) {
            this._document.onselectstart = undefined;
        }
    }
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     * @param {?} row
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    handleRowClick(row, index, event) {
        if (this.clickable) {
            // ignoring linting rules here because attribute it actually null or not there
            // can't check for undefined
            /** @type {?} */
            const srcElement = event.srcElement || event.currentTarget;
            /** @type {?} */
            let element = (/** @type {?} */ (event.target));
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null && element.tagName.toLowerCase() !== 'mat-pseudo-checkbox') {
                this.onRowClick.emit({
                    row: row,
                    index: index,
                });
            }
        }
    }
    /**
     * Method handle for sort click event in column headers.
     * @param {?} column
     * @return {?}
     */
    handleSort(column) {
        if (this._sortBy === column) {
            this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
                TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
        }
        else {
            this._sortBy = column;
            this._sortOrder = TdDataTableSortingOrder.Ascending;
        }
        this.onSortChange.next({ name: this._sortBy.name, order: this._sortOrder });
    }
    /**
     * Handle all keyup events when focusing a data table row
     * @param {?} event
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    _rowKeyup(event, row, index) {
        switch (event.keyCode) {
            case ENTER:
            case SPACE:
                /** if user presses enter or space, the row should be selected */
                if (this.selectable) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            case UP_ARROW:
                /**
                 * if users presses the up arrow, we focus the prev row
                 * unless its the first row
                 */
                if (index > 0) {
                    this._rows.toArray()[index - 1].focus();
                }
                this.blockEvent(event);
                if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index >= 0) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            case DOWN_ARROW:
                /**
                 * if users presses the down arrow, we focus the next row
                 * unless its the last row
                 */
                if (index < (this._rows.toArray().length - 1)) {
                    this._rows.toArray()[index + 1].focus();
                }
                this.blockEvent(event);
                if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index < this._data.length) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            default:
            // default
        }
    }
    /**
     * Sets column index of the dragged column and initial clientX of column
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    _handleStartColumnDrag(index, event) {
        this._columnClientX = event.clientX;
        this._resizingColumn = index;
    }
    /**
     * Calculates new width depending on new clientX of dragger column
     * @param {?} event
     * @return {?}
     */
    _handleColumnDrag(event) {
        // check if there was been a separator clicked for resize
        if (this._resizingColumn !== undefined && event.clientX > 0) {
            /** @type {?} */
            let xPosition = event.clientX;
            // checks if the separator is being moved to try and resize the column, else dont do anything
            if (xPosition > 0 && this._columnClientX > 0 && (xPosition - this._columnClientX) !== 0) {
                // calculate the new width depending if making the column bigger or smaller
                /** @type {?} */
                let proposedManualWidth = this._widths[this._resizingColumn].value + (xPosition - this._columnClientX);
                // if the proposed new width is less than the projected min width of the column, use projected min width
                if (proposedManualWidth < this._colElements.toArray()[this._resizingColumn].projectedWidth) {
                    proposedManualWidth = this._colElements.toArray()[this._resizingColumn].projectedWidth;
                }
                this.columns[this._resizingColumn].width = proposedManualWidth;
                // update new x position for the resized column
                this._onColumnResize.next(xPosition);
            }
        }
    }
    /**
     * Ends dragged flags
     * @return {?}
     */
    _handleEndColumnDrag() {
        this._columnClientX = undefined;
        this._resizingColumn = undefined;
    }
    /**
     * Method to prevent the default events
     * @param {?} event
     * @return {?}
     */
    blockEvent(event) {
        event.preventDefault();
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    _getNestedValue(name, value) {
        if (!(value instanceof Object) || !name) {
            return value;
        }
        if (name.indexOf('.') > -1) {
            /** @type {?} */
            let splitName = name.split(/\.(.+)/, 2);
            return this._getNestedValue(splitName[1], value[splitName[0]]);
        }
        else {
            return value[name];
        }
    }
    /**
     * Does the actual Row Selection
     * @param {?} row
     * @param {?} rowIndex
     * @return {?}
     */
    _doSelection(row, rowIndex) {
        /** @type {?} */
        let wasSelected = this.isRowSelected(row);
        if (!wasSelected) {
            if (!this._multiple) {
                this.clearModel();
            }
            this.value.push(row);
        }
        else {
            // compare items by [compareWith] function
            row = this.value.filter((val) => {
                return this.compareWith(row, val);
            })[0];
            /** @type {?} */
            let index = this.value.indexOf(row);
            if (index > -1) {
                this.value.splice(index, 1);
            }
        }
        this._calculateCheckboxState();
        this.onRowSelect.emit({ row: row, index: rowIndex, selected: !wasSelected });
        this.onChange(this.value);
        return !wasSelected;
    }
    /**
     * Calculate all the state of all checkboxes
     * @return {?}
     */
    _calculateCheckboxState() {
        if (this._data) {
            this._allSelected = typeof this._data.find((d) => !this.isRowSelected(d)) === 'undefined';
            this._indeterminate = false;
            for (let row of this._data) {
                if (!this.isRowSelected(row)) {
                    continue;
                }
                this._indeterminate = true;
                break;
            }
        }
    }
    /**
     * Calculates the widths for columns and cells depending on content
     * @return {?}
     */
    _calculateWidths() {
        if (this._colElements && this._colElements.length) {
            this._widths = [];
            this._colElements.forEach((col, index) => {
                this._adjustColumnWidth(index, this._calculateWidth());
            });
            this._adjustColumnWidhts();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @return {?}
     */
    _adjustColumnWidhts() {
        /** @type {?} */
        let fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        /** @type {?} */
        let flexibleWidths = this._widths.filter((width, index) => {
            if (this.columns[index].hidden) {
                return false;
            }
            if (width.limit || width.max || width.min) {
                fixedTotalWidth += width.value;
            }
            return !width.limit && !width.max && !width.min;
        }).length;
        // calculate how much pixes are left that could be spread across
        // the flexible columns
        /** @type {?} */
        let recalculateHostWidth = 0;
        if (fixedTotalWidth < this.hostWidth) {
            recalculateHostWidth = this.hostWidth - fixedTotalWidth;
        }
        // if we have flexible columns and pixels to spare on them
        // we try and spread the pixels across them
        if (flexibleWidths && recalculateHostWidth) {
            /** @type {?} */
            let newValue = Math.floor(recalculateHostWidth / flexibleWidths);
            /** @type {?} */
            let adjustedNumber = 0;
            // adjust the column widths with the spread pixels
            this._widths.forEach((colWidth) => {
                if (this._widths[colWidth.index].max && this._widths[colWidth.index].value > newValue ||
                    this._widths[colWidth.index].min && this._widths[colWidth.index].value < newValue ||
                    !this._widths[colWidth.index].limit) {
                    this._adjustColumnWidth(colWidth.index, newValue);
                    adjustedNumber++;
                }
            });
            // if there are still columns that need to be recalculated, we start over
            /** @type {?} */
            let newFlexibleWidths = this._widths.filter((width) => {
                return !width.limit && !width.max;
            }).length;
            if (newFlexibleWidths !== adjustedNumber && newFlexibleWidths !== flexibleWidths) {
                this._adjustColumnWidhts();
            }
        }
    }
    /**
     * Adjusts a single column to see if it can be recalculated
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    _adjustColumnWidth(index, value) {
        this._widths[index] = {
            value: value,
            index: index,
            limit: false,
            min: false,
            max: false,
        };
        // flag to see if we need to skip the min width projection
        // depending if a width or min width has been provided
        /** @type {?} */
        let skipMinWidthProjection = false;
        if (this.columns[index]) {
            // if the provided width has min/max, then we check to see if we need to set it
            if (typeof this.columns[index].width === 'object') {
                /** @type {?} */
                let widthOpts = (/** @type {?} */ (this.columns[index].width));
                // if the column width is less than the configured min, we override it
                skipMinWidthProjection = (widthOpts && !!widthOpts.min);
                if (widthOpts && widthOpts.min >= this._widths[index].value) {
                    this._widths[index].value = widthOpts.min;
                    this._widths[index].min = true;
                    // if the column width is more than the configured max, we override it
                }
                else if (widthOpts && widthOpts.max <= this._widths[index].value) {
                    this._widths[index].value = widthOpts.max;
                    this._widths[index].max = true;
                }
                // if it has a fixed width, then we just set it
            }
            else if (typeof this.columns[index].width === 'number') {
                this._widths[index].value = (/** @type {?} */ (this.columns[index].width));
                skipMinWidthProjection = this._widths[index].limit = true;
            }
        }
        // if there wasn't any width or min width provided, we set a min to what the column width min should be
        if (!skipMinWidthProjection &&
            this._widths[index].value < this._colElements.toArray()[index].projectedWidth) {
            this._widths[index].value = this._colElements.toArray()[index].projectedWidth;
            this._widths[index].min = true;
            this._widths[index].limit = false;
        }
    }
    /**
     * Generic method to calculate column width
     * @return {?}
     */
    _calculateWidth() {
        /** @type {?} */
        let renderedColumns = this.columns.filter((col) => !col.hidden);
        return Math.floor(this.hostWidth / renderedColumns.length);
    }
    /**
     * Method to calculate the rows to be rendered in the viewport
     * @return {?}
     */
    _calculateVirtualRows() {
        /** @type {?} */
        let scrolledRows = 0;
        if (this._data) {
            this._totalHeight = 0;
            /** @type {?} */
            let rowHeightSum = 0;
            // loop through all rows to see if we have their height cached
            // and sum them all to calculate the total height
            this._data.forEach((d, i) => {
                // iterate through all rows at first and assume all
                // rows are the same height as the first one
                if (!this._rowHeightCache[i]) {
                    this._rowHeightCache[i] = this._rowHeightCache[0] || TD_VIRTUAL_DEFAULT_ROW_HEIGHT;
                }
                rowHeightSum += this._rowHeightCache[i];
                // check how many rows have been scrolled
                if (this._scrollVerticalOffset - rowHeightSum > 0) {
                    scrolledRows++;
                }
            });
            this._totalHeight = rowHeightSum;
            // set the initial row to be rendered taking into account the row offset
            /** @type {?} */
            let fromRow = scrolledRows - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            let hostHeight = this._hostHeight;
            /** @type {?} */
            let index = 0;
            // calculate how many rows can fit in the viewport
            while (hostHeight > 0) {
                hostHeight -= this._rowHeightCache[this.fromRow + index];
                index++;
            }
            // set the last row to be rendered taking into account the row offset
            /** @type {?} */
            let range = (index - 1) + (TD_VIRTUAL_OFFSET * 2);
            /** @type {?} */
            let toRow = range + this.fromRow;
            // if last row is greater than the total length, then we use the total length
            if (isFinite(toRow) && toRow > this._data.length) {
                toRow = this._data.length;
            }
            else if (!isFinite(toRow)) {
                toRow = TD_VIRTUAL_OFFSET;
            }
            this._toRow = toRow;
        }
        else {
            this._totalHeight = 0;
            this._fromRow = 0;
            this._toRow = 0;
        }
        /** @type {?} */
        let offset = 0;
        // calculate the proper offset depending on how many rows have been scrolled
        if (scrolledRows > TD_VIRTUAL_OFFSET) {
            for (let index = 0; index < this.fromRow; index++) {
                offset += this._rowHeightCache[index];
            }
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(() => {
            this._changeDetectorRef.markForCheck();
        });
    }
}
TdDataTableComponent.decorators = [
    { type: Component, args: [{
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdDataTableComponent),
                        multi: true,
                    }],
                selector: 'td-data-table',
                template: "<table td-data-table\n        [style.left.px]=\"columnsLeftScroll\"\n        [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\"\n          (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\">\n        </mat-checkbox>\n      </th>\n      <th td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\">\n        <span [matTooltip]=\"column.tooltip\">{{column.label}}</span>\n        <span td-column-resizer\n              *ngIf=\"resizableColumns\"\n              draggable=\"true\"\n              class=\"td-data-table-column-resizer\"\n              [class.td-resizing]=\"i === resizingColumn\"\n              (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n              (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n              (drag)=\"_handleColumnDrag($event)\"\n              (dragend)=\"_handleEndColumnDrag()\"\n              (mouseup)=\"_handleEndColumnDrag()\">\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\"\n      (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table td-data-table\n          [style.transform]=\"offsetTransform\"\n          [style.position]=\"'absolute'\"\n          [class.mat-selectable]=\"selectable\"\n          [class.mat-clickable]=\"clickable\">\n    <tbody class=\"td-data-table-body\">\n      <tr td-data-table-row\n          #dtRow\n          [tabIndex]=\"selectable ? 0 : -1\"\n          [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n          *ngFor=\"let row of virtualData; let rowIndex = index\"\n          (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n          (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n          (keydown.space)=\"blockEvent($event)\"\n          (keydown.shift.space)=\"blockEvent($event)\"\n          (keydown.shift)=\"disableTextSelection()\"\n          (keyup.shift)=\"enableTextSelection()\">\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\">\n          </mat-pseudo-checkbox>\n        </td>\n        <td td-data-table-cell\n            [numeric]=\"column.numeric\"\n            [hidden]=\"column.hidden\"\n            *ngFor=\"let column of columns; let i = index\"\n            [style.min-width.px]=\"getColumnWidth(i)\"\n            [style.max-width.px]=\"getColumnWidth(i)\">\n          <span *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name }\">\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
                inputs: ['value'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;overflow:hidden}:host .td-data-table-scrollable{position:relative;overflow:auto;height:calc(100% - 56px)}.td-data-table-column-resizer{right:0;width:6px;cursor:col-resize}.td-data-table-column-resizer,.td-data-table-column-resizer .td-data-table-column-separator{position:absolute;height:100%;top:0}.td-data-table-column-resizer .td-data-table-column-separator{left:2px}.td-data-table-column-resizer.td-resizing{cursor:-webkit-grabbing}table.td-data-table{width:auto!important}table.td-data-table.mat-selectable tbody>tr.td-data-table-row{transition:background-color .2s}table.td-data-table.mat-selectable .td-data-table-column:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:first-child>.td-data-table-column-content-wrapper{width:18px;min-width:18px;padding:0 24px}table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-left:0}[dir=rtl] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-right:0;padding-left:28px}table.td-data-table td.mat-checkbox-cell,table.td-data-table th.mat-checkbox-column{min-width:42px;width:42px;font-size:0!important}table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{width:18px;height:18px}::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after,::ng-deep table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after{width:11px!important;height:4px!important}table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{width:18px;height:18px;margin:0}"]
            }] }
];
/** @nocollapse */
TdDataTableComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef },
    { type: DomSanitizer },
    { type: ChangeDetectorRef }
];
TdDataTableComponent.propDecorators = {
    _templates: [{ type: ContentChildren, args: [TdDataTableTemplateDirective,] }],
    _scrollableDiv: [{ type: ViewChild, args: ['scrollableDiv',] }],
    _colElements: [{ type: ViewChildren, args: ['columnElement',] }],
    _rows: [{ type: ViewChildren, args: [TdDataTableRowComponent,] }],
    data: [{ type: Input, args: ['data',] }],
    columns: [{ type: Input, args: ['columns',] }],
    resizableColumns: [{ type: Input, args: ['resizableColumns',] }],
    selectable: [{ type: Input, args: ['selectable',] }],
    clickable: [{ type: Input, args: ['clickable',] }],
    multiple: [{ type: Input, args: ['multiple',] }],
    sortable: [{ type: Input, args: ['sortable',] }],
    sortBy: [{ type: Input, args: ['sortBy',] }],
    sortOrder: [{ type: Input, args: ['sortOrder',] }],
    onSortChange: [{ type: Output, args: ['sortChange',] }],
    onRowSelect: [{ type: Output, args: ['rowSelect',] }],
    onRowClick: [{ type: Output, args: ['rowClick',] }],
    onSelectAll: [{ type: Output, args: ['selectAll',] }],
    compareWith: [{ type: Input, args: ['compareWith',] }]
};
if (false) {
    /**
     * responsive width calculations
     * @type {?}
     */
    TdDataTableComponent.prototype._resizeSubs;
    /** @type {?} */
    TdDataTableComponent.prototype._rowsChangedSubs;
    /** @type {?} */
    TdDataTableComponent.prototype._hostWidth;
    /**
     * manually resizable columns
     * @type {?}
     */
    TdDataTableComponent.prototype._resizableColumns;
    /** @type {?} */
    TdDataTableComponent.prototype._columnClientX;
    /** @type {?} */
    TdDataTableComponent.prototype._columnResizeSubs;
    /** @type {?} */
    TdDataTableComponent.prototype._resizingColumn;
    /** @type {?} */
    TdDataTableComponent.prototype._onColumnResize;
    /** @type {?} */
    TdDataTableComponent.prototype._widths;
    /** @type {?} */
    TdDataTableComponent.prototype._onResize;
    /**
     * column header reposition and viewpoort
     * @type {?}
     */
    TdDataTableComponent.prototype._verticalScrollSubs;
    /** @type {?} */
    TdDataTableComponent.prototype._horizontalScrollSubs;
    /** @type {?} */
    TdDataTableComponent.prototype._scrollHorizontalOffset;
    /** @type {?} */
    TdDataTableComponent.prototype._onHorizontalScroll;
    /** @type {?} */
    TdDataTableComponent.prototype._onVerticalScroll;
    /** @type {?} */
    TdDataTableComponent.prototype._rowHeightCache;
    /** @type {?} */
    TdDataTableComponent.prototype._totalHeight;
    /** @type {?} */
    TdDataTableComponent.prototype._hostHeight;
    /** @type {?} */
    TdDataTableComponent.prototype._scrollVerticalOffset;
    /** @type {?} */
    TdDataTableComponent.prototype._offsetTransform;
    /** @type {?} */
    TdDataTableComponent.prototype._fromRow;
    /** @type {?} */
    TdDataTableComponent.prototype._toRow;
    /** @type {?} */
    TdDataTableComponent.prototype._valueChangesSubs;
    /**
     * internal attributes
     * @type {?}
     */
    TdDataTableComponent.prototype._data;
    /** @type {?} */
    TdDataTableComponent.prototype._virtualData;
    /** @type {?} */
    TdDataTableComponent.prototype._columns;
    /** @type {?} */
    TdDataTableComponent.prototype._selectable;
    /** @type {?} */
    TdDataTableComponent.prototype._clickable;
    /** @type {?} */
    TdDataTableComponent.prototype._multiple;
    /** @type {?} */
    TdDataTableComponent.prototype._allSelected;
    /** @type {?} */
    TdDataTableComponent.prototype._indeterminate;
    /**
     * sorting
     * @type {?}
     */
    TdDataTableComponent.prototype._sortable;
    /** @type {?} */
    TdDataTableComponent.prototype._sortBy;
    /** @type {?} */
    TdDataTableComponent.prototype._sortOrder;
    /**
     * shift select
     * @type {?}
     */
    TdDataTableComponent.prototype._shiftPreviouslyPressed;
    /** @type {?} */
    TdDataTableComponent.prototype._lastSelectedIndex;
    /** @type {?} */
    TdDataTableComponent.prototype._firstSelectedIndex;
    /** @type {?} */
    TdDataTableComponent.prototype._firstCheckboxValue;
    /**
     * template fetching support
     * @type {?}
     */
    TdDataTableComponent.prototype._templateMap;
    /** @type {?} */
    TdDataTableComponent.prototype._templates;
    /** @type {?} */
    TdDataTableComponent.prototype._scrollableDiv;
    /** @type {?} */
    TdDataTableComponent.prototype._colElements;
    /** @type {?} */
    TdDataTableComponent.prototype._rows;
    /**
     * sortChange?: function
     * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
     * Emits an [ITdDataTableSortChangeEvent] implemented object.
     * @type {?}
     */
    TdDataTableComponent.prototype.onSortChange;
    /**
     * rowSelect?: function
     * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectEvent] implemented object.
     * @type {?}
     */
    TdDataTableComponent.prototype.onRowSelect;
    /**
     * rowClick?: function
     * Event emitted when a row is clicked.
     * Emits an [ITdDataTableRowClickEvent] implemented object.
     * @type {?}
     */
    TdDataTableComponent.prototype.onRowClick;
    /**
     * selectAll?: function
     * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectAllEvent] implemented object.
     * @type {?}
     */
    TdDataTableComponent.prototype.onSelectAll;
    /**
     * compareWith?: function(row, model): boolean
     * Allows custom comparison between row and model to see if row is selected or not
     * Default comparation is by reference
     * @type {?}
     */
    TdDataTableComponent.prototype.compareWith;
    /** @type {?} */
    TdDataTableComponent.prototype._document;
    /** @type {?} */
    TdDataTableComponent.prototype._elementRef;
    /** @type {?} */
    TdDataTableComponent.prototype._domSanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUMzRSxpQkFBaUIsRUFBRSxTQUFTLEVBQzVCLGVBQWUsRUFBaUMsU0FBUyxFQUFFLE1BQU0sRUFDakUsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRSxPQUFPLEVBQTRCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFMUYsT0FBTyxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7SUFHdkYsV0FBWSxLQUFLO0lBQ2pCLFlBQWEsTUFBTTs7Ozs7O0FBR3JCLDZDQUdDOzs7SUFGQyxzQ0FBYTs7SUFDYixzQ0FBYTs7Ozs7QUFHZix3Q0FXQzs7O0lBVkMsa0NBQWE7O0lBQ2IsbUNBQWM7O0lBQ2QscUNB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a0M7O0lBQ2xDLGdEQUF1Qzs7SUFDdkMsMENBQStCOzs7OztJQUcvQixpREFBMkM7O0lBQzNDLDhDQUFtQzs7SUFDbkMsaURBQXdDOztJQUN4QywrQ0FBZ0M7O0lBQ2hDLCtDQUFpRTs7SUFlakUsdUNBQTZDOztJQUM3Qyx5Q0FBdUQ7Ozs7O0lBR3ZELG1EQUEwQzs7SUFDMUMscURBQTRDOztJQUM1Qyx1REFBNEM7O0lBRTVDLG1EQUFxRTs7SUFDckUsaURBQW1FOztJQUduRSwrQ0FBdUM7O0lBRXZDLDRDQUFpQzs7SUFFakMsMkNBQWdDOztJQUVoQyxxREFBMEM7O0lBRTFDLGdEQUFvQzs7SUFHcEMsd0NBQTZCOztJQUM3QixzQ0FBMkI7O0lBK0IzQixpREFBd0M7Ozs7O0lBRXhDLHFDQUFxQjs7SUFFckIsNENBQTRCOztJQUM1Qix3Q0FBdUM7O0lBQ3ZDLDJDQUFxQzs7SUFDckMsMENBQW9DOztJQUNwQyx5Q0FBa0M7O0lBQ2xDLDRDQUFzQzs7SUFDdEMsOENBQXdDOzs7OztJQUd4Qyx5Q0FBbUM7O0lBQ25DLHVDQUFvQzs7SUFDcEMsMENBQWdGOzs7OztJQUdoRix1REFBaUQ7O0lBQ2pELGtEQUF3Qzs7SUFDeEMsbURBQXlDOztJQUN6QyxtREFBNkM7Ozs7O0lBRzdDLDRDQUEwRjs7SUFDMUYsMENBQW1HOztJQUVuRyw4Q0FBdUQ7O0lBRXZELDRDQUFtRjs7SUFFbkYscUNBQWlGOzs7Ozs7O0lBNExqRiw0Q0FDb0Y7Ozs7Ozs7SUFPcEYsMkNBQXNIOzs7Ozs7O0lBT3RILDBDQUF3SDs7Ozs7OztJQU94SCwyQ0FDaUY7Ozs7Ozs7SUFjakYsMkNBRUM7O0lBZFcseUNBQW9EOztJQUNwRCwyQ0FBK0I7O0lBQy9CLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICAgICAgIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCxcbiAgICAgICAgIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWYsIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdCwgSW5qZWN0LFxuICAgICAgICAgT3B0aW9uYWwsIFZpZXdDaGlsZHJlbiwgRWxlbWVudFJlZiwgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIERPV05fQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLXRhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIHtcbiAgQXNjZW5kaW5nID0gJ0FTQycsXG4gIERlc2NlbmRpbmcgPSAnREVTQycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGgge1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIG51bWVyaWM/OiBib29sZWFuO1xuICBmb3JtYXQ/OiAodmFsdWU6IGFueSkgPT4gYW55O1xuICBuZXN0ZWQ/OiBib29sZWFuO1xuICBzb3J0YWJsZT86IGJvb2xlYW47XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGZpbHRlcj86IGJvb2xlYW47XG4gIHdpZHRoPzogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQge1xuICByb3c6IGFueTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQge1xuICByb3dzOiBhbnlbXTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudCB7XG4gIHJvdzogYW55O1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbENvbHVtbldpZHRoIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbGltaXQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIG1pbj86IGJvb2xlYW47XG4gIG1heD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gc2V0IHRoZSByb3dzIG9mZnNldCBiZWZvcmUgYW5kIGFmdGVyIHRoZSB2aWV3cG9ydFxuICovXG5jb25zdCBURF9WSVJUVUFMX09GRlNFVDogbnVtYmVyID0gMjtcblxuLyoqXG4gKiBDb25zdGFudCB0byBzZXQgZGVmYXVsdCByb3cgaGVpZ2h0IGlmIG5vbmUgaXMgcHJvdmlkZWRcbiAqL1xuY29uc3QgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ6IG51bWJlciA9IDQ4O1xuXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZERhdGFUYWJsZU1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGREYXRhVGFibGVCYXNlLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGREYXRhVGFibGVDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1kYXRhLXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgX1RkRGF0YVRhYmxlTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKiByZXNwb25zaXZlIHdpZHRoIGNhbGN1bGF0aW9ucyAqL1xuICBwcml2YXRlIF9yZXNpemVTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Jvd3NDaGFuZ2VkU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9ob3N0V2lkdGg6IG51bWJlciA9IDA7XG5cbiAgLyoqIG1hbnVhbGx5IHJlc2l6YWJsZSBjb2x1bW5zICovXG4gIHByaXZhdGUgX3Jlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sdW1uQ2xpZW50WDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY29sdW1uUmVzaXplU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZXNpemluZ0NvbHVtbjogbnVtYmVyO1xuICBwcml2YXRlIF9vbkNvbHVtblJlc2l6ZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIGdldCByZXNpemluZ0NvbHVtbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemluZ0NvbHVtbjtcbiAgfVxuXG4gIGdldCBob3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAvLyBpZiB0aGUgY2hlY2tib3hlcyBhcmUgcmVuZGVyZWQsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZWlyIHdpZHRoXG4gICAgLy8gZnJvbSB0aGUgdG90YWwgd2lkdGggdG8gY2FsY3VsYXRlIHByb3Blcmx5XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hvc3RXaWR0aCAtIDQyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faG9zdFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2lkdGhzOiBJSW50ZXJuYWxDb2x1bW5XaWR0aFtdID0gW107XG4gIHByaXZhdGUgX29uUmVzaXplOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogY29sdW1uIGhlYWRlciByZXBvc2l0aW9uIGFuZCB2aWV3cG9vcnQgKi9cbiAgcHJpdmF0ZSBfdmVydGljYWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2hvcml6b250YWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbEhvcml6b250YWxPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfb25Ib3Jpem9udGFsU2Nyb2xsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX29uVmVydGljYWxTY3JvbGw6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICAvLyBBcnJheSBvZiBjYWNoZWQgcm93IGhlaWdodHMgdG8gYWxsb3cgZHluYW1pYyByb3cgaGVpZ2h0c1xuICBwcml2YXRlIF9yb3dIZWlnaHRDYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgLy8gVG90YWwgcHNldWRvIGhlaWdodCBvZiBhbGwgdGhlIGVsZW1lbnRzXG4gIHByaXZhdGUgX3RvdGFsSGVpZ2h0OiBudW1iZXIgPSAwO1xuICAvLyBUb3RhbCBob3N0IGhlaWdodCBmb3IgdGhlIHZpZXdwb3J0XG4gIHByaXZhdGUgX2hvc3RIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8vIFNjcm9sbGVkIHZlcnRpY2FsIHBpeGVsc1xuICBwcml2YXRlIF9zY3JvbGxWZXJ0aWNhbE9mZnNldDogbnVtYmVyID0gMDtcbiAgLy8gU3R5bGUgdG8gbW92ZSB0aGUgY29udGVudCBhIGNlcnRhaW4gb2Zmc2V0IGRlcGVuZGluZyBvbiBzY3JvbGxlZCBvZmZzZXRcbiAgcHJpdmF0ZSBfb2Zmc2V0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XG5cbiAgLy8gVmFyaWFibGVzIHRoYXQgc2V0IGZyb20gYW5kIHRvIHdoaWNoIHJvd3Mgd2lsbCBiZSByZW5kZXJlZFxuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0IHN0eWxlIHdpdGggYSBwcm9wZXIgY2FsY3VsYXRpb24gb24gaG93IG11Y2ggaXQgc2hvdWxkIG1vdmVcbiAgICogb3ZlciB0aGUgeSBheGlzIG9mIHRoZSB0b3RhbCBoZWlnaHRcbiAgICovXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VHJhbnNmb3JtO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFzc3VtZWQgdG90YWwgaGVpZ2h0IG9mIHRoZSByb3dzXG4gICAqL1xuICBnZXQgdG90YWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5pdGlhbCByb3cgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgZ2V0IGZyb21Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbVJvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXN0IHJvdyB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBnZXQgdG9Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Sb3c7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZXNTdWJzOiBTdWJzY3JpcHRpb247XG4gIC8qKiBpbnRlcm5hbCBhdHRyaWJ1dGVzICovXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICAvLyBkYXRhIHZpcnR1YWxseSBpdGVyYXRlZCBieSBjb21wb25lbnRcbiAgcHJpdmF0ZSBfdmlydHVhbERhdGE6IGFueVtdO1xuICBwcml2YXRlIF9jb2x1bW5zOiBJVGREYXRhVGFibGVDb2x1bW5bXTtcbiAgcHJpdmF0ZSBfc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGlja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9hbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHNvcnRpbmcgKi9cbiAgcHJpdmF0ZSBfc29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc29ydEJ5OiBJVGREYXRhVGFibGVDb2x1bW47XG4gIHByaXZhdGUgX3NvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG5cbiAgLyoqIHNoaWZ0IHNlbGVjdCAqL1xuICBwcml2YXRlIF9zaGlmdFByZXZpb3VzbHlQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xhc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RDaGVja2JveFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHRlbXBsYXRlIGZldGNoaW5nIHN1cHBvcnQgKi9cbiAgcHJpdmF0ZSBfdGVtcGxhdGVNYXA6IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSkgX3RlbXBsYXRlczogUXVlcnlMaXN0PFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmU+O1xuXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVEaXYnKSBfc2Nyb2xsYWJsZURpdjogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCdjb2x1bW5FbGVtZW50JykgX2NvbEVsZW1lbnRzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGRyZW4oVGREYXRhVGFibGVSb3dDb21wb25lbnQpIF9yb3dzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHNjcm9sbCBwb3NpdGlvbiB0byByZXBvc2l0aW9uIGNvbHVtbiBoZWFkZXJzXG4gICAqL1xuICBnZXQgY29sdW1uc0xlZnRTY3JvbGwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAqIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdmFsdWVzIGFyZSBzZWxlY3RlZC5cbiAgICovXG4gIGdldCBhbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB2YWx1ZXMgYXJlIG5vdCBkZXNlbGVjdGVkXG4gICAqIGFuZCBhdCBsZWFzdCBvbmUgaXMuXG4gICAqL1xuICBnZXQgaW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkYXRhPzoge1trZXk6IHN0cmluZ106IGFueX1bXVxuICAgKiBTZXRzIHRoZSBkYXRhIHRvIGJlIHJlbmRlcmVkIGFzIHJvd3MuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlID0gW107XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgdGhlIGRhdGEgaGFzIGNoYW5nZWRcbiAgICAgIHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB2aXJ0dWFsRGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxEYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbHVtbnM/OiBJVGREYXRhVGFibGVDb2x1bW5bXVxuICAgKiBTZXRzIGFkZGl0aW9uYWwgY29sdW1uIGNvbmZpZ3VyYXRpb24uIFtJVGREYXRhVGFibGVDb2x1bW4ubmFtZV0gaGFzIHRvIGV4aXN0IGluIFtkYXRhXSBhcyBrZXkuXG4gICAqIERlZmF1bHRzIHRvIFtkYXRhXSBrZXlzLlxuICAgKi9cbiAgQElucHV0KCdjb2x1bW5zJylcbiAgc2V0IGNvbHVtbnMoY29sczogSVRkRGF0YVRhYmxlQ29sdW1uW10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29scztcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJVGREYXRhVGFibGVDb2x1bW5bXSB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0RhdGEpIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcbiAgICAgIC8vIGlmIGNvbHVtbnMgaXMgdW5kZWZpbmVkLCB1c2Uga2V5IGluIFtkYXRhXSByb3dzIGFzIG5hbWUgYW5kIGxhYmVsIGZvciBjb2x1bW4gaGVhZGVycy5cbiAgICAgIGxldCByb3c6IGFueSA9IHRoaXMuX2RhdGFbMF07XG4gICAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGspKSB7XG4gICAgICAgICAgdGhpcy5fY29sdW1ucy5wdXNoKHsgbmFtZTogaywgbGFiZWw6IGsgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzaXphYmxlQ29sdW1ucz86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtYW51YWwgY29sdW1uIHJlc2l6ZS5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdyZXNpemFibGVDb2x1bW5zJylcbiAgc2V0IHJlc2l6YWJsZUNvbHVtbnMocmVzaXphYmxlQ29sdW1uczogYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVzaXphYmxlQ29sdW1ucyk7XG4gIH1cbiAgZ2V0IHJlc2l6YWJsZUNvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgc2VsZWN0aW9uIGV2ZW50cywgaG92ZXIgYW5kIHNlbGVjdGVkIHJvdyBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc2VsZWN0YWJsZScpXG4gIHNldCBzZWxlY3RhYmxlKHNlbGVjdGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNlbGVjdGFibGUpO1xuICB9XG4gIGdldCBzZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrYWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgY2xpY2sgZXZlbnRzLCBob3Zlci5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdjbGlja2FibGUnKVxuICBzZXQgY2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsaWNrYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjbGlja2FibGUpO1xuICB9XG4gIGdldCBjbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtdWx0aXBsZSByb3cgc2VsZWN0aW9uLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzb3J0YWJsZScpXG4gIHNldCBzb3J0YWJsZShzb3J0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNvcnRhYmxlKTtcbiAgfVxuICBnZXQgc29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRCeT86IHN0cmluZ1xuICAgKiBTZXRzIHRoZSBhY3RpdmUgc29ydCBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgnc29ydEJ5JylcbiAgc2V0IHNvcnRCeShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGNvbHVtbk5hbWUpO1xuICAgIGlmICghY29sdW1uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0QnldIG11c3QgYmUgYSB2YWxpZCBjb2x1bW4gbmFtZScpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgfVxuICBnZXQgc29ydEJ5Q29sdW1uKCk6IElUZERhdGFUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgdGhlIFtzb3J0QnldIGNvbHVtbi4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBsZXQgc29ydE9yZGVyOiBzdHJpbmcgPSBvcmRlciA/IG9yZGVyLnRvVXBwZXJDYXNlKCkgOiAnQVNDJztcbiAgICBpZiAoc29ydE9yZGVyICE9PSAnREVTQycgJiYgc29ydE9yZGVyICE9PSAnQVNDJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydE9yZGVyXSBtdXN0IGJlIGVtcHR5LCBBU0Mgb3IgREVTQycpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgP1xuICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuICBnZXQgc29ydE9yZGVyRW51bSgpOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlcjtcbiAgfVxuXG4gIGdldCBoYXNEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzb3J0Q2hhbmdlJykgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dTZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgc2VsZWN0ZWQvZGVzZWxlY3RlZC4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTZWxlY3RFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93U2VsZWN0Jykgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dDbGljaz86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93Q2xpY2snKSBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHNlbGVjdEFsbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQvZGVzZWxlY3RlZCBieSB0aGUgYWxsIGNoZWNrYm94LiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzZWxlY3RBbGwnKSBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21wYXJlV2l0aD86IGZ1bmN0aW9uKHJvdywgbW9kZWwpOiBib29sZWFuXG4gICAqIEFsbG93cyBjdXN0b20gY29tcGFyaXNvbiBiZXR3ZWVuIHJvdyBhbmQgbW9kZWwgdG8gc2VlIGlmIHJvdyBpcyBzZWxlY3RlZCBvciBub3RcbiAgICogRGVmYXVsdCBjb21wYXJhdGlvbiBpcyBieSByZWZlcmVuY2VcbiAgICovXG4gIEBJbnB1dCgnY29tcGFyZVdpdGgnKSBjb21wYXJlV2l0aDogKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiBib29sZWFuID0gKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHJvdyA9PT0gbW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgYW5kIHNjcm9sbCBldmVudHNcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnMgPSB0aGlzLl9vblJlc2l6ZS5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Jvd3MpIHtcbiAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KCkuZm9yRWFjaCgocm93OiBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XSA9IHJvdy5oZWlnaHQgKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgY29sdW1uIHJlc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICB0aGlzLl9jb2x1bW5SZXNpemVTdWJzID0gdGhpcy5fb25Db2x1bW5SZXNpemUuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICApLnN1YnNjcmliZSgoY2xpZW50WDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gY2xpZW50WDtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBzY3JvbGwgY29sdW1uIGhlYWRlciByZXBvc2l0aW9uXG4gICAgdGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMgPSB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKGhvcml6b250YWxTY3JvbGw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCA9IGhvcml6b250YWxTY3JvbGw7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHZpcnR1YWwgc2Nyb2xsIHJlbmRlcmluZ1xuICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3VicyA9IHRoaXMuX29uVmVydGljYWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGVtcGxhdGVzIGFuZCBzZXRzIHRoZW0gaW4gYSBtYXAgZm9yIGZhc3RlciBhY2Nlc3MuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlTWFwLnNldChcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVzLnRvQXJyYXkoKVtpXS50ZERhdGFUYWJsZVRlbXBsYXRlLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpW2ldLnRlbXBsYXRlUmVmLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGhvc3RzIG5hdGl2ZSBlbGVtZW50cyB3aWR0aHMgdG8gc2VlIGlmIGl0IGhhcyBjaGFuZ2VkIChyZXNpemUgY2hlY2spXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgbGV0IG5ld0hvc3RXaWR0aDogbnVtYmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgLy8gaWYgdGhlIHdpZHRoIGhhcyBjaGFuZ2VkIHRoZW4gd2UgdGhyb3cgYSByZXNpemUgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faG9zdFdpZHRoICE9PSBuZXdIb3N0V2lkdGgpIHtcbiAgICAgICAgdGhpcy5faG9zdFdpZHRoID0gbmV3SG9zdFdpZHRoO1xuICAgICAgICB0aGlzLl9vblJlc2l6ZS5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGxldCBuZXdIb3N0SGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgLy8gaWYgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgaGFzIGNoYW5nZWQsIHRoZW4gd2UgbWFyayBmb3IgY2hlY2tcbiAgICAgIGlmICh0aGlzLl9ob3N0SGVpZ2h0ICE9PSBuZXdIb3N0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX2hvc3RIZWlnaHQgPSBuZXdIb3N0SGVpZ2h0O1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRvIGFuIG9ic2VydmFibGUgdGhhdCBjaGVja3MgaWYgYWxsIHJvd3MgaGF2ZSBiZWVuIHJlbmRlcmVkXG4gICAqIHNvIHdlIGNhbiBzdGFydCBjYWxjdWxhdGluZyB0aGUgd2lkdGhzXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93c0NoYW5nZWRTdWJzID0gdGhpcy5fcm93cy5jaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25SZXNpemUubmV4dCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmVzIG9ic2VydmFibGVzIHdoZW4gZGF0YSB0YWJsZSBpcyBkZXN0cm95ZWRcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yZXNpemVTdWJzKSB7XG4gICAgICB0aGlzLl9yZXNpemVTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb2x1bW5SZXNpemVTdWJzKSB7XG4gICAgICB0aGlzLl9jb2x1bW5SZXNpemVTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3Vicykge1xuICAgICAgdGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3Vicykge1xuICAgICAgdGhpcy5fdmVydGljYWxTY3JvbGxTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb3dzQ2hhbmdlZFN1YnMpIHtcbiAgICAgIHRoaXMuX3Jvd3NDaGFuZ2VkU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWVDaGFuZ2VzU3Vicykge1xuICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBnZXRzIGV4ZWN1dGVkIGV2ZXJ5IHRpbWUgdGhlcmUgaXMgYSBzY3JvbGwgZXZlbnRcbiAgICogQ2FsbHMgdGhlIHNjcm9sbCBvYnNlcnZhYmxlXG4gICAqL1xuICBoYW5kbGVTY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgaG9yaXpvbnRhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgIT09IGhvcml6b250YWxTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5fb25Ib3Jpem9udGFsU2Nyb2xsLm5leHQoaG9yaXpvbnRhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgICBsZXQgdmVydGljYWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ICE9PSB2ZXJ0aWNhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLm5leHQodmVydGljYWxTY3JvbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBuZWVkZWQgZm9yIHRoZSBjb2x1bW5zIHZpYSBpbmRleFxuICAgKi9cbiAgZ2V0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3dpZHRoc1tpbmRleF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q2VsbFZhbHVlKGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoY29sdW1uLm5lc3RlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbi5uZXN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShjb2x1bW4ubmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVbY29sdW1uLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBtZXRob2QgZm9yIHRlbXBsYXRlIHJlZmVyZW5jZXNcbiAgICovXG4gICBnZXRUZW1wbGF0ZVJlZihuYW1lOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlTWFwLmdldChuYW1lKTtcbiAgIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG1vZGVsIChuZ01vZGVsKSBvZiBjb21wb25lbnQgYnkgcmVtb3ZpbmcgYWxsIHZhbHVlcyBpbiBhcnJheS5cbiAgICovXG4gIGNsZWFyTW9kZWwoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZS5zcGxpY2UoMCwgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyBkYXRhIHRhYmxlIGFuZCByZXJlbmRlcnMgW2RhdGFdIGFuZCBbY29sdW1uc11cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvciBjbGVhcnMgYWxsIHJvd3MgZGVwZW5kaW5nIG9uICdjaGVja2VkJyB2YWx1ZS5cbiAgICovXG4gIHNlbGVjdEFsbChjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IHRvZ2dsZWRSb3dzOiBhbnlbXSA9IFtdO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIC8vIHNraXBpbmcgYWxyZWFkeSBzZWxlY3RlZCByb3dzXG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlLnB1c2gocm93KTtcbiAgICAgICAgICAvLyBjaGVja2luZyB3aGljaCBvbmVzIGFyZSBiZWluZyB0b2dnbGVkXG4gICAgICAgICAgdG9nZ2xlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgaWYgKHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICAgICAgdG9nZ2xlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIGxldCBtb2RlbFJvdzogYW55ID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICAgICAgfSlbMF07XG4gICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2YobW9kZWxSb3cpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMub25TZWxlY3RBbGwuZW1pdCh7cm93czogdG9nZ2xlZFJvd3MsIHNlbGVjdGVkOiBjaGVja2VkfSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm93IGlzIHNlbGVjdGVkXG4gICAqL1xuICBpc1Jvd1NlbGVjdGVkKHJvdzogYW55KTogYm9vbGVhbiB7XG4gICAgLy8gY29tcGFyZSBpdGVtcyBieSBbY29tcGFyZVdpdGhdIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICB9KS5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvciBjbGVhcnMgYSByb3cgZGVwZW5kaW5nIG9uICdjaGVja2VkJyB2YWx1ZSBpZiB0aGUgcm93ICdpc1NlbGVjdGFibGUnXG4gICAqIGhhbmRsZXMgY250cmwgY2xpY2tzIGFuZCBzaGlmdCBjbGlja3MgZm9yIG11bHRpLXNlbGVjdFxuICAgKi9cbiAgc2VsZWN0KHJvdzogYW55LCBldmVudDogRXZlbnQsIGN1cnJlbnRTZWxlY3RlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBTaGlmdCBrZXkgaXMgc2VsZWN0ZWQgYW5kIG5lZWQgdG8gc2VsZWN0IGV2ZXJ5dGhpbmcgaW4gYmV0d2VlblxuICAgICAgbGV0IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgbW91c2VFdmVudCAmJiBtb3VzZUV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgbGV0IGZpcnN0SW5kZXg6IG51bWJlciA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgICAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0ZWQgPiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICBsYXN0SW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgY2xpY2tpbmcgYSBjaGVja2JveCBiZWhpbmQgdGhlIGluaXRpYWwgY2hlY2ssIHRoZW4gdG9nZ2xlIGFsbCBzZWxlY3Rpb25zIGV4cGVjdCB0aGUgaW5pdGlhbCBjaGVja2JveFxuICAgICAgICAvLyBlbHNlIHRoZSBjaGVja2JveGVzIGNsaWNrZWQgYXJlIGFsbCBhZnRlciB0aGUgaW5pdGlhbCBvbmVcbiAgICAgICAgaWYgKCh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPj0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID4gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KSB8fFxuICAgICAgICAgICAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDw9IGN1cnJlbnRTZWxlY3RlZCAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA8IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID4gY3VycmVudFNlbGVjdGVkKSB8fCAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDwgY3VycmVudFNlbGVjdGVkKSkge1xuICAgICAgICAgIC8vIGNoYW5nZSBpbmRleGVzIGRlcGVuZGluZyBvbiB3aGVyZSB0aGUgbmV4dCBjaGVja2JveCBpcyBzZWxlY3RlZCAoYmVmb3JlIG9yIGFmdGVyKVxuICAgICAgICAgIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPiBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGxhc3RJbmRleC0tO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDwgY3VycmVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBmaXJzdEluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3dTZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNSb3dTZWxlY3RlZCh0aGlzLl9kYXRhW2ldKTtcbiAgICAgICAgICAgIC8vIGlmIHJvdyBpcyBzZWxlY3RlZCBhbmQgZmlyc3QgY2hlY2tib3ggd2FzIHNlbGVjdGVkXG4gICAgICAgICAgICAvLyBvciBpZiByb3cgd2FzIHVuc2VsZWN0ZWQgYW5kIGZpcnN0IGNoZWNrYm94IHdhcyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAvLyB3ZSBpZ25vcmUgdGhlIHRvZ2dsZVxuICAgICAgICAgICAgaWYgKCh0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgJiYgIXJvd1NlbGVjdGVkKSB8fFxuICAgICAgICAgICAgICAgICghdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlICYmIHJvd1NlbGVjdGVkKSkge1xuICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCkge1xuICAgICAgICAgICAgICAvLyBlbHNlIGlmIHRoZSBjaGVja2JveCBzZWxlY3RlZCB3YXMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGFzdCBzZWxlY3Rpb24gYW5kIHRoZSBmaXJzdCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgLy8gdGhlbiB3ZSB1bmRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgIGlmICgoY3VycmVudFNlbGVjdGVkID49IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAmJiBjdXJyZW50U2VsZWN0ZWQgPD0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpIHx8XG4gICAgICAgICAgICAgICAgICAoY3VycmVudFNlbGVjdGVkIDw9IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAmJiBjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCA9IHRydWU7XG4gICAgICAvLyBpZiBzaGlmdCB3YXNudCBwcmVzc2VkLCB0aGVuIHdlIHRha2UgdGhlIGVsZW1lbnQgY2hlY2tlZCBhcyB0aGUgZmlyc3Qgcm93XG4gICAgICAvLyBpbmNhc2UgdGhlIG5leHQgY2xpY2sgdXNlcyBzaGlmdFxuICAgICAgfSBlbHNlIGlmIChtb3VzZUV2ZW50ICYmICFtb3VzZUV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSA9IHRoaXMuX2RvU2VsZWN0aW9uKHJvdywgY3VycmVudFNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBvbnNlbGVjdHN0YXJ0IG1ldGhvZCBvZiB0aGUgZG9jdW1lbnQgc28gb3RoZXIgdGV4dCBvbiB0aGUgcGFnZVxuICAgKiBkb2Vzbid0IGdldCBzZWxlY3RlZCB3aGVuIGRvaW5nIHNoaWZ0IHNlbGVjdGlvbnMuXG4gICAqL1xuICBkaXNhYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBvcmlnaW5hbCBvbnNlbGVjdHN0YXJ0IG1ldGhvZC5cbiAgICovXG4gIGVuYWJsZVRleHRTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9kb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0cyB0aGUgb25Sb3dDbGlja0V2ZW50IHdoZW4gYSByb3cgaXMgY2xpY2tlZFxuICAgKiBpZiBjbGlja2FibGUgaXMgdHJ1ZSBhbmQgc2VsZWN0YWJsZSBpcyBmYWxzZSB0aGVuIHNlbGVjdCB0aGUgcm93XG4gICAqL1xuICBoYW5kbGVSb3dDbGljayhyb3c6IGFueSwgaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xpY2thYmxlKSB7XG4gICAgICAvLyBpZ25vcmluZyBsaW50aW5nIHJ1bGVzIGhlcmUgYmVjYXVzZSBhdHRyaWJ1dGUgaXQgYWN0dWFsbHkgbnVsbCBvciBub3QgdGhlcmVcbiAgICAgIC8vIGNhbid0IGNoZWNrIGZvciB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNyY0VsZW1lbnQ6IGFueSA9IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKHNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdG9wUm93Q2xpY2snKSA9PT0gbnVsbCAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ21hdC1wc2V1ZG8tY2hlY2tib3gnKSB7XG4gICAgICAgIHRoaXMub25Sb3dDbGljay5lbWl0KHtcbiAgICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgaGFuZGxlIGZvciBzb3J0IGNsaWNrIGV2ZW50IGluIGNvbHVtbiBoZWFkZXJzLlxuICAgKi9cbiAgaGFuZGxlU29ydChjb2x1bW46IElUZERhdGFUYWJsZUNvbHVtbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zb3J0QnkgPT09IGNvbHVtbikge1xuICAgICAgdGhpcy5fc29ydE9yZGVyID0gdGhpcy5fc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcgP1xuICAgICAgICBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb3J0QnkgPSBjb2x1bW47XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gICAgfVxuICAgIHRoaXMub25Tb3J0Q2hhbmdlLm5leHQoeyBuYW1lOiB0aGlzLl9zb3J0QnkubmFtZSwgb3JkZXI6IHRoaXMuX3NvcnRPcmRlciB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYWxsIGtleXVwIGV2ZW50cyB3aGVuIGZvY3VzaW5nIGEgZGF0YSB0YWJsZSByb3dcbiAgICovXG4gIF9yb3dLZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCwgcm93OiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICAvKiogaWYgdXNlciBwcmVzc2VzIGVudGVyIG9yIHNwYWNlLCB0aGUgcm93IHNob3VsZCBiZSBzZWxlY3RlZCAqL1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiB1c2VycyBwcmVzc2VzIHRoZSB1cCBhcnJvdywgd2UgZm9jdXMgdGhlIHByZXYgcm93XG4gICAgICAgICAqIHVubGVzcyBpdHMgdGhlIGZpcnN0IHJvd1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3Jvd3MudG9BcnJheSgpW2luZGV4IC0gMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMubXVsdGlwbGUgJiYgZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5mcm9tUm93ICsgaW5kZXggPj0gMCkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiB1c2VycyBwcmVzc2VzIHRoZSBkb3duIGFycm93LCB3ZSBmb2N1cyB0aGUgbmV4dCByb3dcbiAgICAgICAgICogdW5sZXNzIGl0cyB0aGUgbGFzdCByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA8ICh0aGlzLl9yb3dzLnRvQXJyYXkoKS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgIHRoaXMuX3Jvd3MudG9BcnJheSgpW2luZGV4ICsgMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMubXVsdGlwbGUgJiYgZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5mcm9tUm93ICsgaW5kZXggPCB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29sdW1uIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGNvbHVtbiBhbmQgaW5pdGlhbCBjbGllbnRYIG9mIGNvbHVtblxuICAgKi9cbiAgX2hhbmRsZVN0YXJ0Q29sdW1uRHJhZyhpbmRleDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMuX3Jlc2l6aW5nQ29sdW1uID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBuZXcgd2lkdGggZGVwZW5kaW5nIG9uIG5ldyBjbGllbnRYIG9mIGRyYWdnZXIgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlQ29sdW1uRHJhZyhldmVudDogTW91c2VFdmVudCB8IERyYWdFdmVudCk6IHZvaWQge1xuICAgIC8vIGNoZWNrIGlmIHRoZXJlIHdhcyBiZWVuIGEgc2VwYXJhdG9yIGNsaWNrZWQgZm9yIHJlc2l6ZVxuICAgIGlmICh0aGlzLl9yZXNpemluZ0NvbHVtbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmNsaWVudFggPiAwKSB7XG4gICAgICBsZXQgeFBvc2l0aW9uOiBudW1iZXIgPSBldmVudC5jbGllbnRYO1xuICAgICAgLy8gY2hlY2tzIGlmIHRoZSBzZXBhcmF0b3IgaXMgYmVpbmcgbW92ZWQgdG8gdHJ5IGFuZCByZXNpemUgdGhlIGNvbHVtbiwgZWxzZSBkb250IGRvIGFueXRoaW5nXG4gICAgICBpZiAoeFBvc2l0aW9uID4gMCAmJiB0aGlzLl9jb2x1bW5DbGllbnRYID4gMCAmJiAoeFBvc2l0aW9uIC0gdGhpcy5fY29sdW1uQ2xpZW50WCkgIT09IDApIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgd2lkdGggZGVwZW5kaW5nIGlmIG1ha2luZyB0aGUgY29sdW1uIGJpZ2dlciBvciBzbWFsbGVyXG4gICAgICAgIGxldCBwcm9wb3NlZE1hbnVhbFdpZHRoOiBudW1iZXIgPSB0aGlzLl93aWR0aHNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnZhbHVlICsgKHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFgpO1xuICAgICAgICAvLyBpZiB0aGUgcHJvcG9zZWQgbmV3IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgcHJvamVjdGVkIG1pbiB3aWR0aCBvZiB0aGUgY29sdW1uLCB1c2UgcHJvamVjdGVkIG1pbiB3aWR0aFxuICAgICAgICBpZiAocHJvcG9zZWRNYW51YWxXaWR0aCA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9yZXNpemluZ0NvbHVtbl0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgICAgICBwcm9wb3NlZE1hbnVhbFdpZHRoID0gdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS5wcm9qZWN0ZWRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbnNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLndpZHRoID0gcHJvcG9zZWRNYW51YWxXaWR0aDtcbiAgICAgICAgLy8gdXBkYXRlIG5ldyB4IHBvc2l0aW9uIGZvciB0aGUgcmVzaXplZCBjb2x1bW5cbiAgICAgICAgdGhpcy5fb25Db2x1bW5SZXNpemUubmV4dCh4UG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmRzIGRyYWdnZWQgZmxhZ3NcbiAgICovXG4gIF9oYW5kbGVFbmRDb2x1bW5EcmFnKCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnRzXG4gICAqL1xuICBibG9ja0V2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXROZXN0ZWRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhbmFtZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgbGV0IHNwbGl0TmFtZTogc3RyaW5nW10gPSBuYW1lLnNwbGl0KC9cXC4oLispLywgMik7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0TmVzdGVkVmFsdWUoc3BsaXROYW1lWzFdLCB2YWx1ZVtzcGxpdE5hbWVbMF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHRoZSBhY3R1YWwgUm93IFNlbGVjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfZG9TZWxlY3Rpb24ocm93OiBhbnksIHJvd0luZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBsZXQgd2FzU2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzUm93U2VsZWN0ZWQocm93KTtcbiAgICBpZiAoIXdhc1NlbGVjdGVkKSB7XG4gICAgICBpZiAoIXRoaXMuX211bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJNb2RlbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZS5wdXNoKHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbXBhcmUgaXRlbXMgYnkgW2NvbXBhcmVXaXRoXSBmdW5jdGlvblxuICAgICAgcm93ID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgIH0pWzBdO1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpO1xuICAgIHRoaXMub25Sb3dTZWxlY3QuZW1pdCh7cm93OiByb3csIGluZGV4OiByb3dJbmRleCwgc2VsZWN0ZWQ6ICF3YXNTZWxlY3RlZH0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgcmV0dXJuICF3YXNTZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYWxsIHRoZSBzdGF0ZSBvZiBhbGwgY2hlY2tib3hlc1xuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSB0eXBlb2YgdGhpcy5fZGF0YS5maW5kKChkOiBhbnkpID0+ICF0aGlzLmlzUm93U2VsZWN0ZWQoZCkpID09PSAndW5kZWZpbmVkJztcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLl9kYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHdpZHRocyBmb3IgY29sdW1ucyBhbmQgY2VsbHMgZGVwZW5kaW5nIG9uIGNvbnRlbnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRocygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29sRWxlbWVudHMgJiYgdGhpcy5fY29sRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl93aWR0aHMgPSBbXTtcbiAgICAgIHRoaXMuX2NvbEVsZW1lbnRzLmZvckVhY2goKGNvbDogVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXgsIHRoaXMuX2NhbGN1bGF0ZVdpZHRoKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWRodHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGNvbHVtbnMgYWZ0ZXIgY2FsY3VsYXRpb24gdG8gc2VlIGlmIHRoZXkgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RDb2x1bW5XaWRodHMoKTogdm9pZCB7XG4gICAgbGV0IGZpeGVkVG90YWxXaWR0aDogbnVtYmVyID0gMDtcbiAgICAvLyBnZXQgdGhlIG51bWJlciBvZiB0b3RhbCBjb2x1bW5zIHRoYXQgaGF2ZSBmbGV4aWJsZSB3aWR0aHMgKG5vdCBmaXhlZCBvciBoaWRkZW4pXG4gICAgbGV0IGZsZXhpYmxlV2lkdGhzOiBudW1iZXIgPSB0aGlzLl93aWR0aHMuZmlsdGVyKCh3aWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbHVtbnNbaW5kZXhdLmhpZGRlbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAod2lkdGgubGltaXQgfHwgd2lkdGgubWF4IHx8IHdpZHRoLm1pbikge1xuICAgICAgICBmaXhlZFRvdGFsV2lkdGggKz0gd2lkdGgudmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gIXdpZHRoLmxpbWl0ICYmICF3aWR0aC5tYXggJiYgIXdpZHRoLm1pbjtcbiAgICB9KS5sZW5ndGg7XG4gICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIHBpeGVzIGFyZSBsZWZ0IHRoYXQgY291bGQgYmUgc3ByZWFkIGFjcm9zc1xuICAgIC8vIHRoZSBmbGV4aWJsZSBjb2x1bW5zXG4gICAgbGV0IHJlY2FsY3VsYXRlSG9zdFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGlmIChmaXhlZFRvdGFsV2lkdGggPCB0aGlzLmhvc3RXaWR0aCkge1xuICAgICAgcmVjYWxjdWxhdGVIb3N0V2lkdGggPSB0aGlzLmhvc3RXaWR0aCAtIGZpeGVkVG90YWxXaWR0aDtcbiAgICB9XG4gICAgLy8gaWYgd2UgaGF2ZSBmbGV4aWJsZSBjb2x1bW5zIGFuZCBwaXhlbHMgdG8gc3BhcmUgb24gdGhlbVxuICAgIC8vIHdlIHRyeSBhbmQgc3ByZWFkIHRoZSBwaXhlbHMgYWNyb3NzIHRoZW1cbiAgICBpZiAoZmxleGlibGVXaWR0aHMgJiYgcmVjYWxjdWxhdGVIb3N0V2lkdGgpIHtcbiAgICAgIGxldCBuZXdWYWx1ZTogbnVtYmVyID0gTWF0aC5mbG9vcihyZWNhbGN1bGF0ZUhvc3RXaWR0aCAvIGZsZXhpYmxlV2lkdGhzKTtcbiAgICAgIGxldCBhZGp1c3RlZE51bWJlcjogbnVtYmVyID0gMDtcbiAgICAgIC8vIGFkanVzdCB0aGUgY29sdW1uIHdpZHRocyB3aXRoIHRoZSBzcHJlYWQgcGl4ZWxzXG4gICAgICB0aGlzLl93aWR0aHMuZm9yRWFjaCgoY29sV2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLm1heCAmJiB0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLnZhbHVlID4gbmV3VmFsdWUgfHxcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubWluICYmIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0udmFsdWUgPCBuZXdWYWx1ZSB8fFxuICAgICAgICAgICAgIXRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubGltaXQpIHtcbiAgICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWR0aChjb2xXaWR0aC5pbmRleCwgbmV3VmFsdWUpO1xuICAgICAgICAgIGFkanVzdGVkTnVtYmVyKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gaWYgdGhlcmUgYXJlIHN0aWxsIGNvbHVtbnMgdGhhdCBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZCwgd2Ugc3RhcnQgb3ZlclxuICAgICAgbGV0IG5ld0ZsZXhpYmxlV2lkdGhzOiBudW1iZXIgPSB0aGlzLl93aWR0aHMuZmlsdGVyKCh3aWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgpID0+IHtcbiAgICAgICAgcmV0dXJuICF3aWR0aC5saW1pdCAmJiAhd2lkdGgubWF4O1xuICAgICAgfSkubGVuZ3RoO1xuICAgICAgaWYgKG5ld0ZsZXhpYmxlV2lkdGhzICE9PSBhZGp1c3RlZE51bWJlciAmJiBuZXdGbGV4aWJsZVdpZHRocyAhPT0gZmxleGlibGVXaWR0aHMpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkaHRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgYSBzaW5nbGUgY29sdW1uIHRvIHNlZSBpZiBpdCBjYW4gYmUgcmVjYWxjdWxhdGVkXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RDb2x1bW5XaWR0aChpbmRleDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fd2lkdGhzW2luZGV4XSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGxpbWl0OiBmYWxzZSxcbiAgICAgIG1pbjogZmFsc2UsXG4gICAgICBtYXg6IGZhbHNlLFxuICAgIH07XG4gICAgLy8gZmxhZyB0byBzZWUgaWYgd2UgbmVlZCB0byBza2lwIHRoZSBtaW4gd2lkdGggcHJvamVjdGlvblxuICAgIC8vIGRlcGVuZGluZyBpZiBhIHdpZHRoIG9yIG1pbiB3aWR0aCBoYXMgYmVlbiBwcm92aWRlZFxuICAgIGxldCBza2lwTWluV2lkdGhQcm9qZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0pIHtcbiAgICAgIC8vIGlmIHRoZSBwcm92aWRlZCB3aWR0aCBoYXMgbWluL21heCwgdGhlbiB3ZSBjaGVjayB0byBzZWUgaWYgd2UgbmVlZCB0byBzZXQgaXRcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IHdpZHRoT3B0czogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggPSA8SVRkRGF0YVRhYmxlQ29sdW1uV2lkdGg+dGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aDtcbiAgICAgICAgLy8gaWYgdGhlIGNvbHVtbiB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIGNvbmZpZ3VyZWQgbWluLCB3ZSBvdmVycmlkZSBpdFxuICAgICAgICBza2lwTWluV2lkdGhQcm9qZWN0aW9uID0gKHdpZHRoT3B0cyAmJiAhIXdpZHRoT3B0cy5taW4pO1xuICAgICAgICBpZiAod2lkdGhPcHRzICYmIHdpZHRoT3B0cy5taW4gPj0gdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB3aWR0aE9wdHMubWluO1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubWluID0gdHJ1ZTtcbiAgICAgICAgLy8gaWYgdGhlIGNvbHVtbiB3aWR0aCBpcyBtb3JlIHRoYW4gdGhlIGNvbmZpZ3VyZWQgbWF4LCB3ZSBvdmVycmlkZSBpdFxuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoT3B0cyAmJiB3aWR0aE9wdHMubWF4IDw9IHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gd2lkdGhPcHRzLm1heDtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1heCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIC8vIGlmIGl0IGhhcyBhIGZpeGVkIHdpZHRoLCB0aGVuIHdlIGp1c3Qgc2V0IGl0XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gPG51bWJlcj50aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoO1xuICAgICAgICBza2lwTWluV2lkdGhQcm9qZWN0aW9uID0gdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIHdhc24ndCBhbnkgd2lkdGggb3IgbWluIHdpZHRoIHByb3ZpZGVkLCB3ZSBzZXQgYSBtaW4gdG8gd2hhdCB0aGUgY29sdW1uIHdpZHRoIG1pbiBzaG91bGQgYmVcbiAgICBpZiAoIXNraXBNaW5XaWR0aFByb2plY3Rpb24gJiZcbiAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbaW5kZXhdLnByb2plY3RlZFdpZHRoO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmljIG1ldGhvZCB0byBjYWxjdWxhdGUgY29sdW1uIHdpZHRoXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCByZW5kZXJlZENvbHVtbnM6IElUZERhdGFUYWJsZUNvbHVtbltdID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sOiBJVGREYXRhVGFibGVDb2x1bW4pID0+ICFjb2wuaGlkZGVuKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmhvc3RXaWR0aCAvIHJlbmRlcmVkQ29sdW1ucy5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjYWxjdWxhdGUgdGhlIHJvd3MgdG8gYmUgcmVuZGVyZWQgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVWaXJ0dWFsUm93cygpOiB2b2lkIHtcbiAgICBsZXQgc2Nyb2xsZWRSb3dzOiBudW1iZXIgPSAwO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG4gICAgICBsZXQgcm93SGVpZ2h0U3VtOiBudW1iZXIgPSAwO1xuICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCByb3dzIHRvIHNlZSBpZiB3ZSBoYXZlIHRoZWlyIGhlaWdodCBjYWNoZWRcbiAgICAgIC8vIGFuZCBzdW0gdGhlbSBhbGwgdG8gY2FsY3VsYXRlIHRoZSB0b3RhbCBoZWlnaHRcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgoZDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCByb3dzIGF0IGZpcnN0IGFuZCBhc3N1bWUgYWxsXG4gICAgICAgIC8vIHJvd3MgYXJlIHRoZSBzYW1lIGhlaWdodCBhcyB0aGUgZmlyc3Qgb25lXG4gICAgICAgIGlmICghdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaV0pIHtcbiAgICAgICAgICB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSA9IHRoaXMuX3Jvd0hlaWdodENhY2hlWzBdIHx8IFREX1ZJUlRVQUxfREVGQVVMVF9ST1dfSEVJR0hUO1xuICAgICAgICB9XG4gICAgICAgIHJvd0hlaWdodFN1bSArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXTtcbiAgICAgICAgLy8gY2hlY2sgaG93IG1hbnkgcm93cyBoYXZlIGJlZW4gc2Nyb2xsZWRcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC0gcm93SGVpZ2h0U3VtID4gMCkge1xuICAgICAgICAgIHNjcm9sbGVkUm93cysrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gcm93SGVpZ2h0U3VtO1xuICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIHJvdyB0byBiZSByZW5kZXJlZCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSByb3cgb2Zmc2V0XG4gICAgICBsZXQgZnJvbVJvdzogbnVtYmVyID0gc2Nyb2xsZWRSb3dzIC0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gZnJvbVJvdyA+IDAgPyBmcm9tUm93IDogMDtcblxuICAgICAgbGV0IGhvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX2hvc3RIZWlnaHQ7XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XG4gICAgICAvLyBjYWxjdWxhdGUgaG93IG1hbnkgcm93cyBjYW4gZml0IGluIHRoZSB2aWV3cG9ydFxuICAgICAgd2hpbGUgKGhvc3RIZWlnaHQgPiAwKSB7XG4gICAgICAgIGhvc3RIZWlnaHQgLT0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbdGhpcy5mcm9tUm93ICsgaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgICAgLy8gc2V0IHRoZSBsYXN0IHJvdyB0byBiZSByZW5kZXJlZCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSByb3cgb2Zmc2V0XG4gICAgICBsZXQgcmFuZ2U6IG51bWJlciA9IChpbmRleCAtIDEpICsgKFREX1ZJUlRVQUxfT0ZGU0VUICogMik7XG4gICAgICBsZXQgdG9Sb3c6IG51bWJlciA9IHJhbmdlICsgdGhpcy5mcm9tUm93O1xuICAgICAgLy8gaWYgbGFzdCByb3cgaXMgZ3JlYXRlciB0aGFuIHRoZSB0b3RhbCBsZW5ndGgsIHRoZW4gd2UgdXNlIHRoZSB0b3RhbCBsZW5ndGhcbiAgICAgIGlmIChpc0Zpbml0ZSh0b1JvdykgJiYgdG9Sb3cgPiB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICB0b1JvdyA9IHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmICghaXNGaW5pdGUodG9Sb3cpKSB7XG4gICAgICAgIHRvUm93ID0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB9XG4gICAgICB0aGlzLl90b1JvdyA9IHRvUm93O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gMDtcbiAgICAgIHRoaXMuX3RvUm93ID0gMDtcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcHJvcGVyIG9mZnNldCBkZXBlbmRpbmcgb24gaG93IG1hbnkgcm93cyBoYXZlIGJlZW4gc2Nyb2xsZWRcbiAgICBpZiAoc2Nyb2xsZWRSb3dzID4gVERfVklSVFVBTF9PRkZTRVQpIHtcbiAgICAgIGZvciAobGV0IGluZGV4OiBudW1iZXIgPSAwOyBpbmRleCA8IHRoaXMuZnJvbVJvdzsgaW5kZXgrKykge1xuICAgICAgICBvZmZzZXQgKz0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaW5kZXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX29mZnNldFRyYW5zZm9ybSA9IHRoaXMuX2RvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3RyYW5zbGF0ZVkoJyArIChvZmZzZXQgLSB0aGlzLnRvdGFsSGVpZ2h0KSArICdweCknKTtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fdmlydHVhbERhdGEgPSB0aGlzLmRhdGEuc2xpY2UodGhpcy5mcm9tUm93LCB0aGlzLnRvUm93KTtcbiAgICB9XG4gICAgLy8gbWFyayBmb3IgY2hlY2sgYXQgdGhlIGVuZCBvZiB0aGUgcXVldWUgc28gd2UgYXJlIHN1cmVcbiAgICAvLyB0aGF0IHRoZSBjaGFuZ2VzIHdpbGwgYmUgbWFya2VkXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxufVxuIl19