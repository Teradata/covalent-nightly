/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @return {?}
     */
    TdLoadingDirective.prototype._registerComponent = /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
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
    /** @type {?} */
    TdLoadingDirective.prototype._context;
    /** @type {?} */
    TdLoadingDirective.prototype._type;
    /** @type {?} */
    TdLoadingDirective.prototype._mode;
    /** @type {?} */
    TdLoadingDirective.prototype._strategy;
    /** @type {?} */
    TdLoadingDirective.prototype._name;
    /** @type {?} */
    TdLoadingDirective.prototype._loadingRef;
    /**
     * tdLoadingColor?: "primary" | "accent" | "warn"
     * Sets the theme color of the loading component. Defaults to "primary"
     * @type {?}
     */
    TdLoadingDirective.prototype.color;
    /** @type {?} */
    TdLoadingDirective.prototype._viewContainerRef;
    /** @type {?} */
    TdLoadingDirective.prototype._templateRef;
    /** @type {?} */
    TdLoadingDirective.prototype._loadingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTS9EOzs7O0lBQUE7UUFDUyxjQUFTLEdBQVEsU0FBUyxDQUFDO1FBQzNCLGNBQVMsR0FBUSxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7Ozs7SUFGQyxxQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7OztJQUloQyxrQkFBa0IsR0FBVyxDQUFDO0FBRWxDO0lBb0dFLDRCQUNVLGlCQUFtQyxFQUNuQyxZQUEyQyxFQUMzQyxlQUFpQztRQUZqQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUErQjtRQUMzQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFuR25DLGFBQVEsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDOzs7OztRQThGbkMsVUFBSyxHQUFrQyxTQUFTLENBQUM7SUFNdkUsQ0FBQztJQXpGSixzQkFDSSxvQ0FBSTtRQUxSOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1MsSUFBWTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUks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LEVBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7U0FDSDtJQUNILENBQUM7O2dCQWpKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQW5CUSxnQkFBZ0I7Z0JBQUUsV0FBVztnQkFHN0IsZ0JBQWdCOzs7dUJBNkJ0QixLQUFLLFNBQUMsV0FBVzt3QkFlakIsS0FBSyxTQUFDLGdCQUFnQjt1QkFrQnRCLEtBQUssU0FBQyxlQUFlO3VCQWlCckIsS0FBSyxTQUFDLGVBQWU7MkJBaUJyQixLQUFLLFNBQUMsbUJBQW1CO3dCQWdCekIsS0FBSyxTQUFDLGdCQUFnQjs7SUFnRHpCLHlCQUFDO0NBQUEsQUFsSkQsSUFrSkM7U0EvSVksa0JBQWtCOzs7SUFDN0Isc0NBQTREOztJQUM1RCxtQ0FBMkI7O0lBQzNCLG1DQUEyQjs7SUFDM0IsdUNBQW1DOztJQUNuQyxtQ0FBc0I7O0lBQ3RCLHlDQUFpQzs7Ozs7O0lBeUZqQyxtQ0FBMEU7O0lBR3hFLCtDQUEyQzs7SUFDM0MsMENBQW1EOztJQUNuRCw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9hZGluZ1R5cGUsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIFRkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUxvYWRpbmdSZWYgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nLmZhY3RvcnknO1xuXG4vKipcbiAqIENvbnRleHQgY2xhc3MgZm9yIHZhcmlhYmxlIHJlZmVyZW5jZVxuICovXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29udGV4dCB7XG4gIHB1YmxpYyAkaW1wbGljaXQ6IGFueSA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHRkTG9hZGluZzogYW55ID0gdW5kZWZpbmVkO1xufVxuXG4vLyBDb25zdGFudCBmb3IgZ2VuZXJhdGlvbiBvZiB0aGUgaWQgZm9yIHRoZSBuZXh0IGNvbXBvbmVudFxubGV0IFREX0xPQURJTkdfTkVYVF9JRDogbnVtYmVyID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTG9hZGluZ10nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQgPSBuZXcgVGRMb2FkaW5nQ29udGV4dCgpO1xuICBwcml2YXRlIF90eXBlOiBMb2FkaW5nVHlwZTtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGU7XG4gIHByaXZhdGUgX3N0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9hZGluZ1JlZjogSUxvYWRpbmdSZWY7XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZzogc3RyaW5nXG4gICAqIE5hbWUgcmVmZXJlbmNlIG9mIHRoZSBsb2FkaW5nIG1hc2ssIHVzZWQgdG8gcmVnaXN0ZXIvcmVzb2x2ZSByZXF1ZXN0cyB0byB0aGUgbWFzay5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nJylcbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nVW50aWw/OiBhbnlcbiAgICogSWYgaXRzIG51bGwsIHVuZGVmaW5lZCBvciBmYWxzZSBpdCB3aWxsIGJlIHVzZWQgdG8gcmVnaXN0ZXIgcmVxdWVzdHMgdG8gdGhlIG1hc2suXG4gICAqIEVsc2UgaWYgaXRzIGFueSB2YWx1ZSB0aGF0IGNhbiBiZSByZXNvbHZlZCBhcyB0cnVlLCBpdCB3aWxsIHJlc29sdmUgdGhlIG1hc2suXG4gICAqIFtuYW1lXSBpcyBvcHRpb25hbCB3aGVuIHVzaW5nIFt1bnRpbF0sIGJ1dCBjYW4gc3RpbGwgYmUgdXNlZCB0byByZWdpc3Rlci9yZXNvbHZlIGl0IG1hbnVhbGx5LlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdVbnRpbCcpXG4gIHNldCB1bnRpbCh1bnRpbDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICB0aGlzLl9uYW1lID0gJ3RkLWxvYWRpbmctdW50aWwtJyArIFREX0xPQURJTkdfTkVYVF9JRCsrO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuX2NvbnRleHQudGRMb2FkaW5nID0gdW50aWw7XG4gICAgaWYgKCF1bnRpbCkge1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVnaXN0ZXIodGhpcy5fbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlc29sdmVBbGwodGhpcy5fbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1R5cGU/OiBMb2FkaW5nVHlwZSBvciBbJ2xpbmVhcicgfCAnY2lyY3VsYXInXVxuICAgKiBTZXRzIHRoZSB0eXBlIG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nVHlwZS5DaXJjdWxhciB8ICdjaXJjdWxhciddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdUeXBlJylcbiAgc2V0IHR5cGUodHlwZTogTG9hZGluZ1R5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgTG9hZGluZ1R5cGUuTGluZWFyOlxuICAgICAgICB0aGlzLl90eXBlID0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3R5cGUgPSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ01vZGU/OiBMb2FkaW5nTW9kZSBvciBbJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJ11cbiAgICogU2V0cyB0aGUgbW9kZSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZSB8ICdpbmRldGVybWluYXRlJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ01vZGUnKVxuICBzZXQgbW9kZShtb2RlOiBMb2FkaW5nTW9kZSkge1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTpcbiAgICAgICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkRldGVybWluYXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nU3RyYXRlZ3k/OiBMb2FkaW5nU3RyYXRlZ3kgb3IgWydyZXBsYWNlJyB8ICdvdmVybGF5J11cbiAgICogU2V0cyB0aGUgc3RyYXRlZ3kgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdNb2RlLlJlcGxhY2UgfCAncmVwbGFjZSddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdTdHJhdGVneScpXG4gIHNldCBzdHJhdGVneShzdGF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3kpIHtcbiAgICBzd2l0Y2ggKHN0YXRlZ3kpIHtcbiAgICAgIGNhc2UgTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXk6XG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBMb2FkaW5nU3RyYXRlZ3kuUmVwbGFjZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ0NvbG9yPzogXCJwcmltYXJ5XCIgfCBcImFjY2VudFwiIHwgXCJ3YXJuXCJcbiAgICogU2V0cyB0aGUgdGhlbWUgY29sb3Igb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50LiBEZWZhdWx0cyB0byBcInByaW1hcnlcIlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdDb2xvcicpIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxUZExvYWRpbmdDb250ZXh0PixcbiAgICBwcml2YXRlIF9sb2FkaW5nU2VydmljZTogVGRMb2FkaW5nU2VydmljZSxcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY29tcG9uZW50IGluIHRoZSBET00sIHNvIGl0IHdpbGwgYmUgYXZhaWxhYmxlIHdoZW4gY2FsbGluZyByZXNvbHZlL3JlZ2lzdGVyLlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVnaXN0ZXJDb21wb25lbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29tcG9uZW50IHdoZW4gZGlyZWN0aXZlIGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlbW92ZUNvbXBvbmVudCh0aGlzLl9uYW1lKTtcbiAgICB0aGlzLl9sb2FkaW5nUmVmID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgW1RkTG9hZGluZ0NvbXBvbmVudF0gYW5kIGF0dGFjaGVzIGl0IHRvIHRoaXMgZGlyZWN0aXZlJ3MgW1ZpZXdDb250YWluZXJSZWZdLlxuICAgKiBQYXNzZXMgdGhpcyBkaXJlY3RpdmUncyBbVGVtcGxhdGVSZWZdIHRvIG1vZGlmeSBET00gZGVwZW5kaW5nIG9uIGxvYWRpbmcgYHN0cmF0ZWd5YC5cbiAgICovXG4gIHByaXZhdGUgX3JlZ2lzdGVyQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGlzIG5lZWRlZCB0byByZWdpc3RlciBsb2FkaW5nIGRpcmVjdGl2ZScpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBgVGRMb2FkaW5nQ29tcG9uZW50YCBoYXMgYmVlbiBjcmVhdGVkIGJlZm9yZSB0cnlpbmcgdG8gYWRkIG9uZSBhZ2Fpbi5cbiAgICAvLyBUaGVyZSBpcyBhIHdlaXJkIGVkZ2UgY2FzZSB3aGVuIHVzaW5nIGBbcm91dGVyTGlua0FjdGl2ZV1gIHRoYXQgY2FsbHMgdGhlIGBuZ09uSW5pdGAgdHdpY2UgaW4gYSByb3dcbiAgICBpZiAoIXRoaXMuX2xvYWRpbmdSZWYpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdSZWYgPSB0aGlzLl9sb2FkaW5nU2VydmljZS5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgICAgIHR5cGU6IHRoaXMuX3R5cGUsXG4gICAgICAgICAgbW9kZTogdGhpcy5fbW9kZSxcbiAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICBzdHJhdGVneTogdGhpcy5fc3RyYXRlZ3ksXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlUmVmLFxuICAgICAgICB0aGlzLl9jb250ZXh0LFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==