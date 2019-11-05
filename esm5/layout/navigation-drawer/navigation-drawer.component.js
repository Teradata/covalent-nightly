/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, ContentChildren, forwardRef, Inject, QueryList, SecurityContext, Optional, } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TdLayoutComponent } from '../layout.component';
import { tdCollapseAnimation } from '@covalent/core/common';
var TdNavigationDrawerMenuDirective = /** @class */ (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    TdNavigationDrawerMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-navigation-drawer-menu]',
                },] }
    ];
    return TdNavigationDrawerMenuDirective;
}());
export { TdNavigationDrawerMenuDirective };
var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
    function TdNavigationDrawerToolbarDirective() {
    }
    TdNavigationDrawerToolbarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-navigation-drawer-toolbar]',
                },] }
    ];
    return TdNavigationDrawerToolbarDirective;
}());
export { TdNavigationDrawerToolbarDirective };
var TdNavigationDrawerComponent = /** @class */ (function () {
    function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._menuToggled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
        /**
         * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
         */
        get: /**
         * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
         * @return {?}
         */
        function () {
            return this._drawerMenu ? this._drawerMenu.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
        /**
         * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
         */
        get: /**
         * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
         * @return {?}
         */
        function () {
            return this._toolbar ? this._toolbar.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
        /**
         * Checks if there is a background image for the toolbar.
         */
        get: /**
         * Checks if there is a background image for the toolbar.
         * @return {?}
         */
        function () {
            return !!this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundUrl", {
        /**
         * backgroundUrl?: SafeResourceUrl
         *
         * image to be displayed as the background of the toolbar.
         * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
         */
        set: /**
         * backgroundUrl?: SafeResourceUrl
         *
         * image to be displayed as the background of the toolbar.
         * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
         * @param {?} backgroundUrl
         * @return {?}
         */
        function (backgroundUrl) {
            if (backgroundUrl) {
                /** @type {?} */
                var sanitizedUrl = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
                this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: /**
         * Checks if router was injected.
         * @return {?}
         */
        function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        function (opened) {
            if (!opened) {
                _this._menuToggled = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.handleNavigationClick = /**
     * @return {?}
     */
    function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.toggle = /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this._layout.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.open = /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this._layout.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.close = /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this._layout.close();
    };
    TdNavigationDrawerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-navigation-drawer',
                    template: "<mat-toolbar\n  [color]=\"color\"\n  [style.background-image]=\"backgroundImage\"\n  [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n  class=\"td-nagivation-drawer-toolbar\"\n>\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div\n      *ngIf=\"icon || logo || sidenavTitle || avatar\"\n      class=\"td-navigation-drawer-toolbar-content\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <img *ngIf=\"avatar && !logo && !icon\" class=\"td-nagivation-drawer-toolbar-avatar\" [attr.src]=\"avatar\" />\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{ sidenavTitle }}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{ name }}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{ email || name }}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                    animations: [tdCollapseAnimation],
                    styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-nagivation-drawer-toolbar-avatar{border-radius:50%;height:60px;width:60px;margin:0 12px 12px 0}:host mat-toolbar .td-navigation-drawer-menu-toggle{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-ms-flex:1;flex:1}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    TdNavigationDrawerComponent.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return TdLayoutComponent; })),] }] },
        { type: Router, decorators: [{ type: Optional }] },
        { type: DomSanitizer }
    ]; };
    TdNavigationDrawerComponent.propDecorators = {
        _drawerMenu: [{ type: ContentChildren, args: [TdNavigationDrawerMenuDirective,] }],
        _toolbar: [{ type: ContentChildren, args: [TdNavigationDrawerToolbarDirective,] }],
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
    return TdNavigationDrawerComponent;
}());
export { TdNavigationDrawerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJsYXlvdXQvbmF2aWdhdGlvbi1kcmF3ZXIvbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUdmLFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULGVBQWUsRUFDZixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBOEIsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUQ7SUFBQTtJQUc4QyxDQUFDOztnQkFIOUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOztJQUM2QyxzQ0FBQztDQUFBLEFBSC9DLElBRytDO1NBQWxDLCtCQUErQjtBQUU1QztJQUFBO0lBR2lELENBQUM7O2dCQUhqRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztpQkFDM0M7O0lBQ2dELHlDQUFDO0NBQUEsQUFIbEQsSUFHa0Q7U0FBckMsa0NBQWtDO0FBRS9DO0lBOEhFLHFDQUN1RCxPQUEwQixFQUMzRCxPQUFlLEVBQzNCLFNBQXVCO1FBRnNCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzNELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXpIekIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUEwSG5DLENBQUM7SUF2SEosc0JBQUksb0RBQVc7Ozs7UUFB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SUFDSSwyQ0FBSzs7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7O2dCQW5MRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFFaEMsNnREQUFpRDtvQkFDakQsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7O2lCQUNsQzs7OztnQkFuQlEsaUJBQWlCLHVCQTZJckIsTUFBTSxTQUFDLFVBQVU7Ozt3QkFBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLEVBQUM7Z0JBbkp0QyxNQUFNLHVCQW9KVixRQUFRO2dCQW5Kd0IsWUFBWTs7OzhCQWtDOUMsZUFBZSxTQUFDLCtCQUErQjsyQkFFL0MsZUFBZSxTQUFDLGtDQUFrQzsrQkEyQmxELEtBQUs7dUJBT0wsS0FBSzt1QkFRTCxLQUFLO3lCQVFMLEtBQUs7d0JBUUwsS0FBSztrQ0FPTCxLQUFLO2dDQVFMLEtBQUssU0FBQyxlQUFlO3VCQW1CckIsS0FBSzt3QkFRTCxLQUFLOztJQStEUixrQ0FBQztDQUFBLEFBcExELElBb0xDO1NBOUtZLDJCQUEyQjs7Ozs7O0lBQ3RDLHlEQUF5Qzs7Ozs7SUFDekMsbURBQXNDOzs7OztJQUN0Qyx1REFBb0M7O0lBTXBDLGtEQUEwRzs7SUFFMUcsK0NBQTZHOzs7Ozs7SUEyQjdHLG1EQUE4Qjs7Ozs7OztJQU85QiwyQ0FBc0I7Ozs7Ozs7O0lBUXRCLDJDQUFzQjs7Ozs7Ozs7SUFRdEIsNkNBQXdCOzs7Ozs7OztJQVF4Qiw0Q0FBOEM7Ozs7Ozs7SUFPOUMsc0RBQWlDOzs7Ozs7OztJQTJCakMsMkNBQXNCOzs7Ozs7OztJQVF0Qiw0Q0FBdUI7Ozs7O0lBVXJCLDhDQUErRTs7Ozs7SUFDL0UsOENBQW1DOzs7OztJQUNuQyxnREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgUXVlcnlMaXN0LFxuICBTZWN1cml0eUNvbnRleHQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTYWZlUmVzb3VyY2VVcmwsIFNhZmVTdHlsZSwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNYXREcmF3ZXJUb2dnbGVSZXN1bHQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtbmF2aWdhdGlvbi1kcmF3ZXItbWVudV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1uYXZpZ2F0aW9uLWRyYXdlci10b29sYmFyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2aWdhdGlvbi1kcmF3ZXInLFxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbdGRDb2xsYXBzZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfbWVudVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYmFja2dyb3VuZEltYWdlOiBTYWZlU3R5bGU7XG5cbiAgZ2V0IG1lbnVUb2dnbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tZW51VG9nZ2xlZDtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSkgX2RyYXdlck1lbnU6IFF1ZXJ5TGlzdDxUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlPjtcblxuICBAQ29udGVudENoaWxkcmVuKFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmUpIF90b29sYmFyOiBRdWVyeUxpc3Q8VGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZT47XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIFtUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlXSBoYXMgY29udGVudC5cbiAgICovXG4gIGdldCBpc01lbnVBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYXdlck1lbnUgPyB0aGlzLl9kcmF3ZXJNZW51Lmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBbVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZV0gaGFzIGNvbnRlbnQuXG4gICAqL1xuICBnZXQgaXNDdXN0b21Ub29sYmFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sYmFyID8gdGhpcy5fdG9vbGJhci5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBpbWFnZSBmb3IgdGhlIHRvb2xiYXIuXG4gICAqL1xuICBnZXQgaXNCYWNrZ3JvdW5kQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2JhY2tncm91bmRJbWFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaWRlbmF2VGl0bGU/OiBzdHJpbmdcbiAgICogVGl0bGUgc2V0IGluIHNpZGVOYXYuXG4gICAqL1xuICBASW5wdXQoKSBzaWRlbmF2VGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCkgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhdmF0YXI/OiBzdHJpbmdcbiAgICpcbiAgICogYXZhdGFyIHVybCB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZVxuICAgKiBJZiBbaWNvbl0gb3IgW2xvZ29dIGFyZSBzZXQsIHRoZW4gdGhpcyB3aWxsIG5vdCBiZSBzaG93bi5cbiAgICovXG4gIEBJbnB1dCgpIGF2YXRhcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBkZWZhdWx0IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2Fybic7XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRpb25Sb3V0ZT86IHN0cmluZ1xuICAgKlxuICAgKiBvcHRpb24gdG8gc2V0IHRoZSBjb21iaW5lZCByb3V0ZSBmb3IgdGhlIGljb24sIGxvZ28sIGFuZCBzaWRlbmF2VGl0bGUuXG4gICAqL1xuICBASW5wdXQoKSBuYXZpZ2F0aW9uUm91dGU6IHN0cmluZztcblxuICAvKipcbiAgICogYmFja2dyb3VuZFVybD86IFNhZmVSZXNvdXJjZVVybFxuICAgKlxuICAgKiBpbWFnZSB0byBiZSBkaXNwbGF5ZWQgYXMgdGhlIGJhY2tncm91bmQgb2YgdGhlIHRvb2xiYXIuXG4gICAqIFVSTCB1c2VkIHdpbGwgYmUgc2FuaXRpemVkLCBidXQgaXQgc2hvdWxkIGJlIGFsd2F5cyBmcm9tIGEgdHJ1c3RlZCBzb3VyY2UgdG8gYXZvaWQgWFNTLlxuICAgKi9cbiAgQElucHV0KCdiYWNrZ3JvdW5kVXJsJylcbiAgLy8gVE9ETyBBbmd1bGFyIGNvbXBsYWlucyB3aXRoIHdhcm5pbmdzIGlmIHRoaXMgaXMgdHlwZSBbU2FmZVJlc291cmNlVXJsXS4uIHNvIHdlIHdpbGwgbWFrZSBpdCA8YW55PiB1bnRpbCBpdHMgZml4ZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svaXNzdWVzLzI5NzdcbiAgc2V0IGJhY2tncm91bmRVcmwoYmFja2dyb3VuZFVybDogYW55KSB7XG4gICAgaWYgKGJhY2tncm91bmRVcmwpIHtcbiAgICAgIGNvbnN0IHNhbml0aXplZFVybDogc3RyaW5nID0gdGhpcy5fc2FuaXRpemUuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgYmFja2dyb3VuZFVybCk7XG4gICAgICB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLl9zYW5pdGl6ZS5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuU1RZTEUsICd1cmwoJyArIHNhbml0aXplZFVybCArICcpJyk7XG4gICAgfVxuICB9XG4gIGdldCBiYWNrZ3JvdW5kSW1hZ2UoKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZEltYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hbWU/OiBzdHJpbmdcbiAgICpcbiAgICogc3RyaW5nIHRvIGJlIGRpc3BsYXllZCBhcyBwYXJ0IG9mIHRoZSBuYXZpZ2F0aW9uIGRyYXdlciBzdWJsYWJlbC5cbiAgICogaWYgW2VtYWlsXSBpcyBub3Qgc2V0LCB0aGVuIFtuYW1lXSB3aWxsIGJlIHRoZSB0b2dnbGUgbWVudSB0ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBlbWFpbD86IHN0cmluZ1xuICAgKlxuICAgKiBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGFzIHBhcnQgb2YgdGhlIG5hdmlnYXRpb24gZHJhd2VyIHN1YmxhYmVsIGluIHRoZSBbdG9nZ2xlXSBtZW51IHRleHQuXG4gICAqIGlmIFtlbWFpbF0gYW5kIFtuYW1lXSBhcmUgbm90IHNldCwgdGhlbiB0aGUgdG9nZ2xlIG1lbnUgaXMgbm90IHJlbmRlcmVkLlxuICAgKi9cbiAgQElucHV0KCkgZW1haWw6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdXRlciB3YXMgaW5qZWN0ZWQuXG4gICAqL1xuICBnZXQgcm91dGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9yb3V0ZXIgJiYgISF0aGlzLm5hdmlnYXRpb25Sb3V0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIHByaXZhdGUgX2xheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemU6IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy5fbGF5b3V0LnNpZGVuYXYub3BlbmVkQ2hhbmdlLnN1YnNjcmliZSgob3BlbmVkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICB0aGlzLl9tZW51VG9nZ2xlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc01lbnVBdmFpbGFibGUpIHtcbiAgICAgIHRoaXMuX21lbnVUb2dnbGVkID0gIXRoaXMuX21lbnVUb2dnbGVkO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU5hdmlnYXRpb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm5hdmlnYXRpb25Sb3V0ZSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IHRvZ2dsZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBvcGVuIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgY2xvc2UgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG4iXX0=