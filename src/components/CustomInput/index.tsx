import { Input, Message } from "./styles";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  useForm,
} from "react-hook-form";

interface CustomInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  placeHolder: string;
  errorMessage?: string;
  isInvalid?: boolean;
}

export function CustomInput<T extends FieldValues>({
  name,
  control,
  placeHolder,
  errorMessage,
  isInvalid = false,
}: CustomInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <>
            <Input
              isInvalid={Boolean(errorMessage)}
              onChangeText={onChange}
              onBlur={onBlur}
              value={String(value)}
              placeholder={placeHolder}
            />

            <Message>{errorMessage || ""}</Message>
          </>
        );
      }}
    />
  );
}
