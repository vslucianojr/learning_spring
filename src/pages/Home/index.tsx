import React from 'react';
import Forms from '../../components/Forms'
import {ScreenContainer, ImageLogo} from './styles'
import logo from "../../assets/logo.png"
interface HomeProps {
    name?: string;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => (
      <ScreenContainer>
        <ImageLogo src={logo} alt="Logo"/>
        <Forms/>
      </ScreenContainer>
  );
  
  Home.defaultProps = {
    name: 'world',
  };
  
export default Home;