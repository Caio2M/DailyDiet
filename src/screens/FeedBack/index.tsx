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
  const { diet } = useDiet();

  const route = useRoute();
  const { inDiet } = route.params as RouteParams;

  const mealCreated = diet.length - 1;
  const isPositive = diet
    .map((food) => food.data)
    [mealCreated].some((item) => item.inDiet);

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
            color: isPositive ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED,
            marginBottom: 15,
            fontWeight: "600",
          }}
        >
          {isPositive ? titlePositive : titleNegative}
        </Title>
        <Content style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text>{isPositive ? textPositive1 : textNegative1}</Text>
          <Text style={{ fontWeight: "bold" }}>
            {isPositive ? textPositive2 : textNegative2}
          </Text>
          <Text>{isPositive ? textPositive3 : textNegative3}</Text>
        </Content>
        <Text>{isPositive ? "" : textNegative4}</Text>
        <Img
          style={{ marginBottom: 40, marginTop: 40 }}
          source={isPositive ? ImagePositive : ImageNegative}
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
