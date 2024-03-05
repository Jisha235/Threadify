import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import {men_shirts} from '../../Data/men_shirts'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
    
    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={men_shirts} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={men_shirts} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={men_shirts} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={men_shirts} sectionName={"Men's Saree"}/>
        <HomeSectionCarousel data={men_shirts} sectionName={"Men's Dress"}/>
    </div>
    </div>
  )
}

export default HomePage;