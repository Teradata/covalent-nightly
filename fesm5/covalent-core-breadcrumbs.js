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
        Promise.resolve().then(function () {
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
                    template: "<ng-container *ngIf=\"displayCrumb\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"_displayIcon\"\n            class=\"td-breadcrumb-separator-icon\"\n            [style.cursor]=\"'default'\"\n            (click)=\"_handleIconClick($event)\">\n    {{separatorIcon}}\n  </mat-icon>\n</ng-container>\n",
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
        this.hiddenBreadcrumbs = new Array();
        /**
         * Sets the icon url shown between breadcrumbs. Defaults to right chevron.
         */
        this.separatorIcon = 'navigate_next';
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
                    _this.displayWidthAvailableCrumbs();
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
    TdBreadcrumbsComponent.prototype.displayWidthAvailableCrumbs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var curTotCrumbWidth = 0;
        /** @type {?} */
        var crumbsArray = this._breadcrumbs.toArray();
        // calculate the current width of the shown breadcrumbs
        for (var i = this.hiddenBreadcrumbs.length; i < crumbsArray.length; i++) {
            curTotCrumbWidth += crumbsArray[i].width;
        }
        // hide the first bread crumb if window size is smaller than all the crumb sizes
        if (this.nativeElementWidth < curTotCrumbWidth) {
            crumbsArray[this.hiddenBreadcrumbs.length].displayCrumb = false;
            this.hiddenBreadcrumbs.push(crumbsArray[this.hiddenBreadcrumbs.length]);
            this.displayWidthAvailableCrumbs();
        }
        else {
            // loop over all the hidden crumbs and see if adding them back in will
            // fit in the current window size
            /** @type {?} */
            var totalHidden = this.hiddenBreadcrumbs.length - 1;
            for (var i = totalHidden; i >= 0; i--) {
                /** @type {?} */
                var hiddenCrumbWidth = crumbsArray[i].width;
                if ((curTotCrumbWidth + hiddenCrumbWidth) < this.nativeElementWidth) {
                    crumbsArray[i].displayCrumb = true;
                    crumbsArray[i + 1]._displayIcon = true;
                    this.hiddenBreadcrumbs.pop();
                    // recalculate the total width based on adding back in a crumb
                    /** @type {?} */
                    var newTotCrumbWidth = 0;
                    for (var j = this.hiddenBreadcrumbs.length; j < crumbsArray.length; j++) {
                        newTotCrumbWidth += crumbsArray[j].width;
                    }
                    curTotCrumbWidth = newTotCrumbWidth;
                }
                else if (i === totalHidden) {
                    // need to break out of loop here because the first in the hidden
                    // list can't fit in current window size
                    break;
                }
            }
        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1icmVhZGNydW1icy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9icmVhZGNydW1icy9icmVhZGNydW1icy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYiwgYVt0ZC1icmVhZGNydW1iXScsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbWF0LWJ1dHRvbiB0ZC1icmVhZGNydW1iJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgX2Rpc3BsYXlDcnVtYjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xuICAvLyBTZXRzIHRoZSBpY29uIHVybCBzaG93biBiZXR3ZWVuIGJyZWFkY3J1bWJzLiBEZWZhdWx0cyB0byAnY2hldnJvbl9yaWdodCdcbiAgc2VwYXJhdG9ySWNvbjogc3RyaW5nID0gJ2NoZXZyb25fcmlnaHQnO1xuICAvLyBTaG91bGQgc2hvdyB0aGUgcmlnaHQgY2hldnJvbiBvciBub3QgYmVmb3JlIHRoZSBsYWJlbFxuICBfZGlzcGxheUljb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGdldCBkaXNwbGF5Q3J1bWIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlDcnVtYjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNydW1iIG9yIG5vdFxuICAgKi9cbiAgc2V0IGRpc3BsYXlDcnVtYihzaG91bGREaXNwbGF5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheUNydW1iID0gc2hvdWxkRGlzcGxheTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgRE9NIGVsZW1lbnQgb2YgdGhlIGNydW1iXG4gICAqL1xuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZGlzcGxheSBzdHlsZSBvZiB0aGUgY3J1bWJcbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBkaXNwbGF5QmluZGluZygpOiBzdHJpbmcge1xuICAgIC8vIFNldCB0aGUgZGlzcGxheSB0byBub25lIG9uIHRoZSBjb21wb25lbnQsIGp1c3QgaW4gY2FzZSB0aGUgZW5kIHVzZXIgaXMgaGlkaW5nXG4gICAgLy8gYW5kIHNob3dpbmcgdGhlbSBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQgZG9pbmcgaXRzZWxmIGZvciByZWFzb25zIGxpa2UgcmVzcG9uc2l2ZVxuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5Q3J1bWIgPyB1bmRlZmluZWQgOiAnbm9uZSc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fd2lkdGggPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGNsaWNrIHByb3BhZ2F0aW9uIHdoZW4gY2xpY2tpbmcgb24gaWNvblxuICAgKi9cbiAgX2hhbmRsZUljb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRG9DaGVjayxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgU3Vic2NyaXB0aW9uLFxuICBTdWJqZWN0LFxuICBmcm9tRXZlbnQsXG4gIG1lcmdlLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYnMnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtYnJlYWRjcnVtYnMnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRCcmVhZGNydW1iQ29tcG9uZW50KSBfYnJlYWRjcnVtYnM6IFF1ZXJ5TGlzdDxUZEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gYnJlYWRjcnVtYnMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuQnJlYWRjcnVtYnM6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gbmV3IEFycmF5KCk7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGljb24gdXJsIHNob3duIGJldHdlZW4gYnJlYWRjcnVtYnMuIERlZmF1bHRzIHRvIHJpZ2h0IGNoZXZyb24uXG4gICAqL1xuICBASW5wdXQoJ3NlcGFyYXRvckljb24nKSBzZXBhcmF0b3JJY29uOiBzdHJpbmcgPSAnbmF2aWdhdGVfbmV4dCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTApLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVDcnVtYnMoKTtcbiAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQodGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENydW1iSWNvbnMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLypcbiAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIE5lZWQgdG8gdGFrZSBpbnRvIGFjY291bnQgYm9yZGVyLCBtYXJnaW4gYW5kIHBhZGRpbmcgdGhhdCBtaWdodCBiZSBhcm91bmQgYWxsIHRoZSBjcnVtYnNcbiAgICBsZXQgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBsZXQgYm9yZGVyTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdCwgMTApO1xuICAgIGxldCBib3JkZXJSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyUmlnaHQsIDEwKTtcbiAgICBsZXQgbWFyZ2luTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApO1xuICAgIGxldCBtYXJnaW5SaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luUmlnaHQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ0xlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0LCAxMCk7XG5cbiAgICByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIGJvcmRlckxlZnQgLSBib3JkZXJSaWdodCAtIG1hcmdpbkxlZnQgLSBtYXJnaW5SaWdodCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBjb3VudCBvZiBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYnJlYWRjcnVtYnMgPyB0aGlzLl9icmVhZGNydW1icy5sZW5ndGggOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3J1bWIgaWNvbiBzZXBhcmF0b3JzXG4gICAqL1xuICBwcml2YXRlIHNldENydW1iSWNvbnMoKTogdm9pZCB7XG4gICAgbGV0IGJyZWFkY3J1bWJBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgaWYgKGJyZWFkY3J1bWJBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBkb24ndCBzaG93IHRoZSBpY29uIG9uIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAgIGJyZWFkY3J1bWJBcnJheVticmVhZGNydW1iQXJyYXkubGVuZ3RoIC0gMV0uX2Rpc3BsYXlJY29uID0gZmFsc2U7XG4gICAgfVxuICAgIGJyZWFkY3J1bWJBcnJheS5mb3JFYWNoKChicmVhZGNydW1iOiBUZEJyZWFkY3J1bWJDb21wb25lbnQpID0+IHtcbiAgICAgIGJyZWFkY3J1bWIuc2VwYXJhdG9ySWNvbiA9IHRoaXMuc2VwYXJhdG9ySWNvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheVdpZHRoQXZhaWxhYmxlQ3J1bWJzKCk6IHZvaWQge1xuICAgIGxldCBjdXJUb3RDcnVtYldpZHRoOiBudW1iZXIgPSAwO1xuICAgIGxldCBjcnVtYnNBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBjdXJyZW50IHdpZHRoIG9mIHRoZSBzaG93biBicmVhZGNydW1ic1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoOyBpIDwgY3J1bWJzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1clRvdENydW1iV2lkdGggKz0gY3J1bWJzQXJyYXlbaV0ud2lkdGg7XG4gICAgfVxuICAgIC8vIGhpZGUgdGhlIGZpcnN0IGJyZWFkIGNydW1iIGlmIHdpbmRvdyBzaXplIGlzIHNtYWxsZXIgdGhhbiBhbGwgdGhlIGNydW1iIHNpemVzXG4gICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudFdpZHRoIDwgY3VyVG90Q3J1bWJXaWR0aCkge1xuICAgICAgY3J1bWJzQXJyYXlbdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGhdLmRpc3BsYXlDcnVtYiA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRkZW5CcmVhZGNydW1icy5wdXNoKGNydW1ic0FycmF5W3RoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoXSk7XG4gICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZUNydW1icygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb29wIG92ZXIgYWxsIHRoZSBoaWRkZW4gY3J1bWJzIGFuZCBzZWUgaWYgYWRkaW5nIHRoZW0gYmFjayBpbiB3aWxsXG4gICAgICAvLyBmaXQgaW4gdGhlIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgIGxldCB0b3RhbEhpZGRlbjogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGggLSAxO1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gdG90YWxIaWRkZW47IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBoaWRkZW5DcnVtYldpZHRoOiBudW1iZXIgPSBjcnVtYnNBcnJheVtpXS53aWR0aDtcbiAgICAgICAgaWYgKChjdXJUb3RDcnVtYldpZHRoICsgaGlkZGVuQ3J1bWJXaWR0aCkgPCB0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCkge1xuICAgICAgICAgIGNydW1ic0FycmF5W2ldLmRpc3BsYXlDcnVtYiA9IHRydWU7XG4gICAgICAgICAgY3J1bWJzQXJyYXlbaSArIDFdLl9kaXNwbGF5SWNvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5oaWRkZW5CcmVhZGNydW1icy5wb3AoKTtcbiAgICAgICAgICAvLyByZWNhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggYmFzZWQgb24gYWRkaW5nIGJhY2sgaW4gYSBjcnVtYlxuICAgICAgICAgIGxldCBuZXdUb3RDcnVtYldpZHRoOiBudW1iZXIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoOyBqIDwgY3J1bWJzQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG5ld1RvdENydW1iV2lkdGggKz0gY3J1bWJzQXJyYXlbal0ud2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1clRvdENydW1iV2lkdGggPSBuZXdUb3RDcnVtYldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHRvdGFsSGlkZGVuKSB7XG4gICAgICAgICAgLy8gbmVlZCB0byBicmVhayBvdXQgb2YgbG9vcCBoZXJlIGJlY2F1c2UgdGhlIGZpcnN0IGluIHRoZSBoaWRkZW5cbiAgICAgICAgICAvLyBsaXN0IGNhbid0IGZpdCBpbiBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7IFRkQnJlYWRjcnVtYnNDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gICAgVGRCcmVhZGNydW1iQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgICBUZEJyZWFkY3J1bWJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50QnJlYWRjcnVtYnNNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBeURFLCtCQUFvQixXQUF1QixFQUN2QixrQkFBcUM7UUFEckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXJDakQsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsV0FBTSxHQUFXLENBQUMsQ0FBQzs7UUFFM0Isa0JBQWEsR0FBVyxlQUFlLENBQUM7O1FBRXhDLGlCQUFZLEdBQVksSUFBSSxDQUFDO0tBaUM1QjtJQS9CRCxzQkFBSSwrQ0FBWTs7OztRQUFo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