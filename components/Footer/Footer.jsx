import LinkButton from "../common/LinkButton/LinkButton"
import Link from "next/Link"
import { FooterStyle } from './FooterStyle'

const Footer = () => {
    return (
        <FooterStyle>
            <div>
                <div><LinkButton name='instagram: webreznov__studio' link='https://www.instagram.com/webreznov__studio/' /></div>
                <div><LinkButton name='webreznov@mail.ru' link='webreznov@mail.ru' /></div>
                <div><LinkButton name='telegram: @webreznov' link='https://tlgg.ru/webreznov' /></div>
                {/* <div><LinkButton name='vk' link='#' /></div> */}
                {/* <div><LinkButton name='facebook' link='#' /></div> */}
            </div>
            <Link href='/'>
                <a href='/'>
                    <img src='logo-white.svg' alt='logo' />
                    <p className='paragraph-min'>Копирование материалов без согласия автора строго ЗАПРЕЩЕНО <span className='simbol'>!</span>
                    </p>
                </a>
            </Link>
        </FooterStyle>
    )
}

export default Footer;