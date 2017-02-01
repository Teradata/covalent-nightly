import { AnimationTransitionEvent, ChangeDetectorRef } from '@angular/core';
import { TemplatePortal } from '@angular/material';
import { Observable } from 'rxjs/Observable';
export declare enum LoadingType {
    Circular,
    Linear,
}
export declare enum LoadingMode {
    Determinate,
    Indeterminate,
}
export declare enum LoadingStrategy {
    Overlay,
    Replace,
}
export declare enum LoadingStyle {
    FullScreen,
    Overlay,
    None,
}
export declare class TdLoadingComponent {
    private _changeDetectorRef;
    private _animationIn;
    private _animationOut;
    private _mode;
    private _defaultMode;
    private _value;
    /**
     * Flag for animation
     */
    animation: boolean;
    /**
     * Content injected into loading component.
     */
    content: TemplatePortal;
    /**
     * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
     */
    mode: LoadingMode;
    /**
     * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
     */
    value: number;
    style: LoadingStyle;
    /**
     * height: number
     * Sets height of [TdLoadingComponent].
     */
    height: number;
    /**
     * type: LoadingType
     * Sets type of [TdLoadingComponent] rendered.
     */
    type: LoadingType;
    /**
     * color: primary' | 'accent' | 'warn'
     * Sets theme color of [TdLoadingComponent] rendered.
     */
    color: 'primary' | 'accent' | 'warn';
    constructor(_changeDetectorRef: ChangeDetectorRef);
    getHeight(): string;
    getCircleDiameter(): string;
    isCircular(): boolean;
    isLinear(): boolean;
    isFullScreen(): boolean;
    isOverlay(): boolean;
    animationComplete(event: AnimationTransitionEvent): void;
    inAnimationCompleted(): void;
    outAnimationCompleted(): void;
    /**
     * Starts in animation and returns an observable for completition event.
     */
    startInAnimation(): Observable<any>;
    /**
     * Starts out animation and returns an observable for completition event.
     */
    startOutAnimation(): Observable<any>;
}
