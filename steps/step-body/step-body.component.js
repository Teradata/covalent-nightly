import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
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
    Object.defineProperty(TdStepBodyComponent.prototype, "hasContent", {
        get: function () {
            return this.contentRef &&
                (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepBodyComponent.prototype, "hasActions", {
        get: function () {
            return this.actionsRef &&
                (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepBodyComponent.prototype, "hasSummary", {
        get: function () {
            return this.summaryRef &&
                (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepBodyComponent.prototype.isComplete = function () {
        return this.state === StepState.Complete;
    };
    tslib_1.__decorate([
        ViewChild('contentRef', { read: ElementRef }),
        tslib_1.__metadata("design:type", ElementRef)
    ], TdStepBodyComponent.prototype, "contentRef", void 0);
    tslib_1.__decorate([
        ViewChild('actionsRef', { read: ElementRef }),
        tslib_1.__metadata("design:type", ElementRef)
    ], TdStepBodyComponent.prototype, "actionsRef", void 0);
    tslib_1.__decorate([
        ViewChild('summaryRef', { read: ElementRef }),
        tslib_1.__metadata("design:type", ElementRef)
    ], TdStepBodyComponent.prototype, "summaryRef", void 0);
    tslib_1.__decorate([
        Input('active'),
        tslib_1.__metadata("design:type", Boolean)
    ], TdStepBodyComponent.prototype, "active", void 0);
    tslib_1.__decorate([
        Input('state'),
        tslib_1.__metadata("design:type", Number)
    ], TdStepBodyComponent.prototype, "state", void 0);
    TdStepBodyComponent = tslib_1.__decorate([
        Component({
            selector: 'td-step-body',
            styles: [":host { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; } :host .td-step-body { overflow-x: hidden; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-sizing: border-box; box-sizing: border-box; } :host .td-step-body .td-step-summary.ng-animating, :host .td-step-body .td-step-content-wrapper.ng-animating { overflow: hidden; } :host .td-step-body .td-step-content { overflow-x: auto; } :host .td-step-body .td-step-actions { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; } /*# sourceMappingURL=step-body.component.css.map */ "],
            template: "<ng-content></ng-content> <div class=\"td-step-body\"> <div class=\"td-step-content-wrapper\" [@tdCollapse]=\"!active\"> <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\"> <ng-content select=\"[td-step-body-content]\"></ng-content> </div> <div #actionsRef [class.td-step-actions]=\"hasActions\"> <ng-content select=\"[td-step-body-actions]\"></ng-content> </div> </div> <div #summaryRef [@tdCollapse]=\"active || !isComplete()\" [class.td-step-summary]=\"hasSummary\"> <ng-content select=\"[td-step-body-summary]\"></ng-content> </div> </div>",
            animations: [
                TdCollapseAnimation(),
            ],
        })
    ], TdStepBodyComponent);
    return TdStepBodyComponent;
}());
export { TdStepBodyComponent };
//# sourceMappingURL=step-body.component.js.map