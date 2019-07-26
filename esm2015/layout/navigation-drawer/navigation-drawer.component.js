/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                template: "<mat-toolbar\n  [color]=\"color\"\n  [style.background-image]=\"backgroundImage\"\n  [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n  class=\"td-nagivation-drawer-toolbar\"\n>\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div\n      *ngIf=\"icon || logo || sidenavTitle || avatar\"\n      class=\"td-navigation-drawer-toolbar-content\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <img *ngIf=\"avatar && !logo && !icon\" class=\"td-nagivation-drawer-toolbar-avatar\" [attr.src]=\"avatar\" />\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{ sidenavTitle }}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{ name }}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{ email || name }}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-nagivation-drawer-toolbar-avatar{border-radius:50%;height:60px;width:60px;margin:0 12px 12px 0}:host mat-toolbar .td-navigation-drawer-menu-toggle{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-ms-flex:1;flex:1}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
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
    avatar: [{ type: Input, args: ['avatar',] }],
    color: [{ type: Input, args: ['color',] }],
    navigationRoute: [{ type: Input, args: ['navigationRoute',] }],
    backgroundUrl: [{ type: Input, args: ['backgroundUrl',] }],
    name: [{ type: Input, args: ['name',] }],
    email: [{ type: Input, args: ['email',] }]
};
if (false) {
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._closeSubscription;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._menuToggled;
    /** @type {?} */
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
     * color?: string
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
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._layout;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._router;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._sanitize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0LyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi1kcmF3ZXIvbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUdmLFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULGVBQWUsRUFDZixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBOEIsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLNUQsTUFBTSxPQUFPLCtCQUErQjs7O1lBSDNDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOztBQU1ELE1BQU0sT0FBTyxrQ0FBa0M7OztZQUg5QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQzthQUMzQzs7QUFTRCxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7SUF3SHRDLFlBQ3VELE9BQTBCLEVBQzNELE9BQWUsRUFDM0IsU0FBdUI7UUFGc0IsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDM0QsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBekh6QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQTBIbkMsQ0FBQzs7OztJQXZISixJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFTRCxJQUFJLGVBQWU7UUFDakIsT0FB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U0FBQyxrQ0FBa0M7MkJBMkJsRCxLQUFLLFNBQUMsY0FBYzttQkFPcEIsS0FBSyxTQUFDLE1BQU07bUJBUVosS0FBSyxTQUFDLE1BQU07cUJBUVosS0FBSyxTQUFDLFFBQVE7b0JBUWQsS0FBSyxTQUFDLE9BQU87OEJBT2IsS0FBSyxTQUFDLGlCQUFpQjs0QkFRdkIsS0FBSyxTQUFDLGVBQWU7bUJBbUJyQixLQUFLLFNBQUMsTUFBTTtvQkFRWixLQUFLLFNBQUMsT0FBTzs7OztJQTlHZCx5REFBeUM7O0lBQ3pDLG1EQUFzQzs7SUFDdEMsdURBQW9DOztJQU1wQyxrREFBMEc7O0lBRTFHLCtDQUE2Rzs7Ozs7O0lBMkI3RyxtREFBNEM7Ozs7Ozs7SUFPNUMsMkNBQTRCOzs7Ozs7OztJQVE1QiwyQ0FBNEI7Ozs7Ozs7O0lBUTVCLDZDQUFnQzs7Ozs7Ozs7SUFRaEMsNENBQThCOzs7Ozs7O0lBTzlCLHNEQUFrRDs7Ozs7Ozs7SUEyQmxELDJDQUE0Qjs7Ozs7Ozs7SUFRNUIsNENBQThCOztJQVU1Qiw4Q0FBK0U7O0lBQy9FLDhDQUFtQzs7SUFDbkMsZ0RBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIFF1ZXJ5TGlzdCxcbiAgU2VjdXJpdHlDb250ZXh0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2FmZVJlc291cmNlVXJsLCBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZExheW91dENvbXBvbmVudCB9IGZyb20gJy4uL2xheW91dC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyB0ZENvbGxhcHNlQW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLW5hdmlnYXRpb24tZHJhd2VyLW1lbnVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtbmF2aWdhdGlvbi1kcmF3ZXItdG9vbGJhcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW5hdmlnYXRpb24tZHJhd2VyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdmlnYXRpb25EcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Nsb3NlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX21lbnVUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2JhY2tncm91bmRJbWFnZTogU2FmZVN0eWxlO1xuXG4gIGdldCBtZW51VG9nZ2xlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudVRvZ2dsZWQ7XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKFRkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmUpIF9kcmF3ZXJNZW51OiBRdWVyeUxpc3Q8VGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlKSBfdG9vbGJhcjogUXVlcnlMaXN0PFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmU+O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBbVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZV0gaGFzIGNvbnRlbnQuXG4gICAqL1xuICBnZXQgaXNNZW51QXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kcmF3ZXJNZW51ID8gdGhpcy5fZHJhd2VyTWVudS5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgW1RkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmVdIGhhcyBjb250ZW50LlxuICAgKi9cbiAgZ2V0IGlzQ3VzdG9tVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbGJhciA/IHRoaXMuX3Rvb2xiYXIubGVuZ3RoID4gMCA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIGJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSB0b29sYmFyLlxuICAgKi9cbiAgZ2V0IGlzQmFja2dyb3VuZEF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9iYWNrZ3JvdW5kSW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogc2lkZW5hdlRpdGxlPzogc3RyaW5nXG4gICAqIFRpdGxlIHNldCBpbiBzaWRlTmF2LlxuICAgKi9cbiAgQElucHV0KCdzaWRlbmF2VGl0bGUnKSBzaWRlbmF2VGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICovXG4gIEBJbnB1dCgnaWNvbicpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogbG9nbz86IHN0cmluZ1xuICAgKlxuICAgKiBsb2dvIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogSWYgW2ljb25dIGlzIHNldCwgdGhlbiB0aGlzIHdpbGwgbm90IGJlIHNob3duLlxuICAgKi9cbiAgQElucHV0KCdsb2dvJykgbG9nbzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhdmF0YXI/OiBzdHJpbmdcbiAgICpcbiAgICogYXZhdGFyIHVybCB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZVxuICAgKiBJZiBbaWNvbl0gb3IgW2xvZ29dIGFyZSBzZXQsIHRoZW4gdGhpcyB3aWxsIG5vdCBiZSBzaG93bi5cbiAgICovXG4gIEBJbnB1dCgnYXZhdGFyJykgYXZhdGFyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBkZWZhdWx0IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHNpZGVuYXZUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgnbmF2aWdhdGlvblJvdXRlJykgbmF2aWdhdGlvblJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGJhY2tncm91bmRVcmw/OiBTYWZlUmVzb3VyY2VVcmxcbiAgICpcbiAgICogaW1hZ2UgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB0b29sYmFyLlxuICAgKiBVUkwgdXNlZCB3aWxsIGJlIHNhbml0aXplZCwgYnV0IGl0IHNob3VsZCBiZSBhbHdheXMgZnJvbSBhIHRydXN0ZWQgc291cmNlIHRvIGF2b2lkIFhTUy5cbiAgICovXG4gIEBJbnB1dCgnYmFja2dyb3VuZFVybCcpXG4gIC8vIFRPRE8gQW5ndWxhciBjb21wbGFpbnMgd2l0aCB3YXJuaW5ncyBpZiB0aGlzIGlzIHR5cGUgW1NhZmVSZXNvdXJjZVVybF0uLiBzbyB3ZSB3aWxsIG1ha2UgaXQgPGFueT4gdW50aWwgaXRzIGZpeGVkLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy8yOTc3XG4gIHNldCBiYWNrZ3JvdW5kVXJsKGJhY2tncm91bmRVcmw6IGFueSkge1xuICAgIGlmIChiYWNrZ3JvdW5kVXJsKSB7XG4gICAgICBsZXQgc2FuaXRpemVkVXJsOiBzdHJpbmcgPSB0aGlzLl9zYW5pdGl6ZS5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCBiYWNrZ3JvdW5kVXJsKTtcbiAgICAgIHRoaXMuX2JhY2tncm91bmRJbWFnZSA9IHRoaXMuX3Nhbml0aXplLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5TVFlMRSwgJ3VybCgnICsgc2FuaXRpemVkVXJsICsgJyknKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJhY2tncm91bmRJbWFnZSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogbmFtZT86IHN0cmluZ1xuICAgKlxuICAgKiBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGFzIHBhcnQgb2YgdGhlIG5hdmlnYXRpb24gZHJhd2VyIHN1YmxhYmVsLlxuICAgKiBpZiBbZW1haWxdIGlzIG5vdCBzZXQsIHRoZW4gW25hbWVdIHdpbGwgYmUgdGhlIHRvZ2dsZSBtZW51IHRleHQuXG4gICAqL1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGVtYWlsPzogc3RyaW5nXG4gICAqXG4gICAqIHN0cmluZyB0byBiZSBkaXNwbGF5ZWQgYXMgcGFydCBvZiB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIgc3VibGFiZWwgaW4gdGhlIFt0b2dnbGVdIG1lbnUgdGV4dC5cbiAgICogaWYgW2VtYWlsXSBhbmQgW25hbWVdIGFyZSBub3Qgc2V0LCB0aGVuIHRoZSB0b2dnbGUgbWVudSBpcyBub3QgcmVuZGVyZWQuXG4gICAqL1xuICBASW5wdXQoJ2VtYWlsJykgZW1haWw6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdXRlciB3YXMgaW5qZWN0ZWQuXG4gICAqL1xuICBnZXQgcm91dGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9yb3V0ZXIgJiYgISF0aGlzLm5hdmlnYXRpb25Sb3V0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIHByaXZhdGUgX2xheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemU6IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy5fbGF5b3V0LnNpZGVuYXYub3BlbmVkQ2hhbmdlLnN1YnNjcmliZSgob3BlbmVkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICB0aGlzLl9tZW51VG9nZ2xlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc01lbnVBdmFpbGFibGUpIHtcbiAgICAgIHRoaXMuX21lbnVUb2dnbGVkID0gIXRoaXMuX21lbnVUb2dnbGVkO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU5hdmlnYXRpb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm5hdmlnYXRpb25Sb3V0ZSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IHRvZ2dsZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBvcGVuIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgY2xvc2UgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG4iXX0=