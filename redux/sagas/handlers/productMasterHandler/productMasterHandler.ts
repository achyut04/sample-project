import { responseInterface } from "../masterHandlerInterface";
import { call, put } from "redux-saga/effects";
import { getProductListApi } from "../../requests/productMasterRequest";
import {
  SET_PRODUCT_LIST,
  GET_PRODUCT_LIST,
} from "@/redux/actions/productMasterAction/productMasterAction";
import { checkArray, hasKeys } from "@/commonJS/commonHelper/commonHelper";
import { ProductItem } from "./productMasterHandlerInterface";

export function* handleGetProductList(action: {
  type: string;
  payload: string;
}) {
  try {
    const response: responseInterface<ProductItem[]> = yield call(
      getProductListApi,
      action?.payload,
    );
    if (response?.status !== 200) return;
    if (hasKeys(response?.data)) {
      yield put({ type: SET_PRODUCT_LIST, payload: response?.data });
    }
  } catch (error) {
    console.error(error);
  }
}
