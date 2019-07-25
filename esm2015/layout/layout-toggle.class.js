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
            this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(() => {
                this._toggleVisibility();
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvZ2dsZS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbImxheW91dC10b2dnbGUuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWUsWUFBWSxFQUFtRCxNQUFNLGVBQWUsQ0FBQztBQUlsSCxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFJbkUsc0NBTUM7OztJQUxDLGtDQUFnQjs7SUFDaEIsbUNBQW9COzs7O0lBQ3BCLG9EQUF5Qzs7OztJQUN6QyxrREFBdUM7Ozs7SUFDdkMsbURBQXdDOztBQUcxQyxNQUFNLE9BQU8sZ0JBQWdCO0NBQUc7OztBQUdoQyxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDOzs7O0FBRXZFLE1BQU0sT0FBZ0IsWUFBYSxTQUFRLHdCQUF3Qjs7Ozs7O0lBbUJqRSxZQUFzQixPQUF5QixFQUFVLFNBQW9CLEVBQVUsV0FBdUI7UUFDNUcsS0FBSyxFQUFFLENBQUM7UUFEWSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWhCdEcsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFpQnZDLGtDQUFrQztRQUNsQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7Ozs7O0lBaEJELElBQ0ksY0FBYyxDQUFDLGNBQXVCO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFZRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDdkUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELGtFQUFrRTtRQUNsRSxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7OztJQU1ELGFBQWEsQ0FBQyxLQUFZO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQiw4REFBOEQ7WUFDOUQseUJBQXlCO1lBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDckMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBSU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDNUU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRU8sZ0JBQWdCO1FBQ3RCLDhCQUE4QjtRQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLCtEQUErRCxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7OzZCQXJFQSxLQUFLLFNBQUMsZ0JBQWdCOzRCQXdDdEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWxEakMsbUNBQWtDOztJQUVsQyxvQ0FBc0M7O0lBQ3RDLHVDQUF5Qzs7SUFlN0IsK0JBQW1DOztJQUFFLGlDQUE0Qjs7SUFBRSxtQ0FBK0I7Ozs7O0lBOEM5RyxpREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxheW91dFRvZ2dsYWJsZSB7XG4gIG9wZW5lZDogYm9vbGVhbjtcbiAgc2lkZW5hdjogTWF0U2lkZW5hdjtcbiAgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PjtcbiAgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG4gIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0Pjtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dFRvZ2dsZUJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkTGF5b3V0VG9nZ2xlTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlZChMYXlvdXRUb2dnbGVCYXNlKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheW91dFRvZ2dsZSBleHRlbmRzIF9UZExheW91dFRvZ2dsZU1peGluQmFzZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSUNhbkRpc2FibGUge1xuICBwcml2YXRlIF90b2dnbGVTdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGlkZVdoZW5PcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogaGlkZVdoZW5PcGVuZWQ/OiBib29sZWFuXG4gICAqIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGhvc3Qgd2lsbCBiZSBoaWRkZW4gd2hlblxuICAgKiB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuXG4gICAqL1xuICBASW5wdXQoJ2hpZGVXaGVuT3BlbmVkJylcbiAgc2V0IGhpZGVXaGVuT3BlbmVkKGhpZGVXaGVuT3BlbmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVdoZW5PcGVuZWQgPSBoaWRlV2hlbk9wZW5lZDtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2xheW91dDogSUxheW91dFRvZ2dsYWJsZSwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gaWYgbGF5b3V0IGhhcyBub3QgYmVlbiBwcm92aWRlZFxuICAgIC8vIHNob3cgd2FybiBtZXNzYWdlXG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX25vTGF5b3V0TWVzc2FnZSgpO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1sYXlvdXQtbWVudS1idXR0b24nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuX2xheW91dCAmJiB0aGlzLl9sYXlvdXQuc2lkZW5hdikge1xuICAgICAgdGhpcy5fdG9nZ2xlU3VicyA9IHRoaXMuX2xheW91dC5zaWRlbmF2Ll9hbmltYXRpb25TdGFydGVkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBleGVjdXRlIHRvZ2dsZVZpc2liaWxpdHkgc2luY2UgdGhlIG9uT3BlblN0YXJ0IGFuZCBvbkNsb3NlU3RhcnRcbiAgICAvLyBtZXRob2RzIG1pZ2h0IG5vdCBiZSBleGVjdXRlZCBhbHdheXMgd2hlbiB0aGUgZWxlbWVudCBpcyByZW5kZXJlZFxuICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90b2dnbGVTdWJzKSB7XG4gICAgICB0aGlzLl90b2dnbGVTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl90b2dnbGVTdWJzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciB0aGUgbGF5b3V0IHRvZ2dsZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja0xpc3RlbmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAvLyBpZiBsYXlvdXQgaGFzIGJlZW4gcHJvdmlkZWQsIHRyeSB0cmlnZ2VyaW5nIHRoZSBjbGljayBvbiBpdFxuICAgICAgLy8gZWxzZSBzaG93IHdhcm4gbWVzc2FnZVxuICAgICAgaWYgKHRoaXMuX2xheW91dCAmJiB0aGlzLl9sYXlvdXQub3Blbikge1xuICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX25vTGF5b3V0TWVzc2FnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFic3RyYWN0IG9uQ2xpY2soKTogdm9pZDtcblxuICBwcml2YXRlIF90b2dnbGVWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sYXlvdXQpIHtcbiAgICAgIGlmICh0aGlzLl9sYXlvdXQuc2lkZW5hdi5vcGVuZWQgJiYgdGhpcy5faGlkZVdoZW5PcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vTGF5b3V0TWVzc2FnZSgpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBjb25zb2xlLndhcm4oJ0NvdmFsZW50OiBQYXJlbnQgbGF5b3V0IG5vdCBmb3VuZCBmb3IgbGF5b3V0IHRvZ2dsZSBkaXJlY3RpdmUnKTtcbiAgfVxufVxuIl19