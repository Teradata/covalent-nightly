(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/sidenav'), require('@covalent/core/common'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/common'), require('@angular/cdk/scrolling'), require('@angular/material/toolbar'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/card'), require('@angular/material/divider')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/layout', ['exports', '@angular/core', '@angular/material/sidenav', '@covalent/core/common', '@angular/router', '@angular/platform-browser', '@angular/common', '@angular/cdk/scrolling', '@angular/material/toolbar', '@angular/material/button', '@angular/material/icon', '@angular/material/card', '@angular/material/divider'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.layout = {}),global.ng.core,global.ng.material.sidenav,global.covalent.core.common,global.ng.router,global.ng.platformBrowser,global.ng.common,global.ng.cdk.scrolling,global.ng.material.toolbar,global.ng.material.button,global.ng.material.icon,global.ng.material.card,global.ng.material.divider));
}(this, (function (exports,core,sidenav,common,router,platformBrowser,common$1,scrolling,toolbar,button,icon,card,divider) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var TdLayoutComponent = /** @class */ (function () {
    function TdLayoutComponent() {
        this.mode = 'over';
        this.opened = false;
        this.sidenavWidth = '320px';
    }
    Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    TdLayoutComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    TdLayoutComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutComponent;
}());
TdLayoutComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout',
                styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host ::ng-deep>mat-sidenav-container>mat-sidenav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"],
                template: "<mat-sidenav-container fullscreen>\n  <mat-sidenav #sidenav\n              class=\"td-layout-sidenav\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\"\n              [disableClose]=\"disableClose\">\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
            },] },
];
TdLayoutComponent.ctorParameters = function () { return []; };
TdLayoutComponent.propDecorators = {
    "sidenav": [{ type: core.ViewChild, args: [sidenav.MatSidenav,] },],
    "mode": [{ type: core.Input, args: ['mode',] },],
    "opened": [{ type: core.Input, args: ['opened',] },],
    "sidenavWidth": [{ type: core.Input, args: ['sidenavWidth',] },],
};
var LayoutToggleBase = /** @class */ (function () {
    function LayoutToggleBase() {
    }
    return LayoutToggleBase;
}());
var _TdLayoutToggleMixinBase = common.mixinDisabled(LayoutToggleBase);
var LayoutToggle = /** @class */ (function (_super) {
    __extends(LayoutToggle, _super);
    function LayoutToggle(_layout, _renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._layout = _layout;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._initialized = false;
        _this._hideWhenOpened = false;
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-layout-menu-button');
        return _this;
    }
    Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
        set: function (hideWhenOpened) {
            this._hideWhenOpened = hideWhenOpened;
            if (this._initialized) {
                this._toggleVisibility();
            }
        },
        enumerable: true,
        configurable: true
    });
    LayoutToggle.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._initialized = true;
        this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(function () {
            _this._toggleVisibility();
        });
        this._toggleVisibility();
    };
    LayoutToggle.prototype.ngOnDestroy = function () {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    };
    LayoutToggle.prototype.clickListener = function (event) {
        event.preventDefault();
        if (!this.disabled) {
            this.onClick();
        }
    };
    LayoutToggle.prototype._toggleVisibility = function () {
        if (this._layout.sidenav.opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    };
    return LayoutToggle;
}(_TdLayoutToggleMixinBase));
LayoutToggle.propDecorators = {
    "hideWhenOpened": [{ type: core.Input, args: ['hideWhenOpened',] },],
    "clickListener": [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
var TdLayoutToggleDirective = /** @class */ (function (_super) {
    __extends(TdLayoutToggleDirective, _super);
    function TdLayoutToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
        set: function (tdLayoutToggle) {
            this.disabled = !((tdLayoutToggle) === '' || tdLayoutToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutToggleDirective;
}(LayoutToggle));
TdLayoutToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutToggle]',
            },] },
];
TdLayoutToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutToggleDirective.propDecorators = {
    "tdLayoutToggle": [{ type: core.Input, args: ['tdLayoutToggle',] },],
};
var TdLayoutCloseDirective = /** @class */ (function (_super) {
    __extends(TdLayoutCloseDirective, _super);
    function TdLayoutCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
        set: function (tdLayoutClose) {
            this.disabled = !((tdLayoutClose) === '' || tdLayoutClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutCloseDirective;
}(LayoutToggle));
TdLayoutCloseDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutClose]',
            },] },
];
TdLayoutCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutCloseDirective.propDecorators = {
    "tdLayoutClose": [{ type: core.Input, args: ['tdLayoutClose',] },],
};
var TdLayoutOpenDirective = /** @class */ (function (_super) {
    __extends(TdLayoutOpenDirective, _super);
    function TdLayoutOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
        set: function (tdLayoutOpen) {
            this.disabled = !((tdLayoutOpen) === '' || tdLayoutOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutOpenDirective;
}(LayoutToggle));
TdLayoutOpenDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutOpen]',
            },] },
];
TdLayoutOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutOpenDirective.propDecorators = {
    "tdLayoutClose": [{ type: core.Input, args: ['tdLayoutOpen',] },],
};
var TdLayoutNavComponent = /** @class */ (function () {
    function TdLayoutNavComponent(_router) {
        this._router = _router;
        this.color = 'primary';
    }
    Object.defineProperty(TdLayoutNavComponent.prototype, "routerEnabled", {
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    return TdLayoutNavComponent;
}());
TdLayoutNavComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-nav',
                styles: [".td-menu-button{margin-left:0}::ng-deep [dir=rtl] .td-menu-button{margin-right:0;margin-left:6px}:host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host .td-layout-nav-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%}:host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}:host .td-layout-nav-wrapper .td-layout-nav-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}"],
                template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span *ngIf=\"icon || logo || toolbarTitle\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n          class=\"td-layout-nav-toolbar-content\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
            },] },
];
TdLayoutNavComponent.ctorParameters = function () { return [
    { type: router.Router, decorators: [{ type: core.Optional },] },
]; };
TdLayoutNavComponent.propDecorators = {
    "toolbarTitle": [{ type: core.Input, args: ['toolbarTitle',] },],
    "icon": [{ type: core.Input, args: ['icon',] },],
    "logo": [{ type: core.Input, args: ['logo',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "navigationRoute": [{ type: core.Input, args: ['navigationRoute',] },],
};
var TdLayoutNavListComponent = /** @class */ (function () {
    function TdLayoutNavListComponent(_router) {
        this._router = _router;
        this.color = 'primary';
        this.mode = 'side';
        this.opened = true;
        this.sidenavWidth = '350px';
    }
    Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    TdLayoutNavListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    TdLayoutNavListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    TdLayoutNavListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutNavListComponent;
}());
TdLayoutNavListComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-nav-list',
                styles: [":host{margin:0;width:100%;min-height:100%;height:100%;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{text-align:start;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{-webkit-box-shadow:none;box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>mat-sidenav{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"],
                template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen class=\"td-layout-nav-list\">\n    <mat-sidenav #sidenav\n                position=\"start\"\n                [mode]=\"mode\"\n                [opened]=\"opened\"\n                [disableClose]=\"disableClose\"\n                [style.max-width]=\"sidenavWidth\"\n                [style.min-width]=\"sidenavWidth\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span *ngIf=\"icon || logo || toolbarTitle\"\n              class=\"td-layout-nav-list-toolbar-content\"\n              [class.cursor-pointer]=\"routerEnabled\"\n              (click)=\"handleNavigationClick()\">\n          <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>",
            },] },
];
TdLayoutNavListComponent.ctorParameters = function () { return [
    { type: router.Router, decorators: [{ type: core.Optional },] },
]; };
TdLayoutNavListComponent.propDecorators = {
    "sidenav": [{ type: core.ViewChild, args: [sidenav.MatSidenav,] },],
    "toolbarTitle": [{ type: core.Input, args: ['toolbarTitle',] },],
    "icon": [{ type: core.Input, args: ['icon',] },],
    "logo": [{ type: core.Input, args: ['logo',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "mode": [{ type: core.Input, args: ['mode',] },],
    "opened": [{ type: core.Input, args: ['opened',] },],
    "sidenavWidth": [{ type: core.Input, args: ['sidenavWidth',] },],
    "navigationRoute": [{ type: core.Input, args: ['navigationRoute',] },],
};
var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
    __extends(TdLayoutNavListToggleDirective, _super);
    function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
        set: function (tdLayoutNavListToggle) {
            this.disabled = !((tdLayoutNavListToggle) === '' || tdLayoutNavListToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
TdLayoutNavListToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutNavListToggle]',
            },] },
];
TdLayoutNavListToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutNavListToggleDirective.propDecorators = {
    "tdLayoutNavListToggle": [{ type: core.Input, args: ['tdLayoutNavListToggle',] },],
};
var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
    __extends(TdLayoutNavListCloseDirective, _super);
    function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
        set: function (tdLayoutNavListClose) {
            this.disabled = !((tdLayoutNavListClose) === '' || tdLayoutNavListClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
TdLayoutNavListCloseDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutNavListClose]',
            },] },
];
TdLayoutNavListCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutNavListCloseDirective.propDecorators = {
    "tdLayoutNavListClose": [{ type: core.Input, args: ['tdLayoutNavListClose',] },],
};
var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
    __extends(TdLayoutNavListOpenDirective, _super);
    function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
        set: function (tdLayoutNavListOpen) {
            this.disabled = !((tdLayoutNavListOpen) === '' || tdLayoutNavListOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));
TdLayoutNavListOpenDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutNavListOpen]',
            },] },
];
TdLayoutNavListOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutNavListOpenDirective.propDecorators = {
    "tdLayoutNavListOpen": [{ type: core.Input, args: ['tdLayoutNavListOpen',] },],
};
var TdLayoutCardOverComponent = /** @class */ (function () {
    function TdLayoutCardOverComponent() {
        this.cardWidth = 70;
        this.color = 'primary';
    }
    return TdLayoutCardOverComponent;
}());
TdLayoutCardOverComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-card-over',
                styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"],
                template: "<mat-toolbar [color]=\"color\">\n</mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div class=\"td-layout-card-over\"\n        [style.max-width.%]=\"cardWidth\"\n        [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-webkit-box-flex]=\"1\">\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
            },] },
];
TdLayoutCardOverComponent.ctorParameters = function () { return []; };
TdLayoutCardOverComponent.propDecorators = {
    "cardTitle": [{ type: core.Input, args: ['cardTitle',] },],
    "cardSubtitle": [{ type: core.Input, args: ['cardSubtitle',] },],
    "cardWidth": [{ type: core.Input, args: ['cardWidth',] },],
    "color": [{ type: core.Input, args: ['color',] },],
};
var TdLayoutManageListComponent = /** @class */ (function () {
    function TdLayoutManageListComponent() {
        this.mode = 'side';
        this.opened = true;
        this.sidenavWidth = '257px';
    }
    Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    TdLayoutManageListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    TdLayoutManageListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutManageListComponent;
}());
TdLayoutManageListComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-manage-list',
                styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host mat-sidenav-container.td-layout-manage-list{-webkit-box-flex:1;-ms-flex:1;flex:1}:host mat-sidenav-container.td-layout-manage-list>mat-sidenav.mat-drawer-closed,:host mat-sidenav-container.td-layout-manage-list>mat-sidenav.mat-drawer-closing,:host mat-sidenav-container.td-layout-manage-list>mat-sidenav.mat-drawer-opened,:host mat-sidenav-container.td-layout-manage-list>mat-sidenav.mat-drawer-opening{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2);box-shadow:0 1px 3px 0 rgba(0,0,0,.2)}:host .td-layout-manage-list-sidenav{text-align:start;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-manage-list-main{margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-layout-manage-list-main .td-layout-manage-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-ms-flex:1;flex:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>mat-sidenav{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{font-size:14px}:host ::ng-deep .mat-toolbar{font-weight:400}"],
                template: "<mat-sidenav-container fullscreen class=\"td-layout-manage-list\">\n  <mat-sidenav #sidenav\n              position=\"start\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [disableClose]=\"disableClose\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\">\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
            },] },
];
TdLayoutManageListComponent.ctorParameters = function () { return []; };
TdLayoutManageListComponent.propDecorators = {
    "sidenav": [{ type: core.ViewChild, args: [sidenav.MatSidenav,] },],
    "mode": [{ type: core.Input, args: ['mode',] },],
    "opened": [{ type: core.Input, args: ['opened',] },],
    "sidenavWidth": [{ type: core.Input, args: ['sidenavWidth',] },],
};
var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
    __extends(TdLayoutManageListToggleDirective, _super);
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
        set: function (tdLayoutManageListToggle) {
            this.disabled = !((tdLayoutManageListToggle) === '' || tdLayoutManageListToggle);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
TdLayoutManageListToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutManageListToggle]',
            },] },
];
TdLayoutManageListToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutManageListToggleDirective.propDecorators = {
    "tdLayoutManageListToggle": [{ type: core.Input, args: ['tdLayoutManageListToggle',] },],
};
var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
    __extends(TdLayoutManageListCloseDirective, _super);
    function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
        set: function (tdLayoutManageListClose) {
            this.disabled = !((tdLayoutManageListClose) === '' || tdLayoutManageListClose);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
TdLayoutManageListCloseDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutManageListClose]',
            },] },
];
TdLayoutManageListCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutManageListCloseDirective.propDecorators = {
    "tdLayoutManageListClose": [{ type: core.Input, args: ['tdLayoutManageListClose',] },],
};
var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
    __extends(TdLayoutManageListOpenDirective, _super);
    function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
        set: function (tdLayoutManageListOpen) {
            this.disabled = !((tdLayoutManageListOpen) === '' || tdLayoutManageListOpen);
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutManageListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));
TdLayoutManageListOpenDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutManageListOpen]',
            },] },
];
TdLayoutManageListOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutManageListOpenDirective.propDecorators = {
    "tdLayoutManageListOpen": [{ type: core.Input, args: ['tdLayoutManageListOpen',] },],
};
var TdLayoutFooterComponent = /** @class */ (function () {
    function TdLayoutFooterComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
        },
        enumerable: true,
        configurable: true
    });
    return TdLayoutFooterComponent;
}());
TdLayoutFooterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-footer,td-layout-footer-inner',
                styles: [":host{display:block;padding:10px 16px}"],
                template: "<ng-content></ng-content>\n",
            },] },
];
TdLayoutFooterComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutFooterComponent.propDecorators = {
    "color": [{ type: core.Input, args: ['color',] },],
};
var TdNavigationDrawerMenuDirective = /** @class */ (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    return TdNavigationDrawerMenuDirective;
}());
TdNavigationDrawerMenuDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-navigation-drawer-menu]',
            },] },
];
TdNavigationDrawerMenuDirective.ctorParameters = function () { return []; };
var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
    function TdNavigationDrawerToolbarDirective() {
    }
    return TdNavigationDrawerToolbarDirective;
}());
TdNavigationDrawerToolbarDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-navigation-drawer-toolbar]',
            },] },
];
TdNavigationDrawerToolbarDirective.ctorParameters = function () { return []; };
var TdNavigationDrawerComponent = /** @class */ (function () {
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
        get: function () {
            return this._drawerMenu ? this._drawerMenu.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
        get: function () {
            return this._toolbar ? this._toolbar.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
        get: function () {
            return !!this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundUrl", {
        set: function (backgroundUrl) {
            if (backgroundUrl) {
                var sanitizedUrl = this._sanitize.sanitize(core.SecurityContext.RESOURCE_URL, backgroundUrl);
                this._backgroundImage = this._sanitize.sanitize(core.SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
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
    TdNavigationDrawerComponent.prototype.toggle = function () {
        return this._layout.toggle();
    };
    TdNavigationDrawerComponent.prototype.open = function () {
        return this._layout.open();
    };
    TdNavigationDrawerComponent.prototype.close = function () {
        return this._layout.close();
    };
    return TdNavigationDrawerComponent;
}());
TdNavigationDrawerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-navigation-drawer',
                styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}:host mat-toolbar .td-navigation-drawer-menu-toggle{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-webkit-box-flex:1;-ms-flex:1;flex:1}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"],
                template: "<mat-toolbar [color]=\"color\"\n             [style.background-image]=\"backgroundImage\"\n             [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n             class=\"td-nagivation-drawer-toolbar\">\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div *ngIf=\"icon || logo || sidenavTitle\"\n          class=\"td-navigation-drawer-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\"\n        href\n        *ngIf=\"email || name\"\n        (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{email || name}}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                animations: [common.TdCollapseAnimation()],
            },] },
];
TdNavigationDrawerComponent.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: router.Router, decorators: [{ type: core.Optional },] },
    { type: platformBrowser.DomSanitizer, },
]; };
TdNavigationDrawerComponent.propDecorators = {
    "_drawerMenu": [{ type: core.ContentChildren, args: [TdNavigationDrawerMenuDirective,] },],
    "_toolbar": [{ type: core.ContentChildren, args: [TdNavigationDrawerToolbarDirective,] },],
    "sidenavTitle": [{ type: core.Input, args: ['sidenavTitle',] },],
    "icon": [{ type: core.Input, args: ['icon',] },],
    "logo": [{ type: core.Input, args: ['logo',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "navigationRoute": [{ type: core.Input, args: ['navigationRoute',] },],
    "backgroundUrl": [{ type: core.Input, args: ['backgroundUrl',] },],
    "name": [{ type: core.Input, args: ['name',] },],
    "email": [{ type: core.Input, args: ['email',] },],
};
var TD_LAYOUTS = [
    TdLayoutComponent,
    TdLayoutToggleDirective,
    TdLayoutCloseDirective,
    TdLayoutOpenDirective,
    TdLayoutNavComponent,
    TdLayoutNavListComponent,
    TdLayoutNavListToggleDirective,
    TdLayoutNavListCloseDirective,
    TdLayoutNavListOpenDirective,
    TdLayoutCardOverComponent,
    TdLayoutManageListComponent,
    TdLayoutManageListToggleDirective,
    TdLayoutManageListCloseDirective,
    TdLayoutManageListOpenDirective,
    TdLayoutFooterComponent,
    TdNavigationDrawerComponent,
    TdNavigationDrawerMenuDirective,
    TdNavigationDrawerToolbarDirective,
];
var CovalentLayoutModule = /** @class */ (function () {
    function CovalentLayoutModule() {
    }
    return CovalentLayoutModule;
}());
CovalentLayoutModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common$1.CommonModule,
                    scrolling.ScrollDispatchModule,
                    sidenav.MatSidenavModule,
                    toolbar.MatToolbarModule,
                    button.MatButtonModule,
                    icon.MatIconModule,
                    card.MatCardModule,
                    divider.MatDividerModule,
                ],
                declarations: [
                    TD_LAYOUTS,
                ],
                exports: [
                    TD_LAYOUTS,
                ],
            },] },
];
CovalentLayoutModule.ctorParameters = function () { return []; };

