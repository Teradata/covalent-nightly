/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this._subscription = this._mediaService.registerQuery(this._query).subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        (matches) => {
            this._mediaChange(matches);
        }));
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
     * @private
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
     * @private
     * @return {?}
     */
    _changeAttributes() {
        for (const attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _changeClasses() {
        this._classes.forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            if (this._matches) {
                this._renderer.addClass(this._elementRef.nativeElement, className);
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, className);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _changeStyles() {
        for (const style in this._styles) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL21lZGlhLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9tZWRpYS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSzNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQWlEakMsWUFBb0IsU0FBb0IsRUFBVSxXQUF1QixFQUFVLGFBQTZCO1FBQTVGLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQTdDeEcsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUE4QixFQUFFLENBQUM7UUFDNUMsWUFBTyxHQUE4QixFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFhLEVBQUUsQ0FBQztJQTBDbUYsQ0FBQzs7Ozs7Ozs7SUFuQ3BILElBQ0ksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLFVBQVUsQ0FBQyxVQUFlO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLE9BQU8sQ0FBQyxPQUFpQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lB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SUFDdkIsMENBQWtDOzs7OztJQUNsQyw2Q0FBb0Q7Ozs7O0lBQ3BELHlDQUFnRDs7Ozs7SUFDaEQsMENBQWdDOzs7OztJQTBDcEIsMkNBQTRCOzs7OztJQUFFLDZDQUErQjs7Ozs7SUFBRSwrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRNZWRpYVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZWRpYS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTWVkaWFUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZWRpYVRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfcXVlcnk6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWF0Y2hlczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIHByaXZhdGUgX3N0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBwcml2YXRlIF9jbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiB0ZE1lZGlhVG9nZ2xlOiBzdHJpbmdcbiAgICogTWVkaWEgcXVlcnkgdXNlZCB0byBldmFsdWF0ZSBzY3JlZW4vd2luZG93IHNpemUuXG4gICAqIFRvZ2dsZXMgYXR0cmlidXRlcywgY2xhc3NlcyBhbmQgc3R5bGVzIGlmIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWQuXG4gICAqL1xuICBASW5wdXQoJ3RkTWVkaWFUb2dnbGUnKVxuICBzZXQgcXVlcnkocXVlcnk6IHN0cmluZykge1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVlcnkgbmVlZGVkIGZvciBbdGRNZWRpYVRvZ2dsZV0gZGlyZWN0aXZlLicpO1xuICAgIH1cbiAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhQXR0cmlidXRlczoge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiAgICogQXR0cmlidXRlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFBdHRyaWJ1dGVzJylcbiAgc2V0IGF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFDbGFzc2VzOiBzdHJpbmdbXVxuICAgKiBDU1MgQ2xhc3NlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFDbGFzc2VzJylcbiAgc2V0IGNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYVN0eWxlczoge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiAgICogQ1NTIFN0eWxlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFTdHlsZXMnKVxuICBzZXQgc3R5bGVzKHN0eWxlczogYW55KSB7XG4gICAgdGhpcy5fc3R5bGVzID0gc3R5bGVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbWVkaWFTZXJ2aWNlOiBUZE1lZGlhU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9tZWRpYUNoYW5nZSh0aGlzLl9tZWRpYVNlcnZpY2UucXVlcnkodGhpcy5fcXVlcnkpKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9tZWRpYVNlcnZpY2UucmVnaXN0ZXJRdWVyeSh0aGlzLl9xdWVyeSkuc3Vic2NyaWJlKChtYXRjaGVzOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9tZWRpYUNoYW5nZShtYXRjaGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21lZGlhQ2hhbmdlKG1hdGNoZXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9tYXRjaGVzID0gbWF0Y2hlcztcbiAgICB0aGlzLl9jaGFuZ2VBdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fY2hhbmdlQ2xhc3NlcygpO1xuICAgIHRoaXMuX2NoYW5nZVN0eWxlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlQXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdGhpcy5fYXR0cmlidXRlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYXR0ciwgdGhpcy5fYXR0cmlidXRlc1thdHRyXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VDbGFzc2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLl9tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVN0eWxlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHRoaXMuX3N0eWxlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdHlsZSwgdGhpcy5fc3R5bGVzW3N0eWxlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==