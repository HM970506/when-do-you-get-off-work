import { combineReducers } from "redux";

const rootReducer = combineReducers({
  //reducer1:reducer1, reducer2:reducer2...
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
