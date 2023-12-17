
import Heading from "./Heading"
import styles from "../../styles/hero.module.css"


const Hero = () => {

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Heading title='Search Your Next Home Service ' subtitle='Find new & best services located in your local city.' />
        </div>
      </section>
    </>
  )
}

export default Hero
