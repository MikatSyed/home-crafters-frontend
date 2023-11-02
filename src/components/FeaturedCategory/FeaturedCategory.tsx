"use client"
import React from "react"
import FeaturedCard from "./FeaturedCard"
import Heading from "../Hero/Heading"
import { useCategoriesQuery } from "@/redux/api/categoryApi"

const FeaturedCategory = () => {
  const {data} = useCategoriesQuery(undefined)
  console.log(data);
  const serviceData = data?.data;
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Category Types' subtitle='Find All Type of Category Service.' />
          <FeaturedCard data={serviceData}/>
        </div>
      </section>
    </>
  )
}

export default FeaturedCategory
