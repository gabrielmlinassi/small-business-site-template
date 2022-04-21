import React, { useEffect, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

type SearchBarProps = {
  onSearch: (term: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    onSearch(searchTerm)
  }, [searchTerm, onSearch])

  return (
    <div className="mt-9 flex items-center border-b border-[#3A3A3A] border-opacity-50 pb-3">
      <input
        value={searchTerm}
        onChange={handleChange}
        className="w-full outline-none"
        placeholder="Search recipes..."
      />
      <SearchIcon className="h-5 w-5 text-[#9D9D9D]" />
    </div>
  )
}
