import React from 'react';

//Antd Style
import { DatePicker, Input, InputNumber, Button } from 'antd';
import { DataSelect, Label, PlaceSelect } from './styles';
import Search from 'antd/lib/input/Search';
import 'antd/lib/date-picker/style/css';
import 'antd/lib/input-number/style/css';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;

interface HotelFormProps {
  name?: string;
}

const HotelForms: React.FC<HotelFormProps> = (props: HotelFormProps) => (
  <>
    <DataSelect>
      <Label>Insira seu nome</Label>
      <Input placeholder="Nome completo" />
    </DataSelect>
    <DataSelect>
      <Label>Selecione o seu Hotel</Label>
      <PlaceSelect>
        <Search placeholder="Digite o nome" />
      </PlaceSelect>
    </DataSelect>
    <DataSelect>
      <Label>Selecione o Periodo</Label>
      <RangePicker size={'default'} />
    </DataSelect>
    <DataSelect>
      <Label>Quantidade de Quartos</Label>
      <InputNumber min={1} max={10} defaultValue={1} />
    </DataSelect>
    <Button style={{ marginTop: 20, width: '100%' }} type="primary">
      Procurar
    </Button>
  </>
);

HotelForms.defaultProps = {
  name: "Synchro's Hotel",
};

export default HotelForms;
