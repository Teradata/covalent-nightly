(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/sidenav'), require('@covalent/core/common'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/common'), require('@angular/cdk/scrolling'), require('@angular/material/toolbar'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/card'), require('@angular/material/divider')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/layout', ['exports', '@angular/core', '@angular/material/sidenav', '@covalent/core/common', '@angular/router', '@angular/platform-browser', '@angular/common', '@angular/cdk/scrolling', '@angular/material/toolbar', '@angular/material/button', '@angular/material/icon', '@angular/material/card', '@angular/material/divider'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.layout = {}),global.ng.core,global.ng.material.sidenav,global.covalent.core.common,global.ng.router,global.ng.platformBrowser,global.ng.common,global.ng.cdk.scrolling,global.ng.material.toolbar,global.ng.material.button,global.ng.material.icon,global.ng.material.card,global.ng.material.divider));
}(this, (function (exports,core,sidenav,common,router,platformBrowser,common$1,scrolling,toolbar,button,icon,card,divider) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutComponent = /** @class */ (function () {
        function TdLayoutComponent() {
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "over".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'over';
            /**
             * opened?: boolean
             *
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "false".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = false;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "320px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '320px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */ function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.toggle(!this.sidenav.opened);
            };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.open();
            };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.close();
            };
        TdLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout',
                        template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\">\n  <mat-sidenav #sidenav\n              class=\"td-layout-sidenav\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\"\n              [disableClose]=\"disableClose\">\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
                        styles: [":host{display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host ::ng-deep>mat-sidenav-container .mat-drawer>.mat-drawer-inner-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"]
                    }] }
        ];
        TdLayoutComponent.propDecorators = {
            sidenav: [{ type: core.ViewChild, args: [sidenav.MatSidenav,] }],
            mode: [{ type: core.Input, args: ['mode',] }],
            opened: [{ type: core.Input, args: ['opened',] }],
            sidenavWidth: [{ type: core.Input, args: ['sidenavWidth',] }],
            containerAutosize: [{ type: core.Input, args: ['containerAutosize',] }]
        };
        return TdLayoutComponent;
    }());

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LayoutToggleBase = /** @class */ (function () {
        function LayoutToggleBase() {
        }
        return LayoutToggleBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdLayoutToggleMixinBase = common.mixinDisabled(LayoutToggleBase);
    /**
     * @abstract
     */
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
            /**
             * hideWhenOpened?: boolean
             * When this is set to true, the host will be hidden when
             * the sidenav is opened.
             */
            set: /**
             * hideWhenOpened?: boolean
             * When this is set to true, the host will be hidden when
             * the sidenav is opened.
             * @param {?} hideWhenOpened
             * @return {?}
             */ function (hideWhenOpened) {
                this._hideWhenOpened = hideWhenOpened;
                if (this._initialized) {
                    this._toggleVisibility();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LayoutToggle.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._initialized = true;
                this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(function () {
                    _this._toggleVisibility();
                });
                // execute toggleVisibility since the onOpenStart and onCloseStart
                // methods might not be executed always when the element is rendered
                this._toggleVisibility();
            };
        /**
         * @return {?}
         */
        LayoutToggle.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._toggleSubs) {
                    this._toggleSubs.unsubscribe();
                    this._toggleSubs = undefined;
                }
            };
        /**
         * Listens to host click event to trigger the layout toggle
         */
        /**
         * Listens to host click event to trigger the layout toggle
         * @param {?} event
         * @return {?}
         */
        LayoutToggle.prototype.clickListener = /**
         * Listens to host click event to trigger the layout toggle
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                if (!this.disabled) {
                    this.onClick();
                }
            };
        /**
         * @return {?}
         */
        LayoutToggle.prototype._toggleVisibility = /**
         * @return {?}
         */
            function () {
                if (this._layout.sidenav.opened && this._hideWhenOpened) {
                    this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
                }
                else {
                    this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
                }
            };
        LayoutToggle.propDecorators = {
            hideWhenOpened: [{ type: core.Input, args: ['hideWhenOpened',] }],
            clickListener: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return LayoutToggle;
    }(_TdLayoutToggleMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutToggleDirective, _super);
        function TdLayoutToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
            set: /**
             * @param {?} tdLayoutToggle
             * @return {?}
             */ function (tdLayoutToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutToggle)) === '' || tdLayoutToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.toggle();
            };
        TdLayoutToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutToggleDirective.ctorParameters = function () {
            return [
                { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutToggleDirective.propDecorators = {
            tdLayoutToggle: [{ type: core.Input, args: ['tdLayoutToggle',] }]
        };
        return TdLayoutToggleDirective;
    }(LayoutToggle));
    var TdLayoutCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutCloseDirective, _super);
        function TdLayoutCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
            set: /**
             * @param {?} tdLayoutClose
             * @return {?}
             */ function (tdLayoutClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutClose)) === '' || tdLayoutClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutCloseDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.close();
            };
        TdLayoutCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutClose]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutCloseDirective.ctorParameters = function () {
            return [
                { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutCloseDirective.propDecorators = {
            tdLayoutClose: [{ type: core.Input, args: ['tdLayoutClose',] }]
        };
        return TdLayoutCloseDirective;
    }(LayoutToggle));
    var TdLayoutOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutOpenDirective, _super);
        function TdLayoutOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
            set: /**
             * @param {?} tdLayoutOpen
             * @return {?}
             */ function (tdLayoutOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutOpen)) === '' || tdLayoutOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutOpenDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.open();
            };
        TdLayoutOpenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutOpen]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutOpenDirective.ctorParameters = function () {
            return [
                { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutOpenDirective.propDecorators = {
            tdLayoutClose: [{ type: core.Input, args: ['tdLayoutOpen',] }]
        };
        return TdLayoutOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutNavComponent = /** @class */ (function () {
        function TdLayoutNavComponent(_router) {
            this._router = _router;
            /**
             * color?: string
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLayoutNavComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             */
            get: /**
             * Checks if router was injected.
             * @return {?}
             */ function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavComponent.prototype.handleNavigationClick = /**
         * @return {?}
         */
            function () {
                if (this.routerEnabled) {
                    this._router.navigateByUrl(this.navigationRoute);
                }
            };
        TdLayoutNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout-nav',
                        template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span *ngIf=\"icon || logo || toolbarTitle\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n          class=\"td-layout-nav-toolbar-content\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
                        styles: [".td-menu-button{margin-left:0}::ng-deep [dir=rtl] .td-menu-button{margin-right:0;margin-left:6px}:host{display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host .td-layout-nav-wrapper{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%}:host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host .td-layout-nav-wrapper .td-layout-nav-content{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutNavComponent.ctorParameters = function () {
            return [
                { type: router.Router, decorators: [{ type: core.Optional }] }
            ];
        };
        TdLayoutNavComponent.propDecorators = {
            toolbarTitle: [{ type: core.Input, args: ['toolbarTitle',] }],
            icon: [{ type: core.Input, args: ['icon',] }],
            logo: [{ type: core.Input, args: ['logo',] }],
            color: [{ type: core.Input, args: ['color',] }],
            navigationRoute: [{ type: core.Input, args: ['navigationRoute',] }]
        };
        return TdLayoutNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutNavListComponent = /** @class */ (function () {
        function TdLayoutNavListComponent(_router) {
            this._router = _router;
            /**
             * color?: string
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "side".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'side';
            /**
             * opened?: boolean
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "true".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = true;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "350px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '350px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */ function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             */
            get: /**
             * Checks if router was injected.
             * @return {?}
             */ function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.handleNavigationClick = /**
         * @return {?}
         */
            function () {
                if (this.routerEnabled) {
                    this._router.navigateByUrl(this.navigationRoute);
                }
            };
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.toggle(!this.sidenav.opened);
            };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.open();
            };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.close();
            };
        TdLayoutNavListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout-nav-list',
                        template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav #sidenav\n                position=\"start\"\n                [mode]=\"mode\"\n                [opened]=\"opened\"\n                [disableClose]=\"disableClose\"\n                [style.max-width]=\"sidenavWidth\"\n                [style.min-width]=\"sidenavWidth\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span *ngIf=\"icon || logo || toolbarTitle\"\n              class=\"td-layout-nav-list-toolbar-content\"\n              [class.cursor-pointer]=\"routerEnabled\"\n              (click)=\"handleNavigationClick()\">\n          <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>",
                        styles: [":host{margin:0;width:100%;min-height:100%;height:100%;overflow:hidden;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-right:0}[dir=rtl] :host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-left:0}:host .td-layout-nav-list-wrapper{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{text-align:start;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer>.mat-drawer-inner-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutNavListComponent.ctorParameters = function () {
            return [
                { type: router.Router, decorators: [{ type: core.Optional }] }
            ];
        };
        TdLayoutNavListComponent.propDecorators = {
            sidenav: [{ type: core.ViewChild, args: [sidenav.MatSidenav,] }],
            toolbarTitle: [{ type: core.Input, args: ['toolbarTitle',] }],
            icon: [{ type: core.Input, args: ['icon',] }],
            logo: [{ type: core.Input, args: ['logo',] }],
            color: [{ type: core.Input, args: ['color',] }],
            mode: [{ type: core.Input, args: ['mode',] }],
            opened: [{ type: core.Input, args: ['opened',] }],
            sidenavWidth: [{ type: core.Input, args: ['sidenavWidth',] }],
            containerAutosize: [{ type: core.Input, args: ['containerAutosize',] }],
            navigationRoute: [{ type: core.Input, args: ['navigationRoute',] }]
        };
        return TdLayoutNavListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListToggleDirective, _super);
        function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
            set: /**
             * @param {?} tdLayoutNavListToggle
             * @return {?}
             */ function (tdLayoutNavListToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.toggle();
            };
        TdLayoutNavListToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutNavListToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListToggleDirective.ctorParameters = function () {
            return [
                { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutNavListToggleDirective.propDecorators = {
            tdLayoutNavListToggle: [{ type: core.Input, args: ['tdLayoutNavListToggle',] }]
        };
        return TdLayoutNavListToggleDirective;
    }(LayoutToggle));
    var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListCloseDirective, _super);
        function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
            set: /**
             * @param {?} tdLayoutNavListClose
             * @return {?}
             */ function (tdLayoutNavListClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListCloseDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.close();
            };
        TdLayoutNavListCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutNavListClose]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListCloseDirective.ctorParameters = function () {
            return [
                { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutNavListCloseDirective.propDecorators = {
            tdLayoutNavListClose: [{ type: core.Input, args: ['tdLayoutNavListClose',] }]
        };
        return TdLayoutNavListCloseDirective;
    }(LayoutToggle));
    var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListOpenDirective, _super);
        function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
            set: /**
             * @param {?} tdLayoutNavListOpen
             * @return {?}
             */ function (tdLayoutNavListOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListOpenDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.open();
            };
        TdLayoutNavListOpenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutNavListOpen]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListOpenDirective.ctorParameters = function () {
            return [
                { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutNavListOpenDirective.propDecorators = {
            tdLayoutNavListOpen: [{ type: core.Input, args: ['tdLayoutNavListOpen',] }]
        };
        return TdLayoutNavListOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutCardOverComponent = /** @class */ (function () {
        function TdLayoutCardOverComponent() {
            /**
             * cardWidth?: string
             *
             * Card flex width in %.
             * Defaults to 70%.
             */
            this.cardWidth = 70;
            /**
             * color?: string
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
        }
        TdLayoutCardOverComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout-card-over',
                        template: "<mat-toolbar [color]=\"color\">\n</mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div class=\"td-layout-card-over\"\n        [style.max-width.%]=\"cardWidth\"\n        [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-webkit-box-flex]=\"1\">\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                        styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
                    }] }
        ];
        TdLayoutCardOverComponent.propDecorators = {
            cardTitle: [{ type: core.Input, args: ['cardTitle',] }],
            cardSubtitle: [{ type: core.Input, args: ['cardSubtitle',] }],
            cardWidth: [{ type: core.Input, args: ['cardWidth',] }],
            color: [{ type: core.Input, args: ['color',] }]
        };
        return TdLayoutCardOverComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutManageListComponent = /** @class */ (function () {
        function TdLayoutManageListComponent() {
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "side".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'side';
            /**
             * opened?: boolean
             *
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "true".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = true;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "257px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '257px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */ function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.toggle(!this.sidenav.opened);
            };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.open();
            };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.close();
            };
        TdLayoutManageListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout-manage-list',
                        template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-manage-list\">\n  <mat-sidenav #sidenav\n              position=\"start\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [disableClose]=\"disableClose\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\">\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
                        styles: [":host{display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host mat-sidenav-container.td-layout-manage-list{-ms-flex:1;flex:1}:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closed,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closing,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opened,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opening{box-shadow:0 1px 3px 0 rgba(0,0,0,.2)}:host .td-layout-manage-list-sidenav{text-align:start;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-manage-list-main{margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex}:host .td-layout-manage-list-main .td-layout-manage-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-ms-flex:1;flex:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer-content{-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{font-size:14px}:host ::ng-deep .mat-toolbar{font-weight:400}"]
                    }] }
        ];
        TdLayoutManageListComponent.propDecorators = {
            sidenav: [{ type: core.ViewChild, args: [sidenav.MatSidenav,] }],
            mode: [{ type: core.Input, args: ['mode',] }],
            opened: [{ type: core.Input, args: ['opened',] }],
            sidenavWidth: [{ type: core.Input, args: ['sidenavWidth',] }],
            containerAutosize: [{ type: core.Input, args: ['containerAutosize',] }]
        };
        return TdLayoutManageListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListToggleDirective, _super);
        function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
            set: /**
             * @param {?} tdLayoutManageListToggle
             * @return {?}
             */ function (tdLayoutManageListToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.toggle();
            };
        TdLayoutManageListToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutManageListToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListToggleDirective.ctorParameters = function () {
            return [
                { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutManageListToggleDirective.propDecorators = {
            tdLayoutManageListToggle: [{ type: core.Input, args: ['tdLayoutManageListToggle',] }]
        };
        return TdLayoutManageListToggleDirective;
    }(LayoutToggle));
    var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListCloseDirective, _super);
        function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
            set: /**
             * @param {?} tdLayoutManageListClose
             * @return {?}
             */ function (tdLayoutManageListClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListCloseDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.close();
            };
        TdLayoutManageListCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutManageListClose]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListCloseDirective.ctorParameters = function () {
            return [
                { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutManageListCloseDirective.propDecorators = {
            tdLayoutManageListClose: [{ type: core.Input, args: ['tdLayoutManageListClose',] }]
        };
        return TdLayoutManageListCloseDirective;
    }(LayoutToggle));
    var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListOpenDirective, _super);
        function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
            set: /**
             * @param {?} tdLayoutManageListOpen
             * @return {?}
             */ function (tdLayoutManageListOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListOpenDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.open();
            };
        TdLayoutManageListOpenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutManageListOpen]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListOpenDirective.ctorParameters = function () {
            return [
                { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutManageListOpenDirective.propDecorators = {
            tdLayoutManageListOpen: [{ type: core.Input, args: ['tdLayoutManageListOpen',] }]
        };
        return TdLayoutManageListOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutFooterComponent = /** @class */ (function () {
        function TdLayoutFooterComponent(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
        }
        Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            /**
             * color?: string
             *
             * Optional color option: primary | accent | warn.
             */
            set: /**
             * color?: string
             *
             * Optional color option: primary | accent | warn.
             * @param {?} color
             * @return {?}
             */ function (color) {
                if (color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                    this._color = color;
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
                }
            },
            enumerable: true,
            configurable: true
        });
        TdLayoutFooterComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'td-layout-footer,td-layout-footer-inner',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{display:block;padding:10px 16px}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutFooterComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdLayoutFooterComponent.propDecorators = {
            color: [{ type: core.Input, args: ['color',] }]
        };
        return TdLayoutFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdNavigationDrawerMenuDirective = /** @class */ (function () {
        function TdNavigationDrawerMenuDirective() {
        }
        TdNavigationDrawerMenuDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-navigation-drawer-menu]',
                    },] }
        ];
        return TdNavigationDrawerMenuDirective;
    }());
    var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
        function TdNavigationDrawerToolbarDirective() {
        }
        TdNavigationDrawerToolbarDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-navigation-drawer-toolbar]',
                    },] }
        ];
        return TdNavigationDrawerToolbarDirective;
    }());
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function (backgroundUrl) {
                if (backgroundUrl) {
                    /** @type {?} */
                    var sanitizedUrl = this._sanitize.sanitize(core.SecurityContext.RESOURCE_URL, backgroundUrl);
                    this._backgroundImage = this._sanitize.sanitize(core.SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
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
                this._closeSubscription = this._layout.sidenav.openedChange.subscribe(function (opened) {
                    if (!opened) {
                        _this._menuToggled = false;
                    }
                });
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
            { type: core.Component, args: [{
                        selector: 'td-navigation-drawer',
                        template: "<mat-toolbar [color]=\"color\"\n             [style.background-image]=\"backgroundImage\"\n             [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n             class=\"td-nagivation-drawer-toolbar\">\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div *ngIf=\"icon || logo || sidenavTitle\"\n          class=\"td-navigation-drawer-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\"\n        href\n        *ngIf=\"email || name\"\n        (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{email || name}}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                        animations: [common.tdCollapseAnimation],
                        styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host mat-toolbar .td-navigation-drawer-menu-toggle{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-ms-flex:1;flex:1}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavigationDrawerComponent.ctorParameters = function () {
            return [
                { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] }] },
                { type: router.Router, decorators: [{ type: core.Optional }] },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        TdNavigationDrawerComponent.propDecorators = {
            _drawerMenu: [{ type: core.ContentChildren, args: [TdNavigationDrawerMenuDirective,] }],
            _toolbar: [{ type: core.ContentChildren, args: [TdNavigationDrawerToolbarDirective,] }],
            sidenavTitle: [{ type: core.Input, args: ['sidenavTitle',] }],
            icon: [{ type: core.Input, args: ['icon',] }],
            logo: [{ type: core.Input, args: ['logo',] }],
            color: [{ type: core.Input, args: ['color',] }],
            navigationRoute: [{ type: core.Input, args: ['navigationRoute',] }],
            backgroundUrl: [{ type: core.Input, args: ['backgroundUrl',] }],
            name: [{ type: core.Input, args: ['name',] }],
            email: [{ type: core.Input, args: ['email',] }]
        };
        return TdNavigationDrawerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
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
                    },] }
        ];
        return CovalentLayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1sYXlvdXQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC9sYXlvdXQtdG9nZ2xlLmNsYXNzLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LmRpcmVjdGl2ZXMudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC9sYXlvdXQtbmF2L2xheW91dC1uYXYuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC9sYXlvdXQtbmF2LWxpc3QvbGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC9sYXlvdXQtY2FyZC1vdmVyL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LW1hbmFnZS1saXN0L2xheW91dC1tYW5hZ2UtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC9sYXlvdXQtbWFuYWdlLWxpc3QvbGF5b3V0LW1hbmFnZS1saXN0LmRpcmVjdGl2ZXMudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC9sYXlvdXQtZm9vdGVyL2xheW91dC1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbmF2aWdhdGlvbi1kcmF3ZXIvbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbmltcG9ydCB7IElMYXlvdXRUb2dnbGFibGUgfSBmcm9tICcuL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sYXlvdXQnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIElMYXlvdXRUb2dnbGFibGUge1xuXG4gIEBWaWV3Q2hpbGQoTWF0U2lkZW5hdikgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICAvKipcbiAgICogbW9kZT86ICdzaWRlJywgJ3B1c2gnIG9yICdvdmVyJ1xuICAgKlxuICAgKiBUaGUgbW9kZSBvciBzdHlsaW5nIG9mIHRoZSBzaWRlbmF2LlxuICAgKiBEZWZhdWx0cyB0byBcIm92ZXJcIi5cbiAgICogU2VlIFwiTWF0U2lkZW5hdlwiIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mby5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdtb2RlJykgbW9kZTogJ3NpZGUnIHwgJ3B1c2gnIHwgJ292ZXInID0gJ292ZXInO1xuXG4gIC8qKlxuICAgKiBvcGVuZWQ/OiBib29sZWFuXG4gICAqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzaWRlbmF2IGlzIG9wZW5lZC4gVXNlIHRoaXMgYmluZGluZyB0byBvcGVuL2Nsb3NlIHRoZSBzaWRlbmF2LlxuICAgKiBEZWZhdWx0cyB0byBcImZhbHNlXCIuXG4gICAqXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJykgb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHNpZGVuYXZXaWR0aD86IHN0cmluZ1xuICAgKlxuICAgKiBTZXRzIHRoZSBcIndpZHRoXCIgb2YgdGhlIHNpZGVuYXYgaW4gZWl0aGVyIFwicHhcIiBvciBcIiVcIlxuICAgKiBEZWZhdWx0cyB0byBcIjMyMHB4XCIuXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnc2lkZW5hdldpZHRoJykgc2lkZW5hdldpZHRoOiBzdHJpbmcgPSAnMzIwcHgnO1xuXG4gIC8qKlxuICAgKiBjb250YWluZXJBdXRvc2l6ZT86IGJvb2xlYW5cbiAgICpcbiAgICogU2V0cyBcImF1dG9zaXplXCIgb2YgdGhlIHNpZGVuYXYtY29udGFpbmVyLlxuICAgKiBEZWZhdWx0cyB0byBcImZhbHNlXCIuXG4gICAqXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8gYW5kIHBvdGVudGlhbCBwZXJmb3JtYW5jZSByaXNrcy5cbiAgICogXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9ibG9iL21hc3Rlci9zcmMvbGliL3NpZGVuYXYvc2lkZW5hdi5tZCNyZXNpemluZy1hbi1vcGVuLXNpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnY29udGFpbmVyQXV0b3NpemUnKSBjb250YWluZXJBdXRvc2l6ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYEVTQ2Agc2hvdWxkIGNsb3NlIHRoZSBzaWRlbmF2XG4gICAqIFNob3VsZCBvbmx5IGNsb3NlIGl0IGZvciBgcHVzaGAgYW5kIGBvdmVyYCBtb2Rlc1xuICAgKi9cbiAgZ2V0IGRpc2FibGVDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnc2lkZSc7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgdG9nZ2xlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LnRvZ2dsZSghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgb3BlbiBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IGNsb3NlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXREcmF3ZXJUb2dnbGVSZXN1bHQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTGF5b3V0VG9nZ2xhYmxlIHtcbiAgb3BlbmVkOiBib29sZWFuO1xuICBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuICB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xuICBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PjtcbiAgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xufVxuXG5leHBvcnQgY2xhc3MgTGF5b3V0VG9nZ2xlQmFzZSB7IH1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkTGF5b3V0VG9nZ2xlTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlZChMYXlvdXRUb2dnbGVCYXNlKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheW91dFRvZ2dsZSBleHRlbmRzIF9UZExheW91dFRvZ2dsZU1peGluQmFzZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSUNhbkRpc2FibGUge1xuXG4gIHByaXZhdGUgX3RvZ2dsZVN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9oaWRlV2hlbk9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBoaWRlV2hlbk9wZW5lZD86IGJvb2xlYW5cbiAgICogV2hlbiB0aGlzIGlzIHNldCB0byB0cnVlLCB0aGUgaG9zdCB3aWxsIGJlIGhpZGRlbiB3aGVuXG4gICAqIHRoZSBzaWRlbmF2IGlzIG9wZW5lZC5cbiAgICovXG4gIEBJbnB1dCgnaGlkZVdoZW5PcGVuZWQnKVxuICBzZXQgaGlkZVdoZW5PcGVuZWQoaGlkZVdoZW5PcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlV2hlbk9wZW5lZCA9IGhpZGVXaGVuT3BlbmVkO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5fdG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfbGF5b3V0OiBJTGF5b3V0VG9nZ2xhYmxlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1sYXlvdXQtbWVudS1idXR0b24nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fdG9nZ2xlU3VicyA9IHRoaXMuX2xheW91dC5zaWRlbmF2Ll9hbmltYXRpb25TdGFydGVkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gICAgLy8gZXhlY3V0ZSB0b2dnbGVWaXNpYmlsaXR5IHNpbmNlIHRoZSBvbk9wZW5TdGFydCBhbmQgb25DbG9zZVN0YXJ0XG4gICAgLy8gbWV0aG9kcyBtaWdodCBub3QgYmUgZXhlY3V0ZWQgYWx3YXlzIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVuZGVyZWRcbiAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlU3Vicykge1xuICAgICAgdGhpcy5fdG9nZ2xlU3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fdG9nZ2xlU3VicyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGNsaWNrIGV2ZW50IHRvIHRyaWdnZXIgdGhlIGxheW91dCB0b2dnbGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYWJzdHJhY3Qgb25DbGljaygpOiB2b2lkO1xuXG4gIHByaXZhdGUgX3RvZ2dsZVZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xheW91dC5zaWRlbmF2Lm9wZW5lZCAmJiB0aGlzLl9oaWRlV2hlbk9wZW5lZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUb2dnbGUgfSBmcm9tICcuL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXRUb2dnbGUnKSBcbiAgc2V0IHRkTGF5b3V0VG9nZ2xlKHRkTGF5b3V0VG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dFRvZ2dsZSA9PT0gJycgfHwgdGRMYXlvdXRUb2dnbGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0Q2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRDbG9zZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG4gIFxuICBASW5wdXQoJ3RkTGF5b3V0Q2xvc2UnKSBcbiAgc2V0IHRkTGF5b3V0Q2xvc2UodGRMYXlvdXRDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXRDbG9zZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE9wZW5dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRPcGVuRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0T3BlbicpIFxuICBzZXQgdGRMYXlvdXRDbG9zZSh0ZExheW91dE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0T3BlbiA9PT0gJycgfHwgdGRMYXlvdXRPcGVuKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1uYXYnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtbmF2LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW5hdi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2Q29tcG9uZW50IHtcblxuICAvKipcbiAgICogdG9vbGJhclRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFRpdGxlIHNldCBpbiB0b29sYmFyLlxuICAgKi9cbiAgQElucHV0KCd0b29sYmFyVGl0bGUnKSB0b29sYmFyVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgnaWNvbicpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCdsb2dvJykgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgcHJpbWFyeSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRpb25Sb3V0ZT86IHN0cmluZ1xuICAgKlxuICAgKiBvcHRpb24gdG8gc2V0IHRoZSBjb21iaW5lZCByb3V0ZSBmb3IgdGhlIGljb24sIGxvZ28sIGFuZCB0b29sYmFyVGl0bGUuXG4gICAqL1xuICBASW5wdXQoJ25hdmlnYXRpb25Sb3V0ZScpIG5hdmlnYXRpb25Sb3V0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm91dGVyIHdhcyBpbmplY3RlZC5cbiAgICovXG4gIGdldCByb3V0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3JvdXRlciAmJiAhIXRoaXMubmF2aWdhdGlvblJvdXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgaGFuZGxlTmF2aWdhdGlvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubmF2aWdhdGlvblJvdXRlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJTGF5b3V0VG9nZ2xhYmxlIH0gZnJvbSAnLi4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1uYXYtbGlzdCcsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIElMYXlvdXRUb2dnbGFibGUge1xuXG4gIEBWaWV3Q2hpbGQoTWF0U2lkZW5hdikgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICAvKipcbiAgICogdG9vbGJhclRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFRpdGxlIHNldCBpbiB0b29sYmFyLlxuICAgKi9cbiAgQElucHV0KCd0b29sYmFyVGl0bGUnKSB0b29sYmFyVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgnaWNvbicpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCdsb2dvJykgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgcHJpbWFyeSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiAnc2lkZScsICdwdXNoJyBvciAnb3ZlcidcbiAgICpcbiAgICogVGhlIG1vZGUgb3Igc3R5bGluZyBvZiB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJzaWRlXCIuXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnbW9kZScpIG1vZGU6ICdzaWRlJyB8ICdwdXNoJyB8ICdvdmVyJyA9ICdzaWRlJztcblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuIFVzZSB0aGlzIGJpbmRpbmcgdG8gb3Blbi9jbG9zZSB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJ0cnVlXCIuXG4gICAqXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJykgb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogc2lkZW5hdldpZHRoPzogc3RyaW5nXG4gICAqXG4gICAqIFNldHMgdGhlIFwid2lkdGhcIiBvZiB0aGUgc2lkZW5hdiBpbiBlaXRoZXIgXCJweFwiIG9yIFwiJVwiXG4gICAqIERlZmF1bHRzIHRvIFwiMzUwcHhcIi5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdzaWRlbmF2V2lkdGgnKSBzaWRlbmF2V2lkdGg6IHN0cmluZyA9ICczNTBweCc7XG5cbiAgLyoqXG4gICAqIGNvbnRhaW5lckF1dG9zaXplPzogYm9vbGVhblxuICAgKlxuICAgKiBTZXRzIFwiYXV0b3NpemVcIiBvZiB0aGUgc2lkZW5hdi1jb250YWluZXIuXG4gICAqIERlZmF1bHRzIHRvIFwiZmFsc2VcIi5cbiAgICpcbiAgICogU2VlIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mbyBhbmQgcG90ZW50aWFsIHBlcmZvcm1hbmNlIHJpc2tzLlxuICAgKiBcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2Jsb2IvbWFzdGVyL3NyYy9saWIvc2lkZW5hdi9zaWRlbmF2Lm1kI3Jlc2l6aW5nLWFuLW9wZW4tc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdjb250YWluZXJBdXRvc2l6ZScpIGNvbnRhaW5lckF1dG9zaXplOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHRvb2xiYXJUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgnbmF2aWdhdGlvblJvdXRlJykgbmF2aWdhdGlvblJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgRVNDYCBzaG91bGQgY2xvc2UgdGhlIHNpZGVuYXZcbiAgICogU2hvdWxkIG9ubHkgY2xvc2UgaXQgZm9yIGBwdXNoYCBhbmQgYG92ZXJgIG1vZGVzXG4gICAqL1xuICBnZXQgZGlzYWJsZUNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdzaWRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm91dGVyIHdhcyBpbmplY3RlZC5cbiAgICovXG4gIGdldCByb3V0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3JvdXRlciAmJiAhIXRoaXMubmF2aWdhdGlvblJvdXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgaGFuZGxlTmF2aWdhdGlvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubmF2aWdhdGlvblJvdXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgdG9nZ2xlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LnRvZ2dsZSghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgb3BlbiBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IGNsb3NlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dFRvZ2dsZSB9IGZyb20gJy4uL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXROYXZMaXN0VG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdFRvZ2dsZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dE5hdkxpc3RUb2dnbGUnKSBcbiAgc2V0IHRkTGF5b3V0TmF2TGlzdFRvZ2dsZSh0ZExheW91dE5hdkxpc3RUb2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TmF2TGlzdFRvZ2dsZSA9PT0gJycgfHwgdGRMYXlvdXROYXZMaXN0VG9nZ2xlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE5hdkxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TmF2TGlzdENsb3NlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdENsb3NlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcbiAgXG4gIEBJbnB1dCgndGRMYXlvdXROYXZMaXN0Q2xvc2UnKSBcbiAgc2V0IHRkTGF5b3V0TmF2TGlzdENsb3NlKHRkTGF5b3V0TmF2TGlzdENsb3NlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE5hdkxpc3RDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXROYXZMaXN0Q2xvc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE5hdkxpc3RPcGVuXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdE9wZW5EaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXROYXZMaXN0T3BlbicpIFxuICBzZXQgdGRMYXlvdXROYXZMaXN0T3Blbih0ZExheW91dE5hdkxpc3RPcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE5hdkxpc3RPcGVuID09PSAnJyB8fCB0ZExheW91dE5hdkxpc3RPcGVuKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE5hdkxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQub3BlbigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1jYXJkLW92ZXInLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0Q2FyZE92ZXJDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBjYXJkVGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogVGl0bGUgc2V0IGluIGNhcmQuXG4gICAqL1xuICBASW5wdXQoJ2NhcmRUaXRsZScpIGNhcmRUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjYXJkU3VidGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogU3VidGl0bGUgc2V0IGluIGNhcmQuXG4gICAqL1xuICBASW5wdXQoJ2NhcmRTdWJ0aXRsZScpIGNhcmRTdWJ0aXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjYXJkV2lkdGg/OiBzdHJpbmdcbiAgICpcbiAgICogQ2FyZCBmbGV4IHdpZHRoIGluICUuXG4gICAqIERlZmF1bHRzIHRvIDcwJS5cbiAgICovXG4gIEBJbnB1dCgnY2FyZFdpZHRoJykgY2FyZFdpZHRoOiBudW1iZXIgPSA3MDtcblxuICAvKipcbiAgICogY29sb3I/OiBzdHJpbmdcbiAgICpcbiAgICogdG9vbGJhciBjb2xvciBvcHRpb246IHByaW1hcnkgfCBhY2NlbnQgfCB3YXJuLlxuICAgKiBJZiBbY29sb3JdIGlzIG5vdCBzZXQsIHByaW1hcnkgaXMgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nID0gJ3ByaW1hcnknO1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXREcmF3ZXJUb2dnbGVSZXN1bHQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgSUxheW91dFRvZ2dsYWJsZSB9IGZyb20gJy4uL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sYXlvdXQtbWFuYWdlLWxpc3QnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBJTGF5b3V0VG9nZ2xhYmxlIHtcblxuICBAVmlld0NoaWxkKE1hdFNpZGVuYXYpIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiAnc2lkZScsICdwdXNoJyBvciAnb3ZlcidcbiAgICpcbiAgICogVGhlIG1vZGUgb3Igc3R5bGluZyBvZiB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJzaWRlXCIuXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnbW9kZScpIG1vZGU6ICdzaWRlJyB8ICdwdXNoJyB8ICdvdmVyJyA9ICdzaWRlJztcblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuIFVzZSB0aGlzIGJpbmRpbmcgdG8gb3Blbi9jbG9zZSB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJ0cnVlXCIuXG4gICAqXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJykgb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogc2lkZW5hdldpZHRoPzogc3RyaW5nXG4gICAqXG4gICAqIFNldHMgdGhlIFwid2lkdGhcIiBvZiB0aGUgc2lkZW5hdiBpbiBlaXRoZXIgXCJweFwiIG9yIFwiJVwiXG4gICAqIERlZmF1bHRzIHRvIFwiMjU3cHhcIi5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdzaWRlbmF2V2lkdGgnKSBzaWRlbmF2V2lkdGg6IHN0cmluZyA9ICcyNTdweCc7XG5cbiAgLyoqXG4gICAqIGNvbnRhaW5lckF1dG9zaXplPzogYm9vbGVhblxuICAgKlxuICAgKiBTZXRzIFwiYXV0b3NpemVcIiBvZiB0aGUgc2lkZW5hdi1jb250YWluZXIuXG4gICAqIERlZmF1bHRzIHRvIFwiZmFsc2VcIi5cbiAgICpcbiAgICogU2VlIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mbyBhbmQgcG90ZW50aWFsIHBlcmZvcm1hbmNlIHJpc2tzLlxuICAgKiBcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2Jsb2IvbWFzdGVyL3NyYy9saWIvc2lkZW5hdi9zaWRlbmF2Lm1kI3Jlc2l6aW5nLWFuLW9wZW4tc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdjb250YWluZXJBdXRvc2l6ZScpIGNvbnRhaW5lckF1dG9zaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgRVNDYCBzaG91bGQgY2xvc2UgdGhlIHNpZGVuYXZcbiAgICogU2hvdWxkIG9ubHkgY2xvc2UgaXQgZm9yIGBwdXNoYCBhbmQgYG92ZXJgIG1vZGVzXG4gICAqL1xuICBnZXQgZGlzYWJsZUNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdzaWRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSB0b2dnbGUgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYudG9nZ2xlKCF0aGlzLnNpZGVuYXYub3BlbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBvcGVuIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgY2xvc2UgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi5jbG9zZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1tYW5hZ2UtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0VG9nZ2xlIH0gZnJvbSAnLi4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE1hbmFnZUxpc3RUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZScpIFxuICBzZXQgdGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlKHRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlID09PSAnJyB8fCB0ZExheW91dE1hbmFnZUxpc3RUb2dnbGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuICBcbiAgQElucHV0KCd0ZExheW91dE1hbmFnZUxpc3RDbG9zZScpIFxuICBzZXQgdGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2UodGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TWFuYWdlTGlzdENsb3NlID09PSAnJyB8fCB0ZExheW91dE1hbmFnZUxpc3RDbG9zZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LmNsb3NlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TWFuYWdlTGlzdE9wZW5dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRNYW5hZ2VMaXN0T3BlbkRpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dE1hbmFnZUxpc3RPcGVuJykgXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RPcGVuKHRkTGF5b3V0TWFuYWdlTGlzdE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TWFuYWdlTGlzdE9wZW4gPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdE9wZW4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0LWZvb3Rlcix0ZC1sYXlvdXQtZm9vdGVyLWlubmVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWZvb3Rlci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dEZvb3RlckNvbXBvbmVudCB7XG5cbiAgcHJpdmF0ZSBfY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKlxuICAgKiBPcHRpb25hbCBjb2xvciBvcHRpb246IHByaW1hcnkgfCBhY2NlbnQgfCB3YXJuLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpXG4gIHNldCBjb2xvcihjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicpIHtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICAgIH1cbiAgfVxuICBnZXQgY29sb3IoKTogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybicge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1sYXlvdXQtZm9vdGVyJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIE9uSW5pdCwgT25EZXN0cm95LCBmb3J3YXJkUmVmLCBJbmplY3QsXG4gICAgICAgICBRdWVyeUxpc3QsIFNlY3VyaXR5Q29udGV4dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTYWZlUmVzb3VyY2VVcmwsIFNhZmVTdHlsZSwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNYXREcmF3ZXJUb2dnbGVSZXN1bHQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtbmF2aWdhdGlvbi1kcmF3ZXItbWVudV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlIHtcblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtbmF2aWdhdGlvbi1kcmF3ZXItdG9vbGJhcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlIHtcblxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1uYXZpZ2F0aW9uLWRyYXdlcicsXG4gIHN0eWxlVXJsczogWycuL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbIHRkQ29sbGFwc2VBbmltYXRpb24gXSxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2Nsb3NlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX21lbnVUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2JhY2tncm91bmRJbWFnZTogU2FmZVN0eWxlO1xuXG4gIGdldCBtZW51VG9nZ2xlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudVRvZ2dsZWQ7XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKFRkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmUpIF9kcmF3ZXJNZW51OiBRdWVyeUxpc3Q8VGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlKSBfdG9vbGJhcjogUXVlcnlMaXN0PFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmU+O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBbVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZV0gaGFzIGNvbnRlbnQuXG4gICAqL1xuICBnZXQgaXNNZW51QXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kcmF3ZXJNZW51ID8gdGhpcy5fZHJhd2VyTWVudS5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgW1RkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmVdIGhhcyBjb250ZW50LlxuICAgKi9cbiAgZ2V0IGlzQ3VzdG9tVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbGJhciA/IHRoaXMuX3Rvb2xiYXIubGVuZ3RoID4gMCA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIGJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSB0b29sYmFyLlxuICAgKi9cbiAgZ2V0IGlzQmFja2dyb3VuZEF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9iYWNrZ3JvdW5kSW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogc2lkZW5hdlRpdGxlPzogc3RyaW5nXG4gICAqIFRpdGxlIHNldCBpbiBzaWRlTmF2LlxuICAgKi9cbiAgQElucHV0KCdzaWRlbmF2VGl0bGUnKSBzaWRlbmF2VGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgnaWNvbicpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCdsb2dvJykgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgZGVmYXVsdCBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRpb25Sb3V0ZT86IHN0cmluZ1xuICAgKlxuICAgKiBvcHRpb24gdG8gc2V0IHRoZSBjb21iaW5lZCByb3V0ZSBmb3IgdGhlIGljb24sIGxvZ28sIGFuZCBzaWRlbmF2VGl0bGUuXG4gICAqL1xuICBASW5wdXQoJ25hdmlnYXRpb25Sb3V0ZScpIG5hdmlnYXRpb25Sb3V0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBiYWNrZ3JvdW5kVXJsPzogU2FmZVJlc291cmNlVXJsXG4gICAqXG4gICAqIGltYWdlIHRvIGJlIGRpc3BsYXllZCBhcyB0aGUgYmFja2dyb3VuZCBvZiB0aGUgdG9vbGJhci5cbiAgICogVVJMIHVzZWQgd2lsbCBiZSBzYW5pdGl6ZWQsIGJ1dCBpdCBzaG91bGQgYmUgYWx3YXlzIGZyb20gYSB0cnVzdGVkIHNvdXJjZSB0byBhdm9pZCBYU1MuXG4gICAqL1xuICBASW5wdXQoJ2JhY2tncm91bmRVcmwnKVxuICAvLyBUT0RPIEFuZ3VsYXIgY29tcGxhaW5zIHdpdGggd2FybmluZ3MgaWYgdGhpcyBpcyB0eXBlIFtTYWZlUmVzb3VyY2VVcmxdLi4gc28gd2Ugd2lsbCBtYWtlIGl0IDxhbnk+IHVudGlsIGl0cyBmaXhlZC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9pc3N1ZXMvMjk3N1xuICBzZXQgYmFja2dyb3VuZFVybChiYWNrZ3JvdW5kVXJsOiBhbnkpIHtcbiAgICBpZiAoYmFja2dyb3VuZFVybCkge1xuICAgICAgbGV0IHNhbml0aXplZFVybDogc3RyaW5nID0gdGhpcy5fc2FuaXRpemUuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgYmFja2dyb3VuZFVybCk7XG4gICAgICB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLl9zYW5pdGl6ZS5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuU1RZTEUsICd1cmwoJyArIHNhbml0aXplZFVybCArICcpJyk7XG4gICAgfVxuICB9XG4gIGdldCBiYWNrZ3JvdW5kSW1hZ2UoKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZEltYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hbWU/OiBzdHJpbmdcbiAgICpcbiAgICogc3RyaW5nIHRvIGJlIGRpc3BsYXllZCBhcyBwYXJ0IG9mIHRoZSBuYXZpZ2F0aW9uIGRyYXdlciBzdWJsYWJlbC5cbiAgICogaWYgW2VtYWlsXSBpcyBub3Qgc2V0LCB0aGVuIFtuYW1lXSB3aWxsIGJlIHRoZSB0b2dnbGUgbWVudSB0ZXh0LlxuICAgKi9cbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBlbWFpbD86IHN0cmluZ1xuICAgKlxuICAgKiBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGFzIHBhcnQgb2YgdGhlIG5hdmlnYXRpb24gZHJhd2VyIHN1YmxhYmVsIGluIHRoZSBbdG9nZ2xlXSBtZW51IHRleHQuXG4gICAqIGlmIFtlbWFpbF0gYW5kIFtuYW1lXSBhcmUgbm90IHNldCwgdGhlbiB0aGUgdG9nZ2xlIG1lbnUgaXMgbm90IHJlbmRlcmVkLlxuICAgKi9cbiAgQElucHV0KCdlbWFpbCcpIGVtYWlsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByb3V0ZXIgd2FzIGluamVjdGVkLlxuICAgKi9cbiAgZ2V0IHJvdXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fcm91dGVyICYmICEhdGhpcy5uYXZpZ2F0aW9uUm91dGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBwcml2YXRlIF9sYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2FuaXRpemU6IERvbVNhbml0aXplcikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbiA9IHRoaXMuX2xheW91dC5zaWRlbmF2Lm9wZW5lZENoYW5nZS5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fbWVudVRvZ2dsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNNZW51QXZhaWxhYmxlKSB7XG4gICAgICB0aGlzLl9tZW51VG9nZ2xlZCA9ICF0aGlzLl9tZW51VG9nZ2xlZDtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0aW9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5uYXZpZ2F0aW9uUm91dGUpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSB0b2dnbGUgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgb3BlbiBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IGNsb3NlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQuY2xvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNjcm9sbERpc3BhdGNoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBNYXRTaWRlbmF2TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuXG5pbXBvcnQgeyBUZExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExheW91dFRvZ2dsZURpcmVjdGl2ZSwgVGRMYXlvdXRDbG9zZURpcmVjdGl2ZSwgVGRMYXlvdXRPcGVuRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXlvdXQuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBUZExheW91dE5hdkNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW5hdi9sYXlvdXQtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExheW91dE5hdkxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1uYXYtbGlzdC9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFRkTGF5b3V0TmF2TGlzdFRvZ2dsZURpcmVjdGl2ZSwgVGRMYXlvdXROYXZMaXN0Q2xvc2VEaXJlY3RpdmUsIFRkTGF5b3V0TmF2TGlzdE9wZW5EaXJlY3RpdmUsXG59IGZyb20gJy4vbGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRkTGF5b3V0Q2FyZE92ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1jYXJkLW92ZXIvbGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbWFuYWdlLWxpc3QvbGF5b3V0LW1hbmFnZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBUZExheW91dE1hbmFnZUxpc3RUb2dnbGVEaXJlY3RpdmUsIFRkTGF5b3V0TWFuYWdlTGlzdENsb3NlRGlyZWN0aXZlLCBUZExheW91dE1hbmFnZUxpc3RPcGVuRGlyZWN0aXZlLFxufSBmcm9tICcuL2xheW91dC1tYW5hZ2UtbGlzdC9sYXlvdXQtbWFuYWdlLWxpc3QuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBUZExheW91dEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWZvb3Rlci9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7XG4gIFRkTmF2aWdhdGlvbkRyYXdlckNvbXBvbmVudCwgVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSwgVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uLWRyYXdlci9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQnO1xuXG5jb25zdCBURF9MQVlPVVRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRMYXlvdXRDb21wb25lbnQsXG4gIFRkTGF5b3V0VG9nZ2xlRGlyZWN0aXZlLFxuICBUZExheW91dENsb3NlRGlyZWN0aXZlLFxuICBUZExheW91dE9wZW5EaXJlY3RpdmUsXG5cbiAgVGRMYXlvdXROYXZDb21wb25lbnQsXG5cbiAgVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICBUZExheW91dE5hdkxpc3RUb2dnbGVEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TmF2TGlzdENsb3NlRGlyZWN0aXZlLFxuICBUZExheW91dE5hdkxpc3RPcGVuRGlyZWN0aXZlLFxuXG4gIFRkTGF5b3V0Q2FyZE92ZXJDb21wb25lbnQsXG5cbiAgVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICBUZExheW91dE1hbmFnZUxpc3RUb2dnbGVEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdENsb3NlRGlyZWN0aXZlLFxuICBUZExheW91dE1hbmFnZUxpc3RPcGVuRGlyZWN0aXZlLFxuXG4gIFRkTGF5b3V0Rm9vdGVyQ29tcG9uZW50LFxuXG4gIFRkTmF2aWdhdGlvbkRyYXdlckNvbXBvbmVudCxcbiAgVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSxcbiAgVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfTEFZT1VUUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFREX0xBWU9VVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TGF5b3V0TW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlZpZXdDaGlsZCIsIk1hdFNpZGVuYXYiLCJJbnB1dCIsIm1peGluRGlzYWJsZWQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkhvc3RMaXN0ZW5lciIsIkRpcmVjdGl2ZSIsIkluamVjdCIsImZvcndhcmRSZWYiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiUm91dGVyIiwiT3B0aW9uYWwiLCJTZWN1cml0eUNvbnRleHQiLCJ0ZENvbGxhcHNlQW5pbWF0aW9uIiwiRG9tU2FuaXRpemVyIiwiQ29udGVudENoaWxkcmVuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJTY3JvbGxEaXNwYXRjaE1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFNQTs7Ozs7Ozs7OztZQWtCaUIsU0FBSSxHQUE2QixNQUFNLENBQUM7Ozs7Ozs7Ozs7O1lBWXRDLFdBQU0sR0FBWSxLQUFLLENBQUM7Ozs7Ozs7OztZQVVsQixpQkFBWSxHQUFXLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7WUFZMUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1NBK0JoRTtRQXpCQyxzQkFBSSwyQ0FBWTs7Ozs7Ozs7O2dCQUFoQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO2FBQzdCOzs7V0FBQTs7Ozs7Ozs7UUFLTSxrQ0FBTTs7OztZQUFiO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEOzs7Ozs7OztRQUtNLGdDQUFJOzs7O1lBQVg7Z0JBQ0UsT0FBTyxJ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