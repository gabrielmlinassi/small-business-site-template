import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Logo from './Logo'
import NavLink from './NavLink'

type DrawerProps = {
  open: boolean
  onClose: () => void
}

function Drawer({ open, onClose }: DrawerProps) {
  return (
    <Transition
      as={Fragment}
      show={open}
      enter="ease-out duration-300"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="ease-in duration-200"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <Dialog onClose={onClose} className="fixed inset-0 z-20 bg-white">
        <div className="px-6">
          <div className="mt-8 flex items-center justify-between">
            <Logo />
            <XIcon onClick={onClose} className="h-7 w-7 text-[#3A3A3A]" />
          </div>
          <div className="mt-16 flex flex-col space-y-6 text-center font-Belleza text-xl text-white">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/recipes">Recipes</NavLink>
            <NavLink href="/shop">Shop</NavLink>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Drawer
