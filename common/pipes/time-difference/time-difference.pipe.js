import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TdTimeDifferencePipe = (function () {
    function TdTimeDifferencePipe() {
    }
    TdTimeDifferencePipe.prototype.transform = function (start, end) {
        var startTime = new Date(start);
        var endTime;
        if (end !== undefined) {
            endTime = new Date(end);
        }
        else {
            endTime = new Date();
        }
        if (!startTime.getTime() || !endTime.getTime()) {
            return 'Invalid Date';
        }
        var diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        var days = Math.floor(diff / (60 * 60 * 24));
        diff = diff - (days * (60 * 60 * 24));
        var hours = Math.floor(diff / (60 * 60));
        diff = diff - (hours * (60 * 60));
        var minutes = Math.floor(diff / (60));
        diff -= minutes * (60);
        var seconds = diff;
        var pad = '00';
        var daysFormatted = '';
        if (days > 0 && days < 2) {
            daysFormatted = ' day - ';
        }
        else if (days > 1) {
            daysFormatted = ' days - ';
        }
        return (days > 0 ? days + daysFormatted : daysFormatted) +
            pad.substring(0, pad.length - (hours + '').length) + hours + ':' +
            pad.substring(0, pad.length - (minutes + '').length) + minutes + ':' +
            pad.substring(0, pad.length - (seconds + '').length) + seconds;
    };
    TdTimeDifferencePipe = tslib_1.__decorate([
        Pipe({
            name: 'timeDifference',
        })
    ], TdTimeDifferencePipe);
    return TdTimeDifferencePipe;
}());
export { TdTimeDifferencePipe };
//# sourceMappingURL=time-difference.pipe.js.map