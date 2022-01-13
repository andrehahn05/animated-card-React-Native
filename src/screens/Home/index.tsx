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
  ScrollView,
} from './styles';

const Home = () => (
  <ScrollView>
    <Container>
      <Header>
        <Title>Meu cartão</Title>
        <Subtitle>Insira os dados do cartão</Subtitle>
      </Header>

      <Content>
        <Card />

        <Input
          placeholder="Nome do titular"
          icon={<IconUser fill="#6A1B9A" width={18} height={18} />}
        />

        <Input
          placeholder="Número do cartão"
          icon={<IconNumber fill="#6A1B9A" width={24} height={24} />}
        />

        <View>
          <Input
            placeholder="Validade"
            width="45%"
            icon={<IconDate fill="#6A1B9A" width={16} height={16} />}
          />

          <Input
            placeholder="CVV"
            width="45%"
            icon={<IconCode fill="#6A1B9A" width={16} height={16} />}
          />
        </View>
      </Content>

      <Button>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </Container>
  </ScrollView>
);

export default Home;
