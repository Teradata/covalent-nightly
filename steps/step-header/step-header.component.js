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
import { StepState } from '../step.component';
var TdStepHeaderComponent = (function () {
    function TdStepHeaderComponent() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepHeaderComponent.prototype.isComplete = function () {
        return this.state === StepState.Complete;
    };
    ;
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    TdStepHeaderComponent.prototype.isRequired = function () {
        return this.state === StepState.Required;
    };
    ;
    return TdStepHeaderComponent;
}());
__decorate([
    Input('number'),
    __metadata("design:type", Number)
], TdStepHeaderComponent.prototype, "number", void 0);
__decorate([
    Input('active'),
    __metadata("design:type", Boolean)
], TdStepHeaderComponent.prototype, "active", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], TdStepHeaderComponent.prototype, "disabled", void 0);
__decorate([
    Input('state'),
    __metadata("design:type", Number)
], TdStepHeaderComponent.prototype, "state", void 0);
TdStepHeaderComponent = __decorate([
    Component({
        selector: 'td-step-header',
        styles: [":host /deep/ md-nav-list { padding-top: 0px; } :host /deep/ md-nav-list [md-list-item]:active, :host /deep/ md-nav-list [md-list-item]:focus { outline: none; } :host /deep/ md-nav-list [md-list-item].mat-interaction-disabled .mat-list-item-content { background: none !important; cursor: auto; } :host /deep/ md-nav-list .mat-list-item-content { flex: 1; height: 72px !important; padding: 0px !important; } .mat-ripple-boundary { position: relative; height: 72px; } .td-step-header md-icon.td-edit-icon { margin-right: 8px; } md-icon.mat-warn { font-size: 24px; height: 24px; width: 24px; } md-icon.mat-complete { position: relative; left: -2px; top: 2px; font-size: 28px; height: 24px; width: 24px; } .td-circle { height: 24px; width: 24px; line-height: 24px; border-radius: 99%; text-align: center; flex: none; } .td-circle md-icon { margin-top: 2px; font-weight: bold; } .td-triangle > md-icon { font-size: 27px; } .td-complete { font-size: 0; } .td-circle, .td-complete { margin-left: 8px; font-size: 14px; } .td-triangle { margin-left: 7px; } .td-step-label-wrapper { padding-left: 8px; padding-right: 8px; } .td-step-sublabel { line-height: 14px; font-weight: normal; } "],
        template: "<div class=\"td-step-header\" layout=\"row\" layout-align=\"start center\" flex> <md-nav-list flex> <a md-list-item [class.mat-interaction-disabled]=\"disabled\" [tabIndex]=\"disabled ? -1 : 0\" flex> <div class=\"mat-ripple-boundary\" md-ripple [mdRippleSpeedFactor]=\"10\" [mdRippleDisabled]=\"disabled\" layout=\"row\"  layout-align=\"start center\" flex> <div class=\"td-circle\" [class.mat-inactive]=\"(!active && !isComplete()) || disabled\" [class.mat-active]=\"active && !disabled\" *ngIf=\"!isRequired() && !isComplete()\"> <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span> </div> <div class=\"td-complete\" *ngIf=\"isComplete()\"> <md-icon class=\"mat-complete\">check_circle</md-icon> </div> <div class=\"td-triangle\" [class.bg-muted]=\"disabled\" *ngIf=\"isRequired()\"> <md-icon class=\"mat-warn\">warning</md-icon> </div> <div class=\"td-step-label-wrapper\" [class.mat-disabled]=\"(!active && !isComplete()) || disabled\" [class.mat-warn]=\"isRequired() && !disabled\"> <div class=\"md-body-2 td-step-label\"> <ng-content select=\"[td-step-header-label]\"></ng-content> </div> <div class=\"md-caption td-step-sublabel\"> <ng-content select=\"[td-step-header-sublabel]\"></ng-content> </div> </div> <span flex></span> <md-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</md-icon> </div> </a> </md-nav-list> </div>",
    })
], TdStepHeaderComponent);
export { TdStepHeaderComponent };
//# sourceMappingURL=step-header.component.js.map