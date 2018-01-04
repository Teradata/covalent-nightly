import * as tslib_1 from "tslib";
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
var TdDialogService = (function () {
    function TdDialogService(_dialogService) {
        this._dialogService = _dialogService;
    }
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     */
    TdDialogService.prototype.open = function (component, config) {
        return this._dialogService.open(component, config);
    };
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     */
    TdDialogService.prototype.closeAll = function () {
        this._dialogService.closeAll();
    };
    /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     */
    TdDialogService.prototype.openAlert = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        var alertDialogComponent = dialogRef.componentInstance;
        alertDialogComponent.title = config.title;
        alertDialogComponent.message = config.message;
        if (config.closeButton) {
            alertDialogComponent.closeButton = config.closeButton;
        }
        return dialogRef;
    };
    /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     */
    TdDialogService.prototype.openConfirm = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        var confirmDialogComponent = dialogRef.componentInstance;
        confirmDialogComponent.title = config.title;
        confirmDialogComponent.message = config.message;
        if (config.acceptButton) {
            confirmDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            confirmDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    };
    /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     */
    TdDialogService.prototype.openPrompt = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        var promptDialogComponent = dialogRef.componentInstance;
        promptDialogComponent.title = config.title;
        promptDialogComponent.message = config.message;
        promptDialogComponent.value = config.value;
        if (config.acceptButton) {
            promptDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            promptDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    };
    TdDialogService.prototype._createConfig = function (config) {
        var dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    };
    TdDialogService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [MatDialog])
    ], TdDialogService);
    return TdDialogService;
}());
export { TdDialogService };
export function DIALOG_PROVIDER_FACTORY(parent, dialog) {
    return parent || new TdDialogService(dialog);
}
export var DIALOG_PROVIDER = {
    // If there is already service available, use that. Otherwise, provide a new one.
    provide: TdDialogService,
    deps: [[new Optional(), new SkipSelf(), TdDialogService], MatDialog],
    useFactory: DIALOG_PROVIDER_FACTORY,
};
//# sourceMappingURL=dialog.service.js.map