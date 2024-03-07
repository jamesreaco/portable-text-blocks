import { MdLightbulbOutline } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";

export default function Callout({ props }) {

  const { heading, paragraph, intent } = props

  return (
    <div 
      className='my-5 flex flex-col md:flex-row items-start gap-5 p-10 text-white' 
      style={{ 
        backgroundColor: intent === 'tip' ? '#073e33' : '#6d2929' 
      }}
    >
      <div>
        {intent === 'tip' ? <MdLightbulbOutline size={30}/> : <IoMdAlert size={30}/>}
      </div>
      <div>
        <div className='text-lg md:text-xl font-medium'>
          {heading}
        </div>
        <div className='mt-1 antialiased text-white'>
          {paragraph}
        </div>
      </div>
    </div>
  )
}
