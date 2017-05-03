import { Validators } from '@angular/forms';
var CovalentValidators = (function () {
    function CovalentValidators() {
    }
    CovalentValidators.min = function (minValue) {
        var func = function (c) {
            if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
                return undefined;
            }
            var v = c.value;
            return v < minValue ?
                { min: { minValue: minValue, actualValue: v } } :
                undefined;
        };
        return func;
    };
    CovalentValidators.max = function (maxValue) {
        var func = function (c) {
            if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            var v = c.value;
            return v > maxValue ?
                { max: { maxValue: maxValue, actualValue: v } } :
                undefined;
        };
        return func;
    };
    CovalentValidators.numberRequired = function (c) {
        return (Number.isNaN(c.value)) ?
            { required: true } :
            undefined;
    };
    return CovalentValidators;
}());
export { CovalentValidators };
//# sourceMappingURL=validators.js.map