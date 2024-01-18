import Image from 'next/image'
import { Flex } from '@sanity/ui'
import { urlFor } from '@/sanity/lib/sanity.image'

export default function ImageGalleryPreview(props) {

  const { images } = props

  return (
    <>
      {props.renderDefault(props)}
      <Flex 
        style={{ 
          marginTop: '5px',
          overflowX: 'scroll', 
          gap: '5px' 
        }}
      >
        {images?.map((image) => (
          <Image
            key={image._ref}
            src={image.asset ? urlFor(image).url() : ''}
            width={400}
            height={400}
            className='object-contain'
          />
        ))}
      </Flex>
    </>
  )
}