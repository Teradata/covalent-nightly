import { Validator, AbstractControl, ValidatorFn } from '@angular/forms';
export declare const MIN_VALIDATOR: any;
export declare class TdMinValidator implements Validator {
    private _validator;
    min: number;
    static validate(minValue: any): ValidatorFn;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
