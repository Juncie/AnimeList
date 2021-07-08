import React, { useEffect } from 'react';
import axios from 'axios';


const Test = () => {

    const testFun = async () => {
        let del = await axios.delete(`https://ironrest.herokuapp.com/deleteCollection/AniToons2/`)
    }
   

    //   let name = "BJMAX"
    //   let favorite = "Demon Slayer"
    //   let id = "Favorites"
      
      
    //   const testFun = async () => {
    //       let xer = await axios.post(`https://ironrest.herokuapp.com/AniToons2/`,  { _id: id, name: name, favorite: favorite } )
    //   }

    

    return (
        <div>
            {/* <button onClick={testFun()}>
                DO THIS TO WIN      
            </button> */}
        </div>
            
      
    );
};

export default Test;