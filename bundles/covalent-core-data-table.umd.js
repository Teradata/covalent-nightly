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
        Object.defineProperty(TdDataTableCellComponent.prototype, "align", {
            get: /**
             * @return {?}
             */ function () {
                return this._align;
            },
            /**
             * align?: 'start' | 'center' | 'end'
             * Makes cell content align on demand
             * Defaults to 'left', overrides numeric
             */
            set: /**
             * align?: 'start' | 'center' | 'end'
             * Makes cell content align on demand
             * Defaults to 'left', overrides numeric
             * @param {?} align
             * @return {?}
             */ function (align) {
                this._align = align;
            },
            enumerable: true,
            configurable: true
        });
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
                        template: "<div class=\"td-data-table-cell-content-wrapper\"\n     [class.td-data-table-cell-numeric]=\"numeric\"\n     [class.td-data-table-cell-align-center]=\"align === 'center'\"\n     [class.td-data-table-cell-align-end]=\"align === 'end'\"\n     [class.td-data-table-cell-align-start]=\"align === 'start'\"\n     >\n  <ng-content></ng-content>\n</div>",
                        styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-start{-ms-flex-pack:start;justify-content:start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-end{-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-center{-ms-flex-pack:center;justify-content:center}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
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
            align: [{ type: core.Input }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1kYXRhLXRhYmxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS1yb3cvZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RpcmVjdGl2ZXMvZGF0YS10YWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtY2VsbC9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtdGFibGUvZGF0YS10YWJsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvc2VydmljZXMvZGF0YS10YWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jZWxsL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndHJbdGQtZGF0YS10YWJsZS1jb2x1bW4tcm93XScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNvbHVtblJvd0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNvbHVtbi1yb3cnKTtcbiAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0clt0ZC1kYXRhLXRhYmxlLXJvd10nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVSb3dDb21wb25lbnQge1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCdzZWxlY3RlZCcpXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IDQ4O1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGhlaWdodCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1yb3cnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5pbmcgdG8gY2xpY2sgZXZlbnQgdG8gZXhwbGljaXRseSBmb2N1cyB0aGUgcm93IGVsZW1lbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGNsaWNrTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3RkRGF0YVRhYmxlVGVtcGxhdGVdbmctdGVtcGxhdGUnfSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIHRkRGF0YVRhYmxlVGVtcGxhdGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICAgICAgIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCxcbiAgICAgICAgIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWYsIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdCwgSW5qZWN0LFxuICAgICAgICAgT3B0aW9uYWwsIFZpZXdDaGlsZHJlbiwgRWxlbWVudFJlZiwgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIERPV05fQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQsIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLXRhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIHtcbiAgQXNjZW5kaW5nID0gJ0FTQycsXG4gIERlc2NlbmRpbmcgPSAnREVTQycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGgge1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIG51bWVyaWM/OiBib29sZWFuO1xuICBmb3JtYXQ/OiAodmFsdWU6IGFueSkgPT4gYW55O1xuICBuZXN0ZWQ/OiBib29sZWFuO1xuICBzb3J0YWJsZT86IGJvb2xlYW47XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGZpbHRlcj86IGJvb2xlYW47XG4gIHdpZHRoPzogSVRkRGF0YVRhYmxlQ29sdW1uV2lkdGggfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0RXZlbnQge1xuICByb3c6IGFueTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU2VsZWN0QWxsRXZlbnQge1xuICByb3dzOiBhbnlbXTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudCB7XG4gIHJvdzogYW55O1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbENvbHVtbldpZHRoIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbGltaXQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIG1pbj86IGJvb2xlYW47XG4gIG1heD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gc2V0IHRoZSByb3dzIG9mZnNldCBiZWZvcmUgYW5kIGFmdGVyIHRoZSB2aWV3cG9ydFxuICovXG5jb25zdCBURF9WSVJUVUFMX09GRlNFVDogbnVtYmVyID0gMjtcblxuLyoqXG4gKiBDb25zdGFudCB0byBzZXQgZGVmYXVsdCByb3cgaGVpZ2h0IGlmIG5vbmUgaXMgcHJvdmlkZWRcbiAqL1xuY29uc3QgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ6IG51bWJlciA9IDQ4O1xuXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZERhdGFUYWJsZU1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGREYXRhVGFibGVCYXNlLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGREYXRhVGFibGVDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1kYXRhLXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgX1RkRGF0YVRhYmxlTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKiByZXNwb25zaXZlIHdpZHRoIGNhbGN1bGF0aW9ucyAqL1xuICBwcml2YXRlIF9yZXNpemVTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Jvd3NDaGFuZ2VkU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9ob3N0V2lkdGg6IG51bWJlciA9IDA7XG5cbiAgLyoqIG1hbnVhbGx5IHJlc2l6YWJsZSBjb2x1bW5zICovXG4gIHByaXZhdGUgX3Jlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sdW1uQ2xpZW50WDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY29sdW1uUmVzaXplU3ViczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZXNpemluZ0NvbHVtbjogbnVtYmVyO1xuICBwcml2YXRlIF9vbkNvbHVtblJlc2l6ZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIGdldCByZXNpemluZ0NvbHVtbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemluZ0NvbHVtbjtcbiAgfVxuXG4gIGdldCBob3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAvLyBpZiB0aGUgY2hlY2tib3hlcyBhcmUgcmVuZGVyZWQsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZWlyIHdpZHRoXG4gICAgLy8gZnJvbSB0aGUgdG90YWwgd2lkdGggdG8gY2FsY3VsYXRlIHByb3Blcmx5XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hvc3RXaWR0aCAtIDQyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faG9zdFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2lkdGhzOiBJSW50ZXJuYWxDb2x1bW5XaWR0aFtdID0gW107XG4gIHByaXZhdGUgX29uUmVzaXplOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogY29sdW1uIGhlYWRlciByZXBvc2l0aW9uIGFuZCB2aWV3cG9vcnQgKi9cbiAgcHJpdmF0ZSBfdmVydGljYWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2hvcml6b250YWxTY3JvbGxTdWJzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbEhvcml6b250YWxPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfb25Ib3Jpem9udGFsU2Nyb2xsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX29uVmVydGljYWxTY3JvbGw6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICAvLyBBcnJheSBvZiBjYWNoZWQgcm93IGhlaWdodHMgdG8gYWxsb3cgZHluYW1pYyByb3cgaGVpZ2h0c1xuICBwcml2YXRlIF9yb3dIZWlnaHRDYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgLy8gVG90YWwgcHNldWRvIGhlaWdodCBvZiBhbGwgdGhlIGVsZW1lbnRzXG4gIHByaXZhdGUgX3RvdGFsSGVpZ2h0OiBudW1iZXIgPSAwO1xuICAvLyBUb3RhbCBob3N0IGhlaWdodCBmb3IgdGhlIHZpZXdwb3J0XG4gIHByaXZhdGUgX2hvc3RIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8vIFNjcm9sbGVkIHZlcnRpY2FsIHBpeGVsc1xuICBwcml2YXRlIF9zY3JvbGxWZXJ0aWNhbE9mZnNldDogbnVtYmVyID0gMDtcbiAgLy8gU3R5bGUgdG8gbW92ZSB0aGUgY29udGVudCBhIGNlcnRhaW4gb2Zmc2V0IGRlcGVuZGluZyBvbiBzY3JvbGxlZCBvZmZzZXRcbiAgcHJpdmF0ZSBfb2Zmc2V0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XG5cbiAgLy8gVmFyaWFibGVzIHRoYXQgc2V0IGZyb20gYW5kIHRvIHdoaWNoIHJvd3Mgd2lsbCBiZSByZW5kZXJlZFxuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0IHN0eWxlIHdpdGggYSBwcm9wZXIgY2FsY3VsYXRpb24gb24gaG93IG11Y2ggaXQgc2hvdWxkIG1vdmVcbiAgICogb3ZlciB0aGUgeSBheGlzIG9mIHRoZSB0b3RhbCBoZWlnaHRcbiAgICovXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VHJhbnNmb3JtO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFzc3VtZWQgdG90YWwgaGVpZ2h0IG9mIHRoZSByb3dzXG4gICAqL1xuICBnZXQgdG90YWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5pdGlhbCByb3cgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgZ2V0IGZyb21Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbVJvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXN0IHJvdyB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICBnZXQgdG9Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Sb3c7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZXNTdWJzOiBTdWJzY3JpcHRpb247XG4gIC8qKiBpbnRlcm5hbCBhdHRyaWJ1dGVzICovXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICAvLyBkYXRhIHZpcnR1YWxseSBpdGVyYXRlZCBieSBjb21wb25lbnRcbiAgcHJpdmF0ZSBfdmlydHVhbERhdGE6IGFueVtdO1xuICBwcml2YXRlIF9jb2x1bW5zOiBJVGREYXRhVGFibGVDb2x1bW5bXTtcbiAgcHJpdmF0ZSBfc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGlja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9hbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHNvcnRpbmcgKi9cbiAgcHJpdmF0ZSBfc29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc29ydEJ5OiBJVGREYXRhVGFibGVDb2x1bW47XG4gIHByaXZhdGUgX3NvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG5cbiAgLyoqIHNoaWZ0IHNlbGVjdCAqL1xuICBwcml2YXRlIF9zaGlmdFByZXZpb3VzbHlQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xhc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfZmlyc3RDaGVja2JveFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIHRlbXBsYXRlIGZldGNoaW5nIHN1cHBvcnQgKi9cbiAgcHJpdmF0ZSBfdGVtcGxhdGVNYXA6IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREYXRhVGFibGVUZW1wbGF0ZURpcmVjdGl2ZSkgX3RlbXBsYXRlczogUXVlcnlMaXN0PFRkRGF0YVRhYmxlVGVtcGxhdGVEaXJlY3RpdmU+O1xuXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVEaXYnKSBfc2Nyb2xsYWJsZURpdjogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCdjb2x1bW5FbGVtZW50JykgX2NvbEVsZW1lbnRzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGRyZW4oVGREYXRhVGFibGVSb3dDb21wb25lbnQpIF9yb3dzOiBRdWVyeUxpc3Q8VGREYXRhVGFibGVSb3dDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHNjcm9sbCBwb3NpdGlvbiB0byByZXBvc2l0aW9uIGNvbHVtbiBoZWFkZXJzXG4gICAqL1xuICBnZXQgY29sdW1uc0xlZnRTY3JvbGwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAqIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdmFsdWVzIGFyZSBzZWxlY3RlZC5cbiAgICovXG4gIGdldCBhbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB2YWx1ZXMgYXJlIG5vdCBkZXNlbGVjdGVkXG4gICAqIGFuZCBhdCBsZWFzdCBvbmUgaXMuXG4gICAqL1xuICBnZXQgaW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkYXRhPzoge1trZXk6IHN0cmluZ106IGFueX1bXVxuICAgKiBTZXRzIHRoZSBkYXRhIHRvIGJlIHJlbmRlcmVkIGFzIHJvd3MuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlID0gW107XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgdGhlIGRhdGEgaGFzIGNoYW5nZWRcbiAgICAgIHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB2aXJ0dWFsRGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxEYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbHVtbnM/OiBJVGREYXRhVGFibGVDb2x1bW5bXVxuICAgKiBTZXRzIGFkZGl0aW9uYWwgY29sdW1uIGNvbmZpZ3VyYXRpb24uIFtJVGREYXRhVGFibGVDb2x1bW4ubmFtZV0gaGFzIHRvIGV4aXN0IGluIFtkYXRhXSBhcyBrZXkuXG4gICAqIERlZmF1bHRzIHRvIFtkYXRhXSBrZXlzLlxuICAgKi9cbiAgQElucHV0KCdjb2x1bW5zJylcbiAgc2V0IGNvbHVtbnMoY29sczogSVRkRGF0YVRhYmxlQ29sdW1uW10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29scztcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJVGREYXRhVGFibGVDb2x1bW5bXSB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0RhdGEpIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcbiAgICAgIC8vIGlmIGNvbHVtbnMgaXMgdW5kZWZpbmVkLCB1c2Uga2V5IGluIFtkYXRhXSByb3dzIGFzIG5hbWUgYW5kIGxhYmVsIGZvciBjb2x1bW4gaGVhZGVycy5cbiAgICAgIGxldCByb3c6IGFueSA9IHRoaXMuX2RhdGFbMF07XG4gICAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGspKSB7XG4gICAgICAgICAgdGhpcy5fY29sdW1ucy5wdXNoKHsgbmFtZTogaywgbGFiZWw6IGsgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzaXphYmxlQ29sdW1ucz86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtYW51YWwgY29sdW1uIHJlc2l6ZS5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdyZXNpemFibGVDb2x1bW5zJylcbiAgc2V0IHJlc2l6YWJsZUNvbHVtbnMocmVzaXphYmxlQ29sdW1uczogYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVzaXphYmxlQ29sdW1ucyk7XG4gIH1cbiAgZ2V0IHJlc2l6YWJsZUNvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6YWJsZUNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgc2VsZWN0aW9uIGV2ZW50cywgaG92ZXIgYW5kIHNlbGVjdGVkIHJvdyBzdGF0ZXMuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnc2VsZWN0YWJsZScpXG4gIHNldCBzZWxlY3RhYmxlKHNlbGVjdGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNlbGVjdGFibGUpO1xuICB9XG4gIGdldCBzZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrYWJsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyByb3cgY2xpY2sgZXZlbnRzLCBob3Zlci5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdjbGlja2FibGUnKVxuICBzZXQgY2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsaWNrYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjbGlja2FibGUpO1xuICB9XG4gIGdldCBjbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogRW5hYmxlcyBtdWx0aXBsZSByb3cgc2VsZWN0aW9uLiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzb3J0YWJsZScpXG4gIHNldCBzb3J0YWJsZShzb3J0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNvcnRhYmxlKTtcbiAgfVxuICBnZXQgc29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRCeT86IHN0cmluZ1xuICAgKiBTZXRzIHRoZSBhY3RpdmUgc29ydCBjb2x1bW4uIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgnc29ydEJ5JylcbiAgc2V0IHNvcnRCeShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZCgoYzogYW55KSA9PiBjLm5hbWUgPT09IGNvbHVtbk5hbWUpO1xuICAgIGlmICghY29sdW1uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0QnldIG11c3QgYmUgYSB2YWxpZCBjb2x1bW4gbmFtZScpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgfVxuICBnZXQgc29ydEJ5Q29sdW1uKCk6IElUZERhdGFUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgdGhlIFtzb3J0QnldIGNvbHVtbi4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBsZXQgc29ydE9yZGVyOiBzdHJpbmcgPSBvcmRlciA/IG9yZGVyLnRvVXBwZXJDYXNlKCkgOiAnQVNDJztcbiAgICBpZiAoc29ydE9yZGVyICE9PSAnREVTQycgJiYgc29ydE9yZGVyICE9PSAnQVNDJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydE9yZGVyXSBtdXN0IGJlIGVtcHR5LCBBU0Mgb3IgREVTQycpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgP1xuICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuICBnZXQgc29ydE9yZGVyRW51bSgpOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlcjtcbiAgfVxuXG4gIGdldCBoYXNEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzb3J0Q2hhbmdlJykgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dTZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgc2VsZWN0ZWQvZGVzZWxlY3RlZC4gW3NlbGVjdGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTZWxlY3RFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93U2VsZWN0Jykgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTZWxlY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiByb3dDbGljaz86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgncm93Q2xpY2snKSBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlUm93Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVJvd0NsaWNrRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHNlbGVjdEFsbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQvZGVzZWxlY3RlZCBieSB0aGUgYWxsIGNoZWNrYm94LiBbc2VsZWN0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzZWxlY3RBbGwnKSBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNlbGVjdEFsbEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21wYXJlV2l0aD86IGZ1bmN0aW9uKHJvdywgbW9kZWwpOiBib29sZWFuXG4gICAqIEFsbG93cyBjdXN0b20gY29tcGFyaXNvbiBiZXR3ZWVuIHJvdyBhbmQgbW9kZWwgdG8gc2VlIGlmIHJvdyBpcyBzZWxlY3RlZCBvciBub3RcbiAgICogRGVmYXVsdCBjb21wYXJhdGlvbiBpcyBieSByZWZlcmVuY2VcbiAgICovXG4gIEBJbnB1dCgnY29tcGFyZVdpdGgnKSBjb21wYXJlV2l0aDogKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiBib29sZWFuID0gKHJvdzogYW55LCBtb2RlbDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHJvdyA9PT0gbW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciByZXNpemUgYW5kIHNjcm9sbCBldmVudHNcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgcmVzaXplIGNhbGN1bGF0aW9uc1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnMgPSB0aGlzLl9vblJlc2l6ZS5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Jvd3MpIHtcbiAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KCkuZm9yRWFjaCgocm93OiBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW3RoaXMuZnJvbVJvdyArIGluZGV4XSA9IHJvdy5oZWlnaHQgKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgb2JzZXJ2YWJsZSBmb3IgY29sdW1uIHJlc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICB0aGlzLl9jb2x1bW5SZXNpemVTdWJzID0gdGhpcy5fb25Db2x1bW5SZXNpemUuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICApLnN1YnNjcmliZSgoY2xpZW50WDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl9jb2x1bW5DbGllbnRYID0gY2xpZW50WDtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSBvYnNlcnZhYmxlIGZvciBzY3JvbGwgY29sdW1uIGhlYWRlciByZXBvc2l0aW9uXG4gICAgdGhpcy5faG9yaXpvbnRhbFNjcm9sbFN1YnMgPSB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKGhvcml6b250YWxTY3JvbGw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCA9IGhvcml6b250YWxTY3JvbGw7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICAvLyBpbml0aWFsaXplIG9ic2VydmFibGUgZm9yIHZpcnR1YWwgc2Nyb2xsIHJlbmRlcmluZ1xuICAgIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsU3VicyA9IHRoaXMuX29uVmVydGljYWxTY3JvbGwuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGVtcGxhdGVzIGFuZCBzZXRzIHRoZW0gaW4gYSBtYXAgZm9yIGZhc3RlciBhY2Nlc3MuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RlbXBsYXRlcy50b0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlTWFwLnNldChcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVzLnRvQXJyYXkoKVtpXS50ZERhdGFUYWJsZVRlbXBsYXRlLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMudG9BcnJheSgpW2ldLnRlbXBsYXRlUmVmLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGhvc3RzIG5hdGl2ZSBlbGVtZW50cyB3aWR0aHMgdG8gc2VlIGlmIGl0IGhhcyBjaGFuZ2VkIChyZXNpemUgY2hlY2spXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHNjcm9sbCBoYXMgYmVlbiByZXNldCB3aGVuIGVsZW1lbnQgaXMgaGlkZGVuXG4gICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC0gdGhpcy5fc2Nyb2xsYWJsZURpdi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA+IDUpIHtcbiAgICAgIC8vIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgaWYgZWxlbWVudCBoYXMgYmVlbiByZXNldFxuICAgICAgdGhpcy5fb25WZXJ0aWNhbFNjcm9sbC5uZXh0KDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBsZXQgbmV3SG9zdFdpZHRoOiBudW1iZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAvLyBpZiB0aGUgd2lkdGggaGFzIGNoYW5nZWQgdGhlbiB3ZSB0aHJvdyBhIHJlc2l6ZSBldmVudC5cbiAgICAgIGlmICh0aGlzLl9ob3N0V2lkdGggIT09IG5ld0hvc3RXaWR0aCkge1xuICAgICAgICB0aGlzLl9ob3N0V2lkdGggPSBuZXdIb3N0V2lkdGg7XG4gICAgICAgIHRoaXMuX29uUmVzaXplLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudCkge1xuICAgICAgbGV0IG5ld0hvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX3Njcm9sbGFibGVEaXYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAvLyBpZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBoYXMgY2hhbmdlZCwgdGhlbiB3ZSBtYXJrIGZvciBjaGVja1xuICAgICAgaWYgKHRoaXMuX2hvc3RIZWlnaHQgIT09IG5ld0hvc3RIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5faG9zdEhlaWdodCA9IG5ld0hvc3RIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdG8gYW4gb2JzZXJ2YWJsZSB0aGF0IGNoZWNrcyBpZiBhbGwgcm93cyBoYXZlIGJlZW4gcmVuZGVyZWRcbiAgICogc28gd2UgY2FuIHN0YXJ0IGNhbGN1bGF0aW5nIHRoZSB3aWR0aHNcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3dzQ2hhbmdlZFN1YnMgPSB0aGlzLl9yb3dzLmNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vblJlc2l6ZS5uZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgb2JzZXJ2YWJsZXMgd2hlbiBkYXRhIHRhYmxlIGlzIGRlc3Ryb3llZFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMpIHtcbiAgICAgIHRoaXMuX2NvbHVtblJlc2l6ZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvcml6b250YWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl9ob3Jpem9udGFsU2Nyb2xsU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVydGljYWxTY3JvbGxTdWJzKSB7XG4gICAgICB0aGlzLl92ZXJ0aWNhbFNjcm9sbFN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jvd3NDaGFuZ2VkU3Vicykge1xuICAgICAgdGhpcy5fcm93c0NoYW5nZWRTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZUNoYW5nZXNTdWJzKSB7XG4gICAgICB0aGlzLl92YWx1ZUNoYW5nZXNTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGdldHMgZXhlY3V0ZWQgZXZlcnkgdGltZSB0aGVyZSBpcyBhIHNjcm9sbCBldmVudFxuICAgKiBDYWxscyB0aGUgc2Nyb2xsIG9ic2VydmFibGVcbiAgICovXG4gIGhhbmRsZVNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGxldCBob3Jpem9udGFsU2Nyb2xsOiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsSG9yaXpvbnRhbE9mZnNldCAhPT0gaG9yaXpvbnRhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwubmV4dChob3Jpem9udGFsU2Nyb2xsKTtcbiAgICAgIH1cbiAgICAgIGxldCB2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgIT09IHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX29uVmVydGljYWxTY3JvbGwubmV4dCh2ZXJ0aWNhbFNjcm9sbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG5lZWRlZCBmb3IgdGhlIGNvbHVtbnMgdmlhIGluZGV4XG4gICAqL1xuICBnZXRDb2x1bW5XaWR0aChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fd2lkdGhzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRDZWxsVmFsdWUoY29sdW1uOiBJVGREYXRhVGFibGVDb2x1bW4sIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChjb2x1bW4ubmVzdGVkID09PSB1bmRlZmluZWQgfHwgY29sdW1uLm5lc3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE5lc3RlZFZhbHVlKGNvbHVtbi5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVtjb2x1bW4ubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIG1ldGhvZCBmb3IgdGVtcGxhdGUgcmVmZXJlbmNlc1xuICAgKi9cbiAgIGdldFRlbXBsYXRlUmVmKG5hbWU6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVNYXAuZ2V0KG5hbWUpO1xuICAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgbW9kZWwgKG5nTW9kZWwpIG9mIGNvbXBvbmVudCBieSByZW1vdmluZyBhbGwgdmFsdWVzIGluIGFycmF5LlxuICAgKi9cbiAgY2xlYXJNb2RlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlLnNwbGljZSgwLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGRhdGEgdGFibGUgYW5kIHJlcmVuZGVycyBbZGF0YV0gYW5kIFtjb2x1bW5zXVxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVdpZHRocygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZUNoZWNrYm94U3RhdGUoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhbGwgcm93cyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlLlxuICAgKi9cbiAgc2VsZWN0QWxsKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgdG9nZ2xlZFJvd3M6IGFueVtdID0gW107XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gc2tpcGluZyBhbHJlYWR5IHNlbGVjdGVkIHJvd3NcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIHRoaXMudmFsdWUucHVzaChyb3cpO1xuICAgICAgICAgIC8vIGNoZWNraW5nIHdoaWNoIG9uZXMgYXJlIGJlaW5nIHRvZ2dsZWRcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2hlY2tpbmcgd2hpY2ggb25lcyBhcmUgYmVpbmcgdG9nZ2xlZFxuICAgICAgICBpZiAodGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgICB0b2dnbGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgbGV0IG1vZGVsUm93OiBhbnkgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVXaXRoKHJvdywgdmFsKTtcbiAgICAgICAgICB9KVswXTtcbiAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMudmFsdWUuaW5kZXhPZihtb2RlbFJvdyk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5vblNlbGVjdEFsbC5lbWl0KHtyb3dzOiB0b2dnbGVkUm93cywgc2VsZWN0ZWQ6IGNoZWNrZWR9KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByb3cgaXMgc2VsZWN0ZWRcbiAgICovXG4gIGlzUm93U2VsZWN0ZWQocm93OiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyBjb21wYXJlIGl0ZW1zIGJ5IFtjb21wYXJlV2l0aF0gZnVuY3Rpb25cbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgIH0pLmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGNsZWFycyBhIHJvdyBkZXBlbmRpbmcgb24gJ2NoZWNrZWQnIHZhbHVlIGlmIHRoZSByb3cgJ2lzU2VsZWN0YWJsZSdcbiAgICogaGFuZGxlcyBjbnRybCBjbGlja3MgYW5kIHNoaWZ0IGNsaWNrcyBmb3IgbXVsdGktc2VsZWN0XG4gICAqL1xuICBzZWxlY3Qocm93OiBhbnksIGV2ZW50OiBFdmVudCwgY3VycmVudFNlbGVjdGVkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmJsb2NrRXZlbnQoZXZlbnQpO1xuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIFNoaWZ0IGtleSBpcyBzZWxlY3RlZCBhbmQgbmVlZCB0byBzZWxlY3QgZXZlcnl0aGluZyBpbiBiZXR3ZWVuXG4gICAgICBsZXQgbW91c2VFdmVudDogTW91c2VFdmVudCA9IGV2ZW50IGFzIE1vdXNlRXZlbnQ7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBtb3VzZUV2ZW50ICYmIG1vdXNlRXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICBsZXQgZmlyc3RJbmRleDogbnVtYmVyID0gY3VycmVudFNlbGVjdGVkO1xuICAgICAgICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZCA+IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4O1xuICAgICAgICAgIGxhc3RJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBjbGlja2luZyBhIGNoZWNrYm94IGJlaGluZCB0aGUgaW5pdGlhbCBjaGVjaywgdGhlbiB0b2dnbGUgYWxsIHNlbGVjdGlvbnMgZXhwZWN0IHRoZSBpbml0aWFsIGNoZWNrYm94XG4gICAgICAgIC8vIGVsc2UgdGhlIGNoZWNrYm94ZXMgY2xpY2tlZCBhcmUgYWxsIGFmdGVyIHRoZSBpbml0aWFsIG9uZVxuICAgICAgICBpZiAoKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+PSBjdXJyZW50U2VsZWN0ZWQgJiYgdGhpcy5fbGFzdFNlbGVjdGVkSW5kZXggPiB0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXgpIHx8XG4gICAgICAgICAgICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPD0gY3VycmVudFNlbGVjdGVkICYmIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4IDwgdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4KSkge1xuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPiBjdXJyZW50U2VsZWN0ZWQpIHx8ICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgLy8gY2hhbmdlIGluZGV4ZXMgZGVwZW5kaW5nIG9uIHdoZXJlIHRoZSBuZXh0IGNoZWNrYm94IGlzIHNlbGVjdGVkIChiZWZvcmUgb3IgYWZ0ZXIpXG4gICAgICAgICAgaWYgKHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA+IGN1cnJlbnRTZWxlY3RlZCkge1xuICAgICAgICAgICAgbGFzdEluZGV4LS07XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9maXJzdFNlbGVjdGVkSW5kZXggPCBjdXJyZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZpcnN0SW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvd1NlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1Jvd1NlbGVjdGVkKHRoaXMuX2RhdGFbaV0pO1xuICAgICAgICAgICAgLy8gaWYgcm93IGlzIHNlbGVjdGVkIGFuZCBmaXJzdCBjaGVja2JveCB3YXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIG9yIGlmIHJvdyB3YXMgdW5zZWxlY3RlZCBhbmQgZmlyc3QgY2hlY2tib3ggd2FzIHVuc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSB0aGUgdG9nZ2xlXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2ZpcnN0Q2hlY2tib3hWYWx1ZSAmJiAhcm93U2VsZWN0ZWQpIHx8XG4gICAgICAgICAgICAgICAgKCF0aGlzLl9maXJzdENoZWNrYm94VmFsdWUgJiYgcm93U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0aW9uKHRoaXMuX2RhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkKSB7XG4gICAgICAgICAgICAgIC8vIGVsc2UgaWYgdGhlIGNoZWNrYm94IHNlbGVjdGVkIHdhcyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsYXN0IHNlbGVjdGlvbiBhbmQgdGhlIGZpcnN0IHNlbGVjdGlvblxuICAgICAgICAgICAgICAvLyB0aGVuIHdlIHVuZG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgaWYgKChjdXJyZW50U2VsZWN0ZWQgPj0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA8PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkgfHxcbiAgICAgICAgICAgICAgICAgIChjdXJyZW50U2VsZWN0ZWQgPD0gdGhpcy5fZmlyc3RTZWxlY3RlZEluZGV4ICYmIGN1cnJlbnRTZWxlY3RlZCA+PSB0aGlzLl9sYXN0U2VsZWN0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW2ldLCBpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIC8vIGlmIHNoaWZ0IHdhc250IHByZXNzZWQsIHRoZW4gd2UgdGFrZSB0aGUgZWxlbWVudCBjaGVja2VkIGFzIHRoZSBmaXJzdCByb3dcbiAgICAgIC8vIGluY2FzZSB0aGUgbmV4dCBjbGljayB1c2VzIHNoaWZ0XG4gICAgICB9IGVsc2UgaWYgKG1vdXNlRXZlbnQgJiYgIW1vdXNlRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGVja2JveFZhbHVlID0gdGhpcy5fZG9TZWxlY3Rpb24ocm93LCBjdXJyZW50U2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLl9zaGlmdFByZXZpb3VzbHlQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZpcnN0U2VsZWN0ZWRJbmRleCA9IGN1cnJlbnRTZWxlY3RlZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RTZWxlY3RlZEluZGV4ID0gY3VycmVudFNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIG9uc2VsZWN0c3RhcnQgbWV0aG9kIG9mIHRoZSBkb2N1bWVudCBzbyBvdGhlciB0ZXh0IG9uIHRoZSBwYWdlXG4gICAqIGRvZXNuJ3QgZ2V0IHNlbGVjdGVkIHdoZW4gZG9pbmcgc2hpZnQgc2VsZWN0aW9ucy5cbiAgICovXG4gIGRpc2FibGVUZXh0U2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIG9yaWdpbmFsIG9uc2VsZWN0c3RhcnQgbWV0aG9kLlxuICAgKi9cbiAgZW5hYmxlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGVtaXRzIHRoZSBvblJvd0NsaWNrRXZlbnQgd2hlbiBhIHJvdyBpcyBjbGlja2VkXG4gICAqIGlmIGNsaWNrYWJsZSBpcyB0cnVlIGFuZCBzZWxlY3RhYmxlIGlzIGZhbHNlIHRoZW4gc2VsZWN0IHRoZSByb3dcbiAgICovXG4gIGhhbmRsZVJvd0NsaWNrKHJvdzogYW55LCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGlja2FibGUpIHtcbiAgICAgIC8vIGlnbm9yaW5nIGxpbnRpbmcgcnVsZXMgaGVyZSBiZWNhdXNlIGF0dHJpYnV0ZSBpdCBhY3R1YWxseSBudWxsIG9yIG5vdCB0aGVyZVxuICAgICAgLy8gY2FuJ3QgY2hlY2sgZm9yIHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3JjRWxlbWVudDogYW55ID0gZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBpZiAoc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0b3BSb3dDbGljaycpID09PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnbWF0LXBzZXVkby1jaGVja2JveCcpIHtcbiAgICAgICAgdGhpcy5vblJvd0NsaWNrLmVtaXQoe1xuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBoYW5kbGUgZm9yIHNvcnQgY2xpY2sgZXZlbnQgaW4gY29sdW1uIGhlYWRlcnMuXG4gICAqL1xuICBoYW5kbGVTb3J0KGNvbHVtbjogSVRkRGF0YVRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NvcnRCeSA9PT0gY29sdW1uKSB7XG4gICAgICB0aGlzLl9zb3J0T3JkZXIgPSB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyA/XG4gICAgICAgIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmcgOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NvcnRCeSA9IGNvbHVtbjtcbiAgICAgIHRoaXMuX3NvcnRPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcbiAgICB9XG4gICAgdGhpcy5vblNvcnRDaGFuZ2UubmV4dCh7IG5hbWU6IHRoaXMuX3NvcnRCeS5uYW1lLCBvcmRlcjogdGhpcy5fc29ydE9yZGVyIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhbGwga2V5dXAgZXZlbnRzIHdoZW4gZm9jdXNpbmcgYSBkYXRhIHRhYmxlIHJvd1xuICAgKi9cbiAgX3Jvd0tleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50LCByb3c6IGFueSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIC8qKiBpZiB1c2VyIHByZXNzZXMgZW50ZXIgb3Igc3BhY2UsIHRoZSByb3cgc2hvdWxkIGJlIHNlbGVjdGVkICovXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICB0aGlzLl9kb1NlbGVjdGlvbih0aGlzLl9kYXRhW3RoaXMuZnJvbVJvdyArIGluZGV4XSwgdGhpcy5mcm9tUm93ICsgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHVzZXJzIHByZXNzZXMgdGhlIHVwIGFycm93LCB3ZSBmb2N1cyB0aGUgcHJldiByb3dcbiAgICAgICAgICogdW5sZXNzIGl0cyB0aGUgZmlyc3Qgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHVzZXJzIHByZXNzZXMgdGhlIGRvd24gYXJyb3csIHdlIGZvY3VzIHRoZSBuZXh0IHJvd1xuICAgICAgICAgKiB1bmxlc3MgaXRzIHRoZSBsYXN0IHJvd1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4IDwgKHRoaXMuX3Jvd3MudG9BcnJheSgpLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgdGhpcy5fcm93cy50b0FycmF5KClbaW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiB0aGlzLmZyb21Sb3cgKyBpbmRleCA8IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZG9TZWxlY3Rpb24odGhpcy5fZGF0YVt0aGlzLmZyb21Sb3cgKyBpbmRleF0sIHRoaXMuZnJvbVJvdyArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb2x1bW4gaW5kZXggb2YgdGhlIGRyYWdnZWQgY29sdW1uIGFuZCBpbml0aWFsIGNsaWVudFggb2YgY29sdW1uXG4gICAqL1xuICBfaGFuZGxlU3RhcnRDb2x1bW5EcmFnKGluZGV4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy5fcmVzaXppbmdDb2x1bW4gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIG5ldyB3aWR0aCBkZXBlbmRpbmcgb24gbmV3IGNsaWVudFggb2YgZHJhZ2dlciBjb2x1bW5cbiAgICovXG4gIF9oYW5kbGVDb2x1bW5EcmFnKGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgd2FzIGJlZW4gYSBzZXBhcmF0b3IgY2xpY2tlZCBmb3IgcmVzaXplXG4gICAgaWYgKHRoaXMuX3Jlc2l6aW5nQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY2xpZW50WCA+IDApIHtcbiAgICAgIGxldCB4UG9zaXRpb246IG51bWJlciA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHNlcGFyYXRvciBpcyBiZWluZyBtb3ZlZCB0byB0cnkgYW5kIHJlc2l6ZSB0aGUgY29sdW1uLCBlbHNlIGRvbnQgZG8gYW55dGhpbmdcbiAgICAgIGlmICh4UG9zaXRpb24gPiAwICYmIHRoaXMuX2NvbHVtbkNsaWVudFggPiAwICYmICh4UG9zaXRpb24gLSB0aGlzLl9jb2x1bW5DbGllbnRYKSAhPT0gMCkge1xuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5ldyB3aWR0aCBkZXBlbmRpbmcgaWYgbWFraW5nIHRoZSBjb2x1bW4gYmlnZ2VyIG9yIHNtYWxsZXJcbiAgICAgICAgbGV0IHByb3Bvc2VkTWFudWFsV2lkdGg6IG51bWJlciA9IHRoaXMuX3dpZHRoc1t0aGlzLl9yZXNpemluZ0NvbHVtbl0udmFsdWUgKyAoeFBvc2l0aW9uIC0gdGhpcy5fY29sdW1uQ2xpZW50WCk7XG4gICAgICAgIC8vIGlmIHRoZSBwcm9wb3NlZCBuZXcgd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBwcm9qZWN0ZWQgbWluIHdpZHRoIG9mIHRoZSBjb2x1bW4sIHVzZSBwcm9qZWN0ZWQgbWluIHdpZHRoXG4gICAgICAgIGlmIChwcm9wb3NlZE1hbnVhbFdpZHRoIDwgdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW3RoaXMuX3Jlc2l6aW5nQ29sdW1uXS5wcm9qZWN0ZWRXaWR0aCkge1xuICAgICAgICAgIHByb3Bvc2VkTWFudWFsV2lkdGggPSB0aGlzLl9jb2xFbGVtZW50cy50b0FycmF5KClbdGhpcy5fcmVzaXppbmdDb2x1bW5dLnByb2plY3RlZFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1uc1t0aGlzLl9yZXNpemluZ0NvbHVtbl0ud2lkdGggPSBwcm9wb3NlZE1hbnVhbFdpZHRoO1xuICAgICAgICAvLyB1cGRhdGUgbmV3IHggcG9zaXRpb24gZm9yIHRoZSByZXNpemVkIGNvbHVtblxuICAgICAgICB0aGlzLl9vbkNvbHVtblJlc2l6ZS5uZXh0KHhQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuZHMgZHJhZ2dlZCBmbGFnc1xuICAgKi9cbiAgX2hhbmRsZUVuZENvbHVtbkRyYWcoKTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1uQ2xpZW50WCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXNpemluZ0NvbHVtbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcHJldmVudCB0aGUgZGVmYXVsdCBldmVudHNcbiAgICovXG4gIGJsb2NrRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE5lc3RlZFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHx8ICFuYW1lKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChuYW1lLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBsZXQgc3BsaXROYW1lOiBzdHJpbmdbXSA9IG5hbWUuc3BsaXQoL1xcLiguKykvLCAyKTtcbiAgICAgIHJldHVybiB0aGlzLl9nZXROZXN0ZWRWYWx1ZShzcGxpdE5hbWVbMV0sIHZhbHVlW3NwbGl0TmFtZVswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWVbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvZXMgdGhlIGFjdHVhbCBSb3cgU2VsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIF9kb1NlbGVjdGlvbihyb3c6IGFueSwgcm93SW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCB3YXNTZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpO1xuICAgIGlmICghd2FzU2VsZWN0ZWQpIHtcbiAgICAgIGlmICghdGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5jbGVhck1vZGVsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlLnB1c2gocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29tcGFyZSBpdGVtcyBieSBbY29tcGFyZVdpdGhdIGZ1bmN0aW9uXG4gICAgICByb3cgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVdpdGgocm93LCB2YWwpO1xuICAgICAgfSlbMF07XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMudmFsdWUuaW5kZXhPZihyb3cpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk7XG4gICAgdGhpcy5vblJvd1NlbGVjdC5lbWl0KHtyb3c6IHJvdywgaW5kZXg6IHJvd0luZGV4LCBzZWxlY3RlZDogIXdhc1NlbGVjdGVkfSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gIXdhc1NlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbGwgdGhlIHN0YXRlIG9mIGFsbCBjaGVja2JveGVzXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVDaGVja2JveFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9hbGxTZWxlY3RlZCA9IHR5cGVvZiB0aGlzLl9kYXRhLmZpbmQoKGQ6IGFueSkgPT4gIXRoaXMuaXNSb3dTZWxlY3RlZChkKSkgPT09ICd1bmRlZmluZWQnO1xuICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgd2lkdGhzIGZvciBjb2x1bW5zIGFuZCBjZWxscyBkZXBlbmRpbmcgb24gY29udGVudFxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlV2lkdGhzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb2xFbGVtZW50cyAmJiB0aGlzLl9jb2xFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3dpZHRocyA9IFtdO1xuICAgICAgdGhpcy5fY29sRWxlbWVudHMuZm9yRWFjaCgoY29sOiBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWR0aChpbmRleCwgdGhpcy5fY2FsY3VsYXRlV2lkdGgoKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZGh0cygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgY29sdW1ucyBhZnRlciBjYWxjdWxhdGlvbiB0byBzZWUgaWYgdGhleSBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZC5cbiAgICovXG4gIHByaXZhdGUgX2FkanVzdENvbHVtbldpZGh0cygpOiB2b2lkIHtcbiAgICBsZXQgZml4ZWRUb3RhbFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIC8vIGdldCB0aGUgbnVtYmVyIG9mIHRvdGFsIGNvbHVtbnMgdGhhdCBoYXZlIGZsZXhpYmxlIHdpZHRocyAobm90IGZpeGVkIG9yIGhpZGRlbilcbiAgICBsZXQgZmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC5saW1pdCB8fCB3aWR0aC5tYXggfHwgd2lkdGgubWluKSB7XG4gICAgICAgIGZpeGVkVG90YWxXaWR0aCArPSB3aWR0aC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhd2lkdGgubGltaXQgJiYgIXdpZHRoLm1heCAmJiAhd2lkdGgubWluO1xuICAgIH0pLmxlbmd0aDtcbiAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggcGl4ZXMgYXJlIGxlZnQgdGhhdCBjb3VsZCBiZSBzcHJlYWQgYWNyb3NzXG4gICAgLy8gdGhlIGZsZXhpYmxlIGNvbHVtbnNcbiAgICBsZXQgcmVjYWxjdWxhdGVIb3N0V2lkdGg6IG51bWJlciA9IDA7XG4gICAgaWYgKGZpeGVkVG90YWxXaWR0aCA8IHRoaXMuaG9zdFdpZHRoKSB7XG4gICAgICByZWNhbGN1bGF0ZUhvc3RXaWR0aCA9IHRoaXMuaG9zdFdpZHRoIC0gZml4ZWRUb3RhbFdpZHRoO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBoYXZlIGZsZXhpYmxlIGNvbHVtbnMgYW5kIHBpeGVscyB0byBzcGFyZSBvbiB0aGVtXG4gICAgLy8gd2UgdHJ5IGFuZCBzcHJlYWQgdGhlIHBpeGVscyBhY3Jvc3MgdGhlbVxuICAgIGlmIChmbGV4aWJsZVdpZHRocyAmJiByZWNhbGN1bGF0ZUhvc3RXaWR0aCkge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgPSBNYXRoLmZsb29yKHJlY2FsY3VsYXRlSG9zdFdpZHRoIC8gZmxleGlibGVXaWR0aHMpO1xuICAgICAgbGV0IGFkanVzdGVkTnVtYmVyOiBudW1iZXIgPSAwO1xuICAgICAgLy8gYWRqdXN0IHRoZSBjb2x1bW4gd2lkdGhzIHdpdGggdGhlIHNwcmVhZCBwaXhlbHNcbiAgICAgIHRoaXMuX3dpZHRocy5mb3JFYWNoKChjb2xXaWR0aDogSUludGVybmFsQ29sdW1uV2lkdGgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0ubWF4ICYmIHRoaXMuX3dpZHRoc1tjb2xXaWR0aC5pbmRleF0udmFsdWUgPiBuZXdWYWx1ZSB8fFxuICAgICAgICAgICAgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5taW4gJiYgdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS52YWx1ZSA8IG5ld1ZhbHVlIHx8XG4gICAgICAgICAgICAhdGhpcy5fd2lkdGhzW2NvbFdpZHRoLmluZGV4XS5saW1pdCkge1xuICAgICAgICAgIHRoaXMuX2FkanVzdENvbHVtbldpZHRoKGNvbFdpZHRoLmluZGV4LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgYWRqdXN0ZWROdW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBpZiB0aGVyZSBhcmUgc3RpbGwgY29sdW1ucyB0aGF0IG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkLCB3ZSBzdGFydCBvdmVyXG4gICAgICBsZXQgbmV3RmxleGlibGVXaWR0aHM6IG51bWJlciA9IHRoaXMuX3dpZHRocy5maWx0ZXIoKHdpZHRoOiBJSW50ZXJuYWxDb2x1bW5XaWR0aCkgPT4ge1xuICAgICAgICByZXR1cm4gIXdpZHRoLmxpbWl0ICYmICF3aWR0aC5tYXg7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBpZiAobmV3RmxleGlibGVXaWR0aHMgIT09IGFkanVzdGVkTnVtYmVyICYmIG5ld0ZsZXhpYmxlV2lkdGhzICE9PSBmbGV4aWJsZVdpZHRocykge1xuICAgICAgICB0aGlzLl9hZGp1c3RDb2x1bW5XaWRodHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyBhIHNpbmdsZSBjb2x1bW4gdG8gc2VlIGlmIGl0IGNhbiBiZSByZWNhbGN1bGF0ZWRcbiAgICovXG4gIHByaXZhdGUgX2FkanVzdENvbHVtbldpZHRoKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl93aWR0aHNbaW5kZXhdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgbGltaXQ6IGZhbHNlLFxuICAgICAgbWluOiBmYWxzZSxcbiAgICAgIG1heDogZmFsc2UsXG4gICAgfTtcbiAgICAvLyBmbGFnIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNraXAgdGhlIG1pbiB3aWR0aCBwcm9qZWN0aW9uXG4gICAgLy8gZGVwZW5kaW5nIGlmIGEgd2lkdGggb3IgbWluIHdpZHRoIGhhcyBiZWVuIHByb3ZpZGVkXG4gICAgbGV0IHNraXBNaW5XaWR0aFByb2plY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jb2x1bW5zW2luZGV4XSkge1xuICAgICAgLy8gaWYgdGhlIHByb3ZpZGVkIHdpZHRoIGhhcyBtaW4vbWF4LCB0aGVuIHdlIGNoZWNrIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHNldCBpdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgd2lkdGhPcHRzOiBJVGREYXRhVGFibGVDb2x1bW5XaWR0aCA9IDxJVGREYXRhVGFibGVDb2x1bW5XaWR0aD50aGlzLmNvbHVtbnNbaW5kZXhdLndpZHRoO1xuICAgICAgICAvLyBpZiB0aGUgY29sdW1uIHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgY29uZmlndXJlZCBtaW4sIHdlIG92ZXJyaWRlIGl0XG4gICAgICAgIHNraXBNaW5XaWR0aFByb2plY3Rpb24gPSAod2lkdGhPcHRzICYmICEhd2lkdGhPcHRzLm1pbik7XG4gICAgICAgIGlmICh3aWR0aE9wdHMgJiYgd2lkdGhPcHRzLm1pbiA+PSB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHdpZHRoT3B0cy5taW47XG4gICAgICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS5taW4gPSB0cnVlO1xuICAgICAgICAvLyBpZiB0aGUgY29sdW1uIHdpZHRoIGlzIG1vcmUgdGhhbiB0aGUgY29uZmlndXJlZCBtYXgsIHdlIG92ZXJyaWRlIGl0XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGhPcHRzICYmIHdpZHRoT3B0cy5tYXggPD0gdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSB3aWR0aE9wdHMubWF4O1xuICAgICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0ubWF4ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgLy8gaWYgaXQgaGFzIGEgZml4ZWQgd2lkdGgsIHRoZW4gd2UganVzdCBzZXQgaXRcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoc1tpbmRleF0udmFsdWUgPSA8bnVtYmVyPnRoaXMuY29sdW1uc1tpbmRleF0ud2lkdGg7XG4gICAgICAgIHNraXBNaW5XaWR0aFByb2plY3Rpb24gPSB0aGlzLl93aWR0aHNbaW5kZXhdLmxpbWl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGhlcmUgd2Fzbid0IGFueSB3aWR0aCBvciBtaW4gd2lkdGggcHJvdmlkZWQsIHdlIHNldCBhIG1pbiB0byB3aGF0IHRoZSBjb2x1bW4gd2lkdGggbWluIHNob3VsZCBiZVxuICAgIGlmICghc2tpcE1pbldpZHRoUHJvamVjdGlvbiAmJlxuICAgICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLnZhbHVlIDwgdGhpcy5fY29sRWxlbWVudHMudG9BcnJheSgpW2luZGV4XS5wcm9qZWN0ZWRXaWR0aCkge1xuICAgICAgdGhpcy5fd2lkdGhzW2luZGV4XS52YWx1ZSA9IHRoaXMuX2NvbEVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleF0ucHJvamVjdGVkV2lkdGg7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLm1pbiA9IHRydWU7XG4gICAgICB0aGlzLl93aWR0aHNbaW5kZXhdLmxpbWl0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyaWMgbWV0aG9kIHRvIGNhbGN1bGF0ZSBjb2x1bW4gd2lkdGhcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IHJlbmRlcmVkQ29sdW1uczogSVRkRGF0YVRhYmxlQ29sdW1uW10gPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2w6IElUZERhdGFUYWJsZUNvbHVtbikgPT4gIWNvbC5oaWRkZW4pO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuaG9zdFdpZHRoIC8gcmVuZGVyZWRDb2x1bW5zLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGN1bGF0ZSB0aGUgcm93cyB0byBiZSByZW5kZXJlZCBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk6IHZvaWQge1xuICAgIGxldCBzY3JvbGxlZFJvd3M6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIGxldCByb3dIZWlnaHRTdW06IG51bWJlciA9IDA7XG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHJvd3MgdG8gc2VlIGlmIHdlIGhhdmUgdGhlaXIgaGVpZ2h0IGNhY2hlZFxuICAgICAgLy8gYW5kIHN1bSB0aGVtIGFsbCB0byBjYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodFxuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChkOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIHJvd3MgYXQgZmlyc3QgYW5kIGFzc3VtZSBhbGxcbiAgICAgICAgLy8gcm93cyBhcmUgdGhlIHNhbWUgaGVpZ2h0IGFzIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKCF0aGlzLl9yb3dIZWlnaHRDYWNoZVtpXSkge1xuICAgICAgICAgIHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldID0gdGhpcy5fcm93SGVpZ2h0Q2FjaGVbMF0gfHwgVERfVklSVFVBTF9ERUZBVUxUX1JPV19IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgcm93SGVpZ2h0U3VtICs9IHRoaXMuX3Jvd0hlaWdodENhY2hlW2ldO1xuICAgICAgICAvLyBjaGVjayBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLSByb3dIZWlnaHRTdW0gPiAwKSB7XG4gICAgICAgICAgc2Nyb2xsZWRSb3dzKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSByb3dIZWlnaHRTdW07XG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGxldCBmcm9tUm93OiBudW1iZXIgPSBzY3JvbGxlZFJvd3MgLSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSBmcm9tUm93ID4gMCA/IGZyb21Sb3cgOiAwO1xuXG4gICAgICBsZXQgaG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5faG9zdEhlaWdodDtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICAgIC8vIGNhbGN1bGF0ZSBob3cgbWFueSByb3dzIGNhbiBmaXQgaW4gdGhlIHZpZXdwb3J0XG4gICAgICB3aGlsZSAoaG9zdEhlaWdodCA+IDApIHtcbiAgICAgICAgaG9zdEhlaWdodCAtPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVt0aGlzLmZyb21Sb3cgKyBpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgICAvLyBzZXQgdGhlIGxhc3Qgcm93IHRvIGJlIHJlbmRlcmVkIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHJvdyBvZmZzZXRcbiAgICAgIGxldCByYW5nZTogbnVtYmVyID0gKGluZGV4IC0gMSkgKyAoVERfVklSVFVBTF9PRkZTRVQgKiAyKTtcbiAgICAgIGxldCB0b1JvdzogbnVtYmVyID0gcmFuZ2UgKyB0aGlzLmZyb21Sb3c7XG4gICAgICAvLyBpZiBsYXN0IHJvdyBpcyBncmVhdGVyIHRoYW4gdGhlIHRvdGFsIGxlbmd0aCwgdGhlbiB3ZSB1c2UgdGhlIHRvdGFsIGxlbmd0aFxuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwcm9wZXIgb2Zmc2V0IGRlcGVuZGluZyBvbiBob3cgbWFueSByb3dzIGhhdmUgYmVlbiBzY3JvbGxlZFxuICAgIGlmIChzY3JvbGxlZFJvd3MgPiBURF9WSVJUVUFMX09GRlNFVCkge1xuICAgICAgZm9yIChsZXQgaW5kZXg6IG51bWJlciA9IDA7IGluZGV4IDwgdGhpcy5mcm9tUm93OyBpbmRleCsrKSB7XG4gICAgICAgIG9mZnNldCArPSB0aGlzLl9yb3dIZWlnaHRDYWNoZVtpbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fb2Zmc2V0VHJhbnNmb3JtID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndHJhbnNsYXRlWSgnICsgKG9mZnNldCAtIHRoaXMudG90YWxIZWlnaHQpICsgJ3B4KScpO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsRGF0YSA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLmZyb21Sb3csIHRoaXMudG9Sb3cpO1xuICAgIH1cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50IHtcbiAgb3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0aFt0ZC1kYXRhLXRhYmxlLWNvbHVtbl0nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQge1xuXG4gIHByaXZhdGUgX3NvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG5cbiAgQFZpZXdDaGlsZCgnY29sdW1uQ29udGVudCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgX2NvbHVtbkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IHByb2plY3RlZFdpZHRoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbkNvbnRlbnQgJiYgdGhpcy5fY29sdW1uQ29udGVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9jb2x1bW5Db250ZW50Lm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hbWU/OiBzdHJpbmdcbiAgICogU2V0cyB1bmlxdWUgY29sdW1uIFtuYW1lXSBmb3IgW3NvcnRhYmxlXSBldmVudHMuXG4gICAqL1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogc29ydGFibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgc29ydGluZyBldmVudHMsIHNvcnQgaWNvbnMgYW5kIGFjdGl2ZSBjb2x1bW4gc3RhdGVzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ3NvcnRhYmxlJykgc29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGNvbHVtbiB0byBhY3RpdmUgc3RhdGUgd2hlbiAndHJ1ZScuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJykgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIG51bWVyaWM/OiBib29sZWFuXG4gICAqIE1ha2VzIGNvbHVtbiBmb2xsb3cgdGhlIG51bWVyaWMgZGF0YS10YWJsZSBzcGVjcyBhbmQgc29ydCBpY29uLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ251bWVyaWMnKSBudW1lcmljOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHNvcnRPcmRlcj86IFsnQVNDJyB8ICdERVNDJ10gb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXJcbiAgICogU2V0cyB0aGUgc29ydCBvcmRlciBvZiBjb2x1bW4uXG4gICAqIERlZmF1bHRzIHRvICdBU0MnIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKi9cbiAgQElucHV0KCdzb3J0T3JkZXInKVxuICBzZXQgc29ydE9yZGVyKG9yZGVyOiAnQVNDJyB8ICdERVNDJykge1xuICAgIGxldCBzb3J0T3JkZXI6IHN0cmluZyA9IG9yZGVyID8gb3JkZXIudG9VcHBlckNhc2UoKSA6ICdBU0MnO1xuICAgIGlmIChzb3J0T3JkZXIgIT09ICdERVNDJyAmJiBzb3J0T3JkZXIgIT09ICdBU0MnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0T3JkZXJdIG11c3QgYmUgZW1wdHksIEFTQyBvciBERVNDJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydE9yZGVyID0gc29ydE9yZGVyID09PSAnQVNDJyA/XG4gICAgICBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcgOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIHNvcnRDaGFuZ2U/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNvbHVtbiBoZWFkZXJzIGFyZSBjbGlja2VkLiBbc29ydGFibGVdIG5lZWRzIHRvIGJlIGVuYWJsZWQuXG4gICAqIEVtaXRzIGFuIFtJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3NvcnRDaGFuZ2UnKSBvblNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWNsaWNrYWJsZScpXG4gIGdldCBiaW5kQ2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtc29ydGFibGUnKVxuICBnZXQgYmluZ1NvcnRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtYWN0aXZlJylcbiAgZ2V0IGJpbmRBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtbnVtZXJpYycpXG4gIGdldCBiaW5kTnVtZXJpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5udW1lcmljO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtY29sdW1uJyk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuaW5nIHRvIGNsaWNrIGV2ZW50IG9uIGhvc3QgdG8gdGhyb3cgYSBzb3J0IGV2ZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNvcnRhYmxlKSB7XG4gICAgICB0aGlzLm9uU29ydENoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLm5hbWUsIG9yZGVyOiB0aGlzLl9zb3J0T3JkZXJ9KTtcbiAgICB9XG4gIH1cblxuICBpc0FzY2VuZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG4gIH1cblxuICBpc0Rlc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRkRGF0YVRhYmxlQ2VsbEFsaWduID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0ZFt0ZC1kYXRhLXRhYmxlLWNlbGxdJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IHtcblxuICBwcml2YXRlIF9hbGlnbjogVGREYXRhVGFibGVDZWxsQWxpZ247XG5cbiAgLyoqXG4gICAqIG51bWVyaWM/OiBib29sZWFuXG4gICAqIE1ha2VzIGNlbGwgZm9sbG93IHRoZSBudW1lcmljIGRhdGEtdGFibGUgc3BlY3MuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnbnVtZXJpYycpIG51bWVyaWM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogYWxpZ24/OiAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJ1xuICAgKiBNYWtlcyBjZWxsIGNvbnRlbnQgYWxpZ24gb24gZGVtYW5kXG4gICAqIERlZmF1bHRzIHRvICdsZWZ0Jywgb3ZlcnJpZGVzIG51bWVyaWNcbiAgICovXG4gIEBJbnB1dCgpIFxuICBzZXQgYWxpZ24oYWxpZ246IFRkRGF0YVRhYmxlQ2VsbEFsaWduKSB7XG4gICAgdGhpcy5fYWxpZ24gPSBhbGlnbjtcbiAgfVxuICBnZXQgYWxpZ24oKTogVGREYXRhVGFibGVDZWxsQWxpZ24ge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbjsgICAgXG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1udW1lcmljJylcbiAgZ2V0IGJpbmROdW1lcmljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm51bWVyaWM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1jZWxsJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ3RhYmxlW3RkLWRhdGEtdGFibGVdJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS10YWJsZS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVRhYmxlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZScpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIsIElUZERhdGFUYWJsZUNvbHVtbiB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNlYXJjaFRlcm06IHN0cmluZ1xuICAgKiAtIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZVxuICAgKiAtIGV4Y2x1ZGVkQ29sdW1uczogc3RyaW5nW10gPSBbXVxuICAgKlxuICAgKiBTZWFyY2hlcyBbZGF0YV0gcGFyYW1ldGVyIGZvciBbc2VhcmNoVGVybV0gbWF0Y2hlcyBhbmQgcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZW0uXG4gICAqL1xuICBmaWx0ZXJEYXRhKGRhdGE6IGFueVtdLCBzZWFyY2hUZXJtOiBzdHJpbmcsIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSBmYWxzZSwgZXhjbHVkZWRDb2x1bW5zPzogc3RyaW5nW10pOiBhbnlbXSB7XG4gICAgbGV0IGZpbHRlcjogc3RyaW5nID0gc2VhcmNoVGVybSA/IChpZ25vcmVDYXNlID8gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpIDogc2VhcmNoVGVybSkgOiAnJztcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IE9iamVjdC5rZXlzKGl0ZW0pLmZpbmQoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKCFleGNsdWRlZENvbHVtbnMgfHwgZXhjbHVkZWRDb2x1bW5zLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZUl0ZW1WYWx1ZTogc3RyaW5nID0gKCcnICsgaXRlbVtrZXldKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZTogc3RyaW5nID0gaWdub3JlQ2FzZSA/IHByZUl0ZW1WYWx1ZS50b0xvd2VyQ2FzZSgpIDogcHJlSXRlbVZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1WYWx1ZS5pbmRleE9mKGZpbHRlcikgPiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gISh0eXBlb2YgcmVzID09PSAndW5kZWZpbmVkJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gc29ydEJ5OiBzdHJpbmdcbiAgICogLSBzb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nXG4gICAqXG4gICAqIFNvcnRzIFtkYXRhXSBwYXJhbWV0ZXIgYnkgW3NvcnRCeV0gYW5kIFtzb3J0T3JkZXJdIGFuZCByZXR1cm5zIHRoZSBzb3J0ZWQgZGF0YS5cbiAgICovXG4gIHNvcnREYXRhKGRhdGE6IGFueVtdLCBzb3J0Qnk6IHN0cmluZywgc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyk6IGFueVtdIHtcbiAgICBpZiAoc29ydEJ5KSB7XG4gICAgICBkYXRhID0gQXJyYXkuZnJvbShkYXRhKTsgLy8gQ2hhbmdlIHRoZSBhcnJheSByZWZlcmVuY2UgdG8gdHJpZ2dlciBPblB1c2ggYW5kIG5vdCBtdXRhdGUgb3JpZ2luYWwgYXJyYXlcbiAgICAgIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGNvbXBBOiBhbnkgPSBhW3NvcnRCeV07XG4gICAgICAgIGxldCBjb21wQjogYW55ID0gYltzb3J0QnldO1xuICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQSkpICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoY29tcEIpKSkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSAtIE51bWJlci5wYXJzZUZsb2F0KGNvbXBCKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29tcEEgPCBjb21wQikge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wQSA+IGNvbXBCKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uICogKHNvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZyA/IC0xIDogMSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGRhdGE6IGFueVtdXG4gICAqIC0gZnJvbVJvdzogbnVtYmVyXG4gICAqIC0gdG9Sb3c6IDogbnVtYmVyXG4gICAqXG4gICAqIFJldHVybnMgYSBzZWN0aW9uIG9mIHRoZSBbZGF0YV0gcGFyYW1ldGVyIHN0YXJ0aW5nIGZyb20gW2Zyb21Sb3ddIGFuZCBlbmRpbmcgaW4gW3RvUm93XS5cbiAgICovXG4gIHBhZ2VEYXRhKGRhdGE6IGFueVtdLCBmcm9tUm93OiBudW1iZXIsIHRvUm93OiBudW1iZXIpOiBhbnlbXSB7XG4gICAgaWYgKGZyb21Sb3cgPj0gMSkge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoZnJvbVJvdyAtIDEsIHRvUm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERBVEFfVEFCTEVfUFJPVklERVJfRkFDVE9SWShcbiAgICBwYXJlbnQ6IFRkRGF0YVRhYmxlU2VydmljZSk6IFRkRGF0YVRhYmxlU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkRGF0YVRhYmxlU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgREFUQV9UQUJMRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkRGF0YVRhYmxlU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkRGF0YVRhYmxlU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBEQVRBX1RBQkxFX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1jZWxsL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQsIFRkRGF0YVRhYmxlQ29sdW1uUm93Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLXJvdy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS10YWJsZS9kYXRhLXRhYmxlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtdGFibGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgREFUQV9UQUJMRV9QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvZGF0YS10YWJsZS5zZXJ2aWNlJztcblxuY29uc3QgVERfREFUQV9UQUJMRTogVHlwZTxhbnk+W10gPSBbXG4gIFRkRGF0YVRhYmxlQ29tcG9uZW50LFxuICBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlLFxuXG4gIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LFxuICBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlUm93Q29tcG9uZW50LFxuICBUZERhdGFUYWJsZUNvbHVtblJvd0NvbXBvbmVudCxcbiAgVGREYXRhVGFibGVUYWJsZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9EQVRBX1RBQkxFLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfREFUQV9UQUJMRSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQV9UQUJMRV9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnREYXRhVGFibGVNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIklucHV0IiwiSG9zdExpc3RlbmVyIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSIsIm1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IiLCJTdWJqZWN0IiwiRXZlbnRFbWl0dGVyIiwiY29lcmNlQm9vbGVhblByb3BlcnR5IiwiZGVib3VuY2VUaW1lIiwiRU5URVIiLCJTUEFDRSIsIlVQX0FSUk9XIiwiRE9XTl9BUlJPVyIsInRzbGliXzEuX192YWx1ZXMiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiRE9DVU1FTlQiLCJEb21TYW5pdGl6ZXIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkNvbnRlbnRDaGlsZHJlbiIsIlZpZXdDaGlsZCIsIlZpZXdDaGlsZHJlbiIsIk91dHB1dCIsIkhvc3RCaW5kaW5nIiwiSW5qZWN0YWJsZSIsIlNraXBTZWxmIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdFRvb2x0aXBNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0UHNldWRvQ2hl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