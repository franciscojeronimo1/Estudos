import React from 'react';

import { Container } from '../../styles/globalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small> Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button"> Enviar</button>
    </Container>
  );
}
