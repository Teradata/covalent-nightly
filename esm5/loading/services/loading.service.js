/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { LoadingMode, LoadingStrategy, LoadingType } from '../loading.component';
import { TdLoadingFactory } from './loading.factory';
/**
 * @record
 */
export function ITdLoadingConfig() { }
if (false) {
    /** @type {?} */
    ITdLoadingConfig.prototype.name;
    /** @type {?|undefined} */
    ITdLoadingConfig.prototype.type;
    /** @type {?|undefined} */
    ITdLoadingConfig.prototype.mode;
    /** @type {?|undefined} */
    ITdLoadingConfig.prototype.color;
}
var TdLoadingConfig = /** @class */ (function () {
    function TdLoadingConfig(config) {
        this.name = config.name;
        if (!this.name) {
            throw Error('Name is required for [TdLoading] configuration.');
        }
        this.mode = config.mode ? config.mode : LoadingMode.Indeterminate;
        this.type = config.type ? config.type : LoadingType.Circular;
        this.color = config.color ? config.color : 'primary';
    }
    return TdLoadingConfig;
}());
export { TdLoadingConfig };
if (false) {
    /** @type {?} */
    TdLoadingConfig.prototype.name;
    /** @type {?} */
    TdLoadingConfig.prototype.type;
    /** @type {?} */
    TdLoadingConfig.prototype.mode;
    /** @type {?} */
    TdLoadingConfig.prototype.color;
}
/**
 * @record
 */
