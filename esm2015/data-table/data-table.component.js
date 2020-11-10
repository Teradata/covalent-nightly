/**
 * @fileoverview added by tsickle
 * Generated from: data-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    Ascending: "ASC",
    Descending: "DESC",
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
    /** @type {?|undefined} */
    ITdDataTableColumn.prototype.columnSortOrder;
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
        this.sortChange = new EventEmitter();
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         */
        this.rowSelect = new EventEmitter();
        /**
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         */
        this.rowClick = new EventEmitter();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        this.selectAll = new EventEmitter();
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
            const row = this._data[0];
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
        const sortOrder = order ? order.toUpperCase() : 'ASC';
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
        for (const template of this._templates.toArray()) {
            this._templateMap.set(template.tdDataTableTemplate, template.templateRef);
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
            const newHostWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
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
            const newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
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
        const element = (/** @type {?} */ (event.target));
        if (element) {
            /** @type {?} */
            const horizontalScroll = element.scrollLeft;
            if (this._scrollHorizontalOffset !== horizontalScroll) {
                this._onHorizontalScroll.next(horizontalScroll);
            }
            /** @type {?} */
            const verticalScroll = element.scrollTop;
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
    _selectAll(checked) {
        /** @type {?} */
        const toggledRows = [];
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
                    const modelRow = this.value.filter((/**
                     * @param {?} val
                     * @return {?}
                     */
                    (val) => {
                        return this.compareWith(row, val);
                    }))[0];
                    /** @type {?} */
                    const index = this.value.indexOf(modelRow);
                    if (index > -1) {
                        this.value.splice(index, 1);
                    }
                }
            }));
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.selectAll.emit({ rows: toggledRows, selected: checked });
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
            const mouseEvent = (/** @type {?} */ (event));
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
                        const rowSelected = this.isRowSelected(this._data[i]);
                        // if row is selected and first checkbox was selected
                        // or if row was unselected and first checkbox was unselected
                        // we ignore the toggle
                        if ((this._firstCheckboxValue && !rowSelected) || (!this._firstCheckboxValue && rowSelected)) {
                            this._doSelection(this._data[i], i);
                        }
                        else if (this._shiftPreviouslyPressed &&
                            ((currentSelected >= this._firstSelectedIndex && currentSelected <= this._lastSelectedIndex) ||
                                (currentSelected <= this._firstSelectedIndex && currentSelected >= this._lastSelectedIndex))) {
                            // else if the checkbox selected was in the middle of the last selection and the first selection
                            // then we undo the selections
                            this._doSelection(this._data[i], i);
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
            const element = (/** @type {?} */ (event.target));
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null && element.tagName.toLowerCase() !== 'mat-pseudo-checkbox') {
                this.rowClick.emit({
                    row,
                    index,
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
        this.sortChange.next({ name: this._sortBy.name, order: this._sortOrder });
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
            const xPosition = event.clientX;
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
            const splitName = name.split(/\.(.+)/, 2);
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
        const wasSelected = this.isRowSelected(row);
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
            const index = this.value.indexOf(row);
            if (index > -1) {
                this.value.splice(index, 1);
            }
        }
        this._calculateCheckboxState();
        this.rowSelect.emit({ row, index: rowIndex, selected: !wasSelected });
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
            for (const row of this._data) {
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
        const flexibleWidths = this._widths.filter((/**
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
            const newValue = Math.floor(recalculateHostWidth / flexibleWidths);
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
            const newFlexibleWidths = this._widths.filter((/**
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
            value,
            index,
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
                const widthOpts = (/** @type {?} */ (this.columns[index].width));
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
        const renderedColumns = this.columns.filter((/**
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
            const fromRow = scrolledRows - TD_VIRTUAL_OFFSET;
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
            const range = index - 1 + TD_VIRTUAL_OFFSET * 2;
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
                template: "<table td-data-table [style.left.px]=\"columnsLeftScroll\" [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\" (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); _selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"_selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"_selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\"\n        ></mat-checkbox>\n      </th>\n      <th\n        td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        [isColumnSortOrder]=\"!!column.columnSortOrder\"\n        (sortChange)=\"handleSort(column)\"\n      >\n        <span [matTooltip]=\"column.tooltip\" [class]=\"column.columnSortOrder ? 'td-table-header-label' : ''\">\n          {{ column.label }}\n          <span *ngIf=\"column.columnSortOrder\" class=\"td-data-table-sort-badge\">\n            {{ column.columnSortOrder || '' }}\n\n            <span\n              td-column-resizer\n              *ngIf=\"resizableColumns\"\n              draggable=\"true\"\n              class=\"td-data-table-column-resizer\"\n              [class.td-resizing]=\"i === resizingColumn\"\n              (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n              (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n              (drag)=\"_handleColumnDrag($event)\"\n              (dragend)=\"_handleEndColumnDrag()\"\n              (mouseup)=\"_handleEndColumnDrag()\"\n            >\n              <span class=\"td-data-table-column-separator\"></span>\n            </span>\n          </span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\" (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table\n    td-data-table\n    [style.transform]=\"offsetTransform\"\n    [style.position]=\"'absolute'\"\n    [class.mat-selectable]=\"selectable\"\n    [class.mat-clickable]=\"clickable\"\n  >\n    <tbody class=\"td-data-table-body\">\n      <tr\n        td-data-table-row\n        #dtRow\n        [tabIndex]=\"selectable ? 0 : -1\"\n        [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n        *ngFor=\"let row of virtualData; let rowIndex = index\"\n        (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n        (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n        (keydown.space)=\"blockEvent($event)\"\n        (keydown.shift.space)=\"blockEvent($event)\"\n        (keydown.shift)=\"disableTextSelection()\"\n        (keyup.shift)=\"enableTextSelection()\"\n      >\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\"\n          ></mat-pseudo-checkbox>\n        </td>\n        <td\n          td-data-table-cell\n          [numeric]=\"column.numeric\"\n          [hidden]=\"column.hidden\"\n          *ngFor=\"let column of columns; let i = index\"\n          [style.min-width.px]=\"getColumnWidth(i)\"\n          [style.max-width.px]=\"getColumnWidth(i)\"\n        >\n          <span *ngIf=\"!getTemplateRef(column.name)\">\n            {{ column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row) }}\n          </span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{\n              value: getCellValue(column, row),\n              row: row,\n              column: column.name,\n              index: rowIndex\n            }\"\n          ></ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
                inputs: ['value'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".td-data-table-sort-badge{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;border-radius:50%;display:-ms-flexbox;display:flex;height:16px;justify-content:center;margin-left:4px;width:16px}:host{display:block;overflow:hidden}:host .td-data-table-scrollable{height:calc(100% - 56px);overflow:auto;position:relative}.td-table-header-label{display:-ms-flexbox;display:flex}.td-data-table-column-resizer{cursor:col-resize;right:0;width:6px}.td-data-table-column-resizer,.td-data-table-column-resizer .td-data-table-column-separator{height:100%;position:absolute;top:0}.td-data-table-column-resizer .td-data-table-column-separator{left:2px}.td-data-table-column-resizer.td-resizing{cursor:-webkit-grabbing}table.td-data-table{width:auto!important}table.td-data-table.mat-selectable tbody>tr.td-data-table-row{transition:background-color .2s}table.td-data-table.mat-selectable .td-data-table-column:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:first-child>.td-data-table-column-content-wrapper{min-width:18px;padding:0 24px;width:18px}table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-left:0}[dir=rtl] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-left:28px;padding-right:0}table.td-data-table td.mat-checkbox-cell,table.td-data-table th.mat-checkbox-column{font-size:0!important;min-width:42px;width:42px}table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{height:18px;width:18px}::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked:after,::ng-deep table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked:after{height:4px!important;width:11px!important}table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{height:18px;margin:0;width:18px}"]
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
    _templates: [{ type: ContentChildren, args: [TdDataTableTemplateDirective, { descendants: true },] }],
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
    sortChange: [{ type: Output }],
    rowSelect: [{ type: Output }],
    rowClick: [{ type: Output }],
    selectAll: [{ type: Output }],
    compareWith: [{ type: Input }]
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
    TdDataTableComponent.prototype.sortChange;
    /**
     * rowSelect?: function
     * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectEvent] implemented object.
     * @type {?}
     */
    TdDataTableComponent.prototype.rowSelect;
    /**
     * rowClick?: function
     * Event emitted when a row is clicked.
     * Emits an [ITdDataTableRowClickEvent] implemented object.
     * @type {?}
     */
    TdDataTableComponent.prototype.rowClick;
    /**
     * selectAll?: function
     * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectAllEvent] implemented object.
     * @type {?}
     */
    TdDataTableComponent.prototype.selectAll;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBR1QsZUFBZSxFQUdmLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLFlBQVksRUFDWixVQUFVLEdBR1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNFLE9BQU8sRUFBNEIsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUtwRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUxRixPQUFPLEVBQXlCLHlCQUF5QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRXpGLE1BQVksdUJBQXVCO0lBQ2pDLFNBQVMsT0FBUTtJQUNqQixVQUFVLFFBQVM7RUFDcEI7Ozs7O0FBRUQsNkNBR0M7OztJQUZDLHND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O0lBT2xILHlDQUF5Rzs7Ozs7OztJQU96Ryx3Q0FBNEc7Ozs7Ozs7SUFPNUcseUNBQStHOzs7Ozs7O0lBZ0IvRywyQ0FFRTs7Ozs7SUFmQSx5Q0FBb0Q7Ozs7O0lBQ3BELDJDQUErQjs7Ozs7SUFDL0IsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVGVtcGxhdGVSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIERPV05fQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsXG4gIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LFxufSBmcm9tICcuL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtdGFibGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGVudW0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIge1xuICBBc2NlbmRpbmcgPSAnQVNDJyxcbiAgRGVzY2VuZGluZyA9ICdERVNDJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCB7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgbnVtZXJpYz86IGJvb2xlYW47XG4gIGZvcm1hdD86ICh2YWx1ZTogYW55KSA9PiBhbnk7XG4gIG5lc3RlZD86IGJvb2xlYW47XG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgZmlsdGVyPzogYm9vbGVhbjtcbiAgd2lkdGg/OiBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCB8IG51bWJlcjtcbiAgY29sdW1uU29ydE9yZGVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVNlbGVjdEV2ZW50IHtcbiAgcm93OiBhbnk7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50IHtcbiAgcm93czogYW55W107XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQge1xuICByb3c6IGFueTtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW50ZXJuYWxDb2x1bW5XaWR0aCB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGxpbWl0OiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xuICBtaW4/OiBib29sZWFuO1xuICBtYXg/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENvbnN0YW50IHRvIHNldCB0aGUgcm93cyBvZmZzZXQgYmVmb3JlIGFuZCBhZnRlciB0aGUgdmlld3BvcnRcbiAqL1xuY29uc3QgVERfVklSVFVBTF9PRkZTRVQ6IG51bWJlciA9IDI7XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gc2V0IGRlZmF1bHQgcm93IGhlaWdodCBpZiBub25lIGlzIHByb3ZpZGVkXG4gKi9cbmNvbnN0IFREX1ZJUlRVQUxfREVGQVVMVF9ST1dfSEVJR0hUOiBudW1iZXIgPSA0ODtcblxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGREYXRhVGFibGVNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKFRkRGF0YVRhYmxlQmFzZSwgW10pO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZERhdGFUYWJsZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzZWxlY3RvcjogJ3RkLWRhdGEtdGFibGUnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNvbXBvbmVudFxuICBleHRlbmRzIF9UZERhdGFUYWJsZU1peGluQmFzZVxuICBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogcmVzcG9uc2l2ZSB3aWR0aCBjYWxjdWxhdGlvbnMgKi9cbiAgcHJpdmF0ZSBfcmVzaXplU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yb3dzQ2hhbmdlZFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfaG9zdFdpZHRoOiBudW1iZXIgPSAwO1xuXG4gIC8qKiBtYW51YWxseSByZXNpemFibGUgY29sdW1ucyAqL1xuICBwcml2YXRlIF9yZXNpemFibGVDb2x1bW5zOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbHVtbkNsaWVudFg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2NvbHVtblJlc2l6ZVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcmVzaXppbmdDb2x1bW46IG51bWJlcjtcbiAgcHJpdmF0ZSBfb25Db2x1bW5SZXNpemU6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBnZXQgcmVzaXppbmdDb2x1bW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzaXppbmdDb2x1bW47XG4gIH1cblxuICBnZXQgaG9zdFdpZHRoKCk6IG51bWJlciB7XG4gICAgLy8gaWYgdGhlIGNoZWNrYm94ZXMgYXJlIHJlbmRlcmVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVpciB3aWR0aFxuICAgIC8vIGZyb20gdGhlIHRvdGFsIHdpZHRoIHRvIGNhbGN1bGF0ZSBwcm9wZXJseVxuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ob3N0V2lkdGggLSA0MjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgX3dpZHRoczogSUludGVybmFsQ29sdW1uV2lkdGhbXSA9IFtdO1xuICBwcml2YXRlIF9vblJlc2l6ZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIGNvbHVtbiBoZWFkZXIgcmVwb3NpdGlvbiBhbmQgdmlld3Bvb3J0ICovXG4gIHByaXZhdGUgX3ZlcnRpY2FsU2Nyb2xsU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9ob3Jpem9udGFsU2Nyb2xsU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX29uSG9yaXpvbnRhbFNjcm9sbDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9vblZlcnRpY2FsU2Nyb2xsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgLy8gQXJyYXkgb2YgY2FjaGVkIHJvdyBoZWlnaHRzIHRvIGFsbG93IGR5bmFtaWMgcm93IGhlaWdodHNcbiAgcHJpdmF0ZSBfcm93SGVpZ2h0Q2FjaGU6IG51bWJlcltdID0gW107XG4gIC8vIFRvdGFsIHBzZXVkbyBoZWlnaHQgb2YgYWxsIHRoZSBlbGVtZW50c1xuICBwcml2YXRlIF90b3RhbEhlaWdodDogbnVtYmVyID0gMDtcbiAgLy8gVG90YWwgaG9zdCBoZWlnaHQgZm9yIHRoZSB2aWV3cG9ydFxuICBwcml2YXRlIF9ob3N0SGVpZ2h0OiBudW1iZXIgPSAwO1xuICAvLyBTY3JvbGxlZCB2ZXJ0aWNhbCBwaXhlbHNcbiAgcHJpdmF0ZSBfc2Nyb2xsVmVydGljYWxPZmZzZXQ6IG51bWJlciA9IDA7XG4gIC8vIFN0eWxlIHRvIG1vdmUgdGhlIGNvbnRlbnQgYSBjZXJ0YWluIG9mZnNldCBkZXBlbmRpbmcgb24gc2Nyb2xsZWQgb2Zmc2V0XG4gIHByaXZhdGUgX29mZnNldFRyYW5zZm9ybTogU2FmZVN0eWxlO1xuXG4gIC8vIFZhcmlhYmxlcyB0aGF0IHNldCBmcm9tIGFuZCB0byB3aGljaCByb3dzIHdpbGwgYmUgcmVuZGVyZWRcbiAgcHJpdmF0ZSBfZnJvbVJvdzogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdG9Sb3c6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCBzdHlsZSB3aXRoIGEgcHJvcGVyIGNhbGN1bGF0aW9uIG9uIGhvdyBtdWNoIGl0IHNob3VsZCBtb3ZlXG4gICAqIG92ZXIgdGhlIHkgYXhpcyBvZiB0aGUgdG90YWwgaGVpZ2h0XG4gICAqL1xuICBnZXQgb2Zmc2V0VHJhbnNmb3JtKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRyYW5zZm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhc3N1bWVkIHRvdGFsIGhlaWdodCBvZiB0aGUgcm93c1xuICAgKi9cbiAgZ2V0IHRvdGFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluaXRpYWwgcm93IHRvIHJlbmRlciBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIGdldCBmcm9tUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Sb3c7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFzdCByb3cgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgZ2V0IHRvUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvUm93O1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzU3ViczogU3Vic2NyaXB0aW9uO1xuICAvKiogaW50ZXJuYWwgYXR0cmlidXRlcyAqL1xuICBwcml2YXRlIF9kYXRhOiBhbnlbXTtcbiAgLy8gZGF0YSB2aXJ0dWFsbHkgaXRlcmF0ZWQgYnkgY29tcG9uZW50XG4gIHByaXZhdGUgX3ZpcnR1YWxEYXRhOiBhbnlbXTtcbiAgcHJpdmF0ZSBfY29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW107XG4gIHByaXZhdGUgX3NlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2xpY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYWxsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBzb3J0aW5nICovXG4gIHByaXZhdGUgX3NvcnRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3NvcnRCeTogSVRkRGF0YVRhYmxlQ29sdW1uO1xuICBwcml2YXRlIF9zb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuXG4gIC8qKiBzaGlmdCBzZWxlY3QgKi9cbiAgcHJpdmF0ZSBfc2hpZnRQcmV2aW91c2x5UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sYXN0U2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgX2ZpcnN0U2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgX2ZpcnN0Q2hlY2tib3hWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiB0ZW1wbGF0ZSBmZXRjaGluZyBzdXBwb3J0ICovXG4gIHByaXZhdGUgX3RlbXBsYXRlTWFwOiBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PigpO1xuICBAQ29udGVudENoaWxkcmVuKFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgX3RlbXBsYXRlczogUXVlcnlMaXN0PFxuICAgIFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmVcbiAgPjtcblxuICBAVmlld0NoaWxkKCdzY3JvbGxhYmxlRGl2JywgeyBzdGF0aWM6IHRydWUgfSkgX3Njcm9sbGFibGVEaXY6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZHJlbignY29sdW1uRWxlbWVudCcpIF9jb2xFbGVtZW50czogUXVlcnlMaXN0PFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkcmVuKFRkRGF0YVRhYmxlUm93Q29tcG9uZW50KSBfcm93czogUXVlcnlMaXN0PFRkRGF0YVRhYmxlUm93Q29tcG9uZW50PjtcblxuICAvKipcbiAgICogUmV0dXJucyBzY3JvbGwgcG9zaXRpb24gdG8gcmVwb3NpdGlvbiBjb2x1bW4gaGVhZGVyc1xuICAgKi9cbiAgZ2V0IGNvbHVtbnNMZWZ0U2Nyb2xsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgKiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHZhbHVlcyBhcmUgc2VsZWN0ZWQuXG4gICAqL1xuICBnZXQgYWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbFNlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdmFsdWVzIGFyZSBub3QgZGVzZWxlY3RlZFxuICAgKiBhbmQgYXQgbGVhc3Qgb25lIGlzLlxuICAgKi9cbiAgZ2V0IGluZGV0ZXJtaW5hdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV0ZXJtaW5hdGU7XG4gIH1cblxuICAvKipcbiAgICogZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9W11cbiAgICogU2V0cyB0aGUgZGF0YSB0byBiZSByZW5kZXJlZCBhcyByb3dzLlxuICAgKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IGRhdGEoZGF0YTogYW55W10pIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9yb3dIZWlnaHRDYWNoZSA9IFtdO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAvLyBzY3JvbGwgYmFjayB0byB0aGUgdG9wIGlmIHRoZSBkYXRhIGhhcyBjaGFuZ2VkXG4gICAgICB0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICB9KTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgdmlydHVhbERhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb2x1bW5zPzogSVRkRGF0YVRhYmxlQ29sdW1uW11cbiAgICogU2V0cyBhZGRpdGlvbmFsIGNvbHVtbiBjb25maWd1cmF0aW9uLiBbSVRkRGF0YVRhYmxlQ29sdW1uLm5hbWVdIGhhcyB0byBleGlzdCBpbiBbZGF0YV0gYXMga2V5LlxuICAgKiBEZWZhdWx0cyB0byBbZGF0YV0ga2V5cy5cbiAgICovXG4gIEBJbnB1dCgnY29sdW1ucycpXG4gIHNldCBjb2x1bW5zKGNvbHM6IElUZERhdGFUYWJsZUNvbHVtbltdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHM7XG4gIH1cbiAgZ2V0IGNvbHVtbnMoKTogSVRkRGF0YVRhYmxlQ29sdW1uW10ge1xuICAgIGlmICh0aGlzLl9jb2x1bW5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNEYXRhKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gW107XG4gICAgICAvLyBpZiBjb2x1bW5zIGlzIHVuZGVmaW5lZCwgdXNlIGtleSBpbiBbZGF0YV0gcm93cyBhcyBuYW1lIGFuZCBsYWJlbCBmb3IgY29sdW1uIGhlYWRlcnMuXG4gICAgICBjb25zdCByb3c6IGFueSA9IHRoaXMuX2RhdGFbMF07XG4gICAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGspKSB7XG4gICAgICAgICAgdGhpcy5fY29sdW1ucy5wdXNoKHsgbmFtZTogaywgbGFiZWw6IGsgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzaXphYmxlQ29sdW1ucz86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtYW51YWwgY29sdW1uIHJlc2l6ZS5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdyZXNpemFibGVDb2x1bW5zJylcbiAgc2V0IHJlc2l6YWJsZUNvbHVtbnMocmVzaXphYmxlQ29sdW1uczogYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVzaXphYmxlQ29sdW1ucyk7XG4gIH1cbiAgZ2V0IHJlc2l6YWJsZUNvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgc2VsZWN0aW9uIGV2ZW50cywgaG92ZXIgYW5kIHNlbGVjdGVkIHJvdyBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc2VsZWN0YWJsZScpXG4gIHNldCBzZWxlY3RhYmxlKHNlbGVjdGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNlbGVjdGFibGUpO1xuICB9XG4gIGdldCBzZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrYWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgY2xpY2sgZXZlbnRzLCBob3Zlci5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdjbGlja2FibGUnKVxuICBzZXQgY2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsaWNrYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjbGlja2FibGUpO1xuICB9XG4gIGdldCBjbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtdWx0aXBsZSByb3cgc2VsZWN0aW9uLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzb3J0YWJsZScpXG4gIHNldCBzb3J0YWJsZShzb3J0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNvcnRhYmxlKTtcbiAgfVxuICBnZXQgc29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRCeT86IHN0cmluZ1xuICAgKiBTZXRzIHRoZSBhY3RpdmUgc29ydCBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgnc29ydEJ5JylcbiAgc2V0IHNvcnRCeShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGNvbHVtbk5hbWUpO1xuICAgIGlmICghY29sdW1uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0QnldIG11c3QgYmUgYSB2YWxpZCBjb2x1bW4gbmFtZScpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgfVxuICBnZXQgc29ydEJ5Q29sdW1uKCk6IElUZERhdGFUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgdGhlIFtzb3J0QnldIGNvbHVtbi4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBjb25zdCBzb3J0T3JkZXI6IHN0cmluZyA9IG9yZGVyID8gb3JkZXIudG9VcHBlckNhc2UoKSA6ICdBU0MnO1xuICAgIGlmIChzb3J0T3JkZXIgIT09ICdERVNDJyAmJiBzb3J0T3JkZXIgIT09ICdBU0MnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0T3JkZXJdIG11c3QgYmUgZW1wdHksIEFTQyBvciBERVNDJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydE9yZGVyID0gc29ydE9yZGVyID09PSAnQVNDJyA/IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyA6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmc7XG4gIH1cbiAgZ2V0IHNvcnRPcmRlckVudW0oKTogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXI7XG4gIH1cblxuICBnZXQgaGFzRGF0YSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogc29ydENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY29sdW1uIGhlYWRlcnMgYXJlIGNsaWNrZWQuIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHJvd1NlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgcm93U2VsZWN0OiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RFdmVudD4oKTtcblxuICAvKipcbiAgICogcm93Q2xpY2s/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgY2xpY2tlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSByb3dDbGljazogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBzZWxlY3RBbGw/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYWxsIHJvd3MgYXJlIHNlbGVjdGVkL2Rlc2VsZWN0ZWQgYnkgdGhlIGFsbCBjaGVja2JveC4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGFyZVdpdGg/OiBmdW5jdGlvbihyb3csIG1vZGVsKTogYm9vbGVhblxuICAgKiBBbGxvd3MgY3VzdG9tIGNvbXBhcmlzb24gYmV0d2VlbiByb3cgYW5kIG1vZGVsIHRvIHNlZSBpZiByb3cgaXMgc2VsZWN0ZWQgb3Igbm90XG4gICAqIERlZmF1bHQgY29tcGFyYXRpb24gaXMgYnkgcmVmZXJlbmNlXG4gICAqL1xuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiBib29sZWFuID0gKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHJvdyA9PT0gbW9kZWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgcmVzaXplIGFuZCBzY3JvbGwgZXZlbnRzXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHJlc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICB0aGlzLl9yZXNpemVTdWJzID0gdGhpcy5fb25SZXNpemUuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9yb3dzKSB7XG4gICAgICAgIHRoaXMuX3Jvd3MudG9BcnJheSgpLmZvckVhY2goKHJvdzogVGREYXRhVGFibGVSb3dDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICB0aGlzLl9yb3dIZWlnaHRDYWNoZVt0aGlzLmZyb21Sb3cgKyBpbmRleF0gPSByb3cuaGVpZ2h0ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIGNvbHVtbiByZXNpemUgY2FsY3VsYXRpb25zXG4gICAgdGhpcy5fY29sdW1uUmVzaXplU3VicyA9IHRoaXMuX29uQ29sdW1uUmVzaXplXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgwKSlcbiAgICAgIC5zdWJzY3JpYmUoKGNsaWVudFg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gY2xpZW50WDtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlV2lkdGhzKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBzY3JvbGwgY29sdW1uIGhlYWRlciByZXBvc2l0aW9uXG4gICAgdGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMgPSB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKChob3Jpem9udGFsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgPSBob3Jpem9udGFsU2Nyb2xsO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciB2aXJ0dWFsIHNjcm9sbCByZW5kZXJpbmdcbiAgICB0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMgPSB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgodmVydGljYWxTY3JvbGw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgPSB2ZXJ0aWNhbFNjcm9sbDtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZXNTdWJzID0gdGhpcy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0ZW1wbGF0ZXMgYW5kIHNldHMgdGhlbSBpbiBhIG1hcCBmb3IgZmFzdGVyIGFjY2Vzcy5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KCkpIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlTWFwLnNldCh0ZW1wbGF0ZS50ZERhdGFUYWJsZVRlbXBsYXRlLCB0ZW1wbGF0ZS50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBob3N0cyBuYXRpdmUgZWxlbWVudHMgd2lkdGhzIHRvIHNlZSBpZiBpdCBoYXMgY2hhbmdlZCAocmVzaXplIGNoZWNrKVxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIC8vIGNoZWNrIGlmIHRoZSBzY3JvbGwgaGFzIGJlZW4gcmVzZXQgd2hlbiBlbGVtZW50IGlzIGhpZGRlblxuICAgIGlmICh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCAtIHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPiA1KSB7XG4gICAgICAvLyBzY3JvbGwgYmFjayB0byB0aGUgdG9wIGlmIGVsZW1lbnQgaGFzIGJlZW4gcmVzZXRcbiAgICAgIHRoaXMuX29uVmVydGljYWxTY3JvbGwubmV4dCgwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgY29uc3QgbmV3SG9zdFdpZHRoOiBudW1iZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAvLyBpZiB0aGUgd2lkdGggaGFzIGNoYW5nZWQgdGhlbiB3ZSB0aHJvdyBhIHJlc2l6ZSBldmVudC5cbiAgICAgIGlmICh0aGlzLl9ob3N0V2lkdGggIT09IG5ld0hvc3RXaWR0aCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9ob3N0V2lkdGggPSBuZXdIb3N0V2lkdGg7XG4gICAgICAgICAgdGhpcy5fb25SZXNpemUubmV4dCgpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudCkge1xuICAgICAgY29uc3QgbmV3SG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIC8vIGlmIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGhhcyBjaGFuZ2VkLCB0aGVuIHdlIG1hcmsgZm9yIGNoZWNrXG4gICAgICBpZiAodGhpcy5faG9zdEhlaWdodCAhPT0gbmV3SG9zdEhlaWdodCkge1xuICAgICAgICB0aGlzLl9ob3N0SGVpZ2h0ID0gbmV3SG9zdEhlaWdodDtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0byBhbiBvYnNlcnZhYmxlIHRoYXQgY2hlY2tzIGlmIGFsbCByb3dzIGhhdmUgYmVlbiByZW5kZXJlZFxuICAgKiBzbyB3ZSBjYW4gc3RhcnQgY2FsY3VsYXRpbmcgdGhlIHdpZHRoc1xuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jvd3NDaGFuZ2VkU3VicyA9IHRoaXMuX3Jvd3MuY2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uUmVzaXplLm5leHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBvYnNlcnZhYmxlcyB3aGVuIGRhdGEgdGFibGUgaXMgZGVzdHJveWVkXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcmVzaXplU3Vicykge1xuICAgICAgdGhpcy5fcmVzaXplU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29sdW1uUmVzaXplU3Vicykge1xuICAgICAgdGhpcy5fY29sdW1uUmVzaXplU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMpIHtcbiAgICAgIHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMpIHtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm93c0NoYW5nZWRTdWJzKSB7XG4gICAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMpIHtcbiAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgZ2V0cyBleGVjdXRlZCBldmVyeSB0aW1lIHRoZXJlIGlzIGEgc2Nyb2xsIGV2ZW50XG4gICAqIENhbGxzIHRoZSBzY3JvbGwgb2JzZXJ2YWJsZVxuICAgKi9cbiAgaGFuZGxlU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgIT09IGhvcml6b250YWxTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5fb25Ib3Jpem9udGFsU2Nyb2xsLm5leHQoaG9yaXpvbnRhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgIT09IHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX29uVmVydGljYWxTY3JvbGwubmV4dCh2ZXJ0aWNhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG5lZWRlZCBmb3IgdGhlIGNvbHVtbnMgdmlhIGluZGV4XG4gICAqL1xuICBnZXRDb2x1bW5XaWR0aChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fd2lkdGhzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRDZWxsVmFsdWUoY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4sIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChjb2x1bW4ubmVzdGVkID09PSB1bmRlZmluZWQgfHwgY29sdW1uLm5lc3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE5lc3RlZFZhbHVlKGNvbHVtbi5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVtjb2x1bW4ubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIG1ldGhvZCBmb3IgdGVtcGxhdGUgcmVmZXJlbmNlc1xuICAgKi9cbiAgZ2V0VGVtcGxhdGVSZWYobmFtZTogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgbW9kZWwgKG5nTW9kZWwpIG9mIGNvbXBvbmVudCBieSByZW1vdmluZyBhbGwgdmFsdWVzIGluIGFycmF5LlxuICAgKi9cbiAgY2xlYXJNb2RlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlLnNwbGljZSgwLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGRhdGEgdGFibGUgYW5kIHJlcmVuZGVycyBbZGF0YV0gYW5kIFtjb2x1bW5zXVxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhbGwgcm93cyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlLlxuICAgKi9cbiAgX3NlbGVjdEFsbChjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgdG9nZ2xlZFJvd3M6IGFueVtdID0gW107XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gc2tpcGluZyBhbHJlYWR5IHNlbGVjdGVkIHJvd3NcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2hlY2tpbmcgd2hpY2ggb25lcyBhcmUgYmVpbmcgdG9nZ2xlZFxuICAgICAgICBpZiAodGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgY29uc3QgbW9kZWxSb3c6IGFueSA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2YobW9kZWxSb3cpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQoeyByb3dzOiB0b2dnbGVkUm93cywgc2VsZWN0ZWQ6IGNoZWNrZWQgfSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm93IGlzIHNlbGVjdGVkXG4gICAqL1xuICBpc1Jvd1NlbGVjdGVkKHJvdzogYW55KTogYm9vbGVhbiB7XG4gICAgLy8gY29tcGFyZSBpdGVtcyBieSBbY29tcGFyZVdpdGhdIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICAgID8gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgICAgICB9KS5sZW5ndGggPiAwXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgY2xlYXJzIGEgcm93IGRlcGVuZGluZyBvbiAnY2hlY2tlZCcgdmFsdWUgaWYgdGhlIHJvdyAnaXNTZWxlY3RhYmxlJ1xuICAgKiBoYW5kbGVzIGNudHJsIGNsaWNrcyBhbmQgc2hpZnQgY2xpY2tzIGZvciBtdWx0aS1zZWxlY3RcbiAgICovXG4gIHNlbGVjdChyb3c6IGFueSwgZXZlbnQ6IEV2ZW50LCBjdXJyZW50U2VsZWN0ZWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgU2hpZnQga2V5IGlzIHNlbGVjdGVkIGFuZCBuZWVkIHRvIHNlbGVjdCBldmVyeXRoaW5nIGluIGJldHdlZW5cbiAgICAgIGNvbnN0IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgbW91c2VFdmVudCAmJiBtb3VzZUV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgbGV0IGZpcnN0SW5kZXg6IG51bWJlciA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgICAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0ZWQgPiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICBsYXN0SW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgY2xpY2tpbmcgYSBjaGVja2JveCBiZWhpbmQgdGhlIGluaXRpYWwgY2hlY2ssIHRoZW4gdG9nZ2xlIGFsbCBzZWxlY3Rpb25zIGV4cGVjdCB0aGUgaW5pdGlhbCBjaGVja2JveFxuICAgICAgICAvLyBlbHNlIHRoZSBjaGVja2JveGVzIGNsaWNrZWQgYXJlIGFsbCBhZnRlciB0aGUgaW5pdGlhbCBvbmVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPj0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID4gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KSB8fFxuICAgICAgICAgICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPD0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4IDwgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KVxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPiBjdXJyZW50U2VsZWN0ZWQgfHwgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDwgY3VycmVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgLy8gY2hhbmdlIGluZGV4ZXMgZGVwZW5kaW5nIG9uIHdoZXJlIHRoZSBuZXh0IGNoZWNrYm94IGlzIHNlbGVjdGVkIChiZWZvcmUgb3IgYWZ0ZXIpXG4gICAgICAgICAgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgICAgbGFzdEluZGV4LS07XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZpcnN0SW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93U2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzUm93U2VsZWN0ZWQodGhpcy5fZGF0YVtpXSk7XG4gICAgICAgICAgICAvLyBpZiByb3cgaXMgc2VsZWN0ZWQgYW5kIGZpcnN0IGNoZWNrYm94IHdhcyBzZWxlY3RlZFxuICAgICAgICAgICAgLy8gb3IgaWYgcm93IHdhcyB1bnNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgdW5zZWxlY3RlZFxuICAgICAgICAgICAgLy8gd2UgaWdub3JlIHRoZSB0b2dnbGVcbiAgICAgICAgICAgIGlmICgodGhpcy5fZmlyc3RDaGVja2JveFZhbHVlICYmICFyb3dTZWxlY3RlZCkgfHwgKCF0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgJiYgcm93U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCAmJlxuICAgICAgICAgICAgICAoKGN1cnJlbnRTZWxlY3RlZCA+PSB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggJiYgY3VycmVudFNlbGVjdGVkIDw9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSB8fFxuICAgICAgICAgICAgICAgIChjdXJyZW50U2VsZWN0ZWQgPD0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA+PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gZWxzZSBpZiB0aGUgY2hlY2tib3ggc2VsZWN0ZWQgd2FzIGluIHRoZSBtaWRkbGUgb2YgdGhlIGxhc3Qgc2VsZWN0aW9uIGFuZCB0aGUgZmlyc3Qgc2VsZWN0aW9uXG4gICAgICAgICAgICAgIC8vIHRoZW4gd2UgdW5kbyB0aGUgc2VsZWN0aW9uc1xuICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCA9IHRydWU7XG4gICAgICAgIC8vIGlmIHNoaWZ0IHdhc250IHByZXNzZWQsIHRoZW4gd2UgdGFrZSB0aGUgZWxlbWVudCBjaGVja2VkIGFzIHRoZSBmaXJzdCByb3dcbiAgICAgICAgLy8gaW5jYXNlIHRoZSBuZXh0IGNsaWNrIHVzZXMgc2hpZnRcbiAgICAgIH0gZWxzZSBpZiAobW91c2VFdmVudCAmJiAhbW91c2VFdmVudC5zaGlmdEtleSkge1xuICAgICAgICB0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgPSB0aGlzLl9kb1NlbGVjdGlvbihyb3csIGN1cnJlbnRTZWxlY3RlZCk7XG4gICAgICAgIHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgb25zZWxlY3RzdGFydCBtZXRob2Qgb2YgdGhlIGRvY3VtZW50IHNvIG90aGVyIHRleHQgb24gdGhlIHBhZ2VcbiAgICogZG9lc24ndCBnZXQgc2VsZWN0ZWQgd2hlbiBkb2luZyBzaGlmdCBzZWxlY3Rpb25zLlxuICAgKi9cbiAgZGlzYWJsZVRleHRTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9kb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24gKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIG9yaWdpbmFsIG9uc2VsZWN0c3RhcnQgbWV0aG9kLlxuICAgKi9cbiAgZW5hYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGVtaXRzIHRoZSBvblJvd0NsaWNrRXZlbnQgd2hlbiBhIHJvdyBpcyBjbGlja2VkXG4gICAqIGlmIGNsaWNrYWJsZSBpcyB0cnVlIGFuZCBzZWxlY3RhYmxlIGlzIGZhbHNlIHRoZW4gc2VsZWN0IHRoZSByb3dcbiAgICovXG4gIGhhbmRsZVJvd0NsaWNrKHJvdzogYW55LCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGlja2FibGUpIHtcbiAgICAgIC8vIGlnbm9yaW5nIGxpbnRpbmcgcnVsZXMgaGVyZSBiZWNhdXNlIGF0dHJpYnV0ZSBpdCBhY3R1YWxseSBudWxsIG9yIG5vdCB0aGVyZVxuICAgICAgLy8gY2FuJ3QgY2hlY2sgZm9yIHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3JjRWxlbWVudDogYW55ID0gZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGlmIChzcmNFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RvcFJvd0NsaWNrJykgPT09IG51bGwgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdtYXQtcHNldWRvLWNoZWNrYm94Jykge1xuICAgICAgICB0aGlzLnJvd0NsaWNrLmVtaXQoe1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBoYW5kbGUgZm9yIHNvcnQgY2xpY2sgZXZlbnQgaW4gY29sdW1uIGhlYWRlcnMuXG4gICAqL1xuICBoYW5kbGVTb3J0KGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NvcnRCeSA9PT0gY29sdW1uKSB7XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPVxuICAgICAgICB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgICAgICAgID8gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZ1xuICAgICAgICAgIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb3J0QnkgPSBjb2x1bW47XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gICAgfVxuICAgIHRoaXMuc29ydENoYW5nZS5uZXh0KHsgbmFtZTogdGhpcy5fc29ydEJ5Lm5hbWUsIG9yZGVyOiB0aGlzLl9zb3J0T3JkZXIgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFsbCBrZXl1cCBldmVudHMgd2hlbiBmb2N1c2luZyBhIGRhdGEgdGFibGUgcm93XG4gICAqL1xuICBfcm93S2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHJvdzogYW55LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgLyoqIGlmIHVzZXIgcHJlc3NlcyBlbnRlciBvciBzcGFjZSwgdGhlIHJvdyBzaG91bGQgYmUgc2VsZWN0ZWQgKi9cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgdXAgYXJyb3csIHdlIGZvY3VzIHRoZSBwcmV2IHJvd1xuICAgICAgICAgKiB1bmxlc3MgaXRzIHRoZSBmaXJzdCByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKVtpbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuZnJvbVJvdyArIGluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgZG93biBhcnJvdywgd2UgZm9jdXMgdGhlIG5leHQgcm93XG4gICAgICAgICAqIHVubGVzcyBpdHMgdGhlIGxhc3Qgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLl9yb3dzLnRvQXJyYXkoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA8IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29sdW1uIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGNvbHVtbiBhbmQgaW5pdGlhbCBjbGllbnRYIG9mIGNvbHVtblxuICAgKi9cbiAgX2hhbmRsZVN0YXJ0Q29sdW1uRHJhZyhpbmRleDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMuX3Jlc2l6aW5nQ29sdW1uID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBuZXcgd2lkdGggZGVwZW5kaW5nIG9uIG5ldyBjbGllbnRYIG9mIGRyYWdnZXIgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlQ29sdW1uRHJhZyhldmVudDogTW91c2VFdmVudCB8IERyYWdFdmVudCk6IHZvaWQge1xuICAgIC8vIGNoZWNrIGlmIHRoZXJlIHdhcyBiZWVuIGEgc2VwYXJhdG9yIGNsaWNrZWQgZm9yIHJlc2l6ZVxuICAgIGlmICh0aGlzLl9yZXNpemluZ0NvbHVtbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmNsaWVudFggPiAwKSB7XG4gICAgICBjb25zdCB4UG9zaXRpb246IG51bWJlciA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHNlcGFyYXRvciBpcyBiZWluZyBtb3ZlZCB0byB0cnkgYW5kIHJlc2l6ZSB0aGUgY29sdW1uLCBlbHNlIGRvbnQgZG8gYW55dGhpbmdcbiAgICAgIGlmICh4UG9zaXRpb24gPiAwICYmIHRoaXMuX2NvbHVtbkNsaWVudFggPiAwICYmIHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFggIT09IDApIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgd2lkdGggZGVwZW5kaW5nIGlmIG1ha2luZyB0aGUgY29sdW1uIGJpZ2dlciBvciBzbWFsbGVyXG4gICAgICAgIGxldCBwcm9wb3NlZE1hbnVhbFdpZHRoOiBudW1iZXIgPSB0aGlzLl93aWR0aHNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnZhbHVlICsgKHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFgpO1xuICAgICAgICAvLyBpZiB0aGUgcHJvcG9zZWQgbmV3IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgcHJvamVjdGVkIG1pbiB3aWR0aCBvZiB0aGUgY29sdW1uLCB1c2UgcHJvamVjdGVkIG1pbiB3aWR0aFxuICAgICAgICBpZiAocHJvcG9zZWRNYW51YWxXaWR0aCA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9yZXNpemluZ0NvbHVtbl0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgICAgICBwcm9wb3NlZE1hbnVhbFdpZHRoID0gdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS5wcm9qZWN0ZWRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbnNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLndpZHRoID0gcHJvcG9zZWRNYW51YWxXaWR0aDtcbiAgICAgICAgLy8gdXBkYXRlIG5ldyB4IHBvc2l0aW9uIGZvciB0aGUgcmVzaXplZCBjb2x1bW5cbiAgICAgICAgdGhpcy5fb25Db2x1bW5SZXNpemUubmV4dCh4UG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmRzIGRyYWdnZWQgZmxhZ3NcbiAgICovXG4gIF9oYW5kbGVFbmRDb2x1bW5EcmFnKCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnRzXG4gICAqL1xuICBibG9ja0V2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXROZXN0ZWRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhbmFtZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgY29uc3Qgc3BsaXROYW1lOiBzdHJpbmdbXSA9IG5hbWUuc3BsaXQoL1xcLiguKykvLCAyKTtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShzcGxpdE5hbWVbMV0sIHZhbHVlW3NwbGl0TmFtZVswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWVbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvZXMgdGhlIGFjdHVhbCBSb3cgU2VsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIF9kb1NlbGVjdGlvbihyb3c6IGFueSwgcm93SW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHdhc1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdyk7XG4gICAgaWYgKCF3YXNTZWxlY3RlZCkge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmNsZWFyTW9kZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICAgIHJvdyA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICB9KVswXTtcbiAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpO1xuICAgIHRoaXMucm93U2VsZWN0LmVtaXQoeyByb3csIGluZGV4OiByb3dJbmRleCwgc2VsZWN0ZWQ6ICF3YXNTZWxlY3RlZCB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHJldHVybiAhd2FzU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFsbCB0aGUgc3RhdGUgb2YgYWxsIGNoZWNrYm94ZXNcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gdHlwZW9mIHRoaXMuX2RhdGEuZmluZCgoZDogYW55KSA9PiAhdGhpcy5pc1Jvd1NlbGVjdGVkKGQpKSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLl9kYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHdpZHRocyBmb3IgY29sdW1ucyBhbmQgY2VsbHMgZGVwZW5kaW5nIG9uIGNvbnRlbnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRocygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29sRWxlbWVudHMgJiYgdGhpcy5fY29sRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl93aWR0aHMgPSBbXTtcbiAgICAgIHRoaXMuX2NvbEVsZW1lbnRzLmZvckVhY2goKGNvbDogVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXgsIHRoaXMuX2NhbGN1bGF0ZVdpZHRoKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWRodHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGNvbHVtbnMgYWZ0ZXIgY2FsY3VsYXRpb24gdG8gc2VlIGlmIHRoZXkgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RDb2x1bW5XaWRodHMoKTogdm9pZCB7XG4gICAgbGV0IGZpeGVkVG90YWxXaWR0aDogbnVtYmVyID0gMDtcbiAgICAvLyBnZXQgdGhlIG51bWJlciBvZiB0b3RhbCBjb2x1bW5zIHRoYXQgaGF2ZSBmbGV4aWJsZSB3aWR0aHMgKG5vdCBmaXhlZCBvciBoaWRkZW4pXG4gICAgY29uc3QgZmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC5saW1pdCB8fCB3aWR0aC5tYXggfHwgd2lkdGgubWluKSB7XG4gICAgICAgIGZpeGVkVG90YWxXaWR0aCArPSB3aWR0aC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heCAmJiAhd2lkdGgubWluO1xuICAgIH0pLmxlbmd0aDtcbiAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggcGl4ZXMgYXJlIGxlZnQgdGhhdCBjb3VsZCBiZSBzcHJlYWQgYWNyb3NzXG4gICAgLy8gdGhlIGZsZXhpYmxlIGNvbHVtbnNcbiAgICBsZXQgcmVjYWxjdWxhdGVIb3N0V2lkdGg6IG51bWJlciA9IDA7XG4gICAgaWYgKGZpeGVkVG90YWxXaWR0aCA8IHRoaXMuaG9zdFdpZHRoKSB7XG4gICAgICByZWNhbGN1bGF0ZUhvc3RXaWR0aCA9IHRoaXMuaG9zdFdpZHRoIC0gZml4ZWRUb3RhbFdpZHRoO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBoYXZlIGZsZXhpYmxlIGNvbHVtbnMgYW5kIHBpeGVscyB0byBzcGFyZSBvbiB0aGVtXG4gICAgLy8gd2UgdHJ5IGFuZCBzcHJlYWQgdGhlIHBpeGVscyBhY3Jvc3MgdGhlbVxuICAgIGlmIChmbGV4aWJsZVdpZHRocyAmJiByZWNhbGN1bGF0ZUhvc3RXaWR0aCkge1xuICAgICAgY29uc3QgbmV3VmFsdWU6IG51bWJlciA9IE1hdGguZmxvb3IocmVjYWxjdWxhdGVIb3N0V2lkdGggLyBmbGV4aWJsZVdpZHRocyk7XG4gICAgICBsZXQgYWRqdXN0ZWROdW1iZXI6IG51bWJlciA9IDA7XG4gICAgICAvLyBhZGp1c3QgdGhlIGNvbHVtbiB3aWR0aHMgd2l0aCB0aGUgc3ByZWFkIHBpeGVsc1xuICAgICAgdGhpcy5fd2lkdGhzLmZvckVhY2goKGNvbFdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubWF4ICYmIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0udmFsdWUgPiBuZXdWYWx1ZSkgfHxcbiAgICAgICAgICAodGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5taW4gJiYgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS52YWx1ZSA8IG5ld1ZhbHVlKSB8fFxuICAgICAgICAgICF0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLmxpbWl0XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZHRoKGNvbFdpZHRoLmluZGV4LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgYWRqdXN0ZWROdW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgY29sdW1ucyB0aGF0IG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkLCB3ZSBzdGFydCBvdmVyXG4gICAgICBjb25zdCBuZXdGbGV4aWJsZVdpZHRoczogbnVtYmVyID0gdGhpcy5fd2lkdGhzLmZpbHRlcigod2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoKSA9PiB7XG4gICAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heDtcbiAgICAgIH0pLmxlbmd0aDtcbiAgICAgIGlmIChuZXdGbGV4aWJsZVdpZHRocyAhPT0gYWRqdXN0ZWROdW1iZXIgJiYgbmV3RmxleGlibGVXaWR0aHMgIT09IGZsZXhpYmxlV2lkdGhzKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGEgc2luZ2xlIGNvbHVtbiB0byBzZWUgaWYgaXQgY2FuIGJlIHJlY2FsY3VsYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpZHRoc1tpbmRleF0gPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGluZGV4LFxuICAgICAgbGltaXQ6IGZhbHNlLFxuICAgICAgbWluOiBmYWxzZSxcbiAgICAgIG1heDogZmFsc2UsXG4gICAgfTtcbiAgICAvLyBmbGFnIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNraXAgdGhlIG1pbiB3aWR0aCBwcm9qZWN0aW9uXG4gICAgLy8gZGVwZW5kaW5nIGlmIGEgd2lkdGggb3IgbWluIHdpZHRoIGhhcyBiZWVuIHByb3ZpZGVkXG4gICAgbGV0IHNraXBNaW5XaWR0aFByb2plY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jb2x1bW5zW2luZGV4XSkge1xuICAgICAgLy8gaWYgdGhlIHByb3ZpZGVkIHdpZHRoIGhhcyBtaW4vbWF4LCB0aGVuIHdlIGNoZWNrIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNldCBpdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCB3aWR0aE9wdHM6IElUZERhdGFUYWJsZUNvbHVtbldpZHRoID0gPElUZERhdGFUYWJsZUNvbHVtbldpZHRoPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBjb25maWd1cmVkIG1pbiwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgc2tpcE1pbldpZHRoUHJvamVjdGlvbiA9IHdpZHRoT3B0cyAmJiAhIXdpZHRoT3B0cy5taW47XG4gICAgICAgIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1pbiA+PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5taW47XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbW9yZSB0aGFuIHRoZSBjb25maWd1cmVkIG1heCwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1heCA8PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5tYXg7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5tYXggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGl0IGhhcyBhIGZpeGVkIHdpZHRoLCB0aGVuIHdlIGp1c3Qgc2V0IGl0XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gPG51bWJlcj50aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoO1xuICAgICAgICBza2lwTWluV2lkdGhQcm9qZWN0aW9uID0gdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIHdhc24ndCBhbnkgd2lkdGggb3IgbWluIHdpZHRoIHByb3ZpZGVkLCB3ZSBzZXQgYSBtaW4gdG8gd2hhdCB0aGUgY29sdW1uIHdpZHRoIG1pbiBzaG91bGQgYmVcbiAgICBpZiAoIXNraXBNaW5XaWR0aFByb2plY3Rpb24gJiYgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbaW5kZXhdLnByb2plY3RlZFdpZHRoO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmljIG1ldGhvZCB0byBjYWxjdWxhdGUgY29sdW1uIHdpZHRoXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlbmRlcmVkQ29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW10gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2w6IElUZERhdGFUYWJsZUNvbHVtbikgPT4gIWNvbC5oaWRkZW4pO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuaG9zdFdpZHRoIC8gcmVuZGVyZWRDb2x1bW5zLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGN1bGF0ZSB0aGUgcm93cyB0byBiZSByZW5kZXJlZCBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk6IHZvaWQge1xuICAgIGxldCBzY3JvbGxlZFJvd3M6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIGxldCByb3dIZWlnaHRTdW06IG51bWJlciA9IDA7XG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHJvd3MgdG8gc2VlIGlmIHdlIGhhdmUgdGhlaXIgaGVpZ2h0IGNhY2hlZFxuICAgICAgLy8gYW5kIHN1bSB0aGVtIGFsbCB0byBjYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodFxuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChkOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIHJvd3MgYXQgZmlyc3QgYW5kIGFzc3VtZSBhbGxcbiAgICAgICAgLy8gcm93cyBhcmUgdGhlIHNhbWUgaGVpZ2h0IGFzIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKCF0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSkge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldID0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbMF0gfHwgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgcm93SGVpZ2h0U3VtICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldO1xuICAgICAgICAvLyBjaGVjayBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSByb3dIZWlnaHRTdW0gPiAwKSB7XG4gICAgICAgICAgc2Nyb2xsZWRSb3dzKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSByb3dIZWlnaHRTdW07XG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGNvbnN0IGZyb21Sb3c6IG51bWJlciA9IHNjcm9sbGVkUm93cyAtIFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IGZyb21Sb3cgPiAwID8gZnJvbVJvdyA6IDA7XG5cbiAgICAgIGxldCBob3N0SGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9ob3N0SGVpZ2h0O1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgLy8gY2FsY3VsYXRlIGhvdyBtYW55IHJvd3MgY2FuIGZpdCBpbiB0aGUgdmlld3BvcnRcbiAgICAgIHdoaWxlIChob3N0SGVpZ2h0ID4gMCkge1xuICAgICAgICBob3N0SGVpZ2h0IC09IHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICAgIC8vIHNldCB0aGUgbGFzdCByb3cgdG8gYmUgcmVuZGVyZWQgdGFraW5nIGludG8gYWNjb3VudCB0aGUgcm93IG9mZnNldFxuICAgICAgY29uc3QgcmFuZ2U6IG51bWJlciA9IGluZGV4IC0gMSArIFREX1ZJUlRVQUxfT0ZGU0VUICogMjtcbiAgICAgIGxldCB0b1JvdzogbnVtYmVyID0gcmFuZ2UgKyB0aGlzLmZyb21Sb3c7XG4gICAgICAvLyBpZiBsYXN0IHJvdyBpcyBncmVhdGVyIHRoYW4gdGhlIHRvdGFsIGxlbmd0aCwgdGhlbiB3ZSB1c2UgdGhlIHRvdGFsIGxlbmd0aFxuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwcm9wZXIgb2Zmc2V0IGRlcGVuZGluZyBvbiBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgIGlmIChzY3JvbGxlZFJvd3MgPiBURF9WSVJUVUFMX09GRlNFVCkge1xuICAgICAgZm9yIChsZXQgaW5kZXg6IG51bWJlciA9IDA7IGluZGV4IDwgdGhpcy5mcm9tUm93OyBpbmRleCsrKSB7XG4gICAgICAgIG9mZnNldCArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fb2Zmc2V0VHJhbnNmb3JtID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShcbiAgICAgICd0cmFuc2xhdGVZKCcgKyAob2Zmc2V0IC0gdGhpcy50b3RhbEhlaWdodCkgKyAncHgpJyxcbiAgICApO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsRGF0YSA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLmZyb21Sb3csIHRoaXMudG9Sb3cpO1xuICAgIH1cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=