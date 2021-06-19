import Image from 'next/image'
import { useContext } from 'react'
import { BgProjects } from '../Background/Background'
import utils from '../../styles/utils.module.scss'
import projects from '../../styles/projects.module.scss'
import PortfolioContext from '../../context'

const Projects = () => {
  const { projectsData } = useContext(PortfolioContext)

  return (
    <section
      id="projects"
      className={`${utils.section} ${utils.projects} ${utils.headingMd}`}
    >
      <BgProjects />
      <h2 className={utils.headingLg}>Projects</h2>
      <div className={utils.center}>
        <div className={projects.cards}>
          {projectsData.map(({ id, img, title, info }) => (
            <>
              <div key={id} className={projects.card}>
                <div
                  className={projects.top}
                  style={{
                    backgroundImage: 'url(' + `../../static/images/${img}` + ')'
                  }}
                ></div>
                <div className={projects.bottom} key={id}>
                  {title}
                  <br />
                  {info}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
