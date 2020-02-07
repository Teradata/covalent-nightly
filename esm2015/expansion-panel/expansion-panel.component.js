/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { tdCollapseAnimation, mixinDisabled, mixinDisableRipple, tdRotateAnimation, } from '@covalent/core/common';
export class TdExpansionPanelHeaderDirective extends TemplatePortalDirective {
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
export class TdExpansionPanelLabelDirective extends TemplatePortalDirective {
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
export class TdExpansionPanelSublabelDirective extends TemplatePortalDirective {
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
export class TdExpansionPanelSummaryComponent {
}
TdExpansionPanelSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-summary',
                template: '<ng-content></ng-content>'
            }] }
];
export class TdExpansionPanelBase {
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
export class TdExpansionPanelComponent extends _TdExpansionPanelMixinBase {
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
     * @private
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
     * @private
     * @return {?}
     */
    _onExpanded() {
        this.expanded.emit();
    }
    /**
     * @private
     * @return {?}
     */
    _onCollapsed() {
        this.collapsed.emit();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsYUFBYSxFQUViLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsTUFBTSx1QkFBdUIsQ0FBQztBQUsvQixNQUFNLE9BQU8sK0JBQWdDLFNBQVEsdUJBQXVCOzs7OztJQUMxRSxZQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO1FBQzNFLEtBQUssQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QzthQUNuRDs7OztZQXJCQyxXQUFXO1lBQ1gsZ0JBQWdCOztBQThCbEIsTUFBTSxPQUFPLDhCQUErQixTQUFRLHVCQUF1Qjs7Ozs7SUFDekUsWUFBWSxXQUE2QixFQUFFLGdCQUFrQztRQUMzRSxLQUFLLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7YUFDbEQ7Ozs7WUE5QkMsV0FBVztZQUNYLGdCQUFnQjs7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QUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUE3SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBRTlCLG16Q0FBK0M7Z0JBQy9DLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDOzthQUNyRDs7OztZQTNEQyxTQUFTO1lBRFQsVUFBVTs7O21DQWdFVCxZQUFZLFNBQUMsK0JBQStCO2tDQUU1QyxZQUFZLFNBQUMsOEJBQThCO3FDQUMzQyxZQUFZLFNBQUMsaUNBQWlDO29CQVE5QyxLQUFLO3VCQU1MLEtBQUs7cUJBTUwsS0FBSyxTQUFDLFFBQVE7dUJBWWQsTUFBTTt3QkFNTixNQUFNOzs7Ozs7O0lBM0NQLDRDQUFpQzs7SUFFakMseURBQ3NEOztJQUN0RCx3REFBa0c7O0lBQ2xHLDJEQUMwRDs7Ozs7OztJQU8xRCwwQ0FBdUI7Ozs7OztJQU12Qiw2Q0FBMEI7Ozs7OztJQWtCMUIsNkNBQWtFOzs7Ozs7SUFNbEUsOENBQW1FOzs7OztJQUV2RCw4Q0FBNEI7Ozs7O0lBQUUsZ0RBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQge1xuICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICBJQ2FuRGlzYWJsZSxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgSUNhbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgdGRSb3RhdGVBbmltYXRpb24sXG59IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1sYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1zdWJsYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZXhwYW5zaW9uLXN1bW1hcnknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCB7fVxuXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbEJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRXhwYW5zaW9uUGFuZWxNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChUZEV4cGFuc2lvblBhbmVsQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tcGFuZWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIGFuaW1hdGlvbnM6IFt0ZENvbGxhcHNlQW5pbWF0aW9uLCB0ZFJvdGF0ZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBfVGRFeHBhbnNpb25QYW5lbE1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIHByaXZhdGUgX2V4cGFuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSlcbiAgZXhwYW5zaW9uUGFuZWxIZWFkZXI6IFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlKSBleHBhbnNpb25QYW5lbExhYmVsOiBUZEV4cGFuc2lvblBhbmVsTGFiZWxEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlKVxuICBleHBhbnNpb25QYW5lbFN1YmxhYmVsOiBUZEV4cGFuc2lvblBhbmVsU3VibGFiZWxEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIGxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgbGFiZWwgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGhlYWRlci5cbiAgICogRGVmYXVsdHMgdG8gJ0NsaWNrIHRvIGV4cGFuZCdcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN1YmxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgc3VibGFiZWwgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGV4cGFuZD86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gYmV0d2VlbiBleHBhbmQvY29sbGFwc2UuXG4gICAqL1xuICBASW5wdXQoJ2V4cGFuZCcpXG4gIHNldCBleHBhbmQoZXhwYW5kOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2V0RXhwYW5kKGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShleHBhbmQpKTtcbiAgfVxuICBnZXQgZXhwYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmQ7XG4gIH1cblxuICAvKipcbiAgICogZXhwYW5kZWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGlzIGV4cGFuZGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGV4cGFuZGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGNvbGxhcHNlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaXMgY29sbGFwc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuc2lvbi1wYW5lbCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBpcyBjbGlja2VkLlxuICAgKi9cbiAgY2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRFeHBhbmQoIXRoaXMuX2V4cGFuZCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGV4cGFuZCBzdGF0ZSBvZiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICB0b2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEV4cGFuZCghdGhpcy5fZXhwYW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBvcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQoZmFsc2UpO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2ICYmIHRoaXMuX2V4cGFuZCkge1xuICAgICAgdGhpcy5fZXhwYW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNvbGxhcHNlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2hhbmdlIGV4cGFuZCBzdGF0ZSBpbnRlcm5hbGx5IGFuZCBlbWl0IHRoZSBbb25FeHBhbmRlZF0gZXZlbnQgaWYgJ3RydWUnIG9yIFtvbkNvbGxhcHNlZF1cbiAgICogZXZlbnQgaWYgJ2ZhbHNlJy4gKEJsb2NrZWQgaWYgW2Rpc2FibGVkXSBpcyAndHJ1ZScpXG4gICAqL1xuICBwcml2YXRlIF9zZXRFeHBhbmQobmV3RXhwYW5kOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4cGFuZCAhPT0gbmV3RXhwYW5kKSB7XG4gICAgICB0aGlzLl9leHBhbmQgPSBuZXdFeHBhbmQ7XG4gICAgICBpZiAobmV3RXhwYW5kKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuZGVkJyk7XG4gICAgICAgIHRoaXMuX29uRXhwYW5kZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuZGVkJyk7XG4gICAgICAgIHRoaXMuX29uQ29sbGFwc2VkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25FeHBhbmRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ29sbGFwc2VkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2VkLmVtaXQoKTtcbiAgfVxufVxuIl19