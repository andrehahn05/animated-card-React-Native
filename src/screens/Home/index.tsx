import React from 'react';
import { Card, Input } from '../../components';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Button,
  TextButton,
  View,
} from './styles';

const Home = () => (
  <Container>
    <Header>
      <Title>Meu cartão</Title>
      <Subtitle>Insira os dados do cartão</Subtitle>
    </Header>

    <Content>
      <Card />

      <Input />
      <Input />

      <View>
        <Input width="45%" />
        <Input width="45%" />
      </View>
    </Content>

    <Button>
      <TextButton>Cadastrar</TextButton>
    </Button>
  </Container>
);

export default Home;
