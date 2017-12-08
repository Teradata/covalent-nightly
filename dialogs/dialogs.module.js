import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TdDialogComponent, TdDialogTitleDirective, TdDialogActionsDirective, TdDialogContentDirective } from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdDialogService, DIALOG_PROVIDER } from './services/dialog.service';
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
var CovalentDialogsModule = (function () {
    function CovalentDialogsModule() {
    }
    CovalentDialogsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule,
                CommonModule,
                MatDialogModule,
                MatInputModule,
                MatButtonModule,
            ],
            declarations: [
                TD_DIALOGS,
            ],
            exports: [
                TD_DIALOGS,
            ],
            providers: [
                DIALOG_PROVIDER,
            ],
            entryComponents: [
                TD_DIALOGS_ENTRY_COMPONENTS,
            ],
        })
    ], CovalentDialogsModule);
    return CovalentDialogsModule;
}());
export { CovalentDialogsModule };
//# sourceMappingURL=dialogs.module.js.map