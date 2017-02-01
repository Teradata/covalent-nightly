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
export var SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicSelectComponent; }),
    multi: true,
};
var TdDynamicSelectComponent = (function (_super) {
    __extends(TdDynamicSelectComponent, _super);
    function TdDynamicSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.required = undefined;
        _this.selections = undefined;
        return _this;
    }
    return TdDynamicSelectComponent;
}(AbstractControlValueAccessor));
TdDynamicSelectComponent = __decorate([
    Component({
        providers: [SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-select',
        styles: [""],
        template: "<div class=\"dynamic-select-wrapper\" layout=\"row\"> <md-select [(ngModel)]=\"value\" [placeholder]=\"label\" [required]=\"required\" flex> <md-option *ngFor=\"let selection of selections\" [value]=\"selection\">{{selection}}</md-option> </md-select> </div>",
    })
], TdDynamicSelectComponent);
export { TdDynamicSelectComponent };
//# sourceMappingURL=dynamic-select.component.js.map