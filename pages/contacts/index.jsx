import HeaderBlock from '../../components/HeaderBlock/HeaderBlock'
import Footer from '../../components/Footer/Footer'
import HeadTemplate from '../../components/HeadTemplate/HeadTemplate'
import LinkButton from '../../components/common/LinkButton/LinkButton'

export default function Home() {
  return (
    <div className="container">      
      <HeadTemplate titleName='Контакты' />

      <HeaderBlock />
      <main>
        <h1>webreznov studio</h1>
        <h2>Контакты</h2>
        <hr/>
        <p>Так, для связи существует много каналов, но используем следующие:</p>
        <ul>
          <li>Telegram: <LinkButton name='@webreznov' link='https://tlgg.ru/webreznov' /></li>
          <li>WhatsUp: +79105629708</li>
          <li>Email: <LinkButton name='webreznov@mail.ru' link='webreznov@mail.ru'/></li>          
        </ul>
        <p>Да, это основной арсенал средств связи, но по вашему желанию мы можем поддерживать связь в:</p>
        <ul>
          <li>Instagramm: <LinkButton name='webreznov__studio' link='https://www.instagram.com/webreznov__studio/'/></li>          
          <li>Skype: <LinkButton name='@webreznov' link='https://tlgg.ru/webreznov'/></li>          
        </ul>
        <p>Если вдруг ваш вопрос очень срочный, пожалуйста используйте первый список каналов связи.</p>
      </main>
      <Footer/>
      
    </div>
  )
}
