/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
import { Injectable, Inject, RendererFactory2, } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { DragDrop } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { CovalentDialogsModule } from '../dialogs.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/cdk/drag-drop";
import * as i4 from "../dialogs.module";
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
        { type: Injectable, args: [{
                    providedIn: CovalentDialogsModule,
                },] }
    ];
    /** @nocollapse */
    TdDialogService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: MatDialog },
        { type: DragDrop },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ TdDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TdDialogService_Factory() { return new TdDialogService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.MatDialog), i0.ɵɵinject(i3.DragDrop), i0.ɵɵinject(i0.RendererFactory2)); }, token: TdDialogService, providedIn: i4.CovalentDialogsModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3Mvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUtWLE1BQU0sRUFFTixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFFBQVEsRUFBVyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7O0FBQzFELG1DQUdDOzs7SUFGQyw4QkFBZTs7SUFDZixnQ0FBZ0I7Ozs7O0FBR2xCLGtDQUVDOzs7SUFEQyxtQ0FBcUI7Ozs7O0FBR3ZCLG9DQUdDOzs7SUFGQyxzQ0FBc0I7O0lBQ3RCLHNDQUFzQjs7Ozs7QUFHeEIsbUNBRUM7OztJQURDLDhCQUFlOzs7Ozs7QUFHakIsc0NBT0M7OztJQU5DLHFDQUE0Qjs7SUFDNUIsa0NBQXlCOztJQUV6QiwrQ0FBK0I7O0lBRS9CLDBDQUF3Qjs7QUFHMUI7SUFNRSx5QkFDNEIsU0FBYyxFQUNoQyxjQUF5QixFQUN6QixTQUFtQixFQUNuQixlQUFpQztRQUhmLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQVc7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNu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LGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxtQkFBZSxXQUFXLEVBQUEsQ0FBQyxDQUFDO2lCQUMxRDthQUNGOztnQkFFSyxXQUFXLEdBQVksYUFBYSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztZQUM3RSxJQUFJLFdBQVcsRUFBRTtnQkFDZixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsbUJBQWEsV0FBVyxFQUFBLENBQUMsQ0FBQzthQUM1RDs7Z0JBQ0ssZUFBZSxHQUFZLGFBQWEsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7WUFDdEYsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG1CQUFhLGVBQWUsRUFBQSxDQUFDLENBQUM7YUFDcEU7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLHVDQUFhOzs7OztJQUFyQixVQUFzQixNQUFxQjs7WUFDbkMsWUFBWSxHQUFvQixJQUFJLGVBQWUsRUFBRTtRQUMzRCxZQUFZLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztnQkFoTEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxxQkFBcUI7aUJBQ2xDOzs7O2dEQUtJLE1BQU0sU0FBQyxRQUFRO2dCQTNDWCxTQUFTO2dCQU1ULFFBQVE7Z0JBUmYsZ0JBQWdCOzs7MEJBUmxCO0NBK05DLEFBakxELElBaUxDO1NBOUtZLGVBQWU7Ozs7OztJQUMxQixxQ0FBOEI7Ozs7O0lBRzVCLG9DQUF3Qzs7Ozs7SUFDeEMseUNBQWlDOzs7OztJQUNqQyxvQ0FBMkI7Ozs7O0lBQzNCLDBDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFByb3ZpZGVyLFxuICBTa2lwU2VsZixcbiAgT3B0aW9uYWwsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSwgVGVtcGxhdGVQb3J0YWwsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmFnRHJvcCwgRHJhZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ292YWxlbnREaWFsb2dzTW9kdWxlIH0gZnJvbSAnLi4vZGlhbG9ncy5tb2R1bGUnO1xuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nQ29uZmlnIGV4dGVuZHMgTWF0RGlhbG9nQ29uZmlnIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRDb25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1Db25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wdENvbmZpZyBleHRlbmRzIElDb25maXJtQ29uZmlnIHtcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdnYWJsZUNvbmZpZzxUPiB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPjtcbiAgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnO1xuICAvLyBDU1Mgc2VsZWN0b3JzIG9mIGVsZW1lbnQocykgaW5zaWRlIHRoZSBjb21wb25lbnQgbWVhbnQgdG8gYmUgZHJhZyBoYW5kbGUocylcbiAgZHJhZ0hhbmRsZVNlbGVjdG9ycz86IHN0cmluZ1tdO1xuICAvLyBDbGFzcyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvbXBvbmVudCBzaWduaWZ5aW5nIGRyYWctYWJpbGl0eVxuICBkcmFnZ2FibGVDbGFzcz86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBDb3ZhbGVudERpYWxvZ3NNb2R1bGUsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nU2VydmljZSB7XG4gIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfZGlhbG9nU2VydmljZTogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgX2RyYWdEcm9wOiBEcmFnRHJvcCxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+XG4gICAqIC0gY29uZmlnOiBNYXREaWFsb2dDb25maWdcbiAgICogV3JhcHBlciBmdW5jdGlvbiBvdmVyIHRoZSBvcGVuKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogT3BlbnMgYSBtb2RhbCBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIG9wZW48VD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCBjb25maWc/OiBNYXREaWFsb2dDb25maWcpOiBNYXREaWFsb2dSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgY2xvc2VBbGwoKSBtZXRob2QgaW4gTWF0RGlhbG9nLlxuICAgKiBDbG9zZXMgYWxsIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzLlxuICAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2UuY2xvc2VBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQWxlcnRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGNsb3NlQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGFuIGFsZXJ0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuQWxlcnQoY29uZmlnOiBJQWxlcnRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgY29uc3QgYWxlcnREaWFsb2dDb21wb25lbnQ6IFRkQWxlcnREaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgYWxlcnREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgYWxlcnREaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIGlmIChjb25maWcuY2xvc2VCdXR0b24pIHtcbiAgICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LmNsb3NlQnV0dG9uID0gY29uZmlnLmNsb3NlQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElDb25maXJtQ29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYSBjb25maXJtIGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5Db25maXJtKGNvbmZpZzogSUNvbmZpcm1Db25maWcpOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgY29uc3QgY29uZmlybURpYWxvZ0NvbXBvbmVudDogVGRDb25maXJtRGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuYWNjZXB0QnV0dG9uID0gY29uZmlnLmFjY2VwdEJ1dHRvbjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5jYW5jZWxCdXR0b24pIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuY2FuY2VsQnV0dG9uID0gY29uZmlnLmNhbmNlbEJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJUHJvbXB0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmFsdWU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgICogICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIHByb21wdCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5Qcm9tcHQoY29uZmlnOiBJUHJvbXB0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZFByb21wdERpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGNvbnN0IHByb21wdERpYWxvZ0NvbXBvbmVudDogVGRQcm9tcHREaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LnZhbHVlID0gY29uZmlnLnZhbHVlO1xuICAgIGlmIChjb25maWcuYWNjZXB0QnV0dG9uKSB7XG4gICAgICBwcm9tcHREaWFsb2dDb21wb25lbnQuYWNjZXB0QnV0dG9uID0gY29uZmlnLmFjY2VwdEJ1dHRvbjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5jYW5jZWxCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgZHJhZ2dhYmxlIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgb3BlbkRyYWdnYWJsZTxUPih7XG4gICAgY29tcG9uZW50LFxuICAgIGNvbmZpZyxcbiAgICBkcmFnSGFuZGxlU2VsZWN0b3JzLFxuICAgIGRyYWdnYWJsZUNsYXNzLFxuICB9OiBJRHJhZ2dhYmxlQ29uZmlnPFQ+KTogTWF0RGlhbG9nUmVmPFQ+IHtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxULCBhbnk+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKGNvbXBvbmVudCwgY29uZmlnKTtcblxuICAgIGNvbnN0IENES19PVkVSTEFZX1BBTkVfU0VMRUNUT1I6IHN0cmluZyA9ICcuY2RrLW92ZXJsYXktcGFuZSc7XG4gICAgY29uc3QgQ0RLX09WRVJMQVlfQ09OVEFJTkVSX1NFTEVDVE9SOiBzdHJpbmcgPSAnLmNkay1vdmVybGF5LWNvbnRhaW5lcic7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJPcGVuZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgZGlhbG9nRWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlhbG9nUmVmLmlkKTtcbiAgICAgIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnQ6IERyYWdSZWYgPSB0aGlzLl9kcmFnRHJvcC5jcmVhdGVEcmFnKGRpYWxvZ0VsZW1lbnQpO1xuXG4gICAgICBpZiAoZHJhZ2dhYmxlQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQ6IEVsZW1lbnQgPSBkaWFsb2dFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuYWRkQ2xhc3MoY2hpbGRDb21wb25lbnQsIGRyYWdnYWJsZUNsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdIYW5kbGVTZWxlY3RvcnMgJiYgZHJhZ0hhbmRsZVNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZHJhZ0hhbmRsZXM6IEVsZW1lbnRbXSA9IGRyYWdIYW5kbGVTZWxlY3RvcnMucmVkdWNlKFxuICAgICAgICAgIChhY2M6IEVsZW1lbnRbXSwgY3Vycjogc3RyaW5nKSA9PiBbLi4uYWNjLCAuLi5BcnJheS5mcm9tKGRpYWxvZ0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChjdXJyKSldLFxuICAgICAgICAgIFtdLFxuICAgICAgICApO1xuICAgICAgICBpZiAoZHJhZ0hhbmRsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aEhhbmRsZXMoPEhUTUxFbGVtZW50W10+ZHJhZ0hhbmRsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvb3RFbGVtZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5jbG9zZXN0KENES19PVkVSTEFZX1BBTkVfU0VMRUNUT1IpO1xuICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aFJvb3RFbGVtZW50KDxIVE1MRWxlbWVudD5yb290RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBjb25zdCBib3VuZGFyeUVsZW1lbnQ6IEVsZW1lbnQgPSBkaWFsb2dFbGVtZW50LmNsb3Nlc3QoQ0RLX09WRVJMQVlfQ09OVEFJTkVSX1NFTEVDVE9SKTtcbiAgICAgIGlmIChib3VuZGFyeUVsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoQm91bmRhcnlFbGVtZW50KDxIVE1MRWxlbWVudD5ib3VuZGFyeUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNvbmZpZyhjb25maWc6IElEaWFsb2dDb25maWcpOiBNYXREaWFsb2dDb25maWcge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuICAgIGRpYWxvZ0NvbmZpZy53aWR0aCA9ICc0MDBweCc7XG4gICAgT2JqZWN0LmFzc2lnbihkaWFsb2dDb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGRpYWxvZ0NvbmZpZztcbiAgfVxufVxuIl19