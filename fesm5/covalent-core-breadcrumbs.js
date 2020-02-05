import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, HostBinding, ContentChildren, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Subscription, Subject, merge, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdBreadcrumbComponent = /** @class */ (function () {
    function TdBreadcrumbComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._displayCrumb = true;
        this._width = 0;
        this._displayIcon = true;
        this._separatorIcon = 'chevron_right';
    }
    Object.defineProperty(TdBreadcrumbComponent.prototype, "separatorIcon", {
        // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
        get: 
        // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
        /**
         * @return {?}
         */
        function () {
            return this._separatorIcon;
        },
        set: /**
         * @param {?} separatorIcon
         * @return {?}
         */
        function (separatorIcon) {
            var _this = this;
            this._separatorIcon = separatorIcon;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._changeDetectorRef.markForCheck();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbComponent.prototype, "displayIcon", {
        // Should show the right chevron or not before the label
        get: 
        // Should show the right chevron or not before the label
        /**
         * @return {?}
         */
        function () {
            return this._displayIcon;
        },
        set: /**
         * @param {?} displayIcon
         * @return {?}
         */
        function (displayIcon) {
            var _this = this;
            this._displayIcon = displayIcon;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._changeDetectorRef.markForCheck();
            }));
        },
        enumerable: true,
        configurable: true
    });
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
            var _this = this;
            this._displayCrumb = shouldDisplay;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._changeDetectorRef.markForCheck();
            }));
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._width = ((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width;
            _this._changeDetectorRef.markForCheck();
        }));
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
                    template: "<ng-content></ng-content>\n<mat-icon\n  *ngIf=\"displayIcon\"\n  class=\"td-breadcrumb-separator-icon\"\n  [style.cursor]=\"'default'\"\n  (click)=\"_handleIconClick($event)\"\n>\n  {{ separatorIcon }}\n</mat-icon>\n",
                    /* tslint:disable-next-line */
                    host: {
                        class: 'mat-button td-breadcrumb',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host.td-breadcrumb{display:inline-block;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host.td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._displayCrumb;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._width;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._displayIcon;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._separatorIcon;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdBreadcrumbsComponent = /** @class */ (function () {
    function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = Subscription.EMPTY;
        this._widthSubject = new Subject();
        this._resizing = false;
        this._separatorIcon = 'chevron_right';
        // the list of hidden breadcrumbs not shown right now (responsive)
        this.hiddenBreadcrumbs = [];
    }
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "separatorIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._separatorIcon;
        },
        /**
         * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
         */
        set: /**
         * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
         * @param {?} separatorIcon
         * @return {?}
         */
        function (separatorIcon) {
            this._separatorIcon = separatorIcon;
            this.setCrumbIcons();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this._resizing) {
                _this._resizing = true;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._calculateVisibility();
                    _this._resizing = false;
                    _this._changeDetectorRef.markForCheck();
                }), 100);
            }
        }));
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
        var _this = this;
        this._contentChildrenSub = this._breadcrumbs.changes.pipe(startWith(this._breadcrumbs)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.setCrumbIcons();
            _this._changeDetectorRef.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._resizeSubscription.unsubscribe();
        this._contentChildrenSub.unsubscribe();
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
            var element = (/** @type {?} */ (this._elementRef.nativeElement));
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
            return (element.getBoundingClientRect().width -
                borderLeft -
                borderRight -
                marginLeft -
                marginRight -
                paddingLeft -
                paddingRight);
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
     * @private
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
     * Set the crumb icon separators
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._breadcrumbs) {
            /** @type {?} */
            var breadcrumbArray_1 = this._breadcrumbs.toArray();
            breadcrumbArray_1.forEach((/**
             * @param {?} breadcrumb
             * @param {?} index
             * @return {?}
             */
            function (breadcrumb, index) {
                breadcrumb.separatorIcon = _this.separatorIcon;
                // don't show the icon on the last breadcrumb
                breadcrumb.displayIcon = index < breadcrumbArray_1.length - 1;
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype._calculateVisibility = /**
     * @private
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
            if (crumbWidthSum + breadcrumb.width > this.nativeElementWidth) {
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
        _breadcrumbs: [{ type: ContentChildren, args: [TdBreadcrumbComponent, { descendants: true },] }],
        separatorIcon: [{ type: Input }]
    };
    return TdBreadcrumbsComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._resizeSubscription;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._contentChildrenSub;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._resizing;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._separatorIcon;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._breadcrumbs;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype.hiddenBreadcrumbs;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CovalentBreadcrumbsModule = /** @class */ (function () {
    function CovalentBreadcrumbsModule() {
    }
    CovalentBreadcrumbsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, MatIconModule],
                    declarations: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
                    exports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
                },] }
    ];
    return CovalentBreadcrumbsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentBreadcrumbsModule, TdBreadcrumbComponent, TdBreadcrumbsComponent };
//# sourceMappingURL=covalent-core-breadcrumbs.js.map
