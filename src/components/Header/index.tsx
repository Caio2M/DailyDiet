import { Container, Image, Logo } from "./styles";

import imgLogo from "@assets/Logo.png";
import img from "@assets/image.jpg";

export function Header() {
  return (
    <Container>
      <Logo source={imgLogo} />
      <Image source={img} />
    </Container>
  );
}
