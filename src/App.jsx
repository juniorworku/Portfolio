import './App.css'
import { darkTheme } from "./utils/theme";
import HeroSection from './components/heroSection'
import NavBar from './components/navBar'
import Skills from './components/skills'
import { ThemeProvider } from '@material-tailwind/react';
import Projects from './components/projects';
import ContactMeSection from './components/contactMe';
import FooterSection from './components/footer';
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="bg-indigo-100 w-full overflow-x-hidden flex flex-col justify-center items-center gap-12 relative">
        <NavBar/>
        <HeroSection />
        <Skills />
        <Projects />
        <ContactMeSection />
        <FooterSection />
        
      </div>
    </ThemeProvider>
  )
}

export default App
