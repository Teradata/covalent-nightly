var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdInputModule, MdButtonModule } from '@angular/material';
import { TdDialogComponent, TdDialogTitleDirective, TdDialogActionsDirective, TdDialogContentDirective } from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdDialogService } from './services/dialog.service';
var TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
var TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
export { TdDialogService, TdDialogComponent, TdDialogTitleDirective, TdAlertDialogComponent, TdConfirmDialogComponent, TdPromptDialogComponent };
var CovalentDialogsModule = CovalentDialogsModule_1 = (function () {
    function CovalentDialogsModule() {
    }
    CovalentDialogsModule.forRoot = function () {
        return {
            ngModule: CovalentDialogsModule_1,
            providers: [TdDialogService],
        };
    };
    return CovalentDialogsModule;
}());
CovalentDialogsModule = CovalentDialogsModule_1 = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            MdDialogModule.forRoot(),
            MdInputModule.forRoot(),
            MdButtonModule.forRoot(),
        ],
        declarations: [
            TD_DIALOGS,
        ],
        exports: [
            TD_DIALOGS,
        ],
        entryComponents: [
            TD_DIALOGS_ENTRY_COMPONENTS,
        ],
    })
], CovalentDialogsModule);
export { CovalentDialogsModule };
var CovalentDialogsModule_1;
//# sourceMappingURL=dialogs.module.js.map