import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TdTruncatePipe = (function () {
    function TdTruncatePipe() {
    }
    TdTruncatePipe.prototype.transform = function (text, length) {
        if (typeof text !== 'string') {
            return '';
        }
        // Truncate
        var truncated = text.substr(0, length);
        if (text.length > length) {
            if (truncated.lastIndexOf(' ') > 0) {
                truncated = truncated.trim();
            }
            truncated += '…';
        }
        return truncated;
    };
    TdTruncatePipe = tslib_1.__decorate([
        Pipe({
            name: 'truncate',
        })
    ], TdTruncatePipe);
    return TdTruncatePipe;
}());
export { TdTruncatePipe };
//# sourceMappingURL=truncate.pipe.js.map