import { Heading, Stack, Text } from '@sanity/ui'
import { IoMdAlert } from 'react-icons/io'
import { MdLightbulbOutline } from 'react-icons/md'

export default function CalloutPreview(props) {

  const { 
    heading, 
    paragraph, 
    intent, 
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
      <Stack
        space={4}
        style={{
          padding: '40px',
          backgroundColor: intent === 'tip' ? '#073e33' : '#6d2929' 
        }}
      >
        <>
          {intent === 'tip' ? <MdLightbulbOutline size={30}/> : <IoMdAlert size={30}/>}
        </>
        <Heading size={3}>
          {heading}
        </Heading>
        <Text>
          {paragraph}
        </Text>
      </Stack>
    </Stack>
  )
}