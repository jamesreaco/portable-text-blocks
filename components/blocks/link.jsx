export default function PortableTextLink({ props, children }) {

  const { openNewTab, href } = props

  return (
    <>
      {openNewTab ? (
        <a  
          href={href} 
          target="_blank" 
          rel="noopener noreferer"
        >
          {children}
        </a> 
      ) : (
        <a href={href}>
          {children}
        </a>
      )}
    </>
  )
}
