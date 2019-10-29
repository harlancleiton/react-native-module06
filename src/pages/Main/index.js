import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <Text>Main</Text>
    </Container>
  );
};

Main.navigationOptions = { title: 'Hello World' };

export default Main;
