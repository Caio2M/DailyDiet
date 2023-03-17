import {
  Container,
  Content,
  Title,
  BackButton,
  Header,
  Div,
  Form,
  TwoDiv,
  Text,
  Button,
} from "./styles";
import * as yup from "yup";
import { Keyboard, Modal, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CustomInput } from "@components/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import theme from "../../theme";
import { SetStateAction, useState } from "react";
import { CustomButton } from "@components/CustomButton";
import DatePicker from "react-native-modern-datepicker";
import { DataProps, DietProps, useDiet } from "../../DataFormContext";

type RouteParams = {
  nameByMeal: string;
  descriptionByMeal: string | undefined;
  id: string;
  dateByMeal: string;
  timeByMeal: string;
  inDietByMeal: boolean;
};

export function Edit() {
  const navigation = useNavigation();
  const { diet, setDiet } = useDiet();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const item = diet.find((a) => a.id === id) || ({} as DataProps);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTimeVisible, setModalTimeVisible] = useState(false);
  const [dateForm, setDateForm] = useState(item.date);
  const [timeForm, setTimeForm] = useState(item.time);

  const [inDiet, setInDiet] = useState(item?.inDiet);

  const yupSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().max(200).required(),
    date: yup.string().required(),
    hour: yup.string().required(),
  });

  function handleTime(time: string) {
    setTimeForm(time);
    setModalTimeVisible(!modalTimeVisible);
  }

  function handleDate(date: string) {
    setDateForm(date);
    setModalVisible(!modalVisible);
  }

  type FormProps = yup.InferType<typeof yupSchema>;

  const parts = dateForm?.split("/");
  const partsIsReverse = parts
    ? parts[0].length === 4
      ? parts.reverse()
      : parts
    : "";
  const newDate = partsIsReverse ? partsIsReverse.join("/") : "";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      name: item?.name,
      description: item?.description,
      date: dateForm,
      hour: timeForm,
    },
  });

  function onSubmit(form: FormProps) {
    const update = {
      name: form.name,
      description: form.description,
      date: newDate,
      time: timeForm,
      inDiet: inDiet,
    };

    const a: DataProps[] = diet.map((a) =>
      a.id === id ? { ...a, ...update } : a
    );

    setDiet(a);

    navigation.navigate("meal", { id: id });
  }

  function isNotInDiet() {
    setInDiet(false);
  }

  function isInDiet() {
    setInDiet(true);
  }

  return (
    <Container onTouchStart={Keyboard.dismiss}>
      <Header>
        <BackButton onPress={() => navigation.navigate("meal", { id: id })}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </BackButton>
        <Title>Editar refeição</Title>
      </Header>
      <Content>
        <Form>
          <Text>Nome</Text>
          <CustomInput
            errorMessage={errors.name?.message}
            control={control}
            name="name"
            style={{
              borderColor: theme.COLORS.GRAY_500,
              borderRadius: 5,
              color: "black",
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 10,
              paddingBottom: 10,
              fontSize: theme.FONT_SIZE.BODY.M,
            }}
            cursorColor="black"
          />
          <Text>Descrição</Text>
          <CustomInput
            errorMessage={errors.description?.message}
            control={control}
            name="description"
            multiline
            numberOfLines={5}
            style={{
              borderColor: theme.COLORS.GRAY_500,
              borderRadius: 5,
              textAlignVertical: "top",
              color: "black",
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 10,
              paddingBottom: 10,
              fontSize: theme.FONT_SIZE.BODY.M,
            }}
            cursorColor="black"
          />
          <TwoDiv>
            <Div>
              <Text>Data</Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Modal
                  animationType="slide"
                  transparent
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(!modalVisible)}
                  style={{}}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#00000093",
                    }}
                  >
                    <DatePicker
                      options={{
                        backgroundColor: "#ffffff",
                        textHeaderColor: "#000000",
                        textDefaultColor: "#000000",
                        selectedTextColor: "#ffffff",
                        mainColor: "#4d4d4d",
                        textSecondaryColor: "#000000",
                      }}
                      current={dateForm}
                      selected={dateForm}
                      mode="calendar"
                      minuteInterval={30}
                      style={{ borderRadius: 10 }}
                      onDateChange={handleDate}
                    />
                  </View>
                </Modal>
              </View>
              <CustomInput
                control={control}
                name="date"
                style={{
                  borderColor: theme.COLORS.GRAY_500,
                  borderRadius: 5,
                  color: "black",
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontSize: theme.FONT_SIZE.BODY.M,
                }}
                value={newDate}
                onPressIn={() => setModalVisible(true)}
                cursorColor="black"
              />
            </Div>
            <Div>
              <Text>Hora</Text>

              <Modal
                animationType="slide"
                transparent
                visible={modalTimeVisible}
                onRequestClose={() => setModalTimeVisible(!modalTimeVisible)}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00000093",
                  }}
                >
                  <DatePicker
                    options={{
                      backgroundColor: "#ffffff",
                      textHeaderColor: "#000000",
                      textDefaultColor: "#000000",
                      selectedTextColor: "#ffffff",
                      mainColor: "#4d4d4d",
                      textSecondaryColor: "#000000",
                    }}
                    locale="pt-BR"
                    mode="time"
                    minuteInterval={1}
                    style={{ borderRadius: 10 }}
                    onTimeChange={handleTime}
                  />
                </View>
              </Modal>

              <CustomInput
                errorMessage={errors.hour?.message}
                control={control}
                name="hour"
                style={{
                  borderColor: theme.COLORS.GRAY_500,
                  borderRadius: 5,
                  color: "black",
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontSize: theme.FONT_SIZE.BODY.M,
                }}
                onPressIn={() => setModalTimeVisible(true)}
                cursorColor="black"
                value={timeForm}
              />
            </Div>
          </TwoDiv>
          <Text style={{ width: "100%", marginBottom: 5 }}>
            Está dentro da dieta?
          </Text>
          <TwoDiv>
            <Div>
              <Button
                onPress={isInDiet}
                style={{
                  backgroundColor:
                    inDiet === true
                      ? theme.COLORS.LIGHT_GREEN
                      : theme.COLORS.GRAY_600,
                  borderColor:
                    inDiet === true
                      ? theme.COLORS.DARK_GREEN
                      : theme.COLORS.GRAY_600,
                  borderWidth: 1,
                }}
              >
                <MaterialIcons
                  name="circle"
                  color={theme.COLORS.DARK_GREEN}
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{
                    fontSize: theme.FONT_SIZE.BODY.M,
                  }}
                >
                  Sim
                </Text>
              </Button>
            </Div>
            <Div>
              <Button
                onPress={isNotInDiet}
                style={{
                  backgroundColor:
                    inDiet === false
                      ? theme.COLORS.LIGHT_RED
                      : theme.COLORS.GRAY_600,
                  borderColor:
                    inDiet === false
                      ? theme.COLORS.DARK_RED
                      : theme.COLORS.GRAY_600,
                  borderWidth: 1,
                }}
              >
                <MaterialIcons
                  name="circle"
                  color={theme.COLORS.DARK_RED}
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{
                    fontSize: theme.FONT_SIZE.BODY.M,
                  }}
                >
                  Não
                </Text>
              </Button>
            </Div>
          </TwoDiv>
        </Form>
        <CustomButton
          icon
          text={"Salvar alterações"}
          onPress={handleSubmit(onSubmit)}
        />
      </Content>
    </Container>
  );
}
