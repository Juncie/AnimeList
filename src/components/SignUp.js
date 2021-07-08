import axios from "axios";
import React, { useState } from "react";

function SignUp(props) {
  let [name, setName] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let res = await axios.get(
    //   `https://ironrest.herokuapp.com/findOne/AniToonsFavorites?user=${name}`
    // );
    // console.log(res);
    // if (!res.data) {
      localStorage.setItem("user", name);
      props.history.push('/')
    // } else {
    //   alert("user with same name");
    // }
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
