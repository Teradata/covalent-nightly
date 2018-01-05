import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TdCollapseAnimation, mixinDisabled, mixinDisableRipple } from '../common/common.module';
import { TdRotateAnimation } from '../common/common.module';
var TdExpansionPanelHeaderDirective = (function (_super) {
    tslib_1.__extends(TdExpansionPanelHeaderDirective, _super);
    function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelHeaderDirective = tslib_1.__decorate([
        Directive({
            selector: '[td-expansion-panel-header]ng-template',
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], TdExpansionPanelHeaderDirective);
    return TdExpansionPanelHeaderDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelHeaderDirective };
var TdExpansionPanelLabelDirective = (function (_super) {
    tslib_1.__extends(TdExpansionPanelLabelDirective, _super);
    function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelLabelDirective = tslib_1.__decorate([
        Directive({
            selector: '[td-expansion-panel-label]ng-template',
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], TdExpansionPanelLabelDirective);
    return TdExpansionPanelLabelDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelLabelDirective };
var TdExpansionPanelSublabelDirective = (function (_super) {
    tslib_1.__extends(TdExpansionPanelSublabelDirective, _super);
    function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelSublabelDirective = tslib_1.__decorate([
        Directive({
            selector: '[td-expansion-panel-sublabel]ng-template',
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], TdExpansionPanelSublabelDirective);
    return TdExpansionPanelSublabelDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelSublabelDirective };
var TdExpansionPanelSummaryComponent = (function () {
    function TdExpansionPanelSummaryComponent() {
    }
    TdExpansionPanelSummaryComponent = tslib_1.__decorate([
        Component({
            selector: 'td-expansion-summary',
            template: '<ng-content></ng-content>',
        })
    ], TdExpansionPanelSummaryComponent);
    return TdExpansionPanelSummaryComponent;
}());
export { TdExpansionPanelSummaryComponent };
var TdExpansionPanelBase = (function () {
    function TdExpansionPanelBase() {
    }
    return TdExpansionPanelBase;
}());
export { TdExpansionPanelBase };
/* tslint:disable-next-line */
export var _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
var TdExpansionPanelComponent = (function (_super) {
    tslib_1.__extends(TdExpansionPanelComponent, _super);
    function TdExpansionPanelComponent(_renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._expand = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        _this.expanded = new EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        _this.collapsed = new EventEmitter();
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
        return _this;
    }
    Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
        get: function () {
            return this._expand;
        },
        /**
         * expand?: boolean
         * Toggles [TdExpansionPanelComponent] between expand/collapse.
         */
        set: function (expand) {
            this._setExpand(coerceBooleanProperty(expand));
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
    /** Method executed when the disabled value changes */
    TdExpansionPanelComponent.prototype.onDisabledChange = function (v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    };
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     */
    TdExpansionPanelComponent.prototype._setExpand = function (newExpand) {
        if (this.disabled) {
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
    tslib_1.__decorate([
        ContentChild(TdExpansionPanelHeaderDirective),
        tslib_1.__metadata("design:type", TdExpansionPanelHeaderDirective)
    ], TdExpansionPanelComponent.prototype, "expansionPanelHeader", void 0);
    tslib_1.__decorate([
        ContentChild(TdExpansionPanelLabelDirective),
        tslib_1.__metadata("design:type", TdExpansionPanelLabelDirective)
    ], TdExpansionPanelComponent.prototype, "expansionPanelLabel", void 0);
    tslib_1.__decorate([
        ContentChild(TdExpansionPanelSublabelDirective),
        tslib_1.__metadata("design:type", TdExpansionPanelSublabelDirective)
    ], TdExpansionPanelComponent.prototype, "expansionPanelSublabel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TdExpansionPanelComponent.prototype, "label", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TdExpansionPanelComponent.prototype, "sublabel", void 0);
    tslib_1.__decorate([
        Input('expand'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TdExpansionPanelComponent.prototype, "expand", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdExpansionPanelComponent.prototype, "expanded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdExpansionPanelComponent.prototype, "collapsed", void 0);
    TdExpansionPanelComponent = tslib_1.__decorate([
        Component({
            selector: 'td-expansion-panel',
            styles: [":host { display: block; } :host .td-expansion-panel-header { position: relative; outline: none; } :host .td-expansion-panel-header:focus:not(.mat-disabled), :host .td-expansion-panel-header:hover:not(.mat-disabled) { cursor: pointer; } :host .td-expansion-panel-header .td-expansion-panel-header-content { height: 48px; padding: 0 24px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: start; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; } :host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label, :host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host .td-expansion-content.ng-animating, :host .td-expansion-summary.ng-animating { overflow: hidden; } .td-expansion-label, .td-expansion-sublabel { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-right: 16px; } ::ng-deep [dir='rtl'] .td-expansion-label, ::ng-deep [dir='rtl'] .td-expansion-sublabel { margin-left: 16px; margin-right: inherit; } /*# sourceMappingURL=expansion-panel.component.css.map */ "],
            template: "<div class=\"td-expansion-panel-header\" [class.mat-disabled]=\"disabled\" matRipple [matRippleDisabled]=\"disabled || disableRipple\" [tabIndex]=\"disabled? -1 : 0\" (keydown.enter)=\"clickEvent()\" (click)=\"clickEvent()\"> <ng-template [cdkPortalHost]=\"expansionPanelHeader\"></ng-template> <div class=\"td-expansion-panel-header-content\" [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\"> <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\"> <ng-template [cdkPortalHost]=\"expansionPanelLabel\"></ng-template> <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template> </div> <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\"> <ng-template [cdkPortalHost]=\"expansionPanelSublabel\"></ng-template> <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template> </div> <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon> </div> </div> <div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\"> <ng-content></ng-content> </div> <div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\"> <ng-content select=\"td-expansion-summary\"></ng-content> </div> ",
            inputs: ['disabled', 'disableRipple'],
            animations: [
                TdCollapseAnimation(),
                TdRotateAnimation({ anchor: 'tdRotate' }),
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef])
    ], TdExpansionPanelComponent);
    return TdExpansionPanelComponent;
}(_TdExpansionPanelMixinBase));
export { TdExpansionPanelComponent };
//# sourceMappingURL=expansion-panel.component.js.map