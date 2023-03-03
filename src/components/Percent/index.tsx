import { Container, Title, Text, Icon } from "./styles";

type Props = {
  percent: string;
  subTitle: string;
  isPositive?: boolean;
};

export function Percent({ percent, subTitle, isPositive }: Props) {
  return (
    <Container isPositive={isPositive}>
      <Icon />
      <Title>{percent}</Title>
      <Text>{subTitle}</Text>
    </Container>
  );
}
