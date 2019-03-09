export interface Action {
  type: string;
}

export const UPDATE_COUNTDOWN = "UPDATE_COUNTDOWN";

export interface UpdateCountdownAction {
  type: string;
  remainingSeconds: number;
}

export function updateCountdown(remainingSeconds: number): UpdateCountdownAction {
  return {
    type: UPDATE_COUNTDOWN,
    remainingSeconds,
  };
}
