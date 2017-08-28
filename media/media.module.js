import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdMediaService, MEDIA_PROVIDER } from './services/media.service';
import { TdMediaToggleDirective } from './directives/media-toggle.directive';
var TD_MEDIA = [
    TdMediaToggleDirective,
];
export { TdMediaService, TdMediaToggleDirective };
var CovalentMediaModule = (function () {
    function CovalentMediaModule() {
    }
    CovalentMediaModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                TD_MEDIA,
            ],
            exports: [
                TD_MEDIA,
            ],
            providers: [
                MEDIA_PROVIDER,
            ],
        })
    ], CovalentMediaModule);
    return CovalentMediaModule;
}());
export { CovalentMediaModule };
//# sourceMappingURL=media.module.js.map