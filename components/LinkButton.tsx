import { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { ArrowIcon } from './icons/ArrowIcon'

type LinkButtonProps = {
  href: string
  className?: string
}

const LinkButton: FC<LinkButtonProps> = (props) => {
  const { children, href, className } = props
  return (
    <Link href={href} passHref>
      <a className={clsx('inline-flex items-center space-x-4', className)}>
        <span className="font-Poppins">{children}</span>
        <ArrowIcon />
      </a>
    </Link>
  )
}

export default LinkButton
