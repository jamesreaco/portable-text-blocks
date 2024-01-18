"use client"
import { PortableText } from '@portabletext/react'
import ImageGallery from './blocks/image-gallery'

const serializers = {
  imageGallery: ({ value }) => {
    const { images } = value
    return (
      <ImageGallery images={images} />
    )
  },
}

export default function Post({ post }) {
  return (
    <>
      <h1 className='text-[38px]'>
        {post.title}
      </h1>
      <div className='mt-[40px]'>
        <PortableText 
          value={post.content} 
          components={{ types: serializers }}
        />
      </div>
    </>
  )
}
