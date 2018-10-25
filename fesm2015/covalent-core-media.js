import { Injectable, NgZone, SkipSelf, Optional, Directive, ElementRef, Input, Renderer2, NgModule } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdMediaService {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._resizing = false;
        this._queryMap = new Map();
        this._querySources = {};
        this._queryObservables = {};
        this._queryMap.set('xs', '(max-width: 599px)');
        this._queryMap.set('gt-xs', '(min-width: 600px)');
        this._queryMap.set('sm', '(min-width: 600px) and (max-width: 959px)');
        this._queryMap.set('gt-sm', '(min-width: 960px)');
        this._queryMap.set('md', '(min-width: 960px) and (max-width: 1279px)');
        this._queryMap.set('gt-md', '(min-width: 1280px)');
        this._queryMap.set('lg', '(min-width: 1280px) and (max-width: 1919px)');
        this._queryMap.set('gt-lg', '(min-width: 1920px)');
        this._queryMap.set('xl', '(min-width: 1920px)');
        this._queryMap.set('landscape', '(orientation: landscape)');
        this._queryMap.set('portrait', '(orientation: portrait)');
        this._queryMap.set('print', 'print');
        this._resizing = false;
        // we make sure that the resize checking happend outside of Angular since it happens often
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
            return fromEvent(window, 'resize').subscribe(() => {
                // way to prevent the resize event from triggering the match media if there is already one event running already.
                if (!this._resizing) {
                    this._resizing = true;
                    setTimeout(() => {
                        this._onResize();
                        this._resizing = false;
                    }, 100);
                }
            });
        });
    }
    /**
     * Deregisters a query so its stops being notified or used.
     * @param {?} query
     * @return {?}
     */
    deregisterQuery(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        this._querySources[query].unsubscribe();
        delete this._querySources[query];
        delete this._queryObservables[query];
    }
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     * @param {?} query
     * @return {?}
     */
    query(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        return this._ngZone.run(() => {
            return matchMedia(query).matches;
        });
    }
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     * @param {?} query
     * @return {?}
     */
    registerQuery(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        if (!this._querySources[query]) {
            this._querySources[query] = new BehaviorSubject(matchMedia(query).matches);
            this._queryObservables[query] = this._querySources[query].asObservable();
        }
        return this._queryObservables[query];
    }
    /**
     * Trigger a match media event on all subscribed observables.
     * @return {?}
     */
    broadcast() {
        this._onResize();
    }
    /**
     * @return {?}
     */
    _onResize() {
        for (let query in this._querySources) {
            this._ngZone.run(() => {
                this._matchMediaTrigger(query);
            });
        }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    _matchMediaTrigger(query) {
        this._querySources[query].next(matchMedia(query).matches);
    }
}
TdMediaService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TdMediaService.ctorParameters = () => [
    { type: NgZone }
];
/**
 * @param {?} parent
 * @param {?} ngZone
 * @return {?}
 */
