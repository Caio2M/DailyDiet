import { Container, FormContainer } from "./styles";
import * as yup from "yup";
import { CustomInput } from "@components/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, View, Keyboard } from "react-native";
import { Header } from "@components/Header";

export function Home() {
  const yupSchema = yup.object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .required("O e-mail é obrigatório")
      .email("E-mail inválido"),
    age: yup.string().required("A idade é obrigatória"),
  });

  type FormProps = yup.InferType<typeof yupSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      nome: "",
      email: "",
      age: "",
    },
  });
  function onSubmit(form: FormProps) {
    Keyboard.dismiss();
    console.log(form);
    reset();
  }

  return (
    <>
      <Container>
        <FormContainer>
          <CustomInput
            errorMessage={errors.nome?.message}
            placeHolder="Digite seu nome..."
            control={control}
            name="nome"
          />
          <CustomInput
            errorMessage={errors.email?.message}
            placeHolder="Digite seu e-mail..."
            control={control}
            name="email"
          />
          <CustomInput
            errorMessage={errors.age?.message}
            placeHolder="Digite sua idade..."
            control={control}
            name="age"
          />
        </FormContainer>
        <View style={{ height: 50 }} />
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </Container>
    </>
  );
}
