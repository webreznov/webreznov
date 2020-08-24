import TagBitrix from '../common/tags/TagBitrix/TagBitrix'
import TagBootstrap from '../common/tags/TagBootstrap/TagBootstrap'
import TagHtml from '../common/tags/TagHtml/TagHtml'
import TagModx from '../common/tags/TagModx/TagModx'
import TagNextjs from '../common/tags/TagNextjs/TagNextjs'
import TagNode from '../common/tags/TagNode/TagNode'
import TagReact from '../common/tags/TagReact/TagReact'
import TagSass from '../common/tags/TagSass/TagSass'
import TagSQL from '../common/tags/TagSQL/TagSQL'
import TagWordpress from '../common/tags/TagWordpress/TagWordpress'
import { Preview, CardBlock } from './style'

const CardWork = (props) => {
    const renderTags = (tagsArray) => {
        let resultArray = [];
        tagsArray.forEach((i) => {            
            if (i === 'TagBitrix') resultArray.push(<TagBitrix />);
            if (i === 'TagBootstrap') resultArray.push(<TagBootstrap />);
            if (i === 'TagHtml') resultArray.push(<TagHtml />);
            if (i === 'TagModx') resultArray.push(<TagModx />);
            if (i === 'TagNextjs') resultArray.push(<TagNextjs />);
            if (i === 'TagNode') resultArray.push(<TagNode />);
            if (i === 'TagReact') resultArray.push(<TagReact />);
            if (i === 'TagSass') resultArray.push(<TagSass />);
            if (i === 'TagSQL') resultArray.push(<TagSQL />);
            if (i === 'TagWordpress') resultArray.push(<TagWordpress />);            
        });    
        return resultArray;
    }
    return (<CardBlock>
        <div className='work_name'>
            <h2>{props.name_work}</h2>
        </div>
        <Preview>
            <img src={props.priviewUrl} alt='preview'/>
        </Preview>
        <div className='use_technologies'>
            {renderTags(props.tags)}
        </div>
        <div className='descript_work'>
            <p>{props.descript}</p>
        </div>
    </CardBlock>)
}

export default CardWork;