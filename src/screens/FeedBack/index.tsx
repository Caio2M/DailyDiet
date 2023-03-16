import { Container, Content, Img, Text, Title } from "./styles";
import { CustomButton } from "../../components/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import ImagePositive from "../../assets/Illustration.png";
import ImageNegative from "../../assets/Illustration2.png";
import { useDiet } from "../../DataFormContext";
import theme from "../../theme";

type RouteParams = {
  inDiet: boolean;
};

export function FeedBack() {
  const navigation = useNavigation();

  const route = useRoute();
  const { inDiet } = route.params as RouteParams;

  const titlePositive = "Continue assim!";
  const textPositive1 = "Você continua ";
  const textPositive2 = "dentro da dieta. ";
  const textPositive3 = "Muito Bem!";

  const titleNegative = "Que pena!";
  const textNegative1 = "Você ";
  const textNegative2 = "Saiu da dieta ";
  const textNegative3 = "dessa vez, mas continue ";
  const textNegative4 = "se esforçando e não desista! ";

  return (
    <Container>
      <Content>
        <Title
          style={{
            color: inDiet ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED,
            marginBottom: 15,
            fontWeight: "600",
          }}
        >
          {inDiet ? titlePositive : titleNegative}
        </Title>
        <Content style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text>{inDiet ? textPositive1 : textNegative1}</Text>
          <Text style={{ fontWeight: "bold" }}>
            {inDiet ? textPositive2 : textNegative2}
          </Text>
          <Text>{inDiet ? textPositive3 : textNegative3}</Text>
        </Content>
        <Text>{inDiet ? "" : textNegative4}</Text>
        <Img
          style={{ marginBottom: 40, marginTop: 40 }}
          source={inDiet ? ImagePositive : ImageNegative}
        />
        <CustomButton
          text={"Ir para a página inicial"}
          onPress={() => navigation.navigate("home")}
          style={{
            width: "auto",
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 5,
          }}
        />
      </Content>
    </Container>
  );
}
