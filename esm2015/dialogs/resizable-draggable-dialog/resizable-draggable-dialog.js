/**
 * @fileoverview added by tsickle
 * Generated from: resizable-draggable-dialog/resizable-draggable-dialog.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { merge, fromEvent } from 'rxjs';
/** @enum {string} */
const corners = {
    topRight: "topRight",
    bottomRight: "bottomRight",
    bottomLeft: "bottomLeft",
    topLeft: "topLeft",
};
/** @enum {string} */
const cursors = {
    nesw: "nesw-resize",
    nwse: "nwse-resize",
};
/** @enum {string} */
const verticalAlignment = {
    top: "top",
    bottom: "bottom",
};
/** @enum {string} */
const horizontalAlignment = {
    right: "right",
    left: "left",
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
export class ResizableDraggableDialog {
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
        this._renderer2.setStyle((/** @type {?} */ (this._document.body)), 'user-select', 'none');
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
            this._renderer2.removeStyle((/** @type {?} */ (this._document.body)), 'user-select');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvZGlhbG9ncy8iLCJzb3VyY2VzIjpbInJlc2l6YWJsZS1kcmFnZ2FibGUtZGlhbG9nL3Jlc2l6YWJsZS1kcmFnZ2FibGUtZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLEtBQUssRUFBZ0IsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd0RCxNQUFLLE9BQU87SUFDVixRQUFRLFlBQWE7SUFDckIsV0FBVyxlQUFnQjtJQUMzQixVQUFVLGNBQWU7SUFDekIsT0FBTyxXQUFZO0VBQ3BCOztBQUNELE1BQUssT0FBTztJQUNWLElBQUksZUFBZ0I7SUFDcEIsSUFBSSxlQUFnQjtFQUNyQjs7QUFDRCxNQUFLLGlCQUFpQjtJQUNwQixHQUFHLE9BQVE7SUFDWCxNQUFNLFVBQVc7RUFDbEI7O0FBQ0QsTUFBSyxtQkFBbUI7SUFDdEIsS0FBSyxTQUFVO0lBQ2YsSUFBSSxRQUFTO0VBQ2Q7O01BRUssV0FBVyxHQUFXLE1BQU07O01BQzVCLE1BQU0sR0FBVyxLQUFLOztNQUN0QixRQUFRLEdBQVcsR0FBRzs7TUFDdEIsU0FBUyxHQUFXLEdBQUc7Ozs7O0FBRTdCLFNBQVMsU0FBUyxDQUFDLFVBQWtCO0lBQ25DLE9BQU8sVUFBVSxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDOzs7Ozs7O0FBRUQsU0FBUyxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQ2xELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsTUFBTSxPQUFPLHdC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aUIsR0FBRyxNQUFNLEVBQUUsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUM7Z0JBQ25GLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixHQUFHLE1BQU0sRUFBRSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsQ0FBQzthQUN0RjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxJQUFJLEVBQUUsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLENBQUMsRUFBRSxhQUFhO2dCQUNoQixDQUFDLEVBQUUsYUFBYTthQUNqQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUM7O2NBRUksVUFBVSxHQUFpQixLQUFLLENBQ3BDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQzlCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQ25DLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsbUJBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUEsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM3RSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQztJQUNKLENBQUM7Q0FDRjs7O0lBMUxDLGtEQUFtQzs7SUFDbkMsbURBQXFDOzs7OztJQUduQyw2Q0FBc0I7Ozs7O0lBQ3RCLDhDQUE2Qjs7Ozs7SUFDN0IsOENBQXFDOzs7OztJQUNyQyw0Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBEcmFnUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBtZXJnZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcC9kcmFnLXJlZic7XG5cbmVudW0gY29ybmVycyB7XG4gIHRvcFJpZ2h0ID0gJ3RvcFJpZ2h0JyxcbiAgYm90dG9tUmlnaHQgPSAnYm90dG9tUmlnaHQnLFxuICBib3R0b21MZWZ0ID0gJ2JvdHRvbUxlZnQnLFxuICB0b3BMZWZ0ID0gJ3RvcExlZnQnLFxufVxuZW51bSBjdXJzb3JzIHtcbiAgbmVzdyA9ICduZXN3LXJlc2l6ZScsXG4gIG53c2UgPSAnbndzZS1yZXNpemUnLFxufVxuZW51bSB2ZXJ0aWNhbEFsaWdubWVudCB7XG4gIHRvcCA9ICd0b3AnLFxuICBib3R0b20gPSAnYm90dG9tJyxcbn1cbmVudW0gaG9yaXpvbnRhbEFsaWdubWVudCB7XG4gIHJpZ2h0ID0gJ3JpZ2h0JyxcbiAgbGVmdCA9ICdsZWZ0Jyxcbn1cblxuY29uc3QgY29ybmVyV2lkdGg6IHN0cmluZyA9ICcxNnB4JztcbmNvbnN0IG9mZnNldDogc3RyaW5nID0gJzBweCc7XG5jb25zdCBtaW5XaWR0aDogbnVtYmVyID0gMjAwO1xuY29uc3QgbWluSGVpZ2h0OiBudW1iZXIgPSAyMDA7XG5cbmZ1bmN0aW9uIGdldFBpeGVscyhzaXplU3RyaW5nOiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gcGFyc2VGbG9hdCgoc2l6ZVN0cmluZyB8fCAnJykucmVwbGFjZSgncHgnLCAnJykpO1xufVxuXG5mdW5jdGlvbiBjbGFtcChtaW46IG51bWJlciwgbnVtOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc2l6YWJsZURyYWdnYWJsZURpYWxvZyB7XG4gIGNvcm5lckVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XG4gIHBvaW50ZXJEb3duU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfZHJhZ1JlZjogRHJhZ1JlZixcbiAgKSB7XG4gICAgdGhpcy5faW5pdGlhbFBvc2l0aW9uUmVzZXQoKTtcbiAgICB0aGlzLl9hdHRhY2hDb3JuZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgYXR0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5fYXR0YWNoQ29ybmVycygpO1xuICB9XG5cbiAgcHVibGljIGRldGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnBvaW50ZXJEb3duU3Vicy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMucG9pbnRlckRvd25TdWJzID0gW107XG4gICAgdGhpcy5jb3JuZXJFbGVtZW50cy5mb3JFYWNoKChlbGVtOiBIVE1MRWxlbWVudCkgPT4gdGhpcy5fcmVuZGVyZXIyLnJlbW92ZUNoaWxkKHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKSwgZWxlbSkpO1xuICAgIHRoaXMuY29ybmVyRWxlbWVudHMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERpYWxvZ1dyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2RpYWxvZ1JlZi5pZCkgfHwge30pLnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9nZXRWaWV3cG9ydERpbWVuc2lvbnMoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGlhbG9nV3JhcHBlckRpbWVuc2lvbnMoKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBkaW1lbnNpb25zOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCkpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogZ2V0UGl4ZWxzKGRpbWVuc2lvbnMud2lkdGgpLFxuICAgICAgaGVpZ2h0OiBnZXRQaXhlbHMoZGltZW5zaW9ucy5oZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9pbml0aWFsUG9zaXRpb25SZXNldCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHJpZ2h0OiB2aWV3cG9ydFdpZHRoLCBib3R0b206IHZpZXdwb3J0SGVpZ2h0IH06IENsaWVudFJlY3QgPSB0aGlzLl9nZXRWaWV3cG9ydERpbWVuc2lvbnMoKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2dldERpYWxvZ1dyYXBwZXJEaW1lbnNpb25zKCk7XG4gICAgY29uc3Qge1xuICAgICAgbWFyZ2luUmlnaHQ6IG9yaWdpbmFsRGlhbG9nUmlnaHQsXG4gICAgICBtYXJnaW5MZWZ0OiBvcmlnaW5hbERpYWxvZ0xlZnQsXG4gICAgICBtYXJnaW5Cb3R0b206IG9yaWdpbmFsRGlhbG9nQm90dG9tLFxuICAgICAgbWFyZ2luVG9wOiBvcmlnaW5hbERpYWxvZ1RvcCxcbiAgICB9ID0gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLnN0eWxlO1xuICAgIGxldCB4OiBudW1iZXI7XG4gICAgaWYgKG9yaWdpbmFsRGlhbG9nTGVmdCkge1xuICAgICAgeCA9IGdldFBpeGVscyhvcmlnaW5hbERpYWxvZ0xlZnQpO1xuICAgIH0gZWxzZSBpZiAob3JpZ2luYWxEaWFsb2dSaWdodCkge1xuICAgICAgeCA9IHZpZXdwb3J0V2lkdGggLSBnZXRQaXhlbHMob3JpZ2luYWxEaWFsb2dSaWdodCkgLSB3aWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9ICh2aWV3cG9ydFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICB9XG4gICAgbGV0IHk6IG51bWJlcjtcbiAgICBpZiAob3JpZ2luYWxEaWFsb2dUb3ApIHtcbiAgICAgIHkgPSBnZXRQaXhlbHMob3JpZ2luYWxEaWFsb2dUb3ApO1xuICAgIH0gZWxzZSBpZiAob3JpZ2luYWxEaWFsb2dCb3R0b20pIHtcbiAgICAgIHkgPSB2aWV3cG9ydEhlaWdodCAtIGdldFBpeGVscyhvcmlnaW5hbERpYWxvZ0JvdHRvbSkgLSBoZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSAodmlld3BvcnRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICB9XG4gICAgLy8gdXNlIGRyYWcgcmVmJ3MgbWVjaGFuaXNtcyBmb3IgcG9zaXRpb25pbmcgaW5zdGVhZCBvZiB0aGUgZGlhbG9nJ3NcbiAgICB0aGlzLl9kaWFsb2dSZWYudXBkYXRlUG9zaXRpb24oeyB0b3A6ICcwcHgnLCByaWdodDogJzBweCcsIGJvdHRvbTogJzBweCcsIGxlZnQ6ICcwcHgnIH0pO1xuICAgIHRoaXMuX2RyYWdSZWYuc2V0RnJlZURyYWdQb3NpdGlvbih7IHgsIHkgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hDb3JuZXJzKCk6IHZvaWQge1xuICAgIE9iamVjdC52YWx1ZXMoY29ybmVycykuZm9yRWFjaCgoY29ybmVyOiBjb3JuZXJzKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX3JlbmRlcmVyMi5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuY29ybmVyRWxlbWVudHMgPSBbLi4udGhpcy5jb3JuZXJFbGVtZW50cywgZWxlbWVudF07XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgJ3dpZHRoJywgY29ybmVyV2lkdGgpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsICdoZWlnaHQnLCBjb3JuZXJXaWR0aCk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuYXBwZW5kQ2hpbGQodGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLCBlbGVtZW50KTtcblxuICAgICAgbGV0IGN1cnNvcjogY3Vyc29ycztcbiAgICAgIGxldCB0b3BCb3R0b206IHZlcnRpY2FsQWxpZ25tZW50O1xuICAgICAgbGV0IHJpZ2h0TGVmdDogaG9yaXpvbnRhbEFsaWdubWVudDtcblxuICAgICAgaWYgKGNvcm5lciA9PT0gY29ybmVycy50b3BSaWdodCkge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3JzLm5lc3c7XG4gICAgICAgIHRvcEJvdHRvbSA9IHZlcnRpY2FsQWxpZ25tZW50LnRvcDtcbiAgICAgICAgcmlnaHRMZWZ0ID0gaG9yaXpvbnRhbEFsaWdubWVudC5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLmJvdHRvbVJpZ2h0KSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcnMubndzZTtcbiAgICAgICAgdG9wQm90dG9tID0gdmVydGljYWxBbGlnbm1lbnQuYm90dG9tO1xuICAgICAgICByaWdodExlZnQgPSBob3Jpem9udGFsQWxpZ25tZW50LnJpZ2h0O1xuXG4gICAgICAgIGNvbnN0IGljb246IEhUTUxFbGVtZW50ID0gdGhpcy5fcmVuZGVyZXIyLmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKGljb24sICdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuYXBwZW5kQ2hpbGQoaWNvbiwgdGhpcy5fcmVuZGVyZXIyLmNyZWF0ZVRleHQoJ2ZpbHRlcl9saXN0JykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuYXBwZW5kQ2hpbGQoZWxlbWVudCwgaWNvbik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShpY29uLCAndHJhbnNmb3JtJywgYHJvdGF0ZSgkezMxNX1kZWcpIHRyYW5zbGF0ZSgwcHgsICR7b2Zmc2V0fSlgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGljb24sICdmb250LXNpemUnLCBjb3JuZXJXaWR0aCk7XG4gICAgICB9IGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy5ib3R0b21MZWZ0KSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcnMubmVzdztcbiAgICAgICAgdG9wQm90dG9tID0gdmVydGljYWxBbGlnbm1lbnQuYm90dG9tO1xuICAgICAgICByaWdodExlZnQgPSBob3Jpem9udGFsQWxpZ25tZW50LmxlZnQ7XG4gICAgICB9IGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy50b3BMZWZ0KSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcnMubndzZTtcbiAgICAgICAgdG9wQm90dG9tID0gdmVydGljYWxBbGlnbm1lbnQudG9wO1xuICAgICAgICByaWdodExlZnQgPSBob3Jpem9udGFsQWxpZ25tZW50LmxlZnQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgdG9wQm90dG9tLCBvZmZzZXQpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsIHJpZ2h0TGVmdCwgb2Zmc2V0KTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCAnY3Vyc29yJywgY3Vyc29yKTtcblxuICAgICAgY29uc3QgcG9pbnRlckRvd25TdWI6IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudChlbGVtZW50LCAncG9pbnRlcmRvd24nKS5zdWJzY3JpYmUoKGV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTW91c2VEb3duKGV2ZW50LCBjb3JuZXIpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBvaW50ZXJEb3duU3VicyA9IFsuLi50aGlzLnBvaW50ZXJEb3duU3VicywgcG9pbnRlckRvd25TdWJdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTW91c2VEb3duKGV2ZW50OiBQb2ludGVyRXZlbnQsIGNvcm5lcjogY29ybmVycyk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZSg8SFRNTEVsZW1lbnQ+dGhpcy5fZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgICBjb25zdCB7IHdpZHRoOiBvcmlnaW5hbFdpZHRoLCBoZWlnaHQ6IG9yaWdpbmFsSGVpZ2h0IH0gPSB0aGlzLl9nZXREaWFsb2dXcmFwcGVyRGltZW5zaW9ucygpO1xuICAgIGNvbnN0IG9yaWdpbmFsTW91c2VYOiBudW1iZXIgPSBldmVudC5wYWdlWDtcbiAgICBjb25zdCBvcmlnaW5hbE1vdXNlWTogbnVtYmVyID0gZXZlbnQucGFnZVk7XG4gICAgY29uc3QgeyB4OiBjdXJyZW50VHJhbnNmb3JtWCwgeTogY3VycmVudFRyYW5zZm9ybVkgfTogUG9pbnQgPSB0aGlzLl9kcmFnUmVmLmdldEZyZWVEcmFnUG9zaXRpb24oKTtcbiAgICBjb25zdCB7XG4gICAgICBib3R0b206IGRpc3RhbmNlRnJvbUJvdHRvbSxcbiAgICAgIHJpZ2h0OiBkaXN0YW5jZUZyb21SaWdodCxcbiAgICB9OiBDbGllbnRSZWN0ID0gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgcmlnaHQ6IHZpZXdwb3J0V2lkdGgsIGJvdHRvbTogdmlld3BvcnRIZWlnaHQgfTogQ2xpZW50UmVjdCA9IHRoaXMuX2dldFZpZXdwb3J0RGltZW5zaW9ucygpO1xuXG4gICAgY29uc3QgbW91c2VNb3ZlU3ViOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAncG9pbnRlcm1vdmUnKS5zdWJzY3JpYmUoKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IGhpZ2hsaWdodGluZyBvZiB0ZXh0IHdoZW4gZHJhZ2dpbmdcblxuICAgICAgY29uc3QgeURlbHRhOiBudW1iZXIgPSBjbGFtcCgwLCBlLnBhZ2VZLCB2aWV3cG9ydEhlaWdodCkgLSBvcmlnaW5hbE1vdXNlWTtcbiAgICAgIGNvbnN0IHhEZWx0YTogbnVtYmVyID0gY2xhbXAoMCwgZS5wYWdlWCwgdmlld3BvcnRXaWR0aCkgLSBvcmlnaW5hbE1vdXNlWDtcbiAgICAgIGxldCBuZXdIZWlnaHQ6IG51bWJlcjtcbiAgICAgIGxldCBuZXdXaWR0aDogbnVtYmVyO1xuICAgICAgbGV0IG5ld1RyYW5zZm9ybVk6IG51bWJlciA9IDA7XG4gICAgICBsZXQgbmV3VHJhbnNmb3JtWDogbnVtYmVyID0gMDtcblxuICAgICAgLy8gdG9wIHJpZ2h0XG4gICAgICBpZiAoY29ybmVyID09PSBjb3JuZXJzLnRvcFJpZ2h0KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG1pbkhlaWdodCwgb3JpZ2luYWxIZWlnaHQgLSB5RGVsdGEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChtaW5XaWR0aCwgb3JpZ2luYWxXaWR0aCArIHhEZWx0YSwgdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVkgPSBjbGFtcCgwLCBjdXJyZW50VHJhbnNmb3JtWSArIHlEZWx0YSwgZGlzdGFuY2VGcm9tQm90dG9tIC0gbmV3SGVpZ2h0KTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWCA9IGN1cnJlbnRUcmFuc2Zvcm1YO1xuICAgICAgfVxuICAgICAgLy8gYm90dG9tIHJpZ2h0XG4gICAgICBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMuYm90dG9tUmlnaHQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobWluSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCArIHlEZWx0YSwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG1pbldpZHRoLCBvcmlnaW5hbFdpZHRoICsgeERlbHRhLCB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWSA9IGN1cnJlbnRUcmFuc2Zvcm1ZO1xuICAgICAgICBuZXdUcmFuc2Zvcm1YID0gY3VycmVudFRyYW5zZm9ybVg7XG4gICAgICB9XG4gICAgICAvLyBib3R0b20gbGVmdFxuICAgICAgZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLmJvdHRvbUxlZnQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobWluSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCArIHlEZWx0YSwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG1pbldpZHRoLCBvcmlnaW5hbFdpZHRoIC0geERlbHRhLCB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWSA9IGN1cnJlbnRUcmFuc2Zvcm1ZO1xuICAgICAgICBuZXdUcmFuc2Zvcm1YID0gY2xhbXAoMCwgY3VycmVudFRyYW5zZm9ybVggKyB4RGVsdGEsIGRpc3RhbmNlRnJvbVJpZ2h0IC0gbmV3V2lkdGgpO1xuICAgICAgfVxuICAgICAgLy8gdG9wIGxlZnRcbiAgICAgIGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy50b3BMZWZ0KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG1pbkhlaWdodCwgb3JpZ2luYWxIZWlnaHQgLSB5RGVsdGEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChtaW5XaWR0aCwgb3JpZ2luYWxXaWR0aCAtIHhEZWx0YSwgdmlld3BvcnRXaWR0aCk7XG5cbiAgICAgICAgbmV3VHJhbnNmb3JtWCA9IGNsYW1wKDAsIGN1cnJlbnRUcmFuc2Zvcm1YICsgeERlbHRhLCBkaXN0YW5jZUZyb21SaWdodCAtIG5ld1dpZHRoKTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWSA9IGNsYW1wKDAsIGN1cnJlbnRUcmFuc2Zvcm1ZICsgeURlbHRhLCBkaXN0YW5jZUZyb21Cb3R0b20gLSBuZXdIZWlnaHQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGlhbG9nUmVmLnVwZGF0ZVNpemUoYCR7bmV3V2lkdGh9cHhgLCBgJHtuZXdIZWlnaHR9cHhgKTtcbiAgICAgIHRoaXMuX2RyYWdSZWYuc2V0RnJlZURyYWdQb3NpdGlvbih7XG4gICAgICAgIHg6IG5ld1RyYW5zZm9ybVgsXG4gICAgICAgIHk6IG5ld1RyYW5zZm9ybVksXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1vdXNlVXBTdWI6IFN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3BvaW50ZXJ1cCcpLFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3BvaW50ZXJjYW5jZWwnKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIucmVtb3ZlU3R5bGUoPEhUTUxFbGVtZW50PnRoaXMuX2RvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcpO1xuICAgICAgbW91c2VNb3ZlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBtb3VzZVVwU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==