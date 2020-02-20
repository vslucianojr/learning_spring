import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;
`

export const InputForms = styled.div`
    display: flex;
    width: 600px;
    height: 100%;
    margin: 20px;
    flex-direction: column;
    padding: 10px;
    border-radius: 30px;
    background-color: #ffffff;
`
export const Title = styled.span`
    display: flex;
    padding-top: 5px;
    font-weight: bold;
    font-size: 30px;
    margin: 0px;
`

export const Subtitle = styled.span`
    color: gray;
    margin: 0px;
`

export const Label = styled.span`
    display: flex;
    width: 100%;
    color: gray;
    font-size: 30;
    font-weight: bold;
`

export const DataSelect = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
`
export const PlaceSelect = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
`