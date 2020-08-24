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
          descript='Был сверстан' 
          key='1'/> */}

        <CardWork
          name_work='Сайт ветеринарной клиники'
          priviewUrl='/images/doctorvet62.ru.jpg'
          tags={[            
            'TagHtml',
            'TagModx',            
            'TagSass',            
          ]}
          descript='Задача: добавить адаптивность под разные устройства. Сайт был установлен уже на CMS Modx и необходимо внедряться в структуру.'
          key='13' />

        <CardWork
          name_work='Большой сайт - "Центр Кластерного Развития"'
          priviewUrl='/images/CKS-Homepage.jpg'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagNode',
            'TagSass',
          ]}
          descript='Большой объём работы выполнен в кратчайшие сроки. Ежедневные созвоны для обсуждения текущего этапа. Использование github pages поп росьбе заказчика. Красивое поведение меню. Многочисленные слайдеры, табы, popup'
          key='12' />

        <CardWork
          name_work='Онлайн магазин автокресел'
          priviewUrl='/images/FireShot Capture 016 - Главный пассажир - avtokresla.net.png'
          tags={[
            'TagBitrix',
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='Задача: редизайн. На сайт уже установлена CMS и необходимо было внедряться в огромное количество компонентов чтобы выполнить задачу. А так же минимальное изменение вёрстки, только CSS'
          key='11' />

        <CardWork
          name_work='Сервис для криптовалюты'
          priviewUrl='/images/134-Tezosbakes-Delegation-Service.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagModx',
            'TagSass',
          ]}
          descript='Криптовалюта и небольшой сервис по работе с ней. Красивые анимации и космический дизайн заставляют пользователей проводить максимальное время на странице. Дизайн великолепный!'
          key='10' />

        <CardWork
          name_work='Простой шаблонный лэндинг'
          priviewUrl='/images/156-arancucineland.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='Цепляющий лэндинг с различными "захватами": отзывы, призывы связяться, преимцщества, специальное предложение'
          key='9' />

        <CardWork
          name_work='Небольшой но очень информативный лэндинг.'
          priviewUrl='/images/143-Tezoshop.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='В тематике криптовалюты не очень понимаю, но сверстать по макету вопросов не вызывает. Макет нашей студии. Заказчик доволен. Красивая анимация.'
          key='8' />

        <CardWork
          name_work='Корпоративный информационный сайт Рязанского производителя клеевых продуктов.'
          priviewUrl='/images/140-ООО _Рикол_-Клей-ПВА.png'
          tags={[
            'TagHtml',
            'TagSass',
            'TagSQL',
            'TagWordpress'
          ]}
          descript='Требовалось вдохнуть жизнь в старый дизайн 2000-ых годов. Дизайн со слов заказчика.  Справились на ура!'
          key='7' />

        <CardWork
          name_work='Сайт портфолио веб студии'
          priviewUrl='/images/148-zyym-bxx.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='Сначала мы не полняли, потом тоже не поняли, но сделали. Клиент прислал макеты и удивительно то, что наша веб студия будет делать портфолио для другой веб студии:D Что ж, и такое значит бывает. Интересные фичи: фиксированное боковое меню и весь контент должен быть всегда в обозреваемом окне. С задачей справились на отлично! Позже клиент установил админку "Битрикс" самостоятельно и еще не раз обращались к нам за помощью, потому что забыли добавить пагинацию, кнопки соц сетей и многое другое. Видимо у них в команде не было верстальщиков. Ну у нас то всё окей с этим;)'
          key='6' />

        <CardWork
          name_work='Корпоративный сайт компании'
          priviewUrl='/images/130-Continent-Express.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='В данной работе большое внимание уделено дизайну. Различные анимационные решения, кастомизированные эфекты при наведении на элементы. Динамический счетчик статистики.'
          key='5' />

        <CardWork
          name_work='Лэндинг для онлайн продаж услуг'
          priviewUrl='/images/129-Свадебный-организатор-Рязань.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='Интересное было задание. У клиента были утеряны связи с предыдущим верстальщиком. А так же пароли от хостинга. Необходимо было скопировать сайт и небольшой редизайн. А так же добавить админку для редактирования цен услуг. Здесь реализованы: галлерея фото, всплывающие окна, отправка письма на почту клиента.'
          key='4' />

        <CardWork
          name_work='Лэндинг для онлайн продаж'
          priviewUrl='/images/137-Кресла-мешки-в-Рязани-на-заказ.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='Дизайн клиента в точности со слов клиента. Подключены всплывающие окна. Использован маркетинговый ход "Петя купил", "Акция: купи сегодня и получишь скидку". '
          key='3' />

        <CardWork
          name_work='Корпоративный сайт фирмы систем видео наблюдения'
          priviewUrl='/images/136-Компания-KeepKey.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='В данной работе требовался полный редизайн и адаптация под мобильный версии.'
          key='2' />

        <CardWork
          name_work='Простой шаблонный лэндинг'
          priviewUrl='/images/135-Title.png'
          tags={[
            'TagBootstrap',
            'TagHtml',
            'TagSass',
          ]}
          descript='Был сверстан для наполнения портфолио. Из особенностей: слайдер'
          key='1' />

      </main>
      <Footer />

    </div>
  )
}
