import React from 'react';
import TabsInput from '../../components/TabsInput';
import FlightCard from '../../components/FlightCard';
import { Screen, ScreenContainer, ImageLogo, Wrapper } from './styles';
import logo from '../../assets/logo.png';
import { flightData } from '../../mocks/flight';
import { hotelData } from '../../mocks/hotel';
import HotelCard from '../../components/HotelCard';

interface HomeProps {
  name?: string;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => (
  <Screen>
    <ScreenContainer>
      <ImageLogo src={logo} alt="Logo" />
      <TabsInput />
    </ScreenContainer>
    <Wrapper>
      {flightData.map((list, index) => (
        <FlightCard
          key={index}
          type={list.type}
          from={list.from}
          to={list.to}
          depart={list.depart}
          return={list.return}
          adults={list.adults}
          price={list.price}
        />
      ))}
      {hotelData.map((list, index) => (
        <HotelCard
          key={index}
          type={list.type}
          stars={list.stars}
          name={list.name}
          price={list.price}
          description={list.description!}
        />
      ))}
    </Wrapper>
  </Screen>
);

Home.defaultProps = {
  name: 'world',
};

export default Home;
