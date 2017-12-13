import * as tslib_1 from "tslib";
import { Subject } from 'rxjs/Subject';
var noop = function () {
    // empty method
};
/** Mixin to augment a component with ngModel support. */
export function mixinControlValueAccessor(base, initialValue) {
    return (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._value = initialValue;
            _this.onChange = function (_) { return noop; };
            _this.onTouched = function () { return noop; };
            _this._subjectValueChanges = new Subject();
            _this.valueChanges = _this._subjectValueChanges.asObservable();
            return _this;
        }
        Object.defineProperty(class_1.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
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
        class_1.prototype.writeValue = function (value) {
            this.value = value;
            this._changeDetectorRef.markForCheck();
        };
        class_1.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        class_1.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        return class_1;
    }(base));
}
//# sourceMappingURL=control-value-accesor.mixin.js.map