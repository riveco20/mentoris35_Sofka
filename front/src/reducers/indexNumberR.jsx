import { combineReducers } from "redux";

function viewNumberRandom(
  state = {
    loading: false,
  },
  action) {
  switch (action.type) {
    //TODO: refactorizar
    case "view-loading": {
      return {
        loading: true,
      };
    }
    case "view-loaded": {
      return {
        loading: false,
      };
    }
    default:
      return state;
  }
}

function numberRamdonList(
  state = {
    result: {},
  },
  action
) {
  switch (action.type) {
    case "random-result": {
      return { result: action.data };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  viewNumberRandom,
  numberRamdonList,
});

export default rootReducer;