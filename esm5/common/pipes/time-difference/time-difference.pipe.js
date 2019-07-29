/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TdTimeDifferencePipe = /** @class */ (function () {
    function TdTimeDifferencePipe() {
    }
    /**
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    TdTimeDifferencePipe.prototype.transform = /**
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    function (start, end) {
        /** @type {?} */
        var startTime = new Date(start);
        /** @type {?} */
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
        /** @type {?} */
        var diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        /** @type {?} */
        var days = Math.floor(diff / (60 * 60 * 24));
        diff = diff - days * (60 * 60 * 24);
        /** @type {?} */
        var hours = Math.floor(diff / (60 * 60));
        diff = diff - hours * (60 * 60);
        /** @type {?} */
        var minutes = Math.floor(diff / 60);
        diff -= minutes * 60;
        /** @type {?} */
        var seconds = diff;
        /** @type {?} */
        var pad = '00';
        /** @type {?} */
        var daysFormatted = '';
        if (days > 0 && days < 2) {
            daysFormatted = ' day - ';
        }
        else if (days > 1) {
            daysFormatted = ' days - ';
        }
        return ((days > 0 ? days + daysFormatted : daysFormatted) +
            pad.substring(0, pad.length - (hours + '').length) +
            hours +
            ':' +
            pad.substring(0, pad.length - (minutes + '').length) +
            minutes +
            ':' +
            pad.substring(0, pad.length - (seconds + '').length) +
            seconds);
    };
    TdTimeDifferencePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'timeDifference',
                },] }
    ];
    return TdTimeDifferencePipe;
}());
export { TdTimeDifferencePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1kaWZmZXJlbmNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9waXBlcy90aW1lLWRpZmZlcmVuY2UvdGltZS1kaWZmZXJlbmNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFxREEsQ0FBQzs7Ozs7O0lBakRDLHdDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLEdBQVM7O1lBQ3pCLFNBQVMsR0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7O1lBQ2pDLE9BQWE7UUFFakIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzlDLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCOztZQUVHLElBQUksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQzs7WUFFM0UsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7O1lBRWhDLEtBQUssR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFNUIsT0FBTyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7WUFFakIsT0FBTyxHQUFXLElBQUk7O1lBRXRCLEdBQUcsR0FBVyxJQUFJOztZQUVsQixhQUFhLEdBQVcsRUFBRTtRQUU5QixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUN4QixhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQzNCO2FBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLGFBQWEsR0FBRyxVQUFVLENBQUM7U0FDNUI7UUFFRCxPQUFPLENBQ0wsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDakQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEQsS0FBSztZQUNMLEdBQUc7WUFDSCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNwRCxPQUFPO1lBQ1AsR0FBRztZQUNILEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3BELE9BQU8sQ0FDUixDQUFDO0lBQ0osQ0FBQzs7Z0JBcERGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2Qjs7SUFtREQsMkJBQUM7Q0FBQSxBQXJERCxJQXFEQztTQWxEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVEaWZmZXJlbmNlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRUaW1lRGlmZmVyZW5jZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHN0YXJ0OiBhbnksIGVuZD86IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHN0YXJ0VGltZTogRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0KTtcbiAgICBsZXQgZW5kVGltZTogRGF0ZTtcblxuICAgIGlmIChlbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICghc3RhcnRUaW1lLmdldFRpbWUoKSB8fCAhZW5kVGltZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG5cbiAgICBsZXQgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigoZW5kVGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgbGV0IGRheXM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCAqIDYwICogMjQpKTtcbiAgICBkaWZmID0gZGlmZiAtIGRheXMgKiAoNjAgKiA2MCAqIDI0KTtcblxuICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwICogNjApKTtcbiAgICBkaWZmID0gZGlmZiAtIGhvdXJzICogKDYwICogNjApO1xuXG4gICAgbGV0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvIDYwKTtcbiAgICBkaWZmIC09IG1pbnV0ZXMgKiA2MDtcblxuICAgIGxldCBzZWNvbmRzOiBudW1iZXIgPSBkaWZmO1xuXG4gICAgbGV0IHBhZDogc3RyaW5nID0gJzAwJztcblxuICAgIGxldCBkYXlzRm9ybWF0dGVkOiBzdHJpbmcgPSAnJztcblxuICAgIGlmIChkYXlzID4gMCAmJiBkYXlzIDwgMikge1xuICAgICAgZGF5c0Zvcm1hdHRlZCA9ICcgZGF5IC0gJztcbiAgICB9IGVsc2UgaWYgKGRheXMgPiAxKSB7XG4gICAgICBkYXlzRm9ybWF0dGVkID0gJyBkYXlzIC0gJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKGRheXMgPiAwID8gZGF5cyArIGRheXNGb3JtYXR0ZWQgOiBkYXlzRm9ybWF0dGVkKSArXG4gICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAoaG91cnMgKyAnJykubGVuZ3RoKSArXG4gICAgICBob3VycyArXG4gICAgICAnOicgK1xuICAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKG1pbnV0ZXMgKyAnJykubGVuZ3RoKSArXG4gICAgICBtaW51dGVzICtcbiAgICAgICc6JyArXG4gICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAoc2Vjb25kcyArICcnKS5sZW5ndGgpICtcbiAgICAgIHNlY29uZHNcbiAgICApO1xuICB9XG59XG4iXX0=