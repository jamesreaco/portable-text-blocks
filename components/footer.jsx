import Container from './container'

export default function Footer() {
  return (
    <div className='py-5'>
      <Container>
        <span className='antialiased text-sm'>
          An open source project by
        </span>
        <a 
          href="https://jamesrea.co"
          target="_blank"
          rel="noopener noreferrer"
          className='ml-1 antialiased text-sm text-green-300'
        >
          James Rea
        </a>
      </Container>
    </div>
  )
}
