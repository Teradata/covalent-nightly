/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewChild, ElementRef, } from '@angular/core';
/** @enum {string} */
var TdNotificationCountPositionY = {
    Top: 'top',
    Bottom: 'bottom',
    Center: 'center',
};
export { TdNotificationCountPositionY };
/** @enum {string} */
var TdNotificationCountPositionX = {
    Before: 'before',
    After: 'after',
    Center: 'center',
};
export { TdNotificationCountPositionX };
/** @type {?} */
export var DEFAULT_NOTIFICATION_LIMIT = 99;
var TdNotificationCountComponent = /** @class */ (function () {
    function TdNotificationCountComponent() {
        this._notifications = 0;
        this._limit = DEFAULT_NOTIFICATION_LIMIT;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         */
        this.color = 'warn';
    }
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
        get: /**
         * @return {?}
         */
        function () {
            return this._positionX;
        },
        /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         */
        set: /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         * @param {?} positionX
         * @return {?}
         */
        function (positionX) {
            this._positionX = positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
        get: /**
         * @return {?}
         */
        function () {
            return this._positionY;
        },
        /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         */
        set: /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         * @param {?} positionY
         * @return {?}
         */
        function (positionY) {
            this._positionY = positionY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
        /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         */
        set: /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         * @param {?} notifications
         * @return {?}
         */
        function (notifications) {
            this._notifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "limit", {
        /**
         * limit?: number
         * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
         */
        set: /**
         * limit?: number
         * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
         * @param {?} limit
         * @return {?}
         */
        function (limit) {
            this._limit = limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.show && !this._hasContent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
        /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         */
        get: /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         * @return {?}
         */
        function () {
            return this._notifications === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
        /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         */
        get: /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         * @return {?}
         */
        function () {
            if (this._notifications > this._limit) {
                return this._limit + "+";
            }
            return this._notifications.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
        /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         */
        get: /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         * @return {?}
         */
        function () {
            return this._notifications === true || (!isNaN((/** @type {?} */ (this._notifications))) && this._notifications > 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     */
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    TdNotificationCountComponent.prototype.ngAfterContentInit = /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    function () {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
        }
    };
    /**
     * Method to check if element has any kind of content (elements or text)
     */
    /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    TdNotificationCountComponent.prototype._hasContent = /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    function () {
        if (this.content) {
            /** @type {?} */
            var contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    };
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
    return TdNotificationCountComponent;
}());
export { TdNotificationCountComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWNvdW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEdBRVgsTUFBTSxlQUFlLENBQUM7OztJQUdyQixLQUFNLEtBQUs7SUFDWCxRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFROzs7OztJQUlqQixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7O0FBR25CLE1BQU0sS0FBTywwQkFBMEIsR0FBVyxFQUFFO0FBRXBEO0lBQUE7UUFPVSxtQkFBYyxHQUFxQixDQUFDLENBQUM7UUFHckMsV0FBTSxHQUFXLDBCQUEwQixDQUFDOzs7OztRQVczQyxVQUFLLEdBQWtDLE1BQU0sQ0FBQztJQW1HekQsQ0FBQztJQTVGQyxzQkFDSSxtREFBUzs7OztRQUdiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7UUFYRDs7OztXQUlHOzs7Ozs7OztRQUNILFVBQ2MsU0FBdUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFVRCxzQkFDSSxtREFBUzs7OztRQUdiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7UUFYRDs7OztXQUlHOzs7Ozs7OztRQUNILFVBQ2MsU0FBdUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFTRCxzQkFDSSx1REFBYTtRQUxqQjs7O1dBR0c7Ozs7Ozs7UUFDSCxVQUNrQixhQUErQjtZQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLCtDQUFLO1FBTFQ7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksa0RBQVE7Ozs7UUFEWjtZQUVFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksaURBQU87UUFKWDs7O1dBR0c7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDhEQUFvQjtRQUp4Qjs7O1dBR0c7Ozs7OztRQUNIO1lBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLE9BQVUsSUFBSSxDQUFDLE1BQU0sTUFBRyxDQUFDO2FBQzFCO1lBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksOENBQUk7UUFIUjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQkFBSyxJQUFJLENBQUMsY0FBYyxFQUFBLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseURBQWtCOzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDO1NBQ2hIO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDO1NBQzlHO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNLLGtEQUFXOzs7O0lBQW5CO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztnQkFDWixjQUFjLEdBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtZQUM1RCxPQUFPLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3RHO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF2SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBRWpDLGdvQkFBa0Q7b0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7OzswQkFVRSxTQUFTLFNBQUMsU0FBUzt3QkFNbkIsS0FBSzs0QkFPTCxLQUFLOzRCQWFMLEtBQUs7Z0NBWUwsS0FBSzt3QkFTTCxLQUFLOzJCQUtMLFdBQVcsU0FBQyw4QkFBOEI7O0lBcUQ3QyxtQ0FBQztDQUFBLEFBeEhELElBd0hDO1NBbEhZLDRCQUE0Qjs7O0lBQ3ZDLHNEQUE2Qzs7SUFDN0Msa0RBQWlEOztJQUNqRCxrREFBaUQ7O0lBQ2pELDhDQUFvRDs7Ozs7SUFLcEQsK0NBQTBDOzs7Ozs7SUFNMUMsNkNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIHtcbiAgVG9wID0gJ3RvcCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBDZW50ZXIgPSAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGVudW0gVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWCB7XG4gIEJlZm9yZSA9ICdiZWZvcmUnLFxuICBBZnRlciA9ICdhZnRlcicsXG4gIENlbnRlciA9ICdjZW50ZXInLFxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fTElNSVQ6IG51bWJlciA9IDk5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1ub3RpZmljYXRpb24tY291bnQnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbi1jb3VudC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5vdGlmaWNhdGlvbkNvdW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbnM6IG51bWJlciB8IGJvb2xlYW4gPSAwO1xuICBwcml2YXRlIF9wb3NpdGlvblk6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uWDogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWDtcbiAgcHJpdmF0ZSBfbGltaXQ6IG51bWJlciA9IERFRkFVTFRfTk9USUZJQ0FUSU9OX0xJTUlUO1xuXG4gIC8qKlxuICAgKiBEaXYgY29udGVudCB3cmFwcGVyIG9mIGBuZy1jb250ZW50YC5cbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IFwicHJpbWFyeVwiIHwgXCJhY2NlbnRcIiB8IFwid2FyblwiXG4gICAqIFNldHMgdGhlIHRoZW1lIGNvbG9yIG9mIHRoZSBub3RpZmljYXRpb24gdGlwLiBEZWZhdWx0cyB0byBcIndhcm5cIlxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3dhcm4nO1xuXG4gIC8qKlxuICAgKiBwb3NpdGlvblg/OiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YIG9yIFwiYmVmb3JlXCIgfCBcImFmdGVyXCIgfCBcImNlbnRlclwiXG4gICAqIFNldHMgdGhlIFggcG9zaXRpb24gb2YgdGhlIG5vdGlmaWNhdGlvbiB0aXAuXG4gICAqIERlZmF1bHRzIHRvIFwiYWZ0ZXJcIiBpZiBpdCBoYXMgY29udGVudCwgZWxzZSAnY2VudGVyJy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvblgocG9zaXRpb25YOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YKSB7XG4gICAgdGhpcy5fcG9zaXRpb25YID0gcG9zaXRpb25YO1xuICB9XG4gIGdldCBwb3NpdGlvblgoKTogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwb3NpdGlvblk/OiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIG9yIFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJjZW50ZXJcIlxuICAgKiBTZXRzIHRoZSBZIHBvc2l0aW9uIG9mIHRoZSBub3RpZmljYXRpb24gdGlwLlxuICAgKiBEZWZhdWx0cyB0byBcInRvcFwiIGlmIGl0IGhhcyBjb250ZW50LCBlbHNlICdjZW50ZXInLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uWShwb3NpdGlvblk6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkpIHtcbiAgICB0aGlzLl9wb3NpdGlvblkgPSBwb3NpdGlvblk7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uWSgpOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25ZO1xuICB9XG5cbiAgLyoqXG4gICAqIG5vdGlmaWNhdGlvbnM/OiBudW1iZXIgfCBib29sZWFuXG4gICAqIE51bWJlciBmb3IgdGhlIG5vdGlmaWNhdGlvbiBjb3VudC4gU2hvd3MgY29tcG9uZW50IG9ubHkgaWYgdGhlIGlucHV0IGlzIGEgcG9zaXRpdmUgbnVtYmVyIG9yICd0cnVlJ1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG5vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9uczogbnVtYmVyIHwgYm9vbGVhbikge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIGxpbWl0PzogbnVtYmVyXG4gICAqIExpbWl0IGZvciBub3RpZmljYXRpb24gY291bnQuIElmIHRoZSBudW1iZXIgb2Ygbm90aWZpY2F0aW9ucyBpcyBncmVhdGVyIHRoYW4gbGltaXQsIHRoZW4gKyB3aWxsIGJlIGFkZGVkLiBEZWZhdWx0cyB0byA5OS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBsaW1pdChsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGQtbm90aWZpY2F0aW9uLWhpZGRlbicpXG4gIGdldCBoaWRlSG9zdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuc2hvdyAmJiAhdGhpcy5faGFzQ29udGVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbXBvbmVudCBpbiBpdHMgJ25vQ291bnQnIHN0YXRlIGlmIFtub3RpZmljYXRpb25zXSBpcyBhIGJvb2xlYW4gJ3RydWUnLlxuICAgKiBNYWtlcyB0aGUgbm90aWZpY2F0aW9uIHRpcCBzaG93IHdpdGhvdXQgYSBjb3VudC5cbiAgICovXG4gIGdldCBub0NvdW50KCk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25zID09PSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vdGlmaWNhdGlvbiBkaXNwbGF5IHN0cmluZyB3aGVuIGEgY291bnQgaXMgYXZhaWxhYmxlLlxuICAgKiBBbnl0aGluZyBvdmVyIDk5IGdldHMgc2V0IGFzIDk5K1xuICAgKi9cbiAgZ2V0IG5vdGlmaWNhdGlvbnNEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbnMgPiB0aGlzLl9saW1pdCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMuX2xpbWl0fStgO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9ucy50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIG5vdGlmaWNhdGlvbiB0aXAgb25seSB3aGVuIFtub3RpZmljYXRpb25zXSBpcyB0cnVlIG9yIGEgcG9zaXRpdmUgaW50ZWdlci5cbiAgICovXG4gIGdldCBzaG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25zID09PSB0cnVlIHx8ICghaXNOYU4oPGFueT50aGlzLl9ub3RpZmljYXRpb25zKSAmJiB0aGlzLl9ub3RpZmljYXRpb25zID4gMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgW3Bvc2l0aW9uWF0gYW5kIFtwb3NpdGlvblldIGhhdmUgYmVlbiBzZXQgYXMgaW5wdXRzLCBlbHNlIHVzZSBkZWZhdWx0cyBkZXBlbmRpbmcgb24gY29tcG9uZW50IGNvbnRlbnQuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9wb3NpdGlvblgpIHtcbiAgICAgIHRoaXMucG9zaXRpb25YID0gdGhpcy5faGFzQ29udGVudCgpID8gVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWC5BZnRlciA6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblguQ2VudGVyO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3Bvc2l0aW9uWSkge1xuICAgICAgdGhpcy5wb3NpdGlvblkgPSB0aGlzLl9oYXNDb250ZW50KCkgPyBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZLlRvcCA6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkuQ2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2hlY2sgaWYgZWxlbWVudCBoYXMgYW55IGtpbmQgb2YgY29udGVudCAoZWxlbWVudHMgb3IgdGV4dClcbiAgICovXG4gIHByaXZhdGUgX2hhc0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgbGV0IGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgcmV0dXJuIGNvbnRlbnRFbGVtZW50ICYmIChjb250ZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwIHx8ICEhY29udGVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=