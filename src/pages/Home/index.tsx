import React from 'react';
import TabsInput from '../../components/TabsInput';
import FlightCard from '../../components/FlightCard';
import { Screen, ScreenContainer, ImageLogo, Wrapper } from './styles';
import logo from '../../assets/logo.png';
import { flightData } from '../../mocks/flight';

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
          value={list.value}
        />
      ))}
    </Wrapper>
  </Screen>
);

Home.defaultProps = {
  name: 'world',
};

export default Home;
