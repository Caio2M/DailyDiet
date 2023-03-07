import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 5px 10px;
  flex-direction: row;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_300};
  border-radius: 5px;
`;

export const Time = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.BODY.XS}px;
  color: black;
  font-weight: bold;
  line-height: 30px;
`;

export const Meal = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.BODY.M}px; 
  color: ${({theme})=> theme.COLORS.GRAY_100};
  line-height: 30px;
`;