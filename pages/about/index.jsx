import HeaderBlock from '../../components/HeaderBlock/HeaderBlock'
import Footer from '../../components/Footer/Footer'
import HeadTemplate from '../../components/HeadTemplate/HeadTemplate'
import LinkButton from '../../components/common/LinkButton/LinkButton'

export default function Home() {
  return (
    <div className="container">
      <HeadTemplate titleName='О нас' />

      <HeaderBlock />
      <main>
        <h1>webreznov studio</h1>
        <h2>О нас</h2>
        <hr/>        
        <p className='paragraph-big'>Мы <span className='simbol'>-</span> команда<span className='simbol'>!</span></p>
        <p className='paragraph-min'>Front-end разработчик, стаж более 5 лет</p>
        <p className='paragraph-min'>UI дизайнер, стаж около 3 лет</p>
        <p className='paragraph-min'>Маркетолог, по найму <span className='simbol'>.</span> <span className='simbol'>(</span>Скоро будет в команде пара проверенных человек)</p>
        <p className='paragraph-min'>Back-end разработчик, стаж более 5 лет тенистого пути.</p>
        <p className='paragraph-min'>Дизайнер-иллюстратор, творческая личность, но в этом деле 4 года точно уже.</p>
        <br/>
        <p className='paragraph-middle'>Расскажи о своей боли нами <span className='simbol'>.</span> Решим вопрос <span className='simbol'>!</span></p>
        <p className='paragraph-big'><LinkButton name='Пиши сюда))' link='/contacts'></LinkButton></p>
      </main>
      <Footer/>
      
    </div>
  )
}
