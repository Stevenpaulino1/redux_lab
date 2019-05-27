import * as actionTypes from "./actionTypes";

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};
export const storeResult = res => {
  // const updatedResult = res * 2;
  return (dispatch, getState) => {
    //simulating async code
    setTimeout(() => {
      // const oldCounter = getState().counter.ctr.counter ;
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
