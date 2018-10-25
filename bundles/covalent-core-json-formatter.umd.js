(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/bidi'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/tooltip'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/json-formatter', ['exports', '@angular/core', '@angular/cdk/bidi', '@covalent/core/common', '@angular/common', '@angular/material/tooltip', '@angular/material/icon'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['json-formatter'] = {}),global.ng.core,global.ng.cdk.bidi,global.covalent.core.common,global.ng.common,global.ng.material.tooltip,global.ng.material.icon));
}(this, (function (exports,core,bidi,common,common$1,tooltip,icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
             */ function () {
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
             */ function (levelsOpen) {
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
             */ function () {
                return this._open;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (key) {
                this._key = key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (data) {
                this._data = data;
                this.parseChildren();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
            get: /**
             * @return {?}
             */ function () {
                return this._children;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
            get: /**
             * @return {?}
             */ function () {
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
                    previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
                return startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) +
                    ellipsis + endChar;
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
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'td-json-formatter',
                        template: "<div class=\"td-json-formatter-wrapper\">\n  <a class=\"td-key\"\n     [class.td-key-node]=\"hasChildren()\"\n     [class.td-key-leaf]=\"!hasChildren()\"\n     [tabIndex]=\"isObject()? 0 : -1\"\n     (keydown.enter)=\"toggle()\"\n     (click)=\"toggle()\">\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{key}}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{getObjectName()}}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{data.length}}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>",
                        animations: [
                            common.tdCollapseAnimation,
                        ],
                        styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdJsonFormatterComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: bidi.Dir, decorators: [{ type: core.Optional }] }
            ];
        };
        TdJsonFormatterComponent.propDecorators = {
            levelsOpen: [{ type: core.Input, args: ['levelsOpen',] }],
            key: [{ type: core.Input, args: ['key',] }],
            data: [{ type: core.Input, args: ['data',] }]
        };
        return TdJsonFormatterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentJsonFormatterModule = /** @class */ (function () {
        function CovalentJsonFormatterModule() {
        }
        CovalentJsonFormatterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common$1.CommonModule,
                            tooltip.MatTooltipModule,
                            icon.MatIconModule,
                        ],
                        declarations: [
                            TdJsonFormatterComponent,
                        ],
                        exports: [
                            TdJsonFormatterComponent,
                        ],
                    },] }
        ];
        return CovalentJsonFormatterModule;
    }());

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

    exports.CovalentJsonFormatterModule = CovalentJsonFormatterModule;
    exports.TdJsonFormatterComponent = TdJsonFormatterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1qc29uLWZvcm1hdHRlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL2pzb24tZm9ybWF0dGVyL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvanNvbi1mb3JtYXR0ZXIvanNvbi1mb3JtYXR0ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAndGQtanNvbi1mb3JtYXR0ZXInLFxuICBzdHlsZVVybHM6IFsnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRkQ29sbGFwc2VBbmltYXRpb24sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIE1heCBsZW5ndGggZm9yIHByb3BlcnR5IG5hbWVzLiBBbnkgbmFtZXMgYmlnZ2VyIHRoYW4gdGhpcyBnZXQgdHJ1bmN0YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIEtFWV9NQVhfTEVOR1RIOiBudW1iZXIgPSAzMDtcblxuICAvKipcbiAgICogTWF4IGxlbmd0aCBmb3IgcHJldmlldyBzdHJpbmcuIEFueSBuYW1lcyBiaWdnZXIgdGhhbiB0aGlzIGdldCB0cnVuY3RhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSDogbnVtYmVyID0gODA7XG5cbiAgLyoqXG4gICAqIE1heCB0b29sdGlwIHByZXZpZXcgZWxlbWVudHMuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBQUkVWSUVXX0xJTUlUOiBudW1iZXIgPSA1O1xuXG4gIHByaXZhdGUgX2tleTogc3RyaW5nO1xuICBwcml2YXRlIF9kYXRhOiBhbnk7XG4gIHByaXZhdGUgX2NoaWxkcmVuOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sZXZlbHNPcGVuOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBsZXZlbHNPcGVuPzogbnVtYmVyXG4gICAqIExldmVscyBvcGVuZWQgYnkgZGVmYXVsdCB3aGVuIEpTIG9iamVjdCBpcyBmb3JtYXR0ZWQgYW5kIHJlbmRlcmVkLlxuICAgKi9cbiAgQElucHV0KCdsZXZlbHNPcGVuJylcbiAgc2V0IGxldmVsc09wZW4obGV2ZWxzT3BlbjogbnVtYmVyKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGxldmVsc09wZW4pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tsZXZlbHNPcGVuXSBuZWVkcyB0byBiZSBhbiBpbnRlZ2VyLicpO1xuICAgIH1cbiAgICB0aGlzLl9sZXZlbHNPcGVuID0gbGV2ZWxzT3BlbjtcbiAgICB0aGlzLl9vcGVuID0gbGV2ZWxzT3BlbiA+IDA7XG4gIH1cbiAgZ2V0IGxldmVsc09wZW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWxzT3BlbjtcbiAgfVxuXG4gIGdldCBvcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIGtleT86IHN0cmluZ1xuICAgKiBUYWcgdG8gYmUgZGlzcGxheWVkIG5leHQgdG8gZm9ybWF0dGVkIG9iamVjdC5cbiAgICovXG4gIEBJbnB1dCgna2V5JylcbiAgc2V0IGtleShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IGtleTtcbiAgfVxuICBnZXQga2V5KCk6IHN0cmluZyB7XG4gICAgbGV0IGVsaXBzaXM6IHN0cmluZyA9IHRoaXMuX2tleSAmJiB0aGlzLl9rZXkubGVuZ3RoID4gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LktFWV9NQVhfTEVOR1RIID8gJ8OiwoDCpicgOiAnJztcbiAgICByZXR1cm4gdGhpcy5fa2V5ID8gdGhpcy5fa2V5LnN1YnN0cmluZygwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuS0VZX01BWF9MRU5HVEgpICsgZWxpcHNpcyA6IHRoaXMuX2tleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkYXRhOiBhbnlcbiAgICogSlMgb2JqZWN0IHRvIGJlIGZvcm1hdHRlZC5cbiAgICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMucGFyc2VDaGlsZHJlbigpO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgfVxuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXIpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMganNvbi1mb3JtYXR0ZXIgYW5kIHJlcmVuZGVycyBbZGF0YV1cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBjb2xsYXBzZS9leHBhbmRlZCBzdGF0ZSBvZiBjb21wb25lbnQuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5fb3BlbiA9ICF0aGlzLl9vcGVuO1xuICB9XG5cbiAgaXNPYmplY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHlwZSh0aGlzLl9kYXRhKSA9PT0gJ29iamVjdCc7XG4gIH1cblxuICBpc0FycmF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgaGFzQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuICYmIHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBwYXJzZWQgdmFsdWUgZGVwZW5kaW5nIG9uIHZhbHVlIHR5cGUuXG4gICAqL1xuICBnZXRWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gdGhpcy5nZXRUeXBlKHZhbHVlKTtcbiAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgKHR5cGUgPT09ICdudWxsJykpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKS50b1N0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gJ1wiJyArIHZhbHVlICsgJ1wiJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFJlbW92ZSBjb250ZW50IG9mIHRoZSBmdW5jdGlvblxuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgICAucmVwbGFjZSgvW1xcclxcbl0vZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcey4qXFx9LywgJycpICsgJ3vDosKAwqZ9JztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3ROYW1lKCkgKyAnIFsnICsgdmFsdWUubGVuZ3RoICsgJ10nO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0eXBlIG9mIG9iamVjdC5cbiAgICogcmV0dXJucyAnbnVsbCcgaWYgb2JqZWN0IGlzIG51bGwgYW5kICdkYXRlJyBpZiB2YWx1ZSBpcyBvYmplY3QgYW5kIGNhbiBiZSBwYXJzZWQgdG8gYSBkYXRlLlxuICAgKi9cbiAgZ2V0VHlwZShvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgICB9XG4gICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKG9iamVjdCk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGUpID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGRlcGVuZGluZyBpZiBpdHMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uLlxuICAgKiBzZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzMjQyOVxuICAgKi9cbiAgZ2V0T2JqZWN0TmFtZSgpOiBzdHJpbmcge1xuICAgIGxldCBvYmplY3Q6IGFueSA9IHRoaXMuX2RhdGE7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoKSAmJiAhb2JqZWN0LmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICB9XG4gICAgbGV0IGZ1bmNOYW1lUmVnZXg6IFJlZ0V4cCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcbiAgICBsZXQgcmVzdWx0czogUmVnRXhwRXhlY0FycmF5ID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoKG9iamVjdCkuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gcmVzdWx0c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHByZXZpZXcgb2Ygbm9kZXMgY2hpbGRyZW4gdG8gcmVuZGVyIGluIHRvb2x0aXAgZGVwZW5kaW5nIGlmIGl0cyBhbiBhcnJheSBvciBhbiBvYmplY3QuXG4gICAqL1xuICBnZXRQcmV2aWV3KCk6IHN0cmluZyB7XG4gICAgbGV0IHByZXZpZXdEYXRhOiBzdHJpbmdbXTtcbiAgICBsZXQgc3RhcnRDaGFyOiBzdHJpbmcgPSAneyAnO1xuICAgIGxldCBlbmRDaGFyOiBzdHJpbmcgPSAnIH0nO1xuICAgIGlmICh0aGlzLmlzQXJyYXkoKSkge1xuICAgICAgbGV0IHByZXZpZXdBcnJheTogYW55W10gPSB0aGlzLl9kYXRhLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0FycmF5Lm1hcCgob2JqOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUob2JqKTtcbiAgICAgIH0pO1xuICAgICAgc3RhcnRDaGFyID0gJ1snO1xuICAgICAgZW5kQ2hhciA9ICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByZXZpZXdLZXlzOiBzdHJpbmdbXSA9IHRoaXMuX2NoaWxkcmVuLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0tleXMubWFwKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4ga2V5ICsgJzogJyArIHRoaXMuZ2V0VmFsdWUodGhpcy5fZGF0YVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcHJldmlld1N0cmluZzogc3RyaW5nID0gIHByZXZpZXdEYXRhLmpvaW4oJywgJyk7XG4gICAgbGV0IGVsbGlwc2lzOiBzdHJpbmcgPSBwcmV2aWV3RGF0YS5sZW5ndGggPj0gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdTdHJpbmcubGVuZ3RoID4gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEggPyAnw6LCgMKmJyA6ICcnO1xuICAgIHJldHVybiBzdGFydENoYXIgKyBwcmV2aWV3U3RyaW5nLnN1YnN0cmluZygwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSCkgK1xuICAgICAgICAgICBlbGxpcHNpcyArIGVuZENoYXI7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoKSkge1xuICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9kYXRhKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEpzb25Gb3JtYXR0ZXJNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJ0ZENvbGxhcHNlQW5pbWF0aW9uIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJEaXIiLCJPcHRpb25hbCIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRUb29sdGlwTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBNkZFLGtDQUFvQixrQkFBcUMsRUFDekIsSUFBUztZ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