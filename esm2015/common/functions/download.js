/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { convertObjectsToCSV, formatJSON } from './convert';
/**
 * Download CSV content to the specified file with .csv extension
 * appended to the provided base file name.
 *
 * @param {?} fileBaseName base name of destination file
 * @param {?} csv CSV contents
 * @return {?}
 */
export function downloadCSV(fileBaseName, csv) {
    downloadFile(`${fileBaseName}.csv`, csv, 'text/csv');
}
/**
 * Download JSON content to the specified file with .json extension
 * appended to the provided base file name.
 *
 * @param {?} fileBaseName base name of destination file
 * @param {?} json JSON contents
 * @param {?=} format indicates if JSON should be prettied
 * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2
 * @return {?}
 */
export function downloadJSON(fileBaseName, json, format = false, indent = 2) {
    downloadFile(`${fileBaseName}.json`, format ? formatJSON(JSON.parse(json), indent) : json, 'application/json');
}
/**
 * Convert objects to CSV format and download to file with .csv
 * extension appended to the provided base file name. Custom key
 * separator and line separator can be specified.
 *
 * @param {?} fileBaseName base name of destination file
 * @param {?} objects object array to be converted to CSV format
 *   prior to writing to download destination
 * @param {?=} keySeparator optional parameter to specify custom value separator
 * @param {?=} lineSeparator optional parameter to specify custom end of line separator
 * @return {?}
 */
export function downloadObjectsToCSV(fileBaseName, objects, keySeparator = ',', lineSeparator = '\r\n') {
    downloadFile(`${fileBaseName}.csv`, convertObjectsToCSV(objects, keySeparator, lineSeparator), 'text/csv');
}
/**
 * Convert objects to JSON format and download to file with .json
 * extension appended to the provided base file name.
 *
 * @param {?} fileBaseName base name of destination file
 * @param {?} objects object array to be converted to JSON format
 *   prior to writing to download destination
 * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2
 * @return {?}
 */
export function downloadObjectsToJSON(fileBaseName, objects, indent = 2) {
    downloadFile(`${fileBaseName}.json`, formatJSON(objects, indent), 'application/json');
}
/**
 * Download string content to the specified file with desired mime type.
 *
 * @param {?} fileName full filename (including appropriate extension) of destination file
 * @param {?} contents string contents to be written to download destination
 * @param {?=} mimeType mime type appropriate to file content to support consumption of destination file
 * @return {?}
 */
