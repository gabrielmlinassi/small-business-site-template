import dynamic from 'next/dynamic'
import { useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import Logo from './Logo'
import NavLink from './NavLink'
const Drawer = dynamic(() => import('./Drawer'))

function Navbar() {
  let [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function openDrawer() {
    setIsDrawerOpen(true)
  }

  function hideDrawer() {
    setIsDrawerOpen(false)
  }

  return (
    <nav className="my-container py-3">
      <div className="flex items-center justify-between">
        <Logo />
        <ul className="hidden space-x-14 sm:block">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/recipes">Recipes</NavLink>
          <NavLink href="/shop">Shop</NavLink>
        </ul>
        <div className="sm:hidden">
          <MenuIcon onClick={openDrawer} className="h-7 w-7" />
          <Drawer open={isDrawerOpen} onClose={hideDrawer} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
