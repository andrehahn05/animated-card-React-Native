import React, { useState } from 'react';
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

const Home = () => {
  const [data, setData] = useState({
    name: '',
    number: '',
    validate: '',
    cvv: '',
  });

  return (
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
            value={data.name}
            onChangeText={text => {
              setData({ ...data, name: text });
            }}
            icon={<IconUser fill="#6A1B9A" width={18} height={18} />}
          />

          <Input
            placeholder="Número do cartão"
            value={data.number}
            type="credit-card"
            mask
            onChangeText={text => {
              setData({ ...data, number: text });
            }}
            icon={<IconNumber fill="#6A1B9A" width={18} height={18} />}
          />

          <View>
            <Input
              placeholder="Validade"
              value={data.validate}
              type="custom"
              options={{
                mask: '99/99',
              }}
              mask
              onChangeText={text => {
                setData({ ...data, validate: text });
              }}
              width="45%"
              icon={<IconDate fill="#6A1B9A" width={18} height={18} />}
            />

            <Input
              placeholder="CVV"
              value={data.cvv}
              type="custom"
              options={{
                mask: '9999',
              }}
              mask
              onChangeText={text => {
                setData({ ...data, cvv: text });
              }}
              width="45%"
              icon={<IconCode fill="#6A1B9A" width={18} height={18} />}
            />
          </View>
        </Content>

        <Button>
          <TextButton>Cadastrar</TextButton>
        </Button>
      </Container>
    </ScrollView>
  );
};

export default Home;
