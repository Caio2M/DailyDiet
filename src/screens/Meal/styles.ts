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

export const ButtonContainer = styled.View`
  background-color: ${({theme})=> theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 25px;
`;

export const Header = styled.View`
  width: 80%;
  flex:1.2;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  justify-content: space-between;
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.TITLE.S}px;
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-weight: 700;
  text-align: center;
  width: 100%;
`;

export const BodyTitle = styled.Text`
  font-weight: bold;

`;

export const Text = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.BODY.M}px;
  color: ${({theme})=> theme.COLORS.GRAY_200};

`;

export const InDietContainer = styled.View`
  max-width: 135px;
  padding: 5px 8px;
  border-radius: 20px;
  background-color: ${({theme})=> theme.COLORS.GRAY_600};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;

`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=> theme.COLORS.GRAY_200};
  flex-direction: row;
  gap: 10px;

  border-radius: 8px;

  padding: 15px;
`;

export const Image = styled.Image`
  width: 20px;
  height: 20px;
`;