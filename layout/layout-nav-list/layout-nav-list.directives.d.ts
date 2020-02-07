import { Renderer2, ElementRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { LayoutToggle } from '../layout-toggle.class';
export declare class TdLayoutNavListToggleDirective extends LayoutToggle {
    set tdLayoutNavListToggle(tdLayoutNavListToggle: boolean);
    constructor(layout: TdLayoutNavListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutNavListCloseDirective extends LayoutToggle {
    set tdLayoutNavListClose(tdLayoutNavListClose: boolean);
    constructor(layout: TdLayoutNavListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutNavListOpenDirective extends LayoutToggle {
    set tdLayoutNavListOpen(tdLayoutNavListOpen: boolean);
    constructor(layout: TdLayoutNavListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
