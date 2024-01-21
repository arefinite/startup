import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import globalStartupsData from '../../assets/homeData/GlobalStartupsData.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const GlobalStartupSlider = () => {
  // eslint-disable-next-line
  const [globalStartups, setGlobalStartsups] = useState(globalStartupsData)

  return (
    <section className='space-y-6 mt-24'>
      <div className='flex justify-between'>
        <h1 className='tracking-tighter'>Global Startups</h1>
      <Link to='global-startups'>  <button className='darker-button-small'>View All</button></Link>
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
            400: {
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
            '--swiper-navigation-background-color': '#000'
          }}
        >
          {globalStartups &&
            globalStartups.map(d => (
              <SwiperSlide
                key={crypto.randomUUID()}
                className='bg-white text-black  text-left py-4 px-1 '
              >
                <div className='flex flex-col gap-2  py-4 px-8 min-w-60 shadow min-h-[500px]'>
                  <img src={d.image} className='h-40 w-full object-cover' alt='' />
                  <h1 className='text-xl font-bold mt-4 text-dark'>{d.name}</h1>
                  <p>
                    <strong>Country :</strong> {d.country}
                  </p>
                  <p>
                    <strong>Founded :</strong> {d.founded}
                  </p>
                  <p>
                    <strong>Industries:</strong> {d.tags}
                  </p>
                  <p>
                    <strong>Based:</strong> {d.based}
                  </p>
                  <p>
                    <strong>website:</strong> {d.website}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}
export default GlobalStartupSlider
