/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, SkipSelf, Optional, } from '@angular/core';
import { Injector } from '@angular/core';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { TdLoadingComponent, LoadingStyle } from '../loading.component';
/**
 * @record
 */
export function IInternalLoadingOptions() { }
if (false) {
    /** @type {?|undefined} */
    IInternalLoadingOptions.prototype.height;
    /** @type {?|undefined} */
    IInternalLoadingOptions.prototype.style;
}
/**
 * @record
 */
export function ILoadingRef() { }
if (false) {
    /** @type {?} */
    ILoadingRef.prototype.observable;
    /** @type {?} */
    ILoadingRef.prototype.componentRef;
    /** @type {?|undefined} */
    ILoadingRef.prototype.subject;
    /** @type {?|undefined} */
    ILoadingRef.prototype.times;
}
/**
 * NOTE: \@internal usage only.
 */
var TdLoadingFactory = /** @class */ (function () {
    function TdLoadingFactory(_componentFactoryResolver, _overlay, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._overlay = _overlay;
        this._injector = _injector;
    }
    /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @return {?}
     */
    TdLoadingFactory.prototype.createFullScreenComponent = /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        ((/** @type {?} */ (options))).height = undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.FullScreen;
        /** @type {?} */
        var loadingRef = this._initializeContext();
        /** @type {?} */
        var loading = false;
        /** @type {?} */
        var overlayRef;
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} registered
         * @return {?}
         */
        function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                overlayRef = _this._createOverlay();
                loadingRef.componentRef = overlayRef.attach(new ComponentPortal(TdLoadingComponent));
                _this._mapOptions(options, loadingRef.componentRef.instance);
                loadingRef.componentRef.instance.show();
                loadingRef.componentRef.changeDetectorRef.detectChanges();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.hide();
                loadingRef.componentRef.destroy();
                overlayRef.detach();
                overlayRef.dispose();
            }
        }));
        return loadingRef;
    };
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @return {?}
     */
    TdLoadingFactory.prototype.createOverlayComponent = /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @return {?}
     */
    function (options, viewContainerRef, templateRef) {
        ((/** @type {?} */ (options))).height = undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.Overlay;
        /** @type {?} */
        var loadingRef = this._createComponent(options);
        /** @type {?} */
        var loading = false;
        loadingRef.componentRef.instance.content = new TemplatePortal(templateRef, viewContainerRef);
        viewContainerRef.clear();
        viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} registered
         * @return {?}
         */
        function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                loadingRef.componentRef.instance.show();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.hide();
            }
        }));
        return loadingRef;
    };
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    TdLoadingFactory.prototype.createReplaceComponent = /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    function (options, viewContainerRef, templateRef, context) {
        /** @type {?} */
        var nativeElement = (/** @type {?} */ (templateRef.elementRef.nativeElement));
        ((/** @type {?} */ (options))).height = nativeElement.nextElementSibling
            ? nativeElement.nextElementSibling.scrollHeight
            : undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.None;
        /** @type {?} */
        var loadingRef = this._createComponent(options);
        /** @type {?} */
        var loading = false;
        // passing context so when the template is attached, we can keep the reference of the variables
        /** @type {?} */
        var contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} registered
         * @return {?}
         */
        function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                // detach the content and attach the loader if loader is there
                /** @type {?} */
                var index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                if (index < 0) {
                    viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
                    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                }
                loadingRef.componentRef.instance.show();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.hide();
                // detach loader and attach the content if content is there
                /** @type {?} */
                var index = viewContainerRef.indexOf(contentRef);
                if (index < 0) {
                    viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                    viewContainerRef.insert(contentRef, 0);
                }
                /**
                 * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                 * with "OnPush" change detection
                 */
                contentRef.detectChanges();
                contentRef.markForCheck();
            }
        }));
        return loadingRef;
    };
    /**
     * Creates a fullscreen overlay for the loading usage.
     */
    /**
     * Creates a fullscreen overlay for the loading usage.
     * @private
     * @return {?}
     */
    TdLoadingFactory.prototype._createOverlay = /**
     * Creates a fullscreen overlay for the loading usage.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var state = new OverlayConfig();
        state.hasBackdrop = false;
        state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
        return this._overlay.create(state);
    };
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     */
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     * @private
     * @param {?} options
     * @return {?}
     */
    TdLoadingFactory.prototype._createComponent = /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var compRef = this._initializeContext();
        compRef.componentRef = this._componentFactoryResolver
            .resolveComponentFactory(TdLoadingComponent)
            .create(this._injector);
        this._mapOptions(options, compRef.componentRef.instance);
        return compRef;
    };
    /**
     * Initialize context for loading component.
     */
    /**
     * Initialize context for loading component.
     * @private
     * @return {?}
     */
    TdLoadingFactory.prototype._initializeContext = /**
     * Initialize context for loading component.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var subject = new Subject();
        return {
            observable: subject.asObservable(),
            subject: subject,
            componentRef: undefined,
            times: 0,
        };
    };
    /**
     * Maps configuration to the loading component instance.
     */
    /**
     * Maps configuration to the loading component instance.
     * @private
     * @param {?} options
     * @param {?} instance
     * @return {?}
     */
    TdLoadingFactory.prototype._mapOptions = /**
     * Maps configuration to the loading component instance.
     * @private
     * @param {?} options
     * @param {?} instance
     * @return {?}
     */
    function (options, instance) {
        instance.style = options.style;
        if (options.type !== undefined) {
            instance.type = options.type;
        }
        if (options.height !== undefined) {
            instance.height = options.height;
        }
        if (options.mode !== undefined) {
            instance.mode = options.mode;
        }
        if (options.color !== undefined) {
            instance.color = options.color;
        }
    };
    TdLoadingFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdLoadingFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Overlay },
        { type: Injector }
    ]; };
    return TdLoadingFactory;
}());
export { TdLoadingFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdLoadingFactory.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    TdLoadingFactory.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    TdLoadingFactory.prototype._injector;
}
/**
 * @param {?} parent
 * @param {?} componentFactoryResolver
 * @param {?} overlay
 * @param {?} injector
 * @return {?}
 */
