/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { LayoutToggle } from '../layout-toggle.class';
export class TdLayoutNavListToggleDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListToggle
     * @return {?}
     */
    set tdLayoutNavListToggle(tdLayoutNavListToggle) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutNavListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListToggle]',
            },] }
];
/** @nocollapse */
TdLayoutNavListToggleDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListToggleDirective.propDecorators = {
    tdLayoutNavListToggle: [{ type: Input, args: ['tdLayoutNavListToggle',] }]
};
export class TdLayoutNavListCloseDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListClose
     * @return {?}
     */
    set tdLayoutNavListClose(tdLayoutNavListClose) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutNavListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListClose]',
            },] }
];
/** @nocollapse */
TdLayoutNavListCloseDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListCloseDirective.propDecorators = {
    tdLayoutNavListClose: [{ type: Input, args: ['tdLayoutNavListClose',] }]
};
export class TdLayoutNavListOpenDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListOpen
     * @return {?}
     */
    set tdLayoutNavListOpen(tdLayoutNavListOpen) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutNavListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListOpen]',
            },] }
];
/** @nocollapse */
TdLayoutNavListOpenDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListOpenDirective.propDecorators = {
    tdLayoutNavListOpen: [{ type: Input, args: ['tdLayoutNavListOpen',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtbmF2LWxpc3QvbGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLdEQsTUFBTSxPQUFPLDhCQUErQixTQUFRLFlBQVk7Ozs7OztJQU85RCxZQUFnRSxNQUFnQyxFQUNwRixRQUFtQixFQUNuQixVQUFzQjtRQUNoQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQVRELElBQ0kscUJBQXFCLENBQUMscUJBQThCO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLHFCQUFxQixFQUFBLEtBQUssRUFBRSxJQUFJLHFCQUFxQixDQUFDLENBQUM7SUFDaEYsQ0FBQzs7OztJQVFELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjthQUNwQzs7OztZQUxRLHdCQUF3Qix1QkFhbEIsTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQWRyQyxTQUFTO1lBQUUsVUFBVTs7O29DQVM3QyxLQUFLLFNBQUMsdUJBQXVCOztBQW1CaEMsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFlBQVk7Ozs7OztJQU83RCxZQUFnRSxNQUFnQyxFQUNwRixRQUFtQixFQUNuQixVQUFzQjtRQUNoQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQVRELElBQ0ksb0JBQW9CLENBQUMsb0JBQTZCO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLG9CQUFvQixFQUFBLEtBQUssRUFBRSxJQUFJLG9CQUFvQixDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQVFELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7OztZQTFCUSx3QkFBd0IsdUJBa0NsQixNQUFNLFNBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBbkNyQyxTQUFTO1lBQUUsVUFBVTs7O21DQThCN0MsS0FBSyxTQUFDLHNCQUFzQjs7QUFtQi9CLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxZQUFZOzs7Ozs7SUFPNUQsWUFBZ0UsTUFBZ0MsRUFDcEYsUUFBbUIsRUFDbkIsVUFBc0I7UUFDaEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFURCxJQUNJLG1CQUFtQixDQUFDLG1CQUE0QjtRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyxtQkFBbUIsRUFBQSxLQUFLLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFRRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7WUEvQ1Esd0JBQXdCLHVCQXVEbEIsTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQXhEckMsU0FBUztZQUFFLFVBQVU7OztrQ0FtRDdDLEtBQUssU0FBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dFRvZ2dsZSB9IGZyb20gJy4uL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXROYXZMaXN0VG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdFRvZ2dsZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG5cbiAgQElucHV0KCd0ZExheW91dE5hdkxpc3RUb2dnbGUnKSBcbiAgc2V0IHRkTGF5b3V0TmF2TGlzdFRvZ2dsZSh0ZExheW91dE5hdkxpc3RUb2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TmF2TGlzdFRvZ2dsZSA9PT0gJycgfHwgdGRMYXlvdXROYXZMaXN0VG9nZ2xlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE5hdkxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TmF2TGlzdENsb3NlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdENsb3NlRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcbiAgXG4gIEBJbnB1dCgndGRMYXlvdXROYXZMaXN0Q2xvc2UnKSBcbiAgc2V0IHRkTGF5b3V0TmF2TGlzdENsb3NlKHRkTGF5b3V0TmF2TGlzdENsb3NlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE5hdkxpc3RDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXROYXZMaXN0Q2xvc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE5hdkxpc3RPcGVuXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdE9wZW5EaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXROYXZMaXN0T3BlbicpIFxuICBzZXQgdGRMYXlvdXROYXZMaXN0T3Blbih0ZExheW91dE5hdkxpc3RPcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE5hdkxpc3RPcGVuID09PSAnJyB8fCB0ZExheW91dE5hdkxpc3RPcGVuKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE5hdkxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQub3BlbigpO1xuICB9XG59XG4iXX0=