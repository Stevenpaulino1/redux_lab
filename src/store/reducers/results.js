import * as actionTypes from "../actions/actionTypes";
import { updateObj } from "../utility";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObj(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    case actionTypes.DELETE_RESULT:
      const updatedArr = state.results.filter(res => res.id !== action.resId);

      return updateObj(state, {
        results: updatedArr
      });
  }

  return state;
};

export default reducer;
