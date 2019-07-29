/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TdTimeDifferencePipe {
    /**
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    transform(start, end) {
        /** @type {?} */
        let startTime = new Date(start);
        /** @type {?} */
        let endTime;
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
        let diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        /** @type {?} */
        let days = Math.floor(diff / (60 * 60 * 24));
        diff = diff - days * (60 * 60 * 24);
        /** @type {?} */
        let hours = Math.floor(diff / (60 * 60));
        diff = diff - hours * (60 * 60);
        /** @type {?} */
        let minutes = Math.floor(diff / 60);
        diff -= minutes * 60;
        /** @type {?} */
        let seconds = diff;
        /** @type {?} */
        let pad = '00';
        /** @type {?} */
        let daysFormatted = '';
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
    }
}
TdTimeDifferencePipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeDifference',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1kaWZmZXJlbmNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9waXBlcy90aW1lLWRpZmZlcmVuY2UvdGltZS1kaWZmZXJlbmNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQUMvQixTQUFTLENBQUMsS0FBVSxFQUFFLEdBQVM7O1lBQ3pCLFNBQVMsR0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7O1lBQ2pDLE9BQWE7UUFFakIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzlDLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCOztZQUVHLElBQUksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQzs7WUFFM0UsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7O1lBRWhDLEtBQUssR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFNUIsT0FBTyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7WUFFakIsT0FBTyxHQUFXLElBQUk7O1lBRXRCLEdBQUcsR0FBVyxJQUFJOztZQUVsQixhQUFhLEdBQVcsRUFBRTtRQUU5QixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUN4QixhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQzNCO2FBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLGFBQWEsR0FBRyxVQUFVLENBQUM7U0FDNUI7UUFFRCxPQUFPLENBQ0wsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDakQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEQsS0FBSztZQUNMLEdBQUc7WUFDSCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNwRCxPQUFPO1lBQ1AsR0FBRztZQUNILEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3BELE9BQU8sQ0FDUixDQUFDO0lBQ0osQ0FBQzs7O1lBcERGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lRGlmZmVyZW5jZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkVGltZURpZmZlcmVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdGFydDogYW55LCBlbmQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBzdGFydFRpbWU6IERhdGUgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgbGV0IGVuZFRpbWU6IERhdGU7XG5cbiAgICBpZiAoZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZShlbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXJ0VGltZS5nZXRUaW1lKCkgfHwgIWVuZFRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgIGxldCBkYXlzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjAgKiA2MCAqIDI0KSk7XG4gICAgZGlmZiA9IGRpZmYgLSBkYXlzICogKDYwICogNjAgKiAyNCk7XG5cbiAgICBsZXQgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCAqIDYwKSk7XG4gICAgZGlmZiA9IGRpZmYgLSBob3VycyAqICg2MCAqIDYwKTtcblxuICAgIGxldCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyA2MCk7XG4gICAgZGlmZiAtPSBtaW51dGVzICogNjA7XG5cbiAgICBsZXQgc2Vjb25kczogbnVtYmVyID0gZGlmZjtcblxuICAgIGxldCBwYWQ6IHN0cmluZyA9ICcwMCc7XG5cbiAgICBsZXQgZGF5c0Zvcm1hdHRlZDogc3RyaW5nID0gJyc7XG5cbiAgICBpZiAoZGF5cyA+IDAgJiYgZGF5cyA8IDIpIHtcbiAgICAgIGRheXNGb3JtYXR0ZWQgPSAnIGRheSAtICc7XG4gICAgfSBlbHNlIGlmIChkYXlzID4gMSkge1xuICAgICAgZGF5c0Zvcm1hdHRlZCA9ICcgZGF5cyAtICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIChkYXlzID4gMCA/IGRheXMgKyBkYXlzRm9ybWF0dGVkIDogZGF5c0Zvcm1hdHRlZCkgK1xuICAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKGhvdXJzICsgJycpLmxlbmd0aCkgK1xuICAgICAgaG91cnMgK1xuICAgICAgJzonICtcbiAgICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChtaW51dGVzICsgJycpLmxlbmd0aCkgK1xuICAgICAgbWludXRlcyArXG4gICAgICAnOicgK1xuICAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKHNlY29uZHMgKyAnJykubGVuZ3RoKSArXG4gICAgICBzZWNvbmRzXG4gICAgKTtcbiAgfVxufVxuIl19