import styled from 'styled-components'
export const Title = styled.h1`
    font-size : ${props => props.size ? props.size + 'px' : `47px`};
    font-family: 'Poppins', sans-serif;
    color : #15325B;
`
export const FontPoppins = styled.p`
    font-size : ${props => props.size ? props.size + 'px' : `12px`};
    font-family: 'Poppins', sans-serif;
    color : ${props => props.color ? props.color : "#15325B"}
`
// font-family: 'Montserrat', sans-serif;
// #224070