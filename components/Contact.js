import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const [joke, setjoke] = useState();

  const gtJoke = async() => {
    let jk = await fetch('https://api.chucknorris.io/jokes/random')
    let result = await jk.json()
    console.log(result.value)
    setjoke(result.value)
  };




  const foo = (url) => {
    console.log("hello contact page", navigate(url));
  };

  return (
    <div>
      Contact
      
      {
        joke?<text>{joke}</text>:<text>no jokes</text>
      }
      
      <button onClick={gtJoke}>get jokes</button>
      <button onClick={() => foo("/about")}>GOTO TO ABOUT</button>
    </div>
  );
}

export default Contact;
