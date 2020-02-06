/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
/**
 * Conversion function that takes an array of objects and converts
 * them to CSV format. Custom key and line separators can be specified.
 *
 * @param {?} objects list of strings in JSON format or actual objects
 * @param {?=} keySeparator optional parameter to specify custom value separator
 * @param {?=} lineSeparator optional parameter to specify custom end of line separator
 * @return {?} CSV formatted string
 */
export function convertObjectsToCSV(objects, keySeparator, lineSeparator) {
    if (keySeparator === void 0) { keySeparator = ','; }
    if (lineSeparator === void 0) { lineSeparator = '\r\n'; }
    if (!objects) {
        return '';
    }
    /** @type {?} */
    var outputString = '';
    // Iterate through array, creating one output line per object
    objects.forEach((/**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    function (value, key) {
        var e_1, _a;
        /** @type {?} */
        var line = '';
        try {
            for (var _b = __values(Object.keys(objects[key])), _c = _b.next(); !_c.done; _c = _b.next()) {
                var index = _c.value;
                if (line !== '') {
                    line += keySeparator;
                }
                if (objects[key][index] === null || objects[key][index] === undefined) {
                    objects[key][index] = '';
                }
                line += objects[key][index];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        outputString += "" + line + lineSeparator;
    }));
    // Append header row identifying keys into output
    if (objects[0]) {
        /** @type {?} */
        var headers = Object.keys(objects[0]).join(keySeparator);
        outputString = "" + headers + lineSeparator + outputString;
    }
    return outputString;
}
/**
 * Conversion function that takes a CSV representation
 * of objects and converts them to JSON.
 * The first row in the input must be the object keys.
 * Custom key separator and line separator can be specified.
 * Indentation size for output JSON can be specified.
 *
 * @param {?} csv list of strings in JSON format or actual objects
 * @param {?=} keySeparator optional parameter to specify custom value separator
 * @param {?=} lineSeparator optional parameter to specify custom end of line separator
 * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2.
 * @return {?} JSON formatted string
 */
export function convertCSVToJSON(csv, keySeparator, lineSeparator, indent) {
    if (keySeparator === void 0) { keySeparator = ','; }
    if (lineSeparator === void 0) { lineSeparator = '\r\n'; }
    if (indent === void 0) { indent = 2; }
    if (!csv) {
        return '';
    }
    /** @type {?} */
    var csvArray = csv.split(lineSeparator);
    // Input CSV must have a minimum of two rows
    if (csvArray.length < 2) {
        return '';
    }
    /** @type {?} */
    var newObjects = [];
    // Extract object keys from header row
    /** @type {?} */
    var keys = csvArray[0].split(keySeparator);
    // Iterate through array, creating one output line per object
    for (var i = 1; i < csvArray.length; i++) {
        /** @type {?} */
        var newObject = {};
        /** @type {?} */
        var values = csvArray[i].split(keySeparator);
        if (values.length !== keys.length) {
            continue;
        }
        for (var j = 0; j < keys.length; j++) {
            newObject[keys[j]] = values[j];
        }
        newObjects.push(newObject);
    }
    return formatJSON(newObjects, indent);
}
/**
 * Convert object to JSON using stringify. Indentation size for output JSON can be specified.
 *
 * @param {?} json object to be converted
 * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2.
 * @return {?}
 */
export function formatJSON(json, indent) {
    if (indent === void 0) { indent = 2; }
    return JSON.stringify(json, undefined, indent);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBU0EsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUFjLEVBQ2QsWUFBMEIsRUFDMUIsYUFBOEI7SUFEOUIsNkJBQUEsRUFBQSxrQkFBMEI7SUFDMUIsOEJBQUEsRUFBQSxzQkFBOEI7SUFFOUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUcsWUFBWSxHQUFXLEVBQUU7SUFFN0IsNkRBQTZEO0lBQzdELE9BQU8sQ0FBQyxPQUFPOzs7OztJQUFDLFVBQUMsS0FBYSxFQUFFLEdBQVc7OztZQUNyQyxJQUFJLEdBQVcsRUFBRTs7WUFDckIsS0FBb0IsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBMUMsSUFBTSxLQUFLLFdBQUE7Z0JBQ2QsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO29CQUNmLElBQUksSUFBSSxZQUFZLENBQUM7aUJBQ3RCO2dCQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUMxQjtnQkFDRCxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCOzs7Ozs7Ozs7UUFDRCxZQUFZLElBQUksS0FBRyxJQUFJLEdBQUcsYUFBZSxDQUFDO0lBQzVDLENBQUMsRUFBQyxDQUFDO0lBRUgsaURBQWlEO0lBQ2pELElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUNSLE9BQU8sR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbEUsWUFBWSxHQUFHLEtBQUcsT0FBTyxHQUFHLGFBQWEsR0FBRyxZQUFjLENBQUM7S0FDNUQ7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsR0FBVyxFQUNYLFlBQTBCLEVBQzFCLGFBQThCLEVBQzlCLE1BQWtCO0lBRmxCLDZCQUFBLEVBQUEsa0JBQTBCO0lBQzFCLDhCQUFBLEVBQUEsc0JBQThCO0lBQzlCLHVCQUFBLEVBQUEsVUFBa0I7SUFFbEIsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUssUUFBUSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQ25ELDRDQUE0QztJQUM1QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUssVUFBVSxHQUFVLEVBQUU7OztRQUd0QixJQUFJLEdBQWEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDdEQsNkRBQTZEO0lBQzdELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMxQyxTQUFTLEdBQVEsRUFBRTs7WUFFbkIsTUFBTSxHQUFhLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3hELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pDLFNBQVM7U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsT0FBTyxVQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFZLEVBQUUsTUFBa0I7SUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtJQUN6RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJzaW9uIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBhbmQgY29udmVydHNcbiAqIHRoZW0gdG8gQ1NWIGZvcm1hdC4gQ3VzdG9tIGtleSBhbmQgbGluZSBzZXBhcmF0b3JzIGNhbiBiZSBzcGVjaWZpZWQuXG4gKlxuICogQHBhcmFtIG9iamVjdHMgbGlzdCBvZiBzdHJpbmdzIGluIEpTT04gZm9ybWF0IG9yIGFjdHVhbCBvYmplY3RzXG4gKiBAcGFyYW0ga2V5U2VwYXJhdG9yIG9wdGlvbmFsIHBhcmFtZXRlciB0byBzcGVjaWZ5IGN1c3RvbSB2YWx1ZSBzZXBhcmF0b3JcbiAqIEBwYXJhbSBsaW5lU2VwYXJhdG9yIG9wdGlvbmFsIHBhcmFtZXRlciB0byBzcGVjaWZ5IGN1c3RvbSBlbmQgb2YgbGluZSBzZXBhcmF0b3JcbiAqIEByZXR1cm5zIENTViBmb3JtYXR0ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0T2JqZWN0c1RvQ1NWKFxuICBvYmplY3RzOiBhbnlbXSxcbiAga2V5U2VwYXJhdG9yOiBzdHJpbmcgPSAnLCcsXG4gIGxpbmVTZXBhcmF0b3I6IHN0cmluZyA9ICdcXHJcXG4nLFxuKTogc3RyaW5nIHtcbiAgaWYgKCFvYmplY3RzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IG91dHB1dFN0cmluZzogc3RyaW5nID0gJyc7XG5cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFycmF5LCBjcmVhdGluZyBvbmUgb3V0cHV0IGxpbmUgcGVyIG9iamVjdFxuICBvYmplY3RzLmZvckVhY2goKHZhbHVlOiBvYmplY3QsIGtleTogbnVtYmVyKSA9PiB7XG4gICAgbGV0IGxpbmU6IHN0cmluZyA9ICcnO1xuICAgIGZvciAoY29uc3QgaW5kZXggb2YgT2JqZWN0LmtleXMob2JqZWN0c1trZXldKSkge1xuICAgICAgaWYgKGxpbmUgIT09ICcnKSB7XG4gICAgICAgIGxpbmUgKz0ga2V5U2VwYXJhdG9yO1xuICAgICAgfVxuICAgICAgaWYgKG9iamVjdHNba2V5XVtpbmRleF0gPT09IG51bGwgfHwgb2JqZWN0c1trZXldW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9iamVjdHNba2V5XVtpbmRleF0gPSAnJztcbiAgICAgIH1cbiAgICAgIGxpbmUgKz0gb2JqZWN0c1trZXldW2luZGV4XTtcbiAgICB9XG4gICAgb3V0cHV0U3RyaW5nICs9IGAke2xpbmV9JHtsaW5lU2VwYXJhdG9yfWA7XG4gIH0pO1xuXG4gIC8vIEFwcGVuZCBoZWFkZXIgcm93IGlkZW50aWZ5aW5nIGtleXMgaW50byBvdXRwdXRcbiAgaWYgKG9iamVjdHNbMF0pIHtcbiAgICBjb25zdCBoZWFkZXJzOiBzdHJpbmcgPSBPYmplY3Qua2V5cyhvYmplY3RzWzBdKS5qb2luKGtleVNlcGFyYXRvcik7XG4gICAgb3V0cHV0U3RyaW5nID0gYCR7aGVhZGVyc30ke2xpbmVTZXBhcmF0b3J9JHtvdXRwdXRTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXRTdHJpbmc7XG59XG5cbi8qKlxuICogQ29udmVyc2lvbiBmdW5jdGlvbiB0aGF0IHRha2VzIGEgQ1NWIHJlcHJlc2VudGF0aW9uXG4gKiBvZiBvYmplY3RzIGFuZCBjb252ZXJ0cyB0aGVtIHRvIEpTT04uXG4gKiBUaGUgZmlyc3Qgcm93IGluIHRoZSBpbnB1dCBtdXN0IGJlIHRoZSBvYmplY3Qga2V5cy5cbiAqIEN1c3RvbSBrZXkgc2VwYXJhdG9yIGFuZCBsaW5lIHNlcGFyYXRvciBjYW4gYmUgc3BlY2lmaWVkLlxuICogSW5kZW50YXRpb24gc2l6ZSBmb3Igb3V0cHV0IEpTT04gY2FuIGJlIHNwZWNpZmllZC5cbiAqXG4gKiBAcGFyYW0gY3N2IGxpc3Qgb2Ygc3RyaW5ncyBpbiBKU09OIGZvcm1hdCBvciBhY3R1YWwgb2JqZWN0c1xuICogQHBhcmFtIGtleVNlcGFyYXRvciBvcHRpb25hbCBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBjdXN0b20gdmFsdWUgc2VwYXJhdG9yXG4gKiBAcGFyYW0gbGluZVNlcGFyYXRvciBvcHRpb25hbCBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBjdXN0b20gZW5kIG9mIGxpbmUgc2VwYXJhdG9yXG4gKiBAcGFyYW0gaW5kZW50IG9wdGlvbmFsIHBhcmFtZXRlciBpbmRpY2F0aW5nIHNwYWNlIGluZGVudGF0aW9uIGZvciBwcmV0dHkgb3V0cHV0LiBEZWZhdWx0IGlzIDIuXG4gKiBAcmV0dXJucyBKU09OIGZvcm1hdHRlZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDU1ZUb0pTT04oXG4gIGNzdjogc3RyaW5nLFxuICBrZXlTZXBhcmF0b3I6IHN0cmluZyA9ICcsJyxcbiAgbGluZVNlcGFyYXRvcjogc3RyaW5nID0gJ1xcclxcbicsXG4gIGluZGVudDogbnVtYmVyID0gMixcbik6IHN0cmluZyB7XG4gIGlmICghY3N2KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgY3N2QXJyYXk6IHN0cmluZ1tdID0gY3N2LnNwbGl0KGxpbmVTZXBhcmF0b3IpO1xuICAvLyBJbnB1dCBDU1YgbXVzdCBoYXZlIGEgbWluaW11bSBvZiB0d28gcm93c1xuICBpZiAoY3N2QXJyYXkubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IG5ld09iamVjdHM6IGFueVtdID0gW107XG5cbiAgLy8gRXh0cmFjdCBvYmplY3Qga2V5cyBmcm9tIGhlYWRlciByb3dcbiAgY29uc3Qga2V5czogc3RyaW5nW10gPSBjc3ZBcnJheVswXS5zcGxpdChrZXlTZXBhcmF0b3IpO1xuICAvLyBJdGVyYXRlIHRocm91Z2ggYXJyYXksIGNyZWF0aW5nIG9uZSBvdXRwdXQgbGluZSBwZXIgb2JqZWN0XG4gIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBjc3ZBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge307XG5cbiAgICBjb25zdCB2YWx1ZXM6IHN0cmluZ1tdID0gY3N2QXJyYXlbaV0uc3BsaXQoa2V5U2VwYXJhdG9yKTtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCAhPT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgbmV3T2JqZWN0W2tleXNbal1dID0gdmFsdWVzW2pdO1xuICAgIH1cbiAgICBuZXdPYmplY3RzLnB1c2gobmV3T2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRKU09OKG5ld09iamVjdHMsIGluZGVudCk7XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3QgdG8gSlNPTiB1c2luZyBzdHJpbmdpZnkuIEluZGVudGF0aW9uIHNpemUgZm9yIG91dHB1dCBKU09OIGNhbiBiZSBzcGVjaWZpZWQuXG4gKlxuICogQHBhcmFtIGpzb24gb2JqZWN0IHRvIGJlIGNvbnZlcnRlZFxuICogQHBhcmFtIGluZGVudCBvcHRpb25hbCBwYXJhbWV0ZXIgaW5kaWNhdGluZyBzcGFjZSBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IG91dHB1dC4gRGVmYXVsdCBpcyAyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0SlNPTihqc29uOiBvYmplY3QsIGluZGVudDogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uLCB1bmRlZmluZWQsIGluZGVudCk7XG59XG4iXX0=