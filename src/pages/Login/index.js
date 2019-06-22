import React from 'react';

import { Button } from 'react-native';
import { Container, Title } from './styles';

const Login = ({ navigation }) => {
  return(
    <Container>
      <Title>LOGIN</Title>
      <Button
        title="IR PARA Main"
        onPress={() => navigation.push('Main')}
        />
    </Container>
);
};

export default Login;

Login.navigationOptions = {
  title: 'Login',
};
