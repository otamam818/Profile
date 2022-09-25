import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import BasicData from './components/BasicData/BasicData';
import DataShowCase from './components/DataShowCase/DataShowCase';
import SpecificData from './components/SpecificData/SpecificData';

function Index () {
    const generalData = useState(require('./data/generic.json'))[0];
    const specificData = require('./data/specific.json');
    let [shownData, setShownData] = useState(['phone', 'email']);

    let [visibleShowcase, setVisibleShowcase] = useState(false);
    return (
      <>
        <BasicData 
          pictureSrc={generalData.picture}
          description={generalData.descriptions[0]} 
          name={generalData.name.first + ' ' + generalData.name.last}
          visibleShowcase={visibleShowcase}
          setVisibleShowcase={setVisibleShowcase}
        />
        <DataShowCase
          specificData={specificData}
          shownData={shownData}
          setShownData={setShownData}
          visibleShowcase={visibleShowcase}
        />
        <SpecificData
          specificData={specificData}
          shownData={shownData}
        />
      </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

