/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { DragDrop } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
/**
 * @record
 */
export function IDialogConfig() { }
if (false) {
    /** @type {?|undefined} */
    IDialogConfig.prototype.title;
    /** @type {?} */
    IDialogConfig.prototype.message;
}
/**
 * @record
 */
export function IAlertConfig() { }
if (false) {
    /** @type {?|undefined} */
    IAlertConfig.prototype.closeButton;
}
/**
 * @record
 */
export function IConfirmConfig() { }
if (false) {
    /** @type {?|undefined} */
    IConfirmConfig.prototype.acceptButton;
    /** @type {?|undefined} */
    IConfirmConfig.prototype.cancelButton;
}
/**
 * @record
 */
export function IPromptConfig() { }
if (false) {
    /** @type {?|undefined} */
    IPromptConfig.prototype.value;
}
var TdDialogService = /** @class */ (function () {
    function TdDialogService(_document, _dialogService, _dragDrop) {
        this._document = _document;
        this._dialogService = _dialogService;
        this._dragDrop = _dragDrop;
    }
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     */
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    TdDialogService.prototype.open = /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    function (component, config) {
        return this._dialogService.open(component, config);
    };
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     */
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    TdDialogService.prototype.closeAll = /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    function () {
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
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openAlert = /**
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
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        /** @type {?} */
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
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openConfirm = /**
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
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        /** @type {?} */
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
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openPrompt = /**
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
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        /** @type {?} */
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
    /**
     * Opens a draggable dialog containing the given component.
     */
    /**
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @param {?=} dragHandleSelectors
     * @return {?}
     */
    TdDialogService.prototype.openDraggable = /**
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @param {?=} dragHandleSelectors
     * @return {?}
     */
    function (component, config, dragHandleSelectors) {
        var _this = this;
        /** @type {?} */
        var dialogRef = this._dialogService.open(component, config);
        /** @type {?} */
        var CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
        /** @type {?} */
        var CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
        dialogRef.afterOpened().subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var dialogElement = (/** @type {?} */ (_this._document.getElementById(dialogRef.id)));
            /** @type {?} */
            var draggableElement = _this._dragDrop.createDrag(dialogElement);
            if (dragHandleSelectors && dragHandleSelectors.length) {
                /** @type {?} */
                var dragHandles = dragHandleSelectors.reduce((/**
                 * @param {?} acc
                 * @param {?} curr
                 * @return {?}
                 */
                function (acc, curr) { return tslib_1.__spread(acc, Array.from(dialogElement.querySelectorAll(curr))); }), []);
                if (dragHandles.length > 0) {
                    draggableElement.withHandles((/** @type {?} */ (dragHandles)));
                }
            }
            /** @type {?} */
            var rootElement = dialogElement.closest(CDK_OVERLAY_PANE_SELECTOR);
            if (rootElement) {
                draggableElement.withRootElement((/** @type {?} */ (rootElement)));
            }
            /** @type {?} */
            var boundaryElement = dialogElement.closest(CDK_OVERLAY_CONTAINER_SELECTOR);
            if (boundaryElement) {
                draggableElement.withBoundaryElement((/** @type {?} */ (boundaryElement)));
            }
        }));
        return dialogRef;
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype._createConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    };
    TdDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdDialogService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: MatDialog },
        { type: DragDrop }
    ]; };
    return TdDialogService;
}());
export { TdDialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._dialogService;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._dragDrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3Mvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFrRCxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFFBQVEsRUFBVyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUUzQyxtQ0FHQzs7O0lBRkMsOEJBQWU7O0lBQ2YsZ0NBQWdCOzs7OztBQUdsQixrQ0FFQzs7O0lBREMsbUNBQXFCOzs7OztBQUd2QixvQ0FHQzs7O0lBRkMsc0NBQXNCOztJQUN0QixzQ0FBc0I7Ozs7O0FBR3hCLG1DQUVDOzs7SUFEQyw4QkFBZTs7QUFHakI7SUFFRSx5QkFDNEIsU0FBYyxFQUNoQyxjQUF5QixFQUN6QixTQUFtQjtRQUZELGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQVc7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBVTtJQUMxQixDQUFDO0lBRUo7Ozs7OztPQU1HOzs7Ozs7Ozs7Ozs7SUFDSSw4QkFBSTs7Ozs7Ozs7Ozs7SUFBWCxVQUFlLFNBQTJCLEVBQUUsTUFBd0I7UUFDbEUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7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dUNBQWE7Ozs7O0lBQXJCLFVBQXNCLE1BQXFCOztZQUNyQyxZQUFZLEdBQW9CLElBQUksZUFBZSxFQUFFO1FBQ3pELFlBQVksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2dCQW5LRixVQUFVOzs7O2dEQUdOLE1BQU0sU0FBQyxRQUFRO2dCQTlCWCxTQUFTO2dCQU1ULFFBQVE7O0lBeUxqQixzQkFBQztDQUFBLEFBcEtELElBb0tDO1NBbktZLGVBQWU7Ozs7OztJQUV4QixvQ0FBd0M7Ozs7O0lBQ3hDLHlDQUFpQzs7Ozs7SUFDakMsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvbXBvbmVudFR5cGUsIFRlbXBsYXRlUG9ydGFsLCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Byb21wdC1kaWFsb2cvcHJvbXB0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ0Ryb3AsIERyYWdSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nQ29uZmlnIGV4dGVuZHMgTWF0RGlhbG9nQ29uZmlnIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRDb25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1Db25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wdENvbmZpZyBleHRlbmRzIElDb25maXJtQ29uZmlnIHtcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX2RpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9kcmFnRHJvcDogRHJhZ0Ryb3AsXG4gICkge31cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPlxuICAgKiAtIGNvbmZpZzogTWF0RGlhbG9nQ29uZmlnXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgb3BlbigpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIE9wZW5zIGEgbW9kYWwgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBvcGVuPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKGNvbXBvbmVudCwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIGNsb3NlQWxsKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9ncy5cbiAgICovXG4gIHB1YmxpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLmNsb3NlQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUFsZXJ0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhbiBhbGVydCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkFsZXJ0KGNvbmZpZzogSUFsZXJ0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgbGV0IGFsZXJ0RGlhbG9nQ29tcG9uZW50OiBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmNsb3NlQnV0dG9uKSB7XG4gICAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5jbG9zZUJ1dHRvbiA9IGNvbmZpZy5jbG9zZUJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQ29uZmlybUNvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgY29uZmlybSBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuQ29uZmlybShjb25maWc6IElDb25maXJtQ29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGxldCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGxldCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgbGV0IGNvbmZpcm1EaWFsb2dDb21wb25lbnQ6IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIGlmIChjb25maWcuYWNjZXB0QnV0dG9uKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRCdXR0b247XG4gICAgfVxuICAgIGlmIChjb25maWcuY2FuY2VsQnV0dG9uKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSVByb21wdENvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZhbHVlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYSBwcm9tcHQgZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuUHJvbXB0KGNvbmZpZzogSVByb21wdENvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGxldCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGxldCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZFByb21wdERpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGxldCBwcm9tcHREaWFsb2dDb21wb25lbnQ6IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC52YWx1ZSA9IGNvbmZpZy52YWx1ZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRCdXR0b247XG4gICAgfVxuICAgIGlmIChjb25maWcuY2FuY2VsQnV0dG9uKSB7XG4gICAgICBwcm9tcHREaWFsb2dDb21wb25lbnQuY2FuY2VsQnV0dG9uID0gY29uZmlnLmNhbmNlbEJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIGRyYWdnYWJsZSBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIG9wZW5EcmFnZ2FibGU8VD4oXG4gICAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LFxuICAgIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZyxcbiAgICBkcmFnSGFuZGxlU2VsZWN0b3JzPzogc3RyaW5nW10sXG4gICk6IE1hdERpYWxvZ1JlZjxUPiB7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VCwgYW55PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3Blbihjb21wb25lbnQsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBDREtfT1ZFUkxBWV9QQU5FX1NFTEVDVE9SOiBzdHJpbmcgPSAnLmNkay1vdmVybGF5LXBhbmUnO1xuICAgIGNvbnN0IENES19PVkVSTEFZX0NPTlRBSU5FUl9TRUxFQ1RPUjogc3RyaW5nID0gJy5jZGstb3ZlcmxheS1jb250YWluZXInO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpYWxvZ0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpYWxvZ1JlZi5pZCk7XG4gICAgICBjb25zdCBkcmFnZ2FibGVFbGVtZW50OiBEcmFnUmVmID0gdGhpcy5fZHJhZ0Ryb3AuY3JlYXRlRHJhZyhkaWFsb2dFbGVtZW50KTtcblxuICAgICAgaWYgKGRyYWdIYW5kbGVTZWxlY3RvcnMgJiYgZHJhZ0hhbmRsZVNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZHJhZ0hhbmRsZXM6IEVsZW1lbnRbXSA9IGRyYWdIYW5kbGVTZWxlY3RvcnMucmVkdWNlKFxuICAgICAgICAgIChhY2M6IEVsZW1lbnRbXSwgY3Vycjogc3RyaW5nKSA9PiBbLi4uYWNjLCAuLi5BcnJheS5mcm9tKGRpYWxvZ0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChjdXJyKSldLFxuICAgICAgICAgIFtdLFxuICAgICAgICApO1xuICAgICAgICBpZiAoZHJhZ0hhbmRsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aEhhbmRsZXMoPEhUTUxFbGVtZW50W10+ZHJhZ0hhbmRsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvb3RFbGVtZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5jbG9zZXN0KENES19PVkVSTEFZX1BBTkVfU0VMRUNUT1IpO1xuICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aFJvb3RFbGVtZW50KDxIVE1MRWxlbWVudD5yb290RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBjb25zdCBib3VuZGFyeUVsZW1lbnQ6IEVsZW1lbnQgPSBkaWFsb2dFbGVtZW50LmNsb3Nlc3QoQ0RLX09WRVJMQVlfQ09OVEFJTkVSX1NFTEVDVE9SKTtcbiAgICAgIGlmIChib3VuZGFyeUVsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoQm91bmRhcnlFbGVtZW50KDxIVE1MRWxlbWVudD5ib3VuZGFyeUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNvbmZpZyhjb25maWc6IElEaWFsb2dDb25maWcpOiBNYXREaWFsb2dDb25maWcge1xuICAgIGxldCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICBkaWFsb2dDb25maWcud2lkdGggPSAnNDAwcHgnO1xuICAgIE9iamVjdC5hc3NpZ24oZGlhbG9nQ29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiBkaWFsb2dDb25maWc7XG4gIH1cbn1cbiJdfQ==