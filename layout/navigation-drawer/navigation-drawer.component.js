import * as tslib_1 from "tslib";
import { Component, Directive, Input, ContentChildren, forwardRef, Inject, QueryList, SecurityContext, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TdLayoutComponent } from '../layout.component';
import { TdCollapseAnimation } from '../../common/animations/collapse/collapse.animation';
var TdNavigationDrawerMenuDirective = (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    TdNavigationDrawerMenuDirective = tslib_1.__decorate([
        Directive({
            selector: '[td-navigation-drawer-menu]',
        })
    ], TdNavigationDrawerMenuDirective);
    return TdNavigationDrawerMenuDirective;
}());
export { TdNavigationDrawerMenuDirective };
var TdNavigationDrawerToolbarDirective = (function () {
    function TdNavigationDrawerToolbarDirective() {
    }
    TdNavigationDrawerToolbarDirective = tslib_1.__decorate([
        Directive({
            selector: '[td-navigation-drawer-toolbar]',
        })
    ], TdNavigationDrawerToolbarDirective);
    return TdNavigationDrawerToolbarDirective;
}());
export { TdNavigationDrawerToolbarDirective };
var TdNavigationDrawerComponent = (function () {
    function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
        get: function () {
            return this._menuToggled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
        /**
         * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
         */
        get: function () {
            return this._drawerMenu ? this._drawerMenu.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
        /**
         * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
         */
        get: function () {
            return this._toolbar ? this._toolbar.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
        /**
         * Checks if there is a background image for the toolbar.
         */
        get: function () {
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
        set: function (backgroundUrl) {
            if (backgroundUrl) {
                var sanitizedUrl = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
                this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
        get: function () {
            return this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    TdNavigationDrawerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe(function (opened) {
            if (!opened) {
                _this._menuToggled = false;
            }
        });
    };
    TdNavigationDrawerComponent.prototype.ngOnDestroy = function () {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    };
    TdNavigationDrawerComponent.prototype.toggleMenu = function () {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    };
    TdNavigationDrawerComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdNavigationDrawerComponent.prototype.toggle = function () {
        return this._layout.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdNavigationDrawerComponent.prototype.open = function () {
        return this._layout.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdNavigationDrawerComponent.prototype.close = function () {
        return this._layout.close();
    };
    tslib_1.__decorate([
        ContentChildren(TdNavigationDrawerMenuDirective),
        tslib_1.__metadata("design:type", QueryList)
    ], TdNavigationDrawerComponent.prototype, "_drawerMenu", void 0);
    tslib_1.__decorate([
        ContentChildren(TdNavigationDrawerToolbarDirective),
        tslib_1.__metadata("design:type", QueryList)
    ], TdNavigationDrawerComponent.prototype, "_toolbar", void 0);
    tslib_1.__decorate([
        Input('sidenavTitle'),
        tslib_1.__metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "sidenavTitle", void 0);
    tslib_1.__decorate([
        Input('icon'),
        tslib_1.__metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input('logo'),
        tslib_1.__metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "logo", void 0);
    tslib_1.__decorate([
        Input('color'),
        tslib_1.__metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input('navigationRoute'),
        tslib_1.__metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "navigationRoute", void 0);
    tslib_1.__decorate([
        Input('backgroundUrl')
        // TODO angular complains with warnings if this is type [SafeResourceUrl].. so we will make it <any> until its fixed.
        // https://github.com/webpack/webpack/issues/2977
        ,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TdNavigationDrawerComponent.prototype, "backgroundUrl", null);
    tslib_1.__decorate([
        Input('name'),
        tslib_1.__metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        Input('email'),
        tslib_1.__metadata("design:type", String)
    ], TdNavigationDrawerComponent.prototype, "email", void 0);
    TdNavigationDrawerComponent = tslib_1.__decorate([
        Component({
            selector: 'td-navigation-drawer',
            styles: [":host { width: 100%; } :host .td-navigation-drawer-content.ng-animating, :host .td-navigation-drawer-menu-content.ng-animating { overflow: hidden; } :host mat-toolbar { padding: 16px; } :host mat-toolbar.td-toolbar-background { background-repeat: no-repeat; background-size: cover; } :host mat-toolbar.td-nagivation-drawer-toolbar { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; height: auto !important; display: block !important; } :host mat-toolbar .td-navigation-drawer-toolbar-content { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host mat-toolbar .td-navigation-drawer-menu-toggle { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button { height: 24px; line-height: 24px; width: 24px; } :host > div { overflow: hidden; } /*# sourceMappingURL=navigation-drawer.component.css.map */ "],
            template: "<mat-toolbar [color]=\"color\" [style.background-image]=\"backgroundImage\" [class.td-toolbar-background]=\"!!isBackgroundAvailable\" class=\"td-nagivation-drawer-toolbar\"> <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content> <ng-container *ngIf=\"!isCustomToolbar\"> <div *ngIf=\"icon || logo || sidenavTitle\" class=\"td-navigation-drawer-toolbar-content\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\"> <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon> <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon> <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span> </div> <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div> <div class=\"td-navigation-drawer-menu-toggle\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\"> <span class=\"td-navigation-drawer-label\">{{email || name}}</span> <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\"> <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon> <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon> </button> </div> </ng-container> </mat-toolbar> <div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\"> <ng-content></ng-content> </div> <div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\"> <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content> </div> ",
            animations: [TdCollapseAnimation()],
        }),
        tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
        tslib_1.__param(1, Optional()),
        tslib_1.__metadata("design:paramtypes", [TdLayoutComponent,
            Router,
            DomSanitizer])
    ], TdNavigationDrawerComponent);
    return TdNavigationDrawerComponent;
}());
export { TdNavigationDrawerComponent };
//# sourceMappingURL=navigation-drawer.component.js.map