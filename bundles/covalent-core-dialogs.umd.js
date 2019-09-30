(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/dialog'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/cdk/drag-drop')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/dialogs', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/dialog', '@angular/material/input', '@angular/material/button', '@angular/cdk/drag-drop'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.dialogs = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.dialog, global.ng.material.input, global.ng.material.button, global.ng.cdk['drag-drop']));
}(this, function (exports, core, common, forms, dialog, input, button, dragDrop) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>\n",
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{ closeButton }}</button>\n  </td-dialog-actions>\n</td-dialog>\n",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdAlertDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef }
        ]; };
        return TdAlertDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button mat-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" (click)=\"accept()\">\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdConfirmDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef }
        ]; };
        return TdConfirmDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                ((/** @type {?} */ (_this._input.nativeElement))).focus();
            }));
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
            { type: core.Component, args: [{
                        selector: 'td-prompt-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input\n            matInput\n            #input\n            (focus)=\"handleInputFocus()\"\n            (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n            [(ngModel)]=\"value\"\n            name=\"value\"\n            required\n          />\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      color=\"accent\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      [disabled]=\"!form.valid\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                        styles: [".td-dialog-input-wrapper{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-ms-flex:1;flex:1;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdPromptDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef }
        ]; };
        TdPromptDialogComponent.propDecorators = {
            _input: [{ type: core.ViewChild, args: ['input', { static: true },] }]
        };
        return TdPromptDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            var dialogConfig = new dialog.MatDialogConfig();
            dialogConfig.width = '400px';
            Object.assign(dialogConfig, config);
            return dialogConfig;
        };
        TdDialogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdDialogService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: dialog.MatDialog },
            { type: dragDrop.DragDrop },
            { type: core.RendererFactory2 }
        ]; };
        return TdDialogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        imports: [forms.FormsModule, common.CommonModule, dialog.MatDialogModule, input.MatInputModule, button.MatButtonModule],
                        declarations: [TD_DIALOGS],
                        exports: [TD_DIALOGS],
                        providers: [TdDialogService],
                        entryComponents: [TD_DIALOGS_ENTRY_COMPONENTS],
                    },] }
        ];
        return CovalentDialogsModule;
    }());

    exports.CovalentDialogsModule = CovalentDialogsModule;
    exports.TdAlertDialogComponent = TdAlertDialogComponent;
    exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
    exports.TdDialogActionsDirective = TdDialogActionsDirective;
    exports.TdDialogComponent = TdDialogComponent;
    exports.TdDialogContentDirective = TdDialogContentDirective;
    exports.TdDialogService = TdDialogService;
    exports.TdDialogTitleDirective = TdDialogTitleDirective;
    exports.TdPromptDialogComponent = TdPromptDialogComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-core-dialogs.umd.js.map
