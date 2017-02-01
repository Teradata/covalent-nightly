var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, Input, Output, TemplateRef, ViewChild, ViewContainerRef, ContentChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective, TemplatePortal } from '@angular/material';
export var StepState;
(function (StepState) {
    StepState[StepState["None"] = 'none'] = "None";
    StepState[StepState["Required"] = 'required'] = "Required";
    StepState[StepState["Complete"] = 'complete'] = "Complete";
})(StepState || (StepState = {}));
var TdStepLabelDirective = (function (_super) {
    __extends(TdStepLabelDirective, _super);
    function TdStepLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepLabelDirective;
}(TemplatePortalDirective));
TdStepLabelDirective = __decorate([
    Directive({
        selector: '[td-step-label]template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdStepLabelDirective);
export { TdStepLabelDirective };
var TdStepActionsDirective = (function (_super) {
    __extends(TdStepActionsDirective, _super);
    function TdStepActionsDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepActionsDirective;
}(TemplatePortalDirective));
TdStepActionsDirective = __decorate([
    Directive({
        selector: '[td-step-actions]template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdStepActionsDirective);
export { TdStepActionsDirective };
var TdStepSummaryDirective = (function (_super) {
    __extends(TdStepSummaryDirective, _super);
    function TdStepSummaryDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepSummaryDirective;
}(TemplatePortalDirective));
TdStepSummaryDirective = __decorate([
    Directive({
        selector: '[td-step-summary]template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdStepSummaryDirective);
export { TdStepSummaryDirective };
var TdStepComponent = (function () {
    function TdStepComponent(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._active = false;
        this._state = StepState.None;
        this._disabled = false;
        /**
         * activated?: function
         * Event emitted when [TdStepComponent] is activated.
         */
        this.onActivated = new EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        this.onDeactivated = new EventEmitter();
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
            this._setActive(active);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(TdStepComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if 'true'.
         */
        set: function (disabled) {
            if (disabled && this._active) {
                this._active = false;
                this._onDeactivated();
            }
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
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
    ;
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
    ;
    /**
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     */
    TdStepComponent.prototype._setActive = function (newActive) {
        if (this._disabled) {
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
    ;
    TdStepComponent.prototype._onActivated = function () {
        this.onActivated.emit(undefined);
    };
    ;
    TdStepComponent.prototype._onDeactivated = function () {
        this.onDeactivated.emit(undefined);
    };
    ;
    return TdStepComponent;
}());
__decorate([
    ViewChild(TemplateRef),
    __metadata("design:type", TemplateRef)
], TdStepComponent.prototype, "_content", void 0);
__decorate([
    ContentChild(TdStepLabelDirective),
    __metadata("design:type", TdStepLabelDirective)
], TdStepComponent.prototype, "stepLabel", void 0);
__decorate([
    ContentChild(TdStepActionsDirective),
    __metadata("design:type", TdStepActionsDirective)
], TdStepComponent.prototype, "stepActions", void 0);
__decorate([
    ContentChild(TdStepSummaryDirective),
    __metadata("design:type", TdStepSummaryDirective)
], TdStepComponent.prototype, "stepSummary", void 0);
__decorate([
    Input('label'),
    __metadata("design:type", String)
], TdStepComponent.prototype, "label", void 0);
__decorate([
    Input('sublabel'),
    __metadata("design:type", String)
], TdStepComponent.prototype, "sublabel", void 0);
__decorate([
    Input('active'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdStepComponent.prototype, "active", null);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdStepComponent.prototype, "disabled", null);
__decorate([
    Input('state'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TdStepComponent.prototype, "state", null);
__decorate([
    Output('activated'),
    __metadata("design:type", EventEmitter)
], TdStepComponent.prototype, "onActivated", void 0);
__decorate([
    Output('deactivated'),
    __metadata("design:type", EventEmitter)
], TdStepComponent.prototype, "onDeactivated", void 0);
TdStepComponent = __decorate([
    Component({
        selector: 'td-step',
        template: "<template> <ng-content></ng-content> </template>",
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], TdStepComponent);
export { TdStepComponent };
//# sourceMappingURL=step.component.js.map