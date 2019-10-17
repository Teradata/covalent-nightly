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
        color: [{ type: Input, args: ['color',] }],
        backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbInRhYi1zZWxlY3QvdGFiLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUVMLGFBQWEsRUFFYix5QkFBeUIsRUFFekIsa0JBQWtCLEdBQ25CLE1BQU0sdUJBQXVCLENBQUM7QUFJL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQ7SUFDRSx5QkFBbUIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFBRyxDQUFDO0lBQzlELHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEYSw2Q0FBNEM7Ozs7QUFJMUQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBRWxIO0lBZTBDLGdEQUFxQjtJQWdEN0QsOEJBQVksa0JBQXFDO1FBQWpELFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFoRE8sV0FBSyxHQUFtQixFQUFFLENBQUM7UUFFM0IsYUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixrQkFBWSxHQUFZLEtBQUssQ0FBQzs7Ozs7UUF3Q25CLGlCQUFXLEdBQXNCLElBQUksWUFB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dCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQge1xuICBJQ2FuRGlzYWJsZSxcbiAgbWl4aW5EaXNhYmxlZCxcbiAgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBJQ2FuRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxufSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRUYWJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRkVGFiU2VsZWN0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRUYWJTZWxlY3RNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQobWl4aW5EaXNhYmxlUmlwcGxlKFRkVGFiU2VsZWN0QmFzZSkpKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkVGFiU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHNlbGVjdG9yOiAndGQtdGFiLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaW5wdXRzOiBbJ3ZhbHVlJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRUYWJTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBfVGRUYWJTZWxlY3RNaXhpbkJhc2VcbiAgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX3ZhbHVlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RyZXRjaFRhYnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWxsIHRhYiBvcHRpb24gY2hpbGRyZW5cbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRUYWJPcHRpb25Db21wb25lbnQpIHJlYWRvbmx5IF90YWJPcHRpb25zOiBRdWVyeUxpc3Q8VGRUYWJPcHRpb25Db21wb25lbnQ+O1xuXG4gIGdldCB0YWJPcHRpb25zKCk6IFRkVGFiT3B0aW9uQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl90YWJPcHRpb25zID8gdGhpcy5fdGFiT3B0aW9ucy50b0FycmF5KCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgdGhlIHRhYnMgc3RyZXRjaCB0byBmaXQgdGhlIHBhcmVudCBjb250YWluZXIuXG4gICAqL1xuICBASW5wdXQoJ3N0cmV0Y2hUYWJzJylcbiAgc2V0IHN0cmV0Y2hUYWJzKHN0cmV0Y2hUYWJzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyZXRjaFRhYnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc3RyZXRjaFRhYnMpO1xuICB9XG4gIGdldCBzdHJldGNoVGFicygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZXRjaFRhYnM7XG4gIH1cblxuICAvKipcbiAgICogQ29sb3Igb2YgdGhlIHRhYiBncm91cC5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWIgZ3JvdXAuXG4gICAqL1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBFdmVudCB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSByYXcgdmFsdWUgb2YgdGhlIHNlbGVjdCBjaGFuZ2VzLiBUaGlzIGlzIGhlcmUgcHJpbWFyaWx5XG4gICAqIHRvIGZhY2lsaXRhdGUgdGhlIHR3by13YXkgYmluZGluZyBmb3IgdGhlIGB2YWx1ZWAgaW5wdXQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hlY2sgaWYgdmFsdWUgY2hhbmdlcyBhbmQgdXBkYXRlIHRoZSBzZWxlY3RlZEluZGV4IGludGVybmFsbHkuXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFZhbHVlKHZhbHVlKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgLy8gc3Vic2NyaWJlIHRvIGxpc3RlbiB0byBhbnkgdGFiIGNoYW5nZXMuXG4gICAgdGhpcy5fcmVmcmVzaFZhbHVlcygpO1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3RhYk9wdGlvbnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoVmFsdWVzKCk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIC8vIGluaXRpYWxpemUgdmFsdWVcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnMgJiYgdGhpcy5fc3Vicy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdXNlciBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYlxuICAgKiBUaGlzIHVwZGF0ZXMgdGhlIG5ldyBzZWxlY3RlZEluZGV4IGFuZCBpbmZlcnMgd2hhdCB2YWx1ZSBzaG91bGQgYmUgbWFwcGVkIHRvLlxuICAgKi9cbiAgc2VsZWN0ZWRJbmRleENoYW5nZShzZWxlY3RlZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICBsZXQgdmFsdWU6IGFueSA9IHRoaXMuX3ZhbHVlc1tzZWxlY3RlZEluZGV4XTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSB2YWx1ZXMgYXJyYXkgd2hlbmV2ZXIgdGhlIG51bWJlciBvZiB0YWJzIGdldHMgdXBkYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB0aGlzLnRhYk9wdGlvbnMubWFwKCh0YWJPcHRpb246IFRkVGFiT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGFiT3B0aW9uLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBzZXQgdmFsdWUgZGVwZW5kaW5nIGlmIGl0cyBwYXJ0IG9mIG91ciBvcHRpb25zXG4gICAqIGVsc2Ugc2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgdGFiLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5fdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl92YWx1ZXMubGVuZ3RoID8gdGhpcy5fdmFsdWVzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=