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
    return TdDataTableRowComponent;
}());
__decorate([
    Input('selected'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdDataTableRowComponent.prototype, "selected", null);
TdDataTableRowComponent = __decorate([
    Component({
        /* tslint:disable-next-line */
        selector: 'tr[td-data-table-row]',
        styles: [":host { border-bottom-style: solid; border-bottom-width: 1px; } tbody > :host { height: 48px; } thead > :host { height: 56px; } "],
        template: "<ng-content></ng-content>",
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], TdDataTableRowComponent);
export { TdDataTableRowComponent };
//# sourceMappingURL=data-table-row.component.js.map