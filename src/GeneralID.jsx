import React, { useState } from 'react';

export default function GeneralID ( { currData, dataSetter} ) {
    const info = require('./data/generic.json');
    const profile_image = require(`./images/${info.picture}`);

    let [isToggled, setIsToggled] = useState(false);
    function toggleSettings () {
        setIsToggled(!isToggled);
    }

    let settingsElement = isToggled ? <Settings currData={currData} setData={dataSetter}/> : null;
    return (
      <>
        <div className='info-data'>
          <img src={profile_image} alt="" onClick={() => toggleSettings()}/>
          <div className='text-info'>
            <div id='name'>{`${info.name.first} ${info.name.last}`}</div>
            <div id='profession'>{info.profession}</div>
          </div>
        </div>
        {settingsElement}
      </>
    )
}

function Settings ( { currData , setData }) {
    const options = Object.keys(require('./data/specific.json'));
    const checkboxes = options.map( (data, index) => {
        return <CheckBox key={index} data={data} selected={currData} changeData={setData}/>
    });
    return (
      <form className='settings'>
        {checkboxes}
      </form>
    )
}

function CheckBox ( { index, data, selected, changeData}) {
    let [isChecked, setChecked] = useState([...selected].includes(data));
    function handleClick (e) {
        setChecked(!isChecked);
        // change this into a function that doesn't contain `data`
        let currData = (isChecked) ?
            arrayWithoutData([...selected], data):
            arrayWithData([...selected], data);
        let updatedSet = new Set(currData);
        changeData(updatedSet);
    }

    data = data.charAt(0).toUpperCase() + data.slice(1);
    return (
      <div onClick={(e) => handleClick(e)}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => handleClick(e)}
        />
        <label>{data}</label>
      </div>
    )
}

function arrayWithoutData (A, data) {
    let finlist = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== data) {
            finlist.push(A[i]);
        }
    }
    return finlist;
}

function arrayWithData (A, data) {
    let finlist = A;
    finlist.push(data);
    return finlist;
}

