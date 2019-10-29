/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { tdCollapseAnimation, tdRotateAnimation } from '@covalent/core/common';
/**
 * @record
 */
export function ITdNavNode() { }
if (false) {
    /** @type {?} */
    ITdNavNode.prototype.label;
    /** @type {?|undefined} */
    ITdNavNode.prototype.show;
}
/**
 * @record
 */
export function ITdNavHeader() { }
if (false) {
    /** @type {?} */
    ITdNavHeader.prototype.children;
}
/**
 * @record
 */
export function ITdNavExpansion() { }
if (false) {
    /** @type {?|undefined} */
    ITdNavExpansion.prototype.collapsable;
}
/**
 * @record
 */
export function ITdLink() { }
if (false) {
    /** @type {?} */
    ITdLink.prototype.link;
    /** @type {?} */
    ITdLink.prototype.icon;
}
/** @type {?} */
let nextUniqueId = 0;
export class TdNavLinksComponent {
    constructor() {
        this._uniqueId = `td-nav-links-${++nextUniqueId}`;
        this._collapsedSet = new Set();
        this.id = this._uniqueId;
        /**
         * Event trigger after a navigation click
         */
        this.afterNavigation = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    _linkClicked(link) {
        this.afterNavigation.emit(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    _href(link) {
        return link.link && ((/** @type {?} */ (link.link))).href;
    }
    /**
     * @param {?} link
     * @return {?}
     */
    _routerLink(link) {
        return link.link && ((/** @type {?} */ (link.link))).routerLink;
    }
    /**
     * @param {?} link
     * Toggles expand/collapse state of expansion link.
     * Only applied when `collapsable` is true
     * @return {?}
     */
    _toggle(link) {
        if (this._isCollapsed(link)) {
            this._collapsedSet.delete(link);
        }
        else {
            this._collapsedSet.add(link);
        }
    }
    /**
     * @param {?} link
     * Returns true if the state of provided expansion link is collapsed.
     * @return {?}
     */
    _isCollapsed(link) {
        return this._collapsedSet.has(link);
    }
}
TdNavLinksComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-nav-links',
                template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-link let-linkIndex=\"index\">\n    <ng-container *ngIf=\"link.show === undefined || link.show\">\n      <ng-container *ngIf=\"link.children?.length && !link.link\">\n        <h3\n          [class.td-nav-link-cursor]=\"link.collapsable\"\n          matSubheader\n          matRipple\n          [matRippleDisabled]=\"!link.collapsable\"\n          (click)=\"link.collapsable && _toggle(link)\"\n        >\n          <mat-icon *ngIf=\"link.icon\" [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span [style.width.%]=\"100\">{{ link.label }}</span>\n          <mat-icon [@tdRotate]=\"!_isCollapsed(link)\" *ngIf=\"link.collapsable\">\n            keyboard_arrow_down\n          </mat-icon>\n        </h3>\n        <td-nav-links\n          [id]=\"id + '-' + linkIndex\"\n          [@tdCollapse]=\"!!_isCollapsed(link)\"\n          [links]=\"link.children\"\n        ></td-nav-links>\n      </ng-container>\n      <ng-container *ngIf=\"link.link\">\n        <a\n          mat-list-item\n          *ngIf=\"_href(link)\"\n          [href]=\"_href(link)\"\n          [target]=\"link.link.openInNewTab ? '_blank' : undefined\"\n          id=\"{{ id }}-{{ linkIndex }}\"\n          class=\"td-nav-link\"\n          (click)=\"_linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n          <mat-icon *ngIf=\"link.link.openInNewTab\">\n            launch\n          </mat-icon>\n        </a>\n        <a\n          mat-list-item\n          *ngIf=\"_routerLink(link)\"\n          [routerLink]=\"_routerLink(link)\"\n          [target]=\"link.link.openInNewTab ? '_blank' : undefined\"\n          id=\"{{ id }}-{{ linkIndex }}\"\n          class=\"td-nav-link\"\n          (click)=\"_linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n          <mat-icon *ngIf=\"link.link.openInNewTab\">\n            launch\n          </mat-icon>\n        </a>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</mat-nav-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [tdCollapseAnimation, tdRotateAnimation],
                styles: [":host{display:block}:host .mat-nav-list.mat-list-base{padding-top:2px}:host .mat-nav-list.mat-list-base .td-nav-link-cursor{cursor:pointer}:host .mat-nav-list.mat-list-base .mat-list-item{height:40px}:host .mat-icon{margin-right:0}"]
            }] }
];
TdNavLinksComponent.propDecorators = {
    id: [{ type: Input }],
    links: [{ type: Input }],
    afterNavigation: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavLinksComponent.prototype._uniqueId;
    /**
     * @type {?}
     * @private
     */
    TdNavLinksComponent.prototype._collapsedSet;
    /** @type {?} */
    TdNavLinksComponent.prototype.id;
    /**
     * Links to be rendered by component.
     * @type {?}
     */
    TdNavLinksComponent.prototype.links;
    /**
     * Event trigger after a navigation click
     * @type {?}
     */
    TdNavLinksComponent.prototype.afterNavigation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL25hdi1saW5rcy8iLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFL0UsZ0NBR0M7OztJQUZDLDJCQUFjOztJQUNkLDBCQUFlOzs7OztBQUdqQixrQ0FFQzs7O0lBREMsZ0NBQW9COzs7OztBQUd0QixxQ0FFQzs7O0lBREMsc0NBQXNCOzs7OztBQUd4Qiw2QkFHQzs7O0lBRkMsdUJBQTJHOztJQUMzRyx1QkFBeUM7OztJQUd2QyxZQUFZLEdBQVcsQ0FBQztBQVM1QixNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUVUsY0FBUyxHQUFXLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDO1FBRXJELGtCQUFhLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRWhFLE9BQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7O1FBVzNCLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFrQ2pGLENBQUM7Ozs7O0lBaENDLFlBQVksQ0FBQyxJQUFhO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLElBQWE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLEVBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFvQyxJQUFJLENBQUMsSUFBSSxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDakYsQ0FBQzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxJQUFxQjtRQUMzQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsWUFBWSxDQUFDLElBQXFCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsd3dFQUF5QztnQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDOzthQUNyRDs7O2lCQU1FLEtBQUs7b0JBTUwsS0FBSzs4QkFLTCxNQUFNOzs7Ozs7O0lBZlAsd0NBQTZEOzs7OztJQUU3RCw0Q0FBeUU7O0lBRXpFLGlDQUFxQzs7Ozs7SUFNckMsb0NBQWdFOzs7OztJQUtoRSw4Q0FBK0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiwgdGRSb3RhdGVBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZE5hdk5vZGUge1xuICBsYWJlbDogc3RyaW5nO1xuICBzaG93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGROYXZIZWFkZXIgZXh0ZW5kcyBJVGROYXZOb2RlIHtcbiAgY2hpbGRyZW46IElUZExpbmtbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGROYXZFeHBhbnNpb24gZXh0ZW5kcyBJVGROYXZIZWFkZXIge1xuICBjb2xsYXBzYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTGluayBleHRlbmRzIElUZE5hdk5vZGUge1xuICBsaW5rOiB7IGhyZWY6IHN0cmluZzsgb3BlbkluTmV3VGFiPzogYm9vbGVhbiB9IHwgeyByb3V0ZXJMaW5rOiBzdHJpbmcgfCBzdHJpbmdbXTsgb3BlbkluTmV3VGFiPzogYm9vbGVhbiB9O1xuICBpY29uOiB7IGZvbnRTZXQ/OiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9O1xufVxuXG5sZXQgbmV4dFVuaXF1ZUlkOiBudW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXYtbGlua3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LWxpbmtzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LWxpbmtzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbdGRDb2xsYXBzZUFuaW1hdGlvbiwgdGRSb3RhdGVBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdkxpbmtzQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfdW5pcXVlSWQ6IHN0cmluZyA9IGB0ZC1uYXYtbGlua3MtJHsrK25leHRVbmlxdWVJZH1gO1xuXG4gIHByaXZhdGUgX2NvbGxhcHNlZFNldDogU2V0PElUZE5hdkV4cGFuc2lvbj4gPSBuZXcgU2V0PElUZE5hdkV4cGFuc2lvbj4oKTtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5fdW5pcXVlSWQ7XG5cbiAgLyoqXG4gICAqIExpbmtzIHRvIGJlIHJlbmRlcmVkIGJ5IGNvbXBvbmVudC5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBASW5wdXQoKSBsaW5rczogQXJyYXk8SVRkTmF2RXhwYW5zaW9uIHwgSVRkTmF2SGVhZGVyIHwgSVRkTGluaz47XG5cbiAgLyoqXG4gICAqIEV2ZW50IHRyaWdnZXIgYWZ0ZXIgYSBuYXZpZ2F0aW9uIGNsaWNrXG4gICAqL1xuICBAT3V0cHV0KCkgYWZ0ZXJOYXZpZ2F0aW9uOiBFdmVudEVtaXR0ZXI8SVRkTGluaz4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZExpbms+KCk7XG5cbiAgX2xpbmtDbGlja2VkKGxpbms6IElUZExpbmspOiB2b2lkIHtcbiAgICB0aGlzLmFmdGVyTmF2aWdhdGlvbi5lbWl0KGxpbmspO1xuICB9XG5cbiAgX2hyZWYobGluazogSVRkTGluayk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxpbmsubGluayAmJiAoPHsgaHJlZj86IHN0cmluZyB9PmxpbmsubGluaykuaHJlZjtcbiAgfVxuXG4gIF9yb3V0ZXJMaW5rKGxpbms6IElUZExpbmspOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGxpbmsubGluayAmJiAoPHsgcm91dGVyTGluaz86IHN0cmluZyB8IHN0cmluZ1tdIH0+bGluay5saW5rKS5yb3V0ZXJMaW5rO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBsaW5rXG4gICAqIFRvZ2dsZXMgZXhwYW5kL2NvbGxhcHNlIHN0YXRlIG9mIGV4cGFuc2lvbiBsaW5rLlxuICAgKiBPbmx5IGFwcGxpZWQgd2hlbiBgY29sbGFwc2FibGVgIGlzIHRydWVcbiAgICovXG4gIF90b2dnbGUobGluazogSVRkTmF2RXhwYW5zaW9uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lzQ29sbGFwc2VkKGxpbmspKSB7XG4gICAgICB0aGlzLl9jb2xsYXBzZWRTZXQuZGVsZXRlKGxpbmspO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb2xsYXBzZWRTZXQuYWRkKGxpbmspO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbGlua1xuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHN0YXRlIG9mIHByb3ZpZGVkIGV4cGFuc2lvbiBsaW5rIGlzIGNvbGxhcHNlZC5cbiAgICovXG4gIF9pc0NvbGxhcHNlZChsaW5rOiBJVGROYXZFeHBhbnNpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2VkU2V0LmhhcyhsaW5rKTtcbiAgfVxufVxuIl19