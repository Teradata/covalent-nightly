/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
var TdDynamicMenuItemComponent = /** @class */ (function () {
    function TdDynamicMenuItemComponent() {
        this.itemClicked = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TdDynamicMenuItemComponent.prototype.emitClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.itemClicked.emit(event);
    };
    TdDynamicMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-dynamic-menu-item',
                    template: "<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template let-item ngFor [ngForOf]=\"items\">\n    <ng-container *ngIf=\"item.children && item.children.length > 0\">\n      <button mat-menu-item [id]=\"item.id\" [matMenuTriggerFor]=\"menu.childMenu\">\n        <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n        <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n        <span *ngIf=\"item.text\">\n          {{ item.text }}\n        </span>\n      </button>\n      <td-dynamic-menu-item #menu [items]=\"item.children\"></td-dynamic-menu-item>\n    </ng-container>\n    <ng-container *ngIf=\"!item.children || item.children.length === 0\">\n      <td-dynamic-menu-link [item]=\"item\" (itemClicked)=\"emitClicked($event)\"></td-dynamic-menu-link>\n    </ng-container>\n  </ng-template>\n</mat-menu>\n",
                    styles: [""]
                }] }
    ];
    TdDynamicMenuItemComponent.propDecorators = {
        items: [{ type: Input }],
        itemClicked: [{ type: Output }],
        childMenu: [{ type: ViewChild, args: ['childMenu', { static: true },] }]
    };
    return TdDynamicMenuItemComponent;
}());
export { TdDynamicMenuItemComponent };
if (false) {
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.itemClicked;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.childMenu;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZHluYW1pYy1tZW51LyIsInNvdXJjZXMiOlsiZHluYW1pYy1tZW51LWl0ZW0vZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHakQ7SUFBQTtRQVFZLGdCQUFXLEdBQStDLElBQUksWUFBWSxFQUFnQyxDQUFDO0lBT3ZILENBQUM7Ozs7O0lBSEMsZ0RBQVc7Ozs7SUFBWCxVQUFZLEtBQW1DO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw4NUJBQWlEOztpQkFFbEQ7Ozt3QkFFRSxLQUFLOzhCQUVMLE1BQU07NEJBRU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBSzFDLGlDQUFDO0NBQUEsQUFmRCxJQWVDO1NBVlksMEJBQTBCOzs7SUFDckMsMkNBQTRCOztJQUU1QixpREFBcUg7O0lBRXJILCtDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IElNZW51SXRlbSwgSVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudCB9IGZyb20gJy4uL2R5bmFtaWMtbWVudS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1keW5hbWljLW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkRHluYW1pY01lbnVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbXM6IElNZW51SXRlbVtdO1xuXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NoaWxkTWVudScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBjaGlsZE1lbnU6IE1hdE1lbnU7XG5cbiAgZW1pdENsaWNrZWQoZXZlbnQ6IElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1DbGlja2VkLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=