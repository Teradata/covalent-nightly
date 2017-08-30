import * as tslib_1 from "tslib";
import { Component, Renderer2, ElementRef } from '@angular/core';
var TdExpansionPanelGroupComponent = (function () {
    function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    TdExpansionPanelGroupComponent = tslib_1.__decorate([
        Component({
            selector: 'td-expansion-panel-group',
            styles: [" /*# sourceMappingURL=expansion-panel-group.component.css.map */ "],
            template: "<ng-content></ng-content>",
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef])
    ], TdExpansionPanelGroupComponent);
    return TdExpansionPanelGroupComponent;
}());
export { TdExpansionPanelGroupComponent };
//# sourceMappingURL=expansion-panel-group.component.js.map