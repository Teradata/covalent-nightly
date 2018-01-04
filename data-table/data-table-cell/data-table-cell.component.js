import * as tslib_1 from "tslib";
import { Component, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';
var TdDataTableCellComponent = (function () {
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
        get: function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input('numeric'),
        tslib_1.__metadata("design:type", Boolean)
    ], TdDataTableCellComponent.prototype, "numeric", void 0);
    tslib_1.__decorate([
        HostBinding('class.mat-numeric'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdDataTableCellComponent.prototype, "bindNumeric", null);
    TdDataTableCellComponent = tslib_1.__decorate([
        Component({
            /* tslint:disable-next-line */
            selector: 'td[td-data-table-cell]',
            styles: [":host { vertical-align: middle; text-align: left; padding: 0; } html[dir=rtl] :host { text-align: right; unicode-bidi: embed; } body[dir=rtl] :host { text-align: right; unicode-bidi: embed; } [dir=rtl] :host { text-align: right; unicode-bidi: embed; } :host bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host > .td-data-table-cell-content-wrapper { padding: 0 28px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host > .td-data-table-cell-content-wrapper.td-data-table-cell-numeric { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host:first-child > .td-data-table-cell-content-wrapper { padding-left: 24px; padding-right: initial; } html[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-left: initial; unicode-bidi: embed; } body[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-left: initial; unicode-bidi: embed; } [dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-left: initial; unicode-bidi: embed; } :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-right: 24px; unicode-bidi: embed; } body[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-right: 24px; unicode-bidi: embed; } [dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper { padding-right: 24px; unicode-bidi: embed; } :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-cell-content-wrapper { padding-left: 28px; padding-right: 24px; } html[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-left: 24px; unicode-bidi: embed; } body[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-left: 24px; unicode-bidi: embed; } [dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-left: 24px; unicode-bidi: embed; } :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-right: 28px; unicode-bidi: embed; } body[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-right: 28px; unicode-bidi: embed; } [dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper { padding-right: 28px; unicode-bidi: embed; } :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host > * { vertical-align: middle; } :host.mat-clickable { cursor: pointer; } :host.mat-clickable:focus { outline: none; } :host.mat-numeric { text-align: right; } html[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } :host.mat-numeric bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } /*# sourceMappingURL=data-table-cell.component.css.map */ "],
            template: "<div class=\"td-data-table-cell-content-wrapper\" [class.td-data-table-cell-numeric]=\"numeric\"> <ng-content></ng-content> </div>",
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TdDataTableCellComponent);
    return TdDataTableCellComponent;
}());
export { TdDataTableCellComponent };
//# sourceMappingURL=data-table-cell.component.js.map