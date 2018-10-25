import { Component, Directive, Input, Output, TemplateRef, ViewChild, ViewContainerRef, ContentChild, EventEmitter, ContentChildren, ElementRef, NgModule } from '@angular/core';
import { TemplatePortalDirective, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinDisableRipple, tdCollapseAnimation, CovalentCommonModule } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
const StepState = {
    None: 'none',
    Required: 'required',
    Complete: 'complete',
};
class TdStepLabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-label]ng-template',
            },] }
];
/** @nocollapse */
TdStepLabelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdStepActionsDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-actions]ng-template',
            },] }
];
/** @nocollapse */
TdStepActionsDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdStepSummaryDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepSummaryDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-summary]ng-template',
            },] }
];
/** @nocollapse */
TdStepSummaryDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdStepBase {
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdStepMixinBase = mixinDisableRipple(mixinDisabled(TdStepBase));
class TdStepComponent extends _TdStepMixinBase {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        super();
        this._viewContainerRef = _viewContainerRef;
        this._active = false;
        this._state = StepState.None;
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
    /**
     * @return {?}
     */
    get stepContent() {
        return this._contentPortal;
    }
    /**
     * active?: boolean
     * Toggles [TdStepComponent] between active/deactive.
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._setActive(coerceBooleanProperty(active));
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of [TdStepComponent] depending on value.
     * Defaults to [StepState.None | 'none'].
     * @param {?} state
     * @return {?}
     */
    set state(state) {
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
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }
    /**
     * Toggle active state of [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    toggle() {
        return this._setActive(!this._active);
    }
    /**
     * Opens [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    open() {
        return this._setActive(true);
    }
    /**
     * Closes [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    close() {
        return this._setActive(false);
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    isComplete() {
        return this._state === StepState.Complete;
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v && this._active) {
            this._active = false;
            this._onDeactivated();
        }
    }
    /**
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     * @param {?} newActive
     * @return {?}
     */
    _setActive(newActive) {
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
    }
    /**
     * @return {?}
     */
    _onActivated() {
        this.onActivated.emit(undefined);
    }
    /**
     * @return {?}
     */
    _onDeactivated() {
        this.onDeactivated.emit(undefined);
    }
}
TdStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-step',
                inputs: ['disabled', 'disableRipple'],
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
            }] }
];
/** @nocollapse */
TdStepComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
TdStepComponent.propDecorators = {
    _content: [{ type: ViewChild, args: [TemplateRef,] }],
    stepLabel: [{ type: ContentChild, args: [TdStepLabelDirective,] }],
    stepActions: [{ type: ContentChild, args: [TdStepActionsDirective,] }],
    stepSummary: [{ type: ContentChild, args: [TdStepSummaryDirective,] }],
    label: [{ type: Input, args: ['label',] }],
    sublabel: [{ type: Input, args: ['sublabel',] }],
    active: [{ type: Input, args: ['active',] }],
    state: [{ type: Input, args: ['state',] }],
    onActivated: [{ type: Output, args: ['activated',] }],
    onDeactivated: [{ type: Output, args: ['deactivated',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
const StepMode = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
};
class TdStepsComponent {
    constructor() {
        this._mode = StepMode.Vertical;
        /**
         * stepChange?: function
         * Method to be executed when [onStepChange] event is emitted.
         * Emits an [IStepChangeEvent] implemented object.
         */
        this.onStepChange = new EventEmitter();
    }
    /**
     * @param {?} steps
     * @return {?}
     */
    set stepsContent(steps) {
        if (steps) {
            this._steps = steps;
            this._registerSteps();
        }
    }
    /**
     * @return {?}
     */
    get steps() {
        return this._steps.toArray();
    }
    /**
     * mode?: StepMode or ["vertical" | "horizontal"]
     * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        switch (mode) {
            case StepMode.Horizontal:
                this._mode = StepMode.Horizontal;
                break;
            default:
                this._mode = StepMode.Vertical;
        }
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * Executed after content is initialized, loops through any [TdStepComponent] children elements,
     * assigns them a number and subscribes as an observer to their [onActivated] event.
     * @return {?}
     */
    ngAfterContentInit() {
        this._registerSteps();
    }
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this._deregisterSteps();
    }
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     * @return {?}
     */
    isHorizontal() {
        return this._mode === StepMode.Horizontal;
    }
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     * @return {?}
     */
    isVertical() {
        return this._mode === StepMode.Vertical;
    }
    /**
     * @return {?}
     */
    areStepsActive() {
        return this._steps.filter((step) => {
            return step.active;
        }).length > 0;
    }
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     * @param {?} step
     * @return {?}
     */
    _onStepSelection(step) {
        if (this.prevStep !== step) {
            /** @type {?} */
            let prevStep = this.prevStep;
            this.prevStep = step;
            /** @type {?} */
            let event = {
                newStep: step,
                prevStep: prevStep,
            };
            this._deactivateAllBut(step);
            this.onStepChange.emit(event);
        }
    }
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     * @param {?} activeStep
     * @return {?}
     */
    _deactivateAllBut(activeStep) {
        this._steps.filter((step) => step !== activeStep)
            .forEach((step) => {
            step.active = false;
        });
    }
    /**
     * @return {?}
     */
    _registerSteps() {
        this._subcriptions = [];
        this._steps.toArray().forEach((step) => {
            /** @type {?} */
            let subscription = step.onActivated.asObservable().subscribe(() => {
                this._onStepSelection(step);
            });
            this._subcriptions.push(subscription);
        });
    }
    /**
     * @return {?}
     */
    _deregisterSteps() {
        if (this._subcriptions) {
            this._subcriptions.forEach((subs) => {
                subs.unsubscribe();
            });
            this._subcriptions = undefined;
        }
    }
}
TdStepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-steps',
                template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\">\n  <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\">\n    <td-step-header class=\"td-step-horizontal-header\"\n                    (keydown.enter)=\"step.open()\"\n                    [number]=\"index + 1\"\n                    [active]=\"step.active\"\n                    [disableRipple]=\"step.disableRipple\"\n                    [disabled]=\"step.disabled\" \n                    [state]=\"step.state\"\n                    (click)=\"step.open()\">\n      <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n      <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n      <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</ng-template>\n    </td-step-header>\n    <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span>\n  </ng-template>\n</div>\n<div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\">\n  <td-step-header class=\"td-step-vertical-header\"\n                  (keydown.enter)=\"step.toggle()\"\n                  [number]=\"index + 1\"\n                  [active]=\"step.active\" \n                  [disabled]=\"step.disabled\"\n                  [disableRipple]=\"step.disableRipple\"\n                  [state]=\"step.state\"\n                  (click)=\"step.toggle()\"\n                  *ngIf=\"isVertical()\">\n    <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n    <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n    <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</ng-template>\n  </td-step-header>\n  <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\">\n    <td-step-body [active]=\"step.active\" [state]=\"step.state\">\n      <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\">\n        <div *ngIf=\"!last\" class=\"td-vertical-line\"></div>\n      </div>\n      <ng-template td-step-body-content [cdkPortalOutlet]=\"step.stepContent\"></ng-template>\n      <ng-template td-step-body-actions [cdkPortalOutlet]=\"step.stepActions\"></ng-template>\n      <ng-template td-step-body-summary [cdkPortalOutlet]=\"step.stepSummary\"></ng-template>\n    </td-step-body>\n  </ng-template>\n</div>\n",
                styles: [".td-line-wrapper,.td-step{position:relative}.td-steps-header{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.td-line-wrapper{width:24px;min-height:1px}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;position:relative;top:36px;min-width:15px;-ms-flex:1;flex:1;box-sizing:border-box}::ng-deep :not([dir=rtl]) .td-horizontal-line{left:-6px;right:-3px}::ng-deep [dir=rtl] .td-horizontal-line{left:-3px;right:-6px}.td-vertical-line{position:absolute;bottom:-16px;top:-16px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line{left:auto;right:20px}"]
            }] }
];
TdStepsComponent.propDecorators = {
    stepsContent: [{ type: ContentChildren, args: [TdStepComponent,] }],
    mode: [{ type: Input, args: ['mode',] }],
    onStepChange: [{ type: Output, args: ['stepChange',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdStepHeaderBase {
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdStepHeaderBase));
class TdStepHeaderComponent extends _TdStepHeaderMixinBase {
    constructor() {
        super(...arguments);
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    isComplete() {
        return this.state === StepState.Complete;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     * @return {?}
     */
    isRequired() {
        return this.state === StepState.Required;
    }
}
TdStepHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-step-header',
                inputs: ['disabled', 'disableRipple'],
                template: "<div class=\"td-step-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled ? -1 : 0\">\n  <div class=\"td-circle\"\n      [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n      [class.mat-active]=\"active && !disabled\"\n      *ngIf=\"!isRequired() && !isComplete()\">\n    <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\"\n      [class.bg-muted]=\"disabled\"\n      *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div class=\"td-step-label-wrapper\"\n        [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n        [class.mat-warn]=\"isRequired() && !disabled\">\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-step-sublabel\">\n      <ng-content select=\"[td-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon>\n</div>",
                styles: [".td-step-header{position:relative;outline:0;height:72px;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-step-header-separator{-ms-flex:1;flex:1;box-sizing:border-box}"]
            }] }
];
TdStepHeaderComponent.propDecorators = {
    number: [{ type: Input, args: ['number',] }],
    active: [{ type: Input, args: ['active',] }],
    state: [{ type: Input, args: ['state',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdStepBodyComponent {
    constructor() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of body.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * @return {?}
     */
    get hasContent() {
        return this.contentRef &&
            (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
    }
    /**
     * @return {?}
     */
    get hasActions() {
        return this.actionsRef &&
            (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
    }
    /**
     * @return {?}
     */
    get hasSummary() {
        return this.summaryRef &&
            (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim());
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    isComplete() {
        return this.state === StepState.Complete;
    }
}
TdStepBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-step-body',
                template: "<ng-content></ng-content>\n<div class=\"td-step-body\">\n  <div class=\"td-step-content-wrapper\"\n       [@tdCollapse]=\"!active\">\n    <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\">\n      <ng-content select=\"[td-step-body-content]\"></ng-content>\n    </div>\n    <div #actionsRef\n         [class.td-step-actions]=\"hasActions\">\n      <ng-content select=\"[td-step-body-actions]\"></ng-content>\n    </div>\n  </div>\n  <div #summaryRef\n       [@tdCollapse]=\"active || !isComplete()\"\n       [class.td-step-summary]=\"hasSummary\">\n    <ng-content select=\"[td-step-body-summary]\"></ng-content>\n  </div>\n</div>",
                animations: [
                    tdCollapseAnimation,
                ],
                styles: [":host{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .td-step-body{overflow-x:hidden;-ms-flex:1;flex:1;box-sizing:border-box}:host .td-step-body .td-step-content-wrapper.ng-animating,:host .td-step-body .td-step-summary.ng-animating{overflow:hidden}:host .td-step-body .td-step-content{overflow-x:auto}:host .td-step-body .td-step-actions{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}"]
            }] }
];
TdStepBodyComponent.propDecorators = {
    contentRef: [{ type: ViewChild, args: ['contentRef', { read: ElementRef },] }],
    actionsRef: [{ type: ViewChild, args: ['actionsRef', { read: ElementRef },] }],
    summaryRef: [{ type: ViewChild, args: ['summaryRef', { read: ElementRef },] }],
    active: [{ type: Input, args: ['active',] }],
    state: [{ type: Input, args: ['state',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
];
class CovalentStepsModule {
}
CovalentStepsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatRippleModule,
                    PortalModule,
                    ScrollDispatchModule,
                    CovalentCommonModule,
                ],
                declarations: [
                    TD_STEPS,
                ],
                exports: [
                    TD_STEPS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentStepsModule, StepState, TdStepLabelDirective, TdStepActionsDirective, TdStepSummaryDirective, TdStepBase, _TdStepMixinBase, TdStepComponent, StepMode, TdStepsComponent, TdStepBodyComponent, TdStepHeaderBase, _TdStepHeaderMixinBase, TdStepHeaderComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1zdGVwcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvc3RlcC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL3N0ZXBzL3N0ZXBzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy9zdGVwLWJvZHkvc3RlcC1ib2R5LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvc3RlcHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxuICAgICAgICAgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNhbkRpc2FibGVSaXBwbGUsIG1peGluRGlzYWJsZVJpcHBsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIFN0ZXBTdGF0ZSB7XG4gIE5vbmUgPSAnbm9uZScsXG4gIFJlcXVpcmVkID0gJ3JlcXVpcmVkJyxcbiAgQ29tcGxldGUgPSAnY29tcGxldGUnLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtc3RlcC1sYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtc3RlcC1hY3Rpb25zXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwQWN0aW9uc0RpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLXN0ZXAtc3VtbWFyeV1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcFN1bW1hcnlEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZFN0ZXBCYXNlIHt9XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZFN0ZXBNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChUZFN0ZXBCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXN0ZXAnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcENvbXBvbmVudCBleHRlbmRzIF9UZFN0ZXBNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkluaXQsIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG5cbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICBwcml2YXRlIF9jb250ZW50UG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuICBnZXQgc3RlcENvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWw8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRQb3J0YWw7XG4gIH1cblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBMYWJlbERpcmVjdGl2ZSkgc3RlcExhYmVsOiBUZFN0ZXBMYWJlbERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlKSBzdGVwQWN0aW9uczogVGRTdGVwQWN0aW9uc0RpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlKSBzdGVwU3VtbWFyeTogVGRTdGVwU3VtbWFyeURpcmVjdGl2ZTtcblxuICAvKipcbiAgICogbGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBsYWJlbCBvZiBbVGRTdGVwQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvICdTdGVwICMnXG4gICAqL1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBzdWJsYWJlbCBvZiBbVGRTdGVwQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBUb2dnbGVzIFtUZFN0ZXBDb21wb25lbnRdIGJldHdlZW4gYWN0aXZlL2RlYWN0aXZlLlxuICAgKi9cbiAgQElucHV0KCdhY3RpdmUnKVxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NldEFjdGl2ZShjb2VyY2VCb29sZWFuUHJvcGVydHkoYWN0aXZlKSk7XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0YXRlPzogU3RlcFN0YXRlIG9yIFsnbm9uZScgfCAncmVxdWlyZWQnIHwgJ2NvbXBsZXRlJ11cbiAgICogU2V0cyBzdGF0ZSBvZiBbVGRTdGVwQ29tcG9uZW50XSBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJylcbiAgc2V0IHN0YXRlKHN0YXRlOiBTdGVwU3RhdGUpIHtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIFN0ZXBTdGF0ZS5Db21wbGV0ZTpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdGVwU3RhdGUuUmVxdWlyZWQ6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLlJlcXVpcmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBnZXQgc3RhdGUoKTogU3RlcFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogYWN0aXZhdGVkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZFN0ZXBDb21wb25lbnRdIGlzIGFjdGl2YXRlZC5cbiAgICovXG4gIEBPdXRwdXQoJ2FjdGl2YXRlZCcpIG9uQWN0aXZhdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGRlYWN0aXZhdGVkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZFN0ZXBDb21wb25lbnRdIGlzIGRlYWN0aXZhdGVkLlxuICAgKi9cbiAgQE91dHB1dCgnZGVhY3RpdmF0ZWQnKSBvbkRlYWN0aXZhdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuX2NvbnRlbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhY3RpdmUgc3RhdGUgb2YgW1RkU3RlcENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICB0b2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEFjdGl2ZSghdGhpcy5fYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBbVGRTdGVwQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIG9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEFjdGl2ZSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgW1RkU3RlcENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBjbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0QWN0aXZlKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09PSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHYgJiYgdGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uRGVhY3RpdmF0ZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNoYW5nZSBhY3RpdmUgc3RhdGUgaW50ZXJuYWxseSBhbmQgZW1pdCB0aGUgW29uQWN0aXZhdGVkXSBldmVudCBpZiAndHJ1ZScgb3IgW29uRGVhY3RpdmF0ZWRdXG4gICAqIGV2ZW50IGlmICdmYWxzZScuIChCbG9ja2VkIGlmIFtkaXNhYmxlZF0gaXMgJ3RydWUnKVxuICAgKiByZXR1cm5zIHRydWUgaWYgc3VjY2Vzc2Z1bGx5IGNoYW5nZWQgc3RhdGVcbiAgICovXG4gIHByaXZhdGUgX3NldEFjdGl2ZShuZXdBY3RpdmU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWN0aXZlICE9PSBuZXdBY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IG5ld0FjdGl2ZTtcbiAgICAgIGlmIChuZXdBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fb25BY3RpdmF0ZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29uRGVhY3RpdmF0ZWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9vbkFjdGl2YXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQWN0aXZhdGVkLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uRGVhY3RpdmF0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkRlYWN0aXZhdGVkLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJU3RlcENoYW5nZUV2ZW50IHtcbiAgbmV3U3RlcDogVGRTdGVwQ29tcG9uZW50O1xuICBwcmV2U3RlcDogVGRTdGVwQ29tcG9uZW50O1xufVxuXG5leHBvcnQgZW51bSBTdGVwTW9kZSB7XG4gIFZlcnRpY2FsID0gJ3ZlcnRpY2FsJyxcbiAgSG9yaXpvbnRhbCA9ICdob3Jpem9udGFsJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtc3RlcHMnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwcy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgcHJpdmF0ZSBfc3ViY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXTtcbiAgcHJpdmF0ZSBfbW9kZTogU3RlcE1vZGUgPSBTdGVwTW9kZS5WZXJ0aWNhbDtcbiAgcHJpdmF0ZSBfc3RlcHM6IFF1ZXJ5TGlzdDxUZFN0ZXBDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRTdGVwQ29tcG9uZW50KVxuICBzZXQgc3RlcHNDb250ZW50KHN0ZXBzOiBRdWVyeUxpc3Q8VGRTdGVwQ29tcG9uZW50Pikge1xuICAgIGlmIChzdGVwcykge1xuICAgICAgdGhpcy5fc3RlcHMgPSBzdGVwcztcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3RlcHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RlcHMoKTogVGRTdGVwQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gIH1cbiAgcHJldlN0ZXA6IFRkU3RlcENvbXBvbmVudDtcblxuICAvKipcbiAgICogbW9kZT86IFN0ZXBNb2RlIG9yIFtcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIl1cbiAgICogRGVmaW5lcyBpZiB0aGUgbW9kZSBvZiB0aGUgW1RkU3RlcHNDb21wb25lbnRdLiAgRGVmYXVsdHMgdG8gW1N0ZXBNb2RlLlZlcnRpY2FsIHwgXCJ2ZXJ0aWNhbFwiXVxuICAgKi9cbiAgQElucHV0KCdtb2RlJylcbiAgc2V0IG1vZGUobW9kZTogU3RlcE1vZGUpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgU3RlcE1vZGUuSG9yaXpvbnRhbDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IFN0ZXBNb2RlLkhvcml6b250YWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICAgIH1cbiAgfVxuICBnZXQgbW9kZSgpOiBTdGVwTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvKipcbiAgICogc3RlcENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIFtvblN0ZXBDaGFuZ2VdIGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAqIEVtaXRzIGFuIFtJU3RlcENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzdGVwQ2hhbmdlJykgb25TdGVwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVN0ZXBDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElTdGVwQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVkIGFmdGVyIGNvbnRlbnQgaXMgaW5pdGlhbGl6ZWQsIGxvb3BzIHRocm91Z2ggYW55IFtUZFN0ZXBDb21wb25lbnRdIGNoaWxkcmVuIGVsZW1lbnRzLFxuICAgKiBhc3NpZ25zIHRoZW0gYSBudW1iZXIgYW5kIHN1YnNjcmliZXMgYXMgYW4gb2JzZXJ2ZXIgdG8gdGhlaXIgW29uQWN0aXZhdGVkXSBldmVudC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlclN0ZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmVzIGZyb20gW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMgd2hlbiBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVyZWdpc3RlclN0ZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW21vZGVdIGVxdWFscyB0byBbU3RlcE1vZGUuSG9yaXpvbnRhbCB8ICdob3Jpem9udGFsJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzSG9yaXpvbnRhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSA9PT0gU3RlcE1vZGUuSG9yaXpvbnRhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbbW9kZV0gZXF1YWxzIHRvIFtTdGVwTW9kZS5WZXJ0aWNhbCB8ICd2ZXJ0aWNhbCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc1ZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSBTdGVwTW9kZS5WZXJ0aWNhbDtcbiAgfVxuXG4gIGFyZVN0ZXBzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGVwcy5maWx0ZXIoKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgcmV0dXJuIHN0ZXAuYWN0aXZlO1xuICAgIH0pLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHMgcHJldmlvdXMgYW5kIG5ldyBbVGRTdGVwQ29tcG9uZW50XSBudW1iZXJzIGluIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgW0lTdGVwQ2hhbmdlRXZlbnRdXG4gICAqIGFuZCBlbWl0cyBbb25TdGVwQ2hhbmdlXSBldmVudC5cbiAgICovXG4gIHByaXZhdGUgX29uU3RlcFNlbGVjdGlvbihzdGVwOiBUZFN0ZXBDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2U3RlcCAhPT0gc3RlcCkge1xuICAgICAgbGV0IHByZXZTdGVwOiBUZFN0ZXBDb21wb25lbnQgPSB0aGlzLnByZXZTdGVwO1xuICAgICAgdGhpcy5wcmV2U3RlcCA9IHN0ZXA7XG4gICAgICBsZXQgZXZlbnQ6IElTdGVwQ2hhbmdlRXZlbnQgPSB7XG4gICAgICAgIG5ld1N0ZXA6IHN0ZXAsXG4gICAgICAgIHByZXZTdGVwOiBwcmV2U3RlcCxcbiAgICAgIH07XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlQWxsQnV0KHN0ZXApO1xuICAgICAgdGhpcy5vblN0ZXBDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvb3BzIHRocm91Z2ggW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMgYW5kIGRlYWN0aXZhdGVzIHRoZW0gaWdub3JpbmcgdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9kZWFjdGl2YXRlQWxsQnV0KGFjdGl2ZVN0ZXA6IFRkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3N0ZXBzLmZpbHRlcigoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiBzdGVwICE9PSBhY3RpdmVTdGVwKVxuICAgIC5mb3JFYWNoKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgIHN0ZXAuYWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWdpc3RlclN0ZXBzKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YmNyaXB0aW9ucyA9IFtdO1xuICAgIHRoaXMuX3N0ZXBzLnRvQXJyYXkoKS5mb3JFYWNoKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgIGxldCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IHN0ZXAub25BY3RpdmF0ZWQuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fb25TdGVwU2VsZWN0aW9uKHN0ZXApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVyZWdpc3RlclN0ZXBzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJjcmlwdGlvbnMpIHtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucy5mb3JFYWNoKChzdWJzOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJjcmlwdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZVJpcHBsZSwgbWl4aW5EaXNhYmxlUmlwcGxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3RlcFN0YXRlIH0gZnJvbSAnLi4vc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgVGRTdGVwSGVhZGVyQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTdGVwSGVhZGVyTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluRGlzYWJsZWQoVGRTdGVwSGVhZGVyQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zdGVwLWhlYWRlcicsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBfVGRTdGVwSGVhZGVyTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICAvKipcbiAgICogTnVtYmVyIGFzc2lnbmVkIHRvIFtUZFN0ZXBIZWFkZXJDb21wb25lbnRdLlxuICAgKi9cbiAgQElucHV0KCdudW1iZXInKSBudW1iZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGZvciBhY3RpdmUvaW5hY3RpdmUgc3RhdGVzIG9uIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJykgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3R5bGVzIGZvciBzdGF0ZSBvZiBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLlJlcXVpcmVkIHwgJ3JlcXVpcmVkJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5SZXF1aXJlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0ZXBTdGF0ZSB9IGZyb20gJy4uL3N0ZXAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXN0ZXAtYm9keScsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtYm9keS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtYm9keS5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBCb2R5Q29tcG9uZW50IHtcblxuICBAVmlld0NoaWxkKCdjb250ZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNvbnRlbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGhhc0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudFJlZiAmJlxuICAgICAgICAgICh0aGlzLmNvbnRlbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwIHx8ICEhdGhpcy5jb250ZW50UmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2FjdGlvbnNSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYWN0aW9uc1JlZjogRWxlbWVudFJlZjtcblxuICBnZXQgaGFzQWN0aW9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zUmVmICYmXG4gICAgICAgICAgKHRoaXMuYWN0aW9uc1JlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgISF0aGlzLmFjdGlvbnNSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnc3VtbWFyeVJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzdW1tYXJ5UmVmOiBFbGVtZW50UmVmO1xuXG4gIGdldCBoYXNTdW1tYXJ5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN1bW1hcnlSZWYgJiZcbiAgICAgICAgICAodGhpcy5zdW1tYXJ5UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAhIXRoaXMuc3VtbWFyeVJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSk7XG4gIH1cblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGZvciBhY3RpdmUvaW5hY3RpdmUgc3RhdGVzIG9uIGJvZHkuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGUgb3IgWydub25lJyB8ICdyZXF1aXJlZCcgfCAnY29tcGxldGUnXVxuICAgKiBTZXRzIHN0eWxlcyBmb3Igc3RhdGUgb2YgYm9keS5cbiAgICogRGVmYXVsdHMgdG8gW1N0ZXBTdGF0ZS5Ob25lIHwgJ25vbmUnXS5cbiAgICovXG4gIEBJbnB1dCgnc3RhdGUnKSBzdGF0ZTogU3RlcFN0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgJ3RydWUnIGlmIFtzdGF0ZV0gZXF1YWxzIHRvIFtTdGVwU3RhdGUuQ29tcGxldGUgfCAnY29tcGxldGUnXSwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gU3RlcFN0YXRlLkNvbXBsZXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTY3JvbGxEaXNwYXRjaE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgQ292YWxlbnRDb21tb25Nb2R1bGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG4vLyBTdGVwc1xuaW1wb3J0IHsgVGRTdGVwc0NvbXBvbmVudCB9IGZyb20gJy4vc3RlcHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcEJvZHlDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtYm9keS9zdGVwLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcENvbXBvbmVudCwgVGRTdGVwTGFiZWxEaXJlY3RpdmUsIFRkU3RlcEFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgICBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlIH0gZnJvbSAnLi9zdGVwLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX1NURVBTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRTdGVwc0NvbXBvbmVudCxcbiAgVGRTdGVwQ29tcG9uZW50LFxuICBUZFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gIFRkU3RlcEJvZHlDb21wb25lbnQsXG4gIFRkU3RlcExhYmVsRGlyZWN0aXZlLFxuICBUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlLFxuICBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsXG4gICAgQ292YWxlbnRDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX1NURVBTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfU1RFUFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50U3RlcHNNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztJQVNFLE1BQU8sTUFBTTtJQUNiLFVBQVcsVUFBVTtJQUNyQixVQUFXLFVBQVU7O01BTVYsb0JBQXFCLFNBQVEsdUJBQXVCOzs7OztJQUMvRCxZQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO1FBQzNFLEtBQUssQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztLQUN0Qzs7O1lBTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7YUFDdkM7Ozs7WUFoQjZDLFdBQVc7WUFDaEQsZ0JBQWdCOztBQXlCekIsTUFBYSxzQkFBdUIsU0FBUSx1QkFBdUI7Ozs7O0lBQ2pFLFlBQVksV0FBNkIsRUFBRSxnQkFBa0M7UUFDM0UsS0FBSyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3RDOzs7WUFORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjthQUN6Qzs7OztZQXpCNkMsV0FBVztZQUNoRCxnQkFBZ0I7O0FBa0N6QixNQUFhLHNCQUF1QixTQUFRLHVCQUF1Qjs7Ozs7SUFDakUsWUFBWSxXQUE2QixFQUFFLGdCQUFrQztRQUMzRSxLQUFLLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDdEM7OztZQU5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2FBQ3pDOzs7O1lBbEM2QyxXQUFXO1lBQ2hE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