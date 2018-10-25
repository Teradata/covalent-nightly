/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggle } from '../layout-toggle.class';
export class TdLayoutManageListToggleDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListToggle
     * @return {?}
     */
    set tdLayoutManageListToggle(tdLayoutManageListToggle) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutManageListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListToggle]',
            },] }
];
/** @nocollapse */
TdLayoutManageListToggleDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListToggleDirective.propDecorators = {
    tdLayoutManageListToggle: [{ type: Input, args: ['tdLayoutManageListToggle',] }]
};
export class TdLayoutManageListCloseDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListClose
     * @return {?}
     */
    set tdLayoutManageListClose(tdLayoutManageListClose) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutManageListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListClose]',
            },] }
];
/** @nocollapse */
TdLayoutManageListCloseDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListCloseDirective.propDecorators = {
    tdLayoutManageListClose: [{ type: Input, args: ['tdLayoutManageListClose',] }]
};
export class TdLayoutManageListOpenDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListOpen
     * @return {?}
     */
    set tdLayoutManageListOpen(tdLayoutManageListOpen) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutManageListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListOpen]',
            },] }
];
/** @nocollapse */
TdLayoutManageListOpenDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListOpenDirective.propDecorators = {
    tdLayoutManageListOpen: [{ type: Input, args: ['tdLayoutManageListOpen',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1hbmFnZS1saXN0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtbWFuYWdlLWxpc3QvbGF5b3V0LW1hbmFnZS1saXN0LmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLdEQsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLFlBQVk7Ozs7OztJQU9qRSxZQUFtRSxNQUFtQyxFQUMxRixRQUFtQixFQUNuQixVQUFzQjtRQUNoQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQVRELElBQ0ksd0JBQXdCLENBQUMsd0JBQWlDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLHdCQUF3QixFQUFBLEtBQUssRUFBRSxJQUFJLHdCQUF3QixDQUFDLENBQUM7SUFDdEYsQ0FBQzs7OztJQVFELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjthQUN2Qzs7OztZQUxRLDJCQUEyQix1QkFhckIsTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQWR4QyxTQUFTO1lBQUUsVUFBVTs7O3VDQVM3QyxLQUFLLFNBQUMsMEJBQTBCOztBQW1CbkMsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLFlBQVk7Ozs7OztJQU9oRSxZQUFtRSxNQUFtQyxFQUMxRixRQUFtQixFQUNuQixVQUFzQjtRQUNoQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQVRELElBQ0ksdUJBQXVCLENBQUMsdUJBQWdDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLHVCQUF1QixFQUFBLEtBQUssRUFBRSxJQUFJLHVCQUF1QixDQUFDLENBQUM7SUFDcEYsQ0FBQzs7OztJQVFELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7OztZQTFCUSwyQkFBMkIsdUJBa0NyQixNQUFNLFNBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBbkN4QyxTQUFTO1lBQUUsVUFBVTs7O3NDQThCN0MsS0FBSyxTQUFDLHlCQUF5Qjs7QUFtQmxDLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxZQUFZOzs7Ozs7SUFPL0QsWUFBbUUsTUFBbUMsRUFDMUYsUUFBbUIsRUFDbkIsVUFBc0I7UUFDaEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFURCxJQUNJLHNCQUFzQixDQUFDLHNCQUErQjtRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyxzQkFBc0IsRUFBQSxLQUFLLEVBQUUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFRRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7YUFDckM7Ozs7WUEvQ1EsMkJBQTJCLHVCQXVEckIsTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQXhEeEMsU0FBUztZQUFFLFVBQVU7OztxQ0FtRDdDLEtBQUssU0FBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dFRvZ2dsZSB9IGZyb20gJy4uL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dE1hbmFnZUxpc3RUb2dnbGUnKSBcbiAgc2V0IHRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZSh0ZExheW91dE1hbmFnZUxpc3RUb2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZSA9PT0gJycgfHwgdGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TWFuYWdlTGlzdENsb3NlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TWFuYWdlTGlzdENsb3NlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcbiAgXG4gIEBJbnB1dCgndGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2UnKSBcbiAgc2V0IHRkTGF5b3V0TWFuYWdlTGlzdENsb3NlKHRkTGF5b3V0TWFuYWdlTGlzdENsb3NlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE1hbmFnZUxpc3RDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE1hbmFnZUxpc3RPcGVuXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TWFuYWdlTGlzdE9wZW5EaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXRNYW5hZ2VMaXN0T3BlbicpIFxuICBzZXQgdGRMYXlvdXRNYW5hZ2VMaXN0T3Blbih0ZExheW91dE1hbmFnZUxpc3RPcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE1hbmFnZUxpc3RPcGVuID09PSAnJyB8fCB0ZExheW91dE1hbmFnZUxpc3RPcGVuKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQub3BlbigpO1xuICB9XG59XG4iXX0=