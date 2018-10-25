import { Component, Directive, ContentChildren, ViewChild, Injectable, SkipSelf, Optional, NgModule } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdDialogTitleDirective = /** @class */ (function () {
    function TdDialogTitleDirective() {
    }
    TdDialogTitleDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-title' },] }
    ];
    return TdDialogTitleDirective;
}());
var TdDialogContentDirective = /** @class */ (function () {
    function TdDialogContentDirective() {
    }
    TdDialogContentDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-content' },] }
    ];
    return TdDialogContentDirective;
}());
var TdDialogActionsDirective = /** @class */ (function () {
    function TdDialogActionsDirective() {
    }
    TdDialogActionsDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-actions' },] }
    ];
    return TdDialogActionsDirective;
}());
var TdDialogComponent = /** @class */ (function () {
    function TdDialogComponent() {
    }
    /**
     * @return {?}
     */
    TdDialogComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate td-dialog-title component at in td-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate td-dialog-content component at in td-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
        }
    };
    TdDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-dialog',
                    template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>",
                    styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
                }] }
    ];
    TdDialogComponent.propDecorators = {
        dialogTitle: [{ type: ContentChildren, args: [TdDialogTitleDirective,] }],
        dialogContent: [{ type: ContentChildren, args: [TdDialogContentDirective,] }],
        dialogActions: [{ type: ContentChildren, args: [TdDialogActionsDirective,] }]
    };
    return TdDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdAlertDialogComponent = /** @class */ (function () {
    function TdAlertDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    /**
     * @return {?}
     */
    TdAlertDialogComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close();
    };
    TdAlertDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-alert-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                    styles: [".td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdAlertDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    return TdAlertDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdConfirmDialogComponent = /** @class */ (function () {
    function TdConfirmDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(false);
    };
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(true);
    };
    TdConfirmDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-confirm-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                    styles: [".td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdConfirmDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    return TdConfirmDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdPromptDialogComponent = /** @class */ (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // focus input once everything is rendered and good to go
        Promise.resolve().then(function () {
            ((/** @type {?} */ (_this._input.nativeElement))).focus();
        });
    };
    /**
     * Method executed when input is focused
     * Selects all text
     */
    /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    TdPromptDialogComponent.prototype.handleInputFocus = /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this._input.nativeElement))).select();
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(undefined);
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(this.value);
    };
    TdPromptDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-prompt-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input matInput\n                #input\n                (focus)=\"handleInputFocus()\"\n                (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n                [(ngModel)]=\"value\"\n                name=\"value\"\n                required/>\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            [disabled]=\"!form.valid\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                    styles: [".td-dialog-input-wrapper{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-ms-flex:1;flex:1;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdPromptDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    TdPromptDialogComponent.propDecorators = {
        _input: [{ type: ViewChild, args: ['input',] }]
    };
    return TdPromptDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
/**
 * @param {?} parent
 * @param {?} dialog
 * @return {?}
 */
