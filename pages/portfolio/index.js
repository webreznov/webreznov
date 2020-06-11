import HeaderBlock from '../../components/HeaderBlock/HeaderBlock'
import Footer from '../../components/Footer/Footer'
import HeadTemplate from '../../components/HeadTemplate/HeadTemplate'
import CardWork from '../../components/CardBlock/CardBlock'

export default function Home() {
  return (
    <div className="container">
      <HeadTemplate 
      titleName='Портфолио' 
      google_metrika={<meta name="google-site-verification" content="JMhYCMc3P0fI5OUQdMXK8ccpkzKJY_bFPigeOCOtmRY" />}
      yandex_metrika=''
      />

      <HeaderBlock />
      <main>
        <h1>webreznov studio</h1>
        <h2>Портфолио</h2>
        <hr />

        {/* <CardWork
          name_work='Простой шаблонный лэндинг'
          priviewUrl='/images/135 - Title.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='Был сверстан' /> */}

        <CardWork
          name_work='Небольшой но очень информативный лэндинг.'
          priviewUrl='/images/143-Tezoshop.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='В тематике криптовалюты не очень понимаю, но сверстать по макету вопросов не вызывает. Макет нашей студии. Заказчик доволен. Красивая анимация.' />

        <CardWork
          name_work='Корпоративный информационный сайт Рязанского производителя клеевых продуктов.'
          priviewUrl='/images/140-ООО _Рикол_-Клей-ПВА.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='Требовалось вдохнуть жизнь в старый дизайн 2000-ых годов. Дизайн со слов заказчика.  Справились на ура!' />

        <CardWork
          name_work='Сайт портфолио веб студии'
          priviewUrl='/images/148-zyym-bxx.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='Сначала мы не полняли, потом тоже не поняли, но сделали. Клиент прислал макеты и удивительно то, что наша веб студия будет делать портфолио для другой веб студии:D Что ж, и такое значит бывает. Интересные фичи: фиксированное боковое меню и весь контент должен быть всегда в обозреваемом окне. С задачей справились на отлично! Позже клиент установил админку "Битрикс" самостоятельно и еще не раз обращались к нам за помощью, потому что забыли добавить пагинацию, кнопки соц сетей и многое другое. Видимо у них в команде не было верстальщиков. Ну у нас то всё окей с этим;)' />

        <CardWork
          name_work='Корпоративный сайт компании'
          priviewUrl='/images/130-Continent-Express.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='В данной работе большое внимание уделено дизайну. Различные анимационные решения, кастомизированные эфекты при наведении на элементы. Динамический счетчик статистики.' />

        <CardWork
          name_work='Лэндинг для онлайн продаж услуг'
          priviewUrl='/images/129-Свадебный-организатор-Рязань.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='Интересное было задание. У клиента были утеряны связи с предыдущим верстальщиком. А так же пароли от хостинга. Необходимо было скопировать сайт и небольшой редизайн. А так же добавить админку для редактирования цен услуг. Здесь реализованы: галлерея фото, всплывающие окна, отправка письма на почту клиента.' />

        <CardWork
          name_work='Лэндинг для онлайн продаж'
          priviewUrl='/images/137-Кресла-мешки-в-Рязани-на-заказ.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='Дизайн клиента в точности со слов клиента. Подключены всплывающие окна. Использован маркетинговый ход "Петя купил", "Акция: купи сегодня и получишь скидку". ' />

        <CardWork
          name_work='Корпоративный сайт фирмы систем видео наблюдения'
          priviewUrl='/images/136-Компания-KeepKey.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='В данной работе требовался полный редизайн и адаптация под мобильный версии.' />

        <CardWork
          name_work='Простой шаблонный лэндинг'
          priviewUrl='/images/135-Title.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagNextjs',
            'TagNode',
            'TagReact',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='Был сверстан для наполнения портфолио. Из особенностей: слайдер' />

      </main>
      <Footer />

    </div>
  )
}
