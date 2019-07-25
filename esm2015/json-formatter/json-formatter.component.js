/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Optional } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { tdCollapseAnimation } from '@covalent/core/common';
export class TdJsonFormatterComponent {
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
        if (type === 'undefined' || type === 'null') {
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
            return (value
                .toString()
                .replace(/[\r\n]/g, '')
                .replace(/\{.*\}/, '') + '{…}');
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
        let results = funcNameRegex.exec(object.constructor.toString());
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
            previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH
            ? '…'
            : '';
        return (startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) + ellipsis + endChar);
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
                template: "<div class=\"td-json-formatter-wrapper\">\n  <a\n    class=\"td-key\"\n    [class.td-key-node]=\"hasChildren()\"\n    [class.td-key-leaf]=\"!hasChildren()\"\n    [tabIndex]=\"isObject() ? 0 : -1\"\n    (keydown.enter)=\"toggle()\"\n    (click)=\"toggle()\"\n  >\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{\n      open ? 'keyboard_arrow_down' : isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right'\n    }}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{ key }}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{ getObjectName() }}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{ data.length }}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{ getValue(data) }}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
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
if (false) {
    /**
     * Max length for property names. Any names bigger than this get trunctated.
     * @type {?}
     */
    TdJsonFormatterComponent.KEY_MAX_LENGTH;
    /**
     * Max length for preview string. Any names bigger than this get trunctated.
     * @type {?}
     */
    TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH;
    /**
     * Max tooltip preview elements.
     * @type {?}
     */
    TdJsonFormatterComponent.PREVIEW_LIMIT;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._key;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._data;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._children;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._open;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._levelsOpen;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._dir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvanNvbi1mb3JtYXR0ZXIvIiwic291cmNlcyI6WyJqc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFTNUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUErRW5DLFlBQW9CLGtCQUFxQyxFQUFzQixJQUFTO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBc0IsU0FBSSxHQUFKLElBQUksQ0FBSztRQTVEaEYsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztJQTJEMkQsQ0FBQzs7Ozs7OztJQXJENUYsSUFDSSxVQUFVLENBQUMsVUFBa0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7Ozs7O0lBTUQsSUFDSSxHQUFHLENBQUMsR0FBVztR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cEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7QUE5TWMsdUNBQWMsR0FBVyxFQUFFLENBQUM7Ozs7QUFLNUIsa0RBQXlCLEdBQVcsRUFBRSxDQUFDOzs7O0FBS3ZDLHNDQUFhLEdBQVcsQ0FBQyxDQUFDOztZQXJCMUMsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsbUJBQW1CO2dCQUU3QixzdENBQThDO2dCQUM5QyxVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7YUFDbEM7Ozs7WUFWbUQsaUJBQWlCO1lBQzVELEdBQUcsdUJBeUZrRCxRQUFROzs7eUJBckRuRSxLQUFLLFNBQUMsWUFBWTtrQkFvQmxCLEtBQUssU0FBQyxLQUFLO21CQWFYLEtBQUssU0FBQyxNQUFNOzs7Ozs7O0lBdkRiLHdDQUEyQzs7Ozs7SUFLM0MsbURBQXNEOzs7OztJQUt0RCx1Q0FBeUM7O0lBRXpDLHdDQUFxQjs7SUFDckIseUNBQW1COztJQUNuQiw2Q0FBNEI7O0lBQzVCLHlDQUErQjs7SUFDL0IsK0NBQWdDOztJQTJEcEIsc0RBQTZDOztJQUFFLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAndGQtanNvbi1mb3JtYXR0ZXInLFxuICBzdHlsZVVybHM6IFsnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbdGRDb2xsYXBzZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBNYXggbGVuZ3RoIGZvciBwcm9wZXJ0eSBuYW1lcy4gQW55IG5hbWVzIGJpZ2dlciB0aGFuIHRoaXMgZ2V0IHRydW5jdGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBLRVlfTUFYX0xFTkdUSDogbnVtYmVyID0gMzA7XG5cbiAgLyoqXG4gICAqIE1heCBsZW5ndGggZm9yIHByZXZpZXcgc3RyaW5nLiBBbnkgbmFtZXMgYmlnZ2VyIHRoYW4gdGhpcyBnZXQgdHJ1bmN0YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIFBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEg6IG51bWJlciA9IDgwO1xuXG4gIC8qKlxuICAgKiBNYXggdG9vbHRpcCBwcmV2aWV3IGVsZW1lbnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgUFJFVklFV19MSU1JVDogbnVtYmVyID0gNTtcblxuICBwcml2YXRlIF9rZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGF0YTogYW55O1xuICBwcml2YXRlIF9jaGlsZHJlbjogc3RyaW5nW107XG4gIHByaXZhdGUgX29wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGV2ZWxzT3BlbjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogbGV2ZWxzT3Blbj86IG51bWJlclxuICAgKiBMZXZlbHMgb3BlbmVkIGJ5IGRlZmF1bHQgd2hlbiBKUyBvYmplY3QgaXMgZm9ybWF0dGVkIGFuZCByZW5kZXJlZC5cbiAgICovXG4gIEBJbnB1dCgnbGV2ZWxzT3BlbicpXG4gIHNldCBsZXZlbHNPcGVuKGxldmVsc09wZW46IG51bWJlcikge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihsZXZlbHNPcGVuKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbGV2ZWxzT3Blbl0gbmVlZHMgdG8gYmUgYW4gaW50ZWdlci4nKTtcbiAgICB9XG4gICAgdGhpcy5fbGV2ZWxzT3BlbiA9IGxldmVsc09wZW47XG4gICAgdGhpcy5fb3BlbiA9IGxldmVsc09wZW4gPiAwO1xuICB9XG4gIGdldCBsZXZlbHNPcGVuKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsc09wZW47XG4gIH1cblxuICBnZXQgb3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBrZXk/OiBzdHJpbmdcbiAgICogVGFnIHRvIGJlIGRpc3BsYXllZCBuZXh0IHRvIGZvcm1hdHRlZCBvYmplY3QuXG4gICAqL1xuICBASW5wdXQoJ2tleScpXG4gIHNldCBrZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSBrZXk7XG4gIH1cbiAgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIGxldCBlbGlwc2lzOiBzdHJpbmcgPSB0aGlzLl9rZXkgJiYgdGhpcy5fa2V5Lmxlbmd0aCA+IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5LRVlfTUFYX0xFTkdUSCA/ICfigKYnIDogJyc7XG4gICAgcmV0dXJuIHRoaXMuX2tleSA/IHRoaXMuX2tleS5zdWJzdHJpbmcoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LktFWV9NQVhfTEVOR1RIKSArIGVsaXBzaXMgOiB0aGlzLl9rZXk7XG4gIH1cblxuICAvKipcbiAgICogZGF0YTogYW55XG4gICAqIEpTIG9iamVjdCB0byBiZSBmb3JtYXR0ZWQuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBhcnNlQ2hpbGRyZW4oKTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IGNoaWxkcmVuKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gIH1cblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyKSB7fVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMganNvbi1mb3JtYXR0ZXIgYW5kIHJlcmVuZGVycyBbZGF0YV1cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBjb2xsYXBzZS9leHBhbmRlZCBzdGF0ZSBvZiBjb21wb25lbnQuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5fb3BlbiA9ICF0aGlzLl9vcGVuO1xuICB9XG5cbiAgaXNPYmplY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHlwZSh0aGlzLl9kYXRhKSA9PT0gJ29iamVjdCc7XG4gIH1cblxuICBpc0FycmF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgaGFzQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuICYmIHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBwYXJzZWQgdmFsdWUgZGVwZW5kaW5nIG9uIHZhbHVlIHR5cGUuXG4gICAqL1xuICBnZXRWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gdGhpcy5nZXRUeXBlKHZhbHVlKTtcbiAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9ICdcIicgKyB2YWx1ZSArICdcIic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBSZW1vdmUgY29udGVudCBvZiB0aGUgZnVuY3Rpb25cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAucmVwbGFjZSgvW1xcclxcbl0vZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcey4qXFx9LywgJycpICsgJ3vigKZ9J1xuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3ROYW1lKCkgKyAnIFsnICsgdmFsdWUubGVuZ3RoICsgJ10nO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0eXBlIG9mIG9iamVjdC5cbiAgICogcmV0dXJucyAnbnVsbCcgaWYgb2JqZWN0IGlzIG51bGwgYW5kICdkYXRlJyBpZiB2YWx1ZSBpcyBvYmplY3QgYW5kIGNhbiBiZSBwYXJzZWQgdG8gYSBkYXRlLlxuICAgKi9cbiAgZ2V0VHlwZShvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgICB9XG4gICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKG9iamVjdCk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGUpID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGRlcGVuZGluZyBpZiBpdHMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uLlxuICAgKiBzZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzMjQyOVxuICAgKi9cbiAgZ2V0T2JqZWN0TmFtZSgpOiBzdHJpbmcge1xuICAgIGxldCBvYmplY3Q6IGFueSA9IHRoaXMuX2RhdGE7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoKSAmJiAhb2JqZWN0LmNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgfVxuICAgIGxldCBmdW5jTmFtZVJlZ2V4OiBSZWdFeHAgPSAvZnVuY3Rpb24gKC57MSx9KVxcKC87XG4gICAgbGV0IHJlc3VsdHM6IFJlZ0V4cEV4ZWNBcnJheSA9IGZ1bmNOYW1lUmVnZXguZXhlYyhvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gcmVzdWx0c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHByZXZpZXcgb2Ygbm9kZXMgY2hpbGRyZW4gdG8gcmVuZGVyIGluIHRvb2x0aXAgZGVwZW5kaW5nIGlmIGl0cyBhbiBhcnJheSBvciBhbiBvYmplY3QuXG4gICAqL1xuICBnZXRQcmV2aWV3KCk6IHN0cmluZyB7XG4gICAgbGV0IHByZXZpZXdEYXRhOiBzdHJpbmdbXTtcbiAgICBsZXQgc3RhcnRDaGFyOiBzdHJpbmcgPSAneyAnO1xuICAgIGxldCBlbmRDaGFyOiBzdHJpbmcgPSAnIH0nO1xuICAgIGlmICh0aGlzLmlzQXJyYXkoKSkge1xuICAgICAgbGV0IHByZXZpZXdBcnJheTogYW55W10gPSB0aGlzLl9kYXRhLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0FycmF5Lm1hcCgob2JqOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUob2JqKTtcbiAgICAgIH0pO1xuICAgICAgc3RhcnRDaGFyID0gJ1snO1xuICAgICAgZW5kQ2hhciA9ICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByZXZpZXdLZXlzOiBzdHJpbmdbXSA9IHRoaXMuX2NoaWxkcmVuLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0tleXMubWFwKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4ga2V5ICsgJzogJyArIHRoaXMuZ2V0VmFsdWUodGhpcy5fZGF0YVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcHJldmlld1N0cmluZzogc3RyaW5nID0gcHJldmlld0RhdGEuam9pbignLCAnKTtcbiAgICBsZXQgZWxsaXBzaXM6IHN0cmluZyA9XG4gICAgICBwcmV2aWV3RGF0YS5sZW5ndGggPj0gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQgfHxcbiAgICAgIHByZXZpZXdTdHJpbmcubGVuZ3RoID4gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEhcbiAgICAgICAgPyAn4oCmJ1xuICAgICAgICA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICBzdGFydENoYXIgKyBwcmV2aWV3U3RyaW5nLnN1YnN0cmluZygwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSCkgKyBlbGxpcHNpcyArIGVuZENoYXJcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUNoaWxkcmVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT2JqZWN0KCkpIHtcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fZGF0YSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=