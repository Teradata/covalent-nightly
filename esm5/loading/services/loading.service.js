/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this._timeouts[name] = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.register(name, registers);
                }));
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
     * @private
     * @param {?} name Name of the loading component to be cleared
     * @return {?}
     */
    TdLoadingService.prototype._clearTimeout = /**
     * Clears timeout linked to the name.
     * @private
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
    /**
     * @type {?}
     * @private
     */
    TdLoadingService.prototype._context;
    /**
     * @type {?}
     * @private
     */
    TdLoadingService.prototype._timeouts;
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt6RSxPQUFPLEVBQXNCLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbEUsc0NBS0M7OztJQUpDLGdDQUFhOztJQUNiLGdDQUFtQjs7SUFDbkIsZ0NBQW1COztJQUNuQixpQ0FBc0M7O0FBR3hDO0lBTUUseUJBQVksTUFBd0I7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7SUFkQywr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LDJDQUF5Qzs7Ozs7OztBQThMdkQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE1BQXdCLEVBQUUsY0FBZ0M7SUFDakcsT0FBTyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4RCxDQUFDOztBQUVELE1BQU0sS0FBTyxnQkFBZ0IsR0FBYTs7SUFFeEMsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDO0lBQzVFLFVBQVUsRUFBRSx3QkFBd0I7Q0FDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkTG9hZGluZ0NvbnRleHQgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkTG9hZGluZ0NvbXBvbmVudCwgTG9hZGluZ01vZGUsIExvYWRpbmdTdHJhdGVneSwgTG9hZGluZ1R5cGUgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExvYWRpbmdGYWN0b3J5LCBJTG9hZGluZ1JlZiB9IGZyb20gJy4vbG9hZGluZy5mYWN0b3J5JztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ1R5cGU7XG4gIG1vZGU/OiBMb2FkaW5nTW9kZTtcbiAgY29sb3I/OiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJztcbn1cblxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbmZpZyBpbXBsZW1lbnRzIElUZExvYWRpbmdDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU/OiBMb2FkaW5nVHlwZTtcbiAgbW9kZT86IExvYWRpbmdNb2RlO1xuICBjb2xvcj86ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogSVRkTG9hZGluZ0NvbmZpZykge1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICB0aHJvdyBFcnJvcignTmFtZSBpcyByZXF1aXJlZCBmb3IgW1RkTG9hZGluZ10gY29uZmlndXJhdGlvbi4nKTtcbiAgICB9XG4gICAgdGhpcy5tb2RlID0gY29uZmlnLm1vZGUgPyBjb25maWcubW9kZSA6IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gICAgdGhpcy50eXBlID0gY29uZmlnLnR5cGUgPyBjb25maWcudHlwZSA6IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICAgIHRoaXMuY29sb3IgPSBjb25maWcuY29sb3IgPyBjb25maWcuY29sb3IgOiAncHJpbWFyeSc7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnIGV4dGVuZHMgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIHN0cmF0ZWd5PzogTG9hZGluZ1N0cmF0ZWd5O1xufVxuXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnIGV4dGVuZHMgVGRMb2FkaW5nQ29uZmlnIGltcGxlbWVudHMgSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogTG9hZGluZ1R5cGU7XG4gIG1vZGU6IExvYWRpbmdNb2RlO1xuICBzdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgdGhpcy5zdHJhdGVneSA9IGNvbmZpZy5zdHJhdGVneSA/IGNvbmZpZy5zdHJhdGVneSA6IExvYWRpbmdTdHJhdGVneS5SZXBsYWNlO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY29udGV4dDogeyBba2V5OiBzdHJpbmddOiBJTG9hZGluZ1JlZiB9ID0ge307XG4gIHByaXZhdGUgX3RpbWVvdXRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGluZ0ZhY3Rvcnk6IFRkTG9hZGluZ0ZhY3RvcnkpIHtcbiAgICB0aGlzLmNyZWF0ZSh7XG4gICAgICBuYW1lOiAndGQtbG9hZGluZy1tYWluJyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZ1xuICAgKiAtIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICogLSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PlxuICAgKlxuICAgKiBDcmVhdGVzIGFuIHJlcGxhY2UgbG9hZGluZyBtYXNrIGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgdmlld0NvbnRhaW5lclJlZi5cbiAgICogUmVwbGFjZXMgdGhlIHRlbXBsYXRlUmVmIHdpdGggdGhlIG1hc2sgd2hlbiBhIHJlcXVlc3QgaXMgcmVnaXN0ZXJlZCBvbiBpdC5cbiAgICpcbiAgICogTk9URTogQGludGVybmFsIHVzYWdlIG9ubHkuXG4gICAqL1xuICBjcmVhdGVDb21wb25lbnQoXG4gICAgY29uZmlnOiBJVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sXG4gICAgY29udGV4dDogVGRMb2FkaW5nQ29udGV4dCxcbiAgKTogSUxvYWRpbmdSZWYge1xuICAgIGxldCBkaXJlY3RpdmVDb25maWc6IFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyA9IG5ldyBUZExvYWRpbmdEaXJlY3RpdmVDb25maWcoY29uZmlnKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0pIHtcbiAgICAgIHRocm93IEVycm9yKGBOYW1lIGR1cGxpY2F0aW9uOiBbVGRMb2FkaW5nXSBkaXJlY3RpdmUgaGFzIGEgbmFtZSBjb25mbGljdCB3aXRoICR7ZGlyZWN0aXZlQ29uZmlnLm5hbWV9LmApO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aXZlQ29uZmlnLnN0cmF0ZWd5ID09PSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheSkge1xuICAgICAgdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVPdmVybGF5Q29tcG9uZW50KFxuICAgICAgICBkaXJlY3RpdmVDb25maWcsXG4gICAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRlbXBsYXRlUmVmLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVSZXBsYWNlQ29tcG9uZW50KFxuICAgICAgICBkaXJlY3RpdmVDb25maWcsXG4gICAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRlbXBsYXRlUmVmLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElUZExvYWRpbmdDb25maWdcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bGxzY3JlZW4gbG9hZGluZyBtYXNrIGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgRE9NIHdpdGggdGhlIGdpdmVuIGNvbmZpZ3VyYXRpb24uXG4gICAqIE9ubHkgZGlzcGxheWVkIHdoZW4gdGhlIG1hc2sgaGFzIGEgcmVxdWVzdCByZWdpc3RlcmVkIG9uIGl0LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZShjb25maWc6IElUZExvYWRpbmdDb25maWcpOiB2b2lkIHtcbiAgICBsZXQgZnVsbHNjcmVlbkNvbmZpZzogVGRMb2FkaW5nQ29uZmlnID0gbmV3IFRkTG9hZGluZ0NvbmZpZyhjb25maWcpO1xuICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KGZ1bGxzY3JlZW5Db25maWcubmFtZSk7XG4gICAgdGhpcy5fY29udGV4dFtmdWxsc2NyZWVuQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlRnVsbFNjcmVlbkNvbXBvbmVudChmdWxsc2NyZWVuQ29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqXG4gICAqIFJlbW92ZXMgYGxvYWRpbmdgIGNvbXBvbmVudCBmcm9tIHNlcnZpY2UgY29udGV4dC5cbiAgICovXG4gIHB1YmxpYyByZW1vdmVDb21wb25lbnQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0uY29tcG9uZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHJlZ2lzdGVycz86IG51bWJlclxuICAgKiByZXR1cm5zOiB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogUmVzb2x2ZXMgYSByZXF1ZXN0IGZvciB0aGUgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKiBDYW4gb3B0aW9uYWxseSBwYXNzIHJlZ2lzdGVycyBhcmd1bWVudCB0byBzZXQgYSBudW1iZXIgb2YgcmVnaXN0ZXIgY2FsbHMuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZW1ldGVycyBhcmUgdXNlZCwgdGhlbiBkZWZhdWx0IG1haW4gbWFzayB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIGUuZy4gbG9hZGluZ1NlcnZpY2UucmVnaXN0ZXIoKVxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nLCByZWdpc3RlcnM6IG51bWJlciA9IDEpOiBib29sZWFuIHtcbiAgICAvLyB0cnkgcmVnaXN0ZXJpbmcgaW50byB0aGUgc2VydmljZSBpZiB0aGUgbG9hZGluZyBjb21wb25lbnQgaGFzIGJlZW4gaW5zdGFuY2lhdGVkIG9yIGlmIGl0IGV4aXN0cy5cbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgcmVnaXN0ZXJzID0gcmVnaXN0ZXJzIDwgMSA/IDEgOiByZWdpc3RlcnM7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzICs9IHJlZ2lzdGVycztcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC5uZXh0KHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGl0IGRvZXNudCBleGlzdCwgc2V0IGEgdGltZW91dCBzbyBpdHMgcmVnaXN0ZXJlZCBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcHBlbnNcbiAgICAgIC8vIHRoaXMgaW4gY2FzZSBcInJlZ2lzdGVyXCIgb2NjdXJlZCBvbiB0aGUgYG5nT25Jbml0YCBsaWZlaG9vayBjeWNsZS5cbiAgICAgIGlmICghdGhpcy5fdGltZW91dHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5fdGltZW91dHNbbmFtZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyKG5hbWUsIHJlZ2lzdGVycyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgaXQgdGltZW91dCBvY2N1cmVkIGFuZCBzdGlsbCBkb2VzbnQgZXhpc3QsIGl0IG1lYW5zIHRoZSB0aWVtb3V0IHdhc250IG5lZWRlZCBzbyB3ZSBjbGVhciBpdC5cbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHJlc29sdmVzPzogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhIHJlcXVlc3QgZm9yIHRoZSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIENhbiBvcHRpb25hbGx5IHBhc3MgcmVzb2x2ZXMgYXJndW1lbnQgdG8gc2V0IGEgbnVtYmVyIG9mIHJlc29sdmUgY2FsbHMuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZW1ldGVycyBhcmUgdXNlZCwgdGhlbiBkZWZhdWx0IG1haW4gbWFzayB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIGUuZy4gbG9hZGluZ1NlcnZpY2UucmVzb2x2ZSgpXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShuYW1lOiBzdHJpbmcgPSAndGQtbG9hZGluZy1tYWluJywgcmVzb2x2ZXM6IG51bWJlciA9IDEpOiBib29sZWFuIHtcbiAgICAvLyBjbGVhciB0aW1lb3V0IGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBpcyBcInJlc29sdmVkXCIgYmVmb3JlIGl0cyBcInJlZ2lzdGVyZWRcIlxuICAgIHRoaXMuX2NsZWFyVGltZW91dChuYW1lKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgcmVzb2x2ZXMgPSByZXNvbHZlcyA8IDEgPyAxIDogcmVzb2x2ZXM7XG4gICAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA+IDApIHtcbiAgICAgICAgbGV0IHRpbWVzOiBudW1iZXIgPSB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzO1xuICAgICAgICB0aW1lcyAtPSByZXNvbHZlcztcbiAgICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA9IHRpbWVzIDwgMCA/IDAgOiB0aW1lcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0uc3ViamVjdC5uZXh0KHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhbGwgcmVxdWVzdCBmb3IgdGhlIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZXNvbHZlQWxsKClcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlQWxsKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nKTogYm9vbGVhbiB7XG4gICAgLy8gY2xlYXIgdGltZW91dCBpZiB0aGUgbG9hZGluZyBjb21wb25lbnQgaXMgXCJyZXNvbHZlZFwiIGJlZm9yZSBpdHMgXCJyZWdpc3RlcmVkXCJcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQobmFtZSk7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbbmFtZV0pIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgPSAwO1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogLSB2YWx1ZTogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBTZXQgdmFsdWUgb24gYSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIFVzYWdlIG9ubHkgYXZhaWxhYmxlIGlmIGl0cyBtb2RlIGlzICdkZXRlcm1pbmF0ZScgYW5kIGlmIGxvYWRpbmcgaXMgc2hvd2luZy5cbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgbGV0IGluc3RhbmNlOiBUZExvYWRpbmdDb21wb25lbnQgPSB0aGlzLl9jb250ZXh0W25hbWVdLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgIGlmIChpbnN0YW5jZS5tb2RlID09PSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSAmJiBpbnN0YW5jZS5hbmltYXRpb24pIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGltZW91dCBsaW5rZWQgdG8gdGhlIG5hbWUuXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50IHRvIGJlIGNsZWFyZWRcbiAgICovXG4gIHByaXZhdGUgX2NsZWFyVGltZW91dChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dHNbbmFtZV0pO1xuICAgIGRlbGV0ZSB0aGlzLl90aW1lb3V0c1tuYW1lXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTE9BRElOR19QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVGRMb2FkaW5nU2VydmljZSwgbG9hZGluZ0ZhY3Rvcnk6IFRkTG9hZGluZ0ZhY3RvcnkpOiBUZExvYWRpbmdTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRMb2FkaW5nU2VydmljZShsb2FkaW5nRmFjdG9yeSk7XG59XG5cbmV4cG9ydCBjb25zdCBMT0FESU5HX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRMb2FkaW5nU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkTG9hZGluZ1NlcnZpY2VdLCBUZExvYWRpbmdGYWN0b3J5XSxcbiAgdXNlRmFjdG9yeTogTE9BRElOR19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==