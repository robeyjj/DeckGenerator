import React, { useState, useEffect } from 'react';

function CardCaller() {     
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://api.magicthegathering.io/v1/cards?cmc=5&pageSize=4&random=true')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
      }, []);    

    return (
        <div>
          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
      );
}

export default CardCaller;