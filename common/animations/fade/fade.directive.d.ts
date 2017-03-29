import { ElementRef, EventEmitter, Renderer2, ChangeDetectorRef } from '@angular/core';
import { AnimationDriver, ɵAnimationStyleNormalizer as AnimationStyleNormalizer } from '@angular/animations/browser';
export declare class TdFadeDirective {
    private _renderer;
    private _element;
    private _changeDetectorRef;
    private _state;
    private _defaultOpacity;
    private _defaultDisplay;
    private _engine;
    private _animationPlayer;
    /**
     * duration?: number
     * Sets duration of fade animation in miliseconds.
     * Defaults to 150 ms.
     */
    duration: number;
    /**
     * tdFade: boolean
     * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
     */
    state: boolean;
    /**
     * fadeIn?: function
     * Method to be executed when fadeIn animation ends.
     */
    fadeIn: EventEmitter<void>;
    /**
     * fadeOut?: function
     * Method to be executed when fadeOut animation ends.
     */
    fadeOut: EventEmitter<void>;
    /**
     * Binds native 'aria-expanded' attribute.
     */
    readonly ariaExpandedBinding: boolean;
    /**
     * Binds native 'aria-hidden' attribute.
     */
    readonly ariaHiddenBinding: boolean;
    constructor(_renderer: Renderer2, _element: ElementRef, _changeDetectorRef: ChangeDetectorRef, animationDriver: AnimationDriver, animationStyleNormalizer: AnimationStyleNormalizer);
    /**
     * Hides element: starts animation and adds "display:'none'" style at the end.
     */
    hide(): void;
    /**
     * Shows element: sets "display:[default]" so animation is shown.
     */
    show(): void;
}
