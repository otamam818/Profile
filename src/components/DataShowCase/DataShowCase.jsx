import '../../styles/data_showcase.scss';
import ShowcaseAtom from './ShowcaseAtom';

function DataShowCase ( { specificData, shownData, setShownData, visibleShowcase } ) {
    // TODO: Add functionality to toggle between names and other things
    let dataComponents = Object.keys(specificData).map( (data, index) => {
        return <ShowcaseAtom
          data={data}
          index={index}
          shownData={shownData}
          setShownData={setShownData}
        />
    });

    return (
      <div className={'data-showcase ' + (visibleShowcase ? 
          'visible': 'invisible')
      }>
        <h2>Simple Components</h2>
        {dataComponents}
      </div>
    )
}

export default DataShowCase;
