/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { LayoutToggle } from './layout-toggle.class';
var TdLayoutToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutToggleDirective, _super);
    function TdLayoutToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
        set: /**
         * @param {?} tdLayoutToggle
         * @return {?}
         */
        function (tdLayoutToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutToggle)) === '' || tdLayoutToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutToggleDirective.propDecorators = {
        tdLayoutToggle: [{ type: Input, args: ['tdLayoutToggle',] }]
    };
    return TdLayoutToggleDirective;
}(LayoutToggle));
export { TdLayoutToggleDirective };
var TdLayoutCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutCloseDirective, _super);
    function TdLayoutCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
        set: /**
         * @param {?} tdLayoutClose
         * @return {?}
         */
        function (tdLayoutClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutClose)) === '' || tdLayoutClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutCloseDirective.propDecorators = {
        tdLayoutClose: [{ type: Input, args: ['tdLayoutClose',] }]
    };
    return TdLayoutCloseDirective;
}(LayoutToggle));
export { TdLayoutCloseDirective };
var TdLayoutOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutOpenDirective, _super);
    function TdLayoutOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
        set: /**
         * @param {?} tdLayoutOpen
         * @return {?}
         */
        function (tdLayoutOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutOpen)) === '' || tdLayoutOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutOpenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutOpenDirective.propDecorators = {
        tdLayoutClose: [{ type: Input, args: ['tdLayoutOpen',] }]
    };
    return TdLayoutOpenDirective;
}(LayoutToggle));
export { TdLayoutOpenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQ7SUFHNkMsbURBQVk7SUFPdkQsaUNBQXlELE1BQXlCLEVBQ3RFLFFBQW1CLEVBQ25CLFVBQXNCO2VBQ2hDLGtCQUFNLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFURCxzQkFDSSxtREFBYzs7Ozs7UUFEbEIsVUFDbUIsY0FBdUI7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssY0FBYyxFQUFBLEtBQUssRUFBRSxJQUFJLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7OztPQUFBOzs7O0lBUUQseUNBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUxRLGlCQUFpQix1QkFhWCxNQUFNLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQztnQkFkOUIsU0FBUztnQkFBRSxVQUFVOzs7aUNBUzdDLEtBQUssU0FBQyxnQkFBZ0I7O0lBY3pCLDhCQUFDO0NBQUEsQUFuQkQsQ0FHNkMsWUFBWSxHQWdCeEQ7U0FoQlksdUJBQXVCO0FBa0JwQztJQUc0QyxrREFBWTtJQU90RCxnQ0FBeUQsTUFBeUIsRUFDdEUsUUFBbUIsRUFDbkIsVUFBc0I7ZUFDaEMsa0JBQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQztJQVRELHNCQUNJLGlEQUFhOzs7OztRQURqQixVQUNrQixhQUFzQjtZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyxhQUFhLEVBQUEsS0FBSyxFQUFFLElBQUksYUFBYSxDQUFDLENBQUM7UUFDaEUsQ0FBQzs7O09BQUE7Ozs7SUFRRCx3Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBMUJRLGlCQUFpQix1QkFrQ1gsTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7Z0JBbkM5QixTQUFTO2dCQUFFLFVBQVU7OztnQ0E4QjdDLEtBQUssU0FBQyxlQUFlOztJQWN4Qiw2QkFBQztDQUFBLEFBbkJELENBRzRDLFlBQVksR0FnQnZEO1NBaEJZLHNCQUFzQjtBQWtCbkM7SUFHMkMsaURBQVk7SUFPckQsK0JBQXlELE1BQXlCLEVBQ3RFLFFBQW1CLEVBQ25CLFVBQXNCO2VBQ2hDLGtCQUFNLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFURCxzQkFDSSxnREFBYTs7Ozs7UUFEakIsVUFDa0IsWUFBcUI7WUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssWUFBWSxFQUFBLEtBQUssRUFBRSxJQUFJLFlBQVksQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBOzs7O0lBUUQsdUNBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQS9DUSxpQkFBaUIsdUJBdURYLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDO2dCQXhEOUIsU0FBUztnQkFBRSxVQUFVOzs7Z0NBbUQ3QyxLQUFLLFNBQUMsY0FBYzs7SUFjdkIsNEJBQUM7Q0FBQSxBQW5CRCxDQUcyQyxZQUFZLEdBZ0J0RDtTQWhCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0VG9nZ2xlIH0gZnJvbSAnLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0VG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0VG9nZ2xlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0VG9nZ2xlJykgXG4gIHNldCB0ZExheW91dFRvZ2dsZSh0ZExheW91dFRvZ2dsZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRUb2dnbGUgPT09ICcnIHx8IHRkTGF5b3V0VG9nZ2xlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dENsb3NlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0Q2xvc2VEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuICBcbiAgQElucHV0KCd0ZExheW91dENsb3NlJykgXG4gIHNldCB0ZExheW91dENsb3NlKHRkTGF5b3V0Q2xvc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0Q2xvc2UgPT09ICcnIHx8IHRkTGF5b3V0Q2xvc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQuY2xvc2UoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRPcGVuXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0T3BlbkRpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dE9wZW4nKSBcbiAgc2V0IHRkTGF5b3V0Q2xvc2UodGRMYXlvdXRPcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE9wZW4gPT09ICcnIHx8IHRkTGF5b3V0T3Blbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cbn1cbiJdfQ==