/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
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
        const type = this.getType(value);
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
            const date = new Date(object);
            if (Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())) {
                return 'date';
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
        const object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        /** @type {?} */
        const funcNameRegex = /function (.{1,})\(/;
        /** @type {?} */
        const results = funcNameRegex.exec(object.constructor.toString());
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
            const previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewArray.map((/**
             * @param {?} obj
             * @return {?}
             */
            (obj) => {
                return this.getValue(obj);
            }));
            startChar = '[';
            endChar = ']';
        }
        else {
            /** @type {?} */
            const previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewKeys.map((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                return key + ': ' + this.getValue(this._data[key]);
            }));
        }
        /** @type {?} */
        const previewString = previewData.join(', ');
        /** @type {?} */
        const ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH
            ? '…'
            : '';
        return (startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) + ellipsis + endChar);
    }
    /**
     * @private
     * @return {?}
     */
    parseChildren() {
        if (this.isObject()) {
            this._children = [];
            for (const key of Object.keys(this._data)) {
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
                template: "<div class=\"td-json-formatter-wrapper\">\n  <a\n    class=\"td-key\"\n    [class.td-key-node]=\"hasChildren()\"\n    [class.td-key-leaf]=\"!hasChildren()\"\n    [tabIndex]=\"isObject() ? 0 : -1\"\n    (keydown.enter)=\"toggle()\"\n    (click)=\"toggle()\"\n  >\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">\n      {{ open ? 'keyboard_arrow_down' : isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right' }}\n    </mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{ key }}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{ getObjectName() }}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{ data.length }}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{ getValue(data) }}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
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
     * @private
     */
    TdJsonFormatterComponent.KEY_MAX_LENGTH;
    /**
     * Max length for preview string. Any names bigger than this get trunctated.
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH;
    /**
     * Max tooltip preview elements.
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.PREVIEW_LIMIT;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._key;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._children;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._open;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._levelsOpen;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._dir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvanNvbi1mb3JtYXR0ZXIvIiwic291cmNlcyI6WyJqc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFTNUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUErRW5DLFlBQW9CLGtCQUFxQyxFQUFzQixJQUFTO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBc0IsU0FBSSxHQUFKLElBQUksQ0FBSztRQTVEaEYsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztJQTJEMkQsQ0FBQzs7Ozs7OztJQXJENUYsSUFDSSxVQUFVLENBQUMsVUFBa0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7Ozs7O0lBTUQsSUFDSSxHQUFHLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNsQixDQUFDOzs7O0lBQ0QsSUFBSSxHQUFHOztjQUNDLE9BQU8sR0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzFHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMzRyxDQUFDOzs7Ozs7O0lBTUQsSUFDSSxJQUFJLENBQUMsSUFBUztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQztTQUNoQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFPRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFLRCxRQUFRLENBQUMsS0FBVTs7Y0FDWCxJQUFJLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMxQixLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEM7YUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQzNCO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLGlDQUFpQztZQUNqQyxPQUFPLENBQ0wsS0FBSztpQkFDRixRQUFRLEVBQUU7aUJBQ1YsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7aUJBQ3RCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUNqQyxDQUFDO1NBQ0g7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBTUQsT0FBTyxDQUFDLE1BQVc7UUFDakIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxPQUFPLE1BQU0sQ0FBQzthQUNmO1lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QixPQUFPLFFBQVEsQ0FBQzthQUNqQjs7a0JBQ0ssSUFBSSxHQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNuQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxlQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO2dCQUM3RixPQUFPLE1BQU0sQ0FBQzthQUNmO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQU1ELGFBQWE7O2NBQ0wsTUFBTSxHQUFRLElBQUksQ0FBQyxLQUFLO1FBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUMxQyxPQUFPLFFBQVEsQ0FBQztTQUNqQjs7Y0FDSyxhQUFhLEdBQVcsb0JBQW9COztjQUM1QyxPQUFPLEdBQW9CLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7Ozs7O0lBS0QsVUFBVTs7WUFDSixXQUFxQjs7WUFDckIsU0FBUyxHQUFXLElBQUk7O1lBQ3hCLE9BQU8sR0FBVyxJQUFJO1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFOztrQkFDWixZQUFZLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztZQUN2RixXQUFXLEdBQUcsWUFBWSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7WUFDSCxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDZjthQUFNOztrQkFDQyxXQUFXLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztZQUM3RixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFO2dCQUM1QyxPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxFQUFDLENBQUM7U0FDSjs7Y0FDSyxhQUFhLEdBQVcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O2NBQzlDLFFBQVEsR0FDWixXQUFXLENBQUMsTUFBTSxJQUFJLHdCQUF3QixDQUFDLGFBQWE7WUFDNUQsYUFBYSxDQUFDLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyx5QkFBeUI7WUFDdkUsQ0FBQyxDQUFDLEdBQUc7WUFDTCxDQUFDLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FDTCxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsd0JBQXdCLENBQUMseUJBQXlCLENBQUMsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUNoSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDOzs7OztBQTVNYyx1Q0FBYyxHQUFXLEVBQUUsQ0FBQzs7OztBQUs1QixrREFBeUIsR0FBVyxFQUFFLENBQUM7Ozs7QUFLdkMsc0NBQWEsR0FBVyxDQUFDLENBQUM7O1lBckIxQyxTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxtQkFBbUI7Z0JBRTdCLHd0Q0FBOEM7Z0JBQzlDLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUFDOzthQUNsQzs7OztZQVZtRCxpQkFBaUI7WUFDNUQsR0FBRyx1QkF5RmtELFFBQVE7Ozt5QkFyRG5FLEtBQUssU0FBQyxZQUFZO2tCQW9CbEIsS0FBSyxTQUFDLEtBQUs7bUJBYVgsS0FBSyxTQUFDLE1BQU07Ozs7Ozs7O0lBdkRiLHdDQUEyQzs7Ozs7O0lBSzNDLG1EQUFzRDs7Ozs7O0lBS3RELHVDQUF5Qzs7Ozs7SUFFekMsd0NBQXFCOzs7OztJQUNyQix5Q0FBbUI7Ozs7O0lBQ25CLDZDQUE0Qjs7Ozs7SUFDNUIseUNBQStCOzs7OztJQUMvQiwrQ0FBZ0M7Ozs7O0lBMkRwQixzREFBNkM7Ozs7O0lBQUUsd0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICd0ZC1qc29uLWZvcm1hdHRlcicsXG4gIHN0eWxlVXJsczogWycuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFt0ZENvbGxhcHNlQW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIE1heCBsZW5ndGggZm9yIHByb3BlcnR5IG5hbWVzLiBBbnkgbmFtZXMgYmlnZ2VyIHRoYW4gdGhpcyBnZXQgdHJ1bmN0YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIEtFWV9NQVhfTEVOR1RIOiBudW1iZXIgPSAzMDtcblxuICAvKipcbiAgICogTWF4IGxlbmd0aCBmb3IgcHJldmlldyBzdHJpbmcuIEFueSBuYW1lcyBiaWdnZXIgdGhhbiB0aGlzIGdldCB0cnVuY3RhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSDogbnVtYmVyID0gODA7XG5cbiAgLyoqXG4gICAqIE1heCB0b29sdGlwIHByZXZpZXcgZWxlbWVudHMuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBQUkVWSUVXX0xJTUlUOiBudW1iZXIgPSA1O1xuXG4gIHByaXZhdGUgX2tleTogc3RyaW5nO1xuICBwcml2YXRlIF9kYXRhOiBhbnk7XG4gIHByaXZhdGUgX2NoaWxkcmVuOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sZXZlbHNPcGVuOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBsZXZlbHNPcGVuPzogbnVtYmVyXG4gICAqIExldmVscyBvcGVuZWQgYnkgZGVmYXVsdCB3aGVuIEpTIG9iamVjdCBpcyBmb3JtYXR0ZWQgYW5kIHJlbmRlcmVkLlxuICAgKi9cbiAgQElucHV0KCdsZXZlbHNPcGVuJylcbiAgc2V0IGxldmVsc09wZW4obGV2ZWxzT3BlbjogbnVtYmVyKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGxldmVsc09wZW4pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tsZXZlbHNPcGVuXSBuZWVkcyB0byBiZSBhbiBpbnRlZ2VyLicpO1xuICAgIH1cbiAgICB0aGlzLl9sZXZlbHNPcGVuID0gbGV2ZWxzT3BlbjtcbiAgICB0aGlzLl9vcGVuID0gbGV2ZWxzT3BlbiA+IDA7XG4gIH1cbiAgZ2V0IGxldmVsc09wZW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWxzT3BlbjtcbiAgfVxuXG4gIGdldCBvcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIGtleT86IHN0cmluZ1xuICAgKiBUYWcgdG8gYmUgZGlzcGxheWVkIG5leHQgdG8gZm9ybWF0dGVkIG9iamVjdC5cbiAgICovXG4gIEBJbnB1dCgna2V5JylcbiAgc2V0IGtleShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IGtleTtcbiAgfVxuICBnZXQga2V5KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZWxpcHNpczogc3RyaW5nID0gdGhpcy5fa2V5ICYmIHRoaXMuX2tleS5sZW5ndGggPiBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuS0VZX01BWF9MRU5HVEggPyAn4oCmJyA6ICcnO1xuICAgIHJldHVybiB0aGlzLl9rZXkgPyB0aGlzLl9rZXkuc3Vic3RyaW5nKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5LRVlfTUFYX0xFTkdUSCkgKyBlbGlwc2lzIDogdGhpcy5fa2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIGRhdGE6IGFueVxuICAgKiBKUyBvYmplY3QgdG8gYmUgZm9ybWF0dGVkLlxuICAgKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IGRhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5wYXJzZUNoaWxkcmVuKCk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICB9XG5cbiAgZ2V0IGlzUlRMKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9kaXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXIuZGlyID09PSAncnRsJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcikge31cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGpzb24tZm9ybWF0dGVyIGFuZCByZXJlbmRlcnMgW2RhdGFdXG4gICAqL1xuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgY29sbGFwc2UvZXhwYW5kZWQgc3RhdGUgb2YgY29tcG9uZW50LlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuX29wZW4gPSAhdGhpcy5fb3BlbjtcbiAgfVxuXG4gIGlzT2JqZWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFR5cGUodGhpcy5fZGF0YSkgPT09ICdvYmplY3QnO1xuICB9XG5cbiAgaXNBcnJheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIGhhc0NoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbiAmJiB0aGlzLl9jaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgcGFyc2VkIHZhbHVlIGRlcGVuZGluZyBvbiB2YWx1ZSB0eXBlLlxuICAgKi9cbiAgZ2V0VmFsdWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgdHlwZTogc3RyaW5nID0gdGhpcy5nZXRUeXBlKHZhbHVlKTtcbiAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9ICdcIicgKyB2YWx1ZSArICdcIic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBSZW1vdmUgY29udGVudCBvZiB0aGUgZnVuY3Rpb25cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAucmVwbGFjZSgvW1xcclxcbl0vZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcey4qXFx9LywgJycpICsgJ3vigKZ9J1xuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3ROYW1lKCkgKyAnIFsnICsgdmFsdWUubGVuZ3RoICsgJ10nO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0eXBlIG9mIG9iamVjdC5cbiAgICogcmV0dXJucyAnbnVsbCcgaWYgb2JqZWN0IGlzIG51bGwgYW5kICdkYXRlJyBpZiB2YWx1ZSBpcyBvYmplY3QgYW5kIGNhbiBiZSBwYXJzZWQgdG8gYSBkYXRlLlxuICAgKi9cbiAgZ2V0VHlwZShvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUob2JqZWN0KTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0ZSkgPT09ICdbb2JqZWN0IERhdGVdJyAmJiAhTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGRlcGVuZGluZyBpZiBpdHMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uLlxuICAgKiBzZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzMjQyOVxuICAgKi9cbiAgZ2V0T2JqZWN0TmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9iamVjdDogYW55ID0gdGhpcy5fZGF0YTtcbiAgICBpZiAodGhpcy5pc09iamVjdCgpICYmICFvYmplY3QuY29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICB9XG4gICAgY29uc3QgZnVuY05hbWVSZWdleDogUmVnRXhwID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xuICAgIGNvbnN0IHJlc3VsdHM6IFJlZ0V4cEV4ZWNBcnJheSA9IGZ1bmNOYW1lUmVnZXguZXhlYyhvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gcmVzdWx0c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHByZXZpZXcgb2Ygbm9kZXMgY2hpbGRyZW4gdG8gcmVuZGVyIGluIHRvb2x0aXAgZGVwZW5kaW5nIGlmIGl0cyBhbiBhcnJheSBvciBhbiBvYmplY3QuXG4gICAqL1xuICBnZXRQcmV2aWV3KCk6IHN0cmluZyB7XG4gICAgbGV0IHByZXZpZXdEYXRhOiBzdHJpbmdbXTtcbiAgICBsZXQgc3RhcnRDaGFyOiBzdHJpbmcgPSAneyAnO1xuICAgIGxldCBlbmRDaGFyOiBzdHJpbmcgPSAnIH0nO1xuICAgIGlmICh0aGlzLmlzQXJyYXkoKSkge1xuICAgICAgY29uc3QgcHJldmlld0FycmF5OiBhbnlbXSA9IHRoaXMuX2RhdGEuc2xpY2UoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQpO1xuICAgICAgcHJldmlld0RhdGEgPSBwcmV2aWV3QXJyYXkubWFwKChvYmo6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShvYmopO1xuICAgICAgfSk7XG4gICAgICBzdGFydENoYXIgPSAnWyc7XG4gICAgICBlbmRDaGFyID0gJ10nO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmV2aWV3S2V5czogc3RyaW5nW10gPSB0aGlzLl9jaGlsZHJlbi5zbGljZSgwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19MSU1JVCk7XG4gICAgICBwcmV2aWV3RGF0YSA9IHByZXZpZXdLZXlzLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGtleSArICc6ICcgKyB0aGlzLmdldFZhbHVlKHRoaXMuX2RhdGFba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcHJldmlld1N0cmluZzogc3RyaW5nID0gcHJldmlld0RhdGEuam9pbignLCAnKTtcbiAgICBjb25zdCBlbGxpcHNpczogc3RyaW5nID1cbiAgICAgIHByZXZpZXdEYXRhLmxlbmd0aCA+PSBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19MSU1JVCB8fFxuICAgICAgcHJldmlld1N0cmluZy5sZW5ndGggPiBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSFxuICAgICAgICA/ICfigKYnXG4gICAgICAgIDogJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIHN0YXJ0Q2hhciArIHByZXZpZXdTdHJpbmcuc3Vic3RyaW5nKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX1NUUklOR19NQVhfTEVOR1RIKSArIGVsbGlwc2lzICsgZW5kQ2hhclxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoKSkge1xuICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==