import styled from "styled-components/native";

export const Container = styled.View`
padding-top: 20px;
  flex: 1;
`;

export const Content = styled.View`
  flex:4;
  background-color: ${({theme})=> theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 25px;
`;

export const Div = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  margin-left: 15px;
`;

export const Header = styled.View`
  flex:1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.TITLE.G}px;

  text-align: center;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.S}px;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.S}px;
  text-align: center;
`;

