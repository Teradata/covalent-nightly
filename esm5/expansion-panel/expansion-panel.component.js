/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { tdCollapseAnimation, mixinDisabled, mixinDisableRipple, tdRotateAnimation, } from '@covalent/core/common';
var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelHeaderDirective, _super);
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
    __extends(TdExpansionPanelLabelDirective, _super);
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
    __extends(TdExpansionPanelSublabelDirective, _super);
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
    __extends(TdExpansionPanelComponent, _super);
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
        this.expanded.emit();
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
        this.collapsed.emit();
    };
    TdExpansionPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-expansion-panel',
                    template: "<div\n  class=\"td-expansion-panel-header\"\n  [class.mat-disabled]=\"disabled\"\n  matRipple\n  [matRippleDisabled]=\"disabled || disableRipple\"\n  [tabIndex]=\"disabled ? -1 : 0\"\n  (keydown.enter)=\"clickEvent()\"\n  (click)=\"clickEvent()\"\n>\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\" [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{ label }}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{ sublabel }}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                    inputs: ['disabled', 'disableRipple'],
                    animations: [tdCollapseAnimation, tdRotateAnimation],
                    styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
                }] }
    ];
    /** @nocollapse */
    TdExpansionPanelComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLGFBQWEsRUFFYixrQkFBa0IsRUFDbEIsaUJBQWlCLEdBQ2xCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0I7SUFHcUQsbURBQXVCO0lBQzFFLHlDQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO2VBQzNFLGtCQUFNLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOztnQkFORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztpQkFDbkQ7Ozs7Z0JBckJDLFdBQVc7Z0JBQ1gsZ0JBQWdCOztJQXlCbEIsc0NBQUM7Q0FBQSxBQVBELENBR3FELHVCQUF1QixHQUkzRTtTQUpZLCtCQUErQjtBQU01QztJQUdvRCxrREFBdUI7SUFDekUsd0NBQVksV0FBNkIsRUFBRSxnQkFBa0M7ZUFDM0Usa0JBQU0sV0FBVyxFQUFFLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7O2dCQU5GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2lCQUNsRDs7OztnQkE5QkMsV0FBVztnQkFDWCxnQkFB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Q2xHLDJEQUMwRDs7Ozs7OztJQU8xRCwwQ0FBdUI7Ozs7OztJQU12Qiw2Q0FBMEI7Ozs7OztJQWtCMUIsNkNBQWtFOzs7Ozs7SUFNbEUsOENBQW1FOzs7OztJQUV2RCw4Q0FBNEI7Ozs7O0lBQUUsZ0RBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQge1xuICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICBJQ2FuRGlzYWJsZSxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgSUNhbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgdGRSb3RhdGVBbmltYXRpb24sXG59IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1sYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1zdWJsYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZXhwYW5zaW9uLXN1bW1hcnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCB7fVxuXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRXhwYW5zaW9uUGFuZWxNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChUZEV4cGFuc2lvblBhbmVsQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tcGFuZWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIGFuaW1hdGlvbnM6IFt0ZENvbGxhcHNlQW5pbWF0aW9uLCB0ZFJvdGF0ZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBfVGRFeHBhbnNpb25QYW5lbE1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIHByaXZhdGUgX2V4cGFuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSlcbiAgZXhwYW5zaW9uUGFuZWxIZWFkZXI6IFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlKSBleHBhbnNpb25QYW5lbExhYmVsOiBUZEV4cGFuc2lvblBhbmVsTGFiZWxEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlKVxuICBleHBhbnNpb25QYW5lbFN1YmxhYmVsOiBUZEV4cGFuc2lvblBhbmVsU3VibGFiZWxEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIGxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgbGFiZWwgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGhlYWRlci5cbiAgICogRGVmYXVsdHMgdG8gJ0NsaWNrIHRvIGV4cGFuZCdcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN1YmxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgc3VibGFiZWwgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGV4cGFuZD86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gYmV0d2VlbiBleHBhbmQvY29sbGFwc2UuXG4gICAqL1xuICBASW5wdXQoJ2V4cGFuZCcpXG4gIHNldCBleHBhbmQoZXhwYW5kOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2V0RXhwYW5kKGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShleHBhbmQpKTtcbiAgfVxuICBnZXQgZXhwYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmQ7XG4gIH1cblxuICAvKipcbiAgICogZXhwYW5kZWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGlzIGV4cGFuZGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGV4cGFuZGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGNvbGxhcHNlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaXMgY29sbGFwc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuc2lvbi1wYW5lbCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBpcyBjbGlja2VkLlxuICAgKi9cbiAgY2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRFeHBhbmQoIXRoaXMuX2V4cGFuZCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGV4cGFuZCBzdGF0ZSBvZiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICB0b2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEV4cGFuZCghdGhpcy5fZXhwYW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBvcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQoZmFsc2UpO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2ICYmIHRoaXMuX2V4cGFuZCkge1xuICAgICAgdGhpcy5fZXhwYW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNvbGxhcHNlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2hhbmdlIGV4cGFuZCBzdGF0ZSBpbnRlcm5hbGx5IGFuZCBlbWl0IHRoZSBbb25FeHBhbmRlZF0gZXZlbnQgaWYgJ3RydWUnIG9yIFtvbkNvbGxhcHNlZF1cbiAgICogZXZlbnQgaWYgJ2ZhbHNlJy4gKEJsb2NrZWQgaWYgW2Rpc2FibGVkXSBpcyAndHJ1ZScpXG4gICAqL1xuICBwcml2YXRlIF9zZXRFeHBhbmQobmV3RXhwYW5kOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4cGFuZCAhPT0gbmV3RXhwYW5kKSB7XG4gICAgICB0aGlzLl9leHBhbmQgPSBuZXdFeHBhbmQ7XG4gICAgICBpZiAobmV3RXhwYW5kKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuZGVkJyk7XG4gICAgICAgIHRoaXMuX29uRXhwYW5kZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuZGVkJyk7XG4gICAgICAgIHRoaXMuX29uQ29sbGFwc2VkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25FeHBhbmRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ29sbGFwc2VkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2VkLmVtaXQoKTtcbiAgfVxufVxuIl19