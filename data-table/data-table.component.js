var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, QueryList, Inject, Optional, ViewChildren } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty, ENTER, SPACE, UP_ARROW, DOWN_ARROW } from '@angular/cdk';
import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
var noop = function () {
    // empty method
};
export var TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDataTableComponent; }),
    multi: true,
};
export var TdDataTableSortingOrder;
(function (TdDataTableSortingOrder) {
    TdDataTableSortingOrder[TdDataTableSortingOrder["Ascending"] = 'ASC'] = "Ascending";
    TdDataTableSortingOrder[TdDataTableSortingOrder["Descending"] = 'DESC'] = "Descending";
})(TdDataTableSortingOrder || (TdDataTableSortingOrder = {}));
export var TdDataTableArrowKeyDirection;
(function (TdDataTableArrowKeyDirection) {
    TdDataTableArrowKeyDirection[TdDataTableArrowKeyDirection["Ascending"] = 'ASC'] = "Ascending";
    TdDataTableArrowKeyDirection[TdDataTableArrowKeyDirection["Descending"] = 'DESC'] = "Descending";
})(TdDataTableArrowKeyDirection || (TdDataTableArrowKeyDirection = {}));
var TdDataTableComponent = (function () {
    function TdDataTableComponent(_document, _changeDetectorRef) {
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = [];
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop;
        this._selectable = false;
        this._clickable = false;
        this._multiple = true;
        this._allSelected = false;
        this._indeterminate = false;
        /** sorting */
        this._sortable = false;
        this._sortOrder = TdDataTableSortingOrder.Ascending;
        /** shift select */
        this._lastSelectedIndex = -1;
        this._selectedBeforeLastIndex = -1;
        /** template fetching support */
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
         * Default comparation is by object reference
         */
        this.compareWith = function (row, model) {
            return row === model;
        };
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
    }
    Object.defineProperty(TdDataTableComponent.prototype, "allSelected", {
        /**
         * Returns true if all values are selected.
         */
        get: function () {
            return this._allSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "indeterminate", {
        /**
         * Returns true if all values are not deselected
         * and atleast one is.
         */
        get: function () {
            return this._indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "value", {
        get: function () { return this._value; },
        /**
         * Implemented as part of ControlValueAccessor.
         */
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
                this.refresh();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        /**
         * data?: {[key: string]: any}[]
         * Sets the data to be rendered as rows.
         */
        set: function (data) {
            this._data = data;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columns", {
        get: function () {
            var _this = this;
            if (this._columns) {
                return this._columns;
            }
            if (this.hasData) {
                this._columns = [];
                // if columns is undefined, use key in [data] rows as name and label for column headers.
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
        set: function (cols) {
            this._columns = cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "selectable", {
        get: function () {
            return this._selectable;
        },
        /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         */
        set: function (selectable) {
            this._selectable = coerceBooleanProperty(selectable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "clickable", {
        get: function () {
            return this._clickable;
        },
        /**
         * clickable?: boolean
         * Enables row click events, hover.
         * Defaults to 'false'
         */
        set: function (clickable) {
            this._clickable = coerceBooleanProperty(clickable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         */
        set: function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
        get: function () {
            return this._sortable;
        },
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        set: function (sortable) {
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
        set: function (columnName) {
            if (!columnName) {
                return;
            }
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
        get: function () {
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
        set: function (order) {
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
        get: function () {
            return this._sortOrder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "hasData", {
        get: function () {
            return this._data && this._data.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Loads templates and sets them in a map for faster access.
     */
    TdDataTableComponent.prototype.ngAfterContentInit = function () {
        for (var i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    };
    TdDataTableComponent.prototype.getCellValue = function (column, value) {
        if (column.nested === undefined || column.nested) {
            return this._getNestedValue(column.name, value);
        }
        return value[column.name];
    };
    /**
     * Getter method for template references
     */
    TdDataTableComponent.prototype.getTemplateRef = function (name) {
        return this._templateMap.get(name);
    };
    /**
     * Clears model (ngModel) of component by removing all values in array.
     */
    TdDataTableComponent.prototype.clearModel = function () {
        this._value.splice(0, this._value.length);
    };
    /**
     * Refreshes data table and rerenders [data] and [columns]
     */
    TdDataTableComponent.prototype.refresh = function () {
        this._calculateCheckboxState();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    TdDataTableComponent.prototype.selectAll = function (checked) {
        var _this = this;
        var toggledRows = [];
        if (checked) {
            this._data.forEach(function (row) {
                // skiping already selected rows
                if (!_this.isRowSelected(row)) {
                    _this._value.push(row);
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
                }
                row = _this._value.filter(function (val) {
                    return _this.compareWith(row, val);
                })[0];
                var index = _this._value.indexOf(row);
                if (index > -1) {
                    _this._value.splice(index, 1);
                }
            });
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.onSelectAll.emit({ rows: toggledRows, selected: checked });
    };
    /**
     * Checks if row is selected
     */
    TdDataTableComponent.prototype.isRowSelected = function (row) {
        var _this = this;
        // compare items by [compareWith] function
        return this._value ? this._value.filter(function (val) {
            return _this.compareWith(row, val);
        }).length > 0 : false;
    };
    /**
     * Selects or clears a row depending on 'checked' value if the row is 'selected'
     * handles cntrl clicks and shift clicks for multi-select
     */
    TdDataTableComponent.prototype.select = function (row, event, currentSelected) {
        if (this.selectable) {
            this.blockEvent(event);
            this._doSelection(row);
            // Check to see if Shift key is selected and need to select everything in between
            var mouseEvent = event;
            if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                var firstIndex = currentSelected;
                var lastIndex = this._lastSelectedIndex;
                if (currentSelected > this._lastSelectedIndex) {
                    firstIndex = this._lastSelectedIndex;
                    lastIndex = currentSelected;
                }
                for (var i = firstIndex + 1; i < lastIndex; i++) {
                    this._doSelection(this._data[i]);
                }
            }
            // set the last selected attribute unless the last selected unchecked a row
            if (this.isRowSelected(this._data[currentSelected])) {
                this._selectedBeforeLastIndex = this._lastSelectedIndex;
                this._lastSelectedIndex = currentSelected;
            }
            else {
                this._lastSelectedIndex = this._selectedBeforeLastIndex;
            }
            // everything is unselected so start over
            if (!this._indeterminate && !this._allSelected) {
                this._lastSelectedIndex = -1;
            }
        }
    };
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     */
    TdDataTableComponent.prototype.disableTextSelection = function () {
        if (this._document) {
            this._document.onselectstart = function () {
                return false;
            };
        }
    };
    /**
     * Resets the original onselectstart method.
     */
    TdDataTableComponent.prototype.enableTextSelection = function () {
        if (this._document) {
            this._document.onselectstart = undefined;
        }
    };
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     */
    TdDataTableComponent.prototype.handleRowClick = function (row, event) {
        if (this.clickable) {
            // ignoring linting rules here because attribute it actually null or not there
            // can't check for undefined
            var srcElement = event.srcElement || event.currentTarget;
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null) {
                this.onRowClick.emit({ row: row });
            }
        }
    };
    /**
     * Method handle for sort click event in column headers.
     */
    TdDataTableComponent.prototype.handleSort = function (column) {
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
    TdDataTableComponent.prototype._rowKeyup = function (event, row, index) {
        var length;
        var rows;
        switch (event.keyCode) {
            case ENTER:
            case SPACE:
                /** if user presses enter or space, the row should be selected */
                this.select(row, event, index);
                break;
            case UP_ARROW:
                rows = this._rows.toArray();
                length = rows.length;
                // check to see if changing direction and need to toggle the current row
                if (this._lastArrowKeyDirection === TdDataTableArrowKeyDirection.Descending) {
                    index++;
                }
                /**
                 * if users presses the up arrow, we focus the prev row
                 * unless its the first row, then we move to the last row
                 */
                if (index === 0) {
                    if (!event.shiftKey) {
                        rows[length - 1].focus();
                    }
                }
                else {
                    rows[index - 1].focus();
                }
                this.blockEvent(event);
                if (this.multiple && event.shiftKey) {
                    this._doSelection(this._data[index - 1]);
                    // if the checkboxes are all unselected then start over otherwise handle changing direction
                    this._lastArrowKeyDirection = (!this._allSelected && !this._indeterminate) ? undefined : TdDataTableArrowKeyDirection.Ascending;
                }
                break;
            case DOWN_ARROW:
                rows = this._rows.toArray();
                length = rows.length;
                // check to see if changing direction and need to toggle the current row
                if (this._lastArrowKeyDirection === TdDataTableArrowKeyDirection.Ascending) {
                    index--;
                }
                /**
                 * if users presses the down arrow, we focus the next row
                 * unless its the last row, then we move to the first row
                 */
                if (index === (length - 1)) {
                    if (!event.shiftKey) {
                        rows[0].focus();
                    }
                }
                else {
                    rows[index + 1].focus();
                }
                this.blockEvent(event);
                if (this.multiple && event.shiftKey) {
                    this._doSelection(this._data[index + 1]);
                    // if the checkboxes are all unselected then start over otherwise handle changing direction
                    this._lastArrowKeyDirection = (!this._allSelected && !this._indeterminate) ? undefined : TdDataTableArrowKeyDirection.Descending;
                }
                break;
            default:
        }
    };
    /**
     * Method to prevent the default events
     */
    TdDataTableComponent.prototype.blockEvent = function (event) {
        event.preventDefault();
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdDataTableComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TdDataTableComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TdDataTableComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TdDataTableComponent.prototype._getNestedValue = function (name, value) {
        if (!(value instanceof Object) || !name) {
            return value;
        }
        if (name.indexOf('.') > -1) {
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
    TdDataTableComponent.prototype._doSelection = function (row) {
        var _this = this;
        var wasSelected = this.isRowSelected(row);
        if (!this._multiple) {
            this.clearModel();
        }
        if (!wasSelected) {
            this._value.push(row);
        }
        else {
            // compare items by [compareWith] function
            row = this._value.filter(function (val) {
                return _this.compareWith(row, val);
            })[0];
            var index = this._value.indexOf(row);
            if (index > -1) {
                this._value.splice(index, 1);
            }
        }
        this._calculateCheckboxState();
        this.onRowSelect.emit({ row: row, selected: !wasSelected });
        this.onChange(this._value);
    };
    /**
     * Calculate all the state of all checkboxes
     */
    TdDataTableComponent.prototype._calculateCheckboxState = function () {
        var _this = this;
        if (this._data) {
            this._allSelected = typeof this._data.find(function (d) { return !_this.isRowSelected(d); }) === 'undefined';
            this._indeterminate = false;
            for (var _i = 0, _a = this._data; _i < _a.length; _i++) {
                var row = _a[_i];
                if (!this.isRowSelected(row)) {
                    continue;
                }
                this._indeterminate = true;
                break;
            }
        }
    };
    return TdDataTableComponent;
}());
__decorate([
    ContentChildren(TdDataTableTemplateDirective),
    __metadata("design:type", QueryList)
], TdDataTableComponent.prototype, "_templates", void 0);
__decorate([
    ViewChildren(TdDataTableRowComponent),
    __metadata("design:type", QueryList)
], TdDataTableComponent.prototype, "_rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdDataTableComponent.prototype, "value", null);
__decorate([
    Input('data'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdDataTableComponent.prototype, "data", null);
__decorate([
    Input('columns'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdDataTableComponent.prototype, "columns", null);
__decorate([
    Input('selectable'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdDataTableComponent.prototype, "selectable", null);
__decorate([
    Input('clickable'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdDataTableComponent.prototype, "clickable", null);
__decorate([
    Input('multiple'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdDataTableComponent.prototype, "multiple", null);
__decorate([
    Input('sortable'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdDataTableComponent.prototype, "sortable", null);
__decorate([
    Input('sortBy'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdDataTableComponent.prototype, "sortBy", null);
__decorate([
    Input('sortOrder'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdDataTableComponent.prototype, "sortOrder", null);
__decorate([
    Output('sortChange'),
    __metadata("design:type", EventEmitter)
], TdDataTableComponent.prototype, "onSortChange", void 0);
__decorate([
    Output('rowSelect'),
    __metadata("design:type", EventEmitter)
], TdDataTableComponent.prototype, "onRowSelect", void 0);
__decorate([
    Output('rowClick'),
    __metadata("design:type", EventEmitter)
], TdDataTableComponent.prototype, "onRowClick", void 0);
__decorate([
    Output('selectAll'),
    __metadata("design:type", EventEmitter)
], TdDataTableComponent.prototype, "onSelectAll", void 0);
__decorate([
    Input('compareWith'),
    __metadata("design:type", Function)
], TdDataTableComponent.prototype, "compareWith", void 0);
TdDataTableComponent = __decorate([
    Component({
        providers: [TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR],
        selector: 'td-data-table',
        styles: [".mat-table-container { display: block; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; } table.td-data-table.mat-selectable tbody > tr.td-data-table-row { transition: background-color 0.2s; } table.td-data-table.mat-selectable .td-data-table-column:first-child, table.td-data-table.mat-selectable th.td-data-table-column:first-child, table.td-data-table.mat-selectable td.td-data-table-cell:first-child { width: 20px; padding: 0 24px; } table.td-data-table.mat-selectable .td-data-table-column:nth-child(2), table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2), table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2) { padding-left: 0px; } [dir='rtl'] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2), [dir='rtl'] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2), [dir='rtl'] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2) { padding-right: 0px; padding-left: 28px; } table.td-data-table td.mat-checkbox-cell, table.td-data-table th.mat-checkbox-column { width: 18px; font-size: 0 !important; } table.td-data-table td.mat-checkbox-cell md-pseudo-checkbox, table.td-data-table th.mat-checkbox-column md-pseudo-checkbox { width: 18px; height: 18px; } /deep/ table.td-data-table td.mat-checkbox-cell md-pseudo-checkbox.mat-pseudo-checkbox-checked::after, /deep/ table.td-data-table th.mat-checkbox-column md-pseudo-checkbox.mat-pseudo-checkbox-checked::after { width: 11px !important; height: 4px !important; } table.td-data-table td.mat-checkbox-cell md-checkbox /deep/ .mat-checkbox-inner-container, table.td-data-table th.mat-checkbox-column md-checkbox /deep/ .mat-checkbox-inner-container { width: 18px; height: 18px; margin: 0; } "],
        template: "<div class=\"mat-table-container\" title> <table td-data-table [class.mat-selectable]=\"selectable\" [class.mat-clickable]=\"clickable\"> <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\"> <md-checkbox #checkBoxAll *ngIf=\"multiple\" [disabled]=\"!hasData\" [indeterminate]=\"indeterminate && !allSelected && hasData\" [checked]=\"allSelected && hasData\" (click)=\"selectAll(!checkBoxAll.checked)\" (keyup.enter)=\"selectAll(!checkBoxAll.checked)\" (keyup.space)=\"selectAll(!checkBoxAll.checked)\" (keydown.space)=\"blockEvent($event)\"> </md-checkbox> </th> <th td-data-table-column *ngFor=\"let column of columns\" [name]=\"column.name\" [numeric]=\"column.numeric\" [active]=\"(column.sortable || sortable) && column === sortByColumn\" [sortable]=\"column.sortable ||  sortable\" [sortOrder]=\"sortOrderEnum\" [hidden]=\"column.hidden\" (sortChange)=\"handleSort(column)\"> <span [mdTooltip]=\"column.tooltip\">{{column.label}}</span> </th> <tr td-data-table-row #dtRow [tabIndex]=\"selectable ? 0 : -1\" [selected]=\"(clickable || selectable) && isRowSelected(row)\" *ngFor=\"let row of data; let rowIndex = index\" (click)=\"handleRowClick(row, $event)\" (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\" (keydown.space)=\"blockEvent($event)\" (keydown.shift.space)=\"blockEvent($event)\" (keydown.shift)=\"disableTextSelection()\" (keyup.shift)=\"enableTextSelection()\"> <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\"> <md-pseudo-checkbox [state]=\"dtRow.selected ? 'checked' : 'unchecked'\" (mousedown)=\"disableTextSelection()\" (mouseup)=\"enableTextSelection()\" stopRowClick (click)=\"select(row, $event, rowIndex)\"> </md-pseudo-checkbox> </td> <td td-data-table-cell [numeric]=\"column.numeric\" [hidden]=\"column.hidden\" *ngFor=\"let column of columns\"> <span class=\"md-body-1\" *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span> <ng-template *ngIf=\"getTemplateRef(column.name)\" [ngTemplateOutlet]=\"getTemplateRef(column.name)\" [ngOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name }\"> </ng-template> </td> </tr> </table> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __param(0, Optional()), __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, ChangeDetectorRef])
], TdDataTableComponent);
export { TdDataTableComponent };
//# sourceMappingURL=data-table.component.js.map