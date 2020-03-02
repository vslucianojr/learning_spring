import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  height: 300px;
  width: 240px;
  margin: 15px;
  border-radius: 20px;
  background-color: #ebebeb;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
  justify-content: space-evenly;
  background-color: #ffffff;
`;

export const Label = styled.span`
  color: gray;
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.span`
  color: #1976d2;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-weight: bold;
`;
