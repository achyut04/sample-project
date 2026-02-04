import {
  SET_USERDETAILS,
  userDetails,
} from "@/redux/actions/authAction/authAction";

const initialState: any = {
  userDetails: {},
};

// Define the user reducer
const authReducer = (
  state: any = initialState,
  action: { type: string; payload: unknown },
): any => {
  switch (action.type) {
    case SET_USERDETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
