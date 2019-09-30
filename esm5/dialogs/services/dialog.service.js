/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, RendererFactory2, } from '@angular/core';
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
/**
 * @record
 * @template T
 */
export function IDraggableConfig() { }
if (false) {
    /** @type {?} */
    IDraggableConfig.prototype.component;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.config;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.dragHandleSelectors;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.draggableClass;
}
var TdDialogService = /** @class */ (function () {
    function TdDialogService(_document, _dialogService, _dragDrop, rendererFactory) {
        this._document = _document;
        this._dialogService = _dialogService;
        this._dragDrop = _dragDrop;
        this.rendererFactory = rendererFactory;
        this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
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
     * @param {?} __0
     * @return {?}
     */
    TdDialogService.prototype.openDraggable = /**
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var component = _a.component, config = _a.config, dragHandleSelectors = _a.dragHandleSelectors, draggableClass = _a.draggableClass;
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
            if (draggableClass) {
                /** @type {?} */
                var childComponent = dialogElement.firstElementChild;
                _this._renderer2.addClass(childComponent, draggableClass);
            }
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
        { type: DragDrop },
        { type: RendererFactory2 }
    ]; };
    return TdDialogService;
}());
export { TdDialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._renderer2;
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
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype.rendererFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3Mvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUtWLE1BQU0sRUFFTixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFFBQVEsRUFBVyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUUzQyxtQ0FHQzs7O0lBRkMsOEJBQWU7O0lBQ2YsZ0NBQWdCOzs7OztBQUdsQixrQ0FFQzs7O0lBREMsbUNBQXFCOzs7OztBQUd2QixvQ0FHQzs7O0lBRkMsc0NBQXNCOztJQUN0QixzQ0FBc0I7Ozs7O0FBR3hCLG1DQUVDOzs7SUFEQyw4QkFBZTs7Ozs7O0FBR2pCLHNDQU9DOzs7SUFOQyxxQ0FBNEI7O0lBQzVCLGtDQUF5Qjs7SUFFekIsK0NBQStCOztJQUUvQiwwQ0FBd0I7O0FBRzFCO0lBSUUseUJBQzRCLFNBQWMsRUFDaEMsY0FBeUIsRUFDekIsU0FBbUIsRUFDbkIsZUFBaUM7UUFIZixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFXO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBRXpDLElBQUksQ0FBQyxVQUFVLEdBQUcs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QkFDMUQ7YUFDRjs7Z0JBRUssV0FBVyxHQUFZLGFBQWEsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUM7WUFDN0UsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLG1CQUFhLFdBQVcsRUFBQSxDQUFDLENBQUM7YUFDNUQ7O2dCQUNLLGVBQWUsR0FBWSxhQUFhLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQ3RGLElBQUksZUFBZSxFQUFFO2dCQUNuQixnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBYSxlQUFlLEVBQUEsQ0FBQyxDQUFDO2FBQ3BFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTyx1Q0FBYTs7Ozs7SUFBckIsVUFBc0IsTUFBcUI7O1lBQ3JDLFlBQVksR0FBb0IsSUFBSSxlQUFlLEVBQUU7UUFDekQsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Z0JBOUtGLFVBQVU7Ozs7Z0RBS04sTUFBTSxTQUFDLFFBQVE7Z0JBekNYLFNBQVM7Z0JBTVQsUUFBUTtnQkFSZixnQkFBZ0I7O0lBcU5sQixzQkFBQztDQUFBLEFBL0tELElBK0tDO1NBOUtZLGVBQWU7Ozs7OztJQUMxQixxQ0FBOEI7Ozs7O0lBRzVCLG9DQUF3Qzs7Ozs7SUFDeEMseUNBQWlDOzs7OztJQUNqQyxvQ0FBMkI7Ozs7O0lBQzNCLDBDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFByb3ZpZGVyLFxuICBTa2lwU2VsZixcbiAgT3B0aW9uYWwsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSwgVGVtcGxhdGVQb3J0YWwsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmFnRHJvcCwgRHJhZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dDb25maWcgZXh0ZW5kcyBNYXREaWFsb2dDb25maWcge1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydENvbmZpZyBleHRlbmRzIElEaWFsb2dDb25maWcge1xuICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlybUNvbmZpZyBleHRlbmRzIElEaWFsb2dDb25maWcge1xuICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvbXB0Q29uZmlnIGV4dGVuZHMgSUNvbmZpcm1Db25maWcge1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ2dhYmxlQ29uZmlnPFQ+IHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+O1xuICBjb25maWc/OiBNYXREaWFsb2dDb25maWc7XG4gIC8vIENTUyBzZWxlY3RvcnMgb2YgZWxlbWVudChzKSBpbnNpZGUgdGhlIGNvbXBvbmVudCBtZWFudCB0byBiZSBkcmFnIGhhbmRsZShzKVxuICBkcmFnSGFuZGxlU2VsZWN0b3JzPzogc3RyaW5nW107XG4gIC8vIENsYXNzIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgY29tcG9uZW50IHNpZ25pZnlpbmcgZHJhZy1hYmlsaXR5XG4gIGRyYWdnYWJsZUNsYXNzPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGREaWFsb2dTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcmVuZGVyZXIyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9kaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBfZHJhZ0Ryb3A6IERyYWdEcm9wLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlcjIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD5cbiAgICogLSBjb25maWc6IE1hdERpYWxvZ0NvbmZpZ1xuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIG9wZW4oKSBtZXRob2QgaW4gTWF0RGlhbG9nLlxuICAgKiBPcGVucyBhIG1vZGFsIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgb3BlbjxUPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ1JlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3Blbihjb21wb25lbnQsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmdW5jdGlvbiBvdmVyIHRoZSBjbG9zZUFsbCgpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIENsb3NlcyBhbGwgb2YgdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3MuXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nU2VydmljZS5jbG9zZUFsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElBbGVydENvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYW4gYWxlcnQgZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5BbGVydChjb25maWc6IElBbGVydENvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgbGV0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRBbGVydERpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGxldCBhbGVydERpYWxvZ0NvbXBvbmVudDogVGRBbGVydERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBhbGVydERpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaWYgKGNvbmZpZy5jbG9zZUJ1dHRvbikge1xuICAgICAgYWxlcnREaWFsb2dDb21wb25lbnQuY2xvc2VCdXR0b24gPSBjb25maWcuY2xvc2VCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUNvbmZpcm1Db25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgICogICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIGNvbmZpcm0gZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkNvbmZpcm0oY29uZmlnOiBJQ29uZmlybUNvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGxldCBjb25maXJtRGlhbG9nQ29tcG9uZW50OiBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElQcm9tcHRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2YWx1ZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgcHJvbXB0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlblByb21wdChjb25maWc6IElQcm9tcHRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG4gICAgICBkaWFsb2dDb25maWcsXG4gICAgKTtcbiAgICBsZXQgcHJvbXB0RGlhbG9nQ29tcG9uZW50OiBUZFByb21wdERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBkcmFnZ2FibGUgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBvcGVuRHJhZ2dhYmxlPFQ+KHtcbiAgICBjb21wb25lbnQsXG4gICAgY29uZmlnLFxuICAgIGRyYWdIYW5kbGVTZWxlY3RvcnMsXG4gICAgZHJhZ2dhYmxlQ2xhc3MsXG4gIH06IElEcmFnZ2FibGVDb25maWc8VD4pOiBNYXREaWFsb2dSZWY8VD4ge1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFQsIGFueT4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCBjb25maWcpO1xuXG4gICAgY29uc3QgQ0RLX09WRVJMQVlfUEFORV9TRUxFQ1RPUjogc3RyaW5nID0gJy5jZGstb3ZlcmxheS1wYW5lJztcbiAgICBjb25zdCBDREtfT1ZFUkxBWV9DT05UQUlORVJfU0VMRUNUT1I6IHN0cmluZyA9ICcuY2RrLW92ZXJsYXktY29udGFpbmVyJztcblxuICAgIGRpYWxvZ1JlZi5hZnRlck9wZW5lZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBkaWFsb2dFbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dSZWYuaWQpO1xuICAgICAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudDogRHJhZ1JlZiA9IHRoaXMuX2RyYWdEcm9wLmNyZWF0ZURyYWcoZGlhbG9nRWxlbWVudCk7XG5cbiAgICAgIGlmIChkcmFnZ2FibGVDbGFzcykge1xuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hZGRDbGFzcyhjaGlsZENvbXBvbmVudCwgZHJhZ2dhYmxlQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ0hhbmRsZVNlbGVjdG9ycyAmJiBkcmFnSGFuZGxlU2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBkcmFnSGFuZGxlczogRWxlbWVudFtdID0gZHJhZ0hhbmRsZVNlbGVjdG9ycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYzogRWxlbWVudFtdLCBjdXJyOiBzdHJpbmcpID0+IFsuLi5hY2MsIC4uLkFycmF5LmZyb20oZGlhbG9nRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGN1cnIpKV0sXG4gICAgICAgICAgW10sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkcmFnSGFuZGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoSGFuZGxlcyg8SFRNTEVsZW1lbnRbXT5kcmFnSGFuZGxlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm9vdEVsZW1lbnQ6IEVsZW1lbnQgPSBkaWFsb2dFbGVtZW50LmNsb3Nlc3QoQ0RLX09WRVJMQVlfUEFORV9TRUxFQ1RPUik7XG4gICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoUm9vdEVsZW1lbnQoPEhUTUxFbGVtZW50PnJvb3RFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJvdW5kYXJ5RWxlbWVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuY2xvc2VzdChDREtfT1ZFUkxBWV9DT05UQUlORVJfU0VMRUNUT1IpO1xuICAgICAgaWYgKGJvdW5kYXJ5RWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LndpdGhCb3VuZGFyeUVsZW1lbnQoPEhUTUxFbGVtZW50PmJvdW5kYXJ5RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ29uZmlnKGNvbmZpZzogSURpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ0NvbmZpZyB7XG4gICAgbGV0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuICAgIGRpYWxvZ0NvbmZpZy53aWR0aCA9ICc0MDBweCc7XG4gICAgT2JqZWN0LmFzc2lnbihkaWFsb2dDb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGRpYWxvZ0NvbmZpZztcbiAgfVxufVxuIl19