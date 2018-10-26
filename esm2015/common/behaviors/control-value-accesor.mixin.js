/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/** @type {?} */
const noop = () => {
    // empty method
};
const ɵ0 = noop;
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
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._value = initialValue;
            this.onChange = (_) => noop;
            this.onTouched = () => noop;
            this._subjectValueChanges = new Subject();
            this.valueChanges = this._subjectValueChanges.asObservable();
        }
        /**
         * @param {?} v
         * @return {?}
         */
        set value(v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
                this._changeDetectorRef.markForCheck();
                this._subjectValueChanges.next(v);
            }
        }
        /**
         * @return {?}
         */
        get value() {
            return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        writeValue(value) {
            this.value = value;
            this._changeDetectorRef.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnChange(fn) {
            this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
    };
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC12YWx1ZS1hY2Nlc29yLm1peGluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYmVoYXZpb3JzL2NvbnRyb2wtdmFsdWUtYWNjZXNvci5taXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7TUFJckMsSUFBSSxHQUFRLEdBQUcsRUFBRTtJQUNyQixlQUFlO0FBQ2pCLENBQUM7Ozs7O0FBRUQsMkNBS0M7OztJQUpDLHNDQUFXOztJQUNYLDZDQUE4Qjs7SUFDOUIseUNBQTBCOztJQUMxQiwwQ0FBcUI7Ozs7O0FBR3ZCLDJDQUVDOzs7SUFEQyxtREFBc0M7Ozs7Ozs7OztBQUl4QyxNQUFNLFVBQVUseUJBQXlCLENBQ3hCLElBQU8sRUFBRSxZQUFrQjtJQUMxQyxPQUFPLEtBQU0sU0FBUSxJQUFJOzs7O1FBS3ZCLFlBQVksR0FBRyxJQUFXO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBTFQsV0FBTSxHQUFRLFlBQVksQ0FBQztZQW1DbkMsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDNUIsY0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztZQTlCckIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7WUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0QsQ0FBQzs7Ozs7UUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFNO1lBQ2QsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUM7Ozs7UUFDRCxJQUFJLEtBQUs7WUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFFRCxVQUFVLENBQUMsS0FBVTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsQ0FBQzs7Ozs7UUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBRUQsaUJBQWlCLENBQUMsRUFBTztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDO0tBS0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHtcbiAgLy8gZW1wdHkgbWV0aG9kXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sVmFsdWVBY2Nlc3NvciBleHRlbmRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgdmFsdWU6IGFueTtcbiAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XG4gIG9uQ2hhbmdlOiAoXzogYW55KSA9PiBhbnk7XG4gIG9uVG91Y2hlZDogKCkgPT4gYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElIYXNDaGFuZ2VEZXRlY3RvclJlZiB7XG4gIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IHdpdGggbmdNb2RlbCBzdXBwb3J0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPElIYXNDaGFuZ2VEZXRlY3RvclJlZj4+XG4gICAgICAgICAgICAgICAgKGJhc2U6IFQsIGluaXRpYWxWYWx1ZT86IGFueSk6IENvbnN0cnVjdG9yPElDb250cm9sVmFsdWVBY2Nlc3Nvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IGluaXRpYWxWYWx1ZTtcbiAgICBwcml2YXRlIF9zdWJqZWN0VmFsdWVDaGFuZ2VzOiBTdWJqZWN0PGFueT47XG4gICAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7IFxuICAgICAgdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzID0gdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHYpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcy5uZXh0KHYpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiBub29wO1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IG5vb3A7XG5cbiAgfTtcbn1cbiJdfQ==