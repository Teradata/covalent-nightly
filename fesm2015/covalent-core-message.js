import { Component, Directive, Input, Renderer2, ElementRef, ViewContainerRef, TemplateRef, ViewChild, HostBinding, HostListener, ChangeDetectorRef, NgModule } from '@angular/core';
import { tdCollapseAnimation } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdMessageContainerDirective {
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
class TdMessageComponent {
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
        Promise.resolve(undefined).then(() => {
            if (this._opened) {
                this._attach();
            }
            this._initialized = true;
        });
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
     * @return {?}
     */
    _startAnimationState() {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to attach template to DOM
     * @return {?}
     */
    _attach() {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to detach template from DOM
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
                template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{icon}}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{label}}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{sublabel}}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>",
                animations: [
                    tdCollapseAnimation,
                ],
                styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host .td-message-wrapper .td-message-labels{-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
            }] }
];
/** @nocollapse */
TdMessageComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
TdMessageComponent.propDecorators = {
    _childElement: [{ type: ViewChild, args: [TdMessageContainerDirective,] }],
    _template: [{ type: ViewChild, args: [TemplateRef,] }],
    collapsedAnimation: [{ type: HostBinding, args: ['@tdCollapse',] }],
    hidden: [{ type: HostBinding, args: ['style.display',] }],
    label: [{ type: Input, args: ['label',] }],
    sublabel: [{ type: Input, args: ['sublabel',] }],
    icon: [{ type: Input, args: ['icon',] }],
    color: [{ type: Input, args: ['color',] }],
    opened: [{ type: Input, args: ['opened',] }],
    animationDoneListener: [{ type: HostListener, args: ['@tdCollapse.done',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_MESSAGE = [
    TdMessageComponent,
    TdMessageContainerDirective,
];
class CovalentMessageModule {
}
CovalentMessageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                ],
                declarations: [
                    TD_MESSAGE,
                ],
                exports: [
                    TD_MESSAGE,
                ],
            },] }
];

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

