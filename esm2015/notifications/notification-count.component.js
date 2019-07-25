/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewChild, ElementRef, } from '@angular/core';
/** @enum {string} */
const TdNotificationCountPositionY = {
    Top: 'top',
    Bottom: 'bottom',
    Center: 'center',
};
export { TdNotificationCountPositionY };
/** @enum {string} */
const TdNotificationCountPositionX = {
    Before: 'before',
    After: 'after',
    Center: 'center',
};
export { TdNotificationCountPositionX };
/** @type {?} */
export const DEFAULT_NOTIFICATION_LIMIT = 99;
export class TdNotificationCountComponent {
    constructor() {
        this._notifications = 0;
        this._limit = DEFAULT_NOTIFICATION_LIMIT;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         */
        this.color = 'warn';
    }
    /**
     * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
     * Sets the X position of the notification tip.
     * Defaults to "after" if it has content, else 'center'.
     * @param {?} positionX
     * @return {?}
     */
    set positionX(positionX) {
        this._positionX = positionX;
    }
    /**
     * @return {?}
     */
    get positionX() {
        return this._positionX;
    }
    /**
     * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
     * Sets the Y position of the notification tip.
     * Defaults to "top" if it has content, else 'center'.
     * @param {?} positionY
     * @return {?}
     */
    set positionY(positionY) {
        this._positionY = positionY;
    }
    /**
     * @return {?}
     */
    get positionY() {
        return this._positionY;
    }
    /**
     * notifications?: number | boolean
     * Number for the notification count. Shows component only if the input is a positive number or 'true'
     * @param {?} notifications
     * @return {?}
     */
    set notifications(notifications) {
        this._notifications = notifications;
    }
    /**
     * limit?: number
     * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
     * @param {?} limit
     * @return {?}
     */
    set limit(limit) {
        this._limit = limit;
    }
    /**
     * @return {?}
     */
    get hideHost() {
        return !this.show && !this._hasContent();
    }
    /**
     * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
     * Makes the notification tip show without a count.
     * @return {?}
     */
    get noCount() {
        return this._notifications === true;
    }
    /**
     * Notification display string when a count is available.
     * Anything over 99 gets set as 99+
     * @return {?}
     */
    get notificationsDisplay() {
        if (this._notifications > this._limit) {
            return `${this._limit}+`;
        }
        return this._notifications.toString();
    }
    /**
     * Shows notification tip only when [notifications] is true or a positive integer.
     * @return {?}
     */
    get show() {
        return this._notifications === true || (!isNaN((/** @type {?} */ (this._notifications))) && this._notifications > 0);
    }
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
        }
    }
    /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    _hasContent() {
        if (this.content) {
            /** @type {?} */
            let contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    }
}
TdNotificationCountComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-notification-count',
                template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div\n  *ngIf=\"show\"\n  class=\"td-notification-count mat-{{ color }}\"\n  [class.td-notification-top]=\"positionY === 'top'\"\n  [class.td-notification-bottom]=\"positionY === 'bottom'\"\n  [class.td-notification-before]=\"positionX === 'before'\"\n  [class.td-notification-after]=\"positionX === 'after'\"\n  [class.td-notification-center-y]=\"positionY === 'center'\"\n  [class.td-notification-center-x]=\"positionX === 'center'\"\n  [class.td-notification-no-count]=\"noCount\"\n>\n  {{ noCount ? '' : notificationsDisplay }}\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{position:relative;display:block;text-align:center;min-width:40px;height:40px}:host.td-notification-hidden{min-width:0}.td-notification-count{line-height:21px;width:20px;height:20px;position:absolute;font-size:10px;font-weight:600;border-radius:50%;z-index:1}.td-notification-count.td-notification-center-x{margin-left:auto;margin-right:auto;left:0;right:0}.td-notification-count.td-notification-center-y{margin-top:auto;margin-bottom:auto;top:0;bottom:0}.td-notification-count.td-notification-top{top:0}.td-notification-count.td-notification-bottom{bottom:0}.td-notification-count.td-notification-before{left:0}.td-notification-count.td-notification-after{right:0}.td-notification-count.td-notification-no-count{width:8px;height:8px}.td-notification-count.td-notification-no-count.td-notification-top{top:8px}.td-notification-count.td-notification-no-count.td-notification-bottom{bottom:8px}.td-notification-count.td-notification-no-count.td-notification-before{left:8px}.td-notification-count.td-notification-no-count.td-notification-after{right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-before{right:0;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-after{left:0;right:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-before{right:8px;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-after{left:8px;right:auto}.td-notification-content,.td-notification-content ::ng-deep>*{line-height:40px}"]
            }] }
];
TdNotificationCountComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['content',] }],
    color: [{ type: Input }],
    positionX: [{ type: Input }],
    positionY: [{ type: Input }],
    notifications: [{ type: Input }],
    limit: [{ type: Input }],
    hideHost: [{ type: HostBinding, args: ['class.td-notification-hidden',] }]
};
if (false) {
    /** @type {?} */
    TdNotificationCountComponent.prototype._notifications;
    /** @type {?} */
    TdNotificationCountComponent.prototype._positionY;
    /** @type {?} */
    TdNotificationCountComponent.prototype._positionX;
    /** @type {?} */
    TdNotificationCountComponent.prototype._limit;
    /**
     * Div content wrapper of `ng-content`.
     * @type {?}
     */
    TdNotificationCountComponent.prototype.content;
    /**
     * color?: "primary" | "accent" | "warn"
     * Sets the theme color of the notification tip. Defaults to "warn"
     * @type {?}
     */
    TdNotificationCountComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWNvdW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEdBRVgsTUFBTSxlQUFlLENBQUM7OztJQUdyQixLQUFNLEtBQUs7SUFDWCxRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFROzs7OztJQUlqQixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7O0FBR25CLE1BQU0sT0FBTywwQkFBMEIsR0FBVyxFQUFFO0FBUXBELE1BQU0sT0FBTyw0QkFBNEI7SUFOekM7UUFPVSxtQkFBYyxHQUFxQixDQUFDLENBQUM7UUFHckMsV0FBTSxHQUFXLDBCQUEwQixDQUFDOzs7OztRQVczQyxVQUFLLEdBQWtDLE1BQU0sQ0FBQztJQW1HekQsQ0FBQzs7Ozs7Ozs7SUE1RkMsSUFDSSxTQUFTLENBQUMsU0FBdUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQU9ELElBQ0ksU0FBUyxDQUFDLFNBQXVDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7OztJQU1ELElBQ0ksYUFBYSxDQUFDLGFBQStCO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3RDLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUNJLFFBQVE7UUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFNRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQU1ELElBQUksb0JBQW9CO1FBQ3RCLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFLRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQUssSUFBSSxDQUFDLGNBQWMsRUFBQSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7OztJQUtELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUM7U0FDaEg7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUM7U0FDOUc7SUFDSCxDQUFDOzs7OztJQUtPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztnQkFDWixjQUFjLEdBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtZQUM1RCxPQUFPLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3RHO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUF2SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBRWpDLGdvQkFBa0Q7Z0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O3NCQVVFLFNBQVMsU0FBQyxTQUFTO29CQU1uQixLQUFLO3dCQU9MLEtBQUs7d0JBYUwsS0FBSzs0QkFZTCxLQUFLO29CQVNMLEtBQUs7dUJBS0wsV0FBVyxTQUFDLDhCQUE4Qjs7OztJQTVEM0Msc0RBQTZDOztJQUM3QyxrREFBaUQ7O0lBQ2pELGtEQUFpRDs7SUFDakQsOENBQW9EOzs7OztJQUtwRCwrQ0FBMEM7Ozs7OztJQU0xQyw2Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkge1xuICBUb3AgPSAndG9wJyxcbiAgQm90dG9tID0gJ2JvdHRvbScsXG4gIENlbnRlciA9ICdjZW50ZXInLFxufVxuXG5leHBvcnQgZW51bSBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YIHtcbiAgQmVmb3JlID0gJ2JlZm9yZScsXG4gIEFmdGVyID0gJ2FmdGVyJyxcbiAgQ2VudGVyID0gJ2NlbnRlcicsXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTl9MSU1JVDogbnVtYmVyID0gOTk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW5vdGlmaWNhdGlvbi1jb3VudCcsXG4gIHN0eWxlVXJsczogWycuL25vdGlmaWNhdGlvbi1jb3VudC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2F0aW9uLWNvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkTm90aWZpY2F0aW9uQ291bnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uczogbnVtYmVyIHwgYm9vbGVhbiA9IDA7XG4gIHByaXZhdGUgX3Bvc2l0aW9uWTogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWTtcbiAgcHJpdmF0ZSBfcG9zaXRpb25YOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YO1xuICBwcml2YXRlIF9saW1pdDogbnVtYmVyID0gREVGQVVMVF9OT1RJRklDQVRJT05fTElNSVQ7XG5cbiAgLyoqXG4gICAqIERpdiBjb250ZW50IHdyYXBwZXIgb2YgYG5nLWNvbnRlbnRgLlxuICAgKi9cbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogXCJwcmltYXJ5XCIgfCBcImFjY2VudFwiIHwgXCJ3YXJuXCJcbiAgICogU2V0cyB0aGUgdGhlbWUgY29sb3Igb2YgdGhlIG5vdGlmaWNhdGlvbiB0aXAuIERlZmF1bHRzIHRvIFwid2FyblwiXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAnd2Fybic7XG5cbiAgLyoqXG4gICAqIHBvc2l0aW9uWD86IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblggb3IgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiB8IFwiY2VudGVyXCJcbiAgICogU2V0cyB0aGUgWCBwb3NpdGlvbiBvZiB0aGUgbm90aWZpY2F0aW9uIHRpcC5cbiAgICogRGVmYXVsdHMgdG8gXCJhZnRlclwiIGlmIGl0IGhhcyBjb250ZW50LCBlbHNlICdjZW50ZXInLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uWChwb3NpdGlvblg6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblgpIHtcbiAgICB0aGlzLl9wb3NpdGlvblggPSBwb3NpdGlvblg7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uWCgpOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25YO1xuICB9XG5cbiAgLyoqXG4gICAqIHBvc2l0aW9uWT86IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkgb3IgXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiXG4gICAqIFNldHMgdGhlIFkgcG9zaXRpb24gb2YgdGhlIG5vdGlmaWNhdGlvbiB0aXAuXG4gICAqIERlZmF1bHRzIHRvIFwidG9wXCIgaWYgaXQgaGFzIGNvbnRlbnQsIGVsc2UgJ2NlbnRlcicuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb25ZKHBvc2l0aW9uWTogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWSkge1xuICAgIHRoaXMuX3Bvc2l0aW9uWSA9IHBvc2l0aW9uWTtcbiAgfVxuICBnZXQgcG9zaXRpb25ZKCk6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvblk7XG4gIH1cblxuICAvKipcbiAgICogbm90aWZpY2F0aW9ucz86IG51bWJlciB8IGJvb2xlYW5cbiAgICogTnVtYmVyIGZvciB0aGUgbm90aWZpY2F0aW9uIGNvdW50LiBTaG93cyBjb21wb25lbnQgb25seSBpZiB0aGUgaW5wdXQgaXMgYSBwb3NpdGl2ZSBudW1iZXIgb3IgJ3RydWUnXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zOiBudW1iZXIgfCBib29sZWFuKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9ucyA9IG5vdGlmaWNhdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogbGltaXQ/OiBudW1iZXJcbiAgICogTGltaXQgZm9yIG5vdGlmaWNhdGlvbiBjb3VudC4gSWYgdGhlIG51bWJlciBvZiBub3RpZmljYXRpb25zIGlzIGdyZWF0ZXIgdGhhbiBsaW1pdCwgdGhlbiArIHdpbGwgYmUgYWRkZWQuIERlZmF1bHRzIHRvIDk5LlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGxpbWl0KGxpbWl0OiBudW1iZXIpIHtcbiAgICB0aGlzLl9saW1pdCA9IGxpbWl0O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50ZC1ub3RpZmljYXRpb24taGlkZGVuJylcbiAgZ2V0IGhpZGVIb3N0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5zaG93ICYmICF0aGlzLl9oYXNDb250ZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY29tcG9uZW50IGluIGl0cyAnbm9Db3VudCcgc3RhdGUgaWYgW25vdGlmaWNhdGlvbnNdIGlzIGEgYm9vbGVhbiAndHJ1ZScuXG4gICAqIE1ha2VzIHRoZSBub3RpZmljYXRpb24gdGlwIHNob3cgd2l0aG91dCBhIGNvdW50LlxuICAgKi9cbiAgZ2V0IG5vQ291bnQoKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbnMgPT09IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTm90aWZpY2F0aW9uIGRpc3BsYXkgc3RyaW5nIHdoZW4gYSBjb3VudCBpcyBhdmFpbGFibGUuXG4gICAqIEFueXRoaW5nIG92ZXIgOTkgZ2V0cyBzZXQgYXMgOTkrXG4gICAqL1xuICBnZXQgbm90aWZpY2F0aW9uc0Rpc3BsYXkoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fbm90aWZpY2F0aW9ucyA+IHRoaXMuX2xpbWl0KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5fbGltaXR9K2A7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25zLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3Mgbm90aWZpY2F0aW9uIHRpcCBvbmx5IHdoZW4gW25vdGlmaWNhdGlvbnNdIGlzIHRydWUgb3IgYSBwb3NpdGl2ZSBpbnRlZ2VyLlxuICAgKi9cbiAgZ2V0IHNob3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbnMgPT09IHRydWUgfHwgKCFpc05hTig8YW55PnRoaXMuX25vdGlmaWNhdGlvbnMpICYmIHRoaXMuX25vdGlmaWNhdGlvbnMgPiAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBbcG9zaXRpb25YXSBhbmQgW3Bvc2l0aW9uWV0gaGF2ZSBiZWVuIHNldCBhcyBpbnB1dHMsIGVsc2UgdXNlIGRlZmF1bHRzIGRlcGVuZGluZyBvbiBjb21wb25lbnQgY29udGVudC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3Bvc2l0aW9uWCkge1xuICAgICAgdGhpcy5wb3NpdGlvblggPSB0aGlzLl9oYXNDb250ZW50KCkgPyBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YLkFmdGVyIDogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWC5DZW50ZXI7XG4gICAgfVxuICAgIGlmICghdGhpcy5fcG9zaXRpb25ZKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uWSA9IHRoaXMuX2hhc0NvbnRlbnQoKSA/IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkuVG9wIDogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWS5DZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjaGVjayBpZiBlbGVtZW50IGhhcyBhbnkga2luZCBvZiBjb250ZW50IChlbGVtZW50cyBvciB0ZXh0KVxuICAgKi9cbiAgcHJpdmF0ZSBfaGFzQ29udGVudCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICBsZXQgY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICByZXR1cm4gY29udGVudEVsZW1lbnQgJiYgKGNvbnRlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgISFjb250ZW50RWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==