import { FC } from 'react'
import Props from '../../types/inActiveClass'
import work from '../../../public/assets/json/work.json'

export const Work: FC<Props> = ({ inActiveClass }) : JSX.Element => {

  return (
    <section id="work" className={`px-14 md:px-24 py-6 lg:py-10 min-h-screen flex flex-col align-middle justify-center ${inActiveClass}`} data-selector="component">
    <p className='lg:hidden text-2xl text-violet-800 mb-4'>
      <span>
        Work Exprience
      </span>
    </p>
    {work.map((organization) => (
      <div className="grid grid-rows-4 lg:grid-rows-none lg:grid-cols-4 gap-4 mb-4" data-description="organization" key={organization.organization}>
        <div className="row-span-full lg:col-span-1 lg:text-right lg:space-y-4">
          <div className='space-y-1'>
            {organization.logo &&
              <img src={organization.logo} alt={organization.organization} width="50"  height="50" className='inline-block'/>
            }
            <p className="text-xl text-violet-600 capitalize break-words">
              {organization.organization}
            </p>
            <p className="text-xs" data-description="job-duration-location">
              {organization.duration}
            </p>
          </div>
        </div>
        <div className="row-span-3 lg:col-span-3">
          {organization.profiles.map((profile, index) => (
            <div key={profile.title} className='space-y-4'>
              <div className='space-y-1'>
                <p className='text-xl text-violet-600 break-words ' data-description="job-title">
                  {profile.title}
                </p>
                <p className='text-xs' data-description="job-duration">
                  {profile.duration}
                </p>
              </div>
              <p className='text-sm whitespace-pre-wrap leading-relaxed' data-description="job-details">
                {profile.description}
              </p>
              <p className='text-sm leading-relaxed' data-description="job-skills">
                <span className='text-violet-600' >
                  Skills: 
                </span>
                <span className='ml-1'>
                  {profile.skills}
                </span>
              </p>
              {organization.profiles.length > 1 && 
                organization.profiles.length-1 != index &&
                <div>
                  <span className='block border border-violet-300 border-opacity-50 w-10/12 mb-4'></span>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
  )
}
