export type PostSignInResponse = {
  token: string;
};

export type GetProfileResponse = {
  id: number;
  email: string;
  name: string;
  createdAt?: Date;
};

export type PostSignUpResponse = {
  success: boolean;
};
