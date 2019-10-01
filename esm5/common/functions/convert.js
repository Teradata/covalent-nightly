/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        /** @type {?} */
        var line = '';
        for (var index in objects[key]) {
            if (line !== '') {
                line += keySeparator;
            }
            if (objects[key][index] === null || objects[key][index] === undefined) {
                objects[key][index] = '';
            }
            line += objects[key][index];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2Z1bmN0aW9ucy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLE9BQWMsRUFDZCxZQUEwQixFQUMxQixhQUE4QjtJQUQ5Qiw2QkFBQSxFQUFBLGtCQUEwQjtJQUMxQiw4QkFBQSxFQUFBLHNCQUE4QjtJQUU5QixJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDWDs7UUFFRyxZQUFZLEdBQVcsRUFBRTtJQUU3Qiw2REFBNkQ7SUFDN0QsT0FBTyxDQUFDLE9BQU87Ozs7O0lBQUMsVUFBQyxLQUFhLEVBQUUsR0FBVzs7WUFDckMsSUFBSSxHQUFXLEVBQUU7UUFDckIsS0FBSyxJQUFNLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO2dCQUNmLElBQUksSUFBSSxZQUFZLENBQUM7YUFDdEI7WUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxZQUFZLElBQUksS0FBRyxJQUFJLEdBQUcsYUFBZSxDQUFDO0lBQzVDLENBQUMsRUFBQyxDQUFDO0lBRUgsaURBQWlEO0lBQ2pELElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUNSLE9BQU8sR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbEUsWUFBWSxHQUFHLEtBQUcsT0FBTyxHQUFHLGFBQWEsR0FBRyxZQUFjLENBQUM7S0FDNUQ7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsR0FBVyxFQUNYLFlBQTBCLEVBQzFCLGFBQThCLEVBQzlCLE1BQWtCO0lBRmxCLDZCQUFBLEVBQUEsa0JBQTBCO0lBQzFCLDhCQUFBLEVBQUEsc0JBQThCO0lBQzlCLHVCQUFBLEVBQUEsVUFBa0I7SUFFbEIsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUssUUFBUSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQ25ELDRDQUE0QztJQUM1QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUcsVUFBVSxHQUFVLEVBQUU7OztRQUdwQixJQUFJLEdBQWEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDdEQsNkRBQTZEO0lBQzdELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUM1QyxTQUFTLEdBQVEsRUFBRTs7WUFFbkIsTUFBTSxHQUFhLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3RELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pDLFNBQVM7U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsT0FBTyxVQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFZLEVBQUUsTUFBa0I7SUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtJQUN6RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJzaW9uIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBhbmQgY29udmVydHNcbiAqIHRoZW0gdG8gQ1NWIGZvcm1hdC4gQ3VzdG9tIGtleSBhbmQgbGluZSBzZXBhcmF0b3JzIGNhbiBiZSBzcGVjaWZpZWQuXG4gKlxuICogQHBhcmFtIG9iamVjdHMgbGlzdCBvZiBzdHJpbmdzIGluIEpTT04gZm9ybWF0IG9yIGFjdHVhbCBvYmplY3RzXG4gKiBAcGFyYW0ga2V5U2VwYXJhdG9yIG9wdGlvbmFsIHBhcmFtZXRlciB0byBzcGVjaWZ5IGN1c3RvbSB2YWx1ZSBzZXBhcmF0b3JcbiAqIEBwYXJhbSBsaW5lU2VwYXJhdG9yIG9wdGlvbmFsIHBhcmFtZXRlciB0byBzcGVjaWZ5IGN1c3RvbSBlbmQgb2YgbGluZSBzZXBhcmF0b3JcbiAqIEByZXR1cm5zIENTViBmb3JtYXR0ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0T2JqZWN0c1RvQ1NWKFxuICBvYmplY3RzOiBhbnlbXSxcbiAga2V5U2VwYXJhdG9yOiBzdHJpbmcgPSAnLCcsXG4gIGxpbmVTZXBhcmF0b3I6IHN0cmluZyA9ICdcXHJcXG4nLFxuKTogc3RyaW5nIHtcbiAgaWYgKCFvYmplY3RzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IG91dHB1dFN0cmluZzogc3RyaW5nID0gJyc7XG5cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFycmF5LCBjcmVhdGluZyBvbmUgb3V0cHV0IGxpbmUgcGVyIG9iamVjdFxuICBvYmplY3RzLmZvckVhY2goKHZhbHVlOiBvYmplY3QsIGtleTogbnVtYmVyKSA9PiB7XG4gICAgbGV0IGxpbmU6IHN0cmluZyA9ICcnO1xuICAgIGZvciAoY29uc3QgaW5kZXggaW4gb2JqZWN0c1trZXldKSB7XG4gICAgICBpZiAobGluZSAhPT0gJycpIHtcbiAgICAgICAgbGluZSArPSBrZXlTZXBhcmF0b3I7XG4gICAgICB9XG4gICAgICBpZiAob2JqZWN0c1trZXldW2luZGV4XSA9PT0gbnVsbCB8fCBvYmplY3RzW2tleV1baW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb2JqZWN0c1trZXldW2luZGV4XSA9ICcnO1xuICAgICAgfVxuICAgICAgbGluZSArPSBvYmplY3RzW2tleV1baW5kZXhdO1xuICAgIH1cbiAgICBvdXRwdXRTdHJpbmcgKz0gYCR7bGluZX0ke2xpbmVTZXBhcmF0b3J9YDtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kIGhlYWRlciByb3cgaWRlbnRpZnlpbmcga2V5cyBpbnRvIG91dHB1dFxuICBpZiAob2JqZWN0c1swXSkge1xuICAgIGNvbnN0IGhlYWRlcnM6IHN0cmluZyA9IE9iamVjdC5rZXlzKG9iamVjdHNbMF0pLmpvaW4oa2V5U2VwYXJhdG9yKTtcbiAgICBvdXRwdXRTdHJpbmcgPSBgJHtoZWFkZXJzfSR7bGluZVNlcGFyYXRvcn0ke291dHB1dFN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dFN0cmluZztcbn1cblxuLyoqXG4gKiBDb252ZXJzaW9uIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBDU1YgcmVwcmVzZW50YXRpb25cbiAqIG9mIG9iamVjdHMgYW5kIGNvbnZlcnRzIHRoZW0gdG8gSlNPTi5cbiAqIFRoZSBmaXJzdCByb3cgaW4gdGhlIGlucHV0IG11c3QgYmUgdGhlIG9iamVjdCBrZXlzLlxuICogQ3VzdG9tIGtleSBzZXBhcmF0b3IgYW5kIGxpbmUgc2VwYXJhdG9yIGNhbiBiZSBzcGVjaWZpZWQuXG4gKiBJbmRlbnRhdGlvbiBzaXplIGZvciBvdXRwdXQgSlNPTiBjYW4gYmUgc3BlY2lmaWVkLlxuICpcbiAqIEBwYXJhbSBjc3YgbGlzdCBvZiBzdHJpbmdzIGluIEpTT04gZm9ybWF0IG9yIGFjdHVhbCBvYmplY3RzXG4gKiBAcGFyYW0ga2V5U2VwYXJhdG9yIG9wdGlvbmFsIHBhcmFtZXRlciB0byBzcGVjaWZ5IGN1c3RvbSB2YWx1ZSBzZXBhcmF0b3JcbiAqIEBwYXJhbSBsaW5lU2VwYXJhdG9yIG9wdGlvbmFsIHBhcmFtZXRlciB0byBzcGVjaWZ5IGN1c3RvbSBlbmQgb2YgbGluZSBzZXBhcmF0b3JcbiAqIEBwYXJhbSBpbmRlbnQgb3B0aW9uYWwgcGFyYW1ldGVyIGluZGljYXRpbmcgc3BhY2UgaW5kZW50YXRpb24gZm9yIHByZXR0eSBvdXRwdXQuIERlZmF1bHQgaXMgMi5cbiAqIEByZXR1cm5zIEpTT04gZm9ybWF0dGVkIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENTVlRvSlNPTihcbiAgY3N2OiBzdHJpbmcsXG4gIGtleVNlcGFyYXRvcjogc3RyaW5nID0gJywnLFxuICBsaW5lU2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxyXFxuJyxcbiAgaW5kZW50OiBudW1iZXIgPSAyLFxuKTogc3RyaW5nIHtcbiAgaWYgKCFjc3YpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBjc3ZBcnJheTogc3RyaW5nW10gPSBjc3Yuc3BsaXQobGluZVNlcGFyYXRvcik7XG4gIC8vIElucHV0IENTViBtdXN0IGhhdmUgYSBtaW5pbXVtIG9mIHR3byByb3dzXG4gIGlmIChjc3ZBcnJheS5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IG5ld09iamVjdHM6IGFueVtdID0gW107XG5cbiAgLy8gRXh0cmFjdCBvYmplY3Qga2V5cyBmcm9tIGhlYWRlciByb3dcbiAgY29uc3Qga2V5czogc3RyaW5nW10gPSBjc3ZBcnJheVswXS5zcGxpdChrZXlTZXBhcmF0b3IpO1xuICAvLyBJdGVyYXRlIHRocm91Z2ggYXJyYXksIGNyZWF0aW5nIG9uZSBvdXRwdXQgbGluZSBwZXIgb2JqZWN0XG4gIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBjc3ZBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBuZXdPYmplY3Q6IGFueSA9IHt9O1xuXG4gICAgbGV0IHZhbHVlczogc3RyaW5nW10gPSBjc3ZBcnJheVtpXS5zcGxpdChrZXlTZXBhcmF0b3IpO1xuICAgIGlmICh2YWx1ZXMubGVuZ3RoICE9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICBuZXdPYmplY3Rba2V5c1tqXV0gPSB2YWx1ZXNbal07XG4gICAgfVxuICAgIG5ld09iamVjdHMucHVzaChuZXdPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdEpTT04obmV3T2JqZWN0cywgaW5kZW50KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCB0byBKU09OIHVzaW5nIHN0cmluZ2lmeS4gSW5kZW50YXRpb24gc2l6ZSBmb3Igb3V0cHV0IEpTT04gY2FuIGJlIHNwZWNpZmllZC5cbiAqXG4gKiBAcGFyYW0ganNvbiBvYmplY3QgdG8gYmUgY29udmVydGVkXG4gKiBAcGFyYW0gaW5kZW50IG9wdGlvbmFsIHBhcmFtZXRlciBpbmRpY2F0aW5nIHNwYWNlIGluZGVudGF0aW9uIGZvciBwcmV0dHkgb3V0cHV0LiBEZWZhdWx0IGlzIDIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRKU09OKGpzb246IG9iamVjdCwgaW5kZW50OiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24sIHVuZGVmaW5lZCwgaW5kZW50KTtcbn1cbiJdfQ==