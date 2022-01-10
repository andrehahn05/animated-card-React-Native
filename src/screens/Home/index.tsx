import React from 'react';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Button,
  TextButton,
} from './styles';

const Home = () => (
  <Container>
    <Header>
      <Title>Meu cartão</Title>
      <Subtitle>Insira os dados do cartão</Subtitle>
    </Header>

    <Content>
      {/* <Card/>  */}
      {/* <Input/> */}
    </Content>

    <Button>
      <TextButton>Cadastrar</TextButton>
    </Button>
  </Container>
);

export default Home;
