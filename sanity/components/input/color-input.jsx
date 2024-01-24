import { Box, Flex } from "@sanity/ui";

export default function ColorInput(props) {

  const color = props.value

  return (
    <Flex gap={4}>
      <Box style={{ flex: 1 }}>
        {props.renderDefault(props)}
      </Box>
      <Box style={{
        flex: 1,
        backgroundColor: color,
        borderRadius: '3px'
      }}/>
    </Flex>
  )
}