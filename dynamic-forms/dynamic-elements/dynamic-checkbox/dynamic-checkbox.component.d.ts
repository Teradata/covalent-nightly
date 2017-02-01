import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';
export declare const CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TdDynamicCheckboxComponent extends AbstractControlValueAccessor implements ControlValueAccessor {
    control: FormControl;
    label: string;
}
