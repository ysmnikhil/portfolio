import { FC } from 'react'
import Props from '../../types/inActiveClass'
import technologies from '../../../public/assets/json/technology.json'

export const Technology: FC<Props> = ({ inActiveClass }) : JSX.Element => {
  return (
    <section id="technologies" className={`px-14 md:px-24 py-6 lg:py-10 min-h-screen flex flex-col align-middle justify-center ${inActiveClass}`} data-selector="component">
      <p className='lg:hidden text-2xl text-violet-800 mb-12'>
        <span>
          Technologies
        </span>
      </p>
      <div className='grid grid-cols-1 gap-8 md:gap-16'>
        {technologies.map((types) => (
            <div key={types['title']} className="flex flex-col relative">
              <p className='absolute -translate-y-5 w-full text-violet-200 text-2xl md:text-3xl uppercase text-center'>
                {types['title']}
              </p>
              <div key={types['title']} className="group grid grid-cols-2 grid-flow-dense">
                {types['values'].map((technology) => (
                  <div key={technology.title} className="relative w-full h-36 md:h-48 border-slate-200 first:col-span-2 border-t border-l first:border-t-0">
                    {technology.logo && 
                      <div className='flex justify-center items-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-violet-50 absolute -translate-y-5 -translate-x-5 md:-translate-y-8 md:-translate-x-8 bg-gradient-to-t from-rose-200 to-orange-200'>
                        <img src={technology.logo} alt={technology.logo}  className='max-h-[50%] w-1/2'/>
                      </div>
                    }
                    <div className='p-5 md:p-10'>
                      <p className='capitalize text-xl md:text-2xl'>
                        {technology.title}
                      </p>
                      <p className='mt-2 md:mt-4 text-sm md:text-base'>
                        {technology.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        ))}
      </div>
    </section>
  )
}
