import { cn } from "@/lib/utils";
import { MdFormatQuote } from "react-icons/md";

export default function Quote({ props }) {

  const { 
    quote,
    author,
    backgroundColor, 
    theme, 
  } = props

  return (
    <div 
      className='my-5 flex flex-col justify-center items-center p-14 bg-zinc-900 text-white' 
      style={{ 
        backgroundColor: backgroundColor 
      }}
    >
      <div>
        <MdFormatQuote 
          size={40} 
          className={cn('text-black', {
            'text-white': theme === 'dark'
          })}
        />
      </div>
      <div 
        className={cn('mt-2 text-xl md:text-2xl text-center text-black', {
          'text-white': theme === 'dark'
        })} 
      >
        {quote}
      </div>
      <div 
        className={cn('mt-3.5 antialiased text-center text-white', {
          'text-white': theme === 'dark'
        })} 
      >
        {author}
      </div>
    </div>
  )
}
