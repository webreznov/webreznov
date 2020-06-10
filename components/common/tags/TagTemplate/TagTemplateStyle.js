import styled from 'styled-components'

export const TagWrapp = styled.div`
    position: relative;
    display: inline-block;    
    cursor: pointer;
    &:hover * {
        /* opacity: 1; */
        display: block;
    }
    `;

export const TagImgWrapp = styled.div`
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 50px;
    height: 50px; 
    img{
        display:table-cell;
        width: 100%;
    }   
    `;

export const TagDescriptionWrapp = styled.div`
    /* opacity: 0; */
    display: none;
    position: absolute;    
    z-index: 10000;
    top: 60px;
    left: 0;
    width: 180px;    
    background: #f0ffff;
    padding: 5px 10px;
    border-radius: 7px;
    transition: all 0.2s ease-in-out;
    &::after{
        content:'';
        position: absolute;
        z-index: 10000;
        width: 1px;
        height: 1px;
        top: -31px;
        left: 10px;
        border-left: 10px solid transparent;
        border-top: 20px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #f0ffff;
    }
    h3{
        font-size: 14px;
        margin: 0;
        color: #0f0000;
    }
    p{
        font-size: 11px;   
        margin: 0;   
        color: #0f0000;
    }
    `;
