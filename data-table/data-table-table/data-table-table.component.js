import * as tslib_1 from "tslib";
import { Component, Renderer2, ElementRef } from '@angular/core';
var TdDataTableTableComponent = (function () {
    function TdDataTableTableComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
    }
    TdDataTableTableComponent = tslib_1.__decorate([
        Component({
            /* tslint:disable-next-line */
            selector: 'table[td-data-table]',
            styles: [":host { width: 100%; position: relative; border-spacing: 0; overflow: hidden; border-collapse: collapse; } /*# sourceMappingURL=data-table-table.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TdDataTableTableComponent);
    return TdDataTableTableComponent;
}());
export { TdDataTableTableComponent };
//# sourceMappingURL=data-table-table.component.js.map