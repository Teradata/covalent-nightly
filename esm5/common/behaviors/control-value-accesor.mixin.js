/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
/** @type {?} */
var noop = function () {
    // empty method
};
var ɵ0 = noop;
/**
 * @record
 */
export function IControlValueAccessor() { }
if (false) {
    /** @type {?} */
    IControlValueAccessor.prototype.value;
    /** @type {?} */
    IControlValueAccessor.prototype.valueChanges;
    /** @type {?} */
    IControlValueAccessor.prototype.onChange;
    /** @type {?} */
    IControlValueAccessor.prototype.onTouched;
}
/**
 * @record
 */
export function IHasChangeDetectorRef() { }
if (false) {
    /** @type {?} */
    IHasChangeDetectorRef.prototype._changeDetectorRef;
}
/**
 * Mixin to augment a component with ngModel support.
 * @template T
 * @param {?} base
 * @param {?=} initialValue
 * @return {?}
 */
export function mixinControlValueAccessor(base, initialValue) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, tslib_1.__spread(args)) || this;
            _this._value = initialValue;
            _this.onChange = function (_) { return noop; };
            _this.onTouched = function () { return noop; };
            _this._subjectValueChanges = new Subject();
            _this.valueChanges = _this._subjectValueChanges.asObservable();
            return _this;
        }
        Object.defineProperty(class_1.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                if (v !== this._value) {
                    this._value = v;
                    this.onChange(v);
                    this._changeDetectorRef.markForCheck();
                    this._subjectValueChanges.next(v);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        class_1.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        class_1.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        class_1.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        return class_1;
    }(base));
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC12YWx1ZS1hY2Nlc29yLm1peGluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYmVoYXZpb3JzL2NvbnRyb2wtdmFsdWUtYWNjZXNvci5taXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBRXJDLElBQUksR0FBUTtJQUNoQixlQUFlO0FBQ2pCLENBQUM7Ozs7O0FBRUQsMkNBS0M7OztJQUpDLHNDQUFXOztJQUNYLDZDQUE4Qjs7SUFDOUIseUNBQTBCOztJQUMxQiwwQ0FBcUI7Ozs7O0FBR3ZCLDJDQUVDOzs7SUFEQyxtREFBc0M7Ozs7Ozs7OztBQUl4QyxNQUFNLFVBQVUseUJBQXlCLENBQ3hCLElBQU8sRUFBRSxZQUFrQjtJQUMxQztRQUFxQixtQ0FBSTtRQUt2QjtZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFBMUIsZ0RBQ1csSUFBSSxXQUdkO1lBUk8sWUFBTSxHQUFRLFlBQVksQ0FBQztZQW1DbkMsY0FBUSxHQUFHLFVBQUMsQ0FBTSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztZQUM1QixlQUFTLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7WUE5QnJCLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDOztRQUMvRCxDQUFDO1FBRUQsc0JBQUksMEJBQUs7Ozs7WUFRVDtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckIsQ0FBQzs7Ozs7WUFWRCxVQUFVLENBQU07Z0JBQ2QsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkM7WUFDSCxDQUFDOzs7V0FBQTs7Ozs7UUFLRCw0QkFBVTs7OztRQUFWLFVBQVcsS0FBVTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsQ0FBQzs7Ozs7UUFFRCxrQ0FBZ0I7Ozs7UUFBaEIsVUFBaUIsRUFBTztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELG1DQUFpQjs7OztRQUFqQixVQUFrQixFQUFPO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFLSCxjQUFDO0lBQUQsQ0FBQyxBQXZDTSxDQUFjLElBQUksR0F1Q3ZCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3Qgbm9vcDogYW55ID0gKCkgPT4ge1xuICAvLyBlbXB0eSBtZXRob2Rcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogYW55O1xuICB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcbiAgb25DaGFuZ2U6IChfOiBhbnkpID0+IGFueTtcbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUhhc0NoYW5nZURldGVjdG9yUmVmIHtcbiAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbn1cblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBjb21wb25lbnQgd2l0aCBuZ01vZGVsIHN1cHBvcnQuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I8SUhhc0NoYW5nZURldGVjdG9yUmVmPj5cbiAgICAgICAgICAgICAgICAoYmFzZTogVCwgaW5pdGlhbFZhbHVlPzogYW55KTogQ29uc3RydWN0b3I8SUNvbnRyb2xWYWx1ZUFjY2Vzc29yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF92YWx1ZTogYW55ID0gaW5pdGlhbFZhbHVlO1xuICAgIHByaXZhdGUgX3N1YmplY3RWYWx1ZUNoYW5nZXM6IFN1YmplY3Q8YW55PjtcbiAgICB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTsgXG4gICAgICB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMgPSB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICAgIGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB0aGlzLl9zdWJqZWN0VmFsdWVDaGFuZ2VzLm5leHQodik7XG4gICAgICB9XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IG5vb3A7XG4gICAgb25Ub3VjaGVkID0gKCkgPT4gbm9vcDtcblxuICB9O1xufVxuIl19