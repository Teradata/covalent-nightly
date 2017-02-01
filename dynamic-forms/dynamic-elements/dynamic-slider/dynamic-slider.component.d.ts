import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';
export declare const SLIDER_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TdDynamicSliderComponent extends AbstractControlValueAccessor implements ControlValueAccessor {
    control: FormControl;
    label: string;
    required: boolean;
    min: number;
    max: number;
}
