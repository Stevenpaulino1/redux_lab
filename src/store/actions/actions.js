export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const add = payload => {
  return {
    type: ADD,
    val: payload
  };
};
export const subtract = payload => {
  return {
    type: SUBTRACT,
    val: payload
  };
};

export const saveResult = res => {
  return {
    type: STORE_RESULT,
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
    type: STORE_RESULT,
    result: res
  };
};
export const deleteResult = res => {
  return {
    type: DELETE_RESULT,
    resId: res
  };
};
