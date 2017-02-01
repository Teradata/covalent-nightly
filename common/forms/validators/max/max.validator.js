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
import { NG_VALIDATORS, Validators } from '@angular/forms';
import { TdNumberRequiredValidator } from '../number-required/number-required.validator';
export var MAX_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return TdMaxValidator; }),
    multi: true,
};
var TdMaxValidator = TdMaxValidator_1 = (function () {
    function TdMaxValidator() {
    }
    Object.defineProperty(TdMaxValidator.prototype, "max", {
        set: function (max) {
            this._validator = TdMaxValidator_1.validate(max);
        },
        enumerable: true,
        configurable: true
    });
    TdMaxValidator.validate = function (maxValue) {
        return function (c) {
            if (!!Validators.required(c) || !!TdNumberRequiredValidator.validate(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            var v = c.value;
            return v > maxValue ?
                { max: { maxValue: maxValue, actualValue: v } } :
                undefined;
        };
    };
    ;
    TdMaxValidator.prototype.validate = function (c) {
        return this._validator(c);
    };
    ;
    return TdMaxValidator;
}());
__decorate([
    Input('max'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TdMaxValidator.prototype, "max", null);
TdMaxValidator = TdMaxValidator_1 = __decorate([
    Directive({
        selector: '[max][formControlName],[max][formControl],[max][ngModel]',
        providers: [MAX_VALIDATOR],
    })
], TdMaxValidator);
export { TdMaxValidator };
var TdMaxValidator_1;
//# sourceMappingURL=max.validator.js.map