import type { ReactNode, RefObject } from "react";
import type { FieldRenderProps } from "react-final-form";
import Loading from "../../Loading";

export type TextInputProps = FieldRenderProps<string> & {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
  readOnly?: boolean;
  isLoading?: boolean;
  inputClassName?: string;
  prefix?: ReactNode;
  inputRef?: RefObject<HTMLInputElement>;
  hideDefaultError?: boolean;
  customInvalid?: boolean;
};

function TextInput({
  input,
  meta,
  label,
  placeholder,
  disabled = false,
  maxLength = undefined,
  className = "",
  readOnly = false,
  isLoading = false,
  inputClassName,
  inputRef,
}: TextInputProps) {
  const isInvalid = (meta.dirty || meta.touched) && meta.error;
  return (
    <>
      <div className={className}>
        {label && (
          <>
            {isLoading ? (
              <Loading className="!mb-1.5 w-20" />
            ) : (
              <label className="text-sm font-medium text-gray-700">
                <p className="mb-1.5">{label}</p>
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
                ref={inputRef}
                {...input}
                disabled={disabled}
                className={inputClassName}
                type={input.type}
                placeholder={placeholder ?? undefined}
                maxLength={maxLength}
                aria-invalid={isInvalid ? "true" : "false"}
                readOnly={readOnly}
              />
            </>
          )}
        </div>
        {isInvalid && (
          <div className="mt-1.5 flex text-sm">
            {isInvalid && (
              <p className="mr-auto text-UI-RED">{meta?.error?.[0]}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default TextInput;
