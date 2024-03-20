import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { projects } from "../data/fixedData";

export default function Projects() {
  return (
    <div id='project'>
        <Typography variant="h3" className="m-0 relative text-4xl font-bold md:text-5xl text-center">PROJECTS</Typography>
        <Typography className="text-center font-medium m-0 font-montserrat items-stretch py-3" variant="h6">
            Below, you'll find an overview of the various projects i've had the
            privilege to work on thus far:
        </Typography>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((item) =>(
              <div key={item.id + 32}>
                <Card className="bg-indigo-200 relative py-1 px-2 rounded-3xl w-97 my-4 shadow-xl min-h-18em p-4 transition-transform duration-1000 ease-in-out hover:transform hover:scale-103 hover:shadow-lg">
                    <CardHeader shadow={false} floated={false} className="cursor-pointer max-w-19em p-0.5 flex flex-col justify-between gap-4 rounded-md shadow-md transition-all duration-500 ease-in-out hover:shadow-none">
                      <img 
                        src={item.image}
                        alt="projectImage"
                        className="w-full rounded-md transition-all duration-1500 ease-in-out md:hover:transform md:hover:scale-180" 
                      />
                    </CardHeader>
                    <CardBody className="text-black">
                      <Typography variant="h5" className="text-center mb-4 uppercase underline ">
                        {item.title}
                      </Typography>
                      <div className="flex flex-row flex-wrap gap-3">
                        {item.tags.map((tag) => (
                          <Button variant="filled" className="mb-2 bg-indigo-100 items-center justify-center gap-2 p-2 border border-white rounded-full text-md cursor-pointer hover:transform hover:scale-103 hover:shadow-md transition-transform hover:-translate-y-2 ease-in-out">{tag}</Button>
                        ))}
                      </div>
                      <Typography className="mb-8 font-normal">
                        {item.description}
                      </Typography>
                      {item.link && (
                        <a 
                          href={item.link}
                          className="inline-block"
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          <Button variant="text" className="flex items-center gap-2">
                            Live demo
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </Button>
                        </a>
                      )}
                      
                      <a 
                        href={item.repository}
                        className="inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="text" className="flex items-center gap-2">
                          Go to repository
                          <svg
                            className="octicon octicon-mark-github h-6 w-6"
                            height="24"
                            viewBox="0 0 16 16"
                            width="24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            ></path>
                          </svg>
                        </Button>
                      </a>
            
                    </CardBody>
                </Card>
              </div>
              
            ))}

          </div>

        </div>

    </div>
    
  )
}
