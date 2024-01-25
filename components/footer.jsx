import Container from './container'

export default function Footer() {
  return (
    <div className='py-[20px]'>
      <Container>
        <span className='antialiased text-[15px]'>
          An open source project by
        </span>
        <a 
          href="https://jamesrea.co"
          target="_blank"
          rel="noopener noreferrer"
          className='ml-[4px] antialiased text-[15px] text-green-300'
        >
          James Rea
        </a>
      </Container>
    </div>
  )
}
