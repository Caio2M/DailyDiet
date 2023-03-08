import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  text-align: center;
  background-color: ${({theme})=> theme.COLORS.GRAY_200};

  border-radius: 10px;

  padding: 15px;
`;

export const Text = styled.Text`
  color: ${({theme})=> theme.COLORS.WHITE};
  font-weight: 400;
  text-align: center;
`;