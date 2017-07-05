import { Renderer2, ElementRef } from '@angular/core';
export declare class TdDataTableRowComponent {
    private _elementRef;
    private _renderer;
    private _selected;
    selected: boolean;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    focus(): void;
}
