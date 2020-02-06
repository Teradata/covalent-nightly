/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { TdMediaService } from '../services/media.service';
var TdMediaToggleDirective = /** @class */ (function () {
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
        set: /**
         * tdMediaToggle: string
         * Media query used to evaluate screen/window size.
         * Toggles attributes, classes and styles if media query is matched.
         * @param {?} query
         * @return {?}
         */
        function (query) {
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
        set: /**
         * mediaAttributes: {[key: string]: string}
         * Attributes to be toggled when media query matches.
         * @param {?} attributes
         * @return {?}
         */
        function (attributes) {
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
        set: /**
         * mediaClasses: string[]
         * CSS Classes to be toggled when media query matches.
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
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
        set: /**
         * mediaStyles: {[key: string]: string}
         * CSS Styles to be toggled when media query matches.
         * @param {?} styles
         * @return {?}
         */
        function (styles) {
            this._styles = styles;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            _this._mediaChange(matches);
        }));
    };
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} matches
     * @return {?}
     */
    TdMediaToggleDirective.prototype._mediaChange = /**
     * @private
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    };
    /**
     * @private
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeAttributes = /**
     * @private
     * @return {?}
     */
    function () {
        for (var attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._classes.forEach((/**
         * @param {?} className
         * @return {?}
         */
        function (className) {
            if (_this._matches) {
                _this._renderer.addClass(_this._elementRef.nativeElement, className);
            }
            else {
                _this._renderer.removeClass(_this._elementRef.nativeElement, className);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeStyles = /**
     * @private
     * @return {?}
     */
    function () {
        for (var style in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style);
            }
        }
    };
    TdMediaToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdMediaToggle]',
                },] }
    ];
    /** @nocollapse */
    TdMediaToggleDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: TdMediaService }
    ]; };
    TdMediaToggleDirective.propDecorators = {
        query: [{ type: Input, args: ['tdMediaToggle',] }],
        attributes: [{ type: Input, args: ['mediaAttributes',] }],
        classes: [{ type: Input, args: ['mediaClasses',] }],
        styles: [{ type: Input, args: ['mediaStyles',] }]
    };
    return TdMediaToggleDirective;
}());
export { TdMediaToggleDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._query;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._matches;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._attributes;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._styles;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._classes;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._mediaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL21lZGlhLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9tZWRpYS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNEO0lBb0RFLGdDQUFvQixTQUFvQixFQUFVLFdBQXVCLEVBQVUsYUFBNkI7UUFBNUYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBN0N4RyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQThCLEVBQUUsQ0FBQztRQUM1QyxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN4QyxhQUFRLEdBQWEsRUFBRSxDQUFDO0lBMENtRixDQUFDO0lBbkNwSCxzQkFDSSx5Q0FBSztRQU5UOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFDVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2FBQ2hFO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBVTtRQUxkOzs7V0FHRzs7Ozs7OztRQUNILFVBQ2UsVUFBZTtZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDJDQUFPO1FBTFg7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDWSxPQUFpQjtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDBDQUFNO1FBTFY7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDVyxNQUFXO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7O0lBSUQseUNBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQWdCO1lBQzVGLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7SUFFTyw2Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLGtEQUFpQjs7OztJQUF6QjtRQUNFLEtBQUssSUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDM0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDdEU7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sK0NBQWM7Ozs7SUFBdEI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsU0FBaUI7WUFDdEMsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN2RTtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyw4Q0FBYTs7OztJQUFyQjtRQUNFLEtBQUssSUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDckY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkU7U0FDRjtJQUNILENBQUM7O2dCQXRHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBUFEsU0FBUztnQkFERSxVQUFVO2dCQUlyQixjQUFjOzs7d0JBbUJwQixLQUFLLFNBQUMsZUFBZTs2QkFZckIsS0FBSyxTQUFDLGlCQUFpQjswQkFTdkIsS0FBSyxTQUFDLGNBQWM7eUJBU3BCLEtBQUssU0FBQyxhQUFhOztJQXdEdEIsNkJBQUM7Q0FBQSxBQXZHRCxJQXVHQztTQXBHWSxzQkFBc0I7Ozs7OztJQUNqQywrQ0FBb0M7Ozs7O0lBRXBDLHdDQUF1Qjs7Ozs7SUFDdkIsMENBQWtDOzs7OztJQUNsQyw2Q0FBb0Q7Ozs7O0lBQ3BELHlDQUFnRDs7Ozs7SUFDaEQsMENBQWdDOzs7OztJQTBDcEIsMkNBQTRCOzs7OztJQUFFLDZDQUErQjs7Ozs7SUFBRSwrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRNZWRpYVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZWRpYS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTWVkaWFUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZWRpYVRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfcXVlcnk6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWF0Y2hlczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIHByaXZhdGUgX3N0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBwcml2YXRlIF9jbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiB0ZE1lZGlhVG9nZ2xlOiBzdHJpbmdcbiAgICogTWVkaWEgcXVlcnkgdXNlZCB0byBldmFsdWF0ZSBzY3JlZW4vd2luZG93IHNpemUuXG4gICAqIFRvZ2dsZXMgYXR0cmlidXRlcywgY2xhc3NlcyBhbmQgc3R5bGVzIGlmIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWQuXG4gICAqL1xuICBASW5wdXQoJ3RkTWVkaWFUb2dnbGUnKVxuICBzZXQgcXVlcnkocXVlcnk6IHN0cmluZykge1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVlcnkgbmVlZGVkIGZvciBbdGRNZWRpYVRvZ2dsZV0gZGlyZWN0aXZlLicpO1xuICAgIH1cbiAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhQXR0cmlidXRlczoge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiAgICogQXR0cmlidXRlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFBdHRyaWJ1dGVzJylcbiAgc2V0IGF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFDbGFzc2VzOiBzdHJpbmdbXVxuICAgKiBDU1MgQ2xhc3NlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFDbGFzc2VzJylcbiAgc2V0IGNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYVN0eWxlczoge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiAgICogQ1NTIFN0eWxlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFTdHlsZXMnKVxuICBzZXQgc3R5bGVzKHN0eWxlczogYW55KSB7XG4gICAgdGhpcy5fc3R5bGVzID0gc3R5bGVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbWVkaWFTZXJ2aWNlOiBUZE1lZGlhU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9tZWRpYUNoYW5nZSh0aGlzLl9tZWRpYVNlcnZpY2UucXVlcnkodGhpcy5fcXVlcnkpKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9tZWRpYVNlcnZpY2UucmVnaXN0ZXJRdWVyeSh0aGlzLl9xdWVyeSkuc3Vic2NyaWJlKChtYXRjaGVzOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9tZWRpYUNoYW5nZShtYXRjaGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21lZGlhQ2hhbmdlKG1hdGNoZXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9tYXRjaGVzID0gbWF0Y2hlcztcbiAgICB0aGlzLl9jaGFuZ2VBdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fY2hhbmdlQ2xhc3NlcygpO1xuICAgIHRoaXMuX2NoYW5nZVN0eWxlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlQXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdGhpcy5fYXR0cmlidXRlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYXR0ciwgdGhpcy5fYXR0cmlidXRlc1thdHRyXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VDbGFzc2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLl9tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVN0eWxlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHRoaXMuX3N0eWxlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdHlsZSwgdGhpcy5fc3R5bGVzW3N0eWxlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==