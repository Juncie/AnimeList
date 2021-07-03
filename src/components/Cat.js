import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Cat(props) {

    useEffect(() => {
        axios
            .get(`https://api.thecatapi.com/v1/images/search?breed_id=beng`)
            //?api_key=22e32fe3-ffe4-4876-82fc-7417fd12b641
            .then(res => console.log(res))
    }, [])
    return (
        <div>
            Cat
        </div>
    );
}

export default Cat;