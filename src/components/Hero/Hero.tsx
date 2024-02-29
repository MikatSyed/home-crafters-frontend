
import Heading from "./Heading"
import styles from "../../styles/hero.module.css"
import { FaHouseChimneyWindow } from "react-icons/fa6";

const Hero = () => {

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Heading title='Ready For Your Next Home Service ' subtitle='Need home maintenance, repair, or renovation help? Turn your house into a home with Absolute Home Services. We provide exceptional service, every time.' />    
       <div className={styles.start}>
       <button className="btn5">Get Started</button>
       </div>
       
        </div>
      </section>
    </>
  )
}

export default Hero
