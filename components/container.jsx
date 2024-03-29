import { twMerge } from 'tailwind-merge'

export default function Container({ children, classNames }) {
  return (
    <div className={twMerge('max-w-3xl mx-auto px-5 md:px-10', classNames)}>
      {children}
    </div>
  )
}
