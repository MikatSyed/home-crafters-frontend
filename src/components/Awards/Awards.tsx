
import React from "react"
import { awards } from "../../components/Nav/Data"
import Heading from "../Hero/Heading"


const Awards = () => {
  return (
    <>
      <section className='awards awards-padding'>
        <div className='container'>
          <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />

          <div className='content grid4 mtop'>
            {awards.map((val:any, index:any) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span> {React.createElement(val.icon)}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards
