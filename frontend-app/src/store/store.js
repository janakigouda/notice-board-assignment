import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { usersReducer } from "./users/users.reducer";
import { userNoticeReducer } from "./userNotices/userNotices.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
  userNotices: userNoticeReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
