import styled, {css} from "styled-components/native";

type Props = {
  isInvalid: boolean;
}

export const Message = styled.Text`
  text-align: left;
  width: 100%;
  font-size: ${({theme})=> theme.FONT_SIZE.BODY.XS}px;
  color: ${({theme})=> theme.COLORS.DARK_RED};
`

export const Input = styled.TextInput<Props>`
  background-color: white;
  width: 100%;
  padding: 5px;
  
  border: 1px solid ${({isInvalid}) => isInvalid ? 'red' : 'black'};
`