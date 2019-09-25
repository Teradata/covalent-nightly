/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility function to facilitate assigning a text value
 * to the system clipboard.
 * Note: The copy will succeed only if this method is performed
 * as a result of a user action (eg. user clicks a button in
 * the UI). Due to browser security restrictions, this method
 * will not succeed if executed strictly programmatically.
 *
 * @param {?} value text value to be assigned to clipboard.
 * @return {?} boolean indicating success/failure of copy operation.
 */
export function copyToClipboard(value) {
    // Create a temporary textarea element and append to DOM
    /** @type {?} */
    const fakeTextArea = document.createElement('textarea');
    document.body.appendChild(fakeTextArea);
    // Assign value to be copied to clipboard
    fakeTextArea.value = value;
    fakeTextArea.select();
    // Copy to clipboard
    /** @type {?} */
    const success = document.execCommand('copy');
    // Remove temporary textarea
    document.body.removeChild(fakeTextArea);
    // Return boolean indicating if exec command succeeded
    return success;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcGJvYXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vZnVuY3Rpb25zL2NsaXBib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQWE7OztVQUVyQyxZQUFZLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQzVFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXhDLHlDQUF5QztJQUN6QyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7OztVQUdoQixPQUFPLEdBQVksUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFFckQsNEJBQTRCO0lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXhDLHNEQUFzRDtJQUN0RCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGZhY2lsaXRhdGUgYXNzaWduaW5nIGEgdGV4dCB2YWx1ZVxuICogdG8gdGhlIHN5c3RlbSBjbGlwYm9hcmQuXG4gKiBOb3RlOiBUaGUgY29weSB3aWxsIHN1Y2NlZWQgb25seSBpZiB0aGlzIG1ldGhvZCBpcyBwZXJmb3JtZWRcbiAqIGFzIGEgcmVzdWx0IG9mIGEgdXNlciBhY3Rpb24gKGVnLiB1c2VyIGNsaWNrcyBhIGJ1dHRvbiBpblxuICogdGhlIFVJKS4gRHVlIHRvIGJyb3dzZXIgc2VjdXJpdHkgcmVzdHJpY3Rpb25zLCB0aGlzIG1ldGhvZFxuICogd2lsbCBub3Qgc3VjY2VlZCBpZiBleGVjdXRlZCBzdHJpY3RseSBwcm9ncmFtbWF0aWNhbGx5LlxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0ZXh0IHZhbHVlIHRvIGJlIGFzc2lnbmVkIHRvIGNsaXBib2FyZC5cbiAqIEByZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyBzdWNjZXNzL2ZhaWx1cmUgb2YgY29weSBvcGVyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgdGV4dGFyZWEgZWxlbWVudCBhbmQgYXBwZW5kIHRvIERPTVxuICBjb25zdCBmYWtlVGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZha2VUZXh0QXJlYSk7XG5cbiAgLy8gQXNzaWduIHZhbHVlIHRvIGJlIGNvcGllZCB0byBjbGlwYm9hcmRcbiAgZmFrZVRleHRBcmVhLnZhbHVlID0gdmFsdWU7XG4gIGZha2VUZXh0QXJlYS5zZWxlY3QoKTtcblxuICAvLyBDb3B5IHRvIGNsaXBib2FyZFxuICBjb25zdCBzdWNjZXNzOiBib29sZWFuID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblxuICAvLyBSZW1vdmUgdGVtcG9yYXJ5IHRleHRhcmVhXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZmFrZVRleHRBcmVhKTtcblxuICAvLyBSZXR1cm4gYm9vbGVhbiBpbmRpY2F0aW5nIGlmIGV4ZWMgY29tbWFuZCBzdWNjZWVkZWRcbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG4iXX0=