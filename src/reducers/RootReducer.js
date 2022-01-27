import { combineReducers } from "redux";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";

const RootReducer = combineReducers({
  profiles: ProfileReducer,
  users: UsersReducer,
});

export default RootReducer;
