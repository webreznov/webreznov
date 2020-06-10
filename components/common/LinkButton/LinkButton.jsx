import Link from 'next/Link';

const LinkButton = (props) => {
    return (
        <Link href={props.link}><a>{props.name}</a></Link>
    )
}

export default LinkButton;