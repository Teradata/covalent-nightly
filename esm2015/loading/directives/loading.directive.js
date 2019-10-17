/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { LoadingType, LoadingMode, LoadingStrategy } from '../loading.component';
import { TdLoadingService } from '../services/loading.service';
/**
 * Context class for variable reference
 */
export class TdLoadingContext {
    constructor() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
}
if (false) {
    /** @type {?} */
    TdLoadingContext.prototype.$implicit;
    /** @type {?} */
    TdLoadingContext.prototype.tdLoading;
}
// Constant for generation of the id for the next component
/** @type {?} */
let TD_LOADING_NEXT_ID = 0;
export class TdLoadingDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _templateRef
     * @param {?} _loadingService
     */
    constructor(_viewContainerRef, _templateRef, _loadingService) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._loadingService = _loadingService;
        this._context = new TdLoadingContext();
        /**
         * tdLoadingColor?: "primary" | "accent" | "warn"
         * Sets the theme color of the loading component. Defaults to "primary"
         */
        this.color = 'primary';
    }
    /**
     * tdLoading: string
     * Name reference of the loading mask, used to register/resolve requests to the mask.
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        if (!this._name) {
            if (name) {
                this._name = name;
            }
        }
    }
    /**
     * tdLoadingUntil?: any
     * If its null, undefined or false it will be used to register requests to the mask.
     * Else if its any value that can be resolved as true, it will resolve the mask.
     * [name] is optional when using [until], but can still be used to register/resolve it manually.
     * @param {?} until
     * @return {?}
     */
    set until(until) {
        if (!this._name) {
            this._name = 'td-loading-until-' + TD_LOADING_NEXT_ID++;
        }
        this._context.$implicit = this._context.tdLoading = until;
        if (!until) {
            this._loadingService.register(this._name);
        }
        else {
            this._loadingService.resolveAll(this._name);
        }
    }
    /**
     * tdLoadingType?: LoadingType or ['linear' | 'circular']
     * Sets the type of loading mask depending on value.
     * Defaults to [LoadingType.Circular | 'circular'].
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        switch (type) {
            case LoadingType.Linear:
                this._type = LoadingType.Linear;
                break;
            default:
                this._type = LoadingType.Circular;
                break;
        }
    }
    /**
     * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
     * Sets the mode of loading mask depending on value.
     * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        switch (mode) {
            case LoadingMode.Determinate:
                this._mode = LoadingMode.Determinate;
                break;
            default:
                this._mode = LoadingMode.Indeterminate;
                break;
        }
    }
    /**
     * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
     * Sets the strategy of loading mask depending on value.
     * Defaults to [LoadingMode.Replace | 'replace'].
     * @param {?} stategy
     * @return {?}
     */
    set strategy(stategy) {
        switch (stategy) {
            case LoadingStrategy.Overlay:
                this._strategy = LoadingStrategy.Overlay;
                break;
            default:
                this._strategy = LoadingStrategy.Replace;
                break;
        }
    }
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     * @return {?}
     */
    ngOnInit() {
        this._registerComponent();
    }
    /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    }
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @private
     * @return {?}
     */
    _registerComponent() {
        if (!this._name) {
            throw new Error('Name is needed to register loading directive');
        }
        // Check if `TdLoadingComponent` has been created before trying to add one again.
        // There is a weird edge case when using `[routerLinkActive]` that calls the `ngOnInit` twice in a row
        if (!this._loadingRef) {
            this._loadingRef = this._loadingService.createComponent({
                name: this._name,
                type: this._type,
                mode: this._mode,
                color: this.color,
                strategy: this._strategy,
            }, this._viewContainerRef, this._templateRef, this._context);
        }
    }
}
TdLoadingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLoading]',
            },] }
];
/** @nocollapse */
TdLoadingDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: TdLoadingService }
];
TdLoadingDirective.propDecorators = {
    name: [{ type: Input, args: ['tdLoading',] }],
    until: [{ type: Input, args: ['tdLoadingUntil',] }],
    type: [{ type: Input, args: ['tdLoadingType',] }],
    mode: [{ type: Input, args: ['tdLoadingMode',] }],
    strategy: [{ type: Input, args: ['tdLoadingStrategy',] }],
    color: [{ type: Input, args: ['tdLoadingColor',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._context;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._type;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._strategy;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._name;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._loadingRef;
    /**
     * tdLoadingColor?: "primary" | "accent" | "warn"
     * Sets the theme color of the loading component. Defaults to "primary"
     * @type {?}
     */
    TdLoadingDirective.prototype.color;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._templateRef;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._loadingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImxvYWRpbmcvZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTS9ELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDUyxjQUFTLEdBQVEsU0FBUyxDQUFDO1FBQzNCLGNBQVMsR0FBUSxTQUFTLENBQUM7SUFDcEMsQ0FBQztDQUFBOzs7SUFGQyxxQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7OztJQUloQyxrQkFBa0IsR0FBVyxDQUFDO0FBS2xDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQWlHN0IsWUFDVSxpQkFBbUMsRUFDbkMsWUFBMkMsRUFDM0MsZUFBaUM7UUFGakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxpQkFBWSxHQUFaLFlBQVksQ0FBK0I7UUFDM0Msb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBbkduQyxhQUFRLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzs7Ozs7UUE4Rm5DLFVBQUssR0FBa0MsU0FBUyxDQUFDO0lBTXZFLENBQUM7Ozs7Ozs7SUF6RkosSUFDSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1NB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b0JBZWpCLEtBQUssU0FBQyxnQkFBZ0I7bUJBa0J0QixLQUFLLFNBQUMsZUFBZTttQkFpQnJCLEtBQUssU0FBQyxlQUFlO3VCQWlCckIsS0FBSyxTQUFDLG1CQUFtQjtvQkFnQnpCLEtBQUssU0FBQyxnQkFBZ0I7Ozs7Ozs7SUE5RnZCLHNDQUE0RDs7Ozs7SUFDNUQsbUNBQTJCOzs7OztJQUMzQixtQ0FBMkI7Ozs7O0lBQzNCLHVDQUFtQzs7Ozs7SUFDbkMsbUNBQXNCOzs7OztJQUN0Qix5Q0FBaUM7Ozs7OztJQXlGakMsbUNBQTBFOzs7OztJQUd4RSwrQ0FBMkM7Ozs7O0lBQzNDLDBDQUFtRDs7Ozs7SUFDbkQsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvYWRpbmdUeXBlLCBMb2FkaW5nTW9kZSwgTG9hZGluZ1N0cmF0ZWd5LCBUZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElMb2FkaW5nUmVmIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZy5mYWN0b3J5JztcblxuLyoqXG4gKiBDb250ZXh0IGNsYXNzIGZvciB2YXJpYWJsZSByZWZlcmVuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbnRleHQge1xuICBwdWJsaWMgJGltcGxpY2l0OiBhbnkgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyB0ZExvYWRpbmc6IGFueSA9IHVuZGVmaW5lZDtcbn1cblxuLy8gQ29uc3RhbnQgZm9yIGdlbmVyYXRpb24gb2YgdGhlIGlkIGZvciB0aGUgbmV4dCBjb21wb25lbnRcbmxldCBURF9MT0FESU5HX05FWFRfSUQ6IG51bWJlciA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExvYWRpbmddJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jb250ZXh0OiBUZExvYWRpbmdDb250ZXh0ID0gbmV3IFRkTG9hZGluZ0NvbnRleHQoKTtcbiAgcHJpdmF0ZSBfdHlwZTogTG9hZGluZ1R5cGU7XG4gIHByaXZhdGUgX21vZGU6IExvYWRpbmdNb2RlO1xuICBwcml2YXRlIF9zdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvYWRpbmdSZWY6IElMb2FkaW5nUmVmO1xuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmc6IHN0cmluZ1xuICAgKiBOYW1lIHJlZmVyZW5jZSBvZiB0aGUgbG9hZGluZyBtYXNrLCB1c2VkIHRvIHJlZ2lzdGVyL3Jlc29sdmUgcmVxdWVzdHMgdG8gdGhlIG1hc2suXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZycpXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1VudGlsPzogYW55XG4gICAqIElmIGl0cyBudWxsLCB1bmRlZmluZWQgb3IgZmFsc2UgaXQgd2lsbCBiZSB1c2VkIHRvIHJlZ2lzdGVyIHJlcXVlc3RzIHRvIHRoZSBtYXNrLlxuICAgKiBFbHNlIGlmIGl0cyBhbnkgdmFsdWUgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgYXMgdHJ1ZSwgaXQgd2lsbCByZXNvbHZlIHRoZSBtYXNrLlxuICAgKiBbbmFtZV0gaXMgb3B0aW9uYWwgd2hlbiB1c2luZyBbdW50aWxdLCBidXQgY2FuIHN0aWxsIGJlIHVzZWQgdG8gcmVnaXN0ZXIvcmVzb2x2ZSBpdCBtYW51YWxseS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nVW50aWwnKVxuICBzZXQgdW50aWwodW50aWw6IGFueSkge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgdGhpcy5fbmFtZSA9ICd0ZC1sb2FkaW5nLXVudGlsLScgKyBURF9MT0FESU5HX05FWFRfSUQrKztcbiAgICB9XG4gICAgdGhpcy5fY29udGV4dC4kaW1wbGljaXQgPSB0aGlzLl9jb250ZXh0LnRkTG9hZGluZyA9IHVudGlsO1xuICAgIGlmICghdW50aWwpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuX25hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZXNvbHZlQWxsKHRoaXMuX25hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdUeXBlPzogTG9hZGluZ1R5cGUgb3IgWydsaW5lYXInIHwgJ2NpcmN1bGFyJ11cbiAgICogU2V0cyB0aGUgdHlwZSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ1R5cGUuQ2lyY3VsYXIgfCAnY2lyY3VsYXInXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nVHlwZScpXG4gIHNldCB0eXBlKHR5cGU6IExvYWRpbmdUeXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIExvYWRpbmdUeXBlLkxpbmVhcjpcbiAgICAgICAgdGhpcy5fdHlwZSA9IExvYWRpbmdUeXBlLkxpbmVhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl90eXBlID0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdNb2RlPzogTG9hZGluZ01vZGUgb3IgWydkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZSddXG4gICAqIFNldHMgdGhlIG1vZGUgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGUgfCAnaW5kZXRlcm1pbmF0ZSddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdNb2RlJylcbiAgc2V0IG1vZGUobW9kZTogTG9hZGluZ01vZGUpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU6XG4gICAgICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1N0cmF0ZWd5PzogTG9hZGluZ1N0cmF0ZWd5IG9yIFsncmVwbGFjZScgfCAnb3ZlcmxheSddXG4gICAqIFNldHMgdGhlIHN0cmF0ZWd5IG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nTW9kZS5SZXBsYWNlIHwgJ3JlcGxhY2UnXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nU3RyYXRlZ3knKVxuICBzZXQgc3RyYXRlZ3koc3RhdGVneTogTG9hZGluZ1N0cmF0ZWd5KSB7XG4gICAgc3dpdGNoIChzdGF0ZWd5KSB7XG4gICAgICBjYXNlIExvYWRpbmdTdHJhdGVneS5PdmVybGF5OlxuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IExvYWRpbmdTdHJhdGVneS5PdmVybGF5O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gTG9hZGluZ1N0cmF0ZWd5LlJlcGxhY2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdDb2xvcj86IFwicHJpbWFyeVwiIHwgXCJhY2NlbnRcIiB8IFwid2FyblwiXG4gICAqIFNldHMgdGhlIHRoZW1lIGNvbG9yIG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudC4gRGVmYXVsdHMgdG8gXCJwcmltYXJ5XCJcbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nQ29sb3InKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VGRMb2FkaW5nQ29udGV4dD4sXG4gICAgcHJpdmF0ZSBfbG9hZGluZ1NlcnZpY2U6IFRkTG9hZGluZ1NlcnZpY2UsXG4gICkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNvbXBvbmVudCBpbiB0aGUgRE9NLCBzbyBpdCB3aWxsIGJlIGF2YWlsYWJsZSB3aGVuIGNhbGxpbmcgcmVzb2x2ZS9yZWdpc3Rlci5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyQ29tcG9uZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNvbXBvbmVudCB3aGVuIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZW1vdmVDb21wb25lbnQodGhpcy5fbmFtZSk7XG4gICAgdGhpcy5fbG9hZGluZ1JlZiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIFtUZExvYWRpbmdDb21wb25lbnRdIGFuZCBhdHRhY2hlcyBpdCB0byB0aGlzIGRpcmVjdGl2ZSdzIFtWaWV3Q29udGFpbmVyUmVmXS5cbiAgICogUGFzc2VzIHRoaXMgZGlyZWN0aXZlJ3MgW1RlbXBsYXRlUmVmXSB0byBtb2RpZnkgRE9NIGRlcGVuZGluZyBvbiBsb2FkaW5nIGBzdHJhdGVneWAuXG4gICAqL1xuICBwcml2YXRlIF9yZWdpc3RlckNvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBpcyBuZWVkZWQgdG8gcmVnaXN0ZXIgbG9hZGluZyBkaXJlY3RpdmUnKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgYFRkTG9hZGluZ0NvbXBvbmVudGAgaGFzIGJlZW4gY3JlYXRlZCBiZWZvcmUgdHJ5aW5nIHRvIGFkZCBvbmUgYWdhaW4uXG4gICAgLy8gVGhlcmUgaXMgYSB3ZWlyZCBlZGdlIGNhc2Ugd2hlbiB1c2luZyBgW3JvdXRlckxpbmtBY3RpdmVdYCB0aGF0IGNhbGxzIHRoZSBgbmdPbkluaXRgIHR3aWNlIGluIGEgcm93XG4gICAgaWYgKCF0aGlzLl9sb2FkaW5nUmVmKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nUmVmID0gdGhpcy5fbG9hZGluZ1NlcnZpY2UuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgICAgICB0eXBlOiB0aGlzLl90eXBlLFxuICAgICAgICAgIG1vZGU6IHRoaXMuX21vZGUsXG4gICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICAgICAgc3RyYXRlZ3k6IHRoaXMuX3N0cmF0ZWd5LFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZVJlZixcbiAgICAgICAgdGhpcy5fY29udGV4dCxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=