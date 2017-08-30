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
            styles: [".td-step-header { position: relative; outline: none; } .td-step-header:hover:not(.mat-disabled) { cursor: pointer; } .td-step-header .td-step-header-content { height: 72px; } .td-step-header md-icon.td-edit-icon { margin: 0 8px; } .td-step-header md-icon.mat-warn { font-size: 24px; height: 24px; width: 24px; } .td-step-header md-icon.mat-complete { position: relative; left: -2px; top: 2px; font-size: 28px; height: 24px; width: 24px; } .td-step-header .td-circle { height: 24px; width: 24px; line-height: 24px; border-radius: 99%; text-align: center; -webkit-box-flex: 0; -ms-flex: none; flex: none; } .td-step-header .td-circle md-icon { margin-top: 2px; font-weight: bold; } .td-step-header .td-triangle > md-icon { font-size: 25px; } .td-step-header .td-complete { font-size: 0; } /deep/ :not([dir='rtl']) .td-step-header .td-circle, /deep/ :not([dir='rtl']) .td-step-header .td-triangle, /deep/ :not([dir='rtl']) .td-step-header .td-complete { margin-left: 8px; margin-right: 0px; } /deep/ [dir='rtl'] .td-step-header .td-circle, /deep/ [dir='rtl'] .td-step-header .td-triangle, /deep/ [dir='rtl'] .td-step-header .td-complete { margin-left: 0px; margin-right: 8px; } .td-step-header .td-circle, .td-step-header .td-complete { font-size: 14px; } .td-step-header .td-step-label-wrapper { padding-left: 8px; padding-right: 8px; } .td-step-header .td-step-sublabel { line-height: 14px; font-weight: normal; } /*# sourceMappingURL=step-header.component.css.map */ "],
            template: "<div class=\"td-step-header\" [class.mat-disabled]=\"disabled\" md-ripple [mdRippleDisabled]=\"disabled || disableRipple\" [tabIndex]=\"disabled ? -1 : 0\" flex> <div class=\"td-step-header-content\" layout=\"row\"  layout-align=\"start center\" flex> <div class=\"td-circle\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-active]=\"active && !disabled\" *ngIf=\"!isRequired() && !isComplete()\"> <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span> </div> <div class=\"td-complete\" *ngIf=\"isComplete()\"> <md-icon class=\"mat-complete\">check_circle</md-icon> </div> <div class=\"td-triangle\" [class.bg-muted]=\"disabled\" *ngIf=\"isRequired()\"> <md-icon class=\"mat-warn\">warning</md-icon> </div> <div class=\"td-step-label-wrapper\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-warn]=\"isRequired() && !disabled\"> <div class=\"md-body-2 td-step-label\"> <ng-content select=\"[td-step-header-label]\"></ng-content> </div> <div class=\"md-caption td-step-sublabel\"> <ng-content select=\"[td-step-header-sublabel]\"></ng-content> </div> </div> <span flex></span> <md-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</md-icon> </div> </div>",
        })
    ], TdStepHeaderComponent);
    return TdStepHeaderComponent;
}(_TdStepHeaderMixinBase));
export { TdStepHeaderComponent };
//# sourceMappingURL=step-header.component.js.map