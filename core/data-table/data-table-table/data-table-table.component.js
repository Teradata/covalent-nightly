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
var TdDataTableTableComponent = (function () {
    function TdDataTableTableComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.setElementClass(this._elementRef.nativeElement, 'td-data-table', true);
    }
    return TdDataTableTableComponent;
}());
TdDataTableTableComponent = __decorate([
    Component({
        /* tslint:disable-next-line */
        selector: 'table[td-data-table]',
        styles: [":host { width: 100%; border-spacing: 0; overflow: hidden; border-collapse: collapse; } "],
        template: "<thead> <tr td-data-table-row> <ng-content select=th[td-data-table-column]></ng-content> </tr> </thead> <ng-content></ng-content>",
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], TdDataTableTableComponent);
export { TdDataTableTableComponent };
//# sourceMappingURL=data-table-table.component.js.map