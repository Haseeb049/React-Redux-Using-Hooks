import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";
const rootReducer = combineReducers({
  user: userReducer,
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
