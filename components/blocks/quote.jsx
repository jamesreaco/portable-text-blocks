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
          style={{ 
            color: theme === 'dark' ? 'white' : 'black' 
          }}
        />
      </div>
      <div 
        className='mt-2 text-xl md:text-2xl text-center' 
        style={{ 
          color: theme === 'dark' ? 'white' : 'black' 
        }}
      >
        {quote}
      </div>
      <div 
        className='mt-3.5 antialiased text-center text-white' 
        style={{
          color: theme === 'dark' ? 'white' : 'black',
        }}
      >
        {author}
      </div>
    </div>
  )
}
