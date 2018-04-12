(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/icon')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/message', ['exports', '@angular/core', '@covalent/core/common', '@angular/common', '@angular/material/icon'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.message = {}),global.ng.core,global.covalent.core.common,global.ng.common,global.ng.material.icon));
}(this, (function (exports,core,common,common$1,icon) { 'use strict';

var TdMessageContainerDirective = /** @class */ (function () {
    function TdMessageContainerDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return TdMessageContainerDirective;
}());
TdMessageContainerDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdMessageContainer]',
            },] },
];
TdMessageContainerDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
var TdMessageComponent = /** @class */ (function () {
    function TdMessageComponent(_renderer, _changeDetectorRef, _elementRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._opened = true;
        this._hidden = false;
        this._animating = false;
        this._initialized = false;
        this.icon = 'info_outline';
        this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
    }
    Object.defineProperty(TdMessageComponent.prototype, "collapsedAnimation", {
        get: function () {
            return !this._opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "hidden", {
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
    TdMessageComponent.prototype.animationDoneListener = function () {
        if (!this._opened) {
            this._hidden = true;
            this._detach();
        }
        this._animating = false;
        this._changeDetectorRef.markForCheck();
    };
    TdMessageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve(undefined).then(function () {
            if (_this._opened) {
                _this._attach();
            }
            _this._initialized = true;
        });
    };
    TdMessageComponent.prototype.open = function () {
        if (!this._opened && !this._animating) {
            this._opened = true;
            this._attach();
            this._startAnimationState();
        }
    };
    TdMessageComponent.prototype.close = function () {
        if (this._opened && !this._animating) {
            this._opened = false;
            this._startAnimationState();
        }
    };
    TdMessageComponent.prototype.toggle = function () {
        if (this._opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    TdMessageComponent.prototype._startAnimationState = function () {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    };
    TdMessageComponent.prototype._attach = function () {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    };
    TdMessageComponent.prototype._detach = function () {
        this._childElement.viewContainer.clear();
        this._changeDetectorRef.markForCheck();
    };
    return TdMessageComponent;
}());
TdMessageComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-message',
                template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{icon}}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{label}}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{sublabel}}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>",
                styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}:host .td-message-wrapper .td-message-labels{-webkit-box-flex:1;-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"],
                animations: [
                    common.TdCollapseAnimation({ duration: 100 }),
                ],
            },] },
];
TdMessageComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
    { type: core.ElementRef, },
]; };
TdMessageComponent.propDecorators = {
    "_childElement": [{ type: core.ViewChild, args: [TdMessageContainerDirective,] },],
    "_template": [{ type: core.ViewChild, args: [core.TemplateRef,] },],
    "collapsedAnimation": [{ type: core.HostBinding, args: ['@tdCollapse',] },],
    "hidden": [{ type: core.HostBinding, args: ['style.display',] },],
    "label": [{ type: core.Input, args: ['label',] },],
    "sublabel": [{ type: core.Input, args: ['sublabel',] },],
    "icon": [{ type: core.Input, args: ['icon',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "opened": [{ type: core.Input, args: ['opened',] },],
    "animationDoneListener": [{ type: core.HostListener, args: ['@tdCollapse.done',] },],
};
var TD_MESSAGE = [
    TdMessageComponent,
    TdMessageContainerDirective,
];
var CovalentMessageModule = /** @class */ (function () {
    function CovalentMessageModule() {
    }
    return CovalentMessageModule;
}());
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
            },] },
];
CovalentMessageModule.ctorParameters = function () { return []; };

exports.CovalentMessageModule = CovalentMessageModule;
exports.TdMessageContainerDirective = TdMessageContainerDirective;
exports.TdMessageComponent = TdMessageComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-message.umd.js.map
