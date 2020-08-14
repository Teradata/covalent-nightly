/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
var TdDynamicMenuItemComponent = /** @class */ (function () {
    function TdDynamicMenuItemComponent() {
    }
    TdDynamicMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-dynamic-menu-item',
                    template: "<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template let-item ngFor [ngForOf]=\"items\">\n    <ng-container *ngIf=\"item.children && item.children.length > 0\">\n      <button mat-menu-item [id]=\"item.id\" [matMenuTriggerFor]=\"menu.childMenu\">\n        <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n        <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n        <span *ngIf=\"item.text\">\n          {{ item.text }}\n        </span>\n      </button>\n      <td-dynamic-menu-item #menu [items]=\"item.children\"></td-dynamic-menu-item>\n    </ng-container>\n    <ng-container *ngIf=\"!item.children || item.children.length === 0\">\n      <a class=\"new-tab\" mat-menu-item [id]=\"item.id\" [href]=\"item.link\" [target]=\"item.newTab ? '_blank' : '_self'\">\n        <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n        <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n        <span *ngIf=\"item.text\">\n          {{ item.text }}\n        </span>\n        <mat-icon *ngIf=\"item.newTab\" class=\"new-tab-icon\">launch</mat-icon>\n      </a>\n    </ng-container>\n  </ng-template>\n</mat-menu>\n",
                    styles: [".new-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center}.new-tab span{-ms-flex:1;flex:1}.new-tab .new-tab-icon{margin:0 0 0 16px}"]
                }] }
    ];
    TdDynamicMenuItemComponent.propDecorators = {
        items: [{ type: Input }],
        childMenu: [{ type: ViewChild, args: ['childMenu', { static: true },] }]
    };
    return TdDynamicMenuItemComponent;
}());
export { TdDynamicMenuItemComponent };
if (false) {
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.childMenu;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZHluYW1pYy1tZW51LyIsInNvdXJjZXMiOlsiZHluYW1pYy1tZW51LWl0ZW0vZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWpEO0lBQUE7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsNnlDQUFpRDs7aUJBRWxEOzs7d0JBRUUsS0FBSzs0QkFDTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFDMUMsaUNBQUM7Q0FBQSxBQVJELElBUUM7U0FIWSwwQkFBMEI7OztJQUNyQywyQ0FBNEI7O0lBQzVCLCtDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU1lbnVJdGVtIH0gZnJvbSAnLi4vZHluYW1pYy1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWR5bmFtaWMtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGREeW5hbWljTWVudUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtczogSU1lbnVJdGVtW107XG4gIEBWaWV3Q2hpbGQoJ2NoaWxkTWVudScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBjaGlsZE1lbnU6IE1hdE1lbnU7XG59XG4iXX0=