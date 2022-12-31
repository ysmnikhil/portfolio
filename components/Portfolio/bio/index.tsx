import bio from '../../../public/assets/json/bio.json'

export const Bio = ({ inActiveClass }) => {

  return (
    <section id="bio" className={`px-14 md:px-24 py-6 lg:py-10 min-h-screen flex flex-col align-middle justify-center ${inActiveClass}`} data-selector="component">
      <p className='lg:hidden text-2xl text-violet-800 mb-4'>
        <span>
          Bio
        </span>
      </p>

      <div className='lg:grid lg:grid-flow-col lg:grid-cols-2 gap-8' data-description="bio">
        <div className="mb-10 lg:mb-0 lg:row-span-1 ">
          {bio.pic &&
            <div className='w-full h-full' >
              <img src={bio.pic} alt={bio.pic} className="lg:sticky top-10 max-h-96 w-full object-cover object-top rounded-lg"/>
            </div>
          }
        </div>  
        <div className="row-span-1 whitespace-pre-wrap leading-relaxed">
          <p>
            {bio.bio}
          </p>
          <p className='mt-10'>
            <span className='block mb-4 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600'>
              Career
            </span>
            {bio.career}
          </p>
        </div>              
      </div>
    </section>
  )
}
