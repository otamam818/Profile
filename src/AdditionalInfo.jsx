import React from 'react';
import { Icon } from '@iconify/react';
const info = require('./data/specific.json');

export default function AdditionalInfo ({ data }) {
    let infoBoxes = [...data].map( (currData, index) => {
        return <InfoBox key={index} description={currData} data={info[currData]}/>
    });
    return (
      <div className='info-container'>
        {infoBoxes}
      </div>
    )
}

function InfoBox ({ description, data }) {
    description = description.charAt(0).toUpperCase() + description.slice(1);
    const chosenIcon = {
      'Phone' : 'bi:telephone-fill',
      'Address' : 'bi:house-fill',
      'Student ID' : 'bi:credit-card-2-back-fill',
    }[description];
    return (
      <div className='container-data'>
        <div id='description'>{description}</div>
        <div id='data'>
          <Icon icon={chosenIcon}/>
          {data}
        </div>
      </div>
    )
}

