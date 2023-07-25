import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export function colorChanged(color, changeType) {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
}
export function statusChanged(status) {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
}
