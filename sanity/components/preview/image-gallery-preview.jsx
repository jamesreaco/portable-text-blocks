import { Flex, Stack } from '@sanity/ui'
import { urlFor } from '@/sanity/lib/sanity.image'

export default function ImageGalleryPreview(props) {

  const { images, schemaType } = props
  const schemaTitle = schemaType.title

  const modifiedProps = { 
    ...props, 
    title: schemaTitle,
  }

  return (
    <Stack space={[1]}>
      <>
        {props.renderDefault(modifiedProps)}
      </>
      <Flex 
        style={{ 
          gap: '5px',
          overflowX: 'scroll'
        }}
      >
        {images?.map((image) => (
          <img
            key={image._ref}
            src={image.asset ? urlFor(image).url() : ''}
            style={{
              width: '400px',
              height: '200px',
              objectFit: 'cover',
            }}
            alt={image.alt}
          />
        ))}
      </Flex>
    </Stack>
  )
}