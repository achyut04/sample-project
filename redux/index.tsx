import { Action, Reducer, combineReducers } from "redux";
import userReducer from "./reducers/authReducer/authReducer";
import productMasterReducer from "./reducers/productMasterReducer/productMasterReducer";
import { AuthState } from "./reducers/authReducer/authReducerInterface";
import { ProductMasterInterface } from "./reducers/productMasterReducer/productMasterReducerInterface";
export interface RootState {
  user: AuthState;
  product: ProductMasterInterface;
}
const appReducers = combineReducers({
  user: userReducer,
  product: productMasterReducer,
});

const rootReducer: Reducer<RootState, Action> = (
  state: RootState | undefined,
  action: Action,
): RootState => {
  // Return the combined state from all reducers
  return appReducers(state, action);
};
export default rootReducer;
