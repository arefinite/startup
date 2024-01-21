import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import caseStudiesData from '../../assets/homeData/CaseStudiesData.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaseStudySlider = () => {
  const [caseStudies, setCaseStudies] = useState(caseStudiesData)

  return (
    <section className='space-y-6 mt-24'>
      <div className='flex justify-between'>
        <h1 className='tracking-tighter'>Case Studies</h1>
      <Link to='case-studies'>  <button className='darker-button-small'>View All</button></Link>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          centeredSlides={false}
          spaceBetween={10}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 7,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 7,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 7,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-navigation-size': '20px',
          }}
        >
          {caseStudies &&
            caseStudies.map(d => (
              <SwiperSlide
                key={crypto.randomUUID()}
                className='bg-white text-black  text-left py-4 px-1 '
              >
                <div className='flex flex-col gap-2  pt-6 px-8 min-w-60 shadow min-h-64'>
                  <img src={d.image} className='h-24 py-2 w-full object-contain' alt='' />
                  <p className='font-bold mt-4 text-dark'>{d.title}</p>
                  
                 
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}
export default CaseStudySlider
