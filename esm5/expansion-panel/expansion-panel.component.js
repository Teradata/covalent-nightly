/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { tdCollapseAnimation, mixinDisabled, mixinDisableRipple, tdRotateAnimation, } from '@covalent/core/common';
var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdExpansionPanelHeaderDirective, _super);
    function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelHeaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-expansion-panel-header]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelHeaderDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdExpansionPanelHeaderDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelHeaderDirective };
var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdExpansionPanelLabelDirective, _super);
    function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-expansion-panel-label]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelLabelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdExpansionPanelLabelDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelLabelDirective };
var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdExpansionPanelSublabelDirective, _super);
    function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelSublabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-expansion-panel-sublabel]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelSublabelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdExpansionPanelSublabelDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelSublabelDirective };
var TdExpansionPanelSummaryComponent = /** @class */ (function () {
    function TdExpansionPanelSummaryComponent() {
    }
    TdExpansionPanelSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-expansion-summary',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    return TdExpansionPanelSummaryComponent;
}());
export { TdExpansionPanelSummaryComponent };
var TdExpansionPanelBase = /** @class */ (function () {
    function TdExpansionPanelBase() {
    }
    return TdExpansionPanelBase;
}());
export { TdExpansionPanelBase };
/* tslint:disable-next-line */
/** @type {?} */
export var _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
var TdExpansionPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdExpansionPanelComponent, _super);
    function TdExpansionPanelComponent(_renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._expand = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        _this.expanded = new EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        _this.collapsed = new EventEmitter();
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
        return _this;
    }
    Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expand;
        },
        /**
         * expand?: boolean
         * Toggles [TdExpansionPanelComponent] between expand/collapse.
         */
        set: /**
         * expand?: boolean
         * Toggles [TdExpansionPanelComponent] between expand/collapse.
         * @param {?} expand
         * @return {?}
         */
        function (expand) {
            this._setExpand(coerceBooleanProperty(expand));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     */
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.clickEvent = /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     * @return {?}
     */
    function () {
        this._setExpand(!this._expand);
    };
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.toggle = /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    function () {
        return this._setExpand(!this._expand);
    };
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.open = /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    function () {
        return this._setExpand(true);
    };
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.close = /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    function () {
        return this._setExpand(false);
    };
    /** Method executed when the disabled value changes */
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.onDisabledChange = /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    };
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     */
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * @private
     * @param {?} newExpand
     * @return {?}
     */
    TdExpansionPanelComponent.prototype._setExpand = /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * @private
     * @param {?} newExpand
     * @return {?}
     */
    function (newExpand) {
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
    };
    /**
     * @private
     * @return {?}
     */
    TdExpansionPanelComponent.prototype._onExpanded = /**
     * @private
     * @return {?}
     */
    function () {
        this.expanded.emit(undefined);
    };
    /**
     * @private
     * @return {?}
     */
    TdExpansionPanelComponent.prototype._onCollapsed = /**
     * @private
     * @return {?}
     */
    function () {
        this.collapsed.emit(undefined);
    };
    TdExpansionPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-expansion-panel',
                    template: "<div\n  class=\"td-expansion-panel-header\"\n  [class.mat-disabled]=\"disabled\"\n  matRipple\n  [matRippleDisabled]=\"disabled || disableRipple\"\n  [tabIndex]=\"disabled ? -1 : 0\"\n  (keydown.enter)=\"clickEvent()\"\n  (click)=\"clickEvent()\"\n>\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\" [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{ label }}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{ sublabel }}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                    inputs: ['disabled', 'disableRipple'],
                    animations: [tdCollapseAnimation, tdRotateAnimation],
                    styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
                }] }
    ];
    /** @nocollapse */
    TdExpansionPanelComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdExpansionPanelComponent.propDecorators = {
        expansionPanelHeader: [{ type: ContentChild, args: [TdExpansionPanelHeaderDirective, { static: false },] }],
        expansionPanelLabel: [{ type: ContentChild, args: [TdExpansionPanelLabelDirective, { static: false },] }],
        expansionPanelSublabel: [{ type: ContentChild, args: [TdExpansionPanelSublabelDirective, { static: false },] }],
        label: [{ type: Input }],
        sublabel: [{ type: Input }],
        expand: [{ type: Input, args: ['expand',] }],
        expanded: [{ type: Output }],
        collapsed: [{ type: Output }]
    };
    return TdExpansionPanelComponent;
}(_TdExpansionPanelMixinBase));
export { TdExpansionPanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelComponent.prototype._expand;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelHeader;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelLabel;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelSublabel;
    /**
     * label?: string
     * Sets label of [TdExpansionPanelComponent] header.
     * Defaults to 'Click to expand'
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.label;
    /**
     * sublabel?: string
     * Sets sublabel of [TdExpansionPanelComponent] header.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.sublabel;
    /**
     * expanded?: function
     * Event emitted when [TdExpansionPanelComponent] is expanded.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.expanded;
    /**
     * collapsed?: function
     * Event emitted when [TdExpansionPanelComponent] is collapsed.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.collapsed;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLGFBQWEsRUFFYixrQkFBa0IsRUFDbEIsaUJBQWlCLEdBQ2xCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0I7SUFHcUQsMkRBQXVCO0lBQzFFLHlDQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO2VBQzNFLGtCQUFNLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOztnQkFORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztpQkFDbkQ7Ozs7Z0JBckJDLFdBQVc7Z0JBQ1gsZ0JBQWdCOztJQXlCbEIsc0NBQUM7Q0FBQSxBQVBELENBR3FELHVCQUF1QixHQUkzRTtTQUpZLCtCQUErQjtBQU01QztJQUdvRCwwREFBdUI7SUFDekUsd0NBQVksV0FBNkIsRUFBRSxnQkFBa0M7ZUFDM0Usa0JBQU0sV0FBVyxFQUFFLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7O2dCQU5GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2lCQUNsRDs7OztnQkE5QkMsV0FBVztnQkFDWCxnQkFB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QUFNOztJQTJFVCxnQ0FBQztDQUFBLEFBOUhELENBTytDLDBCQUEwQixHQXVIeEU7U0F2SFkseUJBQXlCOzs7Ozs7SUFDcEMsNENBQWlDOztJQUVqQyx5REFDc0Q7O0lBQ3RELHdEQUFxSDs7SUFDckgsMkRBQzBEOzs7Ozs7O0lBTzFELDBDQUF1Qjs7Ozs7O0lBTXZCLDZDQUEwQjs7Ozs7O0lBa0IxQiw2Q0FBa0U7Ozs7OztJQU1sRSw4Q0FBbUU7Ozs7O0lBRXZELDhDQUE0Qjs7Ozs7SUFBRSxnREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7XG4gIHRkQ29sbGFwc2VBbmltYXRpb24sXG4gIElDYW5EaXNhYmxlLFxuICBtaXhpbkRpc2FibGVkLFxuICBJQ2FuRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICB0ZFJvdGF0ZUFuaW1hdGlvbixcbn0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtZXhwYW5zaW9uLXBhbmVsLWxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtZXhwYW5zaW9uLXBhbmVsLXN1YmxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tc3VtbWFyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxTdW1tYXJ5Q29tcG9uZW50IHt9XG5cbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRFeHBhbnNpb25QYW5lbE1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkRXhwYW5zaW9uUGFuZWxCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWV4cGFuc2lvbi1wYW5lbCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb24sIHRkUm90YXRlQW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCBleHRlbmRzIF9UZEV4cGFuc2lvblBhbmVsTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcbiAgcHJpdmF0ZSBfZXhwYW5kOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZChUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgZXhwYW5zaW9uUGFuZWxIZWFkZXI6IFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgZXhwYW5zaW9uUGFuZWxMYWJlbDogVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGV4cGFuc2lvblBhbmVsU3VibGFiZWw6IFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZTtcblxuICAvKipcbiAgICogbGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBsYWJlbCBvZiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaGVhZGVyLlxuICAgKiBEZWZhdWx0cyB0byAnQ2xpY2sgdG8gZXhwYW5kJ1xuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBzdWJsYWJlbCBvZiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaGVhZGVyLlxuICAgKi9cbiAgQElucHV0KCkgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogZXhwYW5kPzogYm9vbGVhblxuICAgKiBUb2dnbGVzIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBiZXR3ZWVuIGV4cGFuZC9jb2xsYXBzZS5cbiAgICovXG4gIEBJbnB1dCgnZXhwYW5kJylcbiAgc2V0IGV4cGFuZChleHBhbmQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZXRFeHBhbmQoY29lcmNlQm9vbGVhblByb3BlcnR5KGV4cGFuZCkpO1xuICB9XG4gIGdldCBleHBhbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBleHBhbmRlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaXMgZXhwYW5kZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogY29sbGFwc2VkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBpcyBjb2xsYXBzZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZXhwYW5zaW9uLXBhbmVsJyk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGlzIGNsaWNrZWQuXG4gICAqL1xuICBjbGlja0V2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldEV4cGFuZCghdGhpcy5fZXhwYW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgZXhwYW5kIHN0YXRlIG9mIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIHRvZ2dsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0RXhwYW5kKCF0aGlzLl9leHBhbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIG9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEV4cGFuZCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdXG4gICAqIHJldHVucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgY2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEV4cGFuZChmYWxzZSk7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHYgJiYgdGhpcy5fZXhwYW5kKSB7XG4gICAgICB0aGlzLl9leHBhbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uQ29sbGFwc2VkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjaGFuZ2UgZXhwYW5kIHN0YXRlIGludGVybmFsbHkgYW5kIGVtaXQgdGhlIFtvbkV4cGFuZGVkXSBldmVudCBpZiAndHJ1ZScgb3IgW29uQ29sbGFwc2VkXVxuICAgKiBldmVudCBpZiAnZmFsc2UnLiAoQmxvY2tlZCBpZiBbZGlzYWJsZWRdIGlzICd0cnVlJylcbiAgICovXG4gIHByaXZhdGUgX3NldEV4cGFuZChuZXdFeHBhbmQ6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZXhwYW5kICE9PSBuZXdFeHBhbmQpIHtcbiAgICAgIHRoaXMuX2V4cGFuZCA9IG5ld0V4cGFuZDtcbiAgICAgIGlmIChuZXdFeHBhbmQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZXhwYW5kZWQnKTtcbiAgICAgICAgdGhpcy5fb25FeHBhbmRlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZXhwYW5kZWQnKTtcbiAgICAgICAgdGhpcy5fb25Db2xsYXBzZWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9vbkV4cGFuZGVkKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kZWQuZW1pdCh1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25Db2xsYXBzZWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh1bmRlZmluZWQpO1xuICB9XG59XG4iXX0=