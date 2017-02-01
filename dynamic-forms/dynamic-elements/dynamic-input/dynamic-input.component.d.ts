import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';
export declare const INPUT_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TdDynamicInputComponent extends AbstractControlValueAccessor implements ControlValueAccessor {
    control: FormControl;
    label: string;
    type: string;
    required: boolean;
    min: number;
    max: number;
}
