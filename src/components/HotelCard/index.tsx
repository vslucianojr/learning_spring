import React from 'react';
import { Button, Rate } from 'antd';
import { Carousel } from 'react-bootstrap';
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
  Spacer,
} from './styles';
import flatRoom from '../../assets/flat_room.png';
import hotel from '../../assets/hotel.jpg';
import pool from '../../assets/pool.jpg';
interface HotelCardProps {
  type: string;
  stars: number;
  name: string;
  price: number;
  description: string;
}

const HotelCard: React.FC<HotelCardProps> = (props: HotelCardProps) => (
  <StyledCardHotel>
    <ImageSection>
      <Carousel>
        <Carousel.Item>
          <img src={flatRoom} alt="First slide" height="300px" width="250px" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={hotel} alt="Second slide" height="300px" width="250px" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pool} alt="Third slide" height="300px" width="250px" />
        </Carousel.Item>
      </Carousel>
    </ImageSection>
    <HotelInfo>
      <Section>
        <HotelText>{props.name}</HotelText>
      </Section>
      <InfoSection>
        <TypeHotel>{props.type}</TypeHotel>
        <Spacer />
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
