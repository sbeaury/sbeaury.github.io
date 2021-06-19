import { useContext } from 'react'
import styles from '../../styles/footer.module.scss'
import utils from '../../styles/utils.module.scss'
import PortfolioContext from '../../context'
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const {
    heroData: { name }
  } = useContext(PortfolioContext)

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sbeaury"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/sbeaury" rel="noreferrer">
          <FaGithub />
        </a>
        <a target="_blank" href="https://dev.to/sbeaury" rel="noreferrer">
          <FaDev />
        </a>
        <a target="_blank" href="mailto:sbeaury@gmail.com">
          <MdEmail />
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()}
          {` `}
          {name}. Built with
          {` `}
          <a
            className={styles.next}
            href="https://nextjs.org
"
          >
            Next.js
          </a>
        </div>
        <div className={styles.scrolltop} onClick={scrollTop}>
          Back to top
        </div>
      </footer>
    </div>
  )
}

export default Footer