export function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay, injector) {
    return parent || new TdLoadingFactory(componentFactoryResolver, overlay, injector);
}
/** @type {?} */
export var LOADING_FACTORY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingFactory,
    deps: [[new Optional(), new SkipSelf(), TdLoadingFactory], ComponentFactoryResolver, Overlay, Injector],
    useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVix3QkFBd0IsRUFHeEIsUUFBUSxFQUNSLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFFMUUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFHeEUsNkNBR0M7OztJQUZDLHlDQUFnQjs7SUFDaEIsd0NBQXFCOzs7OztBQUd2QixpQ0FLQzs7O0lBSkMsaUNBQTRCOztJQUM1QixtQ0FBZ0M7O0lBQ2hDLDhCQUF1Qjs7SUFDdkIsNEJBQWU7Ozs7O0FBTWpCO0lBRUUsMEJBQ1UseUJBQW1ELEVBQ25ELFFBQWlCLEVBQ2pCLFNBQW1CO1FBRm5CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQzFCLENBQUM7SUFFSjs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0ksb0RBQXlCOzs7Ozs7OztJQUFoQyxVQUFpQyxPQUF5QjtRQUExRCxpQkF1QkM7UUF0QkMsQ0FBQyxtQkFBeUIsT0FBTyxFQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FB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Ozs7Z0JBakNULHdCQUF3QjtnQkFTakIsT0FBTztnQkFGUCxRQUFROztJQXdNakIsdUJBQUM7Q0FBQSxBQTlLRCxJQThLQztTQTdLWSxnQkFBZ0I7Ozs7OztJQUV6QixxREFBMkQ7Ozs7O0lBQzNELG9DQUF5Qjs7Ozs7SUFDekIscUNBQTJCOzs7Ozs7Ozs7QUEySy9CLE1BQU0sVUFBVSxnQ0FBZ0MsQ0FDOUMsTUFBd0IsRUFDeEIsd0JBQWtELEVBQ2xELE9BQWdCLEVBQ2hCLFFBQWtCO0lBRWxCLE9BQU8sTUFBTSxJQUFJLElBQUksZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3JGLENBQUM7O0FBRUQsTUFBTSxLQUFPLHdCQUF3QixHQUFhOztJQUVoRCxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGdCQUFnQixDQUFDLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUN2RyxVQUFVLEVBQUUsZ0NBQWdDO0NBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgUHJvdmlkZXIsXG4gIFNraXBTZWxmLFxuICBPcHRpb25hbCxcbiAgRW1iZWRkZWRWaWV3UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdG9yLCBDb21wb25lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRMb2FkaW5nQ29udGV4dCB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRMb2FkaW5nQ29tcG9uZW50LCBMb2FkaW5nU3R5bGUgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGRMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9sb2FkaW5nLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbExvYWRpbmdPcHRpb25zIGV4dGVuZHMgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgc3R5bGU/OiBMb2FkaW5nU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvYWRpbmdSZWYge1xuICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHN1YmplY3Q/OiBTdWJqZWN0PGFueT47XG4gIHRpbWVzPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIE5PVEU6IEBpbnRlcm5hbCB1c2FnZSBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIFVzZXMgbWF0ZXJpYWwgYE92ZXJsYXlgIHNlcnZpY2VzIHRvIGNyZWF0ZSBhIERPTSBlbGVtZW50IGFuZCBhdHRhY2ggdGhlIGxvYWRpbmcgY29tcG9uZW50XG4gICAqIGludG8gaXQuIExldmVyYWdpbmcgdGhlIHN0YXRlIGFuZCBjb25maWd1cmF0aW9uIGZyb20gaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlRnVsbFNjcmVlbkNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnKTogSUxvYWRpbmdSZWYge1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgICBjb25zdCBsb2FkaW5nUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2luaXRpYWxpemVDb250ZXh0KCk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgICBsb2FkaW5nUmVmLm9ic2VydmFibGUucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoKHJlZ2lzdGVyZWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyZWQgPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBvdmVybGF5UmVmID0gdGhpcy5fY3JlYXRlT3ZlcmxheSgpO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoVGRMb2FkaW5nQ29tcG9uZW50KSk7XG4gICAgICAgIHRoaXMuX21hcE9wdGlvbnMob3B0aW9ucywgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zaG93KCk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZCA8PSAwICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oaWRlKCk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgICAgb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvYWRpbmcgY29tcG9uZW50IGR5bmFtaWNhbGx5IGFuZCBhdHRhY2hlcyBpdCBpbnRvIHRoZSBnaXZlbiB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBMZXZlcmFnZXMgVGVtcGxhdGVQb3J0YWxzIGZyb20gbWF0ZXJpYWwgdG8gaW5qZWN0IHRoZSB0ZW1wbGF0ZSBpbnNpZGUgb2YgaXQgc28gaXQgZml0c1xuICAgKiBwZXJmZWN0bHkgd2hlbiBvdmVybGF5aW5nIGl0LlxuICAgKlxuICAgKiBTYXZlcyBhIHJlZmVyZW5jZSBpbiBjb250ZXh0IHRvIGJlIGNhbGxlZCB3aGVuIHJlZ2lzdGVyaW5nL3Jlc29sdmluZyB0aGUgbG9hZGluZyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZU92ZXJsYXlDb21wb25lbnQoXG4gICAgb3B0aW9uczogSVRkTG9hZGluZ0NvbmZpZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxvYmplY3Q+LFxuICApOiBJTG9hZGluZ1JlZiB7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5zdHlsZSA9IExvYWRpbmdTdHlsZS5PdmVybGF5O1xuICAgIGNvbnN0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5fY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGVudCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICBsb2FkaW5nUmVmLm9ic2VydmFibGUucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoKHJlZ2lzdGVyZWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyZWQgPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zaG93KCk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdGVyZWQgPD0gMCAmJiBsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsb2FkaW5nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb2FkaW5nIGNvbXBvbmVudCBkeW5hbWljYWxseSBhbmQgYXR0YWNoZXMgaXQgaW50byB0aGUgZ2l2ZW4gdmlld0NvbnRhaW5lclJlZi5cbiAgICogUmVwbGFjZXMgdGhlIHRlbXBsYXRlIHdpdGggdGhlIGxvYWRpbmcgY29tcG9uZW50IGRlcGVuZGluZyBpZiBpdCB3YXMgcmVnaXN0ZXJlZCBvciByZXNvbHZlZC5cbiAgICpcbiAgICogU2F2ZXMgYSByZWZlcmVuY2UgaW4gY29udGV4dCB0byBiZSBjYWxsZWQgd2hlbiByZWdpc3RlcmluZy9yZXNvbHZpbmcgdGhlIGxvYWRpbmcgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVSZXBsYWNlQ29tcG9uZW50KFxuICAgIG9wdGlvbnM6IElUZExvYWRpbmdDb25maWcsXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8b2JqZWN0PixcbiAgICBjb250ZXh0OiBUZExvYWRpbmdDb250ZXh0LFxuICApOiBJTG9hZGluZ1JlZiB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGVtcGxhdGVSZWYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gbmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgID8gbmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0XG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk5vbmU7XG4gICAgY29uc3QgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBwYXNzaW5nIGNvbnRleHQgc28gd2hlbiB0aGUgdGVtcGxhdGUgaXMgYXR0YWNoZWQsIHdlIGNhbiBrZWVwIHRoZSByZWZlcmVuY2Ugb2YgdGhlIHZhcmlhYmxlc1xuICAgIGNvbnN0IGNvbnRlbnRSZWY6IEVtYmVkZGVkVmlld1JlZjxvYmplY3Q+ID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIC8vIGRldGFjaCB0aGUgY29udGVudCBhbmQgYXR0YWNoIHRoZSBsb2FkZXIgaWYgbG9hZGVyIGlzIHRoZXJlXG4gICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB2aWV3Q29udGFpbmVyUmVmLmluZGV4T2YobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5kZXRhY2godmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGNvbnRlbnRSZWYpKTtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmluc2VydChsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0VmlldywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgLy8gZGV0YWNoIGxvYWRlciBhbmQgYXR0YWNoIHRoZSBjb250ZW50IGlmIGNvbnRlbnQgaXMgdGhlcmVcbiAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihjb250ZW50UmVmKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuZGV0YWNoKHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0VmlldykpO1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGNvbnRlbnRSZWYsIDApO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOZWVkIHRvIGNhbGwgXCJtYXJrRm9yQ2hlY2tcIiBhbmQgXCJkZXRlY3RDaGFuZ2VzXCIgb24gYXR0YWNoZWQgdGVtcGxhdGUsIHNvIGl0cyBkZXRlY3RlZCBieSBwYXJlbnQgY29tcG9uZW50IHdoZW4gYXR0YWNoZWRcbiAgICAgICAgICogd2l0aCBcIk9uUHVzaFwiIGNoYW5nZSBkZXRlY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIGNvbnRlbnRSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBjb250ZW50UmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsb2FkaW5nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmdWxsc2NyZWVuIG92ZXJsYXkgZm9yIHRoZSBsb2FkaW5nIHVzYWdlLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBjb25zdCBzdGF0ZTogT3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKCk7XG4gICAgc3RhdGUuaGFzQmFja2Ryb3AgPSBmYWxzZTtcbiAgICBzdGF0ZS5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLmNlbnRlckhvcml6b250YWxseSgpLmNlbnRlclZlcnRpY2FsbHkoKTtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5jcmVhdGUoc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBnZW5lcmljIGNvbXBvbmVudCBkeW5hbWljYWxseSB3YWl0aW5nIHRvIGJlIGF0dGFjaGVkIHRvIGEgdmlld0NvbnRhaW5lclJlZi5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZUNvbXBvbmVudChvcHRpb25zOiBJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucyk6IElMb2FkaW5nUmVmIHtcbiAgICBjb25zdCBjb21wUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2luaXRpYWxpemVDb250ZXh0KCk7XG4gICAgY29tcFJlZi5jb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUZExvYWRpbmdDb21wb25lbnQpXG4gICAgICAuY3JlYXRlKHRoaXMuX2luamVjdG9yKTtcbiAgICB0aGlzLl9tYXBPcHRpb25zKG9wdGlvbnMsIGNvbXBSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICByZXR1cm4gY29tcFJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbnRleHQgZm9yIGxvYWRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUNvbnRleHQoKTogSUxvYWRpbmdSZWYge1xuICAgIGNvbnN0IHN1YmplY3Q6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICByZXR1cm4ge1xuICAgICAgb2JzZXJ2YWJsZTogc3ViamVjdC5hc09ic2VydmFibGUoKSxcbiAgICAgIHN1YmplY3QsXG4gICAgICBjb21wb25lbnRSZWY6IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVzOiAwLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFwcyBjb25maWd1cmF0aW9uIHRvIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICovXG4gIHByaXZhdGUgX21hcE9wdGlvbnMob3B0aW9uczogSUludGVybmFsTG9hZGluZ09wdGlvbnMsIGluc3RhbmNlOiBUZExvYWRpbmdDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgaWYgKG9wdGlvbnMudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UubW9kZSA9IG9wdGlvbnMubW9kZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTE9BRElOR19GQUNUT1JZX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVGRMb2FkaW5nRmFjdG9yeSxcbiAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIG92ZXJsYXk6IE92ZXJsYXksXG4gIGluamVjdG9yOiBJbmplY3Rvcixcbik6IFRkTG9hZGluZ0ZhY3Rvcnkge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZExvYWRpbmdGYWN0b3J5KGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgb3ZlcmxheSwgaW5qZWN0b3IpO1xufVxuXG5leHBvcnQgY29uc3QgTE9BRElOR19GQUNUT1JZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRMb2FkaW5nRmFjdG9yeSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkTG9hZGluZ0ZhY3RvcnldLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE92ZXJsYXksIEluamVjdG9yXSxcbiAgdXNlRmFjdG9yeTogTE9BRElOR19GQUNUT1JZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19