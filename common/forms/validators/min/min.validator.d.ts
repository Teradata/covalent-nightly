import { Validator, AbstractControl } from '@angular/forms';
export declare const MIN_VALIDATOR: any;
export declare class TdMinValidator implements Validator {
    private _validator;
    min: number;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
