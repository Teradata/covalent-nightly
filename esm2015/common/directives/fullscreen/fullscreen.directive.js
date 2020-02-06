/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class TdFullscreenDirective {
    /**
     * @param {?} _document
     * @param {?} _el
     */
    constructor(_document, _el) {
        this._document = _document;
        this._el = _el;
        this.fullScreenIsActive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fsChangeHandler(event) {
        this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
    }
    /**
     * @return {?}
     */
    toggleFullScreen() {
        this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
    }
    /**
     * @return {?}
     */
    enterFullScreen() {
        const { _el: { nativeElement }, } = this;
        /** @type {?} */
        const enterFullScreenMap = {
            requestFullscreen: (/**
             * @return {?}
             */
            () => nativeElement.requestFullscreen()),
            // Chrome
            webkitRequestFullscreen: (/**
             * @return {?}
             */
            () => nativeElement.webkitRequestFullscreen()),
            // Safari
            mozRequestFullScreen: (/**
             * @return {?}
             */
            () => nativeElement.mozRequestFullScreen()),
            // Firefox
            msRequestFullscreen: (/**
             * @return {?}
             */
            () => nativeElement.msRequestFullscreen()),
        };
        for (const handler of Object.keys(enterFullScreenMap)) {
            if (nativeElement[handler]) {
                enterFullScreenMap[handler]();
            }
        }
    }
    /**
     * @return {?}
     */
    exitFullScreen() {
        const { _document, _el: { nativeElement }, } = this;
        /** @type {?} */
        const exitFullScreenMap = {
            exitFullscreen: (/**
             * @return {?}
             */
            () => _document.exitFullscreen()),
            // Chrome
            webkitExitFullscreen: (/**
             * @return {?}
             */
            () => _document.webkitExitFullscreen()),
            // Safari
            mozCancelFullScreen: (/**
             * @return {?}
             */
            () => _document.mozCancelFullScreen()),
            // Firefox
            msExitFullscreen: (/**
             * @return {?}
             */
            () => _document.msExitFullscreen()),
        };
        for (const handler of Object.keys(exitFullScreenMap)) {
            if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                exitFullScreenMap[handler]();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getFullScreenElement() {
        const { _document } = this;
        /** @type {?} */
        const tdFullScreenElementMap = {
            fullscreenElement: (/**
             * @return {?}
             */
            () => _document.fullscreenElement),
            // Chrome, Opera
            webkitFullscreenElement: (/**
             * @return {?}
             */
            () => _document.webkitFullscreenElement),
            // Safari
            mozFullscreenElement: (/**
             * @return {?}
             */
            () => _document.mozFullscreenElement),
            // Firefox
            msFullscreenElement: (/**
             * @return {?}
             */
            () => _document.msFullscreenElement),
        };
        for (const props of Object.keys(tdFullScreenElementMap)) {
            if (_document[props]) {
                return _document[props];
            }
        }
    }
}
TdFullscreenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFullScreen]',
                exportAs: 'tdFullScreen',
            },] }
];
/** @nocollapse */
TdFullscreenDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef }
];
TdFullscreenDirective.propDecorators = {
    fsChangeHandler: [{ type: HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRTNDLDBCQVFDOzs7SUFQQyx3Q0FBMkI7O0lBQzNCLDhDQUFpQzs7SUFDakMsMkNBQThCOztJQUM5QiwwQ0FBNkI7O0lBQzdCLDJDQUFpQzs7SUFDakMsMENBQWdDOztJQUNoQyx1Q0FBNkI7O0FBTy9CLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWhDLFlBQXNDLFNBQXNCLEVBQVUsR0FBZTtRQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQURyRix1QkFBa0IsR0FBWSxLQUFLLENBQUM7SUFDb0QsQ0FBQzs7Ozs7SUFNbEYsZUFBZSxDQUFDLEtBQVk7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0csQ0FBQzs7OztJQUVNLGVBQWU7Y0FDZCxFQUNKLEdBQUcsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUN2QixHQUEwQixJQUFJOztjQUN6QixrQkFBa0IsR0FBVztZQUNqQyxpQkFBaUI7OztZQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBOztZQUMxRCx1QkFBdUI7OztZQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBOztZQUN0RSxvQkFBb0I7OztZQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFBOztZQUNoRSxtQkFBbUI7OztZQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1NBQy9EO1FBRUQsS0FBSyxNQUFNLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDckQsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzFCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFTSxjQUFjO2NBQ2IsRUFDSixTQUFTLEVBQ1QsR0FBRyxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQ3ZCLEdBQTBCLElBQUk7O2NBQ3pCLGlCQUFpQixHQUFXO1lBQ2hDLGNBQWM7OztZQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTs7WUFDaEQsb0JBQW9COzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTs7WUFDNUQsbUJBQW1COzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTs7WUFDMUQsZ0JBQWdCOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtTQUNyRDtRQUVELEtBQUssTUFBTSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3BELElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLGFBQWEsRUFBRTtnQkFDeEUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM5QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxxQkFBcUI7Y0FDckIsRUFBRSxTQUFTLEVBQUUsR0FBMEIsSUFBSTs7Y0FDM0Msc0JBQXNCLEdBQVc7WUFDckMsaUJBQWlCOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUE7O1lBQ3BELHVCQUF1Qjs7O1lBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFBOztZQUNoRSxvQkFBb0I7OztZQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQTs7WUFDMUQsbUJBQW1COzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUE7U0FDekQ7UUFDRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUN2RCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7U0FDRjtJQUNILENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7NENBR2MsTUFBTSxTQUFDLFFBQVE7WUFuQkksVUFBVTs7OzhCQXFCekMsWUFBWSxTQUFDLDJCQUEyQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3BELFlBQVksU0FBQyxpQ0FBaUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMxRCxZQUFZLFNBQUMsOEJBQThCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDdkQsWUFBWSxTQUFDLDZCQUE2QixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBTnZELG1EQUFvQzs7Ozs7SUFDeEIsMENBQWdEOzs7OztJQUFFLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW50ZXJmYWNlIElGc0RvY3VtZW50IGV4dGVuZHMgSFRNTERvY3VtZW50IHtcbiAgZnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHdlYmtpdEZ1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICBtb3pGdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgbXNGdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgd2Via2l0RXhpdEZ1bGxzY3JlZW46ICgpID0+IHZvaWQ7XG4gIG1vekNhbmNlbEZ1bGxTY3JlZW46ICgpID0+IHZvaWQ7XG4gIG1zRXhpdEZ1bGxzY3JlZW46ICgpID0+IHZvaWQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZ1bGxTY3JlZW5dJyxcbiAgZXhwb3J0QXM6ICd0ZEZ1bGxTY3JlZW4nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUge1xuICBmdWxsU2NyZWVuSXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IElGc0RvY3VtZW50LCBwcml2YXRlIF9lbDogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6d2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vemZ1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptc2Z1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBwdWJsaWMgZnNDaGFuZ2VIYW5kbGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZnVsbFNjcmVlbklzQWN0aXZlID0gZXZlbnQuc3JjRWxlbWVudCA9PT0gdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuX2dldEZ1bGxTY3JlZW5FbGVtZW50KCkgPT09IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLmV4aXRGdWxsU2NyZWVuKCkgOiB0aGlzLmVudGVyRnVsbFNjcmVlbigpO1xuICB9XG5cbiAgcHVibGljIGVudGVyRnVsbFNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBfZWw6IHsgbmF0aXZlRWxlbWVudCB9LFxuICAgIH06IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSA9IHRoaXM7XG4gICAgY29uc3QgZW50ZXJGdWxsU2NyZWVuTWFwOiBvYmplY3QgPSB7XG4gICAgICByZXF1ZXN0RnVsbHNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpLCAvLyBDaHJvbWVcbiAgICAgIHdlYmtpdFJlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCksIC8vIFNhZmFyaVxuICAgICAgbW96UmVxdWVzdEZ1bGxTY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKSwgLy8gRmlyZWZveFxuICAgICAgbXNSZXF1ZXN0RnVsbHNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCksIC8vIElFXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBPYmplY3Qua2V5cyhlbnRlckZ1bGxTY3JlZW5NYXApKSB7XG4gICAgICBpZiAobmF0aXZlRWxlbWVudFtoYW5kbGVyXSkge1xuICAgICAgICBlbnRlckZ1bGxTY3JlZW5NYXBbaGFuZGxlcl0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZXhpdEZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgX2RvY3VtZW50LFxuICAgICAgX2VsOiB7IG5hdGl2ZUVsZW1lbnQgfSxcbiAgICB9OiBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUgPSB0aGlzO1xuICAgIGNvbnN0IGV4aXRGdWxsU2NyZWVuTWFwOiBvYmplY3QgPSB7XG4gICAgICBleGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCksIC8vIENocm9tZVxuICAgICAgd2Via2l0RXhpdEZ1bGxzY3JlZW46ICgpID0+IF9kb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpLCAvLyBTYWZhcmlcbiAgICAgIG1vekNhbmNlbEZ1bGxTY3JlZW46ICgpID0+IF9kb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCksIC8vIEZpcmVmb3hcbiAgICAgIG1zRXhpdEZ1bGxzY3JlZW46ICgpID0+IF9kb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCksIC8vIElFXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBPYmplY3Qua2V5cyhleGl0RnVsbFNjcmVlbk1hcCkpIHtcbiAgICAgIGlmIChfZG9jdW1lbnRbaGFuZGxlcl0gJiYgdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKSA9PT0gbmF0aXZlRWxlbWVudCkge1xuICAgICAgICBleGl0RnVsbFNjcmVlbk1hcFtoYW5kbGVyXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZ1bGxTY3JlZW5FbGVtZW50KCk6IEVsZW1lbnQge1xuICAgIGNvbnN0IHsgX2RvY3VtZW50IH06IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSA9IHRoaXM7XG4gICAgY29uc3QgdGRGdWxsU2NyZWVuRWxlbWVudE1hcDogb2JqZWN0ID0ge1xuICAgICAgZnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCwgLy8gQ2hyb21lLCBPcGVyYVxuICAgICAgd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCwgLy8gU2FmYXJpXG4gICAgICBtb3pGdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50Lm1vekZ1bGxzY3JlZW5FbGVtZW50LCAvLyBGaXJlZm94XG4gICAgICBtc0Z1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCwgLy8gSUUsIEVkZ2VcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcHMgb2YgT2JqZWN0LmtleXModGRGdWxsU2NyZWVuRWxlbWVudE1hcCkpIHtcbiAgICAgIGlmIChfZG9jdW1lbnRbcHJvcHNdKSB7XG4gICAgICAgIHJldHVybiBfZG9jdW1lbnRbcHJvcHNdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19