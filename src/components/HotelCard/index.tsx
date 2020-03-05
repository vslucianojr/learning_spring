import React from 'react';
import { Carousel, Button, Rate } from 'antd';
import {
  StyledCardHotel,
  ImageSection,
  HotelInfo,
  TypeHotel,
  HotelText,
  HotelDescripion,
  DescriptionSection,
  HotelLabel,
  InfoSection,
  Section,
} from './styles';
import flatRoom from '../../assets/flat_room.png';

interface HotelCardProps {
  type: string;
  stars: number;
  name: string;
  price: number;
  description: string;
}

function onChange() {
  console.log();
}

const HotelCard: React.FC<HotelCardProps> = (props: HotelCardProps) => (
  <StyledCardHotel>
    <ImageSection></ImageSection>
    <HotelInfo>
      <Section>
        <HotelText>{props.name}</HotelText>
      </Section>
      <InfoSection>
        <TypeHotel>{props.type}</TypeHotel>
        <Rate allowHalf disabled defaultValue={props.stars} />
      </InfoSection>
      <DescriptionSection>
        <HotelDescripion>{props.description}</HotelDescripion>
      </DescriptionSection>
      <InfoSection>
        <HotelLabel>Preço por Adulto:</HotelLabel>
        <HotelText>R${props.price}</HotelText>
      </InfoSection>
      <Button style={{ width: '100%', marginTop: 30 }} type="primary">
        Selecionar
      </Button>
    </HotelInfo>
  </StyledCardHotel>
);
export default HotelCard;
