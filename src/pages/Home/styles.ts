import styled from 'styled-components';
import flightover from '../../assets/flight-over.png';

export const Screen = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 200px;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  min-width: 430px;
  width: 30%;
  background-color: #ebebeb;
`;

export const ImageLogo = styled.img`
  display: flex;
  width: 250px;
  height: 120px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: rgba(26, 31, 41, 0.4) url(${flightover}) no-repeat;
  background-blend-mode: darken;
  background-size: cover;
`;
