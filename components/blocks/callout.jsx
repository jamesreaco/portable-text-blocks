import { MdLightbulbOutline } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";

export default function Callout({ props }) {

  const { heading, paragraph, intent } = props

  return (
    <div 
      className='my-[20px] flex items-start gap-[20px] p-[40px] text-white' 
      style={{ 
        backgroundColor: intent === 'tip' ? '#073e33' : '#6d2929' 
      }}
    >
      <div>
        {intent === 'tip' ? <MdLightbulbOutline size={30}/> : <IoMdAlert size={30}/>}
      </div>
      <div>
        <div className='mt-[-2px] text-[18px] md:text-[22px] font-medium'>
          {heading}
        </div>
        <div className='mt-[4px] antialiased text-white'>
          {paragraph}
        </div>
      </div>
    </div>
  )
}
