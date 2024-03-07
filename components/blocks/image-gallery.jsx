import Image from 'next/image'
import { useState } from 'react'
import { urlFor } from '@/sanity/lib/sanity.image'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ImageGallery({ props }) {

  const [index, setIndex] = useState(0)
  
  const { images } = props
  let image = images[index]

  function handlePrevious(e) {
    e.stopPropagation()
    if (index === 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  function handleNext(e) {
    e.stopPropagation()
    if (index === images.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
 
  return (
    <div className='my-5'>
      <Image
        key={image._key}
        src={image.asset ? urlFor(image).url() : ''}
        width={800}
        height={400}
        alt={image.alt}
        className='h-[400px] object-cover'
      />
      <div className='w-full mt-4 flex items-center justify-between gap-3'>
        <div className='text-center'>
          {image.alt}
        </div>
        <div className='flex gap-4'>
          <button 
            onClick={(e) => handlePrevious(e)}
            className='p-3 bg-zinc-900 transition border border-zinc-900 hover:border-zinc-800'
          >
            <FiChevronLeft />
          </button>
          <button 
            onClick={(e) => handleNext(e)}
            className='p-3 bg-zinc-900 transition border border-zinc-900 hover:border-zinc-800'
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
