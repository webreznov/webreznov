import HeaderBlock from '../../components/HeaderBlock/HeaderBlock'
import Footer from '../../components/Footer/Footer'
import HeadTemplate from '../../components/HeadTemplate/HeadTemplate'
import LinkButton from '../../components/common/LinkButton/LinkButton'

export default function Home() {
  return (
    <div className="container">
      <HeadTemplate titleName='Услуги' />

      <HeaderBlock />
      <main>
        <h1>webreznov studio</h1>
        <h2>Услуги</h2>
        <hr/>
        <p className='paragraph-big'>Задач много <span className='simbol'>!</span> Решений ещё больше<span className='simbol'>!</span></p>
        <p className='paragraph-min'>Проблема поиска хорошего и ответственного исполнителя заключается в понимании.</p>
        <p className='paragraph-min'>Понимать задачу нужно не только исполнителю, но и заказчику.</p>
        <p className='paragraph-min'>С этой целью проводятся brain-storm в больших компаниях. Рвутся волосы на голове. Бессонные ночи у мониторов.</p>
        <p className='paragraph-min'>В итоге получается ТЗ <span className='simbol'>.</span> <span className='simbol'>(</span>ТЗ - техническое задание <span className='simbol'>)</span></p>
        <p className='paragraph-min'>ТЗ важно делать структурированным и подробным. А чтобы это сделать, нужны люди понимающие/знающие тонкости разработки.</p>
        <p className='paragraph-min'>Короче, причина по которой нужно нам написать <span className='simbol'>-</span> <span className='simbol'>составим ТЗ бесплатно!</span></p>
        <p className='paragraph-min'>Ну конечно если это имеет смысл, ведь ТЗ на правку цвета кнопки <span className='simbol'>"</span>меню<span className='simbol'>"</span> нет смысла делать</p>
        <br/>
        <p className='paragraph-middle'>Расскажи о своей боли нами <span className='simbol'>.</span> Решим вопрос <span className='simbol'>!</span></p>
        <p className='paragraph-big'><LinkButton name='Пиши сюда))' link='/contacts'></LinkButton></p>
      </main>
      <Footer/>
      
    </div>
  )
}
