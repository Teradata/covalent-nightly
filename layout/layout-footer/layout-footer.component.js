import * as tslib_1 from "tslib";
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
var TdLayoutFooterComponent = (function () {
    function TdLayoutFooterComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        /**
         * color?: string
         *
         * Optional color option: primary | accent | warn.
         */
        set: function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input('color'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TdLayoutFooterComponent.prototype, "color", null);
    TdLayoutFooterComponent = tslib_1.__decorate([
        Component({
            /* tslint:disable-next-line */
            selector: 'td-layout-footer,td-layout-footer-inner',
            styles: [":host { display: block; padding: 10px 16px; } /*# sourceMappingURL=layout-footer.component.css.map */ "],
            template: "<ng-content></ng-content> ",
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef])
    ], TdLayoutFooterComponent);
    return TdLayoutFooterComponent;
}());
export { TdLayoutFooterComponent };
//# sourceMappingURL=layout-footer.component.js.map