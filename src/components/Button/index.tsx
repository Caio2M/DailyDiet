import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";
import { AntDesign } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  text: string;
};

export function Button({ text, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
    </Container>
  );
}
