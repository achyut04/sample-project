export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const SET_USERDETAILS = "SET_USERDETAILS";
export const GET_USERDETAILS = "GET_USERDETAILS";

export const userLogin = (credentials: any) => ({
  type: USER_LOGIN,
  payload: credentials,
});

export const userLogout = (token: any) => ({
  type: USER_LOGOUT,
  payload: token,
});
export const userDetails = () => ({
  type: GET_USERDETAILS,
});
