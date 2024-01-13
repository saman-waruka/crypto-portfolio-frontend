export type PostSignInResponse = {
  token: string;
};

export type GetProfileResponse = {
  id: number;
  email: string;
  name: string;
  created_at?: Date;
};

export type PostSignUpResponse = {
  success: boolean;
};
