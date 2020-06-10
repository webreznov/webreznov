import styled from 'styled-components';

export const CardBlock = styled.div`
    display: inline-block;
    width: 45%;
    margin: 20px;
    @media all and (max-width: 767px){
        width: auto;
        box-sizing: border-box;
    }
`;

export const Preview = styled.div`
img{
    width: 100%;
}
`;