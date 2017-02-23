var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, Renderer, ElementRef, HostBinding } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
var TdDataTableColumnComponent = (function () {
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
        this.onSortChange = new EventEmitter();
        this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table-column', true);
    }
    Object.defineProperty(TdDataTableColumnComponent.prototype, "sortOrder", {
        /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of column.
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
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindClickable", {
        get: function () {
            return this.sortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bingSortable", {
        get: function () {
            return this.sortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindActive", {
        get: function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindNumeric", {
        get: function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    TdDataTableColumnComponent.prototype.handleSortBy = function () {
        this.onSortChange.emit({ name: this.name, order: this._sortOrder });
    };
    TdDataTableColumnComponent.prototype.isAscending = function () {
        return this._sortOrder === TdDataTableSortingOrder.Ascending;
    };
    TdDataTableColumnComponent.prototype.isDescending = function () {
        return this._sortOrder === TdDataTableSortingOrder.Descending;
    };
    return TdDataTableColumnComponent;
}());
__decorate([
    Input('name'),
    __metadata("design:type", String)
], TdDataTableColumnComponent.prototype, "name", void 0);
__decorate([
    Input('sortable'),
    __metadata("design:type", Boolean)
], TdDataTableColumnComponent.prototype, "sortable", void 0);
__decorate([
    Input('active'),
    __metadata("design:type", Boolean)
], TdDataTableColumnComponent.prototype, "active", void 0);
__decorate([
    Input('numeric'),
    __metadata("design:type", Boolean)
], TdDataTableColumnComponent.prototype, "numeric", void 0);
__decorate([
    Input('sortOrder'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdDataTableColumnComponent.prototype, "sortOrder", null);
__decorate([
    Output('sortChange'),
    __metadata("design:type", EventEmitter)
], TdDataTableColumnComponent.prototype, "onSortChange", void 0);
__decorate([
    HostBinding('class.mat-clickable'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdDataTableColumnComponent.prototype, "bindClickable", null);
__decorate([
    HostBinding('class.mat-sortable'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdDataTableColumnComponent.prototype, "bingSortable", null);
__decorate([
    HostBinding('class.mat-active'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdDataTableColumnComponent.prototype, "bindActive", null);
__decorate([
    HostBinding('class.mat-numeric'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], TdDataTableColumnComponent.prototype, "bindNumeric", null);
TdDataTableColumnComponent = __decorate([
    Component({
        /* tslint:disable-next-line */
        selector: 'th[td-data-table-column]',
        styles: [":host { font-size: 12px; font-weight: bold; white-space: nowrap; padding: 0 28px 0 28px; position: relative; vertical-align: middle; text-align: left; } :host:first-child { padding-left: 24px; } :host:last-child { padding-right: 24px; } :host md-icon { height: 16px; width: 16px; font-size: 16px !important; line-height: 16px !important; } :host md-icon.td-data-table-sort-icon { opacity: 0; transition: transform 0.25s, opacity 0.25s; } :host md-icon.td-data-table-sort-icon.mat-asc { transform: rotate(0deg); } :host md-icon.td-data-table-sort-icon.mat-desc { transform: rotate(180deg); } :host:hover.mat-sortable md-icon.td-data-table-sort-icon, :host.mat-active.mat-sortable md-icon.td-data-table-sort-icon { opacity: 1; } :host > * { vertical-align: middle; } :host.mat-clickable { cursor: pointer; } :host.mat-clickable:focus { outline: none; } :host md-icon.td-data-table-sort-icon { position: absolute; } :host.mat-numeric { text-align: right; } :host.mat-numeric md-icon.td-data-table-sort-icon { margin-left: -22px; } :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-left: 6px; } "],
        template: "<md-icon  class=\"td-data-table-sort-icon\"  *ngIf=\"sortable && numeric\" [class.mat-asc]=\"(!(active) || isAscending())\" [class.mat-desc]=\"(active && isDescending())\" (click)=\"sortable && handleSortBy()\"> arrow_upward </md-icon> <span class=\"md-caption\" (click)=\"sortable && handleSortBy()\"> <ng-content></ng-content> </span> <md-icon  class=\"td-data-table-sort-icon\"  *ngIf=\"sortable && !numeric\" [class.mat-asc]=\"(!(active) || isAscending())\" [class.mat-desc]=\"(active && isDescending())\" (click)=\"sortable && handleSortBy()\"> arrow_upward </md-icon>",
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], TdDataTableColumnComponent);
export { TdDataTableColumnComponent };
//# sourceMappingURL=data-table-column.component.js.map