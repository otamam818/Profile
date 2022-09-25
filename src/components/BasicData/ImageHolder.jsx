
function ImageHolder ( { pictureSrc } ) {
    return (
        <div className='image-holder'>
          <img src={require(`../../images/${pictureSrc}`)} alt="" />
        </div>
    )
}

export default ImageHolder;
