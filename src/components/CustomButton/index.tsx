import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";

type Props = TouchableOpacityProps & {
  text: string;
  size?: number;
  color?: string;
  nameIcon?: keyof typeof Ionicons.glyphMap;
  icon?: ReactNode;
};

export function CustomButton({
  icon,
  color,
  size,
  nameIcon,
  text,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      {icon}
      <Text>{text}</Text>
    </Container>
  );
}
