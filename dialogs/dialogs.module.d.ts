import { ModuleWithProviders } from '@angular/core';
import { TdDialogComponent, TdDialogTitleDirective } from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdDialogService } from './services/dialog.service';
export { IAlertConfig, IConfirmConfig, IPromptConfig } from './services/dialog.service';
export { TdDialogService, TdDialogComponent, TdDialogTitleDirective, TdAlertDialogComponent, TdConfirmDialogComponent, TdPromptDialogComponent };
export declare class CovalentDialogsModule {
    /**
     * @deprecated in 1.0.0-beta.3
     *
     * Please use without calling forRoot()
     */
    static forRoot(): ModuleWithProviders;
}
