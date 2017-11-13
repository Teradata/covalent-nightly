import * as tslib_1 from "tslib";
import { Pipe, Inject, LOCALE_ID } from '@angular/core';
import { DecimalPipe } from '@angular/common';
var TdDigitsPipe = (function () {
    function TdDigitsPipe(_locale) {
        if (_locale === void 0) { _locale = 'en'; }
        this._locale = _locale;
        this._decimalPipe = new DecimalPipe(this._locale);
    }
    /* `digits` needs to be type `digits: any` or TypeScript complains */
    TdDigitsPipe.prototype.transform = function (digits, precision) {
        if (precision === void 0) { precision = 1; }
        if (digits === 0) {
            return '0';
        }
        else if (isNaN(parseInt(digits, 10))) {
            /* If not a valid number, return the value */
            return digits;
        }
        else if (digits < 1) {
            return this._decimalPipe.transform(digits.toFixed(precision));
        }
        var k = 1000;
        var sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
        var i = Math.floor(Math.log(digits) / Math.log(k));
        var size = sizes[i];
        return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
    };
    TdDigitsPipe = tslib_1.__decorate([
        Pipe({
            name: 'digits',
        }),
        tslib_1.__param(0, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TdDigitsPipe);
    return TdDigitsPipe;
}());
export { TdDigitsPipe };
//# sourceMappingURL=digits.pipe.js.map