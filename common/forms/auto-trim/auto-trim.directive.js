import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { HostListener, Host, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';
var TdAutoTrimDirective = (function () {
    function TdAutoTrimDirective(_model) {
        this._model = _model;
    }
    /**
     * Listens to host's (blur) event and trims value.
     */
    TdAutoTrimDirective.prototype.onBlur = function (event) {
        if (this._model && this._model.value && typeof (this._model.value) === 'string') {
            this._model.update.emit(this._model.value.trim());
        }
    };
    tslib_1.__decorate([
        HostListener('blur', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TdAutoTrimDirective.prototype, "onBlur", null);
    TdAutoTrimDirective = tslib_1.__decorate([
        Directive({
            selector: '[tdAutoTrim]',
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Host()),
        tslib_1.__metadata("design:paramtypes", [NgModel])
    ], TdAutoTrimDirective);
    return TdAutoTrimDirective;
}());
export { TdAutoTrimDirective };
//# sourceMappingURL=auto-trim.directive.js.map