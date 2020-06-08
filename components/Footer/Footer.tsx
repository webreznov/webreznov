import LinkButton from "../common/LinkButton/LinkButton"
import Link from "next/Link"
import { FooterStyle } from './FooterStyle'

const Footer = () => {    
    return (
        <FooterStyle>
            <div>
                <div><LinkButton name='instagram' link='#' /></div>
                <div><LinkButton name='webreznov@mail.ru' link='mailto:webreznov@mail.ru' /></div>
                <div><LinkButton name='vk' link='#' /></div>
                <div><LinkButton name='facebook' link='#' /></div>
            </div>
            <Link href='/'><a><img src='logo-white.svg' alt='logo' /><p className='paragraph-min'>Копирование материалов без согласия автора строго ЗАПРЕЩЕНО <span className='simbol'>!</span></p></a></Link>
        </FooterStyle>
    )
}

export default Footer;