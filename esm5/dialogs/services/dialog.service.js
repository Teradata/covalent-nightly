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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFL0IsbUNBR0M7OztJQUZDLDhCQUFlOztJQUNmLGdDQUFnQjs7Ozs7QUFHbEIsa0NBRUM7OztJQURDLG1DQUFxQjs7Ozs7QUFHdkIsb0NBR0M7OztJQUZDLHNDQUFzQjs7SUFDdEIsc0NBQXNCOzs7OztBQUd4QixtQ0FFQzs7O0lBREMsOEJBQWU7Ozs7OztBQUdqQixzQ0FPQzs7O0lBTkMscUNBQTRCOztJQUM1QixrQ0FBeUI7O0lBRXpCLCtDQUErQjs7SUFFL0IsMENBQXdCOzs7Ozs7QUFHMUIsb0NBR0M7OztJQUZDLHNDQUE4Qjs7SUFDOUIsd0NBQWlDOztBQUduQztJQUlFLHlCQUM0QixTQUFjLEVBQ2hDLGNBQXlCLEVBQ3pCLFNBQW1CLEVBQ25CLGVBQWlDO1FBSGYsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNoQyxtQkFBYyxHQUFkLGNBQWMs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QiwwQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmltcG9ydCB7IFRkQWxlcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRQcm9tcHREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9wcm9tcHQtZGlhbG9nL3Byb21wdC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IERyYWdEcm9wLCBEcmFnUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ0NvbmZpZyBleHRlbmRzIE1hdERpYWxvZ0NvbmZpZyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFsZXJ0Q29uZmlnIGV4dGVuZHMgSURpYWxvZ0NvbmZpZyB7XG4gIGNsb3NlQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25maXJtQ29uZmlnIGV4dGVuZHMgSURpYWxvZ0NvbmZpZyB7XG4gIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9tcHRDb25maWcgZXh0ZW5kcyBJQ29uZmlybUNvbmZpZyB7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnZ2FibGVDb25maWc8VD4ge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD47XG4gIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZztcbiAgLy8gQ1NTIHNlbGVjdG9ycyBvZiBlbGVtZW50KHMpIGluc2lkZSB0aGUgY29tcG9uZW50IG1lYW50IHRvIGJlIGRyYWcgaGFuZGxlKHMpXG4gIGRyYWdIYW5kbGVTZWxlY3RvcnM/OiBzdHJpbmdbXTtcbiAgLy8gQ2xhc3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb21wb25lbnQgc2lnbmlmeWluZyBkcmFnLWFiaWxpdHlcbiAgZHJhZ2dhYmxlQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdnYWJsZVJlZnM8VD4ge1xuICBtYXREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUPjtcbiAgZHJhZ1JlZlN1YmplY3Q6IFN1YmplY3Q8RHJhZ1JlZj47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX2RpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9kcmFnRHJvcDogRHJhZ0Ryb3AsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyMiA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcih1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPlxuICAgKiAtIGNvbmZpZzogTWF0RGlhbG9nQ29uZmlnXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgb3BlbigpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIE9wZW5zIGEgbW9kYWwgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBvcGVuPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKGNvbXBvbmVudCwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIGNsb3NlQWxsKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9ncy5cbiAgICovXG4gIHB1YmxpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLmNsb3NlQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUFsZXJ0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhbiBhbGVydCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkFsZXJ0KGNvbmZpZzogSUFsZXJ0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRBbGVydERpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGNvbnN0IGFsZXJ0RGlhbG9nQ29tcG9uZW50OiBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmNsb3NlQnV0dG9uKSB7XG4gICAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5jbG9zZUJ1dHRvbiA9IGNvbmZpZy5jbG9zZUJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQ29uZmlybUNvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgY29uZmlybSBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuQ29uZmlybShjb25maWc6IElDb25maXJtQ29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGNvbnN0IGNvbmZpcm1EaWFsb2dDb21wb25lbnQ6IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIGlmIChjb25maWcuYWNjZXB0QnV0dG9uKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRCdXR0b247XG4gICAgfVxuICAgIGlmIChjb25maWcuY2FuY2VsQnV0dG9uKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSVByb21wdENvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZhbHVlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYSBwcm9tcHQgZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuUHJvbXB0KGNvbmZpZzogSVByb21wdENvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG4gICAgICBkaWFsb2dDb25maWcsXG4gICAgKTtcbiAgICBjb25zdCBwcm9tcHREaWFsb2dDb21wb25lbnQ6IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC52YWx1ZSA9IGNvbmZpZy52YWx1ZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRCdXR0b247XG4gICAgfVxuICAgIGlmIChjb25maWcuY2FuY2VsQnV0dG9uKSB7XG4gICAgICBwcm9tcHREaWFsb2dDb21wb25lbnQuY2FuY2VsQnV0dG9uID0gY29uZmlnLmNhbmNlbEJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIGRyYWdnYWJsZSBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIG9wZW5EcmFnZ2FibGU8VD4oe1xuICAgIGNvbXBvbmVudCxcbiAgICBjb25maWcsXG4gICAgZHJhZ0hhbmRsZVNlbGVjdG9ycyxcbiAgICBkcmFnZ2FibGVDbGFzcyxcbiAgfTogSURyYWdnYWJsZUNvbmZpZzxUPik6IElEcmFnZ2FibGVSZWZzPFQ+IHtcbiAgICBjb25zdCBtYXREaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxULCBhbnk+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKGNvbXBvbmVudCwgY29uZmlnKTtcblxuICAgIGNvbnN0IGRyYWdSZWZTdWJqZWN0OiBTdWJqZWN0PERyYWdSZWY+ID0gbmV3IFN1YmplY3Q8RHJhZ1JlZj4oKTtcblxuICAgIGNvbnN0IENES19PVkVSTEFZX1BBTkVfU0VMRUNUT1I6IHN0cmluZyA9ICcuY2RrLW92ZXJsYXktcGFuZSc7XG4gICAgY29uc3QgQ0RLX09WRVJMQVlfQ09OVEFJTkVSX1NFTEVDVE9SOiBzdHJpbmcgPSAnLmNkay1vdmVybGF5LWNvbnRhaW5lcic7XG5cbiAgICBtYXREaWFsb2dSZWYuYWZ0ZXJPcGVuZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgZGlhbG9nRWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWF0RGlhbG9nUmVmLmlkKTtcbiAgICAgIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnQ6IERyYWdSZWYgPSB0aGlzLl9kcmFnRHJvcC5jcmVhdGVEcmFnKGRpYWxvZ0VsZW1lbnQpO1xuXG4gICAgICBpZiAoZHJhZ2dhYmxlQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQ6IEVsZW1lbnQgPSBkaWFsb2dFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuYWRkQ2xhc3MoY2hpbGRDb21wb25lbnQsIGRyYWdnYWJsZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcmFnSGFuZGxlU2VsZWN0b3JzICYmIGRyYWdIYW5kbGVTZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRyYWdIYW5kbGVzOiBFbGVtZW50W10gPSBkcmFnSGFuZGxlU2VsZWN0b3JzLnJlZHVjZShcbiAgICAgICAgICAoYWNjOiBFbGVtZW50W10sIGN1cnI6IHN0cmluZykgPT4gWy4uLmFjYywgLi4uQXJyYXkuZnJvbShkaWFsb2dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY3VycikpXSxcbiAgICAgICAgICBbXSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGRyYWdIYW5kbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkcmFnZ2FibGVFbGVtZW50LndpdGhIYW5kbGVzKDxIVE1MRWxlbWVudFtdPmRyYWdIYW5kbGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgcm9vdEVsZW1lbnQ6IEVsZW1lbnQgPSBkaWFsb2dFbGVtZW50LmNsb3Nlc3QoQ0RLX09WRVJMQVlfUEFORV9TRUxFQ1RPUik7XG4gICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoUm9vdEVsZW1lbnQoPEhUTUxFbGVtZW50PnJvb3RFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm91bmRhcnlFbGVtZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5jbG9zZXN0KENES19PVkVSTEFZX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG4gICAgICBpZiAoYm91bmRhcnlFbGVtZW50KSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aEJvdW5kYXJ5RWxlbWVudCg8SFRNTEVsZW1lbnQ+Ym91bmRhcnlFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGRyYWdSZWZTdWJqZWN0Lm5leHQoZHJhZ2dhYmxlRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBtYXREaWFsb2dSZWYsIGRyYWdSZWZTdWJqZWN0IH07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDb25maWcoY29uZmlnOiBJRGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nQ29uZmlnIHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICBkaWFsb2dDb25maWcud2lkdGggPSAnNDAwcHgnO1xuICAgIE9iamVjdC5hc3NpZ24oZGlhbG9nQ29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiBkaWFsb2dDb25maWc7XG4gIH1cbn1cbiJdfQ==