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
    <div className='mt-[18px]'>
      <Image
        key={image._key}
        src={image.asset ? urlFor(image).url() : ''}
        width={800}
        height={400}
        alt={image.alt}
        className='h-[400px] object-cover'
      />
      <div className='w-full mt-[16px] flex items-center justify-between gap-[12px]'>
        <div className='text-center'>
          {image.alt}
        </div>
        <div className='flex gap-[16px]'>
          <button 
            onClick={(e) => handlePrevious(e)}
            className='p-[12px] border border-zinc-700 transition hover:bg-zinc-900'
          >
            <FiChevronLeft />
          </button>
          <button 
            onClick={(e) => handleNext(e)}
            className='p-[12px] border border-zinc-700 transition hover:bg-zinc-900'
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
