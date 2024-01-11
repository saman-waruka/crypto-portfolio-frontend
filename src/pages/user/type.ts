import { PostSignUpRequestBody } from "./services/request";

export type SignUpFormValues = PostSignUpRequestBody & {
  confirm_password: string;
};
