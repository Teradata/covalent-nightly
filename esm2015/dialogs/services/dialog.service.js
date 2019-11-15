/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        const dialogRef = this._dialogService.open(component, config);
        /** @type {?} */
        const CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
        /** @type {?} */
        const CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
        dialogRef.afterOpened().subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dialogElement = (/** @type {?} */ (this._document.getElementById(dialogRef.id)));
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
        }));
        return dialogRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3Mvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBS1YsTUFBTSxFQUVOLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7QUFDMUQsbUNBR0M7OztJQUZDLDhCQUFlOztJQUNmLGdDQUFnQjs7Ozs7QUFHbEIsa0NBRUM7OztJQURDLG1DQUFxQjs7Ozs7QUFHdkIsb0NBR0M7OztJQUZDLHNDQUFzQjs7SUFDdEIsc0NBQXNCOzs7OztBQUd4QixtQ0FFQzs7O0lBREMsOEJBQWU7Ozs7OztBQUdqQixzQ0FPQzs7O0lBTkMscUNBQTRCOztJQUM1QixrQ0FBeUI7O0lBRXpCLCtDQUErQjs7SUFFL0IsMENBQXdCOztBQU0xQixNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQUcxQixZQUM0QixTQUFjLEVBQ2hDLGNBQXlCLEVBQ3pCLFNBQW1CLEVBQ25CLGVBQWlDO1FBSGYsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBVztRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUV6QyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7Ozs7Ozs7OztJQVNNLElBQUksQ0FBSSxTQUEyQixFQUFFLE1BQXdCO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQU1NLFFBQVE7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQWNNLFNBQVMsQ0FBQyxNQUFvQjs7Y0FDN0IsWUFBWSxHQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7Y0FDMUQsU0FBUyxHQUF5QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUUsc0JBQXNCLEVBQ3RCLFlBQVksQ0FDYjs7Y0FDSyxvQkFBb0IsR0FBMkIsU0FBUyxDQUFDLGlCQUFpQjtRQUNoRixvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDdEIsb0JBQW9CLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDdkQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lBZU0sV0FBVyxDQUFDLE1BQXNCOztjQUNqQyxZQUFZLEdBQW9CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztjQUMxRCxTQUFTLEdBQTJDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNoRix3QkFBd0IsRUFDeEIsWUFBWSxDQUNiOztjQUNLLHNCQUFzQixHQUE2QixTQUFTLENBQUMsaUJBQWlCO1FBQ3BGLHNCQUFzQixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzVDLHNCQUFzQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixzQkFBc0IsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUMzRDtRQUNELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixzQkFBc0IsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUMzRDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JNLFVBQVUsQ0FBQyxNQUFxQjs7Y0FDL0IsWUFBWSxHQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7Y0FDMUQsU0FBUyxHQUEwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDL0UsdUJBQXVCLEVBQ3ZCLFlBQVksQ0FDYjs7Y0FDSyxxQkFBcUIsR0FBNEIsU0FBUyxDQUFDLGlCQUFpQjtRQUNsRixxQkFBcUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQyxxQkFBcUIsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQyxxQkFBcUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDdkIscUJBQXFCLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDMUQ7UUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDdkIscUJBQXFCLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7O0lBS00sYUFBYSxDQUFJLEVBQ3RCLFNBQVMsRUFDVCxNQUFNLEVBQ04sbUJBQW1CLEVBQ25CLGNBQWMsR0FDTTs7Y0FDZCxTQUFTLEdBQXlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7O2NBRTdFLHlCQUF5QixHQUFXLG1CQUFtQjs7Y0FDdkQsOEJBQThCLEdBQVcsd0JBQXdCO1FBRXZFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUMvQixhQUFhLEdBQWdCLG1CQUFhLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBQTs7a0JBQ3JGLGdCQUFnQixHQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUUxRSxJQUFJLGNBQWMsRUFBRTs7c0JBQ1osY0FBYyxHQUFZLGFBQWEsQ0FBQyxpQkFBaUI7Z0JBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUMxRDtZQUVELElBQUksbUJBQW1CLElBQUksbUJBQW1CLENBQUMsTUFBTSxFQUFFOztzQkFDL0MsV0FBVyxHQUFjLG1CQUFtQixDQUFDLE1BQU07Ozs7O2dCQUN2RCxDQUFDLEdBQWMsRUFBRSxJQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQy9GLEVBQUUsQ0FDSDtnQkFDRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUMxQixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsbUJBQWUsV0FBVyxFQUFBLENBQUMsQ0FBQztpQkFDMUQ7YUFDRjs7a0JBRUssV0FBVyxHQUFZLGFBQWEsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUM7WUFDN0UsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLG1CQUFhLFdBQVcsRUFBQSxDQUFDLENBQUM7YUFDNUQ7O2tCQUNLLGVBQWUsR0FBWSxhQUFhLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQ3RGLElBQUksZUFBZSxFQUFFO2dCQUNuQixnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBYSxlQUFlLEVBQUEsQ0FBQyxDQUFDO2FBQ3BFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsTUFBcUI7O2NBQ25DLFlBQVksR0FBb0IsSUFBSSxlQUFlLEVBQUU7UUFDM0QsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7O1lBaExGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUscUJBQXFCO2FBQ2xDOzs7OzRDQUtJLE1BQU0sU0FBQyxRQUFRO1lBM0NYLFNBQVM7WUFNVCxRQUFRO1lBUmYsZ0JBQWdCOzs7Ozs7OztJQTBDaEIscUNBQThCOzs7OztJQUc1QixvQ0FBd0M7Ozs7O0lBQ3hDLHlDQUFpQzs7Ozs7SUFDakMsb0NBQTJCOzs7OztJQUMzQiwwQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBQcm92aWRlcixcbiAgU2tpcFNlbGYsXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5Mixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvbXBvbmVudFR5cGUsIFRlbXBsYXRlUG9ydGFsLCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Byb21wdC1kaWFsb2cvcHJvbXB0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ0Ryb3AsIERyYWdSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvdmFsZW50RGlhbG9nc01vZHVsZSB9IGZyb20gJy4uL2RpYWxvZ3MubW9kdWxlJztcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ0NvbmZpZyBleHRlbmRzIE1hdERpYWxvZ0NvbmZpZyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFsZXJ0Q29uZmlnIGV4dGVuZHMgSURpYWxvZ0NvbmZpZyB7XG4gIGNsb3NlQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25maXJtQ29uZmlnIGV4dGVuZHMgSURpYWxvZ0NvbmZpZyB7XG4gIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9tcHRDb25maWcgZXh0ZW5kcyBJQ29uZmlybUNvbmZpZyB7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnZ2FibGVDb25maWc8VD4ge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD47XG4gIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZztcbiAgLy8gQ1NTIHNlbGVjdG9ycyBvZiBlbGVtZW50KHMpIGluc2lkZSB0aGUgY29tcG9uZW50IG1lYW50IHRvIGJlIGRyYWcgaGFuZGxlKHMpXG4gIGRyYWdIYW5kbGVTZWxlY3RvcnM/OiBzdHJpbmdbXTtcbiAgLy8gQ2xhc3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb21wb25lbnQgc2lnbmlmeWluZyBkcmFnLWFiaWxpdHlcbiAgZHJhZ2dhYmxlQ2xhc3M/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogQ292YWxlbnREaWFsb2dzTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX2RpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9kcmFnRHJvcDogRHJhZ0Ryb3AsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyMiA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcih1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPlxuICAgKiAtIGNvbmZpZzogTWF0RGlhbG9nQ29uZmlnXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgb3BlbigpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIE9wZW5zIGEgbW9kYWwgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBvcGVuPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKGNvbXBvbmVudCwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIGNsb3NlQWxsKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9ncy5cbiAgICovXG4gIHB1YmxpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLmNsb3NlQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUFsZXJ0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhbiBhbGVydCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkFsZXJ0KGNvbmZpZzogSUFsZXJ0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRBbGVydERpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGNvbnN0IGFsZXJ0RGlhbG9nQ29tcG9uZW50OiBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmNsb3NlQnV0dG9uKSB7XG4gICAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5jbG9zZUJ1dHRvbiA9IGNvbmZpZy5jbG9zZUJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQ29uZmlybUNvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgY29uZmlybSBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuQ29uZmlybShjb25maWc6IElDb25maXJtQ29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgICAgIGRpYWxvZ0NvbmZpZyxcbiAgICApO1xuICAgIGNvbnN0IGNvbmZpcm1EaWFsb2dDb21wb25lbnQ6IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIGlmIChjb25maWcuYWNjZXB0QnV0dG9uKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRCdXR0b247XG4gICAgfVxuICAgIGlmIChjb25maWcuY2FuY2VsQnV0dG9uKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSVByb21wdENvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZhbHVlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYSBwcm9tcHQgZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuUHJvbXB0KGNvbmZpZzogSVByb21wdENvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+ID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG4gICAgICBkaWFsb2dDb25maWcsXG4gICAgKTtcbiAgICBjb25zdCBwcm9tcHREaWFsb2dDb21wb25lbnQ6IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC52YWx1ZSA9IGNvbmZpZy52YWx1ZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRCdXR0b247XG4gICAgfVxuICAgIGlmIChjb25maWcuY2FuY2VsQnV0dG9uKSB7XG4gICAgICBwcm9tcHREaWFsb2dDb21wb25lbnQuY2FuY2VsQnV0dG9uID0gY29uZmlnLmNhbmNlbEJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIGRyYWdnYWJsZSBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIG9wZW5EcmFnZ2FibGU8VD4oe1xuICAgIGNvbXBvbmVudCxcbiAgICBjb25maWcsXG4gICAgZHJhZ0hhbmRsZVNlbGVjdG9ycyxcbiAgICBkcmFnZ2FibGVDbGFzcyxcbiAgfTogSURyYWdnYWJsZUNvbmZpZzxUPik6IE1hdERpYWxvZ1JlZjxUPiB7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VCwgYW55PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3Blbihjb21wb25lbnQsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBDREtfT1ZFUkxBWV9QQU5FX1NFTEVDVE9SOiBzdHJpbmcgPSAnLmNkay1vdmVybGF5LXBhbmUnO1xuICAgIGNvbnN0IENES19PVkVSTEFZX0NPTlRBSU5FUl9TRUxFQ1RPUjogc3RyaW5nID0gJy5jZGstb3ZlcmxheS1jb250YWluZXInO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpYWxvZ0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpYWxvZ1JlZi5pZCk7XG4gICAgICBjb25zdCBkcmFnZ2FibGVFbGVtZW50OiBEcmFnUmVmID0gdGhpcy5fZHJhZ0Ryb3AuY3JlYXRlRHJhZyhkaWFsb2dFbGVtZW50KTtcblxuICAgICAgaWYgKGRyYWdnYWJsZUNsYXNzKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKGNoaWxkQ29tcG9uZW50LCBkcmFnZ2FibGVDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnSGFuZGxlU2VsZWN0b3JzICYmIGRyYWdIYW5kbGVTZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRyYWdIYW5kbGVzOiBFbGVtZW50W10gPSBkcmFnSGFuZGxlU2VsZWN0b3JzLnJlZHVjZShcbiAgICAgICAgICAoYWNjOiBFbGVtZW50W10sIGN1cnI6IHN0cmluZykgPT4gWy4uLmFjYywgLi4uQXJyYXkuZnJvbShkaWFsb2dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY3VycikpXSxcbiAgICAgICAgICBbXSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGRyYWdIYW5kbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkcmFnZ2FibGVFbGVtZW50LndpdGhIYW5kbGVzKDxIVE1MRWxlbWVudFtdPmRyYWdIYW5kbGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb290RWxlbWVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuY2xvc2VzdChDREtfT1ZFUkxBWV9QQU5FX1NFTEVDVE9SKTtcbiAgICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LndpdGhSb290RWxlbWVudCg8SFRNTEVsZW1lbnQ+cm9vdEVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgY29uc3QgYm91bmRhcnlFbGVtZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5jbG9zZXN0KENES19PVkVSTEFZX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG4gICAgICBpZiAoYm91bmRhcnlFbGVtZW50KSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aEJvdW5kYXJ5RWxlbWVudCg8SFRNTEVsZW1lbnQ+Ym91bmRhcnlFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDb25maWcoY29uZmlnOiBJRGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nQ29uZmlnIHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICBkaWFsb2dDb25maWcud2lkdGggPSAnNDAwcHgnO1xuICAgIE9iamVjdC5hc3NpZ24oZGlhbG9nQ29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiBkaWFsb2dDb25maWc7XG4gIH1cbn1cbiJdfQ==