import { Container, ContainerMeal, BodyText } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { CustomButton } from "@components/CustomButton";
import { SectionList } from "react-native";
import { CardMeal } from "@components/CardMeal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDiet } from "../../DataFormContext";
import { Ionicons } from "@expo/vector-icons";

type RouteParams = {
  inDiet: boolean;
};

export function Home() {
  const { diet } = useDiet();

  const navigation = useNavigation();

  const filterdietInDiet = diet.filter((food) =>
    food.data.some((item) => item.inDiet)
  );

  const percent = filterdietInDiet.length * (100 / diet.length);

  function toForm() {
    navigation.navigate("newMeal");
  }

  function toStatistic() {
    navigation.navigate("statistic");
  }

  return (
    <>
      <Container>
        <Header style={{ marginTop: 20 }} />

        <Percent
          style={{ marginTop: 20, marginBottom: 30 }}
          percent={percent}
          subTitle="das refeições dentro da dieta"
          onPress={toStatistic}
        />

        <ContainerMeal>
          <BodyText>Refeições</BodyText>

          <CustomButton
            text="Nova refeição"
            style={{ marginTop: 10 }}
            onPress={toForm}
            nameIcon="add"
            icon={
              <Ionicons
                name={"add"}
                size={20}
                style={{ fontWeight: "bold", color: "white" }}
              />
            }
            size={20}
            color="white"
          />

          <SectionList
            style={{ marginTop: 30 }}
            showsVerticalScrollIndicator={false}
            sections={diet}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardMeal
                name={item.name}
                time={item.time}
                inDiet={item.inDiet}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <BodyText style={{ marginTop: 20, fontWeight: "bold" }}>
                {title.replaceAll("/", ".").slice(0, 6) + title.slice(8, 10)}
              </BodyText>
            )}
          />
        </ContainerMeal>
      </Container>
    </>
  );
}
