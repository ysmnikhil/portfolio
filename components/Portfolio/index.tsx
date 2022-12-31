import { Sidebar } from './sidebar'
import { AboutMe } from './about'
import { Work } from './work'
import { LastProject } from './last-project'
import { Projects } from './projects'
import { Technology } from './technology'
import { Bio } from './bio'
import { Contact } from './contact'
import { inActiveClass } from '../types/inActiveClass'

export default function Portfolio() {
  const inActiveClass:inActiveClass = ['opacity-60']
  return (
    <div className={`grid grid-flow-col grid-cols-12 bg-white pt-4 transition scroll-smooth`}>

      <Sidebar inActiveClass={inActiveClass}/>

      <div className="col-span-12 lg:col-span-9">
        <div className="flex flex-col content-evenly">

          <AboutMe inActiveClass={inActiveClass}/>
          <Work inActiveClass={inActiveClass} />
          <LastProject inActiveClass={inActiveClass} />
          <Projects inActiveClass={inActiveClass} />
          <Technology inActiveClass={inActiveClass} />
          <Bio inActiveClass={inActiveClass} />
          <Contact inActiveClass={inActiveClass} />

        </div>
      </div>
    </div>
  )
}
