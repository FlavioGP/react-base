import React from "react";
import { Container } from '../../styles/GlobalStyles'
import { Title, Paragraph } from './styled'


export default function Login(){

  return(
    <Container>
      <Title>
        Login
        <small> Oie</small>
      </Title>
      <Paragraph> Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
      <button type="button"> Enviar </button>
    </Container>
  );
}
