import { HIGHLIGHT_LINE, IAction } from '../actions';

import { ILesson } from '../Models';

export interface IState {
  currentLesson: ILesson;
}

export function rootReducer(state: IState, action: IAction) {
  switch (action.type) {
    case HIGHLIGHT_LINE:
      return
    default:
      return state;
  }
}
