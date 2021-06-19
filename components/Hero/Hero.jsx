import { useContext } from 'react'
import utils from '../../styles/utils.module.scss'
import styles from '../../styles/hero.module.scss'
import PortfolioContext from '../../context'

const Hero = () => {
  const {
    heroData: { title, name, subtitle }
  } = useContext(PortfolioContext)

  return (
    <section id="hero" className={`${utils.section} ${utils.hero}`}>
      <h1 className={utils.heading2Xl}>
        <span>{title}</span>
        <span>{name}.</span>
        <span data-end="." className={styles.subtitle}>
          {subtitle.replace('.', '')}
        </span>
      </h1>
    </section>
  )
}

export default Hero
