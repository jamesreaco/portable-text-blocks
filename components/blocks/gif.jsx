import Image from 'next/image'
import { urlFor } from '@/sanity/lib/sanity.image'

export default function Gif({ props }) {

  const { gif } = props
 
  return (
    <div className='my-5'>
      <Image
        key={gif?._key}
        src={gif?.asset ? urlFor(gif).url() : ''}
        width={800}
        height={800}
        alt={gif?.alt}
        className='h-auto object-cover'
      />
      <div className='mt-4'>
        <span>
          {gif?.alt ? gif.alt : ''}
        </span>
      </div>
    </div>
  )
}
