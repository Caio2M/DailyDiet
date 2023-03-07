
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 30px;
`;

export const BodyText = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.BODY.M}px;
  color: ${({theme})=> theme.COLORS.GRAY_100};
`;

export const ContainerMeal = styled.View`
  /* background-color: red; */
  flex: 2;
`;



