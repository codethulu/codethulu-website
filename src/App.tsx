import React, { useState } from 'react';
import './App.css';
import {
  Link,
  Element,
} from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { Masonry } from '@mui/lab';
import mainImage from './images/main-image.jpg';
import codethuluLogo from './images/logo.png';
import projectsList from './components/projectsList';
import './components/projectCard.css'
import "animate.css/animate.min.css";


function App() {
  const [projects, setProjects] = useState(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes("favourites")));
  const allProjects = () => {
    setProjects(projectsList);
  }
  const filterProjects = (e: string) => {
    setProjects(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes(e)));
  }
  const filterProjectsTitle = (e: string) => {
    setProjects(projectsList.filter((project: { name: string; }) => project.name.toUpperCase().includes(e.toUpperCase())));
  }

  return (

    <div className="App">
      <Header />
      <SideLinks />
      <ParallaxProvider>
        <IntroGraphic />
      </ParallaxProvider>
      <About />
      <ProjectShowcase allProjects={allProjects} filterProjects={filterProjects} filterProjectsTitle={filterProjectsTitle} projects={projects} />
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

const IntroGraphic = () => (
  <div className='main-graphic'>
    <Element name="home" className="element"></Element>
    <ParallaxBanner
      layers={[
        {
          expanded: false,
          image: mainImage,
          speed: 10,
        },
        {
          expanded: false,
          image: codethuluLogo,
          speed: 20,
        },
      ]}
      style={
        {
          height: "100%",
        }
      }
    >
      <div className='graphic-title-box'>
        <h1 className='main-graphic-title'>CODETHULU</h1>
        <h1 className='sub-graphic-title'>BRENDAN BELL IS A SOFTWARE DEVELOPER AND GRAPHIC DESIGNER.</h1>
      </div>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={750} >
        <div className='down-button'></div>
      </Link>

    </ParallaxBanner>
  </div>
);

const About = () => {
  return (
    <div className='container'>
      <Element name="about" className="element"></Element>
      <div className='divider'></div>
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
        if (e === "java" || e === "javascript") {
          tagStyle += ' orange'
        } else if (e === "haskell") {
          tagStyle += ' purple'
        } else if (e === "c") {
          tagStyle += ' green'
        } else if (e === "postgresql") {
          tagStyle += ' cobalt'
        } else if (e === "html" || e === "swift" || e === "favourites") {
          tagStyle += ' fire'
        } else if (e === "css" || e === "typescript") {
          tagStyle += ' ocean'
        } else if (e === "python") {
          tagStyle += ' snake'
        }
        return (
          <div className={tagStyle}>{e}</div>
        );
      })}

    </div >



  )
}

const ProjectShowcase = (props: { allProjects: any; filterProjects: any; filterProjectsTitle: any; projects: any }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value)
    props.filterProjectsTitle(searchTerm)
  }
  return (
    <div className='container'>
      <Element name="projects" className="element"></Element>
      <div className='divider'></div>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <h1>Here are some things I have worked on.</h1>
      </ScrollAnimation>


      <button className="tag fire" onClick={() => props.filterProjects("favourites")}>FAVOURITES</button>
      <button className="tag snake" onClick={() => props.filterProjects("python")}>PYTHON</button>
      <button className="tag orange" onClick={() => props.filterProjects("java")}>JAVA</button>
      <button className="tag purple" onClick={() => props.filterProjects("haskell")}>HASKELL</button>
      <button className="tag" onClick={() => props.filterProjects("web-dev")}>WEB-DEV</button>
      <button className="tag" onClick={() => props.allProjects()}>ALL</button>

      <input type="text" className='searchBar' placeholder='Search' value={searchTerm} onChange={handleSearchChange}></input>
      <div className='divider'></div>

      <div className='inner-container h-auto'>
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


    </div >
  );
}

const Contact = () => {
  return (
    <div className='container'>
      <Element name="contact" className="element"></Element>
      <div className='divider'></div>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <h1>Let's get in touch.</h1>
      </ScrollAnimation>
      <p>Interested in working with me or talking about any of my work? Please don't hesitate to get in contact.</p>
      <a href="mailto: brendan@codethulu.dev"><div className='contact-button'>Say Hello</div></a>
      <a href='https://github.com/codethulu' className='inline'><div className='contact-logo github' ></div></a>
      <a href='https://twitter.com/Codethulu_' className='inline'><div className='contact-logo twitter'></div></a>
      <a href='https://www.linkedin.com/in/brendan-bell-34b282202/' className='inline'><div className='contact-logo linkedin'></div></a>
      <div className='divider'></div>
    </div >
  );
}