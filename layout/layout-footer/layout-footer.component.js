var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    return TdLayoutFooterComponent;
}());
__decorate([
    Input('color'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdLayoutFooterComponent.prototype, "color", null);
TdLayoutFooterComponent = __decorate([
    Component({
        /* tslint:disable-next-line */
        selector: 'td-layout-footer,td-layout-footer-inner',
        styles: [":host { display: block; padding: 10px 16px; } "],
        template: "<ng-content></ng-content> ",
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef])
], TdLayoutFooterComponent);
export { TdLayoutFooterComponent };
//# sourceMappingURL=layout-footer.component.js.map