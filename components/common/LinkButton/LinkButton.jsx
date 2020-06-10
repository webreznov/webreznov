const LinkButton = (props) => {
    return (
        <a href={props.link}>{props.name}</a>
    )
}

export default LinkButton;