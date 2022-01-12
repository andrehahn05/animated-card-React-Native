import React from 'react';
import { Container, TextInput } from './styles';

interface propsInput {
  width?: string;
}

const Input: React.FC<propsInput> = ({ width }) => {
  return (
    <Container width={width}>
      <TextInput />
    </Container>
  );
};

export default Input;
