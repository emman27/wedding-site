import { Action, UPDATE_COUNTDOWN, UpdateCountdownAction } from "./actions";

const DEFAULT_STATE = {
  remainingSeconds: 0,
};

function timer(state = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case UPDATE_COUNTDOWN:
      return Object.assign({}, state, { remainingSeconds: (action as UpdateCountdownAction).remainingSeconds });
    default: return state;
  }
}

export default timer;
