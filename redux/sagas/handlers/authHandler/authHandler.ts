import { call, put } from "redux-saga/effects";
import {
  SET_USERDETAILS,
  GET_USERDETAILS,
} from "@/redux/actions/authAction/authAction";
import { UserLoginApi, UserLogoutApi } from "../../requests/authRequest";
import { responseInterface } from "../masterHandlerInterface";
import { UserLoginResponse, UserLoginPayload } from "./authHandlerInterface";
import { hasKeys } from "@/commonJS/commonHelper/commonHelper";
export function* handleUserLogin(action: {
  type: string;
  payload: UserLoginPayload;
}) {
  try {
    const response: responseInterface<UserLoginResponse> = yield call(
      UserLoginApi,
      action?.payload,
    );

    if (response.status !== 200) return;

    if (response.data.user) {
      localStorage.setItem("token", response?.data?.user?.auth?.token);
      yield put({
        type: SET_USERDETAILS,
        payload: response?.data?.user?.profile,
      });
      yield put({ type: GET_USERDETAILS });
    }
  } catch (err) {
    console.error(err);
  }
}

// export function* handleUserLogout(action: {
//   type: string;
//   payload: UserLogoutPaylaod;
// }) {
//   try {
//     const response: responseInterface<UserLogoutResponse> = yield call(
//       UserLogoutApi,
//       action?.payload,
//     );

//     if (response.status !== 200) return;
//     yield call(storage.clearLoginTokens);
//   } catch (err) {
//     console.error(err);
//   }
// }
