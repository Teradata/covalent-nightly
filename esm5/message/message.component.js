/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Renderer2, ElementRef, ViewContainerRef, TemplateRef, ViewChild, HostBinding, HostListener, ChangeDetectorRef, } from '@angular/core';
import { tdCollapseAnimation } from '@covalent/core/common';
var TdMessageContainerDirective = /** @class */ (function () {
    function TdMessageContainerDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TdMessageContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdMessageContainer]',
                },] }
    ];
    /** @nocollapse */
    TdMessageContainerDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return TdMessageContainerDirective;
}());
export { TdMessageContainerDirective };
if (false) {
    /** @type {?} */
    TdMessageContainerDirective.prototype.viewContainer;
}
var TdMessageComponent = /** @class */ (function () {
    function TdMessageComponent(_renderer, _changeDetectorRef, _elementRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._opened = true;
        this._hidden = false;
        this._animating = false;
        this._initialized = false;
        /**
         * icon?: string
         *
         * The icon to be displayed before the title.
         * Defaults to `info_outline` icon
         */
        this.icon = 'info_outline';
        this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
    }
    Object.defineProperty(TdMessageComponent.prototype, "collapsedAnimation", {
        /**
         * Binding host to tdCollapse animation
         */
        get: /**
         * Binding host to tdCollapse animation
         * @return {?}
         */
        function () {
            return { value: !this._opened, duration: 100 };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "hidden", {
        /**
         * Binding host to display style when hidden
         */
        get: /**
         * Binding host to display style when hidden
         * @return {?}
         */
        function () {
            return this._hidden ? 'none' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        /**
         * color?: primary | accent | warn
         *
         * Sets the color of the message.
         * Can also use any material color: purple | light-blue, etc.
         */
        set: /**
         * color?: primary | accent | warn
         *
         * Sets the color of the message.
         * Can also use any material color: purple | light-blue, etc.
         * @param {?} color
         * @return {?}
         */
        function (color) {
            this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
            this._renderer.removeClass(this._elementRef.nativeElement, 'bgc-' + this._color + '-100');
            this._renderer.removeClass(this._elementRef.nativeElement, 'tc-' + this._color + '-700');
            if (color === 'primary' || color === 'accent' || color === 'warn') {
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + color);
            }
            else {
                this._renderer.addClass(this._elementRef.nativeElement, 'bgc-' + color + '-100');
                this._renderer.addClass(this._elementRef.nativeElement, 'tc-' + color + '-700');
            }
            this._color = color;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "opened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened;
        },
        /**
         * opened?: boolean
         *
         * Shows or hiddes the message depending on its value.
         * Defaults to 'true'.
         */
        set: /**
         * opened?: boolean
         *
         * Shows or hiddes the message depending on its value.
         * Defaults to 'true'.
         * @param {?} opened
         * @return {?}
         */
        function (opened) {
            if (this._initialized) {
                if (opened) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
            else {
                this._opened = opened;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     */
    /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     * @return {?}
     */
    TdMessageComponent.prototype.animationDoneListener = /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     * @return {?}
     */
    function () {
        if (!this._opened) {
            this._hidden = true;
            this._detach();
        }
        this._animating = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Initializes the component and attaches the content.
     */
    /**
     * Initializes the component and attaches the content.
     * @return {?}
     */
    TdMessageComponent.prototype.ngAfterViewInit = /**
     * Initializes the component and attaches the content.
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve(undefined).then((/**
         * @return {?}
         */
        function () {
            if (_this._opened) {
                _this._attach();
            }
            _this._initialized = true;
        }));
    };
    /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     */
    /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     * @return {?}
     */
    TdMessageComponent.prototype.open = /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     * @return {?}
     */
    function () {
        if (!this._opened && !this._animating) {
            this._opened = true;
            this._attach();
            this._startAnimationState();
        }
    };
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     */
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     * @return {?}
     */
    TdMessageComponent.prototype.close = /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     * @return {?}
     */
    function () {
        if (this._opened && !this._animating) {
            this._opened = false;
            this._startAnimationState();
        }
    };
    /**
     * Toggles between open and close depending on state.
     */
    /**
     * Toggles between open and close depending on state.
     * @return {?}
     */
    TdMessageComponent.prototype.toggle = /**
     * Toggles between open and close depending on state.
     * @return {?}
     */
    function () {
        if (this._opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Method to set the state before starting an animation
     */
    /**
     * Method to set the state before starting an animation
     * @private
     * @return {?}
     */
    TdMessageComponent.prototype._startAnimationState = /**
     * Method to set the state before starting an animation
     * @private
     * @return {?}
     */
    function () {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to attach template to DOM
     */
    /**
     * Method to attach template to DOM
     * @private
     * @return {?}
     */
    TdMessageComponent.prototype._attach = /**
     * Method to attach template to DOM
     * @private
     * @return {?}
     */
    function () {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to detach template from DOM
     */
    /**
     * Method to detach template from DOM
     * @private
     * @return {?}
     */
    TdMessageComponent.prototype._detach = /**
     * Method to detach template from DOM
     * @private
     * @return {?}
     */
    function () {
        this._childElement.viewContainer.clear();
        this._changeDetectorRef.markForCheck();
    };
    TdMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-message',
                    template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{ icon }}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{ label }}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{ sublabel }}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>\n",
                    animations: [tdCollapseAnimation],
                    styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}:host .td-message-wrapper .td-message-labels{-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
                }] }
    ];
    /** @nocollapse */
    TdMessageComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    TdMessageComponent.propDecorators = {
        _childElement: [{ type: ViewChild, args: [TdMessageContainerDirective, { static: true },] }],
        _template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
        collapsedAnimation: [{ type: HostBinding, args: ['@tdCollapse',] }],
        hidden: [{ type: HostBinding, args: ['style.display',] }],
        label: [{ type: Input, args: ['label',] }],
        sublabel: [{ type: Input, args: ['sublabel',] }],
        icon: [{ type: Input, args: ['icon',] }],
        color: [{ type: Input, args: ['color',] }],
        opened: [{ type: Input, args: ['opened',] }],
        animationDoneListener: [{ type: HostListener, args: ['@tdCollapse.done',] }]
    };
    return TdMessageComponent;
}());
export { TdMessageComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdMessageComponent.prototype._color;
    /**
     * @type {?}
     * @private
     */
    TdMessageComponent.prototype._opened;
    /**
     * @type {?}
     * @private
     */
    TdMessageComponent.prototype._hidden;
    /**
     * @type {?}
     * @private
     */
    TdMessageComponent.prototype._animating;
    /**
     * @type {?}
     * @private
     */
    TdMessageComponent.prototype._initialized;
    /** @type {?} */
    TdMessageComponent.prototype._childElement;
    /** @type {?} */
    TdMessageComponent.prototype._template;
    /**
     * label: string
     *
     * Sets the label of the message.
     * @type {?}
     */
    TdMessageComponent.prototype.label;
    /**
     * sublabel?: string
     *
     * Sets the sublabel of the message.
     * @type {?}
     */
    TdMessageComponent.prototype.sublabel;
    /**
     * icon?: string
     *
     * The icon to be displayed before the title.
     * Defaults to `info_outline` icon
     * @type {?}
     */
    TdMessageComponent.prototype.icon;
    /**
     * @type {?}
     * @private
     */
    TdMessageComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdMessageComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TdMessageComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVEO0lBSUUscUNBQW1CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUFHLENBQUM7O2dCQUp2RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7Ozs7Z0JBWkMsZ0JBQWdCOztJQWVsQixrQ0FBQztDQUFBLEFBTEQsSUFLQztTQUZZLDJCQUEyQjs7O0lBQzFCLG9EQUFzQzs7QUFHcEQ7SUFvR0UsNEJBQ1UsU0FBb0IsRUFDcEIsa0JBQXFDLEVBQ3JDLFdBQXVCO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQS9GekIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUF5Q3ZCLFNBQUksR0FBVyxjQUFjLENBQUM7UUFxRDNDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUF2RkQsc0JBQ0ks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QTZDOzs7OztJQUM3Qyx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0ZENvbGxhcHNlQW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTWVzc2FnZUNvbnRhaW5lcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdGRDb2xsYXBzZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9oaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYW5pbWF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIF9jaGlsZEVsZW1lbnQ6IFRkTWVzc2FnZUNvbnRhaW5lckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQmluZGluZyBob3N0IHRvIHRkQ29sbGFwc2UgYW5pbWF0aW9uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ0B0ZENvbGxhcHNlJylcbiAgZ2V0IGNvbGxhcHNlZEFuaW1hdGlvbigpOiBhbnkge1xuICAgIHJldHVybiB7IHZhbHVlOiAhdGhpcy5fb3BlbmVkLCBkdXJhdGlvbjogMTAwIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZGluZyBob3N0IHRvIGRpc3BsYXkgc3R5bGUgd2hlbiBoaWRkZW5cbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBoaWRkZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZGVuID8gJ25vbmUnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGxhYmVsOiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgbGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgc3VibGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBUaGUgaWNvbiB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogRGVmYXVsdHMgdG8gYGluZm9fb3V0bGluZWAgaWNvblxuICAgKi9cbiAgQElucHV0KCdpY29uJykgaWNvbjogc3RyaW5nID0gJ2luZm9fb3V0bGluZSc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm5cbiAgICpcbiAgICogU2V0cyB0aGUgY29sb3Igb2YgdGhlIG1lc3NhZ2UuXG4gICAqIENhbiBhbHNvIHVzZSBhbnkgbWF0ZXJpYWwgY29sb3I6IHB1cnBsZSB8IGxpZ2h0LWJsdWUsIGV0Yy5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JnYy0nICsgdGhpcy5fY29sb3IgKyAnLTEwMCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RjLScgKyB0aGlzLl9jb2xvciArICctNzAwJyk7XG4gICAgaWYgKGNvbG9yID09PSAncHJpbWFyeScgfHwgY29sb3IgPT09ICdhY2NlbnQnIHx8IGNvbG9yID09PSAnd2FybicpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgY29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdiZ2MtJyArIGNvbG9yICsgJy0xMDAnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RjLScgKyBjb2xvciArICctNzAwJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIG9wZW5lZD86IGJvb2xlYW5cbiAgICpcbiAgICogU2hvd3Mgb3IgaGlkZGVzIHRoZSBtZXNzYWdlIGRlcGVuZGluZyBvbiBpdHMgdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvICd0cnVlJy5cbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJylcbiAgc2V0IG9wZW5lZChvcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmIChvcGVuZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IG9wZW5lZDtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtbWVzc2FnZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCBlbGVtZW50IHdoZW4gY2xvc2UgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIHRvIHNldCBhbmltYXRpbmcgc3RhdGUgdG8gZmFsc2VcbiAgICogaGlkZGVuIHN0YXRlIHRvIHRydWUgYW5kIGRldGFjaCBlbGVtZW50IGZyb20gRE9NXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdAdGRDb2xsYXBzZS5kb25lJylcbiAgYW5pbWF0aW9uRG9uZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5fZGV0YWNoKCk7XG4gICAgfVxuICAgIHRoaXMuX2FuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYW5kIGF0dGFjaGVzIHRoZSBjb250ZW50LlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgICB0aGlzLl9hdHRhY2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBtZXNzYWdlIG9uIHNjcmVlblxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGN1cnJlbnRseSBhbmQgaWYgaXRzIGFscmVhZHkgb3BlbmVkXG4gICAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkICYmICF0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgICB0aGlzLl9hdHRhY2goKTtcbiAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgbWVzc2FnZSBjb250ZW50IGZyb20gc2NyZWVuLlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGN1cnJlbnRseSBhbmQgaWYgaXRzIGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkICYmICF0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGJldHdlZW4gb3BlbiBhbmQgY2xvc2UgZGVwZW5kaW5nIG9uIHN0YXRlLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzZXQgdGhlIHN0YXRlIGJlZm9yZSBzdGFydGluZyBhbiBhbmltYXRpb25cbiAgICovXG4gIHByaXZhdGUgX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gYXR0YWNoIHRlbXBsYXRlIHRvIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBfYXR0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaWxkRWxlbWVudC52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGRldGFjaCB0ZW1wbGF0ZSBmcm9tIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBfZGV0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaWxkRWxlbWVudC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==