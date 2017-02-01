import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, ComponentType } from '@angular/material';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
export interface IDialogConfig {
    title?: string;
    message: string;
    viewContainerRef?: ViewContainerRef;
    disableClose?: boolean;
}
export interface IAlertConfig extends IDialogConfig {
    closeButton?: string;
}
export interface IConfirmConfig extends IDialogConfig {
    acceptButton?: string;
    cancelButton?: string;
}
export interface IPromptConfig extends IConfirmConfig {
    value?: string;
}
export declare class TdDialogService {
    private _dialogService;
    constructor(_dialogService: MdDialog);
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MdDialogConfig
     * Wrapper function over the open() method in MdDialog.
     * Opens a modal dialog containing the given component.
     */
    open<T>(component: ComponentType<T>, config?: MdDialogConfig): MdDialogRef<T>;
    /**
     * Wrapper function over the closeAll() method in MdDialog.
     * Closes all of the currently-open dialogs.
     */
    closeAll(): void;
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
     * Returns an MdDialogRef<TdAlertDialogComponent> object.
     */
    openAlert(config: IAlertConfig): MdDialogRef<TdAlertDialogComponent>;
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
     * Returns an MdDialogRef<TdConfirmDialogComponent> object.
     */
    openConfirm(config: IConfirmConfig): MdDialogRef<TdConfirmDialogComponent>;
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
     * Returns an MdDialogRef<TdPromptDialogComponent> object.
     */
    openPrompt(config: IPromptConfig): MdDialogRef<TdPromptDialogComponent>;
    private _createConfig(config);
}
