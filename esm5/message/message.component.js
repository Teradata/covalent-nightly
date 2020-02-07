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
                    styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-message-wrapper .td-message-labels{-webkit-box-flex:1;-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
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
        _template: [{ type: ViewChild, args: [TemplateRef,] }],
        collapsedAnimation: [{ type: HostBinding, args: ['@tdCollapse',] }],
        hidden: [{ type: HostBinding, args: ['style.display',] }],
        label: [{ type: Input }],
        sublabel: [{ type: Input }],
        icon: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9tZXNzYWdlLyIsInNvdXJjZXMiOlsibWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVEO0lBSUUscUNBQW1CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUFHLENBQUM7O2dCQUp2RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7Ozs7Z0JBWkMsZ0JBQWdCOztJQWVsQixrQ0FBQztDQUFBLEFBTEQsSUFLQztTQUZZLDJCQUEyQjs7O0lBQzFCLG9EQUFzQzs7QUFHcEQ7SUFvR0UsNEJBQ1UsU0FBb0IsRUFDcEIsa0JBQXFDLEVBQ3JDLFdBQXVCO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQS9GekIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUF5QzdCLFNBQUksR0FBVyxjQUFjLENBQUM7UUFxRHJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUF2RkQsc0JBQ0ks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dCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRNZXNzYWdlQ29udGFpbmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTWVzc2FnZUNvbnRhaW5lckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0ZENvbGxhcHNlQW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2hpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9hbmltYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKFRkTWVzc2FnZUNvbnRhaW5lckRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgX2NoaWxkRWxlbWVudDogVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEJpbmRpbmcgaG9zdCB0byB0ZENvbGxhcHNlIGFuaW1hdGlvblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdAdGRDb2xsYXBzZScpXG4gIGdldCBjb2xsYXBzZWRBbmltYXRpb24oKTogYW55IHtcbiAgICByZXR1cm4geyB2YWx1ZTogIXRoaXMuX29wZW5lZCwgZHVyYXRpb246IDEwMCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRpbmcgaG9zdCB0byBkaXNwbGF5IHN0eWxlIHdoZW4gaGlkZGVuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICBnZXQgaGlkZGVuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGRlbiA/ICdub25lJyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBsYWJlbDogc3RyaW5nXG4gICAqXG4gICAqIFNldHMgdGhlIGxhYmVsIG9mIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgc3VibGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoKSBzdWJsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqXG4gICAqIFRoZSBpY29uIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBEZWZhdWx0cyB0byBgaW5mb19vdXRsaW5lYCBpY29uXG4gICAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnaW5mb19vdXRsaW5lJztcblxuICAvKipcbiAgICogY29sb3I/OiBwcmltYXJ5IHwgYWNjZW50IHwgd2FyblxuICAgKlxuICAgKiBTZXRzIHRoZSBjb2xvciBvZiB0aGUgbWVzc2FnZS5cbiAgICogQ2FuIGFsc28gdXNlIGFueSBtYXRlcmlhbCBjb2xvcjogcHVycGxlIHwgbGlnaHQtYmx1ZSwgZXRjLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmdjLScgKyB0aGlzLl9jb2xvciArICctMTAwJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGMtJyArIHRoaXMuX2NvbG9yICsgJy03MDAnKTtcbiAgICBpZiAoY29sb3IgPT09ICdwcmltYXJ5JyB8fCBjb2xvciA9PT0gJ2FjY2VudCcgfHwgY29sb3IgPT09ICd3YXJuJykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyBjb2xvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JnYy0nICsgY29sb3IgKyAnLTEwMCcpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGMtJyArIGNvbG9yICsgJy03MDAnKTtcbiAgICB9XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKlxuICAgKiBTaG93cyBvciBoaWRkZXMgdGhlIG1lc3NhZ2UgZGVwZW5kaW5nIG9uIGl0cyB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gJ3RydWUnLlxuICAgKi9cbiAgQElucHV0KCdvcGVuZWQnKVxuICBzZXQgb3BlbmVkKG9wZW5lZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgaWYgKG9wZW5lZCkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3BlbmVkID0gb3BlbmVkO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1tZXNzYWdlJyk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIGVsZW1lbnQgd2hlbiBjbG9zZSBhbmltYXRpb24gaXMgZmluaXNoZWQgdG8gc2V0IGFuaW1hdGluZyBzdGF0ZSB0byBmYWxzZVxuICAgKiBoaWRkZW4gc3RhdGUgdG8gdHJ1ZSBhbmQgZGV0YWNoIGVsZW1lbnQgZnJvbSBET01cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ0B0ZENvbGxhcHNlLmRvbmUnKVxuICBhbmltYXRpb25Eb25lTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2hpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLl9kZXRhY2goKTtcbiAgICB9XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGNvbXBvbmVudCBhbmQgYXR0YWNoZXMgdGhlIGNvbnRlbnQuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX2F0dGFjaCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIG1lc3NhZ2Ugb24gc2NyZWVuXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBpcyBhbiBhbmltYXRpb24gY3VycmVudGx5IGFuZCBpZiBpdHMgYWxyZWFkeSBvcGVuZWRcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9vcGVuZWQgJiYgIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2F0dGFjaCgpO1xuICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBtZXNzYWdlIGNvbnRlbnQgZnJvbSBzY3JlZW4uXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBpcyBhbiBhbmltYXRpb24gY3VycmVudGx5IGFuZCBpZiBpdHMgYWxyZWFkeSBjbG9zZWRcbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcGVuZWQgJiYgIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGFydEFuaW1hdGlvblN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZSBkZXBlbmRpbmcgb24gc3RhdGUuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNldCB0aGUgc3RhdGUgYmVmb3JlIHN0YXJ0aW5nIGFuIGFuaW1hdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfc3RhcnRBbmltYXRpb25TdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9hbmltYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBhdHRhY2ggdGVtcGxhdGUgdG8gRE9NXG4gICAqL1xuICBwcml2YXRlIF9hdHRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpbGRFbGVtZW50LnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZGV0YWNoIHRlbXBsYXRlIGZyb20gRE9NXG4gICAqL1xuICBwcml2YXRlIF9kZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpbGRFbGVtZW50LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19