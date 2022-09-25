import '../../styles/basic_data.scss';
import ImageHolder from './ImageHolder';
import TitleHolder from './TitleHolder';
import HamBurger from './HamBurger';

function BasicData ( { pictureSrc, name, description, visibleShowcase, setVisibleShowcase } ) {
    return (
        <div className='basic-data'>
          <ImageHolder pictureSrc={pictureSrc}/>
          <TitleHolder name={name} description={description}/>
          <HamBurger
            visibleShowcase={visibleShowcase}
            setVisibleShowcase={setVisibleShowcase}
          />
        </div>
    )
}

export default BasicData;

