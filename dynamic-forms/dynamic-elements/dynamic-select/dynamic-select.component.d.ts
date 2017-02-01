import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';
export declare const SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TdDynamicSelectComponent extends AbstractControlValueAccessor implements ControlValueAccessor {
    control: FormControl;
    label: string;
    required: boolean;
    selections: any[];
}
