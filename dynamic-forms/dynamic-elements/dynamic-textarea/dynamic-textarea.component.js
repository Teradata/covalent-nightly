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
export var TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicTextareaComponent; }),
    multi: true,
};
var TdDynamicTextareaComponent = (function (_super) {
    __extends(TdDynamicTextareaComponent, _super);
    function TdDynamicTextareaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.required = undefined;
        return _this;
    }
    return TdDynamicTextareaComponent;
}(AbstractControlValueAccessor));
TdDynamicTextareaComponent = __decorate([
    Component({
        providers: [TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-dynamic-textarea',
        styles: [""],
        template: "<div class=\"dynamic-textarea-wrapper\" layout=\"column\"> <md-input-container> <textarea #elementInput md-input [(ngModel)]=\"value\" [placeholder]=\"label\" [required]=\"required\" rows=\"4\" flex> </textarea> </md-input-container> </div>",
    })
], TdDynamicTextareaComponent);
export { TdDynamicTextareaComponent };
//# sourceMappingURL=dynamic-textarea.component.js.map