/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
import { Injectable, Inject, RendererFactory2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { DragDrop } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
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
    /** @type {?|undefined} */
    IConfirmConfig.prototype.isDestructive;
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
/**
 * @record
 * @template T
 */
export function IDraggableRefs() { }
if (false) {
    /** @type {?} */
    IDraggableRefs.prototype.matDialogRef;
    /** @type {?} */
    IDraggableRefs.prototype.dragRefSubject;
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
     *     isDestructive?: boolean;
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
     *     isDestructive?: boolean;
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
     *     isDestructive?: boolean;
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
        if (config.isDestructive) {
            confirmDialogComponent.isDestructive = config.isDestructive;
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
        var matDialogRef = this._dialogService.open(component, config);
        /** @type {?} */
        var dragRefSubject = new Subject();
        /** @type {?} */
        var CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
        /** @type {?} */
        var CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
        matDialogRef.afterOpened().subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var dialogElement = (/** @type {?} */ (_this._document.getElementById(matDialogRef.id)));
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
                function (acc, curr) { return __spread(acc, Array.from(dialogElement.querySelectorAll(curr))); }), []);
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
            dragRefSubject.next(draggableElement);
        }));
        return { matDialogRef: matDialogRef, dragRefSubject: dragRefSubject };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFL0IsbUNBR0M7OztJQUZDLDhCQUFlOztJQUNmLGdDQUFnQjs7Ozs7QUFHbEIsa0NBRUM7OztJQURDLG1DQUFxQjs7Ozs7QUFHdkIsb0NBSUM7OztJQUhDLHNDQUFzQjs7SUFDdEIsc0NBQXNCOztJQUN0Qix1Q0FBd0I7Ozs7O0FBRzFCLG1DQUVDOzs7SUFEQyw4QkFBZTs7Ozs7O0FBR2pCLHNDQU9DOzs7SUFOQyxxQ0FBNEI7O0lBQzVCLGtDQUF5Qjs7SUFFekIsK0NBQStCOztJQUUvQiwwQ0FBd0I7Ozs7OztBQUcxQixvQ0FHQzs7O0lBRkMsc0NBQThCOztJQUM5Qix3Q0FBaUM7O0FBR25DO0lBSUUseUJBQzRCLFNBQWMsRUFDaEMsY0FBeUIsRUFDekIsU0FBbUIsRUFDbkIsZUFBaUM7UUFIZixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ2hDLG1C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LEFBckxELElBcUxDO1NBcExZLGVBQWU7Ozs7OztJQUMxQixxQ0FBOEI7Ozs7O0lBRzVCLG9DQUF3Qzs7Ozs7SUFDeEMseUNBQWlDOzs7OztJQUNqQyxvQ0FBMkI7Ozs7O0lBQzNCLDBDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Byb21wdC1kaWFsb2cvcHJvbXB0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ0Ryb3AsIERyYWdSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nQ29uZmlnIGV4dGVuZHMgTWF0RGlhbG9nQ29uZmlnIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRDb25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1Db25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gIGlzRGVzdHJ1Y3RpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9tcHRDb25maWcgZXh0ZW5kcyBJQ29uZmlybUNvbmZpZyB7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnZ2FibGVDb25maWc8VD4ge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD47XG4gIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZztcbiAgLy8gQ1NTIHNlbGVjdG9ycyBvZiBlbGVtZW50KHMpIGluc2lkZSB0aGUgY29tcG9uZW50IG1lYW50IHRvIGJlIGRyYWcgaGFuZGxlKHMpXG4gIGRyYWdIYW5kbGVTZWxlY3RvcnM/OiBzdHJpbmdbXTtcbiAgLy8gQ2xhc3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb21wb25lbnQgc2lnbmlmeWluZyBkcmFnLWFiaWxpdHlcbiAgZHJhZ2dhYmxlQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdnYWJsZVJlZnM8VD4ge1xuICBtYXREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUPjtcbiAgZHJhZ1JlZlN1YmplY3Q6IFN1YmplY3Q8RHJhZ1JlZj47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX2RpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9kcmFnRHJvcDogRHJhZ0Ryb3AsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyMiA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcih1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPlxuICAgKiAtIGNvbmZpZzogTWF0RGlhbG9nQ29uZmlnXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgb3BlbigpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIE9wZW5zIGEgbW9kYWwgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBvcGVuPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKGNvbXBvbmVudCwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIGNsb3NlQWxsKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9ncy5cbiAgICovXG4gIHB1YmxpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLmNsb3NlQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUFsZXJ0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhbiBhbGVydCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkFsZXJ0KGNvbmZpZzogSUFsZXJ0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRBbGVydERpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGNvbnN0IGFsZXJ0RGlhbG9nQ29tcG9uZW50OiBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmNsb3NlQnV0dG9uKSB7XG4gICAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5jbG9zZUJ1dHRvbiA9IGNvbmZpZy5jbG9zZUJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQ29uZmlybUNvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgaXNEZXN0cnVjdGl2ZT86IGJvb2xlYW47XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYSBjb25maXJtIGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5Db25maXJtKGNvbmZpZzogSUNvbmZpcm1Db25maWcpOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgY29uc3QgY29uZmlybURpYWxvZ0NvbXBvbmVudDogVGRDb25maXJtRGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuYWNjZXB0QnV0dG9uID0gY29uZmlnLmFjY2VwdEJ1dHRvbjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5pc0Rlc3RydWN0aXZlKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmlzRGVzdHJ1Y3RpdmUgPSBjb25maWcuaXNEZXN0cnVjdGl2ZTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5jYW5jZWxCdXR0b24pIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuY2FuY2VsQnV0dG9uID0gY29uZmlnLmNhbmNlbEJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJUHJvbXB0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmFsdWU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgICogICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIHByb21wdCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5Qcm9tcHQoY29uZmlnOiBJUHJvbXB0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZFByb21wdERpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGNvbnN0IHByb21wdERpYWxvZ0NvbXBvbmVudDogVGRQcm9tcHREaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LnZhbHVlID0gY29uZmlnLnZhbHVlO1xuICAgIGlmIChjb25maWcuYWNjZXB0QnV0dG9uKSB7XG4gICAgICBwcm9tcHREaWFsb2dDb21wb25lbnQuYWNjZXB0QnV0dG9uID0gY29uZmlnLmFjY2VwdEJ1dHRvbjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5jYW5jZWxCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgZHJhZ2dhYmxlIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgb3BlbkRyYWdnYWJsZTxUPih7XG4gICAgY29tcG9uZW50LFxuICAgIGNvbmZpZyxcbiAgICBkcmFnSGFuZGxlU2VsZWN0b3JzLFxuICAgIGRyYWdnYWJsZUNsYXNzLFxuICB9OiBJRHJhZ2dhYmxlQ29uZmlnPFQ+KTogSURyYWdnYWJsZVJlZnM8VD4ge1xuICAgIGNvbnN0IG1hdERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFQsIGFueT4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCBjb25maWcpO1xuXG4gICAgY29uc3QgZHJhZ1JlZlN1YmplY3Q6IFN1YmplY3Q8RHJhZ1JlZj4gPSBuZXcgU3ViamVjdDxEcmFnUmVmPigpO1xuXG4gICAgY29uc3QgQ0RLX09WRVJMQVlfUEFORV9TRUxFQ1RPUjogc3RyaW5nID0gJy5jZGstb3ZlcmxheS1wYW5lJztcbiAgICBjb25zdCBDREtfT1ZFUkxBWV9DT05UQUlORVJfU0VMRUNUT1I6IHN0cmluZyA9ICcuY2RrLW92ZXJsYXktY29udGFpbmVyJztcblxuICAgIG1hdERpYWxvZ1JlZi5hZnRlck9wZW5lZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBkaWFsb2dFbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXREaWFsb2dSZWYuaWQpO1xuICAgICAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudDogRHJhZ1JlZiA9IHRoaXMuX2RyYWdEcm9wLmNyZWF0ZURyYWcoZGlhbG9nRWxlbWVudCk7XG5cbiAgICAgIGlmIChkcmFnZ2FibGVDbGFzcykge1xuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hZGRDbGFzcyhjaGlsZENvbXBvbmVudCwgZHJhZ2dhYmxlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGRyYWdIYW5kbGVTZWxlY3RvcnMgJiYgZHJhZ0hhbmRsZVNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZHJhZ0hhbmRsZXM6IEVsZW1lbnRbXSA9IGRyYWdIYW5kbGVTZWxlY3RvcnMucmVkdWNlKFxuICAgICAgICAgIChhY2M6IEVsZW1lbnRbXSwgY3Vycjogc3RyaW5nKSA9PiBbLi4uYWNjLCAuLi5BcnJheS5mcm9tKGRpYWxvZ0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChjdXJyKSldLFxuICAgICAgICAgIFtdLFxuICAgICAgICApO1xuICAgICAgICBpZiAoZHJhZ0hhbmRsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aEhhbmRsZXMoPEhUTUxFbGVtZW50W10+ZHJhZ0hhbmRsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCByb290RWxlbWVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuY2xvc2VzdChDREtfT1ZFUkxBWV9QQU5FX1NFTEVDVE9SKTtcbiAgICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LndpdGhSb290RWxlbWVudCg8SFRNTEVsZW1lbnQ+cm9vdEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3VuZGFyeUVsZW1lbnQ6IEVsZW1lbnQgPSBkaWFsb2dFbGVtZW50LmNsb3Nlc3QoQ0RLX09WRVJMQVlfQ09OVEFJTkVSX1NFTEVDVE9SKTtcbiAgICAgIGlmIChib3VuZGFyeUVsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoQm91bmRhcnlFbGVtZW50KDxIVE1MRWxlbWVudD5ib3VuZGFyeUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgZHJhZ1JlZlN1YmplY3QubmV4dChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IG1hdERpYWxvZ1JlZiwgZHJhZ1JlZlN1YmplY3QgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNvbmZpZyhjb25maWc6IElEaWFsb2dDb25maWcpOiBNYXREaWFsb2dDb25maWcge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuICAgIGRpYWxvZ0NvbmZpZy53aWR0aCA9ICc0MDBweCc7XG4gICAgT2JqZWN0LmFzc2lnbihkaWFsb2dDb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGRpYWxvZ0NvbmZpZztcbiAgfVxufVxuIl19