var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Directive, Input, ContentChildren, forwardRef, Inject, QueryList, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TdLayoutComponent } from '../layout.component';
import { TdCollapseAnimation } from '../../common/animations/collapse/collapse.animation';
var TdNavigationDrawerMenuDirective = (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    return TdNavigationDrawerMenuDirective;
}());
TdNavigationDrawerMenuDirective = __decorate([
    Directive({
        selector: '[td-navigation-drawer-menu]',
    })
], TdNavigationDrawerMenuDirective);
export { TdNavigationDrawerMenuDirective };
var TdNavigationDrawerComponent = (function () {
    function TdNavigationDrawerComponent(_layout, _sanitize) {
        this._layout = _layout;
        this._sanitize = _sanitize;
        this._menuToggled = false;
        /**
         * navigationRoute?: string
         *
         * option to set the combined logo, icon, toolbar title route
         * defaults to '/'
         */
        this.navigationRoute = '/';
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
         * Checks if there is a [TdNavigationDrawerMenuDirective] as content.
         */
        get: function () {
            return this._drawerMenu.length > 0;
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
__decorate([
    ContentChildren(TdNavigationDrawerMenuDirective),
    __metadata("design:type", QueryList)
], TdNavigationDrawerComponent.prototype, "_drawerMenu", void 0);
__decorate([
    Input('sidenavTitle'),
    __metadata("design:type", String)
], TdNavigationDrawerComponent.prototype, "sidenavTitle", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], TdNavigationDrawerComponent.prototype, "icon", void 0);
__decorate([
    Input('logo'),
    __metadata("design:type", String)
], TdNavigationDrawerComponent.prototype, "logo", void 0);
__decorate([
    Input('color'),
    __metadata("design:type", String)
], TdNavigationDrawerComponent.prototype, "color", void 0);
__decorate([
    Input('navigationRoute'),
    __metadata("design:type", String)
], TdNavigationDrawerComponent.prototype, "navigationRoute", void 0);
__decorate([
    Input('backgroundUrl'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdNavigationDrawerComponent.prototype, "backgroundUrl", null);
__decorate([
    Input('name'),
    __metadata("design:type", String)
], TdNavigationDrawerComponent.prototype, "name", void 0);
__decorate([
    Input('email'),
    __metadata("design:type", String)
], TdNavigationDrawerComponent.prototype, "email", void 0);
TdNavigationDrawerComponent = __decorate([
    Component({
        selector: 'td-navigation-drawer',
        styles: [":host { width: 100%; } :host md-toolbar { padding: 16px; } :host md-toolbar.td-toolbar-background { background-repeat: no-repeat; background-size: cover; } :host md-toolbar /deep/ > .mat-toolbar-layout > md-toolbar-row { height: auto !important; } "],
        template: "<md-toolbar [color]=\"color\" [style.background-image]=\"backgroundImage\" [class.td-toolbar-background]=\"!!isBackgroundAvailable\"> <div layout=\"column\" flex> <span *ngIf=\"icon || logo || sidenavTitle\" layout=\"row\" layout-align=\"start end\"> <md-icon *ngIf=\"icon\" (click)=\"close()\" [routerLink]=\"navigationRoute\" class=\"cursor-pointer\">{{icon}}</md-icon> <md-icon *ngIf=\"logo && !icon\" class=\"md-icon-logo cursor-pointer\" [svgIcon]=\"logo\" (click)=\"close()\" [routerLink]=\"navigationRoute\"></md-icon> <span class=\"md-subhead cursor-pointer\" *ngIf=\"sidenavTitle\" (click)=\"close()\" [routerLink]=\"navigationRoute\">{{sidenavTitle}}</span> </span> <div class=\"md-body-2\" *ngIf=\"email && name\">{{name}}</div> <div class=\"md-body-1\" layout=\"row\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\"> <span flex>{{email || name}}</span> <button md-icon-button class=\"md-icon-button-mini\" *ngIf=\"isMenuAvailable\"> <md-icon *ngIf=\"!menuToggled\">arrow_drop_down</md-icon> <md-icon *ngIf=\"menuToggled\">arrow_drop_up</md-icon> </button> </div> </div> </md-toolbar> <div [@tdCollapse]=\"menuToggled\"> <ng-content></ng-content> </div> <div [@tdCollapse]=\"!menuToggled\"> <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content> </div>",
        animations: [TdCollapseAnimation()],
    }),
    __param(0, Inject(forwardRef(function () { return TdLayoutComponent; }))),
    __metadata("design:paramtypes", [TdLayoutComponent,
        DomSanitizer])
], TdNavigationDrawerComponent);
export { TdNavigationDrawerComponent };
//# sourceMappingURL=navigation-drawer.component.js.map