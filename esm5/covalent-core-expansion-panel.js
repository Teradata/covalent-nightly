import { __extends } from 'tslib';
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2, EventEmitter, NgModule } from '@angular/core';
import { TemplatePortalDirective, PortalModule } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TdCollapseAnimation, mixinDisabled, mixinDisableRipple, TdRotateAnimation } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelHeaderDirective, _super);
    function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelHeaderDirective;
}(TemplatePortalDirective));
TdExpansionPanelHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-header]ng-template',
            },] },
];
TdExpansionPanelHeaderDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelLabelDirective, _super);
    function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelLabelDirective;
}(TemplatePortalDirective));
TdExpansionPanelLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-label]ng-template',
            },] },
];
TdExpansionPanelLabelDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelSublabelDirective, _super);
    function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelSublabelDirective;
}(TemplatePortalDirective));
TdExpansionPanelSublabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-sublabel]ng-template',
            },] },
];
TdExpansionPanelSublabelDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
var TdExpansionPanelSummaryComponent = /** @class */ (function () {
    function TdExpansionPanelSummaryComponent() {
    }
    return TdExpansionPanelSummaryComponent;
}());
TdExpansionPanelSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-summary',
                template: '<ng-content></ng-content>',
            },] },
];
TdExpansionPanelSummaryComponent.ctorParameters = function () { return []; };
var TdExpansionPanelBase = /** @class */ (function () {
    function TdExpansionPanelBase() {
    }
    return TdExpansionPanelBase;
}());
var _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
var TdExpansionPanelComponent = /** @class */ (function (_super) {
    __extends(TdExpansionPanelComponent, _super);
    function TdExpansionPanelComponent(_renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._expand = false;
        _this.expanded = new EventEmitter();
        _this.collapsed = new EventEmitter();
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
        return _this;
    }
    Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
        get: function () {
            return this._expand;
        },
        set: function (expand) {
            this._setExpand(coerceBooleanProperty(expand));
        },
        enumerable: true,
        configurable: true
    });
    TdExpansionPanelComponent.prototype.clickEvent = function () {
        this._setExpand(!this._expand);
    };
    TdExpansionPanelComponent.prototype.toggle = function () {
        return this._setExpand(!this._expand);
    };
    TdExpansionPanelComponent.prototype.open = function () {
        return this._setExpand(true);
    };
    TdExpansionPanelComponent.prototype.close = function () {
        return this._setExpand(false);
    };
    TdExpansionPanelComponent.prototype.onDisabledChange = function (v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    };
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
    return TdExpansionPanelComponent;
}(_TdExpansionPanelMixinBase));
TdExpansionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel',
                styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"],
                template: "<div class=\"td-expansion-panel-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled? -1 : 0\"\n      (keydown.enter)=\"clickEvent()\"\n      (click)=\"clickEvent()\">\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\"\n        [class.mat-disabled]=\"disabled\"\n        *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\"\n      [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\"\n      [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                inputs: ['disabled', 'disableRipple'],
                animations: [
                    TdCollapseAnimation(),
                    TdRotateAnimation({ anchor: 'tdRotate' }),
                ],
            },] },
];
TdExpansionPanelComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdExpansionPanelComponent.propDecorators = {
    "expansionPanelHeader": [{ type: ContentChild, args: [TdExpansionPanelHeaderDirective,] },],
    "expansionPanelLabel": [{ type: ContentChild, args: [TdExpansionPanelLabelDirective,] },],
    "expansionPanelSublabel": [{ type: ContentChild, args: [TdExpansionPanelSublabelDirective,] },],
    "label": [{ type: Input },],
    "sublabel": [{ type: Input },],
    "expand": [{ type: Input, args: ['expand',] },],
    "expanded": [{ type: Output },],
    "collapsed": [{ type: Output },],
};
var TdExpansionPanelGroupComponent = /** @class */ (function () {
    function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    return TdExpansionPanelGroupComponent;
}());
TdExpansionPanelGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel-group',
                styles: [""],
                template: "<ng-content></ng-content>",
            },] },
];
TdExpansionPanelGroupComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
]; };
var TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
var CovalentExpansionPanelModule = /** @class */ (function () {
    function CovalentExpansionPanelModule() {
    }
    return CovalentExpansionPanelModule;
}());
CovalentExpansionPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatRippleModule,
                    MatIconModule,
                    PortalModule,
                ],
                declarations: [
                    TD_EXPANSION_PANEL,
                ],
                exports: [
                    TD_EXPANSION_PANEL,
                ],
            },] },
];
CovalentExpansionPanelModule.ctorParameters = function () { return []; };

export { CovalentExpansionPanelModule, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective, TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent, TdExpansionPanelBase, _TdExpansionPanelMixinBase, TdExpansionPanelComponent, TdExpansionPanelGroupComponent };
//# sourceMappingURL=covalent-core-expansion-panel.js.map
