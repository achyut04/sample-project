import { get, post } from "@/redux/apiWrapper";

export const UserLoginApi = (data: unknown) => {
  return post("/login", data);
};

export const UserLogoutApi = (data: any) => {
  return post("/logout", data);
};
