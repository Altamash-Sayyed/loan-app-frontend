import React, { useRef } from 'react'
// import { Link } from 'react-router-dom';
import {Link } from 'react-scroll';

function Nav() {
const menu = useRef()
 
const click= () => {
 
  menu.current.classList.toggle('hidden');
}
  return (
    <>
   <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white m
        "
      >
        <div ><Link to="home">
<h1 className='text-indigo-700 text-3xl'>LOAN .</h1></Link>
        </div>
        <svg
            xmlns="<http://www.w3.org/2000/svg>"
            id="menu-button"
            onClick={click}
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="hidden w-full md:flex md:items-center md:w-auto " ref={menu}>
          <ul
            className="
            bg-white
               text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0
              text-lg"
              
          >
            <li className="md:p-4 py-2 block hover:border-b-2 hover:border-indigo-700 cursor-pointer" 
                >Home
              
            </li>
            <Link to="loans" spy={true} smooth={true} offset={45} duration={500} containerId="">

            <li className="md:p-4 py-2 block hover:border-b-2 hover:border-indigo-700 cursor-pointer" 
                >Loans
            </li>
            </Link>

            <Link to="customer" spy={true}  smooth={true} offset={45} duration={500} containerId="">
            <li className="md:p-4 py-2 block hover:border-b-2 hover:border-indigo-700 cursor-pointer" 
                >Customers
            </li>
            </Link>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default Nav
