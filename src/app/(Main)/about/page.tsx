import Image from "next/image";
import styles from "../../../styles/abouts.module.css";
import aboutImage from "../../../assets/about1.webp";
import backgroundDecorationImage from "../../../assets/about2.webp";
import lizImage from "../../../assets/outsite-co-R-LK3sqLiBw-unsplash.jpg";

const About = () => {
  return (
    <section>
      <div className={styles.about}>
        <p className={styles.pageTitle}>Home Crafters / About Us</p>
        <div className={styles.container}>
          <div className={styles.start}>
            <h1 className={styles.heading}>About Us</h1>
          </div>
        </div> 
      </div>
      <div className={styles.main}>
    <div className={styles.left}>
        <h2>Our Story</h2>
        <p>Absolute Home Services was founded by Liz Jonasson, a long-time resident of Burlington, Ontario, in September 2012</p>
        <p>Liz’ path to becoming the business owner of Absolute Home Services began when she was 16 years old working summers for College Pro Painters close to her family cottage in Muskoka, Northern Ontario. While In University, she launched her own College Pro franchise and specialized in interior and exterior house painting.</p>
        <p>Though she graduated university with a degree in Civil Engineering, Liz continued to focus on her College Pro franchise, as it became a true passion. She went full time at College Pro for Northern Ontario where she recruited, trained, and led 25 other students in operating the painting business. She eventually rose to the position of Vice President of Ontario. After 17 years with College Pro she decided to make a change and joined Paul Davis Systems as the Operations Manager.</p>
    </div>
    <div className={styles.right}>
        <Image src={aboutImage} alt="Image" height={400} width={400} className={styles.img}/>
    </div>
</div>
    </section>
  );
};

export default About;
