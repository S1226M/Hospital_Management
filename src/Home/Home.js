import React from 'react';
import hospitalImage from 'D:/Study/Madical Manahement/hospital/src/images/HomePage.jpg'; // Use a relative path to your image
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Background Image */}
      <img 
        src={hospitalImage} 
        alt="Home" 
        className="bgBack" 
      />

      {/* Text Content (above the image) */}
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
