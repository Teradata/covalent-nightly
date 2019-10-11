/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
/**
 * @record
 */
export function ITdLinkGroup() { }
if (false) {
    /** @type {?|undefined} */
    ITdLinkGroup.prototype.name;
    /** @type {?} */
    ITdLinkGroup.prototype.links;
}
/**
 * @record
 */
export function ITdLink() { }
if (false) {
    /** @type {?} */
    ITdLink.prototype.label;
    /** @type {?} */
    ITdLink.prototype.linkTo;
    /** @type {?|undefined} */
    ITdLink.prototype.openInNewTab;
    /** @type {?|undefined} */
    ITdLink.prototype.icon;
    /** @type {?|undefined} */
    ITdLink.prototype.show;
    /** @type {?|undefined} */
    ITdLink.prototype.fontSet;
}
/** @type {?} */
let nextUniqueId = 0;
export class TdNavLinksComponent {
    constructor() {
        this._uniqueId = `td-nav-links-${++nextUniqueId}`;
        this.id = this._uniqueId;
        this.afterClick = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    linkClicked(link) {
        this.afterClick.emit(link);
    }
}
TdNavLinksComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-nav-links',
                template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-linkGroup let-indexGroup=\"index\">\n    <td-expansion-panel\n      *ngIf=\"linkGroup.name && linkGroup.links.length\"\n      class=\"td-nav-group\"\n      [sublabel]=\"linkGroup.name\"\n      [expand]=\"true\"\n    >\n      <mat-divider></mat-divider>\n      <ng-template [ngTemplateOutlet]=\"links\"></ng-template>\n    </td-expansion-panel>\n    <ng-template *ngIf=\"!linkGroup.name && linkGroup.links.length\" [ngTemplateOutlet]=\"links\"></ng-template>\n    <ng-template #links>\n      <ng-template ngFor [ngForOf]=\"linkGroup.links\" let-link let-indexLink=\"index\">\n        <a\n          mat-list-item\n          *ngIf=\"link.linkTo.href && (link.show === undefined || link.show)\"\n          [href]=\"link.linkTo.href\"\n          [target]=\"link.openInNewTab ? '_blank' : '_self'\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n\n        <a\n          mat-list-item\n          *ngIf=\"link.linkTo.routerLink && (link.show === undefined || link.show)\"\n          [routerLink]=\"link.linkTo.routerLink\"\n          [target]=\"link.openInNewTab ? '_blank' : null\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n      </ng-template>\n    </ng-template>\n  </ng-template>\n</mat-nav-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block}:host .mat-nav-list.mat-list-base{padding-top:2px}:host .mat-icon{margin-right:0}"]
            }] }
];
TdNavLinksComponent.propDecorators = {
    id: [{ type: Input }],
    links: [{ type: Input }],
    afterClick: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavLinksComponent.prototype._uniqueId;
    /** @type {?} */
    TdNavLinksComponent.prototype.id;
    /** @type {?} */
    TdNavLinksComponent.prototype.links;
    /** @type {?} */
    TdNavLinksComponent.prototype.afterClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL25hdi1saW5rcy8iLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFaEcsa0NBR0M7OztJQUZDLDRCQUFjOztJQUNkLDZCQUFpQjs7Ozs7QUFHbkIsNkJBT0M7OztJQU5DLHdCQUFjOztJQUNkLHlCQUEyRDs7SUFDM0QsK0JBQXVCOztJQUN2Qix1QkFBYzs7SUFDZCx1QkFBZTs7SUFDZiwwQkFBaUI7OztJQUdmLFlBQVksR0FBVyxDQUFDO0FBUTVCLE1BQU0sT0FBTyxtQkFBbUI7SUFOaEM7UUFPVSxjQUFTLEdBQVcsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFFcEQsT0FBRSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFM0IsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBSzVFLENBQUM7Ozs7O0lBSEMsV0FBVyxDQUFDLElBQWE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixveERBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztpQkFJRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsTUFBTTs7Ozs7OztJQUpQLHdDQUE2RDs7SUFFN0QsaUNBQXFDOztJQUNyQyxvQ0FBK0I7O0lBQy9CLHlDQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZExpbmtHcm91cCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGxpbmtzOiBJVGRMaW5rW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTGluayB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGxpbmtUbzogeyBocmVmOiBzdHJpbmcgfSB8IHsgcm91dGVyTGluaz86IHN0cmluZyB8IGFueVtdIH07XG4gIG9wZW5Jbk5ld1RhYj86IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIHNob3c/OiBib29sZWFuO1xuICBmb250U2V0Pzogc3RyaW5nO1xufVxuXG5sZXQgbmV4dFVuaXF1ZUlkOiBudW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXYtbGlua3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LWxpbmtzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LWxpbmtzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdkxpbmtzQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfdW5pcXVlSWQ6IHN0cmluZyA9IGB0ZC1uYXYtbGlua3MtJHsrK25leHRVbmlxdWVJZH1gO1xuXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSB0aGlzLl91bmlxdWVJZDtcbiAgQElucHV0KCkgbGlua3M6IElUZExpbmtHcm91cFtdO1xuICBAT3V0cHV0KCkgYWZ0ZXJDbGljazogRXZlbnRFbWl0dGVyPElUZExpbms+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGRMaW5rPigpO1xuXG4gIGxpbmtDbGlja2VkKGxpbms6IElUZExpbmspOiB2b2lkIHtcbiAgICB0aGlzLmFmdGVyQ2xpY2suZW1pdChsaW5rKTtcbiAgfVxufVxuIl19