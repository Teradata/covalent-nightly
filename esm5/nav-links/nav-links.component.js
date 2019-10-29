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
var nextUniqueId = 0;
var TdNavLinksComponent = /** @class */ (function () {
    function TdNavLinksComponent() {
        this._uniqueId = "td-nav-links-" + ++nextUniqueId;
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
    TdNavLinksComponent.prototype._linkClicked = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.afterNavigation.emit(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    TdNavLinksComponent.prototype._href = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        return link.link && ((/** @type {?} */ (link.link))).href;
    };
    /**
     * @param {?} link
     * @return {?}
     */
    TdNavLinksComponent.prototype._routerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        return link.link && ((/** @type {?} */ (link.link))).routerLink;
    };
    /**
     * @param link
     * Toggles expand/collapse state of expansion link.
     * Only applied when `collapsable` is true
     */
    /**
     * @param {?} link
     * Toggles expand/collapse state of expansion link.
     * Only applied when `collapsable` is true
     * @return {?}
     */
    TdNavLinksComponent.prototype._toggle = /**
     * @param {?} link
     * Toggles expand/collapse state of expansion link.
     * Only applied when `collapsable` is true
     * @return {?}
     */
    function (link) {
        if (this._isCollapsed(link)) {
            this._collapsedSet.delete(link);
        }
        else {
            this._collapsedSet.add(link);
        }
    };
    /**
     * @param link
     * Returns true if the state of provided expansion link is collapsed.
     */
    /**
     * @param {?} link
     * Returns true if the state of provided expansion link is collapsed.
     * @return {?}
     */
    TdNavLinksComponent.prototype._isCollapsed = /**
     * @param {?} link
     * Returns true if the state of provided expansion link is collapsed.
     * @return {?}
     */
    function (link) {
        return this._collapsedSet.has(link);
    };
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
    return TdNavLinksComponent;
}());
export { TdNavLinksComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL25hdi1saW5rcy8iLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFL0UsZ0NBR0M7OztJQUZDLDJCQUFjOztJQUNkLDBCQUFlOzs7OztBQUdqQixrQ0FFQzs7O0lBREMsZ0NBQW9COzs7OztBQUd0QixxQ0FFQzs7O0lBREMsc0NBQXNCOzs7OztBQUd4Qiw2QkFHQzs7O0lBRkMsdUJBQTJHOztJQUMzRyx1QkFBeUM7OztJQUd2QyxZQUFZLEdBQVcsQ0FBQztBQUU1QjtJQUFBO1FBUVUsY0FBUyxHQUFXLGtCQUFnQixFQUFFLFlBQWMsQ0FBQztRQUVyRCxrQkFBYSxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUVoRSxPQUFFLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7OztRQVczQixvQkFBZSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBa0NqRixDQUFDOzs7OztJQWhDQywwQ0FBWTs7OztJQUFaLFVBQWEsSUFBYTtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELG1DQUFLOzs7O0lBQUwsVUFBTSxJQUFhO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxFQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksSUFBYTtRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBb0MsSUFBSSxDQUFDLElBQUksRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ2pGLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gscUNBQU87Ozs7OztJQUFQLFVBQVEsSUFBcUI7UUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDBDQUFZOzs7OztJQUFaLFVBQWEsSUFBcUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qix3d0VBQXlDO29CQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7O2lCQUNyRDs7O3FCQU1FLEtBQUs7d0JBTUwsS0FBSztrQ0FLTCxNQUFNOztJQWtDVCwwQkFBQztDQUFBLEFBekRELElBeURDO1NBbERZLG1CQUFtQjs7Ozs7O0lBQzlCLHdDQUE2RDs7Ozs7SUFFN0QsNENBQXlFOztJQUV6RSxpQ0FBcUM7Ozs7O0lBTXJDLG9DQUFnRTs7Ozs7SUFLaEUsOENBQStFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24sIHRkUm90YXRlQW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGROYXZOb2RlIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc2hvdz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTmF2SGVhZGVyIGV4dGVuZHMgSVRkTmF2Tm9kZSB7XG4gIGNoaWxkcmVuOiBJVGRMaW5rW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTmF2RXhwYW5zaW9uIGV4dGVuZHMgSVRkTmF2SGVhZGVyIHtcbiAgY29sbGFwc2FibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZExpbmsgZXh0ZW5kcyBJVGROYXZOb2RlIHtcbiAgbGluazogeyBocmVmOiBzdHJpbmc7IG9wZW5Jbk5ld1RhYj86IGJvb2xlYW4gfSB8IHsgcm91dGVyTGluazogc3RyaW5nIHwgc3RyaW5nW107IG9wZW5Jbk5ld1RhYj86IGJvb2xlYW4gfTtcbiAgaWNvbjogeyBmb250U2V0Pzogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfTtcbn1cblxubGV0IG5leHRVbmlxdWVJZDogbnVtYmVyID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2LWxpbmtzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1saW5rcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi1saW5rcy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb24sIHRkUm90YXRlQW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZMaW5rc0NvbXBvbmVudCB7XG4gIHByaXZhdGUgX3VuaXF1ZUlkOiBzdHJpbmcgPSBgdGQtbmF2LWxpbmtzLSR7KytuZXh0VW5pcXVlSWR9YDtcblxuICBwcml2YXRlIF9jb2xsYXBzZWRTZXQ6IFNldDxJVGROYXZFeHBhbnNpb24+ID0gbmV3IFNldDxJVGROYXZFeHBhbnNpb24+KCk7XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuX3VuaXF1ZUlkO1xuXG4gIC8qKlxuICAgKiBMaW5rcyB0byBiZSByZW5kZXJlZCBieSBjb21wb25lbnQuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgQElucHV0KCkgbGlua3M6IEFycmF5PElUZE5hdkV4cGFuc2lvbiB8IElUZE5hdkhlYWRlciB8IElUZExpbms+O1xuXG4gIC8qKlxuICAgKiBFdmVudCB0cmlnZ2VyIGFmdGVyIGEgbmF2aWdhdGlvbiBjbGlja1xuICAgKi9cbiAgQE91dHB1dCgpIGFmdGVyTmF2aWdhdGlvbjogRXZlbnRFbWl0dGVyPElUZExpbms+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGRMaW5rPigpO1xuXG4gIF9saW5rQ2xpY2tlZChsaW5rOiBJVGRMaW5rKTogdm9pZCB7XG4gICAgdGhpcy5hZnRlck5hdmlnYXRpb24uZW1pdChsaW5rKTtcbiAgfVxuXG4gIF9ocmVmKGxpbms6IElUZExpbmspOiBzdHJpbmcge1xuICAgIHJldHVybiBsaW5rLmxpbmsgJiYgKDx7IGhyZWY/OiBzdHJpbmcgfT5saW5rLmxpbmspLmhyZWY7XG4gIH1cblxuICBfcm91dGVyTGluayhsaW5rOiBJVGRMaW5rKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIHJldHVybiBsaW5rLmxpbmsgJiYgKDx7IHJvdXRlckxpbms/OiBzdHJpbmcgfCBzdHJpbmdbXSB9PmxpbmsubGluaykucm91dGVyTGluaztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbGlua1xuICAgKiBUb2dnbGVzIGV4cGFuZC9jb2xsYXBzZSBzdGF0ZSBvZiBleHBhbnNpb24gbGluay5cbiAgICogT25seSBhcHBsaWVkIHdoZW4gYGNvbGxhcHNhYmxlYCBpcyB0cnVlXG4gICAqL1xuICBfdG9nZ2xlKGxpbms6IElUZE5hdkV4cGFuc2lvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pc0NvbGxhcHNlZChsaW5rKSkge1xuICAgICAgdGhpcy5fY29sbGFwc2VkU2V0LmRlbGV0ZShsaW5rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sbGFwc2VkU2V0LmFkZChsaW5rKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGxpbmtcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzdGF0ZSBvZiBwcm92aWRlZCBleHBhbnNpb24gbGluayBpcyBjb2xsYXBzZWQuXG4gICAqL1xuICBfaXNDb2xsYXBzZWQobGluazogSVRkTmF2RXhwYW5zaW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlZFNldC5oYXMobGluayk7XG4gIH1cbn1cbiJdfQ==