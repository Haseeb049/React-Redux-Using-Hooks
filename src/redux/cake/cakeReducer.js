import { BUY_CAKE } from "./cakeTypes";
const intialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = intialState, action) => {
  console.log("reducer state", state, action.type);
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
