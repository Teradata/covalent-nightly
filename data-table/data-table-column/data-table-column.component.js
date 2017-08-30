import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, HostBinding } from '@angular/core';
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
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
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
    tslib_1.__decorate([
        Input('name'),
        tslib_1.__metadata("design:type", String)
    ], TdDataTableColumnComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        Input('sortable'),
        tslib_1.__metadata("design:type", Boolean)
    ], TdDataTableColumnComponent.prototype, "sortable", void 0);
    tslib_1.__decorate([
        Input('active'),
        tslib_1.__metadata("design:type", Boolean)
    ], TdDataTableColumnComponent.prototype, "active", void 0);
    tslib_1.__decorate([
        Input('numeric'),
        tslib_1.__metadata("design:type", Boolean)
    ], TdDataTableColumnComponent.prototype, "numeric", void 0);
    tslib_1.__decorate([
        Input('sortOrder'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TdDataTableColumnComponent.prototype, "sortOrder", null);
    tslib_1.__decorate([
        Output('sortChange'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdDataTableColumnComponent.prototype, "onSortChange", void 0);
    tslib_1.__decorate([
        HostBinding('class.mat-clickable'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdDataTableColumnComponent.prototype, "bindClickable", null);
    tslib_1.__decorate([
        HostBinding('class.mat-sortable'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdDataTableColumnComponent.prototype, "bingSortable", null);
    tslib_1.__decorate([
        HostBinding('class.mat-active'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdDataTableColumnComponent.prototype, "bindActive", null);
    tslib_1.__decorate([
        HostBinding('class.mat-numeric'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdDataTableColumnComponent.prototype, "bindNumeric", null);
    TdDataTableColumnComponent = tslib_1.__decorate([
        Component({
            /* tslint:disable-next-line */
            selector: 'th[td-data-table-column]',
            styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ :host { font-size: 12px; font-weight: bold; white-space: nowrap; padding: 0 28px 0 28px; position: relative; vertical-align: middle; text-align: left; } :host:first-child { padding-left: 24px; padding-right: initial; } html[dir=rtl] :host:first-child { padding-left: initial; unicode-bidi: embed; } body[dir=rtl] :host:first-child { padding-left: initial; unicode-bidi: embed; } [dir=rtl] :host:first-child { padding-left: initial; unicode-bidi: embed; } :host:first-child bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:first-child { padding-right: 24px; unicode-bidi: embed; } body[dir=rtl] :host:first-child { padding-right: 24px; unicode-bidi: embed; } [dir=rtl] :host:first-child { padding-right: 24px; unicode-bidi: embed; } :host:first-child bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host:last-child { padding-left: initial; padding-right: 24px; } html[dir=rtl] :host:last-child { padding-left: 24px; unicode-bidi: embed; } body[dir=rtl] :host:last-child { padding-left: 24px; unicode-bidi: embed; } [dir=rtl] :host:last-child { padding-left: 24px; unicode-bidi: embed; } :host:last-child bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:last-child { padding-right: initial; unicode-bidi: embed; } body[dir=rtl] :host:last-child { padding-right: initial; unicode-bidi: embed; } [dir=rtl] :host:last-child { padding-right: initial; unicode-bidi: embed; } :host:last-child bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host md-icon { height: 16px; width: 16px; font-size: 16px !important; line-height: 16px !important; } :host md-icon.td-data-table-sort-icon { opacity: 0; -webkit-transition: -webkit-transform 0.25s; transition: -webkit-transform 0.25s; transition: transform 0.25s; transition: transform 0.25s, -webkit-transform 0.25s; } :host md-icon.td-data-table-sort-icon.mat-asc { -webkit-transform: rotate(0deg); transform: rotate(0deg); } :host md-icon.td-data-table-sort-icon.mat-desc { -webkit-transform: rotate(180deg); transform: rotate(180deg); } :host:hover.mat-sortable md-icon.td-data-table-sort-icon, :host.mat-active.mat-sortable md-icon.td-data-table-sort-icon { opacity: 1; } html[dir=rtl] :host { text-align: right; unicode-bidi: embed; } body[dir=rtl] :host { text-align: right; unicode-bidi: embed; } [dir=rtl] :host { text-align: right; unicode-bidi: embed; } :host bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host > * { vertical-align: middle; } :host.mat-clickable { cursor: pointer; } :host.mat-clickable:focus { outline: none; } :host .td-data-table-heading { display: inline-block; position: relative; } :host md-icon.td-data-table-sort-icon { position: absolute; top: 0px; } :host.mat-numeric { text-align: right; } html[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } :host.mat-numeric bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host.mat-numeric md-icon.td-data-table-sort-icon { margin-left: -22px; margin-right: initial; } html[dir=rtl] :host.mat-numeric md-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric md-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric md-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } :host.mat-numeric md-icon.td-data-table-sort-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric md-icon.td-data-table-sort-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host.mat-numeric md-icon.td-data-table-sort-icon { margin-right: -22px; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric md-icon.td-data-table-sort-icon { margin-right: -22px; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric md-icon.td-data-table-sort-icon { margin-right: -22px; unicode-bidi: embed; } :host.mat-numeric md-icon.td-data-table-sort-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric md-icon.td-data-table-sort-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-left: 6px; margin-right: initial; } html[dir=rtl] :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } body[dir=rtl] :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } [dir=rtl] :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-left: initial; unicode-bidi: embed; } :host:not(.mat-numeric) md-icon.td-data-table-sort-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:not(.mat-numeric) md-icon.td-data-table-sort-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-right: 6px; unicode-bidi: embed; } body[dir=rtl] :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-right: 6px; unicode-bidi: embed; } [dir=rtl] :host:not(.mat-numeric) md-icon.td-data-table-sort-icon { margin-right: 6px; unicode-bidi: embed; } :host:not(.mat-numeric) md-icon.td-data-table-sort-icon bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:not(.mat-numeric) md-icon.td-data-table-sort-icon bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } /*# sourceMappingURL=data-table-column.component.css.map */ "],
            template: "<span class=\"td-data-table-heading\"> <md-icon  class=\"td-data-table-sort-icon\"  *ngIf=\"sortable && numeric\" [class.mat-asc]=\"(!(active) || isAscending())\" [class.mat-desc]=\"(active && isDescending())\" (click)=\"sortable && handleSortBy()\"> arrow_upward </md-icon> <span (click)=\"sortable && handleSortBy()\"> <ng-content></ng-content> </span> <md-icon  class=\"td-data-table-sort-icon\"  *ngIf=\"sortable && !numeric\" [class.mat-asc]=\"(!(active) || isAscending())\" [class.mat-desc]=\"(active && isDescending())\" (click)=\"sortable && handleSortBy()\"> arrow_upward </md-icon> </span>",
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TdDataTableColumnComponent);
    return TdDataTableColumnComponent;
}());
export { TdDataTableColumnComponent };
//# sourceMappingURL=data-table-column.component.js.map