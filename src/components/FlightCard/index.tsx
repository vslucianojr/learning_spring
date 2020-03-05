import React from 'react';
import { StyledCard, Section, Label, Text } from './styles';
import { Button } from 'antd';

interface FlightCardProps {
  type: string;
  from: string;
  to: string;
  depart: string;
  return: string;
  adults: number;
  price: number;
}

const FlightCard: React.FC<FlightCardProps> = (props: FlightCardProps) => (
  <StyledCard>
    <Section>
      <Text>{props.type}</Text>
    </Section>
    <Section>
      <Label>Origem:</Label>
      <Text>{props.from}</Text>
      <Label>Destino:</Label>
      <Text>{props.to}</Text>
    </Section>
    <Section>
      <Label>Saída:</Label>
      <Text>{props.depart}</Text>
    </Section>
    <Section>
      <Label>Retorno:</Label>
      <Text>{props.return}</Text>
    </Section>
    <Section>
      <Label>Preço por Adulto:</Label>
      <Text>R${props.price}</Text>
    </Section>
    <Button style={{ width: '100%', marginTop: 30 }} type="primary">
      Selecionar
    </Button>
  </StyledCard>
);

FlightCard.defaultProps = {
  from: 'JPA',
  to: 'GRU',
  depart: '10/10/2020',
  return: '20/20/2020',
  adults: 1,
  price: 0,
};

export default FlightCard;
