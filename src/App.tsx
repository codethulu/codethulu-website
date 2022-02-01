import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Link,
  Element,
} from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Masonry } from '@mui/lab';
import mainImage from './images/main-image.jpg';
import codethuluLogo from './images/logo.png';
import projectsList from './components/projectsList';
import './components/projectCard.css'


function App() {
  const [projects, setProjects] = useState(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes("favourites")));
  const allProjects = () => {
    setProjects(projectsList);
  }
  const filterProjects = (e: string) => {
    setProjects(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes(e)));
  }

  return (

    <div className="App">
      <Header />
      <SideLinks />
      <About />
      <ProjectShowcase allProjects={allProjects} filterProjects={filterProjects} projects={projects} />
      <Contact />

    </div>
  );
}

export default App;

const Header = () => {
  return (
    <div>

      <div className={"navbar"}>

        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={750} >
          <a className="nav-title"> HOME</a>
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={750} >
          <a className='nav-title'>ABOUT</a>
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={750} >
          <a className='nav-title'>PROJECTS</a>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={750} >
          <a className='nav-title'>CONTACT</a>
        </Link>

      </div>


    </div>
  );
}

const SideLinks = () => {
  return (
    <div>
      <div className='side-container left-side'>
        <a href='https://github.com/codethulu'><div className='link-logo github'></div></a>
        <a href='https://twitter.com/Codethulu_'><div className='link-logo twitter'></div></a>
        <a href='https://www.linkedin.com/in/brendan-bell-34b282202/'><div className='link-logo linkedin'></div></a>

        <div className='line'></div>
      </div>
      <div className='side-container right-side'>
        <p><a href='mailto: brendan@codethulu.dev'>brendan@codethulu.dev</a></p>
        <div className='line'></div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div className='container'>
      <Element name="about" className="element"></Element>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <h1>Hi, my name is Brendan.</h1>
      </ScrollAnimation>
      <div className='inner-container'>
        <img className='photo'></img>
        <div className='about-info'>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <p>I am a <span className='highlight'>software engineer</span> and <span className='highlight'>graphic designer</span>. I love to work on projects that allow me to apply both my programming skills and creativity such as web development, UI/UX design and game creation.</p>
            <p>Currently I am studying Computer Science at the University of Warwick, as well as continuing to undertake personal projects that utilise new technologies in order to develop my skillset further.</p>
          </ScrollAnimation>
        </div>
      </div>
    </div >
  );
}

interface ProjectCardProps {
  name: string; description: string; tags: string[]; image: string;
}
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className='project-card'>

      <div className={'image image-' + props.image}></div>
      <h1> {props.name} </h1>
      <p> {props.description}</p>
      {props.tags.map((e) => {
        let tagStyle = 'tag'
        if (e == "java" || e == "javascript") {
          tagStyle += ' orange'
        } else if (e == "haskell") {
          tagStyle += ' purple'
        } else if (e == "c") {
          tagStyle += ' green'
        } else if (e == "postgresql") {
          tagStyle += ' cobalt'
        } else if (e == "html" || e == "swift" || e == "favourites") {
          tagStyle += ' fire'
        } else if (e == "css" || e == "typescript") {
          tagStyle += ' ocean'
        } else if (e == "python") {
          tagStyle += ' snake'
        }
        return (
          <div className={tagStyle}>{e}</div>
        );
      })}

    </div >


  )
}

const ProjectShowcase = (props: { allProjects: any; filterProjects: any; projects: any }) => {
  return (
    <div className='container'>
      <Element name="projects" className="element"></Element>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <h1>Here are some things I have worked on.</h1>
      </ScrollAnimation>
      <button className="tag fire" onClick={() => props.filterProjects("favourites")}>FAVOURITES</button>
      <button className="tag snake" onClick={() => props.filterProjects("python")}>PYTHON</button>
      <button className="tag orange" onClick={() => props.filterProjects("java")}>JAVA</button>
      <button className="tag purple" onClick={() => props.filterProjects("haskell")}>HASKELL</button>
      <button className="tag" onClick={() => props.filterProjects("web-dev")}>WEB-DEV</button>
      <button className="tag" onClick={() => props.allProjects()}>ALL</button>
      <div>
        <div className='inner-container'>
          <Masonry
            columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
            spacing={2}
            defaultHeight={50}
            defaultColumns={3}
            defaultSpacing={2}
          >
            {props.projects.map((e: { name: string; titleCard: boolean; description: string; tags: string[]; image: string; showcase: boolean; }) => {
              return (
                <ProjectCard name={e.name} description={e.description} tags={e.tags} image={e.image} />
              );
            })}
          </Masonry>
        </div>
      </div>
    </div >
  );
}

const Contact = () => {
  return (
    <div className='container'>
      <Element name="contact" className="element"></Element>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <h1>Let's get in touch.</h1>
      </ScrollAnimation>
      <p>Interested in working with me or talking about any of my work? Please don't hesitate to get in contact.</p>
    </div >
  );
}