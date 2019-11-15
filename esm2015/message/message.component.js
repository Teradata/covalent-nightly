/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Renderer2, ElementRef, ViewContainerRef, TemplateRef, ViewChild, HostBinding, HostListener, ChangeDetectorRef, } from '@angular/core';
import { tdCollapseAnimation } from '@covalent/core/common';
export class TdMessageContainerDirective {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
}
TdMessageContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdMessageContainer]',
            },] }
];
/** @nocollapse */
TdMessageContainerDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
if (false) {
    /** @type {?} */
    TdMessageContainerDirective.prototype.viewContainer;
}
export class TdMessageComponent {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     */
    constructor(_renderer, _changeDetectorRef, _elementRef) {
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
    /**
     * Binding host to tdCollapse animation
     * @return {?}
     */
    get collapsedAnimation() {
        return { value: !this._opened, duration: 100 };
    }
    /**
     * Binding host to display style when hidden
     * @return {?}
     */
    get hidden() {
        return this._hidden ? 'none' : undefined;
    }
    /**
     * color?: primary | accent | warn
     *
     * Sets the color of the message.
     * Can also use any material color: purple | light-blue, etc.
     * @param {?} color
     * @return {?}
     */
    set color(color) {
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
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * opened?: boolean
     *
     * Shows or hiddes the message depending on its value.
     * Defaults to 'true'.
     * @param {?} opened
     * @return {?}
     */
    set opened(opened) {
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
    }
    /**
     * @return {?}
     */
    get opened() {
        return this._opened;
    }
    /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     * @return {?}
     */
    animationDoneListener() {
        if (!this._opened) {
            this._hidden = true;
            this._detach();
        }
        this._animating = false;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Initializes the component and attaches the content.
     * @return {?}
     */
    ngAfterViewInit() {
        Promise.resolve(undefined).then((/**
         * @return {?}
         */
        () => {
            if (this._opened) {
                this._attach();
            }
            this._initialized = true;
        }));
    }
    /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     * @return {?}
     */
    open() {
        if (!this._opened && !this._animating) {
            this._opened = true;
            this._attach();
            this._startAnimationState();
        }
    }
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     * @return {?}
     */
    close() {
        if (this._opened && !this._animating) {
            this._opened = false;
            this._startAnimationState();
        }
    }
    /**
     * Toggles between open and close depending on state.
     * @return {?}
     */
    toggle() {
        if (this._opened) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Method to set the state before starting an animation
     * @private
     * @return {?}
     */
    _startAnimationState() {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to attach template to DOM
     * @private
     * @return {?}
     */
    _attach() {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to detach template from DOM
     * @private
     * @return {?}
     */
    _detach() {
        this._childElement.viewContainer.clear();
        this._changeDetectorRef.markForCheck();
    }
}
TdMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-message',
                template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{ icon }}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{ label }}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{ sublabel }}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-message-wrapper .td-message-labels{-webkit-box-flex:1;-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
            }] }
];
/** @nocollapse */
TdMessageComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
TdMessageComponent.propDecorators = {
    _childElement: [{ type: ViewChild, args: [TdMessageContainerDirective, { static: true },] }],
    _template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
    collapsedAnimation: [{ type: HostBinding, args: ['@tdCollapse',] }],
    hidden: [{ type: HostBinding, args: ['style.display',] }],
    label: [{ type: Input }],
    sublabel: [{ type: Input }],
    icon: [{ type: Input }],
    color: [{ type: Input, args: ['color',] }],
    opened: [{ type: Input, args: ['opened',] }],
    animationDoneListener: [{ type: HostListener, args: ['@tdCollapse.done',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzVELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFDdEMsWUFBbUIsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBQUcsQ0FBQzs7O1lBSnZELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7O1lBWkMsZ0JBQWdCOzs7O0lBY0osb0RBQXNDOztBQVNwRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUE4RjdCLFlBQ1UsU0FBb0IsRUFDcEIsa0JBQXFDLEVBQ3JDLFdBQXVCO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQS9GekIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUF5QzdCLFNBQUksR0FBVyxjQUFjLENBQUM7UUFxRHJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBdkZELElB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QUUsWUFBWTtnQkFDdEIsdWNBQXVDO2dCQUV2QyxVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7YUFDbEM7Ozs7WUF6QkMsU0FBUztZQVFULGlCQUFpQjtZQVBqQixVQUFVOzs7NEJBZ0NULFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0JBQ3ZELFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2lDQUt4QyxXQUFXLFNBQUMsYUFBYTtxQkFRekIsV0FBVyxTQUFDLGVBQWU7b0JBVTNCLEtBQUs7dUJBT0wsS0FBSzttQkFRTCxLQUFLO29CQVFMLEtBQUssU0FBQyxPQUFPO3FCQXdCYixLQUFLLFNBQUMsUUFBUTtvQ0E0QmQsWUFBWSxTQUFDLGtCQUFrQjs7Ozs7OztJQXpHaEMsb0NBQXVCOzs7OztJQUN2QixxQ0FBZ0M7Ozs7O0lBQ2hDLHFDQUFpQzs7Ozs7SUFDakMsd0NBQW9DOzs7OztJQUNwQywwQ0FBc0M7O0lBRXRDLDJDQUFxRzs7SUFDckcsdUNBQXVFOzs7Ozs7O0lBdUJ2RSxtQ0FBdUI7Ozs7Ozs7SUFPdkIsc0NBQTBCOzs7Ozs7OztJQVExQixrQ0FBdUM7Ozs7O0lBaURyQyx1Q0FBNEI7Ozs7O0lBQzVCLGdEQUE2Qzs7Ozs7SUFDN0MseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZE1lc3NhZ2VDb250YWluZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBfY2hpbGRFbGVtZW50OiBUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEJpbmRpbmcgaG9zdCB0byB0ZENvbGxhcHNlIGFuaW1hdGlvblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdAdGRDb2xsYXBzZScpXG4gIGdldCBjb2xsYXBzZWRBbmltYXRpb24oKTogYW55IHtcbiAgICByZXR1cm4geyB2YWx1ZTogIXRoaXMuX29wZW5lZCwgZHVyYXRpb246IDEwMCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRpbmcgaG9zdCB0byBkaXNwbGF5IHN0eWxlIHdoZW4gaGlkZGVuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICBnZXQgaGlkZGVuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGRlbiA/ICdub25lJyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBsYWJlbDogc3RyaW5nXG4gICAqXG4gICAqIFNldHMgdGhlIGxhYmVsIG9mIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgc3VibGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoKSBzdWJsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqXG4gICAqIFRoZSBpY29uIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBEZWZhdWx0cyB0byBgaW5mb19vdXRsaW5lYCBpY29uXG4gICAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnaW5mb19vdXRsaW5lJztcblxuICAvKipcbiAgICogY29sb3I/OiBwcmltYXJ5IHwgYWNjZW50IHwgd2FyblxuICAgKlxuICAgKiBTZXRzIHRoZSBjb2xvciBvZiB0aGUgbWVzc2FnZS5cbiAgICogQ2FuIGFsc28gdXNlIGFueSBtYXRlcmlhbCBjb2xvcjogcHVycGxlIHwgbGlnaHQtYmx1ZSwgZXRjLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmdjLScgKyB0aGlzLl9jb2xvciArICctMTAwJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGMtJyArIHRoaXMuX2NvbG9yICsgJy03MDAnKTtcbiAgICBpZiAoY29sb3IgPT09ICdwcmltYXJ5JyB8fCBjb2xvciA9PT0gJ2FjY2VudCcgfHwgY29sb3IgPT09ICd3YXJuJykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyBjb2xvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JnYy0nICsgY29sb3IgKyAnLTEwMCcpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGMtJyArIGNvbG9yICsgJy03MDAnKTtcbiAgICB9XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKlxuICAgKiBTaG93cyBvciBoaWRkZXMgdGhlIG1lc3NhZ2UgZGVwZW5kaW5nIG9uIGl0cyB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gJ3RydWUnLlxuICAgKi9cbiAgQElucHV0KCdvcGVuZWQnKVxuICBzZXQgb3BlbmVkKG9wZW5lZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgaWYgKG9wZW5lZCkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3BlbmVkID0gb3BlbmVkO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1tZXNzYWdlJyk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIGVsZW1lbnQgd2hlbiBjbG9zZSBhbmltYXRpb24gaXMgZmluaXNoZWQgdG8gc2V0IGFuaW1hdGluZyBzdGF0ZSB0byBmYWxzZVxuICAgKiBoaWRkZW4gc3RhdGUgdG8gdHJ1ZSBhbmQgZGV0YWNoIGVsZW1lbnQgZnJvbSBET01cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ0B0ZENvbGxhcHNlLmRvbmUnKVxuICBhbmltYXRpb25Eb25lTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2hpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLl9kZXRhY2goKTtcbiAgICB9XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGNvbXBvbmVudCBhbmQgYXR0YWNoZXMgdGhlIGNvbnRlbnQuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX2F0dGFjaCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIG1lc3NhZ2Ugb24gc2NyZWVuXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBpcyBhbiBhbmltYXRpb24gY3VycmVudGx5IGFuZCBpZiBpdHMgYWxyZWFkeSBvcGVuZWRcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9vcGVuZWQgJiYgIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2F0dGFjaCgpO1xuICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBtZXNzYWdlIGNvbnRlbnQgZnJvbSBzY3JlZW4uXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBpcyBhbiBhbmltYXRpb24gY3VycmVudGx5IGFuZCBpZiBpdHMgYWxyZWFkeSBjbG9zZWRcbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcGVuZWQgJiYgIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGFydEFuaW1hdGlvblN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZSBkZXBlbmRpbmcgb24gc3RhdGUuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNldCB0aGUgc3RhdGUgYmVmb3JlIHN0YXJ0aW5nIGFuIGFuaW1hdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfc3RhcnRBbmltYXRpb25TdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9hbmltYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBhdHRhY2ggdGVtcGxhdGUgdG8gRE9NXG4gICAqL1xuICBwcml2YXRlIF9hdHRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpbGRFbGVtZW50LnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZGV0YWNoIHRlbXBsYXRlIGZyb20gRE9NXG4gICAqL1xuICBwcml2YXRlIF9kZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpbGRFbGVtZW50LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19