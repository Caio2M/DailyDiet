import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.COLORS.MID_GREEN};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.COLORS.WHITE};
`;

export const Text = styled.Text`
  font-size: ${({theme})=> theme.COLORS.GRAY_100};
`;