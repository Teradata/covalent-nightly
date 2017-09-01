import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, TemplateRef, ViewChild, ViewContainerRef, ContentChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective, TemplatePortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinDisableRipple } from '../common/common.module';
export var StepState;
(function (StepState) {
    StepState[StepState["None"] = 'none'] = "None";
    StepState[StepState["Required"] = 'required'] = "Required";
    StepState[StepState["Complete"] = 'complete'] = "Complete";
})(StepState || (StepState = {}));
var TdStepLabelDirective = (function (_super) {
    tslib_1.__extends(TdStepLabelDirective, _super);
    function TdStepLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdStepLabelDirective = tslib_1.__decorate([
        Directive({
            selector: '[td-step-label]ng-template',
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], TdStepLabelDirective);
    return TdStepLabelDirective;
}(TemplatePortalDirective));
export { TdStepLabelDirective };
var TdStepActionsDirective = (function (_super) {
    tslib_1.__extends(TdStepActionsDirective, _super);
    function TdStepActionsDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdStepActionsDirective = tslib_1.__decorate([
        Directive({
            selector: '[td-step-actions]ng-template',
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], TdStepActionsDirective);
    return TdStepActionsDirective;
}(TemplatePortalDirective));
export { TdStepActionsDirective };
var TdStepSummaryDirective = (function (_super) {
    tslib_1.__extends(TdStepSummaryDirective, _super);
    function TdStepSummaryDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdStepSummaryDirective = tslib_1.__decorate([
        Directive({
            selector: '[td-step-summary]ng-template',
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], TdStepSummaryDirective);
    return TdStepSummaryDirective;
}(TemplatePortalDirective));
export { TdStepSummaryDirective };
var TdStepBase = (function () {
    function TdStepBase() {
    }
    return TdStepBase;
}());
export { TdStepBase };
/* tslint:disable-next-line */
export var _TdStepMixinBase = mixinDisableRipple(mixinDisabled(TdStepBase));
var TdStepComponent = (function (_super) {
    tslib_1.__extends(TdStepComponent, _super);
    function TdStepComponent(_viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._viewContainerRef = _viewContainerRef;
        _this._active = false;
        _this._state = StepState.None;
        /**
         * activated?: function
         * Event emitted when [TdStepComponent] is activated.
         */
        _this.onActivated = new EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        _this.onDeactivated = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdStepComponent.prototype, "stepContent", {
        get: function () {
            return this._contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        /**
         * active?: boolean
         * Toggles [TdStepComponent] between active/deactive.
         */
        set: function (active) {
            this._setActive(coerceBooleanProperty(active));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets state of [TdStepComponent] depending on value.
         * Defaults to [StepState.None | 'none'].
         */
        set: function (state) {
            switch (state) {
                case StepState.Complete:
                    this._state = StepState.Complete;
                    break;
                case StepState.Required:
                    this._state = StepState.Required;
                    break;
                default:
                    this._state = StepState.None;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    TdStepComponent.prototype.ngOnInit = function () {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    };
    /**
     * Toggle active state of [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdStepComponent.prototype.toggle = function () {
        return this._setActive(!this._active);
    };
    /**
     * Opens [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdStepComponent.prototype.open = function () {
        return this._setActive(true);
    };
    /**
     * Closes [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdStepComponent.prototype.close = function () {
        return this._setActive(false);
    };
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepComponent.prototype.isComplete = function () {
        return this._state === StepState.Complete;
    };
    /** Method executed when the disabled value changes */
    TdStepComponent.prototype.onDisabledChange = function (v) {
        if (v && this._active) {
            this._active = false;
            this._onDeactivated();
        }
    };
    /**
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     */
    TdStepComponent.prototype._setActive = function (newActive) {
        if (this.disabled) {
            return false;
        }
        if (this._active !== newActive) {
            this._active = newActive;
            if (newActive) {
                this._onActivated();
            }
            else {
                this._onDeactivated();
            }
            return true;
        }
        return false;
    };
    TdStepComponent.prototype._onActivated = function () {
        this.onActivated.emit(undefined);
    };
    TdStepComponent.prototype._onDeactivated = function () {
        this.onDeactivated.emit(undefined);
    };
    tslib_1.__decorate([
        ViewChild(TemplateRef),
        tslib_1.__metadata("design:type", TemplateRef)
    ], TdStepComponent.prototype, "_content", void 0);
    tslib_1.__decorate([
        ContentChild(TdStepLabelDirective),
        tslib_1.__metadata("design:type", TdStepLabelDirective)
    ], TdStepComponent.prototype, "stepLabel", void 0);
    tslib_1.__decorate([
        ContentChild(TdStepActionsDirective),
        tslib_1.__metadata("design:type", TdStepActionsDirective)
    ], TdStepComponent.prototype, "stepActions", void 0);
    tslib_1.__decorate([
        ContentChild(TdStepSummaryDirective),
        tslib_1.__metadata("design:type", TdStepSummaryDirective)
    ], TdStepComponent.prototype, "stepSummary", void 0);
    tslib_1.__decorate([
        Input('label'),
        tslib_1.__metadata("design:type", String)
    ], TdStepComponent.prototype, "label", void 0);
    tslib_1.__decorate([
        Input('sublabel'),
        tslib_1.__metadata("design:type", String)
    ], TdStepComponent.prototype, "sublabel", void 0);
    tslib_1.__decorate([
        Input('active'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdStepComponent.prototype, "active", null);
    tslib_1.__decorate([
        Input('state'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdStepComponent.prototype, "state", null);
    tslib_1.__decorate([
        Output('activated'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdStepComponent.prototype, "onActivated", void 0);
    tslib_1.__decorate([
        Output('deactivated'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdStepComponent.prototype, "onDeactivated", void 0);
    TdStepComponent = tslib_1.__decorate([
        Component({
            selector: 'td-step',
            inputs: ['disabled', 'disableRipple'],
            template: "<ng-template> <ng-content></ng-content> </ng-template>",
        }),
        tslib_1.__metadata("design:paramtypes", [ViewContainerRef])
    ], TdStepComponent);
    return TdStepComponent;
}(_TdStepMixinBase));
export { TdStepComponent };
//# sourceMappingURL=step.component.js.map