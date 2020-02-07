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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9tZXNzYWdlLyIsInNvdXJjZXMiOlsibWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzVELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFDdEMsWUFBbUIsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBQUcsQ0FBQzs7O1lBSnZELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7O1lBWkMsZ0JBQWdCOzs7O0lBY0osb0RBQXNDOztBQVNwRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUE4RjdCLFlBQ1UsU0FBb0IsRUFDcEIsa0JBQXFDLEVBQ3JDLFdBQXVCO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQS9GekIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUF5QzdCLFNBQUksR0FBVyxjQUFjLENBQUM7UUFxRHJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBdkZELElB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QUUsWUFBWTtnQkFDdEIsdWNBQXVDO2dCQUV2QyxVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7YUFDbEM7Ozs7WUF6QkMsU0FBUztZQVFULGlCQUFpQjtZQVBqQixVQUFVOzs7NEJBZ0NULFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0JBQ3ZELFNBQVMsU0FBQyxXQUFXO2lDQUtyQixXQUFXLFNBQUMsYUFBYTtxQkFRekIsV0FBVyxTQUFDLGVBQWU7b0JBVTNCLEtBQUs7dUJBT0wsS0FBSzttQkFRTCxLQUFLO29CQVFMLEtBQUssU0FBQyxPQUFPO3FCQXdCYixLQUFLLFNBQUMsUUFBUTtvQ0E0QmQsWUFBWSxTQUFDLGtCQUFrQjs7Ozs7OztJQXpHaEMsb0NBQXVCOzs7OztJQUN2QixxQ0FBZ0M7Ozs7O0lBQ2hDLHFDQUFpQzs7Ozs7SUFDakMsd0NBQW9DOzs7OztJQUNwQywwQ0FBc0M7O0lBRXRDLDJDQUFxRzs7SUFDckcsdUNBQW9EOzs7Ozs7O0lBdUJwRCxtQ0FBdUI7Ozs7Ozs7SUFPdkIsc0NBQTBCOzs7Ozs7OztJQVExQixrQ0FBdUM7Ozs7O0lBaURyQyx1Q0FBNEI7Ozs7O0lBQzVCLGdEQUE2Qzs7Ozs7SUFDN0MseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZE1lc3NhZ2VDb250YWluZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBfY2hpbGRFbGVtZW50OiBUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQmluZGluZyBob3N0IHRvIHRkQ29sbGFwc2UgYW5pbWF0aW9uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ0B0ZENvbGxhcHNlJylcbiAgZ2V0IGNvbGxhcHNlZEFuaW1hdGlvbigpOiBhbnkge1xuICAgIHJldHVybiB7IHZhbHVlOiAhdGhpcy5fb3BlbmVkLCBkdXJhdGlvbjogMTAwIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZGluZyBob3N0IHRvIGRpc3BsYXkgc3R5bGUgd2hlbiBoaWRkZW5cbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBoaWRkZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZGVuID8gJ25vbmUnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGxhYmVsOiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgbGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKlxuICAgKiBTZXRzIHRoZSBzdWJsYWJlbCBvZiB0aGUgbWVzc2FnZS5cbiAgICovXG4gIEBJbnB1dCgpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGljb24/OiBzdHJpbmdcbiAgICpcbiAgICogVGhlIGljb24gdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGUuXG4gICAqIERlZmF1bHRzIHRvIGBpbmZvX291dGxpbmVgIGljb25cbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICdpbmZvX291dGxpbmUnO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IHByaW1hcnkgfCBhY2NlbnQgfCB3YXJuXG4gICAqXG4gICAqIFNldHMgdGhlIGNvbG9yIG9mIHRoZSBtZXNzYWdlLlxuICAgKiBDYW4gYWxzbyB1c2UgYW55IG1hdGVyaWFsIGNvbG9yOiBwdXJwbGUgfCBsaWdodC1ibHVlLCBldGMuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJylcbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdiZ2MtJyArIHRoaXMuX2NvbG9yICsgJy0xMDAnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0Yy0nICsgdGhpcy5fY29sb3IgKyAnLTcwMCcpO1xuICAgIGlmIChjb2xvciA9PT0gJ3ByaW1hcnknIHx8IGNvbG9yID09PSAnYWNjZW50JyB8fCBjb2xvciA9PT0gJ3dhcm4nKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIGNvbG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmdjLScgKyBjb2xvciArICctMTAwJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0Yy0nICsgY29sb3IgKyAnLTcwMCcpO1xuICAgIH1cbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBvcGVuZWQ/OiBib29sZWFuXG4gICAqXG4gICAqIFNob3dzIG9yIGhpZGRlcyB0aGUgbWVzc2FnZSBkZXBlbmRpbmcgb24gaXRzIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byAndHJ1ZScuXG4gICAqL1xuICBASW5wdXQoJ29wZW5lZCcpXG4gIHNldCBvcGVuZWQob3BlbmVkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICBpZiAob3BlbmVkKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vcGVuZWQgPSBvcGVuZWQ7XG4gICAgfVxuICB9XG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLW1lc3NhZ2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggZWxlbWVudCB3aGVuIGNsb3NlIGFuaW1hdGlvbiBpcyBmaW5pc2hlZCB0byBzZXQgYW5pbWF0aW5nIHN0YXRlIHRvIGZhbHNlXG4gICAqIGhpZGRlbiBzdGF0ZSB0byB0cnVlIGFuZCBkZXRhY2ggZWxlbWVudCBmcm9tIERPTVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignQHRkQ29sbGFwc2UuZG9uZScpXG4gIGFuaW1hdGlvbkRvbmVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5faGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2RldGFjaCgpO1xuICAgIH1cbiAgICB0aGlzLl9hbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgY29tcG9uZW50IGFuZCBhdHRhY2hlcyB0aGUgY29udGVudC5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKS50aGVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fYXR0YWNoKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgbWVzc2FnZSBvbiBzY3JlZW5cbiAgICogVmFsaWRhdGVzIGlmIHRoZXJlIGlzIGFuIGFuaW1hdGlvbiBjdXJyZW50bHkgYW5kIGlmIGl0cyBhbHJlYWR5IG9wZW5lZFxuICAgKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX29wZW5lZCAmJiAhdGhpcy5fYW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fYXR0YWNoKCk7XG4gICAgICB0aGlzLl9zdGFydEFuaW1hdGlvblN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIG1lc3NhZ2UgY29udGVudCBmcm9tIHNjcmVlbi5cbiAgICogVmFsaWRhdGVzIGlmIHRoZXJlIGlzIGFuIGFuaW1hdGlvbiBjdXJyZW50bHkgYW5kIGlmIGl0cyBhbHJlYWR5IGNsb3NlZFxuICAgKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wZW5lZCAmJiAhdGhpcy5fYW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBiZXR3ZWVuIG9wZW4gYW5kIGNsb3NlIGRlcGVuZGluZyBvbiBzdGF0ZS5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc2V0IHRoZSBzdGF0ZSBiZWZvcmUgc3RhcnRpbmcgYW4gYW5pbWF0aW9uXG4gICAqL1xuICBwcml2YXRlIF9zdGFydEFuaW1hdGlvblN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2FuaW1hdGluZyA9IHRydWU7XG4gICAgdGhpcy5faGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGF0dGFjaCB0ZW1wbGF0ZSB0byBET01cbiAgICovXG4gIHByaXZhdGUgX2F0dGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGlsZEVsZW1lbnQudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGUpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBkZXRhY2ggdGVtcGxhdGUgZnJvbSBET01cbiAgICovXG4gIHByaXZhdGUgX2RldGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGlsZEVsZW1lbnQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=