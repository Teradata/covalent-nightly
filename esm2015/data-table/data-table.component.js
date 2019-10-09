/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.compareWith = (/**
         * @param {?} row
         * @param {?} model
         * @return {?}
         */
        (row, model) => {
            return row === model;
        });
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
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.refresh();
            // scroll back to the top if the data has changed
            this._scrollableDiv.nativeElement.scrollTop = 0;
        }));
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
            Object.keys(row).forEach((/**
             * @param {?} k
             * @return {?}
             */
            (k) => {
                if (!this._columns.find((/**
                 * @param {?} c
                 * @return {?}
                 */
                (c) => c.name === k))) {
                    this._columns.push({ name: k, label: k });
                }
            }));
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
        const column = this.columns.find((/**
         * @param {?} c
         * @return {?}
         */
        (c) => c.name === columnName));
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
        this._resizeSubs = this._onResize.asObservable().subscribe((/**
         * @return {?}
         */
        () => {
            if (this._rows) {
                this._rows.toArray().forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                (row, index) => {
                    this._rowHeightCache[this.fromRow + index] = row.height + 1;
                }));
            }
            this._calculateWidths();
            this._calculateVirtualRows();
        }));
        // initialize observable for column resize calculations
        this._columnResizeSubs = this._onColumnResize
            .asObservable()
            .pipe(debounceTime(0))
            .subscribe((/**
         * @param {?} clientX
         * @return {?}
         */
        (clientX) => {
            this._columnClientX = clientX;
            this._calculateWidths();
            this._changeDetectorRef.markForCheck();
        }));
        // initialize observable for scroll column header reposition
        this._horizontalScrollSubs = this._onHorizontalScroll.asObservable().subscribe((/**
         * @param {?} horizontalScroll
         * @return {?}
         */
        (horizontalScroll) => {
            this._scrollHorizontalOffset = horizontalScroll;
            this._changeDetectorRef.markForCheck();
        }));
        // initialize observable for virtual scroll rendering
        this._verticalScrollSubs = this._onVerticalScroll.asObservable().subscribe((/**
         * @param {?} verticalScroll
         * @return {?}
         */
        (verticalScroll) => {
            this._scrollVerticalOffset = verticalScroll;
            this._calculateVirtualRows();
            this._changeDetectorRef.markForCheck();
        }));
        this._valueChangesSubs = this.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.refresh();
        }));
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
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._hostWidth = newHostWidth;
                    this._onResize.next();
                }), 0);
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
        this._rowsChangedSubs = this._rows.changes.pipe(debounceTime(0)).subscribe((/**
         * @return {?}
         */
        () => {
            this._onResize.next();
        }));
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
            this._data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                // skiping already selected rows
                if (!this.isRowSelected(row)) {
                    this.value.push(row);
                    // checking which ones are being toggled
                    toggledRows.push(row);
                }
            }));
            this._allSelected = true;
            this._indeterminate = true;
        }
        else {
            this._data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                // checking which ones are being toggled
                if (this.isRowSelected(row)) {
                    toggledRows.push(row);
                    /** @type {?} */
                    let modelRow = this.value.filter((/**
                     * @param {?} val
                     * @return {?}
                     */
                    (val) => {
                        return this.compareWith(row, val);
                    }))[0];
                    /** @type {?} */
                    let index = this.value.indexOf(modelRow);
                    if (index > -1) {
                        this.value.splice(index, 1);
                    }
                }
            }));
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
            ? this.value.filter((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                return this.compareWith(row, val);
            })).length > 0
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
            this._document.onselectstart = (/**
             * @return {?}
             */
            function () {
                return false;
            });
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
     * @private
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
     * @private
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
            row = this.value.filter((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                return this.compareWith(row, val);
            }))[0];
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
     * @private
     * @return {?}
     */
    _calculateCheckboxState() {
        if (this._data) {
            this._allSelected = typeof this._data.find((/**
             * @param {?} d
             * @return {?}
             */
            (d) => !this.isRowSelected(d))) === 'undefined';
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
     * @private
     * @return {?}
     */
    _calculateWidths() {
        if (this._colElements && this._colElements.length) {
            this._widths = [];
            this._colElements.forEach((/**
             * @param {?} col
             * @param {?} index
             * @return {?}
             */
            (col, index) => {
                this._adjustColumnWidth(index, this._calculateWidth());
            }));
            this._adjustColumnWidhts();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @private
     * @return {?}
     */
    _adjustColumnWidhts() {
        /** @type {?} */
        let fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        /** @type {?} */
        let flexibleWidths = this._widths.filter((/**
         * @param {?} width
         * @param {?} index
         * @return {?}
         */
        (width, index) => {
            if (this.columns[index].hidden) {
                return false;
            }
            if (width.limit || width.max || width.min) {
                fixedTotalWidth += width.value;
            }
            return !width.limit && !width.max && !width.min;
        })).length;
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
            this._widths.forEach((/**
             * @param {?} colWidth
             * @return {?}
             */
            (colWidth) => {
                if ((this._widths[colWidth.index].max && this._widths[colWidth.index].value > newValue) ||
                    (this._widths[colWidth.index].min && this._widths[colWidth.index].value < newValue) ||
                    !this._widths[colWidth.index].limit) {
                    this._adjustColumnWidth(colWidth.index, newValue);
                    adjustedNumber++;
                }
            }));
            // if there are still columns that need to be recalculated, we start over
            /** @type {?} */
            let newFlexibleWidths = this._widths.filter((/**
             * @param {?} width
             * @return {?}
             */
            (width) => {
                return !width.limit && !width.max;
            })).length;
            if (newFlexibleWidths !== adjustedNumber && newFlexibleWidths !== flexibleWidths) {
                this._adjustColumnWidhts();
            }
        }
    }
    /**
     * Adjusts a single column to see if it can be recalculated
     * @private
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
     * @private
     * @return {?}
     */
    _calculateWidth() {
        /** @type {?} */
        let renderedColumns = this.columns.filter((/**
         * @param {?} col
         * @return {?}
         */
        (col) => !col.hidden));
        return Math.floor(this.hostWidth / renderedColumns.length);
    }
    /**
     * Method to calculate the rows to be rendered in the viewport
     * @private
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
            this._data.forEach((/**
             * @param {?} d
             * @param {?} i
             * @return {?}
             */
            (d, i) => {
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
            }));
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
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
}
TdDataTableComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdDataTableComponent)),
                        multi: true,
                    },
                ],
                selector: 'td-data-table',
                template: "<table td-data-table [style.left.px]=\"columnsLeftScroll\" [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\" (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\"\n        ></mat-checkbox>\n      </th>\n      <th\n        td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\"\n      >\n        <span [matTooltip]=\"column.tooltip\">{{ column.label }}</span>\n        <span\n          td-column-resizer\n          *ngIf=\"resizableColumns\"\n          draggable=\"true\"\n          class=\"td-data-table-column-resizer\"\n          [class.td-resizing]=\"i === resizingColumn\"\n          (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n          (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n          (drag)=\"_handleColumnDrag($event)\"\n          (dragend)=\"_handleEndColumnDrag()\"\n          (mouseup)=\"_handleEndColumnDrag()\"\n        >\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\" (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table\n    td-data-table\n    [style.transform]=\"offsetTransform\"\n    [style.position]=\"'absolute'\"\n    [class.mat-selectable]=\"selectable\"\n    [class.mat-clickable]=\"clickable\"\n  >\n    <tbody class=\"td-data-table-body\">\n      <tr\n        td-data-table-row\n        #dtRow\n        [tabIndex]=\"selectable ? 0 : -1\"\n        [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n        *ngFor=\"let row of virtualData; let rowIndex = index\"\n        (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n        (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n        (keydown.space)=\"blockEvent($event)\"\n        (keydown.shift.space)=\"blockEvent($event)\"\n        (keydown.shift)=\"disableTextSelection()\"\n        (keyup.shift)=\"enableTextSelection()\"\n      >\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\"\n          ></mat-pseudo-checkbox>\n        </td>\n        <td\n          td-data-table-cell\n          [numeric]=\"column.numeric\"\n          [hidden]=\"column.hidden\"\n          *ngFor=\"let column of columns; let i = index\"\n          [style.min-width.px]=\"getColumnWidth(i)\"\n          [style.max-width.px]=\"getColumnWidth(i)\"\n        >\n          <span *ngIf=\"!getTemplateRef(column.name)\">\n            {{ column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row) }}\n          </span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{\n              value: getCellValue(column, row),\n              row: row,\n              column: column.name,\n              index: rowIndex\n            }\"\n          ></ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
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
    _scrollableDiv: [{ type: ViewChild, args: ['scrollableDiv', { static: true },] }],
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
     * @private
     */
    TdDataTableComponent.prototype._resizeSubs;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._rowsChangedSubs;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._hostWidth;
    /**
     * manually resizable columns
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._resizableColumns;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._columnClientX;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._columnResizeSubs;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._resizingColumn;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._onColumnResize;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._widths;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._onResize;
    /**
     * column header reposition and viewpoort
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._verticalScrollSubs;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._horizontalScrollSubs;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._scrollHorizontalOffset;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._onHorizontalScroll;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._onVerticalScroll;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._rowHeightCache;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._totalHeight;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._hostHeight;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._scrollVerticalOffset;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._offsetTransform;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._fromRow;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._toRow;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._valueChangesSubs;
    /**
     * internal attributes
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._virtualData;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._columns;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._selectable;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._clickable;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._multiple;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._allSelected;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._indeterminate;
    /**
     * sorting
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._sortable;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._sortBy;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._sortOrder;
    /**
     * shift select
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._shiftPreviouslyPressed;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._lastSelectedIndex;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._firstSelectedIndex;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._firstCheckboxValue;
    /**
     * template fetching support
     * @type {?}
     * @private
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
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdDataTableComponent.prototype._domSanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUdULGVBQWUsRUFHZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixZQUFZLEVBQ1osVUFBVSxHQUdYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRSxPQUFPLEVBQTRCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFLcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFMUYsT0FBTyxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7SUFHdkYsV0FBWSxLQUFLO0lBQ2pCLFlBQWEsTUFBTTs7Ozs7O0FBR3JCLDZDQUdDOzs7SUFGQyxzQ0FBYTs7SUFDYixzQ0FBYTs7Ozs7QUFHZix3Q0FXQzs7O0lB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O0lBR2hGLHVEQUFpRDs7Ozs7SUFDakQsa0RBQXdDOzs7OztJQUN4QyxtREFBeUM7Ozs7O0lBQ3pDLG1EQUE2Qzs7Ozs7O0lBRzdDLDRDQUEwRjs7SUFDMUYsMENBQW1HOztJQUVuRyw4Q0FBeUU7O0lBRXpFLDRDQUFtRjs7SUFFbkYscUNBQWlGOzs7Ozs7O0lBMkxqRiw0Q0FFSTs7Ozs7OztJQU9KLDJDQUFzSDs7Ozs7OztJQU90SCwwQ0FFSTs7Ozs7OztJQU9KLDJDQUVJOzs7Ozs7O0lBZ0JKLDJDQUVFOzs7OztJQWZBLHlDQUFvRDs7Ozs7SUFDcEQsMkNBQStCOzs7OztJQUMvQiw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgUXVlcnlMaXN0LFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRU5URVIsIFNQQUNFLCBVUF9BUlJPVywgRE9XTl9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1yb3cvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudCxcbiAgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQsXG59IGZyb20gJy4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0YS10YWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgZW51bSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB7XG4gIEFzY2VuZGluZyA9ICdBU0MnLFxuICBEZXNjZW5kaW5nID0gJ0RFU0MnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZUNvbHVtbldpZHRoIHtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlQ29sdW1uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xuICBudW1lcmljPzogYm9vbGVhbjtcbiAgZm9ybWF0PzogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgbmVzdGVkPzogYm9vbGVhbjtcbiAgc29ydGFibGU/OiBib29sZWFuO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBmaWx0ZXI/OiBib29sZWFuO1xuICB3aWR0aD86IElUZERhdGFUYWJsZUNvbHVtbldpZHRoIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVNlbGVjdEV2ZW50IHtcbiAgcm93OiBhbnk7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50IHtcbiAgcm93czogYW55W107XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQge1xuICByb3c6IGFueTtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW50ZXJuYWxDb2x1bW5XaWR0aCB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGxpbWl0OiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xuICBtaW4/OiBib29sZWFuO1xuICBtYXg/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENvbnN0YW50IHRvIHNldCB0aGUgcm93cyBvZmZzZXQgYmVmb3JlIGFuZCBhZnRlciB0aGUgdmlld3BvcnRcbiAqL1xuY29uc3QgVERfVklSVFVBTF9PRkZTRVQ6IG51bWJlciA9IDI7XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gc2V0IGRlZmF1bHQgcm93IGhlaWdodCBpZiBub25lIGlzIHByb3ZpZGVkXG4gKi9cbmNvbnN0IFREX1ZJUlRVQUxfREVGQVVMVF9ST1dfSEVJR0hUOiBudW1iZXIgPSA0ODtcblxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGREYXRhVGFibGVNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKFRkRGF0YVRhYmxlQmFzZSwgW10pO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZERhdGFUYWJsZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzZWxlY3RvcjogJ3RkLWRhdGEtdGFibGUnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNvbXBvbmVudCBleHRlbmRzIF9UZERhdGFUYWJsZU1peGluQmFzZVxuICBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogcmVzcG9uc2l2ZSB3aWR0aCBjYWxjdWxhdGlvbnMgKi9cbiAgcHJpdmF0ZSBfcmVzaXplU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yb3dzQ2hhbmdlZFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfaG9zdFdpZHRoOiBudW1iZXIgPSAwO1xuXG4gIC8qKiBtYW51YWxseSByZXNpemFibGUgY29sdW1ucyAqL1xuICBwcml2YXRlIF9yZXNpemFibGVDb2x1bW5zOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbHVtbkNsaWVudFg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2NvbHVtblJlc2l6ZVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcmVzaXppbmdDb2x1bW46IG51bWJlcjtcbiAgcHJpdmF0ZSBfb25Db2x1bW5SZXNpemU6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBnZXQgcmVzaXppbmdDb2x1bW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzaXppbmdDb2x1bW47XG4gIH1cblxuICBnZXQgaG9zdFdpZHRoKCk6IG51bWJlciB7XG4gICAgLy8gaWYgdGhlIGNoZWNrYm94ZXMgYXJlIHJlbmRlcmVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVpciB3aWR0aFxuICAgIC8vIGZyb20gdGhlIHRvdGFsIHdpZHRoIHRvIGNhbGN1bGF0ZSBwcm9wZXJseVxuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ob3N0V2lkdGggLSA0MjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgX3dpZHRoczogSUludGVybmFsQ29sdW1uV2lkdGhbXSA9IFtdO1xuICBwcml2YXRlIF9vblJlc2l6ZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIGNvbHVtbiBoZWFkZXIgcmVwb3NpdGlvbiBhbmQgdmlld3Bvb3J0ICovXG4gIHByaXZhdGUgX3ZlcnRpY2FsU2Nyb2xsU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9ob3Jpem9udGFsU2Nyb2xsU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX29uSG9yaXpvbnRhbFNjcm9sbDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9vblZlcnRpY2FsU2Nyb2xsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgLy8gQXJyYXkgb2YgY2FjaGVkIHJvdyBoZWlnaHRzIHRvIGFsbG93IGR5bmFtaWMgcm93IGhlaWdodHNcbiAgcHJpdmF0ZSBfcm93SGVpZ2h0Q2FjaGU6IG51bWJlcltdID0gW107XG4gIC8vIFRvdGFsIHBzZXVkbyBoZWlnaHQgb2YgYWxsIHRoZSBlbGVtZW50c1xuICBwcml2YXRlIF90b3RhbEhlaWdodDogbnVtYmVyID0gMDtcbiAgLy8gVG90YWwgaG9zdCBoZWlnaHQgZm9yIHRoZSB2aWV3cG9ydFxuICBwcml2YXRlIF9ob3N0SGVpZ2h0OiBudW1iZXIgPSAwO1xuICAvLyBTY3JvbGxlZCB2ZXJ0aWNhbCBwaXhlbHNcbiAgcHJpdmF0ZSBfc2Nyb2xsVmVydGljYWxPZmZzZXQ6IG51bWJlciA9IDA7XG4gIC8vIFN0eWxlIHRvIG1vdmUgdGhlIGNvbnRlbnQgYSBjZXJ0YWluIG9mZnNldCBkZXBlbmRpbmcgb24gc2Nyb2xsZWQgb2Zmc2V0XG4gIHByaXZhdGUgX29mZnNldFRyYW5zZm9ybTogU2FmZVN0eWxlO1xuXG4gIC8vIFZhcmlhYmxlcyB0aGF0IHNldCBmcm9tIGFuZCB0byB3aGljaCByb3dzIHdpbGwgYmUgcmVuZGVyZWRcbiAgcHJpdmF0ZSBfZnJvbVJvdzogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdG9Sb3c6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCBzdHlsZSB3aXRoIGEgcHJvcGVyIGNhbGN1bGF0aW9uIG9uIGhvdyBtdWNoIGl0IHNob3VsZCBtb3ZlXG4gICAqIG92ZXIgdGhlIHkgYXhpcyBvZiB0aGUgdG90YWwgaGVpZ2h0XG4gICAqL1xuICBnZXQgb2Zmc2V0VHJhbnNmb3JtKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRyYW5zZm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhc3N1bWVkIHRvdGFsIGhlaWdodCBvZiB0aGUgcm93c1xuICAgKi9cbiAgZ2V0IHRvdGFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluaXRpYWwgcm93IHRvIHJlbmRlciBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIGdldCBmcm9tUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Sb3c7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFzdCByb3cgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgZ2V0IHRvUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvUm93O1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzU3ViczogU3Vic2NyaXB0aW9uO1xuICAvKiogaW50ZXJuYWwgYXR0cmlidXRlcyAqL1xuICBwcml2YXRlIF9kYXRhOiBhbnlbXTtcbiAgLy8gZGF0YSB2aXJ0dWFsbHkgaXRlcmF0ZWQgYnkgY29tcG9uZW50XG4gIHByaXZhdGUgX3ZpcnR1YWxEYXRhOiBhbnlbXTtcbiAgcHJpdmF0ZSBfY29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW107XG4gIHByaXZhdGUgX3NlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2xpY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYWxsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBzb3J0aW5nICovXG4gIHByaXZhdGUgX3NvcnRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3NvcnRCeTogSVRkRGF0YVRhYmxlQ29sdW1uO1xuICBwcml2YXRlIF9zb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuXG4gIC8qKiBzaGlmdCBzZWxlY3QgKi9cbiAgcHJpdmF0ZSBfc2hpZnRQcmV2aW91c2x5UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sYXN0U2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgX2ZpcnN0U2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgX2ZpcnN0Q2hlY2tib3hWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiB0ZW1wbGF0ZSBmZXRjaGluZyBzdXBwb3J0ICovXG4gIHByaXZhdGUgX3RlbXBsYXRlTWFwOiBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PigpO1xuICBAQ29udGVudENoaWxkcmVuKFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUpIF90ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlPjtcblxuICBAVmlld0NoaWxkKCdzY3JvbGxhYmxlRGl2JywgeyBzdGF0aWM6IHRydWUgfSkgX3Njcm9sbGFibGVEaXY6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZHJlbignY29sdW1uRWxlbWVudCcpIF9jb2xFbGVtZW50czogUXVlcnlMaXN0PFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkcmVuKFRkRGF0YVRhYmxlUm93Q29tcG9uZW50KSBfcm93czogUXVlcnlMaXN0PFRkRGF0YVRhYmxlUm93Q29tcG9uZW50PjtcblxuICAvKipcbiAgICogUmV0dXJucyBzY3JvbGwgcG9zaXRpb24gdG8gcmVwb3NpdGlvbiBjb2x1bW4gaGVhZGVyc1xuICAgKi9cbiAgZ2V0IGNvbHVtbnNMZWZ0U2Nyb2xsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgKiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHZhbHVlcyBhcmUgc2VsZWN0ZWQuXG4gICAqL1xuICBnZXQgYWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbFNlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdmFsdWVzIGFyZSBub3QgZGVzZWxlY3RlZFxuICAgKiBhbmQgYXQgbGVhc3Qgb25lIGlzLlxuICAgKi9cbiAgZ2V0IGluZGV0ZXJtaW5hdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV0ZXJtaW5hdGU7XG4gIH1cblxuICAvKipcbiAgICogZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9W11cbiAgICogU2V0cyB0aGUgZGF0YSB0byBiZSByZW5kZXJlZCBhcyByb3dzLlxuICAgKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IGRhdGEoZGF0YTogYW55W10pIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9yb3dIZWlnaHRDYWNoZSA9IFtdO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAvLyBzY3JvbGwgYmFjayB0byB0aGUgdG9wIGlmIHRoZSBkYXRhIGhhcyBjaGFuZ2VkXG4gICAgICB0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICB9KTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgdmlydHVhbERhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb2x1bW5zPzogSVRkRGF0YVRhYmxlQ29sdW1uW11cbiAgICogU2V0cyBhZGRpdGlvbmFsIGNvbHVtbiBjb25maWd1cmF0aW9uLiBbSVRkRGF0YVRhYmxlQ29sdW1uLm5hbWVdIGhhcyB0byBleGlzdCBpbiBbZGF0YV0gYXMga2V5LlxuICAgKiBEZWZhdWx0cyB0byBbZGF0YV0ga2V5cy5cbiAgICovXG4gIEBJbnB1dCgnY29sdW1ucycpXG4gIHNldCBjb2x1bW5zKGNvbHM6IElUZERhdGFUYWJsZUNvbHVtbltdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHM7XG4gIH1cbiAgZ2V0IGNvbHVtbnMoKTogSVRkRGF0YVRhYmxlQ29sdW1uW10ge1xuICAgIGlmICh0aGlzLl9jb2x1bW5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNEYXRhKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gW107XG4gICAgICAvLyBpZiBjb2x1bW5zIGlzIHVuZGVmaW5lZCwgdXNlIGtleSBpbiBbZGF0YV0gcm93cyBhcyBuYW1lIGFuZCBsYWJlbCBmb3IgY29sdW1uIGhlYWRlcnMuXG4gICAgICBsZXQgcm93OiBhbnkgPSB0aGlzLl9kYXRhWzBdO1xuICAgICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb2x1bW5zLmZpbmQoKGM6IGFueSkgPT4gYy5uYW1lID09PSBrKSkge1xuICAgICAgICAgIHRoaXMuX2NvbHVtbnMucHVzaCh7IG5hbWU6IGssIGxhYmVsOiBrIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJlc2l6YWJsZUNvbHVtbnM/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgbWFudWFsIGNvbHVtbiByZXNpemUuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgncmVzaXphYmxlQ29sdW1ucycpXG4gIHNldCByZXNpemFibGVDb2x1bW5zKHJlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXNpemFibGVDb2x1bW5zID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlc2l6YWJsZUNvbHVtbnMpO1xuICB9XG4gIGdldCByZXNpemFibGVDb2x1bW5zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemFibGVDb2x1bW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdGFibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgcm93IHNlbGVjdGlvbiBldmVudHMsIGhvdmVyIGFuZCBzZWxlY3RlZCByb3cgc3RhdGVzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3NlbGVjdGFibGUnKVxuICBzZXQgc2VsZWN0YWJsZShzZWxlY3RhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzZWxlY3RhYmxlKTtcbiAgfVxuICBnZXQgc2VsZWN0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGlja2FibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgcm93IGNsaWNrIGV2ZW50cywgaG92ZXIuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnY2xpY2thYmxlJylcbiAgc2V0IGNsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbGlja2FibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoY2xpY2thYmxlKTtcbiAgfVxuICBnZXQgY2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jbGlja2FibGU7XG4gIH1cblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgbXVsdGlwbGUgcm93IHNlbGVjdGlvbi4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBzb3J0aW5nIGV2ZW50cywgc29ydCBpY29ucyBhbmQgYWN0aXZlIGNvbHVtbiBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc29ydGFibGUnKVxuICBzZXQgc29ydGFibGUoc29ydGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0YWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzb3J0YWJsZSk7XG4gIH1cbiAgZ2V0IHNvcnRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Qnk/OiBzdHJpbmdcbiAgICogU2V0cyB0aGUgYWN0aXZlIHNvcnQgY29sdW1uLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoJ3NvcnRCeScpXG4gIHNldCBzb3J0QnkoY29sdW1uTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFjb2x1bW5OYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoKGM6IGFueSkgPT4gYy5uYW1lID09PSBjb2x1bW5OYW1lKTtcbiAgICBpZiAoIWNvbHVtbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydEJ5XSBtdXN0IGJlIGEgdmFsaWQgY29sdW1uIG5hbWUnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0QnkgPSBjb2x1bW47XG4gIH1cbiAgZ2V0IHNvcnRCeUNvbHVtbigpOiBJVGREYXRhVGFibGVDb2x1bW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0Qnk7XG4gIH1cblxuICAvKipcbiAgICogc29ydE9yZGVyPzogWydBU0MnIHwgJ0RFU0MnXSBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlclxuICAgKiBTZXRzIHRoZSBzb3J0IG9yZGVyIG9mIHRoZSBbc29ydEJ5XSBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ0FTQycgb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nXG4gICAqL1xuICBASW5wdXQoJ3NvcnRPcmRlcicpXG4gIHNldCBzb3J0T3JkZXIob3JkZXI6ICdBU0MnIHwgJ0RFU0MnKSB7XG4gICAgbGV0IHNvcnRPcmRlcjogc3RyaW5nID0gb3JkZXIgPyBvcmRlci50b1VwcGVyQ2FzZSgpIDogJ0FTQyc7XG4gICAgaWYgKHNvcnRPcmRlciAhPT0gJ0RFU0MnICYmIHNvcnRPcmRlciAhPT0gJ0FTQycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW3NvcnRPcmRlcl0gbXVzdCBiZSBlbXB0eSwgQVNDIG9yIERFU0MnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0T3JkZXIgPSBzb3J0T3JkZXIgPT09ICdBU0MnID8gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuICBnZXQgc29ydE9yZGVyRW51bSgpOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlcjtcbiAgfVxuXG4gIGdldCBoYXNEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzb3J0Q2hhbmdlJykgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XG4gID4oKTtcblxuICAvKipcbiAgICogcm93U2VsZWN0PzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgcm93IGlzIHNlbGVjdGVkL2Rlc2VsZWN0ZWQuIFtzZWxlY3RhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU2VsZWN0RXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3Jvd1NlbGVjdCcpIG9uUm93U2VsZWN0OiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RFdmVudD4oKTtcblxuICAvKipcbiAgICogcm93Q2xpY2s/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgY2xpY2tlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3Jvd0NsaWNrJykgb25Sb3dDbGljazogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50XG4gID4oKTtcblxuICAvKipcbiAgICogc2VsZWN0QWxsPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGFsbCByb3dzIGFyZSBzZWxlY3RlZC9kZXNlbGVjdGVkIGJ5IHRoZSBhbGwgY2hlY2tib3guIFtzZWxlY3RhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlbGVjdEFsbCcpIG9uU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudFxuICA+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGFyZVdpdGg/OiBmdW5jdGlvbihyb3csIG1vZGVsKTogYm9vbGVhblxuICAgKiBBbGxvd3MgY3VzdG9tIGNvbXBhcmlzb24gYmV0d2VlbiByb3cgYW5kIG1vZGVsIHRvIHNlZSBpZiByb3cgaXMgc2VsZWN0ZWQgb3Igbm90XG4gICAqIERlZmF1bHQgY29tcGFyYXRpb24gaXMgYnkgcmVmZXJlbmNlXG4gICAqL1xuICBASW5wdXQoJ2NvbXBhcmVXaXRoJykgY29tcGFyZVdpdGg6IChyb3c6IGFueSwgbW9kZWw6IGFueSkgPT4gYm9vbGVhbiA9IChyb3c6IGFueSwgbW9kZWw6IGFueSkgPT4ge1xuICAgIHJldHVybiByb3cgPT09IG1vZGVsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50c1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgY2FsY3VsYXRpb25zXG4gICAgdGhpcy5fcmVzaXplU3VicyA9IHRoaXMuX29uUmVzaXplLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fcm93cykge1xuICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKS5mb3JFYWNoKChyb3c6IFRkRGF0YVRhYmxlUm93Q29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcm93SGVpZ2h0Q2FjaGVbdGhpcy5mcm9tUm93ICsgaW5kZXhdID0gcm93LmhlaWdodCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FsY3VsYXRlV2lkdGhzKCk7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIH0pO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBjb2x1bW4gcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMgPSB0aGlzLl9vbkNvbHVtblJlc2l6ZVxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMCkpXG4gICAgICAuc3Vic2NyaWJlKChjbGllbnRYOiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IGNsaWVudFg7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3Igc2Nyb2xsIGNvbHVtbiBoZWFkZXIgcmVwb3NpdGlvblxuICAgIHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzID0gdGhpcy5fb25Ib3Jpem9udGFsU2Nyb2xsLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoaG9yaXpvbnRhbFNjcm9sbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ID0gaG9yaXpvbnRhbFNjcm9sbDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgdmlydHVhbCBzY3JvbGwgcmVuZGVyaW5nXG4gICAgdGhpcy5fdmVydGljYWxTY3JvbGxTdWJzID0gdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGVtcGxhdGVzIGFuZCBzZXRzIHRoZW0gaW4gYSBtYXAgZm9yIGZhc3RlciBhY2Nlc3MuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlTWFwLnNldCh0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpW2ldLnRkRGF0YVRhYmxlVGVtcGxhdGUsIHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KClbaV0udGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaG9zdHMgbmF0aXZlIGVsZW1lbnRzIHdpZHRocyB0byBzZWUgaWYgaXQgaGFzIGNoYW5nZWQgKHJlc2l6ZSBjaGVjaylcbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAvLyBjaGVjayBpZiB0aGUgc2Nyb2xsIGhhcyBiZWVuIHJlc2V0IHdoZW4gZWxlbWVudCBpcyBoaWRkZW5cbiAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSB0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID4gNSkge1xuICAgICAgLy8gc2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCBpZiBlbGVtZW50IGhhcyBiZWVuIHJlc2V0XG4gICAgICB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLm5leHQoMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGxldCBuZXdIb3N0V2lkdGg6IG51bWJlciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIC8vIGlmIHRoZSB3aWR0aCBoYXMgY2hhbmdlZCB0aGVuIHdlIHRocm93IGEgcmVzaXplIGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hvc3RXaWR0aCAhPT0gbmV3SG9zdFdpZHRoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2hvc3RXaWR0aCA9IG5ld0hvc3RXaWR0aDtcbiAgICAgICAgICB0aGlzLl9vblJlc2l6ZS5uZXh0KCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBsZXQgbmV3SG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIC8vIGlmIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGhhcyBjaGFuZ2VkLCB0aGVuIHdlIG1hcmsgZm9yIGNoZWNrXG4gICAgICBpZiAodGhpcy5faG9zdEhlaWdodCAhPT0gbmV3SG9zdEhlaWdodCkge1xuICAgICAgICB0aGlzLl9ob3N0SGVpZ2h0ID0gbmV3SG9zdEhlaWdodDtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0byBhbiBvYnNlcnZhYmxlIHRoYXQgY2hlY2tzIGlmIGFsbCByb3dzIGhhdmUgYmVlbiByZW5kZXJlZFxuICAgKiBzbyB3ZSBjYW4gc3RhcnQgY2FsY3VsYXRpbmcgdGhlIHdpZHRoc1xuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jvd3NDaGFuZ2VkU3VicyA9IHRoaXMuX3Jvd3MuY2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uUmVzaXplLm5leHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBvYnNlcnZhYmxlcyB3aGVuIGRhdGEgdGFibGUgaXMgZGVzdHJveWVkXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcmVzaXplU3Vicykge1xuICAgICAgdGhpcy5fcmVzaXplU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29sdW1uUmVzaXplU3Vicykge1xuICAgICAgdGhpcy5fY29sdW1uUmVzaXplU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMpIHtcbiAgICAgIHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMpIHtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm93c0NoYW5nZWRTdWJzKSB7XG4gICAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMpIHtcbiAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgZ2V0cyBleGVjdXRlZCBldmVyeSB0aW1lIHRoZXJlIGlzIGEgc2Nyb2xsIGV2ZW50XG4gICAqIENhbGxzIHRoZSBzY3JvbGwgb2JzZXJ2YWJsZVxuICAgKi9cbiAgaGFuZGxlU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGxldCBob3Jpem9udGFsU2Nyb2xsOiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAhPT0gaG9yaXpvbnRhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwubmV4dChob3Jpem9udGFsU2Nyb2xsKTtcbiAgICAgIH1cbiAgICAgIGxldCB2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgIT09IHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX29uVmVydGljYWxTY3JvbGwubmV4dCh2ZXJ0aWNhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG5lZWRlZCBmb3IgdGhlIGNvbHVtbnMgdmlhIGluZGV4XG4gICAqL1xuICBnZXRDb2x1bW5XaWR0aChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fd2lkdGhzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRDZWxsVmFsdWUoY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4sIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChjb2x1bW4ubmVzdGVkID09PSB1bmRlZmluZWQgfHwgY29sdW1uLm5lc3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE5lc3RlZFZhbHVlKGNvbHVtbi5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVtjb2x1bW4ubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIG1ldGhvZCBmb3IgdGVtcGxhdGUgcmVmZXJlbmNlc1xuICAgKi9cbiAgZ2V0VGVtcGxhdGVSZWYobmFtZTogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgbW9kZWwgKG5nTW9kZWwpIG9mIGNvbXBvbmVudCBieSByZW1vdmluZyBhbGwgdmFsdWVzIGluIGFycmF5LlxuICAgKi9cbiAgY2xlYXJNb2RlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlLnNwbGljZSgwLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGRhdGEgdGFibGUgYW5kIHJlcmVuZGVycyBbZGF0YV0gYW5kIFtjb2x1bW5zXVxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhbGwgcm93cyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlLlxuICAgKi9cbiAgc2VsZWN0QWxsKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgdG9nZ2xlZFJvd3M6IGFueVtdID0gW107XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gc2tpcGluZyBhbHJlYWR5IHNlbGVjdGVkIHJvd3NcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2hlY2tpbmcgd2hpY2ggb25lcyBhcmUgYmVpbmcgdG9nZ2xlZFxuICAgICAgICBpZiAodGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgbGV0IG1vZGVsUm93OiBhbnkgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgICAgICB9KVswXTtcbiAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMudmFsdWUuaW5kZXhPZihtb2RlbFJvdyk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5vblNlbGVjdEFsbC5lbWl0KHsgcm93czogdG9nZ2xlZFJvd3MsIHNlbGVjdGVkOiBjaGVja2VkIH0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdyBpcyBzZWxlY3RlZFxuICAgKi9cbiAgaXNSb3dTZWxlY3RlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8vIGNvbXBhcmUgaXRlbXMgYnkgW2NvbXBhcmVXaXRoXSBmdW5jdGlvblxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgICA/IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhIHJvdyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlIGlmIHRoZSByb3cgJ2lzU2VsZWN0YWJsZSdcbiAgICogaGFuZGxlcyBjbnRybCBjbGlja3MgYW5kIHNoaWZ0IGNsaWNrcyBmb3IgbXVsdGktc2VsZWN0XG4gICAqL1xuICBzZWxlY3Qocm93OiBhbnksIGV2ZW50OiBFdmVudCwgY3VycmVudFNlbGVjdGVkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIFNoaWZ0IGtleSBpcyBzZWxlY3RlZCBhbmQgbmVlZCB0byBzZWxlY3QgZXZlcnl0aGluZyBpbiBiZXR3ZWVuXG4gICAgICBsZXQgbW91c2VFdmVudDogTW91c2VFdmVudCA9IGV2ZW50IGFzIE1vdXNlRXZlbnQ7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBtb3VzZUV2ZW50ICYmIG1vdXNlRXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICBsZXQgZmlyc3RJbmRleDogbnVtYmVyID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZCA+IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4O1xuICAgICAgICAgIGxhc3RJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBjbGlja2luZyBhIGNoZWNrYm94IGJlaGluZCB0aGUgaW5pdGlhbCBjaGVjaywgdGhlbiB0b2dnbGUgYWxsIHNlbGVjdGlvbnMgZXhwZWN0IHRoZSBpbml0aWFsIGNoZWNrYm94XG4gICAgICAgIC8vIGVsc2UgdGhlIGNoZWNrYm94ZXMgY2xpY2tlZCBhcmUgYWxsIGFmdGVyIHRoZSBpbml0aWFsIG9uZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+PSBjdXJyZW50U2VsZWN0ZWQgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPiB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXgpIHx8XG4gICAgICAgICAgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8PSBjdXJyZW50U2VsZWN0ZWQgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPCB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXgpXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+IGN1cnJlbnRTZWxlY3RlZCB8fCB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAvLyBjaGFuZ2UgaW5kZXhlcyBkZXBlbmRpbmcgb24gd2hlcmUgdGhlIG5leHQgY2hlY2tib3ggaXMgc2VsZWN0ZWQgKGJlZm9yZSBvciBhZnRlcilcbiAgICAgICAgICBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID4gY3VycmVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBsYXN0SW5kZXgtLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgICAgZmlyc3RJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93U2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzUm93U2VsZWN0ZWQodGhpcy5fZGF0YVtpXSk7XG4gICAgICAgICAgICAvLyBpZiByb3cgaXMgc2VsZWN0ZWQgYW5kIGZpcnN0IGNoZWNrYm94IHdhcyBzZWxlY3RlZFxuICAgICAgICAgICAgLy8gb3IgaWYgcm93IHdhcyB1bnNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgdW5zZWxlY3RlZFxuICAgICAgICAgICAgLy8gd2UgaWdub3JlIHRoZSB0b2dnbGVcbiAgICAgICAgICAgIGlmICgodGhpcy5fZmlyc3RDaGVja2JveFZhbHVlICYmICFyb3dTZWxlY3RlZCkgfHwgKCF0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgJiYgcm93U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkKSB7XG4gICAgICAgICAgICAgIC8vIGVsc2UgaWYgdGhlIGNoZWNrYm94IHNlbGVjdGVkIHdhcyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsYXN0IHNlbGVjdGlvbiBhbmQgdGhlIGZpcnN0IHNlbGVjdGlvblxuICAgICAgICAgICAgICAvLyB0aGVuIHdlIHVuZG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA8PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkgfHxcbiAgICAgICAgICAgICAgICAoY3VycmVudFNlbGVjdGVkIDw9IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAmJiBjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQgPSB0cnVlO1xuICAgICAgICAvLyBpZiBzaGlmdCB3YXNudCBwcmVzc2VkLCB0aGVuIHdlIHRha2UgdGhlIGVsZW1lbnQgY2hlY2tlZCBhcyB0aGUgZmlyc3Qgcm93XG4gICAgICAgIC8vIGluY2FzZSB0aGUgbmV4dCBjbGljayB1c2VzIHNoaWZ0XG4gICAgICB9IGVsc2UgaWYgKG1vdXNlRXZlbnQgJiYgIW1vdXNlRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlID0gdGhpcy5fZG9TZWxlY3Rpb24ocm93LCBjdXJyZW50U2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIG9uc2VsZWN0c3RhcnQgbWV0aG9kIG9mIHRoZSBkb2N1bWVudCBzbyBvdGhlciB0ZXh0IG9uIHRoZSBwYWdlXG4gICAqIGRvZXNuJ3QgZ2V0IHNlbGVjdGVkIHdoZW4gZG9pbmcgc2hpZnQgc2VsZWN0aW9ucy5cbiAgICovXG4gIGRpc2FibGVUZXh0U2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIG9yaWdpbmFsIG9uc2VsZWN0c3RhcnQgbWV0aG9kLlxuICAgKi9cbiAgZW5hYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGVtaXRzIHRoZSBvblJvd0NsaWNrRXZlbnQgd2hlbiBhIHJvdyBpcyBjbGlja2VkXG4gICAqIGlmIGNsaWNrYWJsZSBpcyB0cnVlIGFuZCBzZWxlY3RhYmxlIGlzIGZhbHNlIHRoZW4gc2VsZWN0IHRoZSByb3dcbiAgICovXG4gIGhhbmRsZVJvd0NsaWNrKHJvdzogYW55LCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGlja2FibGUpIHtcbiAgICAgIC8vIGlnbm9yaW5nIGxpbnRpbmcgcnVsZXMgaGVyZSBiZWNhdXNlIGF0dHJpYnV0ZSBpdCBhY3R1YWxseSBudWxsIG9yIG5vdCB0aGVyZVxuICAgICAgLy8gY2FuJ3QgY2hlY2sgZm9yIHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3JjRWxlbWVudDogYW55ID0gZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBpZiAoc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0b3BSb3dDbGljaycpID09PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnbWF0LXBzZXVkby1jaGVja2JveCcpIHtcbiAgICAgICAgdGhpcy5vblJvd0NsaWNrLmVtaXQoe1xuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBoYW5kbGUgZm9yIHNvcnQgY2xpY2sgZXZlbnQgaW4gY29sdW1uIGhlYWRlcnMuXG4gICAqL1xuICBoYW5kbGVTb3J0KGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NvcnRCeSA9PT0gY29sdW1uKSB7XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPVxuICAgICAgICB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgICAgICAgID8gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZ1xuICAgICAgICAgIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb3J0QnkgPSBjb2x1bW47XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gICAgfVxuICAgIHRoaXMub25Tb3J0Q2hhbmdlLm5leHQoeyBuYW1lOiB0aGlzLl9zb3J0QnkubmFtZSwgb3JkZXI6IHRoaXMuX3NvcnRPcmRlciB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYWxsIGtleXVwIGV2ZW50cyB3aGVuIGZvY3VzaW5nIGEgZGF0YSB0YWJsZSByb3dcbiAgICovXG4gIF9yb3dLZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCwgcm93OiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICAvKiogaWYgdXNlciBwcmVzc2VzIGVudGVyIG9yIHNwYWNlLCB0aGUgcm93IHNob3VsZCBiZSBzZWxlY3RlZCAqL1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiB1c2VycyBwcmVzc2VzIHRoZSB1cCBhcnJvdywgd2UgZm9jdXMgdGhlIHByZXYgcm93XG4gICAgICAgICAqIHVubGVzcyBpdHMgdGhlIGZpcnN0IHJvd1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3Jvd3MudG9BcnJheSgpW2luZGV4IC0gMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMubXVsdGlwbGUgJiYgZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5mcm9tUm93ICsgaW5kZXggPj0gMCkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiB1c2VycyBwcmVzc2VzIHRoZSBkb3duIGFycm93LCB3ZSBmb2N1cyB0aGUgbmV4dCByb3dcbiAgICAgICAgICogdW5sZXNzIGl0cyB0aGUgbGFzdCByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA8IHRoaXMuX3Jvd3MudG9BcnJheSgpLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKVtpbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuZnJvbVJvdyArIGluZGV4IDwgdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb2x1bW4gaW5kZXggb2YgdGhlIGRyYWdnZWQgY29sdW1uIGFuZCBpbml0aWFsIGNsaWVudFggb2YgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlU3RhcnRDb2x1bW5EcmFnKGluZGV4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIG5ldyB3aWR0aCBkZXBlbmRpbmcgb24gbmV3IGNsaWVudFggb2YgZHJhZ2dlciBjb2x1bW5cbiAgICovXG4gIF9oYW5kbGVDb2x1bW5EcmFnKGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgd2FzIGJlZW4gYSBzZXBhcmF0b3IgY2xpY2tlZCBmb3IgcmVzaXplXG4gICAgaWYgKHRoaXMuX3Jlc2l6aW5nQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY2xpZW50WCA+IDApIHtcbiAgICAgIGxldCB4UG9zaXRpb246IG51bWJlciA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHNlcGFyYXRvciBpcyBiZWluZyBtb3ZlZCB0byB0cnkgYW5kIHJlc2l6ZSB0aGUgY29sdW1uLCBlbHNlIGRvbnQgZG8gYW55dGhpbmdcbiAgICAgIGlmICh4UG9zaXRpb24gPiAwICYmIHRoaXMuX2NvbHVtbkNsaWVudFggPiAwICYmIHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFggIT09IDApIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgd2lkdGggZGVwZW5kaW5nIGlmIG1ha2luZyB0aGUgY29sdW1uIGJpZ2dlciBvciBzbWFsbGVyXG4gICAgICAgIGxldCBwcm9wb3NlZE1hbnVhbFdpZHRoOiBudW1iZXIgPSB0aGlzLl93aWR0aHNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnZhbHVlICsgKHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFgpO1xuICAgICAgICAvLyBpZiB0aGUgcHJvcG9zZWQgbmV3IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgcHJvamVjdGVkIG1pbiB3aWR0aCBvZiB0aGUgY29sdW1uLCB1c2UgcHJvamVjdGVkIG1pbiB3aWR0aFxuICAgICAgICBpZiAocHJvcG9zZWRNYW51YWxXaWR0aCA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9yZXNpemluZ0NvbHVtbl0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgICAgICBwcm9wb3NlZE1hbnVhbFdpZHRoID0gdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS5wcm9qZWN0ZWRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbnNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLndpZHRoID0gcHJvcG9zZWRNYW51YWxXaWR0aDtcbiAgICAgICAgLy8gdXBkYXRlIG5ldyB4IHBvc2l0aW9uIGZvciB0aGUgcmVzaXplZCBjb2x1bW5cbiAgICAgICAgdGhpcy5fb25Db2x1bW5SZXNpemUubmV4dCh4UG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmRzIGRyYWdnZWQgZmxhZ3NcbiAgICovXG4gIF9oYW5kbGVFbmRDb2x1bW5EcmFnKCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnRzXG4gICAqL1xuICBibG9ja0V2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXROZXN0ZWRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhbmFtZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgbGV0IHNwbGl0TmFtZTogc3RyaW5nW10gPSBuYW1lLnNwbGl0KC9cXC4oLispLywgMik7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0TmVzdGVkVmFsdWUoc3BsaXROYW1lWzFdLCB2YWx1ZVtzcGxpdE5hbWVbMF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHRoZSBhY3R1YWwgUm93IFNlbGVjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfZG9TZWxlY3Rpb24ocm93OiBhbnksIHJvd0luZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBsZXQgd2FzU2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzUm93U2VsZWN0ZWQocm93KTtcbiAgICBpZiAoIXdhc1NlbGVjdGVkKSB7XG4gICAgICBpZiAoIXRoaXMuX211bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJNb2RlbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZS5wdXNoKHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbXBhcmUgaXRlbXMgYnkgW2NvbXBhcmVXaXRoXSBmdW5jdGlvblxuICAgICAgcm93ID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgIH0pWzBdO1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpO1xuICAgIHRoaXMub25Sb3dTZWxlY3QuZW1pdCh7IHJvdzogcm93LCBpbmRleDogcm93SW5kZXgsIHNlbGVjdGVkOiAhd2FzU2VsZWN0ZWQgfSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gIXdhc1NlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbGwgdGhlIHN0YXRlIG9mIGFsbCBjaGVja2JveGVzXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IHR5cGVvZiB0aGlzLl9kYXRhLmZpbmQoKGQ6IGFueSkgPT4gIXRoaXMuaXNSb3dTZWxlY3RlZChkKSkgPT09ICd1bmRlZmluZWQnO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgd2lkdGhzIGZvciBjb2x1bW5zIGFuZCBjZWxscyBkZXBlbmRpbmcgb24gY29udGVudFxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlV2lkdGhzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb2xFbGVtZW50cyAmJiB0aGlzLl9jb2xFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3dpZHRocyA9IFtdO1xuICAgICAgdGhpcy5fY29sRWxlbWVudHMuZm9yRWFjaCgoY29sOiBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWR0aChpbmRleCwgdGhpcy5fY2FsY3VsYXRlV2lkdGgoKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgY29sdW1ucyBhZnRlciBjYWxjdWxhdGlvbiB0byBzZWUgaWYgdGhleSBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZC5cbiAgICovXG4gIHByaXZhdGUgX2FkanVzdENvbHVtbldpZGh0cygpOiB2b2lkIHtcbiAgICBsZXQgZml4ZWRUb3RhbFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIC8vIGdldCB0aGUgbnVtYmVyIG9mIHRvdGFsIGNvbHVtbnMgdGhhdCBoYXZlIGZsZXhpYmxlIHdpZHRocyAobm90IGZpeGVkIG9yIGhpZGRlbilcbiAgICBsZXQgZmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC5saW1pdCB8fCB3aWR0aC5tYXggfHwgd2lkdGgubWluKSB7XG4gICAgICAgIGZpeGVkVG90YWxXaWR0aCArPSB3aWR0aC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heCAmJiAhd2lkdGgubWluO1xuICAgIH0pLmxlbmd0aDtcbiAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggcGl4ZXMgYXJlIGxlZnQgdGhhdCBjb3VsZCBiZSBzcHJlYWQgYWNyb3NzXG4gICAgLy8gdGhlIGZsZXhpYmxlIGNvbHVtbnNcbiAgICBsZXQgcmVjYWxjdWxhdGVIb3N0V2lkdGg6IG51bWJlciA9IDA7XG4gICAgaWYgKGZpeGVkVG90YWxXaWR0aCA8IHRoaXMuaG9zdFdpZHRoKSB7XG4gICAgICByZWNhbGN1bGF0ZUhvc3RXaWR0aCA9IHRoaXMuaG9zdFdpZHRoIC0gZml4ZWRUb3RhbFdpZHRoO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBoYXZlIGZsZXhpYmxlIGNvbHVtbnMgYW5kIHBpeGVscyB0byBzcGFyZSBvbiB0aGVtXG4gICAgLy8gd2UgdHJ5IGFuZCBzcHJlYWQgdGhlIHBpeGVscyBhY3Jvc3MgdGhlbVxuICAgIGlmIChmbGV4aWJsZVdpZHRocyAmJiByZWNhbGN1bGF0ZUhvc3RXaWR0aCkge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgPSBNYXRoLmZsb29yKHJlY2FsY3VsYXRlSG9zdFdpZHRoIC8gZmxleGlibGVXaWR0aHMpO1xuICAgICAgbGV0IGFkanVzdGVkTnVtYmVyOiBudW1iZXIgPSAwO1xuICAgICAgLy8gYWRqdXN0IHRoZSBjb2x1bW4gd2lkdGhzIHdpdGggdGhlIHNwcmVhZCBwaXhlbHNcbiAgICAgIHRoaXMuX3dpZHRocy5mb3JFYWNoKChjb2xXaWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICh0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLm1heCAmJiB0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLnZhbHVlID4gbmV3VmFsdWUpIHx8XG4gICAgICAgICAgKHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubWluICYmIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0udmFsdWUgPCBuZXdWYWx1ZSkgfHxcbiAgICAgICAgICAhdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5saW1pdFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWR0aChjb2xXaWR0aC5pbmRleCwgbmV3VmFsdWUpO1xuICAgICAgICAgIGFkanVzdGVkTnVtYmVyKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gaWYgdGhlcmUgYXJlIHN0aWxsIGNvbHVtbnMgdGhhdCBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZCwgd2Ugc3RhcnQgb3ZlclxuICAgICAgbGV0IG5ld0ZsZXhpYmxlV2lkdGhzOiBudW1iZXIgPSB0aGlzLl93aWR0aHMuZmlsdGVyKCh3aWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgpID0+IHtcbiAgICAgICAgcmV0dXJuICF3aWR0aC5saW1pdCAmJiAhd2lkdGgubWF4O1xuICAgICAgfSkubGVuZ3RoO1xuICAgICAgaWYgKG5ld0ZsZXhpYmxlV2lkdGhzICE9PSBhZGp1c3RlZE51bWJlciAmJiBuZXdGbGV4aWJsZVdpZHRocyAhPT0gZmxleGlibGVXaWR0aHMpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkaHRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgYSBzaW5nbGUgY29sdW1uIHRvIHNlZSBpZiBpdCBjYW4gYmUgcmVjYWxjdWxhdGVkXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RDb2x1bW5XaWR0aChpbmRleDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fd2lkdGhzW2luZGV4XSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGxpbWl0OiBmYWxzZSxcbiAgICAgIG1pbjogZmFsc2UsXG4gICAgICBtYXg6IGZhbHNlLFxuICAgIH07XG4gICAgLy8gZmxhZyB0byBzZWUgaWYgd2UgbmVlZCB0byBza2lwIHRoZSBtaW4gd2lkdGggcHJvamVjdGlvblxuICAgIC8vIGRlcGVuZGluZyBpZiBhIHdpZHRoIG9yIG1pbiB3aWR0aCBoYXMgYmVlbiBwcm92aWRlZFxuICAgIGxldCBza2lwTWluV2lkdGhQcm9qZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0pIHtcbiAgICAgIC8vIGlmIHRoZSBwcm92aWRlZCB3aWR0aCBoYXMgbWluL21heCwgdGhlbiB3ZSBjaGVjayB0byBzZWUgaWYgd2UgbmVlZCB0byBzZXQgaXRcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IHdpZHRoT3B0czogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggPSA8SVRkRGF0YVRhYmxlQ29sdW1uV2lkdGg+dGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aDtcbiAgICAgICAgLy8gaWYgdGhlIGNvbHVtbiB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIGNvbmZpZ3VyZWQgbWluLCB3ZSBvdmVycmlkZSBpdFxuICAgICAgICBza2lwTWluV2lkdGhQcm9qZWN0aW9uID0gd2lkdGhPcHRzICYmICEhd2lkdGhPcHRzLm1pbjtcbiAgICAgICAgaWYgKHdpZHRoT3B0cyAmJiB3aWR0aE9wdHMubWluID49IHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gd2lkdGhPcHRzLm1pbjtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1pbiA9IHRydWU7XG4gICAgICAgICAgLy8gaWYgdGhlIGNvbHVtbiB3aWR0aCBpcyBtb3JlIHRoYW4gdGhlIGNvbmZpZ3VyZWQgbWF4LCB3ZSBvdmVycmlkZSBpdFxuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoT3B0cyAmJiB3aWR0aE9wdHMubWF4IDw9IHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gd2lkdGhPcHRzLm1heDtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1heCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQgaGFzIGEgZml4ZWQgd2lkdGgsIHRoZW4gd2UganVzdCBzZXQgaXRcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSA8bnVtYmVyPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIHNraXBNaW5XaWR0aFByb2plY3Rpb24gPSB0aGlzLl93aWR0aHNbaW5kZXhdLmxpbWl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGhlcmUgd2Fzbid0IGFueSB3aWR0aCBvciBtaW4gd2lkdGggcHJvdmlkZWQsIHdlIHNldCBhIG1pbiB0byB3aGF0IHRoZSBjb2x1bW4gd2lkdGggbWluIHNob3VsZCBiZVxuICAgIGlmICghc2tpcE1pbldpZHRoUHJvamVjdGlvbiAmJiB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlIDwgdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW2luZGV4XS5wcm9qZWN0ZWRXaWR0aCkge1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGg7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1pbiA9IHRydWU7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLmxpbWl0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRvIGNhbGN1bGF0ZSBjb2x1bW4gd2lkdGhcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IHJlbmRlcmVkQ29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW10gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2w6IElUZERhdGFUYWJsZUNvbHVtbikgPT4gIWNvbC5oaWRkZW4pO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuaG9zdFdpZHRoIC8gcmVuZGVyZWRDb2x1bW5zLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGN1bGF0ZSB0aGUgcm93cyB0byBiZSByZW5kZXJlZCBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk6IHZvaWQge1xuICAgIGxldCBzY3JvbGxlZFJvd3M6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIGxldCByb3dIZWlnaHRTdW06IG51bWJlciA9IDA7XG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHJvd3MgdG8gc2VlIGlmIHdlIGhhdmUgdGhlaXIgaGVpZ2h0IGNhY2hlZFxuICAgICAgLy8gYW5kIHN1bSB0aGVtIGFsbCB0byBjYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodFxuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChkOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIHJvd3MgYXQgZmlyc3QgYW5kIGFzc3VtZSBhbGxcbiAgICAgICAgLy8gcm93cyBhcmUgdGhlIHNhbWUgaGVpZ2h0IGFzIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKCF0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSkge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldID0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbMF0gfHwgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgcm93SGVpZ2h0U3VtICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldO1xuICAgICAgICAvLyBjaGVjayBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSByb3dIZWlnaHRTdW0gPiAwKSB7XG4gICAgICAgICAgc2Nyb2xsZWRSb3dzKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSByb3dIZWlnaHRTdW07XG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGxldCBmcm9tUm93OiBudW1iZXIgPSBzY3JvbGxlZFJvd3MgLSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSBmcm9tUm93ID4gMCA/IGZyb21Sb3cgOiAwO1xuXG4gICAgICBsZXQgaG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5faG9zdEhlaWdodDtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICAgIC8vIGNhbGN1bGF0ZSBob3cgbWFueSByb3dzIGNhbiBmaXQgaW4gdGhlIHZpZXdwb3J0XG4gICAgICB3aGlsZSAoaG9zdEhlaWdodCA+IDApIHtcbiAgICAgICAgaG9zdEhlaWdodCAtPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVt0aGlzLmZyb21Sb3cgKyBpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgICAvLyBzZXQgdGhlIGxhc3Qgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGxldCByYW5nZTogbnVtYmVyID0gaW5kZXggLSAxICsgVERfVklSVFVBTF9PRkZTRVQgKiAyO1xuICAgICAgbGV0IHRvUm93OiBudW1iZXIgPSByYW5nZSArIHRoaXMuZnJvbVJvdztcbiAgICAgIC8vIGlmIGxhc3Qgcm93IGlzIGdyZWF0ZXIgdGhhbiB0aGUgdG90YWwgbGVuZ3RoLCB0aGVuIHdlIHVzZSB0aGUgdG90YWwgbGVuZ3RoXG4gICAgICBpZiAoaXNGaW5pdGUodG9Sb3cpICYmIHRvUm93ID4gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdG9Sb3cgPSB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHRvUm93KSkge1xuICAgICAgICB0b1JvdyA9IFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgfVxuICAgICAgdGhpcy5fdG9Sb3cgPSB0b1JvdztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IDA7XG4gICAgICB0aGlzLl90b1JvdyA9IDA7XG4gICAgfVxuXG4gICAgbGV0IG9mZnNldDogbnVtYmVyID0gMDtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIHByb3BlciBvZmZzZXQgZGVwZW5kaW5nIG9uIGhvdyBtYW55IHJvd3MgaGF2ZSBiZWVuIHNjcm9sbGVkXG4gICAgaWYgKHNjcm9sbGVkUm93cyA+IFREX1ZJUlRVQUxfT0ZGU0VUKSB7XG4gICAgICBmb3IgKGxldCBpbmRleDogbnVtYmVyID0gMDsgaW5kZXggPCB0aGlzLmZyb21Sb3c7IGluZGV4KyspIHtcbiAgICAgICAgb2Zmc2V0ICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9vZmZzZXRUcmFuc2Zvcm0gPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKFxuICAgICAgJ3RyYW5zbGF0ZVkoJyArIChvZmZzZXQgLSB0aGlzLnRvdGFsSGVpZ2h0KSArICdweCknLFxuICAgICk7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3ZpcnR1YWxEYXRhID0gdGhpcy5kYXRhLnNsaWNlKHRoaXMuZnJvbVJvdywgdGhpcy50b1Jvdyk7XG4gICAgfVxuICAgIC8vIG1hcmsgZm9yIGNoZWNrIGF0IHRoZSBlbmQgb2YgdGhlIHF1ZXVlIHNvIHdlIGFyZSBzdXJlXG4gICAgLy8gdGhhdCB0aGUgY2hhbmdlcyB3aWxsIGJlIG1hcmtlZFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==