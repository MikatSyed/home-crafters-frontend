import React from "react"
import { featured } from "../../components/Nav/Data"
import Image from "next/image"
import Link from "next/link";

const FeaturedCard = (data:any) => {
  console.log(data);
  return (
    <>
      <div className='content grid5 mtop'>
        {data?.data?.map((item:any) => (
           <Link href={`/category/${item.id}`} key={item.id}>
          <div className='box' key={item.id}>
             {/* <Image src={items.cover} alt={items.name} width={100} height={100} /> */}
            <h4>{item.title}</h4>
            {/* <label>{items.total}</label> */}
          </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
