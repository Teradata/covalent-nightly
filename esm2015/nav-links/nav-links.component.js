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
    /**
     * @param {?} link
     * @return {?}
     */
    getHref(link) {
        return link.linkTo && ((/** @type {?} */ (link.linkTo))).href;
    }
    /**
     * @param {?} link
     * @return {?}
     */
    getRouterLink(link) {
        return link.linkTo && ((/** @type {?} */ (link.linkTo))).routerLink;
    }
}
TdNavLinksComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-nav-links',
                template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-linkGroup let-indexGroup=\"index\">\n    <td-expansion-panel\n      *ngIf=\"linkGroup.name && linkGroup.links.length\"\n      class=\"td-nav-group\"\n      [sublabel]=\"linkGroup.name\"\n      [expand]=\"true\"\n    >\n      <mat-divider></mat-divider>\n      <ng-template [ngTemplateOutlet]=\"links\"></ng-template>\n    </td-expansion-panel>\n    <ng-template *ngIf=\"!linkGroup.name && linkGroup.links.length\" [ngTemplateOutlet]=\"links\"></ng-template>\n    <ng-template #links>\n      <ng-template ngFor [ngForOf]=\"linkGroup.links\" let-link let-indexLink=\"index\">\n        <a\n          mat-list-item\n          *ngIf=\"getHref(link) && (link.show === undefined || link.show)\"\n          [href]=\"getHref(link)\"\n          [target]=\"link.openInNewTab ? '_blank' : '_self'\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n\n        <a\n          mat-list-item\n          *ngIf=\"getRouterLink(link) && (link.show === undefined || link.show)\"\n          [routerLink]=\"getRouterLink(link)\"\n          [target]=\"link.openInNewTab ? '_blank' : null\"\n          id=\"{{ id }}-{{ indexGroup }}-{{ indexLink }}\"\n          class=\"td-nav-link\"\n          (click)=\"linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.fontSet\">{{ link.icon }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n        </a>\n      </ng-template>\n    </ng-template>\n  </ng-template>\n</mat-nav-list>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL25hdi1saW5rcy8iLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFaEcsa0NBR0M7OztJQUZDLDRCQUFjOztJQUNkLDZCQUFpQjs7Ozs7QUFHbkIsNkJBT0M7OztJQU5DLHdCQUFjOztJQUNkLHlCQUErRDs7SUFDL0QsK0JBQXVCOztJQUN2Qix1QkFBYzs7SUFDZCx1QkFBZTs7SUFDZiwwQkFBaUI7OztJQUdmLFlBQVksR0FBVyxDQUFDO0FBUTVCLE1BQU0sT0FBTyxtQkFBbUI7SUFOaEM7UUFPVSxjQUFTLEdBQVcsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFFcEQsT0FBRSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFM0IsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBYTVFLENBQUM7Ozs7O0lBWEMsV0FBVyxDQUFDLElBQWE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQWE7UUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsbUJBQW9DLElBQUksQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNyRixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix3d0RBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztpQkFJRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsTUFBTTs7Ozs7OztJQUpQLHdDQUE2RDs7SUFFN0QsaUNBQXFDOztJQUNyQyxvQ0FBK0I7O0lBQy9CLHlDQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZExpbmtHcm91cCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGxpbmtzOiBJVGRMaW5rW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTGluayB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGxpbmtUbzogeyBocmVmPzogc3RyaW5nIH0gfCB7IHJvdXRlckxpbms/OiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICBvcGVuSW5OZXdUYWI/OiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICBzaG93PzogYm9vbGVhbjtcbiAgZm9udFNldD86IHN0cmluZztcbn1cblxubGV0IG5leHRVbmlxdWVJZDogbnVtYmVyID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2LWxpbmtzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1saW5rcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi1saW5rcy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZMaW5rc0NvbXBvbmVudCB7XG4gIHByaXZhdGUgX3VuaXF1ZUlkOiBzdHJpbmcgPSBgdGQtbmF2LWxpbmtzLSR7KytuZXh0VW5pcXVlSWR9YDtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5fdW5pcXVlSWQ7XG4gIEBJbnB1dCgpIGxpbmtzOiBJVGRMaW5rR3JvdXBbXTtcbiAgQE91dHB1dCgpIGFmdGVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxJVGRMaW5rPiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkTGluaz4oKTtcblxuICBsaW5rQ2xpY2tlZChsaW5rOiBJVGRMaW5rKTogdm9pZCB7XG4gICAgdGhpcy5hZnRlckNsaWNrLmVtaXQobGluayk7XG4gIH1cblxuICBnZXRIcmVmKGxpbms6IElUZExpbmspOiBzdHJpbmcge1xuICAgIHJldHVybiBsaW5rLmxpbmtUbyAmJiAoPHsgaHJlZj86IHN0cmluZyB9PmxpbmsubGlua1RvKS5ocmVmO1xuICB9XG5cbiAgZ2V0Um91dGVyTGluayhsaW5rOiBJVGRMaW5rKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIHJldHVybiBsaW5rLmxpbmtUbyAmJiAoPHsgcm91dGVyTGluaz86IHN0cmluZyB8IHN0cmluZ1tdIH0+bGluay5saW5rVG8pLnJvdXRlckxpbms7XG4gIH1cbn1cbiJdfQ==