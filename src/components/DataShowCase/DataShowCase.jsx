import '../../styles/data_showcase.scss';

function DataShowCase ( { specificData, shownData, setShownData, visibleShowcase } ) {
    let dataComponents = Object.keys(specificData).map( (data, index) => {
        return (
          <label key={index}>
            <input
              type="checkbox"
              checked={shownData.includes(data)}
              onChange={() => {
                  let dupData = shownData.slice();
                  if (shownData.includes(data)) {
                      dupData.splice(dupData.indexOf(data), 1);
                  }
                  else {
                      dupData.push(data);
                  }
                  setShownData(dupData);
              }}
            />
            <span>{data}</span>
            
          </label>
        )
    });
    return (
      <div className={'data-showcase ' + (visibleShowcase ? 
          'visible': 'invisible')
      }>
        {dataComponents}
      </div>
    )
}

export default DataShowCase;
