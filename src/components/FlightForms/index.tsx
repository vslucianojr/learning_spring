import React from 'react';
import { DatePicker, Input, InputNumber, Button } from 'antd';
import 'antd/lib/date-picker/style/css';
import 'antd/lib/input-number/style/css';
import Search from 'antd/lib/input/Search';
import { DataSelect, Label, PlaceSelect, Space } from './styles';

import 'antd/dist/antd.css';

const FlightForms: React.FC<any> = (props: any) => (
  <>
    <DataSelect>
      <Label>Insira seu nome</Label>
      <Input placeholder="Nome completo" />
    </DataSelect>
    <DataSelect>
      <Label>Selecione sua viagem</Label>
      <PlaceSelect>
        <Search placeholder="Origem" />
        <Space />
        <Search placeholder="Destino" />
      </PlaceSelect>
    </DataSelect>
    <DataSelect style={{ flexDirection: 'row' }}>
      <DataSelect>
        <Label>Data</Label>
        <DatePicker size={'default'} />
      </DataSelect>
      <Space />
      <DataSelect>
        <Label>Passageiros</Label>
        <InputNumber min={1} max={10} defaultValue={1} />
      </DataSelect>
    </DataSelect>
    <Button style={{ marginTop: 20, width: '100%' }} type="primary">
      Procurar
    </Button>
  </>
);

export default FlightForms;
