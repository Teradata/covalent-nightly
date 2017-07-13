var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, HostListener } from '@angular/core';
import { merge } from 'rxjs/observable/merge';
var LayoutToggle = (function () {
    function LayoutToggle(_layout, _renderer, _elementRef) {
        this._layout = _layout;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._initialized = false;
        this._disabled = false;
        this._hideWhenOpened = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
    }
    Object.defineProperty(LayoutToggle.prototype, "disabled", {
        set: function (disabled) {
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
        /**
         * hideWhenOpened?: boolean
         * When this is set to true, the host will be hidden when
         * the sidenav is opened.
         */
        set: function (hideWhenOpened) {
            this._hideWhenOpened = hideWhenOpened;
            if (this._initialized) {
                this._toggleVisibility();
            }
        },
        enumerable: true,
        configurable: true
    });
    LayoutToggle.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._initialized = true;
        this._toggleSubs = merge(this._layout.sidenav.onOpenStart, this._layout.sidenav.onCloseStart).subscribe(function () {
            _this._toggleVisibility();
        });
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    };
    LayoutToggle.prototype.ngOnDestroy = function () {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    };
    /**
     * Listens to host click event to trigger the layout toggle
     */
    LayoutToggle.prototype.clickListener = function (event) {
        event.preventDefault();
        if (!this._disabled) {
            this.onClick();
        }
    };
    LayoutToggle.prototype._toggleVisibility = function () {
        if (this._layout.sidenav._opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    };
    return LayoutToggle;
}());
export { LayoutToggle };
__decorate([
    Input('hideWhenOpened'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LayoutToggle.prototype, "hideWhenOpened", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], LayoutToggle.prototype, "clickListener", null);
//# sourceMappingURL=layout-toggle.class.js.map