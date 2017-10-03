import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { TdMessageComponent, TdMessageContainerDirective } from './message.component';
var TD_MESSAGE = [
    TdMessageComponent,
    TdMessageContainerDirective,
];
export { TdMessageComponent } from './message.component';
var CovalentMessageModule = (function () {
    function CovalentMessageModule() {
    }
    return CovalentMessageModule;
}());
CovalentMessageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            MatIconModule,
        ],
        declarations: [
            TD_MESSAGE,
        ],
        exports: [
            TD_MESSAGE,
        ],
    })
], CovalentMessageModule);
export { CovalentMessageModule };
//# sourceMappingURL=message.module.js.map