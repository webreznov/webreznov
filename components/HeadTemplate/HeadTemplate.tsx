import Head from "next/head"

type PropsType = {
    titleName: string
}

const HeadTemplate = (props: PropsType) => {
    return (<Head>         
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`WebReznov&co - ${props.titleName}`}</title>        
        <meta name="description" content="Разработка сайтов под ключ. Доработка и исправление ошибок на сайтах." />
        <meta property="og:description" content="Разработка сайтов под ключ. Доработка и исправление ошибок на сайтах." />
        <meta name="robots" content="index, nofollow" />
        <meta name="keywords" content="сайт цена, веб агентство, создание сайта, react, wordpress, modx" />
        <meta property="og:title" content="WebReznov&co - Веб-студия" />
        <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico"/>
    </Head>)
}

export default HeadTemplate;