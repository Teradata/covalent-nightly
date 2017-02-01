var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer, ElementRef } from '@angular/core';
var TdDataTableRowComponent = (function () {
    function TdDataTableRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table-row', true);
    }
    return TdDataTableRowComponent;
}());
TdDataTableRowComponent = __decorate([
    Component({
        /* tslint:disable-next-line */
        selector: 'tr[td-data-table-row]',
        styles: [":host { border-bottom-style: solid; border-bottom-width: 1px; } tbody > :host { height: 48px; } thead > :host { height: 56px; } "],
        template: "<ng-content></ng-content>",
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], TdDataTableRowComponent);
export { TdDataTableRowComponent };
//# sourceMappingURL=data-table-row.component.js.map