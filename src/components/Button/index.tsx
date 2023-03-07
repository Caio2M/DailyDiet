import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

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
