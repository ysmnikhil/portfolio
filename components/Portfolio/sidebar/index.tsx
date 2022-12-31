import { useEffect, useState, Suspense, lazy } from 'react'
import { useRouter } from 'next/router'
import { sideBar, SidebarLink } from './types'
import isElementInViewport from '../../../src/utils/isElementInViewport'
import Link from 'next/link';

export const Sidebar = ({ inActiveClass }) => {

  const router = useRouter();
  const prefixInCaseOfHash = '/'; //'#'
  var nIntervId;

  let asPath = router.asPath.replace('/', '');
  const [activeSection, setActiveSection] = useState('/about-us');

  useEffect(() => {
    // setActiveSection(prefixInCaseOfHash + asPath);
    const element = document.getElementById(asPath);
    if (element) {
      // element.scrollIntoView();
      window.scrollTo({ 
        top: element.offsetTop, 
        behavior: 'smooth'
      });
    }
  }, [asPath]);

  const activeLabel = 'border-violet-600 rounded-r-md bg-violet-600 text-white hover:text-violet-100 active-svg';

  const activateSidebarWithDelay = () => {
    if (!nIntervId) {
      nIntervId = setInterval(activateSidebar, 200);
    }
  }

  const activateSidebar = () => {
    const prefixInCaseOfHash = '/'; //'#'
    const activeClass= ["opacity-100"];
    const sections = document.querySelectorAll('[data-selector="component"]');

    sections.forEach((section) => {
      section.classList.remove(...activeClass);
      section.classList.add(...inActiveClass);
    })

    for(let i = 0; i < sections.length; i++) {
      if(isElementInViewport(sections[i])){

        // if('#' + sections[i].id != activeSection) {
          sections[i].classList.add(...activeClass);
          sections[i].classList.remove(...inActiveClass);
          setActiveSection(prefixInCaseOfHash + sections[i].id)
          // router.push(prefixInCaseOfHash + sections[i].id, undefined, { shallow: true }); 
        // }
        break;
      }
    }

    clearInterval(nIntervId);
    nIntervId = null;
  }

  useEffect(() => {
    activateSidebar();
    window.addEventListener('scroll', activateSidebarWithDelay, { passive: true });

    return () => {
      window.addEventListener('scroll', activateSidebarWithDelay);
    }
  }, []);

  return (
    <>
    <div className="col-span-3 hidden lg:block"></div>
      
      {/* <!---Sidebar----> */}
      <div className="col-span-3 fixed left-0 top-0 bottom-0 pt-[10%] pr-[10%] z-10" aria-label="Global">
          {sideBar.map((item: SidebarLink) => {
            //https://github.com/facebook/react/issues/16132
            // const IconLazy = lazy(() => import(`@heroicons/react/20/solid/${item.component}.js`));

            return <p key={item.label} className={`h-[10%] min-h-[48px]`}> 
              <Link href={item.href} className={`inline-flex items-center font-medium text-xl h-full px-4 lg:pl-10 ${activeSection == item.href ? activeLabel : 'hover:text-violet-600'}`} key={item.label}>
                {/* onClick={() => setActiveSection(item.href)}> */}
                  {/* <Suspense> */}
                    {/* <IconLazy className={`inline-block lg:hidden h-4 w-4 mr-1 ${activeSection == item.href ? activeIcon : 'hover:text-violet-600'}`}/> */}
                  {/* </Suspense> */}
                  <span className='hidden lg:inline-block'>
                    {item.label}
                  </span>
                  <span className='lg:hidden'>
                    <img src={item.icon} alt={item.icon} className={`inline-block lg:hidden h-4 w-4 mr-1 hover:hover-svg`}/>
                    {/* {item.label.substring(0, 1)} */}
                  </span>
              </Link>
            </p>
          })}
      </div>
    </>
  )
}
