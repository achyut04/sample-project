import {
  SET_PRODUCT_LIST,
  GET_PRODUCT_LIST,
} from "@/redux/actions/productMasterAction/productMasterAction";

import { ProductMasterInterface } from "./productMasterReducerInterface";

const initialState: ProductMasterInterface = {
  productList: [],
};

const productMasterReducer = (
  state: ProductMasterInterface = initialState,
  action: { type: string; payload: unknown },
) => {
  //   console.log("prodlistReducer", state);
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action?.payload,
      };
    default:
      return state;
  }
};

export default productMasterReducer;
