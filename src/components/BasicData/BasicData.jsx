import '../../styles/basic_data.scss';
import ImageHolder from './ImageHolder';
import TitleHolder from './TitleHolder';

function BasicData ( { pictureSrc, name, description, visibleShowcase, setVisibleShowcase } ) {
    return (
        <div className='basic-data'>
          <ImageHolder
            pictureSrc={pictureSrc}
            visibleShowcase={visibleShowcase}
            setVisibleShowcase={setVisibleShowcase}
          />
          <TitleHolder name={name} description={description}/>
        </div>
    )
}

export default BasicData;

