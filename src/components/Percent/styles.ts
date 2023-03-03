import theme from "../../theme";
import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

type Props = {
  isPositive?: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 10px 5px;

  background-color: ${({isPositive}) => isPositive ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED};;

  border-radius: 10px;
`;

export const Title = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.TITLE.G}px;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.S}px;
  text-align: center;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({theme, isPositive})=> ({
  size: 24,
  color: 'green',
  weight: 'fill'
}))`
  /* margin-right: 20px; */
`;