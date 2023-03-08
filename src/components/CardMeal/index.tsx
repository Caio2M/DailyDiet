import { Container, Meal, Time, Div } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import theme from "../../theme";

type Props = {
  name: string;
  time: string;
  inDiet: boolean;
};

export function CardMeal({ name, time, inDiet }: Props) {
  return (
    <Container style={{ marginTop: 10 }}>
      <Div>
        <Time style={{ marginRight: 10 }}>{time}</Time>
        <Meal>| {name}</Meal>
      </Div>
      <MaterialIcons
        name="circle"
        style={{
          alignSelf: "center",
          color: inDiet ? theme.COLORS.MID_GREEN : theme.COLORS.MID_RED,
        }}
        size={14}
      />
    </Container>
  );
}
