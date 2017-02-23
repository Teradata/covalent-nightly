var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
;
;
;
var TdDataTableComponent = (function () {
    function TdDataTableComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = [];
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop;
        this._selectable = false;
        this._multiple = true;
        /** sorting */
        this._sortable = false;
        this._sortOrder = TdDataTableSortingOrder.Ascending;
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
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        this.onSelectAll = new EventEmitter();
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
    }
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
    ;
    Object.defineProperty(TdDataTableComponent.prototype, "data", {
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
        /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         */
        set: function (_selectable) {
            this._selectable = _selectable !== '' ? (_selectable === 'true' || _selectable === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        set: function (sortable) {
            this._sortable = sortable !== '' ? (sortable === 'true' || sortable === true) : true;
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
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Checks if all visible rows are selected.
     */
    TdDataTableComponent.prototype.areAllSelected = function () {
        var _this = this;
        var match = this._data.find(function (d) { return !_this.isRowSelected(d); });
        return typeof match === 'undefined';
    };
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    TdDataTableComponent.prototype.selectAll = function (checked) {
        var _this = this;
        if (checked) {
            this._data.forEach(function (row) {
                // skiping already selected rows
                if (!_this.isRowSelected(row)) {
                    _this._value.push(row);
                }
            });
        }
        else {
            this.clearModel();
        }
        this.onSelectAll.emit({ rows: this._value, selected: checked });
    };
    /**
     * Checks if row is selected
     */
    TdDataTableComponent.prototype.isRowSelected = function (row) {
        var _this = this;
        // if selection is done by a [uniqueId] it uses it to compare, else it compares by reference.
        if (this.uniqueId) {
            return this._value ? this._value.filter(function (val) {
                return val[_this.uniqueId] === row[_this.uniqueId];
            }).length > 0 : false;
        }
        return this._value ? this._value.indexOf(row) > -1 : false;
    };
    /**
     * Selects or clears a row depending on 'checked' value
     */
    TdDataTableComponent.prototype.select = function (row, checked, event) {
        var _this = this;
        event.preventDefault();
        // clears all the fields for the dataset
        if (!this._multiple) {
            this.clearModel();
        }
        if (checked) {
            this._value.push(row);
        }
        else {
            // if selection is done by a [uniqueId] it uses it to compare, else it compares by reference.
            if (this.uniqueId) {
                row = this._value.filter(function (val) {
                    return val[_this.uniqueId] === row[_this.uniqueId];
                })[0];
            }
            var index = this._value.indexOf(row);
            if (index > -1) {
                this._value.splice(index, 1);
            }
        }
        this.onRowSelect.emit({ row: row, selected: checked });
        this.onChange(this._value);
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
    return TdDataTableComponent;
}());
__decorate([
    ContentChildren(TdDataTableTemplateDirective),
    __metadata("design:type", QueryList)
], TdDataTableComponent.prototype, "_templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdDataTableComponent.prototype, "value", null);
__decorate([
    Input('uniqueId'),
    __metadata("design:type", String)
], TdDataTableComponent.prototype, "uniqueId", void 0);
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
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdDataTableComponent.prototype, "selectable", null);
__decorate([
    Input('multiple'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdDataTableComponent.prototype, "multiple", null);
__decorate([
    Input('sortable'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
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
    Output('selectAll'),
    __metadata("design:type", EventEmitter)
], TdDataTableComponent.prototype, "onSelectAll", void 0);
TdDataTableComponent = __decorate([
    Component({
        providers: [TD_DATA_TABLE_CONTROL_VALUE_ACCESSOR],
        selector: 'td-data-table',
        styles: [".mat-table-container { display: block; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; } table.td-data-table.mat-selectable tbody > tr.td-data-table-row { transition: background-color 0.2s; } table.td-data-table.mat-selectable td.td-data-table-cell:first-child, table.td-data-table.mat-selectable th.td-data-table-column:first-child { width: 20px; padding: 0 24px; } table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2), table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2) { padding-left: 0px; } table.td-data-table td.mat-checkbox-cell, table.td-data-table th.mat-checkbox-column { width: 18px; font-size: 0 !important; } table.td-data-table td.mat-checkbox-cell md-pseudo-checkbox, table.td-data-table th.mat-checkbox-column md-pseudo-checkbox { width: 18px; height: 18px; } /deep/ table.td-data-table td.mat-checkbox-cell md-pseudo-checkbox.mat-pseudo-checkbox-checked::after, /deep/ table.td-data-table th.mat-checkbox-column md-pseudo-checkbox.mat-pseudo-checkbox-checked::after { top: 3px !important; left: 1px !important; width: 11px !important; height: 4px !important; } table.td-data-table td.mat-checkbox-cell md-checkbox /deep/ .mat-checkbox-inner-container, table.td-data-table th.mat-checkbox-column md-checkbox /deep/ .mat-checkbox-inner-container { width: 18px; height: 18px; margin: 0; } "],
        template: "<div class=\"mat-table-container\" *ngIf=\"hasData\" title> <table td-data-table [class.mat-selectable]=\"_selectable\"> <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"_selectable\"> <md-checkbox #checkBoxAll *ngIf=\"_multiple\" [checked]=\"areAllSelected()\" (click)=\"selectAll(!checkBoxAll.checked)\"> </md-checkbox> </th> <th td-data-table-column *ngFor=\"let column of columns\" [name]=\"column.name\" [numeric]=\"column.numeric\" [active]=\"(column.sortable || _sortable) && column === _sortBy\" [sortable]=\"column.sortable ||  _sortable\" [sortOrder]=\"_sortOrder\" (sortChange)=\"handleSort(column)\"> <span [mdTooltip]=\"column.tooltip\">{{column.label}}</span> </th> <tr td-data-table-row [class.mat-selected]=\"_selectable && isRowSelected(row)\" *ngFor=\"let row of _data\" (click)=\"_selectable && select(row, !isRowSelected(row), $event)\"> <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"_selectable\"> <md-pseudo-checkbox [state]=\"isRowSelected(row) ? 'checked' : 'unchecked'\"> </md-pseudo-checkbox> </td> <td td-data-table-cell [numeric]=\"column.numeric\" *ngFor=\"let column of columns\"> <span class=\"md-body-1\" *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span> <template *ngIf=\"getTemplateRef(column.name)\" [ngTemplateOutlet]=\"getTemplateRef(column.name)\" [ngOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name }\"> </template> </td> </tr> </table> </div> <div class=\"md-padding\" *ngIf=\"!hasData\" layout=\"row\" layout-align=\"center center\"> <h3>No results</h3> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], TdDataTableComponent);
export { TdDataTableComponent };
//# sourceMappingURL=data-table.component.js.map