type PropsType = {
    name: string
}

const Button = (props: PropsType) => {
    return (
        <div>{props.name}</div>
    )
}

export default Button;