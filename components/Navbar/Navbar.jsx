import { useContext } from 'react'
import PortfolioContext from '../../context'
import navbar from '../../styles/navbar.module.scss'

const Navbar = () => {
  const { sectionsData } = useContext(PortfolioContext)
  return (
    <nav className={navbar.nav}>
      {sectionsData.map((section, index) => (
        <a key={index} href={`#${section}`} className={navbar.link}>
          {section}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
