import '../../styles/specific_data.scss';

function SpecificData ( { specificData, shownData } ) {
    let dataComponents = shownData.map( (data, index) => {
        return (
          <div key={index} className='data-atom'>
            <label className='title'>
              {data}
            </label>
            <label className='info'>
              {specificData[data]}
            </label>
          </div>
        )
    });
    return (
      <div className='specific-data'>
        {dataComponents}
      </div>
    )
}

export default SpecificData;
