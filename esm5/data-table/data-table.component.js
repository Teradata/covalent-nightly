/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        _this.sortChange = new EventEmitter();
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         */
        _this.rowSelect = new EventEmitter();
        /**
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         */
        _this.rowClick = new EventEmitter();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        _this.selectAll = new EventEmitter();
        /**
         * compareWith?: function(row, model): boolean
         * Allows custom comparison between row and model to see if row is selected or not
         * Default comparation is by reference
         */
        _this.compareWith = (/**
         * @param {?} row
         * @param {?} model
         * @return {?}
         */
        function (row, model) {
            return row === model;
        });
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
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.refresh();
                // scroll back to the top if the data has changed
                _this._scrollableDiv.nativeElement.scrollTop = 0;
            }));
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
                Object.keys(row).forEach((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) {
                    if (!_this._columns.find((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return c.name === k; }))) {
                        _this._columns.push({ name: k, label: k });
                    }
                }));
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
            var column = this.columns.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.name === columnName; }));
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
            this._sortOrder = sortOrder === 'ASC' ? TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
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
        this._resizeSubs = this._onResize.asObservable().subscribe((/**
         * @return {?}
         */
        function () {
            if (_this._rows) {
                _this._rows.toArray().forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                function (row, index) {
                    _this._rowHeightCache[_this.fromRow + index] = row.height + 1;
                }));
            }
            _this._calculateWidths();
            _this._calculateVirtualRows();
        }));
        // initialize observable for column resize calculations
        this._columnResizeSubs = this._onColumnResize
            .asObservable()
            .pipe(debounceTime(0))
            .subscribe((/**
         * @param {?} clientX
         * @return {?}
         */
        function (clientX) {
            _this._columnClientX = clientX;
            _this._calculateWidths();
            _this._changeDetectorRef.markForCheck();
        }));
        // initialize observable for scroll column header reposition
        this._horizontalScrollSubs = this._onHorizontalScroll.asObservable().subscribe((/**
         * @param {?} horizontalScroll
         * @return {?}
         */
        function (horizontalScroll) {
            _this._scrollHorizontalOffset = horizontalScroll;
            _this._changeDetectorRef.markForCheck();
        }));
        // initialize observable for virtual scroll rendering
        this._verticalScrollSubs = this._onVerticalScroll.asObservable().subscribe((/**
         * @param {?} verticalScroll
         * @return {?}
         */
        function (verticalScroll) {
            _this._scrollVerticalOffset = verticalScroll;
            _this._calculateVirtualRows();
            _this._changeDetectorRef.markForCheck();
        }));
        this._valueChangesSubs = this.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.refresh();
        }));
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
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this._templates.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var template = _c.value;
                this._templateMap.set(template.tdDataTableTemplate, template.templateRef);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._hostWidth = newHostWidth_1;
                    _this._onResize.next();
                }), 0);
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
        this._rowsChangedSubs = this._rows.changes.pipe(debounceTime(0)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._onResize.next();
        }));
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
        var element = (/** @type {?} */ (event.target));
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
    TdDataTableComponent.prototype._selectAll = /**
     * Selects or clears all rows depending on 'checked' value.
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        var _this = this;
        /** @type {?} */
        var toggledRows = [];
        if (checked) {
            this._data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                // skiping already selected rows
                if (!_this.isRowSelected(row)) {
                    _this.value.push(row);
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
            function (row) {
                // checking which ones are being toggled
                if (_this.isRowSelected(row)) {
                    toggledRows.push(row);
                    /** @type {?} */
                    var modelRow = _this.value.filter((/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) {
                        return _this.compareWith(row, val);
                    }))[0];
                    /** @type {?} */
                    var index = _this.value.indexOf(modelRow);
                    if (index > -1) {
                        _this.value.splice(index, 1);
                    }
                }
            }));
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.selectAll.emit({ rows: toggledRows, selected: checked });
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
        return this.value
            ? this.value.filter((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                return _this.compareWith(row, val);
            })).length > 0
            : false;
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
                else if (this._firstSelectedIndex > currentSelected || this._firstSelectedIndex < currentSelected) {
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
            this._document.onselectstart = (/**
             * @return {?}
             */
            function () {
                return false;
            });
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
                this.rowClick.emit({
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
            if (xPosition > 0 && this._columnClientX > 0 && xPosition - this._columnClientX !== 0) {
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
     * @private
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype._getNestedValue = /**
     * @private
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
     * @private
     * @param {?} row
     * @param {?} rowIndex
     * @return {?}
     */
    TdDataTableComponent.prototype._doSelection = /**
     * Does the actual Row Selection
     * @private
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
            row = this.value.filter((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                return _this.compareWith(row, val);
            }))[0];
            /** @type {?} */
            var index = this.value.indexOf(row);
            if (index > -1) {
                this.value.splice(index, 1);
            }
        }
        this._calculateCheckboxState();
        this.rowSelect.emit({ row: row, index: rowIndex, selected: !wasSelected });
        this.onChange(this.value);
        return !wasSelected;
    };
    /**
     * Calculate all the state of all checkboxes
     */
    /**
     * Calculate all the state of all checkboxes
     * @private
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateCheckboxState = /**
     * Calculate all the state of all checkboxes
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var e_2, _a;
        if (this._data) {
            this._allSelected = typeof this._data.find((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return !_this.isRowSelected(d); })) === 'undefined';
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    /**
     * Calculates the widths for columns and cells depending on content
     */
    /**
     * Calculates the widths for columns and cells depending on content
     * @private
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateWidths = /**
     * Calculates the widths for columns and cells depending on content
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._colElements && this._colElements.length) {
            this._widths = [];
            this._colElements.forEach((/**
             * @param {?} col
             * @param {?} index
             * @return {?}
             */
            function (col, index) {
                _this._adjustColumnWidth(index, _this._calculateWidth());
            }));
            this._adjustColumnWidhts();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     */
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @private
     * @return {?}
     */
    TdDataTableComponent.prototype._adjustColumnWidhts = /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        /** @type {?} */
        var flexibleWidths = this._widths.filter((/**
         * @param {?} width
         * @param {?} index
         * @return {?}
         */
        function (width, index) {
            if (_this.columns[index].hidden) {
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
            this._widths.forEach((/**
             * @param {?} colWidth
             * @return {?}
             */
            function (colWidth) {
                if ((_this._widths[colWidth.index].max && _this._widths[colWidth.index].value > newValue_1) ||
                    (_this._widths[colWidth.index].min && _this._widths[colWidth.index].value < newValue_1) ||
                    !_this._widths[colWidth.index].limit) {
                    _this._adjustColumnWidth(colWidth.index, newValue_1);
                    adjustedNumber_1++;
                }
            }));
            // if there are still columns that need to be recalculated, we start over
            /** @type {?} */
            var newFlexibleWidths = this._widths.filter((/**
             * @param {?} width
             * @return {?}
             */
            function (width) {
                return !width.limit && !width.max;
            })).length;
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
     * @private
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype._adjustColumnWidth = /**
     * Adjusts a single column to see if it can be recalculated
     * @private
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
    };
    /**
     * Generic method to calculate column width
     */
    /**
     * Generic method to calculate column width
     * @private
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateWidth = /**
     * Generic method to calculate column width
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var renderedColumns = this.columns.filter((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return !col.hidden; }));
        return Math.floor(this.hostWidth / renderedColumns.length);
    };
    /**
     * Method to calculate the rows to be rendered in the viewport
     */
    /**
     * Method to calculate the rows to be rendered in the viewport
     * @private
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateVirtualRows = /**
     * Method to calculate the rows to be rendered in the viewport
     * @private
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
            this._data.forEach((/**
             * @param {?} d
             * @param {?} i
             * @return {?}
             */
            function (d, i) {
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
            }));
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
            var range = index - 1 + TD_VIRTUAL_OFFSET * 2;
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
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this._changeDetectorRef.markForCheck();
        }));
    };
    TdDataTableComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdDataTableComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-data-table',
                    template: "<table td-data-table [style.left.px]=\"columnsLeftScroll\" [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\" (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); _selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"_selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"_selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\"\n        ></mat-checkbox>\n      </th>\n      <th\n        td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\"\n      >\n        <span [matTooltip]=\"column.tooltip\">{{ column.label }}</span>\n        <span\n          td-column-resizer\n          *ngIf=\"resizableColumns\"\n          draggable=\"true\"\n          class=\"td-data-table-column-resizer\"\n          [class.td-resizing]=\"i === resizingColumn\"\n          (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n          (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n          (drag)=\"_handleColumnDrag($event)\"\n          (dragend)=\"_handleEndColumnDrag()\"\n          (mouseup)=\"_handleEndColumnDrag()\"\n        >\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\" (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table\n    td-data-table\n    [style.transform]=\"offsetTransform\"\n    [style.position]=\"'absolute'\"\n    [class.mat-selectable]=\"selectable\"\n    [class.mat-clickable]=\"clickable\"\n  >\n    <tbody class=\"td-data-table-body\">\n      <tr\n        td-data-table-row\n        #dtRow\n        [tabIndex]=\"selectable ? 0 : -1\"\n        [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n        *ngFor=\"let row of virtualData; let rowIndex = index\"\n        (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n        (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n        (keydown.space)=\"blockEvent($event)\"\n        (keydown.shift.space)=\"blockEvent($event)\"\n        (keydown.shift)=\"disableTextSelection()\"\n        (keyup.shift)=\"enableTextSelection()\"\n      >\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\"\n          ></mat-pseudo-checkbox>\n        </td>\n        <td\n          td-data-table-cell\n          [numeric]=\"column.numeric\"\n          [hidden]=\"column.hidden\"\n          *ngFor=\"let column of columns; let i = index\"\n          [style.min-width.px]=\"getColumnWidth(i)\"\n          [style.max-width.px]=\"getColumnWidth(i)\"\n        >\n          <span *ngIf=\"!getTemplateRef(column.name)\">\n            {{ column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row) }}\n          </span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{\n              value: getCellValue(column, row),\n              row: row,\n              column: column.name,\n              index: rowIndex\n            }\"\n          ></ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
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
    return TdDataTableComponent;
}(_TdDataTableMixinBase));
export { TdDataTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFHVCxlQUFlLEVBR2YsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsWUFBWSxFQUNaLFVBQVUsR0FHWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0UsT0FBTyxFQUE0QixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBS3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTFGLE9BQU8sRUFBeUIseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0lBR3ZGLFdBQVksS0FBSztJQUNqQixZQUFhLE1BQU07Ozs7OztBQUdyQiw2Q0FHQzs7O0lBRkMsc0NBQWE7O0lBQ2Isc0NBQWE7Ozs7O0FBR2Ysd0NBV0M7OztJ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Ozs7OztJQUNsQyw0Q0FBc0M7Ozs7O0lBQ3RDLDhDQUF3Qzs7Ozs7O0lBR3hDLHlDQUFtQzs7Ozs7SUFDbkMsdUNBQW9DOzs7OztJQUNwQywwQ0FBZ0Y7Ozs7OztJQUdoRix1REFBaUQ7Ozs7O0lBQ2pELGtEQUF3Qzs7Ozs7SUFDeEMsbURBQXlDOzs7OztJQUN6QyxtREFBNkM7Ozs7OztJQUc3Qyw0Q0FBMEY7O0lBQzFGLDBDQUFtRzs7SUFFbkcsOENBQXlFOztJQUV6RSw0Q0FBbUY7O0lBRW5GLHFDQUFpRjs7Ozs7OztJQTJMakYsMENBQWtIOzs7Ozs7O0lBT2xILHlDQUF5Rzs7Ozs7OztJQU96Ryx3Q0FBNEc7Ozs7Ozs7SUFPNUcseUNBQStHOzs7Ozs7O0lBZ0IvRywyQ0FFRTs7Ozs7SUFmQSx5Q0FBb0Q7Ozs7O0lBQ3BELDJDQUErQjs7Ozs7SUFDL0IsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVGVtcGxhdGVSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIERPV05fQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsXG4gIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LFxufSBmcm9tICcuL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtdGFibGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGVudW0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIge1xuICBBc2NlbmRpbmcgPSAnQVNDJyxcbiAgRGVzY2VuZGluZyA9ICdERVNDJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCB7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgbnVtZXJpYz86IGJvb2xlYW47XG4gIGZvcm1hdD86ICh2YWx1ZTogYW55KSA9PiBhbnk7XG4gIG5lc3RlZD86IGJvb2xlYW47XG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgZmlsdGVyPzogYm9vbGVhbjtcbiAgd2lkdGg/OiBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVTZWxlY3RFdmVudCB7XG4gIHJvdzogYW55O1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudCB7XG4gIHJvd3M6IGFueVtdO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50IHtcbiAgcm93OiBhbnk7XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUludGVybmFsQ29sdW1uV2lkdGgge1xuICB2YWx1ZTogbnVtYmVyO1xuICBsaW1pdDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbWluPzogYm9vbGVhbjtcbiAgbWF4PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb25zdGFudCB0byBzZXQgdGhlIHJvd3Mgb2Zmc2V0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHZpZXdwb3J0XG4gKi9cbmNvbnN0IFREX1ZJUlRVQUxfT0ZGU0VUOiBudW1iZXIgPSAyO1xuXG4vKipcbiAqIENvbnN0YW50IHRvIHNldCBkZWZhdWx0IHJvdyBoZWlnaHQgaWYgbm9uZSBpcyBwcm92aWRlZFxuICovXG5jb25zdCBURF9WSVJUVUFMX0RFRkFVTFRfUk9XX0hFSUdIVDogbnVtYmVyID0gNDg7XG5cbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRGF0YVRhYmxlTWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihUZERhdGFUYWJsZUJhc2UsIFtdKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGREYXRhVGFibGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0ZC1kYXRhLXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIGlucHV0czogWyd2YWx1ZSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDb21wb25lbnQgZXh0ZW5kcyBfVGREYXRhVGFibGVNaXhpbkJhc2VcbiAgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIHJlc3BvbnNpdmUgd2lkdGggY2FsY3VsYXRpb25zICovXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcm93c0NoYW5nZWRTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2hvc3RXaWR0aDogbnVtYmVyID0gMDtcblxuICAvKiogbWFudWFsbHkgcmVzaXphYmxlIGNvbHVtbnMgKi9cbiAgcHJpdmF0ZSBfcmVzaXphYmxlQ29sdW1uczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2x1bW5DbGllbnRYOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jb2x1bW5SZXNpemVTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Jlc2l6aW5nQ29sdW1uOiBudW1iZXI7XG4gIHByaXZhdGUgX29uQ29sdW1uUmVzaXplOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgZ2V0IHJlc2l6aW5nQ29sdW1uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6aW5nQ29sdW1uO1xuICB9XG5cbiAgZ2V0IGhvc3RXaWR0aCgpOiBudW1iZXIge1xuICAgIC8vIGlmIHRoZSBjaGVja2JveGVzIGFyZSByZW5kZXJlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlaXIgd2lkdGhcbiAgICAvLyBmcm9tIHRoZSB0b3RhbCB3aWR0aCB0byBjYWxjdWxhdGUgcHJvcGVybHlcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faG9zdFdpZHRoIC0gNDI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ob3N0V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIF93aWR0aHM6IElJbnRlcm5hbENvbHVtbldpZHRoW10gPSBbXTtcbiAgcHJpdmF0ZSBfb25SZXNpemU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBjb2x1bW4gaGVhZGVyIHJlcG9zaXRpb24gYW5kIHZpZXdwb29ydCAqL1xuICBwcml2YXRlIF92ZXJ0aWNhbFNjcm9sbFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfaG9yaXpvbnRhbFNjcm9sbFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc2Nyb2xsSG9yaXpvbnRhbE9mZnNldDogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIF9vbkhvcml6b250YWxTY3JvbGw6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfb25WZXJ0aWNhbFNjcm9sbDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIC8vIEFycmF5IG9mIGNhY2hlZCByb3cgaGVpZ2h0cyB0byBhbGxvdyBkeW5hbWljIHJvdyBoZWlnaHRzXG4gIHByaXZhdGUgX3Jvd0hlaWdodENhY2hlOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUb3RhbCBwc2V1ZG8gaGVpZ2h0IG9mIGFsbCB0aGUgZWxlbWVudHNcbiAgcHJpdmF0ZSBfdG90YWxIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8vIFRvdGFsIGhvc3QgaGVpZ2h0IGZvciB0aGUgdmlld3BvcnRcbiAgcHJpdmF0ZSBfaG9zdEhlaWdodDogbnVtYmVyID0gMDtcbiAgLy8gU2Nyb2xsZWQgdmVydGljYWwgcGl4ZWxzXG4gIHByaXZhdGUgX3Njcm9sbFZlcnRpY2FsT2Zmc2V0OiBudW1iZXIgPSAwO1xuICAvLyBTdHlsZSB0byBtb3ZlIHRoZSBjb250ZW50IGEgY2VydGFpbiBvZmZzZXQgZGVwZW5kaW5nIG9uIHNjcm9sbGVkIG9mZnNldFxuICBwcml2YXRlIF9vZmZzZXRUcmFuc2Zvcm06IFNhZmVTdHlsZTtcblxuICAvLyBWYXJpYWJsZXMgdGhhdCBzZXQgZnJvbSBhbmQgdG8gd2hpY2ggcm93cyB3aWxsIGJlIHJlbmRlcmVkXG4gIHByaXZhdGUgX2Zyb21Sb3c6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvUm93OiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQgc3R5bGUgd2l0aCBhIHByb3BlciBjYWxjdWxhdGlvbiBvbiBob3cgbXVjaCBpdCBzaG91bGQgbW92ZVxuICAgKiBvdmVyIHRoZSB5IGF4aXMgb2YgdGhlIHRvdGFsIGhlaWdodFxuICAgKi9cbiAgZ2V0IG9mZnNldFRyYW5zZm9ybSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUcmFuc2Zvcm07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXNzdW1lZCB0b3RhbCBoZWlnaHQgb2YgdGhlIHJvd3NcbiAgICovXG4gIGdldCB0b3RhbEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbml0aWFsIHJvdyB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBnZXQgZnJvbVJvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9mcm9tUm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhc3Qgcm93IHRvIHJlbmRlciBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIGdldCB0b1JvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b1JvdztcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlc1N1YnM6IFN1YnNjcmlwdGlvbjtcbiAgLyoqIGludGVybmFsIGF0dHJpYnV0ZXMgKi9cbiAgcHJpdmF0ZSBfZGF0YTogYW55W107XG4gIC8vIGRhdGEgdmlydHVhbGx5IGl0ZXJhdGVkIGJ5IGNvbXBvbmVudFxuICBwcml2YXRlIF92aXJ0dWFsRGF0YTogYW55W107XG4gIHByaXZhdGUgX2NvbHVtbnM6IElUZERhdGFUYWJsZUNvbHVtbltdO1xuICBwcml2YXRlIF9zZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NsaWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2FsbFNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2luZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogc29ydGluZyAqL1xuICBwcml2YXRlIF9zb3J0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zb3J0Qnk6IElUZERhdGFUYWJsZUNvbHVtbjtcbiAgcHJpdmF0ZSBfc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcblxuICAvKiogc2hpZnQgc2VsZWN0ICovXG4gIHByaXZhdGUgX3NoaWZ0UHJldmlvdXNseVByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGFzdFNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIF9maXJzdFNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIF9maXJzdENoZWNrYm94VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogdGVtcGxhdGUgZmV0Y2hpbmcgc3VwcG9ydCAqL1xuICBwcml2YXRlIF90ZW1wbGF0ZU1hcDogTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlKSBfdGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZT47XG5cbiAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZURpdicsIHsgc3RhdGljOiB0cnVlIH0pIF9zY3JvbGxhYmxlRGl2OiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2NvbHVtbkVsZW1lbnQnKSBfY29sRWxlbWVudHM6IFF1ZXJ5TGlzdDxUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZHJlbihUZERhdGFUYWJsZVJvd0NvbXBvbmVudCkgX3Jvd3M6IFF1ZXJ5TGlzdDxUZERhdGFUYWJsZVJvd0NvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc2Nyb2xsIHBvc2l0aW9uIHRvIHJlcG9zaXRpb24gY29sdW1uIGhlYWRlcnNcbiAgICovXG4gIGdldCBjb2x1bW5zTGVmdFNjcm9sbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ICogLTE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB2YWx1ZXMgYXJlIHNlbGVjdGVkLlxuICAgKi9cbiAgZ2V0IGFsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxTZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHZhbHVlcyBhcmUgbm90IGRlc2VsZWN0ZWRcbiAgICogYW5kIGF0IGxlYXN0IG9uZSBpcy5cbiAgICovXG4gIGdldCBpbmRldGVybWluYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmRldGVybWluYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIGRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fVtdXG4gICAqIFNldHMgdGhlIGRhdGEgdG8gYmUgcmVuZGVyZWQgYXMgcm93cy5cbiAgICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fcm93SGVpZ2h0Q2FjaGUgPSBbXTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgLy8gc2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCBpZiB0aGUgZGF0YSBoYXMgY2hhbmdlZFxuICAgICAgdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IHZpcnR1YWxEYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbERhdGE7XG4gIH1cblxuICAvKipcbiAgICogY29sdW1ucz86IElUZERhdGFUYWJsZUNvbHVtbltdXG4gICAqIFNldHMgYWRkaXRpb25hbCBjb2x1bW4gY29uZmlndXJhdGlvbi4gW0lUZERhdGFUYWJsZUNvbHVtbi5uYW1lXSBoYXMgdG8gZXhpc3QgaW4gW2RhdGFdIGFzIGtleS5cbiAgICogRGVmYXVsdHMgdG8gW2RhdGFdIGtleXMuXG4gICAqL1xuICBASW5wdXQoJ2NvbHVtbnMnKVxuICBzZXQgY29sdW1ucyhjb2xzOiBJVGREYXRhVGFibGVDb2x1bW5bXSkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2xzO1xuICB9XG4gIGdldCBjb2x1bW5zKCk6IElUZERhdGFUYWJsZUNvbHVtbltdIHtcbiAgICBpZiAodGhpcy5fY29sdW1ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzRGF0YSkge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IFtdO1xuICAgICAgLy8gaWYgY29sdW1ucyBpcyB1bmRlZmluZWQsIHVzZSBrZXkgaW4gW2RhdGFdIHJvd3MgYXMgbmFtZSBhbmQgbGFiZWwgZm9yIGNvbHVtbiBoZWFkZXJzLlxuICAgICAgY29uc3Qgcm93OiBhbnkgPSB0aGlzLl9kYXRhWzBdO1xuICAgICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb2x1bW5zLmZpbmQoKGM6IGFueSkgPT4gYy5uYW1lID09PSBrKSkge1xuICAgICAgICAgIHRoaXMuX2NvbHVtbnMucHVzaCh7IG5hbWU6IGssIGxhYmVsOiBrIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJlc2l6YWJsZUNvbHVtbnM/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgbWFudWFsIGNvbHVtbiByZXNpemUuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgncmVzaXphYmxlQ29sdW1ucycpXG4gIHNldCByZXNpemFibGVDb2x1bW5zKHJlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXNpemFibGVDb2x1bW5zID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlc2l6YWJsZUNvbHVtbnMpO1xuICB9XG4gIGdldCByZXNpemFibGVDb2x1bW5zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemFibGVDb2x1bW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdGFibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgcm93IHNlbGVjdGlvbiBldmVudHMsIGhvdmVyIGFuZCBzZWxlY3RlZCByb3cgc3RhdGVzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3NlbGVjdGFibGUnKVxuICBzZXQgc2VsZWN0YWJsZShzZWxlY3RhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzZWxlY3RhYmxlKTtcbiAgfVxuICBnZXQgc2VsZWN0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGlja2FibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgcm93IGNsaWNrIGV2ZW50cywgaG92ZXIuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnY2xpY2thYmxlJylcbiAgc2V0IGNsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbGlja2FibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoY2xpY2thYmxlKTtcbiAgfVxuICBnZXQgY2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jbGlja2FibGU7XG4gIH1cblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgbXVsdGlwbGUgcm93IHNlbGVjdGlvbi4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBzb3J0aW5nIGV2ZW50cywgc29ydCBpY29ucyBhbmQgYWN0aXZlIGNvbHVtbiBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc29ydGFibGUnKVxuICBzZXQgc29ydGFibGUoc29ydGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0YWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzb3J0YWJsZSk7XG4gIH1cbiAgZ2V0IHNvcnRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Qnk/OiBzdHJpbmdcbiAgICogU2V0cyB0aGUgYWN0aXZlIHNvcnQgY29sdW1uLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoJ3NvcnRCeScpXG4gIHNldCBzb3J0QnkoY29sdW1uTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFjb2x1bW5OYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoKGM6IGFueSkgPT4gYy5uYW1lID09PSBjb2x1bW5OYW1lKTtcbiAgICBpZiAoIWNvbHVtbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydEJ5XSBtdXN0IGJlIGEgdmFsaWQgY29sdW1uIG5hbWUnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0QnkgPSBjb2x1bW47XG4gIH1cbiAgZ2V0IHNvcnRCeUNvbHVtbigpOiBJVGREYXRhVGFibGVDb2x1bW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0Qnk7XG4gIH1cblxuICAvKipcbiAgICogc29ydE9yZGVyPzogWydBU0MnIHwgJ0RFU0MnXSBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlclxuICAgKiBTZXRzIHRoZSBzb3J0IG9yZGVyIG9mIHRoZSBbc29ydEJ5XSBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ0FTQycgb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nXG4gICAqL1xuICBASW5wdXQoJ3NvcnRPcmRlcicpXG4gIHNldCBzb3J0T3JkZXIob3JkZXI6ICdBU0MnIHwgJ0RFU0MnKSB7XG4gICAgY29uc3Qgc29ydE9yZGVyOiBzdHJpbmcgPSBvcmRlciA/IG9yZGVyLnRvVXBwZXJDYXNlKCkgOiAnQVNDJztcbiAgICBpZiAoc29ydE9yZGVyICE9PSAnREVTQycgJiYgc29ydE9yZGVyICE9PSAnQVNDJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydE9yZGVyXSBtdXN0IGJlIGVtcHR5LCBBU0Mgb3IgREVTQycpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgPyBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcgOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nO1xuICB9XG4gIGdldCBzb3J0T3JkZXJFbnVtKCk6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyO1xuICB9XG5cbiAgZ2V0IGhhc0RhdGEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRDaGFuZ2U/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNvbHVtbiBoZWFkZXJzIGFyZSBjbGlja2VkLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dTZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgc2VsZWN0ZWQvZGVzZWxlY3RlZC4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTZWxlY3RFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHJvd1NlbGVjdDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHJvd0NsaWNrPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgcm93IGlzIGNsaWNrZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgcm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVSb3dDbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudD4oKTtcblxuICAvKipcbiAgICogc2VsZWN0QWxsPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGFsbCByb3dzIGFyZSBzZWxlY3RlZC9kZXNlbGVjdGVkIGJ5IHRoZSBhbGwgY2hlY2tib3guIFtzZWxlY3RhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RBbGxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBhcmVXaXRoPzogZnVuY3Rpb24ocm93LCBtb2RlbCk6IGJvb2xlYW5cbiAgICogQWxsb3dzIGN1c3RvbSBjb21wYXJpc29uIGJldHdlZW4gcm93IGFuZCBtb2RlbCB0byBzZWUgaWYgcm93IGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgKiBEZWZhdWx0IGNvbXBhcmF0aW9uIGlzIGJ5IHJlZmVyZW5jZVxuICAgKi9cbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IChyb3c6IGFueSwgbW9kZWw6IGFueSkgPT4gYm9vbGVhbiA9IChyb3c6IGFueSwgbW9kZWw6IGFueSkgPT4ge1xuICAgIHJldHVybiByb3cgPT09IG1vZGVsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50c1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgY2FsY3VsYXRpb25zXG4gICAgdGhpcy5fcmVzaXplU3VicyA9IHRoaXMuX29uUmVzaXplLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fcm93cykge1xuICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKS5mb3JFYWNoKChyb3c6IFRkRGF0YVRhYmxlUm93Q29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcm93SGVpZ2h0Q2FjaGVbdGhpcy5mcm9tUm93ICsgaW5kZXhdID0gcm93LmhlaWdodCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FsY3VsYXRlV2lkdGhzKCk7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIH0pO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBjb2x1bW4gcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMgPSB0aGlzLl9vbkNvbHVtblJlc2l6ZVxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMCkpXG4gICAgICAuc3Vic2NyaWJlKChjbGllbnRYOiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IGNsaWVudFg7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3Igc2Nyb2xsIGNvbHVtbiBoZWFkZXIgcmVwb3NpdGlvblxuICAgIHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzID0gdGhpcy5fb25Ib3Jpem9udGFsU2Nyb2xsLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoaG9yaXpvbnRhbFNjcm9sbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ID0gaG9yaXpvbnRhbFNjcm9sbDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgdmlydHVhbCBzY3JvbGwgcmVuZGVyaW5nXG4gICAgdGhpcy5fdmVydGljYWxTY3JvbGxTdWJzID0gdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGVtcGxhdGVzIGFuZCBzZXRzIHRoZW0gaW4gYSBtYXAgZm9yIGZhc3RlciBhY2Nlc3MuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZU1hcC5zZXQodGVtcGxhdGUudGREYXRhVGFibGVUZW1wbGF0ZSwgdGVtcGxhdGUudGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaG9zdHMgbmF0aXZlIGVsZW1lbnRzIHdpZHRocyB0byBzZWUgaWYgaXQgaGFzIGNoYW5nZWQgKHJlc2l6ZSBjaGVjaylcbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAvLyBjaGVjayBpZiB0aGUgc2Nyb2xsIGhhcyBiZWVuIHJlc2V0IHdoZW4gZWxlbWVudCBpcyBoaWRkZW5cbiAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSB0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID4gNSkge1xuICAgICAgLy8gc2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCBpZiBlbGVtZW50IGhhcyBiZWVuIHJlc2V0XG4gICAgICB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLm5leHQoMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG5ld0hvc3RXaWR0aDogbnVtYmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgLy8gaWYgdGhlIHdpZHRoIGhhcyBjaGFuZ2VkIHRoZW4gd2UgdGhyb3cgYSByZXNpemUgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faG9zdFdpZHRoICE9PSBuZXdIb3N0V2lkdGgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5faG9zdFdpZHRoID0gbmV3SG9zdFdpZHRoO1xuICAgICAgICAgIHRoaXMuX29uUmVzaXplLm5leHQoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG5ld0hvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAvLyBpZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBoYXMgY2hhbmdlZCwgdGhlbiB3ZSBtYXJrIGZvciBjaGVja1xuICAgICAgaWYgKHRoaXMuX2hvc3RIZWlnaHQgIT09IG5ld0hvc3RIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5faG9zdEhlaWdodCA9IG5ld0hvc3RIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdG8gYW4gb2JzZXJ2YWJsZSB0aGF0IGNoZWNrcyBpZiBhbGwgcm93cyBoYXZlIGJlZW4gcmVuZGVyZWRcbiAgICogc28gd2UgY2FuIHN0YXJ0IGNhbGN1bGF0aW5nIHRoZSB3aWR0aHNcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMgPSB0aGlzLl9yb3dzLmNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vblJlc2l6ZS5uZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgb2JzZXJ2YWJsZXMgd2hlbiBkYXRhIHRhYmxlIGlzIGRlc3Ryb3llZFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVydGljYWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jvd3NDaGFuZ2VkU3Vicykge1xuICAgICAgdGhpcy5fcm93c0NoYW5nZWRTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZUNoYW5nZXNTdWJzKSB7XG4gICAgICB0aGlzLl92YWx1ZUNoYW5nZXNTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGdldHMgZXhlY3V0ZWQgZXZlcnkgdGltZSB0aGVyZSBpcyBhIHNjcm9sbCBldmVudFxuICAgKiBDYWxscyB0aGUgc2Nyb2xsIG9ic2VydmFibGVcbiAgICovXG4gIGhhbmRsZVNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxIb3Jpem9udGFsT2Zmc2V0ICE9PSBob3Jpem9udGFsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX29uSG9yaXpvbnRhbFNjcm9sbC5uZXh0KGhvcml6b250YWxTY3JvbGwpO1xuICAgICAgfVxuICAgICAgY29uc3QgdmVydGljYWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ICE9PSB2ZXJ0aWNhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLm5leHQodmVydGljYWxTY3JvbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBuZWVkZWQgZm9yIHRoZSBjb2x1bW5zIHZpYSBpbmRleFxuICAgKi9cbiAgZ2V0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3dpZHRoc1tpbmRleF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q2VsbFZhbHVlKGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoY29sdW1uLm5lc3RlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbi5uZXN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShjb2x1bW4ubmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVbY29sdW1uLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBtZXRob2QgZm9yIHRlbXBsYXRlIHJlZmVyZW5jZXNcbiAgICovXG4gIGdldFRlbXBsYXRlUmVmKG5hbWU6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG1vZGVsIChuZ01vZGVsKSBvZiBjb21wb25lbnQgYnkgcmVtb3ZpbmcgYWxsIHZhbHVlcyBpbiBhcnJheS5cbiAgICovXG4gIGNsZWFyTW9kZWwoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZS5zcGxpY2UoMCwgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyBkYXRhIHRhYmxlIGFuZCByZXJlbmRlcnMgW2RhdGFdIGFuZCBbY29sdW1uc11cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvciBjbGVhcnMgYWxsIHJvd3MgZGVwZW5kaW5nIG9uICdjaGVja2VkJyB2YWx1ZS5cbiAgICovXG4gIF9zZWxlY3RBbGwoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHRvZ2dsZWRSb3dzOiBhbnlbXSA9IFtdO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIC8vIHNraXBpbmcgYWxyZWFkeSBzZWxlY3RlZCByb3dzXG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlLnB1c2gocm93KTtcbiAgICAgICAgICAvLyBjaGVja2luZyB3aGljaCBvbmVzIGFyZSBiZWluZyB0b2dnbGVkXG4gICAgICAgICAgdG9nZ2xlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgaWYgKHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICAgICAgdG9nZ2xlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIGNvbnN0IG1vZGVsUm93OiBhbnkgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgICAgICB9KVswXTtcbiAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy52YWx1ZS5pbmRleE9mKG1vZGVsUm93KTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KHsgcm93czogdG9nZ2xlZFJvd3MsIHNlbGVjdGVkOiBjaGVja2VkIH0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdyBpcyBzZWxlY3RlZFxuICAgKi9cbiAgaXNSb3dTZWxlY3RlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8vIGNvbXBhcmUgaXRlbXMgYnkgW2NvbXBhcmVXaXRoXSBmdW5jdGlvblxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgICA/IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhIHJvdyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlIGlmIHRoZSByb3cgJ2lzU2VsZWN0YWJsZSdcbiAgICogaGFuZGxlcyBjbnRybCBjbGlja3MgYW5kIHNoaWZ0IGNsaWNrcyBmb3IgbXVsdGktc2VsZWN0XG4gICAqL1xuICBzZWxlY3Qocm93OiBhbnksIGV2ZW50OiBFdmVudCwgY3VycmVudFNlbGVjdGVkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIFNoaWZ0IGtleSBpcyBzZWxlY3RlZCBhbmQgbmVlZCB0byBzZWxlY3QgZXZlcnl0aGluZyBpbiBiZXR3ZWVuXG4gICAgICBjb25zdCBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50ID0gZXZlbnQgYXMgTW91c2VFdmVudDtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIG1vdXNlRXZlbnQgJiYgbW91c2VFdmVudC5zaGlmdEtleSAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIGxldCBmaXJzdEluZGV4OiBudW1iZXIgPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAoY3VycmVudFNlbGVjdGVkID4gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICBmaXJzdEluZGV4ID0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgbGFzdEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGNsaWNraW5nIGEgY2hlY2tib3ggYmVoaW5kIHRoZSBpbml0aWFsIGNoZWNrLCB0aGVuIHRvZ2dsZSBhbGwgc2VsZWN0aW9ucyBleHBlY3QgdGhlIGluaXRpYWwgY2hlY2tib3hcbiAgICAgICAgLy8gZWxzZSB0aGUgY2hlY2tib3hlcyBjbGlja2VkIGFyZSBhbGwgYWZ0ZXIgdGhlIGluaXRpYWwgb25lXG4gICAgICAgIGlmIChcbiAgICAgICAgICAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID49IGN1cnJlbnRTZWxlY3RlZCAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA+IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCkgfHxcbiAgICAgICAgICAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDw9IGN1cnJlbnRTZWxlY3RlZCAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA8IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleClcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID4gY3VycmVudFNlbGVjdGVkIHx8IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA8IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgIC8vIGNoYW5nZSBpbmRleGVzIGRlcGVuZGluZyBvbiB3aGVyZSB0aGUgbmV4dCBjaGVja2JveCBpcyBzZWxlY3RlZCAoYmVmb3JlIG9yIGFmdGVyKVxuICAgICAgICAgIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPiBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGxhc3RJbmRleC0tO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDwgY3VycmVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBmaXJzdEluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHRoaXMuX2RhdGFbaV0pO1xuICAgICAgICAgICAgLy8gaWYgcm93IGlzIHNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIG9yIGlmIHJvdyB3YXMgdW5zZWxlY3RlZCBhbmQgZmlyc3QgY2hlY2tib3ggd2FzIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSB0aGUgdG9nZ2xlXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSAmJiAhcm93U2VsZWN0ZWQpIHx8ICghdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlICYmIHJvd1NlbGVjdGVkKSkge1xuICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQgJiZcbiAgICAgICAgICAgICAgKChjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA8PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkgfHxcbiAgICAgICAgICAgICAgICAoY3VycmVudFNlbGVjdGVkIDw9IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAmJiBjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIC8vIGVsc2UgaWYgdGhlIGNoZWNrYm94IHNlbGVjdGVkIHdhcyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsYXN0IHNlbGVjdGlvbiBhbmQgdGhlIGZpcnN0IHNlbGVjdGlvblxuICAgICAgICAgICAgICAvLyB0aGVuIHdlIHVuZG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NoaWZ0UHJldmlvdXNseVByZXNzZWQgPSB0cnVlO1xuICAgICAgICAvLyBpZiBzaGlmdCB3YXNudCBwcmVzc2VkLCB0aGVuIHdlIHRha2UgdGhlIGVsZW1lbnQgY2hlY2tlZCBhcyB0aGUgZmlyc3Qgcm93XG4gICAgICAgIC8vIGluY2FzZSB0aGUgbmV4dCBjbGljayB1c2VzIHNoaWZ0XG4gICAgICB9IGVsc2UgaWYgKG1vdXNlRXZlbnQgJiYgIW1vdXNlRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlID0gdGhpcy5fZG9TZWxlY3Rpb24ocm93LCBjdXJyZW50U2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIG9uc2VsZWN0c3RhcnQgbWV0aG9kIG9mIHRoZSBkb2N1bWVudCBzbyBvdGhlciB0ZXh0IG9uIHRoZSBwYWdlXG4gICAqIGRvZXNuJ3QgZ2V0IHNlbGVjdGVkIHdoZW4gZG9pbmcgc2hpZnQgc2VsZWN0aW9ucy5cbiAgICovXG4gIGRpc2FibGVUZXh0U2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIG9yaWdpbmFsIG9uc2VsZWN0c3RhcnQgbWV0aG9kLlxuICAgKi9cbiAgZW5hYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGVtaXRzIHRoZSBvblJvd0NsaWNrRXZlbnQgd2hlbiBhIHJvdyBpcyBjbGlja2VkXG4gICAqIGlmIGNsaWNrYWJsZSBpcyB0cnVlIGFuZCBzZWxlY3RhYmxlIGlzIGZhbHNlIHRoZW4gc2VsZWN0IHRoZSByb3dcbiAgICovXG4gIGhhbmRsZVJvd0NsaWNrKHJvdzogYW55LCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGlja2FibGUpIHtcbiAgICAgIC8vIGlnbm9yaW5nIGxpbnRpbmcgcnVsZXMgaGVyZSBiZWNhdXNlIGF0dHJpYnV0ZSBpdCBhY3R1YWxseSBudWxsIG9yIG5vdCB0aGVyZVxuICAgICAgLy8gY2FuJ3QgY2hlY2sgZm9yIHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3JjRWxlbWVudDogYW55ID0gZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGlmIChzcmNFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RvcFJvd0NsaWNrJykgPT09IG51bGwgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdtYXQtcHNldWRvLWNoZWNrYm94Jykge1xuICAgICAgICB0aGlzLnJvd0NsaWNrLmVtaXQoe1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBoYW5kbGUgZm9yIHNvcnQgY2xpY2sgZXZlbnQgaW4gY29sdW1uIGhlYWRlcnMuXG4gICAqL1xuICBoYW5kbGVTb3J0KGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NvcnRCeSA9PT0gY29sdW1uKSB7XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPVxuICAgICAgICB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgICAgICAgID8gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZ1xuICAgICAgICAgIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb3J0QnkgPSBjb2x1bW47XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gICAgfVxuICAgIHRoaXMuc29ydENoYW5nZS5uZXh0KHsgbmFtZTogdGhpcy5fc29ydEJ5Lm5hbWUsIG9yZGVyOiB0aGlzLl9zb3J0T3JkZXIgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFsbCBrZXl1cCBldmVudHMgd2hlbiBmb2N1c2luZyBhIGRhdGEgdGFibGUgcm93XG4gICAqL1xuICBfcm93S2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHJvdzogYW55LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgLyoqIGlmIHVzZXIgcHJlc3NlcyBlbnRlciBvciBzcGFjZSwgdGhlIHJvdyBzaG91bGQgYmUgc2VsZWN0ZWQgKi9cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgdXAgYXJyb3csIHdlIGZvY3VzIHRoZSBwcmV2IHJvd1xuICAgICAgICAgKiB1bmxlc3MgaXRzIHRoZSBmaXJzdCByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9yb3dzLnRvQXJyYXkoKVtpbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiB0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuZnJvbVJvdyArIGluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdXNlcnMgcHJlc3NlcyB0aGUgZG93biBhcnJvdywgd2UgZm9jdXMgdGhlIG5leHQgcm93XG4gICAgICAgICAqIHVubGVzcyBpdHMgdGhlIGxhc3Qgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLl9yb3dzLnRvQXJyYXkoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA8IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29sdW1uIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGNvbHVtbiBhbmQgaW5pdGlhbCBjbGllbnRYIG9mIGNvbHVtblxuICAgKi9cbiAgX2hhbmRsZVN0YXJ0Q29sdW1uRHJhZyhpbmRleDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMuX3Jlc2l6aW5nQ29sdW1uID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBuZXcgd2lkdGggZGVwZW5kaW5nIG9uIG5ldyBjbGllbnRYIG9mIGRyYWdnZXIgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlQ29sdW1uRHJhZyhldmVudDogTW91c2VFdmVudCB8IERyYWdFdmVudCk6IHZvaWQge1xuICAgIC8vIGNoZWNrIGlmIHRoZXJlIHdhcyBiZWVuIGEgc2VwYXJhdG9yIGNsaWNrZWQgZm9yIHJlc2l6ZVxuICAgIGlmICh0aGlzLl9yZXNpemluZ0NvbHVtbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmNsaWVudFggPiAwKSB7XG4gICAgICBjb25zdCB4UG9zaXRpb246IG51bWJlciA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHNlcGFyYXRvciBpcyBiZWluZyBtb3ZlZCB0byB0cnkgYW5kIHJlc2l6ZSB0aGUgY29sdW1uLCBlbHNlIGRvbnQgZG8gYW55dGhpbmdcbiAgICAgIGlmICh4UG9zaXRpb24gPiAwICYmIHRoaXMuX2NvbHVtbkNsaWVudFggPiAwICYmIHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFggIT09IDApIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgd2lkdGggZGVwZW5kaW5nIGlmIG1ha2luZyB0aGUgY29sdW1uIGJpZ2dlciBvciBzbWFsbGVyXG4gICAgICAgIGxldCBwcm9wb3NlZE1hbnVhbFdpZHRoOiBudW1iZXIgPSB0aGlzLl93aWR0aHNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnZhbHVlICsgKHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFgpO1xuICAgICAgICAvLyBpZiB0aGUgcHJvcG9zZWQgbmV3IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgcHJvamVjdGVkIG1pbiB3aWR0aCBvZiB0aGUgY29sdW1uLCB1c2UgcHJvamVjdGVkIG1pbiB3aWR0aFxuICAgICAgICBpZiAocHJvcG9zZWRNYW51YWxXaWR0aCA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9yZXNpemluZ0NvbHVtbl0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgICAgICBwcm9wb3NlZE1hbnVhbFdpZHRoID0gdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS5wcm9qZWN0ZWRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbnNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLndpZHRoID0gcHJvcG9zZWRNYW51YWxXaWR0aDtcbiAgICAgICAgLy8gdXBkYXRlIG5ldyB4IHBvc2l0aW9uIGZvciB0aGUgcmVzaXplZCBjb2x1bW5cbiAgICAgICAgdGhpcy5fb25Db2x1bW5SZXNpemUubmV4dCh4UG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmRzIGRyYWdnZWQgZmxhZ3NcbiAgICovXG4gIF9oYW5kbGVFbmRDb2x1bW5EcmFnKCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnRzXG4gICAqL1xuICBibG9ja0V2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXROZXN0ZWRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhbmFtZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgY29uc3Qgc3BsaXROYW1lOiBzdHJpbmdbXSA9IG5hbWUuc3BsaXQoL1xcLiguKykvLCAyKTtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShzcGxpdE5hbWVbMV0sIHZhbHVlW3NwbGl0TmFtZVswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWVbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvZXMgdGhlIGFjdHVhbCBSb3cgU2VsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIF9kb1NlbGVjdGlvbihyb3c6IGFueSwgcm93SW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHdhc1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdyk7XG4gICAgaWYgKCF3YXNTZWxlY3RlZCkge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmNsZWFyTW9kZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICAgIHJvdyA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICB9KVswXTtcbiAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpO1xuICAgIHRoaXMucm93U2VsZWN0LmVtaXQoeyByb3csIGluZGV4OiByb3dJbmRleCwgc2VsZWN0ZWQ6ICF3YXNTZWxlY3RlZCB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHJldHVybiAhd2FzU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFsbCB0aGUgc3RhdGUgb2YgYWxsIGNoZWNrYm94ZXNcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gdHlwZW9mIHRoaXMuX2RhdGEuZmluZCgoZDogYW55KSA9PiAhdGhpcy5pc1Jvd1NlbGVjdGVkKGQpKSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLl9kYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHdpZHRocyBmb3IgY29sdW1ucyBhbmQgY2VsbHMgZGVwZW5kaW5nIG9uIGNvbnRlbnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRocygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29sRWxlbWVudHMgJiYgdGhpcy5fY29sRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl93aWR0aHMgPSBbXTtcbiAgICAgIHRoaXMuX2NvbEVsZW1lbnRzLmZvckVhY2goKGNvbDogVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXgsIHRoaXMuX2NhbGN1bGF0ZVdpZHRoKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWRodHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGNvbHVtbnMgYWZ0ZXIgY2FsY3VsYXRpb24gdG8gc2VlIGlmIHRoZXkgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RDb2x1bW5XaWRodHMoKTogdm9pZCB7XG4gICAgbGV0IGZpeGVkVG90YWxXaWR0aDogbnVtYmVyID0gMDtcbiAgICAvLyBnZXQgdGhlIG51bWJlciBvZiB0b3RhbCBjb2x1bW5zIHRoYXQgaGF2ZSBmbGV4aWJsZSB3aWR0aHMgKG5vdCBmaXhlZCBvciBoaWRkZW4pXG4gICAgY29uc3QgZmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC5saW1pdCB8fCB3aWR0aC5tYXggfHwgd2lkdGgubWluKSB7XG4gICAgICAgIGZpeGVkVG90YWxXaWR0aCArPSB3aWR0aC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heCAmJiAhd2lkdGgubWluO1xuICAgIH0pLmxlbmd0aDtcbiAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggcGl4ZXMgYXJlIGxlZnQgdGhhdCBjb3VsZCBiZSBzcHJlYWQgYWNyb3NzXG4gICAgLy8gdGhlIGZsZXhpYmxlIGNvbHVtbnNcbiAgICBsZXQgcmVjYWxjdWxhdGVIb3N0V2lkdGg6IG51bWJlciA9IDA7XG4gICAgaWYgKGZpeGVkVG90YWxXaWR0aCA8IHRoaXMuaG9zdFdpZHRoKSB7XG4gICAgICByZWNhbGN1bGF0ZUhvc3RXaWR0aCA9IHRoaXMuaG9zdFdpZHRoIC0gZml4ZWRUb3RhbFdpZHRoO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBoYXZlIGZsZXhpYmxlIGNvbHVtbnMgYW5kIHBpeGVscyB0byBzcGFyZSBvbiB0aGVtXG4gICAgLy8gd2UgdHJ5IGFuZCBzcHJlYWQgdGhlIHBpeGVscyBhY3Jvc3MgdGhlbVxuICAgIGlmIChmbGV4aWJsZVdpZHRocyAmJiByZWNhbGN1bGF0ZUhvc3RXaWR0aCkge1xuICAgICAgY29uc3QgbmV3VmFsdWU6IG51bWJlciA9IE1hdGguZmxvb3IocmVjYWxjdWxhdGVIb3N0V2lkdGggLyBmbGV4aWJsZVdpZHRocyk7XG4gICAgICBsZXQgYWRqdXN0ZWROdW1iZXI6IG51bWJlciA9IDA7XG4gICAgICAvLyBhZGp1c3QgdGhlIGNvbHVtbiB3aWR0aHMgd2l0aCB0aGUgc3ByZWFkIHBpeGVsc1xuICAgICAgdGhpcy5fd2lkdGhzLmZvckVhY2goKGNvbFdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubWF4ICYmIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0udmFsdWUgPiBuZXdWYWx1ZSkgfHxcbiAgICAgICAgICAodGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5taW4gJiYgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS52YWx1ZSA8IG5ld1ZhbHVlKSB8fFxuICAgICAgICAgICF0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLmxpbWl0XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZHRoKGNvbFdpZHRoLmluZGV4LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgYWRqdXN0ZWROdW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgY29sdW1ucyB0aGF0IG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkLCB3ZSBzdGFydCBvdmVyXG4gICAgICBjb25zdCBuZXdGbGV4aWJsZVdpZHRoczogbnVtYmVyID0gdGhpcy5fd2lkdGhzLmZpbHRlcigod2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoKSA9PiB7XG4gICAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heDtcbiAgICAgIH0pLmxlbmd0aDtcbiAgICAgIGlmIChuZXdGbGV4aWJsZVdpZHRocyAhPT0gYWRqdXN0ZWROdW1iZXIgJiYgbmV3RmxleGlibGVXaWR0aHMgIT09IGZsZXhpYmxlV2lkdGhzKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGEgc2luZ2xlIGNvbHVtbiB0byBzZWUgaWYgaXQgY2FuIGJlIHJlY2FsY3VsYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpZHRoc1tpbmRleF0gPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGluZGV4LFxuICAgICAgbGltaXQ6IGZhbHNlLFxuICAgICAgbWluOiBmYWxzZSxcbiAgICAgIG1heDogZmFsc2UsXG4gICAgfTtcbiAgICAvLyBmbGFnIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNraXAgdGhlIG1pbiB3aWR0aCBwcm9qZWN0aW9uXG4gICAgLy8gZGVwZW5kaW5nIGlmIGEgd2lkdGggb3IgbWluIHdpZHRoIGhhcyBiZWVuIHByb3ZpZGVkXG4gICAgbGV0IHNraXBNaW5XaWR0aFByb2plY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jb2x1bW5zW2luZGV4XSkge1xuICAgICAgLy8gaWYgdGhlIHByb3ZpZGVkIHdpZHRoIGhhcyBtaW4vbWF4LCB0aGVuIHdlIGNoZWNrIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNldCBpdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCB3aWR0aE9wdHM6IElUZERhdGFUYWJsZUNvbHVtbldpZHRoID0gPElUZERhdGFUYWJsZUNvbHVtbldpZHRoPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBjb25maWd1cmVkIG1pbiwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgc2tpcE1pbldpZHRoUHJvamVjdGlvbiA9IHdpZHRoT3B0cyAmJiAhIXdpZHRoT3B0cy5taW47XG4gICAgICAgIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1pbiA+PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5taW47XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gd2lkdGggaXMgbW9yZSB0aGFuIHRoZSBjb25maWd1cmVkIG1heCwgd2Ugb3ZlcnJpZGUgaXRcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1heCA8PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5tYXg7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5tYXggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGl0IGhhcyBhIGZpeGVkIHdpZHRoLCB0aGVuIHdlIGp1c3Qgc2V0IGl0XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gPG51bWJlcj50aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoO1xuICAgICAgICBza2lwTWluV2lkdGhQcm9qZWN0aW9uID0gdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIHdhc24ndCBhbnkgd2lkdGggb3IgbWluIHdpZHRoIHByb3ZpZGVkLCB3ZSBzZXQgYSBtaW4gdG8gd2hhdCB0aGUgY29sdW1uIHdpZHRoIG1pbiBzaG91bGQgYmVcbiAgICBpZiAoIXNraXBNaW5XaWR0aFByb2plY3Rpb24gJiYgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbaW5kZXhdLnByb2plY3RlZFdpZHRoO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmljIG1ldGhvZCB0byBjYWxjdWxhdGUgY29sdW1uIHdpZHRoXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlbmRlcmVkQ29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW10gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2w6IElUZERhdGFUYWJsZUNvbHVtbikgPT4gIWNvbC5oaWRkZW4pO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuaG9zdFdpZHRoIC8gcmVuZGVyZWRDb2x1bW5zLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGN1bGF0ZSB0aGUgcm93cyB0byBiZSByZW5kZXJlZCBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk6IHZvaWQge1xuICAgIGxldCBzY3JvbGxlZFJvd3M6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIGxldCByb3dIZWlnaHRTdW06IG51bWJlciA9IDA7XG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHJvd3MgdG8gc2VlIGlmIHdlIGhhdmUgdGhlaXIgaGVpZ2h0IGNhY2hlZFxuICAgICAgLy8gYW5kIHN1bSB0aGVtIGFsbCB0byBjYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodFxuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChkOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIHJvd3MgYXQgZmlyc3QgYW5kIGFzc3VtZSBhbGxcbiAgICAgICAgLy8gcm93cyBhcmUgdGhlIHNhbWUgaGVpZ2h0IGFzIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKCF0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSkge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldID0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbMF0gfHwgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgcm93SGVpZ2h0U3VtICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldO1xuICAgICAgICAvLyBjaGVjayBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSByb3dIZWlnaHRTdW0gPiAwKSB7XG4gICAgICAgICAgc2Nyb2xsZWRSb3dzKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSByb3dIZWlnaHRTdW07XG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGNvbnN0IGZyb21Sb3c6IG51bWJlciA9IHNjcm9sbGVkUm93cyAtIFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IGZyb21Sb3cgPiAwID8gZnJvbVJvdyA6IDA7XG5cbiAgICAgIGxldCBob3N0SGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9ob3N0SGVpZ2h0O1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgLy8gY2FsY3VsYXRlIGhvdyBtYW55IHJvd3MgY2FuIGZpdCBpbiB0aGUgdmlld3BvcnRcbiAgICAgIHdoaWxlIChob3N0SGVpZ2h0ID4gMCkge1xuICAgICAgICBob3N0SGVpZ2h0IC09IHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICAgIC8vIHNldCB0aGUgbGFzdCByb3cgdG8gYmUgcmVuZGVyZWQgdGFraW5nIGludG8gYWNjb3VudCB0aGUgcm93IG9mZnNldFxuICAgICAgY29uc3QgcmFuZ2U6IG51bWJlciA9IGluZGV4IC0gMSArIFREX1ZJUlRVQUxfT0ZGU0VUICogMjtcbiAgICAgIGxldCB0b1JvdzogbnVtYmVyID0gcmFuZ2UgKyB0aGlzLmZyb21Sb3c7XG4gICAgICAvLyBpZiBsYXN0IHJvdyBpcyBncmVhdGVyIHRoYW4gdGhlIHRvdGFsIGxlbmd0aCwgdGhlbiB3ZSB1c2UgdGhlIHRvdGFsIGxlbmd0aFxuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwcm9wZXIgb2Zmc2V0IGRlcGVuZGluZyBvbiBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgIGlmIChzY3JvbGxlZFJvd3MgPiBURF9WSVJUVUFMX09GRlNFVCkge1xuICAgICAgZm9yIChsZXQgaW5kZXg6IG51bWJlciA9IDA7IGluZGV4IDwgdGhpcy5mcm9tUm93OyBpbmRleCsrKSB7XG4gICAgICAgIG9mZnNldCArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fb2Zmc2V0VHJhbnNmb3JtID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShcbiAgICAgICd0cmFuc2xhdGVZKCcgKyAob2Zmc2V0IC0gdGhpcy50b3RhbEhlaWdodCkgKyAncHgpJyxcbiAgICApO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsRGF0YSA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLmZyb21Sb3csIHRoaXMudG9Sb3cpO1xuICAgIH1cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=