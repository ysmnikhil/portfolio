import { FC } from 'react'
import Props from '../../types/inActiveClass'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

import projects from '../../../public/assets/json/projects.json'

export const LastProject: FC<Props> = ({ inActiveClass }) : JSX.Element => {
  const [lastProject, ...oneLessProjects] = projects;

  return (
    <>
    {[lastProject].map((last) => (
      <section key={last.title} id="project-last" className={`px-14 md:px-24 py-6 lg:py-10 min-h-screen flex flex-col align-middle justify-center ${inActiveClass}`} data-selector="component">
      <a className="group block cursor-pointer" target="_blank" href={last.website} rel="noreferrer">
        <div className="container mx-auto flex flex-col">
          <div className="mx-auto">
            {last.banner && 
              <div className="h-auto overflow-hidden border-[1px] border-slate-200 group-hover:border-violet-400">
                <img alt="content" className="object-cover object-center w-full max-h-28 h-auto" 
                width="850" height="100" src={last.banner} />
              </div>
            }
            <div className="flex flex-col sm:flex-row pt-6 pl-4 border-l-[1px] border-slate-200 group-hover:border-violet-400">
              <div className="lg:mt-4">
                <p className='text-2xl group-hover:text-violet-800 mb-4'>
                  <span className=''>
                    Univadis
                  </span>
                </p>
                <p className="leading-relaxed mb-4 whitespace-pre-wrap">
                  {last.description}
                </p>
                <span className="text-violet-400 group-hover:text-violet-600 inline-flex items-center break-all">
                  {last.website}
                  <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 ml-1 hover:text-violet-600"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    ))}
    </>
  )
}
