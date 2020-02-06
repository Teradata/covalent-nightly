/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        // if layout has not been provided
        // show warn message
        if (!this._layout) {
            this._noLayoutMessage();
        }
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
        if (this._layout && this._layout.sidenav) {
            this._toggleSubs = this._layout.sidenav._animationStarted.subscribe((/**
             * @return {?}
             */
            () => {
                this._toggleVisibility();
            }));
        }
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
            // if layout has been provided, try triggering the click on it
            // else show warn message
            if (this._layout && this._layout.open) {
                this.onClick();
            }
            else {
                this._noLayoutMessage();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _toggleVisibility() {
        if (this._layout) {
            if (this._layout.sidenav.opened && this._hideWhenOpened) {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
            }
            else {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _noLayoutMessage() {
        /* tslint:disable-next-line */
        console.warn('Covalent: Parent layout not found for layout toggle directive');
    }
}
LayoutToggle.propDecorators = {
    hideWhenOpened: [{ type: Input, args: ['hideWhenOpened',] }],
    clickListener: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvZ2dsZS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbImxheW91dC10b2dnbGUuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWUsWUFBWSxFQUFtRCxNQUFNLGVBQWUsQ0FBQztBQUlsSCxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFJbkUsc0NBTUM7OztJQUxDLGtDQUFnQjs7SUFDaEIsbUNBQW9COzs7O0lBQ3BCLG9EQUF5Qzs7OztJQUN6QyxrREFBdUM7Ozs7SUFDdkMsbURBQXdDOztBQUcxQyxNQUFNLE9BQU8sZ0JBQWdCO0NBQUc7OztBQUdoQyxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDOzs7O0FBRXZFLE1BQU0sT0FBZ0IsWUFBYSxTQUFRLHdCQUF3Qjs7Ozs7O0lBbUJqRSxZQUFzQixPQUF5QixFQUFVLFNBQW9CLEVBQVUsV0FBdUI7UUFDNUcsS0FBSyxFQUFFLENBQUM7UUFEWSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWhCdEcsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFpQnZDLGtDQUFrQztRQUNsQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7Ozs7O0lBaEJELElBQ0ksY0FBYyxDQUFDLGNBQXVCO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFZRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUzs7O1lBQUMsR0FBRyxFQUFFO2dCQUN2RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0Qsa0VBQWtFO1FBQ2xFLG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsYUFBYSxDQUFDLEtBQVk7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLDhEQUE4RDtZQUM5RCx5QkFBeUI7WUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7U0FDRjtJQUNILENBQUM7Ozs7O0lBSU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDNUU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVPLGdCQUFnQjtRQUN0Qiw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQywrREFBK0QsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs2QkFyRUEsS0FBSyxTQUFDLGdCQUFnQjs0QkF3Q3RCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFsRGpDLG1DQUFrQzs7Ozs7SUFFbEMsb0NBQXNDOzs7OztJQUN0Qyx1Q0FBeUM7Ozs7O0lBZTdCLCtCQUFtQzs7Ozs7SUFBRSxpQ0FBNEI7Ozs7O0lBQUUsbUNBQStCOzs7OztJQThDOUcsaURBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdERyYXdlclRvZ2dsZVJlc3VsdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMYXlvdXRUb2dnbGFibGUge1xuICBvcGVuZWQ6IGJvb2xlYW47XG4gIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG4gIHRvZ2dsZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG4gIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+O1xuICBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXRUb2dnbGVCYXNlIHt9XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZExheW91dFRvZ2dsZU1peGluQmFzZSA9IG1peGluRGlzYWJsZWQoTGF5b3V0VG9nZ2xlQmFzZSk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXlvdXRUb2dnbGUgZXh0ZW5kcyBfVGRMYXlvdXRUb2dnbGVNaXhpbkJhc2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElDYW5EaXNhYmxlIHtcbiAgcHJpdmF0ZSBfdG9nZ2xlU3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2hpZGVXaGVuT3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGhpZGVXaGVuT3BlbmVkPzogYm9vbGVhblxuICAgKiBXaGVuIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZSBob3N0IHdpbGwgYmUgaGlkZGVuIHdoZW5cbiAgICogdGhlIHNpZGVuYXYgaXMgb3BlbmVkLlxuICAgKi9cbiAgQElucHV0KCdoaWRlV2hlbk9wZW5lZCcpXG4gIHNldCBoaWRlV2hlbk9wZW5lZChoaWRlV2hlbk9wZW5lZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVXaGVuT3BlbmVkID0gaGlkZVdoZW5PcGVuZWQ7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9sYXlvdXQ6IElMYXlvdXRUb2dnbGFibGUsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIC8vIGlmIGxheW91dCBoYXMgbm90IGJlZW4gcHJvdmlkZWRcbiAgICAvLyBzaG93IHdhcm4gbWVzc2FnZVxuICAgIGlmICghdGhpcy5fbGF5b3V0KSB7XG4gICAgICB0aGlzLl9ub0xheW91dE1lc3NhZ2UoKTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtbGF5b3V0LW1lbnUtYnV0dG9uJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLl9sYXlvdXQgJiYgdGhpcy5fbGF5b3V0LnNpZGVuYXYpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVN1YnMgPSB0aGlzLl9sYXlvdXQuc2lkZW5hdi5fYW5pbWF0aW9uU3RhcnRlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gZXhlY3V0ZSB0b2dnbGVWaXNpYmlsaXR5IHNpbmNlIHRoZSBvbk9wZW5TdGFydCBhbmQgb25DbG9zZVN0YXJ0XG4gICAgLy8gbWV0aG9kcyBtaWdodCBub3QgYmUgZXhlY3V0ZWQgYWx3YXlzIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVuZGVyZWRcbiAgICB0aGlzLl90b2dnbGVWaXNpYmlsaXR5KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlU3Vicykge1xuICAgICAgdGhpcy5fdG9nZ2xlU3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fdG9nZ2xlU3VicyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGNsaWNrIGV2ZW50IHRvIHRyaWdnZXIgdGhlIGxheW91dCB0b2dnbGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgLy8gaWYgbGF5b3V0IGhhcyBiZWVuIHByb3ZpZGVkLCB0cnkgdHJpZ2dlcmluZyB0aGUgY2xpY2sgb24gaXRcbiAgICAgIC8vIGVsc2Ugc2hvdyB3YXJuIG1lc3NhZ2VcbiAgICAgIGlmICh0aGlzLl9sYXlvdXQgJiYgdGhpcy5fbGF5b3V0Lm9wZW4pIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ub0xheW91dE1lc3NhZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCBvbkNsaWNrKCk6IHZvaWQ7XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbGF5b3V0KSB7XG4gICAgICBpZiAodGhpcy5fbGF5b3V0LnNpZGVuYXYub3BlbmVkICYmIHRoaXMuX2hpZGVXaGVuT3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ub0xheW91dE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgY29uc29sZS53YXJuKCdDb3ZhbGVudDogUGFyZW50IGxheW91dCBub3QgZm91bmQgZm9yIGxheW91dCB0b2dnbGUgZGlyZWN0aXZlJyk7XG4gIH1cbn1cbiJdfQ==