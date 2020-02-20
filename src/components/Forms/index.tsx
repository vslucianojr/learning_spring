import React from 'react'
import { Title, Subtitle, DataSelect, Container, Label, InputForms, PlaceSelect} from './styles'
import {DatePicker, Input, InputNumber, Button} from 'antd'
import { RangePickerValue } from 'antd/lib/date-picker/interface'
import "antd/lib/date-picker/style/css";
import "antd/lib/input-number/style/css";
import Search from 'antd/lib/input/Search';

const { RangePicker } = DatePicker
interface FormsProps{
    user?: string;
    hotel?: string;
}

function onChange(date : RangePickerValue, dateString: [string ,string]){
    console.log(date, dateString)
}

const Forms: React.FC<FormsProps> = (props: FormsProps) => (
    <Container>
        <Title>Seja Bem-Vindo a {props.hotel}, {props.user} </Title>
        <Subtitle>Encontre as melhores passagens agora mesmo!!</Subtitle>
        <InputForms>
            <Title>Passagens</Title>
            <DataSelect>
                <Label>Insira seu nome</Label>
                <Input placeholder="Nome completo" />
            </DataSelect>
            <DataSelect>
                <Label>Selecione sua viagem</Label>
                <PlaceSelect>
                    <Search placeholder="Origem" />
                    <Search placeholder="Destino" />
                </PlaceSelect>
            </DataSelect>
            <DataSelect>
                <Label>Selecione o periodo desejado</Label>
                <RangePicker onChange = {onChange}/>
            </DataSelect>
            <DataSelect>
                <Label>Passageiros</Label>
                <InputNumber min={1} max={10} defaultValue={1}/>
            </DataSelect>
            <Button style={{marginTop: 20}} type="primary">Procurar</Button>
        </InputForms>
    </Container>
);

Forms.defaultProps= {
    user: "Luciano",
    hotel: "Synchro Airlines"
}

export default Forms;