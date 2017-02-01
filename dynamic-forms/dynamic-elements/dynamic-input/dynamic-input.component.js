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
export var INPUT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicInputComponent; }),
    multi: true,
};
var TdDynamicInputComponent = (function (_super) {
    __extends(TdDynamicInputComponent, _super);
    function TdDynamicInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.type = undefined;
        _this.required = undefined;
        _this.min = undefined;
        _this.max = undefined;
        return _this;
    }
    return TdDynamicInputComponent;
}(AbstractControlValueAccessor));
TdDynamicInputComponent = __decorate([
    Component({
        providers: [INPUT_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-input',
        styles: [""],
        template: "<div class=\"dynamic-input-wrapper\" layout=\"column\"> <md-input-container> <input #elementInput md-input [(ngModel)]=\"value\" [placeholder]=\"label\" [type]=\"type\" [required]=\"required\" [min]=\"min\" [max]=\"max\" flex> <md-hint align=\"start\"> <span class=\"tc-red-600\"> <span *ngIf=\"control.errors?.max\">Max: {{control.errors?.max.maxValue}}</span> <span *ngIf=\"control.errors?.min\">Min: {{control.errors?.min.minValue}}</span> </span> </md-hint> </md-input-container> </div>",
    })
], TdDynamicInputComponent);
export { TdDynamicInputComponent };
//# sourceMappingURL=dynamic-input.component.js.map