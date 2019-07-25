/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { TdMediaService } from '../services/media.service';
export class TdMediaToggleDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _mediaService
     */
    constructor(_renderer, _elementRef, _mediaService) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._mediaService = _mediaService;
        this._matches = false;
        this._attributes = {};
        this._styles = {};
        this._classes = [];
    }
    /**
     * tdMediaToggle: string
     * Media query used to evaluate screen/window size.
     * Toggles attributes, classes and styles if media query is matched.
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        if (!query) {
            throw new Error('Query needed for [tdMediaToggle] directive.');
        }
        this._query = query;
    }
    /**
     * mediaAttributes: {[key: string]: string}
     * Attributes to be toggled when media query matches.
     * @param {?} attributes
     * @return {?}
     */
    set attributes(attributes) {
        this._attributes = attributes;
    }
    /**
     * mediaClasses: string[]
     * CSS Classes to be toggled when media query matches.
     * @param {?} classes
     * @return {?}
     */
    set classes(classes) {
        this._classes = classes;
    }
    /**
     * mediaStyles: {[key: string]: string}
     * CSS Styles to be toggled when media query matches.
     * @param {?} styles
     * @return {?}
     */
    set styles(styles) {
        this._styles = styles;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe((matches) => {
            this._mediaChange(matches);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    _mediaChange(matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    }
    /**
     * @return {?}
     */
    _changeAttributes() {
        for (let attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    }
    /**
     * @return {?}
     */
    _changeClasses() {
        this._classes.forEach((className) => {
            if (this._matches) {
                this._renderer.addClass(this._elementRef.nativeElement, className);
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, className);
            }
        });
    }
    /**
     * @return {?}
     */
    _changeStyles() {
        for (let style in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style);
            }
        }
    }
}
TdMediaToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdMediaToggle]',
            },] }
];
/** @nocollapse */
TdMediaToggleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: TdMediaService }
];
TdMediaToggleDirective.propDecorators = {
    query: [{ type: Input, args: ['tdMediaToggle',] }],
    attributes: [{ type: Input, args: ['mediaAttributes',] }],
    classes: [{ type: Input, args: ['mediaClasses',] }],
    styles: [{ type: Input, args: ['mediaStyles',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvZGlyZWN0aXZlcy9tZWRpYS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSzNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQWlEakMsWUFBb0IsU0FBb0IsRUFBVSxXQUF1QixFQUFVLGFBQTZCO1FBQTVGLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQTdDeEcsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUE4QixFQUFFLENBQUM7UUFDNUMsWUFBTyxHQUE4QixFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFhLEVBQUUsQ0FBQztJQTBDbUYsQ0FBQzs7Ozs7Ozs7SUFuQ3BILElBQ0ksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLFVBQVUsQ0FBQyxVQUFlO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLE9BQU8sQ0FBQyxPQUFpQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lB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LDZDQUFvRDs7SUFDcEQseUNBQWdEOztJQUNoRCwwQ0FBZ0M7O0lBMENwQiwyQ0FBNEI7O0lBQUUsNkNBQStCOztJQUFFLCtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZE1lZGlhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lZGlhLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRNZWRpYVRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lZGlhVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9xdWVyeTogc3RyaW5nO1xuICBwcml2YXRlIF9tYXRjaGVzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2F0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgcHJpdmF0ZSBfc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIHByaXZhdGUgX2NsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIHRkTWVkaWFUb2dnbGU6IHN0cmluZ1xuICAgKiBNZWRpYSBxdWVyeSB1c2VkIHRvIGV2YWx1YXRlIHNjcmVlbi93aW5kb3cgc2l6ZS5cbiAgICogVG9nZ2xlcyBhdHRyaWJ1dGVzLCBjbGFzc2VzIGFuZCBzdHlsZXMgaWYgbWVkaWEgcXVlcnkgaXMgbWF0Y2hlZC5cbiAgICovXG4gIEBJbnB1dCgndGRNZWRpYVRvZ2dsZScpXG4gIHNldCBxdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWVyeSBuZWVkZWQgZm9yIFt0ZE1lZGlhVG9nZ2xlXSBkaXJlY3RpdmUuJyk7XG4gICAgfVxuICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFBdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfVxuICAgKiBBdHRyaWJ1dGVzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYUF0dHJpYnV0ZXMnKVxuICBzZXQgYXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBhbnkpIHtcbiAgICB0aGlzLl9hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYUNsYXNzZXM6IHN0cmluZ1tdXG4gICAqIENTUyBDbGFzc2VzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYUNsYXNzZXMnKVxuICBzZXQgY2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhU3R5bGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfVxuICAgKiBDU1MgU3R5bGVzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYVN0eWxlcycpXG4gIHNldCBzdHlsZXMoc3R5bGVzOiBhbnkpIHtcbiAgICB0aGlzLl9zdHlsZXMgPSBzdHlsZXM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tZWRpYVNlcnZpY2U6IFRkTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX21lZGlhQ2hhbmdlKHRoaXMuX21lZGlhU2VydmljZS5xdWVyeSh0aGlzLl9xdWVyeSkpO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX21lZGlhU2VydmljZS5yZWdpc3RlclF1ZXJ5KHRoaXMuX3F1ZXJ5KS5zdWJzY3JpYmUoKG1hdGNoZXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuX21lZGlhQ2hhbmdlKG1hdGNoZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWVkaWFDaGFuZ2UobWF0Y2hlczogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xuICAgIHRoaXMuX2NoYW5nZUF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9jaGFuZ2VDbGFzc2VzKCk7XG4gICAgdGhpcy5fY2hhbmdlU3R5bGVzKCk7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VBdHRyaWJ1dGVzKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGF0dHIgaW4gdGhpcy5fYXR0cmlidXRlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYXR0ciwgdGhpcy5fYXR0cmlidXRlc1thdHRyXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VDbGFzc2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLl9tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVN0eWxlcygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBzdHlsZSBpbiB0aGlzLl9zdHlsZXMpIHtcbiAgICAgIGlmICh0aGlzLl9tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3R5bGUsIHRoaXMuX3N0eWxlc1tzdHlsZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdHlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=