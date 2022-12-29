import { useEffect, useState, Suspense, lazy } from 'react'
import { useRouter } from 'next/router'
import { MapPinIcon, ArrowTopRightOnSquareIcon, AcademicCapIcon, BriefcaseIcon, HashtagIcon, IdentificationIcon, TrophyIcon, UserCircleIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid'

import { sideBar, SidebarLink } from '../Sidebar/types'
import isElementInViewport from '../../src/utils/isElementInViewport'
import work from './work.json'
import projects from './projects.json'
import technologies from './technology.json'
import contacts from './contact.json'

interface Portfolio {
  name: string
}

export default function Portfolio() {

  const profilePic = 'assets/images/me.jpeg'

  const router = useRouter();
  let asPath = router.asPath.replace('/', '');
  const [activeSection, setActiveSection] = useState('#about-us');

  useEffect(() => {
    setActiveSection(asPath);
  }, [asPath]);

  const inActiveClass = ["opacity-100"];

  const activateSidebar = () => {
    const activeClass= ["bg-white"];
    const sections = document.querySelectorAll('[data-selector="component"]');

    sections.forEach((section) => {
      section.classList.remove(...activeClass);
      section.classList.add(...inActiveClass);
    })

    for(let i = 0; i < sections.length; i++) {
      if(isElementInViewport(sections[i])){
        // router.push('/#' + sections[i].id, undefined, { shallow: true }); 

        // if('#' + sections[i].id != activeSection) {
          sections[i].classList.add(...activeClass);
          sections[i].classList.remove(...inActiveClass);
          setTimeout(() => {
            setActiveSectionOuter('#' + sections[i].id)
          }, 100)
        // }
        break;
      }
    }
  }

  useEffect(() => {
    activateSidebar();
    window.addEventListener('scroll', activateSidebar, { passive: true });

    return () => {
      window.addEventListener('scroll', activateSidebar);
    }
  }, []);

  const [lastProject, ...oneLessProjects] = projects;

  const activeLabel = 'border-violet-600 rounded-r-md bg-violet-600 text-white hover:text-violet-100';
  const activeIcon = 'text-white hover:text-violet-100';

  const randomWidth = () => {
    //postcss w-[40%] w-[45%] w-[50%] w-[55%] w-[60%] w-[65%] w-[70%] w-[75%] w-[80%] w-[85%] w-[90%] w-[95%] w-[100%]
    const widthArray = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    return widthArray[Math.floor(Math.random() * widthArray.length)];
  };

  return (
    <div className={`grid grid-flow-col grid-cols-12 bg-white pt-4 transition scroll-smooth`}>

      <div className="col-span-3 hidden lg:block"></div>
      
      {/* <!---Sidebar----> */}
      <div className="col-span-3 fixed left-0 top-0 bottom-0 pt-[10%] pr-[10%] z-10" aria-label="Global">
          {sideBar.map((item: SidebarLink) => {
            //https://github.com/facebook/react/issues/16132
            // const IconLazy = lazy(() => import(`@heroicons/react/20/solid/${item.component}.js`));

            return <p className={`h-[10%]`}> 
            <a href={item.href} className={`inline-flex items-center text-xl h-full px-4 lg:pl-10 ${activeSection == item.href ? activeLabel : 'hover:text-violet-600'}`} key={item.label}>
              {/* onClick={() => setActiveSection(item.href)}> */}
                {/* <Suspense> */}
                  {/* <IconLazy className={`inline-block lg:hidden h-4 w-4 mr-1 ${activeSection == item.href ? activeIcon : 'hover:text-violet-600'}`}/> */}
                {/* </Suspense> */}
                <span className='hidden lg:inline-block'>
                  {item.label}
                </span>
                <span className='lg:hidden'>
                  {item.label.substring(0, 1)}
                </span>
            </a>
              </p>
          })}
      </div>

      <div className="col-span-12 lg:col-span-9">
        <div className="flex flex-col content-evenly">

          {/* <!---About Me----> */}
          <section id="about-me" className={`px-14 md:px-24 py-6 min-h-screen flex flex-col align-middle justify-center transform transition hover:scale-[1.01] ${inActiveClass}`} data-selector="component">
            <div>
              <img src={profilePic} alt="Nikhil Malik" width="150"  height="150" className="rounded-full ring-2 ring-green-200 m-auto mb-8 lg:mb-14"/>
            </div>
            <div className="text-3xl lg:text-4xl text-opacity-40 leading-relaxed" data-description="about me">
              Hello, I am Nikhil, making difficult digital projects for humans easy to use.
            </div>
            <div className="py-8 pb-5 text-opacity-10 text-sm from-neutral-300" data-description="location">
              <span>based In</span>
              <a className="inline-block p-2 ml-2 border rounded-md shadow-sm cursor-pointer" href="https://www.google.com/maps?q=delhi%20india" target="_blank" rel="noreferrer">
                <MapPinIcon className="inline-block h-4 w-4 text-violet-600 mr-1"/>
                Delhi, India
              </a>
            </div>
            <span className="block border border-violet-300 border-opacity-50 w-10/12"></span>
          </section>

          {/* <!---Work----> */}
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

          {/* <!---Project Last----> */}
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

          {/* <!---Projects----> */}
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

          {/* <!---Technologies----> */}
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

          {/* <!---Bio----> */}
          <section id="bio" className={`px-14 md:px-24 py-6 lg:py-10 min-h-screen flex flex-col align-middle justify-center ${inActiveClass}`} data-selector="component">
            <p className='lg:hidden text-2xl text-violet-800 mb-4'>
              <span>
                Bio
              </span>
            </p>
          </section>

          {/* <!---Contact----> */}
          <section id="contact" className={`px-14 md:px-24 py-6 lg:py-10 min-h-screen flex flex-col align-middle justify-center ${inActiveClass}`} data-selector="component">
            <p className='lg:hidden text-2xl text-violet-800 mb-4'>
              <span>
                Contact
              </span>
            </p>

            <div className='flex flex-col md:items-end' data-description="contact">
            {contacts.map((contact) => (
                <div className={`flex flex-row items-center h-16 md:h-20 w-[${randomWidth()}%]`}>
                  {contact.logo &&
                    <img src={contact.logo} alt={contact.title} className='w-5 h-5 mr-2'/>
                  }
                  <p className='pb-1 pr-3 border-b border-r rounded-br-lg whitespace-nowrap text-xl md:text-2xl hover:text-violet-600'>
                    {contact.link &&
                      <a href={contact.link} target="_blank">
                        {contact.title}
                      </a>
                    }
                    {!contact.link &&
                      <span>
                        {contact.value}
                      </span>
                    }
                  </p>
                  <span className='inline-block w-full border-b'></span>
                </div>
            ))}
            </div>
          </section>


        </div>
      </div>
    </div>
  )
}
