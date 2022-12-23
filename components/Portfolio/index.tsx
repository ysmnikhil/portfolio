import { useEffect, useState, Suspense, lazy } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { MapPinIcon, ArrowTopRightOnSquareIcon, AcademicCapIcon, BriefcaseIcon, HashtagIcon, IdentificationIcon, TrophyIcon, UserCircleIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid'

import { sideBar, SidebarLink } from '../Sidebar/types'
import isElementInViewport from '../../src/utils/isElementInViewport'
import work from './work.json'
import projects from './projects.json'
interface Portfolio {
  name: string
}

export default function Portfolio() {
  let router = useRouter();
  let asPath = router.asPath.replace('/', '');
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    setActiveSection(asPath)
  }, [asPath]);

  const inActiveClass = ["opacity-60"];

  const activateSidebar = () => {
    const activeClass= ["bg-white"];
    const sections = document.querySelectorAll(' [data-selector="component"]');

    sections.forEach((section) => {
      section.classList.remove(...activeClass);
      section.classList.add(...inActiveClass);
    })
    for(let i = 0; i < sections.length; i++) {
      if(isElementInViewport(sections[i])){
        // router.push('/#' + sections[i].id, undefined, { shallow: true }); 
        sections[i].classList.add(...activeClass);
        sections[i].classList.remove(...inActiveClass);
        
        setActiveSection('#' + sections[i].id)
        return true;
      }
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', activateSidebar, { passive: true });

      return () => {
          window.removeEventListener('scroll', activateSidebar);
      };
  }, []);


  const [lastProject, ...oneLessProjects] = projects;

  const activeLabel = 'border-violet-600 border-r-2 rounded-r-md bg-violet-600 text-white hover:text-violet-100';
  const activeIcon = 'text-white hover:text-violet-100';

  return (
    <div className={`grid grid-flow-col grid-cols-12 bg-white pt-4 transition scroll-smooth`}>

      <div className="col-span-3 hidden md:block"></div>

      {/* <!---Sidebar----> */}
      <div className="col-span-3 fixed left-0 top-0 bottom-0 pt-[10%] pr-[10%] space-y-4 z-10" aria-label="Global">
          {sideBar.map((item: SidebarLink) => {
            //https://github.com/facebook/react/issues/16132
            const IconLazy = lazy(() => import(`@heroicons/react/20/solid/${item.component}.js`));

            return <p className='text-xl' key={item.label} >
              <a href={item.href} className={`pl-4 md:pl-10 pr-2 py-2 font-medium ${activeSection == item.href ? activeLabel : 'hover:text-violet-600'}`} onClick={() => setActiveSection(item.href)}>
                <Suspense>
                  <IconLazy className={`inline-block md:hidden h-4 w-4 mr-1 ${activeSection == item.href ? activeIcon : 'hover:text-violet-600'}`}/>
                </Suspense>
                <span className='hidden md:inline-block'>
                  {item.label}
                </span>
              </a>
            </p>
          })}
      </div>
      
      <div className="col-span-12 md:col-span-9">
        <div className="flex flex-col content-evenly">

          {/* <!---About Me----> */}
          <section id="about-me" className={`py-40 px-14 transform transition hover:scale-[1.01] ${inActiveClass}`} data-selector="component">
            
            <Image src={'https://media.licdn.com/dms/image/D4D35AQFcavXUvTX_dw/profile-framedphoto-shrink_200_200/0/1669967644063?e=1672232400&v=beta&t=bfbIPAY9go7pIa6FjsAraRyhLvaZqoQ3w6Ode-IVM3k'} alt="Nikhil Malik" width="150"  height="150" className="rounded-full ring-2 ring-green-200 m-auto mb-4"/>
            <p className="text-2xl text-opacity-40 leading-relaxed" data-description="about me">
              Hello, I'm Nikhil, making difficult digital projects for humans easy to use.
            </p>
            <p className="py-8 pb-5 text-opacity-10 text-sm from-neutral-300" data-description="location">
              <span className="">based In</span>
              <a className="inline-block p-2 ml-2 border rounded-md shadow-sm cursor-pointer" href="https://www.google.com/maps?q=delhi%20india" target="_blank">
                <MapPinIcon className="inline-block h-4 w-4 text-violet-600 mr-1"/>
                Delhi, India
              </a>
            </p>
            <span className="block border border-violet-300 border-opacity-50 w-10/12"></span>
          </section>

          {/* <!---Work----> */}
          <section id="work" className={`px-14 py-6 md:py-10 ${inActiveClass}`} data-selector="component">
            <p className='md:hidden text-2xl text-violet-800 mb-4'>
              <span className='border-b-2 border-violet-600 border-opacity-40'>
                Work Exprience
              </span>
            </p>
            {work.map((organization) => (
              <div className="grid grid-rows-4 md:grid-rows-none md:grid-cols-4 gap-4 mb-4" data-description="organization" key={organization.organization}>
                <div className="row-span-full md:col-span-1 md:text-right md:space-y-4">
                  <div className='space-y-1'>
                    {organization.logo &&
                      <Image src={organization.logo} alt={organization.organization} width="50"  height="50" className='inline-block'/>
                    }
                    <p className="text-xl text-violet-600 capitalize break-words">
                      {organization.organization}
                    </p>
                    <p className="text-xs" data-description="job-duration-location">
                      {organization.duration}
                    </p>
                  </div>
                </div>
                <div className="row-span-3 md:col-span-3">
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

          {/* <!---Project Last----> */}
          {[lastProject].map((last) => (
            <section key={last.title} id="project-last" className={`px-14 py-6 md:py-10 ${inActiveClass}`} data-selector="component">
            <div className="container mx-auto flex flex-col">
              <p className='text-2xl text-violet-800 mb-4'>
                <span className='border-b-2 border-violet-600 border-opacity-40'>
                  Univadis
                </span>
              </p>
              <div className="mx-auto">
                {last.banner && 
                  <div className="rounded-lg h-auto overflow-hidden">
                    <Image alt="content" className="object-cover object-center w-full max-h-28 h-auto" 
                    width="850" height="100" src={last.banner} />
                  </div>
                }
                <div className="flex flex-col sm:flex-row mt-6">
                  <div className="md:mt-4">
                    <p className="leading-relaxed mb-4 whitespace-pre-wrap">
                      {last.description}
                    </p>
                    <a className="text-indigo-500 inline-flex items-center cursor-pointer" target="_blank" href={last.website}>
                      {last.website}
                      <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 ml-1 hover:text-violet-600"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          ))}

          {/* <!---Projects----> */}
          {oneLessProjects && 
            <section id="projects" className={`px-14 py-6 md:py-10 ${inActiveClass}`} data-selector="component">
              <p className='md:hidden text-2xl text-violet-800 mb-4'>
                <span className='border-b-2 border-violet-600 border-opacity-40'>
                  Projects
                </span>
              </p>
              
              {oneLessProjects.map((project) => (
                <div key={project.title} className="container mx-auto flex flex-col mb-10">
                  <p className='text-2xl text-violet-800 mb-4'>
                    <span className='border-b-2 border-violet-600 border-opacity-40'>
                      {project.title}
                    </span>
                  </p>
                  <div className="mx-auto">
                    {project.banner && 
                      <div className="rounded-lg h-auto overflow-hidden">
                        <Image alt="content" className="object-cover object-center h-auto max-h-28 w-full overflow-hidden" 
                        width="850" height="100" src={project.banner} />
                      </div>
                    }
                    <div className="flex flex-col sm:flex-row mt-6">
                      <div className="md:mt-4">
                        <p className="leading-relaxed mb-4 whitespace-pre-wrap">
                          {project.description}
                        </p>
                        <a className="text-indigo-500 inline-flex items-center cursor-pointer" target="_blank" href={project.website}>
                          {project.website}
                          <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 ml-1 hover:text-violet-600"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          }

          {/* <!---Technologies----> */}
          <section id="technologies" className={`px-14 py-6 md:py-10 ${inActiveClass}`} data-selector="component">
            
          </section>

        </div>
      </div>
    </div>
  )
}
