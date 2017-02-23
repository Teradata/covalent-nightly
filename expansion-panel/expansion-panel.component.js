var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild } from '@angular/core';
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
        selector: '[td-expansion-panel-header]template',
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
        selector: '[td-expansion-panel-label]template',
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
        selector: '[td-expansion-panel-sublabel]template',
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
    function TdExpansionPanelComponent() {
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
            this._setExpand(expand);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
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
    ;
    ;
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     */
    TdExpansionPanelComponent.prototype.clickEvent = function () {
        this._setExpand(!this._expand);
    };
    ;
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
                this._onExpanded();
            }
            else {
                this._onCollapsed();
            }
            return true;
        }
        return false;
    };
    ;
    TdExpansionPanelComponent.prototype._onExpanded = function () {
        this.expanded.emit(undefined);
    };
    ;
    TdExpansionPanelComponent.prototype._onCollapsed = function () {
        this.collapsed.emit(undefined);
    };
    ;
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
        styles: [":host /deep/ md-nav-list [md-list-item]:active, :host /deep/ md-nav-list [md-list-item]:focus { outline: none; } :host /deep/ md-nav-list [md-list-item].mat-list-item.mat-interaction-disabled .mat-list-item-content { background: none !important; cursor: auto; } :host /deep/ md-nav-list [md-list-item].mat-tall .mat-list-item-content { height: auto; padding-left: 0; padding-right: 0; } :host { display: block; } :host .panel { transition: 1s all ease; } :host md-nav-list:first-of-type, :host md-list:first-of-type { padding-top: 0; } md-nav-list { padding: 0; } .td-expansion-primary, .td-expansion-secondary { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-right: 5px; } .td-expansion-content, .td-expansion-summary { overflow: hidden; } "],
        template: "<div class=\"panel\"  [class.td-expanded]=\"expand\"> <md-nav-list> <a [tabIndex]=\"disabled? -1 : 0\" (keydown.enter)=\"clickEvent()\" (click)=\"clickEvent()\" [class.mat-interaction-disabled]=\"disabled\" [class.mat-tall]=\"expansionPanelHeader\" md-list-item> <template [cdkPortalHost]=\"expansionPanelHeader\"></template> <div [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\" layout=\"row\"  layout-align=\"start center\"  flex> <div class=\"md-subhead td-expansion-primary\" flex-gt-xs=\"33\"> <template [cdkPortalHost]=\"expansionPanelLabel\"></template> <template [ngIf]=\"!expansionPanelLabel\">{{label || 'Click to expand '}}</template> </div> <div class=\"md-body-1 td-expansion-secondary\"> <template [cdkPortalHost]=\"expansionPanelSublabel\"></template> <template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</template> </div> <span flex></span> <md-icon class=\"td-expand-icon\" *ngIf=\"!expand && !disabled\">keyboard_arrow_down</md-icon> <md-icon class=\"td-expand-icon\" *ngIf=\"expand\">keyboard_arrow_up</md-icon> </div> </a> </md-nav-list> <div> <div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\"> <ng-content></ng-content> </div> <div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\"> <ng-content select=\"td-expansion-summary\"></ng-content> </div> </div> </div>",
        animations: [
            TdCollapseAnimation(),
        ],
    })
], TdExpansionPanelComponent);
export { TdExpansionPanelComponent };
//# sourceMappingURL=expansion-panel.component.js.map