import { combineReducers } from "redux";
import transport from "./transport";

const rootReducer = combineReducers({
  transport: transport,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
