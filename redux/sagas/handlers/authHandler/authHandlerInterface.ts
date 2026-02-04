export interface UserLoginResponse {
  code: number;
  type: string;
  message: string;
  user: {
    profile: {
      id: number;
      name: string;
      email: string;
      mobile_no: string;
      default_warehouse: string | null;
    };
    auth: {
      token: string;
    };
  };
}
export interface UserLoginPayload {
  email: string;
  password: string;
  mac_address: string;
}

export interface User {
  user_id: number;
  profile: Profile;
  token: string;
}

export interface Profile {
  id: number;
  name: string;
  email: string;
  mobile_no: number;
  default_warehouse: string;
}
