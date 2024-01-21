import heroImg from '/hero.svg'
const Hero = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row  items-center'>
      <div className='space-y-6 flex-1'>
        <p className='text-xl md:text-3xl font-bold flex flex-col space-y-2 mt-8 md:mt-0'>
          <span>The All-In-One Ultimate</span>
          <span>Startup data bank for global and local entrepreneur</span>
        </p>
        <p>
          Dive into our curated directory featuring an extensive collection of
          startups spanning diverse industries, technologies, and geographical
          locations. From Silicon Valley pioneers to groundbreaking startups in
          emerging markets, project is your passport to the ever-evolving
          landscape of innovation.
        </p>
        <div className='flex gap-3'>
          <button className='darker-button'>Explore Startup</button>
          <button className='medium-button'>Share Your Idea</button>
        </div>
      </div>
      <div className='flex-1'>
        <img src={heroImg} alt='startup-banner' />
      </div>
    </section>
  )
}
export default Hero
