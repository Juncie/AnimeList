import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeer = (props) => {
  console.log(props);
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    console.log('is use effect working?');
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        setBeer(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <img src={beer.image_url} />
      {beer.name}
      {beer.description}
    </div>
  );
};

export default RandomBeer;
