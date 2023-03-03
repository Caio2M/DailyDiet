import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 25px;
`;

export const ContainerText = styled.View`
  flex: 2;
  background-color: red;
`;

export const Text = styled.Text`
  color: black;
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE.G}px;
  text-align: center;
`;
