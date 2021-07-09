import axios from "axios";
import React, { useState } from "react";

function SignUp(props) {
  let [name, setName] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()  
     localStorage.setItem("user", name);
     //console.log(name);
     //console.log(localStorage);
     props.history.push("/Favorites")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text" 
          placeholder="name"
          name="user"
          required
        />

        <input style={{ textAlign: "center" }} type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