export function ITdLoadingDirectiveConfig() { }
if (false) {
    /** @type {?|undefined} */
    ITdLoadingDirectiveConfig.prototype.strategy;
}
var TdLoadingDirectiveConfig = /** @class */ (function (_super) {
    tslib_1.__extends(TdLoadingDirectiveConfig, _super);
    function TdLoadingDirectiveConfig(config) {
        var _this = _super.call(this, config) || this;
        _this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
        return _this;
    }
    return TdLoadingDirectiveConfig;
}(TdLoadingConfig));
export { TdLoadingDirectiveConfig };
if (false) {
    /** @type {?} */
    TdLoadingDirectiveConfig.prototype.name;
    /** @type {?} */
    TdLoadingDirectiveConfig.prototype.type;
    /** @type {?} */
    TdLoadingDirectiveConfig.prototype.mode;
    /** @type {?} */
    TdLoadingDirectiveConfig.prototype.strategy;
}
var TdLoadingService = /** @class */ (function () {
    function TdLoadingService(_loadingFactory) {
        this._loadingFactory = _loadingFactory;
        this._context = {};
        this._timeouts = {};
        this.create({
            name: 'td-loading-main',
        });
    }
    /**
     * params:
     * - config: ILoadingDirectiveConfig
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     *
     * NOTE: @internal usage only.
     */
    /**
     * params:
     * - config: ILoadingDirectiveConfig
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     *
     * NOTE: \@internal usage only.
     * @param {?} config
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    TdLoadingService.prototype.createComponent = /**
     * params:
     * - config: ILoadingDirectiveConfig
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     *
     * NOTE: \@internal usage only.
     * @param {?} config
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    function (config, viewContainerRef, templateRef, context) {
        /** @type {?} */
        var directiveConfig = new TdLoadingDirectiveConfig(config);
        if (this._context[directiveConfig.name]) {
            throw Error("Name duplication: [TdLoading] directive has a name conflict with " + directiveConfig.name + ".");
        }
        if (directiveConfig.strategy === LoadingStrategy.Overlay) {
            this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
        }
        else {
            this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
        }
        return this._context[directiveConfig.name];
    };
    /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     */
    /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     * @param {?} config
     * @return {?}
     */
    TdLoadingService.prototype.create = /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var fullscreenConfig = new TdLoadingConfig(config);
        this.removeComponent(fullscreenConfig.name);
        this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
    };
    /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     */
    /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     * @param {?} name
     * @return {?}
     */
    TdLoadingService.prototype.removeComponent = /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this._context[name]) {
            this._context[name].subject.unsubscribe();
            if (this._context[name].componentRef) {
                this._context[name].componentRef.destroy();
            }
            this._context[name] = undefined;
            delete this._context[name];
        }
    };
    /**
     * params:
     * - name: string
     * - registers?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass registers argument to set a number of register calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.register()
     */
    /**
     * params:
     * - name: string
     * - registers?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass registers argument to set a number of register calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.register()
     * @param {?=} name
     * @param {?=} registers
     * @return {?}
     */
    TdLoadingService.prototype.register = /**
     * params:
     * - name: string
     * - registers?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass registers argument to set a number of register calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.register()
     * @param {?=} name
     * @param {?=} registers
     * @return {?}
     */
    function (name, registers) {
        var _this = this;
        if (name === void 0) { name = 'td-loading-main'; }
        if (registers === void 0) { registers = 1; }
        // try registering into the service if the loading component has been instanciated or if it exists.
        if (this._context[name]) {
            registers = registers < 1 ? 1 : registers;
            this._context[name].times += registers;
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        else {
            // if it doesnt exist, set a timeout so its registered after change detection happens
            // this in case "register" occured on the `ngOnInit` lifehook cycle.
            if (!this._timeouts[name]) {
                this._timeouts[name] = setTimeout(function () {
                    _this.register(name, registers);
                });
            }
            else {
                // if it timeout occured and still doesnt exist, it means the tiemout wasnt needed so we clear it.
                this._clearTimeout(name);
            }
        }
        return false;
    };
    /**
     * params:
     * - name: string
     * - resolves?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass resolves argument to set a number of resolve calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolve()
     */
    /**
     * params:
     * - name: string
     * - resolves?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass resolves argument to set a number of resolve calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolve()
     * @param {?=} name
     * @param {?=} resolves
     * @return {?}
     */
    TdLoadingService.prototype.resolve = /**
     * params:
     * - name: string
     * - resolves?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass resolves argument to set a number of resolve calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolve()
     * @param {?=} name
     * @param {?=} resolves
     * @return {?}
     */
    function (name, resolves) {
        if (name === void 0) { name = 'td-loading-main'; }
        if (resolves === void 0) { resolves = 1; }
        // clear timeout if the loading component is "resolved" before its "registered"
        this._clearTimeout(name);
        if (this._context[name]) {
            resolves = resolves < 1 ? 1 : resolves;
            if (this._context[name].times > 0) {
                /** @type {?} */
                var times = this._context[name].times;
                times -= resolves;
                this._context[name].times = times < 0 ? 0 : times;
            }
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        return false;
    };
    /**
     * params:
     * - name: string
     * returns: true if successful
     *
     * Resolves all request for the loading mask referenced by the name parameter.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolveAll()
     */
    /**
     * params:
     * - name: string
     * returns: true if successful
     *
     * Resolves all request for the loading mask referenced by the name parameter.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolveAll()
     * @param {?=} name
     * @return {?}
     */
    TdLoadingService.prototype.resolveAll = /**
     * params:
     * - name: string
     * returns: true if successful
     *
     * Resolves all request for the loading mask referenced by the name parameter.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolveAll()
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        if (name === void 0) { name = 'td-loading-main'; }
        // clear timeout if the loading component is "resolved" before its "registered"
        this._clearTimeout(name);
        if (this._context[name]) {
            this._context[name].times = 0;
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        return false;
    };
    /**
     * params:
     * - name: string
     * - value: number
     * returns: true if successful
     *
     * Set value on a loading mask referenced by the name parameter.
     * Usage only available if its mode is 'determinate' and if loading is showing.
     */
    /**
     * params:
     * - name: string
     * - value: number
     * returns: true if successful
     *
     * Set value on a loading mask referenced by the name parameter.
     * Usage only available if its mode is 'determinate' and if loading is showing.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    TdLoadingService.prototype.setValue = /**
     * params:
     * - name: string
     * - value: number
     * returns: true if successful
     *
     * Set value on a loading mask referenced by the name parameter.
     * Usage only available if its mode is 'determinate' and if loading is showing.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (this._context[name]) {
            /** @type {?} */
            var instance = this._context[name].componentRef.instance;
            if (instance.mode === LoadingMode.Determinate && instance.animation) {
                instance.value = value;
                return true;
            }
        }
        return false;
    };
    /**
     * Clears timeout linked to the name.
     * @param name Name of the loading component to be cleared
     */
    /**
     * Clears timeout linked to the name.
     * @param {?} name Name of the loading component to be cleared
     * @return {?}
     */
    TdLoadingService.prototype._clearTimeout = /**
     * Clears timeout linked to the name.
     * @param {?} name Name of the loading component to be cleared
     * @return {?}
     */
    function (name) {
        clearTimeout(this._timeouts[name]);
        delete this._timeouts[name];
    };
    TdLoadingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdLoadingService.ctorParameters = function () { return [
        { type: TdLoadingFactory }
    ]; };
    return TdLoadingService;
}());
export { TdLoadingService };
if (false) {
    /** @type {?} */
    TdLoadingService.prototype._context;
    /** @type {?} */
    TdLoadingService.prototype._timeouts;
    /** @type {?} */
    TdLoadingService.prototype._loadingFactory;
}
/**
 * @param {?} parent
 * @param {?} loadingFactory
 * @return {?}
 */
