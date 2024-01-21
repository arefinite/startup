import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import styles from './SuggestedBooks.module.css'
import one from '../../assets/images/one.jpg'
import two from '../../assets/images/two.jpg'
import three from '../../assets/images/three.jpg'
import four from '../../assets/images/four.jpg'
import five from '../../assets/images/five.jpg'
import six from '../../assets/images/six.jpg'
import seven from '../../assets/images/seven.jpg'
import eight from '../../assets/images/eight.jpg'
import nine from '../../assets/images/nine.jpg'
import ten from '../../assets/images/ten.jpg'
import eleven from '../../assets/images/eleven.jpg'
import twelve from '../../assets/images/twelve.jpg'
import thirteen from '../../assets/images/thirteen.jpg'

const SuggestedBooks = () => {
  return (
    <section className='flex items-center flex-col-reverse md:flex-row-reverse mt-20'>
      <div className='space-y-6 flex-1'>
        <p className='text-xl md:text-3xl font-bold flex flex-col mt-8 mt:mt-0 space-y-2'>
          <span>Dive into the World of Innovation</span>
          <span></span>
          <span>with Our Recommended Startup Books!</span>
        </p>
        <p>
          Unlock entrepreneurial wisdom! Dive into our curated startup book
          collection for insights, innovation, and success stories. Whether you
          are starting your own venture or seeking inspiration, these books are
          your guide to entrepreneurial excellence. Ready to turn ideas into
          action? Start reading now!
        </p>
      </div>
      <div className='flex-1'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className={`'mySwiper' ${styles.swiper} `}
        >
          <div className={styles.swiperSlide}>
            <SwiperSlide>
              <img
                src={one}
                alt='one'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={two}
                alt='two'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={three}
                alt='three'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={four}
                alt='four'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={five}
                alt='five'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={six}
                alt='six'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={seven}
                alt='seven'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={eight}
                alt='eight'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={nine}
                alt='nine'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ten}
                alt='ten'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={eleven}
                alt='eleven'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={twelve}
                alt='twelve'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={thirteen}
                alt='thirteen'
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  )
}
export default SuggestedBooks
