import { Renderer2, ElementRef } from '@angular/core';
import { MdSidenavToggleResult } from '@angular/material';
export interface ILayoutTogglable {
    opened: boolean;
    toggle(): Promise<MdSidenavToggleResult>;
}
export declare abstract class LayoutToggle {
    private _layout;
    private _renderer;
    private _elementRef;
    /**
     * hideWhenOpened?: boolean
     * When this is set to false, the host will not be hidden when
     * the layout is set to [opened]="true".
     */
    hideWhenOpened: boolean;
    /**
     * Hides element if layout is opened and [hideWhenOpened] is set to true
     */
    readonly hiddenBinding: string;
    constructor(_layout: ILayoutTogglable, _renderer: Renderer2, _elementRef: ElementRef);
    /**
     * Listens to host click event to trigger the layout toggle
     */
    clickListener(event: Event): void;
}
