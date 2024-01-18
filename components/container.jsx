import { twMerge } from 'tailwind-merge'

export default function Container({ children, classNames }) {
  return (
    <div className={twMerge('max-w-3xl mx-auto px-[20px] md:px-[40px]', classNames)}>
      {children}
    </div>
  )
}