function DIALOG_PROVIDER_FACTORY(parent, dialog) {
    return parent || new TdDialogService(dialog);
}
/** @type {?} */
var DIALOG_PROVIDER = {
    // If there is already service available, use that. Otherwise, provide a new one.
    provide: TdDialogService,
    deps: [[new Optional(), new SkipSelf(), TdDialogService], MatDialog],
    useFactory: DIALOG_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
/** @type {?} */
var TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
var CovalentDialogsModule = /** @class */ (function () {
    function CovalentDialogsModule() {
    }
    CovalentDialogsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule,
                        MatDialogModule,
                        MatInputModule,
                        MatButtonModule,
                    ],
                    declarations: [
                        TD_DIALOGS,
                    ],
                    exports: [
                        TD_DIALOGS,
                    ],
                    providers: [
                        DIALOG_PROVIDER,
                    ],
                    entryComponents: [
                        TD_DIALOGS_ENTRY_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentDialogsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentDialogsModule, TdDialogTitleDirective, TdDialogContentDirective, TdDialogActionsDirective, TdDialogComponent, TdAlertDialogComponent, TdConfirmDialogComponent, TdPromptDialogComponent, DIALOG_PROVIDER_FACTORY, TdDialogService, DIALOG_PROVIDER };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1kaWFsb2dzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzL2RpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3MvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzL3Byb21wdC1kaWFsb2cvcHJvbXB0LWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3Mvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3MvZGlhbG9ncy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAndGQtZGlhbG9nLXRpdGxlJ30pXG5leHBvcnQgY2xhc3MgVGREaWFsb2dUaXRsZURpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ3RkLWRpYWxvZy1jb250ZW50J30pXG5leHBvcnQgY2xhc3MgVGREaWFsb2dDb250ZW50RGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAndGQtZGlhbG9nLWFjdGlvbnMnfSlcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKFRkRGlhbG9nVGl0bGVEaXJlY3RpdmUpIGRpYWxvZ1RpdGxlOiBRdWVyeUxpc3Q8VGREaWFsb2dUaXRsZURpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREaWFsb2dDb250ZW50RGlyZWN0aXZlKSBkaWFsb2dDb250ZW50OiBRdWVyeUxpc3Q8VGREaWFsb2dDb250ZW50RGlyZWN0aXZlPjtcbiAgQENvbnRlbnRDaGlsZHJlbihUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUpIGRpYWxvZ0FjdGlvbnM6IFF1ZXJ5TGlzdDxUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmU+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2dUaXRsZS5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSB0ZC1kaWFsb2ctdGl0bGUgY29tcG9uZW50IGF0IGluIHRkLWRpYWxvZy4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlhbG9nQ29udGVudC5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSB0ZC1kaWFsb2ctY29udGVudCBjb21wb25lbnQgYXQgaW4gdGQtZGlhbG9nLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWFsb2dBY3Rpb25zLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIHRkLWRpYWxvZy1hY3Rpb25zIGNvbXBvbmVudCBhdCBpbiB0ZC1kaWFsb2cuJyk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYWxlcnQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY2xvc2VCdXR0b246IHN0cmluZyA9ICdDTE9TRSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4pIHt9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY29uZmlybS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBjYW5jZWxCdXR0b246IHN0cmluZyA9ICdDQU5DRUwnO1xuICBhY2NlcHRCdXR0b246IHN0cmluZyA9ICdBQ0NFUFQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4pIHt9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XG4gIH1cblxuICBhY2NlcHQoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcHJvbXB0LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvbXB0LWRpYWxvZy5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRQcm9tcHREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBjYW5jZWxCdXR0b246IHN0cmluZyA9ICdDQU5DRUwnO1xuICBhY2NlcHRCdXR0b246IHN0cmluZyA9ICdBQ0NFUFQnO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgX2lucHV0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50Pikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gZm9jdXMgaW5wdXQgb25jZSBldmVyeXRoaW5nIGlzIHJlbmRlcmVkIGFuZCBnb29kIHRvIGdvXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5faW5wdXQubmF0aXZlRWxlbWVudCkuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiBpbnB1dCBpcyBmb2N1c2VkXG4gICAqIFNlbGVjdHMgYWxsIHRleHRcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMoKTogdm9pZCB7XG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuX2lucHV0Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdCgpO1xuICB9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSh1bmRlZmluZWQpO1xuICB9XG5cbiAgYWNjZXB0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmltcG9ydCB7IFRkQWxlcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRQcm9tcHREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9wcm9tcHQtZGlhbG9nL3Byb21wdC1kaWFsb2cuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nQ29uZmlnIGV4dGVuZHMgTWF0RGlhbG9nQ29uZmlnIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRDb25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1Db25maWcgZXh0ZW5kcyBJRGlhbG9nQ29uZmlnIHtcbiAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wdENvbmZpZyBleHRlbmRzIElDb25maXJtQ29uZmlnIHtcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1NlcnZpY2U6IE1hdERpYWxvZykge31cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPlxuICAgKiAtIGNvbmZpZzogTWF0RGlhbG9nQ29uZmlnXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgb3BlbigpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIE9wZW5zIGEgbW9kYWwgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBvcGVuPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKGNvbXBvbmVudCwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIGNsb3NlQWxsKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9ncy5cbiAgICovXG4gIHB1YmxpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLmNsb3NlQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUFsZXJ0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhbiBhbGVydCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkFsZXJ0KGNvbmZpZzogSUFsZXJ0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gPVxuICAgICAgdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFRkQWxlcnREaWFsb2dDb21wb25lbnQsIGRpYWxvZ0NvbmZpZyk7XG4gICAgbGV0IGFsZXJ0RGlhbG9nQ29tcG9uZW50OiBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmNsb3NlQnV0dG9uKSB7XG4gICAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5jbG9zZUJ1dHRvbiA9IGNvbmZpZy5jbG9zZUJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQ29uZmlybUNvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgY29uZmlybSBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuQ29uZmlybShjb25maWc6IElDb25maXJtQ29uZmlnKTogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGxldCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGxldCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+ID1cbiAgICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihUZENvbmZpcm1EaWFsb2dDb21wb25lbnQsIGRpYWxvZ0NvbmZpZyk7XG4gICAgbGV0IGNvbmZpcm1EaWFsb2dDb21wb25lbnQ6IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIGlmIChjb25maWcuYWNjZXB0QnV0dG9uKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRCdXR0b247XG4gICAgfVxuICAgIGlmIChjb25maWcuY2FuY2VsQnV0dG9uKSB7XG4gICAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSVByb21wdENvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZhbHVlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYSBwcm9tcHQgZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuUHJvbXB0KGNvbmZpZzogSVByb21wdENvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGxldCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGxldCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gPVxuICAgICAgdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuICAgIGxldCBwcm9tcHREaWFsb2dDb21wb25lbnQ6IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC52YWx1ZSA9IGNvbmZpZy52YWx1ZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRCdXR0b247XG4gICAgfVxuICAgIGlmIChjb25maWcuY2FuY2VsQnV0dG9uKSB7XG4gICAgICBwcm9tcHREaWFsb2dDb21wb25lbnQuY2FuY2VsQnV0dG9uID0gY29uZmlnLmNhbmNlbEJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUNvbmZpZyhjb25maWc6IElEaWFsb2dDb25maWcpOiBNYXREaWFsb2dDb25maWcge1xuICAgIGxldCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICBkaWFsb2dDb25maWcud2lkdGggPSAnNDAwcHgnO1xuICAgIE9iamVjdC5hc3NpZ24oZGlhbG9nQ29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiBkaWFsb2dDb25maWc7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gRElBTE9HX1BST1ZJREVSX0ZBQ1RPUlkoXG4gICAgcGFyZW50OiBUZERpYWxvZ1NlcnZpY2UsIGRpYWxvZzogTWF0RGlhbG9nKTogVGREaWFsb2dTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGREaWFsb2dTZXJ2aWNlKGRpYWxvZyk7XG59XG5cbmV4cG9ydCBjb25zdCBESUFMT0dfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGREaWFsb2dTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGREaWFsb2dTZXJ2aWNlXSwgTWF0RGlhbG9nXSxcbiAgdXNlRmFjdG9yeTogRElBTE9HX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuaW1wb3J0IHsgVGREaWFsb2dDb21wb25lbnQsIFRkRGlhbG9nVGl0bGVEaXJlY3RpdmUsXG4gICAgICAgICBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUsIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBESUFMT0dfUFJPVklERVIgfSBmcm9tICcuL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcblxuY29uc3QgVERfRElBTE9HUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQWxlcnREaWFsb2dDb21wb25lbnQsXG4gIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG4gIFRkRGlhbG9nQ29tcG9uZW50LFxuICBUZERpYWxvZ1RpdGxlRGlyZWN0aXZlLFxuICBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUsXG4gIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSxcbl07XG5cbmNvbnN0IFREX0RJQUxPR1NfRU5UUllfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQWxlcnREaWFsb2dDb21wb25lbnQsXG4gIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0RJQUxPR1MsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9ESUFMT0dTLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBESUFMT0dfUFJPVklERVIsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFREX0RJQUxPR1NfRU5UUllfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnREaWFsb2dzTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUFFQTtLQUNzQzs7Z0JBRHJDLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBQzs7SUFDSCw2QkFBQztDQUR0QyxJQUNzQzs7SUFFdEM7S0FDd0M7O2dCQUR2QyxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7O0lBQ0gsK0JBQUM7Q0FEeEMsSUFDd0M7O0lBRXhDO0tBQ3dDOztnQkFEdkMsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFDOztJQUNILCtCQUFDO0NBRHhDLElBQ3dDOztJQUV4QztLQXVCQzs7OztJQVpDLDhDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1NBQzNFO0tBQ0Y7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHFnQkFBc0M7O2lCQUV2Qzs7OzhCQUdFLGVBQWUsU0FBQyxzQkFBc0I7Z0NBQ3RDLGVBQWUsU0FBQyx3QkFBd0I7Z0NBQ3hD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