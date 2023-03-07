import { Container, Meal, Time } from "./styles";

type Props = {
  name: string;
  time: string;
};

export function CardMeal({ name, time }: Props) {
  return (
    <Container style={{ marginTop: 10 }}>
      <Time style={{ marginRight: 10 }}>{time}</Time>
      <Meal>| {name}</Meal>
    </Container>
  );
}
