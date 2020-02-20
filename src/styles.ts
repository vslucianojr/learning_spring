import styled from "styled-components"
import flightover from './assets/flight-over.png'

export const Screen = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${flightover});
    background-size: cover;
    background-repeat: no-repeat;
`
