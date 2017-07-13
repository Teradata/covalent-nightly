var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    __extends(TdStepHeaderComponent, _super);
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
__decorate([
    Input('number'),
    __metadata("design:type", Number)
], TdStepHeaderComponent.prototype, "number", void 0);
__decorate([
    Input('active'),
    __metadata("design:type", Boolean)
], TdStepHeaderComponent.prototype, "active", void 0);
__decorate([
    Input('state'),
    __metadata("design:type", Number)
], TdStepHeaderComponent.prototype, "state", void 0);
TdStepHeaderComponent = __decorate([
    Component({
        selector: 'td-step-header',
        inputs: ['disabled', 'disableRipple'],
        styles: [".td-step-header { position: relative; outline: none; } .td-step-header:hover:not(.mat-disabled) { cursor: pointer; } .td-step-header .td-step-header-content { height: 72px; } .td-step-header md-icon.td-edit-icon { margin: 0 8px; } .td-step-header md-icon.mat-warn { font-size: 24px; height: 24px; width: 24px; } .td-step-header md-icon.mat-complete { position: relative; left: -2px; top: 2px; font-size: 28px; height: 24px; width: 24px; } .td-step-header .td-circle { height: 24px; width: 24px; line-height: 24px; border-radius: 99%; text-align: center; flex: none; } .td-step-header .td-circle md-icon { margin-top: 2px; font-weight: bold; } .td-step-header .td-triangle > md-icon { font-size: 25px; } .td-step-header .td-complete { font-size: 0; } /deep/ :not([dir='rtl']) .td-step-header .td-circle, /deep/ :not([dir='rtl']) .td-step-header .td-triangle, /deep/ :not([dir='rtl']) .td-step-header .td-complete { margin-left: 8px; margin-right: 0px; } /deep/ [dir='rtl'] .td-step-header .td-circle, /deep/ [dir='rtl'] .td-step-header .td-triangle, /deep/ [dir='rtl'] .td-step-header .td-complete { margin-left: 0px; margin-right: 8px; } .td-step-header .td-circle, .td-step-header .td-complete { font-size: 14px; } .td-step-header .td-step-label-wrapper { padding-left: 8px; padding-right: 8px; } .td-step-header .td-step-sublabel { line-height: 14px; font-weight: normal; } "],
        template: "<div class=\"td-step-header\" [class.mat-disabled]=\"disabled\" md-ripple [mdRippleDisabled]=\"disabled || disableRipple\" [tabIndex]=\"disabled ? -1 : 0\" flex> <div class=\"td-step-header-content\" layout=\"row\"  layout-align=\"start center\" flex> <div class=\"td-circle\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-active]=\"active && !disabled\" *ngIf=\"!isRequired() && !isComplete()\"> <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span> </div> <div class=\"td-complete\" *ngIf=\"isComplete()\"> <md-icon class=\"mat-complete\">check_circle</md-icon> </div> <div class=\"td-triangle\" [class.bg-muted]=\"disabled\" *ngIf=\"isRequired()\"> <md-icon class=\"mat-warn\">warning</md-icon> </div> <div class=\"td-step-label-wrapper\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-warn]=\"isRequired() && !disabled\"> <div class=\"md-body-2 td-step-label\"> <ng-content select=\"[td-step-header-label]\"></ng-content> </div> <div class=\"md-caption td-step-sublabel\"> <ng-content select=\"[td-step-header-sublabel]\"></ng-content> </div> </div> <span flex></span> <md-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</md-icon> </div> </div>",
    })
], TdStepHeaderComponent);
export { TdStepHeaderComponent };
//# sourceMappingURL=step-header.component.js.map