export function downloadFile(fileName, contents, mimeType = 'text/plain') {
    if (!fileName || !contents) {
        return;
    }
    // Create blob object and assign URL
    /** @type {?} */
    const blob = new Blob([contents], { type: mimeType });
    /** @type {?} */
    const url = window.URL.createObjectURL(blob);
    // Construct anchor for URL, append to DOM, click and cleanup.
    /** @type {?} */
    const a = document.createElement('a');
    a.setAttribute('style', 'display: none');
    a.setAttribute('download', fileName);
    a.href = url;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vIiwic291cmNlcyI6WyJmdW5jdGlvbnMvZG93bmxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7OztBQVM1RCxNQUFNLFVBQVUsV0FBVyxDQUFDLFlBQW9CLEVBQUUsR0FBVztJQUMzRCxZQUFZLENBQUMsR0FBRyxZQUFZLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkQsQ0FBQzs7Ozs7Ozs7Ozs7QUFXRCxNQUFNLFVBQVUsWUFBWSxDQUFDLFlBQW9CLEVBQUUsSUFBWSxFQUFFLFNBQWtCLEtBQUssRUFBRSxTQUFpQixDQUFDO0lBQzFHLFlBQVksQ0FBQyxHQUFHLFlBQVksT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pILENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFlBQW9CLEVBQ3BCLE9BQWMsRUFDZCxlQUF1QixHQUFHLEVBQzFCLGdCQUF3QixNQUFNO0lBRTlCLFlBQVksQ0FBQyxHQUFHLFlBQVksTUFBTSxFQUFFLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDN0csQ0FBQzs7Ozs7Ozs7Ozs7QUFXRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsWUFBb0IsRUFBRSxPQUFjLEVBQUUsU0FBaUIsQ0FBQztJQUM1RixZQUFZLENBQUMsR0FBRyxZQUFZLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDeEYsQ0FBQzs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLFlBQVksQ0FBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsV0FBbUIsWUFBWTtJQUM5RixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQzFCLE9BQU87S0FDUjs7O1VBR0ssSUFBSSxHQUFTLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O1VBQ3JELEdBQUcsR0FBVyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7OztVQUc5QyxDQUFDLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnZlcnRPYmplY3RzVG9DU1YsIGZvcm1hdEpTT04gfSBmcm9tICcuL2NvbnZlcnQnO1xuXG4vKipcbiAqIERvd25sb2FkIENTViBjb250ZW50IHRvIHRoZSBzcGVjaWZpZWQgZmlsZSB3aXRoIC5jc3YgZXh0ZW5zaW9uXG4gKiBhcHBlbmRlZCB0byB0aGUgcHJvdmlkZWQgYmFzZSBmaWxlIG5hbWUuXG4gKlxuICogQHBhcmFtIGZpbGVCYXNlTmFtZSBiYXNlIG5hbWUgb2YgZGVzdGluYXRpb24gZmlsZVxuICogQHBhcmFtIGNzdiBDU1YgY29udGVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQ1NWKGZpbGVCYXNlTmFtZTogc3RyaW5nLCBjc3Y6IHN0cmluZyk6IHZvaWQge1xuICBkb3dubG9hZEZpbGUoYCR7ZmlsZUJhc2VOYW1lfS5jc3ZgLCBjc3YsICd0ZXh0L2NzdicpO1xufVxuXG4vKipcbiAqIERvd25sb2FkIEpTT04gY29udGVudCB0byB0aGUgc3BlY2lmaWVkIGZpbGUgd2l0aCAuanNvbiBleHRlbnNpb25cbiAqIGFwcGVuZGVkIHRvIHRoZSBwcm92aWRlZCBiYXNlIGZpbGUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gZmlsZUJhc2VOYW1lIGJhc2UgbmFtZSBvZiBkZXN0aW5hdGlvbiBmaWxlXG4gKiBAcGFyYW0ganNvbiBKU09OIGNvbnRlbnRzXG4gKiBAcGFyYW0gZm9ybWF0IGluZGljYXRlcyBpZiBKU09OIHNob3VsZCBiZSBwcmV0dGllZFxuICogQHBhcmFtIGluZGVudCBvcHRpb25hbCBwYXJhbWV0ZXIgaW5kaWNhdGluZyBzcGFjZSBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IG91dHB1dC4gRGVmYXVsdCBpcyAyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEpTT04oZmlsZUJhc2VOYW1lOiBzdHJpbmcsIGpzb246IHN0cmluZywgZm9ybWF0OiBib29sZWFuID0gZmFsc2UsIGluZGVudDogbnVtYmVyID0gMik6IHZvaWQge1xuICBkb3dubG9hZEZpbGUoYCR7ZmlsZUJhc2VOYW1lfS5qc29uYCwgZm9ybWF0ID8gZm9ybWF0SlNPTihKU09OLnBhcnNlKGpzb24pLCBpbmRlbnQpIDoganNvbiwgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdHMgdG8gQ1NWIGZvcm1hdCBhbmQgZG93bmxvYWQgdG8gZmlsZSB3aXRoIC5jc3ZcbiAqIGV4dGVuc2lvbiBhcHBlbmRlZCB0byB0aGUgcHJvdmlkZWQgYmFzZSBmaWxlIG5hbWUuIEN1c3RvbSBrZXlcbiAqIHNlcGFyYXRvciBhbmQgbGluZSBzZXBhcmF0b3IgY2FuIGJlIHNwZWNpZmllZC5cbiAqXG4gKiBAcGFyYW0gZmlsZUJhc2VOYW1lIGJhc2UgbmFtZSBvZiBkZXN0aW5hdGlvbiBmaWxlXG4gKiBAcGFyYW0gb2JqZWN0cyBvYmplY3QgYXJyYXkgdG8gYmUgY29udmVydGVkIHRvIENTViBmb3JtYXRcbiAqICAgcHJpb3IgdG8gd3JpdGluZyB0byBkb3dubG9hZCBkZXN0aW5hdGlvblxuICogQHBhcmFtIGtleVNlcGFyYXRvciBvcHRpb25hbCBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBjdXN0b20gdmFsdWUgc2VwYXJhdG9yXG4gKiBAcGFyYW0gbGluZVNlcGFyYXRvciBvcHRpb25hbCBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBjdXN0b20gZW5kIG9mIGxpbmUgc2VwYXJhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZE9iamVjdHNUb0NTVihcbiAgZmlsZUJhc2VOYW1lOiBzdHJpbmcsXG4gIG9iamVjdHM6IGFueVtdLFxuICBrZXlTZXBhcmF0b3I6IHN0cmluZyA9ICcsJyxcbiAgbGluZVNlcGFyYXRvcjogc3RyaW5nID0gJ1xcclxcbicsXG4pOiB2b2lkIHtcbiAgZG93bmxvYWRGaWxlKGAke2ZpbGVCYXNlTmFtZX0uY3N2YCwgY29udmVydE9iamVjdHNUb0NTVihvYmplY3RzLCBrZXlTZXBhcmF0b3IsIGxpbmVTZXBhcmF0b3IpLCAndGV4dC9jc3YnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdHMgdG8gSlNPTiBmb3JtYXQgYW5kIGRvd25sb2FkIHRvIGZpbGUgd2l0aCAuanNvblxuICogZXh0ZW5zaW9uIGFwcGVuZGVkIHRvIHRoZSBwcm92aWRlZCBiYXNlIGZpbGUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gZmlsZUJhc2VOYW1lIGJhc2UgbmFtZSBvZiBkZXN0aW5hdGlvbiBmaWxlXG4gKiBAcGFyYW0gb2JqZWN0cyBvYmplY3QgYXJyYXkgdG8gYmUgY29udmVydGVkIHRvIEpTT04gZm9ybWF0XG4gKiAgIHByaW9yIHRvIHdyaXRpbmcgdG8gZG93bmxvYWQgZGVzdGluYXRpb25cbiAqIEBwYXJhbSBpbmRlbnQgb3B0aW9uYWwgcGFyYW1ldGVyIGluZGljYXRpbmcgc3BhY2UgaW5kZW50YXRpb24gZm9yIHByZXR0eSBvdXRwdXQuIERlZmF1bHQgaXMgMlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRPYmplY3RzVG9KU09OKGZpbGVCYXNlTmFtZTogc3RyaW5nLCBvYmplY3RzOiBhbnlbXSwgaW5kZW50OiBudW1iZXIgPSAyKTogdm9pZCB7XG4gIGRvd25sb2FkRmlsZShgJHtmaWxlQmFzZU5hbWV9Lmpzb25gLCBmb3JtYXRKU09OKG9iamVjdHMsIGluZGVudCksICdhcHBsaWNhdGlvbi9qc29uJyk7XG59XG5cbi8qKlxuICogRG93bmxvYWQgc3RyaW5nIGNvbnRlbnQgdG8gdGhlIHNwZWNpZmllZCBmaWxlIHdpdGggZGVzaXJlZCBtaW1lIHR5cGUuXG4gKlxuICogQHBhcmFtIGZpbGVOYW1lIGZ1bGwgZmlsZW5hbWUgKGluY2x1ZGluZyBhcHByb3ByaWF0ZSBleHRlbnNpb24pIG9mIGRlc3RpbmF0aW9uIGZpbGVcbiAqIEBwYXJhbSBjb250ZW50cyBzdHJpbmcgY29udGVudHMgdG8gYmUgd3JpdHRlbiB0byBkb3dubG9hZCBkZXN0aW5hdGlvblxuICogQHBhcmFtIG1pbWVUeXBlIG1pbWUgdHlwZSBhcHByb3ByaWF0ZSB0byBmaWxlIGNvbnRlbnQgdG8gc3VwcG9ydCBjb25zdW1wdGlvbiBvZiBkZXN0aW5hdGlvbiBmaWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUoZmlsZU5hbWU6IHN0cmluZywgY29udGVudHM6IHN0cmluZywgbWltZVR5cGU6IHN0cmluZyA9ICd0ZXh0L3BsYWluJyk6IHZvaWQge1xuICBpZiAoIWZpbGVOYW1lIHx8ICFjb250ZW50cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENyZWF0ZSBibG9iIG9iamVjdCBhbmQgYXNzaWduIFVSTFxuICBjb25zdCBibG9iOiBCbG9iID0gbmV3IEJsb2IoW2NvbnRlbnRzXSwgeyB0eXBlOiBtaW1lVHlwZSB9KTtcbiAgY29uc3QgdXJsOiBzdHJpbmcgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAvLyBDb25zdHJ1Y3QgYW5jaG9yIGZvciBVUkwsIGFwcGVuZCB0byBET00sIGNsaWNrIGFuZCBjbGVhbnVwLlxuICBjb25zdCBhOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZU5hbWUpO1xuICBhLmhyZWYgPSB1cmw7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gIGEuY2xpY2soKTtcbiAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbn1cbiJdfQ==