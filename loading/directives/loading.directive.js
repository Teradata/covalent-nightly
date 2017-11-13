import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { LoadingType, LoadingMode, LoadingStrategy } from '../loading.component';
import { TdLoadingService } from '../services/loading.service';
/**
 * Context class for variable reference
 */
var TdLoadingContext = (function () {
    function TdLoadingContext() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
    return TdLoadingContext;
}());
export { TdLoadingContext };
// Constant for generation of the id for the next component
var TD_LOADING_NEXT_ID = 0;
var TdLoadingDirective = (function () {
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
        set: function (name) {
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
        set: function (until) {
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
        set: function (type) {
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
        set: function (mode) {
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
        set: function (stategy) {
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
    TdLoadingDirective.prototype.ngOnInit = function () {
        this._registerComponent();
    };
    /**
     * Remove component when directive is destroyed.
     */
    TdLoadingDirective.prototype.ngOnDestroy = function () {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    };
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     */
    TdLoadingDirective.prototype._registerComponent = function () {
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
    tslib_1.__decorate([
        Input('tdLoading'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TdLoadingDirective.prototype, "name", null);
    tslib_1.__decorate([
        Input('tdLoadingUntil'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TdLoadingDirective.prototype, "until", null);
    tslib_1.__decorate([
        Input('tdLoadingType'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdLoadingDirective.prototype, "type", null);
    tslib_1.__decorate([
        Input('tdLoadingMode'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdLoadingDirective.prototype, "mode", null);
    tslib_1.__decorate([
        Input('tdLoadingStrategy'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdLoadingDirective.prototype, "strategy", null);
    tslib_1.__decorate([
        Input('tdLoadingColor'),
        tslib_1.__metadata("design:type", String)
    ], TdLoadingDirective.prototype, "color", void 0);
    TdLoadingDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdLoading]',
        }),
        tslib_1.__metadata("design:paramtypes", [ViewContainerRef,
            TemplateRef,
            TdLoadingService])
    ], TdLoadingDirective);
    return TdLoadingDirective;
}());
export { TdLoadingDirective };
//# sourceMappingURL=loading.directive.js.map