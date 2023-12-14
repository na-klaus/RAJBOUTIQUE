import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Diverse Range for Every Occasion <br className='sm:block hidden'/>in RAJ BOUTIQUE.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Raj Boutique, we redefine standards with a relentless focus on quality. 
        Our products are crafted from premium materials, 
        reflecting our dedication to providing garments that stand the test of time.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
