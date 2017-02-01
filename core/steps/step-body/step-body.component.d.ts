import { StepState } from '../step.component';
export declare class TdStepBodyComponent {
    /**
     * active?: boolean
     * Sets for active/inactive states on body.
     */
    active: boolean;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets styles for state of body.
     * Defaults to [StepState.None | 'none'].
     */
    state: StepState;
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    isComplete(): boolean;
}
