import Typewriter from "typewriter-effect";
import { Bio } from '../data/fixedData';
import heroImage from "../images/heroImage.jpg"
import {
  Button,
  Typography,
} from "@material-tailwind/react";


export default function HeroSection() {
  return (
    <>
      <header id="about" className="p-4">
        <div className="mt-2 w-full">
          <div className=" grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 text-center">
            <div className="items-center justify-between">
              <img
                className="m-auto h-80 w-80 rounded-full object-cover object-center shadow-xl shadow-blue-gray-900/50 border"
                src={heroImage}
                alt="profile image"
              />
            </div>
            <div className="p-4">
              <Typography
                variant="h1"
                className="mx-2 my-2 w-full text-center"
              >
                Hi, I'm {Bio.name}<br />
              </Typography>
              <Typography 
                variant="h2"
                color="indigo"
                className="mx-auto my-2 w-full  text-center">
                  I am
                    <span className="leading-snug">
                      <Typewriter 
                        options={{ 
                          strings: Bio.roles, 
                          autoStart: true, 
                          loop: true,
                        }} 
                      />

                    </span>
              </Typography>
              <Typography
                variant="lead"
                className="px-2 w-full lg:text-lg text-center"
              >
                {Bio.description}
              </Typography>

            </div>
          </div>
          <div className="mt-12">
            <div className="justify-center items-center flex flex-row gap-12">
              <a href={Bio.resume} target="_blank" rel="noreferrer">
                <Button className="bg-indigo-300 rounded-full px-4 md:w-[12rem]">View Resume</Button>
              </a>
              <a href={Bio.github} target="_blank" rel="noreferrer">
                <Button className="bg-indigo-300 rounded-full px-4 md:w-[12rem]">Visit GitHub Account</Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
