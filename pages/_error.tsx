import Link from 'next/Link';
import Footer from "../components/Footer/Footer";

function Error({ statusCode }) {
    return (
        <div className='container'>
            <main>
                <p>
                    {statusCode
                        ? `На сервере произошла ошибка ${statusCode} :(`
                        : 'Упс...какая-то ошибка на клиенте произошла :('}
                </p>
                <Link href='/'><a>◄ На главную</a></Link>
            </main>
            <Footer />
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error