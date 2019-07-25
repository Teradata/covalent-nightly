/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/**
 * @record
 */
function IFsDocument() { }
if (false) {
    /** @type {?} */
    IFsDocument.prototype.fullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.webkitFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.mozFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.msFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.webkitExitFullscreen;
    /** @type {?} */
    IFsDocument.prototype.mozCancelFullScreen;
    /** @type {?} */
    IFsDocument.prototype.msExitFullscreen;
}
var TdFullscreenDirective = /** @class */ (function () {
    function TdFullscreenDirective(_document, _el) {
        this._document = _document;
        this._el = _el;
        this.fullScreenIsActive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TdFullscreenDirective.prototype.fsChangeHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.enterFullScreen = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        var nativeElement = this._el.nativeElement;
        /** @type {?} */
        var enterFullScreenMap = {
            requestFullscreen: function () { return nativeElement.requestFullscreen(); },
            // Chrome
            webkitRequestFullscreen: function () { return nativeElement.webkitRequestFullscreen(); },
            // Safari
            mozRequestFullScreen: function () { return nativeElement.mozRequestFullScreen(); },
            // Firefox
            msRequestFullscreen: function () { return nativeElement.msRequestFullscreen(); },
        };
        try {
            for (var _b = tslib_1.__values(Object.keys(enterFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                if (nativeElement[handler]) {
                    enterFullScreenMap[handler]();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.exitFullScreen = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        var _b = this, _document = _b._document, nativeElement = _b._el.nativeElement;
        /** @type {?} */
        var exitFullScreenMap = {
            exitFullscreen: function () { return _document.exitFullscreen(); },
            // Chrome
            webkitExitFullscreen: function () { return _document.webkitExitFullscreen(); },
            // Safari
            mozCancelFullScreen: function () { return _document.mozCancelFullScreen(); },
            // Firefox
            msExitFullscreen: function () { return _document.msExitFullscreen(); },
        };
        try {
            for (var _c = tslib_1.__values(Object.keys(exitFullScreenMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var handler = _d.value;
                if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                    exitFullScreenMap[handler]();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype._getFullScreenElement = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        var _document = this._document;
        /** @type {?} */
        var tdFullScreenElementMap = {
            fullscreenElement: function () { return _document.fullscreenElement; },
            // Chrome, Opera
            webkitFullscreenElement: function () { return _document.webkitFullscreenElement; },
            // Safari
            mozFullscreenElement: function () { return _document.mozFullscreenElement; },
            // Firefox
            msFullscreenElement: function () { return _document.msFullscreenElement; },
        };
        try {
            for (var _b = tslib_1.__values(Object.keys(tdFullScreenElementMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var props = _c.value;
                if (_document[props]) {
                    return _document[props];
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    TdFullscreenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFullScreen]',
                    exportAs: 'tdFullScreen',
                },] }
    ];
    /** @nocollapse */
    TdFullscreenDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef }
    ]; };
    TdFullscreenDirective.propDecorators = {
        fsChangeHandler: [{ type: HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
    };
    return TdFullscreenDirective;
}());
export { TdFullscreenDirective };
if (false) {
    /** @type {?} */
    TdFullscreenDirective.prototype.fullScreenIsActive;
    /** @type {?} */
    TdFullscreenDirective.prototype._document;
    /** @type {?} */
    TdFullscreenDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9kaXJlY3RpdmVzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUUzQywwQkFRQzs7O0lBUEMsd0NBQTJCOztJQUMzQiw4Q0FBaUM7O0lBQ2pDLDJDQUE4Qjs7SUFDOUIsMENBQTZCOztJQUM3QiwyQ0FBaUM7O0lBQ2pDLDBDQUFnQzs7SUFDaEMsdUNBQTZCOztBQUcvQjtJQU1FLCtCQUFzQyxTQUFzQixFQUFVLEdBQWU7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFEckYsdUJBQWtCLEdBQVksS0FBSyxDQUFDO0lBQ29ELENBQUM7Ozs7O0lBTWxGLCtDQUFlOzs7O0lBSnRCLFVBSXVCLEtBQVk7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVNLGdEQUFnQjs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNHLENBQUM7Ozs7SUFFTSwrQ0FBZTs7O0lBQXRCOztRQUVXLElBQUEsc0NBQWE7O1lBRWhCLGtCQUFrQixHQUFXO1lBQ2pDLGlCQUFpQixFQUFFLGNBQU0sT0FB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NEJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQW5FWSxxQkFBcUI7OztJQUNoQyxtREFBb0M7O0lBQ3hCLDBDQUFnRDs7SUFBRSxvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmludGVyZmFjZSBJRnNEb2N1bWVudCBleHRlbmRzIEhUTUxEb2N1bWVudCB7XG4gIGZ1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICB3ZWJraXRGdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgbW96RnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG1zRnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHdlYmtpdEV4aXRGdWxsc2NyZWVuOiAoKSA9PiB2b2lkO1xuICBtb3pDYW5jZWxGdWxsU2NyZWVuOiAoKSA9PiB2b2lkO1xuICBtc0V4aXRGdWxsc2NyZWVuOiAoKSA9PiB2b2lkO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRGdWxsU2NyZWVuXScsXG4gIGV4cG9ydEFzOiAndGRGdWxsU2NyZWVuJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGdWxsc2NyZWVuRGlyZWN0aXZlIHtcbiAgZnVsbFNjcmVlbklzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBJRnNEb2N1bWVudCwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3pmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bXNmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGZzQ2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxTY3JlZW5Jc0FjdGl2ZSA9IGV2ZW50LnNyY0VsZW1lbnQgPT09IHRoaXMuX2dldEZ1bGxTY3JlZW5FbGVtZW50KCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRnVsbFNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLl9nZXRGdWxsU2NyZWVuRWxlbWVudCgpID09PSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50ID8gdGhpcy5leGl0RnVsbFNjcmVlbigpIDogdGhpcy5lbnRlckZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRlckZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgX2VsOiB7IG5hdGl2ZUVsZW1lbnQgfSxcbiAgICB9OiBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUgPSB0aGlzO1xuICAgIGNvbnN0IGVudGVyRnVsbFNjcmVlbk1hcDogb2JqZWN0ID0ge1xuICAgICAgcmVxdWVzdEZ1bGxzY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gQ2hyb21lXG4gICAgICB3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpLCAvLyBTYWZhcmlcbiAgICAgIG1velJlcXVlc3RGdWxsU2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCksIC8vIEZpcmVmb3hcbiAgICAgIG1zUmVxdWVzdEZ1bGxzY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpLCAvLyBJRVxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgT2JqZWN0LmtleXMoZW50ZXJGdWxsU2NyZWVuTWFwKSkge1xuICAgICAgaWYgKG5hdGl2ZUVsZW1lbnRbaGFuZGxlcl0pIHtcbiAgICAgICAgZW50ZXJGdWxsU2NyZWVuTWFwW2hhbmRsZXJdKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGV4aXRGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIF9kb2N1bWVudCxcbiAgICAgIF9lbDogeyBuYXRpdmVFbGVtZW50IH0sXG4gICAgfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCBleGl0RnVsbFNjcmVlbk1hcDogb2JqZWN0ID0ge1xuICAgICAgZXhpdEZ1bGxzY3JlZW46ICgpID0+IF9kb2N1bWVudC5leGl0RnVsbHNjcmVlbigpLCAvLyBDaHJvbWVcbiAgICAgIHdlYmtpdEV4aXRGdWxsc2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKSwgLy8gU2FmYXJpXG4gICAgICBtb3pDYW5jZWxGdWxsU2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpLCAvLyBGaXJlZm94XG4gICAgICBtc0V4aXRGdWxsc2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpLCAvLyBJRVxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgT2JqZWN0LmtleXMoZXhpdEZ1bGxTY3JlZW5NYXApKSB7XG4gICAgICBpZiAoX2RvY3VtZW50W2hhbmRsZXJdICYmIHRoaXMuX2dldEZ1bGxTY3JlZW5FbGVtZW50KCkgPT09IG5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZXhpdEZ1bGxTY3JlZW5NYXBbaGFuZGxlcl0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRGdWxsU2NyZWVuRWxlbWVudCgpOiBFbGVtZW50IHtcbiAgICBjb25zdCB7IF9kb2N1bWVudCB9OiBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUgPSB0aGlzO1xuICAgIGNvbnN0IHRkRnVsbFNjcmVlbkVsZW1lbnRNYXA6IG9iamVjdCA9IHtcbiAgICAgIGZ1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQsIC8vIENocm9tZSwgT3BlcmFcbiAgICAgIHdlYmtpdEZ1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQsIC8vIFNhZmFyaVxuICAgICAgbW96RnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC5tb3pGdWxsc2NyZWVuRWxlbWVudCwgLy8gRmlyZWZveFxuICAgICAgbXNGdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQsIC8vIElFLCBFZGdlXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BzIG9mIE9iamVjdC5rZXlzKHRkRnVsbFNjcmVlbkVsZW1lbnRNYXApKSB7XG4gICAgICBpZiAoX2RvY3VtZW50W3Byb3BzXSkge1xuICAgICAgICByZXR1cm4gX2RvY3VtZW50W3Byb3BzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==