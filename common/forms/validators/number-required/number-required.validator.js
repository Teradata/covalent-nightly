var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export var NUMBER_INPUT_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return TdNumberRequiredValidator; }),
    multi: true,
};
var TdNumberRequiredValidator = TdNumberRequiredValidator_1 = (function () {
    function TdNumberRequiredValidator() {
    }
    TdNumberRequiredValidator.validate = function (c) {
        return (Number.isNaN(c.value)) ?
            { required: true } :
            undefined;
    };
    TdNumberRequiredValidator.prototype.validate = function (c) {
        return TdNumberRequiredValidator_1.validate(c);
    };
    return TdNumberRequiredValidator;
}());
TdNumberRequiredValidator = TdNumberRequiredValidator_1 = __decorate([
    Directive({
        selector: "[type=number][required][formControlName],\n             [type=number][required][formControl],\n             [type=number][required][ngModel]",
        providers: [NUMBER_INPUT_REQUIRED_VALIDATOR],
    })
], TdNumberRequiredValidator);
export { TdNumberRequiredValidator };
var TdNumberRequiredValidator_1;
//# sourceMappingURL=number-required.validator.js.map