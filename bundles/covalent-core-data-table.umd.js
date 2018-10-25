(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/portal'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('rxjs'), require('rxjs/operators'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/checkbox'), require('@angular/material/tooltip'), require('@angular/material/icon'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/data-table', ['exports', '@angular/core', '@angular/cdk/portal', '@angular/platform-browser', '@angular/forms', '@angular/cdk/coercion', '@angular/cdk/keycodes', 'rxjs', 'rxjs/operators', '@covalent/core/common', '@angular/common', '@angular/material/checkbox', '@angular/material/tooltip', '@angular/material/icon', '@angular/material/core'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['data-table'] = {}),global.ng.core,global.ng.cdk.portal,global.ng.platformBrowser,global.ng.forms,global.ng.cdk.coercion,global.ng.cdk.keycodes,global.rxjs,global.rxjs.operators,global.covalent.core.common,global.ng.common,global.ng.material.checkbox,global.ng.material.tooltip,global.ng.material.icon,global.ng.material.core));
}(this, (function (exports,core,portal,platformBrowser,forms,coercion,keycodes,rxjs,operators,common,common$1,checkbox,tooltip,icon,core$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableColumnRowComponent = /** @class */ (function () {
        function TdDataTableColumnRowComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
        }
        TdDataTableColumnRowComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'tr[td-data-table-column-row]',
                        template: "<ng-content></ng-content>",
                        styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableColumnRowComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        return TdDataTableColumnRowComponent;
    }());
    var TdDataTableRowComponent = /** @class */ (function () {
        function TdDataTableRowComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._selected = false;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
        }
        Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
            get: /**
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} selected
             * @return {?}
             */ function (selected) {
                if (selected) {
                    this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
                }
                else {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
                }
                this._selected = selected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableRowComponent.prototype, "height", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var height = 48;
                if (this._elementRef.nativeElement) {
                    height = (( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().height;
                }
                return height;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listening to click event to explicitly focus the row element.
         */
        /**
         * Listening to click event to explicitly focus the row element.
         * @return {?}
         */
        TdDataTableRowComponent.prototype.clickListener = /**
         * Listening to click event to explicitly focus the row element.
         * @return {?}
         */
            function () {
                this.focus();
            };
        /**
         * @return {?}
         */
        TdDataTableRowComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this._elementRef.nativeElement.focus();
            };
        TdDataTableRowComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'tr[td-data-table-row]',
                        template: "<ng-content></ng-content>",
                        styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableRowComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        TdDataTableRowComponent.propDecorators = {
            selected: [{ type: core.Input, args: ['selected',] }],
            clickListener: [{ type: core.HostListener, args: ['click',] }]
        };
        return TdDataTableRowComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableTemplateDirective = /** @class */ (function (_super) {
        __extends(TdDataTableTemplateDirective, _super);
        function TdDataTableTemplateDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdDataTableTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[tdDataTableTemplate]ng-template' },] }
        ];
        /** @nocollapse */
        TdDataTableTemplateDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        TdDataTableTemplateDirective.propDecorators = {
            tdDataTableTemplate: [{ type: core.Input }]
        };
        return TdDataTableTemplateDirective;
    }(portal.TemplatePortalDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var TdDataTableSortingOrder = {
        Ascending: 'ASC',
        Descending: 'DESC',
    };
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
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdDataTableMixinBase = common.mixinControlValueAccessor(TdDataTableBase, []);
    var TdDataTableComponent = /** @class */ (function (_super) {
        __extends(TdDataTableComponent, _super);
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
            _this._onColumnResize = new rxjs.Subject();
            _this._widths = [];
            _this._onResize = new rxjs.Subject();
            _this._scrollHorizontalOffset = 0;
            _this._onHorizontalScroll = new rxjs.Subject();
            _this._onVerticalScroll = new rxjs.Subject();
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
            _this.onSortChange = new core.EventEmitter();
            /**
             * rowSelect?: function
             * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
             * Emits an [ITdDataTableSelectEvent] implemented object.
             */
            _this.onRowSelect = new core.EventEmitter();
            /**
             * rowClick?: function
             * Event emitted when a row is clicked.
             * Emits an [ITdDataTableRowClickEvent] implemented object.
             */
            _this.onRowClick = new core.EventEmitter();
            /**
             * selectAll?: function
             * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
             * Emits an [ITdDataTableSelectAllEvent] implemented object.
             */
            _this.onSelectAll = new core.EventEmitter();
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
             */ function () {
                return this._resizingColumn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "hostWidth", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
                return this._indeterminate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (data) {
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
             */ function () {
                return this._virtualData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "columns", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (cols) {
                this._columns = cols;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "resizableColumns", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (resizableColumns) {
                this._resizableColumns = coercion.coerceBooleanProperty(resizableColumns);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "selectable", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (selectable) {
                this._selectable = coercion.coerceBooleanProperty(selectable);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "clickable", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (clickable) {
                this._clickable = coercion.coerceBooleanProperty(clickable);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (sortable) {
                this._sortable = coercion.coerceBooleanProperty(sortable);
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
             */ function (columnName) {
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
             */ function () {
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
             */ function (order) {
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
             */ function () {
                return this._sortOrder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "hasData", {
            get: /**
             * @return {?}
             */ function () {
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
                this._columnResizeSubs = this._onColumnResize.asObservable().pipe(operators.debounceTime(0)).subscribe(function (clientX) {
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
                this._rowsChangedSubs = this._rows.changes.pipe(operators.debounceTime(0)).subscribe(function () {
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
                var element = (( /** @type {?} */(event.target)));
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
                    var mouseEvent = ( /** @type {?} */(event));
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
                    var element = ( /** @type {?} */(event.target));
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
                    case keycodes.ENTER:
                    case keycodes.SPACE:
                        /** if user presses enter or space, the row should be selected */
                        if (this.selectable) {
                            this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                        }
                        break;
                    case keycodes.UP_ARROW:
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
                    case keycodes.DOWN_ARROW:
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
                        for (var _b = __values(this._data), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var row = _c.value;
                            if (!this.isRowSelected(row)) {
                                continue;
                            }
                            this._indeterminate = true;
                            break;
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
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
                        var widthOpts = ( /** @type {?} */(this.columns[index].width));
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
                        this._widths[index].value = ( /** @type {?} */(this.columns[index].width));
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
            { type: core.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdDataTableComponent; }),
                                multi: true,
                            }],
                        selector: 'td-data-table',
                        template: "<table td-data-table\n        [style.left.px]=\"columnsLeftScroll\"\n        [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\"\n          (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\">\n        </mat-checkbox>\n      </th>\n      <th td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\">\n        <span [matTooltip]=\"column.tooltip\">{{column.label}}</span>\n        <span td-column-resizer\n              *ngIf=\"resizableColumns\"\n              draggable=\"true\"\n              class=\"td-data-table-column-resizer\"\n              [class.td-resizing]=\"i === resizingColumn\"\n              (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n              (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n              (drag)=\"_handleColumnDrag($event)\"\n              (dragend)=\"_handleEndColumnDrag()\"\n              (mouseup)=\"_handleEndColumnDrag()\">\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\"\n      (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table td-data-table\n          [style.transform]=\"offsetTransform\"\n          [style.position]=\"'absolute'\"\n          [class.mat-selectable]=\"selectable\"\n          [class.mat-clickable]=\"clickable\">\n    <tbody class=\"td-data-table-body\">\n      <tr td-data-table-row\n          #dtRow\n          [tabIndex]=\"selectable ? 0 : -1\"\n          [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n          *ngFor=\"let row of virtualData; let rowIndex = index\"\n          (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n          (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n          (keydown.space)=\"blockEvent($event)\"\n          (keydown.shift.space)=\"blockEvent($event)\"\n          (keydown.shift)=\"disableTextSelection()\"\n          (keyup.shift)=\"enableTextSelection()\">\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\">\n          </mat-pseudo-checkbox>\n        </td>\n        <td td-data-table-cell\n            [numeric]=\"column.numeric\"\n            [hidden]=\"column.hidden\"\n            *ngFor=\"let column of columns; let i = index\"\n            [style.min-width.px]=\"getColumnWidth(i)\"\n            [style.max-width.px]=\"getColumnWidth(i)\">\n          <span *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name }\">\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
                        inputs: ['value'],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;overflow:hidden}:host .td-data-table-scrollable{position:relative;overflow:auto;height:calc(100% - 56px)}.td-data-table-column-resizer{right:0;width:6px;cursor:col-resize}.td-data-table-column-resizer,.td-data-table-column-resizer .td-data-table-column-separator{position:absolute;height:100%;top:0}.td-data-table-column-resizer .td-data-table-column-separator{left:2px}.td-data-table-column-resizer.td-resizing{cursor:-webkit-grabbing}table.td-data-table{width:auto!important}table.td-data-table.mat-selectable tbody>tr.td-data-table-row{transition:background-color .2s}table.td-data-table.mat-selectable .td-data-table-column:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:first-child>.td-data-table-column-content-wrapper{width:18px;min-width:18px;padding:0 24px}table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-left:0}[dir=rtl] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-right:0;padding-left:28px}table.td-data-table td.mat-checkbox-cell,table.td-data-table th.mat-checkbox-column{min-width:42px;width:42px;font-size:0!important}table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{width:18px;height:18px}::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after,::ng-deep table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after{width:11px!important;height:4px!important}table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{width:18px;height:18px;margin:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [platformBrowser.DOCUMENT,] }] },
                { type: core.ElementRef },
                { type: platformBrowser.DomSanitizer },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdDataTableComponent.propDecorators = {
            _templates: [{ type: core.ContentChildren, args: [TdDataTableTemplateDirective,] }],
            _scrollableDiv: [{ type: core.ViewChild, args: ['scrollableDiv',] }],
            _colElements: [{ type: core.ViewChildren, args: ['columnElement',] }],
            _rows: [{ type: core.ViewChildren, args: [TdDataTableRowComponent,] }],
            data: [{ type: core.Input, args: ['data',] }],
            columns: [{ type: core.Input, args: ['columns',] }],
            resizableColumns: [{ type: core.Input, args: ['resizableColumns',] }],
            selectable: [{ type: core.Input, args: ['selectable',] }],
            clickable: [{ type: core.Input, args: ['clickable',] }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            sortable: [{ type: core.Input, args: ['sortable',] }],
            sortBy: [{ type: core.Input, args: ['sortBy',] }],
            sortOrder: [{ type: core.Input, args: ['sortOrder',] }],
            onSortChange: [{ type: core.Output, args: ['sortChange',] }],
            onRowSelect: [{ type: core.Output, args: ['rowSelect',] }],
            onRowClick: [{ type: core.Output, args: ['rowClick',] }],
            onSelectAll: [{ type: core.Output, args: ['selectAll',] }],
            compareWith: [{ type: core.Input, args: ['compareWith',] }]
        };
        return TdDataTableComponent;
    }(_TdDataTableMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableColumnComponent = /** @class */ (function () {
        function TdDataTableColumnComponent(_elementRef, _renderer) {
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
            this.onSortChange = new core.EventEmitter();
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
        }
        Object.defineProperty(TdDataTableColumnComponent.prototype, "projectedWidth", {
            get: /**
             * @return {?}
             */ function () {
                if (this._columnContent && this._columnContent.nativeElement) {
                    return (( /** @type {?} */(this._columnContent.nativeElement))).getBoundingClientRect().width;
                }
                return 100;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "sortOrder", {
            /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of column.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             */
            set: /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of column.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             * @param {?} order
             * @return {?}
             */ function (order) {
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
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindClickable", {
            get: /**
             * @return {?}
             */ function () {
                return this.sortable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bingSortable", {
            get: /**
             * @return {?}
             */ function () {
                return this.sortable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindActive", {
            get: /**
             * @return {?}
             */ function () {
                return this.active;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindNumeric", {
            get: /**
             * @return {?}
             */ function () {
                return this.numeric;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listening to click event on host to throw a sort event
         */
        /**
         * Listening to click event on host to throw a sort event
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.handleClick = /**
         * Listening to click event on host to throw a sort event
         * @return {?}
         */
            function () {
                if (this.sortable) {
                    this.onSortChange.emit({ name: this.name, order: this._sortOrder });
                }
            };
        /**
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.isAscending = /**
         * @return {?}
         */
            function () {
                return this._sortOrder === TdDataTableSortingOrder.Ascending;
            };
        /**
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.isDescending = /**
         * @return {?}
         */
            function () {
                return this._sortOrder === TdDataTableSortingOrder.Descending;
            };
        TdDataTableColumnComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'th[td-data-table-column]',
                        template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"(!(active) || isAscending())\"\n    [class.mat-desc]=\"(active && isDescending())\">\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"(!(active) || isAscending())\"\n    [class.mat-desc]=\"(active && isDescending())\">\n    arrow_upward\n  </mat-icon>\n</span>\n<ng-content select=\"[td-column-resizer]\"></ng-content>\n",
                        styles: [":host{white-space:nowrap;position:relative;padding:0;vertical-align:middle;text-align:left}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{height:16px;width:16px;font-size:16px!important;line-height:16px!important}:host mat-icon.td-data-table-sort-icon{opacity:0;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;position:absolute;top:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}:host mat-icon.td-data-table-sort-icon.mat-desc{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:initial}html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:initial}html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableColumnComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        TdDataTableColumnComponent.propDecorators = {
            _columnContent: [{ type: core.ViewChild, args: ['columnContent', { read: core.ElementRef },] }],
            name: [{ type: core.Input, args: ['name',] }],
            sortable: [{ type: core.Input, args: ['sortable',] }],
            active: [{ type: core.Input, args: ['active',] }],
            numeric: [{ type: core.Input, args: ['numeric',] }],
            sortOrder: [{ type: core.Input, args: ['sortOrder',] }],
            onSortChange: [{ type: core.Output, args: ['sortChange',] }],
            bindClickable: [{ type: core.HostBinding, args: ['class.mat-clickable',] }],
            bingSortable: [{ type: core.HostBinding, args: ['class.mat-sortable',] }],
            bindActive: [{ type: core.HostBinding, args: ['class.mat-active',] }],
            bindNumeric: [{ type: core.HostBinding, args: ['class.mat-numeric',] }],
            handleClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return TdDataTableColumnComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableCellComponent = /** @class */ (function () {
        function TdDataTableCellComponent(_elementRef, _renderer) {
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
        Object.defineProperty(TdDataTableCellComponent.prototype, "bindNumeric", {
            get: /**
             * @return {?}
             */ function () {
                return this.numeric;
            },
            enumerable: true,
            configurable: true
        });
        TdDataTableCellComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'td[td-data-table-cell]',
                        template: "<div class=\"td-data-table-cell-content-wrapper\"\n     [class.td-data-table-cell-numeric]=\"numeric\">\n  <ng-content></ng-content>\n</div>",
                        styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-ms-flex-pack:end;justify-content:flex-end}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableCellComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        TdDataTableCellComponent.propDecorators = {
            numeric: [{ type: core.Input, args: ['numeric',] }],
            bindNumeric: [{ type: core.HostBinding, args: ['class.mat-numeric',] }]
        };
        return TdDataTableCellComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableTableComponent = /** @class */ (function () {
        function TdDataTableTableComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
        }
        TdDataTableTableComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'table[td-data-table]',
                        template: "<ng-content></ng-content>",
                        styles: [":host{width:100%;position:relative;border-spacing:0;overflow:hidden;border-collapse:collapse}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableTableComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        return TdDataTableTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableService = /** @class */ (function () {
        function TdDataTableService() {
        }
        /**
         * params:
         * - data: any[]
         * - searchTerm: string
         * - ignoreCase: boolean = false
         * - excludedColumns: string[] = []
         *
         * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
         */
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
        TdDataTableService.prototype.filterData = /**
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
            function (data, searchTerm, ignoreCase, excludedColumns) {
                if (ignoreCase === void 0) {
                    ignoreCase = false;
                }
                /** @type {?} */
                var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
                if (filter) {
                    data = data.filter(function (item) {
                        /** @type {?} */
                        var res = Object.keys(item).find(function (key) {
                            if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                                /** @type {?} */
                                var preItemValue = ('' + item[key]);
                                /** @type {?} */
                                var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                                return itemValue.indexOf(filter) > -1;
                            }
                        });
                        return !(typeof res === 'undefined');
                    });
                }
                return data;
            };
        /**
         * params:
         * - data: any[]
         * - sortBy: string
         * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
         *
         * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
         */
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
        TdDataTableService.prototype.sortData = /**
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
            function (data, sortBy, sortOrder) {
                if (sortOrder === void 0) {
                    sortOrder = TdDataTableSortingOrder.Ascending;
                }
                if (sortBy) {
                    data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
                    data.sort(function (a, b) {
                        /** @type {?} */
                        var compA = a[sortBy];
                        /** @type {?} */
                        var compB = b[sortBy];
                        /** @type {?} */
                        var direction = 0;
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
            };
        /**
         * params:
         * - data: any[]
         * - fromRow: number
         * - toRow: : number
         *
         * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
         */
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
        TdDataTableService.prototype.pageData = /**
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
            function (data, fromRow, toRow) {
                if (fromRow >= 1) {
                    data = data.slice(fromRow - 1, toRow);
                }
                return data;
            };
        TdDataTableService.decorators = [
            { type: core.Injectable }
        ];
        return TdDataTableService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function DATA_TABLE_PROVIDER_FACTORY(parent) {
        return parent || new TdDataTableService();
    }
    /** @type {?} */
    var DATA_TABLE_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdDataTableService,
        deps: [[new core.Optional(), new core.SkipSelf(), TdDataTableService]],
        useFactory: DATA_TABLE_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DATA_TABLE = [
        TdDataTableComponent,
        TdDataTableTemplateDirective,
        TdDataTableColumnComponent,
        TdDataTableCellComponent,
        TdDataTableRowComponent,
        TdDataTableColumnRowComponent,
        TdDataTableTableComponent,
    ];
    var CovalentDataTableModule = /** @class */ (function () {
        function CovalentDataTableModule() {
        }
        CovalentDataTableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common$1.CommonModule,
                            checkbox.MatCheckboxModule,
                            tooltip.MatTooltipModule,
                            icon.MatIconModule,
                            core$1.MatPseudoCheckboxModule,
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
        return CovalentDataTableModule;
    }());

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

    exports.CovalentDataTableModule = CovalentDataTableModule;
    exports.TdDataTableSortingOrder = TdDataTableSortingOrder;
    exports.TdDataTableBase = TdDataTableBase;
    exports._TdDataTableMixinBase = _TdDataTableMixinBase;
    exports.TdDataTableComponent = TdDataTableComponent;
    exports.TdDataTableCellComponent = TdDataTableCellComponent;
    exports.TdDataTableColumnComponent = TdDataTableColumnComponent;
    exports.TdDataTableColumnRowComponent = TdDataTableColumnRowComponent;
    exports.TdDataTableRowComponent = TdDataTableRowComponent;
    exports.TdDataTableTableComponent = TdDataTableTableComponent;
    exports.TdDataTableTemplateDirective = TdDataTableTemplateDirective;
    exports.DATA_TABLE_PROVIDER_FACTORY = DATA_TABLE_PROVIDER_FACTORY;
    exports.TdDataTableService = TdDataTableService;
    exports.DATA_TABLE_PROVIDER = DATA_TABLE_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1kYXRhLXRhYmxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS1yb3cvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RpcmVjdGl2ZXMvZGF0YS10YWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtY2VsbC9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtdGFibGUvZGF0YS10YWJsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvc2VydmljZXMvZGF0YS10YWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jZWxsL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndHJbdGQtZGF0YS10YWJsZS1jb2x1bW4tcm93XScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNvbHVtblJvd0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNvbHVtbi1yb3cnKTtcbiAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0clt0ZC1kYXRhLXRhYmxlLXJvd10nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVSb3dDb21wb25lbnQge1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCdzZWxlY3RlZCcpXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IDQ4O1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGhlaWdodCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1yb3cnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5pbmcgdG8gY2xpY2sgZXZlbnQgdG8gZXhwbGljaXRseSBmb2N1cyB0aGUgcm93IGVsZW1lbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGNsaWNrTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3RkRGF0YVRhYmxlVGVtcGxhdGVdbmctdGVtcGxhdGUnfSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIHRkRGF0YVRhYmxlVGVtcGxhdGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICAgICAgIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCxcbiAgICAgICAgIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWYsIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdCwgSW5qZWN0LFxuICAgICAgICAgT3B0aW9uYWwsIFZpZXdDaGlsZHJlbiwgRWxlbWVudFJlZiwgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIERPV05fQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLXRhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIHtcbiAgQXNjZW5kaW5nID0gJ0FTQycsXG4gIERlc2NlbmRpbmcgPSAnREVTQycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGgge1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIG51bWVyaWM/OiBib29sZWFuO1xuICBmb3JtYXQ/OiAodmFsdWU6IGFueSkgPT4gYW55O1xuICBuZXN0ZWQ/OiBib29sZWFuO1xuICBzb3J0YWJsZT86IGJvb2xlYW47XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGZpbHRlcj86IGJvb2xlYW47XG4gIHdpZHRoPzogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQge1xuICByb3c6IGFueTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQge1xuICByb3dzOiBhbnlbXTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudCB7XG4gIHJvdzogYW55O1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbENvbHVtbldpZHRoIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbGltaXQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIG1pbj86IGJvb2xlYW47XG4gIG1heD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gc2V0IHRoZSByb3dzIG9mZnNldCBiZWZvcmUgYW5kIGFmdGVyIHRoZSB2aWV3cG9ydFxuICovXG5jb25zdCBURF9WSVJUVUFMX09GRlNFVDogbnVtYmVyID0gMjtcblxuLyoqXG4gKiBDb25zdGFudCB0byBzZXQgZGVmYXVsdCByb3cgaGVpZ2h0IGlmIG5vbmUgaXMgcHJvdmlkZWRcbiAqL1xuY29uc3QgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ6IG51bWJlciA9IDQ4O1xuXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZERhdGFUYWJsZU1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGREYXRhVGFibGVCYXNlLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGREYXRhVGFibGVDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1kYXRhLXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgX1RkRGF0YVRhYmxlTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKiByZXNwb25zaXZlIHdpZHRoIGNhbGN1bGF0aW9ucyAqL1xuICBwcml2YXRlIF9yZXNpemVTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Jvd3NDaGFuZ2VkU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9ob3N0V2lkdGg6IG51bWJlciA9IDA7XG5cbiAgLyoqIG1hbnVhbGx5IHJlc2l6YWJsZSBjb2x1bW5zICovXG4gIHByaXZhdGUgX3Jlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sdW1uQ2xpZW50WDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY29sdW1uUmVzaXplU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZXNpemluZ0NvbHVtbjogbnVtYmVyO1xuICBwcml2YXRlIF9vbkNvbHVtblJlc2l6ZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIGdldCByZXNpemluZ0NvbHVtbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemluZ0NvbHVtbjtcbiAgfVxuXG4gIGdldCBob3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAvLyBpZiB0aGUgY2hlY2tib3hlcyBhcmUgcmVuZGVyZWQsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZWlyIHdpZHRoXG4gICAgLy8gZnJvbSB0aGUgdG90YWwgd2lkdGggdG8gY2FsY3VsYXRlIHByb3Blcmx5XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hvc3RXaWR0aCAtIDQyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faG9zdFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2lkdGhzOiBJSW50ZXJuYWxDb2x1bW5XaWR0aFtdID0gW107XG4gIHByaXZhdGUgX29uUmVzaXplOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogY29sdW1uIGhlYWRlciByZXBvc2l0aW9uIGFuZCB2aWV3cG9vcnQgKi9cbiAgcHJpdmF0ZSBfdmVydGljYWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2hvcml6b250YWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbEhvcml6b250YWxPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfb25Ib3Jpem9udGFsU2Nyb2xsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX29uVmVydGljYWxTY3JvbGw6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICAvLyBBcnJheSBvZiBjYWNoZWQgcm93IGhlaWdodHMgdG8gYWxsb3cgZHluYW1pYyByb3cgaGVpZ2h0c1xuICBwcml2YXRlIF9yb3dIZWlnaHRDYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgLy8gVG90YWwgcHNldWRvIGhlaWdodCBvZiBhbGwgdGhlIGVsZW1lbnRzXG4gIHByaXZhdGUgX3RvdGFsSGVpZ2h0OiBudW1iZXIgPSAwO1xuICAvLyBUb3RhbCBob3N0IGhlaWdodCBmb3IgdGhlIHZpZXdwb3J0XG4gIHByaXZhdGUgX2hvc3RIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8vIFNjcm9sbGVkIHZlcnRpY2FsIHBpeGVsc1xuICBwcml2YXRlIF9zY3JvbGxWZXJ0aWNhbE9mZnNldDogbnVtYmVyID0gMDtcbiAgLy8gU3R5bGUgdG8gbW92ZSB0aGUgY29udGVudCBhIGNlcnRhaW4gb2Zmc2V0IGRlcGVuZGluZyBvbiBzY3JvbGxlZCBvZmZzZXRcbiAgcHJpdmF0ZSBfb2Zmc2V0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XG5cbiAgLy8gVmFyaWFibGVzIHRoYXQgc2V0IGZyb20gYW5kIHRvIHdoaWNoIHJvd3Mgd2lsbCBiZSByZW5kZXJlZFxuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0IHN0eWxlIHdpdGggYSBwcm9wZXIgY2FsY3VsYXRpb24gb24gaG93IG11Y2ggaXQgc2hvdWxkIG1vdmVcbiAgICogb3ZlciB0aGUgeSBheGlzIG9mIHRoZSB0b3RhbCBoZWlnaHRcbiAgICovXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VHJhbnNmb3JtO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFzc3VtZWQgdG90YWwgaGVpZ2h0IG9mIHRoZSByb3dzXG4gICAqL1xuICBnZXQgdG90YWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5pdGlhbCByb3cgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgZ2V0IGZyb21Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbVJvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXN0IHJvdyB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBnZXQgdG9Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Sb3c7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZXNTdWJzOiBTdWJzY3JpcHRpb247XG4gIC8qKiBpbnRlcm5hbCBhdHRyaWJ1dGVzICovXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICAvLyBkYXRhIHZpcnR1YWxseSBpdGVyYXRlZCBieSBjb21wb25lbnRcbiAgcHJpdmF0ZSBfdmlydHVhbERhdGE6IGFueVtdO1xuICBwcml2YXRlIF9jb2x1bW5zOiBJVGREYXRhVGFibGVDb2x1bW5bXTtcbiAgcHJpdmF0ZSBfc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGlja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9hbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHNvcnRpbmcgKi9cbiAgcHJpdmF0ZSBfc29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc29ydEJ5OiBJVGREYXRhVGFibGVDb2x1bW47XG4gIHByaXZhdGUgX3NvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG5cbiAgLyoqIHNoaWZ0IHNlbGVjdCAqL1xuICBwcml2YXRlIF9zaGlmdFByZXZpb3VzbHlQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xhc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RDaGVja2JveFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHRlbXBsYXRlIGZldGNoaW5nIHN1cHBvcnQgKi9cbiAgcHJpdmF0ZSBfdGVtcGxhdGVNYXA6IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSkgX3RlbXBsYXRlczogUXVlcnlMaXN0PFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmU+O1xuXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVEaXYnKSBfc2Nyb2xsYWJsZURpdjogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCdjb2x1bW5FbGVtZW50JykgX2NvbEVsZW1lbnRzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGRyZW4oVGREYXRhVGFibGVSb3dDb21wb25lbnQpIF9yb3dzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHNjcm9sbCBwb3NpdGlvbiB0byByZXBvc2l0aW9uIGNvbHVtbiBoZWFkZXJzXG4gICAqL1xuICBnZXQgY29sdW1uc0xlZnRTY3JvbGwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAqIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdmFsdWVzIGFyZSBzZWxlY3RlZC5cbiAgICovXG4gIGdldCBhbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB2YWx1ZXMgYXJlIG5vdCBkZXNlbGVjdGVkXG4gICAqIGFuZCBhdCBsZWFzdCBvbmUgaXMuXG4gICAqL1xuICBnZXQgaW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkYXRhPzoge1trZXk6IHN0cmluZ106IGFueX1bXVxuICAgKiBTZXRzIHRoZSBkYXRhIHRvIGJlIHJlbmRlcmVkIGFzIHJvd3MuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlID0gW107XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgdGhlIGRhdGEgaGFzIGNoYW5nZWRcbiAgICAgIHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB2aXJ0dWFsRGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxEYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbHVtbnM/OiBJVGREYXRhVGFibGVDb2x1bW5bXVxuICAgKiBTZXRzIGFkZGl0aW9uYWwgY29sdW1uIGNvbmZpZ3VyYXRpb24uIFtJVGREYXRhVGFibGVDb2x1bW4ubmFtZV0gaGFzIHRvIGV4aXN0IGluIFtkYXRhXSBhcyBrZXkuXG4gICAqIERlZmF1bHRzIHRvIFtkYXRhXSBrZXlzLlxuICAgKi9cbiAgQElucHV0KCdjb2x1bW5zJylcbiAgc2V0IGNvbHVtbnMoY29sczogSVRkRGF0YVRhYmxlQ29sdW1uW10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29scztcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJVGREYXRhVGFibGVDb2x1bW5bXSB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0RhdGEpIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcbiAgICAgIC8vIGlmIGNvbHVtbnMgaXMgdW5kZWZpbmVkLCB1c2Uga2V5IGluIFtkYXRhXSByb3dzIGFzIG5hbWUgYW5kIGxhYmVsIGZvciBjb2x1bW4gaGVhZGVycy5cbiAgICAgIGxldCByb3c6IGFueSA9IHRoaXMuX2RhdGFbMF07XG4gICAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGspKSB7XG4gICAgICAgICAgdGhpcy5fY29sdW1ucy5wdXNoKHsgbmFtZTogaywgbGFiZWw6IGsgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzaXphYmxlQ29sdW1ucz86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtYW51YWwgY29sdW1uIHJlc2l6ZS5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdyZXNpemFibGVDb2x1bW5zJylcbiAgc2V0IHJlc2l6YWJsZUNvbHVtbnMocmVzaXphYmxlQ29sdW1uczogYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVzaXphYmxlQ29sdW1ucyk7XG4gIH1cbiAgZ2V0IHJlc2l6YWJsZUNvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgc2VsZWN0aW9uIGV2ZW50cywgaG92ZXIgYW5kIHNlbGVjdGVkIHJvdyBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc2VsZWN0YWJsZScpXG4gIHNldCBzZWxlY3RhYmxlKHNlbGVjdGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNlbGVjdGFibGUpO1xuICB9XG4gIGdldCBzZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrYWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgY2xpY2sgZXZlbnRzLCBob3Zlci5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdjbGlja2FibGUnKVxuICBzZXQgY2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsaWNrYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjbGlja2FibGUpO1xuICB9XG4gIGdldCBjbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtdWx0aXBsZSByb3cgc2VsZWN0aW9uLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzb3J0YWJsZScpXG4gIHNldCBzb3J0YWJsZShzb3J0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNvcnRhYmxlKTtcbiAgfVxuICBnZXQgc29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRCeT86IHN0cmluZ1xuICAgKiBTZXRzIHRoZSBhY3RpdmUgc29ydCBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgnc29ydEJ5JylcbiAgc2V0IHNvcnRCeShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGNvbHVtbk5hbWUpO1xuICAgIGlmICghY29sdW1uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0QnldIG11c3QgYmUgYSB2YWxpZCBjb2x1bW4gbmFtZScpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgfVxuICBnZXQgc29ydEJ5Q29sdW1uKCk6IElUZERhdGFUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgdGhlIFtzb3J0QnldIGNvbHVtbi4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBsZXQgc29ydE9yZGVyOiBzdHJpbmcgPSBvcmRlciA/IG9yZGVyLnRvVXBwZXJDYXNlKCkgOiAnQVNDJztcbiAgICBpZiAoc29ydE9yZGVyICE9PSAnREVTQycgJiYgc29ydE9yZGVyICE9PSAnQVNDJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydE9yZGVyXSBtdXN0IGJlIGVtcHR5LCBBU0Mgb3IgREVTQycpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgP1xuICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuICBnZXQgc29ydE9yZGVyRW51bSgpOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlcjtcbiAgfVxuXG4gIGdldCBoYXNEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzb3J0Q2hhbmdlJykgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dTZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgc2VsZWN0ZWQvZGVzZWxlY3RlZC4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTZWxlY3RFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93U2VsZWN0Jykgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dDbGljaz86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93Q2xpY2snKSBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHNlbGVjdEFsbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQvZGVzZWxlY3RlZCBieSB0aGUgYWxsIGNoZWNrYm94LiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzZWxlY3RBbGwnKSBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21wYXJlV2l0aD86IGZ1bmN0aW9uKHJvdywgbW9kZWwpOiBib29sZWFuXG4gICAqIEFsbG93cyBjdXN0b20gY29tcGFyaXNvbiBiZXR3ZWVuIHJvdyBhbmQgbW9kZWwgdG8gc2VlIGlmIHJvdyBpcyBzZWxlY3RlZCBvciBub3RcbiAgICogRGVmYXVsdCBjb21wYXJhdGlvbiBpcyBieSByZWZlcmVuY2VcbiAgICovXG4gIEBJbnB1dCgnY29tcGFyZVdpdGgnKSBjb21wYXJlV2l0aDogKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiBib29sZWFuID0gKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHJvdyA9PT0gbW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgYW5kIHNjcm9sbCBldmVudHNcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnMgPSB0aGlzLl9vblJlc2l6ZS5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Jvd3MpIHtcbiAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KCkuZm9yRWFjaCgocm93OiBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XSA9IHJvdy5oZWlnaHQgKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgY29sdW1uIHJlc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICB0aGlzLl9jb2x1bW5SZXNpemVTdWJzID0gdGhpcy5fb25Db2x1bW5SZXNpemUuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICApLnN1YnNjcmliZSgoY2xpZW50WDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gY2xpZW50WDtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBzY3JvbGwgY29sdW1uIGhlYWRlciByZXBvc2l0aW9uXG4gICAgdGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMgPSB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKGhvcml6b250YWxTY3JvbGw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCA9IGhvcml6b250YWxTY3JvbGw7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHZpcnR1YWwgc2Nyb2xsIHJlbmRlcmluZ1xuICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3VicyA9IHRoaXMuX29uVmVydGljYWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGVtcGxhdGVzIGFuZCBzZXRzIHRoZW0gaW4gYSBtYXAgZm9yIGZhc3RlciBhY2Nlc3MuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlTWFwLnNldChcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVzLnRvQXJyYXkoKVtpXS50ZERhdGFUYWJsZVRlbXBsYXRlLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpW2ldLnRlbXBsYXRlUmVmLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGhvc3RzIG5hdGl2ZSBlbGVtZW50cyB3aWR0aHMgdG8gc2VlIGlmIGl0IGhhcyBjaGFuZ2VkIChyZXNpemUgY2hlY2spXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgbGV0IG5ld0hvc3RXaWR0aDogbnVtYmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgLy8gaWYgdGhlIHdpZHRoIGhhcyBjaGFuZ2VkIHRoZW4gd2UgdGhyb3cgYSByZXNpemUgZXZlbnQuXG4gICAgICBpZiAodGhpcy5faG9zdFdpZHRoICE9PSBuZXdIb3N0V2lkdGgpIHtcbiAgICAgICAgdGhpcy5faG9zdFdpZHRoID0gbmV3SG9zdFdpZHRoO1xuICAgICAgICB0aGlzLl9vblJlc2l6ZS5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGxldCBuZXdIb3N0SGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9zY3JvbGxhYmxlRGl2Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgLy8gaWYgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgaGFzIGNoYW5nZWQsIHRoZW4gd2UgbWFyayBmb3IgY2hlY2tcbiAgICAgIGlmICh0aGlzLl9ob3N0SGVpZ2h0ICE9PSBuZXdIb3N0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX2hvc3RIZWlnaHQgPSBuZXdIb3N0SGVpZ2h0O1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRvIGFuIG9ic2VydmFibGUgdGhhdCBjaGVja3MgaWYgYWxsIHJvd3MgaGF2ZSBiZWVuIHJlbmRlcmVkXG4gICAqIHNvIHdlIGNhbiBzdGFydCBjYWxjdWxhdGluZyB0aGUgd2lkdGhzXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93c0NoYW5nZWRTdWJzID0gdGhpcy5fcm93cy5jaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25SZXNpemUubmV4dCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmVzIG9ic2VydmFibGVzIHdoZW4gZGF0YSB0YWJsZSBpcyBkZXN0cm95ZWRcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yZXNpemVTdWJzKSB7XG4gICAgICB0aGlzLl9yZXNpemVTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb2x1bW5SZXNpemVTdWJzKSB7XG4gICAgICB0aGlzLl9jb2x1bW5SZXNpemVTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3Vicykge1xuICAgICAgdGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3Vicykge1xuICAgICAgdGhpcy5fdmVydGljYWxTY3JvbGxTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb3dzQ2hhbmdlZFN1YnMpIHtcbiAgICAgIHRoaXMuX3Jvd3NDaGFuZ2VkU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWVDaGFuZ2VzU3Vicykge1xuICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBnZXRzIGV4ZWN1dGVkIGV2ZXJ5IHRpbWUgdGhlcmUgaXMgYSBzY3JvbGwgZXZlbnRcbiAgICogQ2FsbHMgdGhlIHNjcm9sbCBvYnNlcnZhYmxlXG4gICAqL1xuICBoYW5kbGVTY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgaG9yaXpvbnRhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbEhvcml6b250YWxPZmZzZXQgIT09IGhvcml6b250YWxTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5fb25Ib3Jpem9udGFsU2Nyb2xsLm5leHQoaG9yaXpvbnRhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgICBsZXQgdmVydGljYWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ICE9PSB2ZXJ0aWNhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLm5leHQodmVydGljYWxTY3JvbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBuZWVkZWQgZm9yIHRoZSBjb2x1bW5zIHZpYSBpbmRleFxuICAgKi9cbiAgZ2V0Q29sdW1uV2lkdGgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3dpZHRoc1tpbmRleF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q2VsbFZhbHVlKGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoY29sdW1uLm5lc3RlZCA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbi5uZXN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShjb2x1bW4ubmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVbY29sdW1uLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBtZXRob2QgZm9yIHRlbXBsYXRlIHJlZmVyZW5jZXNcbiAgICovXG4gICBnZXRUZW1wbGF0ZVJlZihuYW1lOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlTWFwLmdldChuYW1lKTtcbiAgIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG1vZGVsIChuZ01vZGVsKSBvZiBjb21wb25lbnQgYnkgcmVtb3ZpbmcgYWxsIHZhbHVlcyBpbiBhcnJheS5cbiAgICovXG4gIGNsZWFyTW9kZWwoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZS5zcGxpY2UoMCwgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyBkYXRhIHRhYmxlIGFuZCByZXJlbmRlcnMgW2RhdGFdIGFuZCBbY29sdW1uc11cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVXaWR0aHMoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvciBjbGVhcnMgYWxsIHJvd3MgZGVwZW5kaW5nIG9uICdjaGVja2VkJyB2YWx1ZS5cbiAgICovXG4gIHNlbGVjdEFsbChjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IHRvZ2dsZWRSb3dzOiBhbnlbXSA9IFtdO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIC8vIHNraXBpbmcgYWxyZWFkeSBzZWxlY3RlZCByb3dzXG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlLnB1c2gocm93KTtcbiAgICAgICAgICAvLyBjaGVja2luZyB3aGljaCBvbmVzIGFyZSBiZWluZyB0b2dnbGVkXG4gICAgICAgICAgdG9nZ2xlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgaWYgKHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICAgICAgdG9nZ2xlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIGxldCBtb2RlbFJvdzogYW55ID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlV2l0aChyb3csIHZhbCk7XG4gICAgICAgICAgfSlbMF07XG4gICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2YobW9kZWxSb3cpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMub25TZWxlY3RBbGwuZW1pdCh7cm93czogdG9nZ2xlZFJvd3MsIHNlbGVjdGVkOiBjaGVja2VkfSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm93IGlzIHNlbGVjdGVkXG4gICAqL1xuICBpc1Jvd1NlbGVjdGVkKHJvdzogYW55KTogYm9vbGVhbiB7XG4gICAgLy8gY29tcGFyZSBpdGVtcyBieSBbY29tcGFyZVdpdGhdIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICB9KS5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvciBjbGVhcnMgYSByb3cgZGVwZW5kaW5nIG9uICdjaGVja2VkJyB2YWx1ZSBpZiB0aGUgcm93ICdpc1NlbGVjdGFibGUnXG4gICAqIGhhbmRsZXMgY250cmwgY2xpY2tzIGFuZCBzaGlmdCBjbGlja3MgZm9yIG11bHRpLXNlbGVjdFxuICAgKi9cbiAgc2VsZWN0KHJvdzogYW55LCBldmVudDogRXZlbnQsIGN1cnJlbnRTZWxlY3RlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5ibG9ja0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBTaGlmdCBrZXkgaXMgc2VsZWN0ZWQgYW5kIG5lZWQgdG8gc2VsZWN0IGV2ZXJ5dGhpbmcgaW4gYmV0d2VlblxuICAgICAgbGV0IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgbW91c2VFdmVudCAmJiBtb3VzZUV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgbGV0IGZpcnN0SW5kZXg6IG51bWJlciA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgICAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0ZWQgPiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICBsYXN0SW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgY2xpY2tpbmcgYSBjaGVja2JveCBiZWhpbmQgdGhlIGluaXRpYWwgY2hlY2ssIHRoZW4gdG9nZ2xlIGFsbCBzZWxlY3Rpb25zIGV4cGVjdCB0aGUgaW5pdGlhbCBjaGVja2JveFxuICAgICAgICAvLyBlbHNlIHRoZSBjaGVja2JveGVzIGNsaWNrZWQgYXJlIGFsbCBhZnRlciB0aGUgaW5pdGlhbCBvbmVcbiAgICAgICAgaWYgKCh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPj0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID4gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KSB8fFxuICAgICAgICAgICAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDw9IGN1cnJlbnRTZWxlY3RlZCAmJiB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA8IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ID4gY3VycmVudFNlbGVjdGVkKSB8fCAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDwgY3VycmVudFNlbGVjdGVkKSkge1xuICAgICAgICAgIC8vIGNoYW5nZSBpbmRleGVzIGRlcGVuZGluZyBvbiB3aGVyZSB0aGUgbmV4dCBjaGVja2JveCBpcyBzZWxlY3RlZCAoYmVmb3JlIG9yIGFmdGVyKVxuICAgICAgICAgIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPiBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGxhc3RJbmRleC0tO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4IDwgY3VycmVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBmaXJzdEluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3dTZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNSb3dTZWxlY3RlZCh0aGlzLl9kYXRhW2ldKTtcbiAgICAgICAgICAgIC8vIGlmIHJvdyBpcyBzZWxlY3RlZCBhbmQgZmlyc3QgY2hlY2tib3ggd2FzIHNlbGVjdGVkXG4gICAgICAgICAgICAvLyBvciBpZiByb3cgd2FzIHVuc2VsZWN0ZWQgYW5kIGZpcnN0IGNoZWNrYm94IHdhcyB1bnNlbGVjdGVkXG4gICAgICAgICAgICAvLyB3ZSBpZ25vcmUgdGhlIHRvZ2dsZVxuICAgICAgICAgICAgaWYgKCh0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgJiYgIXJvd1NlbGVjdGVkKSB8fFxuICAgICAgICAgICAgICAgICghdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlICYmIHJvd1NlbGVjdGVkKSkge1xuICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCkge1xuICAgICAgICAgICAgICAvLyBlbHNlIGlmIHRoZSBjaGVja2JveCBzZWxlY3RlZCB3YXMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGFzdCBzZWxlY3Rpb24gYW5kIHRoZSBmaXJzdCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgLy8gdGhlbiB3ZSB1bmRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgIGlmICgoY3VycmVudFNlbGVjdGVkID49IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAmJiBjdXJyZW50U2VsZWN0ZWQgPD0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpIHx8XG4gICAgICAgICAgICAgICAgICAoY3VycmVudFNlbGVjdGVkIDw9IHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCAmJiBjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCA9IHRydWU7XG4gICAgICAvLyBpZiBzaGlmdCB3YXNudCBwcmVzc2VkLCB0aGVuIHdlIHRha2UgdGhlIGVsZW1lbnQgY2hlY2tlZCBhcyB0aGUgZmlyc3Qgcm93XG4gICAgICAvLyBpbmNhc2UgdGhlIG5leHQgY2xpY2sgdXNlcyBzaGlmdFxuICAgICAgfSBlbHNlIGlmIChtb3VzZUV2ZW50ICYmICFtb3VzZUV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSA9IHRoaXMuX2RvU2VsZWN0aW9uKHJvdywgY3VycmVudFNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5fc2hpZnRQcmV2aW91c2x5UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPSBjdXJyZW50U2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBvbnNlbGVjdHN0YXJ0IG1ldGhvZCBvZiB0aGUgZG9jdW1lbnQgc28gb3RoZXIgdGV4dCBvbiB0aGUgcGFnZVxuICAgKiBkb2Vzbid0IGdldCBzZWxlY3RlZCB3aGVuIGRvaW5nIHNoaWZ0IHNlbGVjdGlvbnMuXG4gICAqL1xuICBkaXNhYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBvcmlnaW5hbCBvbnNlbGVjdHN0YXJ0IG1ldGhvZC5cbiAgICovXG4gIGVuYWJsZVRleHRTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9kb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0cyB0aGUgb25Sb3dDbGlja0V2ZW50IHdoZW4gYSByb3cgaXMgY2xpY2tlZFxuICAgKiBpZiBjbGlja2FibGUgaXMgdHJ1ZSBhbmQgc2VsZWN0YWJsZSBpcyBmYWxzZSB0aGVuIHNlbGVjdCB0aGUgcm93XG4gICAqL1xuICBoYW5kbGVSb3dDbGljayhyb3c6IGFueSwgaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xpY2thYmxlKSB7XG4gICAgICAvLyBpZ25vcmluZyBsaW50aW5nIHJ1bGVzIGhlcmUgYmVjYXVzZSBhdHRyaWJ1dGUgaXQgYWN0dWFsbHkgbnVsbCBvciBub3QgdGhlcmVcbiAgICAgIC8vIGNhbid0IGNoZWNrIGZvciB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNyY0VsZW1lbnQ6IGFueSA9IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKHNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdG9wUm93Q2xpY2snKSA9PT0gbnVsbCAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ21hdC1wc2V1ZG8tY2hlY2tib3gnKSB7XG4gICAgICAgIHRoaXMub25Sb3dDbGljay5lbWl0KHtcbiAgICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgaGFuZGxlIGZvciBzb3J0IGNsaWNrIGV2ZW50IGluIGNvbHVtbiBoZWFkZXJzLlxuICAgKi9cbiAgaGFuZGxlU29ydChjb2x1bW46IElUZERhdGFUYWJsZUNvbHVtbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zb3J0QnkgPT09IGNvbHVtbikge1xuICAgICAgdGhpcy5fc29ydE9yZGVyID0gdGhpcy5fc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcgP1xuICAgICAgICBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb3J0QnkgPSBjb2x1bW47XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gICAgfVxuICAgIHRoaXMub25Tb3J0Q2hhbmdlLm5leHQoeyBuYW1lOiB0aGlzLl9zb3J0QnkubmFtZSwgb3JkZXI6IHRoaXMuX3NvcnRPcmRlciB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYWxsIGtleXVwIGV2ZW50cyB3aGVuIGZvY3VzaW5nIGEgZGF0YSB0YWJsZSByb3dcbiAgICovXG4gIF9yb3dLZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCwgcm93OiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICAvKiogaWYgdXNlciBwcmVzc2VzIGVudGVyIG9yIHNwYWNlLCB0aGUgcm93IHNob3VsZCBiZSBzZWxlY3RlZCAqL1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiB1c2VycyBwcmVzc2VzIHRoZSB1cCBhcnJvdywgd2UgZm9jdXMgdGhlIHByZXYgcm93XG4gICAgICAgICAqIHVubGVzcyBpdHMgdGhlIGZpcnN0IHJvd1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3Jvd3MudG9BcnJheSgpW2luZGV4IC0gMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMubXVsdGlwbGUgJiYgZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5mcm9tUm93ICsgaW5kZXggPj0gMCkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiB1c2VycyBwcmVzc2VzIHRoZSBkb3duIGFycm93LCB3ZSBmb2N1cyB0aGUgbmV4dCByb3dcbiAgICAgICAgICogdW5sZXNzIGl0cyB0aGUgbGFzdCByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbmRleCA8ICh0aGlzLl9yb3dzLnRvQXJyYXkoKS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgIHRoaXMuX3Jvd3MudG9BcnJheSgpW2luZGV4ICsgMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlICYmIHRoaXMubXVsdGlwbGUgJiYgZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5mcm9tUm93ICsgaW5kZXggPCB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbdGhpcy5mcm9tUm93ICsgaW5kZXhdLCB0aGlzLmZyb21Sb3cgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29sdW1uIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGNvbHVtbiBhbmQgaW5pdGlhbCBjbGllbnRYIG9mIGNvbHVtblxuICAgKi9cbiAgX2hhbmRsZVN0YXJ0Q29sdW1uRHJhZyhpbmRleDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMuX3Jlc2l6aW5nQ29sdW1uID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBuZXcgd2lkdGggZGVwZW5kaW5nIG9uIG5ldyBjbGllbnRYIG9mIGRyYWdnZXIgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlQ29sdW1uRHJhZyhldmVudDogTW91c2VFdmVudCB8IERyYWdFdmVudCk6IHZvaWQge1xuICAgIC8vIGNoZWNrIGlmIHRoZXJlIHdhcyBiZWVuIGEgc2VwYXJhdG9yIGNsaWNrZWQgZm9yIHJlc2l6ZVxuICAgIGlmICh0aGlzLl9yZXNpemluZ0NvbHVtbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmNsaWVudFggPiAwKSB7XG4gICAgICBsZXQgeFBvc2l0aW9uOiBudW1iZXIgPSBldmVudC5jbGllbnRYO1xuICAgICAgLy8gY2hlY2tzIGlmIHRoZSBzZXBhcmF0b3IgaXMgYmVpbmcgbW92ZWQgdG8gdHJ5IGFuZCByZXNpemUgdGhlIGNvbHVtbiwgZWxzZSBkb250IGRvIGFueXRoaW5nXG4gICAgICBpZiAoeFBvc2l0aW9uID4gMCAmJiB0aGlzLl9jb2x1bW5DbGllbnRYID4gMCAmJiAoeFBvc2l0aW9uIC0gdGhpcy5fY29sdW1uQ2xpZW50WCkgIT09IDApIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgd2lkdGggZGVwZW5kaW5nIGlmIG1ha2luZyB0aGUgY29sdW1uIGJpZ2dlciBvciBzbWFsbGVyXG4gICAgICAgIGxldCBwcm9wb3NlZE1hbnVhbFdpZHRoOiBudW1iZXIgPSB0aGlzLl93aWR0aHNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnZhbHVlICsgKHhQb3NpdGlvbiAtIHRoaXMuX2NvbHVtbkNsaWVudFgpO1xuICAgICAgICAvLyBpZiB0aGUgcHJvcG9zZWQgbmV3IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgcHJvamVjdGVkIG1pbiB3aWR0aCBvZiB0aGUgY29sdW1uLCB1c2UgcHJvamVjdGVkIG1pbiB3aWR0aFxuICAgICAgICBpZiAocHJvcG9zZWRNYW51YWxXaWR0aCA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9yZXNpemluZ0NvbHVtbl0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgICAgICBwcm9wb3NlZE1hbnVhbFdpZHRoID0gdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS5wcm9qZWN0ZWRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbnNbdGhpcy5fcmVzaXppbmdDb2x1bW5dLndpZHRoID0gcHJvcG9zZWRNYW51YWxXaWR0aDtcbiAgICAgICAgLy8gdXBkYXRlIG5ldyB4IHBvc2l0aW9uIGZvciB0aGUgcmVzaXplZCBjb2x1bW5cbiAgICAgICAgdGhpcy5fb25Db2x1bW5SZXNpemUubmV4dCh4UG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmRzIGRyYWdnZWQgZmxhZ3NcbiAgICovXG4gIF9oYW5kbGVFbmRDb2x1bW5EcmFnKCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbkNsaWVudFggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnRzXG4gICAqL1xuICBibG9ja0V2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXROZXN0ZWRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhbmFtZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgbGV0IHNwbGl0TmFtZTogc3RyaW5nW10gPSBuYW1lLnNwbGl0KC9cXC4oLispLywgMik7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0TmVzdGVkVmFsdWUoc3BsaXROYW1lWzFdLCB2YWx1ZVtzcGxpdE5hbWVbMF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHRoZSBhY3R1YWwgUm93IFNlbGVjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfZG9TZWxlY3Rpb24ocm93OiBhbnksIHJvd0luZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBsZXQgd2FzU2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzUm93U2VsZWN0ZWQocm93KTtcbiAgICBpZiAoIXdhc1NlbGVjdGVkKSB7XG4gICAgICBpZiAoIXRoaXMuX211bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJNb2RlbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZS5wdXNoKHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbXBhcmUgaXRlbXMgYnkgW2NvbXBhcmVXaXRoXSBmdW5jdGlvblxuICAgICAgcm93ID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgIH0pWzBdO1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZhbHVlLmluZGV4T2Yocm93KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpO1xuICAgIHRoaXMub25Sb3dTZWxlY3QuZW1pdCh7cm93OiByb3csIGluZGV4OiByb3dJbmRleCwgc2VsZWN0ZWQ6ICF3YXNTZWxlY3RlZH0pO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgcmV0dXJuICF3YXNTZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYWxsIHRoZSBzdGF0ZSBvZiBhbGwgY2hlY2tib3hlc1xuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlQ2hlY2tib3hTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSB0eXBlb2YgdGhpcy5fZGF0YS5maW5kKChkOiBhbnkpID0+ICF0aGlzLmlzUm93U2VsZWN0ZWQoZCkpID09PSAndW5kZWZpbmVkJztcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLl9kYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHdpZHRocyBmb3IgY29sdW1ucyBhbmQgY2VsbHMgZGVwZW5kaW5nIG9uIGNvbnRlbnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRocygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29sRWxlbWVudHMgJiYgdGhpcy5fY29sRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl93aWR0aHMgPSBbXTtcbiAgICAgIHRoaXMuX2NvbEVsZW1lbnRzLmZvckVhY2goKGNvbDogVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkdGgoaW5kZXgsIHRoaXMuX2NhbGN1bGF0ZVdpZHRoKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWRodHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIGNvbHVtbnMgYWZ0ZXIgY2FsY3VsYXRpb24gdG8gc2VlIGlmIHRoZXkgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RDb2x1bW5XaWRodHMoKTogdm9pZCB7XG4gICAgbGV0IGZpeGVkVG90YWxXaWR0aDogbnVtYmVyID0gMDtcbiAgICAvLyBnZXQgdGhlIG51bWJlciBvZiB0b3RhbCBjb2x1bW5zIHRoYXQgaGF2ZSBmbGV4aWJsZSB3aWR0aHMgKG5vdCBmaXhlZCBvciBoaWRkZW4pXG4gICAgbGV0IGZsZXhpYmxlV2lkdGhzOiBudW1iZXIgPSB0aGlzLl93aWR0aHMuZmlsdGVyKCh3aWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbHVtbnNbaW5kZXhdLmhpZGRlbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAod2lkdGgubGltaXQgfHwgd2lkdGgubWF4IHx8IHdpZHRoLm1pbikge1xuICAgICAgICBmaXhlZFRvdGFsV2lkdGggKz0gd2lkdGgudmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gIXdpZHRoLmxpbWl0ICYmICF3aWR0aC5tYXggJiYgIXdpZHRoLm1pbjtcbiAgICB9KS5sZW5ndGg7XG4gICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIHBpeGVzIGFyZSBsZWZ0IHRoYXQgY291bGQgYmUgc3ByZWFkIGFjcm9zc1xuICAgIC8vIHRoZSBmbGV4aWJsZSBjb2x1bW5zXG4gICAgbGV0IHJlY2FsY3VsYXRlSG9zdFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGlmIChmaXhlZFRvdGFsV2lkdGggPCB0aGlzLmhvc3RXaWR0aCkge1xuICAgICAgcmVjYWxjdWxhdGVIb3N0V2lkdGggPSB0aGlzLmhvc3RXaWR0aCAtIGZpeGVkVG90YWxXaWR0aDtcbiAgICB9XG4gICAgLy8gaWYgd2UgaGF2ZSBmbGV4aWJsZSBjb2x1bW5zIGFuZCBwaXhlbHMgdG8gc3BhcmUgb24gdGhlbVxuICAgIC8vIHdlIHRyeSBhbmQgc3ByZWFkIHRoZSBwaXhlbHMgYWNyb3NzIHRoZW1cbiAgICBpZiAoZmxleGlibGVXaWR0aHMgJiYgcmVjYWxjdWxhdGVIb3N0V2lkdGgpIHtcbiAgICAgIGxldCBuZXdWYWx1ZTogbnVtYmVyID0gTWF0aC5mbG9vcihyZWNhbGN1bGF0ZUhvc3RXaWR0aCAvIGZsZXhpYmxlV2lkdGhzKTtcbiAgICAgIGxldCBhZGp1c3RlZE51bWJlcjogbnVtYmVyID0gMDtcbiAgICAgIC8vIGFkanVzdCB0aGUgY29sdW1uIHdpZHRocyB3aXRoIHRoZSBzcHJlYWQgcGl4ZWxzXG4gICAgICB0aGlzLl93aWR0aHMuZm9yRWFjaCgoY29sV2lkdGg6IElJbnRlcm5hbENvbHVtbldpZHRoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLm1heCAmJiB0aGlzLl93aWR0aHNbY29sV2lkdGguaW5kZXhdLnZhbHVlID4gbmV3VmFsdWUgfHxcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubWluICYmIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0udmFsdWUgPCBuZXdWYWx1ZSB8fFxuICAgICAgICAgICAgIXRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubGltaXQpIHtcbiAgICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWR0aChjb2xXaWR0aC5pbmRleCwgbmV3VmFsdWUpO1xuICAgICAgICAgIGFkanVzdGVkTnVtYmVyKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gaWYgdGhlcmUgYXJlIHN0aWxsIGNvbHVtbnMgdGhhdCBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZCwgd2Ugc3RhcnQgb3ZlclxuICAgICAgbGV0IG5ld0ZsZXhpYmxlV2lkdGhzOiBudW1iZXIgPSB0aGlzLl93aWR0aHMuZmlsdGVyKCh3aWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgpID0+IHtcbiAgICAgICAgcmV0dXJuICF3aWR0aC5saW1pdCAmJiAhd2lkdGgubWF4O1xuICAgICAgfSkubGVuZ3RoO1xuICAgICAgaWYgKG5ld0ZsZXhpYmxlV2lkdGhzICE9PSBhZGp1c3RlZE51bWJlciAmJiBuZXdGbGV4aWJsZVdpZHRocyAhPT0gZmxleGlibGVXaWR0aHMpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0Q29sdW1uV2lkaHRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgYSBzaW5nbGUgY29sdW1uIHRvIHNlZSBpZiBpdCBjYW4gYmUgcmVjYWxjdWxhdGVkXG4gICAqL1xuICBwcml2YXRlIF9hZGp1c3RDb2x1bW5XaWR0aChpbmRleDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fd2lkdGhzW2luZGV4XSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGxpbWl0OiBmYWxzZSxcbiAgICAgIG1pbjogZmFsc2UsXG4gICAgICBtYXg6IGZhbHNlLFxuICAgIH07XG4gICAgLy8gZmxhZyB0byBzZWUgaWYgd2UgbmVlZCB0byBza2lwIHRoZSBtaW4gd2lkdGggcHJvamVjdGlvblxuICAgIC8vIGRlcGVuZGluZyBpZiBhIHdpZHRoIG9yIG1pbiB3aWR0aCBoYXMgYmVlbiBwcm92aWRlZFxuICAgIGxldCBza2lwTWluV2lkdGhQcm9qZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0pIHtcbiAgICAgIC8vIGlmIHRoZSBwcm92aWRlZCB3aWR0aCBoYXMgbWluL21heCwgdGhlbiB3ZSBjaGVjayB0byBzZWUgaWYgd2UgbmVlZCB0byBzZXQgaXRcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IHdpZHRoT3B0czogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggPSA8SVRkRGF0YVRhYmxlQ29sdW1uV2lkdGg+dGhpcy5jb2x1bW5zW2luZGV4XS53aWR0aDtcbiAgICAgICAgLy8gaWYgdGhlIGNvbHVtbiB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIGNvbmZpZ3VyZWQgbWluLCB3ZSBvdmVycmlkZSBpdFxuICAgICAgICBza2lwTWluV2lkdGhQcm9qZWN0aW9uID0gKHdpZHRoT3B0cyAmJiAhIXdpZHRoT3B0cy5taW4pO1xuICAgICAgICBpZiAod2lkdGhPcHRzICYmIHdpZHRoT3B0cy5taW4gPj0gdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB3aWR0aE9wdHMubWluO1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubWluID0gdHJ1ZTtcbiAgICAgICAgLy8gaWYgdGhlIGNvbHVtbiB3aWR0aCBpcyBtb3JlIHRoYW4gdGhlIGNvbmZpZ3VyZWQgbWF4LCB3ZSBvdmVycmlkZSBpdFxuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoT3B0cyAmJiB3aWR0aE9wdHMubWF4IDw9IHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gd2lkdGhPcHRzLm1heDtcbiAgICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1heCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIC8vIGlmIGl0IGhhcyBhIGZpeGVkIHdpZHRoLCB0aGVuIHdlIGp1c3Qgc2V0IGl0XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlID0gPG51bWJlcj50aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoO1xuICAgICAgICBza2lwTWluV2lkdGhQcm9qZWN0aW9uID0gdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIHdhc24ndCBhbnkgd2lkdGggb3IgbWluIHdpZHRoIHByb3ZpZGVkLCB3ZSBzZXQgYSBtaW4gdG8gd2hhdCB0aGUgY29sdW1uIHdpZHRoIG1pbiBzaG91bGQgYmVcbiAgICBpZiAoIXNraXBNaW5XaWR0aFByb2plY3Rpb24gJiZcbiAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA8IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGgpIHtcbiAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbaW5kZXhdLnByb2plY3RlZFdpZHRoO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5saW1pdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmljIG1ldGhvZCB0byBjYWxjdWxhdGUgY29sdW1uIHdpZHRoXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCByZW5kZXJlZENvbHVtbnM6IElUZERhdGFUYWJsZUNvbHVtbltdID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sOiBJVGREYXRhVGFibGVDb2x1bW4pID0+ICFjb2wuaGlkZGVuKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmhvc3RXaWR0aCAvIHJlbmRlcmVkQ29sdW1ucy5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjYWxjdWxhdGUgdGhlIHJvd3MgdG8gYmUgcmVuZGVyZWQgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVWaXJ0dWFsUm93cygpOiB2b2lkIHtcbiAgICBsZXQgc2Nyb2xsZWRSb3dzOiBudW1iZXIgPSAwO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG4gICAgICBsZXQgcm93SGVpZ2h0U3VtOiBudW1iZXIgPSAwO1xuICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCByb3dzIHRvIHNlZSBpZiB3ZSBoYXZlIHRoZWlyIGhlaWdodCBjYWNoZWRcbiAgICAgIC8vIGFuZCBzdW0gdGhlbSBhbGwgdG8gY2FsY3VsYXRlIHRoZSB0b3RhbCBoZWlnaHRcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgoZDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCByb3dzIGF0IGZpcnN0IGFuZCBhc3N1bWUgYWxsXG4gICAgICAgIC8vIHJvd3MgYXJlIHRoZSBzYW1lIGhlaWdodCBhcyB0aGUgZmlyc3Qgb25lXG4gICAgICAgIGlmICghdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaV0pIHtcbiAgICAgICAgICB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSA9IHRoaXMuX3Jvd0hlaWdodENhY2hlWzBdIHx8IFREX1ZJUlRVQUxfREVGQVVMVF9ST1dfSEVJR0hUO1xuICAgICAgICB9XG4gICAgICAgIHJvd0hlaWdodFN1bSArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXTtcbiAgICAgICAgLy8gY2hlY2sgaG93IG1hbnkgcm93cyBoYXZlIGJlZW4gc2Nyb2xsZWRcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC0gcm93SGVpZ2h0U3VtID4gMCkge1xuICAgICAgICAgIHNjcm9sbGVkUm93cysrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gcm93SGVpZ2h0U3VtO1xuICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIHJvdyB0byBiZSByZW5kZXJlZCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSByb3cgb2Zmc2V0XG4gICAgICBsZXQgZnJvbVJvdzogbnVtYmVyID0gc2Nyb2xsZWRSb3dzIC0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gZnJvbVJvdyA+IDAgPyBmcm9tUm93IDogMDtcblxuICAgICAgbGV0IGhvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX2hvc3RIZWlnaHQ7XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XG4gICAgICAvLyBjYWxjdWxhdGUgaG93IG1hbnkgcm93cyBjYW4gZml0IGluIHRoZSB2aWV3cG9ydFxuICAgICAgd2hpbGUgKGhvc3RIZWlnaHQgPiAwKSB7XG4gICAgICAgIGhvc3RIZWlnaHQgLT0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbdGhpcy5mcm9tUm93ICsgaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgICAgLy8gc2V0IHRoZSBsYXN0IHJvdyB0byBiZSByZW5kZXJlZCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSByb3cgb2Zmc2V0XG4gICAgICBsZXQgcmFuZ2U6IG51bWJlciA9IChpbmRleCAtIDEpICsgKFREX1ZJUlRVQUxfT0ZGU0VUICogMik7XG4gICAgICBsZXQgdG9Sb3c6IG51bWJlciA9IHJhbmdlICsgdGhpcy5mcm9tUm93O1xuICAgICAgLy8gaWYgbGFzdCByb3cgaXMgZ3JlYXRlciB0aGFuIHRoZSB0b3RhbCBsZW5ndGgsIHRoZW4gd2UgdXNlIHRoZSB0b3RhbCBsZW5ndGhcbiAgICAgIGlmIChpc0Zpbml0ZSh0b1JvdykgJiYgdG9Sb3cgPiB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICB0b1JvdyA9IHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmICghaXNGaW5pdGUodG9Sb3cpKSB7XG4gICAgICAgIHRvUm93ID0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB9XG4gICAgICB0aGlzLl90b1JvdyA9IHRvUm93O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gMDtcbiAgICAgIHRoaXMuX3RvUm93ID0gMDtcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcHJvcGVyIG9mZnNldCBkZXBlbmRpbmcgb24gaG93IG1hbnkgcm93cyBoYXZlIGJlZW4gc2Nyb2xsZWRcbiAgICBpZiAoc2Nyb2xsZWRSb3dzID4gVERfVklSVFVBTF9PRkZTRVQpIHtcbiAgICAgIGZvciAobGV0IGluZGV4OiBudW1iZXIgPSAwOyBpbmRleCA8IHRoaXMuZnJvbVJvdzsgaW5kZXgrKykge1xuICAgICAgICBvZmZzZXQgKz0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbaW5kZXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX29mZnNldFRyYW5zZm9ybSA9IHRoaXMuX2RvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3RyYW5zbGF0ZVkoJyArIChvZmZzZXQgLSB0aGlzLnRvdGFsSGVpZ2h0KSArICdweCknKTtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fdmlydHVhbERhdGEgPSB0aGlzLmRhdGEuc2xpY2UodGhpcy5mcm9tUm93LCB0aGlzLnRvUm93KTtcbiAgICB9XG4gICAgLy8gbWFyayBmb3IgY2hlY2sgYXQgdGhlIGVuZCBvZiB0aGUgcXVldWUgc28gd2UgYXJlIHN1cmVcbiAgICAvLyB0aGF0IHRoZSBjaGFuZ2VzIHdpbGwgYmUgbWFya2VkXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudCB7XG4gIG9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndGhbdGQtZGF0YS10YWJsZS1jb2x1bW5dJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IHtcblxuICBwcml2YXRlIF9zb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtbkNvbnRlbnQnLCB7cmVhZDogRWxlbWVudFJlZn0pIF9jb2x1bW5Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIGdldCBwcm9qZWN0ZWRXaWR0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9jb2x1bW5Db250ZW50ICYmIHRoaXMuX2NvbHVtbkNvbnRlbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fY29sdW1uQ29udGVudC5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIDEwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBuYW1lPzogc3RyaW5nXG4gICAqIFNldHMgdW5pcXVlIGNvbHVtbiBbbmFtZV0gZm9yIFtzb3J0YWJsZV0gZXZlbnRzLlxuICAgKi9cbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzb3J0YWJsZScpIHNvcnRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogU2V0cyBjb2x1bW4gdG8gYWN0aXZlIHN0YXRlIHdoZW4gJ3RydWUnLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBudW1lcmljPzogYm9vbGVhblxuICAgKiBNYWtlcyBjb2x1bW4gZm9sbG93IHRoZSBudW1lcmljIGRhdGEtdGFibGUgc3BlY3MgYW5kIHNvcnQgaWNvbi5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdudW1lcmljJykgbnVtZXJpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgY29sdW1uLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBsZXQgc29ydE9yZGVyOiBzdHJpbmcgPSBvcmRlciA/IG9yZGVyLnRvVXBwZXJDYXNlKCkgOiAnQVNDJztcbiAgICBpZiAoc29ydE9yZGVyICE9PSAnREVTQycgJiYgc29ydE9yZGVyICE9PSAnQVNDJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydE9yZGVyXSBtdXN0IGJlIGVtcHR5LCBBU0Mgb3IgREVTQycpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgP1xuICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzb3J0Q2hhbmdlJykgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1jbGlja2FibGUnKVxuICBnZXQgYmluZENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LXNvcnRhYmxlJylcbiAgZ2V0IGJpbmdTb3J0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWFjdGl2ZScpXG4gIGdldCBiaW5kQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LW51bWVyaWMnKVxuICBnZXQgYmluZE51bWVyaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnVtZXJpYztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNvbHVtbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmluZyB0byBjbGljayBldmVudCBvbiBob3N0IHRvIHRocm93IGEgc29ydCBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3J0YWJsZSkge1xuICAgICAgdGhpcy5vblNvcnRDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5uYW1lLCBvcmRlcjogdGhpcy5fc29ydE9yZGVyfSk7XG4gICAgfVxuICB9XG5cbiAgaXNBc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICB9XG5cbiAgaXNEZXNjZW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmc7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndGRbdGQtZGF0YS10YWJsZS1jZWxsXScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ2VsbENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIG51bWVyaWM/OiBib29sZWFuXG4gICAqIE1ha2VzIGNlbGwgZm9sbG93IHRoZSBudW1lcmljIGRhdGEtdGFibGUgc3BlY3MuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnbnVtZXJpYycpIG51bWVyaWM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1udW1lcmljJylcbiAgZ2V0IGJpbmROdW1lcmljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm51bWVyaWM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1jZWxsJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ3RhYmxlW3RkLWRhdGEtdGFibGVdJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS10YWJsZS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVRhYmxlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZScpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIsIElUZERhdGFUYWJsZUNvbHVtbiB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNlYXJjaFRlcm06IHN0cmluZ1xuICAgKiAtIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZVxuICAgKiAtIGV4Y2x1ZGVkQ29sdW1uczogc3RyaW5nW10gPSBbXVxuICAgKlxuICAgKiBTZWFyY2hlcyBbZGF0YV0gcGFyYW1ldGVyIGZvciBbc2VhcmNoVGVybV0gbWF0Y2hlcyBhbmQgcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZW0uXG4gICAqL1xuICBmaWx0ZXJEYXRhKGRhdGE6IGFueVtdLCBzZWFyY2hUZXJtOiBzdHJpbmcsIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSwgZXhjbHVkZWRDb2x1bW5zPzogc3RyaW5nW10pOiBhbnlbXSB7XG4gICAgbGV0IGZpbHRlcjogc3RyaW5nID0gc2VhcmNoVGVybSA/IChpZ25vcmVDYXNlID8gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpIDogc2VhcmNoVGVybSkgOiAnJztcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IE9iamVjdC5rZXlzKGl0ZW0pLmZpbmQoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKCFleGNsdWRlZENvbHVtbnMgfHwgZXhjbHVkZWRDb2x1bW5zLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZUl0ZW1WYWx1ZTogc3RyaW5nID0gKCcnICsgaXRlbVtrZXldKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZTogc3RyaW5nID0gaWdub3JlQ2FzZSA/IHByZUl0ZW1WYWx1ZS50b0xvd2VyQ2FzZSgpIDogcHJlSXRlbVZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1WYWx1ZS5pbmRleE9mKGZpbHRlcikgPiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gISh0eXBlb2YgcmVzID09PSAndW5kZWZpbmVkJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gc29ydEJ5OiBzdHJpbmdcbiAgICogLSBzb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nXG4gICAqXG4gICAqIFNvcnRzIFtkYXRhXSBwYXJhbWV0ZXIgYnkgW3NvcnRCeV0gYW5kIFtzb3J0T3JkZXJdIGFuZCByZXR1cm5zIHRoZSBzb3J0ZWQgZGF0YS5cbiAgICovXG4gIHNvcnREYXRhKGRhdGE6IGFueVtdLCBzb3J0Qnk6IHN0cmluZywgc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyk6IGFueVtdIHtcbiAgICBpZiAoc29ydEJ5KSB7XG4gICAgICBkYXRhID0gQXJyYXkuZnJvbShkYXRhKTsgLy8gQ2hhbmdlIHRoZSBhcnJheSByZWZlcmVuY2UgdG8gdHJpZ2dlciBPblB1c2ggYW5kIG5vdCBtdXRhdGUgb3JpZ2luYWwgYXJyYXlcbiAgICAgIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGNvbXBBOiBhbnkgPSBhW3NvcnRCeV07XG4gICAgICAgIGxldCBjb21wQjogYW55ID0gYltzb3J0QnldO1xuICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQSkpICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEIpKSkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSAtIE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29tcEEgPCBjb21wQikge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wQSA+IGNvbXBCKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uICogKHNvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZyA/IC0xIDogMSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gZnJvbVJvdzogbnVtYmVyXG4gICAqIC0gdG9Sb3c6IDogbnVtYmVyXG4gICAqXG4gICAqIFJldHVybnMgYSBzZWN0aW9uIG9mIHRoZSBbZGF0YV0gcGFyYW1ldGVyIHN0YXJ0aW5nIGZyb20gW2Zyb21Sb3ddIGFuZCBlbmRpbmcgaW4gW3RvUm93XS5cbiAgICovXG4gIHBhZ2VEYXRhKGRhdGE6IGFueVtdLCBmcm9tUm93OiBudW1iZXIsIHRvUm93OiBudW1iZXIpOiBhbnlbXSB7XG4gICAgaWYgKGZyb21Sb3cgPj0gMSkge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoZnJvbVJvdyAtIDEsIHRvUm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERBVEFfVEFCTEVfUFJPVklERVJfRkFDVE9SWShcbiAgICBwYXJlbnQ6IFRkRGF0YVRhYmxlU2VydmljZSk6IFRkRGF0YVRhYmxlU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkRGF0YVRhYmxlU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgREFUQV9UQUJMRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkRGF0YVRhYmxlU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkRGF0YVRhYmxlU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBEQVRBX1RBQkxFX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1jZWxsL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQsIFRkRGF0YVRhYmxlQ29sdW1uUm93Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLXJvdy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS10YWJsZS9kYXRhLXRhYmxlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtdGFibGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgREFUQV9UQUJMRV9QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvZGF0YS10YWJsZS5zZXJ2aWNlJztcblxuY29uc3QgVERfREFUQV9UQUJMRTogVHlwZTxhbnk+W10gPSBbXG4gIFRkRGF0YVRhYmxlQ29tcG9uZW50LFxuICBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlLFxuXG4gIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LFxuICBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlUm93Q29tcG9uZW50LFxuICBUZERhdGFUYWJsZUNvbHVtblJvd0NvbXBvbmVudCxcbiAgVGREYXRhVGFibGVUYWJsZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9EQVRBX1RBQkxFLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfREFUQV9UQUJMRSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQV9UQUJMRV9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnREYXRhVGFibGVNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIklucHV0IiwiSG9zdExpc3RlbmVyIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSIsIm1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IiLCJTdWJqZWN0IiwiRXZlbnRFbWl0dGVyIiwiY29lcmNlQm9vbGVhblByb3BlcnR5IiwiZGVib3VuY2VUaW1lIiwiRU5URVIiLCJTUEFDRSIsIlVQX0FSUk9XIiwiRE9XTl9BUlJPVyIsInRzbGliXzEuX192YWx1ZXMiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiRE9DVU1FTlQiLCJEb21TYW5pdGl6ZXIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkNvbnRlbnRDaGlsZHJlbiIsIlZpZXdDaGlsZCIsIlZpZXdDaGlsZHJlbiIsIk91dHB1dCIsIkhvc3RCaW5kaW5nIiwiSW5qZWN0YWJsZSIsIlNraXBTZWxmIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdFRvb2x0aXBNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFFRixhQUFnQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixTQUFTLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJ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