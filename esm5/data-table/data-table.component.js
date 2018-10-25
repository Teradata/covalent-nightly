/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var TdDataTableSortingOrder = {
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
var TD_VIRTUAL_OFFSET = 2;
/**
 * Constant to set default row height if none is provided
 * @type {?}
 */
var TD_VIRTUAL_DEFAULT_ROW_HEIGHT = 48;
var TdDataTableBase = /** @class */ (function () {
    function TdDataTableBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdDataTableBase;
}());
export { TdDataTableBase };
if (false) {
    /** @type {?} */
    TdDataTableBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdDataTableMixinBase = mixinControlValueAccessor(TdDataTableBase, []);
var TdDataTableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdDataTableComponent, _super);
    function TdDataTableComponent(_document, _elementRef, _domSanitizer, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._document = _document;
        _this._elementRef = _elementRef;
        _this._domSanitizer = _domSanitizer;
        _this._hostWidth = 0;
        /**
         * manually resizable columns
         */
        _this._resizableColumns = false;
        _this._columnClientX = 0;
        _this._onColumnResize = new Subject();
        _this._widths = [];
        _this._onResize = new Subject();
        _this._scrollHorizontalOffset = 0;
        _this._onHorizontalScroll = new Subject();
        _this._onVerticalScroll = new Subject();
        // Array of cached row heights to allow dynamic row heights
        _this._rowHeightCache = [];
        // Total pseudo height of all the elements
        _this._totalHeight = 0;
        // Total host height for the viewport
        _this._hostHeight = 0;
        // Scrolled vertical pixels
        _this._scrollVerticalOffset = 0;
        // Variables that set from and to which rows will be rendered
        _this._fromRow = 0;
        _this._toRow = 0;
        _this._selectable = false;
        _this._clickable = false;
        _this._multiple = true;
        _this._allSelected = false;
        _this._indeterminate = false;
        /**
         * sorting
         */
        _this._sortable = false;
        _this._sortOrder = TdDataTableSortingOrder.Ascending;
        /**
         * shift select
         */
        _this._shiftPreviouslyPressed = false;
        _this._lastSelectedIndex = -1;
        _this._firstSelectedIndex = -1;
        _this._firstCheckboxValue = false;
        /**
         * template fetching support
         */
        _this._templateMap = new Map();
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        _this.onSortChange = new EventEmitter();
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         */
        _this.onRowSelect = new EventEmitter();
        /**
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         */
        _this.onRowClick = new EventEmitter();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        _this.onSelectAll = new EventEmitter();
        /**
         * compareWith?: function(row, model): boolean
         * Allows custom comparison between row and model to see if row is selected or not
         * Default comparation is by reference
         */
        _this.compareWith = function (row, model) {
            return row === model;
        };
        return _this;
    }
    Object.defineProperty(TdDataTableComponent.prototype, "resizingColumn", {
        get: /**
         * @return {?}
         */
        function () {
            return this._resizingColumn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "hostWidth", {
        get: /**
         * @return {?}
         */
        function () {
            // if the checkboxes are rendered, we need to remove their width
            // from the total width to calculate properly
            if (this.selectable) {
                return this._hostWidth - 42;
            }
            return this._hostWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "offsetTransform", {
        /**
         * Returns the offset style with a proper calculation on how much it should move
         * over the y axis of the total height
         */
        get: /**
         * Returns the offset style with a proper calculation on how much it should move
         * over the y axis of the total height
         * @return {?}
         */
        function () {
            return this._offsetTransform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "totalHeight", {
        /**
         * Returns the assumed total height of the rows
         */
        get: /**
         * Returns the assumed total height of the rows
         * @return {?}
         */
        function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "fromRow", {
        /**
         * Returns the initial row to render in the viewport
         */
        get: /**
         * Returns the initial row to render in the viewport
         * @return {?}
         */
        function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "toRow", {
        /**
         * Returns the last row to render in the viewport
         */
        get: /**
         * Returns the last row to render in the viewport
         * @return {?}
         */
        function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columnsLeftScroll", {
        /**
         * Returns scroll position to reposition column headers
         */
        get: /**
         * Returns scroll position to reposition column headers
         * @return {?}
         */
        function () {
            return this._scrollHorizontalOffset * -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "allSelected", {
        /**
         * Returns true if all values are selected.
         */
        get: /**
         * Returns true if all values are selected.
         * @return {?}
         */
        function () {
            return this._allSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "indeterminate", {
        /**
         * Returns true if all values are not deselected
         * and at least one is.
         */
        get: /**
         * Returns true if all values are not deselected
         * and at least one is.
         * @return {?}
         */
        function () {
            return this._indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        /**
         * data?: {[key: string]: any}[]
         * Sets the data to be rendered as rows.
         */
        set: /**
         * data?: {[key: string]: any}[]
         * Sets the data to be rendered as rows.
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            this._data = data;
            this._rowHeightCache = [];
            Promise.resolve().then(function () {
                _this.refresh();
                // scroll back to the top if the data has changed
                _this._scrollableDiv.nativeElement.scrollTop = 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "virtualData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._virtualData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._columns) {
                return this._columns;
            }
            if (this.hasData) {
                this._columns = [];
                // if columns is undefined, use key in [data] rows as name and label for column headers.
                /** @type {?} */
                var row = this._data[0];
                Object.keys(row).forEach(function (k) {
                    if (!_this._columns.find(function (c) { return c.name === k; })) {
                        _this._columns.push({ name: k, label: k });
                    }
                });
                return this._columns;
            }
            else {
                return [];
            }
        },
        /**
         * columns?: ITdDataTableColumn[]
         * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
         * Defaults to [data] keys.
         */
        set: /**
         * columns?: ITdDataTableColumn[]
         * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
         * Defaults to [data] keys.
         * @param {?} cols
         * @return {?}
         */
        function (cols) {
            this._columns = cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "resizableColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._resizableColumns;
        },
        /**
         * resizableColumns?: boolean
         * Enables manual column resize.
         * Defaults to 'false'
         */
        set: /**
         * resizableColumns?: boolean
         * Enables manual column resize.
         * Defaults to 'false'
         * @param {?} resizableColumns
         * @return {?}
         */
        function (resizableColumns) {
            this._resizableColumns = coerceBooleanProperty(resizableColumns);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "selectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectable;
        },
        /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         */
        set: /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         * @param {?} selectable
         * @return {?}
         */
        function (selectable) {
            this._selectable = coerceBooleanProperty(selectable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "clickable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clickable;
        },
        /**
         * clickable?: boolean
         * Enables row click events, hover.
         * Defaults to 'false'
         */
        set: /**
         * clickable?: boolean
         * Enables row click events, hover.
         * Defaults to 'false'
         * @param {?} clickable
         * @return {?}
         */
        function (clickable) {
            this._clickable = coerceBooleanProperty(clickable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         */
        set: /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortable;
        },
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        set: /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         * @param {?} sortable
         * @return {?}
         */
        function (sortable) {
            this._sortable = coerceBooleanProperty(sortable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortBy", {
        /**
         * sortBy?: string
         * Sets the active sort column. [sortable] needs to be enabled.
         */
        set: /**
         * sortBy?: string
         * Sets the active sort column. [sortable] needs to be enabled.
         * @param {?} columnName
         * @return {?}
         */
        function (columnName) {
            if (!columnName) {
                return;
            }
            /** @type {?} */
            var column = this.columns.find(function (c) { return c.name === columnName; });
            if (!column) {
                throw new Error('[sortBy] must be a valid column name');
            }
            this._sortBy = column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortByColumn", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortOrder", {
        /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
         * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
         */
        set: /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
         * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
         * @param {?} order
         * @return {?}
         */
        function (order) {
            /** @type {?} */
            var sortOrder = order ? order.toUpperCase() : 'ASC';
            if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                throw new Error('[sortOrder] must be empty, ASC or DESC');
            }
            this._sortOrder = sortOrder === 'ASC' ?
                TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortOrderEnum", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortOrder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "hasData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data && this._data.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize observable for resize and scroll events
     */
    /**
     * Initialize observable for resize and scroll events
     * @return {?}
     */
    TdDataTableComponent.prototype.ngOnInit = /**
     * Initialize observable for resize and scroll events
     * @return {?}
     */
    function () {
        var _this = this;
        // initialize observable for resize calculations
        this._resizeSubs = this._onResize.asObservable().subscribe(function () {
            if (_this._rows) {
                _this._rows.toArray().forEach(function (row, index) {
                    _this._rowHeightCache[_this.fromRow + index] = row.height + 1;
                });
            }
            _this._calculateWidths();
            _this._calculateVirtualRows();
        });
        // initialize observable for column resize calculations
        this._columnResizeSubs = this._onColumnResize.asObservable().pipe(debounceTime(0)).subscribe(function (clientX) {
            _this._columnClientX = clientX;
            _this._calculateWidths();
            _this._changeDetectorRef.markForCheck();
        });
        // initialize observable for scroll column header reposition
        this._horizontalScrollSubs = this._onHorizontalScroll.asObservable()
            .subscribe(function (horizontalScroll) {
            _this._scrollHorizontalOffset = horizontalScroll;
            _this._changeDetectorRef.markForCheck();
        });
        // initialize observable for virtual scroll rendering
        this._verticalScrollSubs = this._onVerticalScroll.asObservable()
            .subscribe(function (verticalScroll) {
            _this._scrollVerticalOffset = verticalScroll;
            _this._calculateVirtualRows();
            _this._changeDetectorRef.markForCheck();
        });
        this._valueChangesSubs = this.valueChanges.subscribe(function (value) {
            _this.refresh();
        });
    };
    /**
     * Loads templates and sets them in a map for faster access.
     */
    /**
     * Loads templates and sets them in a map for faster access.
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterContentInit = /**
     * Loads templates and sets them in a map for faster access.
     * @return {?}
     */
    function () {
        for (var i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    };
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     */
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterContentChecked = /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     * @return {?}
     */
    function () {
        if (this._elementRef.nativeElement) {
            /** @type {?} */
            var newHostWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth) {
                this._hostWidth = newHostWidth;
                this._onResize.next();
            }
        }
        if (this._scrollableDiv.nativeElement) {
            /** @type {?} */
            var newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
            // if the height of the viewport has changed, then we mark for check
            if (this._hostHeight !== newHostHeight) {
                this._hostHeight = newHostHeight;
                this._calculateVirtualRows();
                this._changeDetectorRef.markForCheck();
            }
        }
    };
    /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     */
    /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterViewInit = /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     * @return {?}
     */
    function () {
        var _this = this;
        this._rowsChangedSubs = this._rows.changes.pipe(debounceTime(0)).subscribe(function () {
            _this._onResize.next();
        });
        this._calculateVirtualRows();
    };
    /**
     * Unsubscribes observables when data table is destroyed
     */
    /**
     * Unsubscribes observables when data table is destroyed
     * @return {?}
     */
    TdDataTableComponent.prototype.ngOnDestroy = /**
     * Unsubscribes observables when data table is destroyed
     * @return {?}
     */
    function () {
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
    };
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     */
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.handleScroll = /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = ((/** @type {?} */ (event.target)));
        if (element) {
            /** @type {?} */
            var horizontalScroll = element.scrollLeft;
            if (this._scrollHorizontalOffset !== horizontalScroll) {
                this._onHorizontalScroll.next(horizontalScroll);
            }
            /** @type {?} */
            var verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._onVerticalScroll.next(verticalScroll);
            }
        }
    };
    /**
     * Returns the width needed for the columns via index
     */
    /**
     * Returns the width needed for the columns via index
     * @param {?} index
     * @return {?}
     */
    TdDataTableComponent.prototype.getColumnWidth = /**
     * Returns the width needed for the columns via index
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this._widths[index]) {
            return this._widths[index].value;
        }
        return undefined;
    };
    /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype.getCellValue = /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    function (column, value) {
        if (column.nested === undefined || column.nested) {
            return this._getNestedValue(column.name, value);
        }
        return value[column.name];
    };
    /**
     * Getter method for template references
     */
    /**
     * Getter method for template references
     * @param {?} name
     * @return {?}
     */
    TdDataTableComponent.prototype.getTemplateRef = /**
     * Getter method for template references
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._templateMap.get(name);
    };
    /**
     * Clears model (ngModel) of component by removing all values in array.
     */
    /**
     * Clears model (ngModel) of component by removing all values in array.
     * @return {?}
     */
    TdDataTableComponent.prototype.clearModel = /**
     * Clears model (ngModel) of component by removing all values in array.
     * @return {?}
     */
    function () {
        this.value.splice(0, this.value.length);
    };
    /**
     * Refreshes data table and rerenders [data] and [columns]
     */
    /**
     * Refreshes data table and rerenders [data] and [columns]
     * @return {?}
     */
    TdDataTableComponent.prototype.refresh = /**
     * Refreshes data table and rerenders [data] and [columns]
     * @return {?}
     */
    function () {
        this._calculateVirtualRows();
        this._calculateWidths();
        this._calculateCheckboxState();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    /**
     * Selects or clears all rows depending on 'checked' value.
     * @param {?} checked
     * @return {?}
     */
    TdDataTableComponent.prototype.selectAll = /**
     * Selects or clears all rows depending on 'checked' value.
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        var _this = this;
        /** @type {?} */
        var toggledRows = [];
        if (checked) {
            this._data.forEach(function (row) {
                // skiping already selected rows
                if (!_this.isRowSelected(row)) {
                    _this.value.push(row);
                    // checking which ones are being toggled
                    toggledRows.push(row);
                }
            });
            this._allSelected = true;
            this._indeterminate = true;
        }
        else {
            this._data.forEach(function (row) {
                // checking which ones are being toggled
                if (_this.isRowSelected(row)) {
                    toggledRows.push(row);
                    /** @type {?} */
                    var modelRow = _this.value.filter(function (val) {
                        return _this.compareWith(row, val);
                    })[0];
                    /** @type {?} */
                    var index = _this.value.indexOf(modelRow);
                    if (index > -1) {
                        _this.value.splice(index, 1);
                    }
                }
            });
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.onSelectAll.emit({ rows: toggledRows, selected: checked });
        this.onChange(this.value);
    };
    /**
     * Checks if row is selected
     */
    /**
     * Checks if row is selected
     * @param {?} row
     * @return {?}
     */
    TdDataTableComponent.prototype.isRowSelected = /**
     * Checks if row is selected
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        // compare items by [compareWith] function
        return this.value ? this.value.filter(function (val) {
            return _this.compareWith(row, val);
        }).length > 0 : false;
    };
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     */
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     * @param {?} row
     * @param {?} event
     * @param {?} currentSelected
     * @return {?}
     */
    TdDataTableComponent.prototype.select = /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     * @param {?} row
     * @param {?} event
     * @param {?} currentSelected
     * @return {?}
     */
    function (row, event, currentSelected) {
        if (this.selectable) {
            this.blockEvent(event);
            // Check to see if Shift key is selected and need to select everything in between
            /** @type {?} */
            var mouseEvent = (/** @type {?} */ (event));
            if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                /** @type {?} */
                var firstIndex = currentSelected;
                /** @type {?} */
                var lastIndex = this._lastSelectedIndex;
                if (currentSelected > this._lastSelectedIndex) {
                    firstIndex = this._lastSelectedIndex;
                    lastIndex = currentSelected;
                }
                // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                // else the checkboxes clicked are all after the initial one
                if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                    (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                    for (var i = firstIndex; i <= lastIndex; i++) {
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
                    for (var i = firstIndex; i <= lastIndex; i++) {
                        /** @type {?} */
                        var rowSelected = this.isRowSelected(this._data[i]);
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
    };
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     */
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     * @return {?}
     */
    TdDataTableComponent.prototype.disableTextSelection = /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     * @return {?}
     */
    function () {
        if (this._document) {
            this._document.onselectstart = function () {
                return false;
            };
        }
    };
    /**
     * Resets the original onselectstart method.
     */
    /**
     * Resets the original onselectstart method.
     * @return {?}
     */
    TdDataTableComponent.prototype.enableTextSelection = /**
     * Resets the original onselectstart method.
     * @return {?}
     */
    function () {
        if (this._document) {
            this._document.onselectstart = undefined;
        }
    };
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     */
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     * @param {?} row
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.handleRowClick = /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     * @param {?} row
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (row, index, event) {
        if (this.clickable) {
            // ignoring linting rules here because attribute it actually null or not there
            // can't check for undefined
            /** @type {?} */
            var srcElement = event.srcElement || event.currentTarget;
            /** @type {?} */
            var element = (/** @type {?} */ (event.target));
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null && element.tagName.toLowerCase() !== 'mat-pseudo-checkbox') {
                this.onRowClick.emit({
                    row: row,
                    index: index,
                });
            }
        }
    };
    /**
     * Method handle for sort click event in column headers.
     */
    /**
     * Method handle for sort click event in column headers.
     * @param {?} column
     * @return {?}
     */
    TdDataTableComponent.prototype.handleSort = /**
     * Method handle for sort click event in column headers.
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (this._sortBy === column) {
            this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
                TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
        }
        else {
            this._sortBy = column;
            this._sortOrder = TdDataTableSortingOrder.Ascending;
        }
        this.onSortChange.next({ name: this._sortBy.name, order: this._sortOrder });
    };
    /**
     * Handle all keyup events when focusing a data table row
     */
    /**
     * Handle all keyup events when focusing a data table row
     * @param {?} event
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    TdDataTableComponent.prototype._rowKeyup = /**
     * Handle all keyup events when focusing a data table row
     * @param {?} event
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    function (event, row, index) {
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
    };
    /**
     * Sets column index of the dragged column and initial clientX of column
     */
    /**
     * Sets column index of the dragged column and initial clientX of column
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype._handleStartColumnDrag = /**
     * Sets column index of the dragged column and initial clientX of column
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        this._columnClientX = event.clientX;
        this._resizingColumn = index;
    };
    /**
     * Calculates new width depending on new clientX of dragger column
     */
    /**
     * Calculates new width depending on new clientX of dragger column
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype._handleColumnDrag = /**
     * Calculates new width depending on new clientX of dragger column
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // check if there was been a separator clicked for resize
        if (this._resizingColumn !== undefined && event.clientX > 0) {
            /** @type {?} */
            var xPosition = event.clientX;
            // checks if the separator is being moved to try and resize the column, else dont do anything
            if (xPosition > 0 && this._columnClientX > 0 && (xPosition - this._columnClientX) !== 0) {
                // calculate the new width depending if making the column bigger or smaller
                /** @type {?} */
                var proposedManualWidth = this._widths[this._resizingColumn].value + (xPosition - this._columnClientX);
                // if the proposed new width is less than the projected min width of the column, use projected min width
                if (proposedManualWidth < this._colElements.toArray()[this._resizingColumn].projectedWidth) {
                    proposedManualWidth = this._colElements.toArray()[this._resizingColumn].projectedWidth;
                }
                this.columns[this._resizingColumn].width = proposedManualWidth;
                // update new x position for the resized column
                this._onColumnResize.next(xPosition);
            }
        }
    };
    /**
     * Ends dragged flags
     */
    /**
     * Ends dragged flags
     * @return {?}
     */
    TdDataTableComponent.prototype._handleEndColumnDrag = /**
     * Ends dragged flags
     * @return {?}
     */
    function () {
        this._columnClientX = undefined;
        this._resizingColumn = undefined;
    };
    /**
     * Method to prevent the default events
     */
    /**
     * Method to prevent the default events
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.blockEvent = /**
     * Method to prevent the default events
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype._getNestedValue = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (!(value instanceof Object) || !name) {
            return value;
        }
        if (name.indexOf('.') > -1) {
            /** @type {?} */
            var splitName = name.split(/\.(.+)/, 2);
            return this._getNestedValue(splitName[1], value[splitName[0]]);
        }
        else {
            return value[name];
        }
    };
    /**
     * Does the actual Row Selection
     */
    /**
     * Does the actual Row Selection
     * @param {?} row
     * @param {?} rowIndex
     * @return {?}
     */
    TdDataTableComponent.prototype._doSelection = /**
     * Does the actual Row Selection
     * @param {?} row
     * @param {?} rowIndex
     * @return {?}
     */
    function (row, rowIndex) {
        var _this = this;
        /** @type {?} */
        var wasSelected = this.isRowSelected(row);
        if (!wasSelected) {
            if (!this._multiple) {
                this.clearModel();
            }
            this.value.push(row);
        }
        else {
            // compare items by [compareWith] function
            row = this.value.filter(function (val) {
                return _this.compareWith(row, val);
            })[0];
            /** @type {?} */
            var index = this.value.indexOf(row);
            if (index > -1) {
                this.value.splice(index, 1);
            }
        }
        this._calculateCheckboxState();
        this.onRowSelect.emit({ row: row, index: rowIndex, selected: !wasSelected });
        this.onChange(this.value);
        return !wasSelected;
    };
    /**
     * Calculate all the state of all checkboxes
     */
    /**
     * Calculate all the state of all checkboxes
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateCheckboxState = /**
     * Calculate all the state of all checkboxes
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        if (this._data) {
            this._allSelected = typeof this._data.find(function (d) { return !_this.isRowSelected(d); }) === 'undefined';
            this._indeterminate = false;
            try {
                for (var _b = tslib_1.__values(this._data), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var row = _c.value;
                    if (!this.isRowSelected(row)) {
                        continue;
                    }
                    this._indeterminate = true;
                    break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * Calculates the widths for columns and cells depending on content
     */
    /**
     * Calculates the widths for columns and cells depending on content
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateWidths = /**
     * Calculates the widths for columns and cells depending on content
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._colElements && this._colElements.length) {
            this._widths = [];
            this._colElements.forEach(function (col, index) {
                _this._adjustColumnWidth(index, _this._calculateWidth());
            });
            this._adjustColumnWidhts();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     */
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @return {?}
     */
    TdDataTableComponent.prototype._adjustColumnWidhts = /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        /** @type {?} */
        var flexibleWidths = this._widths.filter(function (width, index) {
            if (_this.columns[index].hidden) {
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
        var recalculateHostWidth = 0;
        if (fixedTotalWidth < this.hostWidth) {
            recalculateHostWidth = this.hostWidth - fixedTotalWidth;
        }
        // if we have flexible columns and pixels to spare on them
        // we try and spread the pixels across them
        if (flexibleWidths && recalculateHostWidth) {
            /** @type {?} */
            var newValue_1 = Math.floor(recalculateHostWidth / flexibleWidths);
            /** @type {?} */
            var adjustedNumber_1 = 0;
            // adjust the column widths with the spread pixels
            this._widths.forEach(function (colWidth) {
                if (_this._widths[colWidth.index].max && _this._widths[colWidth.index].value > newValue_1 ||
                    _this._widths[colWidth.index].min && _this._widths[colWidth.index].value < newValue_1 ||
                    !_this._widths[colWidth.index].limit) {
                    _this._adjustColumnWidth(colWidth.index, newValue_1);
                    adjustedNumber_1++;
                }
            });
            // if there are still columns that need to be recalculated, we start over
            /** @type {?} */
            var newFlexibleWidths = this._widths.filter(function (width) {
                return !width.limit && !width.max;
            }).length;
            if (newFlexibleWidths !== adjustedNumber_1 && newFlexibleWidths !== flexibleWidths) {
                this._adjustColumnWidhts();
            }
        }
    };
    /**
     * Adjusts a single column to see if it can be recalculated
     */
    /**
     * Adjusts a single column to see if it can be recalculated
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype._adjustColumnWidth = /**
     * Adjusts a single column to see if it can be recalculated
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    function (index, value) {
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
        var skipMinWidthProjection = false;
        if (this.columns[index]) {
            // if the provided width has min/max, then we check to see if we need to set it
            if (typeof this.columns[index].width === 'object') {
                /** @type {?} */
                var widthOpts = (/** @type {?} */ (this.columns[index].width));
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
    };
    /**
     * Generic method to calculate column width
     */
    /**
     * Generic method to calculate column width
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateWidth = /**
     * Generic method to calculate column width
     * @return {?}
     */
    function () {
        /** @type {?} */
        var renderedColumns = this.columns.filter(function (col) { return !col.hidden; });
        return Math.floor(this.hostWidth / renderedColumns.length);
    };
    /**
     * Method to calculate the rows to be rendered in the viewport
     */
    /**
     * Method to calculate the rows to be rendered in the viewport
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateVirtualRows = /**
     * Method to calculate the rows to be rendered in the viewport
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var scrolledRows = 0;
        if (this._data) {
            this._totalHeight = 0;
            /** @type {?} */
            var rowHeightSum_1 = 0;
            // loop through all rows to see if we have their height cached
            // and sum them all to calculate the total height
            this._data.forEach(function (d, i) {
                // iterate through all rows at first and assume all
                // rows are the same height as the first one
                if (!_this._rowHeightCache[i]) {
                    _this._rowHeightCache[i] = _this._rowHeightCache[0] || TD_VIRTUAL_DEFAULT_ROW_HEIGHT;
                }
                rowHeightSum_1 += _this._rowHeightCache[i];
                // check how many rows have been scrolled
                if (_this._scrollVerticalOffset - rowHeightSum_1 > 0) {
                    scrolledRows++;
                }
            });
            this._totalHeight = rowHeightSum_1;
            // set the initial row to be rendered taking into account the row offset
            /** @type {?} */
            var fromRow = scrolledRows - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            var hostHeight = this._hostHeight;
            /** @type {?} */
            var index = 0;
            // calculate how many rows can fit in the viewport
            while (hostHeight > 0) {
                hostHeight -= this._rowHeightCache[this.fromRow + index];
                index++;
            }
            // set the last row to be rendered taking into account the row offset
            /** @type {?} */
            var range = (index - 1) + (TD_VIRTUAL_OFFSET * 2);
            /** @type {?} */
            var toRow = range + this.fromRow;
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
        var offset = 0;
        // calculate the proper offset depending on how many rows have been scrolled
        if (scrolledRows > TD_VIRTUAL_OFFSET) {
            for (var index = 0; index < this.fromRow; index++) {
                offset += this._rowHeightCache[index];
            }
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    TdDataTableComponent.decorators = [
        { type: Component, args: [{
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdDataTableComponent; }),
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
    TdDataTableComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef },
        { type: DomSanitizer },
        { type: ChangeDetectorRef }
    ]; };
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
    return TdDataTableComponent;
}(_TdDataTableMixinBase));
export { TdDataTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFDM0UsaUJBQWlCLEVBQUUsU0FBUyxFQUM1QixlQUFlLEVBQWlDLFNBQVMsRUFBRSxNQUFNLEVBQ2pFLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0UsT0FBTyxFQUE0QixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXBGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTFGLE9BQU8sRUFBeUIseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0lBR3ZGLFdBQVksS0FBSztJQUNqQixZQUFhLE1BQU07Ozs7OztBQUdyQiw2Q0FHQzs7O0lBRkMsc0NBQWE7O0lBQ2Isc0NBQWE7Ozs7O0FBR2Ysd0NBV0M7OztJQVZDLGtDQUFhOztJQUNiLG1DQUFjOztJQUNkLHFD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OztJQU90SCwwQ0FBd0g7Ozs7Ozs7SUFPeEgsMkNBQ2lGOzs7Ozs7O0lBY2pGLDJDQUVDOztJQWRXLHlDQUFvRDs7SUFDcEQsMkNBQStCOztJQUMvQiw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgICAgICBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsXG4gICAgICAgICBDb250ZW50Q2hpbGRyZW4sIFRlbXBsYXRlUmVmLCBBZnRlckNvbnRlbnRJbml0LCBRdWVyeUxpc3QsIEluamVjdCxcbiAgICAgICAgIE9wdGlvbmFsLCBWaWV3Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBFTlRFUiwgU1BBQ0UsIFVQX0FSUk9XLCBET1dOX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLXJvdy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50LCBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0YS10YWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgZW51bSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB7XG4gIEFzY2VuZGluZyA9ICdBU0MnLFxuICBEZXNjZW5kaW5nID0gJ0RFU0MnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZUNvbHVtbldpZHRoIHtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlQ29sdW1uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xuICBudW1lcmljPzogYm9vbGVhbjtcbiAgZm9ybWF0PzogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgbmVzdGVkPzogYm9vbGVhbjtcbiAgc29ydGFibGU/OiBib29sZWFuO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBmaWx0ZXI/OiBib29sZWFuO1xuICB3aWR0aD86IElUZERhdGFUYWJsZUNvbHVtbldpZHRoIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVNlbGVjdEV2ZW50IHtcbiAgcm93OiBhbnk7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50IHtcbiAgcm93czogYW55W107XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQge1xuICByb3c6IGFueTtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW50ZXJuYWxDb2x1bW5XaWR0aCB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGxpbWl0OiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xuICBtaW4/OiBib29sZWFuO1xuICBtYXg/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENvbnN0YW50IHRvIHNldCB0aGUgcm93cyBvZmZzZXQgYmVmb3JlIGFuZCBhZnRlciB0aGUgdmlld3BvcnRcbiAqL1xuY29uc3QgVERfVklSVFVBTF9PRkZTRVQ6IG51bWJlciA9IDI7XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gc2V0IGRlZmF1bHQgcm93IGhlaWdodCBpZiBub25lIGlzIHByb3ZpZGVkXG4gKi9cbmNvbnN0IFREX1ZJUlRVQUxfREVGQVVMVF9ST1dfSEVJR0hUOiBudW1iZXIgPSA0ODtcblxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGREYXRhVGFibGVNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKFRkRGF0YVRhYmxlQmFzZSwgW10pO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkRGF0YVRhYmxlQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIHNlbGVjdG9yOiAndGQtZGF0YS10YWJsZScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNvbXBvbmVudCBleHRlbmRzIF9UZERhdGFUYWJsZU1peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAvKiogcmVzcG9uc2l2ZSB3aWR0aCBjYWxjdWxhdGlvbnMgKi9cbiAgcHJpdmF0ZSBfcmVzaXplU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yb3dzQ2hhbmdlZFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfaG9zdFdpZHRoOiBudW1iZXIgPSAwO1xuXG4gIC8qKiBtYW51YWxseSByZXNpemFibGUgY29sdW1ucyAqL1xuICBwcml2YXRlIF9yZXNpemFibGVDb2x1bW5zOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbHVtbkNsaWVudFg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2NvbHVtblJlc2l6ZVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcmVzaXppbmdDb2x1bW46IG51bWJlcjtcbiAgcHJpdmF0ZSBfb25Db2x1bW5SZXNpemU6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBnZXQgcmVzaXppbmdDb2x1bW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzaXppbmdDb2x1bW47XG4gIH1cblxuICBnZXQgaG9zdFdpZHRoKCk6IG51bWJlciB7XG4gICAgLy8gaWYgdGhlIGNoZWNrYm94ZXMgYXJlIHJlbmRlcmVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVpciB3aWR0aFxuICAgIC8vIGZyb20gdGhlIHRvdGFsIHdpZHRoIHRvIGNhbGN1bGF0ZSBwcm9wZXJseVxuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ob3N0V2lkdGggLSA0MjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgX3dpZHRoczogSUludGVybmFsQ29sdW1uV2lkdGhbXSA9IFtdO1xuICBwcml2YXRlIF9vblJlc2l6ZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIGNvbHVtbiBoZWFkZXIgcmVwb3NpdGlvbiBhbmQgdmlld3Bvb3J0ICovXG4gIHByaXZhdGUgX3ZlcnRpY2FsU2Nyb2xsU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9ob3Jpem9udGFsU2Nyb2xsU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX29uSG9yaXpvbnRhbFNjcm9sbDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9vblZlcnRpY2FsU2Nyb2xsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgLy8gQXJyYXkgb2YgY2FjaGVkIHJvdyBoZWlnaHRzIHRvIGFsbG93IGR5bmFtaWMgcm93IGhlaWdodHNcbiAgcHJpdmF0ZSBfcm93SGVpZ2h0Q2FjaGU6IG51bWJlcltdID0gW107XG4gIC8vIFRvdGFsIHBzZXVkbyBoZWlnaHQgb2YgYWxsIHRoZSBlbGVtZW50c1xuICBwcml2YXRlIF90b3RhbEhlaWdodDogbnVtYmVyID0gMDtcbiAgLy8gVG90YWwgaG9zdCBoZWlnaHQgZm9yIHRoZSB2aWV3cG9ydFxuICBwcml2YXRlIF9ob3N0SGVpZ2h0OiBudW1iZXIgPSAwO1xuICAvLyBTY3JvbGxlZCB2ZXJ0aWNhbCBwaXhlbHNcbiAgcHJpdmF0ZSBfc2Nyb2xsVmVydGljYWxPZmZzZXQ6IG51bWJlciA9IDA7XG4gIC8vIFN0eWxlIHRvIG1vdmUgdGhlIGNvbnRlbnQgYSBjZXJ0YWluIG9mZnNldCBkZXBlbmRpbmcgb24gc2Nyb2xsZWQgb2Zmc2V0XG4gIHByaXZhdGUgX29mZnNldFRyYW5zZm9ybTogU2FmZVN0eWxlO1xuXG4gIC8vIFZhcmlhYmxlcyB0aGF0IHNldCBmcm9tIGFuZCB0byB3aGljaCByb3dzIHdpbGwgYmUgcmVuZGVyZWRcbiAgcHJpdmF0ZSBfZnJvbVJvdzogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdG9Sb3c6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCBzdHlsZSB3aXRoIGEgcHJvcGVyIGNhbGN1bGF0aW9uIG9uIGhvdyBtdWNoIGl0IHNob3VsZCBtb3ZlXG4gICAqIG92ZXIgdGhlIHkgYXhpcyBvZiB0aGUgdG90YWwgaGVpZ2h0XG4gICAqL1xuICBnZXQgb2Zmc2V0VHJhbnNmb3JtKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRyYW5zZm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhc3N1bWVkIHRvdGFsIGhlaWdodCBvZiB0aGUgcm93c1xuICAgKi9cbiAgZ2V0IHRvdGFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluaXRpYWwgcm93IHRvIHJlbmRlciBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIGdldCBmcm9tUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Sb3c7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFzdCByb3cgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgZ2V0IHRvUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvUm93O1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzU3ViczogU3Vic2NyaXB0aW9uO1xuICAvKiogaW50ZXJuYWwgYXR0cmlidXRlcyAqL1xuICBwcml2YXRlIF9kYXRhOiBhbnlbXTtcbiAgLy8gZGF0YSB2aXJ0dWFsbHkgaXRlcmF0ZWQgYnkgY29tcG9uZW50XG4gIHByaXZhdGUgX3ZpcnR1YWxEYXRhOiBhbnlbXTtcbiAgcHJpdmF0ZSBfY29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW107XG4gIHByaXZhdGUgX3NlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2xpY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYWxsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBzb3J0aW5nICovXG4gIHByaXZhdGUgX3NvcnRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3NvcnRCeTogSVRkRGF0YVRhYmxlQ29sdW1uO1xuICBwcml2YXRlIF9zb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuXG4gIC8qKiBzaGlmdCBzZWxlY3QgKi9cbiAgcHJpdmF0ZSBfc2hpZnRQcmV2aW91c2x5UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sYXN0U2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgX2ZpcnN0U2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgX2ZpcnN0Q2hlY2tib3hWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiB0ZW1wbGF0ZSBmZXRjaGluZyBzdXBwb3J0ICovXG4gIHByaXZhdGUgX3RlbXBsYXRlTWFwOiBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PigpO1xuICBAQ29udGVudENoaWxkcmVuKFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUpIF90ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlPjtcblxuICBAVmlld0NoaWxkKCdzY3JvbGxhYmxlRGl2JykgX3Njcm9sbGFibGVEaXY6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZHJlbignY29sdW1uRWxlbWVudCcpIF9jb2xFbGVtZW50czogUXVlcnlMaXN0PFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkcmVuKFRkRGF0YVRhYmxlUm93Q29tcG9uZW50KSBfcm93czogUXVlcnlMaXN0PFRkRGF0YVRhYmxlUm93Q29tcG9uZW50PjtcblxuICAvKipcbiAgICogUmV0dXJucyBzY3JvbGwgcG9zaXRpb24gdG8gcmVwb3NpdGlvbiBjb2x1bW4gaGVhZGVyc1xuICAgKi9cbiAgZ2V0IGNvbHVtbnNMZWZ0U2Nyb2xsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgKiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHZhbHVlcyBhcmUgc2VsZWN0ZWQuXG4gICAqL1xuICBnZXQgYWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbFNlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdmFsdWVzIGFyZSBub3QgZGVzZWxlY3RlZFxuICAgKiBhbmQgYXQgbGVhc3Qgb25lIGlzLlxuICAgKi9cbiAgZ2V0IGluZGV0ZXJtaW5hdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV0ZXJtaW5hdGU7XG4gIH1cblxuICAvKipcbiAgICogZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9W11cbiAgICogU2V0cyB0aGUgZGF0YSB0byBiZSByZW5kZXJlZCBhcyByb3dzLlxuICAgKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IGRhdGEoZGF0YTogYW55W10pIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9yb3dIZWlnaHRDYWNoZSA9IFtdO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAvLyBzY3JvbGwgYmFjayB0byB0aGUgdG9wIGlmIHRoZSBkYXRhIGhhcyBjaGFuZ2VkXG4gICAgICB0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICB9KTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgdmlydHVhbERhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb2x1bW5zPzogSVRkRGF0YVRhYmxlQ29sdW1uW11cbiAgICogU2V0cyBhZGRpdGlvbmFsIGNvbHVtbiBjb25maWd1cmF0aW9uLiBbSVRkRGF0YVRhYmxlQ29sdW1uLm5hbWVdIGhhcyB0byBleGlzdCBpbiBbZGF0YV0gYXMga2V5LlxuICAgKiBEZWZhdWx0cyB0byBbZGF0YV0ga2V5cy5cbiAgICovXG4gIEBJbnB1dCgnY29sdW1ucycpXG4gIHNldCBjb2x1bW5zKGNvbHM6IElUZERhdGFUYWJsZUNvbHVtbltdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHM7XG4gIH1cbiAgZ2V0IGNvbHVtbnMoKTogSVRkRGF0YVRhYmxlQ29sdW1uW10ge1xuICAgIGlmICh0aGlzLl9jb2x1bW5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNEYXRhKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gW107XG4gICAgICAvLyBpZiBjb2x1bW5zIGlzIHVuZGVmaW5lZCwgdXNlIGtleSBpbiBbZGF0YV0gcm93cyBhcyBuYW1lIGFuZCBsYWJlbCBmb3IgY29sdW1uIGhlYWRlcnMuXG4gICAgICBsZXQgcm93OiBhbnkgPSB0aGlzLl9kYXRhWzBdO1xuICAgICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb2x1bW5zLmZpbmQoKGM6IGFueSkgPT4gYy5uYW1lID09PSBrKSkge1xuICAgICAgICAgIHRoaXMuX2NvbHVtbnMucHVzaCh7IG5hbWU6IGssIGxhYmVsOiBrIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJlc2l6YWJsZUNvbHVtbnM/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgbWFudWFsIGNvbHVtbiByZXNpemUuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgncmVzaXphYmxlQ29sdW1ucycpXG4gIHNldCByZXNpemFibGVDb2x1bW5zKHJlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXNpemFibGVDb2x1bW5zID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlc2l6YWJsZUNvbHVtbnMpO1xuICB9XG4gIGdldCByZXNpemFibGVDb2x1bW5zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemFibGVDb2x1bW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdGFibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgcm93IHNlbGVjdGlvbiBldmVudHMsIGhvdmVyIGFuZCBzZWxlY3RlZCByb3cgc3RhdGVzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3NlbGVjdGFibGUnKVxuICBzZXQgc2VsZWN0YWJsZShzZWxlY3RhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzZWxlY3RhYmxlKTtcbiAgfVxuICBnZXQgc2VsZWN0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGlja2FibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgcm93IGNsaWNrIGV2ZW50cywgaG92ZXIuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnY2xpY2thYmxlJylcbiAgc2V0IGNsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbGlja2FibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoY2xpY2thYmxlKTtcbiAgfVxuICBnZXQgY2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jbGlja2FibGU7XG4gIH1cblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgbXVsdGlwbGUgcm93IHNlbGVjdGlvbi4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBzb3J0aW5nIGV2ZW50cywgc29ydCBpY29ucyBhbmQgYWN0aXZlIGNvbHVtbiBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc29ydGFibGUnKVxuICBzZXQgc29ydGFibGUoc29ydGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0YWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzb3J0YWJsZSk7XG4gIH1cbiAgZ2V0IHNvcnRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Qnk/OiBzdHJpbmdcbiAgICogU2V0cyB0aGUgYWN0aXZlIHNvcnQgY29sdW1uLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoJ3NvcnRCeScpXG4gIHNldCBzb3J0QnkoY29sdW1uTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFjb2x1bW5OYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoKGM6IGFueSkgPT4gYy5uYW1lID09PSBjb2x1bW5OYW1lKTtcbiAgICBpZiAoIWNvbHVtbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydEJ5XSBtdXN0IGJlIGEgdmFsaWQgY29sdW1uIG5hbWUnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0QnkgPSBjb2x1bW47XG4gIH1cbiAgZ2V0IHNvcnRCeUNvbHVtbigpOiBJVGREYXRhVGFibGVDb2x1bW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0Qnk7XG4gIH1cblxuICAvKipcbiAgICogc29ydE9yZGVyPzogWydBU0MnIHwgJ0RFU0MnXSBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlclxuICAgKiBTZXRzIHRoZSBzb3J0IG9yZGVyIG9mIHRoZSBbc29ydEJ5XSBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ0FTQycgb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nXG4gICAqL1xuICBASW5wdXQoJ3NvcnRPcmRlcicpXG4gIHNldCBzb3J0T3JkZXIob3JkZXI6ICdBU0MnIHwgJ0RFU0MnKSB7XG4gICAgbGV0IHNvcnRPcmRlcjogc3RyaW5nID0gb3JkZXIgPyBvcmRlci50b1VwcGVyQ2FzZSgpIDogJ0FTQyc7XG4gICAgaWYgKHNvcnRPcmRlciAhPT0gJ0RFU0MnICYmIHNvcnRPcmRlciAhPT0gJ0FTQycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW3NvcnRPcmRlcl0gbXVzdCBiZSBlbXB0eSwgQVNDIG9yIERFU0MnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0T3JkZXIgPSBzb3J0T3JkZXIgPT09ICdBU0MnID9cbiAgICAgIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyA6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmc7XG4gIH1cbiAgZ2V0IHNvcnRPcmRlckVudW0oKTogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXI7XG4gIH1cblxuICBnZXQgaGFzRGF0YSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogc29ydENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY29sdW1uIGhlYWRlcnMgYXJlIGNsaWNrZWQuIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc29ydENoYW5nZScpIG9uU29ydENoYW5nZTogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudD4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogcm93U2VsZWN0PzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgcm93IGlzIHNlbGVjdGVkL2Rlc2VsZWN0ZWQuIFtzZWxlY3RhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU2VsZWN0RXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3Jvd1NlbGVjdCcpIG9uUm93U2VsZWN0OiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RFdmVudD4oKTtcblxuICAvKipcbiAgICogcm93Q2xpY2s/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgY2xpY2tlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3Jvd0NsaWNrJykgb25Sb3dDbGljazogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBzZWxlY3RBbGw/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYWxsIHJvd3MgYXJlIHNlbGVjdGVkL2Rlc2VsZWN0ZWQgYnkgdGhlIGFsbCBjaGVja2JveC4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc2VsZWN0QWxsJykgb25TZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudD4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9kb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICAgICAgICAgICAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGFyZVdpdGg/OiBmdW5jdGlvbihyb3csIG1vZGVsKTogYm9vbGVhblxuICAgKiBBbGxvd3MgY3VzdG9tIGNvbXBhcmlzb24gYmV0d2VlbiByb3cgYW5kIG1vZGVsIHRvIHNlZSBpZiByb3cgaXMgc2VsZWN0ZWQgb3Igbm90XG4gICAqIERlZmF1bHQgY29tcGFyYXRpb24gaXMgYnkgcmVmZXJlbmNlXG4gICAqL1xuICBASW5wdXQoJ2NvbXBhcmVXaXRoJykgY29tcGFyZVdpdGg6IChyb3c6IGFueSwgbW9kZWw6IGFueSkgPT4gYm9vbGVhbiA9IChyb3c6IGFueSwgbW9kZWw6IGFueSkgPT4ge1xuICAgIHJldHVybiByb3cgPT09IG1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgcmVzaXplIGFuZCBzY3JvbGwgZXZlbnRzXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHJlc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICB0aGlzLl9yZXNpemVTdWJzID0gdGhpcy5fb25SZXNpemUuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9yb3dzKSB7XG4gICAgICAgIHRoaXMuX3Jvd3MudG9BcnJheSgpLmZvckVhY2goKHJvdzogVGREYXRhVGFibGVSb3dDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICB0aGlzLl9yb3dIZWlnaHRDYWNoZVt0aGlzLmZyb21Sb3cgKyBpbmRleF0gPSByb3cuaGVpZ2h0ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIGNvbHVtbiByZXNpemUgY2FsY3VsYXRpb25zXG4gICAgdGhpcy5fY29sdW1uUmVzaXplU3VicyA9IHRoaXMuX29uQ29sdW1uUmVzaXplLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgKS5zdWJzY3JpYmUoKGNsaWVudFg6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IGNsaWVudFg7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3Igc2Nyb2xsIGNvbHVtbiBoZWFkZXIgcmVwb3NpdGlvblxuICAgIHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzID0gdGhpcy5fb25Ib3Jpem9udGFsU2Nyb2xsLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAuc3Vic2NyaWJlKChob3Jpem9udGFsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgPSBob3Jpem9udGFsU2Nyb2xsO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciB2aXJ0dWFsIHNjcm9sbCByZW5kZXJpbmdcbiAgICB0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMgPSB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAuc3Vic2NyaWJlKCh2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsU2Nyb2xsO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMgPSB0aGlzLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRlbXBsYXRlcyBhbmQgc2V0cyB0aGVtIGluIGEgbWFwIGZvciBmYXN0ZXIgYWNjZXNzLlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZU1hcC5zZXQoXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KClbaV0udGREYXRhVGFibGVUZW1wbGF0ZSxcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVzLnRvQXJyYXkoKVtpXS50ZW1wbGF0ZVJlZixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBob3N0cyBuYXRpdmUgZWxlbWVudHMgd2lkdGhzIHRvIHNlZSBpZiBpdCBoYXMgY2hhbmdlZCAocmVzaXplIGNoZWNrKVxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGxldCBuZXdIb3N0V2lkdGg6IG51bWJlciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIC8vIGlmIHRoZSB3aWR0aCBoYXMgY2hhbmdlZCB0aGVuIHdlIHRocm93IGEgcmVzaXplIGV2ZW50LlxuICAgICAgaWYgKHRoaXMuX2hvc3RXaWR0aCAhPT0gbmV3SG9zdFdpZHRoKSB7XG4gICAgICAgIHRoaXMuX2hvc3RXaWR0aCA9IG5ld0hvc3RXaWR0aDtcbiAgICAgICAgdGhpcy5fb25SZXNpemUubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBsZXQgbmV3SG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIC8vIGlmIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGhhcyBjaGFuZ2VkLCB0aGVuIHdlIG1hcmsgZm9yIGNoZWNrXG4gICAgICBpZiAodGhpcy5faG9zdEhlaWdodCAhPT0gbmV3SG9zdEhlaWdodCkge1xuICAgICAgICB0aGlzLl9ob3N0SGVpZ2h0ID0gbmV3SG9zdEhlaWdodDtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0byBhbiBvYnNlcnZhYmxlIHRoYXQgY2hlY2tzIGlmIGFsbCByb3dzIGhhdmUgYmVlbiByZW5kZXJlZFxuICAgKiBzbyB3ZSBjYW4gc3RhcnQgY2FsY3VsYXRpbmcgdGhlIHdpZHRoc1xuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jvd3NDaGFuZ2VkU3VicyA9IHRoaXMuX3Jvd3MuY2hhbmdlcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uUmVzaXplLm5leHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBvYnNlcnZhYmxlcyB3aGVuIGRhdGEgdGFibGUgaXMgZGVzdHJveWVkXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcmVzaXplU3Vicykge1xuICAgICAgdGhpcy5fcmVzaXplU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29sdW1uUmVzaXplU3Vicykge1xuICAgICAgdGhpcy5fY29sdW1uUmVzaXplU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMpIHtcbiAgICAgIHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMpIHtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm93c0NoYW5nZWRTdWJzKSB7XG4gICAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMpIHtcbiAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlc1N1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgZ2V0cyBleGVjdXRlZCBldmVyeSB0aW1lIHRoZXJlIGlzIGEgc2Nyb2xsIGV2ZW50XG4gICAqIENhbGxzIHRoZSBzY3JvbGwgb2JzZXJ2YWJsZVxuICAgKi9cbiAgaGFuZGxlU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgbGV0IGhvcml6b250YWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ICE9PSBob3Jpem9udGFsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX29uSG9yaXpvbnRhbFNjcm9sbC5uZXh0KGhvcml6b250YWxTY3JvbGwpO1xuICAgICAgfVxuICAgICAgbGV0IHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCAhPT0gdmVydGljYWxTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5uZXh0KHZlcnRpY2FsU2Nyb2xsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggbmVlZGVkIGZvciB0aGUgY29sdW1ucyB2aWEgaW5kZXhcbiAgICovXG4gIGdldENvbHVtbldpZHRoKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl93aWR0aHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldENlbGxWYWx1ZShjb2x1bW46IElUZERhdGFUYWJsZUNvbHVtbiwgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKGNvbHVtbi5uZXN0ZWQgPT09IHVuZGVmaW5lZCB8fCBjb2x1bW4ubmVzdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0TmVzdGVkVmFsdWUoY29sdW1uLm5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlW2NvbHVtbi5uYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgbWV0aG9kIGZvciB0ZW1wbGF0ZSByZWZlcmVuY2VzXG4gICAqL1xuICAgZ2V0VGVtcGxhdGVSZWYobmFtZTogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZU1hcC5nZXQobmFtZSk7XG4gICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBtb2RlbCAobmdNb2RlbCkgb2YgY29tcG9uZW50IGJ5IHJlbW92aW5nIGFsbCB2YWx1ZXMgaW4gYXJyYXkuXG4gICAqL1xuICBjbGVhck1vZGVsKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUuc3BsaWNlKDAsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMgZGF0YSB0YWJsZSBhbmQgcmVyZW5kZXJzIFtkYXRhXSBhbmQgW2NvbHVtbnNdXG4gICAqL1xuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlV2lkdGhzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgY2xlYXJzIGFsbCByb3dzIGRlcGVuZGluZyBvbiAnY2hlY2tlZCcgdmFsdWUuXG4gICAqL1xuICBzZWxlY3RBbGwoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGxldCB0b2dnbGVkUm93czogYW55W10gPSBbXTtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAvLyBza2lwaW5nIGFscmVhZHkgc2VsZWN0ZWQgcm93c1xuICAgICAgICBpZiAoIXRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZS5wdXNoKHJvdyk7XG4gICAgICAgICAgLy8gY2hlY2tpbmcgd2hpY2ggb25lcyBhcmUgYmVpbmcgdG9nZ2xlZFxuICAgICAgICAgIHRvZ2dsZWRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAvLyBjaGVja2luZyB3aGljaCBvbmVzIGFyZSBiZWluZyB0b2dnbGVkXG4gICAgICAgIGlmICh0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIHRvZ2dsZWRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgICBsZXQgbW9kZWxSb3c6IGFueSA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy52YWx1ZS5pbmRleE9mKG1vZGVsUm93KTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLm9uU2VsZWN0QWxsLmVtaXQoe3Jvd3M6IHRvZ2dsZWRSb3dzLCBzZWxlY3RlZDogY2hlY2tlZH0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdyBpcyBzZWxlY3RlZFxuICAgKi9cbiAgaXNSb3dTZWxlY3RlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8vIGNvbXBhcmUgaXRlbXMgYnkgW2NvbXBhcmVXaXRoXSBmdW5jdGlvblxuICAgIHJldHVybiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgfSkubGVuZ3RoID4gMCA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgY2xlYXJzIGEgcm93IGRlcGVuZGluZyBvbiAnY2hlY2tlZCcgdmFsdWUgaWYgdGhlIHJvdyAnaXNTZWxlY3RhYmxlJ1xuICAgKiBoYW5kbGVzIGNudHJsIGNsaWNrcyBhbmQgc2hpZnQgY2xpY2tzIGZvciBtdWx0aS1zZWxlY3RcbiAgICovXG4gIHNlbGVjdChyb3c6IGFueSwgZXZlbnQ6IEV2ZW50LCBjdXJyZW50U2VsZWN0ZWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgU2hpZnQga2V5IGlzIHNlbGVjdGVkIGFuZCBuZWVkIHRvIHNlbGVjdCBldmVyeXRoaW5nIGluIGJldHdlZW5cbiAgICAgIGxldCBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50ID0gZXZlbnQgYXMgTW91c2VFdmVudDtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIG1vdXNlRXZlbnQgJiYgbW91c2VFdmVudC5zaGlmdEtleSAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIGxldCBmaXJzdEluZGV4OiBudW1iZXIgPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAoY3VycmVudFNlbGVjdGVkID4gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICBmaXJzdEluZGV4ID0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgbGFzdEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGNsaWNraW5nIGEgY2hlY2tib3ggYmVoaW5kIHRoZSBpbml0aWFsIGNoZWNrLCB0aGVuIHRvZ2dsZSBhbGwgc2VsZWN0aW9ucyBleHBlY3QgdGhlIGluaXRpYWwgY2hlY2tib3hcbiAgICAgICAgLy8gZWxzZSB0aGUgY2hlY2tib3hlcyBjbGlja2VkIGFyZSBhbGwgYWZ0ZXIgdGhlIGluaXRpYWwgb25lXG4gICAgICAgIGlmICgodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID49IGN1cnJlbnRTZWxlY3RlZCAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA+IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCkgfHxcbiAgICAgICAgICAgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8PSBjdXJyZW50U2VsZWN0ZWQgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPCB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXgpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+IGN1cnJlbnRTZWxlY3RlZCkgfHwgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8IGN1cnJlbnRTZWxlY3RlZCkpIHtcbiAgICAgICAgICAvLyBjaGFuZ2UgaW5kZXhlcyBkZXBlbmRpbmcgb24gd2hlcmUgdGhlIG5leHQgY2hlY2tib3ggaXMgc2VsZWN0ZWQgKGJlZm9yZSBvciBhZnRlcilcbiAgICAgICAgICBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID4gY3VycmVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBsYXN0SW5kZXgtLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgICAgZmlyc3RJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93U2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzUm93U2VsZWN0ZWQodGhpcy5fZGF0YVtpXSk7XG4gICAgICAgICAgICAvLyBpZiByb3cgaXMgc2VsZWN0ZWQgYW5kIGZpcnN0IGNoZWNrYm94IHdhcyBzZWxlY3RlZFxuICAgICAgICAgICAgLy8gb3IgaWYgcm93IHdhcyB1bnNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgdW5zZWxlY3RlZFxuICAgICAgICAgICAgLy8gd2UgaWdub3JlIHRoZSB0b2dnbGVcbiAgICAgICAgICAgIGlmICgodGhpcy5fZmlyc3RDaGVja2JveFZhbHVlICYmICFyb3dTZWxlY3RlZCkgfHxcbiAgICAgICAgICAgICAgICAoIXRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSAmJiByb3dTZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQpIHtcbiAgICAgICAgICAgICAgLy8gZWxzZSBpZiB0aGUgY2hlY2tib3ggc2VsZWN0ZWQgd2FzIGluIHRoZSBtaWRkbGUgb2YgdGhlIGxhc3Qgc2VsZWN0aW9uIGFuZCB0aGUgZmlyc3Qgc2VsZWN0aW9uXG4gICAgICAgICAgICAgIC8vIHRoZW4gd2UgdW5kbyB0aGUgc2VsZWN0aW9uc1xuICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRTZWxlY3RlZCA+PSB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggJiYgY3VycmVudFNlbGVjdGVkIDw9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSB8fFxuICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTZWxlY3RlZCA8PSB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggJiYgY3VycmVudFNlbGVjdGVkID49IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQgPSB0cnVlO1xuICAgICAgLy8gaWYgc2hpZnQgd2FzbnQgcHJlc3NlZCwgdGhlbiB3ZSB0YWtlIHRoZSBlbGVtZW50IGNoZWNrZWQgYXMgdGhlIGZpcnN0IHJvd1xuICAgICAgLy8gaW5jYXNlIHRoZSBuZXh0IGNsaWNrIHVzZXMgc2hpZnRcbiAgICAgIH0gZWxzZSBpZiAobW91c2VFdmVudCAmJiAhbW91c2VFdmVudC5zaGlmdEtleSkge1xuICAgICAgICB0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgPSB0aGlzLl9kb1NlbGVjdGlvbihyb3csIGN1cnJlbnRTZWxlY3RlZCk7XG4gICAgICAgIHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgb25zZWxlY3RzdGFydCBtZXRob2Qgb2YgdGhlIGRvY3VtZW50IHNvIG90aGVyIHRleHQgb24gdGhlIHBhZ2VcbiAgICogZG9lc24ndCBnZXQgc2VsZWN0ZWQgd2hlbiBkb2luZyBzaGlmdCBzZWxlY3Rpb25zLlxuICAgKi9cbiAgZGlzYWJsZVRleHRTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9kb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgb3JpZ2luYWwgb25zZWxlY3RzdGFydCBtZXRob2QuXG4gICAqL1xuICBlbmFibGVUZXh0U2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZW1pdHMgdGhlIG9uUm93Q2xpY2tFdmVudCB3aGVuIGEgcm93IGlzIGNsaWNrZWRcbiAgICogaWYgY2xpY2thYmxlIGlzIHRydWUgYW5kIHNlbGVjdGFibGUgaXMgZmFsc2UgdGhlbiBzZWxlY3QgdGhlIHJvd1xuICAgKi9cbiAgaGFuZGxlUm93Q2xpY2socm93OiBhbnksIGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsaWNrYWJsZSkge1xuICAgICAgLy8gaWdub3JpbmcgbGludGluZyBydWxlcyBoZXJlIGJlY2F1c2UgYXR0cmlidXRlIGl0IGFjdHVhbGx5IG51bGwgb3Igbm90IHRoZXJlXG4gICAgICAvLyBjYW4ndCBjaGVjayBmb3IgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzcmNFbGVtZW50OiBhbnkgPSBldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGlmIChzcmNFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RvcFJvd0NsaWNrJykgPT09IG51bGwgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdtYXQtcHNldWRvLWNoZWNrYm94Jykge1xuICAgICAgICB0aGlzLm9uUm93Q2xpY2suZW1pdCh7XG4gICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGhhbmRsZSBmb3Igc29ydCBjbGljayBldmVudCBpbiBjb2x1bW4gaGVhZGVycy5cbiAgICovXG4gIGhhbmRsZVNvcnQoY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc29ydEJ5ID09PSBjb2x1bW4pIHtcbiAgICAgIHRoaXMuX3NvcnRPcmRlciA9IHRoaXMuX3NvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nID9cbiAgICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZyA6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc29ydEJ5ID0gY29sdW1uO1xuICAgICAgdGhpcy5fc29ydE9yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICAgIH1cbiAgICB0aGlzLm9uU29ydENoYW5nZS5uZXh0KHsgbmFtZTogdGhpcy5fc29ydEJ5Lm5hbWUsIG9yZGVyOiB0aGlzLl9zb3J0T3JkZXIgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFsbCBrZXl1cCBldmVudHMgd2hlbiBmb2N1c2luZyBhIGRhdGEgdGFibGUgcm93XG4gICAqL1xuICBfcm93S2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHJvdzogYW55LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgLyoqIGlmIHVzZXIgcHJlc3NlcyBlbnRlciBvciBzcGFjZSwgdGhlIHJvdyBzaG91bGQgYmUgc2VsZWN0ZWQgKi9cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgdXAgYXJyb3csIHdlIGZvY3VzIHRoZSBwcmV2IHJvd1xuICAgICAgICAgKiB1bmxlc3MgaXRzIHRoZSBmaXJzdCByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKVtpbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuZnJvbVJvdyArIGluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgZG93biBhcnJvdywgd2UgZm9jdXMgdGhlIG5leHQgcm93XG4gICAgICAgICAqIHVubGVzcyBpdHMgdGhlIGxhc3Qgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPCAodGhpcy5fcm93cy50b0FycmF5KCkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKVtpbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuZnJvbVJvdyArIGluZGV4IDwgdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbHVtbiBpbmRleCBvZiB0aGUgZHJhZ2dlZCBjb2x1bW4gYW5kIGluaXRpYWwgY2xpZW50WCBvZiBjb2x1bW5cbiAgICovXG4gIF9oYW5kbGVTdGFydENvbHVtbkRyYWcoaW5kZXg6IG51bWJlciwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICB0aGlzLl9yZXNpemluZ0NvbHVtbiA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgbmV3IHdpZHRoIGRlcGVuZGluZyBvbiBuZXcgY2xpZW50WCBvZiBkcmFnZ2VyIGNvbHVtblxuICAgKi9cbiAgX2hhbmRsZUNvbHVtbkRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQgfCBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBjaGVjayBpZiB0aGVyZSB3YXMgYmVlbiBhIHNlcGFyYXRvciBjbGlja2VkIGZvciByZXNpemVcbiAgICBpZiAodGhpcy5fcmVzaXppbmdDb2x1bW4gIT09IHVuZGVmaW5lZCAmJiBldmVudC5jbGllbnRYID4gMCkge1xuICAgICAgbGV0IHhQb3NpdGlvbjogbnVtYmVyID0gZXZlbnQuY2xpZW50WDtcbiAgICAgIC8vIGNoZWNrcyBpZiB0aGUgc2VwYXJhdG9yIGlzIGJlaW5nIG1vdmVkIHRvIHRyeSBhbmQgcmVzaXplIHRoZSBjb2x1bW4sIGVsc2UgZG9udCBkbyBhbnl0aGluZ1xuICAgICAgaWYgKHhQb3NpdGlvbiA+IDAgJiYgdGhpcy5fY29sdW1uQ2xpZW50WCA+IDAgJiYgKHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFgpICE9PSAwKSB7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbmV3IHdpZHRoIGRlcGVuZGluZyBpZiBtYWtpbmcgdGhlIGNvbHVtbiBiaWdnZXIgb3Igc21hbGxlclxuICAgICAgICBsZXQgcHJvcG9zZWRNYW51YWxXaWR0aDogbnVtYmVyID0gdGhpcy5fd2lkdGhzW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS52YWx1ZSArICh4UG9zaXRpb24gLSB0aGlzLl9jb2x1bW5DbGllbnRYKTtcbiAgICAgICAgLy8gaWYgdGhlIHByb3Bvc2VkIG5ldyB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIHByb2plY3RlZCBtaW4gd2lkdGggb2YgdGhlIGNvbHVtbiwgdXNlIHByb2plY3RlZCBtaW4gd2lkdGhcbiAgICAgICAgaWYgKHByb3Bvc2VkTWFudWFsV2lkdGggPCB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnByb2plY3RlZFdpZHRoKSB7XG4gICAgICAgICAgcHJvcG9zZWRNYW51YWxXaWR0aCA9IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9yZXNpemluZ0NvbHVtbl0ucHJvamVjdGVkV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5zW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS53aWR0aCA9IHByb3Bvc2VkTWFudWFsV2lkdGg7XG4gICAgICAgIC8vIHVwZGF0ZSBuZXcgeCBwb3NpdGlvbiBmb3IgdGhlIHJlc2l6ZWQgY29sdW1uXG4gICAgICAgIHRoaXMuX29uQ29sdW1uUmVzaXplLm5leHQoeFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBkcmFnZ2VkIGZsYWdzXG4gICAqL1xuICBfaGFuZGxlRW5kQ29sdW1uRHJhZygpOiB2b2lkIHtcbiAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Jlc2l6aW5nQ29sdW1uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmV2ZW50IHRoZSBkZWZhdWx0IGV2ZW50c1xuICAgKi9cbiAgYmxvY2tFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TmVzdGVkVmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkgfHwgIW5hbWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIGxldCBzcGxpdE5hbWU6IHN0cmluZ1tdID0gbmFtZS5zcGxpdCgvXFwuKC4rKS8sIDIpO1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE5lc3RlZFZhbHVlKHNwbGl0TmFtZVsxXSwgdmFsdWVbc3BsaXROYW1lWzBdXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVtuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRG9lcyB0aGUgYWN0dWFsIFJvdyBTZWxlY3Rpb25cbiAgICovXG4gIHByaXZhdGUgX2RvU2VsZWN0aW9uKHJvdzogYW55LCByb3dJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IHdhc1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdyk7XG4gICAgaWYgKCF3YXNTZWxlY3RlZCkge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmNsZWFyTW9kZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICAgIHJvdyA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICB9KVswXTtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy52YWx1ZS5pbmRleE9mKHJvdyk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTtcbiAgICB0aGlzLm9uUm93U2VsZWN0LmVtaXQoe3Jvdzogcm93LCBpbmRleDogcm93SW5kZXgsIHNlbGVjdGVkOiAhd2FzU2VsZWN0ZWR9KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHJldHVybiAhd2FzU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFsbCB0aGUgc3RhdGUgb2YgYWxsIGNoZWNrYm94ZXNcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gdHlwZW9mIHRoaXMuX2RhdGEuZmluZCgoZDogYW55KSA9PiAhdGhpcy5pc1Jvd1NlbGVjdGVkKGQpKSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5fZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSB3aWR0aHMgZm9yIGNvbHVtbnMgYW5kIGNlbGxzIGRlcGVuZGluZyBvbiBjb250ZW50XG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVXaWR0aHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbEVsZW1lbnRzICYmIHRoaXMuX2NvbEVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fd2lkdGhzID0gW107XG4gICAgICB0aGlzLl9jb2xFbGVtZW50cy5mb3JFYWNoKChjb2w6IFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZHRoKGluZGV4LCB0aGlzLl9jYWxjdWxhdGVXaWR0aCgpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkaHRzKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyBjb2x1bW5zIGFmdGVyIGNhbGN1bGF0aW9uIHRvIHNlZSBpZiB0aGV5IG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfYWRqdXN0Q29sdW1uV2lkaHRzKCk6IHZvaWQge1xuICAgIGxldCBmaXhlZFRvdGFsV2lkdGg6IG51bWJlciA9IDA7XG4gICAgLy8gZ2V0IHRoZSBudW1iZXIgb2YgdG90YWwgY29sdW1ucyB0aGF0IGhhdmUgZmxleGlibGUgd2lkdGhzIChub3QgZml4ZWQgb3IgaGlkZGVuKVxuICAgIGxldCBmbGV4aWJsZVdpZHRoczogbnVtYmVyID0gdGhpcy5fd2lkdGhzLmZpbHRlcigod2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5jb2x1bW5zW2luZGV4XS5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHdpZHRoLmxpbWl0IHx8IHdpZHRoLm1heCB8fCB3aWR0aC5taW4pIHtcbiAgICAgICAgZml4ZWRUb3RhbFdpZHRoICs9IHdpZHRoLnZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuICF3aWR0aC5saW1pdCAmJiAhd2lkdGgubWF4ICYmICF3aWR0aC5taW47XG4gICAgfSkubGVuZ3RoO1xuICAgIC8vIGNhbGN1bGF0ZSBob3cgbXVjaCBwaXhlcyBhcmUgbGVmdCB0aGF0IGNvdWxkIGJlIHNwcmVhZCBhY3Jvc3NcbiAgICAvLyB0aGUgZmxleGlibGUgY29sdW1uc1xuICAgIGxldCByZWNhbGN1bGF0ZUhvc3RXaWR0aDogbnVtYmVyID0gMDtcbiAgICBpZiAoZml4ZWRUb3RhbFdpZHRoIDwgdGhpcy5ob3N0V2lkdGgpIHtcbiAgICAgIHJlY2FsY3VsYXRlSG9zdFdpZHRoID0gdGhpcy5ob3N0V2lkdGggLSBmaXhlZFRvdGFsV2lkdGg7XG4gICAgfVxuICAgIC8vIGlmIHdlIGhhdmUgZmxleGlibGUgY29sdW1ucyBhbmQgcGl4ZWxzIHRvIHNwYXJlIG9uIHRoZW1cbiAgICAvLyB3ZSB0cnkgYW5kIHNwcmVhZCB0aGUgcGl4ZWxzIGFjcm9zcyB0aGVtXG4gICAgaWYgKGZsZXhpYmxlV2lkdGhzICYmIHJlY2FsY3VsYXRlSG9zdFdpZHRoKSB7XG4gICAgICBsZXQgbmV3VmFsdWU6IG51bWJlciA9IE1hdGguZmxvb3IocmVjYWxjdWxhdGVIb3N0V2lkdGggLyBmbGV4aWJsZVdpZHRocyk7XG4gICAgICBsZXQgYWRqdXN0ZWROdW1iZXI6IG51bWJlciA9IDA7XG4gICAgICAvLyBhZGp1c3QgdGhlIGNvbHVtbiB3aWR0aHMgd2l0aCB0aGUgc3ByZWFkIHBpeGVsc1xuICAgICAgdGhpcy5fd2lkdGhzLmZvckVhY2goKGNvbFdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5tYXggJiYgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS52YWx1ZSA+IG5ld1ZhbHVlIHx8XG4gICAgICAgICAgICB0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLm1pbiAmJiB0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLnZhbHVlIDwgbmV3VmFsdWUgfHxcbiAgICAgICAgICAgICF0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLmxpbWl0KSB7XG4gICAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkdGgoY29sV2lkdGguaW5kZXgsIG5ld1ZhbHVlKTtcbiAgICAgICAgICBhZGp1c3RlZE51bWJlcisrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBzdGlsbCBjb2x1bW5zIHRoYXQgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWQsIHdlIHN0YXJ0IG92ZXJcbiAgICAgIGxldCBuZXdGbGV4aWJsZVdpZHRoczogbnVtYmVyID0gdGhpcy5fd2lkdGhzLmZpbHRlcigod2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoKSA9PiB7XG4gICAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heDtcbiAgICAgIH0pLmxlbmd0aDtcbiAgICAgIGlmIChuZXdGbGV4aWJsZVdpZHRocyAhPT0gYWRqdXN0ZWROdW1iZXIgJiYgbmV3RmxleGlibGVXaWR0aHMgIT09IGZsZXhpYmxlV2lkdGhzKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGEgc2luZ2xlIGNvbHVtbiB0byBzZWUgaWYgaXQgY2FuIGJlIHJlY2FsY3VsYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpZHRoc1tpbmRleF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBsaW1pdDogZmFsc2UsXG4gICAgICBtaW46IGZhbHNlLFxuICAgICAgbWF4OiBmYWxzZSxcbiAgICB9O1xuICAgIC8vIGZsYWcgdG8gc2VlIGlmIHdlIG5lZWQgdG8gc2tpcCB0aGUgbWluIHdpZHRoIHByb2plY3Rpb25cbiAgICAvLyBkZXBlbmRpbmcgaWYgYSB3aWR0aCBvciBtaW4gd2lkdGggaGFzIGJlZW4gcHJvdmlkZWRcbiAgICBsZXQgc2tpcE1pbldpZHRoUHJvamVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmNvbHVtbnNbaW5kZXhdKSB7XG4gICAgICAvLyBpZiB0aGUgcHJvdmlkZWQgd2lkdGggaGFzIG1pbi9tYXgsIHRoZW4gd2UgY2hlY2sgdG8gc2VlIGlmIHdlIG5lZWQgdG8gc2V0IGl0XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCB3aWR0aE9wdHM6IElUZERhdGFUYWJsZUNvbHVtbldpZHRoID0gPElUZERhdGFUYWJsZUNvbHVtbldpZHRoPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBjb25maWd1cmVkIG1pbiwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgc2tpcE1pbldpZHRoUHJvamVjdGlvbiA9ICh3aWR0aE9wdHMgJiYgISF3aWR0aE9wdHMubWluKTtcbiAgICAgICAgaWYgKHdpZHRoT3B0cyAmJiB3aWR0aE9wdHMubWluID49IHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gd2lkdGhPcHRzLm1pbjtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1pbiA9IHRydWU7XG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbW9yZSB0aGFuIHRoZSBjb25maWd1cmVkIG1heCwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1heCA8PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5tYXg7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5tYXggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAvLyBpZiBpdCBoYXMgYSBmaXhlZCB3aWR0aCwgdGhlbiB3ZSBqdXN0IHNldCBpdFxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IDxudW1iZXI+dGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aDtcbiAgICAgICAgc2tpcE1pbldpZHRoUHJvamVjdGlvbiA9IHRoaXMuX3dpZHRoc1tpbmRleF0ubGltaXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB0aGVyZSB3YXNuJ3QgYW55IHdpZHRoIG9yIG1pbiB3aWR0aCBwcm92aWRlZCwgd2Ugc2V0IGEgbWluIHRvIHdoYXQgdGhlIGNvbHVtbiB3aWR0aCBtaW4gc2hvdWxkIGJlXG4gICAgaWYgKCFza2lwTWluV2lkdGhQcm9qZWN0aW9uICYmXG4gICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPCB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbaW5kZXhdLnByb2plY3RlZFdpZHRoKSB7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW2luZGV4XS5wcm9qZWN0ZWRXaWR0aDtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubWluID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubGltaXQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJpYyBtZXRob2QgdG8gY2FsY3VsYXRlIGNvbHVtbiB3aWR0aFxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlV2lkdGgoKTogbnVtYmVyIHtcbiAgICBsZXQgcmVuZGVyZWRDb2x1bW5zOiBJVGREYXRhVGFibGVDb2x1bW5bXSA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbDogSVRkRGF0YVRhYmxlQ29sdW1uKSA9PiAhY29sLmhpZGRlbik7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5ob3N0V2lkdGggLyByZW5kZXJlZENvbHVtbnMubGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2FsY3VsYXRlIHRoZSByb3dzIHRvIGJlIHJlbmRlcmVkIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlVmlydHVhbFJvd3MoKTogdm9pZCB7XG4gICAgbGV0IHNjcm9sbGVkUm93czogbnVtYmVyID0gMDtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuICAgICAgbGV0IHJvd0hlaWdodFN1bTogbnVtYmVyID0gMDtcbiAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgcm93cyB0byBzZWUgaWYgd2UgaGF2ZSB0aGVpciBoZWlnaHQgY2FjaGVkXG4gICAgICAvLyBhbmQgc3VtIHRoZW0gYWxsIHRvIGNhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKGQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgcm93cyBhdCBmaXJzdCBhbmQgYXNzdW1lIGFsbFxuICAgICAgICAvLyByb3dzIGFyZSB0aGUgc2FtZSBoZWlnaHQgYXMgdGhlIGZpcnN0IG9uZVxuICAgICAgICBpZiAoIXRoaXMuX3Jvd0hlaWdodENhY2hlW2ldKSB7XG4gICAgICAgICAgdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaV0gPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVswXSB8fCBURF9WSVJUVUFMX0RFRkFVTFRfUk9XX0hFSUdIVDtcbiAgICAgICAgfVxuICAgICAgICByb3dIZWlnaHRTdW0gKz0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaV07XG4gICAgICAgIC8vIGNoZWNrIGhvdyBtYW55IHJvd3MgaGF2ZSBiZWVuIHNjcm9sbGVkXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCAtIHJvd0hlaWdodFN1bSA+IDApIHtcbiAgICAgICAgICBzY3JvbGxlZFJvd3MrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IHJvd0hlaWdodFN1bTtcbiAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCByb3cgdG8gYmUgcmVuZGVyZWQgdGFraW5nIGludG8gYWNjb3VudCB0aGUgcm93IG9mZnNldFxuICAgICAgbGV0IGZyb21Sb3c6IG51bWJlciA9IHNjcm9sbGVkUm93cyAtIFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IGZyb21Sb3cgPiAwID8gZnJvbVJvdyA6IDA7XG5cbiAgICAgIGxldCBob3N0SGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9ob3N0SGVpZ2h0O1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgLy8gY2FsY3VsYXRlIGhvdyBtYW55IHJvd3MgY2FuIGZpdCBpbiB0aGUgdmlld3BvcnRcbiAgICAgIHdoaWxlIChob3N0SGVpZ2h0ID4gMCkge1xuICAgICAgICBob3N0SGVpZ2h0IC09IHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICAgIC8vIHNldCB0aGUgbGFzdCByb3cgdG8gYmUgcmVuZGVyZWQgdGFraW5nIGludG8gYWNjb3VudCB0aGUgcm93IG9mZnNldFxuICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSAoaW5kZXggLSAxKSArIChURF9WSVJUVUFMX09GRlNFVCAqIDIpO1xuICAgICAgbGV0IHRvUm93OiBudW1iZXIgPSByYW5nZSArIHRoaXMuZnJvbVJvdztcbiAgICAgIC8vIGlmIGxhc3Qgcm93IGlzIGdyZWF0ZXIgdGhhbiB0aGUgdG90YWwgbGVuZ3RoLCB0aGVuIHdlIHVzZSB0aGUgdG90YWwgbGVuZ3RoXG4gICAgICBpZiAoaXNGaW5pdGUodG9Sb3cpICYmIHRvUm93ID4gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdG9Sb3cgPSB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHRvUm93KSkge1xuICAgICAgICB0b1JvdyA9IFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgfVxuICAgICAgdGhpcy5fdG9Sb3cgPSB0b1JvdztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IDA7XG4gICAgICB0aGlzLl90b1JvdyA9IDA7XG4gICAgfVxuXG4gICAgbGV0IG9mZnNldDogbnVtYmVyID0gMDtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIHByb3BlciBvZmZzZXQgZGVwZW5kaW5nIG9uIGhvdyBtYW55IHJvd3MgaGF2ZSBiZWVuIHNjcm9sbGVkXG4gICAgaWYgKHNjcm9sbGVkUm93cyA+IFREX1ZJUlRVQUxfT0ZGU0VUKSB7XG4gICAgICBmb3IgKGxldCBpbmRleDogbnVtYmVyID0gMDsgaW5kZXggPCB0aGlzLmZyb21Sb3c7IGluZGV4KyspIHtcbiAgICAgICAgb2Zmc2V0ICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9vZmZzZXRUcmFuc2Zvcm0gPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd0cmFuc2xhdGVZKCcgKyAob2Zmc2V0IC0gdGhpcy50b3RhbEhlaWdodCkgKyAncHgpJyk7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3ZpcnR1YWxEYXRhID0gdGhpcy5kYXRhLnNsaWNlKHRoaXMuZnJvbVJvdywgdGhpcy50b1Jvdyk7XG4gICAgfVxuICAgIC8vIG1hcmsgZm9yIGNoZWNrIGF0IHRoZSBlbmQgb2YgdGhlIHF1ZXVlIHNvIHdlIGFyZSBzdXJlXG4gICAgLy8gdGhhdCB0aGUgY2hhbmdlcyB3aWxsIGJlIG1hcmtlZFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==