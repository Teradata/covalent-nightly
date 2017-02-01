var noop = function () {
    // empty method
};
var AbstractControlValueAccessor = (function () {
    function AbstractControlValueAccessor() {
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = undefined;
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
    }
    Object.defineProperty(AbstractControlValueAccessor.prototype, "value", {
        // get/set accessor (needed for ControlValueAccessor)
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    AbstractControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
    };
    AbstractControlValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AbstractControlValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return AbstractControlValueAccessor;
}());
export { AbstractControlValueAccessor };
//# sourceMappingURL=abstract-control-value-accesor.js.map