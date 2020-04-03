import { createAction, props } from '@ngrx/store';

export const click = createAction('[Num pad] Increment',
                                    props<{ value: string; }>());
export const clear = createAction('[Num pad] Decrement');
// export const reset = createAction('[Num pad] Reset');
