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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2R5bmFtaWMtbWVudS8iLCJzb3VyY2VzIjpbImR5bmFtaWMtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHdkUsa0NBTUM7OztJQUxDLDBCQUFZOztJQUNaLDRCQUFjOztJQUNkLDRCQUFjOztJQUNkLCtCQUFpQjs7SUFDakIsbUNBQXVCOzs7OztBQVF6QiwrQkFlQzs7O0lBZEMsdUJBQVk7O0lBQ1oseUJBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsNEJBQWlCOztJQUNqQixnQ0FBdUI7O0lBR3ZCLDZCQUF1Qjs7SUFFdkIseUJBQWM7O0lBQ2QsMkJBQWlCOztJQUdqQiwyQkFBZ0I7Ozs7O0FBSWxCLGtEQUdDOzs7SUFGQyw0Q0FBYTs7SUFDYiw4Q0FBZTs7QUFRakIsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQVNZLGdCQUFXLEdBQStDLElBQUksWUFBWSxFQUFnQyxDQUFDO0lBS3ZILENBQUM7Ozs7O0lBSEMsV0FBVyxDQUFDLEtBQW1DO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUUzQix1MUJBQTRDOzthQUM3Qzs7O3NCQUVFLEtBQUs7b0JBQ0wsS0FBSzswQkFFTCxNQUFNOzs7O0lBSFAseUNBQStCOztJQUMvQix1Q0FBNEI7O0lBRTVCLDZDQUFxSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIFRyaWdnZXIgYnV0dG9uIGxhdW5jaGVzIHRvcCBsZXZlbCBtZW51LiBNdXN0IHNwZWNpZnkgdGV4dCBhbmQvb3IgaWNvbi5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbnVUcmlnZ2VyIHtcbiAgaWQ/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGlkZW50aWZpZXJcbiAgdGV4dD86IHN0cmluZzsgLy8gVGV4dCB0byBkaXNwbGF5IG9uIGJ1dHRvblxuICBpY29uPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpY29uXG4gIHN2Z0ljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIHN2Z0ljb25cbiAgaWNvbkNsYXNzZXM/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgc3R5bGluZyBjbGFzc2VzXG59XG5cbi8vIE1lbnUgaXRlbXMgY2FuIHNlcnZlIG9uZSBvZiBmb3VyIHJvbGVzOlxuLy8gLSBTdWJtZW51IHRyaWdnZXIgKGhhcyBjaGlsZHJlbiBwcm9wZXJ0eSlcbi8vIC0gVVJMIGxpbmsgKGhhcyBsaW5rIHByb3BlcnR5KVxuLy8gLSBBY3Rpb24gbGluayAoaGFzIGFjdGlvbiBwcm9wZXJ0eSlcbi8vIC0gR3JvdXBpbmcgbGFiZWwgKGhhcyBuZWl0aGVyIGNoaWxkcmVuLCBsaW5rIG9yIGFjdGlvbiBwcm9wZXJ0aWVzKVxuZXhwb3J0IGludGVyZmFjZSBJTWVudUl0ZW0ge1xuICBpZD86IHN0cmluZzsgLy8gT3B0aW9uYWwgaWRlbnRpZmllclxuICB0ZXh0OiBzdHJpbmc7IC8vIERpc3BsYXkgdGV4dFxuICBpY29uPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpY29uXG4gIHN2Z0ljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIHN2Z0ljb25cbiAgaWNvbkNsYXNzZXM/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgc3R5bGluZyBjbGFzc2VzXG4gIC8vIElmIGNoaWxkcmVuIHByb3ZpZGVkLCBpdGVtIGlzIGEgc3VibWVudSB0cmlnZ2VyXG4gIC8vIFJlcHJlc2VudHMgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdWJtZW51XG4gIGNoaWxkcmVuPzogSU1lbnVJdGVtW107XG4gIC8vIElmIGxpbmsgcHJvdmlkZWQsIGl0ZW0gaXMgYSBVUkwgbGlua1xuICBsaW5rPzogc3RyaW5nOyAvLyBocmVmIChyZWxhdGl2ZSBvciBmdWxseSBxdWFsaWZpZWQpLlxuICBuZXdUYWI/OiBib29sZWFuOyAvLyBJbmRpY2F0ZXMgd2hlcmUgVVJMIHNob3VsZCBiZSBkaXNwbGF5ZWQsIGN1cnJlbnQgb3IgbmV3IGJyb3dzZXIgdGFiXG4gIC8vIElmIGFjdGlvbiBwcm92aWRlZCwgaXRlbSBpcyBhbiBhY3Rpb24gbGlua1xuICAvLyBBIGNsaWNrIG9uIHRoaXMgaXRlbSB3aWxsIGVtaXQgaXRlbUNsaWNrZWQgZXZlbnRcbiAgYWN0aW9uPzogc3RyaW5nO1xufVxuXG4vLyBDbGljayBhY3Rpb24gZXZlbnQgcGF5bG9hZCBkZXJpdmVkIGZyb20gSU1lbnVJdGVtXG5leHBvcnQgaW50ZXJmYWNlIElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1keW5hbWljLW1lbnUnLFxuICBzdHlsZVVybHM6IFsnZHluYW1pYy1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZER5bmFtaWNNZW51Q29tcG9uZW50IHtcbiAgQElucHV0KCkgdHJpZ2dlcjogSU1lbnVUcmlnZ2VyO1xuICBASW5wdXQoKSBpdGVtczogSU1lbnVJdGVtW107XG5cbiAgQE91dHB1dCgpIGl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8SVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQ+KCk7XG5cbiAgZW1pdENsaWNrZWQoZXZlbnQ6IElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1DbGlja2VkLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=