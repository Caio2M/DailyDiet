import { useNavigation } from "@react-navigation/native";
import {
  BackButton,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
  Text,
  Div,
} from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDiet } from "../../DataFormContext";
import theme from "../../theme";

export function Statistics() {
  const { diet } = useDiet();

  const navigation = useNavigation();

  const filterdietInDiet = diet.filter((food) => food.inDiet === true);

  const filterMealOutDiet = diet.filter((food) => food.inDiet === false);

  const allMealsOutDiet = filterMealOutDiet.length;

  const allMeals = diet.length;

  const allMealsInDiet = filterdietInDiet.length;

  let percent = filterdietInDiet.length * (100 / diet.length);

  var isPositive = true;

  if (percent < 50) {
    isPositive = false;
  }
  const percentTreaty = isNaN(percent) // VERIFICA SE O VALOR É NULO
    ? (percent = 0) // SE FOR NULO RETORNA PERCENT = 0
    : Number.isInteger(percent) // SE NÃO FOR NULO VERIFICA SE O NUMERO É INTEIRO
    ? percent // SE FOR INTEIRO RETORNA O PERCENT
    : Number(percent.toFixed(2)); // SE NÃO FOR INTEIRO ELE TRATA PRA LIMITAR AS CASAS DECIMAIS DEPOIS DA VIRGULA

  const arrayInDiet = diet.map((a) => a.inDiet);

  function maxTrueSeqLen(arrayInDiet: any) {
    let maxSeqLen = 0;
    let curSeqLen = 0;
    for (let i = 0; i < arrayInDiet.length; i++) {
      if (arrayInDiet[i]) {
        curSeqLen++;
      } else {
        maxSeqLen = Math.max(maxSeqLen, curSeqLen);
        curSeqLen = 0;
      }
    }
    maxSeqLen = Math.max(maxSeqLen, curSeqLen);
    return maxSeqLen;
  }
  const maxLen = maxTrueSeqLen(arrayInDiet);

  return (
    <Container
      style={{
        backgroundColor: isPositive
          ? theme.COLORS.MID_GREEN
          : theme.COLORS.MID_RED,
      }}
    >
      <Header>
        <BackButton onPress={() => navigation.navigate("home")}>
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={isPositive ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED}
          />
        </BackButton>
        <Title>{percentTreaty + "%"}</Title>
        <SubTitle> das refeições dentro da dieta</SubTitle>
      </Header>
      <Content>
        <SubTitle style={{ fontWeight: "bold", marginBottom: 20 }}>
          {" "}
          Estatísticas gerais
        </SubTitle>
        <Div // sequencia de pratos dentro da dieta
          style={{
            width: "100%",
            backgroundColor: theme.COLORS.GRAY_600,
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Title>{maxLen}</Title>
          <SubTitle>melhor sequência de pratos dentro da dieta</SubTitle>
        </Div>

        <Div // refeições registradas
          style={{
            width: "100%",
            backgroundColor: theme.COLORS.GRAY_600,
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Title>{allMeals}</Title>
          <SubTitle>refeições registradas</SubTitle>
        </Div>

        <Div
          style={{
            width: "100%",
            backgroundColor: "transparent",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Div // refeições dentro da dieta
            style={{
              width: "48%",
              backgroundColor: theme.COLORS.MID_GREEN,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Title>{allMealsInDiet}</Title>
            <SubTitle>refeições dentro da dieta</SubTitle>
          </Div>

          <Div // refeições fora da dieta
            style={{
              width: "48%",
              backgroundColor: theme.COLORS.LIGHT_RED,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Title>{allMealsOutDiet} </Title>
            <SubTitle>refeições fora da dieta</SubTitle>
          </Div>
        </Div>
      </Content>
    </Container>
  );
}
