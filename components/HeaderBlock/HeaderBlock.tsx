import LinkButton from "../common/LinkButton/LinkButton"
import Link from "next/Link"
import { HeaderStyle, ListStyle, ItemStyle } from './style'

const HeaderBlock = () => {
    return (
        <HeaderStyle>
            <Link href='/'><a><img src='logo-white.svg' alt='logo' /></a></Link>
            <ListStyle>
                <ItemStyle><LinkButton name='О нас' link='/about' /></ItemStyle>
                <ItemStyle><LinkButton name='Портфолио' link='/portfolio' /></ItemStyle>
                <ItemStyle><LinkButton name='Услуги' link='/services' /></ItemStyle>
                <ItemStyle><LinkButton name='Статьи' link='/articles' /></ItemStyle>
                <ItemStyle><LinkButton name='Контакты' link='/contacts' /></ItemStyle>
            </ListStyle>
        </HeaderStyle>
    )
}

export default HeaderBlock;