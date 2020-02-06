/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Read file as UTF-8 text. Return string contents on read completion.
 *
 * @param {?} file filename or File object
 * @return {?} promise that resolves to file content string
 */
export function readFile(file) {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    function (resolve) {
        /** @type {?} */
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (/**
         * @return {?}
         */
        function () {
            resolve((/** @type {?} */ (reader.result)));
        });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQVU7SUFDakMsT0FBTyxJQUFJLE9BQU87Ozs7SUFBUyxVQUFDLE9BQWdDOztZQUNwRCxNQUFNLEdBQWUsSUFBSSxVQUFVLEVBQUU7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLE1BQU07OztRQUFHO1lBQ2QsT0FBTyxDQUFDLG1CQUFRLE1BQU0sQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFkIGZpbGUgYXMgVVRGLTggdGV4dC4gUmV0dXJuIHN0cmluZyBjb250ZW50cyBvbiByZWFkIGNvbXBsZXRpb24uXG4gKlxuICogQHBhcmFtIGZpbGUgZmlsZW5hbWUgb3IgRmlsZSBvYmplY3RcbiAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBmaWxlIGNvbnRlbnQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZShmaWxlOiBGaWxlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlLCAnVVRGLTgnKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSg8c3RyaW5nPnJlYWRlci5yZXN1bHQpO1xuICAgIH07XG4gIH0pO1xufVxuIl19