(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/message', ['exports', '@angular/core', '@covalent/core/common', '@angular/common', '@angular/material/icon'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.message = {}),global.ng.core,global.covalent.core.common,global.ng.common,global.ng.material.icon));
}(this, (function (exports,core,common,common$1,icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdMessageContainerDirective = /** @class */ (function () {
        function TdMessageContainerDirective(viewContainer) {
            this.viewContainer = viewContainer;
        }
        TdMessageContainerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdMessageContainer]',
                    },] }
        ];
        /** @nocollapse */
        TdMessageContainerDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef }
            ];
        };
        return TdMessageContainerDirective;
    }());
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
             */ function () {
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
             */ function () {
                return this._hidden ? 'none' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (color) {
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
             */ function () {
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
             */ function (opened) {
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
                Promise.resolve(undefined).then(function () {
                    if (_this._opened) {
                        _this._attach();
                    }
                    _this._initialized = true;
                });
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
         * @return {?}
         */
        TdMessageComponent.prototype._startAnimationState = /**
         * Method to set the state before starting an animation
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
         * @return {?}
         */
        TdMessageComponent.prototype._attach = /**
         * Method to attach template to DOM
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
         * @return {?}
         */
        TdMessageComponent.prototype._detach = /**
         * Method to detach template from DOM
         * @return {?}
         */
            function () {
                this._childElement.viewContainer.clear();
                this._changeDetectorRef.markForCheck();
            };
        TdMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-message',
                        template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{icon}}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{label}}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{sublabel}}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>",
                        animations: [
                            common.tdCollapseAnimation,
                        ],
                        styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host .td-message-wrapper .td-message-labels{-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdMessageComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef }
            ];
        };
        TdMessageComponent.propDecorators = {
            _childElement: [{ type: core.ViewChild, args: [TdMessageContainerDirective,] }],
            _template: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            collapsedAnimation: [{ type: core.HostBinding, args: ['@tdCollapse',] }],
            hidden: [{ type: core.HostBinding, args: ['style.display',] }],
            label: [{ type: core.Input, args: ['label',] }],
            sublabel: [{ type: core.Input, args: ['sublabel',] }],
            icon: [{ type: core.Input, args: ['icon',] }],
            color: [{ type: core.Input, args: ['color',] }],
            opened: [{ type: core.Input, args: ['opened',] }],
            animationDoneListener: [{ type: core.HostListener, args: ['@tdCollapse.done',] }]
        };
        return TdMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MESSAGE = [
        TdMessageComponent,
        TdMessageContainerDirective,
    ];
    var CovalentMessageModule = /** @class */ (function () {
        function CovalentMessageModule() {
        }
        CovalentMessageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common$1.CommonModule,
                            icon.MatIconModule,
                        ],
                        declarations: [
                            TD_MESSAGE,
                        ],
                        exports: [
                            TD_MESSAGE,
                        ],
                    },] }
        ];
        return CovalentMessageModule;
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

    exports.CovalentMessageModule = CovalentMessageModule;
    exports.TdMessageContainerDirective = TdMessageContainerDirective;
    exports.TdMessageComponent = TdMessageComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1tZXNzYWdlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvbWVzc2FnZS9tZXNzYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcbiAgICAgICAgIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRNZXNzYWdlQ29udGFpbmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTWVzc2FnZUNvbnRhaW5lckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdGRDb2xsYXBzZUFuaW1hdGlvbixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlKSBfY2hpbGRFbGVtZW50OiBUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQmluZGluZyBob3N0IHRvIHRkQ29sbGFwc2UgYW5pbWF0aW9uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ0B0ZENvbGxhcHNlJylcbiAgZ2V0IGNvbGxhcHNlZEFuaW1hdGlvbigpOiBhbnkge1xuICAgIHJldHVybiB7IHZhbHVlOiAhdGhpcy5fb3BlbmVkLCBkdXJhdGlvbjogMTAwIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZGluZyBob3N0IHRvIGRpc3BsYXkgc3R5bGUgd2hlbiBoaWRkZW5cbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBoaWRkZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZGVuID8gJ25vbmUnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGxhYmVsOiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgbGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgc3VibGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBUaGUgaWNvbiB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogRGVmYXVsdHMgdG8gYGluZm9fb3V0bGluZWAgaWNvblxuICAgKi9cbiAgQElucHV0KCdpY29uJykgaWNvbjogc3RyaW5nID0gJ2luZm9fb3V0bGluZSc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm5cbiAgICpcbiAgICogU2V0cyB0aGUgY29sb3Igb2YgdGhlIG1lc3NhZ2UuXG4gICAqIENhbiBhbHNvIHVzZSBhbnkgbWF0ZXJpYWwgY29sb3I6IHB1cnBsZSB8IGxpZ2h0LWJsdWUsIGV0Yy5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JnYy0nICsgdGhpcy5fY29sb3IgKyAnLTEwMCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RjLScgKyB0aGlzLl9jb2xvciArICctNzAwJyk7XG4gICAgaWYgKGNvbG9yID09PSAncHJpbWFyeScgfHwgY29sb3IgPT09ICdhY2NlbnQnIHx8IGNvbG9yID09PSAnd2FybicpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgY29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdiZ2MtJyArIGNvbG9yICsgJy0xMDAnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RjLScgKyBjb2xvciArICctNzAwJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIG9wZW5lZD86IGJvb2xlYW5cbiAgICpcbiAgICogU2hvd3Mgb3IgaGlkZGVzIHRoZSBtZXNzYWdlIGRlcGVuZGluZyBvbiBpdHMgdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvICd0cnVlJy5cbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJylcbiAgc2V0IG9wZW5lZChvcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmIChvcGVuZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IG9wZW5lZDtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtbWVzc2FnZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCBlbGVtZW50IHdoZW4gY2xvc2UgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIHRvIHNldCBhbmltYXRpbmcgc3RhdGUgdG8gZmFsc2VcbiAgICogaGlkZGVuIHN0YXRlIHRvIHRydWUgYW5kIGRldGFjaCBlbGVtZW50IGZyb20gRE9NXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdAdGRDb2xsYXBzZS5kb25lJylcbiAgYW5pbWF0aW9uRG9uZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5fZGV0YWNoKCk7XG4gICAgfVxuICAgIHRoaXMuX2FuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYW5kIGF0dGFjaGVzIHRoZSBjb250ZW50LlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgICB0aGlzLl9hdHRhY2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBtZXNzYWdlIG9uIHNjcmVlblxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGN1cnJlbnRseSBhbmQgaWYgaXRzIGFscmVhZHkgb3BlbmVkXG4gICAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkICYmICF0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgICB0aGlzLl9hdHRhY2goKTtcbiAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgbWVzc2FnZSBjb250ZW50IGZyb20gc2NyZWVuLlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGN1cnJlbnRseSBhbmQgaWYgaXRzIGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkICYmICF0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGJldHdlZW4gb3BlbiBhbmQgY2xvc2UgZGVwZW5kaW5nIG9uIHN0YXRlLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzZXQgdGhlIHN0YXRlIGJlZm9yZSBzdGFydGluZyBhbiBhbmltYXRpb25cbiAgICovXG4gIHByaXZhdGUgX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gYXR0YWNoIHRlbXBsYXRlIHRvIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBfYXR0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaWxkRWxlbWVudC52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGRldGFjaCB0ZW1wbGF0ZSBmcm9tIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBfZGV0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaWxkRWxlbWVudC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7IFRkTWVzc2FnZUNvbXBvbmVudCwgVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX01FU1NBR0U6IFR5cGU8YW55PltdID0gW1xuICBUZE1lc3NhZ2VDb21wb25lbnQsXG4gIFRkTWVzc2FnZUNvbnRhaW5lckRpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfTUVTU0FHRSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFREX01FU1NBR0UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TWVzc2FnZU1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29tcG9uZW50IiwidGRDb2xsYXBzZUFuaW1hdGlvbiIsIlJlbmRlcmVyMiIsIkNoYW5nZURldGVjdG9yUmVmIiwiRWxlbWVudFJlZiIsIlZpZXdDaGlsZCIsIlRlbXBsYXRlUmVmIiwiSG9zdEJpbmRpbmciLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBU0UscUNBQW1CLGFBQStCO1lBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtTQUFLOztvQkFKeERBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsc0JBQXNCO3FCQUNqQzs7Ozs7d0JBUDJFQyxxQkFBZ0I7OztRQVU1RixrQ0FBQztLQUxELElBS0M7O1FBeUdDLDRCQUFvQixTQUFvQixFQUNwQixrQkFBcUMsRUFDckMsV0FBdUI7WUFGdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztZQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1lBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1lBOUZuQyxZQUFPLEdBQVksSUFBSSxDQUFDO1lBQ3hCLFlBQU8sR0FBWSxLQUFLLENBQUM7WUFDekIsZUFBVSxHQUFZLEtBQUssQ0FBQztZQUM1QixpQkFBWSxHQUFZLEtBQUssQ0FBQzs7Ozs7OztZQXlDdkIsU0FBSSxHQUFXLGNBQWMsQ0FBQztZQW1EM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDdkU7UUFyRkQsc0JBQ0ksa0RBQWtCOzs7Ozs7O2dCQUR0QjtnQkFFRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDaEQ7OztXQUFBO1FBS0Qsc0JBQ0ksc0NBQU07Ozs7Ozs7Z0JBRFY7Z0JBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7YUFDMUM7OztXQUFBO1FBOEJELHNCQUNJLHFDQUFLOzs7Z0JBYVQ7Z0JBQ0UsT0FBTyxJQUFJ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