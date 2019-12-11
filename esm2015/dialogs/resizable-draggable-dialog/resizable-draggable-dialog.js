/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { merge } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3MvcmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cvcmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUvRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFJM0IsVUFBVyxVQUFVO0lBQ3JCLGFBQWMsYUFBYTtJQUMzQixZQUFhLFlBQVk7SUFDekIsU0FBVSxTQUFTOzs7O0lBR25CLE1BQU8sYUFBYTtJQUNwQixNQUFPLGFBQWE7Ozs7SUFHcEIsS0FBTSxLQUFLO0lBQ1gsUUFBUyxRQUFROzs7O0lBR2pCLE9BQVEsT0FBTztJQUNmLE1BQU8sTUFBTTs7O01BR1QsV0FBVyxHQUFXLE1BQU07O01BQzVCLE1BQU0sR0FBVyxLQUFLOztNQUN0QixRQUFRLEdBQVcsR0FBRzs7TUFDdEIsU0FBUyxHQUFXLEdBQUc7Ozs7O0FBRTdCLFNBQVMsU0FBUyxDQUFDLFVBQWtCO0lBQ25DLE9BQU8sVUFBVSxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDOzs7Ozs7O0FBRUQsU0FBUyxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQ2xELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQUluQyxZQUNVLFNBQWMsRUFDZCxVQUFxQixFQUNyQixVQUE2QixFQUM3QixRQUFpQjtR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VSxDQUFDLEdBQUcsUUFBUSxJQUFJLEVBQUUsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLENBQUMsRUFBRSxhQUFhO2dCQUNoQixDQUFDLEVBQUUsYUFBYTthQUNqQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUM7O2NBRUksVUFBVSxHQUFpQixLQUFLLENBQ3BDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQzlCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQ25DLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQXhMQyxrREFBbUM7O0lBQ25DLG1EQUFxQzs7Ozs7SUFHbkMsNkNBQXNCOzs7OztJQUN0Qiw4Q0FBNkI7Ozs7O0lBQzdCLDhDQUFxQzs7Ozs7SUFDckMsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRHJhZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AvZHJhZy1yZWYnO1xuXG5lbnVtIGNvcm5lcnMge1xuICB0b3BSaWdodCA9ICd0b3BSaWdodCcsXG4gIGJvdHRvbVJpZ2h0ID0gJ2JvdHRvbVJpZ2h0JyxcbiAgYm90dG9tTGVmdCA9ICdib3R0b21MZWZ0JyxcbiAgdG9wTGVmdCA9ICd0b3BMZWZ0Jyxcbn1cbmVudW0gY3Vyc29ycyB7XG4gIG5lc3cgPSAnbmVzdy1yZXNpemUnLFxuICBud3NlID0gJ253c2UtcmVzaXplJyxcbn1cbmVudW0gdmVydGljYWxBbGlnbm1lbnQge1xuICB0b3AgPSAndG9wJyxcbiAgYm90dG9tID0gJ2JvdHRvbScsXG59XG5lbnVtIGhvcml6b250YWxBbGlnbm1lbnQge1xuICByaWdodCA9ICdyaWdodCcsXG4gIGxlZnQgPSAnbGVmdCcsXG59XG5cbmNvbnN0IGNvcm5lcldpZHRoOiBzdHJpbmcgPSAnMTZweCc7XG5jb25zdCBvZmZzZXQ6IHN0cmluZyA9ICcwcHgnO1xuY29uc3QgbWluV2lkdGg6IG51bWJlciA9IDIwMDtcbmNvbnN0IG1pbkhlaWdodDogbnVtYmVyID0gMjAwO1xuXG5mdW5jdGlvbiBnZXRQaXhlbHMoc2l6ZVN0cmluZzogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoKHNpemVTdHJpbmcgfHwgJycpLnJlcGxhY2UoJ3B4JywgJycpKTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobWluOiBudW1iZXIsIG51bTogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNpemFibGVEcmFnZ2FibGVEaWFsb2cge1xuICBjb3JuZXJFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICBwb2ludGVyRG93blN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxhbnk+LFxuICAgIHByaXZhdGUgX2RyYWdSZWY6IERyYWdSZWYsXG4gICkge1xuICAgIHRoaXMuX2luaXRpYWxQb3NpdGlvblJlc2V0KCk7XG4gICAgdGhpcy5fYXR0YWNoQ29ybmVycygpO1xuICB9XG5cbiAgcHVibGljIGF0dGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMuX2F0dGFjaENvcm5lcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5wb2ludGVyRG93blN1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLnBvaW50ZXJEb3duU3VicyA9IFtdO1xuICAgIHRoaXMuY29ybmVyRWxlbWVudHMuZm9yRWFjaCgoZWxlbTogSFRNTEVsZW1lbnQpID0+IHRoaXMuX3JlbmRlcmVyMi5yZW1vdmVDaGlsZCh0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCksIGVsZW0pKTtcbiAgICB0aGlzLmNvcm5lckVsZW1lbnRzID0gW107XG4gIH1cblxuICBwcml2YXRlIF9nZXREaWFsb2dXcmFwcGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9kaWFsb2dSZWYuaWQpIHx8IHt9KS5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Vmlld3BvcnREaW1lbnNpb25zKCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCkucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERpYWxvZ1dyYXBwZXJEaW1lbnNpb25zKCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgZGltZW5zaW9uczogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGdldFBpeGVscyhkaW1lbnNpb25zLndpZHRoKSxcbiAgICAgIGhlaWdodDogZ2V0UGl4ZWxzKGRpbWVuc2lvbnMuaGVpZ2h0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbFBvc2l0aW9uUmVzZXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyByaWdodDogdmlld3BvcnRXaWR0aCwgYm90dG9tOiB2aWV3cG9ydEhlaWdodCB9OiBDbGllbnRSZWN0ID0gdGhpcy5fZ2V0Vmlld3BvcnREaW1lbnNpb25zKCk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9nZXREaWFsb2dXcmFwcGVyRGltZW5zaW9ucygpO1xuICAgIGNvbnN0IHtcbiAgICAgIG1hcmdpblJpZ2h0OiBvcmlnaW5hbERpYWxvZ1JpZ2h0LFxuICAgICAgbWFyZ2luTGVmdDogb3JpZ2luYWxEaWFsb2dMZWZ0LFxuICAgICAgbWFyZ2luQm90dG9tOiBvcmlnaW5hbERpYWxvZ0JvdHRvbSxcbiAgICAgIG1hcmdpblRvcDogb3JpZ2luYWxEaWFsb2dUb3AsXG4gICAgfSA9IHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKS5zdHlsZTtcbiAgICBsZXQgeDogbnVtYmVyO1xuICAgIGlmIChvcmlnaW5hbERpYWxvZ0xlZnQpIHtcbiAgICAgIHggPSBnZXRQaXhlbHMob3JpZ2luYWxEaWFsb2dMZWZ0KTtcbiAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRGlhbG9nUmlnaHQpIHtcbiAgICAgIHggPSB2aWV3cG9ydFdpZHRoIC0gZ2V0UGl4ZWxzKG9yaWdpbmFsRGlhbG9nUmlnaHQpIC0gd2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSAodmlld3BvcnRXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgfVxuICAgIGxldCB5OiBudW1iZXI7XG4gICAgaWYgKG9yaWdpbmFsRGlhbG9nVG9wKSB7XG4gICAgICB5ID0gZ2V0UGl4ZWxzKG9yaWdpbmFsRGlhbG9nVG9wKTtcbiAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRGlhbG9nQm90dG9tKSB7XG4gICAgICB5ID0gdmlld3BvcnRIZWlnaHQgLSBnZXRQaXhlbHMob3JpZ2luYWxEaWFsb2dCb3R0b20pIC0gaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gKHZpZXdwb3J0SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgfVxuICAgIC8vIHVzZSBkcmFnIHJlZidzIG1lY2hhbmlzbXMgZm9yIHBvc2l0aW9uaW5nIGluc3RlYWQgb2YgdGhlIGRpYWxvZydzXG4gICAgdGhpcy5fZGlhbG9nUmVmLnVwZGF0ZVBvc2l0aW9uKHsgdG9wOiAnMHB4JywgcmlnaHQ6ICcwcHgnLCBib3R0b206ICcwcHgnLCBsZWZ0OiAnMHB4JyB9KTtcbiAgICB0aGlzLl9kcmFnUmVmLnNldEZyZWVEcmFnUG9zaXRpb24oeyB4LCB5IH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0YWNoQ29ybmVycygpOiB2b2lkIHtcbiAgICBPYmplY3QudmFsdWVzKGNvcm5lcnMpLmZvckVhY2goKGNvcm5lcjogY29ybmVycykgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlcjIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmNvcm5lckVsZW1lbnRzID0gWy4uLnRoaXMuY29ybmVyRWxlbWVudHMsIGVsZW1lbnRdO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsICd3aWR0aCcsIGNvcm5lcldpZHRoKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCAnaGVpZ2h0JywgY29ybmVyV2lkdGgpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLmFwcGVuZENoaWxkKHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKSwgZWxlbWVudCk7XG5cbiAgICAgIGxldCBjdXJzb3I6IGN1cnNvcnM7XG4gICAgICBsZXQgdG9wQm90dG9tOiB2ZXJ0aWNhbEFsaWdubWVudDtcbiAgICAgIGxldCByaWdodExlZnQ6IGhvcml6b250YWxBbGlnbm1lbnQ7XG5cbiAgICAgIGlmIChjb3JuZXIgPT09IGNvcm5lcnMudG9wUmlnaHQpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29ycy5uZXN3O1xuICAgICAgICB0b3BCb3R0b20gPSB2ZXJ0aWNhbEFsaWdubWVudC50b3A7XG4gICAgICAgIHJpZ2h0TGVmdCA9IGhvcml6b250YWxBbGlnbm1lbnQucmlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy5ib3R0b21SaWdodCkge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3JzLm53c2U7XG4gICAgICAgIHRvcEJvdHRvbSA9IHZlcnRpY2FsQWxpZ25tZW50LmJvdHRvbTtcbiAgICAgICAgcmlnaHRMZWZ0ID0gaG9yaXpvbnRhbEFsaWdubWVudC5yaWdodDtcblxuICAgICAgICBjb25zdCBpY29uOiBIVE1MRWxlbWVudCA9IHRoaXMuX3JlbmRlcmVyMi5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hZGRDbGFzcyhpY29uLCAnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFwcGVuZENoaWxkKGljb24sIHRoaXMuX3JlbmRlcmVyMi5jcmVhdGVUZXh0KCdmaWx0ZXJfbGlzdCcpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFwcGVuZENoaWxkKGVsZW1lbnQsIGljb24pO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoaWNvbiwgJ3RyYW5zZm9ybScsIGByb3RhdGUoJHszMTV9ZGVnKSB0cmFuc2xhdGUoMHB4LCAke29mZnNldH0pYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShpY29uLCAnZm9udC1zaXplJywgY29ybmVyV2lkdGgpO1xuICAgICAgfSBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMuYm90dG9tTGVmdCkge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3JzLm5lc3c7XG4gICAgICAgIHRvcEJvdHRvbSA9IHZlcnRpY2FsQWxpZ25tZW50LmJvdHRvbTtcbiAgICAgICAgcmlnaHRMZWZ0ID0gaG9yaXpvbnRhbEFsaWdubWVudC5sZWZ0O1xuICAgICAgfSBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMudG9wTGVmdCkge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3JzLm53c2U7XG4gICAgICAgIHRvcEJvdHRvbSA9IHZlcnRpY2FsQWxpZ25tZW50LnRvcDtcbiAgICAgICAgcmlnaHRMZWZ0ID0gaG9yaXpvbnRhbEFsaWdubWVudC5sZWZ0O1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsIHRvcEJvdHRvbSwgb2Zmc2V0KTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCByaWdodExlZnQsIG9mZnNldCk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgJ2N1cnNvcicsIGN1cnNvcik7XG5cbiAgICAgIGNvbnN0IHBvaW50ZXJEb3duU3ViOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJykuc3Vic2NyaWJlKChldmVudDogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlRG93bihldmVudCwgY29ybmVyKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wb2ludGVyRG93blN1YnMgPSBbLi4udGhpcy5wb2ludGVyRG93blN1YnMsIHBvaW50ZXJEb3duU3ViXTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1vdXNlRG93bihldmVudDogUG9pbnRlckV2ZW50LCBjb3JuZXI6IGNvcm5lcnMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdpZHRoOiBvcmlnaW5hbFdpZHRoLCBoZWlnaHQ6IG9yaWdpbmFsSGVpZ2h0IH0gPSB0aGlzLl9nZXREaWFsb2dXcmFwcGVyRGltZW5zaW9ucygpO1xuICAgIGNvbnN0IG9yaWdpbmFsTW91c2VYOiBudW1iZXIgPSBldmVudC5wYWdlWDtcbiAgICBjb25zdCBvcmlnaW5hbE1vdXNlWTogbnVtYmVyID0gZXZlbnQucGFnZVk7XG4gICAgY29uc3QgeyB4OiBjdXJyZW50VHJhbnNmb3JtWCwgeTogY3VycmVudFRyYW5zZm9ybVkgfTogUG9pbnQgPSB0aGlzLl9kcmFnUmVmLmdldEZyZWVEcmFnUG9zaXRpb24oKTtcbiAgICBjb25zdCB7XG4gICAgICBib3R0b206IGRpc3RhbmNlRnJvbUJvdHRvbSxcbiAgICAgIHJpZ2h0OiBkaXN0YW5jZUZyb21SaWdodCxcbiAgICB9OiBDbGllbnRSZWN0ID0gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgcmlnaHQ6IHZpZXdwb3J0V2lkdGgsIGJvdHRvbTogdmlld3BvcnRIZWlnaHQgfTogQ2xpZW50UmVjdCA9IHRoaXMuX2dldFZpZXdwb3J0RGltZW5zaW9ucygpO1xuXG4gICAgY29uc3QgbW91c2VNb3ZlU3ViOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAncG9pbnRlcm1vdmUnKS5zdWJzY3JpYmUoKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IGhpZ2hsaWdodGluZyBvZiB0ZXh0IHdoZW4gZHJhZ2dpbmdcblxuICAgICAgY29uc3QgeURlbHRhOiBudW1iZXIgPSBjbGFtcCgwLCBlLnBhZ2VZLCB2aWV3cG9ydEhlaWdodCkgLSBvcmlnaW5hbE1vdXNlWTtcbiAgICAgIGNvbnN0IHhEZWx0YTogbnVtYmVyID0gY2xhbXAoMCwgZS5wYWdlWCwgdmlld3BvcnRXaWR0aCkgLSBvcmlnaW5hbE1vdXNlWDtcbiAgICAgIGxldCBuZXdIZWlnaHQ6IG51bWJlcjtcbiAgICAgIGxldCBuZXdXaWR0aDogbnVtYmVyO1xuICAgICAgbGV0IG5ld1RyYW5zZm9ybVk6IG51bWJlciA9IDA7XG4gICAgICBsZXQgbmV3VHJhbnNmb3JtWDogbnVtYmVyID0gMDtcblxuICAgICAgLy8gdG9wIHJpZ2h0XG4gICAgICBpZiAoY29ybmVyID09PSBjb3JuZXJzLnRvcFJpZ2h0KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG1pbkhlaWdodCwgb3JpZ2luYWxIZWlnaHQgLSB5RGVsdGEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChtaW5XaWR0aCwgb3JpZ2luYWxXaWR0aCArIHhEZWx0YSwgdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVkgPSBjbGFtcCgwLCBjdXJyZW50VHJhbnNmb3JtWSArIHlEZWx0YSwgZGlzdGFuY2VGcm9tQm90dG9tIC0gbmV3SGVpZ2h0KTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWCA9IGN1cnJlbnRUcmFuc2Zvcm1YO1xuICAgICAgfVxuICAgICAgLy8gYm90dG9tIHJpZ2h0XG4gICAgICBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMuYm90dG9tUmlnaHQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobWluSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCArIHlEZWx0YSwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG1pbldpZHRoLCBvcmlnaW5hbFdpZHRoICsgeERlbHRhLCB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWSA9IGN1cnJlbnRUcmFuc2Zvcm1ZO1xuICAgICAgICBuZXdUcmFuc2Zvcm1YID0gY3VycmVudFRyYW5zZm9ybVg7XG4gICAgICB9XG4gICAgICAvLyBib3R0b20gbGVmdFxuICAgICAgZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLmJvdHRvbUxlZnQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobWluSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCArIHlEZWx0YSwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG1pbldpZHRoLCBvcmlnaW5hbFdpZHRoIC0geERlbHRhLCB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWSA9IGN1cnJlbnRUcmFuc2Zvcm1ZO1xuICAgICAgICBuZXdUcmFuc2Zvcm1YID0gY2xhbXAoMCwgY3VycmVudFRyYW5zZm9ybVggKyB4RGVsdGEsIGRpc3RhbmNlRnJvbVJpZ2h0IC0gbmV3V2lkdGgpO1xuICAgICAgfVxuICAgICAgLy8gdG9wIGxlZnRcbiAgICAgIGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy50b3BMZWZ0KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG1pbkhlaWdodCwgb3JpZ2luYWxIZWlnaHQgLSB5RGVsdGEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChtaW5XaWR0aCwgb3JpZ2luYWxXaWR0aCAtIHhEZWx0YSwgdmlld3BvcnRXaWR0aCk7XG5cbiAgICAgICAgbmV3VHJhbnNmb3JtWCA9IGNsYW1wKDAsIGN1cnJlbnRUcmFuc2Zvcm1YICsgeERlbHRhLCBkaXN0YW5jZUZyb21SaWdodCAtIG5ld1dpZHRoKTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWSA9IGNsYW1wKDAsIGN1cnJlbnRUcmFuc2Zvcm1ZICsgeURlbHRhLCBkaXN0YW5jZUZyb21Cb3R0b20gLSBuZXdIZWlnaHQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGlhbG9nUmVmLnVwZGF0ZVNpemUoYCR7bmV3V2lkdGh9cHhgLCBgJHtuZXdIZWlnaHR9cHhgKTtcbiAgICAgIHRoaXMuX2RyYWdSZWYuc2V0RnJlZURyYWdQb3NpdGlvbih7XG4gICAgICAgIHg6IG5ld1RyYW5zZm9ybVgsXG4gICAgICAgIHk6IG5ld1RyYW5zZm9ybVksXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1vdXNlVXBTdWI6IFN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3BvaW50ZXJ1cCcpLFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3BvaW50ZXJjYW5jZWwnKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBtb3VzZU1vdmVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIG1vdXNlVXBTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19