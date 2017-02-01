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
import { TdCollapseAnimation } from '../../common/common.module';
var TdStepBodyComponent = (function () {
    function TdStepBodyComponent() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of body.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepBodyComponent.prototype.isComplete = function () {
        return this.state === StepState.Complete;
    };
    ;
    return TdStepBodyComponent;
}());
__decorate([
    Input('active'),
    __metadata("design:type", Boolean)
], TdStepBodyComponent.prototype, "active", void 0);
__decorate([
    Input('state'),
    __metadata("design:type", Number)
], TdStepBodyComponent.prototype, "state", void 0);
TdStepBodyComponent = __decorate([
    Component({
        selector: 'td-step-body',
        styles: [".td-step-summary, .td-step-content-wrapper { overflow: hidden; } "],
        template: "<div layout=\"row\" flex> <ng-content></ng-content> <div flex> <div class=\"td-step-content-wrapper\" [@tdCollapse]=\"!active\"> <div #contentRef [class.td-step-content]=\"contentRef.children.length || contentRef.textContent.trim()\"> <ng-content select=\"[td-step-body-content]\"></ng-content> </div> <div #actionsRef layout=\"row\" [class.td-step-actions]=\"actionsRef.children.length || actionsRef.textContent.trim()\"> <ng-content select=\"[td-step-body-actions]\"></ng-content> </div> </div> <div #summaryRef [@tdCollapse]=\"active || !isComplete()\" [class.td-step-summary]=\"summaryRef.children.length || summaryRef.textContent.trim()\"> <ng-content select=\"[td-step-body-summary]\"></ng-content> </div> </div> </div>",
        animations: [
            TdCollapseAnimation(),
        ],
    })
], TdStepBodyComponent);
export { TdStepBodyComponent };
//# sourceMappingURL=step-body.component.js.map