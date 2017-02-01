import { ControlValueAccessor } from '@angular/forms';
export declare abstract class AbstractControlValueAccessor implements ControlValueAccessor {
    /**
     * Implemented as part of ControlValueAccessor.
     */
    protected _value: any;
    value: any;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (_: any) => any;
    onTouched: () => any;
}
