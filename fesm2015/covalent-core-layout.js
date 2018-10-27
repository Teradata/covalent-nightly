import { Component, Input, ViewChild, HostListener, Optional, Directive, Renderer2, ElementRef, Inject, forwardRef, ContentChildren, SecurityContext, NgModule } from '@angular/core';
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
        // if layout has not been provided
        // show warn message
        if (!this._layout) {
            this._noLayoutMessage();
        }
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
        if (this._layout && this._layout.sidenav) {
            this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(() => {
                this._toggleVisibility();
            });
        }
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
            // if layout has been provided, try triggering the click on it
            // else show warn message
            if (this._layout && this._layout.open) {
                this.onClick();
            }
            else {
                this._noLayoutMessage();
            }
        }
    }
    /**
     * @return {?}
     */
    _toggleVisibility() {
        if (this._layout) {
            if (this._layout.sidenav.opened && this._hideWhenOpened) {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
            }
            else {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
            }
        }
    }
    /**
     * @return {?}
     */
    _noLayoutMessage() {
        /* tslint:disable-next-line */
        console.warn('Covalent: Parent layout not found for layout toggle directive');
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
    { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutComponent),] }] },
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
    { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutComponent),] }] },
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
    { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutComponent),] }] },
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
    { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
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
    { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
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
    { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
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
    { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
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
    { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
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
    { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1sYXlvdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LXRvZ2dsZS5jbGFzcy50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L2xheW91dC5kaXJlY3RpdmVzLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LW5hdi9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L2xheW91dC1uYXYtbGlzdC9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5kaXJlY3RpdmVzLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LWNhcmQtb3Zlci9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L2xheW91dC1tYW5hZ2UtbGlzdC9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LW1hbmFnZS1saXN0L2xheW91dC1tYW5hZ2UtbGlzdC5kaXJlY3RpdmVzLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvbGF5b3V0LWZvb3Rlci9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L25hdmlnYXRpb24tZHJhd2VyL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJTGF5b3V0VG9nZ2xhYmxlIH0gZnJvbSAnLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0JyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBJTGF5b3V0VG9nZ2xhYmxlIHtcblxuICBAVmlld0NoaWxkKE1hdFNpZGVuYXYpIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiAnc2lkZScsICdwdXNoJyBvciAnb3ZlcidcbiAgICpcbiAgICogVGhlIG1vZGUgb3Igc3R5bGluZyBvZiB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJvdmVyXCIuXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnbW9kZScpIG1vZGU6ICdzaWRlJyB8ICdwdXNoJyB8ICdvdmVyJyA9ICdvdmVyJztcblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuIFVzZSB0aGlzIGJpbmRpbmcgdG8gb3Blbi9jbG9zZSB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJmYWxzZVwiLlxuICAgKlxuICAgKiBTZWUgXCJNYXRTaWRlbmF2XCIgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvdHJlZS9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ29wZW5lZCcpIG9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBzaWRlbmF2V2lkdGg/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgXCJ3aWR0aFwiIG9mIHRoZSBzaWRlbmF2IGluIGVpdGhlciBcInB4XCIgb3IgXCIlXCJcbiAgICogRGVmYXVsdHMgdG8gXCIzMjBweFwiLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvdHJlZS9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ3NpZGVuYXZXaWR0aCcpIHNpZGVuYXZXaWR0aDogc3RyaW5nID0gJzMyMHB4JztcblxuICAvKipcbiAgICogY29udGFpbmVyQXV0b3NpemU/OiBib29sZWFuXG4gICAqXG4gICAqIFNldHMgXCJhdXRvc2l6ZVwiIG9mIHRoZSBzaWRlbmF2LWNvbnRhaW5lci5cbiAgICogRGVmYXVsdHMgdG8gXCJmYWxzZVwiLlxuICAgKlxuICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvIGFuZCBwb3RlbnRpYWwgcGVyZm9ybWFuY2Ugcmlza3MuXG4gICAqIFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvYmxvYi9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2L3NpZGVuYXYubWQjcmVzaXppbmctYW4tb3Blbi1zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ2NvbnRhaW5lckF1dG9zaXplJykgY29udGFpbmVyQXV0b3NpemU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGBFU0NgIHNob3VsZCBjbG9zZSB0aGUgc2lkZW5hdlxuICAgKiBTaG91bGQgb25seSBjbG9zZSBpdCBmb3IgYHB1c2hgIGFuZCBgb3ZlcmAgbW9kZXNcbiAgICovXG4gIGdldCBkaXNhYmxlQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3NpZGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IHRvZ2dsZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi50b2dnbGUoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IG9wZW4gbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBjbG9zZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMYXlvdXRUb2dnbGFibGUge1xuICBvcGVuZWQ6IGJvb2xlYW47XG4gIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG4gIHRvZ2dsZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG4gIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xuICBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXRUb2dnbGVCYXNlIHsgfVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRMYXlvdXRUb2dnbGVNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVkKExheW91dFRvZ2dsZUJhc2UpO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF5b3V0VG9nZ2xlIGV4dGVuZHMgX1RkTGF5b3V0VG9nZ2xlTWl4aW5CYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJQ2FuRGlzYWJsZSB7XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlU3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2hpZGVXaGVuT3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGhpZGVXaGVuT3BlbmVkPzogYm9vbGVhblxuICAgKiBXaGVuIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZSBob3N0IHdpbGwgYmUgaGlkZGVuIHdoZW5cbiAgICogdGhlIHNpZGVuYXYgaXMgb3BlbmVkLlxuICAgKi9cbiAgQElucHV0KCdoaWRlV2hlbk9wZW5lZCcpXG4gIHNldCBoaWRlV2hlbk9wZW5lZChoaWRlV2hlbk9wZW5lZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVXaGVuT3BlbmVkID0gaGlkZVdoZW5PcGVuZWQ7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9sYXlvdXQ6IElMYXlvdXRUb2dnbGFibGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIC8vIGlmIGxheW91dCBoYXMgbm90IGJlZW4gcHJvdmlkZWRcbiAgICAvLyBzaG93IHdhcm4gbWVzc2FnZVxuICAgIGlmICghdGhpcy5fbGF5b3V0KSB7XG4gICAgICB0aGlzLl9ub0xheW91dE1lc3NhZ2UoKTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtbGF5b3V0LW1lbnUtYnV0dG9uJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLl9sYXlvdXQgJiYgdGhpcy5fbGF5b3V0LnNpZGVuYXYpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVN1YnMgPSB0aGlzLl9sYXlvdXQuc2lkZW5hdi5fYW5pbWF0aW9uU3RhcnRlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gZXhlY3V0ZSB0b2dnbGVWaXNpYmlsaXR5IHNpbmNlIHRoZSBvbk9wZW5TdGFydCBhbmQgb25DbG9zZVN0YXJ0XG4gICAgLy8gbWV0aG9kcyBtaWdodCBub3QgYmUgZXhlY3V0ZWQgYWx3YXlzIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVuZGVyZWRcbiAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlU3Vicykge1xuICAgICAgdGhpcy5fdG9nZ2xlU3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fdG9nZ2xlU3VicyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGNsaWNrIGV2ZW50IHRvIHRyaWdnZXIgdGhlIGxheW91dCB0b2dnbGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgLy8gaWYgbGF5b3V0IGhhcyBiZWVuIHByb3ZpZGVkLCB0cnkgdHJpZ2dlcmluZyB0aGUgY2xpY2sgb24gaXRcbiAgICAgIC8vIGVsc2Ugc2hvdyB3YXJuIG1lc3NhZ2VcbiAgICAgIGlmICh0aGlzLl9sYXlvdXQgJiYgdGhpcy5fbGF5b3V0Lm9wZW4pIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ub0xheW91dE1lc3NhZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCBvbkNsaWNrKCk6IHZvaWQ7XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbGF5b3V0KSB7XG4gICAgICBpZiAodGhpcy5fbGF5b3V0LnNpZGVuYXYub3BlbmVkICYmIHRoaXMuX2hpZGVXaGVuT3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ub0xheW91dE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgY29uc29sZS53YXJuKCdDb3ZhbGVudDogUGFyZW50IGxheW91dCBub3QgZm91bmQgZm9yIGxheW91dCB0b2dnbGUgZGlyZWN0aXZlJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgT3B0aW9uYWwsIERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUb2dnbGUgfSBmcm9tICcuL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXRUb2dnbGUnKSBcbiAgc2V0IHRkTGF5b3V0VG9nZ2xlKHRkTGF5b3V0VG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dFRvZ2dsZSA9PT0gJycgfHwgdGRMYXlvdXRUb2dnbGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0Q2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRDbG9zZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG4gIFxuICBASW5wdXQoJ3RkTGF5b3V0Q2xvc2UnKSBcbiAgc2V0IHRkTGF5b3V0Q2xvc2UodGRMYXlvdXRDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXRDbG9zZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE9wZW5dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRPcGVuRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0T3BlbicpIFxuICBzZXQgdGRMYXlvdXRDbG9zZSh0ZExheW91dE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0T3BlbiA9PT0gJycgfHwgdGRMYXlvdXRPcGVuKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1uYXYnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtbmF2LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW5hdi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2Q29tcG9uZW50IHtcblxuICAvKipcbiAgICogdG9vbGJhclRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFRpdGxlIHNldCBpbiB0b29sYmFyLlxuICAgKi9cbiAgQElucHV0KCd0b29sYmFyVGl0bGUnKSB0b29sYmFyVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgnaWNvbicpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCdsb2dvJykgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgcHJpbWFyeSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRpb25Sb3V0ZT86IHN0cmluZ1xuICAgKlxuICAgKiBvcHRpb24gdG8gc2V0IHRoZSBjb21iaW5lZCByb3V0ZSBmb3IgdGhlIGljb24sIGxvZ28sIGFuZCB0b29sYmFyVGl0bGUuXG4gICAqL1xuICBASW5wdXQoJ25hdmlnYXRpb25Sb3V0ZScpIG5hdmlnYXRpb25Sb3V0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm91dGVyIHdhcyBpbmplY3RlZC5cbiAgICovXG4gIGdldCByb3V0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3JvdXRlciAmJiAhIXRoaXMubmF2aWdhdGlvblJvdXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgaGFuZGxlTmF2aWdhdGlvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubmF2aWdhdGlvblJvdXRlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJTGF5b3V0VG9nZ2xhYmxlIH0gZnJvbSAnLi4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxheW91dC1uYXYtbGlzdCcsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIElMYXlvdXRUb2dnbGFibGUge1xuXG4gIEBWaWV3Q2hpbGQoTWF0U2lkZW5hdikgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICAvKipcbiAgICogdG9vbGJhclRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFRpdGxlIHNldCBpbiB0b29sYmFyLlxuICAgKi9cbiAgQElucHV0KCd0b29sYmFyVGl0bGUnKSB0b29sYmFyVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgnaWNvbicpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCdsb2dvJykgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHN0cmluZ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgcHJpbWFyeSBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiAnc2lkZScsICdwdXNoJyBvciAnb3ZlcidcbiAgICpcbiAgICogVGhlIG1vZGUgb3Igc3R5bGluZyBvZiB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJzaWRlXCIuXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnbW9kZScpIG1vZGU6ICdzaWRlJyB8ICdwdXNoJyB8ICdvdmVyJyA9ICdzaWRlJztcblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuIFVzZSB0aGlzIGJpbmRpbmcgdG8gb3Blbi9jbG9zZSB0aGUgc2lkZW5hdi5cbiAgICogRGVmYXVsdHMgdG8gXCJ0cnVlXCIuXG4gICAqXG4gICAqIFNlZSBcIk1hdFNpZGVuYXZcIiBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJykgb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogc2lkZW5hdldpZHRoPzogc3RyaW5nXG4gICAqXG4gICAqIFNldHMgdGhlIFwid2lkdGhcIiBvZiB0aGUgc2lkZW5hdiBpbiBlaXRoZXIgXCJweFwiIG9yIFwiJVwiXG4gICAqIERlZmF1bHRzIHRvIFwiMzUwcHhcIi5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdzaWRlbmF2V2lkdGgnKSBzaWRlbmF2V2lkdGg6IHN0cmluZyA9ICczNTBweCc7XG5cbiAgLyoqXG4gICAqIGNvbnRhaW5lckF1dG9zaXplPzogYm9vbGVhblxuICAgKlxuICAgKiBTZXRzIFwiYXV0b3NpemVcIiBvZiB0aGUgc2lkZW5hdi1jb250YWluZXIuXG4gICAqIERlZmF1bHRzIHRvIFwiZmFsc2VcIi5cbiAgICpcbiAgICogU2VlIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mbyBhbmQgcG90ZW50aWFsIHBlcmZvcm1hbmNlIHJpc2tzLlxuICAgKiBcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2Jsb2IvbWFzdGVyL3NyYy9saWIvc2lkZW5hdi9zaWRlbmF2Lm1kI3Jlc2l6aW5nLWFuLW9wZW4tc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCdjb250YWluZXJBdXRvc2l6ZScpIGNvbnRhaW5lckF1dG9zaXplOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHRvb2xiYXJUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgnbmF2aWdhdGlvblJvdXRlJykgbmF2aWdhdGlvblJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgRVNDYCBzaG91bGQgY2xvc2UgdGhlIHNpZGVuYXZcbiAgICogU2hvdWxkIG9ubHkgY2xvc2UgaXQgZm9yIGBwdXNoYCBhbmQgYG92ZXJgIG1vZGVzXG4gICAqL1xuICBnZXQgZGlzYWJsZUNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdzaWRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm91dGVyIHdhcyBpbmplY3RlZC5cbiAgICovXG4gIGdldCByb3V0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3JvdXRlciAmJiAhIXRoaXMubmF2aWdhdGlvblJvdXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgaGFuZGxlTmF2aWdhdGlvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubmF2aWdhdGlvblJvdXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgdG9nZ2xlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LnRvZ2dsZSghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgb3BlbiBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IGNsb3NlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBPcHRpb25hbCwgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW5hdi1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUb2dnbGUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TmF2TGlzdFRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkxpc3RUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXROYXZMaXN0VG9nZ2xlJykgXG4gIHNldCB0ZExheW91dE5hdkxpc3RUb2dnbGUodGRMYXlvdXROYXZMaXN0VG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE5hdkxpc3RUb2dnbGUgPT09ICcnIHx8IHRkTGF5b3V0TmF2TGlzdFRvZ2dsZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE5hdkxpc3RDbG9zZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkxpc3RDbG9zZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG4gIFxuICBASW5wdXQoJ3RkTGF5b3V0TmF2TGlzdENsb3NlJykgXG4gIHNldCB0ZExheW91dE5hdkxpc3RDbG9zZSh0ZExheW91dE5hdkxpc3RDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXROYXZMaXN0Q2xvc2UgPT09ICcnIHx8IHRkTGF5b3V0TmF2TGlzdENsb3NlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE5hdkxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQuY2xvc2UoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXROYXZMaXN0T3Blbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkxpc3RPcGVuRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TmF2TGlzdE9wZW4nKSBcbiAgc2V0IHRkTGF5b3V0TmF2TGlzdE9wZW4odGRMYXlvdXROYXZMaXN0T3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXROYXZMaXN0T3BlbiA9PT0gJycgfHwgdGRMYXlvdXROYXZMaXN0T3Blbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sYXlvdXQtY2FyZC1vdmVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dENhcmRPdmVyQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogY2FyZFRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFRpdGxlIHNldCBpbiBjYXJkLlxuICAgKi9cbiAgQElucHV0KCdjYXJkVGl0bGUnKSBjYXJkVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogY2FyZFN1YnRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFN1YnRpdGxlIHNldCBpbiBjYXJkLlxuICAgKi9cbiAgQElucHV0KCdjYXJkU3VidGl0bGUnKSBjYXJkU3VidGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogY2FyZFdpZHRoPzogc3RyaW5nXG4gICAqXG4gICAqIENhcmQgZmxleCB3aWR0aCBpbiAlLlxuICAgKiBEZWZhdWx0cyB0byA3MCUuXG4gICAqL1xuICBASW5wdXQoJ2NhcmRXaWR0aCcpIGNhcmRXaWR0aDogbnVtYmVyID0gNzA7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBwcmltYXJ5IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbmltcG9ydCB7IElMYXlvdXRUb2dnbGFibGUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbGF5b3V0LW1hbmFnZS1saXN0JyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LW1hbmFnZS1saXN0LmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW1hbmFnZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgSUxheW91dFRvZ2dsYWJsZSB7XG5cbiAgQFZpZXdDaGlsZChNYXRTaWRlbmF2KSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuXG4gIC8qKlxuICAgKiBtb2RlPzogJ3NpZGUnLCAncHVzaCcgb3IgJ292ZXInXG4gICAqXG4gICAqIFRoZSBtb2RlIG9yIHN0eWxpbmcgb2YgdGhlIHNpZGVuYXYuXG4gICAqIERlZmF1bHRzIHRvIFwic2lkZVwiLlxuICAgKiBTZWUgXCJNYXRTaWRlbmF2XCIgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvdHJlZS9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ21vZGUnKSBtb2RlOiAnc2lkZScgfCAncHVzaCcgfCAnb3ZlcicgPSAnc2lkZSc7XG5cbiAgLyoqXG4gICAqIG9wZW5lZD86IGJvb2xlYW5cbiAgICpcbiAgICogV2hldGhlciBvciBub3QgdGhlIHNpZGVuYXYgaXMgb3BlbmVkLiBVc2UgdGhpcyBiaW5kaW5nIHRvIG9wZW4vY2xvc2UgdGhlIHNpZGVuYXYuXG4gICAqIERlZmF1bHRzIHRvIFwidHJ1ZVwiLlxuICAgKlxuICAgKiBTZWUgXCJNYXRTaWRlbmF2XCIgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvLlxuICAgKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvdHJlZS9tYXN0ZXIvc3JjL2xpYi9zaWRlbmF2XG4gICAqL1xuICBASW5wdXQoJ29wZW5lZCcpIG9wZW5lZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIHNpZGVuYXZXaWR0aD86IHN0cmluZ1xuICAgKlxuICAgKiBTZXRzIHRoZSBcIndpZHRoXCIgb2YgdGhlIHNpZGVuYXYgaW4gZWl0aGVyIFwicHhcIiBvciBcIiVcIlxuICAgKiBEZWZhdWx0cyB0byBcIjI1N3B4XCIuXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi90cmVlL21hc3Rlci9zcmMvbGliL3NpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnc2lkZW5hdldpZHRoJykgc2lkZW5hdldpZHRoOiBzdHJpbmcgPSAnMjU3cHgnO1xuXG4gIC8qKlxuICAgKiBjb250YWluZXJBdXRvc2l6ZT86IGJvb2xlYW5cbiAgICpcbiAgICogU2V0cyBcImF1dG9zaXplXCIgb2YgdGhlIHNpZGVuYXYtY29udGFpbmVyLlxuICAgKiBEZWZhdWx0cyB0byBcImZhbHNlXCIuXG4gICAqXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8gYW5kIHBvdGVudGlhbCBwZXJmb3JtYW5jZSByaXNrcy5cbiAgICogXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9ibG9iL21hc3Rlci9zcmMvbGliL3NpZGVuYXYvc2lkZW5hdi5tZCNyZXNpemluZy1hbi1vcGVuLXNpZGVuYXZcbiAgICovXG4gIEBJbnB1dCgnY29udGFpbmVyQXV0b3NpemUnKSBjb250YWluZXJBdXRvc2l6ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYEVTQ2Agc2hvdWxkIGNsb3NlIHRoZSBzaWRlbmF2XG4gICAqIFNob3VsZCBvbmx5IGNsb3NlIGl0IGZvciBgcHVzaGAgYW5kIGBvdmVyYCBtb2Rlc1xuICAgKi9cbiAgZ2V0IGRpc2FibGVDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnc2lkZSc7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgdG9nZ2xlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LnRvZ2dsZSghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgb3BlbiBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IGNsb3NlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBPcHRpb25hbCwgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW1hbmFnZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUb2dnbGUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlJykgXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RUb2dnbGUodGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE1hbmFnZUxpc3RUb2dnbGUgPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE1hbmFnZUxpc3RDbG9zZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RDbG9zZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG4gIFxuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdENsb3NlJykgXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RDbG9zZSh0ZExheW91dE1hbmFnZUxpc3RDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2UgPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdENsb3NlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQuY2xvc2UoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRNYW5hZ2VMaXN0T3Blbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RPcGVuRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdE9wZW4nKSBcbiAgc2V0IHRkTGF5b3V0TWFuYWdlTGlzdE9wZW4odGRMYXlvdXRNYW5hZ2VMaXN0T3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRNYW5hZ2VMaXN0T3BlbiA9PT0gJycgfHwgdGRMYXlvdXRNYW5hZ2VMaXN0T3Blbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0ZC1sYXlvdXQtZm9vdGVyLHRkLWxheW91dC1mb290ZXItaW5uZXInLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0Rm9vdGVyQ29tcG9uZW50IHtcblxuICBwcml2YXRlIF9jb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIE9wdGlvbmFsIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJylcbiAgc2V0IGNvbG9yKGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJykge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWxheW91dC1mb290ZXInKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgT25Jbml0LCBPbkRlc3Ryb3ksIGZvcndhcmRSZWYsIEluamVjdCxcbiAgICAgICAgIFF1ZXJ5TGlzdCwgU2VjdXJpdHlDb250ZXh0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNhZmVSZXNvdXJjZVVybCwgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1uYXZpZ2F0aW9uLWRyYXdlci1tZW51XScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmUge1xuXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1uYXZpZ2F0aW9uLWRyYXdlci10b29sYmFyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmUge1xuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW5hdmlnYXRpb24tZHJhd2VyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFsgdGRDb2xsYXBzZUFuaW1hdGlvbiBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdmlnYXRpb25EcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfY2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfbWVudVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYmFja2dyb3VuZEltYWdlOiBTYWZlU3R5bGU7XG5cbiAgZ2V0IG1lbnVUb2dnbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tZW51VG9nZ2xlZDtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSkgX2RyYXdlck1lbnU6IFF1ZXJ5TGlzdDxUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlPjtcblxuICBAQ29udGVudENoaWxkcmVuKFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmUpIF90b29sYmFyOiBRdWVyeUxpc3Q8VGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZT47XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIFtUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlXSBoYXMgY29udGVudC5cbiAgICovXG4gIGdldCBpc01lbnVBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYXdlck1lbnUgPyB0aGlzLl9kcmF3ZXJNZW51Lmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBbVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZV0gaGFzIGNvbnRlbnQuXG4gICAqL1xuICBnZXQgaXNDdXN0b21Ub29sYmFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sYmFyID8gdGhpcy5fdG9vbGJhci5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBpbWFnZSBmb3IgdGhlIHRvb2xiYXIuXG4gICAqL1xuICBnZXQgaXNCYWNrZ3JvdW5kQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2JhY2tncm91bmRJbWFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaWRlbmF2VGl0bGU/OiBzdHJpbmdcbiAgICogVGl0bGUgc2V0IGluIHNpZGVOYXYuXG4gICAqL1xuICBASW5wdXQoJ3NpZGVuYXZUaXRsZScpIHNpZGVuYXZUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqXG4gICAqIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZVxuICAgKi9cbiAgQElucHV0KCdpY29uJykgaWNvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBsb2dvPzogc3RyaW5nXG4gICAqXG4gICAqIGxvZ28gaWNvbiBuYW1lIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBJZiBbaWNvbl0gaXMgc2V0LCB0aGVuIHRoaXMgd2lsbCBub3QgYmUgc2hvd24uXG4gICAqL1xuICBASW5wdXQoJ2xvZ28nKSBsb2dvOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBkZWZhdWx0IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHNpZGVuYXZUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgnbmF2aWdhdGlvblJvdXRlJykgbmF2aWdhdGlvblJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGJhY2tncm91bmRVcmw/OiBTYWZlUmVzb3VyY2VVcmxcbiAgICpcbiAgICogaW1hZ2UgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB0b29sYmFyLlxuICAgKiBVUkwgdXNlZCB3aWxsIGJlIHNhbml0aXplZCwgYnV0IGl0IHNob3VsZCBiZSBhbHdheXMgZnJvbSBhIHRydXN0ZWQgc291cmNlIHRvIGF2b2lkIFhTUy5cbiAgICovXG4gIEBJbnB1dCgnYmFja2dyb3VuZFVybCcpXG4gIC8vIFRPRE8gQW5ndWxhciBjb21wbGFpbnMgd2l0aCB3YXJuaW5ncyBpZiB0aGlzIGlzIHR5cGUgW1NhZmVSZXNvdXJjZVVybF0uLiBzbyB3ZSB3aWxsIG1ha2UgaXQgPGFueT4gdW50aWwgaXRzIGZpeGVkLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy8yOTc3XG4gIHNldCBiYWNrZ3JvdW5kVXJsKGJhY2tncm91bmRVcmw6IGFueSkge1xuICAgIGlmIChiYWNrZ3JvdW5kVXJsKSB7XG4gICAgICBsZXQgc2FuaXRpemVkVXJsOiBzdHJpbmcgPSB0aGlzLl9zYW5pdGl6ZS5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCBiYWNrZ3JvdW5kVXJsKTtcbiAgICAgIHRoaXMuX2JhY2tncm91bmRJbWFnZSA9IHRoaXMuX3Nhbml0aXplLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5TVFlMRSwgJ3VybCgnICsgc2FuaXRpemVkVXJsICsgJyknKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJhY2tncm91bmRJbWFnZSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogbmFtZT86IHN0cmluZ1xuICAgKlxuICAgKiBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGFzIHBhcnQgb2YgdGhlIG5hdmlnYXRpb24gZHJhd2VyIHN1YmxhYmVsLlxuICAgKiBpZiBbZW1haWxdIGlzIG5vdCBzZXQsIHRoZW4gW25hbWVdIHdpbGwgYmUgdGhlIHRvZ2dsZSBtZW51IHRleHQuXG4gICAqL1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGVtYWlsPzogc3RyaW5nXG4gICAqXG4gICAqIHN0cmluZyB0byBiZSBkaXNwbGF5ZWQgYXMgcGFydCBvZiB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIgc3VibGFiZWwgaW4gdGhlIFt0b2dnbGVdIG1lbnUgdGV4dC5cbiAgICogaWYgW2VtYWlsXSBhbmQgW25hbWVdIGFyZSBub3Qgc2V0LCB0aGVuIHRoZSB0b2dnbGUgbWVudSBpcyBub3QgcmVuZGVyZWQuXG4gICAqL1xuICBASW5wdXQoJ2VtYWlsJykgZW1haWw6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdXRlciB3YXMgaW5qZWN0ZWQuXG4gICAqL1xuICBnZXQgcm91dGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9yb3V0ZXIgJiYgISF0aGlzLm5hdmlnYXRpb25Sb3V0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIHByaXZhdGUgX2xheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zYW5pdGl6ZTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy5fbGF5b3V0LnNpZGVuYXYub3BlbmVkQ2hhbmdlLnN1YnNjcmliZSgob3BlbmVkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICB0aGlzLl9tZW51VG9nZ2xlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc01lbnVBdmFpbGFibGUpIHtcbiAgICAgIHRoaXMuX21lbnVUb2dnbGVkID0gIXRoaXMuX21lbnVUb2dnbGVkO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU5hdmlnYXRpb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm5hdmlnYXRpb25Sb3V0ZSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IHRvZ2dsZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBvcGVuIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgY2xvc2UgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5cbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTGF5b3V0VG9nZ2xlRGlyZWN0aXZlLCBUZExheW91dENsb3NlRGlyZWN0aXZlLCBUZExheW91dE9wZW5EaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRkTGF5b3V0TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2L2xheW91dC1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgVGRMYXlvdXROYXZMaXN0VG9nZ2xlRGlyZWN0aXZlLCBUZExheW91dE5hdkxpc3RDbG9zZURpcmVjdGl2ZSwgVGRMYXlvdXROYXZMaXN0T3BlbkRpcmVjdGl2ZSxcbn0gZnJvbSAnLi9sYXlvdXQtbmF2LWxpc3QvbGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWNhcmQtb3Zlci9sYXlvdXQtY2FyZC1vdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1tYW5hZ2UtbGlzdC9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZURpcmVjdGl2ZSwgVGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VEaXJlY3RpdmUsIFRkTGF5b3V0TWFuYWdlTGlzdE9wZW5EaXJlY3RpdmUsXG59IGZyb20gJy4vbGF5b3V0LW1hbmFnZS1saXN0L2xheW91dC1tYW5hZ2UtbGlzdC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRkTGF5b3V0Rm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtZm9vdGVyL2xheW91dC1mb290ZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgVGROYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50LCBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlLCBUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlLFxufSBmcm9tICcuL25hdmlnYXRpb24tZHJhd2VyL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX0xBWU9VVFM6IFR5cGU8YW55PltdID0gW1xuICBUZExheW91dENvbXBvbmVudCxcbiAgVGRMYXlvdXRUb2dnbGVEaXJlY3RpdmUsXG4gIFRkTGF5b3V0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0T3BlbkRpcmVjdGl2ZSxcblxuICBUZExheW91dE5hdkNvbXBvbmVudCxcblxuICBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gIFRkTGF5b3V0TmF2TGlzdFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXROYXZMaXN0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TmF2TGlzdE9wZW5EaXJlY3RpdmUsXG5cbiAgVGRMYXlvdXRDYXJkT3ZlckNvbXBvbmVudCxcblxuICBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZURpcmVjdGl2ZSxcbiAgVGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VEaXJlY3RpdmUsXG4gIFRkTGF5b3V0TWFuYWdlTGlzdE9wZW5EaXJlY3RpdmUsXG5cbiAgVGRMYXlvdXRGb290ZXJDb21wb25lbnQsXG5cbiAgVGROYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50LFxuICBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlLFxuICBUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTY3JvbGxEaXNwYXRjaE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9MQVlPVVRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfTEFZT1VUUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRMYXlvdXRNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQVdhLGlCQUFpQjtJQUw5Qjs7Ozs7Ozs7OztRQWtCaUIsU0FBSSxHQUE2QixNQUFNLENBQUM7Ozs7Ozs7Ozs7O1FBWXRDLFdBQU0sR0FBWSxLQUFLLENBQUM7Ozs7Ozs7OztRQVVsQixpQkFBWSxHQUFXLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7UUFZMUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0tBK0JoRTs7Ozs7O0lBekJDLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7S0FDN0I7Ozs7O0lBS00sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOzs7OztJQUtNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDNUI7Ozs7O0lBS00sS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUM3Qjs7O1lBakZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFFckIsa2pCQUFzQzs7YUFDdkM7OztzQkFHRSxTQUFTLFNBQUMsVUFBVTttQkFXcEIsS0FBSyxTQUFD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