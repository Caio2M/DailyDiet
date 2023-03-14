import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type Props = {
  isPositive?: boolean;
}

export const Container = styled(TouchableOpacity)`
${({theme})=> css<Props>`
  width: 100%;
  padding: 5px 5px 20px 5px;
  justify-content: center;

  background-color: ${({isPositive}) => isPositive ? theme.COLORS.MID_GREEN : theme.COLORS.MID_RED};;

  border-radius: 10px;
`};
`;

export const Title = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.TITLE.G}px;
  line-height: 32px;
  text-align: center;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.S}px;
  text-align: center;
`;

