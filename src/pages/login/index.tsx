import { Field, Form } from "react-final-form";
import { validate } from "../../core/form/validator";
import TextInput from "../../components/Form/TextInput";
import PasswordInput from "../../components/Form/PasswordInput";
import useLoginViewModel from "./loginViewModel";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const { submitForm } = useLoginViewModel();

  return (
    <Form
      onSubmit={submitForm}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <form
          onSubmit={handleSubmit}
          className="h-[100vh] flex flex-col justify-center"
        >
          <div className="w-[350px] mx-auto flex flex-col">
            <div className="text-center">
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
            <button
              type="submit"
              className="rounded-3xl w-full mt-8 bg-UI-BLUE h-12 text-UI-WHITE disabled:bg-slate-700 disabled:cursor-not-allowed disabled:text-slate-950"
              disabled={submitting || pristine || invalid}
            >
              Sign In
            </button>
            <ToastContainer />
          </div>
        </form>
      )}
    />
  );
};

export default Login;
