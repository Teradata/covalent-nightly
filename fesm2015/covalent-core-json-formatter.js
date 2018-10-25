import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Optional, NgModule } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { tdCollapseAnimation } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdJsonFormatterComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dir
     */
    constructor(_changeDetectorRef, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._open = false;
        this._levelsOpen = 0;
    }
    /**
     * levelsOpen?: number
     * Levels opened by default when JS object is formatted and rendered.
     * @param {?} levelsOpen
     * @return {?}
     */
    set levelsOpen(levelsOpen) {
        if (!Number.isInteger(levelsOpen)) {
            throw new Error('[levelsOpen] needs to be an integer.');
        }
        this._levelsOpen = levelsOpen;
        this._open = levelsOpen > 0;
    }
    /**
     * @return {?}
     */
    get levelsOpen() {
        return this._levelsOpen;
    }
    /**
     * @return {?}
     */
    get open() {
        return this._open;
    }
    /**
     * key?: string
     * Tag to be displayed next to formatted object.
     * @param {?} key
     * @return {?}
     */
    set key(key) {
        this._key = key;
    }
    /**
     * @return {?}
     */
    get key() {
        /** @type {?} */
        let elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
        return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) + elipsis : this._key;
    }
    /**
     * data: any
     * JS object to be formatted.
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.parseChildren();
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get children() {
        return this._children;
    }
    /**
     * @return {?}
     */
    get isRTL() {
        if (this._dir) {
            return this._dir.dir === 'rtl';
        }
        return false;
    }
    /**
     * Refreshes json-formatter and rerenders [data]
     * @return {?}
     */
    refresh() {
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggles collapse/expanded state of component.
     * @return {?}
     */
    toggle() {
        this._open = !this._open;
    }
    /**
     * @return {?}
     */
    isObject() {
        return this.getType(this._data) === 'object';
    }
    /**
     * @return {?}
     */
    isArray() {
        return Array.isArray(this._data);
    }
    /**
     * @return {?}
     */
    hasChildren() {
        return this._children && this._children.length > 0;
    }
    /**
     * Gets parsed value depending on value type.
     * @param {?} value
     * @return {?}
     */
    getValue(value) {
        /** @type {?} */
        let type = this.getType(value);
        if (type === 'undefined' || (type === 'null')) {
            return type;
        }
        else if (type === 'date') {
            value = new Date(value).toString();
        }
        else if (type === 'string') {
            value = '"' + value + '"';
        }
        else if (type === 'function') {
            // Remove content of the function
            return value.toString()
                .replace(/[\r\n]/g, '')
                .replace(/\{.*\}/, '') + '{…}';
        }
        else if (Array.isArray(value)) {
            return this.getObjectName() + ' [' + value.length + ']';
        }
        return value;
    }
    /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     * @param {?} object
     * @return {?}
     */
    getType(object) {
        if (typeof object === 'object') {
            if (!object) {
                return 'null';
            }
            if (Array.isArray(object)) {
                return 'object';
            }
            /** @type {?} */
            let date = new Date(object);
            if (Object.prototype.toString.call(date) === '[object Date]') {
                if (!Number.isNaN(date.getTime())) {
                    return 'date';
                }
            }
        }
        return typeof object;
    }
    /**
     * Generates string representation depending if its an object or function.
     * see: http://stackoverflow.com/a/332429
     * @return {?}
     */
    getObjectName() {
        /** @type {?} */
        let object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        /** @type {?} */
        let funcNameRegex = /function (.{1,})\(/;
        /** @type {?} */
        let results = (funcNameRegex).exec((object).constructor.toString());
        if (results && results.length > 1) {
            return results[1];
        }
        else {
            return '';
        }
    }
    /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     * @return {?}
     */
    getPreview() {
        /** @type {?} */
        let previewData;
        /** @type {?} */
        let startChar = '{ ';
        /** @type {?} */
        let endChar = ' }';
        if (this.isArray()) {
            /** @type {?} */
            let previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewArray.map((obj) => {
                return this.getValue(obj);
            });
            startChar = '[';
            endChar = ']';
        }
        else {
            /** @type {?} */
            let previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewKeys.map((key) => {
                return key + ': ' + this.getValue(this._data[key]);
            });
        }
        /** @type {?} */
        let previewString = previewData.join(', ');
        /** @type {?} */
        let ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
        return startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) +
            ellipsis + endChar;
    }
    /**
     * @return {?}
     */
    parseChildren() {
        if (this.isObject()) {
            this._children = [];
            for (let key in this._data) {
                this._children.push(key);
            }
        }
    }
}
/**
 * Max length for property names. Any names bigger than this get trunctated.
 */
