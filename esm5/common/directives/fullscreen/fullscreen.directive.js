/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
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
            requestFullscreen: (/**
             * @return {?}
             */
            function () { return nativeElement.requestFullscreen(); }),
            // Chrome
            webkitRequestFullscreen: (/**
             * @return {?}
             */
            function () { return nativeElement.webkitRequestFullscreen(); }),
            // Safari
            mozRequestFullScreen: (/**
             * @return {?}
             */
            function () { return nativeElement.mozRequestFullScreen(); }),
            // Firefox
            msRequestFullscreen: (/**
             * @return {?}
             */
            function () { return nativeElement.msRequestFullscreen(); }),
        };
        try {
            for (var _b = __values(Object.keys(enterFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            exitFullscreen: (/**
             * @return {?}
             */
            function () { return _document.exitFullscreen(); }),
            // Chrome
            webkitExitFullscreen: (/**
             * @return {?}
             */
            function () { return _document.webkitExitFullscreen(); }),
            // Safari
            mozCancelFullScreen: (/**
             * @return {?}
             */
            function () { return _document.mozCancelFullScreen(); }),
            // Firefox
            msExitFullscreen: (/**
             * @return {?}
             */
            function () { return _document.msExitFullscreen(); }),
        };
        try {
            for (var _c = __values(Object.keys(exitFullScreenMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
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
     * @private
     * @return {?}
     */
    TdFullscreenDirective.prototype._getFullScreenElement = /**
     * @private
     * @return {?}
     */
    function () {
        var e_3, _a;
        var _document = this._document;
        /** @type {?} */
        var tdFullScreenElementMap = {
            fullscreenElement: (/**
             * @return {?}
             */
            function () { return _document.fullscreenElement; }),
            // Chrome, Opera
            webkitFullscreenElement: (/**
             * @return {?}
             */
            function () { return _document.webkitFullscreenElement; }),
            // Safari
            mozFullscreenElement: (/**
             * @return {?}
             */
            function () { return _document.mozFullscreenElement; }),
            // Firefox
            msFullscreenElement: (/**
             * @return {?}
             */
            function () { return _document.msFullscreenElement; }),
        };
        try {
            for (var _b = __values(Object.keys(tdFullScreenElementMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /**
     * @type {?}
     * @private
     */
    TdFullscreenDirective.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdFullscreenDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUUzQywwQkFRQzs7O0lBUEMsd0NBQTJCOztJQUMzQiw4Q0FBaUM7O0lBQ2pDLDJDQUE4Qjs7SUFDOUIsMENBQTZCOztJQUM3QiwyQ0FBaUM7O0lBQ2pDLDBDQUFnQzs7SUFDaEMsdUNBQTZCOztBQUcvQjtJQU1FLCtCQUFzQyxTQUFzQixFQUFVLEdBQWU7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFEckYsdUJBQWtCLEdBQVksS0FBSyxDQUFDO0lBQ29ELENBQUM7Ozs7O0lBTWxGLCtDQUFlOzs7O0lBSnRCLFVBSXVCLEtBQVk7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVNLGdEQUFnQjs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNHLENBQUM7Ozs7SUFFTSwrQ0FBZTs7O0lBQXRCOztRQUVXLElBQUEsc0NBQWE7O1lBRWhCLGtCQUFrQixHQUFXO1lBQ2pDLGlCQUFpQjs7O1lBQUUsY0FBTSxP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U0FBQyw4QkFBOEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUN2RCxZQUFZLFNBQUMsNkJBQTZCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBNER6RCw0QkFBQztDQUFBLEFBdkVELElBdUVDO1NBbkVZLHFCQUFxQjs7O0lBQ2hDLG1EQUFvQzs7Ozs7SUFDeEIsMENBQWdEOzs7OztJQUFFLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW50ZXJmYWNlIElGc0RvY3VtZW50IGV4dGVuZHMgSFRNTERvY3VtZW50IHtcbiAgZnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHdlYmtpdEZ1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICBtb3pGdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgbXNGdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgd2Via2l0RXhpdEZ1bGxzY3JlZW46ICgpID0+IHZvaWQ7XG4gIG1vekNhbmNlbEZ1bGxTY3JlZW46ICgpID0+IHZvaWQ7XG4gIG1zRXhpdEZ1bGxzY3JlZW46ICgpID0+IHZvaWQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZ1bGxTY3JlZW5dJyxcbiAgZXhwb3J0QXM6ICd0ZEZ1bGxTY3JlZW4nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUge1xuICBmdWxsU2NyZWVuSXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IElGc0RvY3VtZW50LCBwcml2YXRlIF9lbDogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6d2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vemZ1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptc2Z1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBwdWJsaWMgZnNDaGFuZ2VIYW5kbGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZnVsbFNjcmVlbklzQWN0aXZlID0gZXZlbnQuc3JjRWxlbWVudCA9PT0gdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuX2dldEZ1bGxTY3JlZW5FbGVtZW50KCkgPT09IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLmV4aXRGdWxsU2NyZWVuKCkgOiB0aGlzLmVudGVyRnVsbFNjcmVlbigpO1xuICB9XG5cbiAgcHVibGljIGVudGVyRnVsbFNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBfZWw6IHsgbmF0aXZlRWxlbWVudCB9LFxuICAgIH06IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSA9IHRoaXM7XG4gICAgY29uc3QgZW50ZXJGdWxsU2NyZWVuTWFwOiBvYmplY3QgPSB7XG4gICAgICByZXF1ZXN0RnVsbHNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpLCAvLyBDaHJvbWVcbiAgICAgIHdlYmtpdFJlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCksIC8vIFNhZmFyaVxuICAgICAgbW96UmVxdWVzdEZ1bGxTY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKSwgLy8gRmlyZWZveFxuICAgICAgbXNSZXF1ZXN0RnVsbHNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCksIC8vIElFXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBPYmplY3Qua2V5cyhlbnRlckZ1bGxTY3JlZW5NYXApKSB7XG4gICAgICBpZiAobmF0aXZlRWxlbWVudFtoYW5kbGVyXSkge1xuICAgICAgICBlbnRlckZ1bGxTY3JlZW5NYXBbaGFuZGxlcl0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZXhpdEZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgX2RvY3VtZW50LFxuICAgICAgX2VsOiB7IG5hdGl2ZUVsZW1lbnQgfSxcbiAgICB9OiBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUgPSB0aGlzO1xuICAgIGNvbnN0IGV4aXRGdWxsU2NyZWVuTWFwOiBvYmplY3QgPSB7XG4gICAgICBleGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCksIC8vIENocm9tZVxuICAgICAgd2Via2l0RXhpdEZ1bGxzY3JlZW46ICgpID0+IF9kb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpLCAvLyBTYWZhcmlcbiAgICAgIG1vekNhbmNlbEZ1bGxTY3JlZW46ICgpID0+IF9kb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCksIC8vIEZpcmVmb3hcbiAgICAgIG1zRXhpdEZ1bGxzY3JlZW46ICgpID0+IF9kb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCksIC8vIElFXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBPYmplY3Qua2V5cyhleGl0RnVsbFNjcmVlbk1hcCkpIHtcbiAgICAgIGlmIChfZG9jdW1lbnRbaGFuZGxlcl0gJiYgdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKSA9PT0gbmF0aXZlRWxlbWVudCkge1xuICAgICAgICBleGl0RnVsbFNjcmVlbk1hcFtoYW5kbGVyXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZ1bGxTY3JlZW5FbGVtZW50KCk6IEVsZW1lbnQge1xuICAgIGNvbnN0IHsgX2RvY3VtZW50IH06IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSA9IHRoaXM7XG4gICAgY29uc3QgdGRGdWxsU2NyZWVuRWxlbWVudE1hcDogb2JqZWN0ID0ge1xuICAgICAgZnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCwgLy8gQ2hyb21lLCBPcGVyYVxuICAgICAgd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCwgLy8gU2FmYXJpXG4gICAgICBtb3pGdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50Lm1vekZ1bGxzY3JlZW5FbGVtZW50LCAvLyBGaXJlZm94XG4gICAgICBtc0Z1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCwgLy8gSUUsIEVkZ2VcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcHMgb2YgT2JqZWN0LmtleXModGRGdWxsU2NyZWVuRWxlbWVudE1hcCkpIHtcbiAgICAgIGlmIChfZG9jdW1lbnRbcHJvcHNdKSB7XG4gICAgICAgIHJldHVybiBfZG9jdW1lbnRbcHJvcHNdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19