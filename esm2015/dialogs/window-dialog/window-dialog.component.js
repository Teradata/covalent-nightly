/**
 * @fileoverview added by tsickle
 * Generated from: window-dialog/window-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export class TdWindowDialogComponent {
    constructor() {
        this.docked = false;
        this.dockToggled = new EventEmitter();
        this.closed = new EventEmitter();
        this.toolbarHeight = 56;
    }
    /**
     * @return {?}
     */
    toggleDockedState() {
        this.dockToggled.emit(this.docked);
    }
}
TdWindowDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-window-dialog',
                template: "<mat-toolbar\n  [color]=\"toolbarColor\"\n  class=\"td-window-dialog-toolbar\"\n  [style.min-height.px]=\"toolbarHeight\"\n  [style.cursor]=\"docked ? 'inherit' : 'move'\"\n>\n  <mat-toolbar-row [style.height.px]=\"toolbarHeight\">\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title td-window-dialog-title truncate\" flex>\n        {{ title }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed docking/undocking for now-->\n      <!-- <button mat-icon-button [matTooltip]=\"toggleDockedStateLabel\" (click)=\"toggleDockedState()\">\n        <mat-icon [attr.aria-label]=\"toggleDockedStateLabel\">\n          {{ docked ? 'unfold_more' : 'unfold_less' }}\n        </mat-icon>\n      </button> -->\n\n      <button\n        mat-icon-button\n        [matTooltip]=\"closeLabel\"\n        (click)=\"closed.emit()\"\n        class=\"td-window-dialog-close\"\n        [attr.data-test]=\"'close-button'\"\n      >\n        <mat-icon [attr.aria-label]=\"closeLabel\">close</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column;height:100%}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-window-dialog-title{margin-bottom:0}.td-window-dialog-close{margin-right:-8px}::ng-deep .td-window-dialog .mat-dialog-container{padding:0}"]
            }] }
];
TdWindowDialogComponent.propDecorators = {
    toolbarColor: [{ type: Input }],
    docked: [{ type: Input }],
    title: [{ type: Input }],
    toggleDockedStateLabel: [{ type: Input }],
    closeLabel: [{ type: Input }],
    dockToggled: [{ type: Output }],
    closed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TdWindowDialogComponent.prototype.toolbarColor;
    /** @type {?} */
    TdWindowDialogComponent.prototype.docked;
    /** @type {?} */
    TdWindowDialogComponent.prototype.title;
    /** @type {?} */
    TdWindowDialogComponent.prototype.toggleDockedStateLabel;
    /** @type {?} */
    TdWindowDialogComponent.prototype.closeLabel;
    /** @type {?} */
    TdWindowDialogComponent.prototype.dockToggled;
    /** @type {?} */
    TdWindowDialogComponent.prototype.closed;
    /** @type {?} */
    TdWindowDialogComponent.prototype.toolbarHeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvZGlhbG9ncy8iLCJzb3VyY2VzIjpbIndpbmRvdy1kaWFsb2cvd2luZG93LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2hHLE1BQU0sT0FBTyx1QkFBdUI7SUFOcEM7UUFRVyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBTXZCLGdCQUFXLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEQsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFELGtCQUFhLEdBQVcsRUFBRSxDQUFDO0lBSzdCLENBQUM7Ozs7SUFIQyxpQkFBaUI7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw2b0NBQTZDO2dCQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OzsyQkFFRSxLQUFLO3FCQUNMLEtBQUs7b0JBRUwsS0FBSztxQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBRUwsTUFBTTtxQkFDTixNQUFNOzs7O0lBUlAsK0NBQW9DOztJQUNwQyx5Q0FBaUM7O0lBRWpDLHdDQUF1Qjs7SUFDdkIseURBQXdDOztJQUN4Qyw2Q0FBNEI7O0lBRTVCLDhDQUFrRTs7SUFDbEUseUNBQTBEOztJQUUxRCxnREFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC13aW5kb3ctZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpbmRvdy1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aW5kb3ctZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZFdpbmRvd0RpYWxvZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRvb2xiYXJDb2xvcjogVGhlbWVQYWxldHRlO1xuICBASW5wdXQoKSBkb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSB0b2dnbGVEb2NrZWRTdGF0ZUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsb3NlTGFiZWw6IHN0cmluZztcblxuICBAT3V0cHV0KCkgZG9ja1RvZ2dsZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHRvb2xiYXJIZWlnaHQ6IG51bWJlciA9IDU2O1xuXG4gIHRvZ2dsZURvY2tlZFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZG9ja1RvZ2dsZWQuZW1pdCh0aGlzLmRvY2tlZCk7XG4gIH1cbn1cbiJdfQ==