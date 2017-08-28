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
            styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ :host { font-size: 13px; vertical-align: middle; text-align: left; padding: 0 28px 0 28px; } html[dir=rtl] :host { text-align: right; unicode-bidi: embed; } body[dir=rtl] :host { text-align: right; unicode-bidi: embed; } [dir=rtl] :host { text-align: right; unicode-bidi: embed; } :host bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host:first-child { padding-left: 24px; padding-right: initial; } html[dir=rtl] :host:first-child { padding-left: initial; unicode-bidi: embed; } body[dir=rtl] :host:first-child { padding-left: initial; unicode-bidi: embed; } [dir=rtl] :host:first-child { padding-left: initial; unicode-bidi: embed; } :host:first-child bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:first-child { padding-right: 24px; unicode-bidi: embed; } body[dir=rtl] :host:first-child { padding-right: 24px; unicode-bidi: embed; } [dir=rtl] :host:first-child { padding-right: 24px; unicode-bidi: embed; } :host:first-child bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:first-child bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host:last-child { padding-left: initial; padding-right: 24px; } html[dir=rtl] :host:last-child { padding-left: 24px; unicode-bidi: embed; } body[dir=rtl] :host:last-child { padding-left: 24px; unicode-bidi: embed; } [dir=rtl] :host:last-child { padding-left: 24px; unicode-bidi: embed; } :host:last-child bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } html[dir=rtl] :host:last-child { padding-right: initial; unicode-bidi: embed; } body[dir=rtl] :host:last-child { padding-right: initial; unicode-bidi: embed; } [dir=rtl] :host:last-child { padding-right: initial; unicode-bidi: embed; } :host:last-child bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host:last-child bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } :host > * { vertical-align: middle; } :host.mat-clickable { cursor: pointer; } :host.mat-clickable:focus { outline: none; } :host.mat-numeric { text-align: right; } html[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } body[dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } [dir=rtl] :host.mat-numeric { text-align: left; unicode-bidi: embed; } :host.mat-numeric bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host.mat-numeric bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } "],
            template: "<ng-content></ng-content>",
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TdDataTableCellComponent);
    return TdDataTableCellComponent;
}());
export { TdDataTableCellComponent };
//# sourceMappingURL=data-table-cell.component.js.map