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
        state.positionStrategy = this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVix3QkFBd0IsRUFHeEIsUUFBUSxFQUNSLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFFMUUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFHeEUsNkNBR0M7OztJQUZDLHlDQUFnQjs7SUFDaEIsd0NBQXFCOzs7OztBQUd2QixpQ0FLQzs7O0lBSkMsaUNBQTRCOztJQUM1QixtQ0FBZ0M7O0lBQ2hDLDhCQUF1Qjs7SUFDdkIsNEJBQWU7Ozs7O0FBTWpCO0lBRUUsMEJBQ1UseUJBQW1ELEVBQ25ELFFBQWlCLEVBQ2pCLFNBQW1CO1FBRm5CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQzFCLENBQUM7SUFFSjs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0ksb0RBQXlCOzs7Ozs7OztJQUFoQyxVQUFpQyxPQUF5QjtRQUExRCxpQkF1QkM7UUF0QkMsQ0FBQyxtQkFBeUIsT0FBTyxFQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FB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VTs7OztnQkFqQ1Qsd0JBQXdCO2dCQVNqQixPQUFPO2dCQUZQLFFBQVE7O0lBNE1qQix1QkFBQztDQUFBLEFBbExELElBa0xDO1NBakxZLGdCQUFnQjs7Ozs7O0lBRXpCLHFEQUEyRDs7Ozs7SUFDM0Qsb0NBQXlCOzs7OztJQUN6QixxQ0FBMkI7Ozs7Ozs7OztBQStLL0IsTUFBTSxVQUFVLGdDQUFnQyxDQUM5QyxNQUF3QixFQUN4Qix3QkFBa0QsRUFDbEQsT0FBZ0IsRUFDaEIsUUFBa0I7SUFFbEIsT0FBTyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDckYsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sd0JBQXdCLEdBQWE7O0lBRWhELE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3ZHLFVBQVUsRUFBRSxnQ0FBZ0M7Q0FDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBQcm92aWRlcixcbiAgU2tpcFNlbGYsXG4gIE9wdGlvbmFsLFxuICBFbWJlZGRlZFZpZXdSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsLCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdTdHlsZSB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElUZExvYWRpbmdDb25maWcgfSBmcm9tICcuL2xvYWRpbmcuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUludGVybmFsTG9hZGluZ09wdGlvbnMgZXh0ZW5kcyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzdHlsZT86IExvYWRpbmdTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9hZGluZ1JlZiB7XG4gIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgc3ViamVjdD86IFN1YmplY3Q8YW55PjtcbiAgdGltZXM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogTk9URTogQGludGVybmFsIHVzYWdlIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICkge31cblxuICAvKipcbiAgICogVXNlcyBtYXRlcmlhbCBgT3ZlcmxheWAgc2VydmljZXMgdG8gY3JlYXRlIGEgRE9NIGVsZW1lbnQgYW5kIGF0dGFjaCB0aGUgbG9hZGluZyBjb21wb25lbnRcbiAgICogaW50byBpdC4gTGV2ZXJhZ2luZyB0aGUgc3RhdGUgYW5kIGNvbmZpZ3VyYXRpb24gZnJvbSBpdC5cbiAgICpcbiAgICogU2F2ZXMgYSByZWZlcmVuY2UgaW4gY29udGV4dCB0byBiZSBjYWxsZWQgd2hlbiByZWdpc3RlcmluZy9yZXNvbHZpbmcgdGhlIGxvYWRpbmcgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVGdWxsU2NyZWVuQ29tcG9uZW50KG9wdGlvbnM6IElUZExvYWRpbmdDb25maWcpOiBJTG9hZGluZ1JlZiB7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5zdHlsZSA9IExvYWRpbmdTdHlsZS5GdWxsU2NyZWVuO1xuICAgIGNvbnN0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5faW5pdGlhbGl6ZUNvbnRleHQoKTtcbiAgICBsZXQgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChUZExvYWRpbmdDb21wb25lbnQpKTtcbiAgICAgICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnNob3coKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICBvdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9hZGluZyBjb21wb25lbnQgZHluYW1pY2FsbHkgYW5kIGF0dGFjaGVzIGl0IGludG8gdGhlIGdpdmVuIHZpZXdDb250YWluZXJSZWYuXG4gICAqIExldmVyYWdlcyBUZW1wbGF0ZVBvcnRhbHMgZnJvbSBtYXRlcmlhbCB0byBpbmplY3QgdGhlIHRlbXBsYXRlIGluc2lkZSBvZiBpdCBzbyBpdCBmaXRzXG4gICAqIHBlcmZlY3RseSB3aGVuIG92ZXJsYXlpbmcgaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlT3ZlcmxheUNvbXBvbmVudChcbiAgICBvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPG9iamVjdD4sXG4gICk6IElMb2FkaW5nUmVmIHtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gICAgY29uc3QgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZW50ID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnNob3coKTtcbiAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZCA8PSAwICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvYWRpbmcgY29tcG9uZW50IGR5bmFtaWNhbGx5IGFuZCBhdHRhY2hlcyBpdCBpbnRvIHRoZSBnaXZlbiB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBSZXBsYWNlcyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgbG9hZGluZyBjb21wb25lbnQgZGVwZW5kaW5nIGlmIGl0IHdhcyByZWdpc3RlcmVkIG9yIHJlc29sdmVkLlxuICAgKlxuICAgKiBTYXZlcyBhIHJlZmVyZW5jZSBpbiBjb250ZXh0IHRvIGJlIGNhbGxlZCB3aGVuIHJlZ2lzdGVyaW5nL3Jlc29sdmluZyB0aGUgbG9hZGluZyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlcGxhY2VDb21wb25lbnQoXG4gICAgb3B0aW9uczogSVRkTG9hZGluZ0NvbmZpZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxvYmplY3Q+LFxuICAgIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQsXG4gICk6IElMb2FkaW5nUmVmIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD50ZW1wbGF0ZVJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSBuYXRpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgPyBuYXRpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHRcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuTm9uZTtcbiAgICBjb25zdCBsb2FkaW5nUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2NyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgICBsZXQgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIHBhc3NpbmcgY29udGV4dCBzbyB3aGVuIHRoZSB0ZW1wbGF0ZSBpcyBhdHRhY2hlZCwgd2UgY2FuIGtlZXAgdGhlIHJlZmVyZW5jZSBvZiB0aGUgdmFyaWFibGVzXG4gICAgY29uc3QgY29udGVudFJlZjogRW1iZWRkZWRWaWV3UmVmPG9iamVjdD4gPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZiwgY29udGV4dCk7XG4gICAgbG9hZGluZ1JlZi5vYnNlcnZhYmxlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKChyZWdpc3RlcmVkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChyZWdpc3RlcmVkID4gMCAmJiAhbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gZGV0YWNoIHRoZSBjb250ZW50IGFuZCBhdHRhY2ggdGhlIGxvYWRlciBpZiBsb2FkZXIgaXMgdGhlcmVcbiAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmRldGFjaCh2aWV3Q29udGFpbmVyUmVmLmluZGV4T2YoY29udGVudFJlZikpO1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zaG93KCk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdGVyZWQgPD0gMCAmJiBsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgICAvLyBkZXRhY2ggbG9hZGVyIGFuZCBhdHRhY2ggdGhlIGNvbnRlbnQgaWYgY29udGVudCBpcyB0aGVyZVxuICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGNvbnRlbnRSZWYpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5kZXRhY2godmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3KSk7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQoY29udGVudFJlZiwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lZWQgdG8gY2FsbCBcIm1hcmtGb3JDaGVja1wiIGFuZCBcImRldGVjdENoYW5nZXNcIiBvbiBhdHRhY2hlZCB0ZW1wbGF0ZSwgc28gaXRzIGRldGVjdGVkIGJ5IHBhcmVudCBjb21wb25lbnQgd2hlbiBhdHRhY2hlZFxuICAgICAgICAgKiB3aXRoIFwiT25QdXNoXCIgY2hhbmdlIGRldGVjdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgY29udGVudFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGNvbnRlbnRSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bGxzY3JlZW4gb3ZlcmxheSBmb3IgdGhlIGxvYWRpbmcgdXNhZ2UuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xuICAgIGNvbnN0IHN0YXRlOiBPdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcbiAgICBzdGF0ZS5oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICAgIHN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmdsb2JhbCgpXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcbiAgICAgIC5jZW50ZXJWZXJ0aWNhbGx5KCk7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXkuY3JlYXRlKHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZ2VuZXJpYyBjb21wb25lbnQgZHluYW1pY2FsbHkgd2FpdGluZyB0byBiZSBhdHRhY2hlZCB0byBhIHZpZXdDb250YWluZXJSZWYuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVDb21wb25lbnQob3B0aW9uczogSUludGVybmFsTG9hZGluZ09wdGlvbnMpOiBJTG9hZGluZ1JlZiB7XG4gICAgY29uc3QgY29tcFJlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9pbml0aWFsaXplQ29udGV4dCgpO1xuICAgIGNvbXBSZWYuY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVGRMb2FkaW5nQ29tcG9uZW50KVxuICAgICAgLmNyZWF0ZSh0aGlzLl9pbmplY3Rvcik7XG4gICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBjb21wUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgcmV0dXJuIGNvbXBSZWY7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb250ZXh0IGZvciBsb2FkaW5nIGNvbXBvbmVudC5cbiAgICovXG4gIHByaXZhdGUgX2luaXRpYWxpemVDb250ZXh0KCk6IElMb2FkaW5nUmVmIHtcbiAgICBjb25zdCBzdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9ic2VydmFibGU6IHN1YmplY3QuYXNPYnNlcnZhYmxlKCksXG4gICAgICBzdWJqZWN0LFxuICAgICAgY29tcG9uZW50UmVmOiB1bmRlZmluZWQsXG4gICAgICB0aW1lczogMCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHMgY29uZmlndXJhdGlvbiB0byB0aGUgbG9hZGluZyBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIF9tYXBPcHRpb25zKG9wdGlvbnM6IElJbnRlcm5hbExvYWRpbmdPcHRpb25zLCBpbnN0YW5jZTogVGRMb2FkaW5nQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgIGlmIChvcHRpb25zLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5tb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLm1vZGUgPSBvcHRpb25zLm1vZGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExPQURJTkdfRkFDVE9SWV9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFRkTG9hZGluZ0ZhY3RvcnksXG4gIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBvdmVybGF5OiBPdmVybGF5LFxuICBpbmplY3RvcjogSW5qZWN0b3IsXG4pOiBUZExvYWRpbmdGYWN0b3J5IHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRMb2FkaW5nRmFjdG9yeShjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIG92ZXJsYXksIGluamVjdG9yKTtcbn1cblxuZXhwb3J0IGNvbnN0IExPQURJTkdfRkFDVE9SWV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkTG9hZGluZ0ZhY3RvcnksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZExvYWRpbmdGYWN0b3J5XSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdmVybGF5LCBJbmplY3Rvcl0sXG4gIHVzZUZhY3Rvcnk6IExPQURJTkdfRkFDVE9SWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==