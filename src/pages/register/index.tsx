import { Field, Form } from "react-final-form";
import { LogoFull } from "../../components/Logo";
import { validate } from "../../core/form/validator";
import useSignUpViewModel from "./registerViewModel";
import TextInput from "../../components/Form/TextInput";
import PasswordInput from "../../components/Form/PasswordInput";

const Register = () => {
  const { submitForm } = useSignUpViewModel();

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
                name="name"
                component={TextInput}
                placeholder="Name"
                validate={validate.required}
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
              Register
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default Register;
