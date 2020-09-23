/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
export class TdDynamicMenuItemComponent {
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
TdDynamicMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-menu-item',
                template: "<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template let-item let-index=\"index\" ngFor [ngForOf]=\"items\">\n    <ng-container *ngIf=\"item.children && item.children.length > 0\">\n      <button mat-menu-item [id]=\"item.id\" [matMenuTriggerFor]=\"menu.childMenu\">\n        <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n        <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n        <span *ngIf=\"item.text\">\n          {{ item.text }}\n        </span>\n      </button>\n      <td-dynamic-menu-item #menu [items]=\"item.children\"></td-dynamic-menu-item>\n    </ng-container>\n    <ng-container *ngIf=\"!item.children || item.children.length === 0\">\n      <ng-container *ngIf=\"!item.link && !item.action\">\n        <mat-divider class=\"group-divider\" *ngIf=\"index > 0\"></mat-divider>\n        <div class=\"group-label text-sm\">{{ item.text }}</div>\n      </ng-container>\n      <ng-container *ngIf=\"item.link || item.action\">\n        <div mat-menu-item class=\"paddin-none\">\n          <td-dynamic-menu-link [item]=\"item\" (itemClicked)=\"emitClicked($event)\"></td-dynamic-menu-link>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</mat-menu>\n",
                styles: [".group-divider{margin:8px}.group-label{padding:16px}.paddin-none{padding:0}"]
            }] }
];
TdDynamicMenuItemComponent.propDecorators = {
    items: [{ type: Input }],
    itemClicked: [{ type: Output }],
    childMenu: [{ type: ViewChild, args: ['childMenu', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.itemClicked;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.childMenu;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZHluYW1pYy1tZW51LyIsInNvdXJjZXMiOlsiZHluYW1pYy1tZW51LWl0ZW0vZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFRakQsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQVFZLGdCQUFXLEdBQStDLElBQUksWUFBWSxFQUFnQyxDQUFDO0lBT3ZILENBQUM7Ozs7O0lBSEMsV0FBVyxDQUFDLEtBQW1DO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyw4eUNBQWlEOzthQUVsRDs7O29CQUVFLEtBQUs7MEJBRUwsTUFBTTt3QkFFTixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQUp4QywyQ0FBNEI7O0lBRTVCLGlEQUFxSDs7SUFFckgsK0NBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgSU1lbnVJdGVtLCBJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50IH0gZnJvbSAnLi4vZHluYW1pYy1tZW51LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWR5bmFtaWMtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGREeW5hbWljTWVudUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtczogSU1lbnVJdGVtW107XG5cbiAgQE91dHB1dCgpIGl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8SVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnY2hpbGRNZW51JywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGNoaWxkTWVudTogTWF0TWVudTtcblxuICBlbWl0Q2xpY2tlZChldmVudDogSVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUNsaWNrZWQuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==