exports.CovalentLayoutModule = CovalentLayoutModule;
exports.TdLayoutComponent = TdLayoutComponent;
exports.TdLayoutToggleDirective = TdLayoutToggleDirective;
exports.TdLayoutCloseDirective = TdLayoutCloseDirective;
exports.TdLayoutOpenDirective = TdLayoutOpenDirective;
exports.LayoutToggleBase = LayoutToggleBase;
exports._TdLayoutToggleMixinBase = _TdLayoutToggleMixinBase;
exports.LayoutToggle = LayoutToggle;
exports.TdLayoutCardOverComponent = TdLayoutCardOverComponent;
exports.TdLayoutFooterComponent = TdLayoutFooterComponent;
exports.TdLayoutManageListComponent = TdLayoutManageListComponent;
exports.TdLayoutManageListToggleDirective = TdLayoutManageListToggleDirective;
exports.TdLayoutManageListCloseDirective = TdLayoutManageListCloseDirective;
exports.TdLayoutManageListOpenDirective = TdLayoutManageListOpenDirective;
exports.TdLayoutNavComponent = TdLayoutNavComponent;
exports.TdLayoutNavListComponent = TdLayoutNavListComponent;
exports.TdLayoutNavListToggleDirective = TdLayoutNavListToggleDirective;
exports.TdLayoutNavListCloseDirective = TdLayoutNavListCloseDirective;
exports.TdLayoutNavListOpenDirective = TdLayoutNavListOpenDirective;
exports.TdNavigationDrawerMenuDirective = TdNavigationDrawerMenuDirective;
exports.TdNavigationDrawerToolbarDirective = TdNavigationDrawerToolbarDirective;
exports.TdNavigationDrawerComponent = TdNavigationDrawerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-layout.umd.js.map
