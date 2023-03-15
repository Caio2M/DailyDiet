import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  padding: 35px 25px 25px;
  width: 85%;
  justify-content: space-between;
  height: 200px;
  margin: 0 auto;
  border-radius: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px;
  align-items: center;
  width: 48%;
  background-color: ${({theme})=> theme.COLORS.GRAY_200};
  border-radius: 5px;
`;


export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.TITLE.S}px;
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-weight: bold;
  text-align: center;
  padding: 10px 20px 20px;
`;

export const Text = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.BODY.M}px;
`;