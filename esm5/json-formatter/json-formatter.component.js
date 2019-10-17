/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Optional } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { tdCollapseAnimation } from '@covalent/core/common';
var TdJsonFormatterComponent = /** @class */ (function () {
    function TdJsonFormatterComponent(_changeDetectorRef, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._open = false;
        this._levelsOpen = 0;
    }
    Object.defineProperty(TdJsonFormatterComponent.prototype, "levelsOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._levelsOpen;
        },
        /**
         * levelsOpen?: number
         * Levels opened by default when JS object is formatted and rendered.
         */
        set: /**
         * levelsOpen?: number
         * Levels opened by default when JS object is formatted and rendered.
         * @param {?} levelsOpen
         * @return {?}
         */
        function (levelsOpen) {
            if (!Number.isInteger(levelsOpen)) {
                throw new Error('[levelsOpen] needs to be an integer.');
            }
            this._levelsOpen = levelsOpen;
            this._open = levelsOpen > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
            return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) + elipsis : this._key;
        },
        /**
         * key?: string
         * Tag to be displayed next to formatted object.
         */
        set: /**
         * key?: string
         * Tag to be displayed next to formatted object.
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        /**
         * data: any
         * JS object to be formatted.
         */
        set: /**
         * data: any
         * JS object to be formatted.
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            this.parseChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._dir) {
                return this._dir.dir === 'rtl';
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes json-formatter and rerenders [data]
     */
    /**
     * Refreshes json-formatter and rerenders [data]
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.refresh = /**
     * Refreshes json-formatter and rerenders [data]
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Toggles collapse/expanded state of component.
     */
    /**
     * Toggles collapse/expanded state of component.
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.toggle = /**
     * Toggles collapse/expanded state of component.
     * @return {?}
     */
    function () {
        this._open = !this._open;
    };
    /**
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.isObject = /**
     * @return {?}
     */
    function () {
        return this.getType(this._data) === 'object';
    };
    /**
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.isArray = /**
     * @return {?}
     */
    function () {
        return Array.isArray(this._data);
    };
    /**
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.hasChildren = /**
     * @return {?}
     */
    function () {
        return this._children && this._children.length > 0;
    };
    /**
     * Gets parsed value depending on value type.
     */
    /**
     * Gets parsed value depending on value type.
     * @param {?} value
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.getValue = /**
     * Gets parsed value depending on value type.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var type = this.getType(value);
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
    };
    /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     */
    /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     * @param {?} object
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.getType = /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (typeof object === 'object') {
            if (!object) {
                return 'null';
            }
            if (Array.isArray(object)) {
                return 'object';
            }
            /** @type {?} */
            var date = new Date(object);
            if (Object.prototype.toString.call(date) === '[object Date]') {
                if (!Number.isNaN(date.getTime())) {
                    return 'date';
                }
            }
        }
        return typeof object;
    };
    /**
     * Generates string representation depending if its an object or function.
     * see: http://stackoverflow.com/a/332429
     */
    /**
     * Generates string representation depending if its an object or function.
     * see: http://stackoverflow.com/a/332429
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.getObjectName = /**
     * Generates string representation depending if its an object or function.
     * see: http://stackoverflow.com/a/332429
     * @return {?}
     */
    function () {
        /** @type {?} */
        var object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        /** @type {?} */
        var funcNameRegex = /function (.{1,})\(/;
        /** @type {?} */
        var results = funcNameRegex.exec(object.constructor.toString());
        if (results && results.length > 1) {
            return results[1];
        }
        else {
            return '';
        }
    };
    /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     */
    /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.getPreview = /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var previewData;
        /** @type {?} */
        var startChar = '{ ';
        /** @type {?} */
        var endChar = ' }';
        if (this.isArray()) {
            /** @type {?} */
            var previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewArray.map((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                return _this.getValue(obj);
            }));
            startChar = '[';
            endChar = ']';
        }
        else {
            /** @type {?} */
            var previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewKeys.map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                return key + ': ' + _this.getValue(_this._data[key]);
            }));
        }
        /** @type {?} */
        var previewString = previewData.join(', ');
        /** @type {?} */
        var ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH
            ? '…'
            : '';
        return (startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) + ellipsis + endChar);
    };
    /**
     * @private
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.parseChildren = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isObject()) {
            this._children = [];
            for (var key in this._data) {
                this._children.push(key);
            }
        }
    };
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
                    styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdJsonFormatterComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Dir, decorators: [{ type: Optional }] }
    ]; };
    TdJsonFormatterComponent.propDecorators = {
        levelsOpen: [{ type: Input, args: ['levelsOpen',] }],
        key: [{ type: Input, args: ['key',] }],
        data: [{ type: Input, args: ['data',] }]
    };
    return TdJsonFormatterComponent;
}());
export { TdJsonFormatterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJqc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUQ7SUFzRkUsa0NBQW9CLGtCQUFxQyxFQUFzQixJQUFTO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBc0IsU0FBSSxHQUFKLElBQUksQ0FBSztRQTVEaEYsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztJQTJEMkQsQ0FBQztJQXJENUYsc0JBQ0ksZ0RBQVU7Ozs7UUFPZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO1FBZEQ7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDZSxVQUFrQjtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksMENBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLHlDQUFHOzs7O1FB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAndGQtanNvbi1mb3JtYXR0ZXInLFxuICBzdHlsZVVybHM6IFsnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbdGRDb2xsYXBzZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBNYXggbGVuZ3RoIGZvciBwcm9wZXJ0eSBuYW1lcy4gQW55IG5hbWVzIGJpZ2dlciB0aGFuIHRoaXMgZ2V0IHRydW5jdGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBLRVlfTUFYX0xFTkdUSDogbnVtYmVyID0gMzA7XG5cbiAgLyoqXG4gICAqIE1heCBsZW5ndGggZm9yIHByZXZpZXcgc3RyaW5nLiBBbnkgbmFtZXMgYmlnZ2VyIHRoYW4gdGhpcyBnZXQgdHJ1bmN0YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIFBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEg6IG51bWJlciA9IDgwO1xuXG4gIC8qKlxuICAgKiBNYXggdG9vbHRpcCBwcmV2aWV3IGVsZW1lbnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgUFJFVklFV19MSU1JVDogbnVtYmVyID0gNTtcblxuICBwcml2YXRlIF9rZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGF0YTogYW55O1xuICBwcml2YXRlIF9jaGlsZHJlbjogc3RyaW5nW107XG4gIHByaXZhdGUgX29wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGV2ZWxzT3BlbjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogbGV2ZWxzT3Blbj86IG51bWJlclxuICAgKiBMZXZlbHMgb3BlbmVkIGJ5IGRlZmF1bHQgd2hlbiBKUyBvYmplY3QgaXMgZm9ybWF0dGVkIGFuZCByZW5kZXJlZC5cbiAgICovXG4gIEBJbnB1dCgnbGV2ZWxzT3BlbicpXG4gIHNldCBsZXZlbHNPcGVuKGxldmVsc09wZW46IG51bWJlcikge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihsZXZlbHNPcGVuKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbGV2ZWxzT3Blbl0gbmVlZHMgdG8gYmUgYW4gaW50ZWdlci4nKTtcbiAgICB9XG4gICAgdGhpcy5fbGV2ZWxzT3BlbiA9IGxldmVsc09wZW47XG4gICAgdGhpcy5fb3BlbiA9IGxldmVsc09wZW4gPiAwO1xuICB9XG4gIGdldCBsZXZlbHNPcGVuKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsc09wZW47XG4gIH1cblxuICBnZXQgb3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBrZXk/OiBzdHJpbmdcbiAgICogVGFnIHRvIGJlIGRpc3BsYXllZCBuZXh0IHRvIGZvcm1hdHRlZCBvYmplY3QuXG4gICAqL1xuICBASW5wdXQoJ2tleScpXG4gIHNldCBrZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSBrZXk7XG4gIH1cbiAgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIGxldCBlbGlwc2lzOiBzdHJpbmcgPSB0aGlzLl9rZXkgJiYgdGhpcy5fa2V5Lmxlbmd0aCA+IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5LRVlfTUFYX0xFTkdUSCA/ICfigKYnIDogJyc7XG4gICAgcmV0dXJuIHRoaXMuX2tleSA/IHRoaXMuX2tleS5zdWJzdHJpbmcoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LktFWV9NQVhfTEVOR1RIKSArIGVsaXBzaXMgOiB0aGlzLl9rZXk7XG4gIH1cblxuICAvKipcbiAgICogZGF0YTogYW55XG4gICAqIEpTIG9iamVjdCB0byBiZSBmb3JtYXR0ZWQuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBhcnNlQ2hpbGRyZW4oKTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IGNoaWxkcmVuKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gIH1cblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyKSB7fVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMganNvbi1mb3JtYXR0ZXIgYW5kIHJlcmVuZGVycyBbZGF0YV1cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBjb2xsYXBzZS9leHBhbmRlZCBzdGF0ZSBvZiBjb21wb25lbnQuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5fb3BlbiA9ICF0aGlzLl9vcGVuO1xuICB9XG5cbiAgaXNPYmplY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHlwZSh0aGlzLl9kYXRhKSA9PT0gJ29iamVjdCc7XG4gIH1cblxuICBpc0FycmF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgaGFzQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuICYmIHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBwYXJzZWQgdmFsdWUgZGVwZW5kaW5nIG9uIHZhbHVlIHR5cGUuXG4gICAqL1xuICBnZXRWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gdGhpcy5nZXRUeXBlKHZhbHVlKTtcbiAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9ICdcIicgKyB2YWx1ZSArICdcIic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBSZW1vdmUgY29udGVudCBvZiB0aGUgZnVuY3Rpb25cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAucmVwbGFjZSgvW1xcclxcbl0vZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcey4qXFx9LywgJycpICsgJ3vigKZ9J1xuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3ROYW1lKCkgKyAnIFsnICsgdmFsdWUubGVuZ3RoICsgJ10nO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0eXBlIG9mIG9iamVjdC5cbiAgICogcmV0dXJucyAnbnVsbCcgaWYgb2JqZWN0IGlzIG51bGwgYW5kICdkYXRlJyBpZiB2YWx1ZSBpcyBvYmplY3QgYW5kIGNhbiBiZSBwYXJzZWQgdG8gYSBkYXRlLlxuICAgKi9cbiAgZ2V0VHlwZShvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgICB9XG4gICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKG9iamVjdCk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGUpID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGRlcGVuZGluZyBpZiBpdHMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uLlxuICAgKiBzZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzMjQyOVxuICAgKi9cbiAgZ2V0T2JqZWN0TmFtZSgpOiBzdHJpbmcge1xuICAgIGxldCBvYmplY3Q6IGFueSA9IHRoaXMuX2RhdGE7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoKSAmJiAhb2JqZWN0LmNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgfVxuICAgIGxldCBmdW5jTmFtZVJlZ2V4OiBSZWdFeHAgPSAvZnVuY3Rpb24gKC57MSx9KVxcKC87XG4gICAgbGV0IHJlc3VsdHM6IFJlZ0V4cEV4ZWNBcnJheSA9IGZ1bmNOYW1lUmVnZXguZXhlYyhvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gcmVzdWx0c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHByZXZpZXcgb2Ygbm9kZXMgY2hpbGRyZW4gdG8gcmVuZGVyIGluIHRvb2x0aXAgZGVwZW5kaW5nIGlmIGl0cyBhbiBhcnJheSBvciBhbiBvYmplY3QuXG4gICAqL1xuICBnZXRQcmV2aWV3KCk6IHN0cmluZyB7XG4gICAgbGV0IHByZXZpZXdEYXRhOiBzdHJpbmdbXTtcbiAgICBsZXQgc3RhcnRDaGFyOiBzdHJpbmcgPSAneyAnO1xuICAgIGxldCBlbmRDaGFyOiBzdHJpbmcgPSAnIH0nO1xuICAgIGlmICh0aGlzLmlzQXJyYXkoKSkge1xuICAgICAgbGV0IHByZXZpZXdBcnJheTogYW55W10gPSB0aGlzLl9kYXRhLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0FycmF5Lm1hcCgob2JqOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUob2JqKTtcbiAgICAgIH0pO1xuICAgICAgc3RhcnRDaGFyID0gJ1snO1xuICAgICAgZW5kQ2hhciA9ICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByZXZpZXdLZXlzOiBzdHJpbmdbXSA9IHRoaXMuX2NoaWxkcmVuLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0tleXMubWFwKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4ga2V5ICsgJzogJyArIHRoaXMuZ2V0VmFsdWUodGhpcy5fZGF0YVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcHJldmlld1N0cmluZzogc3RyaW5nID0gcHJldmlld0RhdGEuam9pbignLCAnKTtcbiAgICBsZXQgZWxsaXBzaXM6IHN0cmluZyA9XG4gICAgICBwcmV2aWV3RGF0YS5sZW5ndGggPj0gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQgfHxcbiAgICAgIHByZXZpZXdTdHJpbmcubGVuZ3RoID4gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEhcbiAgICAgICAgPyAn4oCmJ1xuICAgICAgICA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICBzdGFydENoYXIgKyBwcmV2aWV3U3RyaW5nLnN1YnN0cmluZygwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSCkgKyBlbGxpcHNpcyArIGVuZENoYXJcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUNoaWxkcmVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT2JqZWN0KCkpIHtcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fZGF0YSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=