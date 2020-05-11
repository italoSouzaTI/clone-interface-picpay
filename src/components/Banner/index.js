import React from 'react';
import {Container, Details, Image, Title, Description} from './styles';
import img13 from '../../images/13.png';

const Banner = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas percerias em dia,use o PickPay para fazer suas
          cobranças.
        </Description>
      </Details>
      <Image source={img13} />
    </Container>
  );
};

export default Banner;
