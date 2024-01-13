import { Field, Form } from "react-final-form";
import { validate } from "../../core/form/validator";
import TextInput from "../../components/Form/TextInput";
import PasswordInput from "../../components/Form/PasswordInput";
import useLoginViewModel from "./loginViewModel";
import { LogoFull } from "../../components/Logo";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTE } from "../../core/constants/routePaths";
import FormErrorMessage from "../../components/Form/ErrorMessage";

const Login = () => {
  const { submitForm, errorMessage } = useLoginViewModel();

  return (
    <Form
      onSubmit={submitForm}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <form
          onSubmit={handleSubmit}
          className="h-[100vh] flex flex-col justify-center"
        >
          <div className="w-[350px] mx-auto flex flex-col">
            <LogoFull className="self-center" width={100} height={100} />
            <div className="text-center mt-10">
              <Field
                name="email"
                component={TextInput}
                placeholder="Email"
                validate={validate.email}
                inputClassName="placeholder-UI-DARK-PURPLE bg-UI-SLATE focus:border-0 border border-UI-BORDER px-6 h-12 rounded-3xl w-full text-UI-WHITE"
              />
            </div>
            <div className="mt-3 text-center">
              <Field
                name="password"
                component={PasswordInput}
                placeholder="Password"
                validate={validate.password}
                inputClassName="placeholder-UI-DARK-PURPLE bg-UI-SLATE focus:border-0 border border-UI-BORDER px-6 h-12 rounded-3xl w-full text-UI-WHITE"
              />
            </div>
            <Link
              to={PUBLIC_ROUTE.REGISTER}
              className="mt-2 text-slate-400 w-fit self-end mr-4"
            >
              Register
            </Link>
            {errorMessage && (
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
            )}

            <button
              type="submit"
              className="rounded-3xl w-full mt-8 bg-UI-BLUE h-12 text-UI-WHITE disabled:bg-slate-700 disabled:cursor-not-allowed disabled:text-slate-950"
              disabled={submitting || pristine || invalid}
            >
              Sign In
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default Login;
