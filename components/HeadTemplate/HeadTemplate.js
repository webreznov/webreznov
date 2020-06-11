import Head from "next/head"

const HeadTemplate = (props) => {
    return (<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`WebReznov&co - ${props.titleName}`}</title>
        <meta name="description" content="Разработка сайтов под ключ. Доработка и исправление ошибок на сайтах." />
        <meta property="og:description" content="Разработка сайтов под ключ. Доработка и исправление ошибок на сайтах." />
        <meta name="robots" content="index, nofollow" />
        <meta name="keywords" content="сайт цена, веб агентство, создание сайта, react, wordpress, modx" />
        <meta property="og:title" content="WebReznov&co - Веб-студия" />
        <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {props.google_metrika ? props.google_metrika : ''}
        {props.yandex_metrika ? props.yandex_metrika : ''}
    </Head>)
}

export default HeadTemplate;