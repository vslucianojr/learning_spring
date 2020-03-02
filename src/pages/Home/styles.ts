import styled from 'styled-components';

export const Screen = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 1000px;
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
`;
