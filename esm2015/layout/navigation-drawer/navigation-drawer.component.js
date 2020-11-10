/**
 * @fileoverview added by tsickle
 * Generated from: navigation-drawer/navigation-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, ContentChildren, forwardRef, Inject, QueryList, SecurityContext, Optional, } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TdLayoutComponent } from '../layout.component';
import { tdCollapseAnimation } from '@covalent/core/common';
export class TdNavigationDrawerMenuDirective {
}
TdNavigationDrawerMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-menu]',
            },] }
];
export class TdNavigationDrawerToolbarDirective {
}
TdNavigationDrawerToolbarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-toolbar]',
            },] }
];
export class TdNavigationDrawerComponent {
    /**
     * @param {?} _layout
     * @param {?} _router
     * @param {?} _sanitize
     */
    constructor(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    /**
     * @return {?}
     */
    get menuToggled() {
        return this._menuToggled;
    }
    /**
     * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
     * @return {?}
     */
    get isMenuAvailable() {
        return this._drawerMenu ? this._drawerMenu.length > 0 : false;
    }
    /**
     * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
     * @return {?}
     */
    get isCustomToolbar() {
        return this._toolbar ? this._toolbar.length > 0 : false;
    }
    /**
     * Checks if there is a background image for the toolbar.
     * @return {?}
     */
    get isBackgroundAvailable() {
        return !!this._backgroundImage;
    }
    /**
     * backgroundUrl?: SafeResourceUrl
     *
     * image to be displayed as the background of the toolbar.
     * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
     * @param {?} backgroundUrl
     * @return {?}
     */
    set backgroundUrl(backgroundUrl) {
        if (backgroundUrl) {
            /** @type {?} */
            const sanitizedUrl = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
            this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
        }
    }
    /**
     * @return {?}
     */
    get backgroundImage() {
        return this._backgroundImage;
    }
    /**
     * Checks if router was injected.
     * @return {?}
     */
    get routerEnabled() {
        return !!this._router && !!this.navigationRoute;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        (opened) => {
            if (!opened) {
                this._menuToggled = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this._layout.toggle();
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this._layout.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this._layout.close();
    }
}
TdNavigationDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-navigation-drawer',
                template: "<mat-toolbar\n  [color]=\"color\"\n  [style.background-image]=\"backgroundImage\"\n  [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n  class=\"td-nagivation-drawer-toolbar\"\n>\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div\n      *ngIf=\"icon || logo || sidenavTitle || avatar\"\n      class=\"td-navigation-drawer-toolbar-content\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <img *ngIf=\"avatar && !logo && !icon\" class=\"td-nagivation-drawer-toolbar-avatar\" [attr.src]=\"avatar\" />\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{ sidenavTitle }}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{ name }}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{ email || name }}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-ms-flex-direction:column;display:block!important;flex-direction:column;height:auto!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-nagivation-drawer-toolbar-avatar{border-radius:50%;height:60px;margin:0 12px 12px 0;width:60px}:host mat-toolbar .td-navigation-drawer-name,:host mat-toolbar .td-navigation-drawer-toolbar-content .td-navigation-drawer-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host mat-toolbar .td-navigation-drawer-menu-toggle{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-ms-flex:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
            }] }
];
/** @nocollapse */
TdNavigationDrawerComponent.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutComponent)),] }] },
    { type: Router, decorators: [{ type: Optional }] },
    { type: DomSanitizer }
];
TdNavigationDrawerComponent.propDecorators = {
    _drawerMenu: [{ type: ContentChildren, args: [TdNavigationDrawerMenuDirective, { descendants: true },] }],
    _toolbar: [{ type: ContentChildren, args: [TdNavigationDrawerToolbarDirective, { descendants: true },] }],
    sidenavTitle: [{ type: Input }],
    icon: [{ type: Input }],
    logo: [{ type: Input }],
    avatar: [{ type: Input }],
    color: [{ type: Input }],
    navigationRoute: [{ type: Input }],
    backgroundUrl: [{ type: Input, args: ['backgroundUrl',] }],
    name: [{ type: Input }],
    email: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._closeSubscription;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._menuToggled;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._backgroundImage;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._drawerMenu;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._toolbar;
    /**
     * sidenavTitle?: string
     * Title set in sideNav.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.sidenavTitle;
    /**
     * icon?: string
     *
     * icon name to be displayed before the title
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.icon;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.logo;
    /**
     * avatar?: string
     *
     * avatar url to be displayed before the title
     * If [icon] or [logo] are set, then this will not be shown.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.avatar;
    /**
     * color?: 'accent' | 'primary' | 'warn'
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, default is used.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.color;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and sidenavTitle.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.navigationRoute;
    /**
     * name?: string
     *
     * string to be displayed as part of the navigation drawer sublabel.
     * if [email] is not set, then [name] will be the toggle menu text.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.name;
    /**
     * email?: string
     *
     * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
     * if [email] and [name] are not set, then the toggle menu is not rendered.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.email;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._layout;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._sanitize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbGF5b3V0L25hdmlnYXRpb24tZHJhd2VyL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxlQUFlLEVBR2YsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsZUFBZSxFQUNmLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUE4QixZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUs1RCxNQUFNLE9BQU8sK0JBQStCOzs7WUFIM0MsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7O0FBTUQsTUFBTSxPQUFPLGtDQUFrQzs7O1lBSDlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2FBQzNDOztBQVNELE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQTRIdEMsWUFDdUQsT0FBMEIsRUFDM0QsT0FBZSxFQUMzQixTQUF1QjtRQUZzQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMzRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUE3SHpCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBOEhuQyxDQUFDOzs7O0lBM0hKLElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7OztJQWFELElB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QUFDLCtCQUErQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTt1QkFJdEUsZUFBZSxTQUFDLGtDQUFrQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsyQkE2QnpFLEtBQUs7bUJBT0wsS0FBSzttQkFRTCxLQUFLO3FCQVFMLEtBQUs7b0JBUUwsS0FBSzs4QkFPTCxLQUFLOzRCQVFMLEtBQUssU0FBQyxlQUFlO21CQW1CckIsS0FBSztvQkFRTCxLQUFLOzs7Ozs7O0lBbEhOLHlEQUF5Qzs7Ozs7SUFDekMsbURBQXNDOzs7OztJQUN0Qyx1REFBb0M7O0lBTXBDLGtEQUVFOztJQUVGLCtDQUVFOzs7Ozs7SUEyQkYsbURBQThCOzs7Ozs7O0lBTzlCLDJDQUFzQjs7Ozs7Ozs7SUFRdEIsMkNBQXNCOzs7Ozs7OztJQVF0Qiw2Q0FBd0I7Ozs7Ozs7O0lBUXhCLDRDQUE4Qzs7Ozs7OztJQU85QyxzREFBaUM7Ozs7Ozs7O0lBMkJqQywyQ0FBc0I7Ozs7Ozs7O0lBUXRCLDRDQUF1Qjs7Ozs7SUFVckIsOENBQStFOzs7OztJQUMvRSw4Q0FBbUM7Ozs7O0lBQ25DLGdEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBRdWVyeUxpc3QsXG4gIFNlY3VyaXR5Q29udGV4dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNhZmVSZXNvdXJjZVVybCwgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1uYXZpZ2F0aW9uLWRyYXdlci1tZW51XScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLW5hdmlnYXRpb24tZHJhd2VyLXRvb2xiYXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXZpZ2F0aW9uLWRyYXdlcicsXG4gIHN0eWxlVXJsczogWycuL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFt0ZENvbGxhcHNlQW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9tZW51VG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9iYWNrZ3JvdW5kSW1hZ2U6IFNhZmVTdHlsZTtcblxuICBnZXQgbWVudVRvZ2dsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnVUb2dnbGVkO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIF9kcmF3ZXJNZW51OiBRdWVyeUxpc3Q8XG4gICAgVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZVxuICA+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBfdG9vbGJhcjogUXVlcnlMaXN0PFxuICAgIFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmVcbiAgPjtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgW1RkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmVdIGhhcyBjb250ZW50LlxuICAgKi9cbiAgZ2V0IGlzTWVudUF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhd2VyTWVudSA/IHRoaXMuX2RyYXdlck1lbnUubGVuZ3RoID4gMCA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIFtUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlXSBoYXMgY29udGVudC5cbiAgICovXG4gIGdldCBpc0N1c3RvbVRvb2xiYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2xiYXIgPyB0aGlzLl90b29sYmFyLmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgdG9vbGJhci5cbiAgICovXG4gIGdldCBpc0JhY2tncm91bmRBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fYmFja2dyb3VuZEltYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNpZGVuYXZUaXRsZT86IHN0cmluZ1xuICAgKiBUaXRsZSBzZXQgaW4gc2lkZU5hdi5cbiAgICovXG4gIEBJbnB1dCgpIHNpZGVuYXZUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqXG4gICAqIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZVxuICAgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBsb2dvPzogc3RyaW5nXG4gICAqXG4gICAqIGxvZ28gaWNvbiBuYW1lIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBJZiBbaWNvbl0gaXMgc2V0LCB0aGVuIHRoaXMgd2lsbCBub3QgYmUgc2hvd24uXG4gICAqL1xuICBASW5wdXQoKSBsb2dvOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGF2YXRhcj86IHN0cmluZ1xuICAgKlxuICAgKiBhdmF0YXIgdXJsIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlXG4gICAqIElmIFtpY29uXSBvciBbbG9nb10gYXJlIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCkgYXZhdGFyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybidcbiAgICpcbiAgICogdG9vbGJhciBjb2xvciBvcHRpb246IHByaW1hcnkgfCBhY2NlbnQgfCB3YXJuLlxuICAgKiBJZiBbY29sb3JdIGlzIG5vdCBzZXQsIGRlZmF1bHQgaXMgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJztcblxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHNpZGVuYXZUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgpIG5hdmlnYXRpb25Sb3V0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBiYWNrZ3JvdW5kVXJsPzogU2FmZVJlc291cmNlVXJsXG4gICAqXG4gICAqIGltYWdlIHRvIGJlIGRpc3BsYXllZCBhcyB0aGUgYmFja2dyb3VuZCBvZiB0aGUgdG9vbGJhci5cbiAgICogVVJMIHVzZWQgd2lsbCBiZSBzYW5pdGl6ZWQsIGJ1dCBpdCBzaG91bGQgYmUgYWx3YXlzIGZyb20gYSB0cnVzdGVkIHNvdXJjZSB0byBhdm9pZCBYU1MuXG4gICAqL1xuICBASW5wdXQoJ2JhY2tncm91bmRVcmwnKVxuICAvLyBUT0RPIEFuZ3VsYXIgY29tcGxhaW5zIHdpdGggd2FybmluZ3MgaWYgdGhpcyBpcyB0eXBlIFtTYWZlUmVzb3VyY2VVcmxdLi4gc28gd2Ugd2lsbCBtYWtlIGl0IDxhbnk+IHVudGlsIGl0cyBmaXhlZC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9pc3N1ZXMvMjk3N1xuICBzZXQgYmFja2dyb3VuZFVybChiYWNrZ3JvdW5kVXJsOiBhbnkpIHtcbiAgICBpZiAoYmFja2dyb3VuZFVybCkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkVXJsOiBzdHJpbmcgPSB0aGlzLl9zYW5pdGl6ZS5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCBiYWNrZ3JvdW5kVXJsKTtcbiAgICAgIHRoaXMuX2JhY2tncm91bmRJbWFnZSA9IHRoaXMuX3Nhbml0aXplLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5TVFlMRSwgJ3VybCgnICsgc2FuaXRpemVkVXJsICsgJyknKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJhY2tncm91bmRJbWFnZSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogbmFtZT86IHN0cmluZ1xuICAgKlxuICAgKiBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGFzIHBhcnQgb2YgdGhlIG5hdmlnYXRpb24gZHJhd2VyIHN1YmxhYmVsLlxuICAgKiBpZiBbZW1haWxdIGlzIG5vdCBzZXQsIHRoZW4gW25hbWVdIHdpbGwgYmUgdGhlIHRvZ2dsZSBtZW51IHRleHQuXG4gICAqL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGVtYWlsPzogc3RyaW5nXG4gICAqXG4gICAqIHN0cmluZyB0byBiZSBkaXNwbGF5ZWQgYXMgcGFydCBvZiB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIgc3VibGFiZWwgaW4gdGhlIFt0b2dnbGVdIG1lbnUgdGV4dC5cbiAgICogaWYgW2VtYWlsXSBhbmQgW25hbWVdIGFyZSBub3Qgc2V0LCB0aGVuIHRoZSB0b2dnbGUgbWVudSBpcyBub3QgcmVuZGVyZWQuXG4gICAqL1xuICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm91dGVyIHdhcyBpbmplY3RlZC5cbiAgICovXG4gIGdldCByb3V0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3JvdXRlciAmJiAhIXRoaXMubmF2aWdhdGlvblJvdXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0Q29tcG9uZW50KSkgcHJpdmF0ZSBfbGF5b3V0OiBUZExheW91dENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9zYW5pdGl6ZTogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLl9sYXlvdXQuc2lkZW5hdi5vcGVuZWRDaGFuZ2Uuc3Vic2NyaWJlKChvcGVuZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghb3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX21lbnVUb2dnbGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2xvc2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVNZW51KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTWVudUF2YWlsYWJsZSkge1xuICAgICAgdGhpcy5fbWVudVRvZ2dsZWQgPSAhdGhpcy5fbWVudVRvZ2dsZWQ7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGlvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubmF2aWdhdGlvblJvdXRlKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgdG9nZ2xlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IG9wZW4gbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBjbG9zZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0LmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==