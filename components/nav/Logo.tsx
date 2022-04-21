import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href="/">
      <a className="relative h-14 w-20 sm:h-20 sm:w-28">
        <Image
          src="/logo.png"
          alt="some description"
          layout="fill"
          objectFit="contain"
        />
      </a>
    </Link>
  )
}

export default Logo
