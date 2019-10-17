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
var nextUniqueId = 0;
var TdNavLinksComponent = /** @class */ (function () {
    function TdNavLinksComponent() {
        this._uniqueId = "td-nav-links-" + ++nextUniqueId;
        this.id = this._uniqueId;
        this.afterClick = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    TdNavLinksComponent.prototype.linkClicked = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.afterClick.emit(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    TdNavLinksComponent.prototype.getHref = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        return link.linkTo && ((/** @type {?} */ (link.linkTo))).href;
    };
    /**
     * @param {?} link
     * @return {?}
     */
    TdNavLinksComponent.prototype.getRouterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        return link.linkTo && ((/** @type {?} */ (link.linkTo))).routerLink;
    };
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
    return TdNavLinksComponent;
}());
export { TdNavLinksComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL25hdi1saW5rcy8iLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFaEcsa0NBR0M7OztJQUZDLDRCQUFjOztJQUNkLDZCQUFpQjs7Ozs7QUFHbkIsNkJBT0M7OztJQU5DLHdCQUFjOztJQUNkLHlCQUErRDs7SUFDL0QsK0JBQXVCOztJQUN2Qix1QkFBYzs7SUFDZCx1QkFBZTs7SUFDZiwwQkFBaUI7OztJQUdmLFlBQVksR0FBVyxDQUFDO0FBRTVCO0lBQUE7UUFPVSxjQUFTLEdBQVcsa0JBQWdCLEVBQUUsWUFBYyxDQUFDO1FBRXBELE9BQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTNCLGVBQVUsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWE1RSxDQUFDOzs7OztJQVhDLHlDQUFXOzs7O0lBQVgsVUFBWSxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQscUNBQU87Ozs7SUFBUCxVQUFRLElBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxJQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLG1CQUFvQyxJQUFJLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDckYsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsd3dEQUF5QztvQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7O3FCQUlFLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxNQUFNOztJQWFULDBCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FsQlksbUJBQW1COzs7Ozs7SUFDOUIsd0NBQTZEOztJQUU3RCxpQ0FBcUM7O0lBQ3JDLG9DQUErQjs7SUFDL0IseUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTGlua0dyb3VwIHtcbiAgbmFtZT86IHN0cmluZztcbiAgbGlua3M6IElUZExpbmtbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRMaW5rIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbGlua1RvOiB7IGhyZWY/OiBzdHJpbmcgfSB8IHsgcm91dGVyTGluaz86IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gIG9wZW5Jbk5ld1RhYj86IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIHNob3c/OiBib29sZWFuO1xuICBmb250U2V0Pzogc3RyaW5nO1xufVxuXG5sZXQgbmV4dFVuaXF1ZUlkOiBudW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXYtbGlua3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LWxpbmtzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LWxpbmtzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdkxpbmtzQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfdW5pcXVlSWQ6IHN0cmluZyA9IGB0ZC1uYXYtbGlua3MtJHsrK25leHRVbmlxdWVJZH1gO1xuXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSB0aGlzLl91bmlxdWVJZDtcbiAgQElucHV0KCkgbGlua3M6IElUZExpbmtHcm91cFtdO1xuICBAT3V0cHV0KCkgYWZ0ZXJDbGljazogRXZlbnRFbWl0dGVyPElUZExpbms+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGRMaW5rPigpO1xuXG4gIGxpbmtDbGlja2VkKGxpbms6IElUZExpbmspOiB2b2lkIHtcbiAgICB0aGlzLmFmdGVyQ2xpY2suZW1pdChsaW5rKTtcbiAgfVxuXG4gIGdldEhyZWYobGluazogSVRkTGluayk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxpbmsubGlua1RvICYmICg8eyBocmVmPzogc3RyaW5nIH0+bGluay5saW5rVG8pLmhyZWY7XG4gIH1cblxuICBnZXRSb3V0ZXJMaW5rKGxpbms6IElUZExpbmspOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGxpbmsubGlua1RvICYmICg8eyByb3V0ZXJMaW5rPzogc3RyaW5nIHwgc3RyaW5nW10gfT5saW5rLmxpbmtUbykucm91dGVyTGluaztcbiAgfVxufVxuIl19