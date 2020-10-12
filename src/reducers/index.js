import { combineReducers } from "redux";
import auth from "./auth";
import messages from "./messages";
import user from "./user";

export default combineReducers({
    auth,
    messages,
    user
});