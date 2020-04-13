/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
import { merge, fromEvent } from 'rxjs';
/** @enum {string} */
var corners = {
    topRight: 'topRight',
    bottomRight: 'bottomRight',
    bottomLeft: 'bottomLeft',
    topLeft: 'topLeft',
};
/** @enum {string} */
var cursors = {
    nesw: 'nesw-resize',
    nwse: 'nwse-resize',
};
/** @enum {string} */
var verticalAlignment = {
    top: 'top',
    bottom: 'bottom',
};
/** @enum {string} */
var horizontalAlignment = {
    right: 'right',
    left: 'left',
};
/** @type {?} */
var cornerWidth = '16px';
/** @type {?} */
var offset = '0px';
/** @type {?} */
var minWidth = 200;
/** @type {?} */
var minHeight = 200;
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
var ResizableDraggableDialog = /** @class */ (function () {
    function ResizableDraggableDialog(_document, _renderer2, _dialogRef, _dragRef) {
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
    ResizableDraggableDialog.prototype.attach = /**
     * @return {?}
     */
    function () {
        this.detach();
        this._attachCorners();
    };
    /**
     * @return {?}
     */
    ResizableDraggableDialog.prototype.detach = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pointerDownSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) { return sub.unsubscribe(); }));
        this.pointerDownSubs = [];
        this.cornerElements.forEach((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return _this._renderer2.removeChild(_this._getDialogWrapper(), elem); }));
        this.cornerElements = [];
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._getDialogWrapper = /**
     * @private
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this._document.getElementById(this._dialogRef.id))) || {}).parentElement;
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._getViewportDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        return this._getDialogWrapper().parentElement.getBoundingClientRect();
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._getDialogWrapperDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dimensions = getComputedStyle(this._getDialogWrapper());
        return {
            width: getPixels(dimensions.width),
            height: getPixels(dimensions.height),
        };
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._initialPositionReset = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this._getViewportDimensions(), viewportWidth = _a.right, viewportHeight = _a.bottom;
        var _b = this._getDialogWrapperDimensions(), width = _b.width, height = _b.height;
        var _c = this._getDialogWrapper().style, originalDialogRight = _c.marginRight, originalDialogLeft = _c.marginLeft, originalDialogBottom = _c.marginBottom, originalDialogTop = _c.marginTop;
        /** @type {?} */
        var x;
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
        var y;
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
        this._dragRef.setFreeDragPosition({ x: x, y: y });
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._attachCorners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.values(corners).forEach((/**
         * @param {?} corner
         * @return {?}
         */
        function (corner) {
            /** @type {?} */
            var element = _this._renderer2.createElement('div');
            _this.cornerElements = __spread(_this.cornerElements, [element]);
            _this._renderer2.setStyle(element, 'position', 'absolute');
            _this._renderer2.setStyle(element, 'width', cornerWidth);
            _this._renderer2.setStyle(element, 'height', cornerWidth);
            _this._renderer2.appendChild(_this._getDialogWrapper(), element);
            /** @type {?} */
            var cursor;
            /** @type {?} */
            var topBottom;
            /** @type {?} */
            var rightLeft;
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
                var icon = _this._renderer2.createElement('i');
                _this._renderer2.addClass(icon, 'material-icons');
                _this._renderer2.appendChild(icon, _this._renderer2.createText('filter_list'));
                _this._renderer2.appendChild(element, icon);
                _this._renderer2.setStyle(icon, 'transform', "rotate(" + 315 + "deg) translate(0px, " + offset + ")");
                _this._renderer2.setStyle(icon, 'font-size', cornerWidth);
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
            _this._renderer2.setStyle(element, topBottom, offset);
            _this._renderer2.setStyle(element, rightLeft, offset);
            _this._renderer2.setStyle(element, 'cursor', cursor);
            /** @type {?} */
            var pointerDownSub = fromEvent(element, 'pointerdown').subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this._handleMouseDown(event, corner);
            }));
            _this.pointerDownSubs = __spread(_this.pointerDownSubs, [pointerDownSub]);
        }));
    };
    /**
     * @private
     * @param {?} event
     * @param {?} corner
     * @return {?}
     */
    ResizableDraggableDialog.prototype._handleMouseDown = /**
     * @private
     * @param {?} event
     * @param {?} corner
     * @return {?}
     */
    function (event, corner) {
        var _this = this;
        this._renderer2.setStyle((/** @type {?} */ (this._document.body)), 'user-select', 'none');
        var _a = this._getDialogWrapperDimensions(), originalWidth = _a.width, originalHeight = _a.height;
        /** @type {?} */
        var originalMouseX = event.pageX;
        /** @type {?} */
        var originalMouseY = event.pageY;
        var _b = this._dragRef.getFreeDragPosition(), currentTransformX = _b.x, currentTransformY = _b.y;
        var _c = this._getDialogWrapper().getBoundingClientRect(), distanceFromBottom = _c.bottom, distanceFromRight = _c.right;
        var _d = this._getViewportDimensions(), viewportWidth = _d.right, viewportHeight = _d.bottom;
        /** @type {?} */
        var mouseMoveSub = fromEvent(window, 'pointermove').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault(); // prevent highlighting of text when dragging
            // prevent highlighting of text when dragging
            /** @type {?} */
            var yDelta = clamp(0, e.pageY, viewportHeight) - originalMouseY;
            /** @type {?} */
            var xDelta = clamp(0, e.pageX, viewportWidth) - originalMouseX;
            /** @type {?} */
            var newHeight;
            /** @type {?} */
            var newWidth;
            /** @type {?} */
            var newTransformY = 0;
            /** @type {?} */
            var newTransformX = 0;
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
            _this._dialogRef.updateSize(newWidth + "px", newHeight + "px");
            _this._dragRef.setFreeDragPosition({
                x: newTransformX,
                y: newTransformY,
            });
        }));
        /** @type {?} */
        var mouseUpSub = merge(fromEvent(window, 'pointerup'), fromEvent(window, 'pointercancel')).subscribe((/**
         * @return {?}
         */
        function () {
            _this._renderer2.removeStyle((/** @type {?} */ (_this._document.body)), 'user-select');
            mouseMoveSub.unsubscribe();
            mouseUpSub.unsubscribe();
        }));
    };
    return ResizableDraggableDialog;
}());
export { ResizableDraggableDialog };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cvcmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsS0FBSyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQUlwRCxVQUFXLFVBQVU7SUFDckIsYUFBYyxhQUFhO0lBQzNCLFlBQWEsWUFBWTtJQUN6QixTQUFVLFNBQVM7Ozs7SUFHbkIsTUFBTyxhQUFhO0lBQ3BCLE1BQU8sYUFBYTs7OztJQUdwQixLQUFNLEtBQUs7SUFDWCxRQUFTLFFBQVE7Ozs7SUFHakIsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNOzs7SUFHVCxXQUFXLEdBQVcsTUFBTTs7SUFDNUIsTUFBTSxHQUFXLEtBQUs7O0lBQ3RCLFFBQVEsR0FBVyxHQUFHOztJQUN0QixTQUFTLEdBQVcsR0FBRzs7Ozs7QUFFN0IsU0FBUyxTQUFTLENBQUMsVUFBa0I7SUFDbkMsT0FBTyxVQUFVLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUM7Ozs7Ozs7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDbEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRDtJQUlFLGtDQUNVLFNBQWMsRUFDZCxVQUFxQixFQUNyQixVQUE2QixFQUM3QixRQUFpQjtRQUhqQixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNy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aUIsS0FBSyxDQUNwQyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUM5QixTQUFTLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUNuQyxDQUFDLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsbUJBQWEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUEsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM3RSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQztJQUNKLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUEzTEQsSUEyTEM7Ozs7SUExTEMsa0RBQW1DOztJQUNuQyxtREFBcUM7Ozs7O0lBR25DLDZDQUFzQjs7Ozs7SUFDdEIsOENBQTZCOzs7OztJQUM3Qiw4Q0FBcUM7Ozs7O0lBQ3JDLDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERyYWdSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IG1lcmdlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wL2RyYWctcmVmJztcblxuZW51bSBjb3JuZXJzIHtcbiAgdG9wUmlnaHQgPSAndG9wUmlnaHQnLFxuICBib3R0b21SaWdodCA9ICdib3R0b21SaWdodCcsXG4gIGJvdHRvbUxlZnQgPSAnYm90dG9tTGVmdCcsXG4gIHRvcExlZnQgPSAndG9wTGVmdCcsXG59XG5lbnVtIGN1cnNvcnMge1xuICBuZXN3ID0gJ25lc3ctcmVzaXplJyxcbiAgbndzZSA9ICdud3NlLXJlc2l6ZScsXG59XG5lbnVtIHZlcnRpY2FsQWxpZ25tZW50IHtcbiAgdG9wID0gJ3RvcCcsXG4gIGJvdHRvbSA9ICdib3R0b20nLFxufVxuZW51bSBob3Jpem9udGFsQWxpZ25tZW50IHtcbiAgcmlnaHQgPSAncmlnaHQnLFxuICBsZWZ0ID0gJ2xlZnQnLFxufVxuXG5jb25zdCBjb3JuZXJXaWR0aDogc3RyaW5nID0gJzE2cHgnO1xuY29uc3Qgb2Zmc2V0OiBzdHJpbmcgPSAnMHB4JztcbmNvbnN0IG1pbldpZHRoOiBudW1iZXIgPSAyMDA7XG5jb25zdCBtaW5IZWlnaHQ6IG51bWJlciA9IDIwMDtcblxuZnVuY3Rpb24gZ2V0UGl4ZWxzKHNpemVTdHJpbmc6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiBwYXJzZUZsb2F0KChzaXplU3RyaW5nIHx8ICcnKS5yZXBsYWNlKCdweCcsICcnKSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG1pbjogbnVtYmVyLCBudW06IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xufVxuXG5leHBvcnQgY2xhc3MgUmVzaXphYmxlRHJhZ2dhYmxlRGlhbG9nIHtcbiAgY29ybmVyRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgcG9pbnRlckRvd25TdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55PixcbiAgICBwcml2YXRlIF9kcmFnUmVmOiBEcmFnUmVmLFxuICApIHtcbiAgICB0aGlzLl9pbml0aWFsUG9zaXRpb25SZXNldCgpO1xuICAgIHRoaXMuX2F0dGFjaENvcm5lcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBhdHRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLl9hdHRhY2hDb3JuZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgZGV0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMucG9pbnRlckRvd25TdWJzLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5wb2ludGVyRG93blN1YnMgPSBbXTtcbiAgICB0aGlzLmNvcm5lckVsZW1lbnRzLmZvckVhY2goKGVsZW06IEhUTUxFbGVtZW50KSA9PiB0aGlzLl9yZW5kZXJlcjIucmVtb3ZlQ2hpbGQodGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLCBlbGVtKSk7XG4gICAgdGhpcy5jb3JuZXJFbGVtZW50cyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGlhbG9nV3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZGlhbG9nUmVmLmlkKSB8fCB7fSkucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFZpZXdwb3J0RGltZW5zaW9ucygpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXREaWFsb2dXcmFwcGVyRGltZW5zaW9ucygpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGRpbWVuc2lvbnM6IENTU1N0eWxlRGVjbGFyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBnZXRQaXhlbHMoZGltZW5zaW9ucy53aWR0aCksXG4gICAgICBoZWlnaHQ6IGdldFBpeGVscyhkaW1lbnNpb25zLmhlaWdodCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRpYWxQb3NpdGlvblJlc2V0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcmlnaHQ6IHZpZXdwb3J0V2lkdGgsIGJvdHRvbTogdmlld3BvcnRIZWlnaHQgfTogQ2xpZW50UmVjdCA9IHRoaXMuX2dldFZpZXdwb3J0RGltZW5zaW9ucygpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlckRpbWVuc2lvbnMoKTtcbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5SaWdodDogb3JpZ2luYWxEaWFsb2dSaWdodCxcbiAgICAgIG1hcmdpbkxlZnQ6IG9yaWdpbmFsRGlhbG9nTGVmdCxcbiAgICAgIG1hcmdpbkJvdHRvbTogb3JpZ2luYWxEaWFsb2dCb3R0b20sXG4gICAgICBtYXJnaW5Ub3A6IG9yaWdpbmFsRGlhbG9nVG9wLFxuICAgIH0gPSB0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCkuc3R5bGU7XG4gICAgbGV0IHg6IG51bWJlcjtcbiAgICBpZiAob3JpZ2luYWxEaWFsb2dMZWZ0KSB7XG4gICAgICB4ID0gZ2V0UGl4ZWxzKG9yaWdpbmFsRGlhbG9nTGVmdCk7XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbERpYWxvZ1JpZ2h0KSB7XG4gICAgICB4ID0gdmlld3BvcnRXaWR0aCAtIGdldFBpeGVscyhvcmlnaW5hbERpYWxvZ1JpZ2h0KSAtIHdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gKHZpZXdwb3J0V2lkdGggLSB3aWR0aCkgLyAyO1xuICAgIH1cbiAgICBsZXQgeTogbnVtYmVyO1xuICAgIGlmIChvcmlnaW5hbERpYWxvZ1RvcCkge1xuICAgICAgeSA9IGdldFBpeGVscyhvcmlnaW5hbERpYWxvZ1RvcCk7XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbERpYWxvZ0JvdHRvbSkge1xuICAgICAgeSA9IHZpZXdwb3J0SGVpZ2h0IC0gZ2V0UGl4ZWxzKG9yaWdpbmFsRGlhbG9nQm90dG9tKSAtIGhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgeSA9ICh2aWV3cG9ydEhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgIH1cbiAgICAvLyB1c2UgZHJhZyByZWYncyBtZWNoYW5pc21zIGZvciBwb3NpdGlvbmluZyBpbnN0ZWFkIG9mIHRoZSBkaWFsb2cnc1xuICAgIHRoaXMuX2RpYWxvZ1JlZi51cGRhdGVQb3NpdGlvbih7IHRvcDogJzBweCcsIHJpZ2h0OiAnMHB4JywgYm90dG9tOiAnMHB4JywgbGVmdDogJzBweCcgfSk7XG4gICAgdGhpcy5fZHJhZ1JlZi5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHsgeCwgeSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaENvcm5lcnMoKTogdm9pZCB7XG4gICAgT2JqZWN0LnZhbHVlcyhjb3JuZXJzKS5mb3JFYWNoKChjb3JuZXI6IGNvcm5lcnMpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fcmVuZGVyZXIyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5jb3JuZXJFbGVtZW50cyA9IFsuLi50aGlzLmNvcm5lckVsZW1lbnRzLCBlbGVtZW50XTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCAnd2lkdGgnLCBjb3JuZXJXaWR0aCk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgJ2hlaWdodCcsIGNvcm5lcldpZHRoKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5hcHBlbmRDaGlsZCh0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCksIGVsZW1lbnQpO1xuXG4gICAgICBsZXQgY3Vyc29yOiBjdXJzb3JzO1xuICAgICAgbGV0IHRvcEJvdHRvbTogdmVydGljYWxBbGlnbm1lbnQ7XG4gICAgICBsZXQgcmlnaHRMZWZ0OiBob3Jpem9udGFsQWxpZ25tZW50O1xuXG4gICAgICBpZiAoY29ybmVyID09PSBjb3JuZXJzLnRvcFJpZ2h0KSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcnMubmVzdztcbiAgICAgICAgdG9wQm90dG9tID0gdmVydGljYWxBbGlnbm1lbnQudG9wO1xuICAgICAgICByaWdodExlZnQgPSBob3Jpem9udGFsQWxpZ25tZW50LnJpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMuYm90dG9tUmlnaHQpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29ycy5ud3NlO1xuICAgICAgICB0b3BCb3R0b20gPSB2ZXJ0aWNhbEFsaWdubWVudC5ib3R0b207XG4gICAgICAgIHJpZ2h0TGVmdCA9IGhvcml6b250YWxBbGlnbm1lbnQucmlnaHQ7XG5cbiAgICAgICAgY29uc3QgaWNvbjogSFRNTEVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlcjIuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuYWRkQ2xhc3MoaWNvbiwgJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hcHBlbmRDaGlsZChpY29uLCB0aGlzLl9yZW5kZXJlcjIuY3JlYXRlVGV4dCgnZmlsdGVyX2xpc3QnKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hcHBlbmRDaGlsZChlbGVtZW50LCBpY29uKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGljb24sICd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7MzE1fWRlZykgdHJhbnNsYXRlKDBweCwgJHtvZmZzZXR9KWApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoaWNvbiwgJ2ZvbnQtc2l6ZScsIGNvcm5lcldpZHRoKTtcbiAgICAgIH0gZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLmJvdHRvbUxlZnQpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29ycy5uZXN3O1xuICAgICAgICB0b3BCb3R0b20gPSB2ZXJ0aWNhbEFsaWdubWVudC5ib3R0b207XG4gICAgICAgIHJpZ2h0TGVmdCA9IGhvcml6b250YWxBbGlnbm1lbnQubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLnRvcExlZnQpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29ycy5ud3NlO1xuICAgICAgICB0b3BCb3R0b20gPSB2ZXJ0aWNhbEFsaWdubWVudC50b3A7XG4gICAgICAgIHJpZ2h0TGVmdCA9IGhvcml6b250YWxBbGlnbm1lbnQubGVmdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCB0b3BCb3R0b20sIG9mZnNldCk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgcmlnaHRMZWZ0LCBvZmZzZXQpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsICdjdXJzb3InLCBjdXJzb3IpO1xuXG4gICAgICBjb25zdCBwb2ludGVyRG93blN1YjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KGVsZW1lbnQsICdwb2ludGVyZG93bicpLnN1YnNjcmliZSgoZXZlbnQ6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZURvd24oZXZlbnQsIGNvcm5lcik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucG9pbnRlckRvd25TdWJzID0gWy4uLnRoaXMucG9pbnRlckRvd25TdWJzLCBwb2ludGVyRG93blN1Yl07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNb3VzZURvd24oZXZlbnQ6IFBvaW50ZXJFdmVudCwgY29ybmVyOiBjb3JuZXJzKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKDxIVE1MRWxlbWVudD50aGlzLl9kb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnbm9uZScpO1xuICAgIGNvbnN0IHsgd2lkdGg6IG9yaWdpbmFsV2lkdGgsIGhlaWdodDogb3JpZ2luYWxIZWlnaHQgfSA9IHRoaXMuX2dldERpYWxvZ1dyYXBwZXJEaW1lbnNpb25zKCk7XG4gICAgY29uc3Qgb3JpZ2luYWxNb3VzZVg6IG51bWJlciA9IGV2ZW50LnBhZ2VYO1xuICAgIGNvbnN0IG9yaWdpbmFsTW91c2VZOiBudW1iZXIgPSBldmVudC5wYWdlWTtcbiAgICBjb25zdCB7IHg6IGN1cnJlbnRUcmFuc2Zvcm1YLCB5OiBjdXJyZW50VHJhbnNmb3JtWSB9OiBQb2ludCA9IHRoaXMuX2RyYWdSZWYuZ2V0RnJlZURyYWdQb3NpdGlvbigpO1xuICAgIGNvbnN0IHtcbiAgICAgIGJvdHRvbTogZGlzdGFuY2VGcm9tQm90dG9tLFxuICAgICAgcmlnaHQ6IGRpc3RhbmNlRnJvbVJpZ2h0LFxuICAgIH06IENsaWVudFJlY3QgPSB0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyByaWdodDogdmlld3BvcnRXaWR0aCwgYm90dG9tOiB2aWV3cG9ydEhlaWdodCB9OiBDbGllbnRSZWN0ID0gdGhpcy5fZ2V0Vmlld3BvcnREaW1lbnNpb25zKCk7XG5cbiAgICBjb25zdCBtb3VzZU1vdmVTdWI6IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdwb2ludGVybW92ZScpLnN1YnNjcmliZSgoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgaGlnaGxpZ2h0aW5nIG9mIHRleHQgd2hlbiBkcmFnZ2luZ1xuXG4gICAgICBjb25zdCB5RGVsdGE6IG51bWJlciA9IGNsYW1wKDAsIGUucGFnZVksIHZpZXdwb3J0SGVpZ2h0KSAtIG9yaWdpbmFsTW91c2VZO1xuICAgICAgY29uc3QgeERlbHRhOiBudW1iZXIgPSBjbGFtcCgwLCBlLnBhZ2VYLCB2aWV3cG9ydFdpZHRoKSAtIG9yaWdpbmFsTW91c2VYO1xuICAgICAgbGV0IG5ld0hlaWdodDogbnVtYmVyO1xuICAgICAgbGV0IG5ld1dpZHRoOiBudW1iZXI7XG4gICAgICBsZXQgbmV3VHJhbnNmb3JtWTogbnVtYmVyID0gMDtcbiAgICAgIGxldCBuZXdUcmFuc2Zvcm1YOiBudW1iZXIgPSAwO1xuXG4gICAgICAvLyB0b3AgcmlnaHRcbiAgICAgIGlmIChjb3JuZXIgPT09IGNvcm5lcnMudG9wUmlnaHQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobWluSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCAtIHlEZWx0YSwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG1pbldpZHRoLCBvcmlnaW5hbFdpZHRoICsgeERlbHRhLCB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWSA9IGNsYW1wKDAsIGN1cnJlbnRUcmFuc2Zvcm1ZICsgeURlbHRhLCBkaXN0YW5jZUZyb21Cb3R0b20gLSBuZXdIZWlnaHQpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1YID0gY3VycmVudFRyYW5zZm9ybVg7XG4gICAgICB9XG4gICAgICAvLyBib3R0b20gcmlnaHRcbiAgICAgIGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy5ib3R0b21SaWdodCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChtaW5IZWlnaHQsIG9yaWdpbmFsSGVpZ2h0ICsgeURlbHRhLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobWluV2lkdGgsIG9yaWdpbmFsV2lkdGggKyB4RGVsdGEsIHZpZXdwb3J0V2lkdGgpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1ZID0gY3VycmVudFRyYW5zZm9ybVk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVggPSBjdXJyZW50VHJhbnNmb3JtWDtcbiAgICAgIH1cbiAgICAgIC8vIGJvdHRvbSBsZWZ0XG4gICAgICBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMuYm90dG9tTGVmdCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChtaW5IZWlnaHQsIG9yaWdpbmFsSGVpZ2h0ICsgeURlbHRhLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobWluV2lkdGgsIG9yaWdpbmFsV2lkdGggLSB4RGVsdGEsIHZpZXdwb3J0V2lkdGgpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1ZID0gY3VycmVudFRyYW5zZm9ybVk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVggPSBjbGFtcCgwLCBjdXJyZW50VHJhbnNmb3JtWCArIHhEZWx0YSwgZGlzdGFuY2VGcm9tUmlnaHQgLSBuZXdXaWR0aCk7XG4gICAgICB9XG4gICAgICAvLyB0b3AgbGVmdFxuICAgICAgZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLnRvcExlZnQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobWluSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCAtIHlEZWx0YSwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG1pbldpZHRoLCBvcmlnaW5hbFdpZHRoIC0geERlbHRhLCB2aWV3cG9ydFdpZHRoKTtcblxuICAgICAgICBuZXdUcmFuc2Zvcm1YID0gY2xhbXAoMCwgY3VycmVudFRyYW5zZm9ybVggKyB4RGVsdGEsIGRpc3RhbmNlRnJvbVJpZ2h0IC0gbmV3V2lkdGgpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1ZID0gY2xhbXAoMCwgY3VycmVudFRyYW5zZm9ybVkgKyB5RGVsdGEsIGRpc3RhbmNlRnJvbUJvdHRvbSAtIG5ld0hlaWdodCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9kaWFsb2dSZWYudXBkYXRlU2l6ZShgJHtuZXdXaWR0aH1weGAsIGAke25ld0hlaWdodH1weGApO1xuICAgICAgdGhpcy5fZHJhZ1JlZi5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHtcbiAgICAgICAgeDogbmV3VHJhbnNmb3JtWCxcbiAgICAgICAgeTogbmV3VHJhbnNmb3JtWSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbW91c2VVcFN1YjogU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncG9pbnRlcnVwJyksXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncG9pbnRlcmNhbmNlbCcpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5yZW1vdmVTdHlsZSg8SFRNTEVsZW1lbnQ+dGhpcy5fZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0Jyk7XG4gICAgICBtb3VzZU1vdmVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIG1vdXNlVXBTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19