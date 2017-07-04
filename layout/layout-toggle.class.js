var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, HostBinding, HostListener } from '@angular/core';
var LayoutToggle = (function () {
    function LayoutToggle(_layout, _renderer, _elementRef) {
        this._layout = _layout;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * hideWhenOpened?: boolean
         * When this is set to false, the host will not be hidden when
         * the layout is set to [opened]="true".
         */
        this.hideWhenOpened = true;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
    }
    Object.defineProperty(LayoutToggle.prototype, "hiddenBinding", {
        /**
         * Hides element if layout is opened and [hideWhenOpened] is set to true
         */
        get: function () {
            return this._layout.opened && this.hideWhenOpened ? 'none' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to host click event to trigger the layout toggle
     */
    LayoutToggle.prototype.clickListener = function (event) {
        event.preventDefault();
        this._layout.toggle();
    };
    return LayoutToggle;
}());
export { LayoutToggle };
__decorate([
    Input('hideWhenOpened'),
    __metadata("design:type", Boolean)
], LayoutToggle.prototype, "hideWhenOpened", void 0);
__decorate([
    HostBinding('style.display'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], LayoutToggle.prototype, "hiddenBinding", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], LayoutToggle.prototype, "clickListener", null);
//# sourceMappingURL=layout-toggle.class.js.map