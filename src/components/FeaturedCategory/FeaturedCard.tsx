
import Image from "next/image"
import Link from "next/link";
import styles from "../../styles/category.module.css";


const FeaturedCard = (data:any) => {
  console.log(data);

  return (
    <>
      <div className={`${styles.content} ${styles.grid5}`}>
        {data?.data?.map((item:any) => (
           <Link href={`/category/${item.id}`} key={item.id}>
          <div className={styles.box} key={item.id}>
             <Image src={item?.categoryImg} alt="" width={100} height={100} />
            <h4>{item.title}</h4>
      
          </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
