import { Container, Meal, Time, Div } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import theme from "../../theme";
import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
  name: string;
  time: string;
  inDiet: boolean;
  id: string;
};

export function CardMeal({ name, time, inDiet, id }: Props) {
  const navigation = useNavigation();
  return (
    <Container
      onPress={() => navigation.navigate("meal", { id: id })}
      style={{ marginTop: 10 }}
    >
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
