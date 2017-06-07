var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';
import { TdCollapseAnimation } from '../common/common.module';
var TdExpansionPanelHeaderDirective = (function (_super) {
    __extends(TdExpansionPanelHeaderDirective, _super);
    function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelHeaderDirective;
}(TemplatePortalDirective));
TdExpansionPanelHeaderDirective = __decorate([
    Directive({
        selector: '[td-expansion-panel-header]ng-template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdExpansionPanelHeaderDirective);
export { TdExpansionPanelHeaderDirective };
var TdExpansionPanelLabelDirective = (function (_super) {
    __extends(TdExpansionPanelLabelDirective, _super);
    function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelLabelDirective;
}(TemplatePortalDirective));
TdExpansionPanelLabelDirective = __decorate([
    Directive({
        selector: '[td-expansion-panel-label]ng-template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdExpansionPanelLabelDirective);
export { TdExpansionPanelLabelDirective };
var TdExpansionPanelSublabelDirective = (function (_super) {
    __extends(TdExpansionPanelSublabelDirective, _super);
    function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelSublabelDirective;
}(TemplatePortalDirective));
TdExpansionPanelSublabelDirective = __decorate([
    Directive({
        selector: '[td-expansion-panel-sublabel]ng-template',
    }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdExpansionPanelSublabelDirective);
export { TdExpansionPanelSublabelDirective };
var TdExpansionPanelSummaryComponent = (function () {
    function TdExpansionPanelSummaryComponent() {
    }
    return TdExpansionPanelSummaryComponent;
}());
TdExpansionPanelSummaryComponent = __decorate([
    Component({
        selector: 'td-expansion-summary',
        template: '<ng-content></ng-content>',
    })
], TdExpansionPanelSummaryComponent);
export { TdExpansionPanelSummaryComponent };
var TdExpansionPanelComponent = (function () {
    function TdExpansionPanelComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._disableRipple = false;
        this._expand = false;
        this._disabled = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        this.expanded = new EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        this.collapsed = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel');
    }
    Object.defineProperty(TdExpansionPanelComponent.prototype, "disableRipple", {
        get: function () {
            return this._disableRipple;
        },
        /**
         * disableRipple?: string
         * Whether the ripple effect for this component is disabled.
         */
        set: function (disableRipple) {
            this._disableRipple = disableRipple !== '' ? (disableRipple === 'true' || disableRipple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
        get: function () {
            return this._expand;
        },
        /**
         * expand?: boolean
         * Toggles [TdExpansionPanelComponent] between expand/collapse.
         */
        set: function (expand) {
            this._setExpand(expand === 'true' || expand === true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdExpansionPanelComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if 'true'.
         */
        set: function (disabled) {
            if (disabled && this._expand) {
                this._expand = false;
                this._onCollapsed();
            }
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     */
    TdExpansionPanelComponent.prototype.clickEvent = function () {
        this._setExpand(!this._expand);
    };
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdExpansionPanelComponent.prototype.toggle = function () {
        return this._setExpand(!this._expand);
    };
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdExpansionPanelComponent.prototype.open = function () {
        return this._setExpand(true);
    };
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    TdExpansionPanelComponent.prototype.close = function () {
        return this._setExpand(false);
    };
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     */
    TdExpansionPanelComponent.prototype._setExpand = function (newExpand) {
        if (this._disabled) {
            return false;
        }
        if (this._expand !== newExpand) {
            this._expand = newExpand;
            if (newExpand) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
                this._onExpanded();
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
                this._onCollapsed();
            }
            return true;
        }
        return false;
    };
    TdExpansionPanelComponent.prototype._onExpanded = function () {
        this.expanded.emit(undefined);
    };
    TdExpansionPanelComponent.prototype._onCollapsed = function () {
        this.collapsed.emit(undefined);
    };
    return TdExpansionPanelComponent;
}());
__decorate([
    ContentChild(TdExpansionPanelHeaderDirective),
    __metadata("design:type", TdExpansionPanelHeaderDirective)
], TdExpansionPanelComponent.prototype, "expansionPanelHeader", void 0);
__decorate([
    ContentChild(TdExpansionPanelLabelDirective),
    __metadata("design:type", TdExpansionPanelLabelDirective)
], TdExpansionPanelComponent.prototype, "expansionPanelLabel", void 0);
__decorate([
    ContentChild(TdExpansionPanelSublabelDirective),
    __metadata("design:type", TdExpansionPanelSublabelDirective)
], TdExpansionPanelComponent.prototype, "expansionPanelSublabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TdExpansionPanelComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TdExpansionPanelComponent.prototype, "sublabel", void 0);
__decorate([
    Input('disableRipple'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdExpansionPanelComponent.prototype, "disableRipple", null);
__decorate([
    Input('expand'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdExpansionPanelComponent.prototype, "expand", null);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdExpansionPanelComponent.prototype, "disabled", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TdExpansionPanelComponent.prototype, "expanded", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TdExpansionPanelComponent.prototype, "collapsed", void 0);
TdExpansionPanelComponent = __decorate([
    Component({
        selector: 'td-expansion-panel',
        styles: [":host { display: block; } :host .td-expansion-panel-header { position: relative; outline: none; } :host .td-expansion-panel-header:focus:not(.mat-disabled), :host .td-expansion-panel-header:hover:not(.mat-disabled) { cursor: pointer; } :host .td-expansion-panel-header .td-expansion-panel-header-content { height: 48px; padding: 0 16px; } .td-expansion-label, .td-expansion-sublabel { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-right: 5px; } /deep/ [dir='rtl'] .td-expansion-label, /deep/ [dir='rtl'] .td-expansion-sublabel { margin-left: 5px; margin-right: inherit; } "],
        template: "<div class=\"td-expansion-panel-header\" [class.mat-disabled]=\"disabled\" md-ripple [mdRippleDisabled]=\"disabled || disableRipple\" [tabIndex]=\"disabled? -1 : 0\" (keydown.enter)=\"clickEvent()\" (click)=\"clickEvent()\"> <ng-template [cdkPortalHost]=\"expansionPanelHeader\"></ng-template> <div class=\"td-expansion-panel-header-content\" [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\" layout=\"row\"  layout-align=\"start center\"  flex> <div *ngIf=\"label || expansionPanelLabel\" class=\"md-subhead td-expansion-label\" [attr.flex-gt-xs]=\"(sublabel || expansionPanelSublabel) ? 40 : null\"> <ng-template [cdkPortalHost]=\"expansionPanelLabel\"></ng-template> <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template> </div> <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"md-body-1 td-expansion-sublabel\"> <ng-template [cdkPortalHost]=\"expansionPanelSublabel\"></ng-template> <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template> </div> <span flex></span> <md-icon class=\"td-expand-icon\" *ngIf=\"!expand && !disabled\">keyboard_arrow_down</md-icon> <md-icon class=\"td-expand-icon\" *ngIf=\"expand\">keyboard_arrow_up</md-icon> </div> </div> <div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\"> <ng-content></ng-content> </div> <div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\"> <ng-content select=\"td-expansion-summary\"></ng-content> </div> ",
        animations: [
            TdCollapseAnimation(),
        ],
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef])
], TdExpansionPanelComponent);
export { TdExpansionPanelComponent };
//# sourceMappingURL=expansion-panel.component.js.map