import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { PlusSmIcon, MinusSmIcon } from '@heroicons/react/outline'

export default function Filters() {
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  function toggleFilter() {
    setIsFilterVisible((isFilterVisible) => !isFilterVisible)
  }

  return (
    <div className="mt-6">
      <div
        onClick={toggleFilter}
        className="flex items-center justify-between border-b border-[#3A3A3A] py-3"
      >
        <div className="font-semibold text-[#3A3A3A]">Filter recipes</div>
        {isFilterVisible ? (
          <MinusSmIcon className="h-5 w-5 text-[#3A3A3A]" />
        ) : (
          <PlusSmIcon className="h-5 w-5 text-[#3A3A3A]" />
        )}
      </div>
      {isFilterVisible && (
        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between border-b border-[#3A3A3A] py-3 font-Belleza">
                  <span>Meal Type</span>
                  {open ? (
                    <MinusSmIcon className="h-5 w-5 text-[#3A3A3A]" />
                  ) : (
                    <PlusSmIcon className="h-5 w-5 text-[#3A3A3A]" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel>Meal types...</Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between border-b border-[#3A3A3A] py-2 font-Belleza">
                  <span>Diet-specific</span>
                  {open ? (
                    <MinusSmIcon className="h-5 w-5 text-[#3A3A3A]" />
                  ) : (
                    <PlusSmIcon className="h-5 w-5 text-[#3A3A3A]" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel>Diet-specific types...</Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between border-b border-[#3A3A3A] py-2 font-Belleza">
                  <span>Cuisime</span>
                  {open ? (
                    <MinusSmIcon className="h-5 w-5 text-[#3A3A3A]" />
                  ) : (
                    <PlusSmIcon className="h-5 w-5 text-[#3A3A3A]" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel>Cuisime types...</Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      )}
    </div>
  )
}
