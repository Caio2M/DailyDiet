import styled from "styled-components/native";


export const Container = styled.View`
  background-color: ${({theme})=> theme.COLORS.MID_GREEN};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Text = styled.Text`
  text-align: center;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  font-size: ${({theme})=> theme.FONT_SIZE.TITLE.G}px;
`;

export const FormContainer = styled.View`
  height: 40%;
  width: 100%;
  justify-content: space-between;
`;
