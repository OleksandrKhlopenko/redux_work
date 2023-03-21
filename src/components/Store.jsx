import { createStore } from "redux";
import rootReducer from "./RoootReducer";

const store = createStore(rootReducer);

export default store;