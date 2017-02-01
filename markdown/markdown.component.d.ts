import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class TdMarkdownComponent implements AfterViewInit {
    private _renderer;
    private _elementRef;
    private _domSanitizer;
    private _content;
    /**
     * content?: string
     *
     * Markdown format content to be parsed as html markup.
     * Used to load data dynamically.
     *
     * e.g. README.md content.
     */
    content: string;
    constructor(_renderer: Renderer, _elementRef: ElementRef, _domSanitizer: DomSanitizer);
    ngAfterViewInit(): void;
    /**
     * General method to parse a string markdown into HTML Elements and load them into the container
     */
    private _loadContent(markdown);
    private _elementFromString(markupStr);
    private _render(markdown);
}
