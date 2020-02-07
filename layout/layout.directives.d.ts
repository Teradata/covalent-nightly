import { Renderer2, ElementRef } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { LayoutToggle } from './layout-toggle.class';
export declare class TdLayoutToggleDirective extends LayoutToggle {
    set tdLayoutToggle(tdLayoutToggle: boolean);
    constructor(layout: TdLayoutComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutCloseDirective extends LayoutToggle {
    set tdLayoutClose(tdLayoutClose: boolean);
    constructor(layout: TdLayoutComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutOpenDirective extends LayoutToggle {
    set tdLayoutClose(tdLayoutOpen: boolean);
    constructor(layout: TdLayoutComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
