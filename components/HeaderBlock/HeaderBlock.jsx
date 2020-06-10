import LinkButton from "../common/LinkButton/LinkButton";
import { HeaderStyle, ListStyle } from './style';

const HeaderBlock = () => {
    return (
        <HeaderStyle>
            <a href='/'><img src='logo-white.svg' alt='logo' /></a>
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