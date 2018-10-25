/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
export class LayoutToggleBase {
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdLayoutToggleMixinBase = mixinDisabled(LayoutToggleBase);
/**
 * @abstract
 */
export class LayoutToggle extends _TdLayoutToggleMixinBase {
    /**
     * @param {?} _layout
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_layout, _renderer, _elementRef) {
        super();
        this._layout = _layout;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._initialized = false;
        this._hideWhenOpened = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
    }
    /**
     * hideWhenOpened?: boolean
     * When this is set to true, the host will be hidden when
     * the sidenav is opened.
     * @param {?} hideWhenOpened
     * @return {?}
     */
    set hideWhenOpened(hideWhenOpened) {
        this._hideWhenOpened = hideWhenOpened;
        if (this._initialized) {
            this._toggleVisibility();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initialized = true;
        this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(() => {
            this._toggleVisibility();
        });
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    }
    /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    clickListener(event) {
        event.preventDefault();
        if (!this.disabled) {
            this.onClick();
        }
    }
    /**
     * @return {?}
     */
    _toggleVisibility() {
        if (this._layout.sidenav.opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    }
}
LayoutToggle.propDecorators = {
    hideWhenOpened: [{ type: Input, args: ['hideWhenOpened',] }],
    clickListener: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvZ2dsZS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbImxheW91dC10b2dnbGUuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWUsWUFBWSxFQUFtRCxNQUFNLGVBQWUsQ0FBQztBQUlsSCxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFJbkUsc0NBTUM7OztJQUxDLGtDQUFnQjs7SUFDaEIsbUNBQW9COzs7O0lBQ3BCLG9EQUF5Qzs7OztJQUN6QyxrREFBdUM7Ozs7SUFDdkMsbURBQXdDOztBQUcxQyxNQUFNLE9BQU8sZ0JBQWdCO0NBQUk7OztBQUdqQyxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDOzs7O0FBRXZFLE1BQU0sT0FBZ0IsWUFBYSxTQUFRLHdCQUF3Qjs7Ozs7O0lBb0JqRSxZQUFzQixPQUF5QixFQUMzQixTQUFvQixFQUNwQixXQUF1QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQUhZLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFsQm5DLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBbUJ2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7Ozs7O0lBYkQsSUFDSSxjQUFjLENBQUMsY0FBdUI7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQVNELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxrRUFBa0U7UUFDbEUsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7SUFNRCxhQUFhLENBQUMsS0FBWTtRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7OztJQUlPLGlCQUFpQjtRQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQzs7OzZCQW5EQSxLQUFLLFNBQUMsZ0JBQWdCOzRCQW1DdEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQTdDakMsbUNBQWtDOztJQUVsQyxvQ0FBc0M7O0lBQ3RDLHVDQUF5Qzs7SUFlN0IsK0JBQW1DOztJQUNuQyxpQ0FBNEI7O0lBQzVCLG1DQUErQjs7Ozs7SUFpQzNDLGlEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXREcmF3ZXJUb2dnbGVSZXN1bHQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTGF5b3V0VG9nZ2xhYmxlIHtcbiAgb3BlbmVkOiBib29sZWFuO1xuICBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuICB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xuICBvcGVuKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PjtcbiAgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xufVxuXG5leHBvcnQgY2xhc3MgTGF5b3V0VG9nZ2xlQmFzZSB7IH1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkTGF5b3V0VG9nZ2xlTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlZChMYXlvdXRUb2dnbGVCYXNlKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheW91dFRvZ2dsZSBleHRlbmRzIF9UZExheW91dFRvZ2dsZU1peGluQmFzZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSUNhbkRpc2FibGUge1xuXG4gIHByaXZhdGUgX3RvZ2dsZVN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9oaWRlV2hlbk9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBoaWRlV2hlbk9wZW5lZD86IGJvb2xlYW5cbiAgICogV2hlbiB0aGlzIGlzIHNldCB0byB0cnVlLCB0aGUgaG9zdCB3aWxsIGJlIGhpZGRlbiB3aGVuXG4gICAqIHRoZSBzaWRlbmF2IGlzIG9wZW5lZC5cbiAgICovXG4gIEBJbnB1dCgnaGlkZVdoZW5PcGVuZWQnKVxuICBzZXQgaGlkZVdoZW5PcGVuZWQoaGlkZVdoZW5PcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlV2hlbk9wZW5lZCA9IGhpZGVXaGVuT3BlbmVkO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5fdG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfbGF5b3V0OiBJTGF5b3V0VG9nZ2xhYmxlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1sYXlvdXQtbWVudS1idXR0b24nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fdG9nZ2xlU3VicyA9IHRoaXMuX2xheW91dC5zaWRlbmF2Ll9hbmltYXRpb25TdGFydGVkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gICAgLy8gZXhlY3V0ZSB0b2dnbGVWaXNpYmlsaXR5IHNpbmNlIHRoZSBvbk9wZW5TdGFydCBhbmQgb25DbG9zZVN0YXJ0XG4gICAgLy8gbWV0aG9kcyBtaWdodCBub3QgYmUgZXhlY3V0ZWQgYWx3YXlzIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVuZGVyZWRcbiAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlU3Vicykge1xuICAgICAgdGhpcy5fdG9nZ2xlU3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fdG9nZ2xlU3VicyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGNsaWNrIGV2ZW50IHRvIHRyaWdnZXIgdGhlIGxheW91dCB0b2dnbGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYWJzdHJhY3Qgb25DbGljaygpOiB2b2lkO1xuXG4gIHByaXZhdGUgX3RvZ2dsZVZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xheW91dC5zaWRlbmF2Lm9wZW5lZCAmJiB0aGlzLl9oaWRlV2hlbk9wZW5lZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==