import { StepState } from '../step.component';
export declare class TdStepHeaderComponent {
    /**
     * Number assigned to [TdStepHeaderComponent].
     */
    number: number;
    /**
     * active?: boolean
     * Sets for active/inactive states on header.
     */
    active: boolean;
    /**
     * disabled?: boolean
     * Sets styles for disabled state on icon and header.
     */
    disabled: boolean;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets styles for state of header.
     * Defaults to [StepState.None | 'none'].
     */
    state: StepState;
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    isComplete(): boolean;
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    isRequired(): boolean;
}
