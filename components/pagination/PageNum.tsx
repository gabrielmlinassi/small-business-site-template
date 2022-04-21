import clsx from 'clsx'
import { FC } from 'react'

type PageNumProps = {
  active: boolean
  onClick: () => void
}

const PageNum: FC<PageNumProps> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex px-[15px] py-[6px] font-Belleza text-xl',
        active ? 'bg-[#4D5D43] text-white' : 'bg-transparent text-[#4d5d43]'
      )}
    >
      {children}
    </button>
  )
}

export default PageNum
