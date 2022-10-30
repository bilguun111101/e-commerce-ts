import "./Home.scss";
import React from 'react'
import SectionOne from "./BuildHomeSection/SectionOne";
import SectionTwo from "./BuildHomeSection/SectionTwo";

const HomePage: React.FC = () => {
  return (
    <section className='home-section'>
      <SectionOne />
      <div className="home-section__container">
        <SectionTwo />
      </div>
    </section>
  )
}

export default HomePage