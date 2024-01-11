export type SetValueFunction<T = string> = (
  inputName: string,
  inputValue: T | undefined
) => void;
