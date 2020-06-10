import styled from 'styled-components'

export const PreviewPhoto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
  `;

export const PreviewImg = styled.img`
  width: 120px;
  `;

export const SuperHeader = styled.div`  
  position: relative;
  background: url('./super-background.png') repeat;
  height: 300px;
  width: 100%;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  h1{
    position: relative;
    margin: 0;
    font-size: 68px;
    text-align: center;
    color: #000;
    line-height: 300px;
    word-wrap: break-word;
    white-space: nowrap;
    z-index: 100;
    filter: none;
    -webkit-filter: none;
    @media all and (max-width: 767px){
      font-size: 48px;
      line-height: 80px;
      word-break: normal;
      white-space: normal;
    }
  }
  span{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(101,101,101,0.3);
    z-index: 10;
  }
  `;