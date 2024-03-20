import {
    Card,
    CardBody,
    Typography,
    Button,
    CardHeader,
  } from "@material-tailwind/react";

import { skills } from "../data/fixedData";
  
  export default function Skills() {
    return (
      <>
      <div id="skills">
            <Typography variant="h3" className="m-0 relative text-4xl font-bold md:text-5xl text-center">
            Skills
            </Typography>
            <Typography className="text-center font-medium m-0 font-montserrat items-stretch py-3" variant="h6">
            Check out some of the skills i've been working on:
            </Typography>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {skills.map((skillCategory) => (
                  <Card
                  key={skillCategory.title}
                  className="bg-indigo-200  relative py-1 px-2 rounded-3xl w-97 my-4 shadow-xl min-h-18em p-4 transition-transform duration-1000 ease-in-out hover:transform hover:scale-103 hover:shadow-lg"
                  >
                  <CardHeader className=" bg-light-green relative m-0 text-4xl font-bold md:text-5xl">
                      <Typography variant="h4" className="text-center text-black">
                      {skillCategory.title}
                      </Typography>
                  </CardHeader>
                  <CardBody className="flex flex-wrap items-center justify-center gap-5 self-center mb-4">
                      {skillCategory.skills.map((skill) => (
                      <Button
                          key={skill.name}
                          className="bg-indigo-100 flex flex-wrap items-center justify-center gap-2 p-2 border border-white rounded-full text-lg cursor-pointer hover:transform hover:scale-103 hover:shadow-md transition-transform hover:-translate-y-2 ease-in-out"
                      >
                          <img
                          className="w-5 h-5"
                          src={skill.image}
                          alt={skill.name}
                          />
                          {skill.name}
                      </Button>
                      ))}
                  </CardBody>
                  </Card>
              ))}
              </div>

            </div>
            

        </div>
      </>
    );
  }
  