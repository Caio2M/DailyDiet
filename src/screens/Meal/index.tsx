import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  Content,
  Header,
  Title,
  Text,
  BackButton,
  BodyTitle,
  InDietContainer,
  ButtonContainer,
  Button,
  Image,
} from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDiet } from "../../DataFormContext";
import theme from "../../theme";
import Icon from "../../assets/Icon.png";
import Icon2 from "../../assets/Icon2.png";
import { Modal, View } from "react-native";
import { useState } from "react";
import { Message } from "@components/Message";

type RouteParams = {
  id: string;
};

export function Meal() {
  const [isModelVisible, setIsModelVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;
  const { diet, setDiet } = useDiet();

  const name = diet.filter((item) => item.data[0].id === id)[0].data[0].name;
  const description = diet.filter((item) => item.data[0].id === id)[0].data[0]
    .description;
  const inDiet = diet.filter((item) => item.data[0].id === id)[0].data[0]
    .inDiet;
  const date = diet.filter((item) => item.data[0].id === id)[0].data[0].date;
  const time = diet.filter((item) => item.data[0].id === id)[0].data[0].time;

  function handleButtonEdit() {
    navigation.navigate("edit", {
      id: id,
    });
  }

  function handleButtonDelete() {
    setIsModelVisible(true);
  }

  function onDelete() {
    setIsModelVisible(false);

    navigation.navigate("home");
  }

  function onCancel() {
    setIsModelVisible(false);
  }

  return (
    <Container
      style={{
        backgroundColor: inDiet
          ? theme.COLORS.LIGHT_GREEN
          : theme.COLORS.LIGHT_RED,
      }}
    >
      <Header>
        <BackButton onPress={() => navigation.navigate("home")}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </BackButton>
        <Title>Refeição</Title>
      </Header>
      <Content>
        <BodyTitle
          style={{ fontSize: theme.FONT_SIZE.TITLE.M, marginBottom: 10 }}
        >
          {name}
        </BodyTitle>
        <Text style={{ marginBottom: 20 }}>{description}</Text>
        <BodyTitle
          style={{ fontSize: theme.FONT_SIZE.TITLE.XS, marginBottom: 10 }}
        >
          Data e hora
        </BodyTitle>
        <Text style={{ fontSize: theme.FONT_SIZE.TITLE.XS, marginBottom: 14 }}>
          {date} às {time}
        </Text>
        <InDietContainer>
          <MaterialIcons
            name="circle"
            size={8}
            color={inDiet ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED}
          />
          <Text
            style={{
              fontSize: theme.FONT_SIZE.BODY.S,
              color: theme.COLORS.GRAY_100,
            }}
          >
            {inDiet ? "dentro da dieta" : "fora da dieta"}
          </Text>
        </InDietContainer>

        <Modal visible={isModelVisible} transparent>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              backgroundColor: "#00000048",
            }}
          >
            <Message
              onPressFirstButton={onCancel}
              onPressSecondButton={onDelete}
              firstButton="Cancelar"
              secondButton="Sim, excluir"
              title="Deseja realmente excluir o registro da refeição"
            />
          </View>
        </Modal>
      </Content>
      <ButtonContainer>
        <Button style={{ marginBottom: 10 }} onPress={handleButtonEdit}>
          {/* BOTÃO PARA EDITAR A REFEIÇÃO*/}
          <Image source={Icon} />
          <Text style={{ color: "white" }}>Editar refeição</Text>
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            borderColor: theme.COLORS.GRAY_200,
            borderWidth: 2,
          }}
          onPress={handleButtonDelete}
        >
          {/* BOTÃO PARA EXCLUIR A REFEIÇÃO*/}
          <Image source={Icon2} />
          <Text style={{ color: theme.COLORS.GRAY_100 }}>Excluir refeição</Text>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
