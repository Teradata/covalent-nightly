/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
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
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype._createConfig = /**
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
        { type: MatDialog }
    ]; };
    return TdDialogService;
}());
export { TdDialogService };
if (false) {
    /** @type {?} */
    TdDialogService.prototype._dialogService;
}
/**
 * @param {?} parent
 * @param {?} dialog
 * @return {?}
 */
export function DIALOG_PROVIDER_FACTORY(parent, dialog) {
    return parent || new TdDialogService(dialog);
}
/** @type {?} */
export var DIALOG_PROVIDER = {
    // If there is already service available, use that. Otherwise, provide a new one.
    provide: TdDialogService,
    deps: [[new Optional(), new SkipSelf(), TdDialogService], MatDialog],
    useFactory: DIALOG_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3Mvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQThCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFFbkYsbUNBR0M7OztJQUZDLDhCQUFlOztJQUNmLGdDQUFnQjs7Ozs7QUFHbEIsa0NBRUM7OztJQURDLG1DQUFxQjs7Ozs7QUFHdkIsb0NBR0M7OztJQUZDLHNDQUFzQjs7SUFDdEIsc0NBQXNCOzs7OztBQUd4QixtQ0FFQzs7O0lBREMsOEJBQWU7O0FBR2pCO0lBR0UseUJBQW9CLGNBQXlCO1FBQXpCLG1CQUFjLEdBQWQsY0FBYyxDQUFXO0lBQUcsQ0FBQztJQUVqRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7OztJQUNJLDhCQUFJOzs7Ozs7Ozs7OztJQUFYLFVBQWUsU0FBMkIsRUFBRSxNQUF3QjtRQUNsRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSxrQ0FBUTs7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHOzs7Ozs7Ozs7Ozs7Ozs7SUFDSSxtQ0FBUzs7Ozs7Ozs7Ozs7Ozs7SUFBaEIsVUFBaUIsTUFBb0I7O1lBQy9CLFlBQVksR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O1lBQzFELFNBQVMsR0FDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7O1lBQzVELG9CQUFvQixHQUEyQixTQUFTLENBQUMsaUJBQWlCO1FBQzlFLG9CQUFvQixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFDLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlDLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUN0QixvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUN2RDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSSxxQ0FBVzs7Ozs7Ozs7Ozs7Ozs7O0lBQWxCLFVBQW1CLE1BQXNCOztZQUNuQyxZQUFZLEdBQW9CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztZQUMxRCxTQUFTLEdBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsWUFBWSxDQUFDOztZQUM5RCxzQkFBc0IsR0FBNkIsU0FBUyxDQUFDLGlCQUFpQjtRQUNsRixzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM1QyxzQkFBc0IsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNoRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDdkIsc0JBQXNCLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDM0Q7UUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDdkIsc0JBQXNCLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDM0Q7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSSxvQ0FBVTs7Ozs7Ozs7Ozs7Ozs7OztJQUFqQixVQUFrQixNQUFxQjs7WUFDakMsWUFBWSxHQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7WUFDMUQsU0FBUyxHQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQzs7WUFDN0QscUJBQXFCLEdBQTRCLFNBQVMsQ0FBQyxpQkFBaUI7UUFDaEYscUJBQXFCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0MscUJBQXFCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0MscUJBQXFCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLHFCQUFxQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLHFCQUFxQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyx1Q0FBYTs7OztJQUFyQixVQUFzQixNQUFxQjs7WUFDckMsWUFBWSxHQUFvQixJQUFJLGVBQWUsRUFBRTtRQUN6RCxZQUFZLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztnQkFsSEYsVUFBVTs7OztnQkF6QkYsU0FBUzs7SUE2SWxCLHNCQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0FuSFksZUFBZTs7O0lBRWQseUNBQWlDOzs7Ozs7O0FBbUgvQyxNQUFNLFVBQVUsdUJBQXVCLENBQ25DLE1BQXVCLEVBQUUsTUFBaUI7SUFDNUMsT0FBTyxNQUFNLElBQUksSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sZUFBZSxHQUFhOztJQUV2QyxPQUFPLEVBQUUsZUFBZTtJQUN4QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxlQUFlLENBQUMsRUFBRSxTQUFTLENBQUM7SUFDcEUsVUFBVSxFQUFFLHVCQUF1QjtDQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ0NvbmZpZyBleHRlbmRzIE1hdERpYWxvZ0NvbmZpZyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFsZXJ0Q29uZmlnIGV4dGVuZHMgSURpYWxvZ0NvbmZpZyB7XG4gIGNsb3NlQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25maXJtQ29uZmlnIGV4dGVuZHMgSURpYWxvZ0NvbmZpZyB7XG4gIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9tcHRDb25maWcgZXh0ZW5kcyBJQ29uZmlybUNvbmZpZyB7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGREaWFsb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2cpIHt9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD5cbiAgICogLSBjb25maWc6IE1hdERpYWxvZ0NvbmZpZ1xuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIG9wZW4oKSBtZXRob2QgaW4gTWF0RGlhbG9nLlxuICAgKiBPcGVucyBhIG1vZGFsIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgb3BlbjxUPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ1JlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3Blbihjb21wb25lbnQsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmdW5jdGlvbiBvdmVyIHRoZSBjbG9zZUFsbCgpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIENsb3NlcyBhbGwgb2YgdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3MuXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nU2VydmljZS5jbG9zZUFsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElBbGVydENvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYW4gYWxlcnQgZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5BbGVydChjb25maWc6IElBbGVydENvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgbGV0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+ID1cbiAgICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuICAgIGxldCBhbGVydERpYWxvZ0NvbXBvbmVudDogVGRBbGVydERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBhbGVydERpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaWYgKGNvbmZpZy5jbG9zZUJ1dHRvbikge1xuICAgICAgYWxlcnREaWFsb2dDb21wb25lbnQuY2xvc2VCdXR0b24gPSBjb25maWcuY2xvc2VCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUNvbmZpcm1Db25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgICogICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIGNvbmZpcm0gZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkNvbmZpcm0oY29uZmlnOiBJQ29uZmlybUNvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiA9XG4gICAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oVGRDb25maXJtRGlhbG9nQ29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuICAgIGxldCBjb25maXJtRGlhbG9nQ29tcG9uZW50OiBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElQcm9tcHRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2YWx1ZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgcHJvbXB0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlblByb21wdChjb25maWc6IElQcm9tcHRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+ID1cbiAgICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihUZFByb21wdERpYWxvZ0NvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcbiAgICBsZXQgcHJvbXB0RGlhbG9nQ29tcG9uZW50OiBUZFByb21wdERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDb25maWcoY29uZmlnOiBJRGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nQ29uZmlnIHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG4gICAgZGlhbG9nQ29uZmlnLndpZHRoID0gJzQwMHB4JztcbiAgICBPYmplY3QuYXNzaWduKGRpYWxvZ0NvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gZGlhbG9nQ29uZmlnO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERJQUxPR19QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGREaWFsb2dTZXJ2aWNlLCBkaWFsb2c6IE1hdERpYWxvZyk6IFRkRGlhbG9nU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkRGlhbG9nU2VydmljZShkaWFsb2cpO1xufVxuXG5leHBvcnQgY29uc3QgRElBTE9HX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkRGlhbG9nU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkRGlhbG9nU2VydmljZV0sIE1hdERpYWxvZ10sXG4gIHVzZUZhY3Rvcnk6IERJQUxPR19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==