import { Input, Message } from "./styles";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  useForm,
} from "react-hook-form";
import { TextInputProps } from "react-native";

interface CustomInputProps<T extends FieldValues> extends TextInputProps {
  name: Path<T>;
  control: Control<T>;
  placeHolder?: string;
  errorMessage?: string;
  isInvalid?: boolean;
}

export function CustomInput<T extends FieldValues>({
  name,
  control,
  placeHolder,
  errorMessage,
  isInvalid = false,
  ...Props
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
              {...Props}
            />

            <Message>{errorMessage || ""}</Message>
          </>
        );
      }}
    />
  );
}
