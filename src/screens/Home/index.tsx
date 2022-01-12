import React from 'react';
import { Card, Input } from '../../components';
import IconUser from '../../assets/icon-user.svg';
import IconCode from '../../assets/icon-code.svg';
import IconDate from '../../assets/icon-date.svg';
import IconNumber from '../../assets/icon-number.svg';
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

      <Input icon={<IconUser fill="#6A1B9A" width={16} height={16} />} />

      <Input icon={<IconNumber fill="#6A1B9A" width={20} height={20} />} />

      <View>
        <Input
          width="45%"
          icon={<IconDate fill="#6A1B9A" width={16} height={16} />}
        />

        <Input
          width="45%"
          icon={<IconCode fill="#6A1B9A" width={16} height={16} />}
        />
      </View>
    </Content>

    <Button>
      <TextButton>Cadastrar</TextButton>
    </Button>
  </Container>
);

export default Home;
