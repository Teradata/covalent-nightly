/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this._subscription = this._mediaService.registerQuery(this._query).subscribe(function (matches) {
            _this._mediaChange(matches);
        });
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
     * @param {?} matches
     * @return {?}
     */
    TdMediaToggleDirective.prototype._mediaChange = /**
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
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeAttributes = /**
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
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeClasses = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeStyles = /**
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
    /** @type {?} */
    TdMediaToggleDirective.prototype._subscription;
    /** @type {?} */
    TdMediaToggleDirective.prototype._query;
    /** @type {?} */
    TdMediaToggleDirective.prototype._matches;
    /** @type {?} */
    TdMediaToggleDirective.prototype._attributes;
    /** @type {?} */
    TdMediaToggleDirective.prototype._styles;
    /** @type {?} */
    TdMediaToggleDirective.prototype._classes;
    /** @type {?} */
    TdMediaToggleDirective.prototype._renderer;
    /** @type {?} */
    TdMediaToggleDirective.prototype._elementRef;
    /** @type {?} */
    TdMediaToggleDirective.prototype._mediaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvZGlyZWN0aXZlcy9tZWRpYS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNEO0lBb0RFLGdDQUFvQixTQUFvQixFQUFVLFdBQXVCLEVBQVUsYUFBNkI7UUFBNUYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBN0N4RyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQThCLEVBQUUsQ0FBQztRQUM1QyxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN4QyxhQUFRLEdBQWEsRUFBRSxDQUFDO0lBMENtRixDQUFDO0lBbkNwSCxzQkFDSSx5Q0FBSztRQU5UOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFDVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2FBQ2hFO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBVTtRQUxkOzs7V0FHRzs7Ozs7OztRQUNILFVBQ2UsVUFBZTtZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDJDQUFPO1FBTFg7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDWSxPQUFpQjtZQUMz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QW1CcEIsS0FBSyxTQUFDLGVBQWU7NkJBWXJCLEtBQUssU0FBQyxpQkFBaUI7MEJBU3ZCLEtBQUssU0FBQyxjQUFjO3lCQVNwQixLQUFLLFNBQUMsYUFBYTs7SUF3RHRCLDZCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0FwR1ksc0JBQXNCOzs7SUFDakMsK0NBQW9DOztJQUVwQyx3Q0FBdUI7O0lBQ3ZCLDBDQUFrQzs7SUFDbEMsNkNBQW9EOztJQUNwRCx5Q0FBZ0Q7O0lBQ2hELDBDQUFnQzs7SUEwQ3BCLDJDQUE0Qjs7SUFBRSw2Q0FBK0I7O0lBQUUsK0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVkaWEuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZE1lZGlhVG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTWVkaWFUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX3F1ZXJ5OiBzdHJpbmc7XG4gIHByaXZhdGUgX21hdGNoZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBwcml2YXRlIF9zdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgcHJpdmF0ZSBfY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICAvKipcbiAgICogdGRNZWRpYVRvZ2dsZTogc3RyaW5nXG4gICAqIE1lZGlhIHF1ZXJ5IHVzZWQgdG8gZXZhbHVhdGUgc2NyZWVuL3dpbmRvdyBzaXplLlxuICAgKiBUb2dnbGVzIGF0dHJpYnV0ZXMsIGNsYXNzZXMgYW5kIHN0eWxlcyBpZiBtZWRpYSBxdWVyeSBpcyBtYXRjaGVkLlxuICAgKi9cbiAgQElucHV0KCd0ZE1lZGlhVG9nZ2xlJylcbiAgc2V0IHF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1ZXJ5IG5lZWRlZCBmb3IgW3RkTWVkaWFUb2dnbGVdIGRpcmVjdGl2ZS4nKTtcbiAgICB9XG4gICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYUF0dHJpYnV0ZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9XG4gICAqIEF0dHJpYnV0ZXMgdG8gYmUgdG9nZ2xlZCB3aGVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMuXG4gICAqL1xuICBASW5wdXQoJ21lZGlhQXR0cmlidXRlcycpXG4gIHNldCBhdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IGFueSkge1xuICAgIHRoaXMuX2F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhQ2xhc3Nlczogc3RyaW5nW11cbiAgICogQ1NTIENsYXNzZXMgdG8gYmUgdG9nZ2xlZCB3aGVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMuXG4gICAqL1xuICBASW5wdXQoJ21lZGlhQ2xhc3NlcycpXG4gIHNldCBjbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY2xhc3NlcyA9IGNsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFTdHlsZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9XG4gICAqIENTUyBTdHlsZXMgdG8gYmUgdG9nZ2xlZCB3aGVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMuXG4gICAqL1xuICBASW5wdXQoJ21lZGlhU3R5bGVzJylcbiAgc2V0IHN0eWxlcyhzdHlsZXM6IGFueSkge1xuICAgIHRoaXMuX3N0eWxlcyA9IHN0eWxlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX21lZGlhU2VydmljZTogVGRNZWRpYVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVkaWFDaGFuZ2UodGhpcy5fbWVkaWFTZXJ2aWNlLnF1ZXJ5KHRoaXMuX3F1ZXJ5KSk7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fbWVkaWFTZXJ2aWNlLnJlZ2lzdGVyUXVlcnkodGhpcy5fcXVlcnkpLnN1YnNjcmliZSgobWF0Y2hlczogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5fbWVkaWFDaGFuZ2UobWF0Y2hlcyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tZWRpYUNoYW5nZShtYXRjaGVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fbWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgdGhpcy5fY2hhbmdlQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX2NoYW5nZUNsYXNzZXMoKTtcbiAgICB0aGlzLl9jaGFuZ2VTdHlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZUF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiB0aGlzLl9hdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAodGhpcy5fbWF0Y2hlcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyLCB0aGlzLl9hdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGF0dHIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlU3R5bGVzKCk6IHZvaWQge1xuICAgIGZvciAobGV0IHN0eWxlIGluIHRoaXMuX3N0eWxlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdHlsZSwgdGhpcy5fc3R5bGVzW3N0eWxlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==