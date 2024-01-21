const DataBank = () => {
  return (
    <section className='wrapper mt-20 '>
      <h1 className='text-center'>Our Data Bank</h1>
      <div className='grid mt-8 grid-cols-5  place-items-center shadow px-6 py-10'>
        <div className='flex flex-col gap-2 '>
          <h1 className='text-5xl text-dark'>
            45<span className='font-extralight'>+</span>
          </h1>
          <div className='font-bold'>Countries</div>
        </div>
        <div className='flex flex-col gap-2 '>
          <h1 className='text-5xl text-dark'>
            4250<span className='font-extralight'>+</span>
          </h1>
          <div className='font-bold'>Startups Data</div>
        </div>
        <div className='flex flex-col gap-2 '>
          <h1 className='text-5xl text-dark'>
            835<span className='font-extralight'>+</span>
          </h1>
          <div className='font-bold'>Pitch Decks</div>
        </div>
        <div className='flex flex-col gap-2 '>
          <h1 className='text-5xl text-dark'>
            170<span className='font-extralight'>+</span>
          </h1>
          <div className='font-bold'>Idea Shared</div>
        </div>
       
        <div className='flex flex-col gap-2'>
          <h1 className='text-5xl text-dark'>
            20<span className='font-extralight'>+</span>
          </h1>
          <div className='font-bold'>Case Studies</div>
        </div>
      </div>
    </section>
  )
}
export default DataBank
