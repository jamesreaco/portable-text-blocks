import { Box, Stack } from '@sanity/ui'
import { urlFor } from '@/sanity/lib/sanity.image'

export default function GifPreview(props) {

  const { gif, schemaType } = props
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
      <Box>
        <img
          key={gif?._ref}
          src={gif?.asset ? urlFor(gif).url() : ''}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
          alt={gif?.alt}
        />
      </Box>
    </Stack>
  )
}