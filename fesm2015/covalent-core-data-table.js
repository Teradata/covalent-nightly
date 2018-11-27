import { Component, Input, Renderer2, ElementRef, HostListener, Directive, TemplateRef, ViewContainerRef, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ContentChildren, Inject, Optional, ViewChildren, HostBinding, Injectable, SkipSelf, NgModule } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ENTER, SPACE, UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { mixinControlValueAccessor } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableColumnRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
}
TdDataTableColumnRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-column-row]',
                template: "<ng-content></ng-content>",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableColumnRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
class TdDataTableRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        if (selected) {
            this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
        }
        this._selected = selected;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        let height = 48;
        if (this._elementRef.nativeElement) {
            height = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return height;
    }
    /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    clickListener() {
        this.focus();
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
TdDataTableRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-row]',
                template: "<ng-content></ng-content>",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableRowComponent.propDecorators = {
    selected: [{ type: Input, args: ['selected',] }],
    clickListener: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableTemplateDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdDataTableTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[tdDataTableTemplate]ng-template' },] }
];
/** @nocollapse */
TdDataTableTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
TdDataTableTemplateDirective.propDecorators = {
    tdDataTableTemplate: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
const TdDataTableSortingOrder = {
    Ascending: 'ASC',
    Descending: 'DESC',
};
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
class TdDataTableBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdDataTableMixinBase = mixinControlValueAccessor(TdDataTableBase, []);
class TdDataTableComponent extends _TdDataTableMixinBase {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableColumnComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._sortOrder = TdDataTableSortingOrder.Ascending;
        /**
         * name?: string
         * Sets unique column [name] for [sortable] events.
         */
        this.name = '';
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        this.sortable = false;
        /**
         * active?: boolean
         * Sets column to active state when 'true'.
         * Defaults to 'false'
         */
        this.active = false;
        /**
         * numeric?: boolean
         * Makes column follow the numeric data-table specs and sort icon.
         * Defaults to 'false'
         */
        this.numeric = false;
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        this.onSortChange = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
    }
    /**
     * @return {?}
     */
    get projectedWidth() {
        if (this._columnContent && this._columnContent.nativeElement) {
            return ((/** @type {?} */ (this._columnContent.nativeElement))).getBoundingClientRect().width;
        }
        return 100;
    }
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of column.
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
    get bindClickable() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    get bingSortable() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    get bindActive() {
        return this.active;
    }
    /**
     * @return {?}
     */
    get bindNumeric() {
        return this.numeric;
    }
    /**
     * Listening to click event on host to throw a sort event
     * @return {?}
     */
    handleClick() {
        if (this.sortable) {
            this.onSortChange.emit({ name: this.name, order: this._sortOrder });
        }
    }
    /**
     * @return {?}
     */
    isAscending() {
        return this._sortOrder === TdDataTableSortingOrder.Ascending;
    }
    /**
     * @return {?}
     */
    isDescending() {
        return this._sortOrder === TdDataTableSortingOrder.Descending;
    }
}
TdDataTableColumnComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'th[td-data-table-column]',
                template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"(!(active) || isAscending())\"\n    [class.mat-desc]=\"(active && isDescending())\">\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"(!(active) || isAscending())\"\n    [class.mat-desc]=\"(active && isDescending())\">\n    arrow_upward\n  </mat-icon>\n</span>\n<ng-content select=\"[td-column-resizer]\"></ng-content>\n",
                styles: [":host{white-space:nowrap;position:relative;padding:0;vertical-align:middle;text-align:left}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{height:16px;width:16px;font-size:16px!important;line-height:16px!important}:host mat-icon.td-data-table-sort-icon{opacity:0;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;position:absolute;top:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}:host mat-icon.td-data-table-sort-icon.mat-desc{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:initial}html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:initial}html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
            }] }
];
/** @nocollapse */
TdDataTableColumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableColumnComponent.propDecorators = {
    _columnContent: [{ type: ViewChild, args: ['columnContent', { read: ElementRef },] }],
    name: [{ type: Input, args: ['name',] }],
    sortable: [{ type: Input, args: ['sortable',] }],
    active: [{ type: Input, args: ['active',] }],
    numeric: [{ type: Input, args: ['numeric',] }],
    sortOrder: [{ type: Input, args: ['sortOrder',] }],
    onSortChange: [{ type: Output, args: ['sortChange',] }],
    bindClickable: [{ type: HostBinding, args: ['class.mat-clickable',] }],
    bingSortable: [{ type: HostBinding, args: ['class.mat-sortable',] }],
    bindActive: [{ type: HostBinding, args: ['class.mat-active',] }],
    bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }],
    handleClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableCellComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         */
        this.numeric = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
    }
    /**
     * @return {?}
     */
    get bindNumeric() {
        return this.numeric;
    }
}
TdDataTableCellComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td[td-data-table-cell]',
                template: "<div class=\"td-data-table-cell-content-wrapper\"\n     [class.td-data-table-cell-numeric]=\"numeric\">\n  <ng-content></ng-content>\n</div>",
                styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-ms-flex-pack:end;justify-content:flex-end}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
            }] }
];
/** @nocollapse */
TdDataTableCellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableCellComponent.propDecorators = {
    numeric: [{ type: Input, args: ['numeric',] }],
    bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableTableComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
    }
}
TdDataTableTableComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'table[td-data-table]',
                template: "<ng-content></ng-content>",
                styles: [":host{width:100%;position:relative;border-spacing:0;overflow:hidden;border-collapse:collapse}"]
            }] }
];
/** @nocollapse */
TdDataTableTableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableService {
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    filterData(data, searchTerm, ignoreCase = false, excludedColumns) {
        /** @type {?} */
        let filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter((item) => {
                /** @type {?} */
                const res = Object.keys(item).find((key) => {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        const preItemValue = ('' + item[key]);
                        /** @type {?} */
                        const itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    }
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    sortData(data, sortBy, sortOrder = TdDataTableSortingOrder.Ascending) {
        if (sortBy) {
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
            data.sort((a, b) => {
                /** @type {?} */
                let compA = a[sortBy];
                /** @type {?} */
                let compB = b[sortBy];
                /** @type {?} */
                let direction = 0;
                if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                    direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                }
                else {
                    if (compA < compB) {
                        direction = -1;
                    }
                    else if (compA > compB) {
                        direction = 1;
                    }
                }
                return direction * (sortOrder === TdDataTableSortingOrder.Descending ? -1 : 1);
            });
        }
        return data;
    }
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    pageData(data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    }
}
TdDataTableService.decorators = [
    { type: Injectable }
];
/**
 * @param {?} parent
 * @return {?}
 */
function DATA_TABLE_PROVIDER_FACTORY(parent) {
    return parent || new TdDataTableService();
}
/** @type {?} */
const DATA_TABLE_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDataTableService,
    deps: [[new Optional(), new SkipSelf(), TdDataTableService]],
    useFactory: DATA_TABLE_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableColumnRowComponent,
    TdDataTableTableComponent,
];
class CovalentDataTableModule {
}
CovalentDataTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatCheckboxModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatPseudoCheckboxModule,
                ],
                declarations: [
                    TD_DATA_TABLE,
                ],
                exports: [
                    TD_DATA_TABLE,
                ],
                providers: [
                    DATA_TABLE_PROVIDER,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentDataTableModule, TdDataTableSortingOrder, TdDataTableBase, _TdDataTableMixinBase, TdDataTableComponent, TdDataTableCellComponent, TdDataTableColumnComponent, TdDataTableColumnRowComponent, TdDataTableRowComponent, TdDataTableTableComponent, TdDataTableTemplateDirective, DATA_TABLE_PROVIDER_FACTORY, TdDataTableService, DATA_TABLE_PROVIDER };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1kYXRhLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS9kaXJlY3RpdmVzL2RhdGEtdGFibGUtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWNlbGwvZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLXRhYmxlL2RhdGEtdGFibGUtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL3NlcnZpY2VzL2RhdGEtdGFibGUuc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNlbGwvZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0clt0ZC1kYXRhLXRhYmxlLWNvbHVtbi1yb3ddJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29sdW1uUm93Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtY29sdW1uLXJvdycpO1xuICB9XG5cbn1cblxuQENvbXBvbmVudCh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ3RyW3RkLWRhdGEtdGFibGUtcm93XScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCB7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoJ3NlbGVjdGVkJylcbiAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1zZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICB9XG4gIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgbGV0IGhlaWdodDogbnVtYmVyID0gNDg7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgaGVpZ2h0ID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLXJvdycpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmluZyB0byBjbGljayBldmVudCB0byBleHBsaWNpdGx5IGZvY3VzIHRoZSByb3cgZWxlbWVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgY2xpY2tMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbdGREYXRhVGFibGVUZW1wbGF0ZV1uZy10ZW1wbGF0ZSd9KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgdGREYXRhVGFibGVUZW1wbGF0ZTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgICAgICAgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LFxuICAgICAgICAgQ29udGVudENoaWxkcmVuLCBUZW1wbGF0ZVJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgUXVlcnlMaXN0LCBJbmplY3QsXG4gICAgICAgICBPcHRpb25hbCwgVmlld0NoaWxkcmVuLCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRU5URVIsIFNQQUNFLCBVUF9BUlJPVywgRE9XTl9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1yb3cvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudCwgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtdGFibGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGVudW0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIge1xuICBBc2NlbmRpbmcgPSAnQVNDJyxcbiAgRGVzY2VuZGluZyA9ICdERVNDJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCB7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgbnVtZXJpYz86IGJvb2xlYW47XG4gIGZvcm1hdD86ICh2YWx1ZTogYW55KSA9PiBhbnk7XG4gIG5lc3RlZD86IGJvb2xlYW47XG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgZmlsdGVyPzogYm9vbGVhbjtcbiAgd2lkdGg/OiBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVTZWxlY3RFdmVudCB7XG4gIHJvdzogYW55O1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudCB7XG4gIHJvd3M6IGFueVtdO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50IHtcbiAgcm93OiBhbnk7XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUludGVybmFsQ29sdW1uV2lkdGgge1xuICB2YWx1ZTogbnVtYmVyO1xuICBsaW1pdDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbWluPzogYm9vbGVhbjtcbiAgbWF4PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb25zdGFudCB0byBzZXQgdGhlIHJvd3Mgb2Zmc2V0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHZpZXdwb3J0XG4gKi9cbmNvbnN0IFREX1ZJUlRVQUxfT0ZGU0VUOiBudW1iZXIgPSAyO1xuXG4vKipcbiAqIENvbnN0YW50IHRvIHNldCBkZWZhdWx0IHJvdyBoZWlnaHQgaWYgbm9uZSBpcyBwcm92aWRlZFxuICovXG5jb25zdCBURF9WSVJUVUFMX0RFRkFVTFRfUk9XX0hFSUdIVDogbnVtYmVyID0gNDg7XG5cbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRGF0YVRhYmxlTWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihUZERhdGFUYWJsZUJhc2UsIFtdKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZERhdGFUYWJsZUNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxuICBzZWxlY3RvcjogJ3RkLWRhdGEtdGFibGUnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIGlucHV0czogWyd2YWx1ZSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDb21wb25lbnQgZXh0ZW5kcyBfVGREYXRhVGFibGVNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyQ29udGVudEluaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqIHJlc3BvbnNpdmUgd2lkdGggY2FsY3VsYXRpb25zICovXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcm93c0NoYW5nZWRTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2hvc3RXaWR0aDogbnVtYmVyID0gMDtcblxuICAvKiogbWFudWFsbHkgcmVzaXphYmxlIGNvbHVtbnMgKi9cbiAgcHJpdmF0ZSBfcmVzaXphYmxlQ29sdW1uczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2x1bW5DbGllbnRYOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jb2x1bW5SZXNpemVTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Jlc2l6aW5nQ29sdW1uOiBudW1iZXI7XG4gIHByaXZhdGUgX29uQ29sdW1uUmVzaXplOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgZ2V0IHJlc2l6aW5nQ29sdW1uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6aW5nQ29sdW1uO1xuICB9XG5cbiAgZ2V0IGhvc3RXaWR0aCgpOiBudW1iZXIge1xuICAgIC8vIGlmIHRoZSBjaGVja2JveGVzIGFyZSByZW5kZXJlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlaXIgd2lkdGhcbiAgICAvLyBmcm9tIHRoZSB0b3RhbCB3aWR0aCB0byBjYWxjdWxhdGUgcHJvcGVybHlcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faG9zdFdpZHRoIC0gNDI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ob3N0V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIF93aWR0aHM6IElJbnRlcm5hbENvbHVtbldpZHRoW10gPSBbXTtcbiAgcHJpdmF0ZSBfb25SZXNpemU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBjb2x1bW4gaGVhZGVyIHJlcG9zaXRpb24gYW5kIHZpZXdwb29ydCAqL1xuICBwcml2YXRlIF92ZXJ0aWNhbFNjcm9sbFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfaG9yaXpvbnRhbFNjcm9sbFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc2Nyb2xsSG9yaXpvbnRhbE9mZnNldDogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIF9vbkhvcml6b250YWxTY3JvbGw6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfb25WZXJ0aWNhbFNjcm9sbDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIC8vIEFycmF5IG9mIGNhY2hlZCByb3cgaGVpZ2h0cyB0byBhbGxvdyBkeW5hbWljIHJvdyBoZWlnaHRzXG4gIHByaXZhdGUgX3Jvd0hlaWdodENhY2hlOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUb3RhbCBwc2V1ZG8gaGVpZ2h0IG9mIGFsbCB0aGUgZWxlbWVudHNcbiAgcHJpdmF0ZSBfdG90YWxIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8vIFRvdGFsIGhvc3QgaGVpZ2h0IGZvciB0aGUgdmlld3BvcnRcbiAgcHJpdmF0ZSBfaG9zdEhlaWdodDogbnVtYmVyID0gMDtcbiAgLy8gU2Nyb2xsZWQgdmVydGljYWwgcGl4ZWxzXG4gIHByaXZhdGUgX3Njcm9sbFZlcnRpY2FsT2Zmc2V0OiBudW1iZXIgPSAwO1xuICAvLyBTdHlsZSB0byBtb3ZlIHRoZSBjb250ZW50IGEgY2VydGFpbiBvZmZzZXQgZGVwZW5kaW5nIG9uIHNjcm9sbGVkIG9mZnNldFxuICBwcml2YXRlIF9vZmZzZXRUcmFuc2Zvcm06IFNhZmVTdHlsZTtcblxuICAvLyBWYXJpYWJsZXMgdGhhdCBzZXQgZnJvbSBhbmQgdG8gd2hpY2ggcm93cyB3aWxsIGJlIHJlbmRlcmVkXG4gIHByaXZhdGUgX2Zyb21Sb3c6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvUm93OiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQgc3R5bGUgd2l0aCBhIHByb3BlciBjYWxjdWxhdGlvbiBvbiBob3cgbXVjaCBpdCBzaG91bGQgbW92ZVxuICAgKiBvdmVyIHRoZSB5IGF4aXMgb2YgdGhlIHRvdGFsIGhlaWdodFxuICAgKi9cbiAgZ2V0IG9mZnNldFRyYW5zZm9ybSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUcmFuc2Zvcm07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXNzdW1lZCB0b3RhbCBoZWlnaHQgb2YgdGhlIHJvd3NcbiAgICovXG4gIGdldCB0b3RhbEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbml0aWFsIHJvdyB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBnZXQgZnJvbVJvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9mcm9tUm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhc3Qgcm93IHRvIHJlbmRlciBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIGdldCB0b1JvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b1JvdztcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlc1N1YnM6IFN1YnNjcmlwdGlvbjtcbiAgLyoqIGludGVybmFsIGF0dHJpYnV0ZXMgKi9cbiAgcHJpdmF0ZSBfZGF0YTogYW55W107XG4gIC8vIGRhdGEgdmlydHVhbGx5IGl0ZXJhdGVkIGJ5IGNvbXBvbmVudFxuICBwcml2YXRlIF92aXJ0dWFsRGF0YTogYW55W107XG4gIHByaXZhdGUgX2NvbHVtbnM6IElUZERhdGFUYWJsZUNvbHVtbltdO1xuICBwcml2YXRlIF9zZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NsaWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2FsbFNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2luZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogc29ydGluZyAqL1xuICBwcml2YXRlIF9zb3J0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zb3J0Qnk6IElUZERhdGFUYWJsZUNvbHVtbjtcbiAgcHJpdmF0ZSBfc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcblxuICAvKiogc2hpZnQgc2VsZWN0ICovXG4gIHByaXZhdGUgX3NoaWZ0UHJldmlvdXNseVByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGFzdFNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIF9maXJzdFNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIF9maXJzdENoZWNrYm94VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogdGVtcGxhdGUgZmV0Y2hpbmcgc3VwcG9ydCAqL1xuICBwcml2YXRlIF90ZW1wbGF0ZU1hcDogTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlKSBfdGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZT47XG5cbiAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZURpdicpIF9zY3JvbGxhYmxlRGl2OiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2NvbHVtbkVsZW1lbnQnKSBfY29sRWxlbWVudHM6IFF1ZXJ5TGlzdDxUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZHJlbihUZERhdGFUYWJsZVJvd0NvbXBvbmVudCkgX3Jvd3M6IFF1ZXJ5TGlzdDxUZERhdGFUYWJsZVJvd0NvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc2Nyb2xsIHBvc2l0aW9uIHRvIHJlcG9zaXRpb24gY29sdW1uIGhlYWRlcnNcbiAgICovXG4gIGdldCBjb2x1bW5zTGVmdFNjcm9sbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ICogLTE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB2YWx1ZXMgYXJlIHNlbGVjdGVkLlxuICAgKi9cbiAgZ2V0IGFsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxTZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHZhbHVlcyBhcmUgbm90IGRlc2VsZWN0ZWRcbiAgICogYW5kIGF0IGxlYXN0IG9uZSBpcy5cbiAgICovXG4gIGdldCBpbmRldGVybWluYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmRldGVybWluYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIGRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fVtdXG4gICAqIFNldHMgdGhlIGRhdGEgdG8gYmUgcmVuZGVyZWQgYXMgcm93cy5cbiAgICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fcm93SGVpZ2h0Q2FjaGUgPSBbXTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgLy8gc2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCBpZiB0aGUgZGF0YSBoYXMgY2hhbmdlZFxuICAgICAgdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IHZpcnR1YWxEYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbERhdGE7XG4gIH1cblxuICAvKipcbiAgICogY29sdW1ucz86IElUZERhdGFUYWJsZUNvbHVtbltdXG4gICAqIFNldHMgYWRkaXRpb25hbCBjb2x1bW4gY29uZmlndXJhdGlvbi4gW0lUZERhdGFUYWJsZUNvbHVtbi5uYW1lXSBoYXMgdG8gZXhpc3QgaW4gW2RhdGFdIGFzIGtleS5cbiAgICogRGVmYXVsdHMgdG8gW2RhdGFdIGtleXMuXG4gICAqL1xuICBASW5wdXQoJ2NvbHVtbnMnKVxuICBzZXQgY29sdW1ucyhjb2xzOiBJVGREYXRhVGFibGVDb2x1bW5bXSkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2xzO1xuICB9XG4gIGdldCBjb2x1bW5zKCk6IElUZERhdGFUYWJsZUNvbHVtbltdIHtcbiAgICBpZiAodGhpcy5fY29sdW1ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzRGF0YSkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IFtdO1xuICAgICAgLy8gaWYgY29sdW1ucyBpcyB1bmRlZmluZWQsIHVzZSBrZXkgaW4gW2RhdGFdIHJvd3MgYXMgbmFtZSBhbmQgbGFiZWwgZm9yIGNvbHVtbiBoZWFkZXJzLlxuICAgICAgbGV0IHJvdzogYW55ID0gdGhpcy5fZGF0YVswXTtcbiAgICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaCgoazogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fY29sdW1ucy5maW5kKChjOiBhbnkpID0+IGMubmFtZSA9PT0gaykpIHtcbiAgICAgICAgICB0aGlzLl9jb2x1bW5zLnB1c2goeyBuYW1lOiBrLCBsYWJlbDogayB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXNpemFibGVDb2x1bW5zPzogYm9vbGVhblxuICAgKiBFbmFibGVzIG1hbnVhbCBjb2x1bW4gcmVzaXplLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3Jlc2l6YWJsZUNvbHVtbnMnKVxuICBzZXQgcmVzaXphYmxlQ29sdW1ucyhyZXNpemFibGVDb2x1bW5zOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVzaXphYmxlQ29sdW1ucyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXNpemFibGVDb2x1bW5zKTtcbiAgfVxuICBnZXQgcmVzaXphYmxlQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzaXphYmxlQ29sdW1ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZWxlY3RhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHJvdyBzZWxlY3Rpb24gZXZlbnRzLCBob3ZlciBhbmQgc2VsZWN0ZWQgcm93IHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzZWxlY3RhYmxlJylcbiAgc2V0IHNlbGVjdGFibGUoc2VsZWN0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc2VsZWN0YWJsZSk7XG4gIH1cbiAgZ2V0IHNlbGVjdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGFibGU7XG4gIH1cblxuICAvKipcbiAgICogY2xpY2thYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHJvdyBjbGljayBldmVudHMsIGhvdmVyLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ2NsaWNrYWJsZScpXG4gIHNldCBjbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2xpY2thYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGNsaWNrYWJsZSk7XG4gIH1cbiAgZ2V0IGNsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpY2thYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIG11bHRpcGxlIHJvdyBzZWxlY3Rpb24uIFtzZWxlY3RhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICAvKipcbiAgICogc29ydGFibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgc29ydGluZyBldmVudHMsIHNvcnQgaWNvbnMgYW5kIGFjdGl2ZSBjb2x1bW4gc3RhdGVzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3NvcnRhYmxlJylcbiAgc2V0IHNvcnRhYmxlKHNvcnRhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc29ydGFibGUpO1xuICB9XG4gIGdldCBzb3J0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydGFibGU7XG4gIH1cblxuICAvKipcbiAgICogc29ydEJ5Pzogc3RyaW5nXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBzb3J0IGNvbHVtbi4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKi9cbiAgQElucHV0KCdzb3J0QnknKVxuICBzZXQgc29ydEJ5KGNvbHVtbk5hbWU6IHN0cmluZykge1xuICAgIGlmICghY29sdW1uTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb2x1bW46IElUZERhdGFUYWJsZUNvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKChjOiBhbnkpID0+IGMubmFtZSA9PT0gY29sdW1uTmFtZSk7XG4gICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW3NvcnRCeV0gbXVzdCBiZSBhIHZhbGlkIGNvbHVtbiBuYW1lJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydEJ5ID0gY29sdW1uO1xuICB9XG4gIGdldCBzb3J0QnlDb2x1bW4oKTogSVRkRGF0YVRhYmxlQ29sdW1uIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydEJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRPcmRlcj86IFsnQVNDJyB8ICdERVNDJ10gb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXJcbiAgICogU2V0cyB0aGUgc29ydCBvcmRlciBvZiB0aGUgW3NvcnRCeV0gY29sdW1uLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIERlZmF1bHRzIHRvICdBU0MnIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKi9cbiAgQElucHV0KCdzb3J0T3JkZXInKVxuICBzZXQgc29ydE9yZGVyKG9yZGVyOiAnQVNDJyB8ICdERVNDJykge1xuICAgIGxldCBzb3J0T3JkZXI6IHN0cmluZyA9IG9yZGVyID8gb3JkZXIudG9VcHBlckNhc2UoKSA6ICdBU0MnO1xuICAgIGlmIChzb3J0T3JkZXIgIT09ICdERVNDJyAmJiBzb3J0T3JkZXIgIT09ICdBU0MnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0T3JkZXJdIG11c3QgYmUgZW1wdHksIEFTQyBvciBERVNDJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydE9yZGVyID0gc29ydE9yZGVyID09PSAnQVNDJyA/XG4gICAgICBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcgOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nO1xuICB9XG4gIGdldCBzb3J0T3JkZXJFbnVtKCk6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyO1xuICB9XG5cbiAgZ2V0IGhhc0RhdGEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRDaGFuZ2U/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNvbHVtbiBoZWFkZXJzIGFyZSBjbGlja2VkLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3NvcnRDaGFuZ2UnKSBvblNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHJvd1NlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdyb3dTZWxlY3QnKSBvblJvd1NlbGVjdDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHJvd0NsaWNrPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgcm93IGlzIGNsaWNrZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdyb3dDbGljaycpIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudD4oKTtcblxuICAvKipcbiAgICogc2VsZWN0QWxsPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGFsbCByb3dzIGFyZSBzZWxlY3RlZC9kZXNlbGVjdGVkIGJ5IHRoZSBhbGwgY2hlY2tib3guIFtzZWxlY3RhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlbGVjdEFsbCcpIG9uU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQ+ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgICAgICAgICAgIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBhcmVXaXRoPzogZnVuY3Rpb24ocm93LCBtb2RlbCk6IGJvb2xlYW5cbiAgICogQWxsb3dzIGN1c3RvbSBjb21wYXJpc29uIGJldHdlZW4gcm93IGFuZCBtb2RlbCB0byBzZWUgaWYgcm93IGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgKiBEZWZhdWx0IGNvbXBhcmF0aW9uIGlzIGJ5IHJlZmVyZW5jZVxuICAgKi9cbiAgQElucHV0KCdjb21wYXJlV2l0aCcpIGNvbXBhcmVXaXRoOiAocm93OiBhbnksIG1vZGVsOiBhbnkpID0+IGJvb2xlYW4gPSAocm93OiBhbnksIG1vZGVsOiBhbnkpID0+IHtcbiAgICByZXR1cm4gcm93ID09PSBtb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50c1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgY2FsY3VsYXRpb25zXG4gICAgdGhpcy5fcmVzaXplU3VicyA9IHRoaXMuX29uUmVzaXplLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fcm93cykge1xuICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKS5mb3JFYWNoKChyb3c6IFRkRGF0YVRhYmxlUm93Q29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcm93SGVpZ2h0Q2FjaGVbdGhpcy5mcm9tUm93ICsgaW5kZXhdID0gcm93LmhlaWdodCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FsY3VsYXRlV2lkdGhzKCk7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIH0pO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBjb2x1bW4gcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMgPSB0aGlzLl9vbkNvbHVtblJlc2l6ZS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICkuc3Vic2NyaWJlKChjbGllbnRYOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSBjbGllbnRYO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlV2lkdGhzKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHNjcm9sbCBjb2x1bW4gaGVhZGVyIHJlcG9zaXRpb25cbiAgICB0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3VicyA9IHRoaXMuX29uSG9yaXpvbnRhbFNjcm9sbC5hc09ic2VydmFibGUoKVxuICAgICAgLnN1YnNjcmliZSgoaG9yaXpvbnRhbFNjcm9sbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ID0gaG9yaXpvbnRhbFNjcm9sbDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgdmlydHVhbCBzY3JvbGwgcmVuZGVyaW5nXG4gICAgdGhpcy5fdmVydGljYWxTY3JvbGxTdWJzID0gdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5hc09ic2VydmFibGUoKVxuICAgICAgLnN1YnNjcmliZSgodmVydGljYWxTY3JvbGw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgPSB2ZXJ0aWNhbFNjcm9sbDtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZXNTdWJzID0gdGhpcy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0ZW1wbGF0ZXMgYW5kIHNldHMgdGhlbSBpbiBhIG1hcCBmb3IgZmFzdGVyIGFjY2Vzcy5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fdGVtcGxhdGVzLnRvQXJyYXkoKS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fdGVtcGxhdGVNYXAuc2V0KFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpW2ldLnRkRGF0YVRhYmxlVGVtcGxhdGUsXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KClbaV0udGVtcGxhdGVSZWYsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaG9zdHMgbmF0aXZlIGVsZW1lbnRzIHdpZHRocyB0byBzZWUgaWYgaXQgaGFzIGNoYW5nZWQgKHJlc2l6ZSBjaGVjaylcbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAvLyBjaGVjayBpZiB0aGUgc2Nyb2xsIGhhcyBiZWVuIHJlc2V0IHdoZW4gZWxlbWVudCBpcyBoaWRkZW5cbiAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSB0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID4gNSkge1xuICAgICAgLy8gc2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCBpZiBlbGVtZW50IGhhcyBiZWVuIHJlc2V0XG4gICAgICB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLm5leHQoMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGxldCBuZXdIb3N0V2lkdGg6IG51bWJlciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIC8vIGlmIHRoZSB3aWR0aCBoYXMgY2hhbmdlZCB0aGVuIHdlIHRocm93IGEgcmVzaXplIGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hvc3RXaWR0aCAhPT0gbmV3SG9zdFdpZHRoKSB7XG4gICAgICAgIHRoaXMuX2hvc3RXaWR0aCA9IG5ld0hvc3RXaWR0aDtcbiAgICAgICAgdGhpcy5fb25SZXNpemUubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBsZXQgbmV3SG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIC8vIGlmIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGhhcyBjaGFuZ2VkLCB0aGVuIHdlIG1hcmsgZm9yIGNoZWNrXG4gICAgICBpZiAodGhpcy5faG9zdEhlaWdodCAhPT0gbmV3SG9zdEhlaWdodCkge1xuICAgICAgICB0aGlzLl9ob3N0SGVpZ2h0ID0gbmV3SG9zdEhlaWdodDtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0byBhbiBvYnNlcnZhYmxlIHRoYXQgY2hlY2tzIGlmIGFsbCByb3dzIGhhdmUgYmVlbiByZW5kZXJlZFxuICAgKiBzbyB3ZSBjYW4gc3RhcnQgY2FsY3VsYXRpbmcgdGhlIHdpZHRoc1xuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jvd3NDaGFuZ2VkU3VicyA9IHRoaXMuX3Jvd3MuY2hhbmdlcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uUmVzaXplLm5leHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBvYnNlcnZhYmxlcyB3aGVuIGRhdGEgdGFibGUgaXMgZGVzdHJveWVkXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcmVzaXplU3Vicykge1xuICAgICAgdGhpcy5fcmVzaXplU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29sdW1uUmVzaXplU3Vicykge1xuICAgICAgdGhpcy5fY29sdW1uUmVzaXplU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMpIHtcbiAgICAgIHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMpIHtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm93c0NoYW5nZWRTdWJzKSB7XG4gICAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMpIHtcbiAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgZ2V0cyBleGVjdXRlZCBldmVyeSB0aW1lIHRoZXJlIGlzIGEgc2Nyb2xsIGV2ZW50XG4gICAqIENhbGxzIHRoZSBzY3JvbGwgb2JzZXJ2YWJsZVxuICAgKi9cbiAgaGFuZGxlU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgbGV0IGhvcml6b250YWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ICE9PSBob3Jpem9udGFsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX29uSG9yaXpvbnRhbFNjcm9sbC5uZXh0KGhvcml6b250YWxTY3JvbGwpO1xuICAgICAgfVxuICAgICAgbGV0IHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCAhPT0gdmVydGljYWxTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5uZXh0KHZlcnRpY2FsU2Nyb2xsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggbmVlZGVkIGZvciB0aGUgY29sdW1ucyB2aWEgaW5kZXhcbiAgICovXG4gIGdldENvbHVtbldpZHRoKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl93aWR0aHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldENlbGxWYWx1ZShjb2x1bW46IElUZERhdGFUYWJsZUNvbHVtbiwgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKGNvbHVtbi5uZXN0ZWQgPT09IHVuZGVmaW5lZCB8fCBjb2x1bW4ubmVzdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0TmVzdGVkVmFsdWUoY29sdW1uLm5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlW2NvbHVtbi5uYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgbWV0aG9kIGZvciB0ZW1wbGF0ZSByZWZlcmVuY2VzXG4gICAqL1xuICAgZ2V0VGVtcGxhdGVSZWYobmFtZTogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZU1hcC5nZXQobmFtZSk7XG4gICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBtb2RlbCAobmdNb2RlbCkgb2YgY29tcG9uZW50IGJ5IHJlbW92aW5nIGFsbCB2YWx1ZXMgaW4gYXJyYXkuXG4gICAqL1xuICBjbGVhck1vZGVsKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUuc3BsaWNlKDAsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMgZGF0YSB0YWJsZSBhbmQgcmVyZW5kZXJzIFtkYXRhXSBhbmQgW2NvbHVtbnNdXG4gICAqL1xuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlV2lkdGhzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgY2xlYXJzIGFsbCByb3dzIGRlcGVuZGluZyBvbiAnY2hlY2tlZCcgdmFsdWUuXG4gICAqL1xuICBzZWxlY3RBbGwoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGxldCB0b2dnbGVkUm93czogYW55W10gPSBbXTtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAvLyBza2lwaW5nIGFscmVhZHkgc2VsZWN0ZWQgcm93c1xuICAgICAgICBpZiAoIXRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZS5wdXNoKHJvdyk7XG4gICAgICAgICAgLy8gY2hlY2tpbmcgd2hpY2ggb25lcyBhcmUgYmVpbmcgdG9nZ2xlZFxuICAgICAgICAgIHRvZ2dsZWRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAvLyBjaGVja2luZyB3aGljaCBvbmVzIGFyZSBiZWluZyB0b2dnbGVkXG4gICAgICAgIGlmICh0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIHRvZ2dsZWRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgICBsZXQgbW9kZWxSb3c6IGFueSA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy52YWx1ZS5pbmRleE9mKG1vZGVsUm93KTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLm9uU2VsZWN0QWxsLmVtaXQoe3Jvd3M6IHRvZ2dsZWRSb3dzLCBzZWxlY3RlZDogY2hlY2tlZH0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdyBpcyBzZWxlY3RlZFxuICAgKi9cbiAgaXNSb3dTZWxlY3RlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8vIGNvbXBhcmUgaXRlbXMgYnkgW2NvbXBhcmVXaXRoXSBmdW5jdGlvblxuICAgIHJldHVybiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgfSkubGVuZ3RoID4gMCA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgY2xlYXJzIGEgcm93IGRlcGVuZGluZyBvbiAnY2hlY2tlZCcgdmFsdWUgaWYgdGhlIHJvdyAnaXNTZWxlY3RhYmxlJ1xuICAgKiBoYW5kbGVzIGNudHJsIGNsaWNrcyBhbmQgc2hpZnQgY2xpY2tzIGZvciBtdWx0aS1zZWxlY3RcbiAgICovXG4gIHNlbGVjdChyb3c6IGFueSwgZXZlbnQ6IEV2ZW50LCBjdXJyZW50U2VsZWN0ZWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgU2hpZnQga2V5IGlzIHNlbGVjdGVkIGFuZCBuZWVkIHRvIHNlbGVjdCBldmVyeXRoaW5nIGluIGJldHdlZW5cbiAgICAgIGxldCBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50ID0gZXZlbnQgYXMgTW91c2VFdmVudDtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIG1vdXNlRXZlbnQgJiYgbW91c2VFdmVudC5zaGlmdEtleSAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIGxldCBmaXJzdEluZGV4OiBudW1iZXIgPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAoY3VycmVudFNlbGVjdGVkID4gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICBmaXJzdEluZGV4ID0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgbGFzdEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGNsaWNraW5nIGEgY2hlY2tib3ggYmVoaW5kIHRoZSBpbml0aWFsIGNoZWNrLCB0aGVuIHRvZ2dsZSBhbGwgc2VsZWN0aW9ucyBleHBlY3QgdGhlIGluaXRpYWwgY2hlY2tib3hcbiAgICAgICAgLy8gZWxzZSB0aGUgY2hlY2tib3hlcyBjbGlja2VkIGFyZSBhbGwgYWZ0ZXIgdGhlIGluaXRpYWwgb25lXG4gICAgICAgIGlmICgodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID49IGN1cnJlbnRTZWxlY3RlZCAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA+IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCkgfHxcbiAgICAgICAgICAgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8PSBjdXJyZW50U2VsZWN0ZWQgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPCB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXgpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+IGN1cnJlbnRTZWxlY3RlZCkgfHwgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8IGN1cnJlbnRTZWxlY3RlZCkpIHtcbiAgICAgICAgICAvLyBjaGFuZ2UgaW5kZXhlcyBkZXBlbmRpbmcgb24gd2hlcmUgdGhlIG5leHQgY2hlY2tib3ggaXMgc2VsZWN0ZWQgKGJlZm9yZSBvciBhZnRlcilcbiAgICAgICAgICBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID4gY3VycmVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBsYXN0SW5kZXgtLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgICAgZmlyc3RJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93U2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzUm93U2VsZWN0ZWQodGhpcy5fZGF0YVtpXSk7XG4gICAgICAgICAgICAvLyBpZiByb3cgaXMgc2VsZWN0ZWQgYW5kIGZpcnN0IGNoZWNrYm94IHdhcyBzZWxlY3RlZFxuICAgICAgICAgICAgLy8gb3IgaWYgcm93IHdhcyB1bnNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgdW5zZWxlY3RlZFxuICAgICAgICAgICAgLy8gd2UgaWdub3JlIHRoZSB0b2dnbGVcbiAgICAgICAgICAgIGlmICgodGhpcy5fZmlyc3RDaGVja2JveFZhbHVlICYmICFyb3dTZWxlY3RlZCkgfHxcbiAgICAgICAgICAgICAgICAoIXRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSAmJiByb3dTZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQpIHtcbiAgICAgICAgICAgICAgLy8gZWxzZSBpZiB0aGUgY2hlY2tib3ggc2VsZWN0ZWQgd2FzIGluIHRoZSBtaWRkbGUgb2YgdGhlIGxhc3Qgc2VsZWN0aW9uIGFuZCB0aGUgZmlyc3Qgc2VsZWN0aW9uXG4gICAgICAgICAgICAgIC8vIHRoZW4gd2UgdW5kbyB0aGUgc2VsZWN0aW9uc1xuICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRTZWxlY3RlZCA+PSB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggJiYgY3VycmVudFNlbGVjdGVkIDw9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSB8fFxuICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTZWxlY3RlZCA8PSB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggJiYgY3VycmVudFNlbGVjdGVkID49IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQgPSB0cnVlO1xuICAgICAgLy8gaWYgc2hpZnQgd2FzbnQgcHJlc3NlZCwgdGhlbiB3ZSB0YWtlIHRoZSBlbGVtZW50IGNoZWNrZWQgYXMgdGhlIGZpcnN0IHJvd1xuICAgICAgLy8gaW5jYXNlIHRoZSBuZXh0IGNsaWNrIHVzZXMgc2hpZnRcbiAgICAgIH0gZWxzZSBpZiAobW91c2VFdmVudCAmJiAhbW91c2VFdmVudC5zaGlmdEtleSkge1xuICAgICAgICB0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgPSB0aGlzLl9kb1NlbGVjdGlvbihyb3csIGN1cnJlbnRTZWxlY3RlZCk7XG4gICAgICAgIHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgb25zZWxlY3RzdGFydCBtZXRob2Qgb2YgdGhlIGRvY3VtZW50IHNvIG90aGVyIHRleHQgb24gdGhlIHBhZ2VcbiAgICogZG9lc24ndCBnZXQgc2VsZWN0ZWQgd2hlbiBkb2luZyBzaGlmdCBzZWxlY3Rpb25zLlxuICAgKi9cbiAgZGlzYWJsZVRleHRTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9kb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgb3JpZ2luYWwgb25zZWxlY3RzdGFydCBtZXRob2QuXG4gICAqL1xuICBlbmFibGVUZXh0U2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZW1pdHMgdGhlIG9uUm93Q2xpY2tFdmVudCB3aGVuIGEgcm93IGlzIGNsaWNrZWRcbiAgICogaWYgY2xpY2thYmxlIGlzIHRydWUgYW5kIHNlbGVjdGFibGUgaXMgZmFsc2UgdGhlbiBzZWxlY3QgdGhlIHJvd1xuICAgKi9cbiAgaGFuZGxlUm93Q2xpY2socm93OiBhbnksIGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsaWNrYWJsZSkge1xuICAgICAgLy8gaWdub3JpbmcgbGludGluZyBydWxlcyBoZXJlIGJlY2F1c2UgYXR0cmlidXRlIGl0IGFjdHVhbGx5IG51bGwgb3Igbm90IHRoZXJlXG4gICAgICAvLyBjYW4ndCBjaGVjayBmb3IgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzcmNFbGVtZW50OiBhbnkgPSBldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGlmIChzcmNFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RvcFJvd0NsaWNrJykgPT09IG51bGwgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdtYXQtcHNldWRvLWNoZWNrYm94Jykge1xuICAgICAgICB0aGlzLm9uUm93Q2xpY2suZW1pdCh7XG4gICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGhhbmRsZSBmb3Igc29ydCBjbGljayBldmVudCBpbiBjb2x1bW4gaGVhZGVycy5cbiAgICovXG4gIGhhbmRsZVNvcnQoY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc29ydEJ5ID09PSBjb2x1bW4pIHtcbiAgICAgIHRoaXMuX3NvcnRPcmRlciA9IHRoaXMuX3NvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nID9cbiAgICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZyA6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc29ydEJ5ID0gY29sdW1uO1xuICAgICAgdGhpcy5fc29ydE9yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICAgIH1cbiAgICB0aGlzLm9uU29ydENoYW5nZS5uZXh0KHsgbmFtZTogdGhpcy5fc29ydEJ5Lm5hbWUsIG9yZGVyOiB0aGlzLl9zb3J0T3JkZXIgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFsbCBrZXl1cCBldmVudHMgd2hlbiBmb2N1c2luZyBhIGRhdGEgdGFibGUgcm93XG4gICAqL1xuICBfcm93S2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHJvdzogYW55LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgLyoqIGlmIHVzZXIgcHJlc3NlcyBlbnRlciBvciBzcGFjZSwgdGhlIHJvdyBzaG91bGQgYmUgc2VsZWN0ZWQgKi9cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgdXAgYXJyb3csIHdlIGZvY3VzIHRoZSBwcmV2IHJvd1xuICAgICAgICAgKiB1bmxlc3MgaXRzIHRoZSBmaXJzdCByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKVtpbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuZnJvbVJvdyArIGluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgZG93biBhcnJvdywgd2UgZm9jdXMgdGhlIG5leHQgcm93XG4gICAgICAgICAqIHVubGVzcyBpdHMgdGhlIGxhc3Qgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPCAodGhpcy5fcm93cy50b0FycmF5KCkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKVtpbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuZnJvbVJvdyArIGluZGV4IDwgdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbHVtbiBpbmRleCBvZiB0aGUgZHJhZ2dlZCBjb2x1bW4gYW5kIGluaXRpYWwgY2xpZW50WCBvZiBjb2x1bW5cbiAgICovXG4gIF9oYW5kbGVTdGFydENvbHVtbkRyYWcoaW5kZXg6IG51bWJlciwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICB0aGlzLl9yZXNpemluZ0NvbHVtbiA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgbmV3IHdpZHRoIGRlcGVuZGluZyBvbiBuZXcgY2xpZW50WCBvZiBkcmFnZ2VyIGNvbHVtblxuICAgKi9cbiAgX2hhbmRsZUNvbHVtbkRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQgfCBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBjaGVjayBpZiB0aGVyZSB3YXMgYmVlbiBhIHNlcGFyYXRvciBjbGlja2VkIGZvciByZXNpemVcbiAgICBpZiAodGhpcy5fcmVzaXppbmdDb2x1bW4gIT09IHVuZGVmaW5lZCAmJiBldmVudC5jbGllbnRYID4gMCkge1xuICAgICAgbGV0IHhQb3NpdGlvbjogbnVtYmVyID0gZXZlbnQuY2xpZW50WDtcbiAgICAgIC8vIGNoZWNrcyBpZiB0aGUgc2VwYXJhdG9yIGlzIGJlaW5nIG1vdmVkIHRvIHRyeSBhbmQgcmVzaXplIHRoZSBjb2x1bW4sIGVsc2UgZG9udCBkbyBhbnl0aGluZ1xuICAgICAgaWYgKHhQb3NpdGlvbiA+IDAgJiYgdGhpcy5fY29sdW1uQ2xpZW50WCA+IDAgJiYgKHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFgpICE9PSAwKSB7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbmV3IHdpZHRoIGRlcGVuZGluZyBpZiBtYWtpbmcgdGhlIGNvbHVtbiBiaWdnZXIgb3Igc21hbGxlclxuICAgICAgICBsZXQgcHJvcG9zZWRNYW51YWxXaWR0aDogbnVtYmVyID0gdGhpcy5fd2lkdGhzW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS52YWx1ZSArICh4UG9zaXRpb24gLSB0aGlzLl9jb2x1bW5DbGllbnRYKTtcbiAgICAgICAgLy8gaWYgdGhlIHByb3Bvc2VkIG5ldyB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIHByb2plY3RlZCBtaW4gd2lkdGggb2YgdGhlIGNvbHVtbiwgdXNlIHByb2plY3RlZCBtaW4gd2lkdGhcbiAgICAgICAgaWYgKHByb3Bvc2VkTWFudWFsV2lkdGggPCB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnByb2plY3RlZFdpZHRoKSB7XG4gICAgICAgICAgcHJvcG9zZWRNYW51YWxXaWR0aCA9IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9yZXNpemluZ0NvbHVtbl0ucHJvamVjdGVkV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5zW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS53aWR0aCA9IHByb3Bvc2VkTWFudWFsV2lkdGg7XG4gICAgICAgIC8vIHVwZGF0ZSBuZXcgeCBwb3NpdGlvbiBmb3IgdGhlIHJlc2l6ZWQgY29sdW1uXG4gICAgICAgIHRoaXMuX29uQ29sdW1uUmVzaXplLm5leHQoeFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBkcmFnZ2VkIGZsYWdzXG4gICAqL1xuICBfaGFuZGxlRW5kQ29sdW1uRHJhZygpOiB2b2lkIHtcbiAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Jlc2l6aW5nQ29sdW1uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmV2ZW50IHRoZSBkZWZhdWx0IGV2ZW50c1xuICAgKi9cbiAgYmxvY2tFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TmVzdGVkVmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkgfHwgIW5hbWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIGxldCBzcGxpdE5hbWU6IHN0cmluZ1tdID0gbmFtZS5zcGxpdCgvXFwuKC4rKS8sIDIpO1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE5lc3RlZFZhbHVlKHNwbGl0TmFtZVsxXSwgdmFsdWVbc3BsaXROYW1lWzBdXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVtuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRG9lcyB0aGUgYWN0dWFsIFJvdyBTZWxlY3Rpb25cbiAgICovXG4gIHByaXZhdGUgX2RvU2VsZWN0aW9uKHJvdzogYW55LCByb3dJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IHdhc1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdyk7XG4gICAgaWYgKCF3YXNTZWxlY3RlZCkge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmNsZWFyTW9kZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICAgIHJvdyA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICB9KVswXTtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy52YWx1ZS5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTtcbiAgICB0aGlzLm9uUm93U2VsZWN0LmVtaXQoe3Jvdzogcm93LCBpbmRleDogcm93SW5kZXgsIHNlbGVjdGVkOiAhd2FzU2VsZWN0ZWR9KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHJldHVybiAhd2FzU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFsbCB0aGUgc3RhdGUgb2YgYWxsIGNoZWNrYm94ZXNcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gdHlwZW9mIHRoaXMuX2RhdGEuZmluZCgoZDogYW55KSA9PiAhdGhpcy5pc1Jvd1NlbGVjdGVkKGQpKSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5fZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSB3aWR0aHMgZm9yIGNvbHVtbnMgYW5kIGNlbGxzIGRlcGVuZGluZyBvbiBjb250ZW50XG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVXaWR0aHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbEVsZW1lbnRzICYmIHRoaXMuX2NvbEVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fd2lkdGhzID0gW107XG4gICAgICB0aGlzLl9jb2xFbGVtZW50cy5mb3JFYWNoKChjb2w6IFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZHRoKGluZGV4LCB0aGlzLl9jYWxjdWxhdGVXaWR0aCgpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkaHRzKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyBjb2x1bW5zIGFmdGVyIGNhbGN1bGF0aW9uIHRvIHNlZSBpZiB0aGV5IG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfYWRqdXN0Q29sdW1uV2lkaHRzKCk6IHZvaWQge1xuICAgIGxldCBmaXhlZFRvdGFsV2lkdGg6IG51bWJlciA9IDA7XG4gICAgLy8gZ2V0IHRoZSBudW1iZXIgb2YgdG90YWwgY29sdW1ucyB0aGF0IGhhdmUgZmxleGlibGUgd2lkdGhzIChub3QgZml4ZWQgb3IgaGlkZGVuKVxuICAgIGxldCBmbGV4aWJsZVdpZHRoczogbnVtYmVyID0gdGhpcy5fd2lkdGhzLmZpbHRlcigod2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5jb2x1bW5zW2luZGV4XS5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHdpZHRoLmxpbWl0IHx8IHdpZHRoLm1heCB8fCB3aWR0aC5taW4pIHtcbiAgICAgICAgZml4ZWRUb3RhbFdpZHRoICs9IHdpZHRoLnZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuICF3aWR0aC5saW1pdCAmJiAhd2lkdGgubWF4ICYmICF3aWR0aC5taW47XG4gICAgfSkubGVuZ3RoO1xuICAgIC8vIGNhbGN1bGF0ZSBob3cgbXVjaCBwaXhlcyBhcmUgbGVmdCB0aGF0IGNvdWxkIGJlIHNwcmVhZCBhY3Jvc3NcbiAgICAvLyB0aGUgZmxleGlibGUgY29sdW1uc1xuICAgIGxldCByZWNhbGN1bGF0ZUhvc3RXaWR0aDogbnVtYmVyID0gMDtcbiAgICBpZiAoZml4ZWRUb3RhbFdpZHRoIDwgdGhpcy5ob3N0V2lkdGgpIHtcbiAgICAgIHJlY2FsY3VsYXRlSG9zdFdpZHRoID0gdGhpcy5ob3N0V2lkdGggLSBmaXhlZFRvdGFsV2lkdGg7XG4gICAgfVxuICAgIC8vIGlmIHdlIGhhdmUgZmxleGlibGUgY29sdW1ucyBhbmQgcGl4ZWxzIHRvIHNwYXJlIG9uIHRoZW1cbiAgICAvLyB3ZSB0cnkgYW5kIHNwcmVhZCB0aGUgcGl4ZWxzIGFjcm9zcyB0aGVtXG4gICAgaWYgKGZsZXhpYmxlV2lkdGhzICYmIHJlY2FsY3VsYXRlSG9zdFdpZHRoKSB7XG4gICAgICBsZXQgbmV3VmFsdWU6IG51bWJlciA9IE1hdGguZmxvb3IocmVjYWxjdWxhdGVIb3N0V2lkdGggLyBmbGV4aWJsZVdpZHRocyk7XG4gICAgICBsZXQgYWRqdXN0ZWROdW1iZXI6IG51bWJlciA9IDA7XG4gICAgICAvLyBhZGp1c3QgdGhlIGNvbHVtbiB3aWR0aHMgd2l0aCB0aGUgc3ByZWFkIHBpeGVsc1xuICAgICAgdGhpcy5fd2lkdGhzLmZvckVhY2goKGNvbFdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5tYXggJiYgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS52YWx1ZSA+IG5ld1ZhbHVlIHx8XG4gICAgICAgICAgICB0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLm1pbiAmJiB0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLnZhbHVlIDwgbmV3VmFsdWUgfHxcbiAgICAgICAgICAgICF0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLmxpbWl0KSB7XG4gICAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkdGgoY29sV2lkdGguaW5kZXgsIG5ld1ZhbHVlKTtcbiAgICAgICAgICBhZGp1c3RlZE51bWJlcisrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBzdGlsbCBjb2x1bW5zIHRoYXQgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWQsIHdlIHN0YXJ0IG92ZXJcbiAgICAgIGxldCBuZXdGbGV4aWJsZVdpZHRoczogbnVtYmVyID0gdGhpcy5fd2lkdGhzLmZpbHRlcigod2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoKSA9PiB7XG4gICAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heDtcbiAgICAgIH0pLmxlbmd0aDtcbiAgICAgIGlmIChuZXdGbGV4aWJsZVdpZHRocyAhPT0gYWRqdXN0ZWROdW1iZXIgJiYgbmV3RmxleGlibGVXaWR0aHMgIT09IGZsZXhpYmxlV2lkdGhzKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGEgc2luZ2xlIGNvbHVtbiB0byBzZWUgaWYgaXQgY2FuIGJlIHJlY2FsY3VsYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpZHRoc1tpbmRleF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBsaW1pdDogZmFsc2UsXG4gICAgICBtaW46IGZhbHNlLFxuICAgICAgbWF4OiBmYWxzZSxcbiAgICB9O1xuICAgIC8vIGZsYWcgdG8gc2VlIGlmIHdlIG5lZWQgdG8gc2tpcCB0aGUgbWluIHdpZHRoIHByb2plY3Rpb25cbiAgICAvLyBkZXBlbmRpbmcgaWYgYSB3aWR0aCBvciBtaW4gd2lkdGggaGFzIGJlZW4gcHJvdmlkZWRcbiAgICBsZXQgc2tpcE1pbldpZHRoUHJvamVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmNvbHVtbnNbaW5kZXhdKSB7XG4gICAgICAvLyBpZiB0aGUgcHJvdmlkZWQgd2lkdGggaGFzIG1pbi9tYXgsIHRoZW4gd2UgY2hlY2sgdG8gc2VlIGlmIHdlIG5lZWQgdG8gc2V0IGl0XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCB3aWR0aE9wdHM6IElUZERhdGFUYWJsZUNvbHVtbldpZHRoID0gPElUZERhdGFUYWJsZUNvbHVtbldpZHRoPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBjb25maWd1cmVkIG1pbiwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgc2tpcE1pbldpZHRoUHJvamVjdGlvbiA9ICh3aWR0aE9wdHMgJiYgISF3aWR0aE9wdHMubWluKTtcbiAgICAgICAgaWYgKHdpZHRoT3B0cyAmJiB3aWR0aE9wdHMubWluID49IHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gd2lkdGhPcHRzLm1pbjtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1pbiA9IHRydWU7XG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbW9yZSB0aGFuIHRoZSBjb25maWd1cmVkIG1heCwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1heCA8PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5tYXg7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5tYXggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAvLyBpZiBpdCBoYXMgYSBmaXhlZCB3aWR0aCwgdGhlbiB3ZSBqdXN0IHNldCBpdFxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IDxudW1iZXI+dGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aDtcbiAgICAgICAgc2tpcE1pbldpZHRoUHJvamVjdGlvbiA9IHRoaXMuX3dpZHRoc1tpbmRleF0ubGltaXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB0aGVyZSB3YXNuJ3QgYW55IHdpZHRoIG9yIG1pbiB3aWR0aCBwcm92aWRlZCwgd2Ugc2V0IGEgbWluIHRvIHdoYXQgdGhlIGNvbHVtbiB3aWR0aCBtaW4gc2hvdWxkIGJlXG4gICAgaWYgKCFza2lwTWluV2lkdGhQcm9qZWN0aW9uICYmXG4gICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPCB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbaW5kZXhdLnByb2plY3RlZFdpZHRoKSB7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW2luZGV4XS5wcm9qZWN0ZWRXaWR0aDtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubWluID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubGltaXQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJpYyBtZXRob2QgdG8gY2FsY3VsYXRlIGNvbHVtbiB3aWR0aFxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlV2lkdGgoKTogbnVtYmVyIHtcbiAgICBsZXQgcmVuZGVyZWRDb2x1bW5zOiBJVGREYXRhVGFibGVDb2x1bW5bXSA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbDogSVRkRGF0YVRhYmxlQ29sdW1uKSA9PiAhY29sLmhpZGRlbik7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5ob3N0V2lkdGggLyByZW5kZXJlZENvbHVtbnMubGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2FsY3VsYXRlIHRoZSByb3dzIHRvIGJlIHJlbmRlcmVkIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlVmlydHVhbFJvd3MoKTogdm9pZCB7XG4gICAgbGV0IHNjcm9sbGVkUm93czogbnVtYmVyID0gMDtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuICAgICAgbGV0IHJvd0hlaWdodFN1bTogbnVtYmVyID0gMDtcbiAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgcm93cyB0byBzZWUgaWYgd2UgaGF2ZSB0aGVpciBoZWlnaHQgY2FjaGVkXG4gICAgICAvLyBhbmQgc3VtIHRoZW0gYWxsIHRvIGNhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKGQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgcm93cyBhdCBmaXJzdCBhbmQgYXNzdW1lIGFsbFxuICAgICAgICAvLyByb3dzIGFyZSB0aGUgc2FtZSBoZWlnaHQgYXMgdGhlIGZpcnN0IG9uZVxuICAgICAgICBpZiAoIXRoaXMuX3Jvd0hlaWdodENhY2hlW2ldKSB7XG4gICAgICAgICAgdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaV0gPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVswXSB8fCBURF9WSVJUVUFMX0RFRkFVTFRfUk9XX0hFSUdIVDtcbiAgICAgICAgfVxuICAgICAgICByb3dIZWlnaHRTdW0gKz0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaV07XG4gICAgICAgIC8vIGNoZWNrIGhvdyBtYW55IHJvd3MgaGF2ZSBiZWVuIHNjcm9sbGVkXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCAtIHJvd0hlaWdodFN1bSA+IDApIHtcbiAgICAgICAgICBzY3JvbGxlZFJvd3MrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IHJvd0hlaWdodFN1bTtcbiAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCByb3cgdG8gYmUgcmVuZGVyZWQgdGFraW5nIGludG8gYWNjb3VudCB0aGUgcm93IG9mZnNldFxuICAgICAgbGV0IGZyb21Sb3c6IG51bWJlciA9IHNjcm9sbGVkUm93cyAtIFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IGZyb21Sb3cgPiAwID8gZnJvbVJvdyA6IDA7XG5cbiAgICAgIGxldCBob3N0SGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9ob3N0SGVpZ2h0O1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgLy8gY2FsY3VsYXRlIGhvdyBtYW55IHJvd3MgY2FuIGZpdCBpbiB0aGUgdmlld3BvcnRcbiAgICAgIHdoaWxlIChob3N0SGVpZ2h0ID4gMCkge1xuICAgICAgICBob3N0SGVpZ2h0IC09IHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICAgIC8vIHNldCB0aGUgbGFzdCByb3cgdG8gYmUgcmVuZGVyZWQgdGFraW5nIGludG8gYWNjb3VudCB0aGUgcm93IG9mZnNldFxuICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSAoaW5kZXggLSAxKSArIChURF9WSVJUVUFMX09GRlNFVCAqIDIpO1xuICAgICAgbGV0IHRvUm93OiBudW1iZXIgPSByYW5nZSArIHRoaXMuZnJvbVJvdztcbiAgICAgIC8vIGlmIGxhc3Qgcm93IGlzIGdyZWF0ZXIgdGhhbiB0aGUgdG90YWwgbGVuZ3RoLCB0aGVuIHdlIHVzZSB0aGUgdG90YWwgbGVuZ3RoXG4gICAgICBpZiAoaXNGaW5pdGUodG9Sb3cpICYmIHRvUm93ID4gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdG9Sb3cgPSB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHRvUm93KSkge1xuICAgICAgICB0b1JvdyA9IFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgfVxuICAgICAgdGhpcy5fdG9Sb3cgPSB0b1JvdztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IDA7XG4gICAgICB0aGlzLl90b1JvdyA9IDA7XG4gICAgfVxuXG4gICAgbGV0IG9mZnNldDogbnVtYmVyID0gMDtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIHByb3BlciBvZmZzZXQgZGVwZW5kaW5nIG9uIGhvdyBtYW55IHJvd3MgaGF2ZSBiZWVuIHNjcm9sbGVkXG4gICAgaWYgKHNjcm9sbGVkUm93cyA+IFREX1ZJUlRVQUxfT0ZGU0VUKSB7XG4gICAgICBmb3IgKGxldCBpbmRleDogbnVtYmVyID0gMDsgaW5kZXggPCB0aGlzLmZyb21Sb3c7IGluZGV4KyspIHtcbiAgICAgICAgb2Zmc2V0ICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9vZmZzZXRUcmFuc2Zvcm0gPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd0cmFuc2xhdGVZKCcgKyAob2Zmc2V0IC0gdGhpcy50b3RhbEhlaWdodCkgKyAncHgpJyk7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3ZpcnR1YWxEYXRhID0gdGhpcy5kYXRhLnNsaWNlKHRoaXMuZnJvbVJvdywgdGhpcy50b1Jvdyk7XG4gICAgfVxuICAgIC8vIG1hcmsgZm9yIGNoZWNrIGF0IHRoZSBlbmQgb2YgdGhlIHF1ZXVlIHNvIHdlIGFyZSBzdXJlXG4gICAgLy8gdGhhdCB0aGUgY2hhbmdlcyB3aWxsIGJlIG1hcmtlZFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQge1xuICBvcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ3RoW3RkLWRhdGEtdGFibGUtY29sdW1uXScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB7XG5cbiAgcHJpdmF0ZSBfc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcblxuICBAVmlld0NoaWxkKCdjb2x1bW5Db250ZW50Jywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBfY29sdW1uQ29udGVudDogRWxlbWVudFJlZjtcblxuICBnZXQgcHJvamVjdGVkV2lkdGgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fY29sdW1uQ29udGVudCAmJiB0aGlzLl9jb2x1bW5Db250ZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2NvbHVtbkNvbnRlbnQubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiAxMDA7XG4gIH1cblxuICAvKipcbiAgICogbmFtZT86IHN0cmluZ1xuICAgKiBTZXRzIHVuaXF1ZSBjb2x1bW4gW25hbWVdIGZvciBbc29ydGFibGVdIGV2ZW50cy5cbiAgICovXG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBzb3J0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBzb3J0aW5nIGV2ZW50cywgc29ydCBpY29ucyBhbmQgYWN0aXZlIGNvbHVtbiBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc29ydGFibGUnKSBzb3J0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBhY3RpdmU/OiBib29sZWFuXG4gICAqIFNldHMgY29sdW1uIHRvIGFjdGl2ZSBzdGF0ZSB3aGVuICd0cnVlJy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdhY3RpdmUnKSBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogbnVtZXJpYz86IGJvb2xlYW5cbiAgICogTWFrZXMgY29sdW1uIGZvbGxvdyB0aGUgbnVtZXJpYyBkYXRhLXRhYmxlIHNwZWNzIGFuZCBzb3J0IGljb24uXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnbnVtZXJpYycpIG51bWVyaWM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogc29ydE9yZGVyPzogWydBU0MnIHwgJ0RFU0MnXSBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlclxuICAgKiBTZXRzIHRoZSBzb3J0IG9yZGVyIG9mIGNvbHVtbi5cbiAgICogRGVmYXVsdHMgdG8gJ0FTQycgb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nXG4gICAqL1xuICBASW5wdXQoJ3NvcnRPcmRlcicpXG4gIHNldCBzb3J0T3JkZXIob3JkZXI6ICdBU0MnIHwgJ0RFU0MnKSB7XG4gICAgbGV0IHNvcnRPcmRlcjogc3RyaW5nID0gb3JkZXIgPyBvcmRlci50b1VwcGVyQ2FzZSgpIDogJ0FTQyc7XG4gICAgaWYgKHNvcnRPcmRlciAhPT0gJ0RFU0MnICYmIHNvcnRPcmRlciAhPT0gJ0FTQycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW3NvcnRPcmRlcl0gbXVzdCBiZSBlbXB0eSwgQVNDIG9yIERFU0MnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0T3JkZXIgPSBzb3J0T3JkZXIgPT09ICdBU0MnID9cbiAgICAgIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyA6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmc7XG4gIH1cblxuICAvKipcbiAgICogc29ydENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY29sdW1uIGhlYWRlcnMgYXJlIGNsaWNrZWQuIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc29ydENoYW5nZScpIG9uU29ydENoYW5nZTogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudD4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtY2xpY2thYmxlJylcbiAgZ2V0IGJpbmRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1zb3J0YWJsZScpXG4gIGdldCBiaW5nU29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1hY3RpdmUnKVxuICBnZXQgYmluZEFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1udW1lcmljJylcbiAgZ2V0IGJpbmROdW1lcmljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm51bWVyaWM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1jb2x1bW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5pbmcgdG8gY2xpY2sgZXZlbnQgb24gaG9zdCB0byB0aHJvdyBhIHNvcnQgZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgaGFuZGxlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc29ydGFibGUpIHtcbiAgICAgIHRoaXMub25Tb3J0Q2hhbmdlLmVtaXQoe25hbWU6IHRoaXMubmFtZSwgb3JkZXI6IHRoaXMuX3NvcnRPcmRlcn0pO1xuICAgIH1cbiAgfVxuXG4gIGlzQXNjZW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcbiAgfVxuXG4gIGlzRGVzY2VuZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ3RkW3RkLWRhdGEtdGFibGUtY2VsbF0nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBudW1lcmljPzogYm9vbGVhblxuICAgKiBNYWtlcyBjZWxsIGZvbGxvdyB0aGUgbnVtZXJpYyBkYXRhLXRhYmxlIHNwZWNzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ251bWVyaWMnKSBudW1lcmljOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtbnVtZXJpYycpXG4gIGdldCBiaW5kTnVtZXJpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5udW1lcmljO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtY2VsbCcpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0YWJsZVt0ZC1kYXRhLXRhYmxlXScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtdGFibGUuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVUYWJsZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLCBJVGREYXRhVGFibGVDb2x1bW4gfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBzZWFyY2hUZXJtOiBzdHJpbmdcbiAgICogLSBpZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2VcbiAgICogLSBleGNsdWRlZENvbHVtbnM6IHN0cmluZ1tdID0gW11cbiAgICpcbiAgICogU2VhcmNoZXMgW2RhdGFdIHBhcmFtZXRlciBmb3IgW3NlYXJjaFRlcm1dIG1hdGNoZXMgYW5kIHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGVtLlxuICAgKi9cbiAgZmlsdGVyRGF0YShkYXRhOiBhbnlbXSwgc2VhcmNoVGVybTogc3RyaW5nLCBpZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UsIGV4Y2x1ZGVkQ29sdW1ucz86IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGxldCBmaWx0ZXI6IHN0cmluZyA9IHNlYXJjaFRlcm0gPyAoaWdub3JlQ2FzZSA/IHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSA6IHNlYXJjaFRlcm0pIDogJyc7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVzOiBhbnkgPSBPYmplY3Qua2V5cyhpdGVtKS5maW5kKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICghZXhjbHVkZWRDb2x1bW5zIHx8IGV4Y2x1ZGVkQ29sdW1ucy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVJdGVtVmFsdWU6IHN0cmluZyA9ICgnJyArIGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICBjb25zdCBpdGVtVmFsdWU6IHN0cmluZyA9IGlnbm9yZUNhc2UgPyBwcmVJdGVtVmFsdWUudG9Mb3dlckNhc2UoKSA6IHByZUl0ZW1WYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtVmFsdWUuaW5kZXhPZihmaWx0ZXIpID4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEodHlwZW9mIHJlcyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNvcnRCeTogc3RyaW5nXG4gICAqIC0gc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKlxuICAgKiBTb3J0cyBbZGF0YV0gcGFyYW1ldGVyIGJ5IFtzb3J0QnldIGFuZCBbc29ydE9yZGVyXSBhbmQgcmV0dXJucyB0aGUgc29ydGVkIGRhdGEuXG4gICAqL1xuICBzb3J0RGF0YShkYXRhOiBhbnlbXSwgc29ydEJ5OiBzdHJpbmcsIHNvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcpOiBhbnlbXSB7XG4gICAgaWYgKHNvcnRCeSkge1xuICAgICAgZGF0YSA9IEFycmF5LmZyb20oZGF0YSk7IC8vIENoYW5nZSB0aGUgYXJyYXkgcmVmZXJlbmNlIHRvIHRyaWdnZXIgT25QdXNoIGFuZCBub3QgbXV0YXRlIG9yaWdpbmFsIGFycmF5XG4gICAgICBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGxldCBjb21wQTogYW55ID0gYVtzb3J0QnldO1xuICAgICAgICBsZXQgY29tcEI6IGFueSA9IGJbc29ydEJ5XTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpKSAmJiAhTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKSkpIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSBOdW1iZXIucGFyc2VGbG9hdChjb21wQSkgLSBOdW1iZXIucGFyc2VGbG9hdChjb21wQik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbXBBIDwgY29tcEIpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29tcEEgPiBjb21wQikge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiAqIChzb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgPyAtMSA6IDEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIGZyb21Sb3c6IG51bWJlclxuICAgKiAtIHRvUm93OiA6IG51bWJlclxuICAgKlxuICAgKiBSZXR1cm5zIGEgc2VjdGlvbiBvZiB0aGUgW2RhdGFdIHBhcmFtZXRlciBzdGFydGluZyBmcm9tIFtmcm9tUm93XSBhbmQgZW5kaW5nIGluIFt0b1Jvd10uXG4gICAqL1xuICBwYWdlRGF0YShkYXRhOiBhbnlbXSwgZnJvbVJvdzogbnVtYmVyLCB0b1JvdzogbnVtYmVyKTogYW55W10ge1xuICAgIGlmIChmcm9tUm93ID49IDEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKGZyb21Sb3cgLSAxLCB0b1Jvdyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEQVRBX1RBQkxFX1BST1ZJREVSX0ZBQ1RPUlkoXG4gICAgcGFyZW50OiBUZERhdGFUYWJsZVNlcnZpY2UpOiBUZERhdGFUYWJsZVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZERhdGFUYWJsZVNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IERBVEFfVEFCTEVfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZERhdGFUYWJsZVNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZERhdGFUYWJsZVNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogREFUQV9UQUJMRV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtY2VsbC9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlUm93Q29tcG9uZW50LCBUZERhdGFUYWJsZUNvbHVtblJvd0NvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1yb3cvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtdGFibGUvZGF0YS10YWJsZS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLXRhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IERBVEFfVEFCTEVfUFJPVklERVIgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtdGFibGUuc2VydmljZSc7XG5cbmNvbnN0IFREX0RBVEFfVEFCTEU6IFR5cGU8YW55PltdID0gW1xuICBUZERhdGFUYWJsZUNvbXBvbmVudCxcbiAgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSxcblxuICBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCxcbiAgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50LFxuICBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCxcbiAgVGREYXRhVGFibGVDb2x1bW5Sb3dDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlVGFibGVDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfREFUQV9UQUJMRSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFREX0RBVEFfVEFCTEUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIERBVEFfVEFCTEVfUFJPVklERVIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50RGF0YVRhYmxlTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQVdhLDZCQUE2Qjs7Ozs7SUFFeEMsWUFBc0IsV0FBdUIsRUFBWSxTQUFvQjtRQUF2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFZLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztLQUNyRjs7O1lBVkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsOEJBQThCO2dCQUV4QyxxQ0FBOEM7O2FBQy9DOzs7O1lBVjZDLFVBQVU7WUFBckIsU0FBUzs7TUF5Qi9CLHVCQUF1Qjs7Ozs7SUF5QmxDLFlBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBdkJqRSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBd0JqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0tBQzlFOzs7OztJQXZCRCxJQUNJLFFBQVEsQ0FBQyxRQUFpQjtRQUM1QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQzNCOzs7O0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7O0lBRUQsSUFBSSxNQUFNOztZQUNKLE1BQU0sR0FBVyxFQUFFO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDbEMsTUFBTSxHQUFHLG9CQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFFLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ3ZGO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDZjs7Ozs7SUFVRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2Q7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEM7OztZQTdDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx1QkFBdUI7Z0JBRWpDLHFDQUE4Qzs7YUFDL0M7Ozs7WUF4QjZDLFVBQVU7WUFBckIsU0FBUzs7O3VCQTZCekMsS0FBSyxTQUFDLFVBQVU7NEJBNEJoQixZQUFZLFNBQUMsT0FBTzs7Ozs7OztBQ3pEdkIsTUFJYSw0QkFBNkIsU0FBUSx1QkFBdUI7Ozs7O0lBR3ZFLFlBQVksV0FBNkIsRUFBRSxnQkFBa0M7UUFDM0UsS0FBSyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3RDOzs7WUFORixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsa0NBQWtDLEVBQUM7Ozs7WUFIOUIsV0FBVztZQUFFLGdCQUFnQjs7O2tDQU1yRCxLQUFLOzs7Ozs7O0FDTlI7O0lBb0JFLFdBQVksS0FBSztJQUNqQixZQUFhLE1BQU07Ozs7OztNQWdEZixpQkFBaUIsR0FBVyxDQUFDOzs7OztNQUs3Qiw2QkFBNkIsR0FBVyxFQUFFO0FBRWhELE1BQWEsZUFBZTs7OztJQUMxQixZQUFtQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtLQUFJO0NBQzdEOzs7QUFHRCxNQUFhLHFCQUFxQixHQUFHLHlCQUF5QixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7QUFjbkYsTUFBYSxvQkFBcUIsU0FBUSxxQkFBcUI7Ozs7Ozs7SUF1VTdELFlBQWtELFNBQWMsRUFDNUMsV0FBdUIsRUFDdkIsYUFBMkIsRUFDbkMsa0JBQXFDO1FBQy9DLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBSnNCLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFuVXZDLGVBQVUsR0FBVyxDQUFDLENBQUM7Ozs7UUFHdkIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRzNCLG9CQUFlLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFlekQsWUFBTyxHQUEyQixFQUFFLENBQUM7UUFDckMsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBSy9DLDRCQUF1QixHQUFXLENBQUMsQ0FBQztRQUVwQyx3QkFBbUIsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUM3RCxzQkFBaUIsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQzs7UUFHM0Qsb0JBQWUsR0FBYSxFQUFFLENBQUM7O1FBRS9CLGlCQUFZLEdBQVcsQ0FBQyxDQUFDOztRQUV6QixnQkFBVyxHQUFXLENBQUMsQ0FBQzs7UUFFeEIsMEJBQXFCLEdBQVcsQ0FBQyxDQUFDOztRQUtsQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFxQ25CLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixtQkFBYyxHQUFZLEtBQUssQ0FBQzs7OztRQUdoQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGVBQVUsR0FBNEIsdUJBQXVCLENBQUMsU0FBUyxDQUFDOzs7O1FBR3hFLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6Qyx1QkFBa0IsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoQyx3QkFBbUIsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqQyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7Ozs7UUFHckMsaUJBQVksR0FBa0MsSUFBSSxHQUFHLEVBQTRCLENBQUM7Ozs7OztRQW1NcEUsaUJBQVksR0FDRSxJQUFJLFlBQVksRUFBK0IsQ0FBQzs7Ozs7O1FBTy9ELGdCQUFXLEdBQTBDLElBQUksWUFBWSxFQUEyQixDQUFDOzs7Ozs7UUFPbEcsZUFBVSxHQUE0QyxJQUFJLFlBQVksRUFBNkIsQ0FBQzs7Ozs7O1FBT25HLGdCQUFXLEdBQ0UsSUFBSSxZQUFZLEVBQThCLENBQUM7Ozs7OztRQWMzRCxnQkFBVyxHQUFzQyxDQUFDLEdBQVEsRUFBRSxLQUFVO1lBQzFGLE9BQU8sR0FBRyxLQUFLLEtBQUssQ0FBQztTQUN0QixDQUFBO0tBVEE7Ozs7SUE3VEQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztLQUM3Qjs7OztJQUVELElBQUksU0FBUzs7O1FBR1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDN0I7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7OztJQWdDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDOUI7Ozs7O0lBS0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7OztJQUtELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFLRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBc0NELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzFDOzs7OztJQUtELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7Ozs7O0lBTUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVCOzs7Ozs7O0lBTUQsSUFDSSxJQUFJLENBQUMsSUFBVztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7WUFFZixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ2pELENBQUMsQ0FBQztLQUNKOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7Ozs7OztJQU9ELElBQ0ksT0FBTyxDQUFDLElBQTBCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ3RCOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7O2dCQUVmLEdBQUcsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzNDO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7Ozs7Ozs7O0lBT0QsSUFDSSxnQkFBZ0IsQ0FBQyxnQkFBeUI7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDbEU7Ozs7SUFDRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMvQjs7Ozs7Ozs7SUFPRCxJQUNJLFVBQVUsQ0FBQyxVQUFtQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3REOzs7O0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7Ozs7OztJQU9ELElBQ0ksU0FBUyxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEQ7Ozs7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7Ozs7O0lBT0QsSUFDSSxRQUFRLENBQUMsUUFBaUI7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNsRDs7OztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7Ozs7SUFPRCxJQUNJLFFBQVEsQ0FBQyxRQUFpQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7Ozs7O0lBTUQsSUFDSSxNQUFNLENBQUMsVUFBa0I7UUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU87U0FDUjs7Y0FDSyxNQUFNLEdBQXVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDekQ7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUN2Qjs7OztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7Ozs7SUFPRCxJQUNJLFNBQVMsQ0FBQyxLQUFxQjs7WUFDN0IsU0FBUyxHQUFXLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSztRQUMzRCxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtZQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsS0FBSyxLQUFLO1lBQ25DLHVCQUF1QixDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxVQUFVLENBQUM7S0FDMUU7Ozs7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQzVDOzs7OztJQW1ERCxRQUFROztRQUVOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBNEIsRUFBRSxLQUFhO29CQUN2RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQzdELENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUIsQ0FBQyxDQUFDOztRQUdILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDL0QsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNoQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQWU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hDLENBQUMsQ0FBQzs7UUFFSCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRTthQUNqRSxTQUFTLENBQUMsQ0FBQyxnQkFBd0I7WUFDcEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLGdCQUFnQixDQUFDO1lBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QyxDQUFDLENBQUM7O1FBRUgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7YUFDN0QsU0FBUyxDQUFDLENBQUMsY0FBc0I7WUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGNBQWMsQ0FBQztZQUM1QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVTtZQUM5RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQ3pDLENBQUM7U0FDSDtLQUNGOzs7OztJQUtELHFCQUFxQjs7UUFFbkIsSUFBSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTs7WUFFaEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7O2dCQUM5QixZQUFZLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLOztZQUV2RixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssWUFBWSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRTs7Z0JBQ2pDLGFBQWEsR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU07O1lBRTVGLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxhQUFhLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO2dCQUNqQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hDO1NBQ0Y7S0FDRjs7Ozs7O0lBTUQsZUFBZTtRQUNiLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzdDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDaEIsQ0FBQyxTQUFTLENBQUM7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQzlCOzs7OztJQUtELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyQztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7Ozs7O0lBTUQsWUFBWSxDQUFDLEtBQVk7O1lBQ25CLE9BQU8sdUJBQThCLEtBQUssQ0FBQyxNQUFNLEdBQUM7UUFDdEQsSUFBSSxPQUFPLEVBQUU7O2dCQUNQLGdCQUFnQixHQUFXLE9BQU8sQ0FBQyxVQUFVO1lBQ2pELElBQUksSUFBSSxDQUFDLHVCQUF1QixLQUFLLGdCQUFnQixFQUFFO2dCQUNyRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDakQ7O2dCQUNHLGNBQWMsR0FBVyxPQUFPLENBQUMsU0FBUztZQUM5QyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxjQUFjLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDN0M7U0FDRjtLQUNGOzs7Ozs7SUFLRCxjQUFjLENBQUMsS0FBYTtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNsQztRQUNELE9BQU8sU0FBUyxDQUFDO0tBQ2xCOzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBMEIsRUFBRSxLQUFVO1FBQ2pELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjs7Ozs7O0lBS0EsY0FBYyxDQUFDLElBQVk7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQzs7Ozs7SUFLRixVQUFVO1FBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekM7Ozs7O0lBS0QsT0FBTztRQUNMLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qzs7Ozs7O0lBS0QsU0FBUyxDQUFDLE9BQWdCOztZQUNwQixXQUFXLEdBQVUsRUFBRTtRQUMzQixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBUTs7Z0JBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7b0JBRXJCLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBUTs7Z0JBRTFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7d0JBQ2xCLFFBQVEsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVE7d0JBQzdDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUM7O3dCQUNELEtBQUssR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQ2hELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0Y7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjs7Ozs7O0lBS0QsYUFBYSxDQUFDLEdBQVE7O1FBRXBCLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVE7WUFDN0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDdkI7Ozs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxHQUFRLEVBQUUsS0FBWSxFQUFFLGVBQXVCO1FBQ3BELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Z0JBRW5CLFVBQVUsc0JBQWUsS0FBSyxFQUFjO1lBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O29CQUNsRixVQUFVLEdBQVcsZUFBZTs7b0JBQ3BDLFNBQVMsR0FBVyxJQUFJLENBQUMsa0JBQWtCO2dCQUMvQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQzdDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7b0JBQ3JDLFNBQVMsR0FBRyxlQUFlLENBQUM7aUJBQzdCOzs7Z0JBR0QsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUI7cUJBQ2xHLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO29CQUN0RyxLQUFLLElBQUksQ0FBQyxHQUFXLFVBQVUsRUFBRSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNwRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxDQUFDLEVBQUU7NEJBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDckM7cUJBQ0Y7aUJBQ0Y7cUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxlQUFlLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxFQUFFOztvQkFFdkcsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxFQUFFO3dCQUM5QyxTQUFTLEVBQUUsQ0FBQztxQkFDYjt5QkFBTSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxlQUFlLEVBQUU7d0JBQ3JELFVBQVUsRUFBRSxDQUFDO3FCQUNkO29CQUNELEtBQUssSUFBSSxDQUFDLEdBQVcsVUFBVSxFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7OzRCQUNoRCxXQUFXLEdBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O3dCQUk1RCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsV0FBVzs2QkFDeEMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksV0FBVyxDQUFDLEVBQUU7NEJBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDckM7NkJBQU0sSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7Ozs0QkFHdkMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksZUFBZSxJQUFJLElBQUksQ0FBQyxrQkFBa0I7aUNBQ3pGLGVBQWUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksZUFBZSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO2dDQUMvRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NkJBQ3JDO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7OzthQUdyQztpQkFBTSxJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztnQkFDckMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQzthQUM1QztZQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLENBQUM7U0FDM0M7S0FDRjs7Ozs7O0lBTUQsb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRztnQkFDN0IsT0FBTyxLQUFLLENBQUM7YUFDZCxDQUFDO1NBQ0g7S0FDRjs7Ozs7SUFLRCxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUMxQztLQUNGOzs7Ozs7Ozs7SUFNRCxjQUFjLENBQUMsR0FBUSxFQUFFLEtBQWEsRUFBRSxLQUFZO1FBQ2xELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7OztrQkFHWixVQUFVLEdBQVEsS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsYUFBYTs7Z0JBQzNELE9BQU8sc0JBQWdCLEtBQUssQ0FBQyxNQUFNLEVBQWU7O1lBRXRELElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxxQkFBcUIsRUFBRTtnQkFDL0csSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ25CLEdBQUcsRUFBRSxHQUFHO29CQUNSLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUMsQ0FBQzthQUNKO1NBQ0Y7S0FDRjs7Ozs7O0lBS0QsVUFBVSxDQUFDLE1BQTBCO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLHVCQUF1QixDQUFDLFNBQVM7Z0JBQ3JFLHVCQUF1QixDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7U0FDMUU7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQzdFOzs7Ozs7OztJQUtELFNBQVMsQ0FBQyxLQUFvQixFQUFFLEdBQVEsRUFBRSxLQUFhO1FBQ3JELFFBQVEsS0FBSyxDQUFDLE9BQU87WUFDbkIsS0FBSyxLQUFLLENBQUM7WUFDWCxLQUFLLEtBQUs7O2dCQUVSLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztpQkFDM0U7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssUUFBUTs7Ozs7Z0JBS1gsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO29CQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUN6QztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFBRTtvQkFDbkYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztpQkFDM0U7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssVUFBVTs7Ozs7Z0JBS2IsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUN6QztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNsRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO2lCQUMzRTtnQkFDRCxNQUFNO1lBQ1IsUUFBUTs7U0FFVDtLQUNGOzs7Ozs7O0lBS0Qsc0JBQXNCLENBQUMsS0FBYSxFQUFFLEtBQWlCO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztLQUM5Qjs7Ozs7O0lBS0QsaUJBQWlCLENBQUMsS0FBNkI7O1FBRTdDLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7O2dCQUN2RCxTQUFTLEdBQVcsS0FBSyxDQUFDLE9BQU87O1lBRXJDLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxNQUFNLENBQUMsRUFBRTs7O29CQUVuRixtQkFBbUIsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7O2dCQUU5RyxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsRUFBRTtvQkFDMUYsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYyxDQUFDO2lCQUN4RjtnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7O2dCQUUvRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN0QztTQUNGO0tBQ0Y7Ozs7O0lBS0Qsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0tBQ2xDOzs7Ozs7SUFLRCxVQUFVLENBQUMsS0FBWTtRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDeEI7Ozs7OztJQUVPLGVBQWUsQ0FBQyxJQUFZLEVBQUUsS0FBVTtRQUM5QyxJQUFJLEVBQUUsS0FBSyxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O2dCQUN0QixTQUFTLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO0tBQ0Y7Ozs7Ozs7SUFLTyxZQUFZLENBQUMsR0FBUSxFQUFFLFFBQWdCOztZQUN6QyxXQUFXLEdBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7YUFBTTs7WUFFTCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFRO2dCQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ0YsS0FBSyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMzQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDRjtRQUNELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLFdBQVcsQ0FBQztLQUNyQjs7Ozs7SUFLTyx1QkFBdUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQztZQUMvRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixTQUFTO2lCQUNWO2dCQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixNQUFNO2FBQ1A7U0FDRjtLQUNGOzs7OztJQUtPLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUErQixFQUFFLEtBQWE7Z0JBQ3ZFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7YUFDeEQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hDO0tBQ0Y7Ozs7O0lBS08sbUJBQW1COztZQUNyQixlQUFlLEdBQVcsQ0FBQzs7O1lBRTNCLGNBQWMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQTJCLEVBQUUsS0FBYTtZQUMxRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUM5QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDekMsZUFBZSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDaEM7WUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ2pELENBQUMsQ0FBQyxNQUFNOzs7O1lBR0wsb0JBQW9CLEdBQVcsQ0FBQztRQUNwQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3BDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1NBQ3pEOzs7UUFHRCxJQUFJLGNBQWMsSUFBSSxvQkFBb0IsRUFBRTs7Z0JBQ3RDLFFBQVEsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLGNBQWMsQ0FBQzs7Z0JBQ3BFLGNBQWMsR0FBVyxDQUFDOztZQUU5QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQThCO2dCQUNsRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUTtvQkFDakYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRO29CQUNqRixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ2xELGNBQWMsRUFBRSxDQUFDO2lCQUNsQjthQUNGLENBQUMsQ0FBQzs7O2dCQUVDLGlCQUFpQixHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBMkI7Z0JBQzlFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNuQyxDQUFDLENBQUMsTUFBTTtZQUNULElBQUksaUJBQWlCLEtBQUssY0FBYyxJQUFJLGlCQUFpQixLQUFLLGNBQWMsRUFBRTtnQkFDaEYsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDNUI7U0FDRjtLQUNGOzs7Ozs7O0lBS08sa0JBQWtCLENBQUMsS0FBYSxFQUFFLEtBQWE7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRztZQUNwQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQzs7OztZQUdFLHNCQUFzQixHQUFZLEtBQUs7UUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztZQUV2QixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFOztvQkFDN0MsU0FBUyxzQkFBcUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUE7O2dCQUUzRixzQkFBc0IsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDOztpQkFFaEM7cUJBQU0sSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2lCQUNoQzs7YUFFRjtpQkFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssc0JBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUEsQ0FBQztnQkFDOUQsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQzNEO1NBQ0Y7O1FBRUQsSUFBSSxDQUFDLHNCQUFzQjtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25DO0tBQ0Y7Ozs7O0lBS08sZUFBZTs7WUFDakIsZUFBZSxHQUF5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQXVCLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3pHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1RDs7Ozs7SUFLTyxxQkFBcUI7O1lBQ3ZCLFlBQVksR0FBVyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDOztnQkFDbEIsWUFBWSxHQUFXLENBQUM7OztZQUc1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFTOzs7Z0JBR25DLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksNkJBQTZCLENBQUM7aUJBQ3BGO2dCQUNELFlBQVksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFFeEMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxHQUFHLENBQUMsRUFBRTtvQkFDakQsWUFBWSxFQUFFLENBQUM7aUJBQ2hCO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7OztnQkFFN0IsT0FBTyxHQUFXLFlBQVksR0FBRyxpQkFBaUI7WUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7O2dCQUV0QyxVQUFVLEdBQVcsSUFBSSxDQUFDLFdBQVc7O2dCQUNyQyxLQUFLLEdBQVcsQ0FBQzs7WUFFckIsT0FBTyxVQUFVLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUN6RCxLQUFLLEVBQUUsQ0FBQzthQUNUOzs7Z0JBRUcsS0FBSyxHQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7O2dCQUNyRCxLQUFLLEdBQVcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPOztZQUV4QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUMzQjtpQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixLQUFLLEdBQUcsaUJBQWlCLENBQUM7YUFDM0I7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakI7O1lBRUcsTUFBTSxHQUFXLENBQUM7O1FBRXRCLElBQUksWUFBWSxHQUFHLGlCQUFpQixFQUFFO1lBQ3BDLEtBQUssSUFBSSxLQUFLLEdBQVcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN6RCxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsYUFBYSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekgsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRDs7O1FBR0QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0tBQ0o7OztZQXgvQkYsU0FBUyxTQUFDO2dCQUNULFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSxvQkFBb0IsQ0FBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQztnQkFDRixRQUFRLEVBQUUsZUFBZTtnQkFFekIsNHhJQUEwQztnQkFDMUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNqQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7NENBd1VjLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtZQW5hVCxVQUFVO1lBQ3hCLFlBQVk7WUFIdEIsaUJBQWlCOzs7eUJBME12QixlQUFlLFNBQUMsNEJBQTRCOzZCQUU1QyxTQUFTLFNBQUMsZUFBZTsyQkFFekIsWUFBWSxTQUFDLGVBQWU7b0JBRTVCLFlBQVksU0FBQyx1QkFBdUI7bUJBNEJwQyxLQUFLLFNBQUMsTUFBTTtzQkF1QlosS0FBSyxTQUFDLFNBQVM7K0JBNkJmLEtBQUssU0FBQyxrQkFBa0I7eUJBYXhCLEtBQUssU0FBQyxZQUFZO3dCQWFsQixLQUFLLFNBQUMsV0FBVzt1QkFhakIsS0FBSyxTQUFDLFVBQVU7dUJBYWhCLEtBQUssU0FBQyxVQUFVO3FCQVloQixLQUFLLFNBQUMsUUFBUTt3QkFxQmQsS0FBSyxTQUFDLFdBQVc7MkJBdUJqQixNQUFNLFNBQUMsWUFBWTswQkFRbkIsTUFBTSxTQUFDLFdBQVc7eUJBT2xCLE1BQU0sU0FBQyxVQUFVOzBCQU9qQixNQUFNLFNBQUMsV0FBVzswQkFlbEIsS0FBSyxTQUFDLGFBQWE7Ozs7Ozs7QUNsYnRCLE1BZWEsMEJBQTBCOzs7OztJQW9GckMsWUFBb0IsV0FBdUIsRUFBVSxTQUFvQjtRQUFyRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFsRmpFLGVBQVUsR0FBNEIsdUJBQXVCLENBQUMsU0FBUyxDQUFDOzs7OztRQWVqRSxTQUFJLEdBQVcsRUFBRSxDQUFDOzs7Ozs7UUFPZCxhQUFRLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPNUIsV0FBTSxHQUFZLEtBQUssQ0FBQzs7Ozs7O1FBT3ZCLFlBQU8sR0FBWSxLQUFLLENBQUM7Ozs7OztRQXVCckIsaUJBQVksR0FDWixJQUFJLFlBQVksRUFBK0IsQ0FBQztRQXVCcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztLQUNqRjs7OztJQWhGRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFO1lBQzVELE9BQU8sb0JBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLElBQUUscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDdkY7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7Ozs7OztJQWtDRCxJQUNJLFNBQVMsQ0FBQyxLQUFxQjs7WUFDN0IsU0FBUyxHQUFXLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSztRQUMzRCxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtZQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsS0FBSyxLQUFLO1lBQ25DLHVCQUF1QixDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxVQUFVLENBQUM7S0FDMUU7Ozs7SUFVRCxJQUNJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBVUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztTQUNuRTtLQUNGOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7S0FDOUQ7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLHVCQUF1QixDQUFDLFVBQVUsQ0FBQztLQUMvRDs7O1lBOUdGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLDBCQUEwQjtnQkFFcEMsdW9CQUFpRDs7YUFDbEQ7Ozs7WUFkMkQsVUFBVTtZQUFyQixTQUFTOzs7NkJBbUJ2RCxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzttQkFhN0MsS0FBSyxTQUFDLE1BQU07dUJBT1osS0FBSyxTQUFDLFVBQVU7cUJBT2hCLEtBQUssU0FBQyxRQUFRO3NCQU9kLEtBQUssU0FBQyxTQUFTO3dCQU9mLEtBQUssU0FBQyxXQUFXOzJCQWdCakIsTUFBTSxTQUFDLFlBQVk7NEJBR25CLFdBQVcsU0FBQyxxQkFBcUI7MkJBS2pDLFdBQVcsU0FBQyxvQkFBb0I7eUJBS2hDLFdBQVcsU0FBQyxrQkFBa0I7MEJBSzlCLFdBQVcsU0FBQyxtQkFBbUI7MEJBWS9CLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0FDMUd2QixNQVFhLHdCQUF3Qjs7Ozs7SUFjbkMsWUFBb0IsV0FBdUIsRUFBVSxTQUFvQjtRQUFyRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7OztRQVB2RCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBUXpDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7S0FDL0U7Ozs7SUFQRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7OztZQWxCRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx3QkFBd0I7Z0JBRWxDLHdKQUErQzs7YUFDaEQ7Ozs7WUFQcUMsVUFBVTtZQUFyQixTQUFTOzs7c0JBZWpDLEtBQUssU0FBQyxTQUFTOzBCQUVmLFdBQVcsU0FBQyxtQkFBbUI7Ozs7Ozs7QUNqQmxDLE1BUWEseUJBQXlCOzs7OztJQUVwQyxZQUFvQixXQUF1QixFQUFVLFNBQW9CO1FBQXJELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUN2RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztLQUMxRTs7O1lBVkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUVoQyxxQ0FBZ0Q7O2FBQ2pEOzs7O1lBUDhCLFVBQVU7WUFBckIsU0FBUzs7Ozs7OztBQ0E3QixNQUthLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7O0lBVzdCLFVBQVUsQ0FBQyxJQUFXLEVBQUUsVUFBa0IsRUFBRSxhQUFzQixLQUFLLEVBQUUsZUFBMEI7O1lBQzdGLE1BQU0sR0FBVyxVQUFVLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxVQUFVLElBQUksRUFBRTtRQUMzRixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUzs7c0JBQ3JCLEdBQUcsR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVc7b0JBQ2xELElBQUksQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7OEJBQ3JELFlBQVksSUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs4QkFDdkMsU0FBUyxHQUFXLFVBQVUsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLEdBQUcsWUFBWTt3QkFDaEYsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztpQkFDRixDQUFDO2dCQUNGLE9BQU8sRUFBRSxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQzthQUN0QyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7Ozs7Ozs7SUFVRCxRQUFRLENBQUMsSUFBVyxFQUFFLE1BQWMsRUFBRSxZQUFxQyx1QkFBdUIsQ0FBQyxTQUFTO1FBQzFHLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNOztvQkFDbkIsS0FBSyxHQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7O29CQUN0QixLQUFLLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7b0JBQ3RCLFNBQVMsR0FBVyxDQUFDO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdEYsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDakU7cUJBQU07b0JBQ0wsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO3dCQUNqQixTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2hCO3lCQUFNLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTt3QkFDeEIsU0FBUyxHQUFHLENBQUMsQ0FBQztxQkFDZjtpQkFDRjtnQkFDRCxPQUFPLFNBQVMsSUFBSSxTQUFTLEtBQUssdUJBQXVCLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2hGLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7Ozs7OztJQVVELFFBQVEsQ0FBQyxJQUFXLEVBQUUsT0FBZSxFQUFFLEtBQWE7UUFDbEQsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7WUF4RUYsVUFBVTs7Ozs7O0FBMkVYLFNBQWdCLDJCQUEyQixDQUN2QyxNQUEwQjtJQUM1QixPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7Q0FDM0M7O0FBRUQsTUFBYSxtQkFBbUIsR0FBYTs7SUFFM0MsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVELFVBQVUsRUFBRSwyQkFBMkI7Q0FDeEM7Ozs7OztBQ3pGRDtNQWdCTSxhQUFhLEdBQWdCO0lBQ2pDLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFFNUIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtDQUMxQjtBQW9CRCxNQUFhLHVCQUF1Qjs7O1lBbEJuQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsdUJBQXVCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtpQkFDZDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsbUJBQW1CO2lCQUNwQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==