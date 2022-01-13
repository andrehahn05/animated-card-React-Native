import React, { ReactElement } from 'react';
import { Container, TextInput } from './styles';

interface propsInput {
  width?: string;
  icon: ReactElement | false;
  placeholder?: string;
}

const Input: React.FC<propsInput> = ({ width, icon, placeholder }) => {
  return (
    <Container width={width}>
      {icon && icon}
      <TextInput placeholder={placeholder} />
    </Container>
  );
};

export default Input;
