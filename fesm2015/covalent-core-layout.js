import { Component, Input, ViewChild, HostListener, Directive, Renderer2, ElementRef, Inject, forwardRef, Optional, ContentChildren, SecurityContext, NgModule } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { mixinDisabled, tdCollapseAnimation } from '@covalent/core/common';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutComponent {
    constructor() {
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
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     * @return {?}
     */
    get disableClose() {
        return this.mode === 'side';
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this.sidenav.toggle(!this.sidenav.opened);
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this.sidenav.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this.sidenav.close();
    }
}
TdLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout',
                template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\">\n  <mat-sidenav #sidenav\n              class=\"td-layout-sidenav\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\"\n              [disableClose]=\"disableClose\">\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
                styles: [":host{display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host ::ng-deep>mat-sidenav-container .mat-drawer>.mat-drawer-inner-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"]
            }] }
];
TdLayoutComponent.propDecorators = {
    sidenav: [{ type: ViewChild, args: [MatSidenav,] }],
    mode: [{ type: Input, args: ['mode',] }],
    opened: [{ type: Input, args: ['opened',] }],
    sidenavWidth: [{ type: Input, args: ['sidenavWidth',] }],
    containerAutosize: [{ type: Input, args: ['containerAutosize',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LayoutToggleBase {
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdLayoutToggleMixinBase = mixinDisabled(LayoutToggleBase);
/**
 * @abstract
 */
class LayoutToggle extends _TdLayoutToggleMixinBase {
    /**
     * @param {?} _layout
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_layout, _renderer, _elementRef) {
        super();
        this._layout = _layout;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._initialized = false;
        this._hideWhenOpened = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
    }
    /**
     * hideWhenOpened?: boolean
     * When this is set to true, the host will be hidden when
     * the sidenav is opened.
     * @param {?} hideWhenOpened
     * @return {?}
     */
    set hideWhenOpened(hideWhenOpened) {
        this._hideWhenOpened = hideWhenOpened;
        if (this._initialized) {
            this._toggleVisibility();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initialized = true;
        this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(() => {
            this._toggleVisibility();
        });
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    }
    /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    clickListener(event) {
        event.preventDefault();
        if (!this.disabled) {
            this.onClick();
        }
    }
    /**
     * @return {?}
     */
    _toggleVisibility() {
        if (this._layout.sidenav.opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    }
}
LayoutToggle.propDecorators = {
    hideWhenOpened: [{ type: Input, args: ['hideWhenOpened',] }],
    clickListener: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutToggleDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutToggle
     * @return {?}
     */
    set tdLayoutToggle(tdLayoutToggle) {
        this.disabled = !((/** @type {?} */ (tdLayoutToggle)) === '' || tdLayoutToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutToggle]',
            },] }
];
/** @nocollapse */
TdLayoutToggleDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutToggleDirective.propDecorators = {
    tdLayoutToggle: [{ type: Input, args: ['tdLayoutToggle',] }]
};
class TdLayoutCloseDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutClose
     * @return {?}
     */
    set tdLayoutClose(tdLayoutClose) {
        this.disabled = !((/** @type {?} */ (tdLayoutClose)) === '' || tdLayoutClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutClose]',
            },] }
];
/** @nocollapse */
TdLayoutCloseDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutCloseDirective.propDecorators = {
    tdLayoutClose: [{ type: Input, args: ['tdLayoutClose',] }]
};
class TdLayoutOpenDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutOpen
     * @return {?}
     */
    set tdLayoutClose(tdLayoutOpen) {
        this.disabled = !((/** @type {?} */ (tdLayoutOpen)) === '' || tdLayoutOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutOpen]',
            },] }
];
/** @nocollapse */
TdLayoutOpenDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutOpenDirective.propDecorators = {
    tdLayoutClose: [{ type: Input, args: ['tdLayoutOpen',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutNavComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
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
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    }
}
TdLayoutNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav',
                template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span *ngIf=\"icon || logo || toolbarTitle\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n          class=\"td-layout-nav-toolbar-content\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
                styles: [".td-menu-button{margin-left:0}::ng-deep [dir=rtl] .td-menu-button{margin-right:0;margin-left:6px}:host{display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host .td-layout-nav-wrapper{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%}:host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host .td-layout-nav-wrapper .td-layout-nav-content{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}"]
            }] }
];
/** @nocollapse */
TdLayoutNavComponent.ctorParameters = () => [
    { type: Router, decorators: [{ type: Optional }] }
];
TdLayoutNavComponent.propDecorators = {
    toolbarTitle: [{ type: Input, args: ['toolbarTitle',] }],
    icon: [{ type: Input, args: ['icon',] }],
    logo: [{ type: Input, args: ['logo',] }],
    color: [{ type: Input, args: ['color',] }],
    navigationRoute: [{ type: Input, args: ['navigationRoute',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutNavListComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
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
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     * @return {?}
     */
    get disableClose() {
        return this.mode === 'side';
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
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this.sidenav.toggle(!this.sidenav.opened);
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this.sidenav.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this.sidenav.close();
    }
}
TdLayoutNavListComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav-list',
                template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav #sidenav\n                position=\"start\"\n                [mode]=\"mode\"\n                [opened]=\"opened\"\n                [disableClose]=\"disableClose\"\n                [style.max-width]=\"sidenavWidth\"\n                [style.min-width]=\"sidenavWidth\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span *ngIf=\"icon || logo || toolbarTitle\"\n              class=\"td-layout-nav-list-toolbar-content\"\n              [class.cursor-pointer]=\"routerEnabled\"\n              (click)=\"handleNavigationClick()\">\n          <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>",
                styles: [":host{margin:0;width:100%;min-height:100%;height:100%;overflow:hidden;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-right:0}[dir=rtl] :host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-left:0}:host .td-layout-nav-list-wrapper{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{text-align:start;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer>.mat-drawer-inner-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"]
            }] }
];
/** @nocollapse */
TdLayoutNavListComponent.ctorParameters = () => [
    { type: Router, decorators: [{ type: Optional }] }
];
TdLayoutNavListComponent.propDecorators = {
    sidenav: [{ type: ViewChild, args: [MatSidenav,] }],
    toolbarTitle: [{ type: Input, args: ['toolbarTitle',] }],
    icon: [{ type: Input, args: ['icon',] }],
    logo: [{ type: Input, args: ['logo',] }],
    color: [{ type: Input, args: ['color',] }],
    mode: [{ type: Input, args: ['mode',] }],
    opened: [{ type: Input, args: ['opened',] }],
    sidenavWidth: [{ type: Input, args: ['sidenavWidth',] }],
    containerAutosize: [{ type: Input, args: ['containerAutosize',] }],
    navigationRoute: [{ type: Input, args: ['navigationRoute',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutNavListToggleDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListToggle
     * @return {?}
     */
    set tdLayoutNavListToggle(tdLayoutNavListToggle) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutNavListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListToggle]',
            },] }
];
/** @nocollapse */
TdLayoutNavListToggleDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListToggleDirective.propDecorators = {
    tdLayoutNavListToggle: [{ type: Input, args: ['tdLayoutNavListToggle',] }]
};
class TdLayoutNavListCloseDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListClose
     * @return {?}
     */
    set tdLayoutNavListClose(tdLayoutNavListClose) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutNavListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListClose]',
            },] }
];
/** @nocollapse */
TdLayoutNavListCloseDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListCloseDirective.propDecorators = {
    tdLayoutNavListClose: [{ type: Input, args: ['tdLayoutNavListClose',] }]
};
class TdLayoutNavListOpenDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListOpen
     * @return {?}
     */
    set tdLayoutNavListOpen(tdLayoutNavListOpen) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutNavListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListOpen]',
            },] }
];
/** @nocollapse */
TdLayoutNavListOpenDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListOpenDirective.propDecorators = {
    tdLayoutNavListOpen: [{ type: Input, args: ['tdLayoutNavListOpen',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutCardOverComponent {
    constructor() {
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
}
TdLayoutCardOverComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-card-over',
                template: "<mat-toolbar [color]=\"color\">\n</mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div class=\"td-layout-card-over\"\n        [style.max-width.%]=\"cardWidth\"\n        [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-webkit-box-flex]=\"1\">\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
            }] }
];
TdLayoutCardOverComponent.propDecorators = {
    cardTitle: [{ type: Input, args: ['cardTitle',] }],
    cardSubtitle: [{ type: Input, args: ['cardSubtitle',] }],
    cardWidth: [{ type: Input, args: ['cardWidth',] }],
    color: [{ type: Input, args: ['color',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutManageListComponent {
    constructor() {
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
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     * @return {?}
     */
    get disableClose() {
        return this.mode === 'side';
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this.sidenav.toggle(!this.sidenav.opened);
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this.sidenav.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this.sidenav.close();
    }
}
TdLayoutManageListComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-manage-list',
                template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-manage-list\">\n  <mat-sidenav #sidenav\n              position=\"start\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [disableClose]=\"disableClose\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\">\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
                styles: [":host{display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host mat-sidenav-container.td-layout-manage-list{-ms-flex:1;flex:1}:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closed,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closing,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opened,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opening{box-shadow:0 1px 3px 0 rgba(0,0,0,.2)}:host .td-layout-manage-list-sidenav{text-align:start;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-manage-list-main{margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex}:host .td-layout-manage-list-main .td-layout-manage-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-ms-flex:1;flex:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer-content{-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{font-size:14px}:host ::ng-deep .mat-toolbar{font-weight:400}"]
            }] }
];
TdLayoutManageListComponent.propDecorators = {
    sidenav: [{ type: ViewChild, args: [MatSidenav,] }],
    mode: [{ type: Input, args: ['mode',] }],
    opened: [{ type: Input, args: ['opened',] }],
    sidenavWidth: [{ type: Input, args: ['sidenavWidth',] }],
    containerAutosize: [{ type: Input, args: ['containerAutosize',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutManageListToggleDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListToggle
     * @return {?}
     */
    set tdLayoutManageListToggle(tdLayoutManageListToggle) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutManageListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListToggle]',
            },] }
];
/** @nocollapse */
TdLayoutManageListToggleDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListToggleDirective.propDecorators = {
    tdLayoutManageListToggle: [{ type: Input, args: ['tdLayoutManageListToggle',] }]
};
class TdLayoutManageListCloseDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListClose
     * @return {?}
     */
    set tdLayoutManageListClose(tdLayoutManageListClose) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutManageListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListClose]',
            },] }
];
/** @nocollapse */
TdLayoutManageListCloseDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListCloseDirective.propDecorators = {
    tdLayoutManageListClose: [{ type: Input, args: ['tdLayoutManageListClose',] }]
};
class TdLayoutManageListOpenDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListOpen
     * @return {?}
     */
    set tdLayoutManageListOpen(tdLayoutManageListOpen) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutManageListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListOpen]',
            },] }
];
/** @nocollapse */
TdLayoutManageListOpenDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListOpenDirective.propDecorators = {
    tdLayoutManageListOpen: [{ type: Input, args: ['tdLayoutManageListOpen',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdLayoutFooterComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    /**
     * color?: string
     *
     * Optional color option: primary | accent | warn.
     * @param {?} color
     * @return {?}
     */
    set color(color) {
        if (color) {
            this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
            this._color = color;
            this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
        }
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
}
TdLayoutFooterComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td-layout-footer,td-layout-footer-inner',
                template: "<ng-content></ng-content>\n",
                styles: [":host{display:block;padding:10px 16px}"]
            }] }
];
/** @nocollapse */
TdLayoutFooterComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutFooterComponent.propDecorators = {
    color: [{ type: Input, args: ['color',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdNavigationDrawerMenuDirective {
}
TdNavigationDrawerMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-menu]',
            },] }
];
class TdNavigationDrawerToolbarDirective {
}
TdNavigationDrawerToolbarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-toolbar]',
            },] }
];
class TdNavigationDrawerComponent {
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
            let sanitizedUrl = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
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
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe((opened) => {
            if (!opened) {
                this._menuToggled = false;
            }
        });
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
                template: "<mat-toolbar [color]=\"color\"\n             [style.background-image]=\"backgroundImage\"\n             [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n             class=\"td-nagivation-drawer-toolbar\">\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div *ngIf=\"icon || logo || sidenavTitle\"\n          class=\"td-navigation-drawer-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\"\n        href\n        *ngIf=\"email || name\"\n        (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{email || name}}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host mat-toolbar .td-navigation-drawer-menu-toggle{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-ms-flex:1;flex:1}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
            }] }
];
/** @nocollapse */
TdNavigationDrawerComponent.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] }] },
    { type: Router, decorators: [{ type: Optional }] },
    { type: DomSanitizer }
];
TdNavigationDrawerComponent.propDecorators = {
    _drawerMenu: [{ type: ContentChildren, args: [TdNavigationDrawerMenuDirective,] }],
    _toolbar: [{ type: ContentChildren, args: [TdNavigationDrawerToolbarDirective,] }],
    sidenavTitle: [{ type: Input, args: ['sidenavTitle',] }],
    icon: [{ type: Input, args: ['icon',] }],
    logo: [{ type: Input, args: ['logo',] }],
    color: [{ type: Input, args: ['color',] }],
    navigationRoute: [{ type: Input, args: ['navigationRoute',] }],
    backgroundUrl: [{ type: Input, args: ['backgroundUrl',] }],
    name: [{ type: Input, args: ['name',] }],
    email: [{ type: Input, args: ['email',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_LAYOUTS = [
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
class CovalentLayoutModule {
}
CovalentLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ScrollDispatchModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    MatButtonModule,
                    MatIconModule,
                    MatCardModule,
                    MatDividerModule,
                ],
                declarations: [
                    TD_LAYOUTS,
                ],
                exports: [
                    TD_LAYOUTS,
                ],
            },] }
];

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

