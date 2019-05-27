import * as actionTypes from "./actionTypes";

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};
export const storeResult = res => {
  return dispatch => {
    //simulating async code
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };

  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};
export const deleteResult = res => {
  return {
    type: actionTypes.DELETE_RESULT,
    resId: res
  };
};
