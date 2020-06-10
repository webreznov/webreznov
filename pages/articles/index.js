import HeaderBlock from '../../components/HeaderBlock/HeaderBlock'
import Footer from '../../components/Footer/Footer'
import HeadTemplate from '../../components/HeadTemplate/HeadTemplate'

export default function Home() {
  return (
    <div className="container">      
      <HeadTemplate titleName='Статьи' />

      <HeaderBlock />
      <main>
        <h1>webreznov studio</h1>
        <h2>Статьи</h2>
        <hr/>
        <p className='paragraph-middle'>Не всё сразу. Эта страница в разработке:)</p>
      </main>
      <Footer/>
      
    </div>
  )
}
