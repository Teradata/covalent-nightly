/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListToggleDirective, _super);
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
        set: /**
         * @param {?} tdLayoutManageListToggle
         * @return {?}
         */
        function (tdLayoutManageListToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutManageListToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutManageListToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutManageListToggleDirective.propDecorators = {
        tdLayoutManageListToggle: [{ type: Input, args: ['tdLayoutManageListToggle',] }]
    };
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
export { TdLayoutManageListToggleDirective };
var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListCloseDirective, _super);
    function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
        set: /**
         * @param {?} tdLayoutManageListClose
         * @return {?}
         */
        function (tdLayoutManageListClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutManageListCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutManageListClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutManageListCloseDirective.propDecorators = {
        tdLayoutManageListClose: [{ type: Input, args: ['tdLayoutManageListClose',] }]
    };
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
export { TdLayoutManageListCloseDirective };
var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListOpenDirective, _super);
    function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
        set: /**
         * @param {?} tdLayoutManageListOpen
         * @return {?}
         */
        function (tdLayoutManageListOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutManageListOpenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutManageListOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutManageListOpenDirective.propDecorators = {
        tdLayoutManageListOpen: [{ type: Input, args: ['tdLayoutManageListOpen',] }]
    };
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));
export { TdLayoutManageListOpenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1hbmFnZS1saXN0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtbWFuYWdlLWxpc3QvbGF5b3V0LW1hbmFnZS1saXN0LmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXREO0lBR3VELDZEQUFZO0lBT2pFLDJDQUFtRSxNQUFtQyxFQUMxRixRQUFtQixFQUNuQixVQUFzQjtlQUNoQyxrQkFBTSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBVEQsc0JBQ0ksdUVBQXdCOzs7OztRQUQ1QixVQUM2Qix3QkFBaUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssd0JBQXdCLEVBQUEsS0FBSyxFQUFFLElBQUksd0JBQXdCLENBQUMsQ0FBQztRQUN0RixDQUFDOzs7T0FBQTs7OztJQVFELG1EQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2lCQUN2Qzs7OztnQkFMUSwyQkFBMkIsdUJBYXJCLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLDJCQUEyQixFQUEzQixDQUEyQixDQUFDO2dCQWR4QyxTQUFTO2dCQUFFLFVBQVU7OzsyQ0FTN0MsS0FBSyxTQUFDLDBCQUEwQjs7SUFjbkMsd0NBQUM7Q0FBQSxBQW5CRCxDQUd1RCxZQUFZLEdBZ0JsRTtTQWhCWSxpQ0FBaUM7QUFrQjlDO0lBR3NELDREQUFZO0lBT2hFLDBDQUFtRSxNQUFtQyxFQUMxRixRQUFtQixFQUNuQixVQUFzQjtlQUNoQyxrQkFBTSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBVEQsc0JBQ0kscUVBQXVCOzs7OztRQUQzQixVQUM0Qix1QkFBZ0M7WUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssdUJBQXVCLEVBQUEsS0FBSyxFQUFFLElBQUksdUJBQXVCLENBQUMsQ0FBQztRQUNwRixDQUFDOzs7T0FBQTs7OztJQVFELGtEQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7OztnQkExQlEsMkJBQTJCLHVCQWtDckIsTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMkJBQTJCLEVBQTNCLENBQTJCLENBQUM7Z0JBbkN4QyxTQUFTO2dCQUFFLFVBQVU7OzswQ0E4QjdDLEtBQUssU0FBQyx5QkFBeUI7O0lBY2xDLHVDQUFDO0NBQUEsQUFuQkQsQ0FHc0QsWUFBWSxHQWdCakU7U0FoQlksZ0NBQWdDO0FBa0I3QztJQUdxRCwyREFBWTtJQU8vRCx5Q0FBbUUsTUFBbUMsRUFDMUYsUUFBbUIsRUFDbkIsVUFBc0I7ZUFDaEMsa0JBQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQztJQVRELHNCQUNJLG1FQUFzQjs7Ozs7UUFEMUIsVUFDMkIsc0JBQStCO1lBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLHNCQUFzQixFQUFBLEtBQUssRUFBRSxJQUFJLHNCQUFzQixDQUFDLENBQUM7UUFDbEYsQ0FBQzs7O09BQUE7Ozs7SUFRRCxpREFBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtpQkFDckM7Ozs7Z0JBL0NRLDJCQUEyQix1QkF1RHJCLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLDJCQUEyQixFQUEzQixDQUEyQixDQUFDO2dCQXhEeEMsU0FBUztnQkFBRSxVQUFVOzs7eUNBbUQ3QyxLQUFLLFNBQUMsd0JBQXdCOztJQWNqQyxzQ0FBQztDQUFBLEFBbkJELENBR3FELFlBQVksR0FnQmhFO1NBaEJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1tYW5hZ2UtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0VG9nZ2xlIH0gZnJvbSAnLi4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE1hbmFnZUxpc3RUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZScpIFxuICBzZXQgdGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlKHRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlID09PSAnJyB8fCB0ZExheW91dE1hbmFnZUxpc3RUb2dnbGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2VEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuICBcbiAgQElucHV0KCd0ZExheW91dE1hbmFnZUxpc3RDbG9zZScpIFxuICBzZXQgdGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2UodGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TWFuYWdlTGlzdENsb3NlID09PSAnJyB8fCB0ZExheW91dE1hbmFnZUxpc3RDbG9zZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LmNsb3NlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TWFuYWdlTGlzdE9wZW5dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRNYW5hZ2VMaXN0T3BlbkRpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dE1hbmFnZUxpc3RPcGVuJykgXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RPcGVuKHRkTGF5b3V0TWFuYWdlTGlzdE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TWFuYWdlTGlzdE9wZW4gPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdE9wZW4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cbn1cbiJdfQ==