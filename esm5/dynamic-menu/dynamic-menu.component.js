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
var TdDynamicMenuComponent = /** @class */ (function () {
    function TdDynamicMenuComponent() {
        this.itemClicked = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TdDynamicMenuComponent.prototype.emitClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.itemClicked.emit(event);
    };
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
    return TdDynamicMenuComponent;
}());
export { TdDynamicMenuComponent };
if (false) {
    /** @type {?} */
    TdDynamicMenuComponent.prototype.trigger;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.itemClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2R5bmFtaWMtbWVudS8iLCJzb3VyY2VzIjpbImR5bmFtaWMtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFdkUsa0NBTUM7OztJQUxDLDBCQUFZOztJQUNaLDRCQUFjOztJQUNkLDRCQUFjOztJQUNkLCtCQUFpQjs7SUFDakIsbUNBQXVCOzs7OztBQUd6QiwrQkFjQzs7O0lBYkMsdUJBQVk7O0lBQ1oseUJBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsNEJBQWlCOztJQUNqQixnQ0FBdUI7O0lBRXZCLDZCQUF1Qjs7SUFFdkIseUJBQWM7O0lBRWQsMkJBQWlCOztJQUVqQiwyQkFBZ0I7Ozs7O0FBSWxCLGtEQUdDOzs7SUFGQyw0Q0FBYTs7SUFDYiw4Q0FBZTs7QUFHakI7SUFBQTtRQVNZLGdCQUFXLEdBQStDLElBQUksWUFBWSxFQUFnQyxDQUFDO0lBS3ZILENBQUM7Ozs7O0lBSEMsNENBQVc7Ozs7SUFBWCxVQUFZLEtBQW1DO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUUzQix1MUJBQTRDOztpQkFDN0M7OzswQkFFRSxLQUFLO3dCQUNMLEtBQUs7OEJBRUwsTUFBTTs7SUFLVCw2QkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLHNCQUFzQjs7O0lBQ2pDLHlDQUErQjs7SUFDL0IsdUNBQTRCOztJQUU1Qiw2Q0FBcUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZW51VHJpZ2dlciB7XG4gIGlkPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpZGVudGlmaWVyXG4gIHRleHQ/OiBzdHJpbmc7IC8vIFRleHQgdG8gZGlzcGxheSBvbiBidXR0b25cbiAgaWNvbj86IHN0cmluZzsgLy8gT3B0aW9uYWwgaWNvblxuICBzdmdJY29uPzogc3RyaW5nOyAvLyBPcHRpb25hbCBzdmdJY29uXG4gIGljb25DbGFzc2VzPzogc3RyaW5nW107IC8vIE9wdGlvbmFsIHN0eWxpbmcgY2xhc3Nlc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNZW51SXRlbSB7XG4gIGlkPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpZGVudGlmaWVyXG4gIHRleHQ6IHN0cmluZzsgLy8gRGlzcGxheSB0ZXh0XG4gIGljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGljb25cbiAgc3ZnSWNvbj86IHN0cmluZzsgLy8gT3B0aW9uYWwgc3ZnSWNvblxuICBpY29uQ2xhc3Nlcz86IHN0cmluZ1tdOyAvLyBPcHRpb25hbCBzdHlsaW5nIGNsYXNzZXNcbiAgLy8gRm9yIHN1Ym1lbnUgdHJpZ2dlciBpdGVtc1xuICBjaGlsZHJlbj86IElNZW51SXRlbVtdOyAvLyBMaXN0IG9mIGl0ZW1zIHRvIGJlIGRpc3BsYXllZCBpbiBzdWJtZW51XG4gIC8vIEZvciBsaW5rIGl0ZW1zXG4gIGxpbms/OiBzdHJpbmc7IC8vIExpbmsgcmVmIChyZWxhdGl2ZSBvciBmdWxseSBxdWFsaWZpZWQpLiBPcHRpb25hbCBpZlxuICAvLyBkZWZpbmluZyBhbiBcImFjdGlvblwiIGxpbmtcbiAgbmV3VGFiPzogYm9vbGVhbjsgLy8gSW5kaWNhdGVzIHdoZXJlIGxpbmsgc2hvdWxkIGJlIG9wZW5lZFxuICAvLyBGb3IgYWN0aW9uIGl0ZW1zIChzaW1wbHkgZW1pdHMgY2xpY2sgZXZlbnQpXG4gIGFjdGlvbj86IHN0cmluZzsgLy8gVmFsdWUgcmV0dXJuZWQgb24gY2xpY2sgZXZlbnRcbn1cblxuLy8gQ2xpY2sgYWN0aW9uIHBheWxvYWQgZGVyaXZlZCBmcm9tIElNZW51SXRlbVxuZXhwb3J0IGludGVyZmFjZSBJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50IHtcbiAgdGV4dDogc3RyaW5nO1xuICBhY3Rpb246IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZHluYW1pYy1tZW51JyxcbiAgc3R5bGVVcmxzOiBbJ2R5bmFtaWMtbWVudS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1tZW51LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREeW5hbWljTWVudUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRyaWdnZXI6IElNZW51VHJpZ2dlcjtcbiAgQElucHV0KCkgaXRlbXM6IElNZW51SXRlbVtdO1xuXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50PigpO1xuXG4gIGVtaXRDbGlja2VkKGV2ZW50OiBJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtQ2xpY2tlZC5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19