function MEDIA_PROVIDER_FACTORY(parent, ngZone) {
    return parent || new TdMediaService(ngZone);
}
/** @type {?} */
const MEDIA_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdMediaService,
    deps: [[new Optional(), new SkipSelf(), TdMediaService], NgZone],
    useFactory: MEDIA_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdMediaToggleDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _mediaService
     */
    constructor(_renderer, _elementRef, _mediaService) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._mediaService = _mediaService;
        this._matches = false;
        this._attributes = {};
        this._styles = {};
        this._classes = [];
    }
    /**
     * tdMediaToggle: string
     * Media query used to evaluate screen/window size.
     * Toggles attributes, classes and styles if media query is matched.
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        if (!query) {
            throw new Error('Query needed for [tdMediaToggle] directive.');
        }
        this._query = query;
    }
    /**
     * mediaAttributes: {[key: string]: string}
     * Attributes to be toggled when media query matches.
     * @param {?} attributes
     * @return {?}
     */
    set attributes(attributes) {
        this._attributes = attributes;
    }
    /**
     * mediaClasses: string[]
     * CSS Classes to be toggled when media query matches.
     * @param {?} classes
     * @return {?}
     */
    set classes(classes) {
        this._classes = classes;
    }
    /**
     * mediaStyles: {[key: string]: string}
     * CSS Styles to be toggled when media query matches.
     * @param {?} styles
     * @return {?}
     */
    set styles(styles) {
        this._styles = styles;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe((matches) => {
            this._mediaChange(matches);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    _mediaChange(matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    }
    /**
     * @return {?}
     */
    _changeAttributes() {
        for (let attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    }
    /**
     * @return {?}
     */
    _changeClasses() {
        this._classes.forEach((className) => {
            if (this._matches) {
                this._renderer.addClass(this._elementRef.nativeElement, className);
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, className);
            }
        });
    }
    /**
     * @return {?}
     */
    _changeStyles() {
        for (let style in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style);
            }
        }
    }
}
TdMediaToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdMediaToggle]',
            },] }
];
/** @nocollapse */
TdMediaToggleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: TdMediaService }
];
TdMediaToggleDirective.propDecorators = {
    query: [{ type: Input, args: ['tdMediaToggle',] }],
    attributes: [{ type: Input, args: ['mediaAttributes',] }],
    classes: [{ type: Input, args: ['mediaClasses',] }],
    styles: [{ type: Input, args: ['mediaStyles',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_MEDIA = [
    TdMediaToggleDirective,
];
class CovalentMediaModule {
}
CovalentMediaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TD_MEDIA,
                ],
                exports: [
                    TD_MEDIA,
                ],
                providers: [
                    MEDIA_PROVIDER,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentMediaModule, TdMediaToggleDirective, MEDIA_PROVIDER_FACTORY, TdMediaService, MEDIA_PROVIDER };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1tZWRpYS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvbWVkaWEvc2VydmljZXMvbWVkaWEuc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbWVkaWEvZGlyZWN0aXZlcy9tZWRpYS10b2dnbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9tZWRpYS9tZWRpYS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBTa2lwU2VsZiwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZE1lZGlhU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZ2xvYmFsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3F1ZXJ5TWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfcXVlcnlTb3VyY2VzOiB7IFtrZXk6IHN0cmluZ106IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPn0gPSB7fTtcbiAgcHJpdmF0ZSBfcXVlcnlPYnNlcnZhYmxlczoge1trZXk6IHN0cmluZ106IE9ic2VydmFibGU8Ym9vbGVhbj59ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3hzJywgJyhtYXgtd2lkdGg6IDU5OXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3QteHMnLCAnKG1pbi13aWR0aDogNjAwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdzbScsICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3Qtc20nLCAnKG1pbi13aWR0aDogOTYwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdtZCcsICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LW1kJywgJyhtaW4td2lkdGg6IDEyODBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2xnJywgJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LWxnJywgJyhtaW4td2lkdGg6IDE5MjBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3hsJywgJyhtaW4td2lkdGg6IDE5MjBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2xhbmRzY2FwZScsICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3BvcnRyYWl0JywgJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdwcmludCcsICdwcmludCcpO1xuXG4gICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAvLyB3ZSBtYWtlIHN1cmUgdGhhdCB0aGUgcmVzaXplIGNoZWNraW5nIGhhcHBlbmQgb3V0c2lkZSBvZiBBbmd1bGFyIHNpbmNlIGl0IGhhcHBlbnMgb2Z0ZW5cbiAgICB0aGlzLl9nbG9iYWxTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB3YXkgdG8gcHJldmVudCB0aGUgcmVzaXplIGV2ZW50IGZyb20gdHJpZ2dlcmluZyB0aGUgbWF0Y2ggbWVkaWEgaWYgdGhlcmUgaXMgYWxyZWFkeSBvbmUgZXZlbnQgcnVubmluZyBhbHJlYWR5LlxuICAgICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25SZXNpemUoKTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYSBxdWVyeSBzbyBpdHMgc3RvcHMgYmVpbmcgbm90aWZpZWQgb3IgdXNlZC5cbiAgICovXG4gIGRlcmVnaXN0ZXJRdWVyeShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0udW5zdWJzY3JpYmUoKTtcbiAgICBkZWxldGUgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XTtcbiAgICBkZWxldGUgdGhpcy5fcXVlcnlPYnNlcnZhYmxlc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBldmFsdWF0ZSB3aGV0aGVyIGEgZ2l2ZW4gbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZSBnaXZlbiB0aGUgY3VycmVudCBkZXZpY2UncyBzY3JlZW4gLyB3aW5kb3cgc2l6ZS5cbiAgICovXG4gIHB1YmxpYyBxdWVyeShxdWVyeTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHJldHVybiBtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIG1lZGlhIHF1ZXJ5IGFuZCByZXR1cm5zIGFuIFtPYnNlcnZhYmxlXSB0aGF0IHdpbGwgcmUtZXZhbHVhdGUgYW5kXG4gICAqIHJldHVybiBpZiB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcyBvbiB3aW5kb3cgcmVzaXplLlxuICAgKiBOb3RlOiBkb24ndCBmb3JnZXQgdG8gdW5zdWJzY3JpYmUgZnJvbSBbT2JzZXJ2YWJsZV0gd2hlbiBmaW5pc2hlZCB3YXRjaGluZy5cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlclF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAodGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldKSB7XG4gICAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKTtcbiAgICAgIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldID0gdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XS5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBtYXRjaCBtZWRpYSBldmVudCBvbiBhbGwgc3Vic2NyaWJlZCBvYnNlcnZhYmxlcy5cbiAgICovXG4gIHB1YmxpYyBicm9hZGNhc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fb25SZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVzaXplKCk6IHZvaWQge1xuICAgIGZvciAobGV0IHF1ZXJ5IGluIHRoaXMuX3F1ZXJ5U291cmNlcykge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuX21hdGNoTWVkaWFUcmlnZ2VyKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hdGNoTWVkaWFUcmlnZ2VyKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldLm5leHQobWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1FRElBX1BST1ZJREVSX0ZBQ1RPUlkoXG4gICAgcGFyZW50OiBUZE1lZGlhU2VydmljZSwgbmdab25lOiBOZ1pvbmUpOiBUZE1lZGlhU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkTWVkaWFTZXJ2aWNlKG5nWm9uZSk7XG59XG5cbmV4cG9ydCBjb25zdCBNRURJQV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkTWVkaWFTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGRNZWRpYVNlcnZpY2VdLCBOZ1pvbmVdLFxuICB1c2VGYWN0b3J5OiBNRURJQV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZE1lZGlhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lZGlhLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRNZWRpYVRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lZGlhVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX3F1ZXJ5OiBzdHJpbmc7XG4gIHByaXZhdGUgX21hdGNoZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgcHJpdmF0ZSBfc3R5bGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICBwcml2YXRlIF9jbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiB0ZE1lZGlhVG9nZ2xlOiBzdHJpbmdcbiAgICogTWVkaWEgcXVlcnkgdXNlZCB0byBldmFsdWF0ZSBzY3JlZW4vd2luZG93IHNpemUuXG4gICAqIFRvZ2dsZXMgYXR0cmlidXRlcywgY2xhc3NlcyBhbmQgc3R5bGVzIGlmIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWQuXG4gICAqL1xuICBASW5wdXQoJ3RkTWVkaWFUb2dnbGUnKVxuICBzZXQgcXVlcnkocXVlcnk6IHN0cmluZykge1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVlcnkgbmVlZGVkIGZvciBbdGRNZWRpYVRvZ2dsZV0gZGlyZWN0aXZlLicpO1xuICAgIH1cbiAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhQXR0cmlidXRlczoge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiAgICogQXR0cmlidXRlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFBdHRyaWJ1dGVzJylcbiAgc2V0IGF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFDbGFzc2VzOiBzdHJpbmdbXVxuICAgKiBDU1MgQ2xhc3NlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFDbGFzc2VzJylcbiAgc2V0IGNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYVN0eWxlczoge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiAgICogQ1NTIFN0eWxlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFTdHlsZXMnKVxuICBzZXQgc3R5bGVzKHN0eWxlczogYW55KSB7XG4gICAgdGhpcy5fc3R5bGVzID0gc3R5bGVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbWVkaWFTZXJ2aWNlOiBUZE1lZGlhU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVkaWFDaGFuZ2UodGhpcy5fbWVkaWFTZXJ2aWNlLnF1ZXJ5KHRoaXMuX3F1ZXJ5KSk7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fbWVkaWFTZXJ2aWNlLnJlZ2lzdGVyUXVlcnkodGhpcy5fcXVlcnkpLnN1YnNjcmliZSgobWF0Y2hlczogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5fbWVkaWFDaGFuZ2UobWF0Y2hlcyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tZWRpYUNoYW5nZShtYXRjaGVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fbWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgdGhpcy5fY2hhbmdlQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX2NoYW5nZUNsYXNzZXMoKTtcbiAgICB0aGlzLl9jaGFuZ2VTdHlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZUF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiB0aGlzLl9hdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAodGhpcy5fbWF0Y2hlcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyLCB0aGlzLl9hdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGF0dHIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlU3R5bGVzKCk6IHZvaWQge1xuICAgIGZvciAobGV0IHN0eWxlIGluIHRoaXMuX3N0eWxlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdHlsZSwgdGhpcy5fc3R5bGVzW3N0eWxlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTUVESUFfUFJPVklERVIgfSBmcm9tICcuL3NlcnZpY2VzL21lZGlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRNZWRpYVRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tZWRpYS10b2dnbGUuZGlyZWN0aXZlJztcblxuY29uc3QgVERfTUVESUE6IFR5cGU8YW55PltdID0gW1xuICBUZE1lZGlhVG9nZ2xlRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfTUVESUEsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9NRURJQSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTUVESUFfUFJPVklERVIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TWVkaWFNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUlhLGNBQWM7Ozs7SUFRekIsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFOM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixjQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzNELGtCQUFhLEdBQStDLEVBQUUsQ0FBQztRQUMvRCxzQkFBaUIsR0FBeUMsRUFBRSxDQUFDO1FBR25FLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7UUFFdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDeEQsT0FBTyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs7Z0JBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsVUFBVSxDQUFDO3dCQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7cUJBQ3hCLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ1Q7YUFDRixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBS0QsZUFBZSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUMzQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0Qzs7Ozs7O0lBS00sS0FBSyxDQUFDLEtBQWE7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUMzQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3RCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNsQyxDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7SUFPTSxhQUFhLENBQUMsS0FBYTtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO1lBQzNDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQVUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7O0lBS00sU0FBUztRQUNkLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVPLFNBQVM7UUFDZixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDM0Q7OztZQWhHRixVQUFVOzs7O1lBSFUsTUFBTTs7Ozs7OztBQXNHM0IsU0FBZ0Isc0JBQXNCLENBQ2xDLE1BQXNCLEVBQUUsTUFBYztJQUN4QyxPQUFPLE1BQU0sSUFBSSxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUM3Qzs7QUFFRCxNQUFhLGNBQWMsR0FBYTs7SUFFdEMsT0FBTyxFQUFFLGNBQWM7SUFDdkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsY0FBYyxDQUFDLEVBQUUsTUFBTSxDQUFDO0lBQ2hFLFVBQVUsRUFBRSxzQkFBc0I7Q0FDbkM7Ozs7OztBQ2hIRCxNQVNhLHNCQUFzQjs7Ozs7O0lBa0RqQyxZQUFvQixTQUFvQixFQUFVLFdBQXVCLEVBQVUsYUFBNkI7UUFBNUYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBN0N4RyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQTRCLEVBQUUsQ0FBQztRQUMxQyxZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQWEsRUFBRSxDQUFDO0tBMENxRjs7Ozs7Ozs7SUFuQ3JILElBQ0ksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCOzs7Ozs7O0lBTUQsSUFDSSxVQUFVLENBQUMsVUFBZTtRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztLQUMvQjs7Ozs7OztJQU1ELElBQ0ksT0FBTyxDQUFDLE9BQWlCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0tBQ3pCOzs7Ozs7O0lBTUQsSUFDSSxNQUFNLENBQUMsTUFBVztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUN2Qjs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQWdCO1lBQzVGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEM7S0FDRjs7Ozs7SUFFTyxZQUFZLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVPLGlCQUFpQjtRQUN2QixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3RFO1NBQ0Y7S0FDRjs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFpQjtZQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3BFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3ZFO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFTyxhQUFhO1FBQ25CLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDckY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkU7U0FDRjtLQUNGOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFQUSxTQUFTO1lBREUsVUFBVTtZQUlyQixjQUFjOzs7b0JBb0JwQixLQUFLLFNBQUMsZUFBZTt5QkFZckIsS0FBSyxTQUFDLGlCQUFpQjtzQkFTdkIsS0FBSyxTQUFDLGNBQWM7cUJBU3BCLEtBQUssU0FBQyxhQUFhOzs7Ozs7O0FDckR0QjtNQU9NLFFBQVEsR0FBZ0I7SUFDNUIsc0JBQXNCO0NBQ3ZCO0FBZ0JELE1BQWEsbUJBQW1COzs7WUFkL0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixRQUFRO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxRQUFRO2lCQUNUO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxjQUFjO2lCQUNmO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9