TdJsonFormatterComponent.KEY_MAX_LENGTH = 30;
/**
 * Max length for preview string. Any names bigger than this get trunctated.
 */
TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH = 80;
/**
 * Max tooltip preview elements.
 */
TdJsonFormatterComponent.PREVIEW_LIMIT = 5;
TdJsonFormatterComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'td-json-formatter',
                template: "<div class=\"td-json-formatter-wrapper\">\n  <a class=\"td-key\"\n     [class.td-key-node]=\"hasChildren()\"\n     [class.td-key-leaf]=\"!hasChildren()\"\n     [tabIndex]=\"isObject()? 0 : -1\"\n     (keydown.enter)=\"toggle()\"\n     (click)=\"toggle()\">\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{key}}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{getObjectName()}}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{data.length}}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>",
                animations: [
                    tdCollapseAnimation,
                ],
                styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdJsonFormatterComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Dir, decorators: [{ type: Optional }] }
];
TdJsonFormatterComponent.propDecorators = {
    levelsOpen: [{ type: Input, args: ['levelsOpen',] }],
    key: [{ type: Input, args: ['key',] }],
    data: [{ type: Input, args: ['data',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CovalentJsonFormatterModule {
}
CovalentJsonFormatterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatTooltipModule,
                    MatIconModule,
                ],
                declarations: [
                    TdJsonFormatterComponent,
                ],
                exports: [
                    TdJsonFormatterComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentJsonFormatterModule, TdJsonFormatterComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1qc29uLWZvcm1hdHRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvanNvbi1mb3JtYXR0ZXIvanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICd0ZC1qc29uLWZvcm1hdHRlcicsXG4gIHN0eWxlVXJsczogWycuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdGRDb2xsYXBzZUFuaW1hdGlvbixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogTWF4IGxlbmd0aCBmb3IgcHJvcGVydHkgbmFtZXMuIEFueSBuYW1lcyBiaWdnZXIgdGhhbiB0aGlzIGdldCB0cnVuY3RhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgS0VZX01BWF9MRU5HVEg6IG51bWJlciA9IDMwO1xuXG4gIC8qKlxuICAgKiBNYXggbGVuZ3RoIGZvciBwcmV2aWV3IHN0cmluZy4gQW55IG5hbWVzIGJpZ2dlciB0aGFuIHRoaXMgZ2V0IHRydW5jdGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBQUkVWSUVXX1NUUklOR19NQVhfTEVOR1RIOiBudW1iZXIgPSA4MDtcblxuICAvKipcbiAgICogTWF4IHRvb2x0aXAgcHJldmlldyBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIFBSRVZJRVdfTElNSVQ6IG51bWJlciA9IDU7XG5cbiAgcHJpdmF0ZSBfa2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RhdGE6IGFueTtcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IHN0cmluZ1tdO1xuICBwcml2YXRlIF9vcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xldmVsc09wZW46IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIGxldmVsc09wZW4/OiBudW1iZXJcbiAgICogTGV2ZWxzIG9wZW5lZCBieSBkZWZhdWx0IHdoZW4gSlMgb2JqZWN0IGlzIGZvcm1hdHRlZCBhbmQgcmVuZGVyZWQuXG4gICAqL1xuICBASW5wdXQoJ2xldmVsc09wZW4nKVxuICBzZXQgbGV2ZWxzT3BlbihsZXZlbHNPcGVuOiBudW1iZXIpIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobGV2ZWxzT3BlbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2xldmVsc09wZW5dIG5lZWRzIHRvIGJlIGFuIGludGVnZXIuJyk7XG4gICAgfVxuICAgIHRoaXMuX2xldmVsc09wZW4gPSBsZXZlbHNPcGVuO1xuICAgIHRoaXMuX29wZW4gPSBsZXZlbHNPcGVuID4gMDtcbiAgfVxuICBnZXQgbGV2ZWxzT3BlbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbHNPcGVuO1xuICB9XG5cbiAgZ2V0IG9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICAvKipcbiAgICoga2V5Pzogc3RyaW5nXG4gICAqIFRhZyB0byBiZSBkaXNwbGF5ZWQgbmV4dCB0byBmb3JtYXR0ZWQgb2JqZWN0LlxuICAgKi9cbiAgQElucHV0KCdrZXknKVxuICBzZXQga2V5KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0ga2V5O1xuICB9XG4gIGdldCBrZXkoKTogc3RyaW5nIHtcbiAgICBsZXQgZWxpcHNpczogc3RyaW5nID0gdGhpcy5fa2V5ICYmIHRoaXMuX2tleS5sZW5ndGggPiBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuS0VZX01BWF9MRU5HVEggPyAnw6LCgMKmJyA6ICcnO1xuICAgIHJldHVybiB0aGlzLl9rZXkgPyB0aGlzLl9rZXkuc3Vic3RyaW5nKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5LRVlfTUFYX0xFTkdUSCkgKyBlbGlwc2lzIDogdGhpcy5fa2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIGRhdGE6IGFueVxuICAgKiBKUyBvYmplY3QgdG8gYmUgZm9ybWF0dGVkLlxuICAgKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IGRhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5wYXJzZUNoaWxkcmVuKCk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICB9XG5cbiAgZ2V0IGlzUlRMKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9kaXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXIuZGlyID09PSAncnRsJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcikge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyBqc29uLWZvcm1hdHRlciBhbmQgcmVyZW5kZXJzIFtkYXRhXVxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGNvbGxhcHNlL2V4cGFuZGVkIHN0YXRlIG9mIGNvbXBvbmVudC5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vcGVuID0gIXRoaXMuX29wZW47XG4gIH1cblxuICBpc09iamVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUeXBlKHRoaXMuX2RhdGEpID09PSAnb2JqZWN0JztcbiAgfVxuXG4gIGlzQXJyYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YSk7XG4gIH1cblxuICBoYXNDaGlsZHJlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4gJiYgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHBhcnNlZCB2YWx1ZSBkZXBlbmRpbmcgb24gdmFsdWUgdHlwZS5cbiAgICovXG4gIGdldFZhbHVlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0aGlzLmdldFR5cGUodmFsdWUpO1xuICAgIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCAodHlwZSA9PT0gJ251bGwnKSkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSAnXCInICsgdmFsdWUgKyAnXCInO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gUmVtb3ZlIGNvbnRlbnQgb2YgdGhlIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXFxyXFxuXS9nLCAnJylcbiAgICAgICAgICAucmVwbGFjZSgvXFx7LipcXH0vLCAnJykgKyAne8OiwoDCpn0nO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdE5hbWUoKSArICcgWycgKyB2YWx1ZS5sZW5ndGggKyAnXSc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHR5cGUgb2Ygb2JqZWN0LlxuICAgKiByZXR1cm5zICdudWxsJyBpZiBvYmplY3QgaXMgbnVsbCBhbmQgJ2RhdGUnIGlmIHZhbHVlIGlzIG9iamVjdCBhbmQgY2FuIGJlIHBhcnNlZCB0byBhIGRhdGUuXG4gICAqL1xuICBnZXRUeXBlKG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICghb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICAgIH1cbiAgICAgIGxldCBkYXRlOiBEYXRlID0gbmV3IERhdGUob2JqZWN0KTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0ZSkgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBzdHJpbmcgcmVwcmVzZW50YXRpb24gZGVwZW5kaW5nIGlmIGl0cyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24uXG4gICAqIHNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzMyNDI5XG4gICAqL1xuICBnZXRPYmplY3ROYW1lKCk6IHN0cmluZyB7XG4gICAgbGV0IG9iamVjdDogYW55ID0gdGhpcy5fZGF0YTtcbiAgICBpZiAodGhpcy5pc09iamVjdCgpICYmICFvYmplY3QuY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgIH1cbiAgICBsZXQgZnVuY05hbWVSZWdleDogUmVnRXhwID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xuICAgIGxldCByZXN1bHRzOiBSZWdFeHBFeGVjQXJyYXkgPSAoZnVuY05hbWVSZWdleCkuZXhlYygob2JqZWN0KS5jb25zdHJ1Y3Rvci50b1N0cmluZygpKTtcbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiByZXN1bHRzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgcHJldmlldyBvZiBub2RlcyBjaGlsZHJlbiB0byByZW5kZXIgaW4gdG9vbHRpcCBkZXBlbmRpbmcgaWYgaXRzIGFuIGFycmF5IG9yIGFuIG9iamVjdC5cbiAgICovXG4gIGdldFByZXZpZXcoKTogc3RyaW5nIHtcbiAgICBsZXQgcHJldmlld0RhdGE6IHN0cmluZ1tdO1xuICAgIGxldCBzdGFydENoYXI6IHN0cmluZyA9ICd7ICc7XG4gICAgbGV0IGVuZENoYXI6IHN0cmluZyA9ICcgfSc7XG4gICAgaWYgKHRoaXMuaXNBcnJheSgpKSB7XG4gICAgICBsZXQgcHJldmlld0FycmF5OiBhbnlbXSA9IHRoaXMuX2RhdGEuc2xpY2UoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQpO1xuICAgICAgcHJldmlld0RhdGEgPSBwcmV2aWV3QXJyYXkubWFwKChvYmo6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShvYmopO1xuICAgICAgfSk7XG4gICAgICBzdGFydENoYXIgPSAnWyc7XG4gICAgICBlbmRDaGFyID0gJ10nO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcHJldmlld0tleXM6IHN0cmluZ1tdID0gdGhpcy5fY2hpbGRyZW4uc2xpY2UoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQpO1xuICAgICAgcHJldmlld0RhdGEgPSBwcmV2aWV3S2V5cy5tYXAoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBrZXkgKyAnOiAnICsgdGhpcy5nZXRWYWx1ZSh0aGlzLl9kYXRhW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBwcmV2aWV3U3RyaW5nOiBzdHJpbmcgPSAgcHJldmlld0RhdGEuam9pbignLCAnKTtcbiAgICBsZXQgZWxsaXBzaXM6IHN0cmluZyA9IHByZXZpZXdEYXRhLmxlbmd0aCA+PSBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19MSU1JVCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld1N0cmluZy5sZW5ndGggPiBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSCA/ICfDosKAwqYnIDogJyc7XG4gICAgcmV0dXJuIHN0YXJ0Q2hhciArIHByZXZpZXdTdHJpbmcuc3Vic3RyaW5nKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX1NUUklOR19NQVhfTEVOR1RIKSArXG4gICAgICAgICAgIGVsbGlwc2lzICsgZW5kQ2hhcjtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VDaGlsZHJlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09iamVjdCgpKSB7XG4gICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50SnNvbkZvcm1hdHRlck1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE1BYWEsd0JBQXdCOzs7OztJQWdGbkMsWUFBb0Isa0JBQXFDLEVBQ3pCLElBQVM7UUFEckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBN0RqQyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0tBNkQvQjs7Ozs7OztJQXZERCxJQUNJLFVBQVUsQ0FBQyxVQUFrQjtR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