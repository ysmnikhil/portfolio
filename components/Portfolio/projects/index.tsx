import { FC } from 'react'
import Props from '../../types/inActiveClass'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import projects from '../../../public/assets/json/projects.json'

export const Projects: FC<Props> = ({ inActiveClass }) : JSX.Element => {

  const [lastProject, ...oneLessProjects] = projects;

  return (
    <>
    {oneLessProjects && 
      <section id="projects" className={`px-14 md:px-24 lg:px-10 py-6 lg:py-10 min-h-screen flex flex-col align-middle justify-center ${inActiveClass}`} data-selector="component">
        <p className='lg:hidden text-2xl text-violet-800 mb-4'>
          <span>
            Projects
          </span>
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense gap-8 lg:gap-16'>
          {oneLessProjects.map((project) => (
            <div key={project.title} className="group col-span-1 flex flex-row mb-10">
              <div className="mx-auto w-full">
                <a className="block cursor-pointer" target="_blank" href={project.website} rel="noreferrer">
                  {project.banner && 
                    <div className="h-auto overflow-hidden border-[1px] border-slate-200 group-hover:border-violet-400">
                      <img alt="content" className="object-cover object-center h-72 w-full overflow-hidden" 
                      width="850" height="100" src={project.banner} />
                    </div>
                  }
                  <div className="pt-6 pl-4 border-l-[1px] border-slate-200  group-hover:border-violet-400">
                    <p className='text-2xl group-hover:text-violet-800 my-4'>
                      <span className=''>
                        {project.title}
                      </span>
                    </p>
                    <div className="lg:mt-4">
                      <p className="leading-relaxed mb-4 whitespace-pre-wrap">
                        {project.description}
                      </p>
                      <span className="text-violet-400 group-hover:text-violet-600 inline-flex items-center break-all">
                        {project.website}
                        <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 ml-1 hover:text-violet-600"/>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>              
      </section>
    }
    </>
  )
}
