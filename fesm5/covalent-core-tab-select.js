import { Component, ChangeDetectionStrategy, ViewContainerRef, ChangeDetectorRef, ViewChild, TemplateRef, Input, EventEmitter, forwardRef, ContentChildren, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { MatTabsModule } from '@angular/material/tabs';
import { __extends } from 'tslib';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple } from '@covalent/core/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdTabOptionBase = /** @class */ (function () {
    function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabOptionBase;
}());
if (false) {
    /** @type {?} */
    TdTabOptionBase.prototype._viewContainerRef;
    /** @type {?} */
    TdTabOptionBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
var _TdTabOptionMixinBase = mixinDisabled(TdTabOptionBase);
var TdTabOptionComponent = /** @class */ (function (_super) {
    __extends(TdTabOptionComponent, _super);
    function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
        return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
    }
    Object.defineProperty(TdTabOptionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this._contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdTabOptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    };
    TdTabOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-tab-option',
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    /* tslint:disable-next-line */
                    inputs: ['disabled'],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdTabOptionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ChangeDetectorRef }
    ]; };
    TdTabOptionComponent.propDecorators = {
        _content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        value: [{ type: Input }]
    };
    return TdTabOptionComponent;
}(_TdTabOptionMixinBase));
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdTabOptionComponent.prototype._contentPortal;
    /** @type {?} */
    TdTabOptionComponent.prototype._content;
    /**
     * Value to which the option will be binded to.
     * @type {?}
     */
    TdTabOptionComponent.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdTabSelectBase = /** @class */ (function () {
    function TdTabSelectBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabSelectBase;
}());
if (false) {
    /** @type {?} */
    TdTabSelectBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
var _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));
var TdTabSelectComponent = /** @class */ (function (_super) {
    __extends(TdTabSelectComponent, _super);
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
        _tabOptions: [{ type: ContentChildren, args: [TdTabOptionComponent, { descendants: true },] }],
        stretchTabs: [{ type: Input, args: ['stretchTabs',] }],
        color: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return TdTabSelectComponent;
}(_TdTabSelectMixinBase));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CovalentTabSelectModule = /** @class */ (function () {
    function CovalentTabSelectModule() {
    }
    CovalentTabSelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TdTabSelectComponent, TdTabOptionComponent],
                    // directives, components, and pipes owned by this NgModule
                    imports: [
                        /** Angular Modules */
                        CommonModule,
                        FormsModule,
                        /** Material Modules */
                        PortalModule,
                        MatTabsModule,
                    ],
                    // modules needed to run this module
                    exports: [TdTabSelectComponent, TdTabOptionComponent],
                },] }
    ];
    return CovalentTabSelectModule;
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

export { CovalentTabSelectModule, TdTabOptionBase, TdTabOptionComponent, TdTabSelectBase, TdTabSelectComponent, _TdTabOptionMixinBase, _TdTabSelectMixinBase };
//# sourceMappingURL=covalent-core-tab-select.js.map
