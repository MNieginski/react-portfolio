import { useState, useEffect } from "react";

function About() {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("./about.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getAboutData() } , []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
        <h2>If you would like to get in contact, you can find me at the following:</h2>
        <a href="https://www.linkedin.com/in/mikal-nieginski1/">LinkedLin</a>
        <h4>Email: {about.email}</h4>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;