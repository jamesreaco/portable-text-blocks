import { Flex, Heading, Stack, Text } from '@sanity/ui'

export default function QuotePreview(props) {

  const { 
    quote, 
    author, 
    backgroundColor, 
    theme, 
    schemaType
  } = props

  const schemaTitle = schemaType.title

  const modifiedProps = { 
    ...props, 
    title: schemaTitle,
    description: null 
  }

  return (
    <Stack space={[1]}>
      <>
        {props.renderDefault(modifiedProps)}
      </>
      <Flex
        justify="center"
        direction="column"
        align="center"
        gap={4}
        style={{
          padding: '60px 0',
          backgroundColor: `${backgroundColor}`
        }}
      >
        <Heading
          size={3}
          align="center"
          style={{ 
            maxWidth: '90%',
            color: theme === 'dark' ? 'white' : 'black',
          }}
        >
          {quote}
        </Heading>
        <Text 
          align="center"
          style={{
            color: theme === 'dark' ? 'white' : 'black',
          }}
        >
          {author}
        </Text>
      </Flex>
    </Stack>
  )
}