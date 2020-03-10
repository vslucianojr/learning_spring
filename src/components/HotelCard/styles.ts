import styled from 'styled-components';

export const StyledCardHotel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 300px;
  width: 510px;
  margin: 15px;
  border-radius: 20px;
  background-color: #ebebeb;
`;

export const ImageSection = styled.div`
  background-color: #ffffff;
  border-radius: 20px 0px 0px 20px;
  height: 100%;
  min-width: 250px;
`;

export const HotelInfo = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  margin-top: 10px;
  justify-content: center;
  background-color: #ffffff;
`;

export const InfoSection = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  margin-top: 10px;
  justify-content: space-evenly;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
`;

export const DescriptionSection = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  background-color: #fff;
`;

export const TypeHotel = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #1976d2;
`;

export const HotelText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #1976d2;
`;

export const HotelLabel = styled.span`
  color: gray;
  font-size: 14px;
  font-weight: bold;
`;

export const HotelDescripion = styled.span`
  color: gray;
  font-size: 12px;
  font-weight: bold;
  text-align: justify;
`;

export const Spacer = styled.div`
  background-color: gray;
  width: 2px;
  height: 20px;
`;
