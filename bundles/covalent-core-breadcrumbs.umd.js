(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/breadcrumbs', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/material/icon'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.breadcrumbs = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common,global.ng.material.icon));
}(this, (function (exports,core,rxjs,operators,common,icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdBreadcrumbComponent = /** @class */ (function () {
        function TdBreadcrumbComponent(_elementRef, _renderer, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._displayCrumb = true;
            this._width = 0;
            // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
            this.separatorIcon = 'chevron_right';
            // Should show the right chevron or not before the label
            this._displayIcon = true;
            this._renderer.addClass(this._elementRef.nativeElement, 'mat-button');
        }
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
            get: /**
             * @return {?}
             */ function () {
                return this._displayCrumb;
            },
            /**
             * Whether to display the crumb or not
             */
            set: /**
             * Whether to display the crumb or not
             * @param {?} shouldDisplay
             * @return {?}
             */ function (shouldDisplay) {
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
             */ function () {
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
             */ function () {
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
                    _this._width = (( /** @type {?} */(_this._elementRef.nativeElement))).getBoundingClientRect().width;
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
            { type: core.Component, args: [{
                        selector: 'td-breadcrumb, a[td-breadcrumb]',
                        template: "<span *ngIf=\"displayCrumb\" class=\"td-breadcrumb\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"_displayIcon\"\n            class=\"td-breadcrumb-separator-icon\"\n            [style.cursor]=\"'default'\"\n            (click)=\"_handleIconClick($event)\">\n    {{separatorIcon}}\n  </mat-icon>\n</span>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host .td-breadcrumb{height:48px;box-sizing:border-box;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdBreadcrumbComponent.propDecorators = {
            displayBinding: [{ type: core.HostBinding, args: ['style.display',] }]
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
            this._resizeSubscription = rxjs.Subscription.EMPTY;
            this._widthSubject = new rxjs.Subject();
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
                this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged())).subscribe(function () {
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
                var element = (( /** @type {?} */(this._elementRef.nativeElement)));
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'td-breadcrumbs',
                        template: "<div class=\"td-breadcrumbs\">\n  <ng-content></ng-content>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;width:100%}:host .td-breadcrumbs{white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbsComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdBreadcrumbsComponent.propDecorators = {
            _breadcrumbs: [{ type: core.ContentChildren, args: [TdBreadcrumbComponent,] }],
            separatorIcon: [{ type: core.Input, args: ['separatorIcon',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
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

    exports.CovalentBreadcrumbsModule = CovalentBreadcrumbsModule;
    exports.TdBreadcrumbsComponent = TdBreadcrumbsComponent;
    exports.ɵa = TdBreadcrumbComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1icmVhZGNydW1icy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBIb3N0QmluZGluZyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYiwgYVt0ZC1icmVhZGNydW1iXScsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBfZGlzcGxheUNydW1iOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDA7XG4gIC8vIFNldHMgdGhlIGljb24gdXJsIHNob3duIGJldHdlZW4gYnJlYWRjcnVtYnMuIERlZmF1bHRzIHRvICdjaGV2cm9uX3JpZ2h0J1xuICBzZXBhcmF0b3JJY29uOiBzdHJpbmcgPSAnY2hldnJvbl9yaWdodCc7XG4gIC8vIFNob3VsZCBzaG93IHRoZSByaWdodCBjaGV2cm9uIG9yIG5vdCBiZWZvcmUgdGhlIGxhYmVsXG4gIF9kaXNwbGF5SWNvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgZ2V0IGRpc3BsYXlDcnVtYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUNydW1iO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY3J1bWIgb3Igbm90XG4gICAqL1xuICBzZXQgZGlzcGxheUNydW1iKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5Q3J1bWIgPSBzaG91bGREaXNwbGF5O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBET00gZWxlbWVudCBvZiB0aGUgY3J1bWJcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXlCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgLy8gU2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUgb24gdGhlIGNvbXBvbmVudCwganVzdCBpbiBjYXNlIHRoZSBlbmQgdXNlciBpcyBoaWRpbmdcbiAgICAvLyBhbmQgc2hvd2luZyB0aGVtIGluc3RlYWQgb2YgdGhlIGNvbXBvbmVudCBkb2luZyBpdHNlbGYgZm9yIHJlYXNvbnMgbGlrZSByZXNwb25zaXZlXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlDcnVtYiA/IHVuZGVmaW5lZCA6ICdub25lJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC1idXR0b24nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fd2lkdGggPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGNsaWNrIHByb3BhZ2F0aW9uIHdoZW4gY2xpY2tpbmcgb24gaWNvblxuICAgKi9cbiAgX2hhbmRsZUljb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRG9DaGVjayxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgU3Vic2NyaXB0aW9uLFxuICBTdWJqZWN0LFxuICBmcm9tRXZlbnQsXG4gIG1lcmdlLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYnMnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRCcmVhZGNydW1iQ29tcG9uZW50KSBfYnJlYWRjcnVtYnM6IFF1ZXJ5TGlzdDxUZEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gYnJlYWRjcnVtYnMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuQnJlYWRjcnVtYnM6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gbmV3IEFycmF5KCk7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGljb24gdXJsIHNob3duIGJldHdlZW4gYnJlYWRjcnVtYnMuIERlZmF1bHRzIHRvIHJpZ2h0IGNoZXZyb24uXG4gICAqL1xuICBASW5wdXQoJ3NlcGFyYXRvckljb24nKSBzZXBhcmF0b3JJY29uOiBzdHJpbmcgPSAnbmF2aWdhdGVfbmV4dCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTApLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5V2lkdGhBdmFpbGFibGVDcnVtYnMoKTtcbiAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQodGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENydW1iSWNvbnMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLypcbiAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIE5lZWQgdG8gdGFrZSBpbnRvIGFjY291bnQgYm9yZGVyLCBtYXJnaW4gYW5kIHBhZGRpbmcgdGhhdCBtaWdodCBiZSBhcm91bmQgYWxsIHRoZSBjcnVtYnNcbiAgICBsZXQgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBsZXQgYm9yZGVyTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdCwgMTApO1xuICAgIGxldCBib3JkZXJSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyUmlnaHQsIDEwKTtcbiAgICBsZXQgbWFyZ2luTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApO1xuICAgIGxldCBtYXJnaW5SaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luUmlnaHQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ0xlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0LCAxMCk7XG5cbiAgICByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIGJvcmRlckxlZnQgLSBib3JkZXJSaWdodCAtIG1hcmdpbkxlZnQgLSBtYXJnaW5SaWdodCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBjb3VudCBvZiBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYnJlYWRjcnVtYnMgPyB0aGlzLl9icmVhZGNydW1icy5sZW5ndGggOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3J1bWIgaWNvbiBzZXBhcmF0b3JzXG4gICAqL1xuICBwcml2YXRlIHNldENydW1iSWNvbnMoKTogdm9pZCB7XG4gICAgbGV0IGJyZWFkY3J1bWJBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgaWYgKGJyZWFkY3J1bWJBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBkb24ndCBzaG93IHRoZSBpY29uIG9uIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAgIGJyZWFkY3J1bWJBcnJheVticmVhZGNydW1iQXJyYXkubGVuZ3RoIC0gMV0uX2Rpc3BsYXlJY29uID0gZmFsc2U7XG4gICAgfVxuICAgIGJyZWFkY3J1bWJBcnJheS5mb3JFYWNoKChicmVhZGNydW1iOiBUZEJyZWFkY3J1bWJDb21wb25lbnQpID0+IHtcbiAgICAgIGJyZWFkY3J1bWIuc2VwYXJhdG9ySWNvbiA9IHRoaXMuc2VwYXJhdG9ySWNvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheVdpZHRoQXZhaWxhYmxlQ3J1bWJzKCk6IHZvaWQge1xuICAgIGxldCBjdXJUb3RDcnVtYldpZHRoOiBudW1iZXIgPSAwO1xuICAgIGxldCBjcnVtYnNBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBjdXJyZW50IHdpZHRoIG9mIHRoZSBzaG93biBicmVhZGNydW1ic1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoOyBpIDwgY3J1bWJzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1clRvdENydW1iV2lkdGggKz0gY3J1bWJzQXJyYXlbaV0ud2lkdGg7XG4gICAgfVxuICAgIC8vIGhpZGUgdGhlIGZpcnN0IGJyZWFkIGNydW1iIGlmIHdpbmRvdyBzaXplIGlzIHNtYWxsZXIgdGhhbiBhbGwgdGhlIGNydW1iIHNpemVzXG4gICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudFdpZHRoIDwgY3VyVG90Q3J1bWJXaWR0aCkge1xuICAgICAgY3J1bWJzQXJyYXlbdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGhdLmRpc3BsYXlDcnVtYiA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRkZW5CcmVhZGNydW1icy5wdXNoKGNydW1ic0FycmF5W3RoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoXSk7XG4gICAgICB0aGlzLmRpc3BsYXlXaWR0aEF2YWlsYWJsZUNydW1icygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb29wIG92ZXIgYWxsIHRoZSBoaWRkZW4gY3J1bWJzIGFuZCBzZWUgaWYgYWRkaW5nIHRoZW0gYmFjayBpbiB3aWxsXG4gICAgICAvLyBmaXQgaW4gdGhlIGN1cnJlbnQgd2luZG93IHNpemVcbiAgICAgIGxldCB0b3RhbEhpZGRlbjogbnVtYmVyID0gdGhpcy5oaWRkZW5CcmVhZGNydW1icy5sZW5ndGggLSAxO1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gdG90YWxIaWRkZW47IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBoaWRkZW5DcnVtYldpZHRoOiBudW1iZXIgPSBjcnVtYnNBcnJheVtpXS53aWR0aDtcbiAgICAgICAgaWYgKChjdXJUb3RDcnVtYldpZHRoICsgaGlkZGVuQ3J1bWJXaWR0aCkgPCB0aGlzLm5hdGl2ZUVsZW1lbnRXaWR0aCkge1xuICAgICAgICAgIGNydW1ic0FycmF5W2ldLmRpc3BsYXlDcnVtYiA9IHRydWU7XG4gICAgICAgICAgY3J1bWJzQXJyYXlbaSArIDFdLl9kaXNwbGF5SWNvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5oaWRkZW5CcmVhZGNydW1icy5wb3AoKTtcbiAgICAgICAgICAvLyByZWNhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggYmFzZWQgb24gYWRkaW5nIGJhY2sgaW4gYSBjcnVtYlxuICAgICAgICAgIGxldCBuZXdUb3RDcnVtYldpZHRoOiBudW1iZXIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IHRoaXMuaGlkZGVuQnJlYWRjcnVtYnMubGVuZ3RoOyBqIDwgY3J1bWJzQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG5ld1RvdENydW1iV2lkdGggKz0gY3J1bWJzQXJyYXlbal0ud2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1clRvdENydW1iV2lkdGggPSBuZXdUb3RDcnVtYldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHRvdGFsSGlkZGVuKSB7XG4gICAgICAgICAgLy8gbmVlZCB0byBicmVhayBvdXQgb2YgbG9vcCBoZXJlIGJlY2F1c2UgdGhlIGZpcnN0IGluIHRoZSBoaWRkZW5cbiAgICAgICAgICAvLyBsaXN0IGNhbid0IGZpdCBpbiBjdXJyZW50IHdpbmRvdyBzaXplXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7IFRkQnJlYWRjcnVtYnNDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gICAgVGRCcmVhZGNydW1iQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgICBUZEJyZWFkY3J1bWJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50QnJlYWRjcnVtYnNNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJIb3N0QmluZGluZyIsIlN1YnNjcmlwdGlvbiIsIlN1YmplY3QiLCJtZXJnZSIsImZyb21FdmVudCIsImRlYm91bmNlVGltZSIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwiQ29udGVudENoaWxkcmVuIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdEljb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQXNERSwrQkFBb0IsV0FBdUIsRUFDdkIsU0FBb0IsRUFDcEIsa0JBQXFDO1lBRnJDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1lBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7WUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtZQXRDakQsa0JBQWEsR0FBWSxJQUFJLENBQUM7WUFDOUIsV0FBTSxHQUFXLENBQUMsQ0FBQzs7WUFFM0Isa0JBQWEsR0FBVyxlQUFlLENBQUM7O1lBRXhDLGlCQUFZLEdBQVksSUFBSSxDQUFDO1lBa0MzQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUN2RTtRQWpDRCxzQkFBSSwrQ0FBWTs7O2dCQUFoQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDM0I7Ozs7Ozs7O2dCQUtELFVBQWlCLGFBQXNCO2dCQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hDOzs7V0FSQTtRQWFELHNCQUFJLHdDQUFLOzs7Ozs7O2dCQUFUO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNwQjs7O1dBQUE7UUFLRCxzQkFDSSxpREFBYzs7Ozs7OztnQkFEbEI7OztnQkFJRSxPQUFPLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQzthQUNoRDs7O1dBQUE7Ozs7UUFRRCwrQ0FBZTs7O1lBQWY7Z0JBQUEsaUJBTUM7O2dCQUpDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQWMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUUscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQzFGLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDeEMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7OztRQUtELGdEQUFnQjs7Ozs7WUFBaEIsVUFBaUIsS0FBWTtnQkFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7O29CQWhFRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7d0JBRTNDLG9VQUEwQzt3QkFDMUMsZUFBZSxFQUFFQyw0QkFBdUIsQ0FBQyxNQUFNOztxQkFDaEQ7Ozs7O3dCQWJDQyxlQUFVO3dCQUNWQyxjQUFTO3dCQUlUQyxzQkFBaUI7Ozs7cUNBd0NoQkMsZ0JBQVcsU0FBQyxlQUFlOztRQTZCOUIsNEJBQUM7S0FsRUQ7Ozs7OztBQ1ZBO1FBaURFLGdDQUFvQixXQUF1QixFQUFVLGtCQUFxQztZQUF0RSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtZQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7WUFkbEYsd0JBQW1CLEdBQWlCQyxpQkFBWSxDQUFDLEtBQUssQ0FBQztZQUN2RCxrQkFBYSxHQUFvQixJQUFJQyxZQUFPLEVBQVUsQ0FBQztZQUN2RCxjQUFTLEdBQVksS0FBSyxDQUFDOztZQUtuQyxzQkFBaUIsR0FBNEIsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7OztZQUtqQyxrQkFBYSxHQUFXLGVBQWUsQ0FBQztTQUUrQjs7OztRQUUvRix5Q0FBUTs7O1lBQVI7Z0JBQUEsaUJBa0JDO2dCQWpCQyxJQUFJLENBQUMsbUJBQW1CLEdBQUdDLFVBQUssQ0FDOUJDLGNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QkMsc0JBQVksQ0FBQyxFQUFFLENBQUMsQ0FDakIsRUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDcENDLDhCQUFvQixFQUFFLENBQ3ZCLENBQ0YsQ0FBQyxTQUFTLENBQUM7b0JBQ1YsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ25CLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUN0QixVQUFVLENBQUM7NEJBQ1QsS0FBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7NEJBQ25DLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUN2QixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7eUJBQ3hDLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ1Q7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7Ozs7UUFFRCwwQ0FBUzs7O1lBQVQ7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO29CQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztpQkFDbEQ7YUFDRjs7OztRQUVELG1EQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hDOzs7O1FBRUQsNENBQVc7OztZQUFYO2dCQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QztRQUtELHNCQUFJLHNEQUFrQjs7Ozs7Ozs7OztZQUF0Qjs7b0JBQ00sT0FBTyx1QkFBOEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUM7OztvQkFFcEUsS0FBSyxHQUF3QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDOztvQkFDN0QsVUFBVSxHQUFXLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQzs7b0JBQ25ELFdBQVcsR0FBVyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7O29CQUNyRCxVQUFVLEdBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDOztvQkFDbkQsV0FBVyxHQUFXLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQzs7b0JBQ3JELFdBQVcsR0FBVyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7O29CQUNyRCxZQUFZLEdBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO2dCQUUzRCxPQUFPLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsV0FBVyxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FBQzthQUNqSTs7O1dBQUE7UUFLRCxzQkFBSSx5Q0FBSzs7Ozs7OztnQkFBVDtnQkFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3pEOzs7V0FBQTs7Ozs7Ozs7UUFLTyw4Q0FBYTs7OztZQUFyQjtnQkFBQSxpQkFTQzs7b0JBUkssZUFBZSxHQUE0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDMUUsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7b0JBRTlCLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7aUJBQ2xFO2dCQUNELGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFpQztvQkFDeEQsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO2lCQUMvQyxDQUFDLENBQUM7YUFDSjs7OztRQUVPLDREQUEyQjs7O1lBQW5DOztvQkFDTSxnQkFBZ0IsR0FBVyxDQUFDOztvQkFDNUIsV0FBVyxHQUE0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTs7Z0JBRXRFLEtBQUssSUFBSSxDQUFDLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0UsZ0JBQWdCLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDMUM7O2dCQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixFQUFFO29CQUM5QyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztpQkFDcEM7cUJBQU07Ozs7d0JBR0QsV0FBVyxHQUFXLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDM0QsS0FBSyxJQUFJLENBQUMsR0FBVyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7NEJBQ3pDLGdCQUFnQixHQUFXLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO3dCQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOzRCQUNuRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs0QkFDbkMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOzRCQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7OztnQ0FFekIsZ0JBQWdCLEdBQVcsQ0FBQzs0QkFDaEMsS0FBSyxJQUFJLENBQUMsR0FBVyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dDQUMvRSxnQkFBZ0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzZCQUMxQzs0QkFDRCxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQzt5QkFDckM7NkJBQU0sSUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFOzs7NEJBRzVCLE1BQU07eUJBQ1A7cUJBQ0Y7aUJBQ0Y7YUFDRjs7b0JBcElGWCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjt3QkFFMUIsaUZBQTJDO3dCQUMzQyxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07O3FCQUNoRDs7Ozs7d0JBdEJDQyxlQUFVO3dCQURWRSxzQkFBaUI7Ozs7bUNBK0JoQlEsb0JBQWUsU0FBQyxxQkFBcUI7b0NBT3JDQyxVQUFLLFNBQUMsZUFBZTs7UUFrSHhCLDZCQUFDO0tBdElEOzs7Ozs7QUMzQkE7UUFPQTtTQWdCQzs7b0JBaEJBQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMsa0JBQWE7eUJBQ2Q7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLHNCQUFzQjs0QkFDdEIscUJBQXFCO3lCQUN0Qjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1Asc0JBQXNCOzRCQUN0QixxQkFBcUI7eUJBQ3RCO3FCQUNGOztRQUdELGdDQUFDO0tBaEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==