(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/dialog'), require('@angular/common'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/button')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/dialogs', ['exports', '@angular/core', '@angular/material/dialog', '@angular/common', '@angular/forms', '@angular/material/input', '@angular/material/button'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.dialogs = {}),global.ng.core,global.ng.material.dialog,global.ng.common,global.ng.forms,global.ng.material.input,global.ng.material.button));
}(this, (function (exports,core,dialog,common,forms,input,button) { 'use strict';

var TdDialogTitleDirective = /** @class */ (function () {
    function TdDialogTitleDirective() {
    }
    return TdDialogTitleDirective;
}());
TdDialogTitleDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'td-dialog-title' },] },
];
TdDialogTitleDirective.ctorParameters = function () { return []; };
var TdDialogContentDirective = /** @class */ (function () {
    function TdDialogContentDirective() {
    }
    return TdDialogContentDirective;
}());
TdDialogContentDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'td-dialog-content' },] },
];
TdDialogContentDirective.ctorParameters = function () { return []; };
var TdDialogActionsDirective = /** @class */ (function () {
    function TdDialogActionsDirective() {
    }
    return TdDialogActionsDirective;
}());
TdDialogActionsDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'td-dialog-actions' },] },
];
TdDialogActionsDirective.ctorParameters = function () { return []; };
var TdDialogComponent = /** @class */ (function () {
    function TdDialogComponent() {
    }
    TdDialogComponent.prototype.ngAfterContentInit = function () {
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
    return TdDialogComponent;
}());
TdDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-dialog',
                template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>",
                styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"],
            },] },
];
TdDialogComponent.ctorParameters = function () { return []; };
TdDialogComponent.propDecorators = {
    "dialogTitle": [{ type: core.ContentChildren, args: [TdDialogTitleDirective,] },],
    "dialogContent": [{ type: core.ContentChildren, args: [TdDialogContentDirective,] },],
    "dialogActions": [{ type: core.ContentChildren, args: [TdDialogActionsDirective,] },],
};
var TdAlertDialogComponent = /** @class */ (function () {
    function TdAlertDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    TdAlertDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    return TdAlertDialogComponent;
}());
TdAlertDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-alert-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                styles: [".td-dialog-message{word-break:break-word}"],
            },] },
];
TdAlertDialogComponent.ctorParameters = function () { return [
    { type: dialog.MatDialogRef, },
]; };
var TdConfirmDialogComponent = /** @class */ (function () {
    function TdConfirmDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdConfirmDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(false);
    };
    TdConfirmDialogComponent.prototype.accept = function () {
        this._dialogRef.close(true);
    };
    return TdConfirmDialogComponent;
}());
TdConfirmDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-confirm-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                styles: [".td-dialog-message{word-break:break-word}"],
            },] },
];
TdConfirmDialogComponent.ctorParameters = function () { return [
    { type: dialog.MatDialogRef, },
]; };
var TdPromptDialogComponent = /** @class */ (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdPromptDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            ((_this._input.nativeElement)).focus();
        });
    };
    TdPromptDialogComponent.prototype.handleInputFocus = function () {
        ((this._input.nativeElement)).select();
    };
    TdPromptDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(undefined);
    };
    TdPromptDialogComponent.prototype.accept = function () {
        this._dialogRef.close(this.value);
    };
    return TdPromptDialogComponent;
}());
TdPromptDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-prompt-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input matInput\n                #input\n                (focus)=\"handleInputFocus()\"\n                (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n                [(ngModel)]=\"value\"\n                name=\"value\"\n                required/>\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            [disabled]=\"!form.valid\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                styles: [".td-dialog-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dialog-message{word-break:break-word}"],
            },] },
];
TdPromptDialogComponent.ctorParameters = function () { return [
    { type: dialog.MatDialogRef, },
]; };
TdPromptDialogComponent.propDecorators = {
    "_input": [{ type: core.ViewChild, args: ['input',] },],
};
var TdDialogService = /** @class */ (function () {
    function TdDialogService(_dialogService) {
        this._dialogService = _dialogService;
    }
    TdDialogService.prototype.open = function (component, config) {
        return this._dialogService.open(component, config);
    };
    TdDialogService.prototype.closeAll = function () {
        this._dialogService.closeAll();
    };
    TdDialogService.prototype.openAlert = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        var alertDialogComponent = dialogRef.componentInstance;
        alertDialogComponent.title = config.title;
        alertDialogComponent.message = config.message;
        if (config.closeButton) {
            alertDialogComponent.closeButton = config.closeButton;
        }
        return dialogRef;
    };
    TdDialogService.prototype.openConfirm = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
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
    TdDialogService.prototype.openPrompt = function (config) {
        var dialogConfig = this._createConfig(config);
        var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
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
    TdDialogService.prototype._createConfig = function (config) {
        var dialogConfig = new dialog.MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    };
    return TdDialogService;
}());
TdDialogService.decorators = [
    { type: core.Injectable },
];
TdDialogService.ctorParameters = function () { return [
    { type: dialog.MatDialog, },
]; };
function DIALOG_PROVIDER_FACTORY(parent, dialog$$1) {
    return parent || new TdDialogService(dialog$$1);
}
var DIALOG_PROVIDER = {
    provide: TdDialogService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdDialogService], dialog.MatDialog],
    useFactory: DIALOG_PROVIDER_FACTORY,
};
var TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
var TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
var CovalentDialogsModule = /** @class */ (function () {
    function CovalentDialogsModule() {
    }
    return CovalentDialogsModule;
}());
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
            },] },
];
CovalentDialogsModule.ctorParameters = function () { return []; };

exports.CovalentDialogsModule = CovalentDialogsModule;
exports.TdDialogTitleDirective = TdDialogTitleDirective;
exports.TdDialogContentDirective = TdDialogContentDirective;
exports.TdDialogActionsDirective = TdDialogActionsDirective;
exports.TdDialogComponent = TdDialogComponent;
exports.TdAlertDialogComponent = TdAlertDialogComponent;
exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
exports.TdPromptDialogComponent = TdPromptDialogComponent;
exports.TdDialogService = TdDialogService;
exports.DIALOG_PROVIDER_FACTORY = DIALOG_PROVIDER_FACTORY;
exports.DIALOG_PROVIDER = DIALOG_PROVIDER;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-dialogs.umd.js.map
