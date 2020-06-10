import Link from 'next/link';

const LinkButton = (props) => {
    return (
        <Link href={props.link}><a>{props.name}</a></Link>
    )
}

export default LinkButton;