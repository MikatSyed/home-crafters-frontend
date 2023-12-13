
import React from "react"
import FeaturedCard from "./FeaturedCard"
import Heading from "../Hero/Heading"
import styles from "../../styles/category.module.css";
import { getAllCategories } from "@/lib/fetch";
const FeaturedCategory = async() => {

  const categories = await getAllCategories()
  const categoryData = categories?.data;
  return (
    <>
     
      <section className={`${styles.featured} ${styles.background}`}>
        <div className={styles.container}>
          <Heading title="Featured Category Types" subtitle="Find All Type of Category Service." />
          <FeaturedCard data={categoryData} />
        </div>
      </section>
    </>
  )
}

export default FeaturedCategory
