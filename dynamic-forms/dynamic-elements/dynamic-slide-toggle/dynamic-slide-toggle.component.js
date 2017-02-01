var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';
export var SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicSlideToggleComponent; }),
    multi: true,
};
var TdDynamicSlideToggleComponent = (function (_super) {
    __extends(TdDynamicSlideToggleComponent, _super);
    function TdDynamicSlideToggleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        return _this;
    }
    return TdDynamicSlideToggleComponent;
}(AbstractControlValueAccessor));
TdDynamicSlideToggleComponent = __decorate([
    Component({
        providers: [SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-slide-toggle',
        styles: [""],
        template: "<div class=\"dynamic-slide-toggle-wrapper\"> <md-slide-toggle [(ngModel)]=\"value\" [required]=\"required\" flex> {{label}} </md-slide-toggle> </div>",
    })
], TdDynamicSlideToggleComponent);
export { TdDynamicSlideToggleComponent };
//# sourceMappingURL=dynamic-slide-toggle.component.js.map