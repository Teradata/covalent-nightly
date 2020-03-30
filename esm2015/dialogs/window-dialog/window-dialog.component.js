/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<mat-toolbar\n  [color]=\"toolbarColor\"\n  class=\"td-window-dialog-toolbar\"\n  [style.min-height.px]=\"toolbarHeight\"\n  [style.cursor]=\"docked ? 'inherit' : 'move'\"\n>\n  <mat-toolbar-row [style.height.px]=\"toolbarHeight\">\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title td-window-dialog-title truncate\" flex>\n        {{ title }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed docking/undocking for now-->\n      <!-- <button mat-icon-button [matTooltip]=\"toggleDockedStateLabel\" (click)=\"toggleDockedState()\">\n        <mat-icon [attr.aria-label]=\"toggleDockedStateLabel\">\n          {{ docked ? 'unfold_more' : 'unfold_less' }}\n        </mat-icon>\n      </button> -->\n\n      <button\n        mat-icon-button\n        [matTooltip]=\"closeLabel\"\n        (click)=\"closed.emit()\"\n        class=\"td-window-dialog-close\"\n        [attr.data-test]=\"'close-button'\"\n      >\n        <mat-icon [attr.aria-label]=\"closeLabel\">\n          close\n        </mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.truncate{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.td-window-dialog-title{margin-bottom:0}.td-window-dialog-close{margin-right:-8px}::ng-deep .td-window-dialog .mat-dialog-container{padding:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsid2luZG93LWRpYWxvZy93aW5kb3ctZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNoRyxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBUVcsV0FBTSxHQUFZLEtBQUssQ0FBQztRQU12QixnQkFBVyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRCxrQkFBYSxHQUFXLEVBQUUsQ0FBQztJQUs3QixDQUFDOzs7O0lBSEMsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbXFDQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7MkJBRUUsS0FBSztxQkFDTCxLQUFLO29CQUVMLEtBQUs7cUNBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLE1BQU07cUJBQ04sTUFBTTs7OztJQVJQLCtDQUFvQzs7SUFDcEMseUNBQWlDOztJQUVqQyx3Q0FBdUI7O0lBQ3ZCLHlEQUF3Qzs7SUFDeEMsNkNBQTRCOztJQUU1Qiw4Q0FBa0U7O0lBQ2xFLHlDQUEwRDs7SUFFMUQsZ0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtd2luZG93LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi93aW5kb3ctZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2luZG93LWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRXaW5kb3dEaWFsb2dDb21wb25lbnQge1xuICBASW5wdXQoKSB0b29sYmFyQ29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgQElucHV0KCkgZG9ja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdG9nZ2xlRG9ja2VkU3RhdGVMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBjbG9zZUxhYmVsOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGRvY2tUb2dnbGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0b29sYmFySGVpZ2h0OiBudW1iZXIgPSA1NjtcblxuICB0b2dnbGVEb2NrZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRvY2tUb2dnbGVkLmVtaXQodGhpcy5kb2NrZWQpO1xuICB9XG59XG4iXX0=