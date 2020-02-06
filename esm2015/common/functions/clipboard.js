/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Assign a text value to the system clipboard. Note: Due to browser
 * security restrictions, the copy will only succeed if this method
 * is invoked as a result of a user action (eg. user button click).
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcGJvYXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvY29tbW9uLyIsInNvdXJjZXMiOlsiZnVuY3Rpb25zL2NsaXBib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQWE7OztVQUVyQyxZQUFZLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQzVFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXhDLHlDQUF5QztJQUN6QyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7OztVQUdoQixPQUFPLEdBQVksUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFFckQsNEJBQTRCO0lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXhDLHNEQUFzRDtJQUN0RCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBc3NpZ24gYSB0ZXh0IHZhbHVlIHRvIHRoZSBzeXN0ZW0gY2xpcGJvYXJkLiBOb3RlOiBEdWUgdG8gYnJvd3NlclxuICogc2VjdXJpdHkgcmVzdHJpY3Rpb25zLCB0aGUgY29weSB3aWxsIG9ubHkgc3VjY2VlZCBpZiB0aGlzIG1ldGhvZFxuICogaXMgaW52b2tlZCBhcyBhIHJlc3VsdCBvZiBhIHVzZXIgYWN0aW9uIChlZy4gdXNlciBidXR0b24gY2xpY2spLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0ZXh0IHZhbHVlIHRvIGJlIGFzc2lnbmVkIHRvIGNsaXBib2FyZC5cbiAqIEByZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyBzdWNjZXNzL2ZhaWx1cmUgb2YgY29weSBvcGVyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgdGV4dGFyZWEgZWxlbWVudCBhbmQgYXBwZW5kIHRvIERPTVxuICBjb25zdCBmYWtlVGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZha2VUZXh0QXJlYSk7XG5cbiAgLy8gQXNzaWduIHZhbHVlIHRvIGJlIGNvcGllZCB0byBjbGlwYm9hcmRcbiAgZmFrZVRleHRBcmVhLnZhbHVlID0gdmFsdWU7XG4gIGZha2VUZXh0QXJlYS5zZWxlY3QoKTtcblxuICAvLyBDb3B5IHRvIGNsaXBib2FyZFxuICBjb25zdCBzdWNjZXNzOiBib29sZWFuID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblxuICAvLyBSZW1vdmUgdGVtcG9yYXJ5IHRleHRhcmVhXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZmFrZVRleHRBcmVhKTtcblxuICAvLyBSZXR1cm4gYm9vbGVhbiBpbmRpY2F0aW5nIGlmIGV4ZWMgY29tbWFuZCBzdWNjZWVkZWRcbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG4iXX0=