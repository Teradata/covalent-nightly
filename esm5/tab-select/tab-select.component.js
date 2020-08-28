/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, QueryList, forwardRef, Output, EventEmitter, ViewChild, ElementRef, NgZone, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple, } from '@covalent/core/common';
import { timer, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { TdTabOptionComponent } from './tab-option.component';
var TdTabSelectBase = /** @class */ (function () {
    function TdTabSelectBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabSelectBase;
}());
export { TdTabSelectBase };
if (false) {
    /** @type {?} */
    TdTabSelectBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));
var TdTabSelectComponent = /** @class */ (function (_super) {
    __extends(TdTabSelectComponent, _super);
    function TdTabSelectComponent(_changeDetectorRef, _ngZone, _elementRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this._elementRef = _elementRef;
        _this._destroy = new Subject();
        _this._widthSubject = new Subject();
        _this._values = [];
        _this._selectedIndex = 0;
        _this._stretchTabs = false;
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         */
        _this.valueChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdTabSelectComponent.prototype, "selectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdTabSelectComponent.prototype, "tabOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tabOptions ? this._tabOptions.toArray() : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdTabSelectComponent.prototype, "stretchTabs", {
        get: /**
         * @return {?}
         */
        function () {
            return this._stretchTabs;
        },
        /**
         * Makes the tabs stretch to fit the parent container.
         */
        set: /**
         * Makes the tabs stretch to fit the parent container.
         * @param {?} stretchTabs
         * @return {?}
         */
        function (stretchTabs) {
            this._stretchTabs = coerceBooleanProperty(stretchTabs);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdTabSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // set a timer to check every 250ms if the width has changed.
        // if the width has changed, then we realign the ink bar
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._widthSubject
                .asObservable()
                .pipe(takeUntil(_this._destroy), distinctUntilChanged(), debounceTime(100))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this._matTabGroup.realignInkBar();
                    _this._changeDetectorRef.markForCheck();
                }));
            }));
            timer(500, 250)
                .pipe(takeUntil(_this._destroy))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this._elementRef && _this._elementRef.nativeElement) {
                    _this._widthSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width);
                }
            }));
        }));
        // subscribe to check if value changes and update the selectedIndex internally.
        this.valueChanges.pipe(takeUntil(this._destroy)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._setValue(value);
        }));
    };
    /**
     * @return {?}
     */
    TdTabSelectComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // subscribe to listen to any tab changes.
        this._refreshValues();
        this._tabOptions.changes.pipe(takeUntil(this._destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._refreshValues();
        }));
        // initialize value
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this._setValue(_this.value);
        }));
    };
    /**
     * @return {?}
     */
    TdTabSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next(true);
        this._destroy.unsubscribe();
    };
    /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     */
    /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     * @param {?} selectedIndex
     * @return {?}
     */
    TdTabSelectComponent.prototype.selectedIndexChange = /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     * @param {?} selectedIndex
     * @return {?}
     */
    function (selectedIndex) {
        this._selectedIndex = selectedIndex;
        /** @type {?} */
        var value = this._values[selectedIndex];
        this.value = value;
        this.valueChange.emit(value);
        this.onChange(value);
    };
    /**
     * Refresh the values array whenever the number of tabs gets updated
     */
    /**
     * Refresh the values array whenever the number of tabs gets updated
     * @private
     * @return {?}
     */
    TdTabSelectComponent.prototype._refreshValues = /**
     * Refresh the values array whenever the number of tabs gets updated
     * @private
     * @return {?}
     */
    function () {
        this._values = this.tabOptions.map((/**
         * @param {?} tabOption
         * @return {?}
         */
        function (tabOption) {
            return tabOption.value;
        }));
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     */
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     * @private
     * @param {?} value
     * @return {?}
     */
    TdTabSelectComponent.prototype._setValue = /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this._values.indexOf(value);
        if (index > -1) {
            this._selectedIndex = index;
        }
        else {
            this.value = this._values.length ? this._values[0] : undefined;
            this._selectedIndex = 0;
        }
        this._changeDetectorRef.markForCheck();
    };
    TdTabSelectComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdTabSelectComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-tab-select',
                    template: "<mat-tab-group\n  [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n  [backgroundColor]=\"backgroundColor\"\n  [color]=\"color\"\n  [disableRipple]=\"disableRipple\"\n  [selectedIndex]=\"selectedIndex\"\n  (selectedIndexChange)=\"selectedIndexChange($event)\"\n>\n  <ng-template let-tabOption ngFor [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template *ngIf=\"tabOption.content\" [cdkPortalOutlet]=\"tabOption.content\"></ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                    /* tslint:disable-next-line */
                    inputs: ['value', 'disabled', 'disableRipple'],
                    styles: [":host::ng-deep>.mat-tab-group>.mat-tab-body-wrapper{display:none}"]
                }] }
    ];
    /** @nocollapse */
    TdTabSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: ElementRef }
    ]; };
    TdTabSelectComponent.propDecorators = {
        _matTabGroup: [{ type: ViewChild, args: [MatTabGroup, { static: true },] }],
        _tabOptions: [{ type: ContentChildren, args: [TdTabOptionComponent, { descendants: true },] }],
        stretchTabs: [{ type: Input, args: ['stretchTabs',] }],
        color: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return TdTabSelectComponent;
}(_TdTabSelectMixinBase));
export { TdTabSelectComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._values;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._selectedIndex;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._stretchTabs;
    /** @type {?} */
    TdTabSelectComponent.prototype._matTabGroup;
    /**
     * Gets all tab option children
     * @type {?}
     */
    TdTabSelectComponent.prototype._tabOptions;
    /**
     * Color of the tab group.
     * @type {?}
     */
    TdTabSelectComponent.prototype.color;
    /**
     * Background color of the tab group.
     * @type {?}
     */
    TdTabSelectComponent.prototype.backgroundColor;
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @type {?}
     */
    TdTabSelectComponent.prototype.valueChange;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS90YWItc2VsZWN0LyIsInNvdXJjZXMiOlsidGFiLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFFTCxhQUFhLEVBRWIseUJBQXlCLEVBRXpCLGtCQUFrQixHQUNuQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQ7SUFDRSx5QkFBbUIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFBRyxDQUFDO0lBQzlELHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEYSw2Q0FBNEM7Ozs7QUFJMUQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBRWxIO0lBZ0JVLHdDQUFxQjtJQW1EN0IsOEJBQVksa0JBQXFDLEVBQVUsT0FBZSxFQUFVLFdBQXVCO1FBQTNHLFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFGMEQsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGlCQUFXLEdBQVgsV0FBVyxDQUFZO1FBakRuRyxjQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDcEQsbUJBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUV2RCxhQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGtCQUFZLEdBQVksS0FBSyxDQUFDOzs7OztRQTBDbkIsaUJBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7SUFJNUUsQ0FBQztJQTFDRCxzQkFBSSwrQ0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQU9ELHNCQUFJLDRDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRSxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLDZDQUFXOzs7O1FBR2Y7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQztRQVREOztXQUVHOzs7Ozs7UUFDSCxVQUNnQixXQUFvQjtZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUFBOzs7O0lBeUJELHVDQUFROzs7SUFBUjtRQUFBLGlCQTBCQztRQXpCQyw2REFBNkQ7UUFDN0Qsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCOzs7UUFBQztZQUM3QixLQUFJLENBQUMsYUFBYTtpQkFDZixZQUFZLEVBQUU7aUJBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pFLFNBQVM7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7O2dCQUFDO29CQUNmLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDekMsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUNMLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2lCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTOzs7WUFBQztnQkFDVCxJQUFJLEtBQUksQ0FBQyxXQUFXLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7b0JBQ3RELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQWEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RHO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztRQUVILCtFQUErRTtRQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBVTtZQUNwRSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGlEQUFrQjs7O0lBQWxCO1FBQUEsaUJBVUM7UUFUQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDaEUsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO1FBQ0gsbUJBQW1CO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7UUFBQztZQUNyQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxrREFBbUI7Ozs7OztJQUFuQixVQUFvQixhQUFxQjtRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQzs7WUFDOUIsS0FBSyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyw2Q0FBYzs7Ozs7SUFBdEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsU0FBK0I7WUFDakUsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0ssd0NBQVM7Ozs7Ozs7SUFBakIsVUFBa0IsS0FBVTs7WUFDcEIsS0FBSyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Z0JBdkpGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsNm1CQUEwQzs7b0JBRzFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDOztpQkFDL0M7Ozs7Z0JBdERDLGlCQUFpQjtnQkFXakIsTUFBTTtnQkFETixVQUFVOzs7K0JBdURULFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQVN2QyxlQUFlLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzhCQVMzRCxLQUFLLFNBQUMsYUFBYTt3QkFXbkIsS0FBSztrQ0FLTCxLQUFLOzhCQU1MLE1BQU07O0lBdUZULDJCQUFDO0NBQUEsQUF4SkQsQ0FnQlUscUJBQXFCLEdBd0k5QjtTQXpJWSxvQkFBb0I7Ozs7OztJQUcvQix3Q0FBNEQ7Ozs7O0lBQzVELDZDQUErRDs7Ozs7SUFFL0QsdUNBQTRCOzs7OztJQUM1Qiw4Q0FBbUM7Ozs7O0lBQ25DLDRDQUFzQzs7SUFFdEMsNENBQW9FOzs7OztJQVNwRSwyQ0FBb0g7Ozs7O0lBb0JwSCxxQ0FBNkI7Ozs7O0lBSzdCLCtDQUF1Qzs7Ozs7O0lBTXZDLDJDQUE0RTs7Ozs7SUFFekIsdUNBQXVCOzs7OztJQUFFLDJDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFiR3JvdXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7XG4gIElDYW5EaXNhYmxlLFxuICBtaXhpbkRpc2FibGVkLFxuICBJQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIElDYW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG59IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmltcG9ydCB7IHRpbWVyLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkVGFiT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItb3B0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUZFRhYlNlbGVjdEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkVGFiU2VsZWN0TWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihtaXhpbkRpc2FibGVkKG1peGluRGlzYWJsZVJpcHBsZShUZFRhYlNlbGVjdEJhc2UpKSk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFRhYlNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzZWxlY3RvcjogJ3RkLXRhYi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGlucHV0czogWyd2YWx1ZScsICdkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkVGFiU2VsZWN0Q29tcG9uZW50XG4gIGV4dGVuZHMgX1RkVGFiU2VsZWN0TWl4aW5CYXNlXG4gIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZGVzdHJveTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX3ZhbHVlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RyZXRjaFRhYnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKE1hdFRhYkdyb3VwLCB7IHN0YXRpYzogdHJ1ZSB9KSBfbWF0VGFiR3JvdXA6IE1hdFRhYkdyb3VwO1xuXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbGwgdGFiIG9wdGlvbiBjaGlsZHJlblxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihUZFRhYk9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSByZWFkb25seSBfdGFiT3B0aW9uczogUXVlcnlMaXN0PFRkVGFiT3B0aW9uQ29tcG9uZW50PjtcblxuICBnZXQgdGFiT3B0aW9ucygpOiBUZFRhYk9wdGlvbkNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fdGFiT3B0aW9ucyA/IHRoaXMuX3RhYk9wdGlvbnMudG9BcnJheSgpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSB0YWJzIHN0cmV0Y2ggdG8gZml0IHRoZSBwYXJlbnQgY29udGFpbmVyLlxuICAgKi9cbiAgQElucHV0KCdzdHJldGNoVGFicycpXG4gIHNldCBzdHJldGNoVGFicyhzdHJldGNoVGFiczogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0cmV0Y2hUYWJzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHN0cmV0Y2hUYWJzKTtcbiAgfVxuICBnZXQgc3RyZXRjaFRhYnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmV0Y2hUYWJzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIHRoZSB0YWIgZ3JvdXAuXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWIgZ3JvdXAuXG4gICAqL1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IFRoZW1lUGFsZXR0ZTtcblxuICAvKipcbiAgICogRXZlbnQgdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgcmF3IHZhbHVlIG9mIHRoZSBzZWxlY3QgY2hhbmdlcy4gVGhpcyBpcyBoZXJlIHByaW1hcmlseVxuICAgKiB0byBmYWNpbGl0YXRlIHRoZSB0d28td2F5IGJpbmRpbmcgZm9yIHRoZSBgdmFsdWVgIGlucHV0LlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX25nWm9uZTogTmdab25lLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHNldCBhIHRpbWVyIHRvIGNoZWNrIGV2ZXJ5IDI1MG1zIGlmIHRoZSB3aWR0aCBoYXMgY2hhbmdlZC5cbiAgICAvLyBpZiB0aGUgd2lkdGggaGFzIGNoYW5nZWQsIHRoZW4gd2UgcmVhbGlnbiB0aGUgaW5rIGJhclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3RcbiAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgZGVib3VuY2VUaW1lKDEwMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbWF0VGFiR3JvdXAucmVhbGlnbklua0JhcigpO1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgdGltZXIoNTAwLCAyNTApXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hlY2sgaWYgdmFsdWUgY2hhbmdlcyBhbmQgdXBkYXRlIHRoZSBzZWxlY3RlZEluZGV4IGludGVybmFsbHkuXG4gICAgdGhpcy52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5fc2V0VmFsdWUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIC8vIHN1YnNjcmliZSB0byBsaXN0ZW4gdG8gYW55IHRhYiBjaGFuZ2VzLlxuICAgIHRoaXMuX3JlZnJlc2hWYWx1ZXMoKTtcbiAgICB0aGlzLl90YWJPcHRpb25zLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9yZWZyZXNoVmFsdWVzKCk7XG4gICAgfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSB2YWx1ZVxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fZGVzdHJveS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHVzZXIgc2VsZWN0cyBhIGRpZmZlcmVudCB0YWJcbiAgICogVGhpcyB1cGRhdGVzIHRoZSBuZXcgc2VsZWN0ZWRJbmRleCBhbmQgaW5mZXJzIHdoYXQgdmFsdWUgc2hvdWxkIGJlIG1hcHBlZCB0by5cbiAgICovXG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2Uoc2VsZWN0ZWRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgdmFsdWU6IGFueSA9IHRoaXMuX3ZhbHVlc1tzZWxlY3RlZEluZGV4XTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSB2YWx1ZXMgYXJyYXkgd2hlbmV2ZXIgdGhlIG51bWJlciBvZiB0YWJzIGdldHMgdXBkYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB0aGlzLnRhYk9wdGlvbnMubWFwKCh0YWJPcHRpb246IFRkVGFiT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGFiT3B0aW9uLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBzZXQgdmFsdWUgZGVwZW5kaW5nIGlmIGl0cyBwYXJ0IG9mIG91ciBvcHRpb25zXG4gICAqIGVsc2Ugc2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgdGFiLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLl92YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlcy5sZW5ndGggPyB0aGlzLl92YWx1ZXNbMF0gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==