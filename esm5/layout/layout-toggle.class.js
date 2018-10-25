/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input, HostListener } from '@angular/core';
import { mixinDisabled } from '@covalent/core/common';
/**
 * @record
 */
export function ILayoutTogglable() { }
if (false) {
    /** @type {?} */
    ILayoutTogglable.prototype.opened;
    /** @type {?} */
    ILayoutTogglable.prototype.sidenav;
    /**
     * @return {?}
     */
    ILayoutTogglable.prototype.toggle = function () { };
    /**
     * @return {?}
     */
    ILayoutTogglable.prototype.open = function () { };
    /**
     * @return {?}
     */
    ILayoutTogglable.prototype.close = function () { };
}
var LayoutToggleBase = /** @class */ (function () {
    function LayoutToggleBase() {
    }
    return LayoutToggleBase;
}());
export { LayoutToggleBase };
/* tslint:disable-next-line */
/** @type {?} */
export var _TdLayoutToggleMixinBase = mixinDisabled(LayoutToggleBase);
/**
 * @abstract
 */
var LayoutToggle = /** @class */ (function (_super) {
    tslib_1.__extends(LayoutToggle, _super);
    function LayoutToggle(_layout, _renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._layout = _layout;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._initialized = false;
        _this._hideWhenOpened = false;
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-layout-menu-button');
        return _this;
    }
    Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
        /**
         * hideWhenOpened?: boolean
         * When this is set to true, the host will be hidden when
         * the sidenav is opened.
         */
        set: /**
         * hideWhenOpened?: boolean
         * When this is set to true, the host will be hidden when
         * the sidenav is opened.
         * @param {?} hideWhenOpened
         * @return {?}
         */
        function (hideWhenOpened) {
            this._hideWhenOpened = hideWhenOpened;
            if (this._initialized) {
                this._toggleVisibility();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LayoutToggle.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._initialized = true;
        this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(function () {
            _this._toggleVisibility();
        });
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    };
    /**
     * Listens to host click event to trigger the layout toggle
     */
    /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    LayoutToggle.prototype.clickListener = /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.disabled) {
            this.onClick();
        }
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype._toggleVisibility = /**
     * @return {?}
     */
    function () {
        if (this._layout.sidenav.opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    };
    LayoutToggle.propDecorators = {
        hideWhenOpened: [{ type: Input, args: ['hideWhenOpened',] }],
        clickListener: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return LayoutToggle;
}(_TdLayoutToggleMixinBase));
export { LayoutToggle };
if (false) {
    /** @type {?} */
    LayoutToggle.prototype._toggleSubs;
    /** @type {?} */
    LayoutToggle.prototype._initialized;
    /** @type {?} */
    LayoutToggle.prototype._hideWhenOpened;
    /** @type {?} */
    LayoutToggle.prototype._layout;
    /** @type {?} */
    LayoutToggle.prototype._renderer;
    /** @type {?} */
    LayoutToggle.prototype._elementRef;
    /**
     * @abstract
     * @return {?}
     */
    LayoutToggle.prototype.onClick = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvZ2dsZS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbImxheW91dC10b2dnbGUuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFlLFlBQVksRUFBbUQsTUFBTSxlQUFlLENBQUM7QUFJbEgsT0FBTyxFQUFlLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSW5FLHNDQU1DOzs7SUFMQyxrQ0FBZ0I7O0lBQ2hCLG1DQUFvQjs7OztJQUNwQixvREFBeUM7Ozs7SUFDekMsa0RBQXVDOzs7O0lBQ3ZDLG1EQUF3Qzs7QUFHMUM7SUFBQTtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDOzs7O0FBR2pDLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7Ozs7QUFFdkU7SUFBMkMsd0NBQXdCO0lBb0JqRSxzQkFBc0IsT0FBeUIsRUFDM0IsU0FBb0IsRUFDcEIsV0FBdUI7UUFGM0MsWUFHRSxpQkFBTyxTQUVSO1FBTHFCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBQzNCLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsaUJBQVcsR0FBWCxXQUFXLENBQVk7UUFsQm5DLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBbUJ2QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDOztJQUNuRixDQUFDO0lBYkQsc0JBQ0ksd0NBQWM7UUFObEI7Ozs7V0FJRzs7Ozs7Ozs7UUFDSCxVQUNtQixjQUF1QjtZQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztZQUN0QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFTRCxzQ0FBZTs7O0lBQWY7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsa0VBQWtFO1FBQ2xFLG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUVILG9DQUFhOzs7OztJQURiLFVBQ2MsS0FBWTtRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7OztJQUlPLHdDQUFpQjs7O0lBQXpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7O2lDQW5EQSxLQUFLLFNBQUMsZ0JBQWdCO2dDQW1DdEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFrQm5DLG1CQUFDO0NBQUEsQUFqRUQsQ0FBMkMsd0JBQXdCLEdBaUVsRTtTQWpFcUIsWUFBWTs7O0lBRWhDLG1DQUFrQzs7SUFFbEMsb0NBQXNDOztJQUN0Qyx1Q0FBeUM7O0lBZTdCLCtCQUFtQzs7SUFDbkMsaUNBQTRCOztJQUM1QixtQ0FBK0I7Ozs7O0lBaUMzQyxpREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxheW91dFRvZ2dsYWJsZSB7XG4gIG9wZW5lZDogYm9vbGVhbjtcbiAgc2lkZW5hdjogTWF0U2lkZW5hdjtcbiAgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PjtcbiAgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG4gIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0Pjtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dFRvZ2dsZUJhc2UgeyB9XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZExheW91dFRvZ2dsZU1peGluQmFzZSA9IG1peGluRGlzYWJsZWQoTGF5b3V0VG9nZ2xlQmFzZSk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXlvdXRUb2dnbGUgZXh0ZW5kcyBfVGRMYXlvdXRUb2dnbGVNaXhpbkJhc2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF90b2dnbGVTdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGlkZVdoZW5PcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogaGlkZVdoZW5PcGVuZWQ/OiBib29sZWFuXG4gICAqIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGhvc3Qgd2lsbCBiZSBoaWRkZW4gd2hlblxuICAgKiB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuXG4gICAqL1xuICBASW5wdXQoJ2hpZGVXaGVuT3BlbmVkJylcbiAgc2V0IGhpZGVXaGVuT3BlbmVkKGhpZGVXaGVuT3BlbmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVdoZW5PcGVuZWQgPSBoaWRlV2hlbk9wZW5lZDtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2xheW91dDogSUxheW91dFRvZ2dsYWJsZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtbGF5b3V0LW1lbnUtYnV0dG9uJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3RvZ2dsZVN1YnMgPSB0aGlzLl9sYXlvdXQuc2lkZW5hdi5fYW5pbWF0aW9uU3RhcnRlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgIH0pO1xuICAgIC8vIGV4ZWN1dGUgdG9nZ2xlVmlzaWJpbGl0eSBzaW5jZSB0aGUgb25PcGVuU3RhcnQgYW5kIG9uQ2xvc2VTdGFydFxuICAgIC8vIG1ldGhvZHMgbWlnaHQgbm90IGJlIGV4ZWN1dGVkIGFsd2F5cyB3aGVuIHRoZSBlbGVtZW50IGlzIHJlbmRlcmVkXG4gICAgdGhpcy5fdG9nZ2xlVmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RvZ2dsZVN1YnMpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX3RvZ2dsZVN1YnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gaG9zdCBjbGljayBldmVudCB0byB0cmlnZ2VyIHRoZSBsYXlvdXQgdG9nZ2xlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrTGlzdGVuZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub25DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIGFic3RyYWN0IG9uQ2xpY2soKTogdm9pZDtcblxuICBwcml2YXRlIF90b2dnbGVWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sYXlvdXQuc2lkZW5hdi5vcGVuZWQgJiYgdGhpcy5faGlkZVdoZW5PcGVuZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJycpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=