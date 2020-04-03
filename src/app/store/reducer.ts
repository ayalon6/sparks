import { createReducer, on } from '@ngrx/store';
import { click, clear } from './actions';


export interface NumPadState  {
    readonly value: string;
    readonly lastValue: string;
}

export const initialState = {
    value: '',
    lastValue: ''
};

// tslint:disable-next-line:variable-name
const _numPadReducer = createReducer(
    initialState,
  on(click, (state, { value }) => {
      console.log('click', value);
      return {...state, value: state.value + value, lastValue: value };
    }),
  on(clear, state => (initialState)),
);

export function numPadReducer(state, action) {
  return _numPadReducer(state, action);
}
