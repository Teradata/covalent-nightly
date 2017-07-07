import { TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective, TemplatePortal } from '@angular/cdk';
import { ICanDisable } from '../common/common.module';
export declare enum StepState {
    None,
    Required,
    Complete,
}
export declare class TdStepLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdStepActionsDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdStepSummaryDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdStepBase {
}
export declare const _TdStepMixinBase: (new (...args: any[]) => ICanDisable) & typeof TdStepBase;
export declare class TdStepComponent extends _TdStepMixinBase implements OnInit, ICanDisable {
    private _viewContainerRef;
    private _disableRipple;
    private _active;
    private _state;
    private _contentPortal;
    readonly stepContent: TemplatePortal;
    _content: TemplateRef<any>;
    stepLabel: TdStepLabelDirective;
    stepActions: TdStepActionsDirective;
    stepSummary: TdStepSummaryDirective;
    /**
     * label?: string
     * Sets label of [TdStepComponent] header.
     * Defaults to 'Step #'
     */
    label: string;
    /**
     * sublabel?: string
     * Sets sublabel of [TdStepComponent] header.
     */
    sublabel: string;
    /**
     * disableRipple?: string
     * Whether the ripple effect for this component is disabled.
     */
    disableRipple: boolean;
    /**
     * active?: boolean
     * Toggles [TdStepComponent] between active/deactive.
     */
    active: boolean;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of [TdStepComponent] depending on value.
     * Defaults to [StepState.None | 'none'].
     */
    state: StepState;
    /**
     * activated?: function
     * Event emitted when [TdStepComponent] is activated.
     */
    onActivated: EventEmitter<void>;
    /**
     * deactivated?: function
     * Event emitted when [TdStepComponent] is deactivated.
     */
    onDeactivated: EventEmitter<void>;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    /**
     * Toggle active state of [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    toggle(): boolean;
    /**
     * Opens [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    open(): boolean;
    /**
     * Closes [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    close(): boolean;
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    isComplete(): boolean;
    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void;
    /**
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     */
    private _setActive(newActive);
    private _onActivated();
    private _onDeactivated();
}
