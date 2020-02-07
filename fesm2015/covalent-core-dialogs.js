import { Directive, Component, ContentChildren, ViewChild, Injectable, Inject, RendererFactory2, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogConfig, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DragDrop } from '@angular/cdk/drag-drop';
import { Subject, fromEvent, merge } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdDialogTitleDirective {
}
TdDialogTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-title' },] }
];
class TdDialogContentDirective {
}
TdDialogContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-content' },] }
];
class TdDialogActionsDirective {
}
TdDialogActionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-actions' },] }
];
class TdDialogComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate td-dialog-title component at in td-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate td-dialog-content component at in td-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
        }
    }
}
TdDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dialog',
                template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>\n",
                styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
            }] }
];
TdDialogComponent.propDecorators = {
    dialogTitle: [{ type: ContentChildren, args: [TdDialogTitleDirective, { descendants: true },] }],
    dialogContent: [{ type: ContentChildren, args: [TdDialogContentDirective, { descendants: true },] }],
    dialogActions: [{ type: ContentChildren, args: [TdDialogActionsDirective, { descendants: true },] }]
};
if (false) {
    /** @type {?} */
    TdDialogComponent.prototype.dialogTitle;
    /** @type {?} */
    TdDialogComponent.prototype.dialogContent;
    /** @type {?} */
    TdDialogComponent.prototype.dialogActions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdAlertDialogComponent {
    /**
     * @param {?} _dialogRef
     */
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    /**
     * @return {?}
     */
    close() {
        this._dialogRef.close();
    }
}
TdAlertDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-alert-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{ closeButton }}</button>\n  </td-dialog-actions>\n</td-dialog>\n",
                styles: [".td-dialog-message{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdAlertDialogComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
if (false) {
    /** @type {?} */
    TdAlertDialogComponent.prototype.title;
    /** @type {?} */
    TdAlertDialogComponent.prototype.message;
    /** @type {?} */
    TdAlertDialogComponent.prototype.closeButton;
    /**
     * @type {?}
     * @private
     */
    TdAlertDialogComponent.prototype._dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdConfirmDialogComponent {
    /**
     * @param {?} _dialogRef
     */
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    cancel() {
        this._dialogRef.close(false);
    }
    /**
     * @return {?}
     */
    accept() {
        this._dialogRef.close(true);
    }
}
TdConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-confirm-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button mat-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" (click)=\"accept()\">\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                styles: [".td-dialog-message{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdConfirmDialogComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
if (false) {
    /** @type {?} */
    TdConfirmDialogComponent.prototype.title;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.message;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.cancelButton;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.acceptButton;
    /**
     * @type {?}
     * @private
     */
    TdConfirmDialogComponent.prototype._dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdPromptDialogComponent {
    /**
     * @param {?} _dialogRef
     */
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // focus input once everything is rendered and good to go
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            ((/** @type {?} */ (this._input.nativeElement))).focus();
        }));
    }
    /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    handleInputFocus() {
        ((/** @type {?} */ (this._input.nativeElement))).select();
    }
    /**
     * @return {?}
     */
    cancel() {
        this._dialogRef.close();
    }
    /**
     * @return {?}
     */
    accept() {
        this._dialogRef.close(this.value);
    }
}
TdPromptDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-prompt-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input\n            matInput\n            #input\n            (focus)=\"handleInputFocus()\"\n            (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n            [(ngModel)]=\"value\"\n            name=\"value\"\n            required\n          />\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      color=\"accent\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      [disabled]=\"!form.valid\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                styles: [".td-dialog-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-webkit-box-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdPromptDialogComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
TdPromptDialogComponent.propDecorators = {
    _input: [{ type: ViewChild, args: ['input', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TdPromptDialogComponent.prototype.title;
    /** @type {?} */
    TdPromptDialogComponent.prototype.message;
    /** @type {?} */
    TdPromptDialogComponent.prototype.value;
    /** @type {?} */
    TdPromptDialogComponent.prototype.cancelButton;
    /** @type {?} */
    TdPromptDialogComponent.prototype.acceptButton;
    /** @type {?} */
    TdPromptDialogComponent.prototype._input;
    /**
     * @type {?}
     * @private
     */
    TdPromptDialogComponent.prototype._dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IDialogConfig() { }
if (false) {
    /** @type {?|undefined} */
    IDialogConfig.prototype.title;
    /** @type {?} */
    IDialogConfig.prototype.message;
}
/**
 * @record
 */
function IAlertConfig() { }
if (false) {
    /** @type {?|undefined} */
    IAlertConfig.prototype.closeButton;
}
/**
 * @record
 */
function IConfirmConfig() { }
if (false) {
    /** @type {?|undefined} */
    IConfirmConfig.prototype.acceptButton;
    /** @type {?|undefined} */
    IConfirmConfig.prototype.cancelButton;
}
/**
 * @record
 */
function IPromptConfig() { }
if (false) {
    /** @type {?|undefined} */
    IPromptConfig.prototype.value;
}
/**
 * @record
 * @template T
 */
function IDraggableConfig() { }
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
function IDraggableRefs() { }
if (false) {
    /** @type {?} */
    IDraggableRefs.prototype.matDialogRef;
    /** @type {?} */
    IDraggableRefs.prototype.dragRefSubject;
}
class TdDialogService {
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
    { type: Injectable }
];
/** @nocollapse */
TdDialogService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: MatDialog },
    { type: DragDrop },
    { type: RendererFactory2 }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
/** @type {?} */
const TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
class CovalentDialogsModule {
}
CovalentDialogsModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule, MatDialogModule, MatInputModule, MatButtonModule],
                declarations: [TD_DIALOGS],
                exports: [TD_DIALOGS],
                providers: [TdDialogService],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const corners = {
    topRight: 'topRight',
    bottomRight: 'bottomRight',
    bottomLeft: 'bottomLeft',
    topLeft: 'topLeft',
};
/** @enum {string} */
const cursors = {
    nesw: 'nesw-resize',
    nwse: 'nwse-resize',
};
/** @enum {string} */
const verticalAlignment = {
    top: 'top',
    bottom: 'bottom',
};
/** @enum {string} */
const horizontalAlignment = {
    right: 'right',
    left: 'left',
};
/** @type {?} */
const cornerWidth = '16px';
/** @type {?} */
const offset = '0px';
/** @type {?} */
const minWidth = 200;
/** @type {?} */
const minHeight = 200;
/**
 * @param {?} sizeString
 * @return {?}
 */
function getPixels(sizeString) {
    return parseFloat((sizeString || '').replace('px', ''));
}
/**
 * @param {?} min
 * @param {?} num
 * @param {?} max
 * @return {?}
 */
function clamp(min, num, max) {
    return Math.min(Math.max(num, min), max);
}
class ResizableDraggableDialog {
    /**
     * @param {?} _document
     * @param {?} _renderer2
     * @param {?} _dialogRef
     * @param {?} _dragRef
     */
    constructor(_document, _renderer2, _dialogRef, _dragRef) {
        this._document = _document;
        this._renderer2 = _renderer2;
        this._dialogRef = _dialogRef;
        this._dragRef = _dragRef;
        this.cornerElements = [];
        this.pointerDownSubs = [];
        this._initialPositionReset();
        this._attachCorners();
    }
    /**
     * @return {?}
     */
    attach() {
        this.detach();
        this._attachCorners();
    }
    /**
     * @return {?}
     */
    detach() {
        this.pointerDownSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        (sub) => sub.unsubscribe()));
        this.pointerDownSubs = [];
        this.cornerElements.forEach((/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => this._renderer2.removeChild(this._getDialogWrapper(), elem)));
        this.cornerElements = [];
    }
    /**
     * @private
     * @return {?}
     */
    _getDialogWrapper() {
        return ((/** @type {?} */ (this._document.getElementById(this._dialogRef.id))) || {}).parentElement;
    }
    /**
     * @private
     * @return {?}
     */
    _getViewportDimensions() {
        return this._getDialogWrapper().parentElement.getBoundingClientRect();
    }
    /**
     * @private
     * @return {?}
     */
    _getDialogWrapperDimensions() {
        /** @type {?} */
        const dimensions = getComputedStyle(this._getDialogWrapper());
        return {
            width: getPixels(dimensions.width),
            height: getPixels(dimensions.height),
        };
    }
    /**
     * @private
     * @return {?}
     */
    _initialPositionReset() {
        const { right: viewportWidth, bottom: viewportHeight } = this._getViewportDimensions();
        const { width, height } = this._getDialogWrapperDimensions();
        const { marginRight: originalDialogRight, marginLeft: originalDialogLeft, marginBottom: originalDialogBottom, marginTop: originalDialogTop, } = this._getDialogWrapper().style;
        /** @type {?} */
        let x;
        if (originalDialogLeft) {
            x = getPixels(originalDialogLeft);
        }
        else if (originalDialogRight) {
            x = viewportWidth - getPixels(originalDialogRight) - width;
        }
        else {
            x = (viewportWidth - width) / 2;
        }
        /** @type {?} */
        let y;
        if (originalDialogTop) {
            y = getPixels(originalDialogTop);
        }
        else if (originalDialogBottom) {
            y = viewportHeight - getPixels(originalDialogBottom) - height;
        }
        else {
            y = (viewportHeight - height) / 2;
        }
        // use drag ref's mechanisms for positioning instead of the dialog's
        this._dialogRef.updatePosition({ top: '0px', right: '0px', bottom: '0px', left: '0px' });
        this._dragRef.setFreeDragPosition({ x, y });
    }
    /**
     * @private
     * @return {?}
     */
    _attachCorners() {
        Object.values(corners).forEach((/**
         * @param {?} corner
         * @return {?}
         */
        (corner) => {
            /** @type {?} */
            const element = this._renderer2.createElement('div');
            this.cornerElements = [...this.cornerElements, element];
            this._renderer2.setStyle(element, 'position', 'absolute');
            this._renderer2.setStyle(element, 'width', cornerWidth);
            this._renderer2.setStyle(element, 'height', cornerWidth);
            this._renderer2.appendChild(this._getDialogWrapper(), element);
            /** @type {?} */
            let cursor;
            /** @type {?} */
            let topBottom;
            /** @type {?} */
            let rightLeft;
            if (corner === corners.topRight) {
                cursor = cursors.nesw;
                topBottom = verticalAlignment.top;
                rightLeft = horizontalAlignment.right;
            }
            else if (corner === corners.bottomRight) {
                cursor = cursors.nwse;
                topBottom = verticalAlignment.bottom;
                rightLeft = horizontalAlignment.right;
                /** @type {?} */
                const icon = this._renderer2.createElement('i');
                this._renderer2.addClass(icon, 'material-icons');
                this._renderer2.appendChild(icon, this._renderer2.createText('filter_list'));
                this._renderer2.appendChild(element, icon);
                this._renderer2.setStyle(icon, 'transform', `rotate(${315}deg) translate(0px, ${offset})`);
                this._renderer2.setStyle(icon, 'font-size', cornerWidth);
            }
            else if (corner === corners.bottomLeft) {
                cursor = cursors.nesw;
                topBottom = verticalAlignment.bottom;
                rightLeft = horizontalAlignment.left;
            }
            else if (corner === corners.topLeft) {
                cursor = cursors.nwse;
                topBottom = verticalAlignment.top;
                rightLeft = horizontalAlignment.left;
            }
            this._renderer2.setStyle(element, topBottom, offset);
            this._renderer2.setStyle(element, rightLeft, offset);
            this._renderer2.setStyle(element, 'cursor', cursor);
            /** @type {?} */
            const pointerDownSub = fromEvent(element, 'pointerdown').subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this._handleMouseDown(event, corner);
            }));
            this.pointerDownSubs = [...this.pointerDownSubs, pointerDownSub];
        }));
    }
    /**
     * @private
     * @param {?} event
     * @param {?} corner
     * @return {?}
     */
    _handleMouseDown(event, corner) {
        const { width: originalWidth, height: originalHeight } = this._getDialogWrapperDimensions();
        /** @type {?} */
        const originalMouseX = event.pageX;
        /** @type {?} */
        const originalMouseY = event.pageY;
        const { x: currentTransformX, y: currentTransformY } = this._dragRef.getFreeDragPosition();
        const { bottom: distanceFromBottom, right: distanceFromRight, } = this._getDialogWrapper().getBoundingClientRect();
        const { right: viewportWidth, bottom: viewportHeight } = this._getViewportDimensions();
        /** @type {?} */
        const mouseMoveSub = fromEvent(window, 'pointermove').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            e.preventDefault(); // prevent highlighting of text when dragging
            // prevent highlighting of text when dragging
            /** @type {?} */
            const yDelta = clamp(0, e.pageY, viewportHeight) - originalMouseY;
            /** @type {?} */
            const xDelta = clamp(0, e.pageX, viewportWidth) - originalMouseX;
            /** @type {?} */
            let newHeight;
            /** @type {?} */
            let newWidth;
            /** @type {?} */
            let newTransformY = 0;
            /** @type {?} */
            let newTransformX = 0;
            // top right
            if (corner === corners.topRight) {
                newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
                newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
                newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
                newTransformX = currentTransformX;
            }
            // bottom right
            else if (corner === corners.bottomRight) {
                newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
                newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
                newTransformY = currentTransformY;
                newTransformX = currentTransformX;
            }
            // bottom left
            else if (corner === corners.bottomLeft) {
                newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
                newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
                newTransformY = currentTransformY;
                newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
            }
            // top left
            else if (corner === corners.topLeft) {
                newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
                newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
                newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
                newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
            }
            this._dialogRef.updateSize(`${newWidth}px`, `${newHeight}px`);
            this._dragRef.setFreeDragPosition({
                x: newTransformX,
                y: newTransformY,
            });
        }));
        /** @type {?} */
        const mouseUpSub = merge(fromEvent(window, 'pointerup'), fromEvent(window, 'pointercancel')).subscribe((/**
         * @return {?}
         */
        () => {
            mouseMoveSub.unsubscribe();
            mouseUpSub.unsubscribe();
        }));
    }
}
if (false) {
    /** @type {?} */
    ResizableDraggableDialog.prototype.cornerElements;
    /** @type {?} */
    ResizableDraggableDialog.prototype.pointerDownSubs;
    /**
     * @type {?}
     * @private
     */
    ResizableDraggableDialog.prototype._document;
    /**
     * @type {?}
     * @private
     */
    ResizableDraggableDialog.prototype._renderer2;
    /**
     * @type {?}
     * @private
     */
    ResizableDraggableDialog.prototype._dialogRef;
    /**
     * @type {?}
     * @private
     */
    ResizableDraggableDialog.prototype._dragRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentDialogsModule, ResizableDraggableDialog, TdAlertDialogComponent, TdConfirmDialogComponent, TdDialogActionsDirective, TdDialogComponent, TdDialogContentDirective, TdDialogService, TdDialogTitleDirective, TdPromptDialogComponent };
//# sourceMappingURL=covalent-core-dialogs.js.map
