import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import allCaseStudiesData from '../assets/AllCaseStudyData.json'
import GoBack from '../components/GoBack'
const CaseStudyDetail = () => {
  const { id } = useParams()
  const [caseStudy, setCaseStudy] = useState({})
  useEffect(() => {
    const data = allCaseStudiesData.find(caseStudy => caseStudy.id === +id)
    setCaseStudy(data)
  }, [id])

  return (
      <section className='wrapper'>
          <GoBack destination='/case-studies'/>
      <main>
        <h1>{caseStudy.title}</h1>
        {Object.keys(caseStudy).length > 0 && (
          <div className='mt-8 space-y-8'>
            <img src={caseStudy.image} className='h-12 object-contain' alt='image' />
            {caseStudy.sections.map((d, i) => (
              <div key={i} className='max-w-[600px] leading-8'>
                    <h2>{d.title}</h2>
                    <p>{d.content}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </section>
  )
}
export default CaseStudyDetail
