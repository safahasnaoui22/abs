import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { data } from "../restApi.json";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav>
 <img className="imglogo" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/410825070_378422484558967_652652092636253458_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=syK6DW7lqfUQ7kNvgF-ieRb&_nc_ht=scontent.ftun1-2.fna&oh=00_AYBkk7vxQReM1ttITcvn4Qj07TzhDXm9lLOSJLEePV20sA&oe=668C61AB"></img>
      
      
      <div className='logo'>
     
        
        
         </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className='links'>
          {
            data[0].navbarLinks.map(element => (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            ))
          }
        </div>
        {/* Use Link component from react-router-dom to navigate to menu page */}
        <NavLink to="/menu">
          <button className='menuBtn'>OUR MENU</button>
        </NavLink>
      </div>
      <div className='hamburger' onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;

