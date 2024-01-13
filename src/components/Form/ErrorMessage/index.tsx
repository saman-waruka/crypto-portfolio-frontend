import { ReactNode } from "react";

const FormErrorMessage = ({ children }: { children: ReactNode }) => {
  return <div className="mt-2 text-UI-RED text-sm text-center">{children}</div>;
};

export default FormErrorMessage;
