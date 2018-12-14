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
        var _this = this;
        // check if the scroll has been reset when element is hidden
        if (this._scrollVerticalOffset - this._scrollableDiv.nativeElement.scrollTop > 5) {
            // scroll back to the top if element has been reset
            this._onVerticalScroll.next(0);
        }
        if (this._elementRef.nativeElement) {
            /** @type {?} */
            var newHostWidth_1 = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth_1) {
                setTimeout(function () {
                    _this._hostWidth = newHostWidth_1;
                    _this._onResize.next();
                }, 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFDM0UsaUJBQWlCLEVBQUUsU0FBUyxFQUM1QixlQUFlLEVBQWlDLFNBQVMsRUFBRSxNQUFNLEVBQ2pFLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0UsT0FBTyxFQUE0QixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXBGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTFGLE9BQU8sRUFBeUIseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0lBR3ZGLFdBQVksS0FBSztJQUNqQixZQUFhLE1BQU07Ozs7OztBQUdyQiw2Q0FHQzs7O0lBRkMsc0NBQWE7O0lBQ2Isc0NBQWE7Ozs7O0FBR2Ysd0NBV0M7OztJQVZDLGtDQUFhOztJQUNiLG1DQUFjOztJQUNkLHFD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OENBQXdDOzs7OztJQUd4Qyx5Q0FBbUM7O0lBQ25DLHVDQUFvQzs7SUFDcEMsMENBQWdGOzs7OztJQUdoRix1REFBaUQ7O0lBQ2pELGtEQUF3Qzs7SUFDeEMsbURBQXlDOztJQUN6QyxtREFBNkM7Ozs7O0lBRzdDLDRDQUEwRjs7SUFDMUYsMENBQW1HOztJQUVuRyw4Q0FBdUQ7O0lBRXZELDRDQUFtRjs7SUFFbkYscUNBQWlGOzs7Ozs7O0lBNExqRiw0Q0FDb0Y7Ozs7Ozs7SUFPcEYsMkNBQXNIOzs7Ozs7O0lBT3RILDBDQUF3SDs7Ozs7OztJQU94SCwyQ0FDaUY7Ozs7Ozs7SUFjakYsMkNBRUM7O0lBZFcseUNBQW9EOztJQUNwRCwyQ0FBK0I7O0lBQy9CLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICAgICAgIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCxcbiAgICAgICAgIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWYsIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdCwgSW5qZWN0LFxuICAgICAgICAgT3B0aW9uYWwsIFZpZXdDaGlsZHJlbiwgRWxlbWVudFJlZiwgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIERPV05fQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLXRhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIHtcbiAgQXNjZW5kaW5nID0gJ0FTQycsXG4gIERlc2NlbmRpbmcgPSAnREVTQycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGgge1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIG51bWVyaWM/OiBib29sZWFuO1xuICBmb3JtYXQ/OiAodmFsdWU6IGFueSkgPT4gYW55O1xuICBuZXN0ZWQ/OiBib29sZWFuO1xuICBzb3J0YWJsZT86IGJvb2xlYW47XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGZpbHRlcj86IGJvb2xlYW47XG4gIHdpZHRoPzogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQge1xuICByb3c6IGFueTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQge1xuICByb3dzOiBhbnlbXTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudCB7XG4gIHJvdzogYW55O1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbENvbHVtbldpZHRoIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbGltaXQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIG1pbj86IGJvb2xlYW47XG4gIG1heD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gc2V0IHRoZSByb3dzIG9mZnNldCBiZWZvcmUgYW5kIGFmdGVyIHRoZSB2aWV3cG9ydFxuICovXG5jb25zdCBURF9WSVJUVUFMX09GRlNFVDogbnVtYmVyID0gMjtcblxuLyoqXG4gKiBDb25zdGFudCB0byBzZXQgZGVmYXVsdCByb3cgaGVpZ2h0IGlmIG5vbmUgaXMgcHJvdmlkZWRcbiAqL1xuY29uc3QgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ6IG51bWJlciA9IDQ4O1xuXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZERhdGFUYWJsZU1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGREYXRhVGFibGVCYXNlLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGREYXRhVGFibGVDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1kYXRhLXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgX1RkRGF0YVRhYmxlTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKiByZXNwb25zaXZlIHdpZHRoIGNhbGN1bGF0aW9ucyAqL1xuICBwcml2YXRlIF9yZXNpemVTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Jvd3NDaGFuZ2VkU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9ob3N0V2lkdGg6IG51bWJlciA9IDA7XG5cbiAgLyoqIG1hbnVhbGx5IHJlc2l6YWJsZSBjb2x1bW5zICovXG4gIHByaXZhdGUgX3Jlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sdW1uQ2xpZW50WDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY29sdW1uUmVzaXplU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZXNpemluZ0NvbHVtbjogbnVtYmVyO1xuICBwcml2YXRlIF9vbkNvbHVtblJlc2l6ZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIGdldCByZXNpemluZ0NvbHVtbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemluZ0NvbHVtbjtcbiAgfVxuXG4gIGdldCBob3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAvLyBpZiB0aGUgY2hlY2tib3hlcyBhcmUgcmVuZGVyZWQsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZWlyIHdpZHRoXG4gICAgLy8gZnJvbSB0aGUgdG90YWwgd2lkdGggdG8gY2FsY3VsYXRlIHByb3Blcmx5XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hvc3RXaWR0aCAtIDQyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faG9zdFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2lkdGhzOiBJSW50ZXJuYWxDb2x1bW5XaWR0aFtdID0gW107XG4gIHByaXZhdGUgX29uUmVzaXplOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogY29sdW1uIGhlYWRlciByZXBvc2l0aW9uIGFuZCB2aWV3cG9vcnQgKi9cbiAgcHJpdmF0ZSBfdmVydGljYWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2hvcml6b250YWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbEhvcml6b250YWxPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfb25Ib3Jpem9udGFsU2Nyb2xsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX29uVmVydGljYWxTY3JvbGw6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICAvLyBBcnJheSBvZiBjYWNoZWQgcm93IGhlaWdodHMgdG8gYWxsb3cgZHluYW1pYyByb3cgaGVpZ2h0c1xuICBwcml2YXRlIF9yb3dIZWlnaHRDYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgLy8gVG90YWwgcHNldWRvIGhlaWdodCBvZiBhbGwgdGhlIGVsZW1lbnRzXG4gIHByaXZhdGUgX3RvdGFsSGVpZ2h0OiBudW1iZXIgPSAwO1xuICAvLyBUb3RhbCBob3N0IGhlaWdodCBmb3IgdGhlIHZpZXdwb3J0XG4gIHByaXZhdGUgX2hvc3RIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8vIFNjcm9sbGVkIHZlcnRpY2FsIHBpeGVsc1xuICBwcml2YXRlIF9zY3JvbGxWZXJ0aWNhbE9mZnNldDogbnVtYmVyID0gMDtcbiAgLy8gU3R5bGUgdG8gbW92ZSB0aGUgY29udGVudCBhIGNlcnRhaW4gb2Zmc2V0IGRlcGVuZGluZyBvbiBzY3JvbGxlZCBvZmZzZXRcbiAgcHJpdmF0ZSBfb2Zmc2V0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XG5cbiAgLy8gVmFyaWFibGVzIHRoYXQgc2V0IGZyb20gYW5kIHRvIHdoaWNoIHJvd3Mgd2lsbCBiZSByZW5kZXJlZFxuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0IHN0eWxlIHdpdGggYSBwcm9wZXIgY2FsY3VsYXRpb24gb24gaG93IG11Y2ggaXQgc2hvdWxkIG1vdmVcbiAgICogb3ZlciB0aGUgeSBheGlzIG9mIHRoZSB0b3RhbCBoZWlnaHRcbiAgICovXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VHJhbnNmb3JtO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFzc3VtZWQgdG90YWwgaGVpZ2h0IG9mIHRoZSByb3dzXG4gICAqL1xuICBnZXQgdG90YWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5pdGlhbCByb3cgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgZ2V0IGZyb21Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbVJvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXN0IHJvdyB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBnZXQgdG9Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Sb3c7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZXNTdWJzOiBTdWJzY3JpcHRpb247XG4gIC8qKiBpbnRlcm5hbCBhdHRyaWJ1dGVzICovXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICAvLyBkYXRhIHZpcnR1YWxseSBpdGVyYXRlZCBieSBjb21wb25lbnRcbiAgcHJpdmF0ZSBfdmlydHVhbERhdGE6IGFueVtdO1xuICBwcml2YXRlIF9jb2x1bW5zOiBJVGREYXRhVGFibGVDb2x1bW5bXTtcbiAgcHJpdmF0ZSBfc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGlja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9hbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHNvcnRpbmcgKi9cbiAgcHJpdmF0ZSBfc29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc29ydEJ5OiBJVGREYXRhVGFibGVDb2x1bW47XG4gIHByaXZhdGUgX3NvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG5cbiAgLyoqIHNoaWZ0IHNlbGVjdCAqL1xuICBwcml2YXRlIF9zaGlmdFByZXZpb3VzbHlQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xhc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RDaGVja2JveFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHRlbXBsYXRlIGZldGNoaW5nIHN1cHBvcnQgKi9cbiAgcHJpdmF0ZSBfdGVtcGxhdGVNYXA6IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSkgX3RlbXBsYXRlczogUXVlcnlMaXN0PFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmU+O1xuXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVEaXYnKSBfc2Nyb2xsYWJsZURpdjogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCdjb2x1bW5FbGVtZW50JykgX2NvbEVsZW1lbnRzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGRyZW4oVGREYXRhVGFibGVSb3dDb21wb25lbnQpIF9yb3dzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHNjcm9sbCBwb3NpdGlvbiB0byByZXBvc2l0aW9uIGNvbHVtbiBoZWFkZXJzXG4gICAqL1xuICBnZXQgY29sdW1uc0xlZnRTY3JvbGwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAqIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdmFsdWVzIGFyZSBzZWxlY3RlZC5cbiAgICovXG4gIGdldCBhbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB2YWx1ZXMgYXJlIG5vdCBkZXNlbGVjdGVkXG4gICAqIGFuZCBhdCBsZWFzdCBvbmUgaXMuXG4gICAqL1xuICBnZXQgaW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkYXRhPzoge1trZXk6IHN0cmluZ106IGFueX1bXVxuICAgKiBTZXRzIHRoZSBkYXRhIHRvIGJlIHJlbmRlcmVkIGFzIHJvd3MuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlID0gW107XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgdGhlIGRhdGEgaGFzIGNoYW5nZWRcbiAgICAgIHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB2aXJ0dWFsRGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxEYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbHVtbnM/OiBJVGREYXRhVGFibGVDb2x1bW5bXVxuICAgKiBTZXRzIGFkZGl0aW9uYWwgY29sdW1uIGNvbmZpZ3VyYXRpb24uIFtJVGREYXRhVGFibGVDb2x1bW4ubmFtZV0gaGFzIHRvIGV4aXN0IGluIFtkYXRhXSBhcyBrZXkuXG4gICAqIERlZmF1bHRzIHRvIFtkYXRhXSBrZXlzLlxuICAgKi9cbiAgQElucHV0KCdjb2x1bW5zJylcbiAgc2V0IGNvbHVtbnMoY29sczogSVRkRGF0YVRhYmxlQ29sdW1uW10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29scztcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJVGREYXRhVGFibGVDb2x1bW5bXSB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0RhdGEpIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcbiAgICAgIC8vIGlmIGNvbHVtbnMgaXMgdW5kZWZpbmVkLCB1c2Uga2V5IGluIFtkYXRhXSByb3dzIGFzIG5hbWUgYW5kIGxhYmVsIGZvciBjb2x1bW4gaGVhZGVycy5cbiAgICAgIGxldCByb3c6IGFueSA9IHRoaXMuX2RhdGFbMF07XG4gICAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGspKSB7XG4gICAgICAgICAgdGhpcy5fY29sdW1ucy5wdXNoKHsgbmFtZTogaywgbGFiZWw6IGsgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzaXphYmxlQ29sdW1ucz86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtYW51YWwgY29sdW1uIHJlc2l6ZS5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdyZXNpemFibGVDb2x1bW5zJylcbiAgc2V0IHJlc2l6YWJsZUNvbHVtbnMocmVzaXphYmxlQ29sdW1uczogYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVzaXphYmxlQ29sdW1ucyk7XG4gIH1cbiAgZ2V0IHJlc2l6YWJsZUNvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgc2VsZWN0aW9uIGV2ZW50cywgaG92ZXIgYW5kIHNlbGVjdGVkIHJvdyBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc2VsZWN0YWJsZScpXG4gIHNldCBzZWxlY3RhYmxlKHNlbGVjdGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNlbGVjdGFibGUpO1xuICB9XG4gIGdldCBzZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrYWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgY2xpY2sgZXZlbnRzLCBob3Zlci5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdjbGlja2FibGUnKVxuICBzZXQgY2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsaWNrYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjbGlja2FibGUpO1xuICB9XG4gIGdldCBjbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtdWx0aXBsZSByb3cgc2VsZWN0aW9uLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzb3J0YWJsZScpXG4gIHNldCBzb3J0YWJsZShzb3J0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNvcnRhYmxlKTtcbiAgfVxuICBnZXQgc29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRCeT86IHN0cmluZ1xuICAgKiBTZXRzIHRoZSBhY3RpdmUgc29ydCBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgnc29ydEJ5JylcbiAgc2V0IHNvcnRCeShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGNvbHVtbk5hbWUpO1xuICAgIGlmICghY29sdW1uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0QnldIG11c3QgYmUgYSB2YWxpZCBjb2x1bW4gbmFtZScpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgfVxuICBnZXQgc29ydEJ5Q29sdW1uKCk6IElUZERhdGFUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgdGhlIFtzb3J0QnldIGNvbHVtbi4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBsZXQgc29ydE9yZGVyOiBzdHJpbmcgPSBvcmRlciA/IG9yZGVyLnRvVXBwZXJDYXNlKCkgOiAnQVNDJztcbiAgICBpZiAoc29ydE9yZGVyICE9PSAnREVTQycgJiYgc29ydE9yZGVyICE9PSAnQVNDJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydE9yZGVyXSBtdXN0IGJlIGVtcHR5LCBBU0Mgb3IgREVTQycpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgP1xuICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuICBnZXQgc29ydE9yZGVyRW51bSgpOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlcjtcbiAgfVxuXG4gIGdldCBoYXNEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzb3J0Q2hhbmdlJykgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dTZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgc2VsZWN0ZWQvZGVzZWxlY3RlZC4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTZWxlY3RFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93U2VsZWN0Jykgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dDbGljaz86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93Q2xpY2snKSBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHNlbGVjdEFsbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQvZGVzZWxlY3RlZCBieSB0aGUgYWxsIGNoZWNrYm94LiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzZWxlY3RBbGwnKSBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21wYXJlV2l0aD86IGZ1bmN0aW9uKHJvdywgbW9kZWwpOiBib29sZWFuXG4gICAqIEFsbG93cyBjdXN0b20gY29tcGFyaXNvbiBiZXR3ZWVuIHJvdyBhbmQgbW9kZWwgdG8gc2VlIGlmIHJvdyBpcyBzZWxlY3RlZCBvciBub3RcbiAgICogRGVmYXVsdCBjb21wYXJhdGlvbiBpcyBieSByZWZlcmVuY2VcbiAgICovXG4gIEBJbnB1dCgnY29tcGFyZVdpdGgnKSBjb21wYXJlV2l0aDogKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiBib29sZWFuID0gKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHJvdyA9PT0gbW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgYW5kIHNjcm9sbCBldmVudHNcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnMgPSB0aGlzLl9vblJlc2l6ZS5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Jvd3MpIHtcbiAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KCkuZm9yRWFjaCgocm93OiBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XSA9IHJvdy5oZWlnaHQgKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgY29sdW1uIHJlc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICB0aGlzLl9jb2x1bW5SZXNpemVTdWJzID0gdGhpcy5fb25Db2x1bW5SZXNpemUuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICApLnN1YnNjcmliZSgoY2xpZW50WDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gY2xpZW50WDtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBzY3JvbGwgY29sdW1uIGhlYWRlciByZXBvc2l0aW9uXG4gICAgdGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMgPSB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKGhvcml6b250YWxTY3JvbGw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCA9IGhvcml6b250YWxTY3JvbGw7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHZpcnR1YWwgc2Nyb2xsIHJlbmRlcmluZ1xuICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3VicyA9IHRoaXMuX29uVmVydGljYWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGVtcGxhdGVzIGFuZCBzZXRzIHRoZW0gaW4gYSBtYXAgZm9yIGZhc3RlciBhY2Nlc3MuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlTWFwLnNldChcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVzLnRvQXJyYXkoKVtpXS50ZERhdGFUYWJsZVRlbXBsYXRlLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpW2ldLnRlbXBsYXRlUmVmLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGhvc3RzIG5hdGl2ZSBlbGVtZW50cyB3aWR0aHMgdG8gc2VlIGlmIGl0IGhhcyBjaGFuZ2VkIChyZXNpemUgY2hlY2spXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHNjcm9sbCBoYXMgYmVlbiByZXNldCB3aGVuIGVsZW1lbnQgaXMgaGlkZGVuXG4gICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC0gdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA+IDUpIHtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgZWxlbWVudCBoYXMgYmVlbiByZXNldFxuICAgICAgdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5uZXh0KDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBsZXQgbmV3SG9zdFdpZHRoOiBudW1iZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAvLyBpZiB0aGUgd2lkdGggaGFzIGNoYW5nZWQgdGhlbiB3ZSB0aHJvdyBhIHJlc2l6ZSBldmVudC5cbiAgICAgIGlmICh0aGlzLl9ob3N0V2lkdGggIT09IG5ld0hvc3RXaWR0aCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9ob3N0V2lkdGggPSBuZXdIb3N0V2lkdGg7XG4gICAgICAgICAgdGhpcy5fb25SZXNpemUubmV4dCgpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudCkge1xuICAgICAgbGV0IG5ld0hvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAvLyBpZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBoYXMgY2hhbmdlZCwgdGhlbiB3ZSBtYXJrIGZvciBjaGVja1xuICAgICAgaWYgKHRoaXMuX2hvc3RIZWlnaHQgIT09IG5ld0hvc3RIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5faG9zdEhlaWdodCA9IG5ld0hvc3RIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdG8gYW4gb2JzZXJ2YWJsZSB0aGF0IGNoZWNrcyBpZiBhbGwgcm93cyBoYXZlIGJlZW4gcmVuZGVyZWRcbiAgICogc28gd2UgY2FuIHN0YXJ0IGNhbGN1bGF0aW5nIHRoZSB3aWR0aHNcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMgPSB0aGlzLl9yb3dzLmNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vblJlc2l6ZS5uZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgb2JzZXJ2YWJsZXMgd2hlbiBkYXRhIHRhYmxlIGlzIGRlc3Ryb3llZFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVydGljYWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jvd3NDaGFuZ2VkU3Vicykge1xuICAgICAgdGhpcy5fcm93c0NoYW5nZWRTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZUNoYW5nZXNTdWJzKSB7XG4gICAgICB0aGlzLl92YWx1ZUNoYW5nZXNTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGdldHMgZXhlY3V0ZWQgZXZlcnkgdGltZSB0aGVyZSBpcyBhIHNjcm9sbCBldmVudFxuICAgKiBDYWxscyB0aGUgc2Nyb2xsIG9ic2VydmFibGVcbiAgICovXG4gIGhhbmRsZVNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGxldCBob3Jpem9udGFsU2Nyb2xsOiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAhPT0gaG9yaXpvbnRhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwubmV4dChob3Jpem9udGFsU2Nyb2xsKTtcbiAgICAgIH1cbiAgICAgIGxldCB2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgIT09IHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX29uVmVydGljYWxTY3JvbGwubmV4dCh2ZXJ0aWNhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG5lZWRlZCBmb3IgdGhlIGNvbHVtbnMgdmlhIGluZGV4XG4gICAqL1xuICBnZXRDb2x1bW5XaWR0aChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fd2lkdGhzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRDZWxsVmFsdWUoY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4sIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChjb2x1bW4ubmVzdGVkID09PSB1bmRlZmluZWQgfHwgY29sdW1uLm5lc3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE5lc3RlZFZhbHVlKGNvbHVtbi5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVtjb2x1bW4ubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIG1ldGhvZCBmb3IgdGVtcGxhdGUgcmVmZXJlbmNlc1xuICAgKi9cbiAgIGdldFRlbXBsYXRlUmVmKG5hbWU6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVNYXAuZ2V0KG5hbWUpO1xuICAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgbW9kZWwgKG5nTW9kZWwpIG9mIGNvbXBvbmVudCBieSByZW1vdmluZyBhbGwgdmFsdWVzIGluIGFycmF5LlxuICAgKi9cbiAgY2xlYXJNb2RlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlLnNwbGljZSgwLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGRhdGEgdGFibGUgYW5kIHJlcmVuZGVycyBbZGF0YV0gYW5kIFtjb2x1bW5zXVxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhbGwgcm93cyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlLlxuICAgKi9cbiAgc2VsZWN0QWxsKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgdG9nZ2xlZFJvd3M6IGFueVtdID0gW107XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gc2tpcGluZyBhbHJlYWR5IHNlbGVjdGVkIHJvd3NcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2hlY2tpbmcgd2hpY2ggb25lcyBhcmUgYmVpbmcgdG9nZ2xlZFxuICAgICAgICBpZiAodGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgbGV0IG1vZGVsUm93OiBhbnkgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgICAgICB9KVswXTtcbiAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMudmFsdWUuaW5kZXhPZihtb2RlbFJvdyk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5vblNlbGVjdEFsbC5lbWl0KHtyb3dzOiB0b2dnbGVkUm93cywgc2VsZWN0ZWQ6IGNoZWNrZWR9KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByb3cgaXMgc2VsZWN0ZWRcbiAgICovXG4gIGlzUm93U2VsZWN0ZWQocm93OiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgIH0pLmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhIHJvdyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlIGlmIHRoZSByb3cgJ2lzU2VsZWN0YWJsZSdcbiAgICogaGFuZGxlcyBjbnRybCBjbGlja3MgYW5kIHNoaWZ0IGNsaWNrcyBmb3IgbXVsdGktc2VsZWN0XG4gICAqL1xuICBzZWxlY3Qocm93OiBhbnksIGV2ZW50OiBFdmVudCwgY3VycmVudFNlbGVjdGVkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIFNoaWZ0IGtleSBpcyBzZWxlY3RlZCBhbmQgbmVlZCB0byBzZWxlY3QgZXZlcnl0aGluZyBpbiBiZXR3ZWVuXG4gICAgICBsZXQgbW91c2VFdmVudDogTW91c2VFdmVudCA9IGV2ZW50IGFzIE1vdXNlRXZlbnQ7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBtb3VzZUV2ZW50ICYmIG1vdXNlRXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICBsZXQgZmlyc3RJbmRleDogbnVtYmVyID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZCA+IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4O1xuICAgICAgICAgIGxhc3RJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBjbGlja2luZyBhIGNoZWNrYm94IGJlaGluZCB0aGUgaW5pdGlhbCBjaGVjaywgdGhlbiB0b2dnbGUgYWxsIHNlbGVjdGlvbnMgZXhwZWN0IHRoZSBpbml0aWFsIGNoZWNrYm94XG4gICAgICAgIC8vIGVsc2UgdGhlIGNoZWNrYm94ZXMgY2xpY2tlZCBhcmUgYWxsIGFmdGVyIHRoZSBpbml0aWFsIG9uZVxuICAgICAgICBpZiAoKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+PSBjdXJyZW50U2VsZWN0ZWQgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPiB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXgpIHx8XG4gICAgICAgICAgICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPD0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4IDwgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KSkge1xuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPiBjdXJyZW50U2VsZWN0ZWQpIHx8ICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgLy8gY2hhbmdlIGluZGV4ZXMgZGVwZW5kaW5nIG9uIHdoZXJlIHRoZSBuZXh0IGNoZWNrYm94IGlzIHNlbGVjdGVkIChiZWZvcmUgb3IgYWZ0ZXIpXG4gICAgICAgICAgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgICAgbGFzdEluZGV4LS07XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZpcnN0SW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvd1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHRoaXMuX2RhdGFbaV0pO1xuICAgICAgICAgICAgLy8gaWYgcm93IGlzIHNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIG9yIGlmIHJvdyB3YXMgdW5zZWxlY3RlZCBhbmQgZmlyc3QgY2hlY2tib3ggd2FzIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSB0aGUgdG9nZ2xlXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSAmJiAhcm93U2VsZWN0ZWQpIHx8XG4gICAgICAgICAgICAgICAgKCF0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgJiYgcm93U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkKSB7XG4gICAgICAgICAgICAgIC8vIGVsc2UgaWYgdGhlIGNoZWNrYm94IHNlbGVjdGVkIHdhcyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsYXN0IHNlbGVjdGlvbiBhbmQgdGhlIGZpcnN0IHNlbGVjdGlvblxuICAgICAgICAgICAgICAvLyB0aGVuIHdlIHVuZG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgaWYgKChjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA8PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkgfHxcbiAgICAgICAgICAgICAgICAgIChjdXJyZW50U2VsZWN0ZWQgPD0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA+PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIC8vIGlmIHNoaWZ0IHdhc250IHByZXNzZWQsIHRoZW4gd2UgdGFrZSB0aGUgZWxlbWVudCBjaGVja2VkIGFzIHRoZSBmaXJzdCByb3dcbiAgICAgIC8vIGluY2FzZSB0aGUgbmV4dCBjbGljayB1c2VzIHNoaWZ0XG4gICAgICB9IGVsc2UgaWYgKG1vdXNlRXZlbnQgJiYgIW1vdXNlRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlID0gdGhpcy5fZG9TZWxlY3Rpb24ocm93LCBjdXJyZW50U2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIG9uc2VsZWN0c3RhcnQgbWV0aG9kIG9mIHRoZSBkb2N1bWVudCBzbyBvdGhlciB0ZXh0IG9uIHRoZSBwYWdlXG4gICAqIGRvZXNuJ3QgZ2V0IHNlbGVjdGVkIHdoZW4gZG9pbmcgc2hpZnQgc2VsZWN0aW9ucy5cbiAgICovXG4gIGRpc2FibGVUZXh0U2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIG9yaWdpbmFsIG9uc2VsZWN0c3RhcnQgbWV0aG9kLlxuICAgKi9cbiAgZW5hYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGVtaXRzIHRoZSBvblJvd0NsaWNrRXZlbnQgd2hlbiBhIHJvdyBpcyBjbGlja2VkXG4gICAqIGlmIGNsaWNrYWJsZSBpcyB0cnVlIGFuZCBzZWxlY3RhYmxlIGlzIGZhbHNlIHRoZW4gc2VsZWN0IHRoZSByb3dcbiAgICovXG4gIGhhbmRsZVJvd0NsaWNrKHJvdzogYW55LCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGlja2FibGUpIHtcbiAgICAgIC8vIGlnbm9yaW5nIGxpbnRpbmcgcnVsZXMgaGVyZSBiZWNhdXNlIGF0dHJpYnV0ZSBpdCBhY3R1YWxseSBudWxsIG9yIG5vdCB0aGVyZVxuICAgICAgLy8gY2FuJ3QgY2hlY2sgZm9yIHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3JjRWxlbWVudDogYW55ID0gZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBpZiAoc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0b3BSb3dDbGljaycpID09PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnbWF0LXBzZXVkby1jaGVja2JveCcpIHtcbiAgICAgICAgdGhpcy5vblJvd0NsaWNrLmVtaXQoe1xuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBoYW5kbGUgZm9yIHNvcnQgY2xpY2sgZXZlbnQgaW4gY29sdW1uIGhlYWRlcnMuXG4gICAqL1xuICBoYW5kbGVTb3J0KGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NvcnRCeSA9PT0gY29sdW1uKSB7XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPSB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyA/XG4gICAgICAgIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgICAgIHRoaXMuX3NvcnRPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcbiAgICB9XG4gICAgdGhpcy5vblNvcnRDaGFuZ2UubmV4dCh7IG5hbWU6IHRoaXMuX3NvcnRCeS5uYW1lLCBvcmRlcjogdGhpcy5fc29ydE9yZGVyIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhbGwga2V5dXAgZXZlbnRzIHdoZW4gZm9jdXNpbmcgYSBkYXRhIHRhYmxlIHJvd1xuICAgKi9cbiAgX3Jvd0tleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50LCByb3c6IGFueSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIC8qKiBpZiB1c2VyIHByZXNzZXMgZW50ZXIgb3Igc3BhY2UsIHRoZSByb3cgc2hvdWxkIGJlIHNlbGVjdGVkICovXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHVzZXJzIHByZXNzZXMgdGhlIHVwIGFycm93LCB3ZSBmb2N1cyB0aGUgcHJldiByb3dcbiAgICAgICAgICogdW5sZXNzIGl0cyB0aGUgZmlyc3Qgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHVzZXJzIHByZXNzZXMgdGhlIGRvd24gYXJyb3csIHdlIGZvY3VzIHRoZSBuZXh0IHJvd1xuICAgICAgICAgKiB1bmxlc3MgaXRzIHRoZSBsYXN0IHJvd1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4IDwgKHRoaXMuX3Jvd3MudG9BcnJheSgpLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA8IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb2x1bW4gaW5kZXggb2YgdGhlIGRyYWdnZWQgY29sdW1uIGFuZCBpbml0aWFsIGNsaWVudFggb2YgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlU3RhcnRDb2x1bW5EcmFnKGluZGV4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIG5ldyB3aWR0aCBkZXBlbmRpbmcgb24gbmV3IGNsaWVudFggb2YgZHJhZ2dlciBjb2x1bW5cbiAgICovXG4gIF9oYW5kbGVDb2x1bW5EcmFnKGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgd2FzIGJlZW4gYSBzZXBhcmF0b3IgY2xpY2tlZCBmb3IgcmVzaXplXG4gICAgaWYgKHRoaXMuX3Jlc2l6aW5nQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY2xpZW50WCA+IDApIHtcbiAgICAgIGxldCB4UG9zaXRpb246IG51bWJlciA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHNlcGFyYXRvciBpcyBiZWluZyBtb3ZlZCB0byB0cnkgYW5kIHJlc2l6ZSB0aGUgY29sdW1uLCBlbHNlIGRvbnQgZG8gYW55dGhpbmdcbiAgICAgIGlmICh4UG9zaXRpb24gPiAwICYmIHRoaXMuX2NvbHVtbkNsaWVudFggPiAwICYmICh4UG9zaXRpb24gLSB0aGlzLl9jb2x1bW5DbGllbnRYKSAhPT0gMCkge1xuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5ldyB3aWR0aCBkZXBlbmRpbmcgaWYgbWFraW5nIHRoZSBjb2x1bW4gYmlnZ2VyIG9yIHNtYWxsZXJcbiAgICAgICAgbGV0IHByb3Bvc2VkTWFudWFsV2lkdGg6IG51bWJlciA9IHRoaXMuX3dpZHRoc1t0aGlzLl9yZXNpemluZ0NvbHVtbl0udmFsdWUgKyAoeFBvc2l0aW9uIC0gdGhpcy5fY29sdW1uQ2xpZW50WCk7XG4gICAgICAgIC8vIGlmIHRoZSBwcm9wb3NlZCBuZXcgd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBwcm9qZWN0ZWQgbWluIHdpZHRoIG9mIHRoZSBjb2x1bW4sIHVzZSBwcm9qZWN0ZWQgbWluIHdpZHRoXG4gICAgICAgIGlmIChwcm9wb3NlZE1hbnVhbFdpZHRoIDwgdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS5wcm9qZWN0ZWRXaWR0aCkge1xuICAgICAgICAgIHByb3Bvc2VkTWFudWFsV2lkdGggPSB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnByb2plY3RlZFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1uc1t0aGlzLl9yZXNpemluZ0NvbHVtbl0ud2lkdGggPSBwcm9wb3NlZE1hbnVhbFdpZHRoO1xuICAgICAgICAvLyB1cGRhdGUgbmV3IHggcG9zaXRpb24gZm9yIHRoZSByZXNpemVkIGNvbHVtblxuICAgICAgICB0aGlzLl9vbkNvbHVtblJlc2l6ZS5uZXh0KHhQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuZHMgZHJhZ2dlZCBmbGFnc1xuICAgKi9cbiAgX2hhbmRsZUVuZENvbHVtbkRyYWcoKTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXNpemluZ0NvbHVtbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcHJldmVudCB0aGUgZGVmYXVsdCBldmVudHNcbiAgICovXG4gIGJsb2NrRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE5lc3RlZFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHx8ICFuYW1lKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChuYW1lLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBsZXQgc3BsaXROYW1lOiBzdHJpbmdbXSA9IG5hbWUuc3BsaXQoL1xcLiguKykvLCAyKTtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShzcGxpdE5hbWVbMV0sIHZhbHVlW3NwbGl0TmFtZVswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWVbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvZXMgdGhlIGFjdHVhbCBSb3cgU2VsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIF9kb1NlbGVjdGlvbihyb3c6IGFueSwgcm93SW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCB3YXNTZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpO1xuICAgIGlmICghd2FzU2VsZWN0ZWQpIHtcbiAgICAgIGlmICghdGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5jbGVhck1vZGVsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlLnB1c2gocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29tcGFyZSBpdGVtcyBieSBbY29tcGFyZVdpdGhdIGZ1bmN0aW9uXG4gICAgICByb3cgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgICAgfSlbMF07XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMudmFsdWUuaW5kZXhPZihyb3cpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk7XG4gICAgdGhpcy5vblJvd1NlbGVjdC5lbWl0KHtyb3c6IHJvdywgaW5kZXg6IHJvd0luZGV4LCBzZWxlY3RlZDogIXdhc1NlbGVjdGVkfSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gIXdhc1NlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbGwgdGhlIHN0YXRlIG9mIGFsbCBjaGVja2JveGVzXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IHR5cGVvZiB0aGlzLl9kYXRhLmZpbmQoKGQ6IGFueSkgPT4gIXRoaXMuaXNSb3dTZWxlY3RlZChkKSkgPT09ICd1bmRlZmluZWQnO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgd2lkdGhzIGZvciBjb2x1bW5zIGFuZCBjZWxscyBkZXBlbmRpbmcgb24gY29udGVudFxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlV2lkdGhzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb2xFbGVtZW50cyAmJiB0aGlzLl9jb2xFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3dpZHRocyA9IFtdO1xuICAgICAgdGhpcy5fY29sRWxlbWVudHMuZm9yRWFjaCgoY29sOiBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWR0aChpbmRleCwgdGhpcy5fY2FsY3VsYXRlV2lkdGgoKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgY29sdW1ucyBhZnRlciBjYWxjdWxhdGlvbiB0byBzZWUgaWYgdGhleSBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZC5cbiAgICovXG4gIHByaXZhdGUgX2FkanVzdENvbHVtbldpZGh0cygpOiB2b2lkIHtcbiAgICBsZXQgZml4ZWRUb3RhbFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIC8vIGdldCB0aGUgbnVtYmVyIG9mIHRvdGFsIGNvbHVtbnMgdGhhdCBoYXZlIGZsZXhpYmxlIHdpZHRocyAobm90IGZpeGVkIG9yIGhpZGRlbilcbiAgICBsZXQgZmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC5saW1pdCB8fCB3aWR0aC5tYXggfHwgd2lkdGgubWluKSB7XG4gICAgICAgIGZpeGVkVG90YWxXaWR0aCArPSB3aWR0aC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heCAmJiAhd2lkdGgubWluO1xuICAgIH0pLmxlbmd0aDtcbiAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggcGl4ZXMgYXJlIGxlZnQgdGhhdCBjb3VsZCBiZSBzcHJlYWQgYWNyb3NzXG4gICAgLy8gdGhlIGZsZXhpYmxlIGNvbHVtbnNcbiAgICBsZXQgcmVjYWxjdWxhdGVIb3N0V2lkdGg6IG51bWJlciA9IDA7XG4gICAgaWYgKGZpeGVkVG90YWxXaWR0aCA8IHRoaXMuaG9zdFdpZHRoKSB7XG4gICAgICByZWNhbGN1bGF0ZUhvc3RXaWR0aCA9IHRoaXMuaG9zdFdpZHRoIC0gZml4ZWRUb3RhbFdpZHRoO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBoYXZlIGZsZXhpYmxlIGNvbHVtbnMgYW5kIHBpeGVscyB0byBzcGFyZSBvbiB0aGVtXG4gICAgLy8gd2UgdHJ5IGFuZCBzcHJlYWQgdGhlIHBpeGVscyBhY3Jvc3MgdGhlbVxuICAgIGlmIChmbGV4aWJsZVdpZHRocyAmJiByZWNhbGN1bGF0ZUhvc3RXaWR0aCkge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgPSBNYXRoLmZsb29yKHJlY2FsY3VsYXRlSG9zdFdpZHRoIC8gZmxleGlibGVXaWR0aHMpO1xuICAgICAgbGV0IGFkanVzdGVkTnVtYmVyOiBudW1iZXIgPSAwO1xuICAgICAgLy8gYWRqdXN0IHRoZSBjb2x1bW4gd2lkdGhzIHdpdGggdGhlIHNwcmVhZCBwaXhlbHNcbiAgICAgIHRoaXMuX3dpZHRocy5mb3JFYWNoKChjb2xXaWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubWF4ICYmIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0udmFsdWUgPiBuZXdWYWx1ZSB8fFxuICAgICAgICAgICAgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5taW4gJiYgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS52YWx1ZSA8IG5ld1ZhbHVlIHx8XG4gICAgICAgICAgICAhdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5saW1pdCkge1xuICAgICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZHRoKGNvbFdpZHRoLmluZGV4LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgYWRqdXN0ZWROdW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgY29sdW1ucyB0aGF0IG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkLCB3ZSBzdGFydCBvdmVyXG4gICAgICBsZXQgbmV3RmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCkgPT4ge1xuICAgICAgICByZXR1cm4gIXdpZHRoLmxpbWl0ICYmICF3aWR0aC5tYXg7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBpZiAobmV3RmxleGlibGVXaWR0aHMgIT09IGFkanVzdGVkTnVtYmVyICYmIG5ld0ZsZXhpYmxlV2lkdGhzICE9PSBmbGV4aWJsZVdpZHRocykge1xuICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWRodHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyBhIHNpbmdsZSBjb2x1bW4gdG8gc2VlIGlmIGl0IGNhbiBiZSByZWNhbGN1bGF0ZWRcbiAgICovXG4gIHByaXZhdGUgX2FkanVzdENvbHVtbldpZHRoKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl93aWR0aHNbaW5kZXhdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgbGltaXQ6IGZhbHNlLFxuICAgICAgbWluOiBmYWxzZSxcbiAgICAgIG1heDogZmFsc2UsXG4gICAgfTtcbiAgICAvLyBmbGFnIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNraXAgdGhlIG1pbiB3aWR0aCBwcm9qZWN0aW9uXG4gICAgLy8gZGVwZW5kaW5nIGlmIGEgd2lkdGggb3IgbWluIHdpZHRoIGhhcyBiZWVuIHByb3ZpZGVkXG4gICAgbGV0IHNraXBNaW5XaWR0aFByb2plY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jb2x1bW5zW2luZGV4XSkge1xuICAgICAgLy8gaWYgdGhlIHByb3ZpZGVkIHdpZHRoIGhhcyBtaW4vbWF4LCB0aGVuIHdlIGNoZWNrIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNldCBpdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgd2lkdGhPcHRzOiBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCA9IDxJVGREYXRhVGFibGVDb2x1bW5XaWR0aD50aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoO1xuICAgICAgICAvLyBpZiB0aGUgY29sdW1uIHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgY29uZmlndXJlZCBtaW4sIHdlIG92ZXJyaWRlIGl0XG4gICAgICAgIHNraXBNaW5XaWR0aFByb2plY3Rpb24gPSAod2lkdGhPcHRzICYmICEhd2lkdGhPcHRzLm1pbik7XG4gICAgICAgIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1pbiA+PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5taW47XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgICAvLyBpZiB0aGUgY29sdW1uIHdpZHRoIGlzIG1vcmUgdGhhbiB0aGUgY29uZmlndXJlZCBtYXgsIHdlIG92ZXJyaWRlIGl0XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGhPcHRzICYmIHdpZHRoT3B0cy5tYXggPD0gdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB3aWR0aE9wdHMubWF4O1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubWF4ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgLy8gaWYgaXQgaGFzIGEgZml4ZWQgd2lkdGgsIHRoZW4gd2UganVzdCBzZXQgaXRcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSA8bnVtYmVyPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIHNraXBNaW5XaWR0aFByb2plY3Rpb24gPSB0aGlzLl93aWR0aHNbaW5kZXhdLmxpbWl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGhlcmUgd2Fzbid0IGFueSB3aWR0aCBvciBtaW4gd2lkdGggcHJvdmlkZWQsIHdlIHNldCBhIG1pbiB0byB3aGF0IHRoZSBjb2x1bW4gd2lkdGggbWluIHNob3VsZCBiZVxuICAgIGlmICghc2tpcE1pbldpZHRoUHJvamVjdGlvbiAmJlxuICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlIDwgdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW2luZGV4XS5wcm9qZWN0ZWRXaWR0aCkge1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGg7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1pbiA9IHRydWU7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLmxpbWl0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRvIGNhbGN1bGF0ZSBjb2x1bW4gd2lkdGhcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IHJlbmRlcmVkQ29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW10gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2w6IElUZERhdGFUYWJsZUNvbHVtbikgPT4gIWNvbC5oaWRkZW4pO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuaG9zdFdpZHRoIC8gcmVuZGVyZWRDb2x1bW5zLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGN1bGF0ZSB0aGUgcm93cyB0byBiZSByZW5kZXJlZCBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk6IHZvaWQge1xuICAgIGxldCBzY3JvbGxlZFJvd3M6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIGxldCByb3dIZWlnaHRTdW06IG51bWJlciA9IDA7XG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHJvd3MgdG8gc2VlIGlmIHdlIGhhdmUgdGhlaXIgaGVpZ2h0IGNhY2hlZFxuICAgICAgLy8gYW5kIHN1bSB0aGVtIGFsbCB0byBjYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodFxuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChkOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIHJvd3MgYXQgZmlyc3QgYW5kIGFzc3VtZSBhbGxcbiAgICAgICAgLy8gcm93cyBhcmUgdGhlIHNhbWUgaGVpZ2h0IGFzIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKCF0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSkge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldID0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbMF0gfHwgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgcm93SGVpZ2h0U3VtICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldO1xuICAgICAgICAvLyBjaGVjayBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSByb3dIZWlnaHRTdW0gPiAwKSB7XG4gICAgICAgICAgc2Nyb2xsZWRSb3dzKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSByb3dIZWlnaHRTdW07XG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGxldCBmcm9tUm93OiBudW1iZXIgPSBzY3JvbGxlZFJvd3MgLSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSBmcm9tUm93ID4gMCA/IGZyb21Sb3cgOiAwO1xuXG4gICAgICBsZXQgaG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5faG9zdEhlaWdodDtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICAgIC8vIGNhbGN1bGF0ZSBob3cgbWFueSByb3dzIGNhbiBmaXQgaW4gdGhlIHZpZXdwb3J0XG4gICAgICB3aGlsZSAoaG9zdEhlaWdodCA+IDApIHtcbiAgICAgICAgaG9zdEhlaWdodCAtPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVt0aGlzLmZyb21Sb3cgKyBpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgICAvLyBzZXQgdGhlIGxhc3Qgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGxldCByYW5nZTogbnVtYmVyID0gKGluZGV4IC0gMSkgKyAoVERfVklSVFVBTF9PRkZTRVQgKiAyKTtcbiAgICAgIGxldCB0b1JvdzogbnVtYmVyID0gcmFuZ2UgKyB0aGlzLmZyb21Sb3c7XG4gICAgICAvLyBpZiBsYXN0IHJvdyBpcyBncmVhdGVyIHRoYW4gdGhlIHRvdGFsIGxlbmd0aCwgdGhlbiB3ZSB1c2UgdGhlIHRvdGFsIGxlbmd0aFxuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwcm9wZXIgb2Zmc2V0IGRlcGVuZGluZyBvbiBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgIGlmIChzY3JvbGxlZFJvd3MgPiBURF9WSVJUVUFMX09GRlNFVCkge1xuICAgICAgZm9yIChsZXQgaW5kZXg6IG51bWJlciA9IDA7IGluZGV4IDwgdGhpcy5mcm9tUm93OyBpbmRleCsrKSB7XG4gICAgICAgIG9mZnNldCArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fb2Zmc2V0VHJhbnNmb3JtID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndHJhbnNsYXRlWSgnICsgKG9mZnNldCAtIHRoaXMudG90YWxIZWlnaHQpICsgJ3B4KScpO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsRGF0YSA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLmZyb21Sb3csIHRoaXMudG9Sb3cpO1xuICAgIH1cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=