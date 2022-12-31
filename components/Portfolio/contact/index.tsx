import { FC } from 'react'
import Props from '../../types/inActiveClass'
import contacts from '../../../public/assets/json/contact.json'

export const Contact: FC<Props> = ({ inActiveClass }) : JSX.Element => {

  const randomWidth = () => {
    //postcss w-[40%] w-[45%] w-[50%] w-[55%] w-[60%] w-[65%] w-[70%] w-[75%] w-[80%] w-[85%] w-[90%] w-[95%] w-[100%]
    const widthArray = [70, 75, 80, 85, 90, 95, 100];
    return widthArray[Math.floor(Math.random() * widthArray.length)];
  };

  return (
    <section id="contact" className={`px-14 md:px-24 py-6 lg:py-10 min-h-screen flex flex-col align-middle justify-center ${inActiveClass}`} data-selector="component">
      <p className='lg:hidden text-2xl text-violet-800 mb-4'>
        <span>
          Contact
        </span>
      </p>

      <div className='flex flex-col md:items-end' data-description="contact">
      {contacts.map((contact) => (
          <div key={contact.title} className={`flex flex-row items-center h-16 md:h-20 w-[${randomWidth()}%]`}>
            {contact.logo &&
              <img src={contact.logo} alt={contact.title} className='w-5 h-5 mr-2'/>
            }
            <p className='pb-1 pr-3 border-b border-r rounded-br-lg whitespace-nowrap text-xl md:text-2xl hover:text-violet-600'>
              {contact.link &&
                <a href={contact.link} target="_blank" rel="noreferrer">
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
  )
}
