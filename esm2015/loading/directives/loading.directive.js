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
        if (!this._name && name) {
            this._name = name;
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
        if (type === LoadingType.Linear) {
            this._type = LoadingType.Linear;
        }
        else {
            this._type = LoadingType.Circular;
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
        if (mode === LoadingMode.Determinate) {
            this._mode = LoadingMode.Determinate;
        }
        else {
            this._mode = LoadingMode.Indeterminate;
        }
    }
    /**
     * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
     * Sets the strategy of loading mask depending on value.
     * Defaults to [LoadingMode.Replace | 'replace'].
     * @param {?} strategy
     * @return {?}
     */
    set strategy(strategy) {
        if (strategy === LoadingStrategy.Overlay) {
            this._strategy = LoadingStrategy.Overlay;
        }
        else {
            this._strategy = LoadingStrategy.Replace;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTS9ELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDUyxjQUFTLEdBQVEsU0FBUyxDQUFDO1FBQzNCLGNBQVMsR0FBUSxTQUFTLENBQUM7SUFDcEMsQ0FBQztDQUFBOzs7SUFGQyxxQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7OztJQUloQyxrQkFBa0IsR0FBVyxDQUFDO0FBS2xDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQXNGN0IsWUFDVSxpQkFBbUMsRUFDbkMsWUFBMkMsRUFDM0MsZUFBaUM7UUFGakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxpQkFBWSxHQUFaLFlBQVksQ0FBK0I7UUFDM0Msb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBeEZuQyxhQUFRLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzs7Ozs7UUFtRm5DLFVBQUssR0FBa0MsU0FBUyxDQUFDO0lBTXZFLENBQUM7Ozs7Ozs7SUE5RUosSUFDSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7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QkFBbUI7b0JBYXpCLEtBQUssU0FBQyxnQkFBZ0I7Ozs7Ozs7SUFuRnZCLHNDQUE0RDs7Ozs7SUFDNUQsbUNBQTJCOzs7OztJQUMzQixtQ0FBMkI7Ozs7O0lBQzNCLHVDQUFtQzs7Ozs7SUFDbkMsbUNBQXNCOzs7OztJQUN0Qix5Q0FBaUM7Ozs7OztJQThFakMsbUNBQTBFOzs7OztJQUd4RSwrQ0FBMkM7Ozs7O0lBQzNDLDBDQUFtRDs7Ozs7SUFDbkQsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvYWRpbmdUeXBlLCBMb2FkaW5nTW9kZSwgTG9hZGluZ1N0cmF0ZWd5LCBUZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElMb2FkaW5nUmVmIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZy5mYWN0b3J5JztcblxuLyoqXG4gKiBDb250ZXh0IGNsYXNzIGZvciB2YXJpYWJsZSByZWZlcmVuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbnRleHQge1xuICBwdWJsaWMgJGltcGxpY2l0OiBhbnkgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyB0ZExvYWRpbmc6IGFueSA9IHVuZGVmaW5lZDtcbn1cblxuLy8gQ29uc3RhbnQgZm9yIGdlbmVyYXRpb24gb2YgdGhlIGlkIGZvciB0aGUgbmV4dCBjb21wb25lbnRcbmxldCBURF9MT0FESU5HX05FWFRfSUQ6IG51bWJlciA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExvYWRpbmddJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jb250ZXh0OiBUZExvYWRpbmdDb250ZXh0ID0gbmV3IFRkTG9hZGluZ0NvbnRleHQoKTtcbiAgcHJpdmF0ZSBfdHlwZTogTG9hZGluZ1R5cGU7XG4gIHByaXZhdGUgX21vZGU6IExvYWRpbmdNb2RlO1xuICBwcml2YXRlIF9zdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvYWRpbmdSZWY6IElMb2FkaW5nUmVmO1xuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmc6IHN0cmluZ1xuICAgKiBOYW1lIHJlZmVyZW5jZSBvZiB0aGUgbG9hZGluZyBtYXNrLCB1c2VkIHRvIHJlZ2lzdGVyL3Jlc29sdmUgcmVxdWVzdHMgdG8gdGhlIG1hc2suXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZycpXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5fbmFtZSAmJiBuYW1lKSB7XG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nVW50aWw/OiBhbnlcbiAgICogSWYgaXRzIG51bGwsIHVuZGVmaW5lZCBvciBmYWxzZSBpdCB3aWxsIGJlIHVzZWQgdG8gcmVnaXN0ZXIgcmVxdWVzdHMgdG8gdGhlIG1hc2suXG4gICAqIEVsc2UgaWYgaXRzIGFueSB2YWx1ZSB0aGF0IGNhbiBiZSByZXNvbHZlZCBhcyB0cnVlLCBpdCB3aWxsIHJlc29sdmUgdGhlIG1hc2suXG4gICAqIFtuYW1lXSBpcyBvcHRpb25hbCB3aGVuIHVzaW5nIFt1bnRpbF0sIGJ1dCBjYW4gc3RpbGwgYmUgdXNlZCB0byByZWdpc3Rlci9yZXNvbHZlIGl0IG1hbnVhbGx5LlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdVbnRpbCcpXG4gIHNldCB1bnRpbCh1bnRpbDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICB0aGlzLl9uYW1lID0gJ3RkLWxvYWRpbmctdW50aWwtJyArIFREX0xPQURJTkdfTkVYVF9JRCsrO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuX2NvbnRleHQudGRMb2FkaW5nID0gdW50aWw7XG4gICAgaWYgKCF1bnRpbCkge1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVnaXN0ZXIodGhpcy5fbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlc29sdmVBbGwodGhpcy5fbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1R5cGU/OiBMb2FkaW5nVHlwZSBvciBbJ2xpbmVhcicgfCAnY2lyY3VsYXInXVxuICAgKiBTZXRzIHRoZSB0eXBlIG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nVHlwZS5DaXJjdWxhciB8ICdjaXJjdWxhciddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdUeXBlJylcbiAgc2V0IHR5cGUodHlwZTogTG9hZGluZ1R5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gTG9hZGluZ1R5cGUuTGluZWFyKSB7XG4gICAgICB0aGlzLl90eXBlID0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90eXBlID0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ01vZGU/OiBMb2FkaW5nTW9kZSBvciBbJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJ11cbiAgICogU2V0cyB0aGUgbW9kZSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZSB8ICdpbmRldGVybWluYXRlJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ01vZGUnKVxuICBzZXQgbW9kZShtb2RlOiBMb2FkaW5nTW9kZSkge1xuICAgIGlmIChtb2RlID09PSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSkge1xuICAgICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkRldGVybWluYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nU3RyYXRlZ3k/OiBMb2FkaW5nU3RyYXRlZ3kgb3IgWydyZXBsYWNlJyB8ICdvdmVybGF5J11cbiAgICogU2V0cyB0aGUgc3RyYXRlZ3kgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdNb2RlLlJlcGxhY2UgfCAncmVwbGFjZSddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdTdHJhdGVneScpXG4gIHNldCBzdHJhdGVneShzdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5KSB7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheSkge1xuICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBMb2FkaW5nU3RyYXRlZ3kuUmVwbGFjZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nQ29sb3I/OiBcInByaW1hcnlcIiB8IFwiYWNjZW50XCIgfCBcIndhcm5cIlxuICAgKiBTZXRzIHRoZSB0aGVtZSBjb2xvciBvZiB0aGUgbG9hZGluZyBjb21wb25lbnQuIERlZmF1bHRzIHRvIFwicHJpbWFyeVwiXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ0NvbG9yJykgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFRkTG9hZGluZ0NvbnRleHQ+LFxuICAgIHByaXZhdGUgX2xvYWRpbmdTZXJ2aWNlOiBUZExvYWRpbmdTZXJ2aWNlLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjb21wb25lbnQgaW4gdGhlIERPTSwgc28gaXQgd2lsbCBiZSBhdmFpbGFibGUgd2hlbiBjYWxsaW5nIHJlc29sdmUvcmVnaXN0ZXIuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlckNvbXBvbmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb21wb25lbnQgd2hlbiBkaXJlY3RpdmUgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVtb3ZlQ29tcG9uZW50KHRoaXMuX25hbWUpO1xuICAgIHRoaXMuX2xvYWRpbmdSZWYgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBbVGRMb2FkaW5nQ29tcG9uZW50XSBhbmQgYXR0YWNoZXMgaXQgdG8gdGhpcyBkaXJlY3RpdmUncyBbVmlld0NvbnRhaW5lclJlZl0uXG4gICAqIFBhc3NlcyB0aGlzIGRpcmVjdGl2ZSdzIFtUZW1wbGF0ZVJlZl0gdG8gbW9kaWZ5IERPTSBkZXBlbmRpbmcgb24gbG9hZGluZyBgc3RyYXRlZ3lgLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJDb21wb25lbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgbmVlZGVkIHRvIHJlZ2lzdGVyIGxvYWRpbmcgZGlyZWN0aXZlJyk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGBUZExvYWRpbmdDb21wb25lbnRgIGhhcyBiZWVuIGNyZWF0ZWQgYmVmb3JlIHRyeWluZyB0byBhZGQgb25lIGFnYWluLlxuICAgIC8vIFRoZXJlIGlzIGEgd2VpcmQgZWRnZSBjYXNlIHdoZW4gdXNpbmcgYFtyb3V0ZXJMaW5rQWN0aXZlXWAgdGhhdCBjYWxscyB0aGUgYG5nT25Jbml0YCB0d2ljZSBpbiBhIHJvd1xuICAgIGlmICghdGhpcy5fbG9hZGluZ1JlZikge1xuICAgICAgdGhpcy5fbG9hZGluZ1JlZiA9IHRoaXMuX2xvYWRpbmdTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICAgICAgdHlwZTogdGhpcy5fdHlwZSxcbiAgICAgICAgICBtb2RlOiB0aGlzLl9tb2RlLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICAgIHN0cmF0ZWd5OiB0aGlzLl9zdHJhdGVneSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVSZWYsXG4gICAgICAgIHRoaXMuX2NvbnRleHQsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19