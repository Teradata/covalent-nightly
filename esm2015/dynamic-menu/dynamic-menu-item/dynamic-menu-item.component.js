/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
export class TdDynamicMenuItemComponent {
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
if (false) {
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.childMenu;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZHluYW1pYy1tZW51LyIsInNvdXJjZXMiOlsiZHluYW1pYy1tZW51LWl0ZW0vZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBT2pELE1BQU0sT0FBTywwQkFBMEI7OztZQUx0QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsNnlDQUFpRDs7YUFFbEQ7OztvQkFFRSxLQUFLO3dCQUNMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBRHhDLDJDQUE0Qjs7SUFDNUIsK0NBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTWVudUl0ZW0gfSBmcm9tICcuLi9keW5hbWljLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdE1lbnUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZHluYW1pYy1tZW51LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLW1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZER5bmFtaWNNZW51SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBJTWVudUl0ZW1bXTtcbiAgQFZpZXdDaGlsZCgnY2hpbGRNZW51JywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGNoaWxkTWVudTogTWF0TWVudTtcbn1cbiJdfQ==