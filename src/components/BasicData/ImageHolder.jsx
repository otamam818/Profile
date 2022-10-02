import { FaAngleDoubleDown } from "react-icons/fa";

function ImageHolder ( { pictureSrc, visibleShowcase, setVisibleShowcase  } ) {
    return (
        <div className={'image-holder'}>
          <div className={
              'options-overlay' + (visibleShowcase ?
                ' visible'
              : ' non-visible')
          }
            onClick={() => {
                setVisibleShowcase(!visibleShowcase);
            }}
          >
            <FaAngleDoubleDown />
          </div>
          <img src={require(`../../images/${pictureSrc}`)} alt="" />
        </div>
    )
}

export default ImageHolder;
