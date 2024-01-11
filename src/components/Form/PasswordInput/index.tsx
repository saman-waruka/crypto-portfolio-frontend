import { FieldRenderProps } from "react-final-form";
import Loading from "../../Loading";
import useViewModel from "./viewModel";
import { EyeOffIcon, EyeOnIcon } from "../../icons";

function PasswordInput({
  input,
  meta,
  label,
  placeholder,
  disabled = false,
  className,
  isVisibilityToggleShow = true,
  isLoading = false,
  inputClassName,
}: FieldRenderProps<string> & {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  isVisibilityToggleShow: boolean;
  isPasswordRequirementShow: boolean;
  isLoading: boolean;
  inputClassName: string;
}) {
  const { passwordType, onClickToggle, isShowError } = useViewModel({ meta });

  return (
    <div className={className ?? ""}>
      {label && (
        <>
          {isLoading ? (
            <Loading className="!mb-1.5 w-20" />
          ) : (
            <label className="text-sm font-medium text-gray-700 ">
              <p className="mb-1">{label}</p>
            </label>
          )}
        </>
      )}
      <div className="relative">
        {isLoading ? (
          <Loading className="!h-10 w-full" />
        ) : (
          <>
            <input
              {...input}
              disabled={disabled}
              className={inputClassName}
              type={passwordType}
              placeholder={placeholder ?? undefined}
              aria-invalid={
                (meta.active || meta.touched) &&
                (meta.error ||
                  (meta.submitError && !meta.modifiedSinceLastSubmit))
                  ? "true"
                  : "false"
              }
            />

            <div className="absolute right-3.5 top-1/2 flex -translate-y-1/2 gap-2">
              {isVisibilityToggleShow && (
                <button
                  type="button"
                  onClick={onClickToggle}
                  className="text-black"
                  tabIndex={-1}
                >
                  {passwordType === "password" ? <EyeOffIcon /> : <EyeOnIcon />}
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {isShowError && meta.touched && meta.error && (
        <div className="mt-1.5 text-UI-RED text-sm text-left">
          {meta.error?.map((text: string, index: number) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}
      {meta.submitError && !meta.modifiedSinceLastSubmit && (
        <div className="mt-1.5 text-sm text-error-500">
          {meta.submitError?.[0]}
        </div>
      )}
    </div>
  );
}

export default PasswordInput;