export { CovalentLayoutModule, TdLayoutComponent, TdLayoutToggleDirective, TdLayoutCloseDirective, TdLayoutOpenDirective, LayoutToggleBase, _TdLayoutToggleMixinBase, LayoutToggle, TdLayoutCardOverComponent, TdLayoutFooterComponent, TdLayoutManageListComponent, TdLayoutManageListToggleDirective, TdLayoutManageListCloseDirective, TdLayoutManageListOpenDirective, TdLayoutNavComponent, TdLayoutNavListComponent, TdLayoutNavListToggleDirective, TdLayoutNavListCloseDirective, TdLayoutNavListOpenDirective, TdNavigationDrawerMenuDirective, TdNavigationDrawerToolbarDirective, TdNavigationDrawerComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1sYXlvdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LXRvZ2dsZS5jbGFzcy50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L2xheW91dC5kaXJlY3RpdmVzLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LW5hdi9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L2xheW91dC1uYXYtbGlzdC9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5kaXJlY3RpdmVzLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LWNhcmQtb3Zlci9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L2xheW91dC1tYW5hZ2UtbGlzdC9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LW1hbmFnZS1saXN0L2xheW91dC1tYW5hZ2UtbGlzdC5kaXJlY3RpdmVzLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LWZvb3Rlci9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L25hdmlnYXRpb24tZHJhd2VyL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJTGF5b3V0VG9nZ2xhYmxlIH0gZnJvbSAnLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0JyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBJTGF5b3V0VG9nZ2xhYmxlIHtcblxuICBAVmlld0NoaWxkKE1hdFNpZGVuYXYpIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiAnc2lkZScsICdwdXNoJyBvciAnb3ZlcidcbiAgICpcbiAgICogVGhlIG1vZGUgb3Igc3R5bGluZyBvZiB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJvdmVyXCIuXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnbW9kZScpIG1vZGU6ICdzaWRlJyB8ICdwdXNoJyB8ICdvdmVyJyA9ICdvdmVyJztcblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuIFVzZSB0aGlzIGJpbmRpbmcgdG8gb3Blbi9jbG9zZSB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJmYWxzZVwiLlxuICAgKlxuICAgKiBTZWUgXCJNYXRTaWRlbmF2XCIgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvdHJlZS9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ29wZW5lZCcpIG9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBzaWRlbmF2V2lkdGg/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgXCJ3aWR0aFwiIG9mIHRoZSBzaWRlbmF2IGluIGVpdGhlciBcInB4XCIgb3IgXCIlXCJcbiAgICogRGVmYXVsdHMgdG8gXCIzMjBweFwiLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvdHJlZS9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ3NpZGVuYXZXaWR0aCcpIHNpZGVuYXZXaWR0aDogc3RyaW5nID0gJzMyMHB4JztcblxuICAvKipcbiAgICogY29udGFpbmVyQXV0b3NpemU/OiBib29sZWFuXG4gICAqXG4gICAqIFNldHMgXCJhdXRvc2l6ZVwiIG9mIHRoZSBzaWRlbmF2LWNvbnRhaW5lci5cbiAgICogRGVmYXVsdHMgdG8gXCJmYWxzZVwiLlxuICAgKlxuICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvIGFuZCBwb3RlbnRpYWwgcGVyZm9ybWFuY2Ugcmlza3MuXG4gICAqIFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvYmxvYi9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2L3NpZGVuYXYubWQjcmVzaXppbmctYW4tb3Blbi1zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ2NvbnRhaW5lckF1dG9zaXplJykgY29udGFpbmVyQXV0b3NpemU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGBFU0NgIHNob3VsZCBjbG9zZSB0aGUgc2lkZW5hdlxuICAgKiBTaG91bGQgb25seSBjbG9zZSBpdCBmb3IgYHB1c2hgIGFuZCBgb3ZlcmAgbW9kZXNcbiAgICovXG4gIGdldCBkaXNhYmxlQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3NpZGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IHRvZ2dsZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi50b2dnbGUoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IG9wZW4gbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBjbG9zZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMYXlvdXRUb2dnbGFibGUge1xuICBvcGVuZWQ6IGJvb2xlYW47XG4gIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG4gIHRvZ2dsZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG4gIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xuICBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXRUb2dnbGVCYXNlIHsgfVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRMYXlvdXRUb2dnbGVNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVkKExheW91dFRvZ2dsZUJhc2UpO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF5b3V0VG9nZ2xlIGV4dGVuZHMgX1RkTGF5b3V0VG9nZ2xlTWl4aW5CYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJQ2FuRGlzYWJsZSB7XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlU3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2hpZGVXaGVuT3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGhpZGVXaGVuT3BlbmVkPzogYm9vbGVhblxuICAgKiBXaGVuIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZSBob3N0IHdpbGwgYmUgaGlkZGVuIHdoZW5cbiAgICogdGhlIHNpZGVuYXYgaXMgb3BlbmVkLlxuICAgKi9cbiAgQElucHV0KCdoaWRlV2hlbk9wZW5lZCcpXG4gIHNldCBoaWRlV2hlbk9wZW5lZChoaWRlV2hlbk9wZW5lZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVXaGVuT3BlbmVkID0gaGlkZVdoZW5PcGVuZWQ7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9sYXlvdXQ6IElMYXlvdXRUb2dnbGFibGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWxheW91dC1tZW51LWJ1dHRvbicpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl90b2dnbGVTdWJzID0gdGhpcy5fbGF5b3V0LnNpZGVuYXYuX2FuaW1hdGlvblN0YXJ0ZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICB9KTtcbiAgICAvLyBleGVjdXRlIHRvZ2dsZVZpc2liaWxpdHkgc2luY2UgdGhlIG9uT3BlblN0YXJ0IGFuZCBvbkNsb3NlU3RhcnRcbiAgICAvLyBtZXRob2RzIG1pZ2h0IG5vdCBiZSBleGVjdXRlZCBhbHdheXMgd2hlbiB0aGUgZWxlbWVudCBpcyByZW5kZXJlZFxuICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90b2dnbGVTdWJzKSB7XG4gICAgICB0aGlzLl90b2dnbGVTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl90b2dnbGVTdWJzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciB0aGUgbGF5b3V0IHRvZ2dsZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja0xpc3RlbmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCBvbkNsaWNrKCk6IHZvaWQ7XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbGF5b3V0LnNpZGVuYXYub3BlbmVkICYmIHRoaXMuX2hpZGVXaGVuT3BlbmVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICcnKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dFRvZ2dsZSB9IGZyb20gJy4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dFRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dFRvZ2dsZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dFRvZ2dsZScpIFxuICBzZXQgdGRMYXlvdXRUb2dnbGUodGRMYXlvdXRUb2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0VG9nZ2xlID09PSAnJyB8fCB0ZExheW91dFRvZ2dsZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRDbG9zZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dENsb3NlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcbiAgXG4gIEBJbnB1dCgndGRMYXlvdXRDbG9zZScpIFxuICBzZXQgdGRMYXlvdXRDbG9zZSh0ZExheW91dENsb3NlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dENsb3NlID09PSAnJyB8fCB0ZExheW91dENsb3NlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LmNsb3NlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0T3Blbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE9wZW5EaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXRPcGVuJykgXG4gIHNldCB0ZExheW91dENsb3NlKHRkTGF5b3V0T3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRPcGVuID09PSAnJyB8fCB0ZExheW91dE9wZW4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQub3BlbigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0LW5hdicsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1uYXYuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtbmF2LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiB0b29sYmFyVGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogVGl0bGUgc2V0IGluIHRvb2xiYXIuXG4gICAqL1xuICBASW5wdXQoJ3Rvb2xiYXJUaXRsZScpIHRvb2xiYXJUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqXG4gICAqIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZVxuICAgKi9cbiAgQElucHV0KCdpY29uJykgaWNvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBsb2dvPzogc3RyaW5nXG4gICAqXG4gICAqIGxvZ28gaWNvbiBuYW1lIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBJZiBbaWNvbl0gaXMgc2V0LCB0aGVuIHRoaXMgd2lsbCBub3QgYmUgc2hvd24uXG4gICAqL1xuICBASW5wdXQoJ2xvZ28nKSBsb2dvOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBwcmltYXJ5IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHRvb2xiYXJUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgnbmF2aWdhdGlvblJvdXRlJykgbmF2aWdhdGlvblJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByb3V0ZXIgd2FzIGluamVjdGVkLlxuICAgKi9cbiAgZ2V0IHJvdXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fcm91dGVyICYmICEhdGhpcy5uYXZpZ2F0aW9uUm91dGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICBoYW5kbGVOYXZpZ2F0aW9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5uYXZpZ2F0aW9uUm91dGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbmltcG9ydCB7IElMYXlvdXRUb2dnbGFibGUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0LW5hdi1saXN0JyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LW5hdi1saXN0LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW5hdi1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgSUxheW91dFRvZ2dsYWJsZSB7XG5cbiAgQFZpZXdDaGlsZChNYXRTaWRlbmF2KSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuXG4gIC8qKlxuICAgKiB0b29sYmFyVGl0bGU/OiBzdHJpbmdcbiAgICpcbiAgICogVGl0bGUgc2V0IGluIHRvb2xiYXIuXG4gICAqL1xuICBASW5wdXQoJ3Rvb2xiYXJUaXRsZScpIHRvb2xiYXJUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZVxuICAgKi9cbiAgQElucHV0KCdpY29uJykgaWNvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBsb2dvPzogc3RyaW5nXG4gICAqXG4gICAqIGxvZ28gaWNvbiBuYW1lIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBJZiBbaWNvbl0gaXMgc2V0LCB0aGVuIHRoaXMgd2lsbCBub3QgYmUgc2hvd24uXG4gICAqL1xuICBASW5wdXQoJ2xvZ28nKSBsb2dvOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBwcmltYXJ5IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICAvKipcbiAgICogbW9kZT86ICdzaWRlJywgJ3B1c2gnIG9yICdvdmVyJ1xuICAgKlxuICAgKiBUaGUgbW9kZSBvciBzdHlsaW5nIG9mIHRoZSBzaWRlbmF2LlxuICAgKiBEZWZhdWx0cyB0byBcInNpZGVcIi5cbiAgICogU2VlIFwiTWF0U2lkZW5hdlwiIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mby5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdtb2RlJykgbW9kZTogJ3NpZGUnIHwgJ3B1c2gnIHwgJ292ZXInID0gJ3NpZGUnO1xuXG4gIC8qKlxuICAgKiBvcGVuZWQ/OiBib29sZWFuXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzaWRlbmF2IGlzIG9wZW5lZC4gVXNlIHRoaXMgYmluZGluZyB0byBvcGVuL2Nsb3NlIHRoZSBzaWRlbmF2LlxuICAgKiBEZWZhdWx0cyB0byBcInRydWVcIi5cbiAgICpcbiAgICogU2VlIFwiTWF0U2lkZW5hdlwiIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mby5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdvcGVuZWQnKSBvcGVuZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBzaWRlbmF2V2lkdGg/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgXCJ3aWR0aFwiIG9mIHRoZSBzaWRlbmF2IGluIGVpdGhlciBcInB4XCIgb3IgXCIlXCJcbiAgICogRGVmYXVsdHMgdG8gXCIzNTBweFwiLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvdHJlZS9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ3NpZGVuYXZXaWR0aCcpIHNpZGVuYXZXaWR0aDogc3RyaW5nID0gJzM1MHB4JztcblxuICAvKipcbiAgICogY29udGFpbmVyQXV0b3NpemU/OiBib29sZWFuXG4gICAqXG4gICAqIFNldHMgXCJhdXRvc2l6ZVwiIG9mIHRoZSBzaWRlbmF2LWNvbnRhaW5lci5cbiAgICogRGVmYXVsdHMgdG8gXCJmYWxzZVwiLlxuICAgKlxuICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvIGFuZCBwb3RlbnRpYWwgcGVyZm9ybWFuY2Ugcmlza3MuXG4gICAqIFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvYmxvYi9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2L3NpZGVuYXYubWQjcmVzaXppbmctYW4tb3Blbi1zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ2NvbnRhaW5lckF1dG9zaXplJykgY29udGFpbmVyQXV0b3NpemU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIC8qKlxuICAgKiBuYXZpZ2F0aW9uUm91dGU/OiBzdHJpbmdcbiAgICpcbiAgICogb3B0aW9uIHRvIHNldCB0aGUgY29tYmluZWQgcm91dGUgZm9yIHRoZSBpY29uLCBsb2dvLCBhbmQgdG9vbGJhclRpdGxlLlxuICAgKi9cbiAgQElucHV0KCduYXZpZ2F0aW9uUm91dGUnKSBuYXZpZ2F0aW9uUm91dGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGBFU0NgIHNob3VsZCBjbG9zZSB0aGUgc2lkZW5hdlxuICAgKiBTaG91bGQgb25seSBjbG9zZSBpdCBmb3IgYHB1c2hgIGFuZCBgb3ZlcmAgbW9kZXNcbiAgICovXG4gIGdldCBkaXNhYmxlQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3NpZGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByb3V0ZXIgd2FzIGluamVjdGVkLlxuICAgKi9cbiAgZ2V0IHJvdXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fcm91dGVyICYmICEhdGhpcy5uYXZpZ2F0aW9uUm91dGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICBoYW5kbGVOYXZpZ2F0aW9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5uYXZpZ2F0aW9uUm91dGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSB0b2dnbGUgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYudG9nZ2xlKCF0aGlzLnNpZGVuYXYub3BlbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBvcGVuIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgY2xvc2UgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi5jbG9zZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZExheW91dE5hdkxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0VG9nZ2xlIH0gZnJvbSAnLi4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE5hdkxpc3RUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0VG9nZ2xlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TmF2TGlzdFRvZ2dsZScpIFxuICBzZXQgdGRMYXlvdXROYXZMaXN0VG9nZ2xlKHRkTGF5b3V0TmF2TGlzdFRvZ2dsZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXROYXZMaXN0VG9nZ2xlID09PSAnJyB8fCB0ZExheW91dE5hdkxpc3RUb2dnbGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXROYXZMaXN0Q2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0Q2xvc2VEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuICBcbiAgQElucHV0KCd0ZExheW91dE5hdkxpc3RDbG9zZScpIFxuICBzZXQgdGRMYXlvdXROYXZMaXN0Q2xvc2UodGRMYXlvdXROYXZMaXN0Q2xvc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TmF2TGlzdENsb3NlID09PSAnJyB8fCB0ZExheW91dE5hdkxpc3RDbG9zZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LmNsb3NlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TmF2TGlzdE9wZW5dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0T3BlbkRpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dE5hdkxpc3RPcGVuJykgXG4gIHNldCB0ZExheW91dE5hdkxpc3RPcGVuKHRkTGF5b3V0TmF2TGlzdE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TmF2TGlzdE9wZW4gPT09ICcnIHx8IHRkTGF5b3V0TmF2TGlzdE9wZW4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0LWNhcmQtb3ZlcicsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIGNhcmRUaXRsZT86IHN0cmluZ1xuICAgKlxuICAgKiBUaXRsZSBzZXQgaW4gY2FyZC5cbiAgICovXG4gIEBJbnB1dCgnY2FyZFRpdGxlJykgY2FyZFRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNhcmRTdWJ0aXRsZT86IHN0cmluZ1xuICAgKlxuICAgKiBTdWJ0aXRsZSBzZXQgaW4gY2FyZC5cbiAgICovXG4gIEBJbnB1dCgnY2FyZFN1YnRpdGxlJykgY2FyZFN1YnRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNhcmRXaWR0aD86IHN0cmluZ1xuICAgKlxuICAgKiBDYXJkIGZsZXggd2lkdGggaW4gJS5cbiAgICogRGVmYXVsdHMgdG8gNzAlLlxuICAgKi9cbiAgQElucHV0KCdjYXJkV2lkdGgnKSBjYXJkV2lkdGg6IG51bWJlciA9IDcwO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgcHJpbWFyeSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJTGF5b3V0VG9nZ2xhYmxlIH0gZnJvbSAnLi4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1tYW5hZ2UtbGlzdCcsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1tYW5hZ2UtbGlzdC5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1tYW5hZ2UtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIElMYXlvdXRUb2dnbGFibGUge1xuXG4gIEBWaWV3Q2hpbGQoTWF0U2lkZW5hdikgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICAvKipcbiAgICogbW9kZT86ICdzaWRlJywgJ3B1c2gnIG9yICdvdmVyJ1xuICAgKlxuICAgKiBUaGUgbW9kZSBvciBzdHlsaW5nIG9mIHRoZSBzaWRlbmF2LlxuICAgKiBEZWZhdWx0cyB0byBcInNpZGVcIi5cbiAgICogU2VlIFwiTWF0U2lkZW5hdlwiIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mby5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdtb2RlJykgbW9kZTogJ3NpZGUnIHwgJ3B1c2gnIHwgJ292ZXInID0gJ3NpZGUnO1xuXG4gIC8qKlxuICAgKiBvcGVuZWQ/OiBib29sZWFuXG4gICAqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzaWRlbmF2IGlzIG9wZW5lZC4gVXNlIHRoaXMgYmluZGluZyB0byBvcGVuL2Nsb3NlIHRoZSBzaWRlbmF2LlxuICAgKiBEZWZhdWx0cyB0byBcInRydWVcIi5cbiAgICpcbiAgICogU2VlIFwiTWF0U2lkZW5hdlwiIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mby5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdvcGVuZWQnKSBvcGVuZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBzaWRlbmF2V2lkdGg/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgXCJ3aWR0aFwiIG9mIHRoZSBzaWRlbmF2IGluIGVpdGhlciBcInB4XCIgb3IgXCIlXCJcbiAgICogRGVmYXVsdHMgdG8gXCIyNTdweFwiLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvdHJlZS9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ3NpZGVuYXZXaWR0aCcpIHNpZGVuYXZXaWR0aDogc3RyaW5nID0gJzI1N3B4JztcblxuICAvKipcbiAgICogY29udGFpbmVyQXV0b3NpemU/OiBib29sZWFuXG4gICAqXG4gICAqIFNldHMgXCJhdXRvc2l6ZVwiIG9mIHRoZSBzaWRlbmF2LWNvbnRhaW5lci5cbiAgICogRGVmYXVsdHMgdG8gXCJmYWxzZVwiLlxuICAgKlxuICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvIGFuZCBwb3RlbnRpYWwgcGVyZm9ybWFuY2Ugcmlza3MuXG4gICAqIFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvYmxvYi9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2L3NpZGVuYXYubWQjcmVzaXppbmctYW4tb3Blbi1zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ2NvbnRhaW5lckF1dG9zaXplJykgY29udGFpbmVyQXV0b3NpemU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGBFU0NgIHNob3VsZCBjbG9zZSB0aGUgc2lkZW5hdlxuICAgKiBTaG91bGQgb25seSBjbG9zZSBpdCBmb3IgYHB1c2hgIGFuZCBgb3ZlcmAgbW9kZXNcbiAgICovXG4gIGdldCBkaXNhYmxlQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3NpZGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IHRvZ2dsZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi50b2dnbGUoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IG9wZW4gbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBjbG9zZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW1hbmFnZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUb2dnbGUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlJykgXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RUb2dnbGUodGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE1hbmFnZUxpc3RUb2dnbGUgPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE1hbmFnZUxpc3RDbG9zZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RDbG9zZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG4gIFxuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdENsb3NlJykgXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RDbG9zZSh0ZExheW91dE1hbmFnZUxpc3RDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2UgPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdENsb3NlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQuY2xvc2UoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRNYW5hZ2VMaXN0T3Blbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RPcGVuRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdE9wZW4nKSBcbiAgc2V0IHRkTGF5b3V0TWFuYWdlTGlzdE9wZW4odGRMYXlvdXRNYW5hZ2VMaXN0T3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRNYW5hZ2VMaXN0T3BlbiA9PT0gJycgfHwgdGRMYXlvdXRNYW5hZ2VMaXN0T3Blbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0ZC1sYXlvdXQtZm9vdGVyLHRkLWxheW91dC1mb290ZXItaW5uZXInLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0Rm9vdGVyQ29tcG9uZW50IHtcblxuICBwcml2YXRlIF9jb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIE9wdGlvbmFsIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJylcbiAgc2V0IGNvbG9yKGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJykge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWxheW91dC1mb290ZXInKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgT25Jbml0LCBPbkRlc3Ryb3ksIGZvcndhcmRSZWYsIEluamVjdCxcbiAgICAgICAgIFF1ZXJ5TGlzdCwgU2VjdXJpdHlDb250ZXh0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNhZmVSZXNvdXJjZVVybCwgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1uYXZpZ2F0aW9uLWRyYXdlci1tZW51XScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmUge1xuXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1uYXZpZ2F0aW9uLWRyYXdlci10b29sYmFyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmUge1xuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW5hdmlnYXRpb24tZHJhd2VyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFsgdGRDb2xsYXBzZUFuaW1hdGlvbiBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdmlnYXRpb25EcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfY2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfbWVudVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYmFja2dyb3VuZEltYWdlOiBTYWZlU3R5bGU7XG5cbiAgZ2V0IG1lbnVUb2dnbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tZW51VG9nZ2xlZDtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSkgX2RyYXdlck1lbnU6IFF1ZXJ5TGlzdDxUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlPjtcblxuICBAQ29udGVudENoaWxkcmVuKFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmUpIF90b29sYmFyOiBRdWVyeUxpc3Q8VGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZT47XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIFtUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlXSBoYXMgY29udGVudC5cbiAgICovXG4gIGdldCBpc01lbnVBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYXdlck1lbnUgPyB0aGlzLl9kcmF3ZXJNZW51Lmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBbVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZV0gaGFzIGNvbnRlbnQuXG4gICAqL1xuICBnZXQgaXNDdXN0b21Ub29sYmFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sYmFyID8gdGhpcy5fdG9vbGJhci5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBpbWFnZSBmb3IgdGhlIHRvb2xiYXIuXG4gICAqL1xuICBnZXQgaXNCYWNrZ3JvdW5kQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2JhY2tncm91bmRJbWFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaWRlbmF2VGl0bGU/OiBzdHJpbmdcbiAgICogVGl0bGUgc2V0IGluIHNpZGVOYXYuXG4gICAqL1xuICBASW5wdXQoJ3NpZGVuYXZUaXRsZScpIHNpZGVuYXZUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqXG4gICAqIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZVxuICAgKi9cbiAgQElucHV0KCdpY29uJykgaWNvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBsb2dvPzogc3RyaW5nXG4gICAqXG4gICAqIGxvZ28gaWNvbiBuYW1lIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBJZiBbaWNvbl0gaXMgc2V0LCB0aGVuIHRoaXMgd2lsbCBub3QgYmUgc2hvd24uXG4gICAqL1xuICBASW5wdXQoJ2xvZ28nKSBsb2dvOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBkZWZhdWx0IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHNpZGVuYXZUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgnbmF2aWdhdGlvblJvdXRlJykgbmF2aWdhdGlvblJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGJhY2tncm91bmRVcmw/OiBTYWZlUmVzb3VyY2VVcmxcbiAgICpcbiAgICogaW1hZ2UgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB0b29sYmFyLlxuICAgKiBVUkwgdXNlZCB3aWxsIGJlIHNhbml0aXplZCwgYnV0IGl0IHNob3VsZCBiZSBhbHdheXMgZnJvbSBhIHRydXN0ZWQgc291cmNlIHRvIGF2b2lkIFhTUy5cbiAgICovXG4gIEBJbnB1dCgnYmFja2dyb3VuZFVybCcpXG4gIC8vIFRPRE8gQW5ndWxhciBjb21wbGFpbnMgd2l0aCB3YXJuaW5ncyBpZiB0aGlzIGlzIHR5cGUgW1NhZmVSZXNvdXJjZVVybF0uLiBzbyB3ZSB3aWxsIG1ha2UgaXQgPGFueT4gdW50aWwgaXRzIGZpeGVkLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy8yOTc3XG4gIHNldCBiYWNrZ3JvdW5kVXJsKGJhY2tncm91bmRVcmw6IGFueSkge1xuICAgIGlmIChiYWNrZ3JvdW5kVXJsKSB7XG4gICAgICBsZXQgc2FuaXRpemVkVXJsOiBzdHJpbmcgPSB0aGlzLl9zYW5pdGl6ZS5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCBiYWNrZ3JvdW5kVXJsKTtcbiAgICAgIHRoaXMuX2JhY2tncm91bmRJbWFnZSA9IHRoaXMuX3Nhbml0aXplLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5TVFlMRSwgJ3VybCgnICsgc2FuaXRpemVkVXJsICsgJyknKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJhY2tncm91bmRJbWFnZSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogbmFtZT86IHN0cmluZ1xuICAgKlxuICAgKiBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGFzIHBhcnQgb2YgdGhlIG5hdmlnYXRpb24gZHJhd2VyIHN1YmxhYmVsLlxuICAgKiBpZiBbZW1haWxdIGlzIG5vdCBzZXQsIHRoZW4gW25hbWVdIHdpbGwgYmUgdGhlIHRvZ2dsZSBtZW51IHRleHQuXG4gICAqL1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGVtYWlsPzogc3RyaW5nXG4gICAqXG4gICAqIHN0cmluZyB0byBiZSBkaXNwbGF5ZWQgYXMgcGFydCBvZiB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIgc3VibGFiZWwgaW4gdGhlIFt0b2dnbGVdIG1lbnUgdGV4dC5cbiAgICogaWYgW2VtYWlsXSBhbmQgW25hbWVdIGFyZSBub3Qgc2V0LCB0aGVuIHRoZSB0b2dnbGUgbWVudSBpcyBub3QgcmVuZGVyZWQuXG4gICAqL1xuICBASW5wdXQoJ2VtYWlsJykgZW1haWw6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdXRlciB3YXMgaW5qZWN0ZWQuXG4gICAqL1xuICBnZXQgcm91dGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9yb3V0ZXIgJiYgISF0aGlzLm5hdmlnYXRpb25Sb3V0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIHByaXZhdGUgX2xheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zYW5pdGl6ZTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy5fbGF5b3V0LnNpZGVuYXYub3BlbmVkQ2hhbmdlLnN1YnNjcmliZSgob3BlbmVkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICB0aGlzLl9tZW51VG9nZ2xlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc01lbnVBdmFpbGFibGUpIHtcbiAgICAgIHRoaXMuX21lbnVUb2dnbGVkID0gIXRoaXMuX21lbnVUb2dnbGVkO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU5hdmlnYXRpb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm5hdmlnYXRpb25Sb3V0ZSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IHRvZ2dsZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBvcGVuIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgY2xvc2UgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5cbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTGF5b3V0VG9nZ2xlRGlyZWN0aXZlLCBUZExheW91dENsb3NlRGlyZWN0aXZlLCBUZExheW91dE9wZW5EaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRkTGF5b3V0TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2L2xheW91dC1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgVGRMYXlvdXROYXZMaXN0VG9nZ2xlRGlyZWN0aXZlLCBUZExheW91dE5hdkxpc3RDbG9zZURpcmVjdGl2ZSwgVGRMYXlvdXROYXZMaXN0T3BlbkRpcmVjdGl2ZSxcbn0gZnJvbSAnLi9sYXlvdXQtbmF2LWxpc3QvbGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWNhcmQtb3Zlci9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1tYW5hZ2UtbGlzdC9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZURpcmVjdGl2ZSwgVGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VEaXJlY3RpdmUsIFRkTGF5b3V0TWFuYWdlTGlzdE9wZW5EaXJlY3RpdmUsXG59IGZyb20gJy4vbGF5b3V0LW1hbmFnZS1saXN0L2xheW91dC1tYW5hZ2UtbGlzdC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRkTGF5b3V0Rm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtZm9vdGVyL2xheW91dC1mb290ZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgVGROYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50LCBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlLCBUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlLFxufSBmcm9tICcuL25hdmlnYXRpb24tZHJhd2VyL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX0xBWU9VVFM6IFR5cGU8YW55PltdID0gW1xuICBUZExheW91dENvbXBvbmVudCxcbiAgVGRMYXlvdXRUb2dnbGVEaXJlY3RpdmUsXG4gIFRkTGF5b3V0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0T3BlbkRpcmVjdGl2ZSxcblxuICBUZExheW91dE5hdkNvbXBvbmVudCxcblxuICBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gIFRkTGF5b3V0TmF2TGlzdFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXROYXZMaXN0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TmF2TGlzdE9wZW5EaXJlY3RpdmUsXG5cbiAgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCxcblxuICBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdE9wZW5EaXJlY3RpdmUsXG5cbiAgVGRMYXlvdXRGb290ZXJDb21wb25lbnQsXG5cbiAgVGROYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50LFxuICBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlLFxuICBUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTY3JvbGxEaXNwYXRjaE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9MQVlPVVRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfTEFZT1VUUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRMYXlvdXRNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQVdhLGlCQUFpQjtJQUw5Qjs7Ozs7Ozs7OztRQWtCaUIsU0FBSSxHQUE2QixNQUFNLENBQUM7Ozs7Ozs7Ozs7O1FBWXRDLFdBQU0sR0FBWSxLQUFLLENBQUM7Ozs7Ozs7OztRQVVsQixpQkFBWSxHQUFXLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7UUFZMUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0tBK0JoRTs7Ozs7O0lBekJDLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7S0FDN0I7Ozs7O0lBS00sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOzs7OztJQUtNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDNUI7Ozs7O0lBS00sS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUM3Qjs7O1lBakZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFFckIsa2pCQUFzQzs7YUFDdkM7OztzQkFHRSxTQUFTLFNBQUMsVUFBVTttQkFXcEIsS0FBSyxTQUFDLE1BQU07cUJBWVosS0FBSyxTQUFDLFFBQVE7MkJBVWQsS0FBSyxTQUFDLGNBQWM7Z0NBWXBCLEtBQUssU0FBQyxtQkFBbUI7Ozs7Ozs7QUMxRDVCLE1BZ0JhLGdCQUFnQjtDQUFJOzs7QUFHakMsTUFBYSx3QkFBd0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7Ozs7QUFFdkUsTUFBc0IsWUFBYSxTQUFRLHdCQUF3Qjs7Ozs7O0lBb0JqRSxZQUFzQixPQUF5QixFQUMzQixTQUFvQixFQUNwQixXQUF1QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQUhZLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFsQm5DLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBbUJ2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0tBQ2xGOzs7Ozs7OztJQWJELElBQ0ksY0FBYyxDQUFDLGNBQXVCO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7O0lBU0QsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCLENBQUMsQ0FBQzs7O1FBR0gsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDOUI7S0FDRjs7Ozs7O0lBTUQsYUFBYSxDQUFDLEtBQVk7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtLQUNGOzs7O0lBSU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEU7S0FDRjs7OzZCQW5EQSxLQUFLLFNBQUMsZ0JBQWdCOzRCQW1DdEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztBQ3BFbkMsTUFPYSx1QkFBd0IsU0FBUSxZQUFZOzs7Ozs7SUFPdkQsWUFBeUQsTUFBeUIsRUFDdEUsUUFBbUIsRUFDbkIsVUFBc0I7UUFDaEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDckM7Ozs7O0lBVEQsSUFDSSxjQUFjLENBQUMsY0FBdUI7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLG1CQUFLLGNBQWMsT0FBSyxFQUFFLElBQUksY0FBYyxDQUFDLENBQUM7S0FDakU7Ozs7SUFRRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN2Qjs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBTFEsaUJBQWlCLHVCQWFYLE1BQU0sU0FBQyxVQUFVLENBQUMsTUFBTSxpQkFBaUIsQ0FBQztZQWQ5QixTQUFTO1lBQUUsVUFBVTs7OzZCQVM3QyxLQUFLLFNBQUMsZ0JBQWdCOztBQW1CekIsTUFBYSxzQkFBdUIsU0FBUSxZQUFZOzs7Ozs7SUFPdEQsWUFBeUQsTUFBeUIsRUFDdEUsUUFBbUIsRUFDbkIsVUFBc0I7UUFDaEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDckM7Ozs7O0lBVEQsSUFDSSxhQUFhLENBQUMsYUFBc0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLG1CQUFLLGFBQWEsT0FBSyxFQUFFLElBQUksYUFBYSxDQUFDLENBQUM7S0FDL0Q7Ozs7SUFRRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0Qjs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBMUJRLGlCQUFpQix1QkFrQ1gsTUFBTSxTQUFDLFVBQVUsQ0FBQyxNQUFNLGlCQUFpQixDQUFDO1lBbkM5QixTQUFTO1lBQUUsVUFBVTs7OzRCQThCN0MsS0FBSyxTQUFDLGVBQWU7O0FBbUJ4QixNQUFhLHFCQUFzQixTQUFRLFlBQVk7Ozs7OztJQU9yRCxZQUF5RCxNQUF5QixFQUN0RSxRQUFtQixFQUNuQixVQUFzQjtRQUNoQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFURCxJQUNJLGFBQWEsQ0FBQyxZQUFxQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsbUJBQUssWUFBWSxPQUFLLEVBQUUsSUFBSSxZQUFZLENBQUMsQ0FBQztLQUM3RDs7OztJQVFELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JCOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUEvQ1EsaUJBQWlCLHVCQXVEWCxNQUFNLFNBQUMsVUFBVSxDQUFDLE1BQU0saUJBQWlCLENBQUM7WUF4RDlCLFNBQVM7WUFBRSxVQUFVOzs7NEJBbUQ3QyxLQUFLLFNBQUMsY0FBYzs7Ozs7OztBQ25EdkIsTUFTYSxvQkFBb0I7Ozs7SUE4Qy9CLFlBQWdDLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFROzs7Ozs7O1FBaEIvQixVQUFLLEdBQVcsU0FBUyxDQUFDO0tBZ0JTOzs7OztJQUpuRCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0tBQ2pEOzs7O0lBSUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7S0FDRjs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFFekIseXlCQUEwQzs7YUFDM0M7Ozs7WUFQUSxNQUFNLHVCQXNEQSxRQUFROzs7MkJBdkNwQixLQUFLLFNBQUMsY0FBYzttQkFPcEIsS0FBSyxTQUFDLE1BQU07bUJBUVosS0FBSyxTQUFDLE1BQU07b0JBUVosS0FBSyxTQUFDLE9BQU87OEJBT2IsS0FBSyxTQUFDLGlCQUFpQjs7Ozs7OztBQzlDMUIsTUFZYSx3QkFBd0I7Ozs7SUFtR25DLFlBQWdDLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFROzs7Ozs7O1FBcEUvQixVQUFLLEdBQVcsU0FBUyxDQUFDOzs7Ozs7Ozs7O1FBVzNCLFNBQUksR0FBNkIsTUFBTSxDQUFDOzs7Ozs7Ozs7O1FBV3RDLFdBQU0sR0FBWSxJQUFJLENBQUM7Ozs7Ozs7OztRQVVqQixpQkFBWSxHQUFXLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7UUFZMUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0tBd0JaOzs7Ozs7SUFYbkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztLQUM3Qjs7Ozs7SUFLRCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0tBQ2pEOzs7O0lBSUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7S0FDRjs7Ozs7SUFLTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEQ7Ozs7O0lBS00sSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7SUFLTSxLQUFLO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzdCOzs7WUFuSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBRTlCLHdyREFBK0M7O2FBQ2hEOzs7O1lBVlEsTUFBTSx1QkE4R0EsUUFBUTs7O3NCQWpHcEIsU0FBUyxTQUFDLFVBQVU7MkJBT3BCLEtBQUssU0FBQyxjQUFjO21CQU1wQixLQUFLLFNBQUMsTUFBTTttQkFRWixLQUFLLFNBQUMsTUFBTTtvQkFRWixLQUFLLFNBQUMsT0FBTzttQkFXYixLQUFLLFNBQUMsTUFBTTtxQkFXWixLQUFLLFNBQUMsUUFBUTsyQkFVZCxLQUFLLFNBQUMsY0FBYztnQ0FZcEIsS0FBSyxTQUFDLG1CQUFtQjs4QkFPekIsS0FBSyxTQUFDLGlCQUFpQjs7Ozs7OztBQzlGMUIsTUFPYSw4QkFBK0IsU0FBUSxZQUFZOzs7Ozs7SUFPOUQsWUFBZ0UsTUFBZ0MsRUFDcEYsUUFBbUIsRUFDbkIsVUFBc0I7UUFDaEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDckM7Ozs7O0lBVEQsSUFDSSxxQkFBcUIsQ0FBQyxxQkFBOEI7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLG1CQUFLLHFCQUFxQixPQUFLLEVBQUUsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDO0tBQy9FOzs7O0lBUUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDdkI7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjthQUNwQzs7OztZQUxRLHdCQUF3Qix1QkFhbEIsTUFBTSxTQUFDLFVBQVUsQ0FBQyxNQUFNLHdCQUF3QixDQUFDO1lBZHJDLFNBQVM7WUFBRSxVQUFVOzs7b0NBUzdDLEtBQUssU0FBQyx1QkFBdUI7O0FBbUJoQyxNQUFhLDZCQUE4QixTQUFRLFlBQVk7Ozs7OztJQU83RCxZQUFnRSxNQUFnQyxFQUNwRixRQUFtQixFQUNuQixVQUFzQjtRQUNoQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFURCxJQUNJLG9CQUFvQixDQUFDLG9CQUE2QjtRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsbUJBQUssb0JBQW9CLE9BQUssRUFBRSxJQUFJLG9CQUFvQixDQUFDLENBQUM7S0FDN0U7Ozs7SUFRRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0Qjs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzs7O1lBMUJRLHdCQUF3Qix1QkFrQ2xCLE1BQU0sU0FBQyxVQUFVLENBQUMsTUFBTSx3QkFBd0IsQ0FBQztZQW5DckMsU0FBUztZQUFFLFVBQVU7OzttQ0E4QjdDLEtBQUssU0FBQyxzQkFBc0I7O0FBbUIvQixNQUFhLDRCQUE2QixTQUFRLFlBQVk7Ozs7OztJQU81RCxZQUFnRSxNQUFnQyxFQUNwRixRQUFtQixFQUNuQixVQUFzQjtRQUNoQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFURCxJQUNJLG1CQUFtQixDQUFDLG1CQUE0QjtRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsbUJBQUssbUJBQW1CLE9BQUssRUFBRSxJQUFJLG1CQUFtQixDQUFDLENBQUM7S0FDM0U7Ozs7SUFRRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNyQjs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7O1lBL0NRLHdCQUF3Qix1QkF1RGxCLE1BQU0sU0FBQyxVQUFVLENBQUMsTUFBTSx3QkFBd0IsQ0FBQztZQXhEckMsU0FBUztZQUFFLFVBQVU7OztrQ0FtRDdDLEtBQUssU0FBQyxxQkFBcUI7Ozs7Ozs7QUNuRDlCLE1BUWEseUJBQXlCO0lBTHRDOzs7Ozs7O1FBMkJzQixjQUFTLEdBQVcsRUFBRSxDQUFDOzs7Ozs7O1FBUTNCLFVBQUssR0FBVyxTQUFTLENBQUM7S0FFM0M7OztZQXJDQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFFL0IsbXNCQUFnRDs7YUFDakQ7Ozt3QkFRRSxLQUFLLFNBQUMsV0FBVzsyQkFPakIsS0FBSyxTQUFDLGNBQWM7d0JBUXBCLEtBQUssU0FBQyxXQUFXO29CQVFqQixLQUFLLFNBQUMsT0FBTzs7Ozs7OztBQ3RDaEIsTUFXYSwyQkFBMkI7SUFMeEM7Ozs7Ozs7Ozs7UUFrQmlCLFNBQUksR0FBNkIsTUFBTSxDQUFDOzs7Ozs7Ozs7OztRQVl0QyxXQUFNLEdBQVksSUFBSSxDQUFDOzs7Ozs7Ozs7UUFVakIsaUJBQVksR0FBVyxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1FBWTFCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztLQStCaEU7Ozs7OztJQXpCQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0tBQzdCOzs7OztJQUtNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsRDs7Ozs7SUFLTSxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzVCOzs7OztJQUtNLEtBQUs7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDN0I7OztZQWpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFFakMsbTZCQUFrRDs7YUFDbkQ7OztzQkFHRSxTQUFTLFNBQUMsVUFBVTttQkFXcEIsS0FBSyxTQUFDLE1BQU07cUJBWVosS0FBSyxTQUFDLFFBQVE7MkJBVWQsS0FBSyxTQUFDLGNBQWM7Z0NBWXBCLEtBQUssU0FBQyxtQkFBbUI7Ozs7Ozs7QUMxRDVCLE1BT2EsaUNBQWtDLFNBQVEsWUFBWTs7Ozs7O0lBT2pFLFlBQW1FLE1BQW1DLEVBQzFGLFFBQW1CLEVBQ25CLFVBQXNCO1FBQ2hDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDOzs7OztJQVRELElBQ0ksd0JBQXdCLENBQUMsd0JBQWlDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxtQkFBSyx3QkFBd0IsT0FBSyxFQUFFLElBQUksd0JBQXdCLENBQUMsQ0FBQztLQUNyRjs7OztJQVFELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3ZCOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7YUFDdkM7Ozs7WUFMUSwyQkFBMkIsdUJBYXJCLE1BQU0sU0FBQyxVQUFVLENBQUMsTUFBTSwyQkFBMkIsQ0FBQztZQWR4QyxTQUFTO1lBQUUsVUFBVTs7O3VDQVM3QyxLQUFLLFNBQUMsMEJBQTBCOztBQW1CbkMsTUFBYSxnQ0FBaUMsU0FBUSxZQUFZOzs7Ozs7SUFPaEUsWUFBbUUsTUFBbUMsRUFDMUYsUUFBbUIsRUFDbkIsVUFBc0I7UUFDaEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDckM7Ozs7O0lBVEQsSUFDSSx1QkFBdUIsQ0FBQyx1QkFBZ0M7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLG1CQUFLLHVCQUF1QixPQUFLLEVBQUUsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDO0tBQ25GOzs7O0lBUUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdEI7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7OztZQTFCUSwyQkFBMkIsdUJBa0NyQixNQUFNLFNBQUMsVUFBVSxDQUFDLE1BQU0sMkJBQTJCLENBQUM7WUFuQ3hDLFNBQVM7WUFBRSxVQUFVOzs7c0NBOEI3QyxLQUFLLFNBQUMseUJBQXlCOztBQW1CbEMsTUFBYSwrQkFBZ0MsU0FBUSxZQUFZOzs7Ozs7SUFPL0QsWUFBbUUsTUFBbUMsRUFDMUYsUUFBbUIsRUFDbkIsVUFBc0I7UUFDaEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDckM7Ozs7O0lBVEQsSUFDSSxzQkFBc0IsQ0FBQyxzQkFBK0I7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLG1CQUFLLHNCQUFzQixPQUFLLEVBQUUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDO0tBQ2pGOzs7O0lBUUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDckI7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjthQUNyQzs7OztZQS9DUSwyQkFBMkIsdUJBdURyQixNQUFNLFNBQUMsVUFBVSxDQUFDLE1BQU0sMkJBQTJCLENBQUM7WUF4RHhDLFNBQVM7WUFBRSxVQUFVOzs7cUNBbUQ3QyxLQUFLLFNBQUMsd0JBQXdCOzs7Ozs7O0FDbkRqQyxNQVFhLHVCQUF1Qjs7Ozs7SUFxQmxDLFlBQW9CLFNBQW9CLEVBQ3BCLFdBQXVCO1FBRHZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztLQUM3RTs7Ozs7Ozs7SUFmRCxJQUNJLEtBQUssQ0FBQyxLQUFvQztRQUM1QyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvRTtLQUNGOzs7O0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7WUF6QkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUseUNBQXlDO2dCQUVuRCx1Q0FBNkM7O2FBQzlDOzs7O1lBUDBCLFNBQVM7WUFBRSxVQUFVOzs7b0JBaUI3QyxLQUFLLFNBQUMsT0FBTzs7Ozs7OztBQ2pCaEIsTUFlYSwrQkFBK0I7OztZQUgzQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7QUFRRCxNQUFhLGtDQUFrQzs7O1lBSDlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2FBQzNDOztBQVdELE1BQWEsMkJBQTJCOzs7Ozs7SUFpSHRDLFlBQWlFLE9BQTBCLEVBQzNELE9BQWUsRUFDM0IsU0FBdUI7UUFGc0IsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDM0QsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBaEhuQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztLQWdIUzs7OztJQTdHL0MsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7OztJQVNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUMvRDs7Ozs7SUFLRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDekQ7Ozs7O0lBS0QsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0tBQ2hDOzs7Ozs7Ozs7SUE0Q0QsSUFHSSxhQUFhLENBQUMsYUFBa0I7UUFDbEMsSUFBSSxhQUFhLEVBQUU7O2dCQUNiLFlBQVksR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztZQUMvRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3JHO0tBQ0Y7Ozs7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDOUI7Ozs7O0lBcUJELElBQUksYUFBYTtRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7S0FDakQ7Ozs7SUFNRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFlO1lBQ3BGLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztTQUNyQztLQUNGOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4QztLQUNGOzs7O0lBRUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7S0FDRjs7Ozs7SUFLTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzlCOzs7OztJQUtNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDNUI7Ozs7O0lBS00sS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUM3Qjs7O1lBMUtGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUVoQywyb0RBQWlEO2dCQUNqRCxVQUFVLEVBQUUsQ0FBRSxtQkFBbUIsQ0FBRTs7YUFDcEM7Ozs7WUF2QlEsaUJBQWlCLHVCQXlJWCxNQUFNLFNBQUMsVUFBVSxDQUFDLE1BQU0saUJBQWlCLENBQUM7WUEvSWhELE1BQU0sdUJBZ0pBLFFBQVE7WUEvSWMsWUFBWTs7OzBCQXVDOUMsZUFBZSxTQUFDLCtCQUErQjt1QkFFL0MsZUFBZSxTQUFDLGtDQUFrQzsyQkEyQmxELEtBQUssU0FBQyxjQUFjO21CQU9wQixLQUFLLFNBQUMsTUFBTTttQkFRWixLQUFLLFNBQUMsTUFBTTtvQkFRWixLQUFLLFNBQUMsT0FBTzs4QkFPYixLQUFLLFNBQUMsaUJBQWlCOzRCQVF2QixLQUFLLFNBQUMsZUFBZTttQkFtQnJCLEtBQUssU0FBQyxNQUFNO29CQVFaLEtBQUssU0FBQyxPQUFPOzs7Ozs7O0FDdkloQjtNQTZCTSxVQUFVLEdBQWdCO0lBQzlCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUVyQixvQkFBb0I7SUFFcEIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBRTVCLHlCQUF5QjtJQUV6QiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQywrQkFBK0I7SUFFL0IsdUJBQXVCO0lBRXZCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0NBQ25DO0FBb0JELE1BQWEsb0JBQW9COzs7WUFsQmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixnQkFBZ0I7aUJBQ2pCO2dCQUNELFlBQVksRUFBRTtvQkFDWixVQUFVO2lCQUNYO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxVQUFVO2lCQUNYO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9