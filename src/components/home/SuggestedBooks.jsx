import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import styles from './SuggestedBooks.module.css'
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
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7485472.jpg&f=1&nofb=1&ipt=af0b6c70ae38f7ab5410ced65d1c2696f108332d430c27db3e3b84ce90c3bfda&ipo=images'
                alt=''
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  )
}
export default SuggestedBooks
