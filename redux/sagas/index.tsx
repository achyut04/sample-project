import { all, takeLatest } from "redux-saga/effects";
import {
  GET_USERDETAILS,
  USER_LOGIN,
  USER_LOGOUT,
} from "../actions/authAction/authAction";
import { GET_PRODUCT_LIST } from "../actions/productMasterAction/productMasterAction";
import { handleUserLogin } from "./handlers/authHandler/authHandler";
import { handleGetProductList } from "./handlers/productMasterHandler/productMasterHandler";

export function* watcherSaga(): Generator<unknown, void, unknown> {
  yield all([
    yield takeLatest(USER_LOGIN, handleUserLogin),
    yield takeLatest(GET_PRODUCT_LIST, handleGetProductList),
  ]);
}
