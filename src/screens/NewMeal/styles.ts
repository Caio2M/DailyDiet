import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.COLORS.GRAY_500};
`;

export const Content = styled.View`
  flex:7;
  background-color: ${({theme})=> theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 25px;
`;

export const Header = styled.View`
  width: 89%;
  flex:1;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
`;

export const Form = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 10px;
`;

export const Div = styled.View`
  width: 48%;
`;

export const TwoDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  margin-left: -22%;
`;

export const Button = styled.TouchableOpacity`
  padding: 15px 0px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.TITLE.S}px;
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-weight: 700;
`;

export const Text = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.TITLE.XS}px;
  color: ${({theme})=> theme.COLORS.GRAY_200};
  font-weight: 700;
`;

