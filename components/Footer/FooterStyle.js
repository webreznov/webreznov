import styled from 'styled-components'

export const FooterStyle = styled.footer`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    @media all and (max-width: 767px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div{
          margin-bottom: 15px;
      }
    }
    `;