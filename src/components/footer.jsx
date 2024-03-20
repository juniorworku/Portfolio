import {
    FaGithub,
    FaLinkedin,
    FaTelegramPlane,
  } from "react-icons/fa";
import { socialLinks } from "../data/fixedData";
import { Typography } from "@material-tailwind/react";
import { Link as ScrollLink } from "react-scroll";
import { styled } from "styled-components";

const FooterNavLink = styled(ScrollLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125em;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  position: relative;

  &:hover{
    background-image:linear-gradient(90deg, rgba(46,56,116,1) 0%, rgba(9,121,21,1) 100%, rgba(0,255,15,0) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  `;


export default function FooterSection() {
  return (
    <div>
        <footer className="w-full flex flex-col items-center justify-center gap-2 lg:gap-3 py-2 lg:py-4">
            <Typography varaint="h1" className="font-montserrat font-bold">Junior Worku</Typography>
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 text-center md:justify-between">
                <ul className="flex justify-center gap-y-2 gap-x-12 text-center">
                    <li>
                        <FooterNavLink
                            to="about"
                            smooth={true}
                            duration={1500}
                            className="font-semibold font-montserrat cursor-pointer transition-all duration-500 ease-in-out relative"
                        >
                            About me
                        </FooterNavLink>
                    </li>
                    <li>
                        <FooterNavLink
                            to="skills"
                            smooth={true}
                            duration={1500}
                            className="font-semibold font-montserrat cursor-pointer transition-all duration-500 ease-in-out relative"
                        >
                            Skills
                        </FooterNavLink>
                    </li>
                    <li>
                        <FooterNavLink
                            to="project"
                            smooth={true}
                            duration={1500}
                            className="font-semibold font-montserrat cursor-pointer transition-all duration-500 ease-in-out relative"
                        >
                            Projects
                        </FooterNavLink>
                    </li>
                    <li>
                        <FooterNavLink
                            to="contact"
                            smooth={true}
                            duration={1500}
                            className="font-semibold font-montserrat cursor-pointer transition-all duration-500 ease-in-out relative"
                        >
                            Contact Me
                        </FooterNavLink>
                    </li>
                </ul>
            </div>
            <div className="flex gap-2">
                <Typography as="a" href={socialLinks.github} target="_blank" className="transition-all duration-500 ease-in-out hover:transform hover:scale-180">
                    <FaGithub size={35} />
                </Typography >
                <Typography as="a" href={socialLinks.linkedin} target="_blank" className="transition-all duration-500 ease-in-out hover:transform hover:scale-180">
                    <FaLinkedin size={35} />                    
                </Typography>
                <Typography as="a" href={socialLinks.telegram} target="_blank" className="transition-all duration-500 ease-in-out hover:transform hover:scale-180">
                    <FaTelegramPlane size={35}  />                    
                </Typography>
            </div>
            <hr className="my-1 border-blue-gray-50" />
            <Typography className="text-center font-normal">
                &copy; 2024 Junior Worku
            </Typography>
        </footer>
      
    </div>
  )
}
