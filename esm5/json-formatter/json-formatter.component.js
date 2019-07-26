/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            previewData = previewArray.map(function (obj) {
                return _this.getValue(obj);
            });
            startChar = '[';
            endChar = ']';
        }
        else {
            /** @type {?} */
            var previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewKeys.map(function (key) {
                return key + ': ' + _this.getValue(_this._data[key]);
            });
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
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.parseChildren = /**
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
                    template: "<div class=\"td-json-formatter-wrapper\">\n  <a\n    class=\"td-key\"\n    [class.td-key-node]=\"hasChildren()\"\n    [class.td-key-leaf]=\"!hasChildren()\"\n    [tabIndex]=\"isObject() ? 0 : -1\"\n    (keydown.enter)=\"toggle()\"\n    (click)=\"toggle()\"\n  >\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{\n      open ? 'keyboard_arrow_down' : isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right'\n    }}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{ key }}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{ getObjectName() }}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{ data.length }}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{ getValue(data) }}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvanNvbi1mb3JtYXR0ZXIvIiwic291cmNlcyI6WyJqc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUQ7SUFzRkUsa0NBQW9CLGtCQUFxQyxFQUFzQixJQUFTO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBc0IsU0FBSSxHQUFKLElBQUksQ0FBSztRQTVEaEYsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztJQTJEMkQsQ0FBQztJQXJENUYsc0JBQ0ksZ0RBQVU7Ozs7UUFPZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO1FBZEQ7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDZSxVQUFrQjtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksMENBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLHlDQUFHOzs7O1FBR1A7O2dCQUNNLE9BQU8sR0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzRyxDQUFDO1FBWEQ7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDUSxHQUFXO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBVUQsc0JBQ0ksMENBQUk7Ozs7UUFJUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBWEQ7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDUyxJQUFTO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUtELHNCQUFJLDhDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBSzs7OztRQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUlEOztPQUVHOzs7OztJQUNILDBDQUFPOzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHlDQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELDBDQUFPOzs7SUFBUDtRQUNFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCwyQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQVU7O1lBQ2IsSUFBSSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUMzQjthQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM5QixpQ0FBaUM7WUFDakMsT0FBTyxDQUNMLEtBQUs7aUJBQ0YsUUFBUSxFQUFFO2lCQUNWLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO2lCQUN0QixPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FDakMsQ0FBQztTQUNIO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUN6RDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILDBDQUFPOzs7Ozs7SUFBUCxVQUFRLE1BQVc7UUFDakIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxPQUFPLE1BQU0sQ0FBQzthQUNmO1lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QixPQUFPLFFBQVEsQ0FBQzthQUNqQjs7Z0JBQ0csSUFBSSxHQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxlQUFlLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO29CQUNqQyxPQUFPLE1BQU0sQ0FBQztpQkFDZjthQUNGO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdEQUFhOzs7OztJQUFiOztZQUNNLE1BQU0sR0FBUSxJQUFJLENBQUMsS0FBSztRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDMUMsT0FBTyxRQUFRLENBQUM7U0FDakI7O1lBQ0csYUFBYSxHQUFXLG9CQUFvQjs7WUFDNUMsT0FBTyxHQUFvQixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEYsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsNkNBQVU7Ozs7SUFBVjtRQUFBLGlCQTBCQzs7WUF6QkssV0FBcUI7O1lBQ3JCLFNBQVMsR0FBVyxJQUFJOztZQUN4QixPQUFPLEdBQVcsSUFBSTtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTs7Z0JBQ2QsWUFBWSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7WUFDckYsV0FBVyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFRO2dCQUN0QyxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDZjthQUFNOztnQkFDRCxXQUFXLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztZQUMzRixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7Z0JBQ3hDLE9BQU8sR0FBRyxHQUFHLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQztTQUNKOztZQUNHLGFBQWEsR0FBVyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7WUFDOUMsUUFBUSxHQUNWLFdBQVcsQ0FBQyxNQUFNLElBQUksd0JBQXdCLENBQUMsYUFBYTtZQUM1RCxhQUFhLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDLHlCQUF5QjtZQUN2RSxDQUFDLENBQUMsR0FBRztZQUNMLENBQUMsQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUNMLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQ2hILENBQUM7SUFDSixDQUFDOzs7O0lBRU8sZ0RBQWE7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7Ozs7SUE5TWMsdUNBQWMsR0FBVyxFQUFFLENBQUM7Ozs7SUFLNUIsa0RBQXlCLEdBQVcsRUFBRSxDQUFDOzs7O0lBS3ZDLHNDQUFhLEdBQVcsQ0FBQyxDQUFDOztnQkFyQjFDLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLG1CQUFtQjtvQkFFN0Isc3RDQUE4QztvQkFDOUMsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7O2lCQUNsQzs7OztnQkFWbUQsaUJBQWlCO2dCQUM1RCxHQUFHLHVCQXlGa0QsUUFBUTs7OzZCQXJEbkUsS0FBSyxTQUFDLFlBQVk7c0JBb0JsQixLQUFLLFNBQUMsS0FBSzt1QkFhWCxLQUFLLFNBQUMsTUFBTTs7SUF3SmYsK0JBQUM7Q0FBQSxBQTFORCxJQTBOQztTQW5OWSx3QkFBd0I7Ozs7OztJQUluQyx3Q0FBMkM7Ozs7O0lBSzNDLG1EQUFzRDs7Ozs7SUFLdEQsdUNBQXlDOztJQUV6Qyx3Q0FBcUI7O0lBQ3JCLHlDQUFtQjs7SUFDbkIsNkNBQTRCOztJQUM1Qix5Q0FBK0I7O0lBQy9CLCtDQUFnQzs7SUEyRHBCLHNEQUE2Qzs7SUFBRSx3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyB0ZENvbGxhcHNlQW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3RkLWpzb24tZm9ybWF0dGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQge1xuICAvKipcbiAgICogTWF4IGxlbmd0aCBmb3IgcHJvcGVydHkgbmFtZXMuIEFueSBuYW1lcyBiaWdnZXIgdGhhbiB0aGlzIGdldCB0cnVuY3RhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgS0VZX01BWF9MRU5HVEg6IG51bWJlciA9IDMwO1xuXG4gIC8qKlxuICAgKiBNYXggbGVuZ3RoIGZvciBwcmV2aWV3IHN0cmluZy4gQW55IG5hbWVzIGJpZ2dlciB0aGFuIHRoaXMgZ2V0IHRydW5jdGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBQUkVWSUVXX1NUUklOR19NQVhfTEVOR1RIOiBudW1iZXIgPSA4MDtcblxuICAvKipcbiAgICogTWF4IHRvb2x0aXAgcHJldmlldyBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIFBSRVZJRVdfTElNSVQ6IG51bWJlciA9IDU7XG5cbiAgcHJpdmF0ZSBfa2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RhdGE6IGFueTtcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IHN0cmluZ1tdO1xuICBwcml2YXRlIF9vcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xldmVsc09wZW46IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIGxldmVsc09wZW4/OiBudW1iZXJcbiAgICogTGV2ZWxzIG9wZW5lZCBieSBkZWZhdWx0IHdoZW4gSlMgb2JqZWN0IGlzIGZvcm1hdHRlZCBhbmQgcmVuZGVyZWQuXG4gICAqL1xuICBASW5wdXQoJ2xldmVsc09wZW4nKVxuICBzZXQgbGV2ZWxzT3BlbihsZXZlbHNPcGVuOiBudW1iZXIpIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobGV2ZWxzT3BlbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2xldmVsc09wZW5dIG5lZWRzIHRvIGJlIGFuIGludGVnZXIuJyk7XG4gICAgfVxuICAgIHRoaXMuX2xldmVsc09wZW4gPSBsZXZlbHNPcGVuO1xuICAgIHRoaXMuX29wZW4gPSBsZXZlbHNPcGVuID4gMDtcbiAgfVxuICBnZXQgbGV2ZWxzT3BlbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbHNPcGVuO1xuICB9XG5cbiAgZ2V0IG9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICAvKipcbiAgICoga2V5Pzogc3RyaW5nXG4gICAqIFRhZyB0byBiZSBkaXNwbGF5ZWQgbmV4dCB0byBmb3JtYXR0ZWQgb2JqZWN0LlxuICAgKi9cbiAgQElucHV0KCdrZXknKVxuICBzZXQga2V5KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0ga2V5O1xuICB9XG4gIGdldCBrZXkoKTogc3RyaW5nIHtcbiAgICBsZXQgZWxpcHNpczogc3RyaW5nID0gdGhpcy5fa2V5ICYmIHRoaXMuX2tleS5sZW5ndGggPiBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuS0VZX01BWF9MRU5HVEggPyAn4oCmJyA6ICcnO1xuICAgIHJldHVybiB0aGlzLl9rZXkgPyB0aGlzLl9rZXkuc3Vic3RyaW5nKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5LRVlfTUFYX0xFTkdUSCkgKyBlbGlwc2lzIDogdGhpcy5fa2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIGRhdGE6IGFueVxuICAgKiBKUyBvYmplY3QgdG8gYmUgZm9ybWF0dGVkLlxuICAgKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IGRhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5wYXJzZUNoaWxkcmVuKCk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICB9XG5cbiAgZ2V0IGlzUlRMKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9kaXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXIuZGlyID09PSAncnRsJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcikge31cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGpzb24tZm9ybWF0dGVyIGFuZCByZXJlbmRlcnMgW2RhdGFdXG4gICAqL1xuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgY29sbGFwc2UvZXhwYW5kZWQgc3RhdGUgb2YgY29tcG9uZW50LlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuX29wZW4gPSAhdGhpcy5fb3BlbjtcbiAgfVxuXG4gIGlzT2JqZWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFR5cGUodGhpcy5fZGF0YSkgPT09ICdvYmplY3QnO1xuICB9XG5cbiAgaXNBcnJheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIGhhc0NoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbiAmJiB0aGlzLl9jaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgcGFyc2VkIHZhbHVlIGRlcGVuZGluZyBvbiB2YWx1ZSB0eXBlLlxuICAgKi9cbiAgZ2V0VmFsdWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHR5cGU6IHN0cmluZyA9IHRoaXMuZ2V0VHlwZSh2YWx1ZSk7XG4gICAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSAnXCInICsgdmFsdWUgKyAnXCInO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gUmVtb3ZlIGNvbnRlbnQgb2YgdGhlIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHJcXG5dL2csICcnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHsuKlxcfS8sICcnKSArICd74oCmfSdcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0TmFtZSgpICsgJyBbJyArIHZhbHVlLmxlbmd0aCArICddJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdHlwZSBvZiBvYmplY3QuXG4gICAqIHJldHVybnMgJ251bGwnIGlmIG9iamVjdCBpcyBudWxsIGFuZCAnZGF0ZScgaWYgdmFsdWUgaXMgb2JqZWN0IGFuZCBjYW4gYmUgcGFyc2VkIHRvIGEgZGF0ZS5cbiAgICovXG4gIGdldFR5cGUob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgICAgfVxuICAgICAgbGV0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShvYmplY3QpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHN0cmluZyByZXByZXNlbnRhdGlvbiBkZXBlbmRpbmcgaWYgaXRzIGFuIG9iamVjdCBvciBmdW5jdGlvbi5cbiAgICogc2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMzI0MjlcbiAgICovXG4gIGdldE9iamVjdE5hbWUoKTogc3RyaW5nIHtcbiAgICBsZXQgb2JqZWN0OiBhbnkgPSB0aGlzLl9kYXRhO1xuICAgIGlmICh0aGlzLmlzT2JqZWN0KCkgJiYgIW9iamVjdC5jb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgIH1cbiAgICBsZXQgZnVuY05hbWVSZWdleDogUmVnRXhwID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xuICAgIGxldCByZXN1bHRzOiBSZWdFeHBFeGVjQXJyYXkgPSBmdW5jTmFtZVJlZ2V4LmV4ZWMob2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpO1xuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHJlc3VsdHNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBwcmV2aWV3IG9mIG5vZGVzIGNoaWxkcmVuIHRvIHJlbmRlciBpbiB0b29sdGlwIGRlcGVuZGluZyBpZiBpdHMgYW4gYXJyYXkgb3IgYW4gb2JqZWN0LlxuICAgKi9cbiAgZ2V0UHJldmlldygpOiBzdHJpbmcge1xuICAgIGxldCBwcmV2aWV3RGF0YTogc3RyaW5nW107XG4gICAgbGV0IHN0YXJ0Q2hhcjogc3RyaW5nID0gJ3sgJztcbiAgICBsZXQgZW5kQ2hhcjogc3RyaW5nID0gJyB9JztcbiAgICBpZiAodGhpcy5pc0FycmF5KCkpIHtcbiAgICAgIGxldCBwcmV2aWV3QXJyYXk6IGFueVtdID0gdGhpcy5fZGF0YS5zbGljZSgwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19MSU1JVCk7XG4gICAgICBwcmV2aWV3RGF0YSA9IHByZXZpZXdBcnJheS5tYXAoKG9iajogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKG9iaik7XG4gICAgICB9KTtcbiAgICAgIHN0YXJ0Q2hhciA9ICdbJztcbiAgICAgIGVuZENoYXIgPSAnXSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcmV2aWV3S2V5czogc3RyaW5nW10gPSB0aGlzLl9jaGlsZHJlbi5zbGljZSgwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19MSU1JVCk7XG4gICAgICBwcmV2aWV3RGF0YSA9IHByZXZpZXdLZXlzLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGtleSArICc6ICcgKyB0aGlzLmdldFZhbHVlKHRoaXMuX2RhdGFba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHByZXZpZXdTdHJpbmc6IHN0cmluZyA9IHByZXZpZXdEYXRhLmpvaW4oJywgJyk7XG4gICAgbGV0IGVsbGlwc2lzOiBzdHJpbmcgPVxuICAgICAgcHJldmlld0RhdGEubGVuZ3RoID49IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUIHx8XG4gICAgICBwcmV2aWV3U3RyaW5nLmxlbmd0aCA+IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX1NUUklOR19NQVhfTEVOR1RIXG4gICAgICAgID8gJ+KApidcbiAgICAgICAgOiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgc3RhcnRDaGFyICsgcHJldmlld1N0cmluZy5zdWJzdHJpbmcoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEgpICsgZWxsaXBzaXMgKyBlbmRDaGFyXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VDaGlsZHJlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09iamVjdCgpKSB7XG4gICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19