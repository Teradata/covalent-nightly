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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cvcmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsS0FBSyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQUlwRCxVQUFXLFVBQVU7SUFDckIsYUFBYyxhQUFhO0lBQzNCLFlBQWEsWUFBWTtJQUN6QixTQUFVLFNBQVM7Ozs7SUFHbkIsTUFBTyxhQUFhO0lBQ3BCLE1BQU8sYUFBYTs7OztJQUdwQixLQUFNLEtBQUs7SUFDWCxRQUFTLFFBQVE7Ozs7SUFHakIsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNOzs7SUFHVCxXQUFXLEdBQVcsTUFBTTs7SUFDNUIsTUFBTSxHQUFXLEtBQUs7O0lBQ3RCLFFBQVEsR0FBVyxHQUFHOztJQUN0QixTQUFTLEdBQVcsR0FBRzs7Ozs7QUFFN0IsU0FBUyxTQUFTLENBQUMsVUFBa0I7SUFDbkMsT0FBTyxVQUFVLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUM7Ozs7Ozs7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDbEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRDtJQUlFLGtDQUNVLFNBQWMsRUFDZCxVQUFxQixFQUNyQixVQUE2QixFQUM3QixRQUFpQjtRQUhqQixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNy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O1lBQ1YsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUM7SUFDSixDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBekxELElBeUxDOzs7O0lBeExDLGtEQUFtQzs7SUFDbkMsbURBQXFDOzs7OztJQUduQyw2Q0FBc0I7Ozs7O0lBQ3RCLDhDQUE2Qjs7Ozs7SUFDN0IsOENBQXFDOzs7OztJQUNyQyw0Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBEcmFnUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBtZXJnZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcC9kcmFnLXJlZic7XG5cbmVudW0gY29ybmVycyB7XG4gIHRvcFJpZ2h0ID0gJ3RvcFJpZ2h0JyxcbiAgYm90dG9tUmlnaHQgPSAnYm90dG9tUmlnaHQnLFxuICBib3R0b21MZWZ0ID0gJ2JvdHRvbUxlZnQnLFxuICB0b3BMZWZ0ID0gJ3RvcExlZnQnLFxufVxuZW51bSBjdXJzb3JzIHtcbiAgbmVzdyA9ICduZXN3LXJlc2l6ZScsXG4gIG53c2UgPSAnbndzZS1yZXNpemUnLFxufVxuZW51bSB2ZXJ0aWNhbEFsaWdubWVudCB7XG4gIHRvcCA9ICd0b3AnLFxuICBib3R0b20gPSAnYm90dG9tJyxcbn1cbmVudW0gaG9yaXpvbnRhbEFsaWdubWVudCB7XG4gIHJpZ2h0ID0gJ3JpZ2h0JyxcbiAgbGVmdCA9ICdsZWZ0Jyxcbn1cblxuY29uc3QgY29ybmVyV2lkdGg6IHN0cmluZyA9ICcxNnB4JztcbmNvbnN0IG9mZnNldDogc3RyaW5nID0gJzBweCc7XG5jb25zdCBtaW5XaWR0aDogbnVtYmVyID0gMjAwO1xuY29uc3QgbWluSGVpZ2h0OiBudW1iZXIgPSAyMDA7XG5cbmZ1bmN0aW9uIGdldFBpeGVscyhzaXplU3RyaW5nOiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gcGFyc2VGbG9hdCgoc2l6ZVN0cmluZyB8fCAnJykucmVwbGFjZSgncHgnLCAnJykpO1xufVxuXG5mdW5jdGlvbiBjbGFtcChtaW46IG51bWJlciwgbnVtOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc2l6YWJsZURyYWdnYWJsZURpYWxvZyB7XG4gIGNvcm5lckVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XG4gIHBvaW50ZXJEb3duU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfZHJhZ1JlZjogRHJhZ1JlZixcbiAgKSB7XG4gICAgdGhpcy5faW5pdGlhbFBvc2l0aW9uUmVzZXQoKTtcbiAgICB0aGlzLl9hdHRhY2hDb3JuZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgYXR0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5fYXR0YWNoQ29ybmVycygpO1xuICB9XG5cbiAgcHVibGljIGRldGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnBvaW50ZXJEb3duU3Vicy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMucG9pbnRlckRvd25TdWJzID0gW107XG4gICAgdGhpcy5jb3JuZXJFbGVtZW50cy5mb3JFYWNoKChlbGVtOiBIVE1MRWxlbWVudCkgPT4gdGhpcy5fcmVuZGVyZXIyLnJlbW92ZUNoaWxkKHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKSwgZWxlbSkpO1xuICAgIHRoaXMuY29ybmVyRWxlbWVudHMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERpYWxvZ1dyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2RpYWxvZ1JlZi5pZCkgfHwge30pLnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9nZXRWaWV3cG9ydERpbWVuc2lvbnMoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGlhbG9nV3JhcHBlckRpbWVuc2lvbnMoKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBkaW1lbnNpb25zOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCkpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogZ2V0UGl4ZWxzKGRpbWVuc2lvbnMud2lkdGgpLFxuICAgICAgaGVpZ2h0OiBnZXRQaXhlbHMoZGltZW5zaW9ucy5oZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9pbml0aWFsUG9zaXRpb25SZXNldCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHJpZ2h0OiB2aWV3cG9ydFdpZHRoLCBib3R0b206IHZpZXdwb3J0SGVpZ2h0IH06IENsaWVudFJlY3QgPSB0aGlzLl9nZXRWaWV3cG9ydERpbWVuc2lvbnMoKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2dldERpYWxvZ1dyYXBwZXJEaW1lbnNpb25zKCk7XG4gICAgY29uc3Qge1xuICAgICAgbWFyZ2luUmlnaHQ6IG9yaWdpbmFsRGlhbG9nUmlnaHQsXG4gICAgICBtYXJnaW5MZWZ0OiBvcmlnaW5hbERpYWxvZ0xlZnQsXG4gICAgICBtYXJnaW5Cb3R0b206IG9yaWdpbmFsRGlhbG9nQm90dG9tLFxuICAgICAgbWFyZ2luVG9wOiBvcmlnaW5hbERpYWxvZ1RvcCxcbiAgICB9ID0gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLnN0eWxlO1xuICAgIGxldCB4OiBudW1iZXI7XG4gICAgaWYgKG9yaWdpbmFsRGlhbG9nTGVmdCkge1xuICAgICAgeCA9IGdldFBpeGVscyhvcmlnaW5hbERpYWxvZ0xlZnQpO1xuICAgIH0gZWxzZSBpZiAob3JpZ2luYWxEaWFsb2dSaWdodCkge1xuICAgICAgeCA9IHZpZXdwb3J0V2lkdGggLSBnZXRQaXhlbHMob3JpZ2luYWxEaWFsb2dSaWdodCkgLSB3aWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9ICh2aWV3cG9ydFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICB9XG4gICAgbGV0IHk6IG51bWJlcjtcbiAgICBpZiAob3JpZ2luYWxEaWFsb2dUb3ApIHtcbiAgICAgIHkgPSBnZXRQaXhlbHMob3JpZ2luYWxEaWFsb2dUb3ApO1xuICAgIH0gZWxzZSBpZiAob3JpZ2luYWxEaWFsb2dCb3R0b20pIHtcbiAgICAgIHkgPSB2aWV3cG9ydEhlaWdodCAtIGdldFBpeGVscyhvcmlnaW5hbERpYWxvZ0JvdHRvbSkgLSBoZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSAodmlld3BvcnRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICB9XG4gICAgLy8gdXNlIGRyYWcgcmVmJ3MgbWVjaGFuaXNtcyBmb3IgcG9zaXRpb25pbmcgaW5zdGVhZCBvZiB0aGUgZGlhbG9nJ3NcbiAgICB0aGlzLl9kaWFsb2dSZWYudXBkYXRlUG9zaXRpb24oeyB0b3A6ICcwcHgnLCByaWdodDogJzBweCcsIGJvdHRvbTogJzBweCcsIGxlZnQ6ICcwcHgnIH0pO1xuICAgIHRoaXMuX2RyYWdSZWYuc2V0RnJlZURyYWdQb3NpdGlvbih7IHgsIHkgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hDb3JuZXJzKCk6IHZvaWQge1xuICAgIE9iamVjdC52YWx1ZXMoY29ybmVycykuZm9yRWFjaCgoY29ybmVyOiBjb3JuZXJzKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX3JlbmRlcmVyMi5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuY29ybmVyRWxlbWVudHMgPSBbLi4udGhpcy5jb3JuZXJFbGVtZW50cywgZWxlbWVudF07XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgJ3dpZHRoJywgY29ybmVyV2lkdGgpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsICdoZWlnaHQnLCBjb3JuZXJXaWR0aCk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuYXBwZW5kQ2hpbGQodGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLCBlbGVtZW50KTtcblxuICAgICAgbGV0IGN1cnNvcjogY3Vyc29ycztcbiAgICAgIGxldCB0b3BCb3R0b206IHZlcnRpY2FsQWxpZ25tZW50O1xuICAgICAgbGV0IHJpZ2h0TGVmdDogaG9yaXpvbnRhbEFsaWdubWVudDtcblxuICAgICAgaWYgKGNvcm5lciA9PT0gY29ybmVycy50b3BSaWdodCkge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3JzLm5lc3c7XG4gICAgICAgIHRvcEJvdHRvbSA9IHZlcnRpY2FsQWxpZ25tZW50LnRvcDtcbiAgICAgICAgcmlnaHRMZWZ0ID0gaG9yaXpvbnRhbEFsaWdubWVudC5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLmJvdHRvbVJpZ2h0KSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcnMubndzZTtcbiAgICAgICAgdG9wQm90dG9tID0gdmVydGljYWxBbGlnbm1lbnQuYm90dG9tO1xuICAgICAgICByaWdodExlZnQgPSBob3Jpem9udGFsQWxpZ25tZW50LnJpZ2h0O1xuXG4gICAgICAgIGNvbnN0IGljb246IEhUTUxFbGVtZW50ID0gdGhpcy5fcmVuZGVyZXIyLmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKGljb24sICdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuYXBwZW5kQ2hpbGQoaWNvbiwgdGhpcy5fcmVuZGVyZXIyLmNyZWF0ZVRleHQoJ2ZpbHRlcl9saXN0JykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuYXBwZW5kQ2hpbGQoZWxlbWVudCwgaWNvbik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShpY29uLCAndHJhbnNmb3JtJywgYHJvdGF0ZSgkezMxNX1kZWcpIHRyYW5zbGF0ZSgwcHgsICR7b2Zmc2V0fSlgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGljb24sICdmb250LXNpemUnLCBjb3JuZXJXaWR0aCk7XG4gICAgICB9IGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy5ib3R0b21MZWZ0KSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcnMubmVzdztcbiAgICAgICAgdG9wQm90dG9tID0gdmVydGljYWxBbGlnbm1lbnQuYm90dG9tO1xuICAgICAgICByaWdodExlZnQgPSBob3Jpem9udGFsQWxpZ25tZW50LmxlZnQ7XG4gICAgICB9IGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy50b3BMZWZ0KSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcnMubndzZTtcbiAgICAgICAgdG9wQm90dG9tID0gdmVydGljYWxBbGlnbm1lbnQudG9wO1xuICAgICAgICByaWdodExlZnQgPSBob3Jpem9udGFsQWxpZ25tZW50LmxlZnQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgdG9wQm90dG9tLCBvZmZzZXQpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsIHJpZ2h0TGVmdCwgb2Zmc2V0KTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCAnY3Vyc29yJywgY3Vyc29yKTtcblxuICAgICAgY29uc3QgcG9pbnRlckRvd25TdWI6IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudChlbGVtZW50LCAncG9pbnRlcmRvd24nKS5zdWJzY3JpYmUoKGV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTW91c2VEb3duKGV2ZW50LCBjb3JuZXIpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBvaW50ZXJEb3duU3VicyA9IFsuLi50aGlzLnBvaW50ZXJEb3duU3VicywgcG9pbnRlckRvd25TdWJdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTW91c2VEb3duKGV2ZW50OiBQb2ludGVyRXZlbnQsIGNvcm5lcjogY29ybmVycyk6IHZvaWQge1xuICAgIGNvbnN0IHsgd2lkdGg6IG9yaWdpbmFsV2lkdGgsIGhlaWdodDogb3JpZ2luYWxIZWlnaHQgfSA9IHRoaXMuX2dldERpYWxvZ1dyYXBwZXJEaW1lbnNpb25zKCk7XG4gICAgY29uc3Qgb3JpZ2luYWxNb3VzZVg6IG51bWJlciA9IGV2ZW50LnBhZ2VYO1xuICAgIGNvbnN0IG9yaWdpbmFsTW91c2VZOiBudW1iZXIgPSBldmVudC5wYWdlWTtcbiAgICBjb25zdCB7IHg6IGN1cnJlbnRUcmFuc2Zvcm1YLCB5OiBjdXJyZW50VHJhbnNmb3JtWSB9OiBQb2ludCA9IHRoaXMuX2RyYWdSZWYuZ2V0RnJlZURyYWdQb3NpdGlvbigpO1xuICAgIGNvbnN0IHtcbiAgICAgIGJvdHRvbTogZGlzdGFuY2VGcm9tQm90dG9tLFxuICAgICAgcmlnaHQ6IGRpc3RhbmNlRnJvbVJpZ2h0LFxuICAgIH06IENsaWVudFJlY3QgPSB0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyByaWdodDogdmlld3BvcnRXaWR0aCwgYm90dG9tOiB2aWV3cG9ydEhlaWdodCB9OiBDbGllbnRSZWN0ID0gdGhpcy5fZ2V0Vmlld3BvcnREaW1lbnNpb25zKCk7XG5cbiAgICBjb25zdCBtb3VzZU1vdmVTdWI6IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdwb2ludGVybW92ZScpLnN1YnNjcmliZSgoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgaGlnaGxpZ2h0aW5nIG9mIHRleHQgd2hlbiBkcmFnZ2luZ1xuXG4gICAgICBjb25zdCB5RGVsdGE6IG51bWJlciA9IGNsYW1wKDAsIGUucGFnZVksIHZpZXdwb3J0SGVpZ2h0KSAtIG9yaWdpbmFsTW91c2VZO1xuICAgICAgY29uc3QgeERlbHRhOiBudW1iZXIgPSBjbGFtcCgwLCBlLnBhZ2VYLCB2aWV3cG9ydFdpZHRoKSAtIG9yaWdpbmFsTW91c2VYO1xuICAgICAgbGV0IG5ld0hlaWdodDogbnVtYmVyO1xuICAgICAgbGV0IG5ld1dpZHRoOiBudW1iZXI7XG4gICAgICBsZXQgbmV3VHJhbnNmb3JtWTogbnVtYmVyID0gMDtcbiAgICAgIGxldCBuZXdUcmFuc2Zvcm1YOiBudW1iZXIgPSAwO1xuXG4gICAgICAvLyB0b3AgcmlnaHRcbiAgICAgIGlmIChjb3JuZXIgPT09IGNvcm5lcnMudG9wUmlnaHQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobWluSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCAtIHlEZWx0YSwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG1pbldpZHRoLCBvcmlnaW5hbFdpZHRoICsgeERlbHRhLCB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWSA9IGNsYW1wKDAsIGN1cnJlbnRUcmFuc2Zvcm1ZICsgeURlbHRhLCBkaXN0YW5jZUZyb21Cb3R0b20gLSBuZXdIZWlnaHQpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1YID0gY3VycmVudFRyYW5zZm9ybVg7XG4gICAgICB9XG4gICAgICAvLyBib3R0b20gcmlnaHRcbiAgICAgIGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy5ib3R0b21SaWdodCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChtaW5IZWlnaHQsIG9yaWdpbmFsSGVpZ2h0ICsgeURlbHRhLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobWluV2lkdGgsIG9yaWdpbmFsV2lkdGggKyB4RGVsdGEsIHZpZXdwb3J0V2lkdGgpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1ZID0gY3VycmVudFRyYW5zZm9ybVk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVggPSBjdXJyZW50VHJhbnNmb3JtWDtcbiAgICAgIH1cbiAgICAgIC8vIGJvdHRvbSBsZWZ0XG4gICAgICBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMuYm90dG9tTGVmdCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChtaW5IZWlnaHQsIG9yaWdpbmFsSGVpZ2h0ICsgeURlbHRhLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobWluV2lkdGgsIG9yaWdpbmFsV2lkdGggLSB4RGVsdGEsIHZpZXdwb3J0V2lkdGgpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1ZID0gY3VycmVudFRyYW5zZm9ybVk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVggPSBjbGFtcCgwLCBjdXJyZW50VHJhbnNmb3JtWCArIHhEZWx0YSwgZGlzdGFuY2VGcm9tUmlnaHQgLSBuZXdXaWR0aCk7XG4gICAgICB9XG4gICAgICAvLyB0b3AgbGVmdFxuICAgICAgZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLnRvcExlZnQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobWluSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCAtIHlEZWx0YSwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG1pbldpZHRoLCBvcmlnaW5hbFdpZHRoIC0geERlbHRhLCB2aWV3cG9ydFdpZHRoKTtcblxuICAgICAgICBuZXdUcmFuc2Zvcm1YID0gY2xhbXAoMCwgY3VycmVudFRyYW5zZm9ybVggKyB4RGVsdGEsIGRpc3RhbmNlRnJvbVJpZ2h0IC0gbmV3V2lkdGgpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1ZID0gY2xhbXAoMCwgY3VycmVudFRyYW5zZm9ybVkgKyB5RGVsdGEsIGRpc3RhbmNlRnJvbUJvdHRvbSAtIG5ld0hlaWdodCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9kaWFsb2dSZWYudXBkYXRlU2l6ZShgJHtuZXdXaWR0aH1weGAsIGAke25ld0hlaWdodH1weGApO1xuICAgICAgdGhpcy5fZHJhZ1JlZi5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHtcbiAgICAgICAgeDogbmV3VHJhbnNmb3JtWCxcbiAgICAgICAgeTogbmV3VHJhbnNmb3JtWSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbW91c2VVcFN1YjogU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncG9pbnRlcnVwJyksXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncG9pbnRlcmNhbmNlbCcpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIG1vdXNlTW92ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgbW91c2VVcFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=