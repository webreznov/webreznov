import { TagWrapp, TagImgWrapp, TagDescriptionWrapp } from './TagTemplateStyle'

const TagTemplate = (props) => {

    return (<TagWrapp>
        <TagImgWrapp>
            <img src={props.urlImg} alt={props.TagHeader}/>
        </TagImgWrapp>
        <TagDescriptionWrapp>
            <h3>{props.TagHeader}</h3>
            <p>{props.description}</p>
        </TagDescriptionWrapp>
    </TagWrapp>)
}

export default TagTemplate;