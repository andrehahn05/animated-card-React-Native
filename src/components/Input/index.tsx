import React, { ReactElement } from 'react';
import { Container, TextInput } from './styles';

interface propsInput {
  width?: string;
  icon: ReactElement | false;
}

const Input: React.FC<propsInput> = ({ width, icon }) => {
  return (
    <Container width={width}>
      {icon && icon}
      <TextInput />
    </Container>
  );
};

export default Input;
