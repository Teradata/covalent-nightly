/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
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
            if (Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())) {
                return 'date';
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
        var e_1, _a;
        if (this.isObject()) {
            this._children = [];
            try {
                for (var _b = __values(Object.keys(this._data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    this._children.push(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
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
                    styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvanNvbi1mb3JtYXR0ZXIvIiwic291cmNlcyI6WyJqc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVEO0lBc0ZFLGtDQUFvQixrQkFBcUMsRUFBc0IsSUFBUztRQUFwRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQXNCLFNBQUksR0FBSixJQUFJLENBQUs7UUE1RGhGLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7SUEyRDJELENBQUM7SUFyRDVGLHNCQUNJLGdEQUFVOzs7O1FBT2Q7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQztRQWREOzs7V0FHRzs7Ozs7OztRQUNILFVBQ2UsVUFBa0I7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQzthQUN6RDtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUtELHNCQUFJLDBDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBRzs7OztRQUdQOztnQkFDUSxPQUFPLEdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0csQ0FBQztRQVhEOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1EsR0FBVztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQVVELHNCQUNJLDBDQUFJOzs7O1FBSVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQVhEOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1MsSUFBUztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSw4Q0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQzthQUNoQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFJRDs7T0FFRzs7Ozs7SUFDSCwwQ0FBTzs7OztJQUFQO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBTTs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCwwQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsMkNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFVOztZQUNYLElBQUksR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQzFCLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDM0I7YUFBTSxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDOUIsaUNBQWlDO1lBQ2pDLE9BQU8sQ0FDTCxLQUFLO2lCQUNGLFFBQVEsRUFBRTtpQkFDVixPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztpQkFDdEIsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQ2pDLENBQUM7U0FDSDthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDekQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCwwQ0FBTzs7Ozs7O0lBQVAsVUFBUSxNQUFXO1FBQ2pCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsT0FBTyxNQUFNLENBQUM7YUFDZjtZQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDekIsT0FBTyxRQUFRLENBQUM7YUFDakI7O2dCQUNLLElBQUksR0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssZUFBZSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtnQkFDN0YsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO1FBQ0QsT0FBTyxPQUFPLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxnREFBYTs7Ozs7SUFBYjs7WUFDUSxNQUFNLEdBQVEsSUFBSSxDQUFDLEtBQUs7UUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQzFDLE9BQU8sUUFBUSxDQUFDO1NBQ2pCOztZQUNLLGFBQWEsR0FBVyxvQkFBb0I7O1lBQzVDLE9BQU8sR0FBb0IsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xGLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDZDQUFVOzs7O0lBQVY7UUFBQSxpQkEwQkM7O1lBekJLLFdBQXFCOztZQUNyQixTQUFTLEdBQVcsSUFBSTs7WUFDeEIsT0FBTyxHQUFXLElBQUk7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7O2dCQUNaLFlBQVksR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsd0JBQXdCLENBQUMsYUFBYSxDQUFDO1lBQ3ZGLFdBQVcsR0FBRyxZQUFZLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsR0FBUTtnQkFDdEMsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBQyxDQUFDO1lBQ0gsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNoQixPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ2Y7YUFBTTs7Z0JBQ0MsV0FBVyxHQUFhLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7WUFDN0YsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxHQUFXO2dCQUN4QyxPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxFQUFDLENBQUM7U0FDSjs7WUFDSyxhQUFhLEdBQVcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1lBQzlDLFFBQVEsR0FDWixXQUFXLENBQUMsTUFBTSxJQUFJLHdCQUF3QixDQUFDLGFBQWE7WUFDNUQsYUFBYSxDQUFDLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyx5QkFBeUI7WUFDdkUsQ0FBQyxDQUFDLEdBQUc7WUFDTCxDQUFDLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FDTCxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsd0JBQXdCLENBQUMseUJBQXlCLENBQUMsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUNoSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxnREFBYTs7OztJQUFyQjs7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Z0JBQ3BCLEtBQWtCLElBQUEsS0FBQSxTQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUF0QyxJQUFNLEdBQUcsV0FBQTtvQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDMUI7Ozs7Ozs7OztTQUNGO0lBQ0gsQ0FBQzs7OztJQTVNYyx1Q0FBYyxHQUFXLEVBQUUsQ0FBQzs7OztJQUs1QixrREFBeUIsR0FBVyxFQUFFLENBQUM7Ozs7SUFLdkMsc0NBQWEsR0FBVyxDQUFDLENBQUM7O2dCQXJCMUMsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsbUJBQW1CO29CQUU3Qix3dENBQThDO29CQUM5QyxVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7aUJBQ2xDOzs7O2dCQVZtRCxpQkFBaUI7Z0JBQzVELEdBQUcsdUJBeUZrRCxRQUFROzs7NkJBckRuRSxLQUFLLFNBQUMsWUFBWTtzQkFvQmxCLEtBQUssU0FBQyxLQUFLO3VCQWFYLEtBQUssU0FBQyxNQUFNOztJQXNKZiwrQkFBQztDQUFBLEFBeE5ELElBd05DO1NBak5ZLHdCQUF3Qjs7Ozs7OztJQUluQyx3Q0FBMkM7Ozs7OztJQUszQyxtREFBc0Q7Ozs7OztJQUt0RCx1Q0FBeUM7Ozs7O0lBRXpDLHdDQUFxQjs7Ozs7SUFDckIseUNBQW1COzs7OztJQUNuQiw2Q0FBNEI7Ozs7O0lBQzVCLHlDQUErQjs7Ozs7SUFDL0IsK0NBQWdDOzs7OztJQTJEcEIsc0RBQTZDOzs7OztJQUFFLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAndGQtanNvbi1mb3JtYXR0ZXInLFxuICBzdHlsZVVybHM6IFsnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbdGRDb2xsYXBzZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBNYXggbGVuZ3RoIGZvciBwcm9wZXJ0eSBuYW1lcy4gQW55IG5hbWVzIGJpZ2dlciB0aGFuIHRoaXMgZ2V0IHRydW5jdGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBLRVlfTUFYX0xFTkdUSDogbnVtYmVyID0gMzA7XG5cbiAgLyoqXG4gICAqIE1heCBsZW5ndGggZm9yIHByZXZpZXcgc3RyaW5nLiBBbnkgbmFtZXMgYmlnZ2VyIHRoYW4gdGhpcyBnZXQgdHJ1bmN0YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIFBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEg6IG51bWJlciA9IDgwO1xuXG4gIC8qKlxuICAgKiBNYXggdG9vbHRpcCBwcmV2aWV3IGVsZW1lbnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgUFJFVklFV19MSU1JVDogbnVtYmVyID0gNTtcblxuICBwcml2YXRlIF9rZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGF0YTogYW55O1xuICBwcml2YXRlIF9jaGlsZHJlbjogc3RyaW5nW107XG4gIHByaXZhdGUgX29wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGV2ZWxzT3BlbjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogbGV2ZWxzT3Blbj86IG51bWJlclxuICAgKiBMZXZlbHMgb3BlbmVkIGJ5IGRlZmF1bHQgd2hlbiBKUyBvYmplY3QgaXMgZm9ybWF0dGVkIGFuZCByZW5kZXJlZC5cbiAgICovXG4gIEBJbnB1dCgnbGV2ZWxzT3BlbicpXG4gIHNldCBsZXZlbHNPcGVuKGxldmVsc09wZW46IG51bWJlcikge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihsZXZlbHNPcGVuKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbGV2ZWxzT3Blbl0gbmVlZHMgdG8gYmUgYW4gaW50ZWdlci4nKTtcbiAgICB9XG4gICAgdGhpcy5fbGV2ZWxzT3BlbiA9IGxldmVsc09wZW47XG4gICAgdGhpcy5fb3BlbiA9IGxldmVsc09wZW4gPiAwO1xuICB9XG4gIGdldCBsZXZlbHNPcGVuKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsc09wZW47XG4gIH1cblxuICBnZXQgb3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBrZXk/OiBzdHJpbmdcbiAgICogVGFnIHRvIGJlIGRpc3BsYXllZCBuZXh0IHRvIGZvcm1hdHRlZCBvYmplY3QuXG4gICAqL1xuICBASW5wdXQoJ2tleScpXG4gIHNldCBrZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSBrZXk7XG4gIH1cbiAgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVsaXBzaXM6IHN0cmluZyA9IHRoaXMuX2tleSAmJiB0aGlzLl9rZXkubGVuZ3RoID4gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LktFWV9NQVhfTEVOR1RIID8gJ+KApicgOiAnJztcbiAgICByZXR1cm4gdGhpcy5fa2V5ID8gdGhpcy5fa2V5LnN1YnN0cmluZygwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuS0VZX01BWF9MRU5HVEgpICsgZWxpcHNpcyA6IHRoaXMuX2tleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkYXRhOiBhbnlcbiAgICogSlMgb2JqZWN0IHRvIGJlIGZvcm1hdHRlZC5cbiAgICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMucGFyc2VDaGlsZHJlbigpO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgfVxuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXIpIHt9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyBqc29uLWZvcm1hdHRlciBhbmQgcmVyZW5kZXJzIFtkYXRhXVxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGNvbGxhcHNlL2V4cGFuZGVkIHN0YXRlIG9mIGNvbXBvbmVudC5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vcGVuID0gIXRoaXMuX29wZW47XG4gIH1cblxuICBpc09iamVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUeXBlKHRoaXMuX2RhdGEpID09PSAnb2JqZWN0JztcbiAgfVxuXG4gIGlzQXJyYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YSk7XG4gIH1cblxuICBoYXNDaGlsZHJlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4gJiYgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHBhcnNlZCB2YWx1ZSBkZXBlbmRpbmcgb24gdmFsdWUgdHlwZS5cbiAgICovXG4gIGdldFZhbHVlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IHR5cGU6IHN0cmluZyA9IHRoaXMuZ2V0VHlwZSh2YWx1ZSk7XG4gICAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSAnXCInICsgdmFsdWUgKyAnXCInO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gUmVtb3ZlIGNvbnRlbnQgb2YgdGhlIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHJcXG5dL2csICcnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHsuKlxcfS8sICcnKSArICd74oCmfSdcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0TmFtZSgpICsgJyBbJyArIHZhbHVlLmxlbmd0aCArICddJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdHlwZSBvZiBvYmplY3QuXG4gICAqIHJldHVybnMgJ251bGwnIGlmIG9iamVjdCBpcyBudWxsIGFuZCAnZGF0ZScgaWYgdmFsdWUgaXMgb2JqZWN0IGFuZCBjYW4gYmUgcGFyc2VkIHRvIGEgZGF0ZS5cbiAgICovXG4gIGdldFR5cGUob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKG9iamVjdCk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGUpID09PSAnW29iamVjdCBEYXRlXScgJiYgIU51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHN0cmluZyByZXByZXNlbnRhdGlvbiBkZXBlbmRpbmcgaWYgaXRzIGFuIG9iamVjdCBvciBmdW5jdGlvbi5cbiAgICogc2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMzI0MjlcbiAgICovXG4gIGdldE9iamVjdE5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBvYmplY3Q6IGFueSA9IHRoaXMuX2RhdGE7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoKSAmJiAhb2JqZWN0LmNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgfVxuICAgIGNvbnN0IGZ1bmNOYW1lUmVnZXg6IFJlZ0V4cCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcbiAgICBjb25zdCByZXN1bHRzOiBSZWdFeHBFeGVjQXJyYXkgPSBmdW5jTmFtZVJlZ2V4LmV4ZWMob2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpO1xuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHJlc3VsdHNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBwcmV2aWV3IG9mIG5vZGVzIGNoaWxkcmVuIHRvIHJlbmRlciBpbiB0b29sdGlwIGRlcGVuZGluZyBpZiBpdHMgYW4gYXJyYXkgb3IgYW4gb2JqZWN0LlxuICAgKi9cbiAgZ2V0UHJldmlldygpOiBzdHJpbmcge1xuICAgIGxldCBwcmV2aWV3RGF0YTogc3RyaW5nW107XG4gICAgbGV0IHN0YXJ0Q2hhcjogc3RyaW5nID0gJ3sgJztcbiAgICBsZXQgZW5kQ2hhcjogc3RyaW5nID0gJyB9JztcbiAgICBpZiAodGhpcy5pc0FycmF5KCkpIHtcbiAgICAgIGNvbnN0IHByZXZpZXdBcnJheTogYW55W10gPSB0aGlzLl9kYXRhLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0FycmF5Lm1hcCgob2JqOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUob2JqKTtcbiAgICAgIH0pO1xuICAgICAgc3RhcnRDaGFyID0gJ1snO1xuICAgICAgZW5kQ2hhciA9ICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJldmlld0tleXM6IHN0cmluZ1tdID0gdGhpcy5fY2hpbGRyZW4uc2xpY2UoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQpO1xuICAgICAgcHJldmlld0RhdGEgPSBwcmV2aWV3S2V5cy5tYXAoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBrZXkgKyAnOiAnICsgdGhpcy5nZXRWYWx1ZSh0aGlzLl9kYXRhW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHByZXZpZXdTdHJpbmc6IHN0cmluZyA9IHByZXZpZXdEYXRhLmpvaW4oJywgJyk7XG4gICAgY29uc3QgZWxsaXBzaXM6IHN0cmluZyA9XG4gICAgICBwcmV2aWV3RGF0YS5sZW5ndGggPj0gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQgfHxcbiAgICAgIHByZXZpZXdTdHJpbmcubGVuZ3RoID4gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEhcbiAgICAgICAgPyAn4oCmJ1xuICAgICAgICA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICBzdGFydENoYXIgKyBwcmV2aWV3U3RyaW5nLnN1YnN0cmluZygwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSCkgKyBlbGxpcHNpcyArIGVuZENoYXJcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUNoaWxkcmVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT2JqZWN0KCkpIHtcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=