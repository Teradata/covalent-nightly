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
var /**
 * Context class for variable reference
 */
TdLoadingContext = /** @class */ (function () {
    function TdLoadingContext() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
    return TdLoadingContext;
}());
/**
 * Context class for variable reference
 */
export { TdLoadingContext };
if (false) {
    /** @type {?} */
    TdLoadingContext.prototype.$implicit;
    /** @type {?} */
    TdLoadingContext.prototype.tdLoading;
}
// Constant for generation of the id for the next component
/** @type {?} */
var TD_LOADING_NEXT_ID = 0;
var TdLoadingDirective = /** @class */ (function () {
    function TdLoadingDirective(_viewContainerRef, _templateRef, _loadingService) {
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
    Object.defineProperty(TdLoadingDirective.prototype, "name", {
        /**
         * tdLoading: string
         * Name reference of the loading mask, used to register/resolve requests to the mask.
         */
        set: /**
         * tdLoading: string
         * Name reference of the loading mask, used to register/resolve requests to the mask.
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (!this._name) {
                if (name) {
                    this._name = name;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "until", {
        /**
         * tdLoadingUntil?: any
         * If its null, undefined or false it will be used to register requests to the mask.
         * Else if its any value that can be resolved as true, it will resolve the mask.
         * [name] is optional when using [until], but can still be used to register/resolve it manually.
         */
        set: /**
         * tdLoadingUntil?: any
         * If its null, undefined or false it will be used to register requests to the mask.
         * Else if its any value that can be resolved as true, it will resolve the mask.
         * [name] is optional when using [until], but can still be used to register/resolve it manually.
         * @param {?} until
         * @return {?}
         */
        function (until) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "type", {
        /**
         * tdLoadingType?: LoadingType or ['linear' | 'circular']
         * Sets the type of loading mask depending on value.
         * Defaults to [LoadingType.Circular | 'circular'].
         */
        set: /**
         * tdLoadingType?: LoadingType or ['linear' | 'circular']
         * Sets the type of loading mask depending on value.
         * Defaults to [LoadingType.Circular | 'circular'].
         * @param {?} type
         * @return {?}
         */
        function (type) {
            switch (type) {
                case LoadingType.Linear:
                    this._type = LoadingType.Linear;
                    break;
                default:
                    this._type = LoadingType.Circular;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "mode", {
        /**
         * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
         * Sets the mode of loading mask depending on value.
         * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
         */
        set: /**
         * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
         * Sets the mode of loading mask depending on value.
         * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            switch (mode) {
                case LoadingMode.Determinate:
                    this._mode = LoadingMode.Determinate;
                    break;
                default:
                    this._mode = LoadingMode.Indeterminate;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "strategy", {
        /**
         * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
         * Sets the strategy of loading mask depending on value.
         * Defaults to [LoadingMode.Replace | 'replace'].
         */
        set: /**
         * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
         * Sets the strategy of loading mask depending on value.
         * Defaults to [LoadingMode.Replace | 'replace'].
         * @param {?} stategy
         * @return {?}
         */
        function (stategy) {
            switch (stategy) {
                case LoadingStrategy.Overlay:
                    this._strategy = LoadingStrategy.Overlay;
                    break;
                default:
                    this._strategy = LoadingStrategy.Replace;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     */
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     * @return {?}
     */
    TdLoadingDirective.prototype.ngOnInit = /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     * @return {?}
     */
    function () {
        this._registerComponent();
    };
    /**
     * Remove component when directive is destroyed.
     */
    /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    TdLoadingDirective.prototype.ngOnDestroy = /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    function () {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    };
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     */
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @private
     * @return {?}
     */
    TdLoadingDirective.prototype._registerComponent = /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @private
     * @return {?}
     */
    function () {
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
    };
    TdLoadingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLoading]',
                },] }
    ];
    /** @nocollapse */
    TdLoadingDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: TdLoadingService }
    ]; };
    TdLoadingDirective.propDecorators = {
        name: [{ type: Input, args: ['tdLoading',] }],
        until: [{ type: Input, args: ['tdLoadingUntil',] }],
        type: [{ type: Input, args: ['tdLoadingType',] }],
        mode: [{ type: Input, args: ['tdLoadingMode',] }],
        strategy: [{ type: Input, args: ['tdLoadingStrategy',] }],
        color: [{ type: Input, args: ['tdLoadingColor',] }]
    };
    return TdLoadingDirective;
}());
export { TdLoadingDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTS9EOzs7O0lBQUE7UUFDUyxjQUFTLEdBQVEsU0FBUyxDQUFDO1FBQzNCLGNBQVMsR0FBUSxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7Ozs7SUFGQyxxQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7OztJQUloQyxrQkFBa0IsR0FBVyxDQUFDO0FBRWxDO0lBb0dFLDRCQUNVLGlCQUFtQyxFQUNuQyxZQUEyQyxFQUMzQyxlQUFpQztRQUZqQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUErQjtRQUMzQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFuR25DLGFBQVEsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDOzs7OztRQThGbkMsVUFBSyxHQUFrQyxTQUFTLENBQUM7SUFNdkUsQ0FBQztJQXpGSixzQkFDSSxvQ0FBSTtRQUxSOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1MsSUFBWTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUks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ekIsRUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBakpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0JBbkJRLGdCQUFnQjtnQkFBRSxXQUFXO2dCQUc3QixnQkFBZ0I7Ozt1QkE2QnRCLEtBQUssU0FBQyxXQUFXO3dCQWVqQixLQUFLLFNBQUMsZ0JBQWdCO3VCQWtCdEIsS0FBSyxTQUFDLGVBQWU7dUJBaUJyQixLQUFLLFNBQUMsZUFBZTsyQkFpQnJCLEtBQUssU0FBQyxtQkFBbUI7d0JBZ0J6QixLQUFLLFNBQUMsZ0JBQWdCOztJQWdEekIseUJBQUM7Q0FBQSxBQWxKRCxJQWtKQztTQS9JWSxrQkFBa0I7Ozs7OztJQUM3QixzQ0FBNEQ7Ozs7O0lBQzVELG1DQUEyQjs7Ozs7SUFDM0IsbUNBQTJCOzs7OztJQUMzQix1Q0FBbUM7Ozs7O0lBQ25DLG1DQUFzQjs7Ozs7SUFDdEIseUNBQWlDOzs7Ozs7SUF5RmpDLG1DQUEwRTs7Ozs7SUFHeEUsK0NBQTJDOzs7OztJQUMzQywwQ0FBbUQ7Ozs7O0lBQ25ELDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2FkaW5nVHlwZSwgTG9hZGluZ01vZGUsIExvYWRpbmdTdHJhdGVneSwgVGRMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJTG9hZGluZ1JlZiB9IGZyb20gJy4uL3NlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeSc7XG5cbi8qKlxuICogQ29udGV4dCBjbGFzcyBmb3IgdmFyaWFibGUgcmVmZXJlbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb250ZXh0IHtcbiAgcHVibGljICRpbXBsaWNpdDogYW55ID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgdGRMb2FkaW5nOiBhbnkgPSB1bmRlZmluZWQ7XG59XG5cbi8vIENvbnN0YW50IGZvciBnZW5lcmF0aW9uIG9mIHRoZSBpZCBmb3IgdGhlIG5leHQgY29tcG9uZW50XG5sZXQgVERfTE9BRElOR19ORVhUX0lEOiBudW1iZXIgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMb2FkaW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY29udGV4dDogVGRMb2FkaW5nQ29udGV4dCA9IG5ldyBUZExvYWRpbmdDb250ZXh0KCk7XG4gIHByaXZhdGUgX3R5cGU6IExvYWRpbmdUeXBlO1xuICBwcml2YXRlIF9tb2RlOiBMb2FkaW5nTW9kZTtcbiAgcHJpdmF0ZSBfc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9sb2FkaW5nUmVmOiBJTG9hZGluZ1JlZjtcblxuICAvKipcbiAgICogdGRMb2FkaW5nOiBzdHJpbmdcbiAgICogTmFtZSByZWZlcmVuY2Ugb2YgdGhlIGxvYWRpbmcgbWFzaywgdXNlZCB0byByZWdpc3Rlci9yZXNvbHZlIHJlcXVlc3RzIHRvIHRoZSBtYXNrLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmcnKVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdVbnRpbD86IGFueVxuICAgKiBJZiBpdHMgbnVsbCwgdW5kZWZpbmVkIG9yIGZhbHNlIGl0IHdpbGwgYmUgdXNlZCB0byByZWdpc3RlciByZXF1ZXN0cyB0byB0aGUgbWFzay5cbiAgICogRWxzZSBpZiBpdHMgYW55IHZhbHVlIHRoYXQgY2FuIGJlIHJlc29sdmVkIGFzIHRydWUsIGl0IHdpbGwgcmVzb2x2ZSB0aGUgbWFzay5cbiAgICogW25hbWVdIGlzIG9wdGlvbmFsIHdoZW4gdXNpbmcgW3VudGlsXSwgYnV0IGNhbiBzdGlsbCBiZSB1c2VkIHRvIHJlZ2lzdGVyL3Jlc29sdmUgaXQgbWFudWFsbHkuXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1VudGlsJylcbiAgc2V0IHVudGlsKHVudGlsOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSAndGQtbG9hZGluZy11bnRpbC0nICsgVERfTE9BRElOR19ORVhUX0lEKys7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRleHQuJGltcGxpY2l0ID0gdGhpcy5fY29udGV4dC50ZExvYWRpbmcgPSB1bnRpbDtcbiAgICBpZiAoIXVudGlsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZWdpc3Rlcih0aGlzLl9uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVzb2x2ZUFsbCh0aGlzLl9uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nVHlwZT86IExvYWRpbmdUeXBlIG9yIFsnbGluZWFyJyB8ICdjaXJjdWxhciddXG4gICAqIFNldHMgdGhlIHR5cGUgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdUeXBlLkNpcmN1bGFyIHwgJ2NpcmN1bGFyJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1R5cGUnKVxuICBzZXQgdHlwZSh0eXBlOiBMb2FkaW5nVHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBMb2FkaW5nVHlwZS5MaW5lYXI6XG4gICAgICAgIHRoaXMuX3R5cGUgPSBMb2FkaW5nVHlwZS5MaW5lYXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fdHlwZSA9IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nTW9kZT86IExvYWRpbmdNb2RlIG9yIFsnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnXVxuICAgKiBTZXRzIHRoZSBtb2RlIG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlIHwgJ2luZGV0ZXJtaW5hdGUnXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nTW9kZScpXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIExvYWRpbmdNb2RlLkRldGVybWluYXRlOlxuICAgICAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdTdHJhdGVneT86IExvYWRpbmdTdHJhdGVneSBvciBbJ3JlcGxhY2UnIHwgJ292ZXJsYXknXVxuICAgKiBTZXRzIHRoZSBzdHJhdGVneSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ01vZGUuUmVwbGFjZSB8ICdyZXBsYWNlJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1N0cmF0ZWd5JylcbiAgc2V0IHN0cmF0ZWd5KHN0YXRlZ3k6IExvYWRpbmdTdHJhdGVneSkge1xuICAgIHN3aXRjaCAoc3RhdGVneSkge1xuICAgICAgY2FzZSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheTpcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IExvYWRpbmdTdHJhdGVneS5SZXBsYWNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nQ29sb3I/OiBcInByaW1hcnlcIiB8IFwiYWNjZW50XCIgfCBcIndhcm5cIlxuICAgKiBTZXRzIHRoZSB0aGVtZSBjb2xvciBvZiB0aGUgbG9hZGluZyBjb21wb25lbnQuIERlZmF1bHRzIHRvIFwicHJpbWFyeVwiXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ0NvbG9yJykgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFRkTG9hZGluZ0NvbnRleHQ+LFxuICAgIHByaXZhdGUgX2xvYWRpbmdTZXJ2aWNlOiBUZExvYWRpbmdTZXJ2aWNlLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjb21wb25lbnQgaW4gdGhlIERPTSwgc28gaXQgd2lsbCBiZSBhdmFpbGFibGUgd2hlbiBjYWxsaW5nIHJlc29sdmUvcmVnaXN0ZXIuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlckNvbXBvbmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb21wb25lbnQgd2hlbiBkaXJlY3RpdmUgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVtb3ZlQ29tcG9uZW50KHRoaXMuX25hbWUpO1xuICAgIHRoaXMuX2xvYWRpbmdSZWYgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBbVGRMb2FkaW5nQ29tcG9uZW50XSBhbmQgYXR0YWNoZXMgaXQgdG8gdGhpcyBkaXJlY3RpdmUncyBbVmlld0NvbnRhaW5lclJlZl0uXG4gICAqIFBhc3NlcyB0aGlzIGRpcmVjdGl2ZSdzIFtUZW1wbGF0ZVJlZl0gdG8gbW9kaWZ5IERPTSBkZXBlbmRpbmcgb24gbG9hZGluZyBgc3RyYXRlZ3lgLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJDb21wb25lbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgbmVlZGVkIHRvIHJlZ2lzdGVyIGxvYWRpbmcgZGlyZWN0aXZlJyk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGBUZExvYWRpbmdDb21wb25lbnRgIGhhcyBiZWVuIGNyZWF0ZWQgYmVmb3JlIHRyeWluZyB0byBhZGQgb25lIGFnYWluLlxuICAgIC8vIFRoZXJlIGlzIGEgd2VpcmQgZWRnZSBjYXNlIHdoZW4gdXNpbmcgYFtyb3V0ZXJMaW5rQWN0aXZlXWAgdGhhdCBjYWxscyB0aGUgYG5nT25Jbml0YCB0d2ljZSBpbiBhIHJvd1xuICAgIGlmICghdGhpcy5fbG9hZGluZ1JlZikge1xuICAgICAgdGhpcy5fbG9hZGluZ1JlZiA9IHRoaXMuX2xvYWRpbmdTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICAgICAgdHlwZTogdGhpcy5fdHlwZSxcbiAgICAgICAgICBtb2RlOiB0aGlzLl9tb2RlLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICAgIHN0cmF0ZWd5OiB0aGlzLl9zdHJhdGVneSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVSZWYsXG4gICAgICAgIHRoaXMuX2NvbnRleHQsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19