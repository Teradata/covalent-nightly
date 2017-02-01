var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
import { Renderer } from '@angular/core';
import { TdMediaService } from '../services/media.service';
var TdMediaToggleDirective = (function () {
    function TdMediaToggleDirective(_renderer, _elementRef, _mediaService) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._mediaService = _mediaService;
        this._matches = false;
        this._attributes = {};
        this._styles = {};
        this._classes = [];
    }
    Object.defineProperty(TdMediaToggleDirective.prototype, "query", {
        /**
         * tdMediaToggle: string
         * Media query used to evaluate screen/window size.
         * Toggles attributes, classes and styles if media query is matched.
         */
        set: function (query) {
            if (!query) {
                throw new Error('Query needed for [tdMediaToggle] directive.');
            }
            this._query = query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "attributes", {
        /**
         * mediaAttributes: {[key: string]: string}
         * Attributes to be toggled when media query matches.
         */
        set: function (attributes) {
            this._attributes = attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "classes", {
        /**
         * mediaClasses: string[]
         * CSS Classes to be toggled when media query matches.
         */
        set: function (classes) {
            this._classes = classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "styles", {
        /**
         * mediaStyles: {[key: string]: string}
         * CSS Styles to be toggled when media query matches.
         */
        set: function (styles) {
            this._styles = styles;
        },
        enumerable: true,
        configurable: true
    });
    TdMediaToggleDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe(function (matches) {
            _this._mediaChange(matches);
        });
    };
    TdMediaToggleDirective.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    TdMediaToggleDirective.prototype._mediaChange = function (matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    };
    TdMediaToggleDirective.prototype._changeAttributes = function () {
        for (var attr in this._attributes) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, attr, this._matches ? this._attributes[attr] : undefined);
        }
    };
    TdMediaToggleDirective.prototype._changeClasses = function () {
        var _this = this;
        this._classes.forEach(function (className) {
            _this._renderer.setElementClass(_this._elementRef.nativeElement, className, _this._matches);
        });
    };
    TdMediaToggleDirective.prototype._changeStyles = function () {
        for (var style in this._styles) {
            this._renderer.setElementStyle(this._elementRef.nativeElement, style, this._matches ? this._styles[style] : undefined);
        }
    };
    return TdMediaToggleDirective;
}());
__decorate([
    Input('tdMediaToggle'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdMediaToggleDirective.prototype, "query", null);
__decorate([
    Input('mediaAttributes'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdMediaToggleDirective.prototype, "attributes", null);
__decorate([
    Input('mediaClasses'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdMediaToggleDirective.prototype, "classes", null);
__decorate([
    Input('mediaStyles'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdMediaToggleDirective.prototype, "styles", null);
TdMediaToggleDirective = __decorate([
    Directive({
        selector: '[tdMediaToggle]',
    }),
    __metadata("design:paramtypes", [Renderer, ElementRef, TdMediaService])
], TdMediaToggleDirective);
export { TdMediaToggleDirective };
//# sourceMappingURL=media-toggle.directive.js.map