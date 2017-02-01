import { ValidatorFn, FormControl } from '@angular/forms';
export declare enum TdDynamicType {
    Text,
    Boolean,
    Number,
    Array,
}
export declare enum TdDynamicElement {
    Input,
    Textarea,
    Slider,
    SlideToggle,
    Checkbox,
    Select,
}
export interface ITdDynamicElementConfig {
    label?: string;
    name: string;
    type: TdDynamicType | TdDynamicElement;
    required?: boolean;
    min?: any;
    max?: any;
    selections?: any[];
    default?: any;
}
export declare const DYNAMIC_ELEMENT_NAME_REGEX: RegExp;
export declare class TdDynamicFormsService {
    /**
     * Method to validate if the [name] is a proper element name.
     * Throws error if name is not valid.
     */
    validateDynamicElementName(name: string): void;
    /**
     * Gets component to be rendered depending on [TdDynamicElement | TdDynamicType]
     * Throws error if it does not exists or not supported.
     */
    getDynamicElement(element: TdDynamicElement | TdDynamicType): any;
    /**
     * Gets default flex for element depending on [TdDynamicElement | TdDynamicType].
     * Throws error if it does not exists or not supported.
     */
    getDefaultElementFlex(element: TdDynamicElement | TdDynamicType): any;
    /**
     * Creates form control for element depending [ITdDynamicElementConfig] properties.
     */
    createFormControl(config: ITdDynamicElementConfig): FormControl;
    /**
     * Creates form validationdepending [ITdDynamicElementConfig] properties.
     */
    createValidators(config: ITdDynamicElementConfig): ValidatorFn;
}
