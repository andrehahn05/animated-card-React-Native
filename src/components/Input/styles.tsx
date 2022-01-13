import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View<propsContainer>`
  width: ${({ width }) => (width ? width : '100%')};
  background-color: #bdbdbd50;
  border-radius: 8px;
  margin-top: 12px;
  height: 50px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
`;
interface propsContainer {
  width: any;
}

export const TextInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  margin-left: 4px;
`;

export const MaskTextInput = styled(TextInputMask)`
  width: 100%;
  margin-left: 4px;
  font-weight: 900;
  font-size: 16px;
`;
