import React from 'react';

import officeImg from '../assets/images/office.jpg';

const Homepage = () => {
  return(
    <div className="intro">
      <h1>Digital Creative Agency</h1>
      <img src={officeImg} alt="Digital Creative Agency"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam officia fuga dicta! Veritatis alias nulla repellendus molestias neque modi necessitatibus! Possimus consectetur voluptatem tenetur odit molestiae labore eius praesentium.</p>
    </div>
  );
}

export default Homepage;