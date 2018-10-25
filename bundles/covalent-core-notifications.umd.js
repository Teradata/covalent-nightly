(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/notifications', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.notifications = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var TdNotificationCountPositionY = {
        Top: 'top',
        Bottom: 'bottom',
        Center: 'center',
    };
    /** @enum {string} */
    var TdNotificationCountPositionX = {
        Before: 'before',
        After: 'after',
        Center: 'center',
    };
    /** @type {?} */
    var DEFAULT_NOTIFICATION_LIMIT = 99;
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
             */ function () {
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
             */ function (positionX) {
                this._positionX = positionX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (positionY) {
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
             */ function (notifications) {
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
             */ function (limit) {
                this._limit = limit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
                return this._notifications === true || (!isNaN(( /** @type {?} */(this._notifications))) && this._notifications > 0);
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
            { type: core.Component, args: [{
                        selector: 'td-notification-count',
                        template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div *ngIf=\"show\"\n     class=\"td-notification-count mat-{{color}}\"\n     [class.td-notification-top]=\"positionY === 'top'\"\n     [class.td-notification-bottom]=\"positionY === 'bottom'\"\n     [class.td-notification-before]=\"positionX === 'before'\"\n     [class.td-notification-after]=\"positionX === 'after'\"\n     [class.td-notification-center-y]=\"positionY === 'center'\"\n     [class.td-notification-center-x]=\"positionX === 'center'\"\n     [class.td-notification-no-count]=\"noCount\">\n  {{noCount ? '' : notificationsDisplay}}\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{position:relative;display:block;text-align:center;min-width:40px;height:40px}:host.td-notification-hidden{min-width:0}.td-notification-count{line-height:21px;width:20px;height:20px;position:absolute;font-size:10px;font-weight:600;border-radius:50%;z-index:1}.td-notification-count.td-notification-center-x{margin-left:auto;margin-right:auto;left:0;right:0}.td-notification-count.td-notification-center-y{margin-top:auto;margin-bottom:auto;top:0;bottom:0}.td-notification-count.td-notification-top{top:0}.td-notification-count.td-notification-bottom{bottom:0}.td-notification-count.td-notification-before{left:0}.td-notification-count.td-notification-after{right:0}.td-notification-count.td-notification-no-count{width:8px;height:8px}.td-notification-count.td-notification-no-count.td-notification-top{top:8px}.td-notification-count.td-notification-no-count.td-notification-bottom{bottom:8px}.td-notification-count.td-notification-no-count.td-notification-before{left:8px}.td-notification-count.td-notification-no-count.td-notification-after{right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-before{right:0;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-after{left:0;right:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-before{right:8px;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-after{left:8px;right:auto}.td-notification-content,.td-notification-content ::ng-deep>*{line-height:40px}"]
                    }] }
        ];
        TdNotificationCountComponent.propDecorators = {
            content: [{ type: core.ViewChild, args: ['content',] }],
            color: [{ type: core.Input }],
            positionX: [{ type: core.Input }],
            positionY: [{ type: core.Input }],
            notifications: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            hideHost: [{ type: core.HostBinding, args: ['class.td-notification-hidden',] }]
        };
        return TdNotificationCountComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_NOTIFICATIONS = [
        TdNotificationCountComponent,
    ];
    var CovalentNotificationsModule = /** @class */ (function () {
        function CovalentNotificationsModule() {
        }
        CovalentNotificationsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TD_NOTIFICATIONS,
                        ],
                        exports: [
                            TD_NOTIFICATIONS,
                        ],
                    },] }
        ];
        return CovalentNotificationsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentNotificationsModule = CovalentNotificationsModule;
    exports.TdNotificationCountPositionY = TdNotificationCountPositionY;
    exports.TdNotificationCountPositionX = TdNotificationCountPositionX;
    exports.DEFAULT_NOTIFICATION_LIMIT = DEFAULT_NOTIFICATION_LIMIT;
    exports.TdNotificationCountComponent = TdNotificationCountComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1ub3RpZmljYXRpb25zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICAgICAgIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIHtcbiAgVG9wID0gJ3RvcCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBDZW50ZXIgPSAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGVudW0gVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWCB7XG4gIEJlZm9yZSA9ICdiZWZvcmUnLFxuICBBZnRlciA9ICdhZnRlcicsXG4gIENlbnRlciA9ICdjZW50ZXInLFxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fTElNSVQ6IG51bWJlciA9IDk5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1ub3RpZmljYXRpb24tY291bnQnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGROb3RpZmljYXRpb25Db3VudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbnM6IG51bWJlciB8IGJvb2xlYW4gPSAwO1xuICBwcml2YXRlIF9wb3NpdGlvblk6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uWDogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWDtcbiAgcHJpdmF0ZSBfbGltaXQ6IG51bWJlciA9IERFRkFVTFRfTk9USUZJQ0FUSU9OX0xJTUlUO1xuXG4gIC8qKlxuICAgKiBEaXYgY29udGVudCB3cmFwcGVyIG9mIGBuZy1jb250ZW50YC5cbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IFwicHJpbWFyeVwiIHwgXCJhY2NlbnRcIiB8IFwid2FyblwiXG4gICAqIFNldHMgdGhlIHRoZW1lIGNvbG9yIG9mIHRoZSBub3RpZmljYXRpb24gdGlwLiBEZWZhdWx0cyB0byBcIndhcm5cIlxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3dhcm4nO1xuXG4gIC8qKlxuICAgKiBwb3NpdGlvblg/OiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YIG9yIFwiYmVmb3JlXCIgfCBcImFmdGVyXCIgfCBcImNlbnRlclwiXG4gICAqIFNldHMgdGhlIFggcG9zaXRpb24gb2YgdGhlIG5vdGlmaWNhdGlvbiB0aXAuXG4gICAqIERlZmF1bHRzIHRvIFwiYWZ0ZXJcIiBpZiBpdCBoYXMgY29udGVudCwgZWxzZSAnY2VudGVyJy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvblgocG9zaXRpb25YOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YKSB7XG4gICAgdGhpcy5fcG9zaXRpb25YID0gcG9zaXRpb25YO1xuICB9XG4gIGdldCBwb3NpdGlvblgoKTogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwb3NpdGlvblk/OiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIG9yIFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJjZW50ZXJcIlxuICAgKiBTZXRzIHRoZSBZIHBvc2l0aW9uIG9mIHRoZSBub3RpZmljYXRpb24gdGlwLlxuICAgKiBEZWZhdWx0cyB0byBcInRvcFwiIGlmIGl0IGhhcyBjb250ZW50LCBlbHNlICdjZW50ZXInLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uWShwb3NpdGlvblk6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkpIHtcbiAgICB0aGlzLl9wb3NpdGlvblkgPSBwb3NpdGlvblk7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uWSgpOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25ZO1xuICB9XG5cbiAgLyoqXG4gICAqIG5vdGlmaWNhdGlvbnM/OiBudW1iZXIgfCBib29sZWFuXG4gICAqIE51bWJlciBmb3IgdGhlIG5vdGlmaWNhdGlvbiBjb3VudC4gU2hvd3MgY29tcG9uZW50IG9ubHkgaWYgdGhlIGlucHV0IGlzIGEgcG9zaXRpdmUgbnVtYmVyIG9yICd0cnVlJ1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG5vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9uczogbnVtYmVyIHwgYm9vbGVhbikge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zO1xuICB9XG5cbiAgIC8qKlxuICAgICogbGltaXQ/OiBudW1iZXJcbiAgICAqIExpbWl0IGZvciBub3RpZmljYXRpb24gY291bnQuIElmIHRoZSBudW1iZXIgb2Ygbm90aWZpY2F0aW9ucyBpcyBncmVhdGVyIHRoYW4gbGltaXQsIHRoZW4gKyB3aWxsIGJlIGFkZGVkLiBEZWZhdWx0cyB0byA5OS5cbiAgICAqL1xuICBASW5wdXQoKVxuICBzZXQgbGltaXQobGltaXQ6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRkLW5vdGlmaWNhdGlvbi1oaWRkZW4nKVxuICBnZXQgaGlkZUhvc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnNob3cgJiYgIXRoaXMuX2hhc0NvbnRlbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb21wb25lbnQgaW4gaXRzICdub0NvdW50JyBzdGF0ZSBpZiBbbm90aWZpY2F0aW9uc10gaXMgYSBib29sZWFuICd0cnVlJy5cbiAgICogTWFrZXMgdGhlIG5vdGlmaWNhdGlvbiB0aXAgc2hvdyB3aXRob3V0IGEgY291bnQuXG4gICAqL1xuICBnZXQgbm9Db3VudCgpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9ucyA9PT0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3RpZmljYXRpb24gZGlzcGxheSBzdHJpbmcgd2hlbiBhIGNvdW50IGlzIGF2YWlsYWJsZS5cbiAgICogQW55dGhpbmcgb3ZlciA5OSBnZXRzIHNldCBhcyA5OStcbiAgICovXG4gIGdldCBub3RpZmljYXRpb25zRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9ub3RpZmljYXRpb25zID4gdGhpcy5fbGltaXQpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLl9saW1pdH0rYDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbnMudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBub3RpZmljYXRpb24gdGlwIG9ubHkgd2hlbiBbbm90aWZpY2F0aW9uc10gaXMgdHJ1ZSBvciBhIHBvc2l0aXZlIGludGVnZXIuXG4gICAqL1xuICBnZXQgc2hvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9ucyA9PT0gdHJ1ZSB8fCAoIWlzTmFOKDxhbnk+dGhpcy5fbm90aWZpY2F0aW9ucykgJiYgdGhpcy5fbm90aWZpY2F0aW9ucyA+IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIFtwb3NpdGlvblhdIGFuZCBbcG9zaXRpb25ZXSBoYXZlIGJlZW4gc2V0IGFzIGlucHV0cywgZWxzZSB1c2UgZGVmYXVsdHMgZGVwZW5kaW5nIG9uIGNvbXBvbmVudCBjb250ZW50LlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcG9zaXRpb25YKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uWCA9IHRoaXMuX2hhc0NvbnRlbnQoKSA/IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblguQWZ0ZXIgOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YLkNlbnRlcjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9wb3NpdGlvblkpIHtcbiAgICAgIHRoaXMucG9zaXRpb25ZID0gdGhpcy5faGFzQ29udGVudCgpID8gVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWS5Ub3AgOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZLkNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNoZWNrIGlmIGVsZW1lbnQgaGFzIGFueSBraW5kIG9mIGNvbnRlbnQgKGVsZW1lbnRzIG9yIHRleHQpXG4gICAqL1xuICBwcml2YXRlIF9oYXNDb250ZW50KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIGxldCBjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIHJldHVybiBjb250ZW50RWxlbWVudCAmJiAoY29udGVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAhIWNvbnRlbnRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZE5vdGlmaWNhdGlvbkNvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50JztcblxuY29uc3QgVERfTk9USUZJQ0FUSU9OUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkTm90aWZpY2F0aW9uQ291bnRDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9OT1RJRklDQVRJT05TLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfTk9USUZJQ0FUSU9OUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnROb3RpZmljYXRpb25zTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0NoaWxkIiwiSW5wdXQiLCJIb3N0QmluZGluZyIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O1FBSUUsS0FBTSxLQUFLO1FBQ1gsUUFBUyxRQUFRO1FBQ2pCLFFBQVMsUUFBUTs7OztRQUlqQixRQUFTLFFBQVE7UUFDakIsT0FBUSxPQUFPO1FBQ2YsUUFBUyxRQUFROzs7QUFHbkIsUUFBYSwwQkFBMEIsR0FBVyxFQUFFO0FBRXBEO1FBQUE7WUFRVSxtQkFBYyxHQUFxQixDQUFDLENBQUM7WUFHckMsV0FBTSxHQUFXLDBCQUEwQixDQUFDOzs7OztZQVczQyxVQUFLLEdBQWtDLE1BQU0sQ0FBQztTQW9HeEQ7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