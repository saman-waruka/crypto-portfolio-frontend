import { useState } from "react";
import { FieldMetaState } from "react-final-form";

function useViewModel({ meta }: { meta: FieldMetaState<string> }) {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );

  function onClickToggle() {
    setPasswordType((prev) => {
      return prev === "password" ? "text" : "password";
    });
  }

  const isShowError = meta?.modified && meta?.error;

  return { passwordType, onClickToggle, isShowError };
}

export default useViewModel;
