import * as tslib_1 from "tslib";
import { Component, Directive, Input, ContentChildren, forwardRef, Inject, QueryList, SecurityContext, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TdLayoutComponent } from '../layout.component';
import { TdCollapseAnimation } from '../../common/animations/collapse/collapse.animation';
var TdNavigationDrawerMenuDirective = (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    return TdNavigationDrawerMenuDirective;
}());
TdNavigationDrawerMenuDirective = tslib_1.__decorate([
    Directive({
        selector: '[td-navigation-drawer-menu]',
    })
], TdNavigationDrawerMenuDirective);
export { TdNavigationDrawerMenuDirective };
var TdNavigationDrawerToolbarDirective = (function () {
    function TdNavigationDrawerToolbarDirective() {
    }
    return TdNavigationDrawerToolbarDirective;
}());
TdNavigationDrawerToolbarDirective = tslib_1.__decorate([
    Directive({
        selector: '[td-navigation-drawer-toolbar]',
    })
], TdNavigationDrawerToolbarDirective);
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
        this._closeSubscription = this._layout.sidenav.onClose.subscribe(function () {
            _this._menuToggled = false;
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
    return TdNavigationDrawerComponent;
}());
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
        styles: [":host { width: 100%; } :host md-toolbar { padding: 16px; } :host md-toolbar.td-toolbar-background { background-repeat: no-repeat; background-size: cover; } :host md-toolbar /deep/ > .mat-toolbar-layout > md-toolbar-row { height: auto !important; display: block !important; } :host > div { overflow: hidden; } /*# sourceMappingURL=navigation-drawer.component.css.map */ "],
        template: "<md-toolbar [color]=\"color\" [style.background-image]=\"backgroundImage\" [class.td-toolbar-background]=\"!!isBackgroundAvailable\"> <div flex> <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content> <ng-container *ngIf=\"!isCustomToolbar\"> <span *ngIf=\"icon || logo || sidenavTitle\" [class.cursor-pointer]=\"routerEnabled\" (click)=\"handleNavigationClick()\" layout=\"row\" layout-align=\"start center\"> <md-icon *ngIf=\"icon\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo\" [svgIcon]=\"logo\"></md-icon> <span *ngIf=\"sidenavTitle\" class=\"md-subhead\">{{sidenavTitle}}</span> </span> <div class=\"md-body-2\" *ngIf=\"email && name\">{{name}}</div> <div class=\"md-body-1\" layout=\"row\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\"> <span flex>{{email || name}}</span> <button md-icon-button class=\"md-icon-button-mini\" *ngIf=\"isMenuAvailable\"> <md-icon *ngIf=\"!menuToggled\">arrow_drop_down</md-icon> <md-icon *ngIf=\"menuToggled\">arrow_drop_up</md-icon> </button> </div> </ng-container> </div> </md-toolbar> <div [@tdCollapse]=\"menuToggled\"> <ng-content></ng-content> </div> <div [@tdCollapse]=\"!menuToggled\"> <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content> </div> ",
        animations: [TdCollapseAnimation()],
    }),
    tslib_1.__param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
    tslib_1.__param(1, Optional()),
    tslib_1.__metadata("design:paramtypes", [TdLayoutComponent,
        Router,
        DomSanitizer])
], TdNavigationDrawerComponent);
export { TdNavigationDrawerComponent };
//# sourceMappingURL=navigation-drawer.component.js.map