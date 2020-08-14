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
var TdDynamicMenuComponent = /** @class */ (function () {
    function TdDynamicMenuComponent() {
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
    return TdDynamicMenuComponent;
}());
export { TdDynamicMenuComponent };
if (false) {
    /** @type {?} */
    TdDynamicMenuComponent.prototype.trigger;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2R5bmFtaWMtbWVudS8iLCJzb3VyY2VzIjpbImR5bmFtaWMtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELGtDQU1DOzs7SUFMQywwQkFBWTs7SUFDWiw0QkFBYzs7SUFDZCw0QkFBYzs7SUFDZCwrQkFBaUI7O0lBQ2pCLG1DQUF1Qjs7Ozs7QUFHekIsK0JBV0M7OztJQVZDLHVCQUFZOztJQUNaLHlCQUFhOztJQUNiLHlCQUFjOztJQUNkLDRCQUFpQjs7SUFDakIsZ0NBQXVCOztJQUV2Qiw2QkFBdUI7O0lBRXZCLHlCQUFjOztJQUNkLDJCQUFpQjs7QUFHbkI7SUFBQTtJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUUzQixpekJBQTRDOztpQkFDN0M7OzswQkFFRSxLQUFLO3dCQUNMLEtBQUs7O0lBQ1IsNkJBQUM7Q0FBQSxBQVJELElBUUM7U0FIWSxzQkFBc0I7OztJQUNqQyx5Q0FBK0I7O0lBQy9CLHVDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWVudVRyaWdnZXIge1xuICBpZD86IHN0cmluZzsgLy8gT3B0aW9uYWwgaWRlbnRpZmllclxuICB0ZXh0Pzogc3RyaW5nOyAvLyBUZXh0IHRvIGRpc3BsYXkgb24gYnV0dG9uXG4gIGljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGljb25cbiAgc3ZnSWNvbj86IHN0cmluZzsgLy8gT3B0aW9uYWwgc3ZnSWNvblxuICBpY29uQ2xhc3Nlcz86IHN0cmluZ1tdOyAvLyBPcHRpb25hbCBzdHlsaW5nIGNsYXNzZXNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTWVudUl0ZW0ge1xuICBpZD86IHN0cmluZzsgLy8gT3B0aW9uYWwgaWRlbnRpZmllclxuICB0ZXh0OiBzdHJpbmc7IC8vIERpc3BsYXkgdGV4dFxuICBpY29uPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpY29uXG4gIHN2Z0ljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIHN2Z0ljb25cbiAgaWNvbkNsYXNzZXM/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgc3R5bGluZyBjbGFzc2VzXG4gIC8vIEZvciBzdWJtZW51IHRyaWdnZXIgaXRlbXNcbiAgY2hpbGRyZW4/OiBJTWVudUl0ZW1bXTsgLy8gTGlzdCBvZiBpdGVtcyB0byBiZSBkaXNwbGF5ZWQgaW4gc3VibWVudVxuICAvLyBGb3IgbGluayBpdGVtc1xuICBsaW5rPzogc3RyaW5nOyAvLyBMaW5rIHJlZiAocmVsYXRpdmUgb3IgZnVsbHkgcXVhbGlmaWVkKVxuICBuZXdUYWI/OiBib29sZWFuOyAvLyBJbmRpY2F0ZXMgd2hlcmUgbGluayBzaG91bGQgYmUgb3BlbmVkXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWR5bmFtaWMtbWVudScsXG4gIHN0eWxlVXJsczogWydkeW5hbWljLW1lbnUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtbWVudS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRHluYW1pY01lbnVDb21wb25lbnQge1xuICBASW5wdXQoKSB0cmlnZ2VyOiBJTWVudVRyaWdnZXI7XG4gIEBJbnB1dCgpIGl0ZW1zOiBJTWVudUl0ZW1bXTtcbn1cbiJdfQ==