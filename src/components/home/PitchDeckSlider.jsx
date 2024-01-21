import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import pitchDecksData from '../../assets/homeData/PitchDecksData.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PitchDeckSlider = () => {
  const [pitchDecks, setPitchDecks] = useState(pitchDecksData)

  return (
    <section className='space-y-6 mt-24'>
      <div className='flex justify-between'>
        <h1 className='tracking-tighter'>Pitch Decks</h1>
      <Link to='pitch-decks'>  <button className='darker-button-small'>View All</button></Link>
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
          {pitchDecks &&
            pitchDecks.map(d => (
              <SwiperSlide
                key={crypto.randomUUID()}
                className='bg-white text-black  text-left py-4 px-1 '
              >
                <div className='flex flex-col gap-2  py-4 px-8 min-w-60 shadow min-h-[320px]'>
                  <img src={d.image} className='h-40 w-full object-cover' alt='' />
                  <h1 className='text-xl font-bold mt-4 text-dark'>{d.name}</h1>
              
                  <p>
                    <strong>Industry:</strong> {d.industry}
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
export default PitchDeckSlider
