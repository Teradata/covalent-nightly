var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, Renderer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/* tslint:disable-next-line */
var hljs = require('highlight.js/lib');
var TdHighlightComponent = (function () {
    function TdHighlightComponent(_renderer, _elementRef, _domSanitizer) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        /**
         * lang?: string
         *
         * Language of the code content to be parsed as highlighted html.
         * Defaults to `typescript`
         *
         * e.g. `typescript`, `html` , etc.
         */
        this.language = 'typescript';
    }
    Object.defineProperty(TdHighlightComponent.prototype, "content", {
        /**
         * content?: string
         *
         * Code content to be parsed as highlighted html.
         * Used to load data dynamically.
         *
         * e.g. `.html`, `.ts` , etc.
         */
        set: function (content) {
            this._content = content;
            this._loadContent(this._content);
        },
        enumerable: true,
        configurable: true
    });
    TdHighlightComponent.prototype.ngAfterViewInit = function () {
        if (!this.language) {
            throw new Error('Error: language attribute must be defined in TdHighlightComponent.');
        }
        if (!this._content) {
            this._loadContent(this._elementRef.nativeElement.textContent);
        }
    };
    /**
     * General method to parse a string of code into HTML Elements and load them into the container
     */
    TdHighlightComponent.prototype._loadContent = function (code) {
        if (code && code.trim().length > 0) {
            // Parse html string into actual HTML elements.
            var preElement = this._elementFromString(this._render(code));
            // Clean container
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'innerHTML', '');
            // Project DIV element into container
            this._renderer.projectNodes(this._elementRef.nativeElement, [preElement]);
        }
    };
    TdHighlightComponent.prototype._elementFromString = function (codeStr) {
        // Renderer doesnt have a parsing method, so we have to sanitize and use [innerHTML]
        // to parse the string into DOM element for now.
        var preElement = this._renderer.createElement(this._elementRef.nativeElement, 'pre');
        var codeElement = this._renderer.createElement(preElement, 'code');
        // Set .highlight class into <code> element
        this._renderer.setElementClass(codeElement, 'highlight', true);
        codeElement.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, codeStr);
        return preElement;
    };
    TdHighlightComponent.prototype._render = function (contents) {
        // Trim leading and trailing newlines
        contents = contents.replace(/^(\s|\t)*\n+/g, '')
            .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
        // Split markup by line characters
        var lines = contents.split('\n');
        // check how much indentation is used by the first actual code line
        var firstLineWhitespace = lines[0].match(/^(\s|\t)*/)[0];
        // Remove all indentation spaces so code can be parsed correctly
        var startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
        lines = lines.map(function (line) {
            return line
                .replace('=""', '') // remove empty values
                .replace(startingWhitespaceRegex, '')
                .replace(/\s+$/, ''); // remove trailing white spaces
        });
        var codeToParse = lines.join('\n')
            .replace(/\{ \{/gi, '{{').replace(/\} \}/gi, '}}')
            .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>'); // replace with < and > to render HTML in angular 2
        // Parse code with highlight.js depending on language
        var highlightedCode = hljs.highlight(this.language, codeToParse, true);
        highlightedCode.value = highlightedCode.value
            .replace(/=<span class="hljs-value">""<\/span>/gi, '')
            .replace('<head>', '')
            .replace('<head/>', '');
        return highlightedCode.value;
    };
    return TdHighlightComponent;
}());
__decorate([
    Input('content'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdHighlightComponent.prototype, "content", null);
__decorate([
    Input('lang'),
    __metadata("design:type", String)
], TdHighlightComponent.prototype, "language", void 0);
TdHighlightComponent = __decorate([
    Component({
        selector: 'td-highlight',
        styles: [":host /deep/ { display: block; overflow-x: auto; padding: 16px; } :host /deep/ pre, :host /deep/ code, :host /deep/ .highlight { font-family: Menlo, Monaco, \"Andale Mono\", \"lucida console\", \"Courier New\", monospace; } :host /deep/ pre { display: block; overflow-x: auto; padding: 0; margin: 0; background: transparent; font-family: Menlo, Monaco, \"Andale Mono\", \"lucida console\", \"Courier New\", monospace; line-height: 1.45; tab-size: 2; -webkit-font-smoothing: auto; -webkit-text-size-adjust: none; position: relative; border-radius: 2px; font-size: 0.8rem; } :host /deep/ code { margin: 0; padding: 0; overflow-wrap: break-word; white-space: pre-wrap; } :host /deep/ .highlight { display: block; overflow-wrap: break-word; line-height: 1.5; margin: 0; } "],
        template: "<ng-content></ng-content>",
    }),
    __metadata("design:paramtypes", [Renderer,
        ElementRef,
        DomSanitizer])
], TdHighlightComponent);
export { TdHighlightComponent };
//# sourceMappingURL=highlight.component.js.map