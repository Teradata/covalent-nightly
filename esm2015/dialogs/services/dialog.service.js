/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, RendererFactory2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { DragDrop } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { CovalentDialogsModule } from '../dialogs.module';
import { Subject } from 'rxjs';
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
export class TdDialogService {
    /**
     * @param {?} _document
     * @param {?} _dialogService
     * @param {?} _dragDrop
     * @param {?} rendererFactory
     */
    constructor(_document, _dialogService, _dragDrop, rendererFactory) {
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
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    open(component, config) {
        return this._dialogService.open(component, config);
    }
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    closeAll() {
        this._dialogService.closeAll();
    }
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
    openAlert(config) {
        /** @type {?} */
        const dialogConfig = this._createConfig(config);
        /** @type {?} */
        const dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        /** @type {?} */
        const alertDialogComponent = dialogRef.componentInstance;
        alertDialogComponent.title = config.title;
        alertDialogComponent.message = config.message;
        if (config.closeButton) {
            alertDialogComponent.closeButton = config.closeButton;
        }
        return dialogRef;
    }
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
    openConfirm(config) {
        /** @type {?} */
        const dialogConfig = this._createConfig(config);
        /** @type {?} */
        const dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        /** @type {?} */
        const confirmDialogComponent = dialogRef.componentInstance;
        confirmDialogComponent.title = config.title;
        confirmDialogComponent.message = config.message;
        if (config.acceptButton) {
            confirmDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            confirmDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    }
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
    openPrompt(config) {
        /** @type {?} */
        const dialogConfig = this._createConfig(config);
        /** @type {?} */
        const dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        /** @type {?} */
        const promptDialogComponent = dialogRef.componentInstance;
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
    }
    /**
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} __0
     * @return {?}
     */
    openDraggable({ component, config, dragHandleSelectors, draggableClass, }) {
        /** @type {?} */
        const matDialogRef = this._dialogService.open(component, config);
        /** @type {?} */
        const dragRefSubject = new Subject();
        /** @type {?} */
        const CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
        /** @type {?} */
        const CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
        matDialogRef.afterOpened().subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dialogElement = (/** @type {?} */ (this._document.getElementById(matDialogRef.id)));
            /** @type {?} */
            const draggableElement = this._dragDrop.createDrag(dialogElement);
            if (draggableClass) {
                /** @type {?} */
                const childComponent = dialogElement.firstElementChild;
                this._renderer2.addClass(childComponent, draggableClass);
            }
            if (dragHandleSelectors && dragHandleSelectors.length) {
                /** @type {?} */
                const dragHandles = dragHandleSelectors.reduce((/**
                 * @param {?} acc
                 * @param {?} curr
                 * @return {?}
                 */
                (acc, curr) => [...acc, ...Array.from(dialogElement.querySelectorAll(curr))]), []);
                if (dragHandles.length > 0) {
                    draggableElement.withHandles((/** @type {?} */ (dragHandles)));
                }
            }
            /** @type {?} */
            const rootElement = dialogElement.closest(CDK_OVERLAY_PANE_SELECTOR);
            if (rootElement) {
                draggableElement.withRootElement((/** @type {?} */ (rootElement)));
            }
            /** @type {?} */
            const boundaryElement = dialogElement.closest(CDK_OVERLAY_CONTAINER_SELECTOR);
            if (boundaryElement) {
                draggableElement.withBoundaryElement((/** @type {?} */ (boundaryElement)));
            }
            dragRefSubject.next(draggableElement);
        }));
        return { matDialogRef, dragRefSubject };
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    _createConfig(config) {
        /** @type {?} */
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    }
}
TdDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: CovalentDialogsModule,
            },] }
];
/** @nocollapse */
TdDialogService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: MatDialog },
    { type: DragDrop },
    { type: RendererFactory2 }
];
/** @nocollapse */ TdDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TdDialogService_Factory() { return new TdDialogService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.MatDialog), i0.ɵɵinject(i3.DragDrop), i0.ɵɵinject(i0.RendererFactory2)); }, token: TdDialogService, providedIn: i4.CovalentDialogsModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3Mvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxRQUFRLEVBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7O0FBRS9CLG1DQUdDOzs7SUFGQyw4QkFBZTs7SUFDZixnQ0FBZ0I7Ozs7O0FBR2xCLGtDQUVDOzs7SUFEQyxtQ0FBcUI7Ozs7O0FBR3ZCLG9DQUdDOzs7SUFGQyxzQ0FBc0I7O0lBQ3RCLHNDQUFzQjs7Ozs7QUFHeEIsbUNBRUM7OztJQURDLDhCQUFlOzs7Ozs7QUFHakIsc0NBT0M7OztJQU5DLHFDQUE0Qjs7SUFDNUIsa0NBQXlCOztJQUV6QiwrQ0FBK0I7O0lBRS9CLDBDQUF3Qjs7Ozs7O0FBRzFCLG9DQUdDOzs7SUFGQyxzQ0FBOEI7O0lBQzlCLHdDQUFpQzs7QUFNbkMsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7SUFHMUIsWUFDNEIsU0FBYyxFQUNoQyxjQUF5QixF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O2tCQUNLLFdBQVcsR0FBWSxhQUFhLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDO1lBQzdFLElBQUksV0FBVyxFQUFFO2dCQUNmLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxtQkFBYSxXQUFXLEVBQUEsQ0FBQyxDQUFDO2FBQzVEOztrQkFFSyxlQUFlLEdBQVksYUFBYSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztZQUN0RixJQUFJLGVBQWUsRUFBRTtnQkFDbkIsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsbUJBQWEsZUFBZSxFQUFBLENBQUMsQ0FBQzthQUNwRTtZQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE1BQXFCOztjQUNuQyxZQUFZLEdBQW9CLElBQUksZUFBZSxFQUFFO1FBQzNELFlBQVksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7OztZQWxMRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLHFCQUFxQjthQUNsQzs7Ozs0Q0FLSSxNQUFNLFNBQUMsUUFBUTtZQWxEWCxTQUFTO1lBTVQsUUFBUTtZQVB1QixnQkFBZ0I7Ozs7Ozs7O0lBZ0R0RCxxQ0FBOEI7Ozs7O0lBRzVCLG9DQUF3Qzs7Ozs7SUFDeEMseUNBQWlDOzs7OztJQUNqQyxvQ0FBMkI7Ozs7O0lBQzNCLDBDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Byb21wdC1kaWFsb2cvcHJvbXB0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ0Ryb3AsIERyYWdSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvdmFsZW50RGlhbG9nc01vZHVsZSB9IGZyb20gJy4uL2RpYWxvZ3MubW9kdWxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nQ29uZmlnIGV4dGVuZHMgTWF0RGlhbG9nQ29uZmlnIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRDb25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1Db25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wdENvbmZpZyBleHRlbmRzIElDb25maXJtQ29uZmlnIHtcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdnYWJsZUNvbmZpZzxUPiB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPjtcbiAgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnO1xuICAvLyBDU1Mgc2VsZWN0b3JzIG9mIGVsZW1lbnQocykgaW5zaWRlIHRoZSBjb21wb25lbnQgbWVhbnQgdG8gYmUgZHJhZyBoYW5kbGUocylcbiAgZHJhZ0hhbmRsZVNlbGVjdG9ycz86IHN0cmluZ1tdO1xuICAvLyBDbGFzcyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvbXBvbmVudCBzaWduaWZ5aW5nIGRyYWctYWJpbGl0eVxuICBkcmFnZ2FibGVDbGFzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ2dhYmxlUmVmczxUPiB7XG4gIG1hdERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFQ+O1xuICBkcmFnUmVmU3ViamVjdDogU3ViamVjdDxEcmFnUmVmPjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBDb3ZhbGVudERpYWxvZ3NNb2R1bGUsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nU2VydmljZSB7XG4gIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfZGlhbG9nU2VydmljZTogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgX2RyYWdEcm9wOiBEcmFnRHJvcCxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+XG4gICAqIC0gY29uZmlnOiBNYXREaWFsb2dDb25maWdcbiAgICogV3JhcHBlciBmdW5jdGlvbiBvdmVyIHRoZSBvcGVuKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogT3BlbnMgYSBtb2RhbCBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIG9wZW48VD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCBjb25maWc/OiBNYXREaWFsb2dDb25maWcpOiBNYXREaWFsb2dSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgY2xvc2VBbGwoKSBtZXRob2QgaW4gTWF0RGlhbG9nLlxuICAgKiBDbG9zZXMgYWxsIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzLlxuICAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2UuY2xvc2VBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQWxlcnRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGNsb3NlQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGFuIGFsZXJ0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuQWxlcnQoY29uZmlnOiBJQWxlcnRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgY29uc3QgYWxlcnREaWFsb2dDb21wb25lbnQ6IFRkQWxlcnREaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgYWxlcnREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgYWxlcnREaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIGlmIChjb25maWcuY2xvc2VCdXR0b24pIHtcbiAgICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LmNsb3NlQnV0dG9uID0gY29uZmlnLmNsb3NlQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElDb25maXJtQ29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYSBjb25maXJtIGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5Db25maXJtKGNvbmZpZzogSUNvbmZpcm1Db25maWcpOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgY29uc3QgY29uZmlybURpYWxvZ0NvbXBvbmVudDogVGRDb25maXJtRGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuYWNjZXB0QnV0dG9uID0gY29uZmlnLmFjY2VwdEJ1dHRvbjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5jYW5jZWxCdXR0b24pIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuY2FuY2VsQnV0dG9uID0gY29uZmlnLmNhbmNlbEJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJUHJvbXB0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmFsdWU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgICogICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIHByb21wdCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5Qcm9tcHQoY29uZmlnOiBJUHJvbXB0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZFByb21wdERpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGNvbnN0IHByb21wdERpYWxvZ0NvbXBvbmVudDogVGRQcm9tcHREaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LnZhbHVlID0gY29uZmlnLnZhbHVlO1xuICAgIGlmIChjb25maWcuYWNjZXB0QnV0dG9uKSB7XG4gICAgICBwcm9tcHREaWFsb2dDb21wb25lbnQuYWNjZXB0QnV0dG9uID0gY29uZmlnLmFjY2VwdEJ1dHRvbjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5jYW5jZWxCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgZHJhZ2dhYmxlIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgb3BlbkRyYWdnYWJsZTxUPih7XG4gICAgY29tcG9uZW50LFxuICAgIGNvbmZpZyxcbiAgICBkcmFnSGFuZGxlU2VsZWN0b3JzLFxuICAgIGRyYWdnYWJsZUNsYXNzLFxuICB9OiBJRHJhZ2dhYmxlQ29uZmlnPFQ+KTogSURyYWdnYWJsZVJlZnM8VD4ge1xuICAgIGNvbnN0IG1hdERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFQsIGFueT4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCBjb25maWcpO1xuXG4gICAgY29uc3QgZHJhZ1JlZlN1YmplY3Q6IFN1YmplY3Q8RHJhZ1JlZj4gPSBuZXcgU3ViamVjdDxEcmFnUmVmPigpO1xuXG4gICAgY29uc3QgQ0RLX09WRVJMQVlfUEFORV9TRUxFQ1RPUjogc3RyaW5nID0gJy5jZGstb3ZlcmxheS1wYW5lJztcbiAgICBjb25zdCBDREtfT1ZFUkxBWV9DT05UQUlORVJfU0VMRUNUT1I6IHN0cmluZyA9ICcuY2RrLW92ZXJsYXktY29udGFpbmVyJztcblxuICAgIG1hdERpYWxvZ1JlZi5hZnRlck9wZW5lZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBkaWFsb2dFbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXREaWFsb2dSZWYuaWQpO1xuICAgICAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudDogRHJhZ1JlZiA9IHRoaXMuX2RyYWdEcm9wLmNyZWF0ZURyYWcoZGlhbG9nRWxlbWVudCk7XG5cbiAgICAgIGlmIChkcmFnZ2FibGVDbGFzcykge1xuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hZGRDbGFzcyhjaGlsZENvbXBvbmVudCwgZHJhZ2dhYmxlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGRyYWdIYW5kbGVTZWxlY3RvcnMgJiYgZHJhZ0hhbmRsZVNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZHJhZ0hhbmRsZXM6IEVsZW1lbnRbXSA9IGRyYWdIYW5kbGVTZWxlY3RvcnMucmVkdWNlKFxuICAgICAgICAgIChhY2M6IEVsZW1lbnRbXSwgY3Vycjogc3RyaW5nKSA9PiBbLi4uYWNjLCAuLi5BcnJheS5mcm9tKGRpYWxvZ0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChjdXJyKSldLFxuICAgICAgICAgIFtdLFxuICAgICAgICApO1xuICAgICAgICBpZiAoZHJhZ0hhbmRsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aEhhbmRsZXMoPEhUTUxFbGVtZW50W10+ZHJhZ0hhbmRsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCByb290RWxlbWVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuY2xvc2VzdChDREtfT1ZFUkxBWV9QQU5FX1NFTEVDVE9SKTtcbiAgICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LndpdGhSb290RWxlbWVudCg8SFRNTEVsZW1lbnQ+cm9vdEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3VuZGFyeUVsZW1lbnQ6IEVsZW1lbnQgPSBkaWFsb2dFbGVtZW50LmNsb3Nlc3QoQ0RLX09WRVJMQVlfQ09OVEFJTkVSX1NFTEVDVE9SKTtcbiAgICAgIGlmIChib3VuZGFyeUVsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoQm91bmRhcnlFbGVtZW50KDxIVE1MRWxlbWVudD5ib3VuZGFyeUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgZHJhZ1JlZlN1YmplY3QubmV4dChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IG1hdERpYWxvZ1JlZiwgZHJhZ1JlZlN1YmplY3QgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNvbmZpZyhjb25maWc6IElEaWFsb2dDb25maWcpOiBNYXREaWFsb2dDb25maWcge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuICAgIGRpYWxvZ0NvbmZpZy53aWR0aCA9ICc0MDBweCc7XG4gICAgT2JqZWN0LmFzc2lnbihkaWFsb2dDb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGRpYWxvZ0NvbmZpZztcbiAgfVxufVxuIl19