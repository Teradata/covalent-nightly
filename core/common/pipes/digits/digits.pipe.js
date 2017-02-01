var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var TdDigitsPipe = (function () {
    function TdDigitsPipe() {
    }
    /* `digits` needs to be type `digits: any` or TypeScript complains */
    TdDigitsPipe.prototype.transform = function (digits, precision) {
        if (precision === void 0) { precision = 1; }
        if (digits === 0) {
            return '0';
        }
        else if (isNaN(parseInt(digits, 10))) {
            /* If not a valid number, return 'Invalid Number' */
            return 'Invalid Number';
        }
        else if (digits < 1) {
            return digits;
        }
        var k = 1000;
        var sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
        var i = Math.floor(Math.log(digits) / Math.log(k));
        var size = sizes[i];
        return parseFloat((digits / Math.pow(k, i)).toFixed(precision)) + (size ? ' ' + size : '');
    };
    return TdDigitsPipe;
}());
TdDigitsPipe = __decorate([
    Pipe({
        name: 'digits',
    })
], TdDigitsPipe);
export { TdDigitsPipe };
//# sourceMappingURL=digits.pipe.js.map