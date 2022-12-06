import {useState, useEffect} from 'react';

function CityData(props) {
  const [data, setData]=useState([]);
  useEffect(() => {

    fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        setData(json)
        console.log(json)
    })
    .catch(console.error)
}, [])

  return (
    <div className="App">
        {data.map((data, index) => {
            return(
                <div className='buttons'>
                    <button>{data.city}</button>
                </div>
            )
        })}
    
      
      
    </div>
  );
}

export default CityData;