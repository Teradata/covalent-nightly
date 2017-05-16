var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, Input, Renderer2, ElementRef, ViewContainerRef, TemplateRef, ViewChild, HostBinding, ChangeDetectorRef } from '@angular/core';
var TdMessageContainerDirective = (function () {
    function TdMessageContainerDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return TdMessageContainerDirective;
}());
TdMessageContainerDirective = __decorate([
    Directive({
        selector: '[tdMessageContainer]',
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], TdMessageContainerDirective);
export { TdMessageContainerDirective };
var TdMessageComponent = (function () {
    function TdMessageComponent(_renderer, _changeDetectorRef, _elementRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._opened = true;
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
    Object.defineProperty(TdMessageComponent.prototype, "hidden", {
        get: function () {
            return !this._opened ? 'none' : undefined;
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
     * Initializes the component and attaches the content if [opened] was true.
     */
    TdMessageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve(undefined).then(function () {
            if (_this._opened) {
                _this._childElement.viewContainer.createEmbeddedView(_this._template);
                _this._changeDetectorRef.markForCheck();
            }
            _this._initialized = true;
        });
    };
    /**
     * Renders the message on screen.
     */
    TdMessageComponent.prototype.open = function () {
        if (!this._opened) {
            this._opened = true;
            this._childElement.viewContainer.createEmbeddedView(this._template);
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Removes the message content from screen.
     */
    TdMessageComponent.prototype.close = function () {
        if (this._opened) {
            this._opened = false;
            this._childElement.viewContainer.clear();
            this._changeDetectorRef.markForCheck();
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
    return TdMessageComponent;
}());
__decorate([
    ViewChild(TdMessageContainerDirective),
    __metadata("design:type", TdMessageContainerDirective)
], TdMessageComponent.prototype, "_childElement", void 0);
__decorate([
    ViewChild(TemplateRef),
    __metadata("design:type", TemplateRef)
], TdMessageComponent.prototype, "_template", void 0);
__decorate([
    HostBinding('style.display'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TdMessageComponent.prototype, "hidden", null);
__decorate([
    Input('label'),
    __metadata("design:type", String)
], TdMessageComponent.prototype, "label", void 0);
__decorate([
    Input('sublabel'),
    __metadata("design:type", String)
], TdMessageComponent.prototype, "sublabel", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], TdMessageComponent.prototype, "icon", void 0);
__decorate([
    Input('color'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdMessageComponent.prototype, "color", null);
__decorate([
    Input('opened'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdMessageComponent.prototype, "opened", null);
TdMessageComponent = __decorate([
    Component({
        selector: 'td-message',
        template: "<div tdMessageContainer></div> <ng-template> <div class=\"pad-left pad-right td-message-wrapper\" layout=\"row\" layout-align=\"center center\"> <md-icon class=\"push-right\">{{icon}}</md-icon> <div> <div *ngIf=\"label\" class=\"td-message-label md-body-2\">{{label}}</div> <div *ngIf=\"sublabel\" class=\"td-message-sublabel md-body-1\">{{sublabel}}</div> </div> <span flex></span> <ng-content select=\"[td-message-actions]\"></ng-content> </div> </ng-template>",
        styles: [":host { display: block; } :host .td-message-wrapper { min-height: 52px; } "],
    }),
    __metadata("design:paramtypes", [Renderer2,
        ChangeDetectorRef,
        ElementRef])
], TdMessageComponent);
export { TdMessageComponent };
//# sourceMappingURL=message.component.js.map