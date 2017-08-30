import * as tslib_1 from "tslib";
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
var TdDataTableRowComponent = (function () {
    function TdDataTableRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
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
    TdDataTableRowComponent.prototype.focus = function () {
        this._elementRef.nativeElement.focus();
    };
    tslib_1.__decorate([
        Input('selected'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdDataTableRowComponent.prototype, "selected", null);
    TdDataTableRowComponent = tslib_1.__decorate([
        Component({
            /* tslint:disable-next-line */
            selector: 'tr[td-data-table-row]',
            styles: [":host { border-bottom-style: solid; border-bottom-width: 1px; } tbody > :host { height: 48px; } thead > :host { height: 56px; } /*# sourceMappingURL=data-table-row.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TdDataTableRowComponent);
    return TdDataTableRowComponent;
}());
export { TdDataTableRowComponent };
//# sourceMappingURL=data-table-row.component.js.map