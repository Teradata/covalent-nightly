/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { merge, fromEvent } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsicmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cvcmVzaXphYmxlLWRyYWdnYWJsZS1kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxLQUFLLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBSXBELFVBQVcsVUFBVTtJQUNyQixhQUFjLGFBQWE7SUFDM0IsWUFBYSxZQUFZO0lBQ3pCLFNBQVUsU0FBUzs7OztJQUduQixNQUFPLGFBQWE7SUFDcEIsTUFBTyxhQUFhOzs7O0lBR3BCLEtBQU0sS0FBSztJQUNYLFFBQVMsUUFBUTs7OztJQUdqQixPQUFRLE9BQU87SUFDZixNQUFPLE1BQU07OztNQUdULFdBQVcsR0FBVyxNQUFNOztNQUM1QixNQUFNLEdBQVcsS0FBSzs7TUFDdEIsUUFBUSxHQUFXLEdBQUc7O01BQ3RCLFNBQVMsR0FBVyxHQUFHOzs7OztBQUU3QixTQUFTLFNBQVMsQ0FBQyxVQUFrQjtJQUNuQyxPQUFPLFVBQVUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQzs7Ozs7OztBQUVELFNBQVMsS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUNsRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVELE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFJbkMsWUFDVSxTQUFjLEVBQ2QsVUFBcUIsRUFDckIsVUFBNkIsRUFDN0IsUUFBaUI7UUFIakIsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNkLGVB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QUFNLEVBQUUsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDdEY7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsSUFBSSxFQUFFLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO2dCQUNoQyxDQUFDLEVBQUUsYUFBYTtnQkFDaEIsQ0FBQyxFQUFFLGFBQWE7YUFDakIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDOztjQUVJLFVBQVUsR0FBaUIsS0FBSyxDQUNwQyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUM5QixTQUFTLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUNuQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLG1CQUFhLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFBLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDN0UsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQTFMQyxrREFBbUM7O0lBQ25DLG1EQUFxQzs7Ozs7SUFHbkMsNkNBQXNCOzs7OztJQUN0Qiw4Q0FBNkI7Ozs7O0lBQzdCLDhDQUFxQzs7Ozs7SUFDckMsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRHJhZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AvZHJhZy1yZWYnO1xuXG5lbnVtIGNvcm5lcnMge1xuICB0b3BSaWdodCA9ICd0b3BSaWdodCcsXG4gIGJvdHRvbVJpZ2h0ID0gJ2JvdHRvbVJpZ2h0JyxcbiAgYm90dG9tTGVmdCA9ICdib3R0b21MZWZ0JyxcbiAgdG9wTGVmdCA9ICd0b3BMZWZ0Jyxcbn1cbmVudW0gY3Vyc29ycyB7XG4gIG5lc3cgPSAnbmVzdy1yZXNpemUnLFxuICBud3NlID0gJ253c2UtcmVzaXplJyxcbn1cbmVudW0gdmVydGljYWxBbGlnbm1lbnQge1xuICB0b3AgPSAndG9wJyxcbiAgYm90dG9tID0gJ2JvdHRvbScsXG59XG5lbnVtIGhvcml6b250YWxBbGlnbm1lbnQge1xuICByaWdodCA9ICdyaWdodCcsXG4gIGxlZnQgPSAnbGVmdCcsXG59XG5cbmNvbnN0IGNvcm5lcldpZHRoOiBzdHJpbmcgPSAnMTZweCc7XG5jb25zdCBvZmZzZXQ6IHN0cmluZyA9ICcwcHgnO1xuY29uc3QgbWluV2lkdGg6IG51bWJlciA9IDIwMDtcbmNvbnN0IG1pbkhlaWdodDogbnVtYmVyID0gMjAwO1xuXG5mdW5jdGlvbiBnZXRQaXhlbHMoc2l6ZVN0cmluZzogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoKHNpemVTdHJpbmcgfHwgJycpLnJlcGxhY2UoJ3B4JywgJycpKTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobWluOiBudW1iZXIsIG51bTogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNpemFibGVEcmFnZ2FibGVEaWFsb2cge1xuICBjb3JuZXJFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICBwb2ludGVyRG93blN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxhbnk+LFxuICAgIHByaXZhdGUgX2RyYWdSZWY6IERyYWdSZWYsXG4gICkge1xuICAgIHRoaXMuX2luaXRpYWxQb3NpdGlvblJlc2V0KCk7XG4gICAgdGhpcy5fYXR0YWNoQ29ybmVycygpO1xuICB9XG5cbiAgcHVibGljIGF0dGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMuX2F0dGFjaENvcm5lcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5wb2ludGVyRG93blN1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLnBvaW50ZXJEb3duU3VicyA9IFtdO1xuICAgIHRoaXMuY29ybmVyRWxlbWVudHMuZm9yRWFjaCgoZWxlbTogSFRNTEVsZW1lbnQpID0+IHRoaXMuX3JlbmRlcmVyMi5yZW1vdmVDaGlsZCh0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCksIGVsZW0pKTtcbiAgICB0aGlzLmNvcm5lckVsZW1lbnRzID0gW107XG4gIH1cblxuICBwcml2YXRlIF9nZXREaWFsb2dXcmFwcGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9kaWFsb2dSZWYuaWQpIHx8IHt9KS5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Vmlld3BvcnREaW1lbnNpb25zKCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9nZXREaWFsb2dXcmFwcGVyKCkucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERpYWxvZ1dyYXBwZXJEaW1lbnNpb25zKCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgZGltZW5zaW9uczogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZ2V0RGlhbG9nV3JhcHBlcigpKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGdldFBpeGVscyhkaW1lbnNpb25zLndpZHRoKSxcbiAgICAgIGhlaWdodDogZ2V0UGl4ZWxzKGRpbWVuc2lvbnMuaGVpZ2h0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbFBvc2l0aW9uUmVzZXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyByaWdodDogdmlld3BvcnRXaWR0aCwgYm90dG9tOiB2aWV3cG9ydEhlaWdodCB9OiBDbGllbnRSZWN0ID0gdGhpcy5fZ2V0Vmlld3BvcnREaW1lbnNpb25zKCk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9nZXREaWFsb2dXcmFwcGVyRGltZW5zaW9ucygpO1xuICAgIGNvbnN0IHtcbiAgICAgIG1hcmdpblJpZ2h0OiBvcmlnaW5hbERpYWxvZ1JpZ2h0LFxuICAgICAgbWFyZ2luTGVmdDogb3JpZ2luYWxEaWFsb2dMZWZ0LFxuICAgICAgbWFyZ2luQm90dG9tOiBvcmlnaW5hbERpYWxvZ0JvdHRvbSxcbiAgICAgIG1hcmdpblRvcDogb3JpZ2luYWxEaWFsb2dUb3AsXG4gICAgfSA9IHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKS5zdHlsZTtcbiAgICBsZXQgeDogbnVtYmVyO1xuICAgIGlmIChvcmlnaW5hbERpYWxvZ0xlZnQpIHtcbiAgICAgIHggPSBnZXRQaXhlbHMob3JpZ2luYWxEaWFsb2dMZWZ0KTtcbiAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRGlhbG9nUmlnaHQpIHtcbiAgICAgIHggPSB2aWV3cG9ydFdpZHRoIC0gZ2V0UGl4ZWxzKG9yaWdpbmFsRGlhbG9nUmlnaHQpIC0gd2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSAodmlld3BvcnRXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgfVxuICAgIGxldCB5OiBudW1iZXI7XG4gICAgaWYgKG9yaWdpbmFsRGlhbG9nVG9wKSB7XG4gICAgICB5ID0gZ2V0UGl4ZWxzKG9yaWdpbmFsRGlhbG9nVG9wKTtcbiAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRGlhbG9nQm90dG9tKSB7XG4gICAgICB5ID0gdmlld3BvcnRIZWlnaHQgLSBnZXRQaXhlbHMob3JpZ2luYWxEaWFsb2dCb3R0b20pIC0gaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gKHZpZXdwb3J0SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgfVxuICAgIC8vIHVzZSBkcmFnIHJlZidzIG1lY2hhbmlzbXMgZm9yIHBvc2l0aW9uaW5nIGluc3RlYWQgb2YgdGhlIGRpYWxvZydzXG4gICAgdGhpcy5fZGlhbG9nUmVmLnVwZGF0ZVBvc2l0aW9uKHsgdG9wOiAnMHB4JywgcmlnaHQ6ICcwcHgnLCBib3R0b206ICcwcHgnLCBsZWZ0OiAnMHB4JyB9KTtcbiAgICB0aGlzLl9kcmFnUmVmLnNldEZyZWVEcmFnUG9zaXRpb24oeyB4LCB5IH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0YWNoQ29ybmVycygpOiB2b2lkIHtcbiAgICBPYmplY3QudmFsdWVzKGNvcm5lcnMpLmZvckVhY2goKGNvcm5lcjogY29ybmVycykgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlcjIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmNvcm5lckVsZW1lbnRzID0gWy4uLnRoaXMuY29ybmVyRWxlbWVudHMsIGVsZW1lbnRdO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsICd3aWR0aCcsIGNvcm5lcldpZHRoKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCAnaGVpZ2h0JywgY29ybmVyV2lkdGgpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLmFwcGVuZENoaWxkKHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKSwgZWxlbWVudCk7XG5cbiAgICAgIGxldCBjdXJzb3I6IGN1cnNvcnM7XG4gICAgICBsZXQgdG9wQm90dG9tOiB2ZXJ0aWNhbEFsaWdubWVudDtcbiAgICAgIGxldCByaWdodExlZnQ6IGhvcml6b250YWxBbGlnbm1lbnQ7XG5cbiAgICAgIGlmIChjb3JuZXIgPT09IGNvcm5lcnMudG9wUmlnaHQpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29ycy5uZXN3O1xuICAgICAgICB0b3BCb3R0b20gPSB2ZXJ0aWNhbEFsaWdubWVudC50b3A7XG4gICAgICAgIHJpZ2h0TGVmdCA9IGhvcml6b250YWxBbGlnbm1lbnQucmlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy5ib3R0b21SaWdodCkge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3JzLm53c2U7XG4gICAgICAgIHRvcEJvdHRvbSA9IHZlcnRpY2FsQWxpZ25tZW50LmJvdHRvbTtcbiAgICAgICAgcmlnaHRMZWZ0ID0gaG9yaXpvbnRhbEFsaWdubWVudC5yaWdodDtcblxuICAgICAgICBjb25zdCBpY29uOiBIVE1MRWxlbWVudCA9IHRoaXMuX3JlbmRlcmVyMi5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5hZGRDbGFzcyhpY29uLCAnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFwcGVuZENoaWxkKGljb24sIHRoaXMuX3JlbmRlcmVyMi5jcmVhdGVUZXh0KCdmaWx0ZXJfbGlzdCcpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFwcGVuZENoaWxkKGVsZW1lbnQsIGljb24pO1xuICAgICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoaWNvbiwgJ3RyYW5zZm9ybScsIGByb3RhdGUoJHszMTV9ZGVnKSB0cmFuc2xhdGUoMHB4LCAke29mZnNldH0pYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShpY29uLCAnZm9udC1zaXplJywgY29ybmVyV2lkdGgpO1xuICAgICAgfSBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMuYm90dG9tTGVmdCkge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3JzLm5lc3c7XG4gICAgICAgIHRvcEJvdHRvbSA9IHZlcnRpY2FsQWxpZ25tZW50LmJvdHRvbTtcbiAgICAgICAgcmlnaHRMZWZ0ID0gaG9yaXpvbnRhbEFsaWdubWVudC5sZWZ0O1xuICAgICAgfSBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMudG9wTGVmdCkge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3JzLm53c2U7XG4gICAgICAgIHRvcEJvdHRvbSA9IHZlcnRpY2FsQWxpZ25tZW50LnRvcDtcbiAgICAgICAgcmlnaHRMZWZ0ID0gaG9yaXpvbnRhbEFsaWdubWVudC5sZWZ0O1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKGVsZW1lbnQsIHRvcEJvdHRvbSwgb2Zmc2V0KTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZShlbGVtZW50LCByaWdodExlZnQsIG9mZnNldCk7XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoZWxlbWVudCwgJ2N1cnNvcicsIGN1cnNvcik7XG5cbiAgICAgIGNvbnN0IHBvaW50ZXJEb3duU3ViOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJykuc3Vic2NyaWJlKChldmVudDogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlRG93bihldmVudCwgY29ybmVyKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wb2ludGVyRG93blN1YnMgPSBbLi4udGhpcy5wb2ludGVyRG93blN1YnMsIHBvaW50ZXJEb3duU3ViXTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1vdXNlRG93bihldmVudDogUG9pbnRlckV2ZW50LCBjb3JuZXI6IGNvcm5lcnMpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUoPEhUTUxFbGVtZW50PnRoaXMuX2RvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICdub25lJyk7XG4gICAgY29uc3QgeyB3aWR0aDogb3JpZ2luYWxXaWR0aCwgaGVpZ2h0OiBvcmlnaW5hbEhlaWdodCB9ID0gdGhpcy5fZ2V0RGlhbG9nV3JhcHBlckRpbWVuc2lvbnMoKTtcbiAgICBjb25zdCBvcmlnaW5hbE1vdXNlWDogbnVtYmVyID0gZXZlbnQucGFnZVg7XG4gICAgY29uc3Qgb3JpZ2luYWxNb3VzZVk6IG51bWJlciA9IGV2ZW50LnBhZ2VZO1xuICAgIGNvbnN0IHsgeDogY3VycmVudFRyYW5zZm9ybVgsIHk6IGN1cnJlbnRUcmFuc2Zvcm1ZIH06IFBvaW50ID0gdGhpcy5fZHJhZ1JlZi5nZXRGcmVlRHJhZ1Bvc2l0aW9uKCk7XG4gICAgY29uc3Qge1xuICAgICAgYm90dG9tOiBkaXN0YW5jZUZyb21Cb3R0b20sXG4gICAgICByaWdodDogZGlzdGFuY2VGcm9tUmlnaHQsXG4gICAgfTogQ2xpZW50UmVjdCA9IHRoaXMuX2dldERpYWxvZ1dyYXBwZXIoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHJpZ2h0OiB2aWV3cG9ydFdpZHRoLCBib3R0b206IHZpZXdwb3J0SGVpZ2h0IH06IENsaWVudFJlY3QgPSB0aGlzLl9nZXRWaWV3cG9ydERpbWVuc2lvbnMoKTtcblxuICAgIGNvbnN0IG1vdXNlTW92ZVN1YjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdywgJ3BvaW50ZXJtb3ZlJykuc3Vic2NyaWJlKChlOiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBoaWdobGlnaHRpbmcgb2YgdGV4dCB3aGVuIGRyYWdnaW5nXG5cbiAgICAgIGNvbnN0IHlEZWx0YTogbnVtYmVyID0gY2xhbXAoMCwgZS5wYWdlWSwgdmlld3BvcnRIZWlnaHQpIC0gb3JpZ2luYWxNb3VzZVk7XG4gICAgICBjb25zdCB4RGVsdGE6IG51bWJlciA9IGNsYW1wKDAsIGUucGFnZVgsIHZpZXdwb3J0V2lkdGgpIC0gb3JpZ2luYWxNb3VzZVg7XG4gICAgICBsZXQgbmV3SGVpZ2h0OiBudW1iZXI7XG4gICAgICBsZXQgbmV3V2lkdGg6IG51bWJlcjtcbiAgICAgIGxldCBuZXdUcmFuc2Zvcm1ZOiBudW1iZXIgPSAwO1xuICAgICAgbGV0IG5ld1RyYW5zZm9ybVg6IG51bWJlciA9IDA7XG5cbiAgICAgIC8vIHRvcCByaWdodFxuICAgICAgaWYgKGNvcm5lciA9PT0gY29ybmVycy50b3BSaWdodCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChtaW5IZWlnaHQsIG9yaWdpbmFsSGVpZ2h0IC0geURlbHRhLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobWluV2lkdGgsIG9yaWdpbmFsV2lkdGggKyB4RGVsdGEsIHZpZXdwb3J0V2lkdGgpO1xuICAgICAgICBuZXdUcmFuc2Zvcm1ZID0gY2xhbXAoMCwgY3VycmVudFRyYW5zZm9ybVkgKyB5RGVsdGEsIGRpc3RhbmNlRnJvbUJvdHRvbSAtIG5ld0hlaWdodCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVggPSBjdXJyZW50VHJhbnNmb3JtWDtcbiAgICAgIH1cbiAgICAgIC8vIGJvdHRvbSByaWdodFxuICAgICAgZWxzZSBpZiAoY29ybmVyID09PSBjb3JuZXJzLmJvdHRvbVJpZ2h0KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG1pbkhlaWdodCwgb3JpZ2luYWxIZWlnaHQgKyB5RGVsdGEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChtaW5XaWR0aCwgb3JpZ2luYWxXaWR0aCArIHhEZWx0YSwgdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVkgPSBjdXJyZW50VHJhbnNmb3JtWTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWCA9IGN1cnJlbnRUcmFuc2Zvcm1YO1xuICAgICAgfVxuICAgICAgLy8gYm90dG9tIGxlZnRcbiAgICAgIGVsc2UgaWYgKGNvcm5lciA9PT0gY29ybmVycy5ib3R0b21MZWZ0KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG1pbkhlaWdodCwgb3JpZ2luYWxIZWlnaHQgKyB5RGVsdGEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChtaW5XaWR0aCwgb3JpZ2luYWxXaWR0aCAtIHhEZWx0YSwgdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVkgPSBjdXJyZW50VHJhbnNmb3JtWTtcbiAgICAgICAgbmV3VHJhbnNmb3JtWCA9IGNsYW1wKDAsIGN1cnJlbnRUcmFuc2Zvcm1YICsgeERlbHRhLCBkaXN0YW5jZUZyb21SaWdodCAtIG5ld1dpZHRoKTtcbiAgICAgIH1cbiAgICAgIC8vIHRvcCBsZWZ0XG4gICAgICBlbHNlIGlmIChjb3JuZXIgPT09IGNvcm5lcnMudG9wTGVmdCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChtaW5IZWlnaHQsIG9yaWdpbmFsSGVpZ2h0IC0geURlbHRhLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobWluV2lkdGgsIG9yaWdpbmFsV2lkdGggLSB4RGVsdGEsIHZpZXdwb3J0V2lkdGgpO1xuXG4gICAgICAgIG5ld1RyYW5zZm9ybVggPSBjbGFtcCgwLCBjdXJyZW50VHJhbnNmb3JtWCArIHhEZWx0YSwgZGlzdGFuY2VGcm9tUmlnaHQgLSBuZXdXaWR0aCk7XG4gICAgICAgIG5ld1RyYW5zZm9ybVkgPSBjbGFtcCgwLCBjdXJyZW50VHJhbnNmb3JtWSArIHlEZWx0YSwgZGlzdGFuY2VGcm9tQm90dG9tIC0gbmV3SGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi51cGRhdGVTaXplKGAke25ld1dpZHRofXB4YCwgYCR7bmV3SGVpZ2h0fXB4YCk7XG4gICAgICB0aGlzLl9kcmFnUmVmLnNldEZyZWVEcmFnUG9zaXRpb24oe1xuICAgICAgICB4OiBuZXdUcmFuc2Zvcm1YLFxuICAgICAgICB5OiBuZXdUcmFuc2Zvcm1ZLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3VzZVVwU3ViOiBTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdwb2ludGVydXAnKSxcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdwb2ludGVyY2FuY2VsJyksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnJlbW92ZVN0eWxlKDxIVE1MRWxlbWVudD50aGlzLl9kb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnKTtcbiAgICAgIG1vdXNlTW92ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgbW91c2VVcFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=