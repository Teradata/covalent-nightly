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
var TdMarkdownComponent = (function () {
    function TdMarkdownComponent(_renderer, _elementRef, _domSanitizer) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
    }
    Object.defineProperty(TdMarkdownComponent.prototype, "content", {
        /**
         * content?: string
         *
         * Markdown format content to be parsed as html markup.
         * Used to load data dynamically.
         *
         * e.g. README.md content.
         */
        set: function (content) {
            this._content = content;
            this._loadContent(this._content);
        },
        enumerable: true,
        configurable: true
    });
    TdMarkdownComponent.prototype.ngAfterViewInit = function () {
        if (!this._content) {
            this._loadContent(this._elementRef.nativeElement.textContent);
        }
    };
    /**
     * General method to parse a string markdown into HTML Elements and load them into the container
     */
    TdMarkdownComponent.prototype._loadContent = function (markdown) {
        if (markdown && markdown.trim().length > 0) {
            // Parse html string into actual HTML elements.
            var divElement = this._elementFromString(this._render(markdown));
            // Clean container
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'innerHTML', '');
            // Project DIV element into container
            this._renderer.projectNodes(this._elementRef.nativeElement, [divElement]);
        }
    };
    TdMarkdownComponent.prototype._elementFromString = function (markupStr) {
        // Renderer doesnt have a parsing method, so we have to sanitize and use [innerHTML]
        // to parse the string into DOM element for now.
        var div = this._renderer.createElement(this._elementRef.nativeElement, 'div');
        div.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, markupStr);
        return div;
    };
    TdMarkdownComponent.prototype._render = function (markdown) {
        // Trim leading and trailing newlines
        markdown = markdown.replace(/^(\s|\t)*\n+/g, '')
            .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
        // Split markdown by line characters
        var lines = markdown.split('\n');
        // check how much indentation is used by the first actual markdown line
        var firstLineWhitespace = lines[0].match(/^(\s|\t)*/)[0];
        // Remove all indentation spaces so markdown can be parsed correctly
        var startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
        lines = lines.map(function (line) {
            return line.replace(startingWhitespaceRegex, '');
        });
        // Join lines again with line characters
        var markdownToParse = lines.join('\n');
        // Convert markdown into html
        var converter = new showdown.Converter();
        converter.setOption('ghCodeBlocks', true);
        converter.setOption('tasklists', true);
        converter.setOption('tables', true);
        var html = converter.makeHtml(markdownToParse);
        return html;
    };
    return TdMarkdownComponent;
}());
__decorate([
    Input('content'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdMarkdownComponent.prototype, "content", null);
TdMarkdownComponent = __decorate([
    Component({
        selector: 'td-markdown',
        styles: ["@font-face { :host /deep/ { font-family: octicons-link; src: url(data:font/woff;charset=utf-8;base64,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) format(\"woff\"); } } :host /deep/ a { background-color: transparent; -webkit-text-decoration-skip: objects; } :host /deep/ a:active, :host /deep/ a:hover { outline-width: 0; } :host /deep/ strong { font-weight: inherit; font-weight: bolder; } :host /deep/ h1 { font-size: 2em; margin: 0.67em 0; } :host /deep/ img { border-style: none; } :host /deep/ svg:not(:root) { overflow: hidden; } :host /deep/ code, :host /deep/ kbd, :host /deep/ pre { font-family: monospace, monospace; font-size: 1em; } :host /deep/ hr { box-sizing: content-box; height: 0; overflow: visible; } :host /deep/ input { font: inherit; margin: 0; } :host /deep/ input { overflow: visible; } :host /deep/ button:-moz-focusring, :host /deep/ [type=\"button\"]:-moz-focusring, :host /deep/ [type=\"reset\"]:-moz-focusring, :host /deep/ [type=\"submit\"]:-moz-focusring { outline: 1px dotted ButtonText; } :host /deep/ [type=\"checkbox\"] { box-sizing: border-box; padding: 0; } :host /deep/ table { border-spacing: 0; border-collapse: collapse; } :host /deep/ td, :host /deep/ th { padding: 0; } :host /deep/ * { box-sizing: border-box; } :host /deep/ input { font: 13px/1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; } :host /deep/ a { text-decoration: none; } :host /deep/ a:hover, :host /deep/ a:active { text-decoration: underline; } :host /deep/ hr { height: 0; margin: 15px 0; overflow: hidden; background: transparent; border-bottom-width: 1px; border-bottom-style: solid; } :host /deep/ hr::before { display: table; content: \"\"; } :host /deep/ hr::after { display: table; clear: both; content: \"\"; } :host /deep/ h1, :host /deep/ h2, :host /deep/ h3, :host /deep/ h4, :host /deep/ h5, :host /deep/ h6 { margin-top: 0; margin-bottom: 0; line-height: 1.5; } :host /deep/ h1 { font-size: 30px; } :host /deep/ h2 { font-size: 21px; } :host /deep/ h3 { font-size: 16px; } :host /deep/ h4 { font-size: 14px; } :host /deep/ h5 { font-size: 12px; } :host /deep/ h6 { font-size: 11px; } :host /deep/ p { margin-top: 0; margin-bottom: 10px; } :host /deep/ blockquote { margin: 0; } :host /deep/ ul, :host /deep/ ol { padding-left: 0; margin-top: 0; margin-bottom: 0; } :host /deep/ ol ol, :host /deep/ ul ol { list-style-type: lower-roman; } :host /deep/ ul ul ol, :host /deep/ ul ol ol, :host /deep/ ol ul ol, :host /deep/ ol ol ol { list-style-type: lower-alpha; } :host /deep/ dd { margin-left: 0; } :host /deep/ code { font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace; font-size: 12px; } :host /deep/ pre { margin-top: 0; margin-bottom: 0; font: 12px Consolas, \"Liberation Mono\", Menlo, Courier, monospace; } :host /deep/ .pl-0 { padding-left: 0 !important; } :host /deep/ .pl-1 { padding-left: 3px !important; } :host /deep/ .pl-2 { padding-left: 6px !important; } :host /deep/ .pl-3 { padding-left: 12px !important; } :host /deep/ .pl-4 { padding-left: 24px !important; } :host /deep/ .pl-5 { padding-left: 36px !important; } :host /deep/ .pl-6 { padding-left: 48px !important; } :host /deep/ .form-select::-ms-expand { opacity: 0; } :host /deep/ a:not([href]) { color: inherit; text-decoration: none; } :host /deep/ h1, :host /deep/ h2, :host /deep/ h3, :host /deep/ h4, :host /deep/ h5, :host /deep/ h6 { margin-top: 1em; margin-bottom: 16px; font-weight: bold; line-height: 1.4; } :host /deep/ h1 .octicon-link, :host /deep/ h2 .octicon-link, :host /deep/ h3 .octicon-link, :host /deep/ h4 .octicon-link, :host /deep/ h5 .octicon-link, :host /deep/ h6 .octicon-link { color: #000; vertical-align: middle; visibility: hidden; } :host /deep/ h1:hover .anchor, :host /deep/ h2:hover .anchor, :host /deep/ h3:hover .anchor, :host /deep/ h4:hover .anchor, :host /deep/ h5:hover .anchor, :host /deep/ h6:hover .anchor { text-decoration: none; } :host /deep/ h1:hover .anchor .octicon-link, :host /deep/ h2:hover .anchor .octicon-link, :host /deep/ h3:hover .anchor .octicon-link, :host /deep/ h4:hover .anchor .octicon-link, :host /deep/ h5:hover .anchor .octicon-link, :host /deep/ h6:hover .anchor .octicon-link { visibility: visible; } :host /deep/ h1 { padding-bottom: 0.3em; font-size: 2.25em; line-height: 1.2; border-bottom-width: 1px; border-bottom-style: solid; } :host /deep/ h1 .anchor { line-height: 1; } :host /deep/ h2 { padding-bottom: 0.3em; font-size: 1.75em; line-height: 1.225; border-bottom-width: 1px; border-bottom-style: solid; } :host /deep/ h2 .anchor { line-height: 1; } :host /deep/ h3 { font-size: 1.5em; line-height: 1.43; } :host /deep/ h3 .anchor { line-height: 1.2; } :host /deep/ h4 { font-size: 1.25em; } :host /deep/ h4 .anchor { line-height: 1.2; } :host /deep/ h5 { font-size: 1em; } :host /deep/ h5 .anchor { line-height: 1.1; } :host /deep/ h6 { font-size: 1em; } :host /deep/ h6 .anchor { line-height: 1.1; } :host /deep/ p, :host /deep/ blockquote, :host /deep/ ul, :host /deep/ ol, :host /deep/ dl, :host /deep/ table, :host /deep/ pre { margin-top: 0; margin-bottom: 16px; } :host /deep/ hr { margin: 16px 0; } :host /deep/ ul, :host /deep/ ol { padding-left: 2em; } :host /deep/ ul ul, :host /deep/ ul ol, :host /deep/ ol ol, :host /deep/ ol ul { margin-top: 0; margin-bottom: 0; } :host /deep/ li > p { margin-top: 16px; } :host /deep/ dl { padding: 0; } :host /deep/ dl dt { padding: 0; margin-top: 16px; font-size: 1em; font-style: italic; font-weight: bold; } :host /deep/ dl dd { padding: 0 16px; margin-bottom: 16px; } :host /deep/ blockquote { padding: 0 15px; border-left-width: 4px; border-left-style: solid; } :host /deep/ blockquote > :first-child { margin-top: 0; } :host /deep/ blockquote > :last-child { margin-bottom: 0; } :host /deep/ table { display: block; width: 100%; overflow: auto; word-break: normal; word-break: keep-all; } :host /deep/ table th { font-weight: bold; } :host /deep/ table th, :host /deep/ table td { padding: 6px 13px; border-width: 1px; border-style: solid; } :host /deep/ table tr { border-top-width: 1px; border-top-style: solid; } :host /deep/ img { max-width: 100%; box-sizing: content-box; } :host /deep/ code { padding: 0; padding-top: 0.2em; padding-bottom: 0.2em; margin: 0; font-size: 85%; border-radius: 3px; } :host /deep/ code:before, :host /deep/ code:after { letter-spacing: -0.2em; } :host /deep/ pre > code { padding: 0; margin: 0; font-size: 100%; word-break: normal; white-space: pre; background: transparent; border: 0; } :host /deep/ .highlight { margin-bottom: 16px; } :host /deep/ .highlight pre, :host /deep/ pre { padding: 16px; overflow: auto; font-size: 85%; line-height: 1.45; border-radius: 3px; } :host /deep/ .highlight pre { margin-bottom: 0; word-break: normal; } :host /deep/ pre { word-wrap: normal; } :host /deep/ pre code { display: inline; max-width: initial; padding: 0; margin: 0; overflow: initial; line-height: inherit; word-wrap: normal; background-color: transparent; border: 0; } :host /deep/ pre code:before, :host /deep/ pre code:after { content: normal; } :host /deep/ kbd { display: inline-block; padding: 3px 5px; font-size: 11px; line-height: 10px; vertical-align: middle; border-style: solid; border-width: 1px; border-radius: 3px; } :host /deep/ .pl-c { color: #969896; } :host /deep/ .pl-c1, :host /deep/ .pl-s .pl-v { color: #0086b3; } :host /deep/ .pl-e, :host /deep/ .pl-en { color: #795da3; } :host /deep/ .pl-s .pl-s1, :host /deep/ .pl-smi { color: #333; } :host /deep/ .pl-ent { color: #63a35c; } :host /deep/ .pl-k { color: #a71d5d; } :host /deep/ .pl-pds, :host /deep/ .pl-s, :host /deep/ .pl-s .pl-pse .pl-s1, :host /deep/ .pl-sr, :host /deep/ .pl-sr .pl-cce, :host /deep/ .pl-sr .pl-sra, :host /deep/ .pl-sr .pl-sre { color: #183691; } :host /deep/ .pl-v { color: #ed6a43; } :host /deep/ .pl-id { color: #b52a1d; } :host /deep/ .pl-ii { background-color: #b52a1d; color: #f8f8f8; } :host /deep/ .pl-sr .pl-cce { color: #63a35c; font-weight: bold; } :host /deep/ .pl-ml { color: #693a17; } :host /deep/ .pl-mh, :host /deep/ .pl-mh .pl-en, :host /deep/ .pl-ms { color: #1d3e81; font-weight: bold; } :host /deep/ .pl-mq { color: #008080; } :host /deep/ .pl-mi { color: #333; font-style: italic; } :host /deep/ .pl-mb { color: #333; font-weight: bold; } :host /deep/ .pl-md { background-color: #ffecec; color: #bd2c00; } :host /deep/ .pl-mi1 { background-color: #eaffea; color: #55a532; } :host /deep/ .pl-mdr { color: #795da3; font-weight: bold; } :host /deep/ .pl-mo { color: #1d3e81; } :host /deep/ kbd { display: inline-block; padding: 3px 5px; font: 11px Consolas, \"Liberation Mono\", Menlo, Courier, monospace; line-height: 10px; vertical-align: middle; background-color: #fcfcfc; border: solid 1px #ccc; border-bottom-color: #bbb; border-radius: 3px; box-shadow: inset 0 -1px 0 #bbb; } :host /deep/ .full-commit .btn-outline:not(:disabled):hover { color: #4078c0; border: 1px solid #4078c0; } :host /deep/ :checked + .radio-label { position: relative; z-index: 1; border-color: #4078c0; } :host /deep/ .octicon { display: inline-block; vertical-align: text-top; fill: currentColor; } :host /deep/ .task-list-item { list-style-type: none; } :host /deep/ .task-list-item + .task-list-item { margin-top: 3px; } :host /deep/ .task-list-item input { margin: 0 0.2em 0.25em -1.6em; vertical-align: middle; } "],
        template: "<ng-content></ng-content>",
    }),
    __metadata("design:paramtypes", [Renderer,
        ElementRef,
        DomSanitizer])
], TdMarkdownComponent);
export { TdMarkdownComponent };
//# sourceMappingURL=markdown.component.js.map