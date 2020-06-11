import { PreviewPhoto, PreviewImg, SuperHeader } from '../style/main-style'
import HeaderBlock from '../components/HeaderBlock/HeaderBlock'
import Footer from '../components/Footer/Footer'
import HeadTemplate from '../components/HeadTemplate/HeadTemplate'
import LinkButton from '../components/common/LinkButton/LinkButton'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      <HeadTemplate 
      titleName='Главная'
      google_metrika={<meta name="google-site-verification" content="JMhYCMc3P0fI5OUQdMXK8ccpkzKJY_bFPigeOCOtmRY" />}
      yandex_metrika=''
      />

      <HeaderBlock />
      <main>
        <h1>#webreznov_studio</h1>
        <h2>Главная</h2>
        <hr />
        <SuperHeader>
          <h1>Студия веб-разработок</h1>
          <span></span>
        </SuperHeader>
        <p className='titleParagraph-big'>Веб-разработка во всей её красе <span className='simbol'>!</span></p>
        <p className='paragraph-middle'>Требуется дизайн-макет <span className='simbol'>?</span> Переходи <LinkButton link='/contacts' name='сюда' /> и свяжись с нами <span className='simbol'>.</span></p>
        <p className='paragraph-big'>Уже есть макет <span className='simbol'>?</span> Тогда осталось сверстать его <span className='simbol'>!</span> Переходи <LinkButton link='/contacts' name='сюда' /> и свяжись с нами <span className='simbol'>.</span></p>
        <p className='paragraph-middle'>У вас уже есть веб-сайт <span className='simbol'>,</span> но ваш разработчик куда <span className='simbol'>-</span> то делся <span className='simbol'>?</span> Переходите <LinkButton link='/contacts' name='сюда' /> и свяжись с нами <span className='simbol'>.</span></p>
        <p className='paragraph-min'>Хочешь проверку по SEO-оптимизации <span className='simbol'>?</span> Переходи <LinkButton link='/contacts' name='сюда' /> и свяжись с нами <span className='simbol'>.</span></p>
        <br />
        <h2 className='titleParagraph-big'><Link href='/portfolio'><a>Наши работы</a></Link></h2>
        <PreviewPhoto>
          <PreviewImg src='images/129 - Свадебный организатор Рязань.png' alt='work template react' />
          <PreviewImg src='images/130-Continent Express.png' alt='work template react' />
          <PreviewImg src='images/133 - Развитие ребенка, репетиторский центр в городе Рязань.png' alt='work template react' />
          <PreviewImg src='images/134 - Tezosbakes Delegation Service .png' alt='work template react' />
          <PreviewImg src='images/137 - Кресла мешки в Рязани на заказ.png' alt='work template react' />
        </PreviewPhoto>        

      </main>
      <Footer />

    </div>
  )
}
