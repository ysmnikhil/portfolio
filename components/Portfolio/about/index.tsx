import { MapPinIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import Props from '../../types/inActiveClass'

export const AboutMe: FC<Props> = ({ inActiveClass }) : JSX.Element => {

  const profilePic = 'assets/images/me.jpeg'

  return (
    <section id="about-me" className={`px-14 md:px-24 py-6 min-h-screen flex flex-col align-middle justify-center transform transition hover:scale-[1.01] ${inActiveClass}`} data-selector="component">
      <div>
        <img src={profilePic} alt="Nikhil Malik" width="150"  height="150" className="rounded-full ring-2 ring-green-200 m-auto mb-8 lg:mb-14"/>
      </div>
      <div className="text-3xl lg:text-4xl text-opacity-40 leading-relaxed" data-description="about me">
        Hello, I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600">Nikhil</span>, <span className="underline decoration-pink-500">Enthusiastic</span> Fullstack Software Engineer with a passion for creating <span className="underline decoration-pink-500">intuitive</span> and <span className="underline decoration-pink-500">user-friendly</span> applications.
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
  )
}
