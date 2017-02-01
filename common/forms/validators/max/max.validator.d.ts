import { Validator, AbstractControl, ValidatorFn } from '@angular/forms';
export declare const MAX_VALIDATOR: any;
export declare class TdMaxValidator implements Validator {
    private _validator;
    max: number;
    static validate(maxValue: any): ValidatorFn;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
