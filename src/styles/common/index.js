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
export const FontMontserrat = styled.p`
    font-size : ${props => props.size ? props.size + 'px' : `12px`};
    font-family: 'Montserrat', sans-serif;
    color : ${props => props.color ? props.color : "#15325B"}
`

export const CardCustomize = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: none !important;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.062), 0px 3px 4px 0px rgba(0, 0, 0, 0.027), 0px 1px 8px 0px rgba(0,0,0,0.12);
    border-radius: 20px !important;
    height: calc(${props => props.height ? props.height + 'px' : '300px'} - 130px);
`