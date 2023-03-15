import { Container, Text, Title, ButtonContainer, Button } from "./styles";
import { TextProps } from "react-native/Libraries/Text/Text";
import theme from "../../theme";

type Props = {
  title: string;
  firstButton: string;
  secondButton: string;
  onPressFirstButton: () => void;
  onPressSecondButton: () => void;
};

export function Message({
  title,
  firstButton,
  secondButton,
  onPressFirstButton,
  onPressSecondButton,
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonContainer>
        <Button
          onPress={onPressFirstButton}
          style={{
            backgroundColor: "white",
            borderColor: theme.COLORS.GRAY_100,
            borderWidth: 2,
          }}
        >
          <Text>{firstButton}</Text>
        </Button>
        <Button onPress={onPressSecondButton}>
          <Text style={{ color: "white" }}>{secondButton}</Text>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