export { CovalentMessageModule, TdMessageContainerDirective, TdMessageComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1tZXNzYWdlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9tZXNzYWdlL21lc3NhZ2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxuICAgICAgICAgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZE1lc3NhZ2VDb250YWluZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9oaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYW5pbWF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmUpIF9jaGlsZEVsZW1lbnQ6IFRkTWVzc2FnZUNvbnRhaW5lckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBCaW5kaW5nIGhvc3QgdG8gdGRDb2xsYXBzZSBhbmltYXRpb25cbiAgICovXG4gIEBIb3N0QmluZGluZygnQHRkQ29sbGFwc2UnKVxuICBnZXQgY29sbGFwc2VkQW5pbWF0aW9uKCk6IGFueSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6ICF0aGlzLl9vcGVuZWQsIGR1cmF0aW9uOiAxMDAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kaW5nIGhvc3QgdG8gZGlzcGxheSBzdHlsZSB3aGVuIGhpZGRlblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGhpZGRlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oaWRkZW4gPyAnbm9uZScgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogbGFiZWw6IHN0cmluZ1xuICAgKlxuICAgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgbWVzc2FnZS5cbiAgICovXG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKlxuICAgKiBTZXRzIHRoZSBzdWJsYWJlbCBvZiB0aGUgbWVzc2FnZS5cbiAgICovXG4gIEBJbnB1dCgnc3VibGFiZWwnKSBzdWJsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqXG4gICAqIFRoZSBpY29uIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBEZWZhdWx0cyB0byBgaW5mb19vdXRsaW5lYCBpY29uXG4gICAqL1xuICBASW5wdXQoJ2ljb24nKSBpY29uOiBzdHJpbmcgPSAnaW5mb19vdXRsaW5lJztcblxuICAvKipcbiAgICogY29sb3I/OiBwcmltYXJ5IHwgYWNjZW50IHwgd2FyblxuICAgKlxuICAgKiBTZXRzIHRoZSBjb2xvciBvZiB0aGUgbWVzc2FnZS5cbiAgICogQ2FuIGFsc28gdXNlIGFueSBtYXRlcmlhbCBjb2xvcjogcHVycGxlIHwgbGlnaHQtYmx1ZSwgZXRjLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmdjLScgKyB0aGlzLl9jb2xvciArICctMTAwJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGMtJyArIHRoaXMuX2NvbG9yICsgJy03MDAnKTtcbiAgICBpZiAoY29sb3IgPT09ICdwcmltYXJ5JyB8fCBjb2xvciA9PT0gJ2FjY2VudCcgfHwgY29sb3IgPT09ICd3YXJuJykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyBjb2xvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JnYy0nICsgY29sb3IgKyAnLTEwMCcpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGMtJyArIGNvbG9yICsgJy03MDAnKTtcbiAgICB9XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogb3BlbmVkPzogYm9vbGVhblxuICAgKlxuICAgKiBTaG93cyBvciBoaWRkZXMgdGhlIG1lc3NhZ2UgZGVwZW5kaW5nIG9uIGl0cyB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gJ3RydWUnLlxuICAgKi9cbiAgQElucHV0KCdvcGVuZWQnKVxuICBzZXQgb3BlbmVkKG9wZW5lZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgaWYgKG9wZW5lZCkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3BlbmVkID0gb3BlbmVkO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1tZXNzYWdlJyk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIGVsZW1lbnQgd2hlbiBjbG9zZSBhbmltYXRpb24gaXMgZmluaXNoZWQgdG8gc2V0IGFuaW1hdGluZyBzdGF0ZSB0byBmYWxzZVxuICAgKiBoaWRkZW4gc3RhdGUgdG8gdHJ1ZSBhbmQgZGV0YWNoIGVsZW1lbnQgZnJvbSBET01cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ0B0ZENvbGxhcHNlLmRvbmUnKVxuICBhbmltYXRpb25Eb25lTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2hpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLl9kZXRhY2goKTtcbiAgICB9XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGNvbXBvbmVudCBhbmQgYXR0YWNoZXMgdGhlIGNvbnRlbnQuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX2F0dGFjaCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIG1lc3NhZ2Ugb24gc2NyZWVuXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBpcyBhbiBhbmltYXRpb24gY3VycmVudGx5IGFuZCBpZiBpdHMgYWxyZWFkeSBvcGVuZWRcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9vcGVuZWQgJiYgIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2F0dGFjaCgpO1xuICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBtZXNzYWdlIGNvbnRlbnQgZnJvbSBzY3JlZW4uXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBpcyBhbiBhbmltYXRpb24gY3VycmVudGx5IGFuZCBpZiBpdHMgYWxyZWFkeSBjbG9zZWRcbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcGVuZWQgJiYgIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGFydEFuaW1hdGlvblN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZSBkZXBlbmRpbmcgb24gc3RhdGUuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNldCB0aGUgc3RhdGUgYmVmb3JlIHN0YXJ0aW5nIGFuIGFuaW1hdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfc3RhcnRBbmltYXRpb25TdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9hbmltYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBhdHRhY2ggdGVtcGxhdGUgdG8gRE9NXG4gICAqL1xuICBwcml2YXRlIF9hdHRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpbGRFbGVtZW50LnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZGV0YWNoIHRlbXBsYXRlIGZyb20gRE9NXG4gICAqL1xuICBwcml2YXRlIF9kZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpbGRFbGVtZW50LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgVGRNZXNzYWdlQ29tcG9uZW50LCBUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcblxuY29uc3QgVERfTUVTU0FHRTogVHlwZTxhbnk+W10gPSBbXG4gIFRkTWVzc2FnZUNvbXBvbmVudCxcbiAgVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9NRVNTQUdFLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfTUVTU0FHRSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRNZXNzYWdlTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BUWEsMkJBQTJCOzs7O0lBQ3RDLFlBQW1CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtLQUFLOzs7WUFKeEQs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