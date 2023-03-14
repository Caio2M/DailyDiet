import { FlatList, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)<TouchableOpacityProps>`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=> theme.COLORS.GRAY_200};
  flex-direction: row;

  border-radius: 10px;

  padding: 15px;
`;

export const Text = styled.Text`
  color: ${({theme})=> theme.COLORS.WHITE};
  font-weight: 400;
  text-align: center;
`;