var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { CovalentValidators } from '../validators';
export var MIN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return TdMinValidator; }),
    multi: true,
};
var TdMinValidator = (function () {
    function TdMinValidator() {
    }
    Object.defineProperty(TdMinValidator.prototype, "min", {
        set: function (min) {
            this._validator = CovalentValidators.min(min);
        },
        enumerable: true,
        configurable: true
    });
    TdMinValidator.prototype.validate = function (c) {
        return this._validator(c);
    };
    return TdMinValidator;
}());
__decorate([
    Input('min'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TdMinValidator.prototype, "min", null);
TdMinValidator = __decorate([
    Directive({
        selector: '[min][formControlName],[min][formControl],[min][ngModel]',
        providers: [MIN_VALIDATOR],
    })
], TdMinValidator);
export { TdMinValidator };
//# sourceMappingURL=min.validator.js.map