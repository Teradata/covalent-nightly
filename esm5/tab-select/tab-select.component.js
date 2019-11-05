/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, QueryList, forwardRef, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple, } from '@covalent/core/common';
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
    tslib_1.__extends(TdTabSelectComponent, _super);
    function TdTabSelectComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._subs = [];
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
        // subscribe to check if value changes and update the selectedIndex internally.
        this._subs.push(this.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._setValue(value);
        })));
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
        this._subs.push(this._tabOptions.changes.subscribe((/**
         * @return {?}
         */
        function () {
            _this._refreshValues();
        })));
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
        if (this._subs && this._subs.length) {
            this._subs.forEach((/**
             * @param {?} sub
             * @return {?}
             */
            function (sub) {
                sub.unsubscribe();
            }));
        }
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
        { type: ChangeDetectorRef }
    ]; };
    TdTabSelectComponent.propDecorators = {
        _tabOptions: [{ type: ContentChildren, args: [TdTabOptionComponent,] }],
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
    TdTabSelectComponent.prototype._subs;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbInRhYi1zZWxlY3QvdGFiLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUVMLGFBQWEsRUFFYix5QkFBeUIsRUFFekIsa0JBQWtCLEdBQ25CLE1BQU0sdUJBQXVCLENBQUM7QUFJL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQ7SUFDRSx5QkFBbUIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFBRyxDQUFDO0lBQzlELHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEYSw2Q0FBNEM7Ozs7QUFJMUQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBRWxIO0lBZTBDLGdEQUFxQjtJQWdEN0QsOEJBQVksa0JBQXFDO1FBQWpELFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFoRE8sV0FBSyxHQUFtQixFQUFFLENBQUM7UUFFM0IsYUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixrQkFBWSxHQUFZLEtBQUssQ0FBQzs7Ozs7UUF3Q25CLGlCQUFXLEdBQXNCLElBQUksWUFB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ZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIGZvcndhcmRSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHtcbiAgSUNhbkRpc2FibGUsXG4gIG1peGluRGlzYWJsZWQsXG4gIElDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgSUNhbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbn0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkVGFiT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItb3B0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUZFRhYlNlbGVjdEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkVGFiU2VsZWN0TWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihtaXhpbkRpc2FibGVkKG1peGluRGlzYWJsZVJpcHBsZShUZFRhYlNlbGVjdEJhc2UpKSk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFRhYlNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzZWxlY3RvcjogJ3RkLXRhYi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGlucHV0czogWyd2YWx1ZScsICdkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkVGFiU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgX1RkVGFiU2VsZWN0TWl4aW5CYXNlXG4gIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIF92YWx1ZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3N0cmV0Y2hUYWJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFsbCB0YWIgb3B0aW9uIGNoaWxkcmVuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKFRkVGFiT3B0aW9uQ29tcG9uZW50KSByZWFkb25seSBfdGFiT3B0aW9uczogUXVlcnlMaXN0PFRkVGFiT3B0aW9uQ29tcG9uZW50PjtcblxuICBnZXQgdGFiT3B0aW9ucygpOiBUZFRhYk9wdGlvbkNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fdGFiT3B0aW9ucyA/IHRoaXMuX3RhYk9wdGlvbnMudG9BcnJheSgpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSB0YWJzIHN0cmV0Y2ggdG8gZml0IHRoZSBwYXJlbnQgY29udGFpbmVyLlxuICAgKi9cbiAgQElucHV0KCdzdHJldGNoVGFicycpXG4gIHNldCBzdHJldGNoVGFicyhzdHJldGNoVGFiczogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0cmV0Y2hUYWJzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHN0cmV0Y2hUYWJzKTtcbiAgfVxuICBnZXQgc3RyZXRjaFRhYnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmV0Y2hUYWJzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIHRoZSB0YWIgZ3JvdXAuXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWIgZ3JvdXAuXG4gICAqL1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IFRoZW1lUGFsZXR0ZTtcblxuICAvKipcbiAgICogRXZlbnQgdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgcmF3IHZhbHVlIG9mIHRoZSBzZWxlY3QgY2hhbmdlcy4gVGhpcyBpcyBoZXJlIHByaW1hcmlseVxuICAgKiB0byBmYWNpbGl0YXRlIHRoZSB0d28td2F5IGJpbmRpbmcgZm9yIHRoZSBgdmFsdWVgIGlucHV0LlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gc3Vic2NyaWJlIHRvIGNoZWNrIGlmIHZhbHVlIGNoYW5nZXMgYW5kIHVwZGF0ZSB0aGUgc2VsZWN0ZWRJbmRleCBpbnRlcm5hbGx5LlxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIC8vIHN1YnNjcmliZSB0byBsaXN0ZW4gdG8gYW55IHRhYiBjaGFuZ2VzLlxuICAgIHRoaXMuX3JlZnJlc2hWYWx1ZXMoKTtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl90YWJPcHRpb25zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaFZhbHVlcygpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICAvLyBpbml0aWFsaXplIHZhbHVlXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJzICYmIHRoaXMuX3N1YnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdWJzLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHVzZXIgc2VsZWN0cyBhIGRpZmZlcmVudCB0YWJcbiAgICogVGhpcyB1cGRhdGVzIHRoZSBuZXcgc2VsZWN0ZWRJbmRleCBhbmQgaW5mZXJzIHdoYXQgdmFsdWUgc2hvdWxkIGJlIG1hcHBlZCB0by5cbiAgICovXG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2Uoc2VsZWN0ZWRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgdmFsdWU6IGFueSA9IHRoaXMuX3ZhbHVlc1tzZWxlY3RlZEluZGV4XTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSB2YWx1ZXMgYXJyYXkgd2hlbmV2ZXIgdGhlIG51bWJlciBvZiB0YWJzIGdldHMgdXBkYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB0aGlzLnRhYk9wdGlvbnMubWFwKCh0YWJPcHRpb246IFRkVGFiT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGFiT3B0aW9uLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBzZXQgdmFsdWUgZGVwZW5kaW5nIGlmIGl0cyBwYXJ0IG9mIG91ciBvcHRpb25zXG4gICAqIGVsc2Ugc2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgdGFiLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLl92YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlcy5sZW5ndGggPyB0aGlzLl92YWx1ZXNbMF0gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==