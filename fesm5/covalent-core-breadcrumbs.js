import { Component, ElementRef, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, Input, NgModule } from '@angular/core';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdBreadcrumbComponent = /** @class */ (function () {
    function TdBreadcrumbComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._displayCrumb = true;
        this._width = 0;
        // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
        this.separatorIcon = 'chevron_right';
        // Should show the right chevron or not before the label
        this._displayIcon = true;
    }
    Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayCrumb;
        },
        /**
         * Whether to display the crumb or not
         */
        set: /**
         * Whether to display the crumb or not
         * @param {?} shouldDisplay
         * @return {?}
         */
        function (shouldDisplay) {
            this._displayCrumb = shouldDisplay;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbComponent.prototype, "width", {
        /**
         * Width of the DOM element of the crumb
         */
        get: /**
         * Width of the DOM element of the crumb
         * @return {?}
         */
        function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbComponent.prototype, "displayBinding", {
        /**
         * Gets the display style of the crumb
         */
        get: /**
         * Gets the display style of the crumb
         * @return {?}
         */
        function () {
            // Set the display to none on the component, just in case the end user is hiding
            // and showing them instead of the component doing itself for reasons like responsive
            return this._displayCrumb ? undefined : 'none';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdBreadcrumbComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // set the width from the actual rendered DOM element
        setTimeout(function () {
            _this._width = ((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width;
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * Stop click propagation when clicking on icon
     */
    /**
     * Stop click propagation when clicking on icon
     * @param {?} event
     * @return {?}
     */
    TdBreadcrumbComponent.prototype._handleIconClick = /**
     * Stop click propagation when clicking on icon
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    TdBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-breadcrumb, a[td-breadcrumb]',
                    template: "<ng-content></ng-content>\n<mat-icon *ngIf=\"_displayIcon\"\n          class=\"td-breadcrumb-separator-icon\"\n          [style.cursor]=\"'default'\"\n          (click)=\"_handleIconClick($event)\">\n  {{separatorIcon}}\n</mat-icon>\n",
                    /* tslint:disable-next-line */
                    host: {
                        class: 'mat-button td-breadcrumb',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host.td-breadcrumb{display:inline-block;box-sizing:border-box;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host.td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
                }] }
    ];
    /** @nocollapse */
    TdBreadcrumbComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TdBreadcrumbComponent.propDecorators = {
        displayBinding: [{ type: HostBinding, args: ['style.display',] }]
    };
    return TdBreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdBreadcrumbsComponent = /** @class */ (function () {
    function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = Subscription.EMPTY;
        this._widthSubject = new Subject();
        this._resizing = false;
        // the list of hidden breadcrumbs not shown right now (responsive)
        this.hiddenBreadcrumbs = [];
        /**
         * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
         */
        this.separatorIcon = 'chevron_right';
    }
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe(function () {
            if (!_this._resizing) {
                _this._resizing = true;
                setTimeout(function () {
                    _this._calculateVisibility();
                    _this._resizing = false;
                    _this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.setCrumbIcons();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._resizeSubscription.unsubscribe();
    };
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
        /*
        * Current width of the element container
        */
        get: /*
          * Current width of the element container
          */
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = ((/** @type {?} */ (this._elementRef.nativeElement)));
            // Need to take into account border, margin and padding that might be around all the crumbs
            /** @type {?} */
            var style = window.getComputedStyle(element);
            /** @type {?} */
            var borderLeft = parseInt(style.borderLeft, 10);
            /** @type {?} */
            var borderRight = parseInt(style.borderRight, 10);
            /** @type {?} */
            var marginLeft = parseInt(style.marginLeft, 10);
            /** @type {?} */
            var marginRight = parseInt(style.marginRight, 10);
            /** @type {?} */
            var paddingLeft = parseInt(style.paddingLeft, 10);
            /** @type {?} */
            var paddingRight = parseInt(style.paddingRight, 10);
            return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
        /**
         * The total count of individual breadcrumbs
         */
        get: /**
         * The total count of individual breadcrumbs
         * @return {?}
         */
        function () {
            return this._breadcrumbs ? this._breadcrumbs.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the crumb icon separators
     */
    /**
     * Set the crumb icon separators
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
     * Set the crumb icon separators
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var breadcrumbArray = this._breadcrumbs.toArray();
        if (breadcrumbArray.length > 0) {
            // don't show the icon on the last breadcrumb
            breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
        }
        breadcrumbArray.forEach(function (breadcrumb) {
            breadcrumb.separatorIcon = _this.separatorIcon;
        });
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype._calculateVisibility = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var crumbsArray = this._breadcrumbs.toArray();
        /** @type {?} */
        var crumbWidthSum = 0;
        /** @type {?} */
        var hiddenCrumbs = [];
        // loop through crumbs in reverse order to calculate which ones should be removed
        for (var i = crumbsArray.length - 1; i >= 0; i--) {
            /** @type {?} */
            var breadcrumb = crumbsArray[i];
            // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
            // and hide it
            if ((crumbWidthSum + breadcrumb.width) > this.nativeElementWidth) {
                breadcrumb.displayCrumb = false;
                hiddenCrumbs.push(breadcrumb);
            }
            else {
                // else we show it
                breadcrumb.displayCrumb = true;
            }
            crumbWidthSum += breadcrumb.width;
        }
        this.hiddenBreadcrumbs = hiddenCrumbs;
        this._changeDetectorRef.markForCheck();
    };
    TdBreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-breadcrumbs',
                    template: "<ng-content></ng-content>\n",
                    /* tslint:disable-next-line */
                    host: {
                        class: 'td-breadcrumbs',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;width:100%}:host.td-breadcrumbs{white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    TdBreadcrumbsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TdBreadcrumbsComponent.propDecorators = {
        _breadcrumbs: [{ type: ContentChildren, args: [TdBreadcrumbComponent,] }],
        separatorIcon: [{ type: Input, args: ['separatorIcon',] }]
    };
    return TdBreadcrumbsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CovalentBreadcrumbsModule = /** @class */ (function () {
    function CovalentBreadcrumbsModule() {
    }
    CovalentBreadcrumbsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                    ],
                    declarations: [
                        TdBreadcrumbsComponent,
                        TdBreadcrumbComponent,
                    ],
                    exports: [
                        TdBreadcrumbsComponent,
                        TdBreadcrumbComponent,
                    ],
                },] }
    ];
    return CovalentBreadcrumbsModule;
}());

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

export { CovalentBreadcrumbsModule, TdBreadcrumbsComponent, TdBreadcrumbComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1icmVhZGNydW1icy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9icmVhZGNydW1icy9icmVhZGNydW1icy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYiwgYVt0ZC1icmVhZGNydW1iXScsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbWF0LWJ1dHRvbiB0ZC1icmVhZGNydW1iJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgX2Rpc3BsYXlDcnVtYjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xuICAvLyBTZXRzIHRoZSBpY29uIHVybCBzaG93biBiZXR3ZWVuIGJyZWFkY3J1bWJzLiBEZWZhdWx0cyB0byAnY2hldnJvbl9yaWdodCdcbiAgc2VwYXJhdG9ySWNvbjogc3RyaW5nID0gJ2NoZXZyb25fcmlnaHQnO1xuICAvLyBTaG91bGQgc2hvdyB0aGUgcmlnaHQgY2hldnJvbiBvciBub3QgYmVmb3JlIHRoZSBsYWJlbFxuICBfZGlzcGxheUljb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGdldCBkaXNwbGF5Q3J1bWIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlDcnVtYjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNydW1iIG9yIG5vdFxuICAgKi9cbiAgc2V0IGRpc3BsYXlDcnVtYihzaG91bGREaXNwbGF5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheUNydW1iID0gc2hvdWxkRGlzcGxheTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgRE9NIGVsZW1lbnQgb2YgdGhlIGNydW1iXG4gICAqL1xuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZGlzcGxheSBzdHlsZSBvZiB0aGUgY3J1bWJcbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBkaXNwbGF5QmluZGluZygpOiBzdHJpbmcge1xuICAgIC8vIFNldCB0aGUgZGlzcGxheSB0byBub25lIG9uIHRoZSBjb21wb25lbnQsIGp1c3QgaW4gY2FzZSB0aGUgZW5kIHVzZXIgaXMgaGlkaW5nXG4gICAgLy8gYW5kIHNob3dpbmcgdGhlbSBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQgZG9pbmcgaXRzZWxmIGZvciByZWFzb25zIGxpa2UgcmVzcG9uc2l2ZVxuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5Q3J1bWIgPyB1bmRlZmluZWQgOiAnbm9uZSc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fd2lkdGggPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGNsaWNrIHByb3BhZ2F0aW9uIHdoZW4gY2xpY2tpbmcgb24gaWNvblxuICAgKi9cbiAgX2hhbmRsZUljb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRG9DaGVjayxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgU3Vic2NyaXB0aW9uLFxuICBTdWJqZWN0LFxuICBmcm9tRXZlbnQsXG4gIG1lcmdlLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYnMnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtYnJlYWRjcnVtYnMnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRCcmVhZGNydW1iQ29tcG9uZW50KSBfYnJlYWRjcnVtYnM6IFF1ZXJ5TGlzdDxUZEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gYnJlYWRjcnVtYnMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuQnJlYWRjcnVtYnM6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGljb24gdXJsIHNob3duIGJldHdlZW4gYnJlYWRjcnVtYnMuIERlZmF1bHRzIHRvICdjaGV2cm9uX3JpZ2h0Jy5cbiAgICovXG4gIEBJbnB1dCgnc2VwYXJhdG9ySWNvbicpIHNlcGFyYXRvckljb246IHN0cmluZyA9ICdjaGV2cm9uX3JpZ2h0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDcnVtYkljb25zKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qXG4gICogQ3VycmVudCB3aWR0aCBvZiB0aGUgZWxlbWVudCBjb250YWluZXJcbiAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyBOZWVkIHRvIHRha2UgaW50byBhY2NvdW50IGJvcmRlciwgbWFyZ2luIGFuZCBwYWRkaW5nIHRoYXQgbWlnaHQgYmUgYXJvdW5kIGFsbCB0aGUgY3J1bWJzXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgbGV0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBsZXQgYm9yZGVyUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0LCAxMCk7XG4gICAgbGV0IG1hcmdpbkxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBsZXQgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApO1xuICAgIGxldCBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdSaWdodCwgMTApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBib3JkZXJMZWZ0IC0gYm9yZGVyUmlnaHQgLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQgLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG90YWwgY291bnQgb2YgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICAgKi9cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JyZWFkY3J1bWJzID8gdGhpcy5fYnJlYWRjcnVtYnMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNydW1iIGljb24gc2VwYXJhdG9yc1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRDcnVtYkljb25zKCk6IHZvaWQge1xuICAgIGxldCBicmVhZGNydW1iQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgIGlmIChicmVhZGNydW1iQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgaWNvbiBvbiB0aGUgbGFzdCBicmVhZGNydW1iXG4gICAgICBicmVhZGNydW1iQXJyYXlbYnJlYWRjcnVtYkFycmF5Lmxlbmd0aCAtIDFdLl9kaXNwbGF5SWNvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBicmVhZGNydW1iQXJyYXkuZm9yRWFjaCgoYnJlYWRjcnVtYjogVGRCcmVhZGNydW1iQ29tcG9uZW50KSA9PiB7XG4gICAgICBicmVhZGNydW1iLnNlcGFyYXRvckljb24gPSB0aGlzLnNlcGFyYXRvckljb247XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIGxldCBjcnVtYnNBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgbGV0IGNydW1iV2lkdGhTdW06IG51bWJlciA9IDA7XG4gICAgbGV0IGhpZGRlbkNydW1iczogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSBbXTtcbiAgICAvLyBsb29wIHRocm91Z2ggY3J1bWJzIGluIHJldmVyc2Ugb3JkZXIgdG8gY2FsY3VsYXRlIHdoaWNoIG9uZXMgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjcnVtYnNBcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGJyZWFkY3J1bWI6IFRkQnJlYWRjcnVtYkNvbXBvbmVudCA9IGNydW1ic0FycmF5W2ldO1xuICAgICAgLy8gaWYgY3J1bWIgZXhjZWVkcyB3aWR0aCwgdGhlbiB3ZSBza2lwIGl0IGZyb20gdGhlIHN1bSBhbmQgYWRkIGl0IGludG8gdGhlIGhpZGRlbmNydW1icyBhcnJheVxuICAgICAgLy8gYW5kIGhpZGUgaXRcbiAgICAgIGlmICgoY3J1bWJXaWR0aFN1bSArIGJyZWFkY3J1bWIud2lkdGgpID4gdGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5Q3J1bWIgPSBmYWxzZTtcbiAgICAgICAgaGlkZGVuQ3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbHNlIHdlIHNob3cgaXRcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5Q3J1bWIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY3J1bWJXaWR0aFN1bSArPSBicmVhZGNydW1iLndpZHRoO1xuICAgIH1cbiAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzID0gaGlkZGVuQ3J1bWJzO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBUZEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1icy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICAgIFRkQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRkQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gICAgVGRCcmVhZGNydW1iQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEJyZWFkY3J1bWJzTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQXlERSwrQkFBb0IsV0FBdUIsRUFDdkIsa0JBQXFDO1FBRHJDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFyQ2pELGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLFdBQU0sR0FBVyxDQUFDLENBQUM7O1FBRTNCLGtCQUFhLEdBQVcsZUFBZSxDQUFDOztRQUV4QyxpQkFBWSxHQUFZLElBQUksQ0FBQztLQWlDNUI7SUEv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