/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function IMenuTrigger() { }
if (false) {
    /** @type {?|undefined} */
    IMenuTrigger.prototype.id;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.text;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.icon;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.svgIcon;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.iconClasses;
}
/**
 * @record
 */
export function IMenuItem() { }
if (false) {
    /** @type {?|undefined} */
    IMenuItem.prototype.id;
    /** @type {?} */
    IMenuItem.prototype.text;
    /** @type {?|undefined} */
    IMenuItem.prototype.icon;
    /** @type {?|undefined} */
    IMenuItem.prototype.svgIcon;
    /** @type {?|undefined} */
    IMenuItem.prototype.iconClasses;
    /** @type {?|undefined} */
    IMenuItem.prototype.children;
    /** @type {?|undefined} */
    IMenuItem.prototype.link;
    /** @type {?|undefined} */
    IMenuItem.prototype.newTab;
}
export class TdDynamicMenuComponent {
}
TdDynamicMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-menu',
                template: "<button *ngIf=\"!trigger.text\" mat-icon-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n</button>\n<button *ngIf=\"trigger.text\" mat-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n  <span *ngIf=\"trigger.text\">\n    {{ trigger.text }}\n  </span>\n</button>\n\n<td-dynamic-menu-item #menu [items]=\"items\"></td-dynamic-menu-item>\n",
                styles: [""]
            }] }
];
TdDynamicMenuComponent.propDecorators = {
    trigger: [{ type: Input }],
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdDynamicMenuComponent.prototype.trigger;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2R5bmFtaWMtbWVudS8iLCJzb3VyY2VzIjpbImR5bmFtaWMtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELGtDQU1DOzs7SUFMQywwQkFBWTs7SUFDWiw0QkFBYzs7SUFDZCw0QkFBYzs7SUFDZCwrQkFBaUI7O0lBQ2pCLG1DQUF1Qjs7Ozs7QUFHekIsK0JBV0M7OztJQVZDLHVCQUFZOztJQUNaLHlCQUFhOztJQUNiLHlCQUFjOztJQUNkLDRCQUFpQjs7SUFDakIsZ0NBQXVCOztJQUV2Qiw2QkFBdUI7O0lBRXZCLHlCQUFjOztJQUNkLDJCQUFpQjs7QUFRbkIsTUFBTSxPQUFPLHNCQUFzQjs7O1lBTGxDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUUzQixpekJBQTRDOzthQUM3Qzs7O3NCQUVFLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLHlDQUErQjs7SUFDL0IsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZW51VHJpZ2dlciB7XG4gIGlkPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpZGVudGlmaWVyXG4gIHRleHQ/OiBzdHJpbmc7IC8vIFRleHQgdG8gZGlzcGxheSBvbiBidXR0b25cbiAgaWNvbj86IHN0cmluZzsgLy8gT3B0aW9uYWwgaWNvblxuICBzdmdJY29uPzogc3RyaW5nOyAvLyBPcHRpb25hbCBzdmdJY29uXG4gIGljb25DbGFzc2VzPzogc3RyaW5nW107IC8vIE9wdGlvbmFsIHN0eWxpbmcgY2xhc3Nlc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNZW51SXRlbSB7XG4gIGlkPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpZGVudGlmaWVyXG4gIHRleHQ6IHN0cmluZzsgLy8gRGlzcGxheSB0ZXh0XG4gIGljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGljb25cbiAgc3ZnSWNvbj86IHN0cmluZzsgLy8gT3B0aW9uYWwgc3ZnSWNvblxuICBpY29uQ2xhc3Nlcz86IHN0cmluZ1tdOyAvLyBPcHRpb25hbCBzdHlsaW5nIGNsYXNzZXNcbiAgLy8gRm9yIHN1Ym1lbnUgdHJpZ2dlciBpdGVtc1xuICBjaGlsZHJlbj86IElNZW51SXRlbVtdOyAvLyBMaXN0IG9mIGl0ZW1zIHRvIGJlIGRpc3BsYXllZCBpbiBzdWJtZW51XG4gIC8vIEZvciBsaW5rIGl0ZW1zXG4gIGxpbms/OiBzdHJpbmc7IC8vIExpbmsgcmVmIChyZWxhdGl2ZSBvciBmdWxseSBxdWFsaWZpZWQpXG4gIG5ld1RhYj86IGJvb2xlYW47IC8vIEluZGljYXRlcyB3aGVyZSBsaW5rIHNob3VsZCBiZSBvcGVuZWRcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZHluYW1pYy1tZW51JyxcbiAgc3R5bGVVcmxzOiBbJ2R5bmFtaWMtbWVudS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1tZW51LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREeW5hbWljTWVudUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRyaWdnZXI6IElNZW51VHJpZ2dlcjtcbiAgQElucHV0KCkgaXRlbXM6IElNZW51SXRlbVtdO1xufVxuIl19