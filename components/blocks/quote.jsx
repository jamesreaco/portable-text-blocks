import { MdFormatQuote } from "react-icons/md";

export default function Quote({ props }) {

  const { 
    quote,
    author,
    backgroundColor, 
    theme, 
  } = props

  return (
    <div className='my-[40px] block mx-auto w-full'>
      <div 
        className='flex flex-col justify-center items-center p-[60px] bg-zinc-900 text-white' 
        style={{
          backgroundColor: backgroundColor
        }}
      >
        <div>
          <MdFormatQuote 
            size={40} 
            style={{
              color: theme === 'dark' ? 'white' : 'black',
            }}
          />
        </div>
        <div 
          className='mt-[12px] text-[20px] md:text-[24px] text-center' 
          style={{
            color: theme === 'dark' ? 'white' : 'black',
          }}
        >
          {quote}
        </div>
        <div 
          className='mt-[14px] antialiased text-center text-white' 
          style={{
            color: theme === 'dark' ? 'white' : 'black',
          }}
        >
          {author}
        </div>
      </div>
    </div>
  )
}
