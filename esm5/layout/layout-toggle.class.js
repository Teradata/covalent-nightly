/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
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
    __extends(LayoutToggle, _super);
    function LayoutToggle(_layout, _renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._layout = _layout;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._initialized = false;
        _this._hideWhenOpened = false;
        // if layout has not been provided
        // show warn message
        if (!_this._layout) {
            _this._noLayoutMessage();
        }
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
        if (this._layout && this._layout.sidenav) {
            this._toggleSubs = this._layout.sidenav._animationStarted.subscribe((/**
             * @return {?}
             */
            function () {
                _this._toggleVisibility();
            }));
        }
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
            // if layout has been provided, try triggering the click on it
            // else show warn message
            if (this._layout && this._layout.open) {
                this.onClick();
            }
            else {
                this._noLayoutMessage();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    LayoutToggle.prototype._toggleVisibility = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._layout) {
            if (this._layout.sidenav.opened && this._hideWhenOpened) {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
            }
            else {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    LayoutToggle.prototype._noLayoutMessage = /**
     * @private
     * @return {?}
     */
    function () {
        /* tslint:disable-next-line */
        console.warn('Covalent: Parent layout not found for layout toggle directive');
    };
    LayoutToggle.propDecorators = {
        hideWhenOpened: [{ type: Input, args: ['hideWhenOpened',] }],
        clickListener: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return LayoutToggle;
}(_TdLayoutToggleMixinBase));
export { LayoutToggle };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutToggle.prototype._toggleSubs;
    /**
     * @type {?}
     * @private
     */
    LayoutToggle.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    LayoutToggle.prototype._hideWhenOpened;
    /**
     * @type {?}
     * @protected
     */
    LayoutToggle.prototype._layout;
    /**
     * @type {?}
     * @private
     */
    LayoutToggle.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LayoutToggle.prototype._elementRef;
    /**
     * @abstract
     * @return {?}
     */
    LayoutToggle.prototype.onClick = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvZ2dsZS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbImxheW91dC10b2dnbGUuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFlLFlBQVksRUFBbUQsTUFBTSxlQUFlLENBQUM7QUFJbEgsT0FBTyxFQUFlLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSW5FLHNDQU1DOzs7SUFMQyxrQ0FBZ0I7O0lBQ2hCLG1DQUFvQjs7OztJQUNwQixvREFBeUM7Ozs7SUFDekMsa0RBQXVDOzs7O0lBQ3ZDLG1EQUF3Qzs7QUFHMUM7SUFBQTtJQUErQixDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDOzs7O0FBR2hDLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7Ozs7QUFFdkU7SUFBMkMsZ0NBQXdCO0lBbUJqRSxzQkFBc0IsT0FBeUIsRUFBVSxTQUFvQixFQUFVLFdBQXVCO1FBQTlHLFlBQ0UsaUJBQU8sU0FPUjtRQVJxQixhQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFVLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxpQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWhCdEcsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFpQnZDLGtDQUFrQztRQUNsQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7UUFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDOztJQUNuRixDQUFDO0lBaEJELHNCQUNJLHdDQUFjO1FBTmxCOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFDbUIsY0FBdUI7WUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7WUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtRQUNILENBQUM7OztPQUFBOzs7O0lBWUQsc0NBQWU7OztJQUFmO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7WUFBQztnQkFDbEUsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDM0IsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELGtFQUFrRTtRQUNsRSxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFFSCxvQ0FBYTs7Ozs7SUFEYixVQUNjLEtBQVk7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLDhEQUE4RDtZQUM5RCx5QkFBeUI7WUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7U0FDRjtJQUNILENBQUM7Ozs7O0lBSU8sd0NBQWlCOzs7O0lBQXpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM1RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDeEU7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sdUNBQWdCOzs7O0lBQXhCO1FBQ0UsOEJBQThCO1FBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FBQztJQUNoRixDQUFDOztpQ0FyRUEsS0FBSyxTQUFDLGdCQUFnQjtnQ0F3Q3RCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBOEJuQyxtQkFBQztDQUFBLEFBakZELENBQTJDLHdCQUF3QixHQWlGbEU7U0FqRnFCLFlBQVk7Ozs7OztJQUNoQyxtQ0FBa0M7Ozs7O0lBRWxDLG9DQUFzQzs7Ozs7SUFDdEMsdUNBQXlDOzs7OztJQWU3QiwrQkFBbUM7Ozs7O0lBQUUsaUNBQTRCOzs7OztJQUFFLG1DQUErQjs7Ozs7SUE4QzlHLGlEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXREcmF3ZXJUb2dnbGVSZXN1bHQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTGF5b3V0VG9nZ2xhYmxlIHtcbiAgb3BlbmVkOiBib29sZWFuO1xuICBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuICB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xuICBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PjtcbiAgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xufVxuXG5leHBvcnQgY2xhc3MgTGF5b3V0VG9nZ2xlQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRMYXlvdXRUb2dnbGVNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVkKExheW91dFRvZ2dsZUJhc2UpO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF5b3V0VG9nZ2xlIGV4dGVuZHMgX1RkTGF5b3V0VG9nZ2xlTWl4aW5CYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJQ2FuRGlzYWJsZSB7XG4gIHByaXZhdGUgX3RvZ2dsZVN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9oaWRlV2hlbk9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBoaWRlV2hlbk9wZW5lZD86IGJvb2xlYW5cbiAgICogV2hlbiB0aGlzIGlzIHNldCB0byB0cnVlLCB0aGUgaG9zdCB3aWxsIGJlIGhpZGRlbiB3aGVuXG4gICAqIHRoZSBzaWRlbmF2IGlzIG9wZW5lZC5cbiAgICovXG4gIEBJbnB1dCgnaGlkZVdoZW5PcGVuZWQnKVxuICBzZXQgaGlkZVdoZW5PcGVuZWQoaGlkZVdoZW5PcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlV2hlbk9wZW5lZCA9IGhpZGVXaGVuT3BlbmVkO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5fdG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfbGF5b3V0OiBJTGF5b3V0VG9nZ2xhYmxlLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyBpZiBsYXlvdXQgaGFzIG5vdCBiZWVuIHByb3ZpZGVkXG4gICAgLy8gc2hvdyB3YXJuIG1lc3NhZ2VcbiAgICBpZiAoIXRoaXMuX2xheW91dCkge1xuICAgICAgdGhpcy5fbm9MYXlvdXRNZXNzYWdlKCk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWxheW91dC1tZW51LWJ1dHRvbicpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5fbGF5b3V0ICYmIHRoaXMuX2xheW91dC5zaWRlbmF2KSB7XG4gICAgICB0aGlzLl90b2dnbGVTdWJzID0gdGhpcy5fbGF5b3V0LnNpZGVuYXYuX2FuaW1hdGlvblN0YXJ0ZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGV4ZWN1dGUgdG9nZ2xlVmlzaWJpbGl0eSBzaW5jZSB0aGUgb25PcGVuU3RhcnQgYW5kIG9uQ2xvc2VTdGFydFxuICAgIC8vIG1ldGhvZHMgbWlnaHQgbm90IGJlIGV4ZWN1dGVkIGFsd2F5cyB3aGVuIHRoZSBlbGVtZW50IGlzIHJlbmRlcmVkXG4gICAgdGhpcy5fdG9nZ2xlVmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RvZ2dsZVN1YnMpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX3RvZ2dsZVN1YnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gaG9zdCBjbGljayBldmVudCB0byB0cmlnZ2VyIHRoZSBsYXlvdXQgdG9nZ2xlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrTGlzdGVuZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIC8vIGlmIGxheW91dCBoYXMgYmVlbiBwcm92aWRlZCwgdHJ5IHRyaWdnZXJpbmcgdGhlIGNsaWNrIG9uIGl0XG4gICAgICAvLyBlbHNlIHNob3cgd2FybiBtZXNzYWdlXG4gICAgICBpZiAodGhpcy5fbGF5b3V0ICYmIHRoaXMuX2xheW91dC5vcGVuKSB7XG4gICAgICAgIHRoaXMub25DbGljaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbm9MYXlvdXRNZXNzYWdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWJzdHJhY3Qgb25DbGljaygpOiB2b2lkO1xuXG4gIHByaXZhdGUgX3RvZ2dsZVZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xheW91dCkge1xuICAgICAgaWYgKHRoaXMuX2xheW91dC5zaWRlbmF2Lm9wZW5lZCAmJiB0aGlzLl9oaWRlV2hlbk9wZW5lZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbm9MYXlvdXRNZXNzYWdlKCk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGNvbnNvbGUud2FybignQ292YWxlbnQ6IFBhcmVudCBsYXlvdXQgbm90IGZvdW5kIGZvciBsYXlvdXQgdG9nZ2xlIGRpcmVjdGl2ZScpO1xuICB9XG59XG4iXX0=