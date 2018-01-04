import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Optional } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { TdCollapseAnimation } from '../common/common.module';
var TdJsonFormatterComponent = (function () {
    function TdJsonFormatterComponent(_changeDetectorRef, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._open = false;
        this._levelsOpen = 0;
    }
    TdJsonFormatterComponent_1 = TdJsonFormatterComponent;
    Object.defineProperty(TdJsonFormatterComponent.prototype, "levelsOpen", {
        get: function () {
            return this._levelsOpen;
        },
        /**
         * levelsOpen?: number
         * Levels opened by default when JS object is formatted and rendered.
         */
        set: function (levelsOpen) {
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
        get: function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
        get: function () {
            var elipsis = this._key && this._key.length > TdJsonFormatterComponent_1.KEY_MAX_LENGTH ? '…' : '';
            return this._key ? this._key.substring(0, TdJsonFormatterComponent_1.KEY_MAX_LENGTH) + elipsis : this._key;
        },
        /**
         * key?: string
         * Tag to be displayed next to formatted object.
         */
        set: function (key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        /**
         * data: any
         * JS object to be formatted.
         */
        set: function (data) {
            this._data = data;
            this.parseChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
        get: function () {
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
    TdJsonFormatterComponent.prototype.refresh = function () {
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Toggles collapse/expanded state of component.
     */
    TdJsonFormatterComponent.prototype.toggle = function () {
        this._open = !this._open;
    };
    TdJsonFormatterComponent.prototype.isObject = function () {
        return this.getType(this._data) === 'object';
    };
    TdJsonFormatterComponent.prototype.isArray = function () {
        return Array.isArray(this._data);
    };
    TdJsonFormatterComponent.prototype.hasChildren = function () {
        return this._children && this._children.length > 0;
    };
    /**
     * Gets parsed value depending on value type.
     */
    TdJsonFormatterComponent.prototype.getValue = function (value) {
        var type = this.getType(value);
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
    };
    /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     */
    TdJsonFormatterComponent.prototype.getType = function (object) {
        if (typeof object === 'object') {
            if (!object) {
                return 'null';
            }
            if (Array.isArray(object)) {
                return 'object';
            }
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
    TdJsonFormatterComponent.prototype.getObjectName = function () {
        var object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((object).constructor.toString());
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
    TdJsonFormatterComponent.prototype.getPreview = function () {
        var _this = this;
        var previewData;
        var startChar = '{ ';
        var endChar = ' }';
        if (this.isArray()) {
            var previewArray = this._data.slice(0, TdJsonFormatterComponent_1.PREVIEW_LIMIT);
            previewData = previewArray.map(function (obj) {
                return _this.getValue(obj);
            });
            startChar = '[';
            endChar = ']';
        }
        else {
            var previewKeys = this._children.slice(0, TdJsonFormatterComponent_1.PREVIEW_LIMIT);
            previewData = previewKeys.map(function (key) {
                return key + ': ' + _this.getValue(_this._data[key]);
            });
        }
        var previewString = previewData.join(', ');
        var ellipsis = previewData.length >= TdJsonFormatterComponent_1.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent_1.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
        return startChar + previewString.substring(0, TdJsonFormatterComponent_1.PREVIEW_STRING_MAX_LENGTH) +
            ellipsis + endChar;
    };
    TdJsonFormatterComponent.prototype.parseChildren = function () {
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
    tslib_1.__decorate([
        Input('levelsOpen'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdJsonFormatterComponent.prototype, "levelsOpen", null);
    tslib_1.__decorate([
        Input('key'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TdJsonFormatterComponent.prototype, "key", null);
    tslib_1.__decorate([
        Input('data'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TdJsonFormatterComponent.prototype, "data", null);
    TdJsonFormatterComponent = TdJsonFormatterComponent_1 = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'td-json-formatter',
            styles: [":host { display: block; } .td-json-formatter-wrapper { padding-top: 2px; padding-bottom: 2px; } .td-json-formatter-wrapper .td-key { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; } .td-json-formatter-wrapper .td-key.td-key-node:hover { cursor: pointer; } .td-json-formatter-wrapper .td-object-children.ng-animating { overflow: hidden; } .td-json-formatter-wrapper .td-object-children .td-key, .td-json-formatter-wrapper .td-object-children .td-object-children { padding-left: 24px; } ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-key, ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-object-children { padding-right: 24px; padding-left: 0; } .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf, .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf { padding-left: 48px; } ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf, ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf { padding-right: 48px; padding-left: 0; } .td-json-formatter-wrapper .value { margin-left: 5px; } ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .value { padding-right: 5px; padding-left: 0; } .td-json-formatter-wrapper .value .td-empty { opacity: 0.5; text-decoration: line-through; } .td-json-formatter-wrapper .value .string { word-break: break-word; } .td-json-formatter-wrapper .value .date { word-break: break-word; } /*# sourceMappingURL=json-formatter.component.css.map */ "],
            template: "<div class=\"td-json-formatter-wrapper\"> <a class=\"td-key\" [class.td-key-node]=\"hasChildren()\" [class.td-key-leaf]=\"!hasChildren()\" [tabIndex]=\"isObject()? 0 : -1\" (keydown.enter)=\"toggle()\" (click)=\"toggle()\"> <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon> <span *ngIf=\"key\" class=\"key\">{{key}}:</span> <span class=\"value\"> <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\"> <span class=\"td-object-name\">{{getObjectName()}}</span> <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{data.length}}]</span> </span> <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span> </span> </a> <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\"> <ng-template let-key ngFor [ngForOf]=\"children\"> <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter> </ng-template> </div> </div>",
            animations: [
                TdCollapseAnimation(),
            ],
        }),
        tslib_1.__param(1, Optional()),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef,
            Dir])
    ], TdJsonFormatterComponent);
    return TdJsonFormatterComponent;
    var TdJsonFormatterComponent_1;
}());
export { TdJsonFormatterComponent };
//# sourceMappingURL=json-formatter.component.js.map