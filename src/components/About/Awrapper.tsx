// Awrapper.tsx

import React from "react";
import { awrapper } from "./data";
import styles from "../../../src/styles/about.module.css"; // Import the styles

const Awrapper = () => {
  return (
    <>
      <section className={styles.awrapper}> {/* Use the imported styles */}
        <div className={`${styles.container} ${styles.grid}`}>
          {awrapper.map((val) => {
            return (
              <div className={`${styles.box} ${styles.flex}`} key={val.title}>
                <div className={styles.img}>
                  <img src={val.cover} alt='' />
                </div>
                <div className={styles.text}>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
