import React from "react";
import { homeAbout } from "./data";
import Awrapper from "./Awrapper";
import Heading from "../Hero/Heading";
import styles from "../../../src/styles/about.module.css";
import AboutImage from "../../assets/Building permit-pana.png";
import Image from "next/image";

const AboutCard = () => {
  return (
    <>
      <section className={styles.aboutHome}> {/* Use the imported styles */}
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
        <div className={`${styles.container} ${styles.flexSB}`}>
          <div className={`${styles.left} ${styles.row}`}>
            <Image src={AboutImage} alt='' layout="responsive" />
         
          </div>
          <div className={`${styles.right} ${styles.row}`}>
            <div className={styles.items}>
              {homeAbout.map((val) => {
                return (
                  <div className={`${styles.item} ${styles.flexSB}`} key={val.title}>
                    <div className={styles.img}>
                      <Image src={val.cover} alt='' height={80} width={80} />
                    </div>
                    <div className={styles.text}>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default AboutCard;
