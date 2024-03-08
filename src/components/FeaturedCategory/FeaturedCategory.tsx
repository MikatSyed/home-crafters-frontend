import React from "react"
import FeaturedCard from "./FeaturedCard"
import Heading from "../Hero/Heading"
import styles from "../../styles/category.module.css";
import { getAllCategories } from "@/lib/fetch";
import { useCategoriesQuery } from "@/redux/api/categoryApi";

const FeaturedCategory = async() => {
  // const {data}:any = useCategoriesQuery(undefined)
  // console.log({data});
  const categories = await getAllCategories()
  const categoryData = categories?.data;
  return (
    <>
     
      <section className={`${styles.featured} ${styles.background}`}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Browse by category</h1>
          <FeaturedCard data={categoryData} />
        </div>
      </section>
    </>
  )
}

export default FeaturedCategory
