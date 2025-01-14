export interface NewUserSchema {
  USER_ID: string;
  F_NAME: string;
  PASSX: string;
  EMAIL: string;
}

export interface ExistingUserSchema {
  login_email: string;
  login_password: string;
}

export interface UserOtpSchema {
  user_email: string;
  attempt: number;
}

export interface usernameCheck {
  user_name: string;
}

export interface UserLoginPhase2VerificationSchema {
  user_email: string;
  otp: number;
}
