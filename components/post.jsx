"use client"
import Link from 'next/link'
import { FiArrowUpRight } from "react-icons/fi";
import { PortableText } from '@portabletext/react'
import ImageGallery from './blocks/image-gallery'
import Quote from './blocks/quote'
import Quiz from './blocks/quiz'
import Gif from './blocks/gif'
import Callout from './blocks/callout';
import PortableTextLink from './blocks/link';

const typeSerializers = {
  imageGallery: ({ value }) => {
    return <ImageGallery props={value} />
  },
  quote: ({ value }) => {
    return <Quote props={value} />
  },
  quiz: ({ value }) => {
    return <Quiz props={value} />
  },
  gif: ({ value }) => {
    return <Gif props={value} />
  },
  callout: ({ value }) => {
    return <Callout props={value} />
  },
  link: ({ value }) => {
    return <Callout props={value} />
  },
}

const markSerializers = {
  link: ({ value, children }) => {
    return (
      <PortableTextLink props={value}>
        {children}
      </PortableTextLink>
    )
  },
}

export default function Post({ post }) {

  if (!post) return <NotFound />

  return (
    <>
      <h1 className='text-3xl md:text-4xl antialiased'>
        {post?.title}
      </h1>
      <div className='mt-6 antialiased pt-content'>
        <PortableText 
          value={post?.content} 
          components={{ 
            types: typeSerializers,
            marks: markSerializers
          }}
        />
      </div>
    </>
  )
}

function NotFound() {
  return (
    <div className='flex flex-col text-center antialiased'>
      <h1 className='text-3xl'>
        Post Not Found
      </h1>
      <Link 
        href="/"
        className='mx-auto flex items-center gap-2 mt-2 font-semibold group'
      >
        <span>Go Home</span> <FiArrowUpRight className='transition group-hover:rotate-45'/>
      </Link>
    </div>
  )
}
