import { Container, Image, Logo } from "./styles";

import imgLogo from "@assets/Logo.png";
import img from "@assets/image.jpg";

import { ViewProps } from "react-native";

type Props = ViewProps & {};

export function Header({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Logo source={imgLogo} />
      <Image source={img} />
    </Container>
  );
}
