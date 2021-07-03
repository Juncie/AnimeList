import React, { useState } from 'react';
import axios from 'axios'

function NewBeer(props) {

    const [beerObj, setBeerObj] = useState({})

    const handleChange = (e) => {
        let copyBeer = { ...beerObj }
        copyBeer[e.target.name] = e.target.value
        setBeerObj(copyBeer)
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        beerObj.attenuation_level = Number(beerObj.attenuation_level)
        console.log(beerObj)

        axios.post(`https://ironrest.herokuapp.com/beers`, beerObj).then(res => {
            console.log(res)

        }).catch(console.error)
    }

    return (
        <div>
            NewBeer!
            <form onSubmit={handleSubmit}>
                <input name="beer" onChange={handleChange} placeholder="name" type="text" />
                <input name="tagline" onChange={handleChange} placeholder="tagline" type="text" />
                <input name="description" onChange={handleChange} placeholder="description" type="text" />
                <input name="attenuation_level" onChange={handleChange} placeholder="attenuation_level" type="number" />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default NewBeer;