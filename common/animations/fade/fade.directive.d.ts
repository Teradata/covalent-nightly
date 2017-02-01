import { ElementRef, EventEmitter } from '@angular/core';
import { Renderer } from '@angular/core';
export declare class TdFadeDirective {
    private _renderer;
    private _element;
    private _state;
    private _hiddenState;
    private _defaultOpacity;
    private _defaultDisplay;
    private _timeoutNumber;
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
    /**
     * Binds 'hidden' attribute.
     */
    readonly hiddenBinding: boolean;
    constructor(_renderer: Renderer, _element: ElementRef);
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     */
    hide(): void;
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:[default]" style again at the end.
     */
    show(): void;
}