export function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
    return parent || new TdLoadingService(loadingFactory);
}
/** @type {?} */
export var LOADING_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingService,
    deps: [[new Optional(), new SkipSelf(), TdLoadingService], TdLoadingFactory],
    useFactory: LOADING_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt6RSxPQUFPLEVBQXNCLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbEUsc0NBS0M7OztJQUpDLGdDQUFhOztJQUNiLGdDQUFtQjs7SUFDbkIsZ0NBQW1COztJQUNuQixpQ0FBc0M7O0FBR3hDO0lBTUUseUJBQVksTUFBd0I7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7SUFkQywr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QUE4THZELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxNQUF3QixFQUFFLGNBQWdDO0lBQ2pHLE9BQU8sTUFBTSxJQUFJLElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEQsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQWE7O0lBRXhDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztJQUM1RSxVQUFVLEVBQUUsd0JBQXdCO0NBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIExvYWRpbmdUeXBlIH0gZnJvbSAnLi4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMb2FkaW5nRmFjdG9yeSwgSUxvYWRpbmdSZWYgfSBmcm9tICcuL2xvYWRpbmcuZmFjdG9yeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZT86IExvYWRpbmdUeXBlO1xuICBtb2RlPzogTG9hZGluZ01vZGU7XG4gIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG59XG5cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb25maWcgaW1wbGVtZW50cyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ1R5cGU7XG4gIG1vZGU/OiBMb2FkaW5nTW9kZTtcbiAgY29sb3I/OiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElUZExvYWRpbmdDb25maWcpIHtcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQgZm9yIFtUZExvYWRpbmddIGNvbmZpZ3VyYXRpb24uJyk7XG4gICAgfVxuICAgIHRoaXMubW9kZSA9IGNvbmZpZy5tb2RlID8gY29uZmlnLm1vZGUgOiBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlID8gY29uZmlnLnR5cGUgOiBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgICB0aGlzLmNvbG9yID0gY29uZmlnLmNvbG9yID8gY29uZmlnLmNvbG9yIDogJ3ByaW1hcnknO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyBleHRlbmRzIElUZExvYWRpbmdDb25maWcge1xuICBzdHJhdGVneT86IExvYWRpbmdTdHJhdGVneTtcbn1cblxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyBleHRlbmRzIFRkTG9hZGluZ0NvbmZpZyBpbXBsZW1lbnRzIElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IExvYWRpbmdUeXBlO1xuICBtb2RlOiBMb2FkaW5nTW9kZTtcbiAgc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMuc3RyYXRlZ3kgPSBjb25maWcuc3RyYXRlZ3kgPyBjb25maWcuc3RyYXRlZ3kgOiBMb2FkaW5nU3RyYXRlZ3kuUmVwbGFjZTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nU2VydmljZSB7XG4gIHByaXZhdGUgX2NvbnRleHQ6IHsgW2tleTogc3RyaW5nXTogSUxvYWRpbmdSZWYgfSA9IHt9O1xuICBwcml2YXRlIF90aW1lb3V0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRpbmdGYWN0b3J5OiBUZExvYWRpbmdGYWN0b3J5KSB7XG4gICAgdGhpcy5jcmVhdGUoe1xuICAgICAgbmFtZTogJ3RkLWxvYWRpbmctbWFpbicsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUxvYWRpbmdEaXJlY3RpdmVDb25maWdcbiAgICogLSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICAqIC0gdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD5cbiAgICpcbiAgICogQ3JlYXRlcyBhbiByZXBsYWNlIGxvYWRpbmcgbWFzayBhbmQgYXR0YWNoZXMgaXQgdG8gdGhlIHZpZXdDb250YWluZXJSZWYuXG4gICAqIFJlcGxhY2VzIHRoZSB0ZW1wbGF0ZVJlZiB3aXRoIHRoZSBtYXNrIHdoZW4gYSByZXF1ZXN0IGlzIHJlZ2lzdGVyZWQgb24gaXQuXG4gICAqXG4gICAqIE5PVEU6IEBpbnRlcm5hbCB1c2FnZSBvbmx5LlxuICAgKi9cbiAgY3JlYXRlQ29tcG9uZW50KFxuICAgIGNvbmZpZzogSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+LFxuICAgIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQsXG4gICk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgZGlyZWN0aXZlQ29uZmlnOiBUZExvYWRpbmdEaXJlY3RpdmVDb25maWcgPSBuZXcgVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnKGNvbmZpZyk7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgTmFtZSBkdXBsaWNhdGlvbjogW1RkTG9hZGluZ10gZGlyZWN0aXZlIGhhcyBhIG5hbWUgY29uZmxpY3Qgd2l0aCAke2RpcmVjdGl2ZUNvbmZpZy5uYW1lfS5gKTtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGl2ZUNvbmZpZy5zdHJhdGVneSA9PT0gTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXkpIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlT3ZlcmxheUNvbXBvbmVudChcbiAgICAgICAgZGlyZWN0aXZlQ29uZmlnLFxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0ZW1wbGF0ZVJlZixcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlUmVwbGFjZUNvbXBvbmVudChcbiAgICAgICAgZGlyZWN0aXZlQ29uZmlnLFxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0ZW1wbGF0ZVJlZixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0W2RpcmVjdGl2ZUNvbmZpZy5uYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJVGRMb2FkaW5nQ29uZmlnXG4gICAqXG4gICAqIENyZWF0ZXMgYSBmdWxsc2NyZWVuIGxvYWRpbmcgbWFzayBhbmQgYXR0YWNoZXMgaXQgdG8gdGhlIERPTSB3aXRoIHRoZSBnaXZlbiBjb25maWd1cmF0aW9uLlxuICAgKiBPbmx5IGRpc3BsYXllZCB3aGVuIHRoZSBtYXNrIGhhcyBhIHJlcXVlc3QgcmVnaXN0ZXJlZCBvbiBpdC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGUoY29uZmlnOiBJVGRMb2FkaW5nQ29uZmlnKTogdm9pZCB7XG4gICAgbGV0IGZ1bGxzY3JlZW5Db25maWc6IFRkTG9hZGluZ0NvbmZpZyA9IG5ldyBUZExvYWRpbmdDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLnJlbW92ZUNvbXBvbmVudChmdWxsc2NyZWVuQ29uZmlnLm5hbWUpO1xuICAgIHRoaXMuX2NvbnRleHRbZnVsbHNjcmVlbkNvbmZpZy5uYW1lXSA9IHRoaXMuX2xvYWRpbmdGYWN0b3J5LmNyZWF0ZUZ1bGxTY3JlZW5Db21wb25lbnQoZnVsbHNjcmVlbkNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKlxuICAgKiBSZW1vdmVzIGBsb2FkaW5nYCBjb21wb25lbnQgZnJvbSBzZXJ2aWNlIGNvbnRleHQuXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlQ29tcG9uZW50KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdLmNvbXBvbmVudFJlZikge1xuICAgICAgICB0aGlzLl9jb250ZXh0W25hbWVdLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbnRleHRbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogLSByZWdpc3RlcnM/OiBudW1iZXJcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFJlc29sdmVzIGEgcmVxdWVzdCBmb3IgdGhlIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICogQ2FuIG9wdGlvbmFsbHkgcGFzcyByZWdpc3RlcnMgYXJndW1lbnQgdG8gc2V0IGEgbnVtYmVyIG9mIHJlZ2lzdGVyIGNhbGxzLlxuICAgKlxuICAgKiBJZiBubyBwYXJhbWVtZXRlcnMgYXJlIHVzZWQsIHRoZW4gZGVmYXVsdCBtYWluIG1hc2sgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBlLmcuIGxvYWRpbmdTZXJ2aWNlLnJlZ2lzdGVyKClcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlcihuYW1lOiBzdHJpbmcgPSAndGQtbG9hZGluZy1tYWluJywgcmVnaXN0ZXJzOiBudW1iZXIgPSAxKTogYm9vbGVhbiB7XG4gICAgLy8gdHJ5IHJlZ2lzdGVyaW5nIGludG8gdGhlIHNlcnZpY2UgaWYgdGhlIGxvYWRpbmcgY29tcG9uZW50IGhhcyBiZWVuIGluc3RhbmNpYXRlZCBvciBpZiBpdCBleGlzdHMuXG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHJlZ2lzdGVycyA9IHJlZ2lzdGVycyA8IDEgPyAxIDogcmVnaXN0ZXJzO1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyArPSByZWdpc3RlcnM7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QubmV4dCh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBpdCBkb2VzbnQgZXhpc3QsIHNldCBhIHRpbWVvdXQgc28gaXRzIHJlZ2lzdGVyZWQgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXBwZW5zXG4gICAgICAvLyB0aGlzIGluIGNhc2UgXCJyZWdpc3RlclwiIG9jY3VyZWQgb24gdGhlIGBuZ09uSW5pdGAgbGlmZWhvb2sgY3ljbGUuXG4gICAgICBpZiAoIXRoaXMuX3RpbWVvdXRzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRzW25hbWVdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWdpc3RlcihuYW1lLCByZWdpc3RlcnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIGl0IHRpbWVvdXQgb2NjdXJlZCBhbmQgc3RpbGwgZG9lc250IGV4aXN0LCBpdCBtZWFucyB0aGUgdGllbW91dCB3YXNudCBuZWVkZWQgc28gd2UgY2xlYXIgaXQuXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dChuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogLSByZXNvbHZlcz86IG51bWJlclxuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogUmVzb2x2ZXMgYSByZXF1ZXN0IGZvciB0aGUgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKiBDYW4gb3B0aW9uYWxseSBwYXNzIHJlc29sdmVzIGFyZ3VtZW50IHRvIHNldCBhIG51bWJlciBvZiByZXNvbHZlIGNhbGxzLlxuICAgKlxuICAgKiBJZiBubyBwYXJhbWVtZXRlcnMgYXJlIHVzZWQsIHRoZW4gZGVmYXVsdCBtYWluIG1hc2sgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBlLmcuIGxvYWRpbmdTZXJ2aWNlLnJlc29sdmUoKVxuICAgKi9cbiAgcHVibGljIHJlc29sdmUobmFtZTogc3RyaW5nID0gJ3RkLWxvYWRpbmctbWFpbicsIHJlc29sdmVzOiBudW1iZXIgPSAxKTogYm9vbGVhbiB7XG4gICAgLy8gY2xlYXIgdGltZW91dCBpZiB0aGUgbG9hZGluZyBjb21wb25lbnQgaXMgXCJyZXNvbHZlZFwiIGJlZm9yZSBpdHMgXCJyZWdpc3RlcmVkXCJcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQobmFtZSk7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHJlc29sdmVzID0gcmVzb2x2ZXMgPCAxID8gMSA6IHJlc29sdmVzO1xuICAgICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgPiAwKSB7XG4gICAgICAgIGxldCB0aW1lczogbnVtYmVyID0gdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcztcbiAgICAgICAgdGltZXMgLT0gcmVzb2x2ZXM7XG4gICAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgPSB0aW1lcyA8IDAgPyAwIDogdGltZXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QubmV4dCh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogUmVzb2x2ZXMgYWxsIHJlcXVlc3QgZm9yIHRoZSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZW1ldGVycyBhcmUgdXNlZCwgdGhlbiBkZWZhdWx0IG1haW4gbWFzayB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIGUuZy4gbG9hZGluZ1NlcnZpY2UucmVzb2x2ZUFsbCgpXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZUFsbChuYW1lOiBzdHJpbmcgPSAndGQtbG9hZGluZy1tYWluJyk6IGJvb2xlYW4ge1xuICAgIC8vIGNsZWFyIHRpbWVvdXQgaWYgdGhlIGxvYWRpbmcgY29tcG9uZW50IGlzIFwicmVzb2x2ZWRcIiBiZWZvcmUgaXRzIFwicmVnaXN0ZXJlZFwiXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KG5hbWUpO1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzID0gMDtcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC5uZXh0KHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIC0gdmFsdWU6IG51bWJlclxuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogU2V0IHZhbHVlIG9uIGEgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKiBVc2FnZSBvbmx5IGF2YWlsYWJsZSBpZiBpdHMgbW9kZSBpcyAnZGV0ZXJtaW5hdGUnIGFuZCBpZiBsb2FkaW5nIGlzIHNob3dpbmcuXG4gICAqL1xuICBwdWJsaWMgc2V0VmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIGxldCBpbnN0YW5jZTogVGRMb2FkaW5nQ29tcG9uZW50ID0gdGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICBpZiAoaW5zdGFuY2UubW9kZSA9PT0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUgJiYgaW5zdGFuY2UuYW5pbWF0aW9uKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRpbWVvdXQgbGlua2VkIHRvIHRoZSBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudCB0byBiZSBjbGVhcmVkXG4gICAqL1xuICBwcml2YXRlIF9jbGVhclRpbWVvdXQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRzW25hbWVdKTtcbiAgICBkZWxldGUgdGhpcy5fdGltZW91dHNbbmFtZV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExPQURJTkdfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFRkTG9hZGluZ1NlcnZpY2UsIGxvYWRpbmdGYWN0b3J5OiBUZExvYWRpbmdGYWN0b3J5KTogVGRMb2FkaW5nU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkTG9hZGluZ1NlcnZpY2UobG9hZGluZ0ZhY3RvcnkpO1xufVxuXG5leHBvcnQgY29uc3QgTE9BRElOR19QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkTG9hZGluZ1NlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZExvYWRpbmdTZXJ2aWNlXSwgVGRMb2FkaW5nRmFjdG9yeV0sXG4gIHVzZUZhY3Rvcnk6IExPQURJTkdfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=