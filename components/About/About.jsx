import { useContext } from 'react'
import utils from '../../styles/utils.module.scss'
import styles from '../../styles/about.module.scss'
import PortfolioContext from '../../context'

const About = () => {
  const {
    aboutData: {
      paragraphOne,
      paragraphTwo,
      paragraphThree,
      company,
      companyUrl,
      stack
    }
  } = useContext(PortfolioContext)

  return (
    <section
      id="about"
      className={`${utils.section} ${utils.about} ${utils.headingMd}`}
    >
      <h2 className={utils.headingLg}>About</h2>
      <p className={styles.paragraph}>
        {paragraphOne}
        <a href={companyUrl} rel="noreferrer" target="_blank">
          {company}
        </a>
        .
      </p>
      <p className={styles.paragraph}>{paragraphTwo}</p>
      <p className={styles.paragraph}>{paragraphThree}</p>
      <div className={styles.wrapper}>
        {stack.map((techno, index) => (
          <span key={index} className={styles.techno}>
            {techno}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
