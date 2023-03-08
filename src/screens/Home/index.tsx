import { Container, ContainerMeal, BodyText } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { useState } from "react";
import { FlatList } from "react-native";
import { CardMeal } from "@components/CardMeal";
import { v4 as uuid } from "uuid";

type Meal = {
  name: string;
  inDiet: boolean;
  time: string;
  id: string;
  date: string;
};
export function Home() {
  const [meals, setMeals] = useState<Meal[]>([
    {
      name: "Arroz e Carne",
      inDiet: true,
      id: uuid(),
      time: "09:00",
      date: "10/05/2022",
    },
  ]);

  interface GroupedByDate {
    [key: string]: Meal[];
  }

  const groupedByDate: GroupedByDate = meals.reduce(
    (acc: GroupedByDate, item: Meal) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {}
  );

  console.log(groupedByDate["10/05/2022"]);

  const filterMealsInDiet = meals.filter((food) => food.inDiet);
  const percent = filterMealsInDiet.length * (100 / meals.length);

  function add() {
    setMeals([
      ...meals,
      {
        name: "Sorvete",
        inDiet: false,
        id: uuid(),
        time: "09:00",
        date: "10/05/2020",
      },
    ]);
  }
  return (
    <>
      <Container>
        <Header style={{ marginTop: 20 }} />

        <Percent
          style={{ marginTop: 20, marginBottom: 30 }}
          percent={percent}
          subTitle="das refeições dentro da dieta"
        />

        <ContainerMeal>
          <BodyText>Refeições</BodyText>

          <Button
            text="Nova refeição"
            style={{ marginTop: 10 }}
            onPress={add}
          />

          <FlatList
            data={meals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <BodyText style={{ marginTop: 20, fontWeight: "bold" }}>
                  {item.date.replaceAll("/", ".").slice(0, 6) +
                    item.date.slice(8, 10)}
                </BodyText>
                <CardMeal
                  name={item.name}
                  time={item.time}
                  inDiet={item.inDiet}
                />
              </>
            )}
          ></FlatList>
        </ContainerMeal>
      </Container>
    </>
  );
}
