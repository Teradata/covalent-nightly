/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, Host, Optional } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgModel } from '@angular/forms';
var TdFileSelectDirective = /** @class */ (function () {
    function TdFileSelectDirective(model) {
        this.model = model;
        this._multiple = false;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         */
        this.onFileSelect = new EventEmitter();
    }
    Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be selected at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: /**
         * multiple?: boolean
         * Sets whether multiple files can be selected at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         * @return {?}
         */
        function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     */
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    TdFileSelectDirective.prototype.onChange = /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target instanceof HTMLInputElement) {
            /** @type {?} */
            var fileInputEl = (/** @type {?} */ (event.target));
            /** @type {?} */
            var files = fileInputEl.files;
            if (files.length) {
                /** @type {?} */
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
            }
        }
    };
    TdFileSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFileSelect]',
                },] }
    ];
    /** @nocollapse */
    TdFileSelectDirective.ctorParameters = function () { return [
        { type: NgModel, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    TdFileSelectDirective.propDecorators = {
        multiple: [{ type: Input, args: ['multiple',] }],
        onFileSelect: [{ type: Output, args: ['fileSelect',] }],
        multipleBinding: [{ type: HostBinding, args: ['attr.multiple',] }],
        onChange: [{ type: HostListener, args: ['change', ['$event'],] }]
    };
    return TdFileSelectDirective;
}());
export { TdFileSelectDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileSelectDirective.prototype._multiple;
    /**
     * fileSelect?: function
     * Event emitted when a file or files are selected in host [HTMLInputElement].
     * Emits a [FileList | File] object.
     * Alternative to not use [(ngModel)].
     * @type {?}
     */
    TdFileSelectDirective.prototype.onFileSelect;
    /**
     * @type {?}
     * @private
     */
    TdFileSelectDirective.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvZmlsZS1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDO0lBZ0NFLCtCQUF3QyxLQUFjO1FBQWQsVUFBSyxHQUFMLEtBQUssQ0FBUztRQTVCOUMsY0FBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7OztRQWtCYixpQkFBWSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQVUvQyxDQUFDO0lBckIxRCxzQkFDSSwyQ0FBUTtRQU5aOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFDYSxRQUFpQjtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBYUQsc0JBQ0ksa0RBQWU7UUFKbkI7O1dBRUc7Ozs7O1FBQ0g7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBSUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFFSCx3Q0FBUTs7Ozs7OztJQURSLFVBQ1MsS0FBWTtRQUNuQixJQUFJLEtBQUssQ0FBQyxNQUFNLFlBQVksZ0JBQWdCLEVBQUU7O2dCQUN4QyxXQUFXLEdBQXFCLG1CQUFrQixLQUFLLENBQUMsTUFBTSxFQUFBOztnQkFDOUQsS0FBSyxHQUFhLFdBQVcsQ0FBQyxLQUFLO1lBQ3ZDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTs7b0JBQ1osS0FBSyxHQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVFO1NBQ0Y7SUFDSCxDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQUpRLE9BQU8sdUJBa0NELFFBQVEsWUFBSSxJQUFJOzs7MkJBckI1QixLQUFLLFNBQUMsVUFBVTsrQkFXaEIsTUFBTSxTQUFDLFlBQVk7a0NBS25CLFdBQVcsU0FBQyxlQUFlOzJCQVkzQixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQVdwQyw0QkFBQztDQUFBLEFBbERELElBa0RDO1NBL0NZLHFCQUFxQjs7Ozs7O0lBQ2hDLDBDQUFtQzs7Ozs7Ozs7SUFrQm5DLDZDQUF3Rzs7Ozs7SUFVNUYsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRmlsZVNlbGVjdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZWxlY3REaXJlY3RpdmUge1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogU2V0cyB3aGV0aGVyIG11bHRpcGxlIGZpbGVzIGNhbiBiZSBzZWxlY3RlZCBhdCBvbmNlIGluIGhvc3QgZWxlbWVudCwgb3IganVzdCBhIHNpbmdsZSBmaWxlLlxuICAgKiBDYW4gYWxzbyBiZSAnbXVsdGlwbGUnIG5hdGl2ZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpbGVTZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSBmaWxlIG9yIGZpbGVzIGFyZSBzZWxlY3RlZCBpbiBob3N0IFtIVE1MSW5wdXRFbGVtZW50XS5cbiAgICogRW1pdHMgYSBbRmlsZUxpc3QgfCBGaWxlXSBvYmplY3QuXG4gICAqIEFsdGVybmF0aXZlIHRvIG5vdCB1c2UgWyhuZ01vZGVsKV0uXG4gICAqL1xuICBAT3V0cHV0KCdmaWxlU2VsZWN0Jykgb25GaWxlU2VsZWN0OiBFdmVudEVtaXR0ZXI8RmlsZUxpc3QgfCBGaWxlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3QgfCBGaWxlPigpO1xuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ211bHRpcGxlJyBhdHRyaWJ1dGUgaWYgW211bHRpcGxlXSBwcm9wZXJ0eSBpcyAndHJ1ZScuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubXVsdGlwbGUnKVxuICBnZXQgbXVsdGlwbGVCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlID8gJycgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbW9kZWw6IE5nTW9kZWwpIHt9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2NoYW5nZScgaG9zdCBldmVudCB0byBnZXQgW0hUTUxJbnB1dEVsZW1lbnRdIGZpbGVzLlxuICAgKiBFbWl0cyB0aGUgJ29uRmlsZVNlbGVjdCcgZXZlbnQgd2l0aCBhIFtGaWxlTGlzdF0gb3IgW0ZpbGVdIGRlcGVuZGluZyBpZiAnbXVsdGlwbGUnIGF0dHIgZXhpc3RzIGluIGhvc3QuXG4gICAqIFVzZXMgWyhuZ01vZGVsKV0gaWYgZGVjbGFyZWQsIGluc3RlYWQgb2YgZW1pdHRpbmcgJ29uRmlsZVNlbGVjdCcgZXZlbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnLCBbJyRldmVudCddKVxuICBvbkNoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgbGV0IGZpbGVJbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgICAgbGV0IGZpbGVzOiBGaWxlTGlzdCA9IGZpbGVJbnB1dEVsLmZpbGVzO1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgdmFsdWU6IEZpbGVMaXN0IHwgRmlsZSA9IHRoaXMuX211bHRpcGxlID8gKGZpbGVzLmxlbmd0aCA+IDEgPyBmaWxlcyA6IGZpbGVzWzBdKSA6IGZpbGVzWzBdO1xuICAgICAgICB0aGlzLm1vZGVsID8gdGhpcy5tb2RlbC51cGRhdGUuZW1pdCh2YWx1ZSkgOiB0aGlzLm9uRmlsZVNlbGVjdC5lbWl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==