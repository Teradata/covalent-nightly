import { Validator, AbstractControl } from '@angular/forms';
export declare const MAX_VALIDATOR: any;
export declare class TdMaxValidator implements Validator {
    private _validator;
    max: number;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
