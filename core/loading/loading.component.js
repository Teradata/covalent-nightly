var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
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
var TdLoadingComponent = (function () {
    function TdLoadingComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new Subject();
        this._animationOut = new Subject();
        this._mode = LoadingMode.Indeterminate;
        this._defaultMode = LoadingMode.Indeterminate;
        this._value = 0;
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
        if (this.height) {
            var diameter = this.height * (2 / 3);
            if (diameter < 80) {
                return diameter + "px";
            }
        }
        return '80px';
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
        var _this = this;
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        setTimeout(function () {
            _this._animationOut.next(undefined);
        });
    };
    /**
     * Starts in animation and returns an observable for completition event.
     */
    TdLoadingComponent.prototype.startInAnimation = function () {
        var _this = this;
        setTimeout(function () {
            _this.animation = true;
            // Check for changes for `OnPush` change detection
            _this._changeDetectorRef.markForCheck();
        });
        /* need to switch back to the selected mode, so we have saved it in another variable
        *  and then recover it. (issue with protractor)
        */
        this._mode = this._defaultMode;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationIn.asObservable();
    };
    /**
     * Starts out animation and returns an observable for completition event.
     */
    TdLoadingComponent.prototype.startOutAnimation = function () {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
        * inside md-progress-spinner stops and protractor doesnt timeout waiting to sync.
        */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    };
    return TdLoadingComponent;
}());
TdLoadingComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'td-loading',
        styles: [".td-loading-wrapper { position: relative; display: block; } .td-loading-wrapper.td-fullscreen { position: inherit; } .td-loading-wrapper.td-overlay .td-loading { position: absolute; margin: 0; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000; } .td-loading-wrapper.td-overlay .td-loading md-progress-bar { position: absolute; top: 0; left: 0; right: 0; } "],
        template: "<div class=\"td-loading-wrapper\" [style.min-height]=\"getHeight()\" [class.td-overlay]=\"isOverlay() || isFullScreen()\" [class.td-fullscreen]=\"isFullScreen()\"> <div [@tdFadeInOut]=\"animation\" (@tdFadeInOut.done)=\"animationComplete($event)\" class=\"td-loading\" layout=\"row\" layout-align=\"center center\" flex> <md-progress-spinner *ngIf=\"isCircular()\"  [mode]=\"mode\" [value]=\"value\"  [color]=\"color\"  [style.height]=\"getCircleDiameter()\" [style.width]=\"getCircleDiameter()\"> </md-progress-spinner> <md-progress-bar *ngIf=\"isLinear()\"  [mode]=\"mode\" [value]=\"value\" [color]=\"color\"> </md-progress-bar> </div> <template [cdkPortalHost]=\"content\"></template> </div>",
        animations: [
            TdFadeInOutAnimation(),
        ],
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], TdLoadingComponent);
export { TdLoadingComponent };
//# sourceMappingURL=loading.component.js.map