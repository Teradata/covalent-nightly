/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
var TdFileInputLabelDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdFileInputLabelDirective, _super);
    function TdFileInputLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdFileInputLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-file-input-label]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdFileInputLabelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdFileInputLabelDirective;
}(TemplatePortalDirective));
export { TdFileInputLabelDirective };
var TdFileInputBase = /** @class */ (function () {
    function TdFileInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileInputBase;
}());
export { TdFileInputBase };
if (false) {
    /** @type {?} */
    TdFileInputBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdFileInputMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileInputBase));
var TdFileInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdFileInputComponent, _super);
    function TdFileInputComponent(_renderer, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._renderer = _renderer;
        _this._multiple = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        _this.onSelect = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
         */
        set: /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when a file is selected.
     */
    /**
     * Method executed when a file is selected.
     * @param {?} files
     * @return {?}
     */
    TdFileInputComponent.prototype.handleSelect = /**
     * Method executed when a file is selected.
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.writeValue(files);
        this.onSelect.emit(files);
    };
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     */
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     * @return {?}
     */
    TdFileInputComponent.prototype.clear = /**
     * Used to clear the selected files from the [TdFileInputComponent].
     * @return {?}
     */
    function () {
        this.writeValue(undefined);
        this._renderer.setProperty(this.inputElement, 'value', '');
    };
    /** Method executed when the disabled value changes */
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdFileInputComponent.prototype.onDisabledChange = /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (v) {
            this.clear();
        }
    };
    /**
     * Sets disable to the component. Implemented as part of ControlValueAccessor.
     */
    /**
     * Sets disable to the component. Implemented as part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    TdFileInputComponent.prototype.setDisabledState = /**
     * Sets disable to the component. Implemented as part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    TdFileInputComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdFileInputComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-file-input',
                    inputs: ['disabled', 'value'],
                    template: "<div>\n  <button\n    mat-raised-button\n    class=\"td-file-input\"\n    type=\"button\"\n    [color]=\"color\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    (keyup.enter)=\"fileInput.click()\"\n    (click)=\"fileInput.click()\"\n    (fileDrop)=\"handleSelect($event)\"\n    tdFileDrop\n  >\n    <ng-content></ng-content>\n  </button>\n  <input\n    #fileInput\n    class=\"td-file-input-hidden\"\n    type=\"file\"\n    [attr.accept]=\"accept\"\n    (fileSelect)=\"handleSelect($event)\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    tdFileSelect\n  />\n</div>\n",
                    styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    TdFileInputComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdFileInputComponent.propDecorators = {
        _inputElement: [{ type: ViewChild, args: ['fileInput', { static: true },] }],
        color: [{ type: Input, args: ['color',] }],
        multiple: [{ type: Input, args: ['multiple',] }],
        accept: [{ type: Input, args: ['accept',] }],
        onSelect: [{ type: Output, args: ['select',] }]
    };
    return TdFileInputComponent;
}(_TdFileInputMixinBase));
export { TdFileInputComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileInputComponent.prototype._multiple;
    /**
     * The native `<input type="file"> element
     * @type {?}
     */
    TdFileInputComponent.prototype._inputElement;
    /**
     * color?: 'accent' | 'primary' | 'warn'
     * Sets button color. Uses same color palette accepted as [MatButton].
     * @type {?}
     */
    TdFileInputComponent.prototype.color;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     * @type {?}
     */
    TdFileInputComponent.prototype.accept;
    /**
     * select?: function
     * Event emitted a file is selected
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileInputComponent.prototype.onSelect;
    /**
     * @type {?}
     * @private
     */
    TdFileInputComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImZpbGUvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBZSxhQUFhLEVBQXlCLHlCQUF5QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckg7SUFHK0MscURBQXVCO0lBQ3BFLG1DQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO2VBQzNFLGtCQUFNLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOztnQkFORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztpQkFDN0M7Ozs7Z0JBYkMsV0FBVztnQkFDWCxnQkFBZ0I7O0lBaUJsQixnQ0FBQztDQUFBLEFBUEQsQ0FHK0MsdUJBQXVCLEdBSXJFO1NBSlkseUJBQXlCO0FBTXRDO0lBQ0UseUJBQW1CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUcsQ0FBQztJQUM5RCxzQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEsNkNBQTRDOzs7O0FBSTFELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFOUY7SUFjMEMsZ0RBQXFCO0lBeUM3RCw4QkFBb0IsU0FBb0IsRUFBRSxrQkFBcUM7UUFBL0UsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQUZtQixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBeENoQyxlQUFTLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFzQ2pCLGNBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7O0lBSWhHLENBQUM7SUF0Q0Qsc0JBQUksOENBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBWUQsc0JBQ0ksMENBQVE7Ozs7UUFHWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBVkQ7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDYSxRQUFpQjtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBdUJEOztPQUVHOzs7Ozs7SUFDSCwyQ0FBWTs7Ozs7SUFBWixVQUFhLEtBQXNCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9DQUFLOzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxzREFBc0Q7Ozs7OztJQUN0RCwrQ0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLENBQVU7UUFDekIsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFDRDs7T0FFRzs7Ozs7O0lBQ0gsK0NBQWdCOzs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOztnQkF0RkYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLEVBQUM7NEJBQ25ELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDO29CQUU3QixrbUJBQTBDOztpQkFDM0M7Ozs7Z0JBekNDLFNBQVM7Z0JBR1QsaUJBQWlCOzs7Z0NBMkNoQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFTdkMsS0FBSyxTQUFDLE9BQU87MkJBTWIsS0FBSyxTQUFDLFVBQVU7eUJBYWhCLEtBQUssU0FBQyxRQUFROzJCQU9kLE1BQU0sU0FBQyxRQUFROztJQWtDbEIsMkJBQUM7Q0FBQSxBQXZGRCxDQWMwQyxxQkFBcUIsR0F5RTlEO1NBekVZLG9CQUFvQjs7Ozs7O0lBQy9CLHlDQUFtQzs7Ozs7SUFHbkMsNkNBQW9FOzs7Ozs7SUFTcEUscUNBQXFEOzs7Ozs7O0lBbUJyRCxzQ0FBZ0M7Ozs7Ozs7SUFPaEMsd0NBQWdHOzs7OztJQUVwRix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1maWxlLWlucHV0LWxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRkRmlsZUlucHV0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRGaWxlSW5wdXRNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRGaWxlSW5wdXRCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZEZpbGVJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzZWxlY3RvcjogJ3RkLWZpbGUtaW5wdXQnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAndmFsdWUnXSxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZUlucHV0Q29tcG9uZW50IGV4dGVuZHMgX1RkRmlsZUlucHV0TWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBJQ2FuRGlzYWJsZSB7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFRoZSBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPiBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIF9pbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGdldCBpbnB1dEVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybidcbiAgICogU2V0cyBidXR0b24gY29sb3IuIFVzZXMgc2FtZSBjb2xvciBwYWxldHRlIGFjY2VwdGVkIGFzIFtNYXRCdXR0b25dLlxuICAgKi9cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJztcblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgbXVsdGlwbGUgZmlsZXMgY2FuIGJlIGRyb3BwZWQvc2VsZWN0ZWQgYXQgb25jZSBpbiBbVGRGaWxlSW5wdXRDb21wb25lbnRdLlxuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjY2VwdD86IHN0cmluZ1xuICAgKiBTZXRzIGZpbGVzIGFjY2VwdGVkIHdoZW4gb3BlbmluZyB0aGUgZmlsZSBicm93c2VyIGRpYWxvZy5cbiAgICogU2FtZSBhcyAnYWNjZXB0JyBhdHRyaWJ1dGUgaW4gPGlucHV0Lz4gZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgnYWNjZXB0JykgYWNjZXB0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgYSBmaWxlIGlzIHNlbGVjdGVkXG4gICAqIEVtaXRzIGEgW0ZpbGUgfCBGaWxlTGlzdF0gb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc2VsZWN0Jykgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgaGFuZGxlU2VsZWN0KGZpbGVzOiBGaWxlIHwgRmlsZUxpc3QpOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdChmaWxlcyk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBjbGVhciB0aGUgc2VsZWN0ZWQgZmlsZXMgZnJvbSB0aGUgW1RkRmlsZUlucHV0Q29tcG9uZW50XS5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh1bmRlZmluZWQpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXRFbGVtZW50LCAndmFsdWUnLCAnJyk7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHYpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZGlzYWJsZSB0byB0aGUgY29tcG9uZW50LiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==