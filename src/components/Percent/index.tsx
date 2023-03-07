import { TouchableOpacityProps } from "react-native";
import { Container, Title, Text } from "./styles";

type Props = TouchableOpacityProps & {
  percent: number;
  subTitle: string;
};

export function Percent({ percent, subTitle, ...rest }: Props) {
  var isPositive = true;
  if (percent <= 50) {
    isPositive = false;
  }
  const percentTreaty = isNaN(percent) // VERIFICA SE O VALOR É NULO
    ? (percent = 0) // SE FOR NULO RETORNA PERCENT = 0
    : Number.isInteger(percent) // SE NÃO FOR NULO VERIFICA SE O NUMERO É INTEIRO
    ? percent // SE FOR INTEIRO RETORNA O PERCENT
    : Number(percent.toFixed(2)); // SE NÃO FOR INTEIRO ELE TRATA PRA LIMITAR AS CASAS DECIMAIS DEPOIS DA VIRGULA
  return (
    <Container isPositive={isPositive} {...rest}>
      <Title>{percentTreaty + "%"}</Title>
      <Text>{subTitle}</Text>
    </Container>
  );
}
