import styled from 'styled-components/native';

interface propsText {
  fontSize: string;
  bold?: boolean;
}

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 12px;
`;

export const Content = styled.View`
  width: 310px;
  height: 160px;
  background-color: #6a1b9a;
  border-radius: 20px;
`;

export const Strip = styled.View`
  width: 100%;
  height: 30px;
  margin-top: 25px;
  background-color: #bdbdbd;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const TextCVV = styled.Text`
  margin-right: 40px;
`;

export const View = styled.View`
  width: 80%;
  margin-top: 50px;
`;

export const Text = styled.Text<propsText>`
  width: auto;
  max-height: 35px;
  margin-top: 8px;
  margin-left: 14px;
  color: #fafafa;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const ViewInformation = styled.View`
  width: 100%;
  padding: 14px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
