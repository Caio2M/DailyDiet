import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.TITLE.G}px;
  text-align: center;

`;

export const Img = styled.Image`
  width: 224px;
  height: 288px;
`;

export const Text = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.BODY.M}px;
  text-align: center;
  flex-direction: row;
`;