import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllBeer(props) {
const [allBeers, setAllBeers] = useState([])

useEffect ( () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(res => {
        setAllBeers(res.data)
    })
},[]) 

console.log(allBeers)
function ShowBeers(){
   return allBeers.map((beer) => {
        return(
            <Link to={`/one-beer/${beer._id}`}>
            <div className="beers">
                <img src={beer.image_url} style={{width: '15%'}}/>
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <h5>{beer.contributed_by}</h5>
                </div>
            </div>
                <hr></hr>
                </Link>
        )
    })
}

    return (

        <div>
            AllBeer
            <ShowBeers/>
        </div>
    );
}

export default AllBeer;