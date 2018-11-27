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
                // check if the scroll has been reset when element is hidden
                if (this._scrollVerticalOffset - this._scrollableDiv.nativeElement.scrollTop > 5) {
                    // scroll back to the top if element has been reset
                    this._onVerticalScroll.next(0);
                }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1kYXRhLXRhYmxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS1yb3cvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RpcmVjdGl2ZXMvZGF0YS10YWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtY2VsbC9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtdGFibGUvZGF0YS10YWJsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvc2VydmljZXMvZGF0YS10YWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jZWxsL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndHJbdGQtZGF0YS10YWJsZS1jb2x1bW4tcm93XScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNvbHVtblJvd0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNvbHVtbi1yb3cnKTtcbiAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0clt0ZC1kYXRhLXRhYmxlLXJvd10nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVSb3dDb21wb25lbnQge1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCdzZWxlY3RlZCcpXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IDQ4O1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGhlaWdodCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1yb3cnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5pbmcgdG8gY2xpY2sgZXZlbnQgdG8gZXhwbGljaXRseSBmb2N1cyB0aGUgcm93IGVsZW1lbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGNsaWNrTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3RkRGF0YVRhYmxlVGVtcGxhdGVdbmctdGVtcGxhdGUnfSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIHRkRGF0YVRhYmxlVGVtcGxhdGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICAgICAgIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCxcbiAgICAgICAgIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWYsIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdCwgSW5qZWN0LFxuICAgICAgICAgT3B0aW9uYWwsIFZpZXdDaGlsZHJlbiwgRWxlbWVudFJlZiwgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIERPV05fQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLXRhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIHtcbiAgQXNjZW5kaW5nID0gJ0FTQycsXG4gIERlc2NlbmRpbmcgPSAnREVTQycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGgge1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIG51bWVyaWM/OiBib29sZWFuO1xuICBmb3JtYXQ/OiAodmFsdWU6IGFueSkgPT4gYW55O1xuICBuZXN0ZWQ/OiBib29sZWFuO1xuICBzb3J0YWJsZT86IGJvb2xlYW47XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGZpbHRlcj86IGJvb2xlYW47XG4gIHdpZHRoPzogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQge1xuICByb3c6IGFueTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQge1xuICByb3dzOiBhbnlbXTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudCB7XG4gIHJvdzogYW55O1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbENvbHVtbldpZHRoIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbGltaXQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIG1pbj86IGJvb2xlYW47XG4gIG1heD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gc2V0IHRoZSByb3dzIG9mZnNldCBiZWZvcmUgYW5kIGFmdGVyIHRoZSB2aWV3cG9ydFxuICovXG5jb25zdCBURF9WSVJUVUFMX09GRlNFVDogbnVtYmVyID0gMjtcblxuLyoqXG4gKiBDb25zdGFudCB0byBzZXQgZGVmYXVsdCByb3cgaGVpZ2h0IGlmIG5vbmUgaXMgcHJvdmlkZWRcbiAqL1xuY29uc3QgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ6IG51bWJlciA9IDQ4O1xuXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZERhdGFUYWJsZU1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGREYXRhVGFibGVCYXNlLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGREYXRhVGFibGVDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1kYXRhLXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgX1RkRGF0YVRhYmxlTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKiByZXNwb25zaXZlIHdpZHRoIGNhbGN1bGF0aW9ucyAqL1xuICBwcml2YXRlIF9yZXNpemVTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Jvd3NDaGFuZ2VkU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9ob3N0V2lkdGg6IG51bWJlciA9IDA7XG5cbiAgLyoqIG1hbnVhbGx5IHJlc2l6YWJsZSBjb2x1bW5zICovXG4gIHByaXZhdGUgX3Jlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sdW1uQ2xpZW50WDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY29sdW1uUmVzaXplU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZXNpemluZ0NvbHVtbjogbnVtYmVyO1xuICBwcml2YXRlIF9vbkNvbHVtblJlc2l6ZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIGdldCByZXNpemluZ0NvbHVtbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemluZ0NvbHVtbjtcbiAgfVxuXG4gIGdldCBob3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAvLyBpZiB0aGUgY2hlY2tib3hlcyBhcmUgcmVuZGVyZWQsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZWlyIHdpZHRoXG4gICAgLy8gZnJvbSB0aGUgdG90YWwgd2lkdGggdG8gY2FsY3VsYXRlIHByb3Blcmx5XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hvc3RXaWR0aCAtIDQyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faG9zdFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2lkdGhzOiBJSW50ZXJuYWxDb2x1bW5XaWR0aFtdID0gW107XG4gIHByaXZhdGUgX29uUmVzaXplOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogY29sdW1uIGhlYWRlciByZXBvc2l0aW9uIGFuZCB2aWV3cG9vcnQgKi9cbiAgcHJpdmF0ZSBfdmVydGljYWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2hvcml6b250YWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbEhvcml6b250YWxPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfb25Ib3Jpem9udGFsU2Nyb2xsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX29uVmVydGljYWxTY3JvbGw6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICAvLyBBcnJheSBvZiBjYWNoZWQgcm93IGhlaWdodHMgdG8gYWxsb3cgZHluYW1pYyByb3cgaGVpZ2h0c1xuICBwcml2YXRlIF9yb3dIZWlnaHRDYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgLy8gVG90YWwgcHNldWRvIGhlaWdodCBvZiBhbGwgdGhlIGVsZW1lbnRzXG4gIHByaXZhdGUgX3RvdGFsSGVpZ2h0OiBudW1iZXIgPSAwO1xuICAvLyBUb3RhbCBob3N0IGhlaWdodCBmb3IgdGhlIHZpZXdwb3J0XG4gIHByaXZhdGUgX2hvc3RIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8vIFNjcm9sbGVkIHZlcnRpY2FsIHBpeGVsc1xuICBwcml2YXRlIF9zY3JvbGxWZXJ0aWNhbE9mZnNldDogbnVtYmVyID0gMDtcbiAgLy8gU3R5bGUgdG8gbW92ZSB0aGUgY29udGVudCBhIGNlcnRhaW4gb2Zmc2V0IGRlcGVuZGluZyBvbiBzY3JvbGxlZCBvZmZzZXRcbiAgcHJpdmF0ZSBfb2Zmc2V0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XG5cbiAgLy8gVmFyaWFibGVzIHRoYXQgc2V0IGZyb20gYW5kIHRvIHdoaWNoIHJvd3Mgd2lsbCBiZSByZW5kZXJlZFxuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0IHN0eWxlIHdpdGggYSBwcm9wZXIgY2FsY3VsYXRpb24gb24gaG93IG11Y2ggaXQgc2hvdWxkIG1vdmVcbiAgICogb3ZlciB0aGUgeSBheGlzIG9mIHRoZSB0b3RhbCBoZWlnaHRcbiAgICovXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VHJhbnNmb3JtO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFzc3VtZWQgdG90YWwgaGVpZ2h0IG9mIHRoZSByb3dzXG4gICAqL1xuICBnZXQgdG90YWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5pdGlhbCByb3cgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgZ2V0IGZyb21Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbVJvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXN0IHJvdyB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBnZXQgdG9Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Sb3c7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZXNTdWJzOiBTdWJzY3JpcHRpb247XG4gIC8qKiBpbnRlcm5hbCBhdHRyaWJ1dGVzICovXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICAvLyBkYXRhIHZpcnR1YWxseSBpdGVyYXRlZCBieSBjb21wb25lbnRcbiAgcHJpdmF0ZSBfdmlydHVhbERhdGE6IGFueVtdO1xuICBwcml2YXRlIF9jb2x1bW5zOiBJVGREYXRhVGFibGVDb2x1bW5bXTtcbiAgcHJpdmF0ZSBfc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGlja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9hbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHNvcnRpbmcgKi9cbiAgcHJpdmF0ZSBfc29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc29ydEJ5OiBJVGREYXRhVGFibGVDb2x1bW47XG4gIHByaXZhdGUgX3NvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG5cbiAgLyoqIHNoaWZ0IHNlbGVjdCAqL1xuICBwcml2YXRlIF9zaGlmdFByZXZpb3VzbHlQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xhc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RDaGVja2JveFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHRlbXBsYXRlIGZldGNoaW5nIHN1cHBvcnQgKi9cbiAgcHJpdmF0ZSBfdGVtcGxhdGVNYXA6IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSkgX3RlbXBsYXRlczogUXVlcnlMaXN0PFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmU+O1xuXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVEaXYnKSBfc2Nyb2xsYWJsZURpdjogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCdjb2x1bW5FbGVtZW50JykgX2NvbEVsZW1lbnRzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGRyZW4oVGREYXRhVGFibGVSb3dDb21wb25lbnQpIF9yb3dzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHNjcm9sbCBwb3NpdGlvbiB0byByZXBvc2l0aW9uIGNvbHVtbiBoZWFkZXJzXG4gICAqL1xuICBnZXQgY29sdW1uc0xlZnRTY3JvbGwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAqIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdmFsdWVzIGFyZSBzZWxlY3RlZC5cbiAgICovXG4gIGdldCBhbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB2YWx1ZXMgYXJlIG5vdCBkZXNlbGVjdGVkXG4gICAqIGFuZCBhdCBsZWFzdCBvbmUgaXMuXG4gICAqL1xuICBnZXQgaW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkYXRhPzoge1trZXk6IHN0cmluZ106IGFueX1bXVxuICAgKiBTZXRzIHRoZSBkYXRhIHRvIGJlIHJlbmRlcmVkIGFzIHJvd3MuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlID0gW107XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgdGhlIGRhdGEgaGFzIGNoYW5nZWRcbiAgICAgIHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB2aXJ0dWFsRGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxEYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbHVtbnM/OiBJVGREYXRhVGFibGVDb2x1bW5bXVxuICAgKiBTZXRzIGFkZGl0aW9uYWwgY29sdW1uIGNvbmZpZ3VyYXRpb24uIFtJVGREYXRhVGFibGVDb2x1bW4ubmFtZV0gaGFzIHRvIGV4aXN0IGluIFtkYXRhXSBhcyBrZXkuXG4gICAqIERlZmF1bHRzIHRvIFtkYXRhXSBrZXlzLlxuICAgKi9cbiAgQElucHV0KCdjb2x1bW5zJylcbiAgc2V0IGNvbHVtbnMoY29sczogSVRkRGF0YVRhYmxlQ29sdW1uW10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29scztcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJVGREYXRhVGFibGVDb2x1bW5bXSB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0RhdGEpIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcbiAgICAgIC8vIGlmIGNvbHVtbnMgaXMgdW5kZWZpbmVkLCB1c2Uga2V5IGluIFtkYXRhXSByb3dzIGFzIG5hbWUgYW5kIGxhYmVsIGZvciBjb2x1bW4gaGVhZGVycy5cbiAgICAgIGxldCByb3c6IGFueSA9IHRoaXMuX2RhdGFbMF07XG4gICAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGspKSB7XG4gICAgICAgICAgdGhpcy5fY29sdW1ucy5wdXNoKHsgbmFtZTogaywgbGFiZWw6IGsgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzaXphYmxlQ29sdW1ucz86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtYW51YWwgY29sdW1uIHJlc2l6ZS5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdyZXNpemFibGVDb2x1bW5zJylcbiAgc2V0IHJlc2l6YWJsZUNvbHVtbnMocmVzaXphYmxlQ29sdW1uczogYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVzaXphYmxlQ29sdW1ucyk7XG4gIH1cbiAgZ2V0IHJlc2l6YWJsZUNvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgc2VsZWN0aW9uIGV2ZW50cywgaG92ZXIgYW5kIHNlbGVjdGVkIHJvdyBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc2VsZWN0YWJsZScpXG4gIHNldCBzZWxlY3RhYmxlKHNlbGVjdGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNlbGVjdGFibGUpO1xuICB9XG4gIGdldCBzZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrYWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgY2xpY2sgZXZlbnRzLCBob3Zlci5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdjbGlja2FibGUnKVxuICBzZXQgY2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsaWNrYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjbGlja2FibGUpO1xuICB9XG4gIGdldCBjbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtdWx0aXBsZSByb3cgc2VsZWN0aW9uLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzb3J0YWJsZScpXG4gIHNldCBzb3J0YWJsZShzb3J0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNvcnRhYmxlKTtcbiAgfVxuICBnZXQgc29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRCeT86IHN0cmluZ1xuICAgKiBTZXRzIHRoZSBhY3RpdmUgc29ydCBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgnc29ydEJ5JylcbiAgc2V0IHNvcnRCeShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGNvbHVtbk5hbWUpO1xuICAgIGlmICghY29sdW1uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0QnldIG11c3QgYmUgYSB2YWxpZCBjb2x1bW4gbmFtZScpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgfVxuICBnZXQgc29ydEJ5Q29sdW1uKCk6IElUZERhdGFUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgdGhlIFtzb3J0QnldIGNvbHVtbi4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBsZXQgc29ydE9yZGVyOiBzdHJpbmcgPSBvcmRlciA/IG9yZGVyLnRvVXBwZXJDYXNlKCkgOiAnQVNDJztcbiAgICBpZiAoc29ydE9yZGVyICE9PSAnREVTQycgJiYgc29ydE9yZGVyICE9PSAnQVNDJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydE9yZGVyXSBtdXN0IGJlIGVtcHR5LCBBU0Mgb3IgREVTQycpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgP1xuICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuICBnZXQgc29ydE9yZGVyRW51bSgpOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlcjtcbiAgfVxuXG4gIGdldCBoYXNEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzb3J0Q2hhbmdlJykgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dTZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgc2VsZWN0ZWQvZGVzZWxlY3RlZC4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTZWxlY3RFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93U2VsZWN0Jykgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dDbGljaz86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93Q2xpY2snKSBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHNlbGVjdEFsbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQvZGVzZWxlY3RlZCBieSB0aGUgYWxsIGNoZWNrYm94LiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzZWxlY3RBbGwnKSBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21wYXJlV2l0aD86IGZ1bmN0aW9uKHJvdywgbW9kZWwpOiBib29sZWFuXG4gICAqIEFsbG93cyBjdXN0b20gY29tcGFyaXNvbiBiZXR3ZWVuIHJvdyBhbmQgbW9kZWwgdG8gc2VlIGlmIHJvdyBpcyBzZWxlY3RlZCBvciBub3RcbiAgICogRGVmYXVsdCBjb21wYXJhdGlvbiBpcyBieSByZWZlcmVuY2VcbiAgICovXG4gIEBJbnB1dCgnY29tcGFyZVdpdGgnKSBjb21wYXJlV2l0aDogKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiBib29sZWFuID0gKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHJvdyA9PT0gbW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgYW5kIHNjcm9sbCBldmVudHNcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnMgPSB0aGlzLl9vblJlc2l6ZS5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Jvd3MpIHtcbiAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KCkuZm9yRWFjaCgocm93OiBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XSA9IHJvdy5oZWlnaHQgKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgY29sdW1uIHJlc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICB0aGlzLl9jb2x1bW5SZXNpemVTdWJzID0gdGhpcy5fb25Db2x1bW5SZXNpemUuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICApLnN1YnNjcmliZSgoY2xpZW50WDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gY2xpZW50WDtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBzY3JvbGwgY29sdW1uIGhlYWRlciByZXBvc2l0aW9uXG4gICAgdGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMgPSB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKGhvcml6b250YWxTY3JvbGw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCA9IGhvcml6b250YWxTY3JvbGw7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHZpcnR1YWwgc2Nyb2xsIHJlbmRlcmluZ1xuICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3VicyA9IHRoaXMuX29uVmVydGljYWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGVtcGxhdGVzIGFuZCBzZXRzIHRoZW0gaW4gYSBtYXAgZm9yIGZhc3RlciBhY2Nlc3MuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlTWFwLnNldChcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVzLnRvQXJyYXkoKVtpXS50ZERhdGFUYWJsZVRlbXBsYXRlLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpW2ldLnRlbXBsYXRlUmVmLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGhvc3RzIG5hdGl2ZSBlbGVtZW50cyB3aWR0aHMgdG8gc2VlIGlmIGl0IGhhcyBjaGFuZ2VkIChyZXNpemUgY2hlY2spXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHNjcm9sbCBoYXMgYmVlbiByZXNldCB3aGVuIGVsZW1lbnQgaXMgaGlkZGVuXG4gICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC0gdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA+IDUpIHtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgZWxlbWVudCBoYXMgYmVlbiByZXNldFxuICAgICAgdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5uZXh0KDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBsZXQgbmV3SG9zdFdpZHRoOiBudW1iZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAvLyBpZiB0aGUgd2lkdGggaGFzIGNoYW5nZWQgdGhlbiB3ZSB0aHJvdyBhIHJlc2l6ZSBldmVudC5cbiAgICAgIGlmICh0aGlzLl9ob3N0V2lkdGggIT09IG5ld0hvc3RXaWR0aCkge1xuICAgICAgICB0aGlzLl9ob3N0V2lkdGggPSBuZXdIb3N0V2lkdGg7XG4gICAgICAgIHRoaXMuX29uUmVzaXplLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudCkge1xuICAgICAgbGV0IG5ld0hvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAvLyBpZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBoYXMgY2hhbmdlZCwgdGhlbiB3ZSBtYXJrIGZvciBjaGVja1xuICAgICAgaWYgKHRoaXMuX2hvc3RIZWlnaHQgIT09IG5ld0hvc3RIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5faG9zdEhlaWdodCA9IG5ld0hvc3RIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdG8gYW4gb2JzZXJ2YWJsZSB0aGF0IGNoZWNrcyBpZiBhbGwgcm93cyBoYXZlIGJlZW4gcmVuZGVyZWRcbiAgICogc28gd2UgY2FuIHN0YXJ0IGNhbGN1bGF0aW5nIHRoZSB3aWR0aHNcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMgPSB0aGlzLl9yb3dzLmNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vblJlc2l6ZS5uZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgb2JzZXJ2YWJsZXMgd2hlbiBkYXRhIHRhYmxlIGlzIGRlc3Ryb3llZFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVydGljYWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jvd3NDaGFuZ2VkU3Vicykge1xuICAgICAgdGhpcy5fcm93c0NoYW5nZWRTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZUNoYW5nZXNTdWJzKSB7XG4gICAgICB0aGlzLl92YWx1ZUNoYW5nZXNTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGdldHMgZXhlY3V0ZWQgZXZlcnkgdGltZSB0aGVyZSBpcyBhIHNjcm9sbCBldmVudFxuICAgKiBDYWxscyB0aGUgc2Nyb2xsIG9ic2VydmFibGVcbiAgICovXG4gIGhhbmRsZVNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGxldCBob3Jpem9udGFsU2Nyb2xsOiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAhPT0gaG9yaXpvbnRhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwubmV4dChob3Jpem9udGFsU2Nyb2xsKTtcbiAgICAgIH1cbiAgICAgIGxldCB2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgIT09IHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX29uVmVydGljYWxTY3JvbGwubmV4dCh2ZXJ0aWNhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG5lZWRlZCBmb3IgdGhlIGNvbHVtbnMgdmlhIGluZGV4XG4gICAqL1xuICBnZXRDb2x1bW5XaWR0aChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fd2lkdGhzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRDZWxsVmFsdWUoY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4sIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChjb2x1bW4ubmVzdGVkID09PSB1bmRlZmluZWQgfHwgY29sdW1uLm5lc3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE5lc3RlZFZhbHVlKGNvbHVtbi5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVtjb2x1bW4ubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIG1ldGhvZCBmb3IgdGVtcGxhdGUgcmVmZXJlbmNlc1xuICAgKi9cbiAgIGdldFRlbXBsYXRlUmVmKG5hbWU6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVNYXAuZ2V0KG5hbWUpO1xuICAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgbW9kZWwgKG5nTW9kZWwpIG9mIGNvbXBvbmVudCBieSByZW1vdmluZyBhbGwgdmFsdWVzIGluIGFycmF5LlxuICAgKi9cbiAgY2xlYXJNb2RlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlLnNwbGljZSgwLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGRhdGEgdGFibGUgYW5kIHJlcmVuZGVycyBbZGF0YV0gYW5kIFtjb2x1bW5zXVxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhbGwgcm93cyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlLlxuICAgKi9cbiAgc2VsZWN0QWxsKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgdG9nZ2xlZFJvd3M6IGFueVtdID0gW107XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gc2tpcGluZyBhbHJlYWR5IHNlbGVjdGVkIHJvd3NcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2hlY2tpbmcgd2hpY2ggb25lcyBhcmUgYmVpbmcgdG9nZ2xlZFxuICAgICAgICBpZiAodGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgbGV0IG1vZGVsUm93OiBhbnkgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgICAgICB9KVswXTtcbiAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMudmFsdWUuaW5kZXhPZihtb2RlbFJvdyk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5vblNlbGVjdEFsbC5lbWl0KHtyb3dzOiB0b2dnbGVkUm93cywgc2VsZWN0ZWQ6IGNoZWNrZWR9KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByb3cgaXMgc2VsZWN0ZWRcbiAgICovXG4gIGlzUm93U2VsZWN0ZWQocm93OiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgIH0pLmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhIHJvdyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlIGlmIHRoZSByb3cgJ2lzU2VsZWN0YWJsZSdcbiAgICogaGFuZGxlcyBjbnRybCBjbGlja3MgYW5kIHNoaWZ0IGNsaWNrcyBmb3IgbXVsdGktc2VsZWN0XG4gICAqL1xuICBzZWxlY3Qocm93OiBhbnksIGV2ZW50OiBFdmVudCwgY3VycmVudFNlbGVjdGVkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIFNoaWZ0IGtleSBpcyBzZWxlY3RlZCBhbmQgbmVlZCB0byBzZWxlY3QgZXZlcnl0aGluZyBpbiBiZXR3ZWVuXG4gICAgICBsZXQgbW91c2VFdmVudDogTW91c2VFdmVudCA9IGV2ZW50IGFzIE1vdXNlRXZlbnQ7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBtb3VzZUV2ZW50ICYmIG1vdXNlRXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICBsZXQgZmlyc3RJbmRleDogbnVtYmVyID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZCA+IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4O1xuICAgICAgICAgIGxhc3RJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBjbGlja2luZyBhIGNoZWNrYm94IGJlaGluZCB0aGUgaW5pdGlhbCBjaGVjaywgdGhlbiB0b2dnbGUgYWxsIHNlbGVjdGlvbnMgZXhwZWN0IHRoZSBpbml0aWFsIGNoZWNrYm94XG4gICAgICAgIC8vIGVsc2UgdGhlIGNoZWNrYm94ZXMgY2xpY2tlZCBhcmUgYWxsIGFmdGVyIHRoZSBpbml0aWFsIG9uZVxuICAgICAgICBpZiAoKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+PSBjdXJyZW50U2VsZWN0ZWQgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPiB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXgpIHx8XG4gICAgICAgICAgICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPD0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4IDwgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KSkge1xuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPiBjdXJyZW50U2VsZWN0ZWQpIHx8ICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgLy8gY2hhbmdlIGluZGV4ZXMgZGVwZW5kaW5nIG9uIHdoZXJlIHRoZSBuZXh0IGNoZWNrYm94IGlzIHNlbGVjdGVkIChiZWZvcmUgb3IgYWZ0ZXIpXG4gICAgICAgICAgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgICAgbGFzdEluZGV4LS07XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZpcnN0SW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvd1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHRoaXMuX2RhdGFbaV0pO1xuICAgICAgICAgICAgLy8gaWYgcm93IGlzIHNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIG9yIGlmIHJvdyB3YXMgdW5zZWxlY3RlZCBhbmQgZmlyc3QgY2hlY2tib3ggd2FzIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSB0aGUgdG9nZ2xlXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSAmJiAhcm93U2VsZWN0ZWQpIHx8XG4gICAgICAgICAgICAgICAgKCF0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgJiYgcm93U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkKSB7XG4gICAgICAgICAgICAgIC8vIGVsc2UgaWYgdGhlIGNoZWNrYm94IHNlbGVjdGVkIHdhcyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsYXN0IHNlbGVjdGlvbiBhbmQgdGhlIGZpcnN0IHNlbGVjdGlvblxuICAgICAgICAgICAgICAvLyB0aGVuIHdlIHVuZG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgaWYgKChjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA8PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkgfHxcbiAgICAgICAgICAgICAgICAgIChjdXJyZW50U2VsZWN0ZWQgPD0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA+PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIC8vIGlmIHNoaWZ0IHdhc250IHByZXNzZWQsIHRoZW4gd2UgdGFrZSB0aGUgZWxlbWVudCBjaGVja2VkIGFzIHRoZSBmaXJzdCByb3dcbiAgICAgIC8vIGluY2FzZSB0aGUgbmV4dCBjbGljayB1c2VzIHNoaWZ0XG4gICAgICB9IGVsc2UgaWYgKG1vdXNlRXZlbnQgJiYgIW1vdXNlRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlID0gdGhpcy5fZG9TZWxlY3Rpb24ocm93LCBjdXJyZW50U2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIG9uc2VsZWN0c3RhcnQgbWV0aG9kIG9mIHRoZSBkb2N1bWVudCBzbyBvdGhlciB0ZXh0IG9uIHRoZSBwYWdlXG4gICAqIGRvZXNuJ3QgZ2V0IHNlbGVjdGVkIHdoZW4gZG9pbmcgc2hpZnQgc2VsZWN0aW9ucy5cbiAgICovXG4gIGRpc2FibGVUZXh0U2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIG9yaWdpbmFsIG9uc2VsZWN0c3RhcnQgbWV0aG9kLlxuICAgKi9cbiAgZW5hYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGVtaXRzIHRoZSBvblJvd0NsaWNrRXZlbnQgd2hlbiBhIHJvdyBpcyBjbGlja2VkXG4gICAqIGlmIGNsaWNrYWJsZSBpcyB0cnVlIGFuZCBzZWxlY3RhYmxlIGlzIGZhbHNlIHRoZW4gc2VsZWN0IHRoZSByb3dcbiAgICovXG4gIGhhbmRsZVJvd0NsaWNrKHJvdzogYW55LCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGlja2FibGUpIHtcbiAgICAgIC8vIGlnbm9yaW5nIGxpbnRpbmcgcnVsZXMgaGVyZSBiZWNhdXNlIGF0dHJpYnV0ZSBpdCBhY3R1YWxseSBudWxsIG9yIG5vdCB0aGVyZVxuICAgICAgLy8gY2FuJ3QgY2hlY2sgZm9yIHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3JjRWxlbWVudDogYW55ID0gZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBpZiAoc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0b3BSb3dDbGljaycpID09PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnbWF0LXBzZXVkby1jaGVja2JveCcpIHtcbiAgICAgICAgdGhpcy5vblJvd0NsaWNrLmVtaXQoe1xuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBoYW5kbGUgZm9yIHNvcnQgY2xpY2sgZXZlbnQgaW4gY29sdW1uIGhlYWRlcnMuXG4gICAqL1xuICBoYW5kbGVTb3J0KGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NvcnRCeSA9PT0gY29sdW1uKSB7XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPSB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyA/XG4gICAgICAgIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgICAgIHRoaXMuX3NvcnRPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcbiAgICB9XG4gICAgdGhpcy5vblNvcnRDaGFuZ2UubmV4dCh7IG5hbWU6IHRoaXMuX3NvcnRCeS5uYW1lLCBvcmRlcjogdGhpcy5fc29ydE9yZGVyIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhbGwga2V5dXAgZXZlbnRzIHdoZW4gZm9jdXNpbmcgYSBkYXRhIHRhYmxlIHJvd1xuICAgKi9cbiAgX3Jvd0tleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50LCByb3c6IGFueSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIC8qKiBpZiB1c2VyIHByZXNzZXMgZW50ZXIgb3Igc3BhY2UsIHRoZSByb3cgc2hvdWxkIGJlIHNlbGVjdGVkICovXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHVzZXJzIHByZXNzZXMgdGhlIHVwIGFycm93LCB3ZSBmb2N1cyB0aGUgcHJldiByb3dcbiAgICAgICAgICogdW5sZXNzIGl0cyB0aGUgZmlyc3Qgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHVzZXJzIHByZXNzZXMgdGhlIGRvd24gYXJyb3csIHdlIGZvY3VzIHRoZSBuZXh0IHJvd1xuICAgICAgICAgKiB1bmxlc3MgaXRzIHRoZSBsYXN0IHJvd1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4IDwgKHRoaXMuX3Jvd3MudG9BcnJheSgpLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA8IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb2x1bW4gaW5kZXggb2YgdGhlIGRyYWdnZWQgY29sdW1uIGFuZCBpbml0aWFsIGNsaWVudFggb2YgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlU3RhcnRDb2x1bW5EcmFnKGluZGV4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIG5ldyB3aWR0aCBkZXBlbmRpbmcgb24gbmV3IGNsaWVudFggb2YgZHJhZ2dlciBjb2x1bW5cbiAgICovXG4gIF9oYW5kbGVDb2x1bW5EcmFnKGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgd2FzIGJlZW4gYSBzZXBhcmF0b3IgY2xpY2tlZCBmb3IgcmVzaXplXG4gICAgaWYgKHRoaXMuX3Jlc2l6aW5nQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY2xpZW50WCA+IDApIHtcbiAgICAgIGxldCB4UG9zaXRpb246IG51bWJlciA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHNlcGFyYXRvciBpcyBiZWluZyBtb3ZlZCB0byB0cnkgYW5kIHJlc2l6ZSB0aGUgY29sdW1uLCBlbHNlIGRvbnQgZG8gYW55dGhpbmdcbiAgICAgIGlmICh4UG9zaXRpb24gPiAwICYmIHRoaXMuX2NvbHVtbkNsaWVudFggPiAwICYmICh4UG9zaXRpb24gLSB0aGlzLl9jb2x1bW5DbGllbnRYKSAhPT0gMCkge1xuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5ldyB3aWR0aCBkZXBlbmRpbmcgaWYgbWFraW5nIHRoZSBjb2x1bW4gYmlnZ2VyIG9yIHNtYWxsZXJcbiAgICAgICAgbGV0IHByb3Bvc2VkTWFudWFsV2lkdGg6IG51bWJlciA9IHRoaXMuX3dpZHRoc1t0aGlzLl9yZXNpemluZ0NvbHVtbl0udmFsdWUgKyAoeFBvc2l0aW9uIC0gdGhpcy5fY29sdW1uQ2xpZW50WCk7XG4gICAgICAgIC8vIGlmIHRoZSBwcm9wb3NlZCBuZXcgd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBwcm9qZWN0ZWQgbWluIHdpZHRoIG9mIHRoZSBjb2x1bW4sIHVzZSBwcm9qZWN0ZWQgbWluIHdpZHRoXG4gICAgICAgIGlmIChwcm9wb3NlZE1hbnVhbFdpZHRoIDwgdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS5wcm9qZWN0ZWRXaWR0aCkge1xuICAgICAgICAgIHByb3Bvc2VkTWFudWFsV2lkdGggPSB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnByb2plY3RlZFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1uc1t0aGlzLl9yZXNpemluZ0NvbHVtbl0ud2lkdGggPSBwcm9wb3NlZE1hbnVhbFdpZHRoO1xuICAgICAgICAvLyB1cGRhdGUgbmV3IHggcG9zaXRpb24gZm9yIHRoZSByZXNpemVkIGNvbHVtblxuICAgICAgICB0aGlzLl9vbkNvbHVtblJlc2l6ZS5uZXh0KHhQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuZHMgZHJhZ2dlZCBmbGFnc1xuICAgKi9cbiAgX2hhbmRsZUVuZENvbHVtbkRyYWcoKTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXNpemluZ0NvbHVtbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcHJldmVudCB0aGUgZGVmYXVsdCBldmVudHNcbiAgICovXG4gIGJsb2NrRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE5lc3RlZFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHx8ICFuYW1lKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChuYW1lLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBsZXQgc3BsaXROYW1lOiBzdHJpbmdbXSA9IG5hbWUuc3BsaXQoL1xcLiguKykvLCAyKTtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShzcGxpdE5hbWVbMV0sIHZhbHVlW3NwbGl0TmFtZVswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWVbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvZXMgdGhlIGFjdHVhbCBSb3cgU2VsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIF9kb1NlbGVjdGlvbihyb3c6IGFueSwgcm93SW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCB3YXNTZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpO1xuICAgIGlmICghd2FzU2VsZWN0ZWQpIHtcbiAgICAgIGlmICghdGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5jbGVhck1vZGVsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlLnB1c2gocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29tcGFyZSBpdGVtcyBieSBbY29tcGFyZVdpdGhdIGZ1bmN0aW9uXG4gICAgICByb3cgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgICAgfSlbMF07XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMudmFsdWUuaW5kZXhPZihyb3cpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk7XG4gICAgdGhpcy5vblJvd1NlbGVjdC5lbWl0KHtyb3c6IHJvdywgaW5kZXg6IHJvd0luZGV4LCBzZWxlY3RlZDogIXdhc1NlbGVjdGVkfSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gIXdhc1NlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbGwgdGhlIHN0YXRlIG9mIGFsbCBjaGVja2JveGVzXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IHR5cGVvZiB0aGlzLl9kYXRhLmZpbmQoKGQ6IGFueSkgPT4gIXRoaXMuaXNSb3dTZWxlY3RlZChkKSkgPT09ICd1bmRlZmluZWQnO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgd2lkdGhzIGZvciBjb2x1bW5zIGFuZCBjZWxscyBkZXBlbmRpbmcgb24gY29udGVudFxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlV2lkdGhzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb2xFbGVtZW50cyAmJiB0aGlzLl9jb2xFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3dpZHRocyA9IFtdO1xuICAgICAgdGhpcy5fY29sRWxlbWVudHMuZm9yRWFjaCgoY29sOiBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWR0aChpbmRleCwgdGhpcy5fY2FsY3VsYXRlV2lkdGgoKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgY29sdW1ucyBhZnRlciBjYWxjdWxhdGlvbiB0byBzZWUgaWYgdGhleSBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZC5cbiAgICovXG4gIHByaXZhdGUgX2FkanVzdENvbHVtbldpZGh0cygpOiB2b2lkIHtcbiAgICBsZXQgZml4ZWRUb3RhbFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIC8vIGdldCB0aGUgbnVtYmVyIG9mIHRvdGFsIGNvbHVtbnMgdGhhdCBoYXZlIGZsZXhpYmxlIHdpZHRocyAobm90IGZpeGVkIG9yIGhpZGRlbilcbiAgICBsZXQgZmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC5saW1pdCB8fCB3aWR0aC5tYXggfHwgd2lkdGgubWluKSB7XG4gICAgICAgIGZpeGVkVG90YWxXaWR0aCArPSB3aWR0aC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heCAmJiAhd2lkdGgubWluO1xuICAgIH0pLmxlbmd0aDtcbiAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggcGl4ZXMgYXJlIGxlZnQgdGhhdCBjb3VsZCBiZSBzcHJlYWQgYWNyb3NzXG4gICAgLy8gdGhlIGZsZXhpYmxlIGNvbHVtbnNcbiAgICBsZXQgcmVjYWxjdWxhdGVIb3N0V2lkdGg6IG51bWJlciA9IDA7XG4gICAgaWYgKGZpeGVkVG90YWxXaWR0aCA8IHRoaXMuaG9zdFdpZHRoKSB7XG4gICAgICByZWNhbGN1bGF0ZUhvc3RXaWR0aCA9IHRoaXMuaG9zdFdpZHRoIC0gZml4ZWRUb3RhbFdpZHRoO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBoYXZlIGZsZXhpYmxlIGNvbHVtbnMgYW5kIHBpeGVscyB0byBzcGFyZSBvbiB0aGVtXG4gICAgLy8gd2UgdHJ5IGFuZCBzcHJlYWQgdGhlIHBpeGVscyBhY3Jvc3MgdGhlbVxuICAgIGlmIChmbGV4aWJsZVdpZHRocyAmJiByZWNhbGN1bGF0ZUhvc3RXaWR0aCkge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgPSBNYXRoLmZsb29yKHJlY2FsY3VsYXRlSG9zdFdpZHRoIC8gZmxleGlibGVXaWR0aHMpO1xuICAgICAgbGV0IGFkanVzdGVkTnVtYmVyOiBudW1iZXIgPSAwO1xuICAgICAgLy8gYWRqdXN0IHRoZSBjb2x1bW4gd2lkdGhzIHdpdGggdGhlIHNwcmVhZCBwaXhlbHNcbiAgICAgIHRoaXMuX3dpZHRocy5mb3JFYWNoKChjb2xXaWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubWF4ICYmIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0udmFsdWUgPiBuZXdWYWx1ZSB8fFxuICAgICAgICAgICAgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5taW4gJiYgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS52YWx1ZSA8IG5ld1ZhbHVlIHx8XG4gICAgICAgICAgICAhdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5saW1pdCkge1xuICAgICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZHRoKGNvbFdpZHRoLmluZGV4LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgYWRqdXN0ZWROdW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgY29sdW1ucyB0aGF0IG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkLCB3ZSBzdGFydCBvdmVyXG4gICAgICBsZXQgbmV3RmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCkgPT4ge1xuICAgICAgICByZXR1cm4gIXdpZHRoLmxpbWl0ICYmICF3aWR0aC5tYXg7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBpZiAobmV3RmxleGlibGVXaWR0aHMgIT09IGFkanVzdGVkTnVtYmVyICYmIG5ld0ZsZXhpYmxlV2lkdGhzICE9PSBmbGV4aWJsZVdpZHRocykge1xuICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWRodHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyBhIHNpbmdsZSBjb2x1bW4gdG8gc2VlIGlmIGl0IGNhbiBiZSByZWNhbGN1bGF0ZWRcbiAgICovXG4gIHByaXZhdGUgX2FkanVzdENvbHVtbldpZHRoKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl93aWR0aHNbaW5kZXhdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgbGltaXQ6IGZhbHNlLFxuICAgICAgbWluOiBmYWxzZSxcbiAgICAgIG1heDogZmFsc2UsXG4gICAgfTtcbiAgICAvLyBmbGFnIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNraXAgdGhlIG1pbiB3aWR0aCBwcm9qZWN0aW9uXG4gICAgLy8gZGVwZW5kaW5nIGlmIGEgd2lkdGggb3IgbWluIHdpZHRoIGhhcyBiZWVuIHByb3ZpZGVkXG4gICAgbGV0IHNraXBNaW5XaWR0aFByb2plY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jb2x1bW5zW2luZGV4XSkge1xuICAgICAgLy8gaWYgdGhlIHByb3ZpZGVkIHdpZHRoIGhhcyBtaW4vbWF4LCB0aGVuIHdlIGNoZWNrIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNldCBpdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgd2lkdGhPcHRzOiBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCA9IDxJVGREYXRhVGFibGVDb2x1bW5XaWR0aD50aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoO1xuICAgICAgICAvLyBpZiB0aGUgY29sdW1uIHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgY29uZmlndXJlZCBtaW4sIHdlIG92ZXJyaWRlIGl0XG4gICAgICAgIHNraXBNaW5XaWR0aFByb2plY3Rpb24gPSAod2lkdGhPcHRzICYmICEhd2lkdGhPcHRzLm1pbik7XG4gICAgICAgIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1pbiA+PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5taW47XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgICAvLyBpZiB0aGUgY29sdW1uIHdpZHRoIGlzIG1vcmUgdGhhbiB0aGUgY29uZmlndXJlZCBtYXgsIHdlIG92ZXJyaWRlIGl0XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGhPcHRzICYmIHdpZHRoT3B0cy5tYXggPD0gdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB3aWR0aE9wdHMubWF4O1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubWF4ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgLy8gaWYgaXQgaGFzIGEgZml4ZWQgd2lkdGgsIHRoZW4gd2UganVzdCBzZXQgaXRcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSA8bnVtYmVyPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIHNraXBNaW5XaWR0aFByb2plY3Rpb24gPSB0aGlzLl93aWR0aHNbaW5kZXhdLmxpbWl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGhlcmUgd2Fzbid0IGFueSB3aWR0aCBvciBtaW4gd2lkdGggcHJvdmlkZWQsIHdlIHNldCBhIG1pbiB0byB3aGF0IHRoZSBjb2x1bW4gd2lkdGggbWluIHNob3VsZCBiZVxuICAgIGlmICghc2tpcE1pbldpZHRoUHJvamVjdGlvbiAmJlxuICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlIDwgdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW2luZGV4XS5wcm9qZWN0ZWRXaWR0aCkge1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGg7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1pbiA9IHRydWU7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLmxpbWl0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRvIGNhbGN1bGF0ZSBjb2x1bW4gd2lkdGhcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IHJlbmRlcmVkQ29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW10gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2w6IElUZERhdGFUYWJsZUNvbHVtbikgPT4gIWNvbC5oaWRkZW4pO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuaG9zdFdpZHRoIC8gcmVuZGVyZWRDb2x1bW5zLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGN1bGF0ZSB0aGUgcm93cyB0byBiZSByZW5kZXJlZCBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk6IHZvaWQge1xuICAgIGxldCBzY3JvbGxlZFJvd3M6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIGxldCByb3dIZWlnaHRTdW06IG51bWJlciA9IDA7XG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHJvd3MgdG8gc2VlIGlmIHdlIGhhdmUgdGhlaXIgaGVpZ2h0IGNhY2hlZFxuICAgICAgLy8gYW5kIHN1bSB0aGVtIGFsbCB0byBjYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodFxuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChkOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIHJvd3MgYXQgZmlyc3QgYW5kIGFzc3VtZSBhbGxcbiAgICAgICAgLy8gcm93cyBhcmUgdGhlIHNhbWUgaGVpZ2h0IGFzIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKCF0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSkge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldID0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbMF0gfHwgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgcm93SGVpZ2h0U3VtICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldO1xuICAgICAgICAvLyBjaGVjayBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSByb3dIZWlnaHRTdW0gPiAwKSB7XG4gICAgICAgICAgc2Nyb2xsZWRSb3dzKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSByb3dIZWlnaHRTdW07XG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGxldCBmcm9tUm93OiBudW1iZXIgPSBzY3JvbGxlZFJvd3MgLSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSBmcm9tUm93ID4gMCA/IGZyb21Sb3cgOiAwO1xuXG4gICAgICBsZXQgaG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5faG9zdEhlaWdodDtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICAgIC8vIGNhbGN1bGF0ZSBob3cgbWFueSByb3dzIGNhbiBmaXQgaW4gdGhlIHZpZXdwb3J0XG4gICAgICB3aGlsZSAoaG9zdEhlaWdodCA+IDApIHtcbiAgICAgICAgaG9zdEhlaWdodCAtPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVt0aGlzLmZyb21Sb3cgKyBpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgICAvLyBzZXQgdGhlIGxhc3Qgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGxldCByYW5nZTogbnVtYmVyID0gKGluZGV4IC0gMSkgKyAoVERfVklSVFVBTF9PRkZTRVQgKiAyKTtcbiAgICAgIGxldCB0b1JvdzogbnVtYmVyID0gcmFuZ2UgKyB0aGlzLmZyb21Sb3c7XG4gICAgICAvLyBpZiBsYXN0IHJvdyBpcyBncmVhdGVyIHRoYW4gdGhlIHRvdGFsIGxlbmd0aCwgdGhlbiB3ZSB1c2UgdGhlIHRvdGFsIGxlbmd0aFxuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwcm9wZXIgb2Zmc2V0IGRlcGVuZGluZyBvbiBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgIGlmIChzY3JvbGxlZFJvd3MgPiBURF9WSVJUVUFMX09GRlNFVCkge1xuICAgICAgZm9yIChsZXQgaW5kZXg6IG51bWJlciA9IDA7IGluZGV4IDwgdGhpcy5mcm9tUm93OyBpbmRleCsrKSB7XG4gICAgICAgIG9mZnNldCArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fb2Zmc2V0VHJhbnNmb3JtID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndHJhbnNsYXRlWSgnICsgKG9mZnNldCAtIHRoaXMudG90YWxIZWlnaHQpICsgJ3B4KScpO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsRGF0YSA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLmZyb21Sb3csIHRoaXMudG9Sb3cpO1xuICAgIH1cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50IHtcbiAgb3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0aFt0ZC1kYXRhLXRhYmxlLWNvbHVtbl0nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQge1xuXG4gIHByaXZhdGUgX3NvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG5cbiAgQFZpZXdDaGlsZCgnY29sdW1uQ29udGVudCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgX2NvbHVtbkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IHByb2plY3RlZFdpZHRoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbkNvbnRlbnQgJiYgdGhpcy5fY29sdW1uQ29udGVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9jb2x1bW5Db250ZW50Lm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hbWU/OiBzdHJpbmdcbiAgICogU2V0cyB1bmlxdWUgY29sdW1uIFtuYW1lXSBmb3IgW3NvcnRhYmxlXSBldmVudHMuXG4gICAqL1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogc29ydGFibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgc29ydGluZyBldmVudHMsIHNvcnQgaWNvbnMgYW5kIGFjdGl2ZSBjb2x1bW4gc3RhdGVzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3NvcnRhYmxlJykgc29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGNvbHVtbiB0byBhY3RpdmUgc3RhdGUgd2hlbiAndHJ1ZScuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJykgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIG51bWVyaWM/OiBib29sZWFuXG4gICAqIE1ha2VzIGNvbHVtbiBmb2xsb3cgdGhlIG51bWVyaWMgZGF0YS10YWJsZSBzcGVjcyBhbmQgc29ydCBpY29uLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ251bWVyaWMnKSBudW1lcmljOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHNvcnRPcmRlcj86IFsnQVNDJyB8ICdERVNDJ10gb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXJcbiAgICogU2V0cyB0aGUgc29ydCBvcmRlciBvZiBjb2x1bW4uXG4gICAqIERlZmF1bHRzIHRvICdBU0MnIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKi9cbiAgQElucHV0KCdzb3J0T3JkZXInKVxuICBzZXQgc29ydE9yZGVyKG9yZGVyOiAnQVNDJyB8ICdERVNDJykge1xuICAgIGxldCBzb3J0T3JkZXI6IHN0cmluZyA9IG9yZGVyID8gb3JkZXIudG9VcHBlckNhc2UoKSA6ICdBU0MnO1xuICAgIGlmIChzb3J0T3JkZXIgIT09ICdERVNDJyAmJiBzb3J0T3JkZXIgIT09ICdBU0MnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0T3JkZXJdIG11c3QgYmUgZW1wdHksIEFTQyBvciBERVNDJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydE9yZGVyID0gc29ydE9yZGVyID09PSAnQVNDJyA/XG4gICAgICBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcgOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRDaGFuZ2U/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNvbHVtbiBoZWFkZXJzIGFyZSBjbGlja2VkLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3NvcnRDaGFuZ2UnKSBvblNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWNsaWNrYWJsZScpXG4gIGdldCBiaW5kQ2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtc29ydGFibGUnKVxuICBnZXQgYmluZ1NvcnRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtYWN0aXZlJylcbiAgZ2V0IGJpbmRBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtbnVtZXJpYycpXG4gIGdldCBiaW5kTnVtZXJpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5udW1lcmljO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtY29sdW1uJyk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuaW5nIHRvIGNsaWNrIGV2ZW50IG9uIGhvc3QgdG8gdGhyb3cgYSBzb3J0IGV2ZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNvcnRhYmxlKSB7XG4gICAgICB0aGlzLm9uU29ydENoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLm5hbWUsIG9yZGVyOiB0aGlzLl9zb3J0T3JkZXJ9KTtcbiAgICB9XG4gIH1cblxuICBpc0FzY2VuZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gIH1cblxuICBpc0Rlc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0ZFt0ZC1kYXRhLXRhYmxlLWNlbGxdJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogbnVtZXJpYz86IGJvb2xlYW5cbiAgICogTWFrZXMgY2VsbCBmb2xsb3cgdGhlIG51bWVyaWMgZGF0YS10YWJsZSBzcGVjcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdudW1lcmljJykgbnVtZXJpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LW51bWVyaWMnKVxuICBnZXQgYmluZE51bWVyaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnVtZXJpYztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNlbGwnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndGFibGVbdGQtZGF0YS10YWJsZV0nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLXRhYmxlLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlVGFibGVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciwgSVRkRGF0YVRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVTZXJ2aWNlIHtcblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gc2VhcmNoVGVybTogc3RyaW5nXG4gICAqIC0gaWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlXG4gICAqIC0gZXhjbHVkZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdXG4gICAqXG4gICAqIFNlYXJjaGVzIFtkYXRhXSBwYXJhbWV0ZXIgZm9yIFtzZWFyY2hUZXJtXSBtYXRjaGVzIGFuZCByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlbS5cbiAgICovXG4gIGZpbHRlckRhdGEoZGF0YTogYW55W10sIHNlYXJjaFRlcm06IHN0cmluZywgaWdub3JlQ2FzZTogYm9vbGVhbiA9IGZhbHNlLCBleGNsdWRlZENvbHVtbnM/OiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBsZXQgZmlsdGVyOiBzdHJpbmcgPSBzZWFyY2hUZXJtID8gKGlnbm9yZUNhc2UgPyBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkgOiBzZWFyY2hUZXJtKSA6ICcnO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlczogYW55ID0gT2JqZWN0LmtleXMoaXRlbSkuZmluZCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAoIWV4Y2x1ZGVkQ29sdW1ucyB8fCBleGNsdWRlZENvbHVtbnMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJlSXRlbVZhbHVlOiBzdHJpbmcgPSAoJycgKyBpdGVtW2tleV0pO1xuICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlOiBzdHJpbmcgPSBpZ25vcmVDYXNlID8gcHJlSXRlbVZhbHVlLnRvTG93ZXJDYXNlKCkgOiBwcmVJdGVtVmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVZhbHVlLmluZGV4T2YoZmlsdGVyKSA+IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhKHR5cGVvZiByZXMgPT09ICd1bmRlZmluZWQnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBzb3J0Qnk6IHN0cmluZ1xuICAgKiAtIHNvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICpcbiAgICogU29ydHMgW2RhdGFdIHBhcmFtZXRlciBieSBbc29ydEJ5XSBhbmQgW3NvcnRPcmRlcl0gYW5kIHJldHVybnMgdGhlIHNvcnRlZCBkYXRhLlxuICAgKi9cbiAgc29ydERhdGEoZGF0YTogYW55W10sIHNvcnRCeTogc3RyaW5nLCBzb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nKTogYW55W10ge1xuICAgIGlmIChzb3J0QnkpIHtcbiAgICAgIGRhdGEgPSBBcnJheS5mcm9tKGRhdGEpOyAvLyBDaGFuZ2UgdGhlIGFycmF5IHJlZmVyZW5jZSB0byB0cmlnZ2VyIE9uUHVzaCBhbmQgbm90IG11dGF0ZSBvcmlnaW5hbCBhcnJheVxuICAgICAgZGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgY29tcEE6IGFueSA9IGFbc29ydEJ5XTtcbiAgICAgICAgbGV0IGNvbXBCOiBhbnkgPSBiW3NvcnRCeV07XG4gICAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlciA9IDA7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSkgJiYgIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQikpKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpIC0gTnVtYmVyLnBhcnNlRmxvYXQoY29tcEIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb21wQSA8IGNvbXBCKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBBID4gY29tcEIpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gKiAoc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nID8gLTEgOiAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBmcm9tUm93OiBudW1iZXJcbiAgICogLSB0b1JvdzogOiBudW1iZXJcbiAgICpcbiAgICogUmV0dXJucyBhIHNlY3Rpb24gb2YgdGhlIFtkYXRhXSBwYXJhbWV0ZXIgc3RhcnRpbmcgZnJvbSBbZnJvbVJvd10gYW5kIGVuZGluZyBpbiBbdG9Sb3ddLlxuICAgKi9cbiAgcGFnZURhdGEoZGF0YTogYW55W10sIGZyb21Sb3c6IG51bWJlciwgdG9Sb3c6IG51bWJlcik6IGFueVtdIHtcbiAgICBpZiAoZnJvbVJvdyA+PSAxKSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShmcm9tUm93IC0gMSwgdG9Sb3cpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gREFUQV9UQUJMRV9QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGREYXRhVGFibGVTZXJ2aWNlKTogVGREYXRhVGFibGVTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGREYXRhVGFibGVTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBEQVRBX1RBQkxFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGREYXRhVGFibGVTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGREYXRhVGFibGVTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IERBVEFfVEFCTEVfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNlbGwvZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCwgVGREYXRhVGFibGVDb2x1bW5Sb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLXRhYmxlL2RhdGEtdGFibGUtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0YS10YWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBEQVRBX1RBQkxFX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLnNlcnZpY2UnO1xuXG5jb25zdCBURF9EQVRBX1RBQkxFOiBUeXBlPGFueT5bXSA9IFtcbiAgVGREYXRhVGFibGVDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmUsXG5cbiAgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQsXG4gIFRkRGF0YVRhYmxlQ2VsbENvbXBvbmVudCxcbiAgVGREYXRhVGFibGVSb3dDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlQ29sdW1uUm93Q29tcG9uZW50LFxuICBUZERhdGFUYWJsZVRhYmxlQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0RBVEFfVEFCTEUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9EQVRBX1RBQkxFLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEQVRBX1RBQkxFX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudERhdGFUYWJsZU1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJIb3N0TGlzdGVuZXIiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiVmlld0NvbnRhaW5lclJlZiIsIlRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIiwibWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciIsIlN1YmplY3QiLCJFdmVudEVtaXR0ZXIiLCJjb2VyY2VCb29sZWFuUHJvcGVydHkiLCJkZWJvdW5jZVRpbWUiLCJFTlRFUiIsIlNQQUNFIiwiVVBfQVJST1ciLCJET1dOX0FSUk9XIiwidHNsaWJfMS5fX3ZhbHVlcyIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiT3B0aW9uYWwiLCJJbmplY3QiLCJET0NVTUVOVCIsIkRvbVNhbml0aXplciIsIkNoYW5nZURldGVjdG9yUmVmIiwiQ29udGVudENoaWxkcmVuIiwiVmlld0NoaWxkIiwiVmlld0NoaWxkcmVuIiwiT3V0cHV0IiwiSG9zdEJpbmRpbmciLCJJbmplY3RhYmxlIiwiU2tpcFNlbGYiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VG9vbHRpcE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxh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