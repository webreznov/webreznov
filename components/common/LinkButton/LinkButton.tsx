import Link from 'next/Link';

type PropsType = {
    name: string
    link: string
}

const LinkButton = (props: PropsType) => {
    return (
        <Link href={props.link}><a>{props.name}</a></Link>
    )
}

export default LinkButton;