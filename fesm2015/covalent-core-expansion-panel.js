import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2, EventEmitter, NgModule } from '@angular/core';
import { TemplatePortalDirective, PortalModule } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { tdCollapseAnimation, mixinDisabled, mixinDisableRipple, tdRotateAnimation } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdExpansionPanelHeaderDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-header]ng-template',
            },] }
];
/** @nocollapse */
TdExpansionPanelHeaderDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdExpansionPanelLabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-label]ng-template',
            },] }
];
/** @nocollapse */
TdExpansionPanelLabelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdExpansionPanelSublabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelSublabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-sublabel]ng-template',
            },] }
];
/** @nocollapse */
TdExpansionPanelSublabelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdExpansionPanelSummaryComponent {
}
TdExpansionPanelSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-summary',
                template: '<ng-content></ng-content>'
            }] }
];
class TdExpansionPanelBase {
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
class TdExpansionPanelComponent extends _TdExpansionPanelMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        super();
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._expand = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        this.expanded = new EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        this.collapsed = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel');
    }
    /**
     * expand?: boolean
     * Toggles [TdExpansionPanelComponent] between expand/collapse.
     * @param {?} expand
     * @return {?}
     */
    set expand(expand) {
        this._setExpand(coerceBooleanProperty(expand));
    }
    /**
     * @return {?}
     */
    get expand() {
        return this._expand;
    }
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     * @return {?}
     */
    clickEvent() {
        this._setExpand(!this._expand);
    }
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    toggle() {
        return this._setExpand(!this._expand);
    }
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    open() {
        return this._setExpand(true);
    }
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    close() {
        return this._setExpand(false);
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    }
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * @param {?} newExpand
     * @return {?}
     */
    _setExpand(newExpand) {
        if (this.disabled) {
            return false;
        }
        if (this._expand !== newExpand) {
            this._expand = newExpand;
            if (newExpand) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
                this._onExpanded();
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
                this._onCollapsed();
            }
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    _onExpanded() {
        this.expanded.emit(undefined);
    }
    /**
     * @return {?}
     */
    _onCollapsed() {
        this.collapsed.emit(undefined);
    }
}
TdExpansionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel',
                template: "<div class=\"td-expansion-panel-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled? -1 : 0\"\n      (keydown.enter)=\"clickEvent()\"\n      (click)=\"clickEvent()\">\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\"\n        [class.mat-disabled]=\"disabled\"\n        *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\"\n      [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\"\n      [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                inputs: ['disabled', 'disableRipple'],
                animations: [
                    tdCollapseAnimation,
                    tdRotateAnimation,
                ],
                styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
            }] }
];
/** @nocollapse */
TdExpansionPanelComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
TdExpansionPanelComponent.propDecorators = {
    expansionPanelHeader: [{ type: ContentChild, args: [TdExpansionPanelHeaderDirective,] }],
    expansionPanelLabel: [{ type: ContentChild, args: [TdExpansionPanelLabelDirective,] }],
    expansionPanelSublabel: [{ type: ContentChild, args: [TdExpansionPanelSublabelDirective,] }],
    label: [{ type: Input }],
    sublabel: [{ type: Input }],
    expand: [{ type: Input, args: ['expand',] }],
    expanded: [{ type: Output }],
    collapsed: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdExpansionPanelGroupComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
}
TdExpansionPanelGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel-group',
                template: "<ng-content></ng-content>",
                styles: [""]
            }] }
];
/** @nocollapse */
TdExpansionPanelGroupComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
class CovalentExpansionPanelModule {
}
CovalentExpansionPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatRippleModule,
                    MatIconModule,
                    PortalModule,
                ],
                declarations: [
                    TD_EXPANSION_PANEL,
                ],
                exports: [
                    TD_EXPANSION_PANEL,
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

export { CovalentExpansionPanelModule, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective, TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent, TdExpansionPanelBase, _TdExpansionPanelMixinBase, TdExpansionPanelComponent, TdExpansionPanelGroupComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1leHBhbnNpb24tcGFuZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGQsXG4gICAgICAgICBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7XG4gIHRkQ29sbGFwc2VBbmltYXRpb24sXG4gIElDYW5EaXNhYmxlLFxuICBtaXhpbkRpc2FibGVkLFxuICBJQ2FuRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICB0ZFJvdGF0ZUFuaW1hdGlvbixcbn0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtZXhwYW5zaW9uLXBhbmVsLWxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtZXhwYW5zaW9uLXBhbmVsLXN1YmxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tc3VtbWFyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxTdW1tYXJ5Q29tcG9uZW50IHt9XG5cbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRFeHBhbnNpb25QYW5lbE1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkRXhwYW5zaW9uUGFuZWxCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWV4cGFuc2lvbi1wYW5lbCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICAgIHRkUm90YXRlQW5pbWF0aW9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IGV4dGVuZHMgX1RkRXhwYW5zaW9uUGFuZWxNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUge1xuXG4gIHByaXZhdGUgX2V4cGFuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSkgZXhwYW5zaW9uUGFuZWxIZWFkZXI6IFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlKSBleHBhbnNpb25QYW5lbExhYmVsOiBUZEV4cGFuc2lvblBhbmVsTGFiZWxEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlKSBleHBhbnNpb25QYW5lbFN1YmxhYmVsOiBUZEV4cGFuc2lvblBhbmVsU3VibGFiZWxEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIGxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgbGFiZWwgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGhlYWRlci5cbiAgICogRGVmYXVsdHMgdG8gJ0NsaWNrIHRvIGV4cGFuZCdcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN1YmxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgc3VibGFiZWwgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGV4cGFuZD86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gYmV0d2VlbiBleHBhbmQvY29sbGFwc2UuXG4gICAqL1xuICBASW5wdXQoJ2V4cGFuZCcpXG4gIHNldCBleHBhbmQoZXhwYW5kOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2V0RXhwYW5kKGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShleHBhbmQpKTtcbiAgfVxuICBnZXQgZXhwYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmQ7XG4gIH1cblxuICAvKipcbiAgICogZXhwYW5kZWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGlzIGV4cGFuZGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGV4cGFuZGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGNvbGxhcHNlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaXMgY29sbGFwc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuc2lvbi1wYW5lbCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBpcyBjbGlja2VkLlxuICAgKi9cbiAgY2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRFeHBhbmQoIXRoaXMuX2V4cGFuZCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGV4cGFuZCBzdGF0ZSBvZiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICB0b2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEV4cGFuZCghdGhpcy5fZXhwYW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBvcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQoZmFsc2UpO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2ICYmIHRoaXMuX2V4cGFuZCkge1xuICAgICAgdGhpcy5fZXhwYW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNvbGxhcHNlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2hhbmdlIGV4cGFuZCBzdGF0ZSBpbnRlcm5hbGx5IGFuZCBlbWl0IHRoZSBbb25FeHBhbmRlZF0gZXZlbnQgaWYgJ3RydWUnIG9yIFtvbkNvbGxhcHNlZF1cbiAgICogZXZlbnQgaWYgJ2ZhbHNlJy4gKEJsb2NrZWQgaWYgW2Rpc2FibGVkXSBpcyAndHJ1ZScpXG4gICAqL1xuICBwcml2YXRlIF9zZXRFeHBhbmQobmV3RXhwYW5kOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4cGFuZCAhPT0gbmV3RXhwYW5kKSB7XG4gICAgICB0aGlzLl9leHBhbmQgPSBuZXdFeHBhbmQ7XG4gICAgICBpZiAobmV3RXhwYW5kKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuZGVkJyk7XG4gICAgICAgIHRoaXMuX29uRXhwYW5kZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuZGVkJyk7XG4gICAgICAgIHRoaXMuX29uQ29sbGFwc2VkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25FeHBhbmRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ29sbGFwc2VkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2VkLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZXhwYW5zaW9uLXBhbmVsLWdyb3VwJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEdyb3VwQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZXhwYW5zaW9uLXBhbmVsLWdyb3VwJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsIFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmUsIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSxcbiAgICAgICAgIFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSwgVGRFeHBhbnNpb25QYW5lbFN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRFeHBhbnNpb25QYW5lbEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50JztcblxuY29uc3QgVERfRVhQQU5TSU9OX1BBTkVMOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRFeHBhbnNpb25QYW5lbEdyb3VwQ29tcG9uZW50LFxuICBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50LFxuICBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlLFxuICBUZEV4cGFuc2lvblBhbmVsTGFiZWxEaXJlY3RpdmUsXG4gIFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSxcbiAgVGRFeHBhbnNpb25QYW5lbFN1bW1hcnlDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfRVhQQU5TSU9OX1BBTkVMLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfRVhQQU5TSU9OX1BBTkVMLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEV4cGFuc2lvblBh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