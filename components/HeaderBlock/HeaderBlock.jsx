import LinkButton from "../common/LinkButton/LinkButton"
import Link from "next/Link"
import { HeaderStyle, ListStyle } from './style'

const HeaderBlock = () => {
    return (
        <HeaderStyle>
            <Link href='/'><a><img src='logo-white.svg' alt='logo' /></a></Link>
            <ListStyle>
                <li><LinkButton name='О нас' link='/about' /></li>
                <li><LinkButton name='Портфолио' link='/portfolio' /></li>
                <li><LinkButton name='Услуги' link='/services' /></li>
                <li><LinkButton name='Статьи' link='/articles' /></li>
                <li><LinkButton name='Контакты' link='/contacts' /></li>
            </ListStyle>
        </HeaderStyle>
    )
}

export default HeaderBlock;