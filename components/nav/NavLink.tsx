import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

type NavLink = {
  href: string
  children: React.ReactNode
}

function NavLink({ children, href }: NavLink) {
  const router = useRouter()
  const active = `/${router.pathname.split('/')[1]}` === href

  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          'font-Belleza text-xl duration-200 hover:text-[#ECD689]',
          active ? 'text-[#ECD689]' : 'text-[#3A3A3A]'
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
