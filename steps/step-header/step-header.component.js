import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { mixinDisabled, mixinDisableRipple } from '../../common/common.module';
import { StepState } from '../step.component';
var TdStepHeaderBase = (function () {
    function TdStepHeaderBase() {
    }
    return TdStepHeaderBase;
}());
export { TdStepHeaderBase };
/* tslint:disable-next-line */
export var _TdStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdStepHeaderBase));
var TdStepHeaderComponent = (function (_super) {
    tslib_1.__extends(TdStepHeaderComponent, _super);
    function TdStepHeaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        _this.state = StepState.None;
        return _this;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepHeaderComponent.prototype.isComplete = function () {
        return this.state === StepState.Complete;
    };
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    TdStepHeaderComponent.prototype.isRequired = function () {
        return this.state === StepState.Required;
    };
    return TdStepHeaderComponent;
}(_TdStepHeaderMixinBase));
tslib_1.__decorate([
    Input('number'),
    tslib_1.__metadata("design:type", Number)
], TdStepHeaderComponent.prototype, "number", void 0);
tslib_1.__decorate([
    Input('active'),
    tslib_1.__metadata("design:type", Boolean)
], TdStepHeaderComponent.prototype, "active", void 0);
tslib_1.__decorate([
    Input('state'),
    tslib_1.__metadata("design:type", Number)
], TdStepHeaderComponent.prototype, "state", void 0);
TdStepHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'td-step-header',
        inputs: ['disabled', 'disableRipple'],
        styles: [".td-step-header { position: relative; outline: none; height: 72px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; } .td-step-header:hover:not(.mat-disabled) { cursor: pointer; } .td-step-header mat-icon.td-edit-icon { margin: 0 8px; } .td-step-header mat-icon.mat-warn { font-size: 24px; height: 24px; width: 24px; } .td-step-header mat-icon.mat-complete { position: relative; left: -2px; top: 2px; font-size: 28px; height: 24px; width: 24px; } .td-step-header .td-circle { height: 24px; width: 24px; line-height: 24px; border-radius: 99%; text-align: center; -webkit-box-flex: 0; -ms-flex: none; flex: none; } .td-step-header .td-circle mat-icon { margin-top: 2px; font-weight: bold; } .td-step-header .td-triangle > mat-icon { font-size: 25px; } .td-step-header .td-complete { font-size: 0; } /deep/ :not([dir='rtl']) .td-step-header .td-circle, /deep/ :not([dir='rtl']) .td-step-header .td-triangle, /deep/ :not([dir='rtl']) .td-step-header .td-complete { margin-left: 8px; margin-right: 0px; } /deep/ [dir='rtl'] .td-step-header .td-circle, /deep/ [dir='rtl'] .td-step-header .td-triangle, /deep/ [dir='rtl'] .td-step-header .td-complete { margin-left: 0px; margin-right: 8px; } .td-step-header .td-circle, .td-step-header .td-complete { font-size: 14px; } .td-step-header .td-step-label-wrapper { padding-left: 8px; padding-right: 8px; } .td-step-header .td-step-header-separator { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-sizing: border-box; box-sizing: border-box; } /*# sourceMappingURL=step-header.component.css.map */ "],
        template: "<div class=\"td-step-header\" [class.mat-disabled]=\"disabled\" matRipple [matRippleDisabled]=\"disabled || disableRipple\" [tabIndex]=\"disabled ? -1 : 0\"> <div class=\"td-circle\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-active]=\"active && !disabled\" *ngIf=\"!isRequired() && !isComplete()\"> <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span> </div> <div class=\"td-complete\" *ngIf=\"isComplete()\"> <mat-icon class=\"mat-complete\">check_circle</mat-icon> </div> <div class=\"td-triangle\" [class.bg-muted]=\"disabled\" *ngIf=\"isRequired()\"> <mat-icon class=\"mat-warn\">warning</mat-icon> </div> <div class=\"td-step-label-wrapper\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-warn]=\"isRequired() && !disabled\"> <div class=\"td-step-label\"> <ng-content select=\"[td-step-header-label]\"></ng-content> </div> <div class=\"td-step-sublabel\"> <ng-content select=\"[td-step-header-sublabel]\"></ng-content> </div> </div> <span class=\"td-step-header-separator\"></span> <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon> </div>",
    })
], TdStepHeaderComponent);
export { TdStepHeaderComponent };
//# sourceMappingURL=step-header.component.js.map