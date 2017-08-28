import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
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
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    TdMediaToggleDirective.prototype._mediaChange = function (matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    };
    TdMediaToggleDirective.prototype._changeAttributes = function () {
        for (var attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    };
    TdMediaToggleDirective.prototype._changeClasses = function () {
        var _this = this;
        this._classes.forEach(function (className) {
            if (_this._matches) {
                _this._renderer.addClass(_this._elementRef.nativeElement, className);
            }
            else {
                _this._renderer.removeClass(_this._elementRef.nativeElement, className);
            }
        });
    };
    TdMediaToggleDirective.prototype._changeStyles = function () {
        for (var style in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style);
            }
        }
    };
    tslib_1.__decorate([
        Input('tdMediaToggle'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TdMediaToggleDirective.prototype, "query", null);
    tslib_1.__decorate([
        Input('mediaAttributes'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TdMediaToggleDirective.prototype, "attributes", null);
    tslib_1.__decorate([
        Input('mediaClasses'),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], TdMediaToggleDirective.prototype, "classes", null);
    tslib_1.__decorate([
        Input('mediaStyles'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TdMediaToggleDirective.prototype, "styles", null);
    TdMediaToggleDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdMediaToggle]',
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef, TdMediaService])
    ], TdMediaToggleDirective);
    return TdMediaToggleDirective;
}());
export { TdMediaToggleDirective };
//# sourceMappingURL=media-toggle.directive.js.map