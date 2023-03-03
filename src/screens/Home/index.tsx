import { Container, ContainerText, Text } from "./styles";
import { Header } from "@components/Header";
import { View } from "react-native";
import { Percent } from "@components/Percent";

export function Home() {
  return (
    <>
      <Container>
        <View style={{ height: 20 }} />
        <Header />
        <View style={{ height: 20 }} />
        <ContainerText>
          <Percent
            percent="98,86%"
            subTitle="das refeições dentro da dieta"
            isPositive
          />
          <Text>Container</Text>
        </ContainerText>
      </Container>
    </>
  );
}
