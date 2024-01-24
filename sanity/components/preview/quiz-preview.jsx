import { Flex, Heading, Stack, Text } from '@sanity/ui'
import { FaCircleCheck } from "react-icons/fa6";

export default function QuizPreview(props) {

  const { 
    question, 
    answers, 
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
        direction="column"
        gap={4}
        style={{ 
          padding: '20px 15px',
          backgroundColor: '#191a23',
        }}
      >
        <Heading
          size={2}
          style={{ maxWidth: '90%' }}
        >
          {question}
        </Heading>
        <Stack
          space={2}
        >
          {answers?.map((answer) => (
            <Text 
              key={answer.text}
              style={{
                width: '100%',
                position: 'relative',
                padding: '25px 15px 15px 15px',
                backgroundColor: '#1d1e28',
              }}
            >
              <span>
                {answer.text} 
              </span>
              <>
                {answer.isCorrect && (
                  <FaCircleCheck style={{
                    position: 'absolute',
                    top: '18px',
                    right: '18px',
                    color: 'green',
                    fontSize: '20px',
                    color: '#72D673',
                  }}/>
                )}
              </>
            </Text>
          ))}
        </Stack>
      </Flex>
    </Stack>
  )
}