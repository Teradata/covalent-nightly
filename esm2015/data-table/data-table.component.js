/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ContentChildren, QueryList, Inject, Optional, ViewChildren, ElementRef, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
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
        this._sortOrder = sortOrder === 'ASC' ? TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
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
        this._columnResizeSubs = this._onColumnResize
            .asObservable()
            .pipe(debounceTime(0))
            .subscribe((clientX) => {
            this._columnClientX = clientX;
            this._calculateWidths();
            this._changeDetectorRef.markForCheck();
        });
        // initialize observable for scroll column header reposition
        this._horizontalScrollSubs = this._onHorizontalScroll.asObservable().subscribe((horizontalScroll) => {
            this._scrollHorizontalOffset = horizontalScroll;
            this._changeDetectorRef.markForCheck();
        });
        // initialize observable for virtual scroll rendering
        this._verticalScrollSubs = this._onVerticalScroll.asObservable().subscribe((verticalScroll) => {
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
        // check if the scroll has been reset when element is hidden
        if (this._scrollVerticalOffset - this._scrollableDiv.nativeElement.scrollTop > 5) {
            // scroll back to the top if element has been reset
            this._onVerticalScroll.next(0);
        }
        if (this._elementRef.nativeElement) {
            /** @type {?} */
            let newHostWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth) {
                setTimeout(() => {
                    this._hostWidth = newHostWidth;
                    this._onResize.next();
                }, 0);
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
        let element = (/** @type {?} */ (event.target));
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
        return this.value
            ? this.value.filter((val) => {
                return this.compareWith(row, val);
            }).length > 0
            : false;
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
                else if (this._firstSelectedIndex > currentSelected || this._firstSelectedIndex < currentSelected) {
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
                        if ((this._firstCheckboxValue && !rowSelected) || (!this._firstCheckboxValue && rowSelected)) {
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
            this._sortOrder =
                this._sortOrder === TdDataTableSortingOrder.Ascending
                    ? TdDataTableSortingOrder.Descending
                    : TdDataTableSortingOrder.Ascending;
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
                if (index < this._rows.toArray().length - 1) {
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
            if (xPosition > 0 && this._columnClientX > 0 && xPosition - this._columnClientX !== 0) {
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
                if ((this._widths[colWidth.index].max && this._widths[colWidth.index].value > newValue) ||
                    (this._widths[colWidth.index].min && this._widths[colWidth.index].value < newValue) ||
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
                skipMinWidthProjection = widthOpts && !!widthOpts.min;
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
        if (!skipMinWidthProjection && this._widths[index].value < this._colElements.toArray()[index].projectedWidth) {
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
            let range = index - 1 + TD_VIRTUAL_OFFSET * 2;
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
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdDataTableComponent),
                        multi: true,
                    },
                ],
                selector: 'td-data-table',
                template: "<table td-data-table [style.left.px]=\"columnsLeftScroll\" [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\" (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\"\n        >\n        </mat-checkbox>\n      </th>\n      <th\n        td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\"\n      >\n        <span [matTooltip]=\"column.tooltip\">{{ column.label }}</span>\n        <span\n          td-column-resizer\n          *ngIf=\"resizableColumns\"\n          draggable=\"true\"\n          class=\"td-data-table-column-resizer\"\n          [class.td-resizing]=\"i === resizingColumn\"\n          (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n          (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n          (drag)=\"_handleColumnDrag($event)\"\n          (dragend)=\"_handleEndColumnDrag()\"\n          (mouseup)=\"_handleEndColumnDrag()\"\n        >\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\" (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table\n    td-data-table\n    [style.transform]=\"offsetTransform\"\n    [style.position]=\"'absolute'\"\n    [class.mat-selectable]=\"selectable\"\n    [class.mat-clickable]=\"clickable\"\n  >\n    <tbody class=\"td-data-table-body\">\n      <tr\n        td-data-table-row\n        #dtRow\n        [tabIndex]=\"selectable ? 0 : -1\"\n        [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n        *ngFor=\"let row of virtualData; let rowIndex = index\"\n        (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n        (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n        (keydown.space)=\"blockEvent($event)\"\n        (keydown.shift.space)=\"blockEvent($event)\"\n        (keydown.shift)=\"disableTextSelection()\"\n        (keyup.shift)=\"enableTextSelection()\"\n      >\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\"\n          >\n          </mat-pseudo-checkbox>\n        </td>\n        <td\n          td-data-table-cell\n          [numeric]=\"column.numeric\"\n          [hidden]=\"column.hidden\"\n          *ngFor=\"let column of columns; let i = index\"\n          [style.min-width.px]=\"getColumnWidth(i)\"\n          [style.max-width.px]=\"getColumnWidth(i)\"\n        >\n          <span *ngIf=\"!getTemplateRef(column.name)\">{{\n            column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)\n          }}</span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{\n              value: getCellValue(column, row),\n              row: row,\n              column: column.name,\n              index: rowIndex\n            }\"\n          >\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUdULGVBQWUsRUFHZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixZQUFZLEVBQ1osVUFBVSxHQUdYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRSxPQUFPLEVBQTRCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFLcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFMUYsT0FBTyxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7SUFHdkYsV0FBWSxLQUFLO0lBQ2pCLFlBQWEsTUFBTTs7Ozs7O0FBR3JCLDZDQUdDOzs7SUFGQyxzQ0FBYTs7SUFDYixzQ0FBYTs7Ozs7QUFHZix3Q0FXQzs7O0lB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QSx5Q0FBb0Q7O0lBQ3BELDJDQUErQjs7SUFDL0IsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVGVtcGxhdGVSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIERPV05fQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsXG4gIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LFxufSBmcm9tICcuL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtdGFibGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGVudW0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIge1xuICBBc2NlbmRpbmcgPSAnQVNDJyxcbiAgRGVzY2VuZGluZyA9ICdERVNDJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCB7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgbnVtZXJpYz86IGJvb2xlYW47XG4gIGZvcm1hdD86ICh2YWx1ZTogYW55KSA9PiBhbnk7XG4gIG5lc3RlZD86IGJvb2xlYW47XG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgZmlsdGVyPzogYm9vbGVhbjtcbiAgd2lkdGg/OiBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVTZWxlY3RFdmVudCB7XG4gIHJvdzogYW55O1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudCB7XG4gIHJvd3M6IGFueVtdO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50IHtcbiAgcm93OiBhbnk7XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUludGVybmFsQ29sdW1uV2lkdGgge1xuICB2YWx1ZTogbnVtYmVyO1xuICBsaW1pdDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbWluPzogYm9vbGVhbjtcbiAgbWF4PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb25zdGFudCB0byBzZXQgdGhlIHJvd3Mgb2Zmc2V0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHZpZXdwb3J0XG4gKi9cbmNvbnN0IFREX1ZJUlRVQUxfT0ZGU0VUOiBudW1iZXIgPSAyO1xuXG4vKipcbiAqIENvbnN0YW50IHRvIHNldCBkZWZhdWx0IHJvdyBoZWlnaHQgaWYgbm9uZSBpcyBwcm92aWRlZFxuICovXG5jb25zdCBURF9WSVJUVUFMX0RFRkFVTFRfUk9XX0hFSUdIVDogbnVtYmVyID0gNDg7XG5cbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRGF0YVRhYmxlTWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihUZERhdGFUYWJsZUJhc2UsIFtdKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGREYXRhVGFibGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0ZC1kYXRhLXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIGlucHV0czogWyd2YWx1ZSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDb21wb25lbnQgZXh0ZW5kcyBfVGREYXRhVGFibGVNaXhpbkJhc2VcbiAgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIHJlc3BvbnNpdmUgd2lkdGggY2FsY3VsYXRpb25zICovXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcm93c0NoYW5nZWRTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2hvc3RXaWR0aDogbnVtYmVyID0gMDtcblxuICAvKiogbWFudWFsbHkgcmVzaXphYmxlIGNvbHVtbnMgKi9cbiAgcHJpdmF0ZSBfcmVzaXphYmxlQ29sdW1uczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2x1bW5DbGllbnRYOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jb2x1bW5SZXNpemVTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Jlc2l6aW5nQ29sdW1uOiBudW1iZXI7XG4gIHByaXZhdGUgX29uQ29sdW1uUmVzaXplOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgZ2V0IHJlc2l6aW5nQ29sdW1uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6aW5nQ29sdW1uO1xuICB9XG5cbiAgZ2V0IGhvc3RXaWR0aCgpOiBudW1iZXIge1xuICAgIC8vIGlmIHRoZSBjaGVja2JveGVzIGFyZSByZW5kZXJlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlaXIgd2lkdGhcbiAgICAvLyBmcm9tIHRoZSB0b3RhbCB3aWR0aCB0byBjYWxjdWxhdGUgcHJvcGVybHlcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faG9zdFdpZHRoIC0gNDI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ob3N0V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIF93aWR0aHM6IElJbnRlcm5hbENvbHVtbldpZHRoW10gPSBbXTtcbiAgcHJpdmF0ZSBfb25SZXNpemU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBjb2x1bW4gaGVhZGVyIHJlcG9zaXRpb24gYW5kIHZpZXdwb29ydCAqL1xuICBwcml2YXRlIF92ZXJ0aWNhbFNjcm9sbFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfaG9yaXpvbnRhbFNjcm9sbFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc2Nyb2xsSG9yaXpvbnRhbE9mZnNldDogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIF9vbkhvcml6b250YWxTY3JvbGw6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfb25WZXJ0aWNhbFNjcm9sbDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIC8vIEFycmF5IG9mIGNhY2hlZCByb3cgaGVpZ2h0cyB0byBhbGxvdyBkeW5hbWljIHJvdyBoZWlnaHRzXG4gIHByaXZhdGUgX3Jvd0hlaWdodENhY2hlOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUb3RhbCBwc2V1ZG8gaGVpZ2h0IG9mIGFsbCB0aGUgZWxlbWVudHNcbiAgcHJpdmF0ZSBfdG90YWxIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8vIFRvdGFsIGhvc3QgaGVpZ2h0IGZvciB0aGUgdmlld3BvcnRcbiAgcHJpdmF0ZSBfaG9zdEhlaWdodDogbnVtYmVyID0gMDtcbiAgLy8gU2Nyb2xsZWQgdmVydGljYWwgcGl4ZWxzXG4gIHByaXZhdGUgX3Njcm9sbFZlcnRpY2FsT2Zmc2V0OiBudW1iZXIgPSAwO1xuICAvLyBTdHlsZSB0byBtb3ZlIHRoZSBjb250ZW50IGEgY2VydGFpbiBvZmZzZXQgZGVwZW5kaW5nIG9uIHNjcm9sbGVkIG9mZnNldFxuICBwcml2YXRlIF9vZmZzZXRUcmFuc2Zvcm06IFNhZmVTdHlsZTtcblxuICAvLyBWYXJpYWJsZXMgdGhhdCBzZXQgZnJvbSBhbmQgdG8gd2hpY2ggcm93cyB3aWxsIGJlIHJlbmRlcmVkXG4gIHByaXZhdGUgX2Zyb21Sb3c6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvUm93OiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQgc3R5bGUgd2l0aCBhIHByb3BlciBjYWxjdWxhdGlvbiBvbiBob3cgbXVjaCBpdCBzaG91bGQgbW92ZVxuICAgKiBvdmVyIHRoZSB5IGF4aXMgb2YgdGhlIHRvdGFsIGhlaWdodFxuICAgKi9cbiAgZ2V0IG9mZnNldFRyYW5zZm9ybSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUcmFuc2Zvcm07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXNzdW1lZCB0b3RhbCBoZWlnaHQgb2YgdGhlIHJvd3NcbiAgICovXG4gIGdldCB0b3RhbEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbml0aWFsIHJvdyB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBnZXQgZnJvbVJvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9mcm9tUm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhc3Qgcm93IHRvIHJlbmRlciBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIGdldCB0b1JvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b1JvdztcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlc1N1YnM6IFN1YnNjcmlwdGlvbjtcbiAgLyoqIGludGVybmFsIGF0dHJpYnV0ZXMgKi9cbiAgcHJpdmF0ZSBfZGF0YTogYW55W107XG4gIC8vIGRhdGEgdmlydHVhbGx5IGl0ZXJhdGVkIGJ5IGNvbXBvbmVudFxuICBwcml2YXRlIF92aXJ0dWFsRGF0YTogYW55W107XG4gIHByaXZhdGUgX2NvbHVtbnM6IElUZERhdGFUYWJsZUNvbHVtbltdO1xuICBwcml2YXRlIF9zZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NsaWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2FsbFNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2luZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogc29ydGluZyAqL1xuICBwcml2YXRlIF9zb3J0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zb3J0Qnk6IElUZERhdGFUYWJsZUNvbHVtbjtcbiAgcHJpdmF0ZSBfc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcblxuICAvKiogc2hpZnQgc2VsZWN0ICovXG4gIHByaXZhdGUgX3NoaWZ0UHJldmlvdXNseVByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGFzdFNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIF9maXJzdFNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIF9maXJzdENoZWNrYm94VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogdGVtcGxhdGUgZmV0Y2hpbmcgc3VwcG9ydCAqL1xuICBwcml2YXRlIF90ZW1wbGF0ZU1hcDogTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlKSBfdGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZT47XG5cbiAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZURpdicpIF9zY3JvbGxhYmxlRGl2OiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2NvbHVtbkVsZW1lbnQnKSBfY29sRWxlbWVudHM6IFF1ZXJ5TGlzdDxUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZHJlbihUZERhdGFUYWJsZVJvd0NvbXBvbmVudCkgX3Jvd3M6IFF1ZXJ5TGlzdDxUZERhdGFUYWJsZVJvd0NvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc2Nyb2xsIHBvc2l0aW9uIHRvIHJlcG9zaXRpb24gY29sdW1uIGhlYWRlcnNcbiAgICovXG4gIGdldCBjb2x1bW5zTGVmdFNjcm9sbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ICogLTE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB2YWx1ZXMgYXJlIHNlbGVjdGVkLlxuICAgKi9cbiAgZ2V0IGFsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxTZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHZhbHVlcyBhcmUgbm90IGRlc2VsZWN0ZWRcbiAgICogYW5kIGF0IGxlYXN0IG9uZSBpcy5cbiAgICovXG4gIGdldCBpbmRldGVybWluYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmRldGVybWluYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIGRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fVtdXG4gICAqIFNldHMgdGhlIGRhdGEgdG8gYmUgcmVuZGVyZWQgYXMgcm93cy5cbiAgICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fcm93SGVpZ2h0Q2FjaGUgPSBbXTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgLy8gc2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCBpZiB0aGUgZGF0YSBoYXMgY2hhbmdlZFxuICAgICAgdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IHZpcnR1YWxEYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbERhdGE7XG4gIH1cblxuICAvKipcbiAgICogY29sdW1ucz86IElUZERhdGFUYWJsZUNvbHVtbltdXG4gICAqIFNldHMgYWRkaXRpb25hbCBjb2x1bW4gY29uZmlndXJhdGlvbi4gW0lUZERhdGFUYWJsZUNvbHVtbi5uYW1lXSBoYXMgdG8gZXhpc3QgaW4gW2RhdGFdIGFzIGtleS5cbiAgICogRGVmYXVsdHMgdG8gW2RhdGFdIGtleXMuXG4gICAqL1xuICBASW5wdXQoJ2NvbHVtbnMnKVxuICBzZXQgY29sdW1ucyhjb2xzOiBJVGREYXRhVGFibGVDb2x1bW5bXSkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2xzO1xuICB9XG4gIGdldCBjb2x1bW5zKCk6IElUZERhdGFUYWJsZUNvbHVtbltdIHtcbiAgICBpZiAodGhpcy5fY29sdW1ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzRGF0YSkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IFtdO1xuICAgICAgLy8gaWYgY29sdW1ucyBpcyB1bmRlZmluZWQsIHVzZSBrZXkgaW4gW2RhdGFdIHJvd3MgYXMgbmFtZSBhbmQgbGFiZWwgZm9yIGNvbHVtbiBoZWFkZXJzLlxuICAgICAgbGV0IHJvdzogYW55ID0gdGhpcy5fZGF0YVswXTtcbiAgICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoazogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fY29sdW1ucy5maW5kKChjOiBhbnkpID0+IGMubmFtZSA9PT0gaykpIHtcbiAgICAgICAgICB0aGlzLl9jb2x1bW5zLnB1c2goeyBuYW1lOiBrLCBsYWJlbDogayB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXNpemFibGVDb2x1bW5zPzogYm9vbGVhblxuICAgKiBFbmFibGVzIG1hbnVhbCBjb2x1bW4gcmVzaXplLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3Jlc2l6YWJsZUNvbHVtbnMnKVxuICBzZXQgcmVzaXphYmxlQ29sdW1ucyhyZXNpemFibGVDb2x1bW5zOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVzaXphYmxlQ29sdW1ucyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXNpemFibGVDb2x1bW5zKTtcbiAgfVxuICBnZXQgcmVzaXphYmxlQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzaXphYmxlQ29sdW1ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZWxlY3RhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHJvdyBzZWxlY3Rpb24gZXZlbnRzLCBob3ZlciBhbmQgc2VsZWN0ZWQgcm93IHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzZWxlY3RhYmxlJylcbiAgc2V0IHNlbGVjdGFibGUoc2VsZWN0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc2VsZWN0YWJsZSk7XG4gIH1cbiAgZ2V0IHNlbGVjdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGFibGU7XG4gIH1cblxuICAvKipcbiAgICogY2xpY2thYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHJvdyBjbGljayBldmVudHMsIGhvdmVyLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ2NsaWNrYWJsZScpXG4gIHNldCBjbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2xpY2thYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGNsaWNrYWJsZSk7XG4gIH1cbiAgZ2V0IGNsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpY2thYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIG11bHRpcGxlIHJvdyBzZWxlY3Rpb24uIFtzZWxlY3RhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICAvKipcbiAgICogc29ydGFibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgc29ydGluZyBldmVudHMsIHNvcnQgaWNvbnMgYW5kIGFjdGl2ZSBjb2x1bW4gc3RhdGVzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3NvcnRhYmxlJylcbiAgc2V0IHNvcnRhYmxlKHNvcnRhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc29ydGFibGUpO1xuICB9XG4gIGdldCBzb3J0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydGFibGU7XG4gIH1cblxuICAvKipcbiAgICogc29ydEJ5Pzogc3RyaW5nXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBzb3J0IGNvbHVtbi4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKi9cbiAgQElucHV0KCdzb3J0QnknKVxuICBzZXQgc29ydEJ5KGNvbHVtbk5hbWU6IHN0cmluZykge1xuICAgIGlmICghY29sdW1uTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb2x1bW46IElUZERhdGFUYWJsZUNvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKChjOiBhbnkpID0+IGMubmFtZSA9PT0gY29sdW1uTmFtZSk7XG4gICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW3NvcnRCeV0gbXVzdCBiZSBhIHZhbGlkIGNvbHVtbiBuYW1lJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydEJ5ID0gY29sdW1uO1xuICB9XG4gIGdldCBzb3J0QnlDb2x1bW4oKTogSVRkRGF0YVRhYmxlQ29sdW1uIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRPcmRlcj86IFsnQVNDJyB8ICdERVNDJ10gb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXJcbiAgICogU2V0cyB0aGUgc29ydCBvcmRlciBvZiB0aGUgW3NvcnRCeV0gY29sdW1uLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIERlZmF1bHRzIHRvICdBU0MnIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKi9cbiAgQElucHV0KCdzb3J0T3JkZXInKVxuICBzZXQgc29ydE9yZGVyKG9yZGVyOiAnQVNDJyB8ICdERVNDJykge1xuICAgIGxldCBzb3J0T3JkZXI6IHN0cmluZyA9IG9yZGVyID8gb3JkZXIudG9VcHBlckNhc2UoKSA6ICdBU0MnO1xuICAgIGlmIChzb3J0T3JkZXIgIT09ICdERVNDJyAmJiBzb3J0T3JkZXIgIT09ICdBU0MnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0T3JkZXJdIG11c3QgYmUgZW1wdHksIEFTQyBvciBERVNDJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydE9yZGVyID0gc29ydE9yZGVyID09PSAnQVNDJyA/IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyA6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmc7XG4gIH1cbiAgZ2V0IHNvcnRPcmRlckVudW0oKTogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXI7XG4gIH1cblxuICBnZXQgaGFzRGF0YSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogc29ydENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY29sdW1uIGhlYWRlcnMgYXJlIGNsaWNrZWQuIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc29ydENoYW5nZScpIG9uU29ydENoYW5nZTogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudFxuICA+KCk7XG5cbiAgLyoqXG4gICAqIHJvd1NlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdyb3dTZWxlY3QnKSBvblJvd1NlbGVjdDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHJvd0NsaWNrPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgcm93IGlzIGNsaWNrZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdyb3dDbGljaycpIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudFxuICA+KCk7XG5cbiAgLyoqXG4gICAqIHNlbGVjdEFsbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQvZGVzZWxlY3RlZCBieSB0aGUgYWxsIGNoZWNrYm94LiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzZWxlY3RBbGwnKSBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnRcbiAgPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBhcmVXaXRoPzogZnVuY3Rpb24ocm93LCBtb2RlbCk6IGJvb2xlYW5cbiAgICogQWxsb3dzIGN1c3RvbSBjb21wYXJpc29uIGJldHdlZW4gcm93IGFuZCBtb2RlbCB0byBzZWUgaWYgcm93IGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgKiBEZWZhdWx0IGNvbXBhcmF0aW9uIGlzIGJ5IHJlZmVyZW5jZVxuICAgKi9cbiAgQElucHV0KCdjb21wYXJlV2l0aCcpIGNvbXBhcmVXaXRoOiAocm93OiBhbnksIG1vZGVsOiBhbnkpID0+IGJvb2xlYW4gPSAocm93OiBhbnksIG1vZGVsOiBhbnkpID0+IHtcbiAgICByZXR1cm4gcm93ID09PSBtb2RlbDtcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgYW5kIHNjcm9sbCBldmVudHNcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnMgPSB0aGlzLl9vblJlc2l6ZS5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Jvd3MpIHtcbiAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KCkuZm9yRWFjaCgocm93OiBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XSA9IHJvdy5oZWlnaHQgKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgY29sdW1uIHJlc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICB0aGlzLl9jb2x1bW5SZXNpemVTdWJzID0gdGhpcy5fb25Db2x1bW5SZXNpemVcbiAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDApKVxuICAgICAgLnN1YnNjcmliZSgoY2xpZW50WDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSBjbGllbnRYO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHNjcm9sbCBjb2x1bW4gaGVhZGVyIHJlcG9zaXRpb25cbiAgICB0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3VicyA9IHRoaXMuX29uSG9yaXpvbnRhbFNjcm9sbC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKGhvcml6b250YWxTY3JvbGw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCA9IGhvcml6b250YWxTY3JvbGw7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHZpcnR1YWwgc2Nyb2xsIHJlbmRlcmluZ1xuICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3VicyA9IHRoaXMuX29uVmVydGljYWxTY3JvbGwuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCh2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsU2Nyb2xsO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMgPSB0aGlzLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRlbXBsYXRlcyBhbmQgc2V0cyB0aGVtIGluIGEgbWFwIGZvciBmYXN0ZXIgYWNjZXNzLlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZU1hcC5zZXQodGhpcy5fdGVtcGxhdGVzLnRvQXJyYXkoKVtpXS50ZERhdGFUYWJsZVRlbXBsYXRlLCB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpW2ldLnRlbXBsYXRlUmVmKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGhvc3RzIG5hdGl2ZSBlbGVtZW50cyB3aWR0aHMgdG8gc2VlIGlmIGl0IGhhcyBjaGFuZ2VkIChyZXNpemUgY2hlY2spXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHNjcm9sbCBoYXMgYmVlbiByZXNldCB3aGVuIGVsZW1lbnQgaXMgaGlkZGVuXG4gICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC0gdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA+IDUpIHtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgZWxlbWVudCBoYXMgYmVlbiByZXNldFxuICAgICAgdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5uZXh0KDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBsZXQgbmV3SG9zdFdpZHRoOiBudW1iZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAvLyBpZiB0aGUgd2lkdGggaGFzIGNoYW5nZWQgdGhlbiB3ZSB0aHJvdyBhIHJlc2l6ZSBldmVudC5cbiAgICAgIGlmICh0aGlzLl9ob3N0V2lkdGggIT09IG5ld0hvc3RXaWR0aCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9ob3N0V2lkdGggPSBuZXdIb3N0V2lkdGg7XG4gICAgICAgICAgdGhpcy5fb25SZXNpemUubmV4dCgpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudCkge1xuICAgICAgbGV0IG5ld0hvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAvLyBpZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBoYXMgY2hhbmdlZCwgdGhlbiB3ZSBtYXJrIGZvciBjaGVja1xuICAgICAgaWYgKHRoaXMuX2hvc3RIZWlnaHQgIT09IG5ld0hvc3RIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5faG9zdEhlaWdodCA9IG5ld0hvc3RIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdG8gYW4gb2JzZXJ2YWJsZSB0aGF0IGNoZWNrcyBpZiBhbGwgcm93cyBoYXZlIGJlZW4gcmVuZGVyZWRcbiAgICogc28gd2UgY2FuIHN0YXJ0IGNhbGN1bGF0aW5nIHRoZSB3aWR0aHNcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMgPSB0aGlzLl9yb3dzLmNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vblJlc2l6ZS5uZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgb2JzZXJ2YWJsZXMgd2hlbiBkYXRhIHRhYmxlIGlzIGRlc3Ryb3llZFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVydGljYWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jvd3NDaGFuZ2VkU3Vicykge1xuICAgICAgdGhpcy5fcm93c0NoYW5nZWRTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZUNoYW5nZXNTdWJzKSB7XG4gICAgICB0aGlzLl92YWx1ZUNoYW5nZXNTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGdldHMgZXhlY3V0ZWQgZXZlcnkgdGltZSB0aGVyZSBpcyBhIHNjcm9sbCBldmVudFxuICAgKiBDYWxscyB0aGUgc2Nyb2xsIG9ic2VydmFibGVcbiAgICovXG4gIGhhbmRsZVNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgaG9yaXpvbnRhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgIT09IGhvcml6b250YWxTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5fb25Ib3Jpem9udGFsU2Nyb2xsLm5leHQoaG9yaXpvbnRhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgICBsZXQgdmVydGljYWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ICE9PSB2ZXJ0aWNhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLm5leHQodmVydGljYWxTY3JvbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBuZWVkZWQgZm9yIHRoZSBjb2x1bW5zIHZpYSBpbmRleFxuICAgKi9cbiAgZ2V0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3dpZHRoc1tpbmRleF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q2VsbFZhbHVlKGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoY29sdW1uLm5lc3RlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbi5uZXN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShjb2x1bW4ubmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVbY29sdW1uLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBtZXRob2QgZm9yIHRlbXBsYXRlIHJlZmVyZW5jZXNcbiAgICovXG4gIGdldFRlbXBsYXRlUmVmKG5hbWU6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG1vZGVsIChuZ01vZGVsKSBvZiBjb21wb25lbnQgYnkgcmVtb3ZpbmcgYWxsIHZhbHVlcyBpbiBhcnJheS5cbiAgICovXG4gIGNsZWFyTW9kZWwoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZS5zcGxpY2UoMCwgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyBkYXRhIHRhYmxlIGFuZCByZXJlbmRlcnMgW2RhdGFdIGFuZCBbY29sdW1uc11cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvciBjbGVhcnMgYWxsIHJvd3MgZGVwZW5kaW5nIG9uICdjaGVja2VkJyB2YWx1ZS5cbiAgICovXG4gIHNlbGVjdEFsbChjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IHRvZ2dsZWRSb3dzOiBhbnlbXSA9IFtdO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIC8vIHNraXBpbmcgYWxyZWFkeSBzZWxlY3RlZCByb3dzXG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlLnB1c2gocm93KTtcbiAgICAgICAgICAvLyBjaGVja2luZyB3aGljaCBvbmVzIGFyZSBiZWluZyB0b2dnbGVkXG4gICAgICAgICAgdG9nZ2xlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgaWYgKHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICAgICAgdG9nZ2xlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIGxldCBtb2RlbFJvdzogYW55ID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICAgICAgfSlbMF07XG4gICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2YobW9kZWxSb3cpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMub25TZWxlY3RBbGwuZW1pdCh7IHJvd3M6IHRvZ2dsZWRSb3dzLCBzZWxlY3RlZDogY2hlY2tlZCB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByb3cgaXMgc2VsZWN0ZWRcbiAgICovXG4gIGlzUm93U2VsZWN0ZWQocm93OiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICAgICAgPyB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvciBjbGVhcnMgYSByb3cgZGVwZW5kaW5nIG9uICdjaGVja2VkJyB2YWx1ZSBpZiB0aGUgcm93ICdpc1NlbGVjdGFibGUnXG4gICAqIGhhbmRsZXMgY250cmwgY2xpY2tzIGFuZCBzaGlmdCBjbGlja3MgZm9yIG11bHRpLXNlbGVjdFxuICAgKi9cbiAgc2VsZWN0KHJvdzogYW55LCBldmVudDogRXZlbnQsIGN1cnJlbnRTZWxlY3RlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBTaGlmdCBrZXkgaXMgc2VsZWN0ZWQgYW5kIG5lZWQgdG8gc2VsZWN0IGV2ZXJ5dGhpbmcgaW4gYmV0d2VlblxuICAgICAgbGV0IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgbW91c2VFdmVudCAmJiBtb3VzZUV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgbGV0IGZpcnN0SW5kZXg6IG51bWJlciA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgICAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0ZWQgPiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICBsYXN0SW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgY2xpY2tpbmcgYSBjaGVja2JveCBiZWhpbmQgdGhlIGluaXRpYWwgY2hlY2ssIHRoZW4gdG9nZ2xlIGFsbCBzZWxlY3Rpb25zIGV4cGVjdCB0aGUgaW5pdGlhbCBjaGVja2JveFxuICAgICAgICAvLyBlbHNlIHRoZSBjaGVja2JveGVzIGNsaWNrZWQgYXJlIGFsbCBhZnRlciB0aGUgaW5pdGlhbCBvbmVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPj0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID4gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KSB8fFxuICAgICAgICAgICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPD0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4IDwgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KVxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPiBjdXJyZW50U2VsZWN0ZWQgfHwgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDwgY3VycmVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgLy8gY2hhbmdlIGluZGV4ZXMgZGVwZW5kaW5nIG9uIHdoZXJlIHRoZSBuZXh0IGNoZWNrYm94IGlzIHNlbGVjdGVkIChiZWZvcmUgb3IgYWZ0ZXIpXG4gICAgICAgICAgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgICAgbGFzdEluZGV4LS07XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZpcnN0SW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvd1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHRoaXMuX2RhdGFbaV0pO1xuICAgICAgICAgICAgLy8gaWYgcm93IGlzIHNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIG9yIGlmIHJvdyB3YXMgdW5zZWxlY3RlZCBhbmQgZmlyc3QgY2hlY2tib3ggd2FzIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSB0aGUgdG9nZ2xlXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSAmJiAhcm93U2VsZWN0ZWQpIHx8ICghdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlICYmIHJvd1NlbGVjdGVkKSkge1xuICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCkge1xuICAgICAgICAgICAgICAvLyBlbHNlIGlmIHRoZSBjaGVja2JveCBzZWxlY3RlZCB3YXMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGFzdCBzZWxlY3Rpb24gYW5kIHRoZSBmaXJzdCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgLy8gdGhlbiB3ZSB1bmRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoY3VycmVudFNlbGVjdGVkID49IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAmJiBjdXJyZW50U2VsZWN0ZWQgPD0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpIHx8XG4gICAgICAgICAgICAgICAgKGN1cnJlbnRTZWxlY3RlZCA8PSB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggJiYgY3VycmVudFNlbGVjdGVkID49IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgLy8gaWYgc2hpZnQgd2FzbnQgcHJlc3NlZCwgdGhlbiB3ZSB0YWtlIHRoZSBlbGVtZW50IGNoZWNrZWQgYXMgdGhlIGZpcnN0IHJvd1xuICAgICAgICAvLyBpbmNhc2UgdGhlIG5leHQgY2xpY2sgdXNlcyBzaGlmdFxuICAgICAgfSBlbHNlIGlmIChtb3VzZUV2ZW50ICYmICFtb3VzZUV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSA9IHRoaXMuX2RvU2VsZWN0aW9uKHJvdywgY3VycmVudFNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBvbnNlbGVjdHN0YXJ0IG1ldGhvZCBvZiB0aGUgZG9jdW1lbnQgc28gb3RoZXIgdGV4dCBvbiB0aGUgcGFnZVxuICAgKiBkb2Vzbid0IGdldCBzZWxlY3RlZCB3aGVuIGRvaW5nIHNoaWZ0IHNlbGVjdGlvbnMuXG4gICAqL1xuICBkaXNhYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBvcmlnaW5hbCBvbnNlbGVjdHN0YXJ0IG1ldGhvZC5cbiAgICovXG4gIGVuYWJsZVRleHRTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9kb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0cyB0aGUgb25Sb3dDbGlja0V2ZW50IHdoZW4gYSByb3cgaXMgY2xpY2tlZFxuICAgKiBpZiBjbGlja2FibGUgaXMgdHJ1ZSBhbmQgc2VsZWN0YWJsZSBpcyBmYWxzZSB0aGVuIHNlbGVjdCB0aGUgcm93XG4gICAqL1xuICBoYW5kbGVSb3dDbGljayhyb3c6IGFueSwgaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xpY2thYmxlKSB7XG4gICAgICAvLyBpZ25vcmluZyBsaW50aW5nIHJ1bGVzIGhlcmUgYmVjYXVzZSBhdHRyaWJ1dGUgaXQgYWN0dWFsbHkgbnVsbCBvciBub3QgdGhlcmVcbiAgICAgIC8vIGNhbid0IGNoZWNrIGZvciB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNyY0VsZW1lbnQ6IGFueSA9IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKHNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdG9wUm93Q2xpY2snKSA9PT0gbnVsbCAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ21hdC1wc2V1ZG8tY2hlY2tib3gnKSB7XG4gICAgICAgIHRoaXMub25Sb3dDbGljay5lbWl0KHtcbiAgICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgaGFuZGxlIGZvciBzb3J0IGNsaWNrIGV2ZW50IGluIGNvbHVtbiBoZWFkZXJzLlxuICAgKi9cbiAgaGFuZGxlU29ydChjb2x1bW46IElUZERhdGFUYWJsZUNvbHVtbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zb3J0QnkgPT09IGNvbHVtbikge1xuICAgICAgdGhpcy5fc29ydE9yZGVyID1cbiAgICAgICAgdGhpcy5fc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICAgICAgICA/IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmdcbiAgICAgICAgICA6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc29ydEJ5ID0gY29sdW1uO1xuICAgICAgdGhpcy5fc29ydE9yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICAgIH1cbiAgICB0aGlzLm9uU29ydENoYW5nZS5uZXh0KHsgbmFtZTogdGhpcy5fc29ydEJ5Lm5hbWUsIG9yZGVyOiB0aGlzLl9zb3J0T3JkZXIgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFsbCBrZXl1cCBldmVudHMgd2hlbiBmb2N1c2luZyBhIGRhdGEgdGFibGUgcm93XG4gICAqL1xuICBfcm93S2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHJvdzogYW55LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgLyoqIGlmIHVzZXIgcHJlc3NlcyBlbnRlciBvciBzcGFjZSwgdGhlIHJvdyBzaG91bGQgYmUgc2VsZWN0ZWQgKi9cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgdXAgYXJyb3csIHdlIGZvY3VzIHRoZSBwcmV2IHJvd1xuICAgICAgICAgKiB1bmxlc3MgaXRzIHRoZSBmaXJzdCByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKVtpbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuZnJvbVJvdyArIGluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgZG93biBhcnJvdywgd2UgZm9jdXMgdGhlIG5leHQgcm93XG4gICAgICAgICAqIHVubGVzcyBpdHMgdGhlIGxhc3Qgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLl9yb3dzLnRvQXJyYXkoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA8IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29sdW1uIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGNvbHVtbiBhbmQgaW5pdGlhbCBjbGllbnRYIG9mIGNvbHVtblxuICAgKi9cbiAgX2hhbmRsZVN0YXJ0Q29sdW1uRHJhZyhpbmRleDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMuX3Jlc2l6aW5nQ29sdW1uID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBuZXcgd2lkdGggZGVwZW5kaW5nIG9uIG5ldyBjbGllbnRYIG9mIGRyYWdnZXIgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlQ29sdW1uRHJhZyhldmVudDogTW91c2VFdmVudCB8IERyYWdFdmVudCk6IHZvaWQge1xuICAgIC8vIGNoZWNrIGlmIHRoZXJlIHdhcyBiZWVuIGEgc2VwYXJhdG9yIGNsaWNrZWQgZm9yIHJlc2l6ZVxuICAgIGlmICh0aGlzLl9yZXNpemluZ0NvbHVtbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmNsaWVudFggPiAwKSB7XG4gICAgICBsZXQgeFBvc2l0aW9uOiBudW1iZXIgPSBldmVudC5jbGllbnRYO1xuICAgICAgLy8gY2hlY2tzIGlmIHRoZSBzZXBhcmF0b3IgaXMgYmVpbmcgbW92ZWQgdG8gdHJ5IGFuZCByZXNpemUgdGhlIGNvbHVtbiwgZWxzZSBkb250IGRvIGFueXRoaW5nXG4gICAgICBpZiAoeFBvc2l0aW9uID4gMCAmJiB0aGlzLl9jb2x1bW5DbGllbnRYID4gMCAmJiB4UG9zaXRpb24gLSB0aGlzLl9jb2x1bW5DbGllbnRYICE9PSAwKSB7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbmV3IHdpZHRoIGRlcGVuZGluZyBpZiBtYWtpbmcgdGhlIGNvbHVtbiBiaWdnZXIgb3Igc21hbGxlclxuICAgICAgICBsZXQgcHJvcG9zZWRNYW51YWxXaWR0aDogbnVtYmVyID0gdGhpcy5fd2lkdGhzW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS52YWx1ZSArICh4UG9zaXRpb24gLSB0aGlzLl9jb2x1bW5DbGllbnRYKTtcbiAgICAgICAgLy8gaWYgdGhlIHByb3Bvc2VkIG5ldyB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIHByb2plY3RlZCBtaW4gd2lkdGggb2YgdGhlIGNvbHVtbiwgdXNlIHByb2plY3RlZCBtaW4gd2lkdGhcbiAgICAgICAgaWYgKHByb3Bvc2VkTWFudWFsV2lkdGggPCB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnByb2plY3RlZFdpZHRoKSB7XG4gICAgICAgICAgcHJvcG9zZWRNYW51YWxXaWR0aCA9IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9yZXNpemluZ0NvbHVtbl0ucHJvamVjdGVkV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5zW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS53aWR0aCA9IHByb3Bvc2VkTWFudWFsV2lkdGg7XG4gICAgICAgIC8vIHVwZGF0ZSBuZXcgeCBwb3NpdGlvbiBmb3IgdGhlIHJlc2l6ZWQgY29sdW1uXG4gICAgICAgIHRoaXMuX29uQ29sdW1uUmVzaXplLm5leHQoeFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBkcmFnZ2VkIGZsYWdzXG4gICAqL1xuICBfaGFuZGxlRW5kQ29sdW1uRHJhZygpOiB2b2lkIHtcbiAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Jlc2l6aW5nQ29sdW1uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmV2ZW50IHRoZSBkZWZhdWx0IGV2ZW50c1xuICAgKi9cbiAgYmxvY2tFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TmVzdGVkVmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkgfHwgIW5hbWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIGxldCBzcGxpdE5hbWU6IHN0cmluZ1tdID0gbmFtZS5zcGxpdCgvXFwuKC4rKS8sIDIpO1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE5lc3RlZFZhbHVlKHNwbGl0TmFtZVsxXSwgdmFsdWVbc3BsaXROYW1lWzBdXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVtuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRG9lcyB0aGUgYWN0dWFsIFJvdyBTZWxlY3Rpb25cbiAgICovXG4gIHByaXZhdGUgX2RvU2VsZWN0aW9uKHJvdzogYW55LCByb3dJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IHdhc1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdyk7XG4gICAgaWYgKCF3YXNTZWxlY3RlZCkge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmNsZWFyTW9kZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICAgIHJvdyA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICB9KVswXTtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy52YWx1ZS5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTtcbiAgICB0aGlzLm9uUm93U2VsZWN0LmVtaXQoeyByb3c6IHJvdywgaW5kZXg6IHJvd0luZGV4LCBzZWxlY3RlZDogIXdhc1NlbGVjdGVkIH0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgcmV0dXJuICF3YXNTZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYWxsIHRoZSBzdGF0ZSBvZiBhbGwgY2hlY2tib3hlc1xuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSB0eXBlb2YgdGhpcy5fZGF0YS5maW5kKChkOiBhbnkpID0+ICF0aGlzLmlzUm93U2VsZWN0ZWQoZCkpID09PSAndW5kZWZpbmVkJztcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLl9kYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHdpZHRocyBmb3IgY29sdW1ucyBhbmQgY2VsbHMgZGVwZW5kaW5nIG9uIGNvbnRlbnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRocygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29sRWxlbWVudHMgJiYgdGhpcy5fY29sRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl93aWR0aHMgPSBbXTtcbiAgICAgIHRoaXMuX2NvbEVsZW1lbnRzLmZvckVhY2goKGNvbDogVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXgsIHRoaXMuX2NhbGN1bGF0ZVdpZHRoKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWRodHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGNvbHVtbnMgYWZ0ZXIgY2FsY3VsYXRpb24gdG8gc2VlIGlmIHRoZXkgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RDb2x1bW5XaWRodHMoKTogdm9pZCB7XG4gICAgbGV0IGZpeGVkVG90YWxXaWR0aDogbnVtYmVyID0gMDtcbiAgICAvLyBnZXQgdGhlIG51bWJlciBvZiB0b3RhbCBjb2x1bW5zIHRoYXQgaGF2ZSBmbGV4aWJsZSB3aWR0aHMgKG5vdCBmaXhlZCBvciBoaWRkZW4pXG4gICAgbGV0IGZsZXhpYmxlV2lkdGhzOiBudW1iZXIgPSB0aGlzLl93aWR0aHMuZmlsdGVyKCh3aWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbHVtbnNbaW5kZXhdLmhpZGRlbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAod2lkdGgubGltaXQgfHwgd2lkdGgubWF4IHx8IHdpZHRoLm1pbikge1xuICAgICAgICBmaXhlZFRvdGFsV2lkdGggKz0gd2lkdGgudmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gIXdpZHRoLmxpbWl0ICYmICF3aWR0aC5tYXggJiYgIXdpZHRoLm1pbjtcbiAgICB9KS5sZW5ndGg7XG4gICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIHBpeGVzIGFyZSBsZWZ0IHRoYXQgY291bGQgYmUgc3ByZWFkIGFjcm9zc1xuICAgIC8vIHRoZSBmbGV4aWJsZSBjb2x1bW5zXG4gICAgbGV0IHJlY2FsY3VsYXRlSG9zdFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGlmIChmaXhlZFRvdGFsV2lkdGggPCB0aGlzLmhvc3RXaWR0aCkge1xuICAgICAgcmVjYWxjdWxhdGVIb3N0V2lkdGggPSB0aGlzLmhvc3RXaWR0aCAtIGZpeGVkVG90YWxXaWR0aDtcbiAgICB9XG4gICAgLy8gaWYgd2UgaGF2ZSBmbGV4aWJsZSBjb2x1bW5zIGFuZCBwaXhlbHMgdG8gc3BhcmUgb24gdGhlbVxuICAgIC8vIHdlIHRyeSBhbmQgc3ByZWFkIHRoZSBwaXhlbHMgYWNyb3NzIHRoZW1cbiAgICBpZiAoZmxleGlibGVXaWR0aHMgJiYgcmVjYWxjdWxhdGVIb3N0V2lkdGgpIHtcbiAgICAgIGxldCBuZXdWYWx1ZTogbnVtYmVyID0gTWF0aC5mbG9vcihyZWNhbGN1bGF0ZUhvc3RXaWR0aCAvIGZsZXhpYmxlV2lkdGhzKTtcbiAgICAgIGxldCBhZGp1c3RlZE51bWJlcjogbnVtYmVyID0gMDtcbiAgICAgIC8vIGFkanVzdCB0aGUgY29sdW1uIHdpZHRocyB3aXRoIHRoZSBzcHJlYWQgcGl4ZWxzXG4gICAgICB0aGlzLl93aWR0aHMuZm9yRWFjaCgoY29sV2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAodGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5tYXggJiYgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS52YWx1ZSA+IG5ld1ZhbHVlKSB8fFxuICAgICAgICAgICh0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLm1pbiAmJiB0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLnZhbHVlIDwgbmV3VmFsdWUpIHx8XG4gICAgICAgICAgIXRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubGltaXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkdGgoY29sV2lkdGguaW5kZXgsIG5ld1ZhbHVlKTtcbiAgICAgICAgICBhZGp1c3RlZE51bWJlcisrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBzdGlsbCBjb2x1bW5zIHRoYXQgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWQsIHdlIHN0YXJ0IG92ZXJcbiAgICAgIGxldCBuZXdGbGV4aWJsZVdpZHRoczogbnVtYmVyID0gdGhpcy5fd2lkdGhzLmZpbHRlcigod2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoKSA9PiB7XG4gICAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heDtcbiAgICAgIH0pLmxlbmd0aDtcbiAgICAgIGlmIChuZXdGbGV4aWJsZVdpZHRocyAhPT0gYWRqdXN0ZWROdW1iZXIgJiYgbmV3RmxleGlibGVXaWR0aHMgIT09IGZsZXhpYmxlV2lkdGhzKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGEgc2luZ2xlIGNvbHVtbiB0byBzZWUgaWYgaXQgY2FuIGJlIHJlY2FsY3VsYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpZHRoc1tpbmRleF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBsaW1pdDogZmFsc2UsXG4gICAgICBtaW46IGZhbHNlLFxuICAgICAgbWF4OiBmYWxzZSxcbiAgICB9O1xuICAgIC8vIGZsYWcgdG8gc2VlIGlmIHdlIG5lZWQgdG8gc2tpcCB0aGUgbWluIHdpZHRoIHByb2plY3Rpb25cbiAgICAvLyBkZXBlbmRpbmcgaWYgYSB3aWR0aCBvciBtaW4gd2lkdGggaGFzIGJlZW4gcHJvdmlkZWRcbiAgICBsZXQgc2tpcE1pbldpZHRoUHJvamVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmNvbHVtbnNbaW5kZXhdKSB7XG4gICAgICAvLyBpZiB0aGUgcHJvdmlkZWQgd2lkdGggaGFzIG1pbi9tYXgsIHRoZW4gd2UgY2hlY2sgdG8gc2VlIGlmIHdlIG5lZWQgdG8gc2V0IGl0XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCB3aWR0aE9wdHM6IElUZERhdGFUYWJsZUNvbHVtbldpZHRoID0gPElUZERhdGFUYWJsZUNvbHVtbldpZHRoPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBjb25maWd1cmVkIG1pbiwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgc2tpcE1pbldpZHRoUHJvamVjdGlvbiA9IHdpZHRoT3B0cyAmJiAhIXdpZHRoT3B0cy5taW47XG4gICAgICAgIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1pbiA+PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5taW47XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbW9yZSB0aGFuIHRoZSBjb25maWd1cmVkIG1heCwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1heCA8PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5tYXg7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5tYXggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGl0IGhhcyBhIGZpeGVkIHdpZHRoLCB0aGVuIHdlIGp1c3Qgc2V0IGl0XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gPG51bWJlcj50aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoO1xuICAgICAgICBza2lwTWluV2lkdGhQcm9qZWN0aW9uID0gdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIHdhc24ndCBhbnkgd2lkdGggb3IgbWluIHdpZHRoIHByb3ZpZGVkLCB3ZSBzZXQgYSBtaW4gdG8gd2hhdCB0aGUgY29sdW1uIHdpZHRoIG1pbiBzaG91bGQgYmVcbiAgICBpZiAoIXNraXBNaW5XaWR0aFByb2plY3Rpb24gJiYgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbaW5kZXhdLnByb2plY3RlZFdpZHRoO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmljIG1ldGhvZCB0byBjYWxjdWxhdGUgY29sdW1uIHdpZHRoXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCByZW5kZXJlZENvbHVtbnM6IElUZERhdGFUYWJsZUNvbHVtbltdID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sOiBJVGREYXRhVGFibGVDb2x1bW4pID0+ICFjb2wuaGlkZGVuKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmhvc3RXaWR0aCAvIHJlbmRlcmVkQ29sdW1ucy5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjYWxjdWxhdGUgdGhlIHJvd3MgdG8gYmUgcmVuZGVyZWQgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVWaXJ0dWFsUm93cygpOiB2b2lkIHtcbiAgICBsZXQgc2Nyb2xsZWRSb3dzOiBudW1iZXIgPSAwO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG4gICAgICBsZXQgcm93SGVpZ2h0U3VtOiBudW1iZXIgPSAwO1xuICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCByb3dzIHRvIHNlZSBpZiB3ZSBoYXZlIHRoZWlyIGhlaWdodCBjYWNoZWRcbiAgICAgIC8vIGFuZCBzdW0gdGhlbSBhbGwgdG8gY2FsY3VsYXRlIHRoZSB0b3RhbCBoZWlnaHRcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgoZDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCByb3dzIGF0IGZpcnN0IGFuZCBhc3N1bWUgYWxsXG4gICAgICAgIC8vIHJvd3MgYXJlIHRoZSBzYW1lIGhlaWdodCBhcyB0aGUgZmlyc3Qgb25lXG4gICAgICAgIGlmICghdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaV0pIHtcbiAgICAgICAgICB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSA9IHRoaXMuX3Jvd0hlaWdodENhY2hlWzBdIHx8IFREX1ZJUlRVQUxfREVGQVVMVF9ST1dfSEVJR0hUO1xuICAgICAgICB9XG4gICAgICAgIHJvd0hlaWdodFN1bSArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXTtcbiAgICAgICAgLy8gY2hlY2sgaG93IG1hbnkgcm93cyBoYXZlIGJlZW4gc2Nyb2xsZWRcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC0gcm93SGVpZ2h0U3VtID4gMCkge1xuICAgICAgICAgIHNjcm9sbGVkUm93cysrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gcm93SGVpZ2h0U3VtO1xuICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIHJvdyB0byBiZSByZW5kZXJlZCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSByb3cgb2Zmc2V0XG4gICAgICBsZXQgZnJvbVJvdzogbnVtYmVyID0gc2Nyb2xsZWRSb3dzIC0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gZnJvbVJvdyA+IDAgPyBmcm9tUm93IDogMDtcblxuICAgICAgbGV0IGhvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX2hvc3RIZWlnaHQ7XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XG4gICAgICAvLyBjYWxjdWxhdGUgaG93IG1hbnkgcm93cyBjYW4gZml0IGluIHRoZSB2aWV3cG9ydFxuICAgICAgd2hpbGUgKGhvc3RIZWlnaHQgPiAwKSB7XG4gICAgICAgIGhvc3RIZWlnaHQgLT0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbdGhpcy5mcm9tUm93ICsgaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgICAgLy8gc2V0IHRoZSBsYXN0IHJvdyB0byBiZSByZW5kZXJlZCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSByb3cgb2Zmc2V0XG4gICAgICBsZXQgcmFuZ2U6IG51bWJlciA9IGluZGV4IC0gMSArIFREX1ZJUlRVQUxfT0ZGU0VUICogMjtcbiAgICAgIGxldCB0b1JvdzogbnVtYmVyID0gcmFuZ2UgKyB0aGlzLmZyb21Sb3c7XG4gICAgICAvLyBpZiBsYXN0IHJvdyBpcyBncmVhdGVyIHRoYW4gdGhlIHRvdGFsIGxlbmd0aCwgdGhlbiB3ZSB1c2UgdGhlIHRvdGFsIGxlbmd0aFxuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwcm9wZXIgb2Zmc2V0IGRlcGVuZGluZyBvbiBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgIGlmIChzY3JvbGxlZFJvd3MgPiBURF9WSVJUVUFMX09GRlNFVCkge1xuICAgICAgZm9yIChsZXQgaW5kZXg6IG51bWJlciA9IDA7IGluZGV4IDwgdGhpcy5mcm9tUm93OyBpbmRleCsrKSB7XG4gICAgICAgIG9mZnNldCArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fb2Zmc2V0VHJhbnNmb3JtID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShcbiAgICAgICd0cmFuc2xhdGVZKCcgKyAob2Zmc2V0IC0gdGhpcy50b3RhbEhlaWdodCkgKyAncHgpJyxcbiAgICApO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsRGF0YSA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLmZyb21Sb3csIHRoaXMudG9Sb3cpO1xuICAgIH1cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=