import * as yup from "yup";
import YupPassword from "yup-password";
import { SignUpFormValues } from "../../../pages/user/type";

YupPassword(yup);

type ErrorType = {
  errors: string[];
};

type CreatePasswordMatchedValidatorProps = {
  passwordKey: string;
  confirmPasswordKey: string;
};

const createPasswordMatchedValidator = <ValuesType>({
  passwordKey,
  confirmPasswordKey,
}: CreatePasswordMatchedValidatorProps) => {
  return (values: ValuesType) => {
    const schema = yup
      .object({
        [passwordKey]: yup.string(),
        [confirmPasswordKey]: yup.string(),
      })
      .test(
        "password-not-match",
        "Password not match.",
        (values) => values[passwordKey] === values[confirmPasswordKey]
      );
    try {
      schema.validateSync(values, { abortEarly: false });
    } catch (e: unknown) {
      return { [confirmPasswordKey]: (e as ErrorType).errors };
    }
  };
};

export const validate = {
  required: (value: string) => {
    const schema = yup.mixed().required("Cannot be empty.");
    try {
      schema.validateSync(value);
    } catch (e: unknown) {
      return (e as ErrorType).errors;
    }
  },
  email: (value: string) => {
    const schema = yup
      .string()
      .required("Email is required.")
      .email("Email is invalid.");
    try {
      schema.validateSync(value);
    } catch (e: unknown) {
      return (e as ErrorType).errors;
    }
  },

  password: (value: string) => {
    const schema = yup
      .string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters")
      .minUppercase(1, "Password must be at least 1 uppercase letter")
      .minLowercase(1, "Password must be at least 1 lower letter")
      .minNumbers(1, "Password must be at least 1 number")
      .minSymbols(1, "Password must be at least 1 symbol");

    try {
      schema.validateSync(value, { abortEarly: false });
    } catch (e: unknown) {
      return (e as ErrorType).errors;
    }
  },

  confirmPassword: (value: string) => {
    const schema = yup.string().required();
    try {
      schema.validateSync(value, { abortEarly: false });
    } catch (e: unknown) {
      return (e as ErrorType).errors;
    }
  },

  signUpPasswordMatched: createPasswordMatchedValidator<SignUpFormValues>({
    passwordKey: "password",
    confirmPasswordKey: "confirm_password",
  }),

  positiveNumber: (value: string) => {
    const schema = yup.number().positive().required();
    try {
      schema.validateSync(value);
    } catch (e: unknown) {
      return (e as ErrorType).errors;
    }
  },
};
