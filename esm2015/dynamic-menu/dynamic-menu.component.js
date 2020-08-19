/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    /** @type {?|undefined} */
    IMenuItem.prototype.action;
}
/**
 * @record
 */
export function ITdDynamicMenuLinkClickEvent() { }
if (false) {
    /** @type {?} */
    ITdDynamicMenuLinkClickEvent.prototype.text;
    /** @type {?} */
    ITdDynamicMenuLinkClickEvent.prototype.action;
}
export class TdDynamicMenuComponent {
    constructor() {
        this.itemClicked = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitClicked(event) {
        this.itemClicked.emit(event);
    }
}
TdDynamicMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-menu',
                template: "<button *ngIf=\"!trigger.text\" mat-icon-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n</button>\n<button *ngIf=\"trigger.text\" mat-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n  <span *ngIf=\"trigger.text\">\n    {{ trigger.text }}\n  </span>\n</button>\n\n<td-dynamic-menu-item #menu [items]=\"items\" (itemClicked)=\"emitClicked($event)\"></td-dynamic-menu-item>\n",
                styles: [""]
            }] }
];
TdDynamicMenuComponent.propDecorators = {
    trigger: [{ type: Input }],
    items: [{ type: Input }],
    itemClicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TdDynamicMenuComponent.prototype.trigger;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.itemClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2R5bmFtaWMtbWVudS8iLCJzb3VyY2VzIjpbImR5bmFtaWMtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFdkUsa0NBTUM7OztJQUxDLDBCQUFZOztJQUNaLDRCQUFjOztJQUNkLDRCQUFjOztJQUNkLCtCQUFpQjs7SUFDakIsbUNBQXVCOzs7OztBQUd6QiwrQkFjQzs7O0lBYkMsdUJBQVk7O0lBQ1oseUJBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsNEJBQWlCOztJQUNqQixnQ0FBdUI7O0lBRXZCLDZCQUF1Qjs7SUFFdkIseUJBQWM7O0lBRWQsMkJBQWlCOztJQUVqQiwyQkFBZ0I7Ozs7O0FBSWxCLGtEQUdDOzs7SUFGQyw0Q0FBYTs7SUFDYiw4Q0FBZTs7QUFRakIsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQVNZLGdCQUFXLEdBQStDLElBQUksWUFBWSxFQUFnQyxDQUFDO0lBS3ZILENBQUM7Ozs7O0lBSEMsV0FBVyxDQUFDLEtBQW1DO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUUzQix1MUJBQTRDOzthQUM3Qzs7O3NCQUVFLEtBQUs7b0JBQ0wsS0FBSzswQkFFTCxNQUFNOzs7O0lBSFAseUNBQStCOztJQUMvQix1Q0FBNEI7O0lBRTVCLDZDQUFxSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbnVUcmlnZ2VyIHtcbiAgaWQ/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGlkZW50aWZpZXJcbiAgdGV4dD86IHN0cmluZzsgLy8gVGV4dCB0byBkaXNwbGF5IG9uIGJ1dHRvblxuICBpY29uPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpY29uXG4gIHN2Z0ljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIHN2Z0ljb25cbiAgaWNvbkNsYXNzZXM/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgc3R5bGluZyBjbGFzc2VzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbnVJdGVtIHtcbiAgaWQ/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGlkZW50aWZpZXJcbiAgdGV4dDogc3RyaW5nOyAvLyBEaXNwbGF5IHRleHRcbiAgaWNvbj86IHN0cmluZzsgLy8gT3B0aW9uYWwgaWNvblxuICBzdmdJY29uPzogc3RyaW5nOyAvLyBPcHRpb25hbCBzdmdJY29uXG4gIGljb25DbGFzc2VzPzogc3RyaW5nW107IC8vIE9wdGlvbmFsIHN0eWxpbmcgY2xhc3Nlc1xuICAvLyBGb3Igc3VibWVudSB0cmlnZ2VyIGl0ZW1zXG4gIGNoaWxkcmVuPzogSU1lbnVJdGVtW107IC8vIExpc3Qgb2YgaXRlbXMgdG8gYmUgZGlzcGxheWVkIGluIHN1Ym1lbnVcbiAgLy8gRm9yIGxpbmsgaXRlbXNcbiAgbGluaz86IHN0cmluZzsgLy8gTGluayByZWYgKHJlbGF0aXZlIG9yIGZ1bGx5IHF1YWxpZmllZCkuIE9wdGlvbmFsIGlmXG4gIC8vIGRlZmluaW5nIGFuIFwiYWN0aW9uXCIgbGlua1xuICBuZXdUYWI/OiBib29sZWFuOyAvLyBJbmRpY2F0ZXMgd2hlcmUgbGluayBzaG91bGQgYmUgb3BlbmVkXG4gIC8vIEZvciBhY3Rpb24gaXRlbXMgKHNpbXBseSBlbWl0cyBjbGljayBldmVudClcbiAgYWN0aW9uPzogc3RyaW5nOyAvLyBWYWx1ZSByZXR1cm5lZCBvbiBjbGljayBldmVudFxufVxuXG4vLyBDbGljayBhY3Rpb24gcGF5bG9hZCBkZXJpdmVkIGZyb20gSU1lbnVJdGVtXG5leHBvcnQgaW50ZXJmYWNlIElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1keW5hbWljLW1lbnUnLFxuICBzdHlsZVVybHM6IFsnZHluYW1pYy1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZER5bmFtaWNNZW51Q29tcG9uZW50IHtcbiAgQElucHV0KCkgdHJpZ2dlcjogSU1lbnVUcmlnZ2VyO1xuICBASW5wdXQoKSBpdGVtczogSU1lbnVJdGVtW107XG5cbiAgQE91dHB1dCgpIGl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8SVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQ+KCk7XG5cbiAgZW1pdENsaWNrZWQoZXZlbnQ6IElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1DbGlja2VkLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=