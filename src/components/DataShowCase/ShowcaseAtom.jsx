
function ShowcaseAtom ( { data, index, shownData, setShownData } ) {
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
}

export default ShowcaseAtom;

