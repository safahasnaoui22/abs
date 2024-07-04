import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className='about' id='about' >
      <div className='container' >
        <div className='banner' >
          <div className='top'>
            <h1 className='heading'>ABOUT US</h1>
          <p>The only thing we are serious about is food </p>
          </div>

<p className='mid'>
At Abou Sofiane Hotel & Aquapark, we're passionate about creating unforgettable dining experiences. Indulge in a rich tapestry of flavors that highlight our commitment to culinary excellence. From locally-inspired dishes to global favorites, each meal is a celebration of taste and quality, set in the vibrant ambiance of our hote
</p>
<Link to={"/menu"} >Explore Menu
<span>
  <HiOutlineArrowNarrowRight/>
</span>
</Link>
        </div>

        <div className="banner">
          <img src='/about.png' alt='about' />
        </div>
      </div>
    </section>
  )
}

export default About