/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListToggleDirective, _super);
    function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
        set: /**
         * @param {?} tdLayoutNavListToggle
         * @return {?}
         */
        function (tdLayoutNavListToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutNavListToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutNavListToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutNavListToggleDirective.propDecorators = {
        tdLayoutNavListToggle: [{ type: Input, args: ['tdLayoutNavListToggle',] }]
    };
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
export { TdLayoutNavListToggleDirective };
var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListCloseDirective, _super);
    function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
        set: /**
         * @param {?} tdLayoutNavListClose
         * @return {?}
         */
        function (tdLayoutNavListClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutNavListCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutNavListClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutNavListCloseDirective.propDecorators = {
        tdLayoutNavListClose: [{ type: Input, args: ['tdLayoutNavListClose',] }]
    };
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
export { TdLayoutNavListCloseDirective };
var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListOpenDirective, _super);
    function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
        set: /**
         * @param {?} tdLayoutNavListOpen
         * @return {?}
         */
        function (tdLayoutNavListOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutNavListOpenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutNavListOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutNavListOpenDirective.propDecorators = {
        tdLayoutNavListOpen: [{ type: Input, args: ['tdLayoutNavListOpen',] }]
    };
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));
export { TdLayoutNavListOpenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtbmF2LWxpc3QvbGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXREO0lBR29ELDBEQUFZO0lBTzlELHdDQUFnRSxNQUFnQyxFQUNwRixRQUFtQixFQUNuQixVQUFzQjtlQUNoQyxrQkFBTSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBVEQsc0JBQ0ksaUVBQXFCOzs7OztRQUR6QixVQUMwQixxQkFBOEI7WUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUsscUJBQXFCLEVBQUEsS0FBSyxFQUFFLElBQUkscUJBQXFCLENBQUMsQ0FBQztRQUNoRixDQUFDOzs7T0FBQTs7OztJQVFELGdEQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO2lCQUNwQzs7OztnQkFMUSx3QkFBd0IsdUJBYWxCLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixDQUFDO2dCQWRyQyxTQUFTO2dCQUFFLFVBQVU7Ozt3Q0FTN0MsS0FBSyxTQUFDLHVCQUF1Qjs7SUFjaEMscUNBQUM7Q0FBQSxBQW5CRCxDQUdvRCxZQUFZLEdBZ0IvRDtTQWhCWSw4QkFBOEI7QUFrQjNDO0lBR21ELHlEQUFZO0lBTzdELHVDQUFnRSxNQUFnQyxFQUNwRixRQUFtQixFQUNuQixVQUFzQjtlQUNoQyxrQkFBTSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBVEQsc0JBQ0ksK0RBQW9COzs7OztRQUR4QixVQUN5QixvQkFBNkI7WUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssb0JBQW9CLEVBQUEsS0FBSyxFQUFFLElBQUksb0JBQW9CLENBQUMsQ0FBQztRQUM5RSxDQUFDOzs7T0FBQTs7OztJQVFELCtDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2lCQUNuQzs7OztnQkExQlEsd0JBQXdCLHVCQWtDbEIsTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLENBQUM7Z0JBbkNyQyxTQUFTO2dCQUFFLFVBQVU7Ozt1Q0E4QjdDLEtBQUssU0FBQyxzQkFBc0I7O0lBYy9CLG9DQUFDO0NBQUEsQUFuQkQsQ0FHbUQsWUFBWSxHQWdCOUQ7U0FoQlksNkJBQTZCO0FBa0IxQztJQUdrRCx3REFBWTtJQU81RCxzQ0FBZ0UsTUFBZ0MsRUFDcEYsUUFBbUIsRUFDbkIsVUFBc0I7ZUFDaEMsa0JBQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQztJQVRELHNCQUNJLDZEQUFtQjs7Ozs7UUFEdkIsVUFDd0IsbUJBQTRCO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLG1CQUFtQixFQUFBLEtBQUssRUFBRSxJQUFJLG1CQUFtQixDQUFDLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7Ozs7SUFRRCw4Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7Z0JBL0NRLHdCQUF3Qix1QkF1RGxCLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixDQUFDO2dCQXhEckMsU0FBUztnQkFBRSxVQUFVOzs7c0NBbUQ3QyxLQUFLLFNBQUMscUJBQXFCOztJQWM5QixtQ0FBQztDQUFBLEFBbkJELENBR2tELFlBQVksR0FnQjdEO1NBaEJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZExheW91dE5hdkxpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0VG9nZ2xlIH0gZnJvbSAnLi4vbGF5b3V0LXRvZ2dsZS5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE5hdkxpc3RUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0VG9nZ2xlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TmF2TGlzdFRvZ2dsZScpIFxuICBzZXQgdGRMYXlvdXROYXZMaXN0VG9nZ2xlKHRkTGF5b3V0TmF2TGlzdFRvZ2dsZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXROYXZMaXN0VG9nZ2xlID09PSAnJyB8fCB0ZExheW91dE5hdkxpc3RUb2dnbGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC50b2dnbGUoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXROYXZMaXN0Q2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0Q2xvc2VEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuICBcbiAgQElucHV0KCd0ZExheW91dE5hdkxpc3RDbG9zZScpIFxuICBzZXQgdGRMYXlvdXROYXZMaXN0Q2xvc2UodGRMYXlvdXROYXZMaXN0Q2xvc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TmF2TGlzdENsb3NlID09PSAnJyB8fCB0ZExheW91dE5hdkxpc3RDbG9zZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LmNsb3NlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TmF2TGlzdE9wZW5dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0T3BlbkRpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dE5hdkxpc3RPcGVuJykgXG4gIHNldCB0ZExheW91dE5hdkxpc3RPcGVuKHRkTGF5b3V0TmF2TGlzdE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TmF2TGlzdE9wZW4gPT09ICcnIHx8IHRkTGF5b3V0TmF2TGlzdE9wZW4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cbn1cbiJdfQ==