import { combineReducers } from "redux";
import { appStateReducer } from "./appStateReducer";
import { worksReducer } from "./worksReducer";

export const rootReducer = combineReducers({
  appState: appStateReducer,
  works: worksReducer,
});
