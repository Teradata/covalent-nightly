(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/dialog'), require('@angular/common'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/dialogs', ['exports', '@angular/core', '@angular/material/dialog', '@angular/common', '@angular/forms', '@angular/material/input', '@angular/material/button'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.dialogs = {}),global.ng.core,global.ng.material.dialog,global.ng.common,global.ng.forms,global.ng.material.input,global.ng.material.button));
}(this, (function (exports,core,dialog,common,forms,input,button) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDialogTitleDirective = /** @class */ (function () {
        function TdDialogTitleDirective() {
        }
        TdDialogTitleDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-title' },] }
        ];
        return TdDialogTitleDirective;
    }());
    var TdDialogContentDirective = /** @class */ (function () {
        function TdDialogContentDirective() {
        }
        TdDialogContentDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-content' },] }
        ];
        return TdDialogContentDirective;
    }());
    var TdDialogActionsDirective = /** @class */ (function () {
        function TdDialogActionsDirective() {
        }
        TdDialogActionsDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-actions' },] }
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
            { type: core.Component, args: [{
                        selector: 'td-dialog',
                        template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>",
                        styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
                    }] }
        ];
        TdDialogComponent.propDecorators = {
            dialogTitle: [{ type: core.ContentChildren, args: [TdDialogTitleDirective,] }],
            dialogContent: [{ type: core.ContentChildren, args: [TdDialogContentDirective,] }],
            dialogActions: [{ type: core.ContentChildren, args: [TdDialogActionsDirective,] }]
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
            { type: core.Component, args: [{
                        selector: 'td-alert-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdAlertDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
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
            { type: core.Component, args: [{
                        selector: 'td-confirm-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdConfirmDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
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
                    (( /** @type {?} */(_this._input.nativeElement))).focus();
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
                (( /** @type {?} */(this._input.nativeElement))).select();
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
            { type: core.Component, args: [{
                        selector: 'td-prompt-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input matInput\n                #input\n                (focus)=\"handleInputFocus()\"\n                (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n                [(ngModel)]=\"value\"\n                name=\"value\"\n                required/>\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            [disabled]=\"!form.valid\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-input-wrapper{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-ms-flex:1;flex:1;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdPromptDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
        TdPromptDialogComponent.propDecorators = {
            _input: [{ type: core.ViewChild, args: ['input',] }]
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
                var dialogConfig = new dialog.MatDialogConfig();
                dialogConfig.width = '400px';
                Object.assign(dialogConfig, config);
                return dialogConfig;
            };
        TdDialogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdDialogService.ctorParameters = function () {
            return [
                { type: dialog.MatDialog }
            ];
        };
        return TdDialogService;
    }());
    /**
     * @param {?} parent
     * @param {?} dialog
     * @return {?}
     */
    function DIALOG_PROVIDER_FACTORY(parent, dialog$$1) {
        return parent || new TdDialogService(dialog$$1);
    }
    /** @type {?} */
    var DIALOG_PROVIDER = {
        // If there is already service available, use that. Otherwise, provide a new one.
        provide: TdDialogService,
        deps: [[new core.Optional(), new core.SkipSelf(), TdDialogService], dialog.MatDialog],
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
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            dialog.MatDialogModule,
                            input.MatInputModule,
                            button.MatButtonModule,
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

    exports.CovalentDialogsModule = CovalentDialogsModule;
    exports.TdDialogTitleDirective = TdDialogTitleDirective;
    exports.TdDialogContentDirective = TdDialogContentDirective;
    exports.TdDialogActionsDirective = TdDialogActionsDirective;
    exports.TdDialogComponent = TdDialogComponent;
    exports.TdAlertDialogComponent = TdAlertDialogComponent;
    exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
    exports.TdPromptDialogComponent = TdPromptDialogComponent;
    exports.DIALOG_PROVIDER_FACTORY = DIALOG_PROVIDER_FACTORY;
    exports.TdDialogService = TdDialogService;
    exports.DIALOG_PROVIDER = DIALOG_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1kaWFsb2dzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvZGlhbG9ncy9kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvZGlhbG9ncy9wcm9tcHQtZGlhbG9nL3Byb21wdC1kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzL2RpYWxvZ3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ3RkLWRpYWxvZy10aXRsZSd9KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nVGl0bGVEaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICd0ZC1kaWFsb2ctY29udGVudCd9KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ3RkLWRpYWxvZy1hY3Rpb25zJ30pXG5leHBvcnQgY2xhc3MgVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZERpYWxvZ1RpdGxlRGlyZWN0aXZlKSBkaWFsb2dUaXRsZTogUXVlcnlMaXN0PFRkRGlhbG9nVGl0bGVEaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSkgZGlhbG9nQ29udGVudDogUXVlcnlMaXN0PFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlKSBkaWFsb2dBY3Rpb25zOiBRdWVyeUxpc3Q8VGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nVGl0bGUubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgdGQtZGlhbG9nLXRpdGxlIGNvbXBvbmVudCBhdCBpbiB0ZC1kaWFsb2cuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpYWxvZ0NvbnRlbnQubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgdGQtZGlhbG9nLWNvbnRlbnQgY29tcG9uZW50IGF0IGluIHRkLWRpYWxvZy4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlhbG9nQWN0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSB0ZC1kaWFsb2ctYWN0aW9ucyBjb21wb25lbnQgYXQgaW4gdGQtZGlhbG9nLicpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWFsZXJ0LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQWxlcnREaWFsb2dDb21wb25lbnQge1xuICB0aXRsZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGNsb3NlQnV0dG9uOiBzdHJpbmcgPSAnQ0xPU0UnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+KSB7fVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNvbmZpcm0tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uOiBzdHJpbmcgPSAnQ0FOQ0VMJztcbiAgYWNjZXB0QnV0dG9uOiBzdHJpbmcgPSAnQUNDRVBUJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+KSB7fVxuXG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UoZmFsc2UpO1xuICB9XG5cbiAgYWNjZXB0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXByb21wdC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb21wdC1kaWFsb2cuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uOiBzdHJpbmcgPSAnQ0FOQ0VMJztcbiAgYWNjZXB0QnV0dG9uOiBzdHJpbmcgPSAnQUNDRVBUJztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIF9pbnB1dDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4pIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIGZvY3VzIGlucHV0IG9uY2UgZXZlcnl0aGluZyBpcyByZW5kZXJlZCBhbmQgZ29vZCB0byBnb1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuX2lucHV0Lm5hdGl2ZUVsZW1lbnQpLmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gaW5wdXQgaXMgZm9jdXNlZFxuICAgKiBTZWxlY3RzIGFsbCB0ZXh0XG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzKCk6IHZvaWQge1xuICAgICg8SFRNTElucHV0RWxlbWVudD50aGlzLl9pbnB1dC5uYXRpdmVFbGVtZW50KS5zZWxlY3QoKTtcbiAgfVxuXG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UodW5kZWZpbmVkKTtcbiAgfVxuXG4gIGFjY2VwdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ0NvbmZpZyBleHRlbmRzIE1hdERpYWxvZ0NvbmZpZyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFsZXJ0Q29uZmlnIGV4dGVuZHMgSURpYWxvZ0NvbmZpZyB7XG4gIGNsb3NlQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25maXJtQ29uZmlnIGV4dGVuZHMgSURpYWxvZ0NvbmZpZyB7XG4gIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9tcHRDb25maWcgZXh0ZW5kcyBJQ29uZmlybUNvbmZpZyB7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGREaWFsb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2cpIHt9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD5cbiAgICogLSBjb25maWc6IE1hdERpYWxvZ0NvbmZpZ1xuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIG9wZW4oKSBtZXRob2QgaW4gTWF0RGlhbG9nLlxuICAgKiBPcGVucyBhIG1vZGFsIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgb3BlbjxUPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ1JlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3Blbihjb21wb25lbnQsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmdW5jdGlvbiBvdmVyIHRoZSBjbG9zZUFsbCgpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIENsb3NlcyBhbGwgb2YgdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3MuXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nU2VydmljZS5jbG9zZUFsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElBbGVydENvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYW4gYWxlcnQgZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5BbGVydChjb25maWc6IElBbGVydENvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgbGV0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+ID1cbiAgICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuICAgIGxldCBhbGVydERpYWxvZ0NvbXBvbmVudDogVGRBbGVydERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBhbGVydERpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaWYgKGNvbmZpZy5jbG9zZUJ1dHRvbikge1xuICAgICAgYWxlcnREaWFsb2dDb21wb25lbnQuY2xvc2VCdXR0b24gPSBjb25maWcuY2xvc2VCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUNvbmZpcm1Db25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgICogICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIGNvbmZpcm0gZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkNvbmZpcm0oY29uZmlnOiBJQ29uZmlybUNvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiA9XG4gICAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oVGRDb25maXJtRGlhbG9nQ29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuICAgIGxldCBjb25maXJtRGlhbG9nQ29tcG9uZW50OiBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElQcm9tcHRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2YWx1ZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgcHJvbXB0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlblByb21wdChjb25maWc6IElQcm9tcHRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+ID1cbiAgICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihUZFByb21wdERpYWxvZ0NvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcbiAgICBsZXQgcHJvbXB0RGlhbG9nQ29tcG9uZW50OiBUZFByb21wdERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDb25maWcoY29uZmlnOiBJRGlhbG9nQ29uZmlnKTogTWF0RGlhbG9nQ29uZmlnIHtcbiAgICBsZXQgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG4gICAgZGlhbG9nQ29uZmlnLndpZHRoID0gJzQwMHB4JztcbiAgICBPYmplY3QuYXNzaWduKGRpYWxvZ0NvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gZGlhbG9nQ29uZmlnO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERJQUxPR19QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGREaWFsb2dTZXJ2aWNlLCBkaWFsb2c6IE1hdERpYWxvZyk6IFRkRGlhbG9nU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkRGlhbG9nU2VydmljZShkaWFsb2cpO1xufVxuXG5leHBvcnQgY29uc3QgRElBTE9HX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkRGlhbG9nU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkRGlhbG9nU2VydmljZV0sIE1hdERpYWxvZ10sXG4gIHVzZUZhY3Rvcnk6IERJQUxPR19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbmltcG9ydCB7IFRkRGlhbG9nQ29tcG9uZW50LCBUZERpYWxvZ1RpdGxlRGlyZWN0aXZlLFxuICAgICAgICAgVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlLCBUZERpYWxvZ0NvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRQcm9tcHREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3Byb21wdC1kaWFsb2cvcHJvbXB0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRElBTE9HX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZSc7XG5cbmNvbnN0IFREX0RJQUxPR1M6IFR5cGU8YW55PltdID0gW1xuICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gIFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50LFxuICBUZERpYWxvZ0NvbXBvbmVudCxcbiAgVGREaWFsb2dUaXRsZURpcmVjdGl2ZSxcbiAgVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlLFxuICBUZERpYWxvZ0NvbnRlbnREaXJlY3RpdmUsXG5dO1xuXG5jb25zdCBURF9ESUFMT0dTX0VOVFJZX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gIFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9ESUFMT0dTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfRElBTE9HUyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRElBTE9HX1BST1ZJREVSLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBURF9ESUFMT0dTX0VOVFJZX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50RGlhbG9nc01vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJDb21wb25lbnQiLCJDb250ZW50Q2hpbGRyZW4iLCJNYXREaWFsb2dSZWYiLCJWaWV3Q2hpbGQiLCJNYXREaWFsb2dDb25maWciLCJJbmplY3RhYmxlIiwiTWF0RGlhbG9nIiwiZGlhbG9nIiwiT3B0aW9uYWwiLCJTa2lwU2VsZiIsIk5nTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBRUE7U0FDc0M7O29CQURyQ0EsY0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFDOztRQUNILDZCQUFDO0tBRHRDLElBQ3NDOztRQUV0QztTQUN3Qzs7b0JBRHZDQSxjQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7O1FBQ0gsK0JBQUM7S0FEeEMsSUFDd0M7O1FBRXhDO1NBQ3dDOztvQkFEdkNBLGNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBQzs7UUFDSCwrQkFBQztLQUR4QyxJQUN3Qzs7UUFFeEM7U0F1QkM7Ozs7UUFaQyw4Q0FBa0I7OztZQUFsQjtnQkFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO2lCQUN6RTtnQkFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FB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