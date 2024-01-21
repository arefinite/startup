import CaseStudySlider from '../components/home/CaseStudySlider'
import DataBank from '../components/home/DataBank'
import GlobalStartupSlider from '../components/home/GlobalStartupSlider'
import Hero from '../components/home/Hero'
import LocalStartupSlider from '../components/home/LocalStartupSlider'
import PitchDeckSlider from '../components/home/PitchDeckSlider'
import SuggestedBooks from '../components/home/SuggestedBooks'

const Home = () => {

  return (
    <main className='wrapper'>
      <Hero />
      <GlobalStartupSlider />
      <LocalStartupSlider />
      <PitchDeckSlider />
      <CaseStudySlider />
      <SuggestedBooks />
      <DataBank/>
    </main>
  )
}
export default Home
