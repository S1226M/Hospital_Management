import React from 'react';
import hospitalImage from '../images/HomePage.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home">

      <img 
        src={hospitalImage} 
        alt="Home" 
        className="bgBack"
      />

      <div className="textContainer">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          consequuntur voluptate enim necessitatibus, dolorem modi quidem deserunt
          hic esse? Ratione consequuntur delectus eveniet. Doloribus harum
          necessitatibus voluptatibus cumque quis. Distinctio.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          consequuntur voluptate enim necessitatibus, dolorem modi quidem deserunt
          hic esse? Ratione consequuntur delectus eveniet.
        </p>
      </div>
    </div>
  );
}

export default Home;
