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
export function convertObjectsToCSV(objects, keySeparator = ',', lineSeparator = '\r\n') {
    if (!objects) {
        return '';
    }
    /** @type {?} */
    let outputString = '';
    // Iterate through array, creating one output line per object
    objects.forEach((/**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    (value, key) => {
        /** @type {?} */
        let line = '';
        for (const index of Object.keys(objects[key])) {
            if (line !== '') {
                line += keySeparator;
            }
            if (objects[key][index] === null || objects[key][index] === undefined) {
                objects[key][index] = '';
            }
            line += objects[key][index];
        }
        outputString += `${line}${lineSeparator}`;
    }));
    // Append header row identifying keys into output
    if (objects[0]) {
        /** @type {?} */
        const headers = Object.keys(objects[0]).join(keySeparator);
        outputString = `${headers}${lineSeparator}${outputString}`;
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
export function convertCSVToJSON(csv, keySeparator = ',', lineSeparator = '\r\n', indent = 2) {
    if (!csv) {
        return '';
    }
    /** @type {?} */
    const csvArray = csv.split(lineSeparator);
    // Input CSV must have a minimum of two rows
    if (csvArray.length < 2) {
        return '';
    }
    /** @type {?} */
    const newObjects = [];
    // Extract object keys from header row
    /** @type {?} */
    const keys = csvArray[0].split(keySeparator);
    // Iterate through array, creating one output line per object
    for (let i = 1; i < csvArray.length; i++) {
        /** @type {?} */
        const newObject = {};
        /** @type {?} */
        const values = csvArray[i].split(keySeparator);
        if (values.length !== keys.length) {
            continue;
        }
        for (let j = 0; j < keys.length; j++) {
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
export function formatJSON(json, indent = 2) {
    return JSON.stringify(json, undefined, indent);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLE9BQWMsRUFDZCxlQUF1QixHQUFHLEVBQzFCLGdCQUF3QixNQUFNO0lBRTlCLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNYOztRQUVHLFlBQVksR0FBVyxFQUFFO0lBRTdCLDZEQUE2RDtJQUM3RCxPQUFPLENBQUMsT0FBTzs7Ozs7SUFBQyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsRUFBRTs7WUFDekMsSUFBSSxHQUFXLEVBQUU7UUFDckIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzdDLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtnQkFDZixJQUFJLElBQUksWUFBWSxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDMUI7WUFDRCxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsWUFBWSxJQUFJLEdBQUcsSUFBSSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQzVDLENBQUMsRUFBQyxDQUFDO0lBRUgsaURBQWlEO0lBQ2pELElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOztjQUNSLE9BQU8sR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbEUsWUFBWSxHQUFHLEdBQUcsT0FBTyxHQUFHLGFBQWEsR0FBRyxZQUFZLEVBQUUsQ0FBQztLQUM1RDtJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZUQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixHQUFXLEVBQ1gsZUFBdUIsR0FBRyxFQUMxQixnQkFBd0IsTUFBTSxFQUM5QixTQUFpQixDQUFDO0lBRWxCLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLEVBQUUsQ0FBQztLQUNYOztVQUVLLFFBQVEsR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUNuRCw0Q0FBNEM7SUFDNUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2QixPQUFPLEVBQUUsQ0FBQztLQUNYOztVQUVLLFVBQVUsR0FBVSxFQUFFOzs7VUFHdEIsSUFBSSxHQUFhLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ3RELDZEQUE2RDtJQUM3RCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDMUMsU0FBUyxHQUFRLEVBQUU7O2NBRW5CLE1BQU0sR0FBYSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN4RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQyxTQUFTO1NBQ1Y7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM1QjtJQUVELE9BQU8sVUFBVSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4QyxDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBWSxFQUFFLFNBQWlCLENBQUM7SUFDekQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29udmVyc2lvbiBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGFycmF5IG9mIG9iamVjdHMgYW5kIGNvbnZlcnRzXG4gKiB0aGVtIHRvIENTViBmb3JtYXQuIEN1c3RvbSBrZXkgYW5kIGxpbmUgc2VwYXJhdG9ycyBjYW4gYmUgc3BlY2lmaWVkLlxuICpcbiAqIEBwYXJhbSBvYmplY3RzIGxpc3Qgb2Ygc3RyaW5ncyBpbiBKU09OIGZvcm1hdCBvciBhY3R1YWwgb2JqZWN0c1xuICogQHBhcmFtIGtleVNlcGFyYXRvciBvcHRpb25hbCBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBjdXN0b20gdmFsdWUgc2VwYXJhdG9yXG4gKiBAcGFyYW0gbGluZVNlcGFyYXRvciBvcHRpb25hbCBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBjdXN0b20gZW5kIG9mIGxpbmUgc2VwYXJhdG9yXG4gKiBAcmV0dXJucyBDU1YgZm9ybWF0dGVkIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE9iamVjdHNUb0NTVihcbiAgb2JqZWN0czogYW55W10sXG4gIGtleVNlcGFyYXRvcjogc3RyaW5nID0gJywnLFxuICBsaW5lU2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxyXFxuJyxcbik6IHN0cmluZyB7XG4gIGlmICghb2JqZWN0cykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBvdXRwdXRTdHJpbmc6IHN0cmluZyA9ICcnO1xuXG4gIC8vIEl0ZXJhdGUgdGhyb3VnaCBhcnJheSwgY3JlYXRpbmcgb25lIG91dHB1dCBsaW5lIHBlciBvYmplY3RcbiAgb2JqZWN0cy5mb3JFYWNoKCh2YWx1ZTogb2JqZWN0LCBrZXk6IG51bWJlcikgPT4ge1xuICAgIGxldCBsaW5lOiBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIE9iamVjdC5rZXlzKG9iamVjdHNba2V5XSkpIHtcbiAgICAgIGlmIChsaW5lICE9PSAnJykge1xuICAgICAgICBsaW5lICs9IGtleVNlcGFyYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmplY3RzW2tleV1baW5kZXhdID09PSBudWxsIHx8IG9iamVjdHNba2V5XVtpbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvYmplY3RzW2tleV1baW5kZXhdID0gJyc7XG4gICAgICB9XG4gICAgICBsaW5lICs9IG9iamVjdHNba2V5XVtpbmRleF07XG4gICAgfVxuICAgIG91dHB1dFN0cmluZyArPSBgJHtsaW5lfSR7bGluZVNlcGFyYXRvcn1gO1xuICB9KTtcblxuICAvLyBBcHBlbmQgaGVhZGVyIHJvdyBpZGVudGlmeWluZyBrZXlzIGludG8gb3V0cHV0XG4gIGlmIChvYmplY3RzWzBdKSB7XG4gICAgY29uc3QgaGVhZGVyczogc3RyaW5nID0gT2JqZWN0LmtleXMob2JqZWN0c1swXSkuam9pbihrZXlTZXBhcmF0b3IpO1xuICAgIG91dHB1dFN0cmluZyA9IGAke2hlYWRlcnN9JHtsaW5lU2VwYXJhdG9yfSR7b3V0cHV0U3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0U3RyaW5nO1xufVxuXG4vKipcbiAqIENvbnZlcnNpb24gZnVuY3Rpb24gdGhhdCB0YWtlcyBhIENTViByZXByZXNlbnRhdGlvblxuICogb2Ygb2JqZWN0cyBhbmQgY29udmVydHMgdGhlbSB0byBKU09OLlxuICogVGhlIGZpcnN0IHJvdyBpbiB0aGUgaW5wdXQgbXVzdCBiZSB0aGUgb2JqZWN0IGtleXMuXG4gKiBDdXN0b20ga2V5IHNlcGFyYXRvciBhbmQgbGluZSBzZXBhcmF0b3IgY2FuIGJlIHNwZWNpZmllZC5cbiAqIEluZGVudGF0aW9uIHNpemUgZm9yIG91dHB1dCBKU09OIGNhbiBiZSBzcGVjaWZpZWQuXG4gKlxuICogQHBhcmFtIGNzdiBsaXN0IG9mIHN0cmluZ3MgaW4gSlNPTiBmb3JtYXQgb3IgYWN0dWFsIG9iamVjdHNcbiAqIEBwYXJhbSBrZXlTZXBhcmF0b3Igb3B0aW9uYWwgcGFyYW1ldGVyIHRvIHNwZWNpZnkgY3VzdG9tIHZhbHVlIHNlcGFyYXRvclxuICogQHBhcmFtIGxpbmVTZXBhcmF0b3Igb3B0aW9uYWwgcGFyYW1ldGVyIHRvIHNwZWNpZnkgY3VzdG9tIGVuZCBvZiBsaW5lIHNlcGFyYXRvclxuICogQHBhcmFtIGluZGVudCBvcHRpb25hbCBwYXJhbWV0ZXIgaW5kaWNhdGluZyBzcGFjZSBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IG91dHB1dC4gRGVmYXVsdCBpcyAyLlxuICogQHJldHVybnMgSlNPTiBmb3JtYXR0ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q1NWVG9KU09OKFxuICBjc3Y6IHN0cmluZyxcbiAga2V5U2VwYXJhdG9yOiBzdHJpbmcgPSAnLCcsXG4gIGxpbmVTZXBhcmF0b3I6IHN0cmluZyA9ICdcXHJcXG4nLFxuICBpbmRlbnQ6IG51bWJlciA9IDIsXG4pOiBzdHJpbmcge1xuICBpZiAoIWNzdikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IGNzdkFycmF5OiBzdHJpbmdbXSA9IGNzdi5zcGxpdChsaW5lU2VwYXJhdG9yKTtcbiAgLy8gSW5wdXQgQ1NWIG11c3QgaGF2ZSBhIG1pbmltdW0gb2YgdHdvIHJvd3NcbiAgaWYgKGNzdkFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBuZXdPYmplY3RzOiBhbnlbXSA9IFtdO1xuXG4gIC8vIEV4dHJhY3Qgb2JqZWN0IGtleXMgZnJvbSBoZWFkZXIgcm93XG4gIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gY3N2QXJyYXlbMF0uc3BsaXQoa2V5U2VwYXJhdG9yKTtcbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFycmF5LCBjcmVhdGluZyBvbmUgb3V0cHV0IGxpbmUgcGVyIG9iamVjdFxuICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgY3N2QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXdPYmplY3Q6IGFueSA9IHt9O1xuXG4gICAgY29uc3QgdmFsdWVzOiBzdHJpbmdbXSA9IGNzdkFycmF5W2ldLnNwbGl0KGtleVNlcGFyYXRvcik7XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggIT09IGtleXMubGVuZ3RoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIG5ld09iamVjdFtrZXlzW2pdXSA9IHZhbHVlc1tqXTtcbiAgICB9XG4gICAgbmV3T2JqZWN0cy5wdXNoKG5ld09iamVjdCk7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0SlNPTihuZXdPYmplY3RzLCBpbmRlbnQpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IHRvIEpTT04gdXNpbmcgc3RyaW5naWZ5LiBJbmRlbnRhdGlvbiBzaXplIGZvciBvdXRwdXQgSlNPTiBjYW4gYmUgc3BlY2lmaWVkLlxuICpcbiAqIEBwYXJhbSBqc29uIG9iamVjdCB0byBiZSBjb252ZXJ0ZWRcbiAqIEBwYXJhbSBpbmRlbnQgb3B0aW9uYWwgcGFyYW1ldGVyIGluZGljYXRpbmcgc3BhY2UgaW5kZW50YXRpb24gZm9yIHByZXR0eSBvdXRwdXQuIERlZmF1bHQgaXMgMi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEpTT04oanNvbjogb2JqZWN0LCBpbmRlbnQ6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbiwgdW5kZWZpbmVkLCBpbmRlbnQpO1xufVxuIl19