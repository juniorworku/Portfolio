import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import heroImage from "../images/heroImage.jpg"
import { Link as ScrollLink } from "react-scroll";
import { styled } from "styled-components";
 
export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const NavLink = styled(ScrollLink)`
    text-decoration: none;
    font-weight: 500;
    color:#000;
    font-family: "Montserrat", sans-serif;
    cursor:pointer;
    transition:all 0.5s ease-in-out;
    position:relative;

    &:hover{
      background-image:linear-gradient(90deg, rgba(46,56,116,1) 0%, rgba(9,121,21,1) 100%, rgba(0,255,15,0) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    `;

  return (
    <Navbar className="bg-indigo-50 mx-auto max-w-screen-xl px-4 py-2 lg:rounded-full lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-4">
          <Avatar src={heroImage} alt="avatar" as="a" href="#" className="cursor-pointer" />
          <div>
            <Typography variant="h6">Junior Worku</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Web Developer
            </Typography>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="mt-4 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
              <NavLink
                to="about" 
                smooth={true} 
                duration={1500}
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="skills" 
                smooth={true} 
                duration={1500}
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="project" 
                smooth={true} 
                duration={1500}
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="contact" 
                smooth={true} 
                duration={1500}
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <ui>
            <li>
              <NavLink
                to="about" 
                smooth={true} 
                duration={1500}
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="skills" 
                smooth={true} 
                duration={1500}
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="project" 
                smooth={true} 
                duration={1500}
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="contact" 
                smooth={true} 
                duration={1500}
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Contact Me
              </NavLink>
            </li>
            
          </ui>
        </div>
      </MobileNav>
      
    </Navbar>
  );
}