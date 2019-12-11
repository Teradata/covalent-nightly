/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { merge } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3MvcmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cvcmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBSTNCLFVBQVcsVUFBVTtJQUNyQixhQUFjLGFBQWE7SUFDM0IsWUFBYSxZQUFZO0lBQ3pCLFNBQVUsU0FBUzs7OztJQUduQixNQUFPLGFBQWE7SUFDcEIsTUFBTyxhQUFhOzs7O0lBR3BCLEtBQU0sS0FBSztJQUNYLFFBQVMsUUFBUTs7OztJQUdqQixPQUFRLE9BQU87SUFDZixNQUFPLE1BQU07OztJQUdULFdBQVcsR0FBVyxNQUFNOztJQUM1QixNQUFNLEdBQVcsS0FBSzs7SUFDdEIsUUFBUSxHQUFXLEdBQUc7O0lBQ3RCLFNBQVMsR0FBVyxHQUFHOzs7OztBQUU3QixTQUFTLFNBQVMsQ0FBQyxVQUFrQjtJQUNuQyxPQUFPLFVBQVUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQzs7Ozs7OztBQUVELFNBQVMsS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUNsRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVEO0lBSUUsa0NBQ1UsU0FBYyxFQUNkLFVBQXFCLEVBQ3JCLFVBQTZCLEVBQzdCLFFBQWlCO1FBSGpCLGNBQVMsR0FBVCxTQUFTLENB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ZUFBZSxDQUFDLENBQ25DLENBQUMsU0FBUzs7O1FBQUM7WUFDVixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQztJQUNKLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUF6TEQsSUF5TEM7Ozs7SUF4TEMsa0RBQW1DOztJQUNuQyxtREFBcUM7Ozs7O0lBR25DLDZDQUFzQjs7Ozs7SUFDdEIsOENBQTZCOzs7OztJQUM3Qiw4Q0FBcUM7Ozs7O0lBQ3JDLDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERyYWdSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wL2RyYWctcmVmJztcblxuZW51bSBjb3JuZXJzIHtcbiAgdG9wUmlnaHQgPSAndG9wUmlnaHQnLFxuICBib3R0b21SaWdodCA9ICdib3R0b21SaWdodCcsXG4gIGJvdHRvbUxlZnQgPSAnYm90dG9tTGVmdCcsXG4gIHRvcExlZnQgPSAndG9wTGVmdCcsXG59XG5lbnVtIGN1cnNvcnMge1xuICBuZXN3ID0gJ25lc3ctcmVzaXplJyxcbiAgbndzZSA9ICdud3NlLXJlc2l6ZScsXG59XG5lbnVtIHZlcnRpY2FsQWxpZ25tZW50IHtcbiAgdG9wID0gJ3RvcCcsXG4gIGJvdHRvbSA9ICdib3R0b20nLFxufVxuZW51bSBob3Jpem9udGFsQWxpZ25tZW50IHtcbiAgcmlnaHQgPSAncmlnaHQnLFxuICBsZWZ0ID0gJ2xlZnQnLFxufVxuXG5jb25zdCBjb3JuZXJXaWR0aDogc3RyaW5nID0gJzE2cHgnO1xuY29uc3Qgb2Zmc2V0OiBzdHJpbmcgPSAnMHB4JztcbmNvbnN0IG1pbldpZHRoOiBudW1iZXIgPSAyMDA7XG5jb25zdCBtaW5IZWlnaHQ6IG51bWJlciA9IDIwMDtcblxuZnVuY3Rpb24gZ2V0UGl4ZWxzKHNpemVTdHJpbmc6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiBwYXJzZUZsb2F0KChzaXplU3RyaW5nIHx8ICcnKS5yZXBsYWNlKCdweCcsICcnKSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG1pbjogbnVtYmVyLCBudW06IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xufVxuXG5leHBvcnQgY2xhc3MgUmVzaXphYmxlRHJhZ2dhYmxlRGlhbG9nIHtcbiAgY29ybmVyRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgcG9pbnRlckRvd25TdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55PixcbiAgICBwcml2YXRlIF9kcmFnUmVmOiBEcmFnUmVmLFxuICApIHtcbiAgICB0aGlzLl9pbml0aWFsUG9zaXRpb25SZXNldCgpO1xuICAgIHRoaXMuX2F0dGFjaENvcm5lcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBhdHRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLl9hdHRhY2hDb3JuZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgZGV0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMucG9pbnRlckRvd25TdWJzLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5wb2ludGVyRG93blN1YnMgPSBbXTtcbiAgICB0aGlzLmNvcm5lckVsZW1lbnRzLmZvckVhY2goKGVsZW06IEhUTUxFbGVtZW50KSA9PiB0aGlzLl9yZW5kZXJlcjIucmVtb3ZlQ2hpbGQodGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLCBlbGVtKSk7XG4gICAgdGhpcy5jb3JuZXJFbGVtZW50cyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGlhbG9nV3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZGlhbG9nUmVmLmlkKSB8fCB7fSkucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFZpZXdwb3J0RGltZW5zaW9ucygpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXREaWFsb2dXcmFwcGVyRGltZW5zaW9ucygpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGRpbWVuc2lvbnM6IENTU1N0eWxlRGVjbGFyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBnZXRQaXhlbHMoZGltZW5zaW9ucy53aWR0aCksXG4gICAgICBoZWlnaHQ6IGdldFBpeGVscyhkaW1lbnNpb25zLmhlaWdodCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRpYWxQb3NpdGlvblJlc2V0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcmlnaHQ6IHZpZXdwb3J0V2lkdGgsIGJvdHRvbTogdmlld3BvcnRIZWlnaHQgfTogQ2xpZW50UmVjdCA9IHRoaXMuX2dldFZpZXdwb3J0RGltZW5zaW9ucygpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlckRpbWVuc2lvbnMoKTtcbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5SaWdodDogb3JpZ2luYWxEaWFsb2dSaWdodCxcbiAgICAgIG1hcmdpbkxlZnQ6IG9yaWdpbmFsRGlhbG9nTGVmdCxcbiAgICAgIG1hcmdpbkJvdHRvbTogb3JpZ2luYWxEaWFsb2dCb3R0b20sXG4gICAgICBtYXJnaW5Ub3A6IG9yaWdpbmFsRGlhbG9nVG9wLFxuICAgIH0gPSB0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCkuc3R5bGU7XG4gICAgbGV0IHg6IG51bWJlcjtcbiAgICBpZiAob3JpZ2luYWxEaWFsb2dMZWZ0KSB7XG4gICAgICB4ID0gZ2V0UGl4ZWxzKG9yaWdpbmFsRGlhbG9nTGVmdCk7XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbERpYWxvZ1JpZ2h0KSB7XG4gICAgICB4ID0gdmlld3BvcnRXaWR0aCAtIGdldFBpeGVscyhvcmlnaW5hbERpYWxvZ1JpZ2h0KSAtIHdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gKHZpZXdwb3J0V2lkdGggLSB3aWR0aCkgLyAyO1xuICAgIH1cbiAgICBsZXQgeTogbnVtYmVyO1xuICAgIGlmIChvcmlnaW5hbERpYWxvZ1RvcCkge1xuICAgICAgeSA9IGdldFBpeGVscyhvcmlnaW5hbERpYWxvZ1RvcCk7XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbERpYWxvZ0JvdHRvbSkge1xuICAgICAgeSA9IHZpZXdwb3J0SGVpZ2h0IC0gZ2V0UGl4ZWxzKG9yaWdpbmFsRGlhbG9nQm90dG9tKSAtIGhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgeSA9ICh2aWV3cG9ydEhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgIH1cbiAgICAvLyB1c2UgZHJhZyByZWYncyBtZWNoYW5pc21zIGZvciBwb3NpdGlvbmluZyBpbnN0ZWFkIG9mIHRoZSBkaWFsb2cnc1xuICAgIHRoaXMuX2RpYWxvZ1JlZi51cGRhdGVQb3NpdGlvbih7IHRvcDogJzBweCcsIHJpZ2h0OiAnMHB4JywgYm90dG9tOiAnMHB4JywgbGVmdDogJzBweCcgfSk7XG4gICAgdGhpcy5fZHJhZ1JlZi5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHsgeCwgeSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaENvcm5lcnMoKTogdm9pZCB7XG4gICAgT2JqZWN0LnZhbHVlcyhjb3JuZXJzKS5mb3JFYWNoKChjb3JuZXI6IGNvcm5lcnMpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fcmVuZGVyZXIyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5jb3JuZXJFbGVtZW50cyA9IFsuLi50aGlzLmNvcm5lckVsZW1lbnRzLCBlbGVtZW50XTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCAnd2lkdGgnLCBjb3JuZXJXaWR0aCk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgJ2hlaWdodCcsIGNvcm5lcldpZHRoKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5hcHBlbmRDaGlsZCh0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCksIGVsZW1lbnQpO1xuXG4gICAgICBsZXQgY3Vyc29yOiBjdXJzb3JzO1xuICAgICAgbGV0IHRvcEJvdHRvbTogdmVydGljYWxBbGlnbm1lbnQ7XG4gICAgICBsZXQgcmlnaHRMZWZ0OiBob3Jpem9udGFsQWxpZ25tZW50O1xuXG4gICAgICBpZiAoY29ybmVyID09PSBjb3JuZXJzLnRvcFJpZ2h0KSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcnMubmVzdztcbiAgICAgICAgdG9wQm90dG9tID0gdmVydGljYWxBbGlnbm1lbnQudG9wO1xuICAgICAgICByaWdodExlZnQgPSBob3Jpem9udGFsQWxpZ25tZW50LnJpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMuYm90dG9tUmlnaHQpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29ycy5ud3NlO1xuICAgICAgICB0b3BCb3R0b20gPSB2ZXJ0aWNhbEFsaWdubWVudC5ib3R0b207XG4gICAgICAgIHJpZ2h0TGVmdCA9IGhvcml6b250YWxBbGlnbm1lbnQucmlnaHQ7XG5cbiAgICAgICAgY29uc3QgaWNvbjogSFRNTEVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlcjIuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuYWRkQ2xhc3MoaWNvbiwgJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hcHBlbmRDaGlsZChpY29uLCB0aGlzLl9yZW5kZXJlcjIuY3JlYXRlVGV4dCgnZmlsdGVyX2xpc3QnKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hcHBlbmRDaGlsZChlbGVtZW50LCBpY29uKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGljb24sICd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7MzE1fWRlZykgdHJhbnNsYXRlKDBweCwgJHtvZmZzZXR9KWApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoaWNvbiwgJ2ZvbnQtc2l6ZScsIGNvcm5lcldpZHRoKTtcbiAgICAgIH0gZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLmJvdHRvbUxlZnQpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29ycy5uZXN3O1xuICAgICAgICB0b3BCb3R0b20gPSB2ZXJ0aWNhbEFsaWdubWVudC5ib3R0b207XG4gICAgICAgIHJpZ2h0TGVmdCA9IGhvcml6b250YWxBbGlnbm1lbnQubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLnRvcExlZnQpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29ycy5ud3NlO1xuICAgICAgICB0b3BCb3R0b20gPSB2ZXJ0aWNhbEFsaWdubWVudC50b3A7XG4gICAgICAgIHJpZ2h0TGVmdCA9IGhvcml6b250YWxBbGlnbm1lbnQubGVmdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCB0b3BCb3R0b20sIG9mZnNldCk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgcmlnaHRMZWZ0LCBvZmZzZXQpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsICdjdXJzb3InLCBjdXJzb3IpO1xuXG4gICAgICBjb25zdCBwb2ludGVyRG93blN1YjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KGVsZW1lbnQsICdwb2ludGVyZG93bicpLnN1YnNjcmliZSgoZXZlbnQ6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZURvd24oZXZlbnQsIGNvcm5lcik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucG9pbnRlckRvd25TdWJzID0gWy4uLnRoaXMucG9pbnRlckRvd25TdWJzLCBwb2ludGVyRG93blN1Yl07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNb3VzZURvd24oZXZlbnQ6IFBvaW50ZXJFdmVudCwgY29ybmVyOiBjb3JuZXJzKTogdm9pZCB7XG4gICAgY29uc3QgeyB3aWR0aDogb3JpZ2luYWxXaWR0aCwgaGVpZ2h0OiBvcmlnaW5hbEhlaWdodCB9ID0gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlckRpbWVuc2lvbnMoKTtcbiAgICBjb25zdCBvcmlnaW5hbE1vdXNlWDogbnVtYmVyID0gZXZlbnQucGFnZVg7XG4gICAgY29uc3Qgb3JpZ2luYWxNb3VzZVk6IG51bWJlciA9IGV2ZW50LnBhZ2VZO1xuICAgIGNvbnN0IHsgeDogY3VycmVudFRyYW5zZm9ybVgsIHk6IGN1cnJlbnRUcmFuc2Zvcm1ZIH06IFBvaW50ID0gdGhpcy5fZHJhZ1JlZi5nZXRGcmVlRHJhZ1Bvc2l0aW9uKCk7XG4gICAgY29uc3Qge1xuICAgICAgYm90dG9tOiBkaXN0YW5jZUZyb21Cb3R0b20sXG4gICAgICByaWdodDogZGlzdGFuY2VGcm9tUmlnaHQsXG4gICAgfTogQ2xpZW50UmVjdCA9IHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHJpZ2h0OiB2aWV3cG9ydFdpZHRoLCBib3R0b206IHZpZXdwb3J0SGVpZ2h0IH06IENsaWVudFJlY3QgPSB0aGlzLl9nZXRWaWV3cG9ydERpbWVuc2lvbnMoKTtcblxuICAgIGNvbnN0IG1vdXNlTW92ZVN1YjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdywgJ3BvaW50ZXJtb3ZlJykuc3Vic2NyaWJlKChlOiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBoaWdobGlnaHRpbmcgb2YgdGV4dCB3aGVuIGRyYWdnaW5nXG5cbiAgICAgIGNvbnN0IHlEZWx0YTogbnVtYmVyID0gY2xhbXAoMCwgZS5wYWdlWSwgdmlld3BvcnRIZWlnaHQpIC0gb3JpZ2luYWxNb3VzZVk7XG4gICAgICBjb25zdCB4RGVsdGE6IG51bWJlciA9IGNsYW1wKDAsIGUucGFnZVgsIHZpZXdwb3J0V2lkdGgpIC0gb3JpZ2luYWxNb3VzZVg7XG4gICAgICBsZXQgbmV3SGVpZ2h0OiBudW1iZXI7XG4gICAgICBsZXQgbmV3V2lkdGg6IG51bWJlcjtcbiAgICAgIGxldCBuZXdUcmFuc2Zvcm1ZOiBudW1iZXIgPSAwO1xuICAgICAgbGV0IG5ld1RyYW5zZm9ybVg6IG51bWJlciA9IDA7XG5cbiAgICAgIC8vIHRvcCByaWdodFxuICAgICAgaWYgKGNvcm5lciA9PT0gY29ybmVycy50b3BSaWdodCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChtaW5IZWlnaHQsIG9yaWdpbmFsSGVpZ2h0IC0geURlbHRhLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobWluV2lkdGgsIG9yaWdpbmFsV2lkdGggKyB4RGVsdGEsIHZpZXdwb3J0V2lkdGgpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1ZID0gY2xhbXAoMCwgY3VycmVudFRyYW5zZm9ybVkgKyB5RGVsdGEsIGRpc3RhbmNlRnJvbUJvdHRvbSAtIG5ld0hlaWdodCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVggPSBjdXJyZW50VHJhbnNmb3JtWDtcbiAgICAgIH1cbiAgICAgIC8vIGJvdHRvbSByaWdodFxuICAgICAgZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLmJvdHRvbVJpZ2h0KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG1pbkhlaWdodCwgb3JpZ2luYWxIZWlnaHQgKyB5RGVsdGEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChtaW5XaWR0aCwgb3JpZ2luYWxXaWR0aCArIHhEZWx0YSwgdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVkgPSBjdXJyZW50VHJhbnNmb3JtWTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWCA9IGN1cnJlbnRUcmFuc2Zvcm1YO1xuICAgICAgfVxuICAgICAgLy8gYm90dG9tIGxlZnRcbiAgICAgIGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy5ib3R0b21MZWZ0KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG1pbkhlaWdodCwgb3JpZ2luYWxIZWlnaHQgKyB5RGVsdGEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChtaW5XaWR0aCwgb3JpZ2luYWxXaWR0aCAtIHhEZWx0YSwgdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVkgPSBjdXJyZW50VHJhbnNmb3JtWTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWCA9IGNsYW1wKDAsIGN1cnJlbnRUcmFuc2Zvcm1YICsgeERlbHRhLCBkaXN0YW5jZUZyb21SaWdodCAtIG5ld1dpZHRoKTtcbiAgICAgIH1cbiAgICAgIC8vIHRvcCBsZWZ0XG4gICAgICBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMudG9wTGVmdCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChtaW5IZWlnaHQsIG9yaWdpbmFsSGVpZ2h0IC0geURlbHRhLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobWluV2lkdGgsIG9yaWdpbmFsV2lkdGggLSB4RGVsdGEsIHZpZXdwb3J0V2lkdGgpO1xuXG4gICAgICAgIG5ld1RyYW5zZm9ybVggPSBjbGFtcCgwLCBjdXJyZW50VHJhbnNmb3JtWCArIHhEZWx0YSwgZGlzdGFuY2VGcm9tUmlnaHQgLSBuZXdXaWR0aCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVkgPSBjbGFtcCgwLCBjdXJyZW50VHJhbnNmb3JtWSArIHlEZWx0YSwgZGlzdGFuY2VGcm9tQm90dG9tIC0gbmV3SGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi51cGRhdGVTaXplKGAke25ld1dpZHRofXB4YCwgYCR7bmV3SGVpZ2h0fXB4YCk7XG4gICAgICB0aGlzLl9kcmFnUmVmLnNldEZyZWVEcmFnUG9zaXRpb24oe1xuICAgICAgICB4OiBuZXdUcmFuc2Zvcm1YLFxuICAgICAgICB5OiBuZXdUcmFuc2Zvcm1ZLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3VzZVVwU3ViOiBTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdwb2ludGVydXAnKSxcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdwb2ludGVyY2FuY2VsJyksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgbW91c2VNb3ZlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBtb3VzZVVwU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==