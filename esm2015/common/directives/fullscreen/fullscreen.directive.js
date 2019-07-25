/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            requestFullscreen: () => nativeElement.requestFullscreen(),
            // Chrome
            webkitRequestFullscreen: () => nativeElement.webkitRequestFullscreen(),
            // Safari
            mozRequestFullScreen: () => nativeElement.mozRequestFullScreen(),
            // Firefox
            msRequestFullscreen: () => nativeElement.msRequestFullscreen(),
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
            exitFullscreen: () => _document.exitFullscreen(),
            // Chrome
            webkitExitFullscreen: () => _document.webkitExitFullscreen(),
            // Safari
            mozCancelFullScreen: () => _document.mozCancelFullScreen(),
            // Firefox
            msExitFullscreen: () => _document.msExitFullscreen(),
        };
        for (const handler of Object.keys(exitFullScreenMap)) {
            if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                exitFullScreenMap[handler]();
            }
        }
    }
    /**
     * @return {?}
     */
    _getFullScreenElement() {
        const { _document } = this;
        /** @type {?} */
        const tdFullScreenElementMap = {
            fullscreenElement: () => _document.fullscreenElement,
            // Chrome, Opera
            webkitFullscreenElement: () => _document.webkitFullscreenElement,
            // Safari
            mozFullscreenElement: () => _document.mozFullscreenElement,
            // Firefox
            msFullscreenElement: () => _document.msFullscreenElement,
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
    /** @type {?} */
    TdFullscreenDirective.prototype._document;
    /** @type {?} */
    TdFullscreenDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9kaXJlY3RpdmVzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRTNDLDBCQVFDOzs7SUFQQyx3Q0FBMkI7O0lBQzNCLDhDQUFpQzs7SUFDakMsMkNBQThCOztJQUM5QiwwQ0FBNkI7O0lBQzdCLDJDQUFpQzs7SUFDakMsMENBQWdDOztJQUNoQyx1Q0FBNkI7O0FBTy9CLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWhDLFlBQXNDLFNBQXNCLEVBQVUsR0FBZTtRQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQURyRix1QkFBa0IsR0FBWSxLQUFLLENBQUM7SUFDb0QsQ0FBQzs7Ozs7SUFNbEYsZUFBZSxDQUFDLEtBQVk7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0csQ0FBQzs7OztJQUVNLGVBQWU7Y0FDZCxFQUNKLEdBQUcsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUN2QixHQUEwQixJQUFJOztjQUN6QixrQkFBa0IsR0FBVztZQUNqQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUU7O1lBQzFELHVCQUF1QixFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRTs7WUFDdEUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFOztZQUNoRSxtQkFBbUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUU7U0FDL0Q7UUFFRCxLQUFLLE1BQU0sT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNyRCxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLGNBQWM7Y0FDYixFQUNKLFNBQVMsRUFDVCxHQUFHLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FDdkIsR0FBMEIsSUFBSTs7Y0FDekIsaUJBQWlCLEdBQVc7WUFDaEMsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUU7O1lBQ2hELG9CQUFvQixFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTs7WUFDNUQsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFOztZQUMxRCxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7U0FDckQ7UUFFRCxLQUFLLE1BQU0sT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNwRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsS0FBSyxhQUFhLEVBQUU7Z0JBQ3hFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7Ozs7SUFFTyxxQkFBcUI7Y0FDckIsRUFBRSxTQUFTLEVBQUUsR0FBMEIsSUFBSTs7Y0FDM0Msc0JBQXNCLEdBQVc7WUFDckMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQjs7WUFDcEQsdUJBQXVCLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLHVCQUF1Qjs7WUFDaEUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLG9CQUFvQjs7WUFDMUQsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQjtTQUN6RDtRQUNELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ3ZELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYzthQUN6Qjs7Ozs0Q0FHYyxNQUFNLFNBQUMsUUFBUTtZQW5CSSxVQUFVOzs7OEJBcUJ6QyxZQUFZLFNBQUMsMkJBQTJCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDcEQsWUFBWSxTQUFDLGlDQUFpQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzFELFlBQVksU0FBQyw4QkFBOEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUN2RCxZQUFZLFNBQUMsNkJBQTZCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFOdkQsbURBQW9DOztJQUN4QiwwQ0FBZ0Q7O0lBQUUsb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbnRlcmZhY2UgSUZzRG9jdW1lbnQgZXh0ZW5kcyBIVE1MRG9jdW1lbnQge1xuICBmdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG1vekZ1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICBtc0Z1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICB3ZWJraXRFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcbiAgbW96Q2FuY2VsRnVsbFNjcmVlbjogKCkgPT4gdm9pZDtcbiAgbXNFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRnVsbFNjcmVlbl0nLFxuICBleHBvcnRBczogJ3RkRnVsbFNjcmVlbicsXG59KVxuZXhwb3J0IGNsYXNzIFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSB7XG4gIGZ1bGxTY3JlZW5Jc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogSUZzRG9jdW1lbnQsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmZ1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW96ZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1zZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBmc0NoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mdWxsU2NyZWVuSXNBY3RpdmUgPSBldmVudC5zcmNFbGVtZW50ID09PSB0aGlzLl9nZXRGdWxsU2NyZWVuRWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKSA9PT0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCA/IHRoaXMuZXhpdEZ1bGxTY3JlZW4oKSA6IHRoaXMuZW50ZXJGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBwdWJsaWMgZW50ZXJGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIF9lbDogeyBuYXRpdmVFbGVtZW50IH0sXG4gICAgfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCBlbnRlckZ1bGxTY3JlZW5NYXA6IG9iamVjdCA9IHtcbiAgICAgIHJlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCksIC8vIENocm9tZVxuICAgICAgd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gU2FmYXJpXG4gICAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpLCAvLyBGaXJlZm94XG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gSUVcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIE9iamVjdC5rZXlzKGVudGVyRnVsbFNjcmVlbk1hcCkpIHtcbiAgICAgIGlmIChuYXRpdmVFbGVtZW50W2hhbmRsZXJdKSB7XG4gICAgICAgIGVudGVyRnVsbFNjcmVlbk1hcFtoYW5kbGVyXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBleGl0RnVsbFNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBfZG9jdW1lbnQsXG4gICAgICBfZWw6IHsgbmF0aXZlRWxlbWVudCB9LFxuICAgIH06IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSA9IHRoaXM7XG4gICAgY29uc3QgZXhpdEZ1bGxTY3JlZW5NYXA6IG9iamVjdCA9IHtcbiAgICAgIGV4aXRGdWxsc2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKSwgLy8gQ2hyb21lXG4gICAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCksIC8vIFNhZmFyaVxuICAgICAgbW96Q2FuY2VsRnVsbFNjcmVlbjogKCkgPT4gX2RvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKSwgLy8gRmlyZWZveFxuICAgICAgbXNFeGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKSwgLy8gSUVcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIE9iamVjdC5rZXlzKGV4aXRGdWxsU2NyZWVuTWFwKSkge1xuICAgICAgaWYgKF9kb2N1bWVudFtoYW5kbGVyXSAmJiB0aGlzLl9nZXRGdWxsU2NyZWVuRWxlbWVudCgpID09PSBuYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIGV4aXRGdWxsU2NyZWVuTWFwW2hhbmRsZXJdKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKTogRWxlbWVudCB7XG4gICAgY29uc3QgeyBfZG9jdW1lbnQgfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCB0ZEZ1bGxTY3JlZW5FbGVtZW50TWFwOiBvYmplY3QgPSB7XG4gICAgICBmdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50LCAvLyBDaHJvbWUsIE9wZXJhXG4gICAgICB3ZWJraXRGdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50LCAvLyBTYWZhcmlcbiAgICAgIG1vekZ1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQubW96RnVsbHNjcmVlbkVsZW1lbnQsIC8vIEZpcmVmb3hcbiAgICAgIG1zRnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50LCAvLyBJRSwgRWRnZVxuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wcyBvZiBPYmplY3Qua2V5cyh0ZEZ1bGxTY3JlZW5FbGVtZW50TWFwKSkge1xuICAgICAgaWYgKF9kb2N1bWVudFtwcm9wc10pIHtcbiAgICAgICAgcmV0dXJuIF9kb2N1bWVudFtwcm9wc107XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=