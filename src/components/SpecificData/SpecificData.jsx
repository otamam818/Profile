import '../../styles/specific_data.scss';
import IconMapper from '../Generic/IconMapper';

function SpecificData ( { specificData, shownData } ) {
    let dataComponents = shownData.map( (data, index) => {
        return (
          <div key={index} className='data-atom'>
            <label className='title'>
              {data}
            </label>
            <label className='info'>
              <IconMapper iconName={data} />
              <div>{specificData[data]}</div>
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
