import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export var LoadingType;
(function (LoadingType) {
    LoadingType[LoadingType["Circular"] = 'circular'] = "Circular";
    LoadingType[LoadingType["Linear"] = 'linear'] = "Linear";
})(LoadingType || (LoadingType = {}));
export var LoadingMode;
(function (LoadingMode) {
    LoadingMode[LoadingMode["Determinate"] = 'determinate'] = "Determinate";
    LoadingMode[LoadingMode["Indeterminate"] = 'indeterminate'] = "Indeterminate";
})(LoadingMode || (LoadingMode = {}));
export var LoadingStrategy;
(function (LoadingStrategy) {
    LoadingStrategy[LoadingStrategy["Overlay"] = 'overlay'] = "Overlay";
    LoadingStrategy[LoadingStrategy["Replace"] = 'replace'] = "Replace";
})(LoadingStrategy || (LoadingStrategy = {}));
export var LoadingStyle;
(function (LoadingStyle) {
    LoadingStyle[LoadingStyle["FullScreen"] = 'fullscreen'] = "FullScreen";
    LoadingStyle[LoadingStyle["Overlay"] = 'overlay'] = "Overlay";
    LoadingStyle[LoadingStyle["None"] = 'none'] = "None";
})(LoadingStyle || (LoadingStyle = {}));
import { TdFadeInOutAnimation } from '../common/common.module';
export var TD_CIRCLE_DIAMETER = 100;
var TdLoadingComponent = (function () {
    function TdLoadingComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new Subject();
        this._animationOut = new Subject();
        this._mode = LoadingMode.Indeterminate;
        this._defaultMode = LoadingMode.Indeterminate;
        this._value = 0;
        this._circleDiameter = TD_CIRCLE_DIAMETER;
        /**
         * Flag for animation
         */
        this.animation = false;
        this.style = LoadingStyle.None;
        /**
         * type: LoadingType
         * Sets type of [TdLoadingComponent] rendered.
         */
        this.type = LoadingType.Circular;
        /**
         * color: primary' | 'accent' | 'warn'
         * Sets theme color of [TdLoadingComponent] rendered.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLoadingComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        /**
         * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
         */
        set: function (mode) {
            this._defaultMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        /**
         * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
         */
        set: function (value) {
            this._value = value;
            // Check for changes for `OnPush` change detection
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    TdLoadingComponent.prototype.ngDoCheck = function () {
        // When overlay is used and the host width has a value greater than 1px
        // set the circle diameter when possible incase the loading component was rendered in a hidden state
        if (this.isOverlay() && this._hostHeight() > 1) {
            if (this.animation) {
                this._setCircleDiameter();
                this._changeDetectorRef.markForCheck();
            }
        }
    };
    TdLoadingComponent.prototype.getHeight = function () {
        // Ignore height if style is `overlay` or `fullscreen`.
        // Add height if child elements have a height and style is `none`, else return default height.
        if (this.isOverlay() || this.isFullScreen()) {
            return undefined;
        }
        else {
            return this.height ? this.height + "px" : '150px';
        }
    };
    TdLoadingComponent.prototype.getCircleDiameter = function () {
        return this._circleDiameter;
    };
    TdLoadingComponent.prototype.getCircleStrokeWidth = function () {
        // we calculate the stroke width by setting it as 10% of its diameter
        var strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
    };
    TdLoadingComponent.prototype.isCircular = function () {
        return this.type === LoadingType.Circular;
    };
    TdLoadingComponent.prototype.isLinear = function () {
        return this.type === LoadingType.Linear;
    };
    TdLoadingComponent.prototype.isFullScreen = function () {
        return this.style === LoadingStyle.FullScreen;
    };
    TdLoadingComponent.prototype.isOverlay = function () {
        return this.style === LoadingStyle.Overlay;
    };
    TdLoadingComponent.prototype.animationComplete = function (event) {
        // Check to see if its "in" or "out" animation to execute the proper callback
        if (!event.fromState) {
            this.inAnimationCompleted();
        }
        else {
            this.outAnimationCompleted();
        }
    };
    TdLoadingComponent.prototype.inAnimationCompleted = function () {
        this._animationIn.next(undefined);
    };
    TdLoadingComponent.prototype.outAnimationCompleted = function () {
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        this._animationOut.next(undefined);
    };
    /**
     * Starts in animation and returns an observable for completition event.
     */
    TdLoadingComponent.prototype.startInAnimation = function () {
        /* need to switch back to the selected mode, so we have saved it in another variable
        *  and then recover it. (issue with protractor)
        */
        this._mode = this._defaultMode;
        // Set values before the animations starts
        this._setCircleDiameter();
        // Check for changes for `OnPush` change detection
        this.animation = true;
        this._changeDetectorRef.markForCheck();
        return this._animationIn.asObservable();
    };
    /**
     * Starts out animation and returns an observable for completition event.
     */
    TdLoadingComponent.prototype.startOutAnimation = function () {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
        * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
        */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    };
    /**
     * Calculate the proper diameter for the circle and set it
     */
    TdLoadingComponent.prototype._setCircleDiameter = function () {
        // we set a default diameter of 100 since this is the default in material
        var diameter = TD_CIRCLE_DIAMETER;
        // if height is provided, then we take that as diameter
        if (this.height) {
            diameter = this.height;
            // else if its not provided, then we take the host height
        }
        else if (this.height === undefined) {
            diameter = this._hostHeight();
        }
        // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
        if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
            this._circleDiameter = Math.floor(diameter);
        }
        else {
            this._circleDiameter = TD_CIRCLE_DIAMETER;
        }
    };
    /**
     * Returns the host height of the loading component
     */
    TdLoadingComponent.prototype._hostHeight = function () {
        if (this._elementRef.nativeElement) {
            return this._elementRef.nativeElement.getBoundingClientRect().height;
        }
        return 0;
    };
    TdLoadingComponent = tslib_1.__decorate([
        Component({
            selector: 'td-loading',
            styles: [".td-loading-wrapper { position: relative; display: block; } .td-loading-wrapper.td-fullscreen { position: inherit; } .td-loading-wrapper .td-loading { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } .td-loading-wrapper.td-overlay .td-loading { position: absolute; margin: 0; top: 0; left: 0; right: 0; z-index: 1000; } .td-loading-wrapper.td-overlay .td-loading mat-progress-bar { position: absolute; top: 0; left: 0; right: 0; } .td-loading-wrapper.td-overlay-circular .td-loading { bottom: 0; } /*# sourceMappingURL=loading.component.css.map */ "],
            template: "<div class=\"td-loading-wrapper\" [style.min-height]=\"getHeight()\" [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\" [class.td-overlay]=\"isOverlay() || isFullScreen()\"  [class.td-fullscreen]=\"isFullScreen()\"> <div [@tdFadeInOut]=\"animation\" (@tdFadeInOut.done)=\"animationComplete($event)\" [style.min-height]=\"getHeight()\" class=\"td-loading\"> <mat-progress-spinner *ngIf=\"isCircular()\"  [mode]=\"mode\" [value]=\"value\"  [color]=\"color\"  [diameter]=\"getCircleDiameter()\" [strokeWidth]=\"getCircleStrokeWidth()\"> </mat-progress-spinner> <mat-progress-bar *ngIf=\"isLinear()\"  [mode]=\"mode\" [value]=\"value\" [color]=\"color\"> </mat-progress-bar> </div> <ng-template [cdkPortalHost]=\"content\"></ng-template> </div>",
            animations: [
                TdFadeInOutAnimation(),
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef])
    ], TdLoadingComponent);
    return TdLoadingComponent;
}());
export { TdLoadingComponent };
//# sourceMappingURL=loading.component.js.map