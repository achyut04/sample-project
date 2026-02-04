import { UserLoginResponse } from "@/redux/sagas/handlers/authHandler/authHandlerInterface";

export interface AuthState {
  userDetails?: UserLoginResponse;
}
