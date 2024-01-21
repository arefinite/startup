import SideNavBDStartups from '../components/SideNavBDStartups'

const BangladeshStartups = () => {
  return (
    <section className='wrapper'>
      <div className='flex items-center gap-2'>
        <span>
          <img
            src='https://flagcdn.com/w320/bd.png'
            className='h-4 w-6'
            alt='flag'
          />
        </span>
        <h1>Bangladesh Startups</h1>
      </div>
      <section className='flex gap-4 mt-8'>
        <SideNavBDStartups />
        <main className='flex-1 shadow p-4 space-y-2'>
          <h2> Overview of Bangladesh Startup Ecosystem:</h2>

          <p className='leading-7'>
            Bangladesh has been experiencing a significant growth in its startup
            ecosystem in recent years. Factors such as a large youth population,
            increasing internet penetration, and a growing middle class have
            contributed to the emergence of a vibrant startup culture. The
            government has also been taking steps to promote entrepreneurship
            through various initiatives and policies.
          </p>

          <p className='font-bold'>
            Key features of the Bangladesh startup ecosystem include:
          </p>

          <ul className='space-y-3'>
            <li>
              1. ICT Sector Growth: The Information and Communication Technology
              (ICT) sector in Bangladesh has been a driving force for startups.
              Dhaka, the capital city, is often considered the hub for many tech
              startups.
            </li>
            <li>
              2. Fintech Boom: The fintech sector has witnessed substantial
              growth, with startups focusing on digital payment solutions,
              mobile banking, and financial inclusion. This is in part due to
              the success of mobile financial services like bKash.
            </li>
            <li>
              3. E-commerce: E-commerce platforms have gained popularity,
              connecting businesses with consumers and providing a convenient
              online shopping experience.
            </li>
            <li>
              4. Incubators and Accelerators: Various incubators and
              accelerators, both governmental and private, have been established
              to support startups. They offer mentorship, funding, and resources
              to help young businesses grow.
            </li>
          </ul>
        </main>
      </section>
    </section>
  )
}
export default BangladeshStartups
