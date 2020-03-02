import React from 'react';
import { Tabs } from 'antd';
import { Container, Title, Subtitle, InputForms } from './styles';
import HotelForm from '../HotelForms';
import FlightForms from '../FlightForms';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

interface TabsProps {
  user?: string;
  company?: string;
}

function callback() {
  console.log('Oi/');
}

const TabsInput: React.FC<TabsProps> = (props: TabsProps) => (
  <Container>
    <Title>Seja Bem-Vindo a {props.company}</Title>
    <Subtitle>Encontre passagens e hoteis agora mesmo!!</Subtitle>
    <InputForms>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab={<Title>Passagens</Title>} key="1">
          <FlightForms />
        </TabPane>
        <TabPane tab={<Title>Hospedagem</Title>} key="2">
          <HotelForm />
        </TabPane>
      </Tabs>
    </InputForms>
  </Container>
);

TabsInput.defaultProps = {
  user: 'Luciano',
  company: 'Synchro Airlines',
};

export default TabsInput;
