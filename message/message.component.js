import * as tslib_1 from "tslib";
import { Component, Directive, Input, Renderer2, ElementRef, ViewContainerRef, TemplateRef, ViewChild, HostBinding, HostListener, ChangeDetectorRef } from '@angular/core';
import { TdCollapseAnimation } from '../common/animations/collapse/collapse.animation';
var TdMessageContainerDirective = (function () {
    function TdMessageContainerDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TdMessageContainerDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdMessageContainer]',
        }),
        tslib_1.__metadata("design:paramtypes", [ViewContainerRef])
    ], TdMessageContainerDirective);
    return TdMessageContainerDirective;
}());
export { TdMessageContainerDirective };
var TdMessageComponent = (function () {
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
        get: function () {
            return !this._opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "hidden", {
        /**
         * Binding host to display style when hidden
         */
        get: function () {
            return this._hidden ? 'none' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        /**
         * color?: primary | accent | warn
         *
         * Sets the color of the message.
         * Can also use any material color: purple | light-blue, etc.
         */
        set: function (color) {
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
        get: function () {
            return this._opened;
        },
        /**
         * opened?: boolean
         *
         * Shows or hiddes the message depending on its value.
         * Defaults to 'true'.
         */
        set: function (opened) {
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
    TdMessageComponent.prototype.animationDoneListener = function () {
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
    TdMessageComponent.prototype.ngAfterViewInit = function () {
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
    TdMessageComponent.prototype.open = function () {
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
    TdMessageComponent.prototype.close = function () {
        if (this._opened && !this._animating) {
            this._opened = false;
            this._startAnimationState();
        }
    };
    /**
     * Toggles between open and close depending on state.
     */
    TdMessageComponent.prototype.toggle = function () {
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
    TdMessageComponent.prototype._startAnimationState = function () {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to attach template to DOM
     */
    TdMessageComponent.prototype._attach = function () {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to detach template from DOM
     */
    TdMessageComponent.prototype._detach = function () {
        this._childElement.viewContainer.clear();
        this._changeDetectorRef.markForCheck();
    };
    tslib_1.__decorate([
        ViewChild(TdMessageContainerDirective),
        tslib_1.__metadata("design:type", TdMessageContainerDirective)
    ], TdMessageComponent.prototype, "_childElement", void 0);
    tslib_1.__decorate([
        ViewChild(TemplateRef),
        tslib_1.__metadata("design:type", TemplateRef)
    ], TdMessageComponent.prototype, "_template", void 0);
    tslib_1.__decorate([
        HostBinding('@tdCollapse'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdMessageComponent.prototype, "collapsedAnimation", null);
    tslib_1.__decorate([
        HostBinding('style.display'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], TdMessageComponent.prototype, "hidden", null);
    tslib_1.__decorate([
        Input('label'),
        tslib_1.__metadata("design:type", String)
    ], TdMessageComponent.prototype, "label", void 0);
    tslib_1.__decorate([
        Input('sublabel'),
        tslib_1.__metadata("design:type", String)
    ], TdMessageComponent.prototype, "sublabel", void 0);
    tslib_1.__decorate([
        Input('icon'),
        tslib_1.__metadata("design:type", String)
    ], TdMessageComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input('color'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TdMessageComponent.prototype, "color", null);
    tslib_1.__decorate([
        Input('opened'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdMessageComponent.prototype, "opened", null);
    tslib_1.__decorate([
        HostListener('@tdCollapse.done'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdMessageComponent.prototype, "animationDoneListener", null);
    TdMessageComponent = tslib_1.__decorate([
        Component({
            selector: 'td-message',
            template: "<div tdMessageContainer></div> <ng-template> <div class=\"td-message-wrapper\"> <mat-icon class=\"td-message-icon\">{{icon}}</mat-icon> <div class=\"td-message-labels\"> <div *ngIf=\"label\" class=\"td-message-label\">{{label}}</div> <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{sublabel}}</div> </div> <ng-content select=\"[td-message-actions]\"></ng-content> </div> </ng-template>",
            styles: [":host { display: block; } :host .td-message-wrapper { padding: 8px 16px; min-height: 52px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } :host .td-message-wrapper .td-message-labels { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } .td-message-icon { margin-right: 16px; } ::ng-deep [dir='rtl'] .td-message-icon { margin-left: 16px; margin-right: 0; } /*# sourceMappingURL=message.component.css.map */ "],
            animations: [
                TdCollapseAnimation({ duration: 100 }),
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ChangeDetectorRef,
            ElementRef])
    ], TdMessageComponent);
    return TdMessageComponent;
}());
export { TdMessageComponent };
//# sourceMappingURL=message.component.js.map